let SCORE = 0;
let selectedNumber;
let flag = false;
const numbers = document.getElementById('numberstile');
const errormessage = document.getElementById("error");
const scoreBoard = document.getElementById('score');
const resetBtn = document.getElementById("reset");

numbers.addEventListener('click', (e)=>{
    flag = true;
    if(!isNaN(e.target.id)){
        selectedNumber = e.target.id;
    }
    if(flag){
        numbers.children[selectedNumber - 1].classList.add('clicked');
        flag = false;
    }

    errormessage.classList.remove('errorMessage');
    errormessage.textContent = "";
});

const dice = document.getElementById("dice-image");
dice.addEventListener('click', (e)=>{
    let randomNumber = randomNumberGenerator();
    if(!selectedNumber) {
        errormessage.classList.add('errorMessage');
        errormessage.textContent = "Please select a number!"
    }
    else if(randomNumber == selectedNumber) {
        dice.removeAttribute('src');
        dice.setAttribute('src',`./images/Dice-${randomNumber}.jpg`);
        numbers.children[selectedNumber - 1].classList.remove('clicked');
        SCORE += 20;
        selectedNumber = 0;
    }else {
        dice.removeAttribute('src');
        dice.setAttribute('src',`./images/Dice-${randomNumber}.jpg`);
        numbers.children[selectedNumber - 1].classList.remove('clicked');
        SCORE -= 5;
        selectedNumber = 0;
    }
    scoreBoard.textContent = SCORE;
})

function randomNumberGenerator() {
    let randomNumber = Math.floor(Math.random()*6+1);
    return randomNumber;
}

resetBtn.addEventListener('click', ()=>{
    SCORE = 0;
    scoreBoard.textContent = 0;
});