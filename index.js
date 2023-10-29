var dice1 = document.querySelector("#player1Dice");
var dice2 = document.querySelector("#player2Dice");
var dice1IsClicked = false;
var dice2IsClicked = false;
var name1 = "#dice1";
var name2 = "#dice2";
var random1;
var random2;
dice1.addEventListener("click", function () {
  diceRoll(dice1IsClicked, name1);
});
dice2.addEventListener("click", function () {
  diceRoll(dice2IsClicked, name2);
});
function diceRoll(diceClicked, diceName) {
  if (diceClicked === false) {
    var random = Math.floor(Math.random() * 6) + 1;
    var imageSrc = "./images/dice" + random + ".png";
    document.querySelector(diceName).setAttribute("src", imageSrc);

    if (diceName === "#dice1") {
      dice1IsClicked = true;
      random1 = random;
    } else {
      dice2IsClicked = true;
      random2 = random;
    }

    if (dice1IsClicked === true && dice2IsClicked === true) {
      document.querySelector(".h1Container").textContent =
        "Refresh to play again";
      const newElement = document.createElement("h2");
      newElement.className = "h2Style winner";
      if (random1 > random2) {
        newElement.textContent = "Player 1 Wins!!";
      } else if (random1 < random2) {
        newElement.textContent = "Player 2 Wins!!";
      } else {
        // Add a class for styling
        newElement.textContent = "Its tie!!!"; // Set content
      }
      document.querySelector(".h1Container").appendChild(newElement);
    }
  }
}
