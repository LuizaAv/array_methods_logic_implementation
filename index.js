
// function fib(n){
//     if(n === 0){
//         return 0
//     }

//     if(n === 1 || n === 2){
//         return 1
//     }

//     let prev = 0;
//     let current = 1;
//     let next 

//     let start = 1

//     while(start !== n){
//         next = prev + current
//         prev = current
//         current = next
//         ++start
//     }

//     return current
// }

// console.log(fib(5))


// function factorialIterative(num){
//     let result = 1
//     while(num !== 1){
//         result *= num
//         --num
//     }

//     return result
// }


// console.log(factorialIterative(5))


// function prime(num){
//     if(num <= 1){
//         return "Not prime"
//     }else if(num === 2){
//         return "Prime"
//     }

//     let start = 2
//     let end = Math.sqrt(num)
//     while(start <= end){
//         if(num % start === 0){
//             return "Not prime"
//         } 
//         ++start
//     }

//     return "Prime"
// }

// console.log(prime(47))
// console.log(prime(19))


// function isSumOfPrimeNumbers(num){
//     if(num <= 2){
//         return 0
//     }

//     let start = 2
//     let end =  Math.sqrt(num)
//     let endPoint = num
//     while(start <= end){
//         if(endPoint % 2 === 0  && start % 2 === 0){
//             return 1
//         }else{
//             --endPoint
//         }
//         ++start
//     }

//     return 0
// }

// console.log(isSumOfPrimeNumbers(5))




// function binarySearch(arr, target){
//     let start = 0
//     let end = arr.length - 1

//     while(start <= end){
//         let mid = Math.floor((end  + start)/2)

//         if(target > arr[mid]){
//             start = mid + 1
//         }else if(target < arr[mid]){
//             end = mid - 1
//         }else{
//             return mid
//         }
//     }

//     return -1
// }

// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(binarySearch(array, 7))


// function binarySearchRec(array, target, start = 0, end = array.length){
//     let mid = Math.floor((start + end)/2)
//     if(array[mid] === target){return mid}
//     if(start > end){return -1}

//     if(array[mid] > target) return binarySearchRec(array, target, start, end = mid - 1)
//     if(array[mid] < target) return binarySearchRec(array, target, start = mid + 1, end)
// }

// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(binarySearchRec(array, 52))



// function power(num, exp){
//     let result = 1

//     while(exp >= 1){
//         result *= num
//         --exp
//     }

//     return result
// }

// console.log(power(5, 2))



// function digitsOfNumber(number){
//     let copyNum = number

//     let str = ""

//     while(copyNum !== 0){
//         let remainder = copyNum % 10
//         copyNum = (copyNum - remainder) / 10
//         str += remainder

//     }

//     for(let i = str.length - 1; i >= 0; --i){
//         console.log(str[i])
//     }

// }

// console.log(digitsOfNumber(5897))




// function toBinary(num){
//     let tobinary = ""
//     let copy = num

//     while(copy !== 0){
//         let remainder = copy % 2
//         // console.log(copy)
//         copy = (copy - remainder) / 2
//         tobinary = remainder + tobinary
//     }

//     return tobinary
// }

// console.log(toBinary(16))

// function arrElemsRec(arr, elem = 0){
//     if(!arr[elem]){
//         return 
//     }

//     return arrElemsRec(arr, elem = elem + 1)
// }

// console.log(arrElemsRec(arr))


// function sumOfDigits(num, sum = 0){
//     if(num === 0){
//         return sum
//     }

//     return sumOfDigits(Math.floor((num - num % 10) / 10), sum += num % 10)
// }

// console.log(sumOfDigits(152))


// function greatDevisor(num1, num2, end = 2, start = num1 > num2 ? num2 : num1){
//     if(start < end){
//         return -1
//     }

//     if(num1 % start === 0 && num2 % start === 0){
//         return start
//     }

//     return greatDevisor(num1, num2, end = 2, start = start - 1)
// }

// console.log(greatDevisor(5,10))


// function fibRec(num){
//     if(num <= 2){return 1}
    
//     return fibRec(num - 1) + fibRec(num - 2)
// }

// console.log(fibRec(6))



// function productRec(num, prod = 1){
//     if(num === 0){ return prod}
//     prod *= num % 10
//     return productRec(Math.floor(num / 10) , prod )
// }

// console.log(productRec(514))