/*const sayHello = function(name){
    return "Hej there,"+ name + "!"
}
console-log(sayHello('HelloMe'))*/

//Methode1
/*const sayHello = (name) =>{
    return"Hej there " + name + "!"
}

console.log(sayHello("Hellome"));*/

//Methode 2
const sayHello = (name) =>"Hej there " + name + "!"
console.log(sayHello("Hellome"));

//callback
/*const todos=[{
    title:'Buy bread',
    isDone:true
}, {
    title:'Go to Gym',
    isDone: true,
}, {
    title:'Record youtube video',
    isDone: false
}]
 const thingsDone = todos.filter((todo)=>todo.isDone ===true
 );

 console.log(thingsDone);*/

 const camera = {
     price: 600,
     weight: 2000,
     myDes:() => {
         return `This conon camera is of ${this.price}`
     }
 }
console.log(camera.myDes());

//Redux : only for redux
//const func = ()({key: 'value'});