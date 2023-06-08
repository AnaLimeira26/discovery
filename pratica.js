/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

- de 90 para cima - A
- entre 80 - 89   - B
- entre 70 - 79   - C
- entre 60 - 69   - D
- menor que 60    - F


// 1° Jeito

let nota = 76.5 

if(nota >= 90) {
    console.log('A')
}

else if(nota >= 80 && nota <= 89) {
    console.log('B')
}

else if(nota >= 70 && nota <= 79){
    console.log('C')
}

else if(nota >= 60 && nota <= 69){
    console.log('D')
}

else if(nota < 60){
    console.log('F')
}


// 2° Jeito

function getScore(score) {

let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if (scoreA) {
    scoreFinal = "A"}

else if (scoreB) {
    scoreFinal = "B"}

else if (scoreC) {
        scoreFinal = "C"}
    
else if (scoreD) {
            scoreFinal = "D"}
        
else if (scoreF) {
                scoreFinal = "F"}

else {
    scoreFinal = "Nota inválida"
}                

console.log(scoreFinal)
        
return scoreFinal

}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(68))
console.log(getScore(74))
console.log(getScore(88))
console.log(getScore(91))
*/

/*
// Sistema de gastos familiares

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    - receitas: []
    - despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo    

let family = {
    incomes: [2200, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00, 2000]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total

}

function calculateBalance() {
    const calculateIcomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    
    const total = calculateIcomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()
*/

/* 
// Celsius em Fahrenheit e Vice-Versa

    Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F-32) * 5/9

    F = C * 9/5 + 32

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
 
    // Fluxo de Erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // Fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit-32) * 5/9
    let degreeSign = 'C'

    // Fluxo alternativo C -> F
    if(celsiusExists) {
     updatedDegree = Number(degree.toUpperCase().replace("C", ""));
     formula = celsius => celsius * 9/5 + 32
     degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign

}

try{
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    transformDegree('50H')
}

catch (error) {
    console.log(error.message)
}


/* 
// Buscando e contando dados em Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafio

- Contar o número de categorias e o número de livros em cada categoria
- contar o número de autores
- Mostrar livros do autor Augusto Cury
- Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/
const booksByCategory = [
    {
        category: "Fantasia",
        books: [
            {
                title: "Percy Jackson",
                author: "Rick Riordan"
            },
            {
                title: "Os Instrumentos Mortais",
                author: "Cassandra Clare"
            },
            {
                title: "O Principe Cruel",
                author: "Holly Black"
            },    
        ],
    },
    {
        category: "Romance",
        books: [
            {
                title: "Os 7 Maridos de Evelun Hugo",
                author: "Taylor J. Reid"  
            },
            {
                title: "Orgulho e Preconceito",
                author: "Jane Austen"  
            },
            {
                title: "Dayse Jones And The Six",
                author: "Taylor J. Reid"  
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authrs = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authrs.indexOf(book.author) == -1) {
                authrs.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authrs.length)

}

countAuthors();

/*function booksOfTaylorJReid() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Taylor J. Reid'){
                books.push(book.title)
            }
        }
    }

    console.log("Livros da autora: ", books)
}

booksOfTaylorJReid()*/

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livro do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Holly Black')