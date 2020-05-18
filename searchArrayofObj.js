const myTodos =['Buy Bread', 'Go to Gym', 'Record youtube Video'];
console.log(myTodos.indexOf('Buy Bread'));

const newTodos = [
{
    title:'Buy Breas',
    isDone: false,
},
{
    title: 'Go to Gym',
    isDone: true
},
{
    title: 'Record youTube Video',
    isDone: false
},
]

//Method 1
/*const findTodo = function(myTodos, title){
const index = newTodos.findIndex(function(todo, Index){
    return todo.title.toLocaleLowerCase() === title.toLocaleLowerCase()
})
return myTodos[index]
}

let printMe = findTodo(newTodos, 'GO TO gym')
console.log(printMe);*/

//Method 2
const findTodo = function(myTodos, title){
    const titleRet = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
return titleRet
}

let printMe = findTodo(newTodos, 'Go To gym')
console.log(printMe);

