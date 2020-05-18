var john = {
    name:'I am john',
    age:24,
    isActive:true
}

var marry ={
    name:'I am marry',
    age:23,
    isActive:true
}

var sam = {
    name:'I am Sam',
    age:29,
    isActive:false
}

let users = new Map()


users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)
console.log(users);
console.log(users.size);

console.log(users.get('sam'));

console.log(users.keys());

console.log(users.values());

// for of loop

for (const key of users.keys()){
    console.log(key);
}


for (const value of users.values()){
    console.log(value.name);
}


for (const [key, value ]of users.entries()){
    console.log(key+' = '+ value.name);
    //convert the above line in literals
    console.log(`${key} = ${value.name}`)
}

//foreach loop

users.forEach((value, key) =>  console.log(key+' = '+ value.name))

// array of array
var arrOfArr = [['one', '1'], ['two', '2'], ['three', '3']]

var newMap = new Map(arrOfArr)

console.log(newMap);