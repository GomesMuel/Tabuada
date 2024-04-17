//Prefixo SVMG vem de SAMUEL VICTOR MOREIRA GOMES
import { numbers, operations, display } from './querySelector.js';

let operation = null;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (display.textContent === "0") {
        display.textContent = "";
      }
      display.textContent += number.textContent;
    })
  })
  
  operations.forEach(SVMG_op => {
    SVMG_op.addEventListener("click", () => {
      let tabuada = "";
      const num = parseFloat(display.textContent);
      for (let i = 1; i < 11; i++) {
        let resultado;
        switch (SVMG_op.textContent) {
          case "+":
            resultado = num + i;
            break;
          case "-":
            resultado = num - i;
            if (resultado < 0) {
              resultado = i - num;
            }
            break;
          case "*":
            resultado = num * i;
            break;
          case "/":
            resultado = num / i;
            break;
        }
        tabuada += `${num} ${SVMG_op.textContent} ${i} = ${resultado}<br>`;
      }
      display.innerHTML = tabuada;
    });
  });
  
  document.getElementById("limpar")
    .addEventListener('click', () => {
      display.textContent = "0";
      operation = null;
    })