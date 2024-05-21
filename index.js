document.addEventListener("DOMContentLoaded",function() {
const images = document.querySelectorAll('img');
images.forEach(img => console.log(img));
});

const infoParagraph = document.getElementById('info');
infoParagraph.textContent = 'Aqui estão cinco destinos incríveis para a sua próxima viagem. Cada um oferece experiências únicas e inesquecíveis.';
