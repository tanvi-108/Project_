let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreElem = document.querySelector("#user-score");
const compScoreElem = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

const drawgame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "darkblue";
}

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        console.log("You win");
        msg.innerText = `You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
    } else {
        console.log("You lose");
        msg.innerText = `You Lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
    }

    userScoreElem.innerText = userScore;
    compScoreElem.innerText = compScore;
}

const playgame = (userchoice) => {
    console.log("User choice = ", userchoice);

    const compchoice = gencompchoice();
    console.log("Comp choice = ", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked ", userchoice);
        playgame(userchoice);
    });
});


