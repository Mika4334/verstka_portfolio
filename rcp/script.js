function getRandomCat() {
    // Используем The Cat API
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            // data - это массив, ссылка на картинку в первом элементе
            const imageUrl = data[0].url;
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.style.maxWidth = '500px';

            const resultDiv = document.getElementById('cat_result');
            resultDiv.innerHTML = ''; // Очищаем предыдущего кота
            resultDiv.appendChild(imgElement);
        })
        .catch(error => console.error('Ошибка:', error));
}