const removeFromArray = function(array, val,...moreVal) {
            
        for(let i = 0;i < array.length;i++){
            let j = 0;
            

            while(j<moreVal.length){
                if (array[i]== moreVal[j] && typeof array[i] == typeof moreVal[j]){
                    array.splice(i,1);
                }
                j++;
            }

            if (array[i]== val && typeof array[i] == typeof val){
                array.splice(i,1);
                i--;
            }
        }
    
    return array;
};

console.log(removeFromArray([1, 2, 3], "1", 3))
// Do not edit below this line
module.exports = removeFromArray;
