// Problem set:
// Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.

// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (1234.56,-1), return 5.

// SOLUTION:
function extractDigit(num, digitNum) {
  var separator = 1;
  if(digitNum >= 0) {
    for(var i = 0; i < digitNum; i++) {
      separator = separator * 10;
      console.log('separator is', separator);
    }
    console.log('positive separator is', separator);
    var remainder = num % separator;
    num = (num - remainder) / separator;
    console.log('num is now', num)
    num = num % 10;
    console.log('the digit that we were looking for is', num);
    return num;
  } // below section is for the negative side or after the dot
  else {
    var separator = 1;
    for(var i = 0; i > digitNum;i--) {
      separator = separator * 10;
    }
    console.log('separator for the negative digitNum is', separator);
    num = num * separator;
    console.log('negative num is', num);
    num = num - num % 1;
    console.log('after modulo 1 num is now', num);
    num = num % 10;
    console.log('after modulo 10 num is now', num);
    return num;
  }
}

// OR you can do it this way!!!

function extractDigit(num, digit) {
  var numString = num.toString();
  if (numString.indexOf(".", 0) < 0)
  return numString[numString.length-digitNum-1]
  if (digitNum < 0) 
  return numString[numString.indexOf(".", 0) - digitNum]
  if (digitNum >= 0)
  return numString[numString.indexOf(".", 0)-1 - digitNum]
}