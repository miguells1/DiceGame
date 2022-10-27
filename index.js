
document.querySelector("button").addEventListener("click", function(){


    // Dado #1

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var dice1 = document.querySelector(".img1");
    dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

    // Dado #2

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var dice2 = document.querySelector(".img2");
    dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // Resultado

    dice1.classList.remove("loser");
    dice2.classList.remove("loser");
    dice1.classList.remove("winner");
    dice2.classList.remove("winner");
    document.querySelector("button").textContent = "Roll again";

    var result = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        result.textContent = "🚩Player 1 Wins!";
        dice1.classList.add("winner");
        dice2.classList.add("loser");
    } else if (randomNumber1 < randomNumber2) {
        result.textContent = "Player 2 Wins! 🚩";
        dice2.classList.add("winner");
        dice1.classList.add("loser");
    } else {
        result.textContent = "🙄 Draw!";
    }

    setTimeout

});