const soma = function (n1, n2){
   return n1 + n2; 
  }
const subt = function (n1, n2){
   return n1 - n2; 
  }
const mult = function (n1, n2){
   return n1 * n2; 
  }
const div = function (n1, n2){
   return n1 / n2; 
  }

const operations = {soma: soma, subtrair:subt, multiplicar:mult, dividir:div}

console.log(operations["subtrair"](3,5))
console.log(operations["soma"](3,5))
console.log(operations["multiplicar"](3,5))
console.log(operations["dividir"](3,5))