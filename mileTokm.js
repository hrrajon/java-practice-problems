function mileToKm(miles){
    const km =miles*1.60934;
    return km;
}

const myWalk = 2;
const myWalkInkm =mileToKm(myWalk);
myCalculation=myWalkInkm.toFixed(3);
console.log('My morning walk:',myCalculation);
