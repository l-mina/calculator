
//Four main mathematical operators 
function add(a,b){
    return Math.round(a + b);
}

function subtract(a,b){
    return Math.round(a - b);
}

function multiply(a,b){
    return Math.round(a * b);
}

function divide(a,b){
    return Math.round(a / b);
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

//Updating calculator functions
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
        
        if( b != 0){
            str = operate(parseInt(a),displayStr[op_index],parseInt(b));
            updateDisplay(str);
        }
        
        
}

function updateDisplay(str){
    displayStr = str;
    display.innerText = displayStr;
}

function clearDisplay(str){
    displayStr = '';
    display.innerText = displayStr;
}

function isValid(str){
    str = String(str)
    //Check for double operator
    if(str.includes('+')||str.includes('-')||str.includes('*')||str.includes('/')){
        total(displayStr);
    } else {
        console.log('nah');
    }
}

function hasOp(str){
    str = String(str)
    if(str.includes('+')||str.includes('-')||str.includes('*')||str.includes('/')){
        return true;
    } else {
        return false;
    }
}

//Main

const display = document.querySelector(".display");

const digits = document.querySelectorAll(".digit");

const operator = document.querySelectorAll(".operator");

const equal = document.querySelector(".equal");

const clear = document.querySelector(".clear");

let displayStr = '';

digits.forEach(btn => {
    btn.addEventListener('click', event => {
        let num = event.target.innerHTML;
        displayStr += num;
        updateDisplay(displayStr);
   });

});

operator.forEach(btn => {
    btn.addEventListener('click', event => {
        let op = event.target.innerHTML;
        let lastChar = String(displayStr).charAt(displayStr.length - 1);
        console.log("last char: "+lastChar);
        console.log('+' == lastChar);
        if(lastChar != '+' && lastChar !='-' && lastChar !='*' && lastChar !='/' && lastChar !=''){
            isValid(displayStr);
            if(!hasOp(displayStr)){
                displayStr += op;
                updateDisplay(displayStr);
            }
            console.log("after has:"+displayStr);
        }
        
   });

});

equal.addEventListener('click', ()=>{
    total(displayStr);
});

clear.addEventListener('click', ()=>{
    clearDisplay(displayStr);
});
