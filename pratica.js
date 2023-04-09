// Declarar uma variável de nome weight
//let weight

// Qual o tipo de dado é a variável a cima?
//console.log(typeof weight)

/* Declarar uma variável e atribuir valores para cada um dos dados:
*name:String
*age: Number (integer)
*stars: NUmber (float/ quebrado)
*isSubscribed: Boolean


let name = "Ana"
let age = 21
let stars = 21.6
let isSubscribed = true
*/

/*
A variável student abaixo é que tipo de dados

  - Atribua a ela as mesmas propriedades e valores do comentário a cima
  - Mostre no console a seguinte mensagem:
  <name> de idade <age> e  pessa <weight> kg.
*/

let student = {
    name: 'Julia',
    age: 25,
    weight: 60,

}

// console.log(`${student.name} de idade ${student.age} e pesa ${student.weight} kg`)

//Declare uma variável do tipo Arrey, de nome students e atribua a ela nenhum valor, ou seja, somente o Arrey vazio

let estudantes = []

// Reatribua valor para a variável a cima, colocando dentro dela o objeto student 

estudantes = [
    student
]
console.log(estudantes)

// Coloque no console o valor da posição zero do Array a cima

console.log(estudantes [0])

// Crie um novo student e coloque na posição 1 do Arrey estudantes

const Maria = {
    name: "Maria",
    age: 24,
    weight: 70.3,
    isSubscribed: true,
}

students = [
    student,
    Maria
]

// studantes[1] = Maria
console.log(estudantes)

