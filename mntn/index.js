document.querySelectorAll(".BurgerWindowButton").forEach(element => {
    element.addEventListener('click', ocBurgerWindow)
});

document.getElementById("BurgerWindow").classList.toggle('hidden')

function ocBurgerWindow(event) {
    event.preventDefault();
    document.getElementById("BurgerWindow").classList.toggle('hidden')
}