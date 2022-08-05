const users = [{
  name: "Joao",
  skills: ["Javascript", "ReactJS", "Redux"]
},
{
  name: "Pedro",
  skills: ["VueJS", "Ruby on Rails", "Elixir"]
}
]

for (let i = 0; i < users.length; i++) {
  console.log(`Skills de ${users[i].name}:`)
  for (let j = 0; j < users[i].skills.length; j++) {
    console.log(`${j + 1} - ${users[i].skills[j]}`)
  }
}