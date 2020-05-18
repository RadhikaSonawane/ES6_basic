//const myPElements = document.querySelector('p')
//myPElements.textContent ='I am being changed using js'

//const myPelements = document.querySelectorAll('p')
// simpale way
/*myPelements.forEach (function(p){
    p.textContent = 'I am change using loop in js'
})*/

//Arrow function
//myPelements.forEach(p => p.textContent ='I am change using loop in js')


//remove the text
/*myPelements.forEach (function(p){
    p.remove
})*/

//document.title = 'I got change'

//console.log(document.getElementById('idOne'));
//console.log(document.getElementsByClassName('classOne'));

const myPElements = document.querySelector('#idOne')
console.log(myPElements);

document.querySelector('#myForm').addEventListener('input', (event)=>{
    console.log(event.target.value)
})