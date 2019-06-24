var totalValue = 0;
var wins = 0;
var losses = 0;
var jewelBucket = [];

function startGame(){
    totalValue = 0;
    $('#userTotal').html('user total: ' + totalValue);
    randomNumber = (Math.floor((Math.random() * 101) + 19))
    $('#randomNumber').html(randomNumber);
    for (i = 0; i < 4; i++){
        jewelBucket.push (Math.floor((Math.random() * 12) + 1));
    }
}
startGame();

function clickedJewel(jewel){
    var index = parseInt(jewel.id[jewel.id.length-1]);
    $('#declaration').html("");
    console.log('index: ' + index);
    var clickValue = jewelBucket[index];
    totalValue += clickValue;
    $('#userTotal').html('user total: ' + totalValue);
    
    if (totalValue == randomNumber){
        wins++;
        $('#numWins').html(wins);
        $('#declaration').html('You WON! Congratulations!');
        console.log(wins);
        startGame();
    }
    if (totalValue > randomNumber){
        losses++;
        $('#numLosses').html(losses);
        $('#declaration').html("I'm so sorry you lost");
        console.log(losses);
        startGame();
    }
}