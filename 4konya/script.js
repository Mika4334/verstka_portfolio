let left_button = document.getElementById('left_button')
let right_button = document.getElementById('right_button')
let h1 = document.getElementById('h1')
let carusel_items = document.getElementById('carusel_items')
carusel_items.style.transition = 'transform 0.5s ease';
let currentPosition = 0;


left_button.addEventListener('click', () => toMove(1))
right_button.addEventListener('click', () => toMove(-1))

if (currentPosition === 0) {
    left_button.disabled = true;
}

function toMove(direction) {

    if (direction < 0) {
        currentPosition += direction * 100;
        carusel_items.style.transform = `translateX(${currentPosition}%)`;
    }

    if (direction > 0) {
        currentPosition += direction * 100;
        carusel_items.style.transform = `translateX(${currentPosition}%)`;
    }

    if (currentPosition < 0) {
        console.log(currentPosition)
        right_button.disabled = true;
        left_button.disabled = false;
    } else if (currentPosition >= 0) {
        right_button.disabled = true;
    }
    if (currentPosition === 0) {
        left_button.disabled = true;
        right_button.disabled = false;
    }

    console.log(`translateX(${currentPosition}%)`)
}
