// // Собираем все элементы через querySelectorAll
// const leftButtons = document.querySelectorAll('#left_button, #bottom_left_button');
// const rightButtons = document.querySelectorAll('#right_button, #bottom_right_button');
// const idCurrents = document.querySelectorAll('#current_number'); // Все элементы для текущего номера
// const idLasts = document.querySelectorAll('#last_number'); // Все элементы для общего количества
// const carusel_items = document.getElementById('carusel_items');
// const profile_card = document.getElementById('profile_card');

// const CONFIG = {
//     transition: 'transform 0.5s ease',
//     breakpoint: 850
// };

// // Получаем общее количество элементов
// const totalItems = carusel_items.children.length;
// let currentIndex = 0;
// let stepMultiplier = 1; // Множитель шага

// carusel_items.style.transition = CONFIG.transition;
// let currentPosition = 0;
// let stepSize = 0;

// // Добавляем обработчики для всех кнопок
// leftButtons.forEach(btn => btn?.addEventListener('click', () => moveCarousel(-1)));
// rightButtons.forEach(btn => btn?.addEventListener('click', () => moveCarousel(1)));

// // Устанавливаем общее количество карточек для всех элементов
// idLasts.forEach(el => {
//     el.innerHTML = totalItems;
// });
// updateCounter(); // Обновляем счетчик при инициализации

// // Получаем gap из CSS
// function getCarouselGap() {
//     const style = getComputedStyle(carusel_items);
//     const gap = parseFloat(style.gap) || 0;
//     return gap;
// }

// // Определяем множитель шага в зависимости от ширины экрана
// function getStepMultiplier() {
//     const screenWidth = window.innerWidth;
//     return screenWidth > CONFIG.breakpoint ? 3 : 1;
// }

// // Рассчитываем размер шага
// function calculateStepSize() {
//     if (!profile_card) {
//         console.error('Profile card element not found');
//         return;
//     }

//     const cardWidth = profile_card.getBoundingClientRect().width;
//     const gap = getCarouselGap();
//     stepSize = cardWidth + gap;
//     stepMultiplier = getStepMultiplier();
// }

// // Функция для обновления счетчика
// function updateCounter() {
//     const visibleCount = stepMultiplier; // Количество видимых элементов
//     const startNumber = currentIndex + 1; // Первый видимый элемент

//     // Обновляем все элементы current_number
//     idCurrents.forEach(el => {
//         if (stepMultiplier > 1) {
//             // Широкое окно: показываем последний видимый элемент
//             const endNumber = Math.min(currentIndex + stepMultiplier, totalItems);
//             el.innerHTML = endNumber;
//         } else {
//             // Узкое окно: показываем текущий элемент
//             el.innerHTML = startNumber;
//         }
//     });
// }

// function updateButtons() {
//     const canGoLeft = currentIndex > 0;
//     const canGoRight = currentIndex < totalItems - stepMultiplier;

//     leftButtons.forEach(btn => btn.disabled = !canGoLeft);
//     rightButtons.forEach(btn => btn.disabled = !canGoRight);
// }

// function moveCarousel(direction) {
//     if (stepSize === 0) {
//         calculateStepSize();
//     }

//     // Обновляем индекс с учетом множителя
//     currentIndex += direction * stepMultiplier;

//     // Ограничиваем индекс
//     currentIndex = Math.max(0, Math.min(totalItems - stepMultiplier, currentIndex));

//     // Рассчитываем новую позицию
//     currentPosition = -currentIndex * stepSize;

//     // Применяем трансформацию
//     carusel_items.style.transform = `translateX(${currentPosition}px)`;

//     // Обновляем счетчик
//     updateCounter();
//     updateButtons();

//     console.log(`Index: ${currentIndex}, Multiplier: ${stepMultiplier}, Position: ${currentPosition}px`);
// }

// // Автоматическое обновление при изменении размера
// const resizeObserver = new ResizeObserver(() => {
//     const oldMultiplier = stepMultiplier;
//     calculateStepSize();

//     // Если множитель изменился, корректируем позицию
//     if (oldMultiplier !== stepMultiplier) {
//         currentIndex = Math.max(0, Math.min(totalItems - stepMultiplier, currentIndex));
//         currentPosition = -currentIndex * stepSize;
//         carusel_items.style.transform = `translateX(${currentPosition}px)`;
//         updateCounter(); // Обновляем счетчик при изменении размера
//     }

//     updateButtons();
// });

// // Следим за изменением размера окна
// window.addEventListener('resize', () => {
//     const oldMultiplier = stepMultiplier;
//     calculateStepSize();

//     if (oldMultiplier !== stepMultiplier) {
//         currentIndex = Math.max(0, Math.min(totalItems - stepMultiplier, currentIndex));
//         currentPosition = -currentIndex * stepSize;
//         carusel_items.style.transform = `translateX(${currentPosition}px)`;
//         updateCounter(); // Обновляем счетчик при изменении размера
//         updateButtons();
//     }
// });

// if (carusel_items.parentElement) {
//     resizeObserver.observe(carusel_items.parentElement);
// }

// // Инициализация
// calculateStepSize();
// updateCounter();
// updateButtons();




// class UniversalCarousel {
//     constructor(config) {
//         // Сохраняем конфиг
//         this.config = config;

//         // Собираем элементы с проверкой
//         this.leftButtons = this.getElements(config.leftButtons);
//         this.rightButtons = this.getElements(config.rightButtons);
//         this.idCurrents = this.getElements(config.currentNumberElements);
//         this.idLasts = this.getElements(config.lastNumberElements);
//         this.carusel_items = this.getElement(config.carouselItems);

//         // Указываем конкретный элемент для измерения ширины
//         this.profile_card = this.getElement(config.profileCard);

//         // Проверяем наличие radio кнопок
//         this.radioButtons = config.radioButtons ? this.getElements(config.radioButtons) : [];

//         // Настройки
//         this.CONFIG = {
//             transition: config.transition || 'transform 0.5s ease',
//             breakpoint: config.breakpoint || 850,
//             itemsPerViewWide: config.itemsPerViewWide || 3,
//             itemsPerViewNarrow: config.itemsPerViewNarrow || 1,
//             customStepSize: config.customStepSize || null
//         };

//         // Проверяем обязательные элементы
//         if (!this.carusel_items) {
//             console.error('Carousel items container not found:', config.carouselItems);
//             return;
//         }

//         if (!this.profile_card && !this.CONFIG.customStepSize) {
//             console.error('Profile card element not found and no custom step size provided:', config.profileCard);
//             return;
//         }

//         // Инициализация
//         this.totalItems = this.carusel_items.children.length;
//         this.currentIndex = 0;
//         this.stepMultiplier = 1;
//         this.currentPosition = 0;
//         this.stepSize = 0;

//         this.init();
//     }

//     // Вспомогательные методы для безопасного получения элементов
//     getElement(selector) {
//         if (!selector) return null;
//         const element = document.querySelector(selector);
//         if (!element) {
//             console.warn('Element not found:', selector);
//         }
//         return element;
//     }

//     getElements(selector) {
//         if (!selector) return [];
//         const elements = document.querySelectorAll(selector);
//         if (elements.length === 0) {
//             console.warn('Elements not found:', selector);
//         }
//         return elements;
//     }

//     init() {
//         // Устанавливаем transition
//         this.carusel_items.style.transition = this.CONFIG.transition;

//         // Добавляем обработчики для кнопок навигации (если они есть)
//         this.leftButtons.forEach(btn => btn?.addEventListener('click', () => this.moveCarousel(-1)));
//         this.rightButtons.forEach(btn => btn?.addEventListener('click', () => this.moveCarousel(1)));

//         // Добавляем обработчики для radio кнопок (если они есть)
//         if (this.radioButtons.length > 0) {
//             this.radioButtons.forEach((radio, index) => {
//                 radio?.addEventListener('click', () => this.goToSlide(index));
//             });
//         }

//         // Устанавливаем общее количество карточек (если есть элементы для отображения)
//         if (this.idLasts.length > 0) {
//             this.idLasts.forEach(el => {
//                 el.innerHTML = this.totalItems;
//             });
//         }

//         // Инициализация
//         this.calculateStepSize();
//         this.updateCounter(); // Обновляем только если есть элементы
//         this.updateButtons(); // Обновляем только если есть кнопки
//         this.updateRadioButtons(); // Обновляем только если есть radio кнопки

//         // Ресайз обработчик
//         window.addEventListener('resize', () => this.handleResize());
//     }

//     getCarouselGap() {
//         const style = getComputedStyle(this.carusel_items);
//         const gap = parseFloat(style.gap) || 0;
//         return gap;
//     }

//     getStepMultiplier() {
//         const screenWidth = window.innerWidth;
//         return screenWidth > this.CONFIG.breakpoint ? this.CONFIG.itemsPerViewWide : this.CONFIG.itemsPerViewNarrow;
//     }

//     calculateStepSize() {
//         // Если указан кастомный размер шага - используем его
//         if (this.CONFIG.customStepSize) {
//             this.stepSize = this.CONFIG.customStepSize;
//             this.stepMultiplier = this.getStepMultiplier();
//             return;
//         }

//         // Иначе вычисляем автоматически
//         if (!this.profile_card) {
//             console.error('Profile card element not found');
//             return;
//         }

//         const cardWidth = this.profile_card.getBoundingClientRect().width;
//         const gap = this.getCarouselGap();
//         this.stepSize = cardWidth + gap;
//         this.stepMultiplier = this.getStepMultiplier();
//     }

//     // Функция для обновления счетчика (только если есть элементы)
//     updateCounter() {
//         if (this.idCurrents.length === 0) return;

//         const startNumber = this.currentIndex + 1;

//         // Обновляем все элементы current_number
//         this.idCurrents.forEach(el => {
//             if (this.stepMultiplier > 1) {
//                 // Широкое окно: показываем последний видимый элемент
//                 const endNumber = Math.min(this.currentIndex + this.stepMultiplier, this.totalItems);
//                 el.innerHTML = endNumber;
//             } else {
//                 // Узкое окно: показываем текущий элемент
//                 el.innerHTML = startNumber;
//             }
//         });
//     }

//     // Функция для обновления radio кнопок (только если они есть)
//     updateRadioButtons() {
//         if (this.radioButtons.length === 0) return;

//         // Определяем, какие radio кнопки должны быть активны
//         const activeIndices = [];

//         if (this.stepMultiplier > 1) {
//             // В широком режиме активируем radio кнопку, соответствующую последнему видимому элементу
//             const lastVisibleIndex = Math.min(this.currentIndex + this.stepMultiplier - 1, this.totalItems - 1);
//             activeIndices.push(lastVisibleIndex);
//         } else {
//             // В узком режиме активируем radio кнопку текущего элемента
//             activeIndices.push(this.currentIndex);
//         }

//         // Обновляем все radio кнопки
//         this.radioButtons.forEach((radio, index) => {
//             if (activeIndices.includes(index)) {
//                 radio.checked = true;
//                 radio.classList.add('active');
//             } else {
//                 radio.checked = false;
//                 radio.classList.remove('active');
//             }
//         });
//     }

//     updateButtons() {
//         // Если нет кнопок - выходим
//         if (this.leftButtons.length === 0 && this.rightButtons.length === 0) return;

//         const canGoLeft = this.currentIndex > 0;
//         const canGoRight = this.currentIndex < this.totalItems - this.stepMultiplier;

//         this.leftButtons.forEach(btn => {
//             if (btn) btn.disabled = !canGoLeft;
//         });
//         this.rightButtons.forEach(btn => {
//             if (btn) btn.disabled = !canGoRight;
//         });
//     }

//     moveCarousel(direction) {
//         if (this.stepSize === 0) {
//             this.calculateStepSize();
//         }

//         // Обновляем индекс с учетом множителя
//         this.currentIndex += direction * this.stepMultiplier;

//         // Ограничиваем индекс
//         this.currentIndex = Math.max(0, Math.min(this.totalItems - this.stepMultiplier, this.currentIndex));

//         // Рассчитываем новую позицию
//         this.currentPosition = -this.currentIndex * this.stepSize;

//         // Применяем трансформацию
//         this.carusel_items.style.transform = `translateX(${this.currentPosition}px)`;

//         // Обновляем счетчик (только если есть элементы)
//         this.updateCounter();
//         this.updateButtons();
//         this.updateRadioButtons();

//         console.log(`Index: ${this.currentIndex}, Multiplier: ${this.stepMultiplier}, Position: ${this.currentPosition}px, Total: ${this.totalItems}`);
//     }

//     // Метод для перехода к конкретному слайду
//     goToSlide(index) {
//         this.currentIndex = Math.max(0, Math.min(this.totalItems - this.stepMultiplier, index));
//         this.currentPosition = -this.currentIndex * this.stepSize;
//         this.carusel_items.style.transform = `translateX(${this.currentPosition}px)`;
//         this.updateCounter();
//         this.updateButtons();
//         this.updateRadioButtons();
//     }

//     handleResize() {
//         const oldMultiplier = this.stepMultiplier;
//         this.calculateStepSize();

//         // Если множитель изменился, корректируем позицию
//         if (oldMultiplier !== this.stepMultiplier) {
//             this.currentIndex = Math.max(0, Math.min(this.totalItems - this.stepMultiplier, this.currentIndex));
//             this.currentPosition = -this.currentIndex * this.stepSize;
//             this.carusel_items.style.transform = `translateX(${this.currentPosition}px)`;
//             this.updateCounter();
//             this.updateButtons();
//             this.updateRadioButtons();
//         }
//     }

//     // Метод для обновления (если динамически добавили элементы)
//     refresh() {
//         this.totalItems = this.carusel_items.children.length;

//         // Обновляем общее количество только если есть элементы
//         if (this.idLasts.length > 0) {
//             this.idLasts.forEach(el => {
//                 el.innerHTML = this.totalItems;
//             });
//         }

//         this.updateCounter();
//         this.updateButtons();
//         this.updateRadioButtons();
//     }
// }

// // Примеры использования:

// // 1. Карусель с цифрами и кнопками
// const mainCarousel = new UniversalCarousel({
//     carouselItems: '#carusel_items',
//     profileCard: '#profile_card',
//     leftButtons: '#left_button, #bottom_left_button',
//     rightButtons: '#right_button, #bottom_right_button',
//     currentNumberElements: '#current_number',
//     lastNumberElements: '#last_number',
//     breakpoint: 850,
//     itemsPerViewWide: 3,
//     itemsPerViewNarrow: 1
// });

// // 2. Карусель ТОЛЬКО с radio кнопками (без цифр)
// const productCarousel = new UniversalCarousel({
//     carouselItems: '#plates',
//     profileCard: '#plate',
//     leftButtons: '#plate_next',
//     rightButtons: '#plate_prev',
//     currentNumberElements: '', // Пусто - значит цифр нет
//     lastNumberElements: '', // Пусто - значит цифр нет
//     radioButtons: '#carousel-radio', // Только radio кнопки
//     breakpoint: 850,
//     itemsPerViewWide: 1,
//     itemsPerViewNarrow: 1
// });


class UniversalCarousel {
    constructor(config) {
        // Сохраняем конфиг
        this.config = config;

        // Собираем элементы с проверкой
        this.leftButtons = this.getElements(config.leftButtons);
        this.rightButtons = this.getElements(config.rightButtons);
        this.idCurrents = this.getElements(config.currentNumberElements);
        this.idLasts = this.getElements(config.lastNumberElements);
        this.carusel_items = this.getElement(config.carouselItems);

        // Указываем конкретный элемент для измерения ширины
        this.profile_card = this.getElement(config.profileCard);

        // Проверяем наличие radio кнопок
        this.radioButtons = config.radioButtons ? this.getElements(config.radioButtons) : [];

        // Настройки
        this.CONFIG = {
            transition: config.transition || 'transform 0.5s ease',
            breakpoint: config.breakpoint || 850,
            itemsPerViewWide: config.itemsPerViewWide || 3,
            itemsPerViewNarrow: config.itemsPerViewNarrow || 1,
            customStepSize: config.customStepSize || null,
            explicitGap: config.explicitGap || null, // Явное указание gap
            explicitItemWidth: config.explicitItemWidth || null, // Явное указание ширины элемента
            explicitTotalItems: config.explicitTotalItems || null // Явное указание количества элементов
        };

        // Проверяем обязательные элементы
        if (!this.carusel_items && !this.CONFIG.explicitTotalItems) {
            console.error('Carousel items container not found and no explicit total items provided:', config.carouselItems);
            return;
        }

        if (!this.profile_card && !this.CONFIG.customStepSize && !this.CONFIG.explicitItemWidth) {
            console.error('Profile card element not found and no custom step size or explicit item width provided:', config.profileCard);
            return;
        }

        // Инициализация переменных
        this.currentIndex = 0;
        this.stepMultiplier = 1;
        this.currentPosition = 0;
        this.stepSize = 0;

        // Определяем общее количество элементов
        this.totalItems = this.CONFIG.explicitTotalItems ||
            (this.carusel_items ? this.carusel_items.children.length : 0);

        this.init();
    }

    // Вспомогательные методы для безопасного получения элементов
    getElement(selector) {
        if (!selector) return null;
        const element = document.querySelector(selector);
        if (!element) {
            console.warn('Element not found:', selector);
        }
        return element;
    }

    getElements(selector) {
        if (!selector) return [];
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) {
            console.warn('Elements not found:', selector);
        }
        return elements;
    }

    init() {
        // Устанавливаем transition только если есть контейнер
        if (this.carusel_items) {
            this.carusel_items.style.transition = this.CONFIG.transition;
        }

        // Добавляем обработчики для кнопок навигации (если они есть)
        this.leftButtons.forEach(btn => btn?.addEventListener('click', () => this.moveCarousel(-1)));
        this.rightButtons.forEach(btn => btn?.addEventListener('click', () => this.moveCarousel(1)));

        // Добавляем обработчики для radio кнопок (если они есть)
        if (this.radioButtons.length > 0) {
            this.radioButtons.forEach((radio, index) => {
                radio?.addEventListener('click', () => this.goToSlide(index));
            });
        }

        // Устанавливаем общее количество карточек (если есть элементы для отображения)
        if (this.idLasts.length > 0) {
            this.idLasts.forEach(el => {
                el.innerHTML = this.totalItems;
            });
        }

        // Инициализация
        this.calculateStepSize();
        this.updateCounter();
        this.updateButtons();
        this.updateRadioButtons();

        // Ресайз обработчик
        window.addEventListener('resize', () => this.handleResize());
    }

    getCarouselGap() {
        // Если явно указан gap - используем его
        if (this.CONFIG.explicitGap !== null) {
            return this.CONFIG.explicitGap;
        }

        // Иначе пытаемся получить из CSS
        if (!this.carusel_items) return 0;

        const style = getComputedStyle(this.carusel_items);
        const gap = parseFloat(style.gap) || 0;
        return gap;
    }

    getItemWidth() {
        // Если явно указана ширина - используем её
        if (this.CONFIG.explicitItemWidth !== null) {
            return this.CONFIG.explicitItemWidth;
        }

        // Иначе пытаемся измерить элемент
        if (!this.profile_card) {
            console.error('Cannot determine item width: no profile card element and no explicit width provided');
            return 0;
        }

        return this.profile_card.getBoundingClientRect().width;
    }

    getStepMultiplier() {
        const screenWidth = window.innerWidth;
        return screenWidth > this.CONFIG.breakpoint ? this.CONFIG.itemsPerViewWide : this.CONFIG.itemsPerViewNarrow;
    }

    calculateStepSize() {
        // Приоритет 1: кастомный размер шага
        if (this.CONFIG.customStepSize) {
            this.stepSize = this.CONFIG.customStepSize;
            this.stepMultiplier = this.getStepMultiplier();
            return;
        }

        // Приоритет 2: вычисляем из ширины элемента и gap
        const cardWidth = this.getItemWidth();
        const gap = this.getCarouselGap();

        if (cardWidth === 0) {
            console.error('Cannot calculate step size: item width is 0');
            return;
        }

        this.stepSize = cardWidth + gap;
        this.stepMultiplier = this.getStepMultiplier();

        console.log(`Step size calculated: ${this.stepSize}px (width: ${cardWidth}px + gap: ${gap}px)`);
    }

    // Функция для обновления счетчика (только если есть элементы)
    updateCounter() {
        if (this.idCurrents.length === 0) return;

        const startNumber = this.currentIndex + 1;

        // Обновляем все элементы current_number
        this.idCurrents.forEach(el => {
            if (this.stepMultiplier > 1) {
                // Широкое окно: показываем последний видимый элемент
                const endNumber = Math.min(this.currentIndex + this.stepMultiplier, this.totalItems);
                el.innerHTML = endNumber;
            } else {
                // Узкое окно: показываем текущий элемент
                el.innerHTML = startNumber;
            }
        });
    }

    // Функция для обновления radio кнопок (только если они есть)
    updateRadioButtons() {
        if (this.radioButtons.length === 0) return;

        // Определяем, какие radio кнопки должны быть активны
        const activeIndices = [];

        if (this.stepMultiplier > 1) {
            // В широком режиме активируем radio кнопку, соответствующую последнему видимому элементу
            const lastVisibleIndex = Math.min(this.currentIndex + this.stepMultiplier - 1, this.totalItems - 1);
            activeIndices.push(lastVisibleIndex);
        } else {
            // В узком режиме активируем radio кнопку текущего элемента
            activeIndices.push(this.currentIndex);
        }

        // Обновляем все radio кнопки
        this.radioButtons.forEach((radio, index) => {
            if (activeIndices.includes(index)) {
                radio.checked = true;
                radio.classList.add('active');
            } else {
                radio.checked = false;
                radio.classList.remove('active');
            }
        });
    }

    updateButtons() {
        // Если нет кнопок - выходим
        if (this.leftButtons.length === 0 && this.rightButtons.length === 0) return;

        const canGoLeft = this.currentIndex > 0;
        const canGoRight = this.currentIndex < this.totalItems - this.stepMultiplier;

        this.leftButtons.forEach(btn => {
            if (btn) btn.disabled = !canGoLeft;
        });
        this.rightButtons.forEach(btn => {
            if (btn) btn.disabled = !canGoRight;
        });
    }

    moveCarousel(direction) {
        if (this.stepSize === 0) {
            this.calculateStepSize();
        }

        // Обновляем индекс с учетом множителя
        this.currentIndex += direction * this.stepMultiplier;

        // Ограничиваем индекс
        this.currentIndex = Math.max(0, Math.min(this.totalItems - this.stepMultiplier, this.currentIndex));

        // Рассчитываем новую позицию
        this.currentPosition = -this.currentIndex * this.stepSize;

        // Применяем трансформацию (только если есть контейнер)
        if (this.carusel_items) {
            this.carusel_items.style.transform = `translateX(${this.currentPosition}px)`;
        }

        // Обновляем счетчик (только если есть элементы)
        this.updateCounter();
        this.updateButtons();
        this.updateRadioButtons();

        console.log(`Index: ${this.currentIndex}, Multiplier: ${this.stepMultiplier}, Position: ${this.currentPosition}px, Total: ${this.totalItems}`);
    }

    // Метод для перехода к конкретному слайду
    goToSlide(index) {
        this.currentIndex = Math.max(0, Math.min(this.totalItems - this.stepMultiplier, index));
        this.currentPosition = -this.currentIndex * this.stepSize;

        if (this.carusel_items) {
            this.carusel_items.style.transform = `translateX(${this.currentPosition}px)`;
        }

        this.updateCounter();
        this.updateButtons();
        this.updateRadioButtons();
    }

    handleResize() {
        const oldMultiplier = this.stepMultiplier;
        this.calculateStepSize();

        // Если множитель изменился, корректируем позицию
        if (oldMultiplier !== this.stepMultiplier) {
            this.currentIndex = Math.max(0, Math.min(this.totalItems - this.stepMultiplier, this.currentIndex));
            this.currentPosition = -this.currentIndex * this.stepSize;

            if (this.carusel_items) {
                this.carusel_items.style.transform = `translateX(${this.currentPosition}px)`;
            }

            this.updateCounter();
            this.updateButtons();
            this.updateRadioButtons();
        }
    }

    // Метод для обновления (если динамически добавили элементы)
    refresh() {
        // Обновляем количество элементов (если не указано явно)
        if (!this.CONFIG.explicitTotalItems && this.carusel_items) {
            this.totalItems = this.carusel_items.children.length;
        }

        // Обновляем общее количество только если есть элементы
        if (this.idLasts.length > 0) {
            this.idLasts.forEach(el => {
                el.innerHTML = this.totalItems;
            });
        }

        this.updateCounter();
        this.updateButtons();
        this.updateRadioButtons();
    }

    // Метод для обновления конфигурации на лету
    updateConfig(newConfig) {
        Object.assign(this.CONFIG, newConfig);
        this.calculateStepSize();
        this.refresh();
    }
}

// Примеры использования с разными вариантами:

// 1. Автоматический расчет (как было)
const mainCarousel = new UniversalCarousel({
    carouselItems: '#carusel_items',
    profileCard: '#profile_card',
    leftButtons: '#left_button, #bottom_left_button',
    rightButtons: '#right_button, #bottom_right_button',
    currentNumberElements: '#current_number',
    lastNumberElements: '#last_number',
    breakpoint: 850,
    itemsPerViewWide: 3,
    itemsPerViewNarrow: 1
});

// 2. Полностью явное указание всех параметров
const explicitCarousel = new UniversalCarousel({
    carouselItems: '#plates',
    leftButtons: '#plate_next',
    rightButtons: '#plate_prev',
    radioButtons: '#carousel-radio',
    explicitTotalItems: 5, // Явно указываем количество элементов
    explicitItemWidth: 335, // Явно указываем ширину элемента
    explicitGap: 40, // Явно указываем gap
    breakpoint: 850,
    itemsPerViewWide: 1,
    itemsPerViewNarrow: 1
});