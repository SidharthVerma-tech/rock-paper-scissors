const handOptions = {
    'ROCK': "assets/challenge-rock-paper-scissors-game-main/assets/Rock.jpg",
    'PAPER': "assets/challenge-rock-paper-scissors-game-main/assets/Paper.png",
    'SCISSORS': "assets/challenge-rock-paper-scissors-game-main/assets/Scissors.jpg"
}
let SCORE = 0;



const pickUserHand = (hand) =>{
    console.log(hand);
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    document.getElementById('userPickImage').src = handOptions[hand];
   let cpHand = pickComputerHand();
   referre(hand, cpHand);







}
let pickComputerHand = () => {
    let hands = ['ROCK', 'PAPER', 'SCISSORS'];
    let cpHand = hands[Math.floor(Math.random() * 3)];
    console.log("CPHAND", cpHand);
    document.getElementById('computerPickImage').src = handOptions[cpHand];
    return cpHand;


}
const referre = (userHand, computerHand) => {
    if(userHand == 'PAPER' && computerHand == 'SCISSORS'){
        setDecision ("YOU LOSE")
        setDecision ("YOU LOSE")
    }
        else if(userHand == 'PAPER' && computerHand == 'ROCK'){
            setDecision ("YOU WON");
            setScore (SCORE + 1);
    }
    if(userHand == 'PAPER' && computerHand == 'PAPER'){
        setDecision ("YOU TIE")
    }
        else if(userHand == 'ROCK' && computerHand == 'PAPER'){
            setDecision ("YOU LOSE");
    }
    if(userHand == 'ROCK' && computerHand == 'ROCK'){
        setDecision ("YOU TIE")
    }
        else if(userHand == 'ROCK' && computerHand == 'SCISSORS'){
            setDecision ("YOU WON");
            setScore (SCORE + 1);
    }
    if(userHand == 'SCISSORS' && computerHand == 'ROCK'){
        setDecision ("YOU LOSE")
    }
        else if(userHand == 'SCISSORS' && computerHand == 'PAPER'){
            setDecision ("YOU WON");
            setScore (SCORE + 1);
    }
    if(userHand == 'SCISSORS' && computerHand == 'SCISSORS'){
        setDecision ("YOU TIE")
    }
}
  
    let setDecision = (decision) => {
        console.log(decision);
        document.querySelector('.decision h1').innerText = decision;
    }
    const setScore = (score) => {
        SCORE = score;
        console.log(score);
        document.querySelector('.scorecard h2').innerText = score;

    }
    const restartGame = () => {
        let hands = document.querySelector(".hands");
        hands.style.display = "flex";
        let contest = document.querySelector(".contest");
        contest.style.display = "none";

    }
