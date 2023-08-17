// Manipulando Conteúdo 

/*
// textContent
const element = document.querySelector('h1')

element.textContent = "Olá Devs!"

console.log(element.textContent);
*/

/*
//innerText
const element = document.querySelector('h1')

element.innerText = "Olá Devs!"
*/

/*
//innerHTML
    //Adiciona elementos HTML pelo JavaScript

const element = document.querySelector('h1')

element.innerHTML = "Olá Devs <small>!!!</small>"
*/

/*
//value
// Serve para mostrar o valor e para atribuir um valor

const element = document.querySelector('input')

console.log(element.value);
element.value = "Getway Car é perfeito"
*/

/*
//Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID)

header.removeAttribute('class')
*/


//Alterando estilos

/*
//Style
//permite colocar "css" em linha

const element = document.querySelector('body')

element.style.backgroundColor = "#f9f3D2"
console.log(element.style.backgroundColor)
*/

/*
//ClassList

const element = document.querySelector('body')

element.classList.add('active', 'violet')

console.log(element.classList)
element.classList.remove('violet')

//Toggle
    // Ele peesquisa, se a classe existe ele remove, se ela não exite ele adiciona

element.classList.toggle('violet')
*/

//Navegando pelos elementos

/*
//parentNode parentElement

const body = document.querySelector('body')

console.log(body.parentNode)
*/

/*
//childNodes children
//"childNodes" leva em conta os espaços vazios e o "children" não leva em conta os espaços vazios

const el = document.querySelector('body')

console.log(el.childNodes)

// firstChild firstElementChild
//"firstElemenChild" leva em conta os espaços vazios e o "FirstElementChild" não leva

console.log(el.firstChild)

// lastChild lastElementChild

console.log(el.lastElementChild)
*/

/*
// nextSibling nextElementSibling

const el = document.querySelector('header')

//nextSibling nextElementSibling
console.log(el.nextElementSibling)

//previousSibling previousElementSibling
console.log(el.previousSibling)
*/

/*
//Criando e adicionando elementos

//createElement
const div = document.createElement('div')
div.innerText = "Olá Devs!"

//append prepend 
const body = document.querySelector('body')

body.append(div) //depois

body.prepend(div) //antes

//insertbefore

const script = body.querySelector('script')
body.insertBefore(div, script) // entre elementos
*/

//Eventos

/*
//Eventos via HTML (on)
function print() {
    console.log('print')
}
*/

/*
//Eventos via teclado
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}
*/

/*
// Via JS 1°

const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print() {
    console.log('print')
}
*/

/*
// Via JS 2°

const h1 = document.querySelector('h1');

h1.onclick = print
function print() {
    console.log('print')
}

h1.onclick = function() {
    console.log('outro momento')
}
*/

/*
//argumento event

const input = document.querySelector('input')

input.onclick = function(event) {
    console.log(event)

}
*/
