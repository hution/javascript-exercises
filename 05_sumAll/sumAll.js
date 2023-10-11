const sumAll = function(num1, num2) {
    let totalSum = 0;
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }else if(typeof num1 != "number" || typeof num2 != "number")
    {
        return "ERROR";
    }

    if (num1 > num2){
        let tempNum = num2;
        num2 = num1;
        num1 = tempNum;
    }


    for(let i = num1; i <= num2; i++){
        totalSum = totalSum+i;
    }
    return totalSum;
};

console.log(sumAll(123, 1))
// Do not edit below this line
module.exports = sumAll;
