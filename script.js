var dateTab = document.getElementById("dateInput");
var luckyNumberTab = document.getElementById("luckyNumberInput");
var button = document.getElementById("button");
var resultTag = document.getElementById("result");

function handleClick(){
    console.log(dateTab.value,luckyNumberTab.value);
    var date = dateTab.value;
    var luckyNumber = luckyNumberTab.value;
    var sum = 0;
    // console.log(typeof date, typeof luckyNumber);
    if(date.length == 0){
        resultTag.innerHTML = " Please select a date <span>😟</span> ";
        return
    }else if(luckyNumber.length == 0){
        resultTag.innerHTML = " Please enter a lucky number <span>😟</span> ";
        return
    }else if(parseInt(luckyNumber) <= 1){
        resultTag.innerHTML = " Please enter a valid lucky number <span>😟</span> ";
        return
    }

    for(let i = 0 ; i < date.length ; i++){
        if(date[i] != '-')
            sum += parseInt(date[i])
    }
    console.log(luckyNumber);
    if(sum % parseInt(luckyNumber) == 0){
        resultTag.innerHTML = " hurray! your birthday is lucky <span>🥳🥳<span>"
    } else {
        resultTag.innerHTML = " Opps! your birthday is not lucky <span>🙁🙁<span>"
    }

}

button.addEventListener("click",handleClick)