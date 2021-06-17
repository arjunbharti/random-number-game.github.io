//generating a random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//initial score
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
    //when there is no number
    if(!guess){
        document.querySelector('.message').textContent = 'No number!';
    //when player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'You Guessed it right!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    //when guess is higher than the number
    }else if(guess > secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 'Too high number!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContext = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    //when guess is less than the number   
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too small number!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContext = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }    
    }
})

//reset the game
document.querySelector('.again').addEventListener('click', () => {
    score=20;
    secretNumber=Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});