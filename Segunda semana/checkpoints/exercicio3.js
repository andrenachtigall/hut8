const array = [6, 21, 9, 2, 50, 98, 67, 1]
let guarda
let guardaformatado = array[0]

for (var i = 0; i < array.length; i++) {
  if (guardaformatado < array[i]) {
    guardaformatado = array[i]

  }
}
console.log(guardaformatado)