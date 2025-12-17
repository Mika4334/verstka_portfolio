// plugins/prereload.js
import fs from 'fs';
import path from 'path';

export default function preReloadPlugin() {
    let isRunning = false;
    let lastRunTime = 0;
    const cooldownMs = 1000; // Минимальное время между запусками
    const indexPath = path.resolve('./src/components/index.js');

    // Проверяем, действительно ли нужно генерировать
    const shouldGenerate = () => {
        // Проверяем, не запущено ли уже
        if (isRunning) return false;

        // Проверяем кулдаун
        const now = Date.now();
        if (now - lastRunTime < cooldownMs) {
            console.log('⏳ Слишком часто, пропускаю...');
            return false;
        }

        return true;
    };

    const generate = () => {
        if (!shouldGenerate()) return;

        isRunning = true;
        lastRunTime = Date.now();

        console.log('🔍 Проверяю изменения компонентов...');

        try {
            const startTime = Date.now();
            const output = require('child_process').execSync(
                'node ./plugins/generate-index.js',
                { stdio: 'pipe', encoding: 'utf8', maxBuffer: 1024 * 1024 }
            );

            const duration = Date.now() - startTime;

            // Парсим вывод скрипта
            if (output.includes('не изменилась') || output.includes('уже актуален') || output.includes('не перезаписывается')) {
                console.log(`✅ ${duration}ms - Изменений нет`);
            } else if (output.includes('Создан') || output.includes('обновляю')) {
                console.log(`✨ ${duration}ms - Index обновлен`);
            } else {
                console.log(`⚡ ${duration}ms - Готово`);
            }
        } catch (error) {
            console.error('❌ Ошибка:', error.message);
        } finally {
            setTimeout(() => { isRunning = false; }, 300);
        }
    };

    return {
        name: 'prereload-plugin',

        configureServer(server) {
            // Отписываемся от index.js
            if (fs.existsSync(indexPath)) {
                server.watcher.unwatch(indexPath);
            }

            // Запускаем при старте
            setTimeout(generate, 500);

            // Слушаем изменения
            server.watcher.on('change', (file) => {
                if (file.includes('/src/components/') &&
                    file.match(/\.(jsx|js)$/) &&
                    !file.includes('index.js')) {

                    // Небольшая задержка для дебаунса
                    setTimeout(generate, 50);
                }
            });
        }
    };
}


// // plugins/prereload.js
// import fs from 'fs';
// import path from 'path';

// export default function preReloadPlugin() {
//     let isRunning = false;
//     const indexPath = path.resolve('./src/components/index.js');

//     // Функция генерации
//     const generate = () => {
//         if (isRunning) return;
//         isRunning = true;

//         console.log('🔄 Обновление индекса компонентов...');

//         try {
//             const start = Date.now();
//             require('child_process').execSync(
//                 'node ./plugins/generate-index.js',
//                 { stdio: 'pipe', encoding: 'utf8' }
//             );
//             console.log(`✅ Готово за ${Date.now() - start}ms`);
//         } catch (error) {
//             // Тихие ошибки
//         } finally {
//             setTimeout(() => { isRunning = false; }, 100);
//         }
//     };

//     return {
//         name: 'prereload-plugin',

//         configureServer(server) {
//             // Важно: отписываемся от изменений index.js
//             if (fs.existsSync(indexPath)) {
//                 server.watcher.unwatch(indexPath);
//             }

//             // Генерация при старте
//             setTimeout(generate, 500);

//             // Перехватываем изменения КАК МОЖНО РАНЬШЕ
//             server.watcher.on('change', (file) => {
//                 // Только наши компоненты
//                 if (file.includes('/src/components/') &&
//                     file.match(/\.(jsx|js)$/) &&
//                     !file.includes('index.js')) {

//                     // Запускаем СРАЗУ после сохранения файла
//                     generate();
//                 }
//             });
//         },

//         // На всякий случай - обработка HMR
//         handleHotUpdate(ctx) {
//             // Если HMR уже начался, но index еще не обновлен
//             if (!isRunning && ctx.file.includes('/src/components/')) {
//                 console.log('⚡ HMR обнаружен, ускоряю генерацию...');
//                 setTimeout(generate, 10);
//             }
//             return ctx.modules;
//         }
//     };
// }
