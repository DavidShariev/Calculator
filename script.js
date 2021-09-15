
var calculator = document.querySelector('.calculator');
var modeBtns = document.querySelector('.calculator__modes');
var expressionInput = document.querySelector('.calculator__display-expression');
var answerInput = document.querySelector('.calculator__display-answer');
var panel = document.querySelector('.calculator__panel')

expressionInput.value = 'Hello here!';

var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '(', ')', '.', '-', '+', '/', '*']


expressionInput.focus();
modeBtns.addEventListener('click', function(event){
    document.body.classList.toggle('black-mode')
})

function keypress(event){
    event.preventDefault();
    if (this.value === "Hello here!") {
        this.value = "";
    }
    
    if (keys.indexOf(event.key) >= 0) {
        this.value += event.key
    } else if (event.key === "Enter") {
        expressionEnter();
    }

    if(event.key === 'dell'){
        expressionInput.value = expressionInput.value.slice(0, -1);
    }else if(event.key === 'dellAll'){
        expressionInput.value = "";
    }
}

function expressionEnter(){
    let expression = expressionInput.value;
    try{
        value = eval(expression).toFixed(2);
    }catch{
        value = "Error";
    }

    if(value.length >= 16){
        answerInput.value = value.slice(0, 14) + "..."
    }else{
        answerInput.value = value;
    }
    
}

expressionInput.addEventListener('focusout', function(event){
    event.preventDefault();
    expressionInput.focus();
})
expressionInput.addEventListener('input', function(event){
    event.preventDefault();
})
expressionInput.addEventListener('keypress', keypress)

panel.addEventListener('click', function(event){
    let btn = event.target.closest('.calculator__panel-btn')

    if (!btn) {
        return
    }

    let symbol = btn.textContent

    if(symbol === 'x'){
        symbol = "*"
    }if(symbol === "="){
        symbol = "Enter";
    }
    if(btn.classList.contains('calculator__panel-btn--dell-all')){
        symbol = "dellAll";
    } else if (btn.classList.contains('calculator__panel-btn--dell')){
        symbol = 'dell'
    }

    let keypressEvent = new KeyboardEvent('keypress', {'key': symbol})
    expressionInput.dispatchEvent(keypressEvent);
})