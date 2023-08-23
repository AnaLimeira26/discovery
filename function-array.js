// array

var arr = [1,2,3,4,5];

// mostra quantos elementos existem no array

console.log(arr.length)




// adiciona elementos no array seja number ou string - no final do array

arr.push(6);

console.log(arr);



// remove um elemento do fim do array

arr.pop();

console.log(arr);



// adiciona um elemento no começo do array

arr.unshift(0);

console.log(arr);



// remove um elemento do começo do array

arr.shift();

console.log(arr);




// acessa o ultimo elemento do array

console.log(arr[arr.length - 1]);



// verifica o que foi declarado é um array, se for retorna true, se não for retorna false

console.log(Array.isArray(arr))

// adicionar um elemento no meio do array, o primeiro parametro é o indice do array, o segundo é o que voce deseja remover do array e o ultimo parametro é o elemento que voce quer adicionar


arr.splice(2, 0, 999);

console.log(arr)