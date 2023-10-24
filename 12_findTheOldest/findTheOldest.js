const findTheOldest = function(list) {
    let oldest = 0;
    const ordered = list.sort((a,b) => ((a.yearOfDeath || 2023) - a.yearOfBirth) < ((b.yearOfDeath || 2023) - b.yearOfBirth) ? 1 : -1);
    return ordered[0]
};


// Do not edit below this line
module.exports = findTheOldest;
