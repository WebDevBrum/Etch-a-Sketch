// Select the elemen ts on the page, canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// set up canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();



// write a draw function

// write a handler for the keys

// clear/ shake function

// listen for arrow keys



