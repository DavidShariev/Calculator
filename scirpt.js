"use strict";


var calculator = document.querySelector(".calculator");
var calculatorPanel = calculator.querySelector(".calculator__btns");
var input = calculator.querySelector(".calculator__value");
var expression = calculator.querySelector(".calculator__value-expression")
expression.value = "Hello here!"
var value = calculator.querySelector(".calculator__value-answer");



function btnClick(event){
   

    let btn = event.target.closest(".calculator__btn");
    if(!btn)
        return ;

    let symbol = btn.textContent;
    
    if (expression.value === "Hello here!" ||
    expression.value === "0" && symbol !== ".") {
        expression.value = ""
    }

    if(btn.classList.contains("calculator__btn--clean-all")){
        expression.value = "0";
        value.value = "0";
        return ;
    }
    if(!isNaN(symbol) || symbol === "(" || symbol === ")"
        || symbol === "."){
        console.log(symbol)
        expression.value+= symbol;
    }else if(btn.textContent === "x"){
        expression.value+= "*";
        
    }
    else if(btn.classList.contains("calculator__btn--enter")){

        enter();

    }else if(btn.classList.contains("calculator__btn--action")){
        expression.value+= btn.textContent
    }else if(btn.classList.contains("calculator__btn--clean")){
        expression.value = expression.value.slice(0, -1)
        if(expression.value.length === 0)
            expression.value = 0;
    }else if(symbol === "Xi"){
        expression.value+= "^"
    }


}
calculatorPanel.addEventListener("click", btnClick);

function enter(){
    try{
        console.log(expression.value);
        value.value = eval(expression.value).toFixed(2);
        expression.value = "0";
    }catch{
        value.value = "error";
    }
}

expression.addEventListener('keydown', function(event){
    console.log(expression.value)
    if (expression.value === "Hello here!"){
        expression.value = ""
    }
    if (event.keyCode === 13){
        enter()
    }

    console.log(event.keyCode)
})
document.addEventListener('mousedown', function(e){
    e.preventDefault();
    expression.focus();
})


var blackModeBtn = document.querySelector(".calculator__mode-btn--black");
var whiteModeBtn = document.querySelector(".calculator__mode-btn--white")
blackModeBtn.addEventListener('click', function(event){
    document.body.classList.toggle("black")
})
whiteModeBtn.addEventListener('click', function (event) {
    document.body.classList.toggle("black")
})




expression.focus()
