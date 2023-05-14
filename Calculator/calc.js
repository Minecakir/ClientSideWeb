class Calculator{
  constructor(previousOperandTextElement,currentOperandTextElement){
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
  }

  // For C button Clear All Display Elements
  clear(){
      this.currentOperand = 0;
      this.previousOperand = 0;
      this.operation = undefined;
  }

  //Display Numbers
  appendNumber(number){
      if(this.last == true){this.currentOperand = 0;this.last = false;}
      if(this.currentOperand){
          this.currentOperand = this.currentOperand.toString() + number.toString();
      }
      else{
          this.currentOperand = number;
      }
  }

  chooseOperation(operation){
      if(this.previousOperand){
          this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
  }

  compute(){
      let computation;
      let firstNum = parseFloat(this.previousOperand);
      let secondNum = parseFloat(this.currentOperand);

      switch(this.operation){
          case '+':
              computation = firstNum + secondNum;
              break;
          case '-':
              computation = firstNum - secondNum;
                break;
            case '*':
                computation = firstNum * secondNum;
                break;
            case '/':
                computation = firstNum / secondNum;
                break;
            default:
                return;
      }
      computation = Number(computation.toFixed(2));
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = 0;
  }

  updateDisplay(){
      this.currentOperandTextElement.innerText = this.currentOperand;
      if(this.operation){
        if(isNaN(this.previousOperand)){this.previousOperand=0;}
          this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation} ${this.currentOperand}`;    
        
      }else{
        this.previousOperandTextElement.innerText = 0;
      } 
  }

  resultDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = `${this.previousOperandTextElement.innerText} ${"="}`;
    this.last = true;
  }

}

const numberButtons = document.querySelectorAll('.num');
const operationButtons = document.querySelectorAll('.op');
const equalsButton = document.querySelector('.eq');
const allClearButton = document.querySelector('.c');
const previousOperandTextElement = document.querySelector('.display-operations');
const currentOperandTextElement = document.querySelector('.display-main');

/* A light mode and a dark */
morning = true;
const background = document.querySelector(".btn-icon");

background.addEventListener('click',() =>{
  let themeCssEl = document.querySelector('#theme-css');
  if(morning){
    themeCssEl.setAttribute('href', 'light.css');
    morning = false;
  }else{
    themeCssEl.setAttribute('href', 'dark.css');
    morning = true;
  }
})

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click',() =>{
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click',() =>{
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay()
  })
  
})

equalsButton.addEventListener('click',() =>{
  calculator.compute();
  calculator.resultDisplay();
})

allClearButton.addEventListener('click',() =>{
  calculator.clear();
  calculator.updateDisplay()
})
