// Array add somthing in at the begning and end 
var MyArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
//MyArray.unshift('Start')
//MyArray.push('end')
 //console.log(MyArray)

//Same task with ES6

MyArray = ['start',...MyArray]
MyArray =[...MyArray, 'End']
//or
MyArray=['Start',...MyArray, 'end']

console.log(MyArray);

//Que2 Create private varieble 

function secretVeriable(){
    var private ="super secrete veriable"
    return function(){
        return private
    }
}

var getPrivateVeriable = secretVeriable()
console.log(secretVeriable());
console.log(getPrivateVeriable());

//What is the output 
var num =4;
function outer(){
    var num = 2
    function inner(){
        num++
        var num = 3;
        console.log(num)
    }
    inner();
}
outer();

// reverse word
//ES6 sol
const revString = (str)=>{
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str);
}
revString('apple');

//normal js sol

(function(str){
    let reverse='';
    for(let character of str){
        reverse=character + reverse;
    }
    console.log({reversed_value:reverse})
}) ("greeting");


//find max charactore from the string
const maxChar =(str)=>{
    let obj ={};

    for(let char of str)
    (!obj[char])?obj[char]=1:obj[char]++;
    console.log(obj);
    let maxNum = 0;
    let maximumChar ='';

    for(let char in obj)
    {
        if(obj[char] >= maxNum){
            maxNum = obj[char];
            maximumChar = char;
        }
    }
    console.log(`${maximumChar} appears ${maxNum} times`)
}
maxChar("jhkkeioeeippddd")