let str = "hello";
function reverseString(str){
    return str.split('').reverse().join('');
 

}
// console.log(reverseString(str));

let array1 = [1, 1, 4, 1, 5, 9];

function findLargestNumber(array1){
  return Math.max(...array1);

}
console.log(findLargestNumber(array1));

function findLargestNumber2(array1){
    let max = array1[0];
    for(let i=0;i<array1.length;i++){
        if(array1[i] > max){
            max =  array1[i];

        }
    }
    return max;

}

console.log(findLargestNumber2(array1));

