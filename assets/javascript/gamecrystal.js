//pseudo code commented out



//variable declartions


var targetNumber = 0;
var loss = 0;
var win = 0;
var counter = 0;
var images = ["assets/images/crystalImage1.jpg", 
"assets/images/crystalImage2.jpg",
"assets/images/crystalImage3.jpg",
"assets/images/crystalImage4.jpg"];
var winAudio = new Audio("assets/audio/Congratulations.mp3");
var lossAudio = new Audio("assets/audio/sadTrombone.mp3");


//create a function to start the game and genertes a random target number the user tries to hit and 4 random crystal areas

var start = function () {
    targetNumber = Math.floor(Math.random() * 99) + 19;
        $("#targetScore").html('Target Score: ' + targetNumber);

    //create 4 crystals + create random number value for that crytsal.  Crystal images are held above in the images array
    for(var i = 0; i < 4; i++) {
        
            var random = Math.floor(Math.random() * 12) + 1;
            var crystal = $("<img>");
            crystal.attr({
                "src": images[i],
                "class": 'crystal',
                "data-randomNumber": random
                });

            crystal.html(random);   //display the random number in the crytsal box (this only works if the images do not load an is changed to a div this was helpful in making the game)

            $(".crystals").append(crystal);
        }
    }

//calls the start function from above to start the game
    start();    


//this is the master reset function which will reset the counter, the user total, generate a new target number and reset the crystals
 var reset = function () {
    counter = 0;
    $("#userTotal").text("User total: " + counter);
    targetNumber = Math.floor(Math.random() * 80) + 19;
    $("#targetScore").text("Target Score: " + targetNumber);
    $(".crystals").empty()
}



//clicking a crystal functionality + add to wins and losses and user guess total by writing to the DOM
$(document).on("click", ".crystal", function () {
    var num = parseInt($(this).attr('data-randomNumber'));
        counter += num;
        $("#userTotal").html("User total: " + counter);
        console.log(counter, num)

        if(counter > targetNumber){
            loss++;
            $("#totalLoss").html("Losses: " + loss);
        console.log("You Lost");
        lossAudio.play();
        alert("You lost. Please try again!")
            reset();
            start();
        }
        if (counter === targetNumber){
            win++;
            $("#totalWin").html("Wins: " + win);
        console.log("You WINN")
        winAudio.play();
        alert("You won! Play again!")
            reset();
            start();     
        }
});


