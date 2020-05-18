let userName = 'abc123aaa';
let password ='123456789'

let checkUsername = function(myString){
        if((myString.includes('@')) && (myString.length>10)){
            return true
        }else

        return false
}

let checkPass = function(pass){
        if((pass.includes('.')) && (pass.length>8)){
            return true
        }else

        return false
        }

        console.log(checkUsername(userName));
        console.log(checkPass(password));