function isEven(number){
    const remainder = number%2;
    if (remainder==0){
        return true;
    }
    else{
        return false;
    }
}

const myNum = 84;
const checkIt=isEven(myNum);
console.log('This numbers is even',checkIt);
