// random number generator

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

// document.querySelector('.img1').src = "images/dice${randomNumber1}.png";

if (randomNumber1 === 1) {
    document.querySelector('.img1').src = "images/dice1.png";
} else if (randomNumber1 === 2) {
    document.querySelector('.img1').src = "images/dice2.png";
}else if (randomNumber1 === 3) {
    document.querySelector('.img1').src = "images/dice3.png";
}else if (randomNumber1 === 4) {
    document.querySelector('.img1').src = "images/dice4.png";
}else if (randomNumber1 === 5) {
    document.querySelector('.img1').src = "images/dice5.png";
}else if (randomNumber1 === 6) {
    document.querySelector('.img1').src = "images/dice6.png";
}

// new random number generator for second dice
var second = Math.floor((Math.random() * 6) + 1);
// document.querySelector('.img2').src = "images/dice${randomNumber2}.png";

if (second === 1) {
    document.querySelector('.img2').src = "images/dice1.png";
} else if (second === 2) {
    document.querySelector('.img2').src = "images/dice2.png";
}else if (second === 3) {
    document.querySelector('.img2').src = "images/dice3.png";
}else if (second === 4) {
    document.querySelector('.img2').src = "images/dice4.png";
}else if (second === 5) {
    document.querySelector('.img2').src = "images/dice5.png";
}else if (second === 6) {
    document.querySelector('.img2').src = "images/dice6.png";
}

// Declaring winner based on number one gets on dice

if (randomNumber1 > second) {
    document.querySelector('h1').innerHTML = "Player 1 Wins";
} else if (randomNumber1 < second) {
    document.querySelector('h1').innerHTML = "Player 2 Wins";
} else {
    document.querySelector('h1').innerHTML = "Draw";
}