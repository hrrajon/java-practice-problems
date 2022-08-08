// 1+2+3+4+5+6+7

function sumOfNumbers(numbers){
    let sum=0;
    for(let i = 0 ; i <= numbers;i++){
        sum = sum + i;
        console.log(i, sum);
    }
}

let check = sumOfNumbers(10);