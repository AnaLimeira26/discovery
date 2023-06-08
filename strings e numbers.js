/*
// Transformar String em Número e Número em String

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
*/

/*
// Contar quantos caracteres tem uma palvra e quantos dígitos tem um número 
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length) 
*/

/*
// Transformar um númer quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 755.33785348553
console.log(number.toFixed(2). replace(".", ","))
*/

/*
// Separação de texto q já contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espços, coloque _ 
let phrase = "Look At Us Now"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
*/
 
// Operadores de Comparação

/*
let one = 1
let two = 2


console.log(one != two)
console.log(one != 1)
console.log(one != "1")

console.log(two == 1)
console.log(one == "1")

console.log(one ==="1")
console.log(one === 1 )

console.log(two !== "2")
console.log(two !== 2)

// Maior que >
console.log(one >= two)

// >= Maior igual a
console.log(one >= 1)
console.log(two >= 1)
 
// Menor que <
console.log(one < two)

// Menor igual a <=
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)
*/

/*
// Operadores de Atribuição (Assignment)

let x

// assigment (recebe 1)
x = 1

// addition assignment
x += 2

// subtraction assignment
x -= 1

// multiplication assignment
x *= 2

// dicision assignment 
x /= 2

// remainder, exponetiation
x %= 2
x **= 2

console.log(x)
*/

/*
// Operadores Lógicos

let pao = true
let queijo = true

// AND &&

console.log(pao && queijo)

// OR ||  

console.log( pao || queijo)

// NOT !

console.log(!queijo)
*/

/*
// Operador Condicional (Ternário)

// Café da manhã top
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café top' : 'café ruim'

console.log(niceBreakfast)

// Maior de 18

let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)
*/