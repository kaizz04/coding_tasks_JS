let str = "hello";
function reverseString(str){
    return str.split('').reverse().join('');
 

}
// console.log(reverseString(str));

let array1 = [3, 1, 4, 1, 5, 9];

function findLargestNumber(array1){
  return Math.max(...array1);

}
// console.log(findLargestNumber(array1));

function findLargestNumber2(array1){
    let max = array1[0];
    for(let i=0;i<array1.length;i++){
        if(array1[i] > max){
            max =  array1[i];

        }
    }
    return max;

}

// console.log(findLargestNumber2(array1));

let palindrome = "racecar";
function checkPalindrome(palindrome){
    let reverseStr = palindrome.split('').reverse().join('');
    if(palindrome === reverseStr) return true;

}

// console.log(checkPalindrome(palindrome));

let str2 = "javascript";
function countVowels(str){
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length:0;

}
// console.log(countVowels(str2));

let array2 = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(array2){
    let set1 = new Set(array2);
    return [...set1];

}
//console.log(removeDuplicates(array2));


function fizzBuzzChallenge(){
    for(let i=1;i<=100;i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz");

        }else if(i%3===0){
        
            console.log("Fizz");
        }else if(i%5===0){
            console.log("Buzz");

        }
        console.log(i);


    }
} 

// fizzBuzzChallenge();


function numberToBinary(number){
    return number.toString(2);

}
let number=10;
//console.log(numberToBinary(number));

let arr1 = [1, 2, 3, 4];
let arr2 =  [3, 4, 5, 6];

function intersection(arr1,arr2){
    return arr1.filter(value => arr2.includes(value));
}

console.log(intersection(arr1,arr2));

