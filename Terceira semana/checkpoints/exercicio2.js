const user = {
  nome: 'André',
  idade: 28
}

const age = ({ idade }) => {
  return (idade >= 18) ? 'Maior de idade' : 'Menor de idade'
}
console.log(age(user))