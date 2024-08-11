const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const initialScreen = document.getElementById('initial-screen');
const thankYouScreen = document.getElementById('thank-you-screen');
const backButton = document.getElementById('back-button');

// Função para mover o botão "Não"
function moveButton() {
    const windowWidth = window.innerWidth - noButton.clientWidth;
    const windowHeight = window.innerHeight - noButton.clientHeight;

    const randomX = Math.random() * windowWidth;
    const randomY = Math.random() * windowHeight;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Adiciona movimento contínuo ao botão "Não"
function startMoving() {
    moveButton(); // Move o botão inicialmente
    noButton.intervalId = setInterval(moveButton, 500); // Move o botão a cada 500 milissegundos
}

noButton.addEventListener('mouseover', function() {
    moveButton(); // Move o botão quando o mouse está sobre ele
});

noButton.addEventListener('click', function() {
    clearInterval(noButton.intervalId); // Para o movimento contínuo
    initialScreen.style.display = 'none';
    thankYouScreen.style.display = 'block';
});

yesButton.addEventListener('click', function() {
    initialScreen.style.display = 'none';
    thankYouScreen.style.display = 'block';
});

backButton.addEventListener('click', function() {
    thankYouScreen.style.display = 'none';
    initialScreen.style.display = 'block';
});

// Inicia o movimento contínuo do botão "Não"
startMoving();
