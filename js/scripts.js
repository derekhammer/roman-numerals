// the business end

var romanNumerals = function(numeral)
{
  var inputArray = numeral.split("").map(function(t){return parseInt(t)});
  var onesArray = ["I","II","III","IV","V","VI","VII","VIII","IX"];
  var tensArray = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var hundosArray = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var thousandsArray = ["M","MM","MMM"];


  if (inputArray.length === 1)
  {
    var results = onesArray[(inputArray - 1)];
    alert(results);
    return results;
  }

}









//user interface logic

$(document).ready(function()
{
  $("#number-input").submit(function(event)
  {
    event.preventDefault();

    var userInput = $("#the-number").val();
    var result = romanNumerals(userInput);
    alert(result);

  })




})
