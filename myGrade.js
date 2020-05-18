let getMyGrade = function(currentMarks, totalMarks){
    let myPercentage = (currentMarks/totalMarks)*100
    let myGrade = ''

    if(myPercentage >= 90){
        myGrade = 'A'
    }else if(myPercentage >= 80){
        myGrade='B'
    }else if(myPercentage >= 70){
        myGrade='B'
    }else if(myPercentage >= 60){
        myGrade='B'
    }else if(myPercentage >= 50){
        myGrade='B'
    }else{
        myGrade='F'
    }

    return `Your grade is: ${myGrade} and percentage is: ${myPercentage}`
}

let yourResult = getMyGrade(90, 100)
 console.log(yourResult)