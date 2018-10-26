var color1 = document.getElementsByName('color1')[0];
var color2 = document.getElementsByName('color2')[0];
var body = document.querySelector('body');
var h3 = document.querySelector('h3'); 
var button = document.querySelector('button');

function pickRandomGradient () {
    color1.value = '#' + Math.floor(Math.random()*16777215).toString(16);
    color2.value = '#' + Math.floor(Math.random()*16777215).toString(16);
    updateColor();
    updateCssText();
}

function updateCssText () {
    h3.textContent = body.style.background + ';';
}

function updateColor () {
    body.style.background = 'linear-gradient(to right, ' 
                            + color1.value 
                            + ', ' 
                            + color2.value 
                            + ')';
    updateCssText();
}

updateCssText();

//color1.addEventListener('input', updateColor);

//color2.addEventListener('input', updateColor); 