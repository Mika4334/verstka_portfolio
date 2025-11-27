function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const toggleButton = document.querySelector('.dropdown-toggle');

    dropdownMenu.classList.toggle('open');
    toggleButton.classList.toggle('open');
}

function selectOption(option) {
    const toggleButton = document.querySelector('.dropdown-toggle');
    toggleButton.textContent = option;
    toggleDropdown();
}

// Закрытие меню при клике вне его области
document.addEventListener('click', function (event) {
    const dropdownContainer = document.querySelector('.dropdown-container');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const toggleButton = document.querySelector('.dropdown-toggle');

    if (!dropdownContainer.contains(event.target) && dropdownMenu.classList.contains('open')) {
        dropdownMenu.classList.remove('open');
        toggleButton.classList.remove('open');
    }
});