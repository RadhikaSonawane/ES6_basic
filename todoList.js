const myTodos =[]

myTodos.push('Buy Bread');
myTodos.push('Record videos of youTube');
myTodos.push('Go to gym');

/*myTodos.forEach(function(todo, index){
    console.log(`your task no. ${index+1} is : ${todo}`)
})*/

for(let i=0; i<myTodos.length; i++){
    console.log(myTodos[i]);
}

for(let index=myTodos.length-1; index>= 0; index--) {
    console.log(myTodos[index]);
}