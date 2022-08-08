function isLeapYear(year){
    const remainder = year%2;
    if (remainder==0){
        console.log('this is leap year',year);
    }
    else{
        console.log('this is not leap year',year);
    }
}

const check=isLeapYear(2020);
const check1=isLeapYear(2021);
