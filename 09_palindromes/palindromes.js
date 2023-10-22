const palindromes = function (val) {
    let newVal = val.replace(/\W/g, '');
    let lowerVal = newVal.toLowerCase();
    let wordLen = newVal.length;
    let reverseVal = lowerVal.split("").reverse().join("");

    for(let i = 0; i < wordLen;i++){
        if (lowerVal.charAt(i) != reverseVal.charAt(i))
        {
            return false;
        }

    }
    return true;


};

// Do not edit below this line
module.exports = palindromes;
