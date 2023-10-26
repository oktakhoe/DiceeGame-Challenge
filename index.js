// document.querySelectorAll("img").getAttribute("src");
// document.querySelectorAll("img").setAttribute("src", "images/dice6.png");

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = "images/dice" + randomNumber1 + ".png";
// var randomImageSource = "images/" + randomDiceImage;
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSource2);

// if (randomNumber1 > randomNumber2) {
//    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
// } else if (randomNumber2 > randomNumber1) {
//    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// } else {
//    document.querySelector("h1").innerHTML = "Draw!";
// }

document.addEventListener("DOMContentLoaded", function () {
  var image1 = document.querySelector(".img1");
  var image2 = document.querySelector(".img2");

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  //   var randomDiceImage = "dice" + randomNumber1 + ".png";
  //   var randomDiceImage2 = "dice" + randomNumber2 + ".png";

  //   image1.setAttribute("src", "images/" + randomDiceImage);
  //   image2.setAttribute("src", "images/" + randomDiceImage2);

  image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
});
