// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

const nums = [2,4,0,100,4,11,2602,36]

function findOutlier (arr){
    let evenNums = []
    let oddNums = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] % 2 === 0){
            evenNums.push(arr[i])
        } else {
            oddNums.push(arr[i])
        }
        // if (evenNums.length > oddNums.length){
        //     return oddNums
        // } else {
        //     return evenNums
        // }
    }
    if (evenNums.length > oddNums.length){
        return oddNums //returns the array with 1 num in it
    } else {
        return evenNums //can do evenNums[0] to return the 1 num in the array
    }
}

console.log(findOutlier(nums))

// joely's soln
// function outlier(nums){
//     let evens = [];
//     let odds = [];
  
//     for(let i = 0; i < nums.length; i++){
//       if(nums[i]%2 === 0){
//         evens.push(nums[i])
//       } else {
//         odds.push(nums[i])
//       }
//     }
    
//     if(odds.length > evens.length){
//       return evens.join('')
//     } else {
//       return odds.join('')
//     }
//   }