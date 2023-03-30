
let backgroundImageIndex = 0;
let imageIndex = 0;

function setBackground() {
    const container = document.querySelector('.container');
    backgroundImageIndex = (backgroundImageIndex + 1) % 3;
    container.style.backgroundImage = `url('${backgroundImageIndex}.jpg')`;
}

function setImage() {
    const image = document.querySelector('#image');
    imageIndex = (imageIndex + 1) % 3;
    image.style.backgroundImage = `url('${imageIndex}.jpg')`;
}

function setCounter(buttonId) {
    const button = document.querySelector(`#${buttonId}`);
    button.value = parseInt(button.value) + 1;
}

document.querySelector('#button1').addEventListener('click', () => {
    setBackground();
    setImage();
    setCounter('button1');
});

document.querySelector('#button2').addEventListener('click', () => {
    setBackground();
    setImage();
    setCounter('button2');
});

document.querySelector('#button3').addEventListener('click', () => {
    setBackground();
    setImage();
    setCounter('button3');
});
