let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScoreNo =document.querySelector("#my-score");
const compScoreNo =document.querySelector("#comp-score");


const gencompChoice= () => {
    //rock paper scissors
    const options=["rock","paper","scissor"];                             //array
    const idx = Math.floor(Math.random()*3);
    return options[idx];
    
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        game(userChoice);
    });
});


const draw = () => {
    //console.log("game was draw.")
    msg.innerText= "Game was Draw. Play Again";
    msg.style.backgroundColor ="#081b31";
}


const Winner = (userWin,userChoice ,compChoice) => {
    if (userWin) {
        userScore++;
        userScoreNo.innerText =userScore;
        //console.log("You Win!");
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else {
        compScore++;
        compScoreNo.innerText =compScore;
        //console.log("You Lose");
        msg.innerText =`You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}


const game = (userChoice) => {
    console.log("userChoice = ",userChoice);
    //computer choice
    const compChoice= gencompChoice();
    console.log("compChoice = ",compChoice);


    //comparing choices
    if(userChoice===compChoice) {
        //draw
        draw();
    }
    else {
        let userWin=true;
        if(userChoice === "rock"){
            //comp - scissor,paper
            userWin = compChoice === "paper" ? false :true ;
        }
        else if (userChoice ==="paper") {
            //comp - rock , scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            //comp - rock, paper
            userWin = compChoice ==="rock" ? false :true;
        }
        Winner(userWin , userChoice, compChoice);
    }
}