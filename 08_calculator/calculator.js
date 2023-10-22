const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(vals) {
	let sum = 0;
  vals.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function(vals) {
  let product = 1;
  vals.forEach((element) => {
    product *= element;
  });
  return product;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(val) {
	if (val == 0){
    return 1;
  }
  else {
    return (val * factorial(val-1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
