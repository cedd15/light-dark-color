const button1 = document.getElementById('dark');
const button2 = document.getElementById('light');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const header = document.getElementById('header');

function generateRandomDarkColor() {
    //randomize hue up to 360
    const hue = Math.floor(Math.random() * 361);
    //randomize saturation up to 100 
    const saturation = Math.floor(Math.random() * 101);
    //randomize lightness (short for luminescence) up to 50 only
    //lightness from 50 below is considered dark 
    const lightness = Math.floor(Math.random() * 51);
    
    document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    color1.innerHTML = `dark: hsl(${hue}, ${saturation}, ${lightness})`;
}

function generateRandomLightColor() {
    //randomize hue up to 360
    const hue = Math.floor(Math.random() * 361);
    //randomize saturation up to 100 
    const saturation = Math.floor(Math.random() * 101);
    //randomize lightness (short for luminescence) from 51 up to 100
    //lightness from 50 above is considered light
    const lightness = Math.floor(Math.random() * 51) + 50;
    
    header.style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    color2.innerHTML = `light: hsl(${hue}, ${saturation}, ${lightness})`;
}

button1.onclick = generateRandomDarkColor;
button2.onclick = generateRandomLightColor;


/*
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
console.log(random(50, 101));
*/