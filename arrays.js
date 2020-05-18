const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

//numbers[1]='SOMETHINGS'
//console.log(numbers);

//Start
//numbers.shift()
//console.log(numbers);

//numbers.unshift('SOMETHING')
//console.log(numbers);

//End
//numbers.push('Seven');
//console.log(numbers);

//console.log("the element to be deleted is:" + numbers.pop());
//console.log(numbers);

// Middle
numbers.splice(2, 1, 'SOMETHING');
console.log(numbers);

numbers.splice(2, 2, 'SOMETHING');
console.log(numbers);