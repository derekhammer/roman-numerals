// the business end

var romanNumerals = function(numeral)
{


  var inputArray = numeral.split("").map(function(t){return parseInt(t)});
  var limitBreak = parseInt(numeral);
  var onesArray = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
  var tensArray = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var hundosArray = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var thousandsArray = ["","M","MM","MMM"];

  if (limitBreak < 4000 || (inputArray.length > 4))
  {
    if (inputArray.length === 1) //one character long
    {
      var results = onesArray[(inputArray)];
      return results;
    }
    else if (inputArray.length === 2) //two characters
    {
      for (var index = 0; index < inputArray.length; index++)
      {
        if (index === 0)
        {
          var doubleTens = tensArray[(inputArray[0])];
        }
        else if (index === 1)
        {
          var doubleOnes = onesArray[(inputArray[1])];
        }
      }
      var results = doubleTens.concat(doubleOnes);
      return results;
      alert(results);
    }
    else if (inputArray.length === 3) //three characters long
    {
      for (var index = 0; index < inputArray.length; index++)
      {
        if (index === 0)
        {
          var tripleHundos = hundosArray[(inputArray[0])];
        }
        else if (index === 1)
        {
          var tripleTens = tensArray[(inputArray[1])];
        }
        else if (index === 2)
        {
          var tripleOnes = onesArray[(inputArray[2])];
        }
      }
      var preResult = tripleHundos.concat(tripleTens);
      var results = preResult.concat(tripleOnes);
      return results;
      alert(results);
    }
    else if (inputArray.length === 4) //four characters long
    {
      for (var index = 0; index < inputArray.length; index++)
      {
        if (index === 0)
        {
          var quadThousands = thousandsArray[(inputArray[0])];
        }
        else if (index === 1)
        {
          var quadHundos = hundosArray[(inputArray[1])];
        }
        else if (index === 2)
        {
          var quadTens = tensArray[(inputArray[2])];
        }
        else if (index === 3)
        {
          var quadOnes = onesArray[(inputArray[3])];
        }
      }
      var prePreResults = quadThousands.concat(quadHundos);
      var preResult = prePreResults.concat(quadTens);
      var results = preResult.concat(quadOnes);
      return results;
      alert(results);
    }
  }
  else
  {
    var results = "STOP!!!!!!";
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
