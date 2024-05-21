
const images = document.querySelectorAll('img');
images.forEach((img, index) => {
    console.log(`Imagem ${index + 1}:`, img.src);
});

const infoParagraph = document.getElementById('info');
infoParagraph.textContent = 'Aqui estão cinco destinos incríveis para a sua próxima viagem. Cada um oferece experiências únicas e inesquecíveis.';
