
let operations= function(){
    let firstNumber= document.getElementById(`num1`).value;
    let operation= document.getElementById(`symbol`).value;
    let secondNumber= document.getElementById(`num2`).value;
    if (operation==="+"){
        document.getElementById(`result`).value=parseInt(firstNumber) + parseInt(secondNumber);
    }else if (operation==="-"){
        document.getElementById(`result`).value=parseInt(firstNumber) - parseInt(secondNumber);
    }else if (operation==="*"){
        document.getElementById(`result`).value=parseInt(firstNumber) * parseInt(secondNumber);
    }else if (operation==="/"){
        document.getElementById(`result`).value=parseInt(firstNumber) / parseInt(secondNumber);
    }else {
        document.getElementById(`result`).value=undefined;
    }
}
