// Write a function that takes a string as input and
// returns the number of vowels in the string.
function totalVowels(name) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  console.log(totalVowels("beaUtiful"))
  // Write a function that takes an array of numbers as input and
  // returns the sum of all the numbers.
  function totalSum(nums) {
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
      }
      return sum;
    }
    console.log(totalSum([1, 2, 3, 4, 5]))
  //   Write a function that takes two numbers as input and
  //   returns true if their sum is greater than 100, and false otherwise.
  function sumGreater(num1, num2) {
      const sum = num1 + num2;
      if (sum > 100) {
        return true;
      } else {
        return false;
      }
    }
  console.log(sumGreater(100,50));

// Write a function that takes in a array of numbers as a parameter and returns the second largest number
// in the array
function secondLargest(nums3){
    nums3.sort()
    return nums3[-2]
}
console.log(secondLargest(2,8,9,5,6))
// Write a function that takes a string as a parameter and returns true if the string is a palindrome
//  and false otherwise.
function isAPalindrome(name){
    var  name2=name.split(",").reverse("").join("")
     if(name==name2){
         return "true"
     }else
     return "false"
 }
 console.log(isAPalindrome("noon"))