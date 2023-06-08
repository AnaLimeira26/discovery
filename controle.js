// IF...ELSE

/*
let temperature = 36.5

if(temperature >= 37) {
console.log('Febre')
}

else{
    console.log('Saudável')
}
*/
 
/*
let temperature = 38

if(temperature >= 37.5) {
    console.log('Febre alta')
}
else if(temperature < 37.5 && temperature >= 37) {
console.log('Febre moderada')
}
else{
    console.log('Saudável')
}
*/

/*
// OU

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
}
else if(mediumTemperature) {
    console.log('Febre moderada')
}
else {
    console.log('Saudável')
}
*/

/*
// SWITCH

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-' : 
            result = number1 - number2
            break
        case '*': 
            result = number1 * number2
            break
        case '/': 
            result = number1 / number2
            break
        default: 
            console.log('não implementado')
            break        
    }
    return result
}

console.log(calculate(8, '+', 8))
*/

/*
// THROW

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

// try...catch
try {
    sayMyName ('Ana')
}
catch (e) {
    console.log(e)
}

console.log('após a função de erro')
*/

/*
// Estrutura de Repetição

// FOR

// for(let i = 0; i < 10; i++) {
//    console.log(i)}

for(let i = 100; i> 0; i--) {
    if(i === 50) {
      //  break;
      continue;
    }
    console.log(i)
}

// WHILE

let i = 49586394505
while(i > 10) {
    console.log(i)

    i /= 35
}

// FOR...OF

let name = 'Ana'
let names = ['Joana', 'Barbara', 'Clara']

// for(let char of name) {
//    console.log(char)}

for(let name of names) {
    console.log(name)
}
*/
// FOR...IN

let person = {
    name: 'Ana',
    age: 21,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}