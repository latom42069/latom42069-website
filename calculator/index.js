
let isError = false;
let isCalculated = false;
const display = document.getElementById("display");

function appendToDisplay(input){
    if (isError){
        clearDisplay();
        isError = false
    }
    if (isCalculated){
        if(input !== '+' && input !== '-' && input !== '*' && input !== '/'){
            clearDisplay();
        }
    }
    
    display.value += input;
    isCalculated = false;
}
function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
        isError = false;
        isCalculated = true;
    }
    catch(error){
        display.value = error.name.toString();
        isError = true;
    }
    finally{
        
    }
    
}