const userScore = document.querySelector('#myScore');
const aiScore = document.querySelector('#aiScore');
let message = document.querySelector(".msg");
let options = document.querySelectorAll(".option");

const aiInputGen = () => {
    const choices = ["rock", "paper", "scissor"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        let userChoice = option.getAttribute("id");
        playGame(userChoice);
    })
})

const draw = () => {
    console.log("Its Draw");
    message.innerText = ("Its a Draw.");
    message.style.backgroundColor = "rgb(66, 66, 224)";
}

const userWin = (userChoice, aiChoice) => {
    console.log("you win.");
    userScore.innerText = parseInt(userScore.innerText) + 1;
    message.innerText = ("You Win. " + "Your " + userChoice + " beats " + aiChoice);
    message.style.backgroundColor = "green";
}

const aiWin = (userChoice, aiChoice) => {
    console.log("ai win.");
    aiScore.innerText = parseInt(aiScore.innerText) + 1;
    message.innerText = ("You Loose. " + aiChoice + " beats your " + userChoice);
    message.style.backgroundColor = "red";
}

const playGame = (userChoice) => {
    console.log(userChoice);
    const aiChoice = aiInputGen();
    console.log(aiChoice);

    if(userChoice === aiChoice) {
        draw();
    } else if (userChoice === "rock" && aiChoice === "paper") {
        aiWin(userChoice, aiChoice);
    } else if (userChoice === "rock" && aiChoice === "scissor") {
        userWin(userChoice, aiChoice);
    } else if (userChoice === "paper" && aiChoice === "rock") {
        userWin(userChoice, aiChoice);
    } else if (userChoice === "paper" && aiChoice === "scissor") {
        aiWin(userChoice, aiChoice);
    }  else if (userChoice === "scissor" && aiChoice === "rock") {
        aiWin(userChoice, aiChoice);
    } else if (userChoice === "scissor" && aiChoice === "paper") {
        userWin(userChoice, aiChoice);
    }    
}
    





