const repeatString = function(string, num) {
    let newString = '';
    let i = 0;
    if (num < 0){
        return "ERROR";
    }

    while (i < num){
        newString += string;

        i++;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
