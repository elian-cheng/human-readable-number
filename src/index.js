module.exports = function toReadable (number) {
    let num = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
      ];
      let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
      ];
        if (number === number.toString()) {
          return "not a number";
        }
        else if (number < 0) {
          return "can not read negative numbers";
        }
        else if (number >= 1000000) {
          return "can not read numbers over 1000000";
        }
        else if (Number.isInteger(number) === false) {
            return "can not read decimal numbers";
           }
        else if (number < 20) {
          return num[number]; 
         }
        else if (number < 100) {
          return tens[~~(number/10)-2] + (number%10 ? " " + num[number%10]: "");
         }    
        else if (number < 1000) {
          return num[~~(number/100)] +" hundred" + (number%100 === 0? "": " " + toReadable(number%100));
         }
          else {
          return toReadable(~~(number/1000)) + " thousand" + (number%1000 !== 0? " " + toReadable(number%1000): "");
      }
      }
