let array = [5, 9, 10, 6]
var soma = 0 
for (var i = 0; i < array.length; i++) {
  soma = soma + array[i] * i
}

console.log(soma)