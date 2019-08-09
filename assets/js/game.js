 // Coin Flip JavaScript
 // These variables are declared for us.
 var headsCount = 0;
 var tailsCount = 0;
 var wins = 0;
 var losses = 0;
 var btn1Val = "";
 var btn2Val = "";
 var field1 = "";
 var field2 = "";

 $(document).ready(function() {
    $("#form1").hide();
    $("#form2").hide();
    $("#actualText").hide();
 });
// Set Names
// Option 1
 $("#submit1").on("click", function(e) {
     e.preventDefault();
     field1 = $("#field1").val();
     console.log("This field: " + field1);
    $("#option1val").text(field1);
    $("#form1").hide();
    $("#changeOpt1").show();
    $("#field1").val("");
});
$("#changeOpt1").on("click", function() {
    $("#form1").show();
    $(this).hide();
});
// Option 2
$("#submit2").on("click", function(e) {
    e.preventDefault();
    field2 = $("#field2").val();
    console.log("This field: " + field2);
   $("#option2val").text(field2);
   $("#form2").hide();
   $("#changeOpt2").show();
   $("#field2").val("");
});
$("#changeOpt2").on("click", function() {
   $("#form2").show();
   $(this).hide();
});
// Game Logic

function flipThatCoin(field1, field2) {
    field1 = $("#option1val").text();
    field2 = $("#option2val").text();
    var randomNumber = Math.round(Math.random());
    if (randomNumber === 0) {
       $('#coin-image').html('<img src="http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg" alt="heads" />');
       $("#actualText").show();
       $('#actual').text(field1);
       console.log("field 1: " + field1)
       headsCount++;
        $("#heads-chosen").text(headsCount);
    } else { 
       $("#actualText").show();
        $('#actual').text(field2);
       $('#coin-image').html('<img src="http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg" alt="tails" />');
        tailsCount++;
        $("#tails-chosen").text(tailsCount); 

    }
    // if (randomNumber === result) {

    //     wins++;
    //     $('#win-lose').html("<h2>You're a Winner!</h2>");
    //     $('#wins').html('<h3>' + wins + '</h3>');
    // } else { 
    //     losses++;
    //     $('#win-lose').html('<h2>You Lost. Try Again!</h2>');
    //     $('#losses').text(losses);
    // }
}

// // Start Game
//  $("#heads").on("click", function () {
//     headsCount++;
//     $("#heads-chosen").text(headsCount);
//     $("#guess").html("<strong>" + $('#heads').text() +"</strong>");
//     flipThatCoin(0);
// });


// $("#tails").on("click", function () {
//     tailsCount++; 
//     $("#tails-chosen").text(tailsCount); 
//     $("#guess").html("<strong>" + $('#tails').text() + "</strong>"); 
//     flipThatCoin(1);
// });
$('#flipThatCoin').on("click", function() {
    flipThatCoin();
})
