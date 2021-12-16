var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function decrement() {
    //if(currentNumber > 0){
        currentNumber = currentNumber -1;
        currentNumberWrapper.innerHTML = currentNumber;
        if(currentNumber < 0)
            currentNumberWrapper.style.color = 'red';
        else
            currentNumberWrapper.style.color = 'blue';
    //}    
}

function increment() {
    //if(currentNumber < 10){
        currentNumber = currentNumber +1;    
        currentNumberWrapper.innerHTML = currentNumber;
        if(currentNumber < 0)
            currentNumberWrapper.style.color = 'red';
        else
            currentNumberWrapper.style.color = 'blue';
    //}
}

