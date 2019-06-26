var totalValue = 0;
var wins = 0;
var losses = 0;
var jewelBucket = [];
    //The start game function is meant to reset the users point value to 0 and reset the randomization of the target number, as well as each of the jewel values.
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
    //First, we asign the "index" variable as the last digit in the "jewel div" id. 
    var index = parseInt(jewel.id[jewel.id.length-1]);
    $('#declaration').html("");
    console.log('index: ' + index);
    //Then we asign the clickValue variable the point value relative to the random number in the jewelBucket aray associated with the index identified in the jewel div ID we already captured.
    var clickValue = jewelBucket[index];
    //Here we add the clickValue to the total user point value variable (read: totalValue)
    totalValue += clickValue;
    $('#userTotal').html('user total: ' + totalValue);
    
    //Here we check for equal value, not considering type, and if true we increment "wins" by 1 and declare the user the winner in the div with the "declaration" ID.
    if (totalValue == randomNumber){
        wins++;
        $('#numWins').html(wins);
        $('#declaration').html('You WON! Congratulations!');
        console.log(wins);
        startGame();
    }
    //Here we check for the users point value being greater than the target value, not considering type, and if true we increment "losses" by 1 and declare the user the loser in the div with the "declaration" ID.
    if (totalValue > randomNumber){
        losses++;
        $('#numLosses').html(losses);
        $('#declaration').html("I'm so sorry you lost");
        console.log(losses);
        startGame();
    }
}