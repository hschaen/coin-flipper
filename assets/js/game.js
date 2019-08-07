 // Coin Flip JavaScript
 // These variables are declared for us.
 var headsCount = 0;
 var tailsCount = 0;
 var wins = 0;
 var losses = 0;

 function flipThatCoin(result) {

     //  STEP ONE:

     //  Declare and initialize a variable named randomNumber to either 0 or 1. Make it random.
     var randomNumber = Math.round(Math.random());
     //  STEP TWO:

     //  If randomNumber is equal to zero then
     if (randomNumber === 0) {
         //  Find the div with an id of coin-image.
         //  Replace its html with an img tag containing this image:
         //  http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg
        $('#coin-image').html('<img src="http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg" alt="heads" />');
        $('#actual').text('Heads');
     } else { // Else:
         //  Find the div with an id of coin-image.
         //  Replace its html with an img tag containing this image:
         //  http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg
        $('#actual').text('Tails');
        $('#coin-image').html('<img src="http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg" alt="tails" />');
     }







     //  STEP THREE:

     // If result is equal to randomNumber, do the following:
     if (randomNumber === result) {

         //  Increment wins by one.
         wins++;
         //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
         $('#win-lose').html("<h2>Winner!</h2>");
         //  Find the div with an id of wins. Update it with the value of the wins variable.
         $('#wins').html('<h3>' + wins + '</h3>');
     } else { // Else:

         //  Increment losses by one.
         losses++;
         //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
         $('#win-lose').html('<h2>Loser!</h2>');
         //  Find the div with an id of losses. Update it with the value of the losses variable.
         $('#losses').text(losses);
     }
 }

 // This on click function has been completed for us.
 $("#heads").on("click", function () {
     headsCount++;
     $("#heads-chosen").text(headsCount);
     $("#guess").html("<b>Heads</b>");
     flipThatCoin(0);
 });


 //  STEP FOUR:
 $("#tails").on("click", function () {
     tailsCount++; //  Increment tailsCount by one.
     $("#tails-chosen").text(tailsCount); //  Find the span with an id of tails-chosen. Replace the html inside of the span with the tailsCount.
     $("#guess").html("<strong>Tails</strong>"); //  Find the div with an id of guess. Update it with the word "Tails" bolded.
     flipThatCoin(1); //  Call the flipThatCoin function and pass value 1 into it.
 });