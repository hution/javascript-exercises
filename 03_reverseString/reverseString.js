const reverseString = function(string) {
    let tempString = '';
    let currentPos = string.length;
    for(let i = 0; i < string.length; i++){

        tempString += string[currentPos-1];
        currentPos--;
        // console.log(tempString);
    }
    return tempString
    

};
// Do not edit below this line
module.exports = reverseString;
