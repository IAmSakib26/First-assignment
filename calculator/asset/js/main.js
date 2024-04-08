let screen = document.getElementById('result');
let error = document.getElementById('error');
let numone = document.getElementById('numone');
let numtwo = document.getElementById('numtwo');
let operator = document.getElementById('operator');
let calbtn = document.getElementById('calculate');

calbtn.addEventListener('click',function(){
    let num1 = parseInt(numone.value);
    let num2 = parseInt(numtwo.value);
    // if(num1 == '' || num2 == '' || typeof num1 != 'number' || typeof num2 != 'number'){
    // if(isNaN(num1) || isNaN(num2)){
    //     error.innerText = '*Please enter a number';
    // }else{
    //     error.innerText = '';
    // }
    switch (operator.value){
        case '+':
            if(isNaN(num1) || isNaN(num2)){
                screen.innerText = 0;
                error.innerText = '*Please enter a number';
                break;
            }else{
                screen.innerText = num1 + num2;
                error.innerText = '';
                break;
            }
        case '-':
            if(isNaN(num1) || isNaN(num2)){
                screen.innerText = 0;
                error.innerText = '*Please enter a number';
                break;
            }else{
                screen.innerText = num1 - num2;
                error.innerText = '';
                break;
            }
        case '*':
            if(isNaN(num1) || isNaN(num2)){
                screen.innerText = 0;
                error.innerText = '*Please enter a number';
                break;
            }else{
                screen.innerText = num1 * num2;
                error.innerText = '';
                break;
            }
        case '/':
            if(isNaN(num1) || isNaN(num2)){
                screen.innerText = 0;
                error.innerText = '*Please enter a number';
                break;
            }else{
                screen.innerText = num1 / num2;
                error.innerText = '';
                break;
            }
        default:
            break;
    }
})
