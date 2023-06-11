 // Fetch images from Unsplash API

const YOUR_ACCESS_KEY = 'sEjzYAiz1qCvuSAQDQAbt8iC2sy695Bfrrsknm4ws74'
fetch('https://api.unsplash.com/photos/random?count=5&client_id=' + YOUR_ACCESS_KEY)
.then(response => response.json())
.then(data => {
    const indicatorsContainer = document.getElementById('indicators');
    const carouselInner = document.getElementById('carousel-inner');

data.forEach((image, index) => {
    // Create carousel indicator
    const indicator = document.createElement('li');
    indicator.setAttribute('data-bs-target', '#carouselExampleIndicators');
    indicator.setAttribute('data-bs-slide-to', index.toString());
    if (index === 0) {
        indicator.classList.add('active');
    }
    indicatorsContainer.appendChild(indicator);

    // Create carousel item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
        carouselItem.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = image.urls.regular;

    img.classList.add('d-block', 'w-100');
    img.alt = 'Unsplash Image';
    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
});
})
.catch(error => {
    console.error('Error:', error);
});