function myValidation(){
    let myValue = document.getElementById('#myForm').value;

    if(isNaN(myValue) || myValue < 1 || myValue > 20 ){
        console.log("Not a valid input")
    } else{
        console.log("This input is ok")
    }
}

const myPElement = document.querySelector('p')
myPElement.textContent = 'I am changed'

// form validation
document.querySelector('.myForm').addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    event.target.username.value=''
})