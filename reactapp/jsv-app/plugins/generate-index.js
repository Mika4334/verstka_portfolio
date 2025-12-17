// plugins/generate-index.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, '../src/components');
const indexPath = path.join(componentsDir, 'index.js');
const cachePath = path.join(__dirname, '.generate-index-cache.json');

if (!fs.existsSync(componentsDir)) {
    console.error(`❌ Папка не найдена: ${componentsDir}`);
    process.exit(1);
}

console.log(`📦 Генерация экспортов...`);

// Функция для получения named exports из файла
function getNamedExports(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const exports = [];

        // Ищем export { a, b, c }
        const exportRegex = /export\s+{([^}]+)}/g;
        let match;

        while ((match = exportRegex.exec(content)) !== null) {
            match[1].split(',').forEach(item => {
                const name = item.trim().split(/\s+as\s+/)[0];
                if (name && name !== 'default') exports.push(name);
            });
        }

        // Ищем отдельные named exports
        const namedExportRegex = /export\s+(?:const|let|var|function|class)\s+(\w+)/g;
        while ((match = namedExportRegex.exec(content)) !== null) {
            exports.push(match[1]);
        }

        return [...new Set(exports)];
    } catch (error) {
        return [];
    }
}

// Сканируем файлы
const components = [];

function scanDir(dir) {
    fs.readdirSync(dir).forEach(item => {
        if (item.startsWith('.') || item === 'node_modules') return;

        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanDir(fullPath);
        } else if (item.endsWith('.jsx') && item !== 'index.jsx') {
            const relativePath = path.relative(componentsDir, fullPath);
            const namedExports = getNamedExports(fullPath);

            if (namedExports.length > 0) {
                components.push({
                    name: item.replace('.jsx', ''),
                    path: relativePath,
                    namedExports,
                    fullPath
                });
            }
        }
    });
}

scanDir(componentsDir);

if (components.length === 0) {
    console.log('❌ Компоненты не найдены');
    process.exit(1);
}

// Сортируем по алфавиту
components.sort((a, b) => a.name.localeCompare(b.name));

// Собираем ВСЕ экспорты
const allExports = [];
components.forEach(comp => {
    allExports.push(...comp.namedExports);
});

const uniqueExports = [...new Set(allExports)].sort();

// Создаем хеш
const currentHash = crypto.createHash('md5')
    .update(JSON.stringify(components.map(c => ({
        path: c.path,
        exports: c.namedExports
    }))))
    .digest('hex');

let cache = {};
try {
    if (fs.existsSync(cachePath)) {
        cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    }
} catch (error) { }

// Проверяем изменения
const lastHash = cache.lastHash;
const lastCount = cache.lastExportCount || 0;

// Формируем компактные комментарии с импортами (ПОПРАВЛЕНО: относительные пути от корня)
let importComments = '';

components.forEach(comp => {
    const importPath = './components/' + comp.path.replace(/\\/g, '/').replace(/\.jsx$/, '');

    // Импорты для каждого экспорта (ПОПРАВЛЕНО)
    comp.namedExports.forEach(exp => {
        importComments += `// import { ${exp} } from '${importPath}';\n`;
    });
});

if (lastHash === currentHash && lastCount === uniqueExports.length) {
    console.log('✅ Актуально');

    // Компактный вывод
    const exportList = uniqueExports.length > 10
        ? `${uniqueExports.slice(0, 10).join(', ')}... (+${uniqueExports.length - 10})`
        : uniqueExports.join(', ');

    console.log(`📦 ${components.length} файлов, ${uniqueExports.length} экспортов:`);
    console.log(exportList);
    console.log('\n' + importComments.trim());
    process.exit(0);
}

// Создаем index.js
let content = `// 🚀 АВТОГЕНЕРИРОВАННЫЕ ИМПОРТЫ
// ${new Date().toLocaleString('ru-RU').replace(',', '')}
// Файлов: ${components.length}, Экспортов: ${uniqueExports.length}
// Хеш: ${currentHash.slice(0, 8)}
//

${importComments}
// 🔥 ЭКСПОРТЫ ДЛЯ index.js:
// (Не редактировать вручную!)
//

`;

// Добавляем экспорты (ПОПРАВЛЕНО: относительные пути от корня)
components.forEach(comp => {
    const importPath = './' + comp.path.replace(/\\/g, '/').replace(/\.jsx$/, '');

    // Named exports
    comp.namedExports.forEach(exp => {
        content += `export { ${exp} } from '${importPath}';\n`;
    });
});

// Проверяем существующий файл
if (fs.existsSync(indexPath)) {
    try {
        const old = fs.readFileSync(indexPath, 'utf8');
        if (old === content) {
            console.log('📝 Изменений нет, обновляю кэш');

            cache.lastHash = currentHash;
            cache.lastExportCount = uniqueExports.length;
            cache.lastUpdate = new Date().toISOString();

            try {
                fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
            } catch (error) { }

            // Компактный вывод
            const exportList = uniqueExports.length > 10
                ? `${uniqueExports.slice(0, 10).join(', ')}... (+${uniqueExports.length - 10})`
                : uniqueExports.join(', ');

            console.log(`📦 ${components.length} файлов, ${uniqueExports.length} экспортов:`);
            console.log(exportList);
            console.log('\n' + importComments.trim());
            process.exit(0);
        }
    } catch (error) { }
}

// Сохраняем
fs.writeFileSync(indexPath, content, 'utf8');

// Обновляем кэш
cache.lastHash = currentHash;
cache.lastExportCount = uniqueExports.length;
cache.lastUpdate = new Date().toISOString();

try {
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
} catch (error) { }

// Вывод
console.log(`✅ Обновлено (${components.length} файлов, ${uniqueExports.length} экспортов)`);

// Компактный вывод списка экспортов
const exportList = uniqueExports.length > 10
    ? `${uniqueExports.slice(0, 10).join(', ')}... (+${uniqueExports.length - 10})`
    : uniqueExports.join(', ');

console.log(`📋 Экспорты: ${exportList}`);
console.log('\n' + importComments.trim());

if (lastHash) {
    const diff = uniqueExports.length - lastCount;
    if (diff > 0) console.log(`🆕 +${diff} экспортов`);
    else if (diff < 0) console.log(`🗑️  ${diff} экспортов`);
}


// // plugins/generate-index.js
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import crypto from 'crypto';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const componentsDir = path.resolve(__dirname, '../src/components');
// const indexPath = path.join(componentsDir, 'index.js');
// const cachePath = path.join(__dirname, '.generate-index-cache.json');

// if (!fs.existsSync(componentsDir)) {
//     console.error(`❌ Папка не найдена: ${componentsDir}`);
//     process.exit(1);
// }

// console.log(`📦 Генерация экспортов...`);

// // Функция для получения named exports из файла
// function getNamedExports(filePath) {
//     try {
//         const content = fs.readFileSync(filePath, 'utf8');
//         const exports = [];

//         // Ищем export { a, b, c }
//         const exportRegex = /export\s+{([^}]+)}/g;
//         let match;

//         while ((match = exportRegex.exec(content)) !== null) {
//             match[1].split(',').forEach(item => {
//                 const name = item.trim().split(/\s+as\s+/)[0];
//                 if (name && name !== 'default') exports.push(name);
//             });
//         }

//         // Ищем отдельные named exports
//         const namedExportRegex = /export\s+(?:const|let|var|function|class)\s+(\w+)/g;
//         while ((match = namedExportRegex.exec(content)) !== null) {
//             exports.push(match[1]);
//         }

//         return [...new Set(exports)];
//     } catch (error) {
//         return [];
//     }
// }

// // Сканируем файлы
// const components = [];

// function scanDir(dir) {
//     fs.readdirSync(dir).forEach(item => {
//         if (item.startsWith('.') || item === 'node_modules') return;

//         const fullPath = path.join(dir, item);
//         const stat = fs.statSync(fullPath);

//         if (stat.isDirectory()) {
//             scanDir(fullPath);
//         } else if (item.endsWith('.jsx') && item !== 'index.jsx') {
//             const relativePath = path.relative(componentsDir, fullPath);
//             const namedExports = getNamedExports(fullPath);

//             if (namedExports.length > 0) {
//                 components.push({
//                     name: item.replace('.jsx', ''),
//                     path: relativePath,
//                     namedExports,
//                     fullPath
//                 });
//             }
//         }
//     });
// }

// scanDir(componentsDir);

// if (components.length === 0) {
//     console.log('❌ Компоненты не найдены');
//     process.exit(1);
// }

// // Сортируем по алфавиту
// components.sort((a, b) => a.name.localeCompare(b.name));

// // Собираем ВСЕ экспорты
// const allExports = [];
// components.forEach(comp => {
//     allExports.push(...comp.namedExports);
// });

// const uniqueExports = [...new Set(allExports)].sort();

// // Создаем хеш
// const currentHash = crypto.createHash('md5')
//     .update(JSON.stringify(components.map(c => ({
//         path: c.path,
//         exports: c.namedExports
//     }))))
//     .digest('hex');

// let cache = {};
// try {
//     if (fs.existsSync(cachePath)) {
//         cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
//     }
// } catch (error) { }

// // Проверяем изменения
// const lastHash = cache.lastHash;
// const lastCount = cache.lastExportCount || 0;

// // Формируем компактные комментарии с импортами
// let importComments = '';

// components.forEach(comp => {
//     const importPath = './' + comp.path.replace(/\\/g, '/').replace(/\.jsx$/, '');

//     // Импорты для каждого экспорта
//     comp.namedExports.forEach(exp => {
//         importComments += `// import { ${exp} } from '${importPath}';\n`;
//     });
// });

// if (lastHash === currentHash && lastCount === uniqueExports.length) {
//     console.log('✅ Актуально');

//     // Компактный вывод
//     const exportList = uniqueExports.length > 10
//         ? `${uniqueExports.slice(0, 10).join(', ')}... (+${uniqueExports.length - 10})`
//         : uniqueExports.join(', ');

//     console.log(`📦 ${components.length} файлов, ${uniqueExports.length} экспортов:`);
//     console.log(exportList);
//     console.log('\n' + importComments.trim());
//     process.exit(0);
// }

// // Создаем index.js
// let content = `// 🚀 АВТОГЕНЕРИРОВАННЫЕ ИМПОРТЫ
// // ${new Date().toLocaleString('ru-RU').replace(',', '')}
// // Файлов: ${components.length}, Экспортов: ${uniqueExports.length}
// // Хеш: ${currentHash.slice(0, 8)}
// //

// ${importComments}
// // 🔥 ЭКСПОРТЫ ДЛЯ index.js:
// // (Не редактировать вручную!)
// //

// `;

// // Добавляем экспорты
// components.forEach(comp => {
//     const importPath = './' + comp.path.replace(/\\/g, '/').replace(/\.jsx$/, '');

//     // Named exports
//     comp.namedExports.forEach(exp => {
//         content += `export { ${exp} } from '${importPath}';\n`;
//     });
// });

// // Проверяем существующий файл
// if (fs.existsSync(indexPath)) {
//     try {
//         const old = fs.readFileSync(indexPath, 'utf8');
//         if (old === content) {
//             console.log('📝 Изменений нет, обновляю кэш');

//             cache.lastHash = currentHash;
//             cache.lastExportCount = uniqueExports.length;
//             cache.lastUpdate = new Date().toISOString();

//             try {
//                 fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
//             } catch (error) { }

//             // Компактный вывод
//             const exportList = uniqueExports.length > 10
//                 ? `${uniqueExports.slice(0, 10).join(', ')}... (+${uniqueExports.length - 10})`
//                 : uniqueExports.join(', ');

//             console.log(`📦 ${components.length} файлов, ${uniqueExports.length} экспортов:`);
//             console.log(exportList);
//             console.log('\n' + importComments.trim());
//             process.exit(0);
//         }
//     } catch (error) { }
// }

// // Сохраняем
// fs.writeFileSync(indexPath, content, 'utf8');

// // Обновляем кэш
// cache.lastHash = currentHash;
// cache.lastExportCount = uniqueExports.length;
// cache.lastUpdate = new Date().toISOString();

// try {
//     fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
// } catch (error) { }

// // Вывод
// console.log(`✅ Обновлено (${components.length} файлов, ${uniqueExports.length} экспортов)`);

// // Компактный вывод списка экспортов
// const exportList = uniqueExports.length > 10
//     ? `${uniqueExports.slice(0, 10).join(', ')}... (+${uniqueExports.length - 10})`
//     : uniqueExports.join(', ');

// console.log(`📋 Экспорты: ${exportList}`);
// console.log('\n' + importComments.trim());

// if (lastHash) {
//     const diff = uniqueExports.length - lastCount;
//     if (diff > 0) console.log(`🆕 +${diff} экспортов`);
//     else if (diff < 0) console.log(`🗑️  ${diff} экспортов`);
// }

