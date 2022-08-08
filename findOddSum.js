function getSumOfAnArray(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        const index =i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index,element,sum);
    }
    return sum;
}

const myNumbers = [12, 14, 45, 145, 75, 78, 65, 85, 48];
getSumOfAnArray(myNumbers);