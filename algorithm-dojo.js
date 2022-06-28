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

==============================================================
  
// Problem:
//The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

//Set aside the last digit; do not include it in these calculations (until step 5);
Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
If any results are larger than 9, subtract 9 from them;
Add all numbers (not just our odds) together;
Now add the last digit back in – the sum should be a multiple of 10.
For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], then after step 2) it is [5,4,2,16]. Post step 3), we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple of 10, we would instead return false.

function isCreditCardValid(digitArr) {
  // Enter code below
let reverseArr = digitArr.reverse();
  console.log(reverseArr)
  for(let i = 1; i < reverseArr.length; i++) {
    if(i % 2 !== 0) {
      // 
      reverseArr[i] *= 2;
      console.log(reverseArr[i])
      // if digit in array > 9 subtract it by 9
      if(reverseArr[i] > 9) {
        reverseArr[i] -= 9;
      }
    }
  }
  console.log('this is reverseArr',reverseArr)
  let sum = reverseArr.reduce((acc, current) => acc + current, 0);
  console.log('the sum is', sum);
  if(sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
  // return oddDigits    
}
  
  
  
  
  
  
