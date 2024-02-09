'use strict';

//Selecting elements
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.getElementById('score--0');
const score1El=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const diceRoll=document.querySelector('.btn--roll');
const diceNew=document.querySelector('.btn--new');
const diceHold=document.querySelector('.btn--hold');
const Player1Score=document.getElementById('current--0');
const Player2Score=document.getElementById('current--1');

//Starting Conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

const scores=[0,0];
let currentScore=0;
let activeplayer=0;
let playing=true;

const switchPlayer=function(){
    document.getElementById(
        `current--${activeplayer}`
        ).textContent=0;
        currentScore=0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Rolling dice 
diceRoll.addEventListener('click',function(){
    if(playing)
    {
        //1. generating the dice Roll
        const dice=Math.trunc(Math.random()*6)+1;
        //2. Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`;
        //3. Check if rolled a 1:if true move to next
        if(dice!==1)
        {
            //Add dice to current score
            currentScore+=dice;
            document.getElementById(
                `current--${activeplayer}`
                ).textContent=currentScore;
        }
        else
        {
            //switch to next player
            switchPlayer();
        }
    }

})

diceHold.addEventListener('click',function(){
    if(playing){
    //1. Add Current score to active players
    scores[activeplayer]+=currentScore;
    document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
    
    //2. Check if player score is 100
    if(scores[activeplayer]>=20)
    {
        //fisinsh the game
        playiing=false;
       document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
       document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    }
    else
    {
        //switch to next player
        switchPlayer();
    }
    }  

})