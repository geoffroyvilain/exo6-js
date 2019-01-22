function getNumber() {
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var result = firstNumber%secondNumber;
if (isNaN(firstNumber)==false && isNaN(secondNumber)==false)
{
  alert(Math.floor(result));
}else{
  alert('Merci de renseigner les champs');
}
}
