
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

function total(displayStr){
        let a = '';
        let b = '';
        let b_val = false;
        let op_index = null;
        for(let i = 0; i < displayStr.length; i++){
            if( displayStr[i] == '+' ||
                displayStr[i] == '-' ||
                displayStr[i] == '*' ||
                displayStr[i] == '/'){
                    b_val = true;
                    op_index = i;
            } else if(!b_val){
                a+=displayStr[i];
            } else {
                b+=displayStr[i];
            }
        }
        alert(operate(parseInt(a),displayStr[op_index],parseInt(b)));
        
}

//Calculator key functions
function operate(a,op,b){
    switch(op){
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;  
    }
}

//Main

const display = document.querySelector(".display");

const digits = document.querySelectorAll(".digit");

const operator = document.querySelectorAll(".operator");

const equal = document.querySelector(".equal");

let displayStr = '';

digits.forEach(btn => {
    btn.addEventListener('click', event => {
        let num = event.target.innerHTML;
        displayStr += num;
        display.innerText = displayStr;
   });

});

operator.forEach(btn => {
    btn.addEventListener('click', event => {
        let num = event.target.innerHTML;
        displayStr += num;
        display.innerText = displayStr;
   });

});

equal.addEventListener('click', ()=>{
    total(displayStr);
});

