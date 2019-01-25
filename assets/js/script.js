function getNumber() {
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  //isNaN pour vérifier s'il ne s'agit pas d'un nombre.
  //!isNaN = false isNaN = true
  if(isNaN(firstNumber) == false && !isNaN(secondNumber)){
    if(secondNumber != 0){
  // != Différent
      var result = firstNumber % secondNumber;
  // % modulo
      alert(result);
    }else{
      alert('Mettre un chiffre différent à 0 svp.');
    }
  }
  else{
    alert('Mettre un chiffre à partir de 1 svp.');
  }
  }




/*
  // pas de regex car pas utile, isNaN est plus approprié pour vérifier si ce sont des chiffres
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
// isNaN est une fonction
if (isNaN(firstNumber) == false && isNaN(secondNumber) == false) {     //!=false et sans !=true
//                != --> différent
  if{(secondNumber != 0)
    var result = firstNumber % secondNumber;
    alert(result);
  }else{
    alert('Merci de renseigner un chiffre différent de 0');
  }
}else{
    alert('Mettre un chiffre supérieur à 1');
}
}
*/
