//console.log('Bem Vindo ao meu site')

/*
// Object
const person = {
    name: 'Ana',
    age: 21,
    weight: 50,
    isAdmin: true
}

//console.log(person.name)
console.log(`${person.name} tem ${person.age} anos`)
*/

/*
// Array

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

// Como acessae valores dentro do arrey

//console.log(animals [0])
console.log(animals.length)

// Com Objeto

const animais = [
    'Cachorro',
    'Passárro',
    {
        name: 'Tartaruga',
        age: 70
    }
]
 
console.log(animais[2].name)
*/

/*
// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2) {
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`o  número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
*/

/*
// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco ('banana', 'maçã')

console.log(copo)
*/

// function scope
// let subject = 'create video'

/*
function createThink(subject){
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)
*/

/*
//arrow function
const sayMyName = () => {
    console.log('Ana')
}

sayMyName()
*/

/*
//callback function
function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
*/

/*
// Function () constructor
    - expressão new
    - criar um novo objeto
    - this keyword
    */

   function Person(name) {
    this.name = name
   }

   const Ana = new Person("Ana")
   const Bruno = new Person("Bruno")
   console.log(Ana)
   console.log(Bruno)
  

