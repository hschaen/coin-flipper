 // Coin Flip JavaScript
 // These variables are declared for us.
 var headsCount = 0;
 var tailsCount = 0;
 var wins = 0;
 var losses = 0;

 function flipThatCoin(result) {

     var randomNumber = Math.round(Math.random());
     if (randomNumber === 0) {
        $('#coin-image').html('<img src="http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg" alt="heads" />');
        $('#actual').text('Heads');
     } else { 
         $('#actual').text('Tails');
        $('#coin-image').html('<img src="http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg" alt="tails" />');
     }
     if (randomNumber === result) {

         wins++;
         $('#win-lose').html("<h2>You're a Winner!</h2>");
         $('#wins').html('<h3>' + wins + '</h3>');
     } else { 
         losses++;
         $('#win-lose').html('<h2>You Lost. Try Again!</h2>');
         $('#losses').text(losses);
     }
 }

 $("#heads").on("click", function () {
     headsCount++;
     $("#heads-chosen").text(headsCount);
     $("#guess").html("<strong>Heads</strong>");
     flipThatCoin(0);
 });


 $("#tails").on("click", function () {
     tailsCount++; 
     $("#tails-chosen").text(tailsCount); 
     $("#guess").html("<strong>Tails</strong>"); 
     flipThatCoin(1);
 });