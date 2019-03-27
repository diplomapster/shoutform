
$(document).ready(function(){
  $("#heyform").submit(function(event){
      var typedText = $("input#typedtext").val();
      // var shoutText = $("typedText").toUpperCase();
    $("#shout").text(typeText).show();

    event.preventDefault();
  });
});
alert("gothere")
