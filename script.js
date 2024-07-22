
//Four main mathematical operators 

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

//Calculator key functions
function operate(a,op,b){
    switch(op){
        case '+':
            add(a,b);
            break;
        case '-':
            subtract(a,b);
            break;
        case '*':
            multiply(a,b);
            break;
        case '/':
            divide(a,b);
            break;  
    }
}

//Main
/*
const digitButton = document.getElementById("digit");
digitButton.addEventListener("click",()=>{
    alert(digitButton.innerText);
})
*/
const digitButton = document.querySelector(".digit");
digitButton.forEach(addEventListener("click",(event)=>{
    alert(digitButton.innerHTML);
}))
