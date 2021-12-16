function valorPar(valor){
    let nums = [];
    for(let i = 0; i < valor.length; i++){
        if(valor[i] % 2 === 0){
            nums.push(valor[i]);
        } else {
            console.log(`${valor[i]} não é par`);
        }
    }
    console.log('Os números pares são: ' + nums);
}

var array = [1,2,3,4,5,6,7,8,10];

valorPar(array);
