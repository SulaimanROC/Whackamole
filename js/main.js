console.log('main loaded');

const minimumTime = 500;  // variabele voor minimumtijd
const maximumTime = 1250; // variabele voor maximumtijd
let gameStarted = false;

alert("Welcome to Whack a Mole")

let playerPoints = 1; //speler krijgt 1 punt erbij als hij goed klikt

const playerPointsElement = document.querySelector('.player-points'); //variabele ophalen met queryselector

const allTiles = document.querySelectorAll('.tile'); //ik selecteer all de 9 vakken
const startGameButton = document.querySelector('.start-game-button')

console.log(allTiles) //ik check of het werkt in de console log

startGameButton.addEventListener('click', function(){
    startGameButton.disabled = true;
    if(!gameStarted){
        startGame();
    }
    gameStarted = true;
    playerPoints = 10;
    playerPointsElement.textContent = playerPoints;
});



getRandomNumber(1, 50); // kies een random getal tussen de 1 en 50

function getRandomNumber (min, max) { //function om willekeurige getal te laten verschijnen
    /*let random = Math.random();
    console.log(random);
    console.log(min);
    console.log(max);
    console.log(Math.floor(random));
    console.log(max - min + 1);
    console.log(Math.floor(random * (max - min - 1)));*/
   return Math.floor(Math.random() * (max - min + 1) + min);
}

allTiles.forEach(function(tile){ //ik maak een loop om door de tiles heen te lopen
    //console.log(tile);
tile.addEventListener('click', function(){ //een naamloze functie wordt uitgevoerd
    tileClicked(tile);
});

});


function tileClicked(tile){
   // console.log(tile);
    if(tile.classList.contains('active')){ // controleren of de active class wordt gebruikt met if statement
        playerPoints = playerPoints + 1;
 }else{
    playerPoints = playerPoints - 2;
    
 }
 console.log(playerPoints);
 tile.classList.remove('active'); //na dat je op de tile hebt geklikt moet de class active weggaan
 playerPointsElement.textContent = playerPoints; // punten laten zien op de site
} 

  
    function activateRandomTile(){ // de geactiveerde tile een ander kleur geven
    const currentActiveTile = document.querySelector('.tile.active'); //zoeken naar een dubbele class
    if(currentActiveTile){  //checken of de waarde currentactivetile bestaat
        currentActiveTile.classList.remove('active'); //geactiveerde tegel verwijderen
    };
    let randomTileNumber = getRandomNumber(0, allTiles.length - 1); // getal kiezen tussen de 0 en 8
    const selectedTile = allTiles[randomTileNumber];
    selectedTile.classList.add('active');

    startGame();
}

function startGame(){ //functie om de geactiveerde tile te laten verdwijnen na een bepaalde tijd
    const randomTime = getRandomNumber(minimumTime, maximumTime);


    setTimeout(activateRandomTile, randomTime)
}

document.querySelector('.restart-game-button').addEventListener('click', function() { // als je op de restart button klikt refresht de
    window.location.reload();
    return false;
});

