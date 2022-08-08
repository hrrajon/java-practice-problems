function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= number){
        result = result * num;
        num++;
    }
    return result;
}
let outPut=factorial(7);
console.log(outPut);