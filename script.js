function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
let firstNumber,operation,secondNumber;
function operate(first,op,second){
    switch(op){
        case "+" : return add(first,second);
        case "-" : return subtract(first,second);
        case "*" : return multiply(first,second);
        case "/" : return divide(first,second);
    }
}
let digits=document.getElementsByClassName("digit");
let operations=document.getElementsByClassName("oper");
let disp=document.getElementById("display");
for(let i=0;i<digits.length;i++){
    digits[i].addEventListener("click",function(){
    if(disp.textContent==`0`) disp.textContent="";
    if(disp.textContent.length<=9) disp.textContent+=digits[i].textContent;
    })
}
for(let i=0;i<operations.length;i++){
    operations[i].addEventListener("click",function(){
    if(!/[^0-9.]/.test(disp.textContent[disp.textContent.length-1])){
    calculate(disp.textContent);
    disp.textContent+=operations[i].textContent;
    }
    })
}
document.getElementById("clear").addEventListener("click",function(){
    disp.textContent=`0`;
});
document.getElementById("equal").addEventListener("click",function(){
    let str=disp.textContent;
    calculate(str);
})
function calculate(str){
    let regex=/^([0-9]+(.[0-9]+)?)[^0-9.]{1}([0-9]+(.[0-9]+)?)$/;
    if(regex.test(str)){
        let arr=str.split(/[^0-9.]/);
        firstNumber=Number(arr[0]);
        secondNumber=Number(arr[1]);
        operation=str.match(/[^0-9.]/)[0];
        disp.textContent=operate(firstNumber,operation,secondNumber);
    }
}




