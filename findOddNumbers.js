function getOddNumbersOfAnArray(numbers) {
    const oddNumbers =[];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [11, 15, 45, 58, 57, 95, 25, 35, 36, 68, 47];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
