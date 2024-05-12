//1. Logic of Array.prototype.reduce
//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
//Parameters - reduce(callbackFn, initialValue)     callbackFn(accumulator, currentValue, currentIndex, array)

Array.prototype.reduceOverwritten = function(callBack, initialValue = this[0]){
    let acc = initialValue === undefined ? this[0] : initialValue

    for(let i = 0; i < this.length; ++i){
        acc = callBack(acc, this[i], i, this)
    
    }

    return acc
}


//Usage

// let numbersArray = [1,2,5,3,6,9]
// let result = numbersArray.reduceOverwritten((accumulator, val, index, array) => {
//     return accumulator * val
// }, 2)
// console.log(result)




//2. Logic of Array.prototype.from
//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
//Parameters  - Array.from(arrayLike, mapFn, thisArg)  mapFn(element, index)


Array.fromOverwritten = function(arrayLike, mapFn, thisArg){
    let shallowCopy = []
    for(let i = 0; i < arrayLike.length; ++i){
        if(mapFn){
            shallowCopy.push(mapFn(arrayLike[i]))
        }else{
            shallowCopy.push(arrayLike[i])
        }

    }

    return shallowCopy
}

//usage

// let str = "asdf"
// console.log(Array.fromOverwritten(str))

// let array = [1,2,3,6]
// console.log(Array.fromOverwritten(array, (x) => {
//     return x + x
// }))





//3. Logic of Array.proptotype.at
//The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
//Parameters - at(index)

Array.prototype.atOverwritten = function(index){
    return index >= 0 ? this[index] : this[this.length + index]
}

//Usage
// let array = [1,2,3,6]
// console.log(array.atOverwritten(-3))



//4. Logic of Array.proptotype.concat
// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
//Parameters - concat(value1, value2, /* …, */ valueN)

Array.prototype.concatOverwritten = function(...arg){
    let shallowCopy = []
    let iteration = 0

    for(let i = 0; i < this.length; ++i){
        shallowCopy.push(this[i])
    }

    while(iteration >= arg.length){
        for(let i = 0; i < arg[i].length; ++i){
            shallowCopy.push(arg[i])
        }

        ++iteration
    }

    return shallowCopy
}

//usage

// let array = [1,2,5,3,6]
// let anotherArray = [5,2,6,9,3,8]
// let anotherArray1 = [12,3,45]
// console.log(array.concat())
// console.log(array.concat() ===array)
// console.log(array.concat(anotherArray))
// console.log(array.concat(anotherArray, anotherArray1))



//5. Logic of Array.prototype.copyWithin 
//The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.
// copyWithin(target, start)
// copyWithin(target, start, end)


Array.prototype.copyWithinOverwritten = function(target, start, end = this.length - 1){
    
    target = target >= 0 ? target : this.length + target

    let newArray = [];

    for(let i = 0; i < this.length; ++i){
        if(i === target){
            while(start < end){
                newArray.push(this[start])
                ++start
                ++i
            }
        }
        newArray.push(this[i])
    }

    newArray.length = this.length
    return newArray
}

// usage

// let array = [1,2,3,4,5]
// console.log(array.copyWithinOverwritten(-2,2,4))



//6. Logic of Array.prototype.entries
//The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
//Parameters -  entries()

Array.prototype.entriesOverwritten = function(){
    let range = {
        start: 0,
        end: this.length
    }

    range[Symbol.iterator] = () => {
        return({
            start: this.start,
            end: this.end,
            next(){
                if(this.start < this.end){
                    return {
                        value: [this.start++, this[this.start - 1]]
                    }
                }else{
                    return {
                        done: true
                    }
                }
            }
        })
    }

    let result = range[Symbol.iterator]()
    return result
}


// const array = ['a', 'b', 'c'];
// let res = array.entriesOverwritten()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())




//7. Logic of Array.prototype.every
//The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
//Parameters - 
// every(callbackFn)
// every(callbackFn, thisArg)    callbackFn(element, index, array)

Array.prototype.everyOverwritten = function(callbackFn, thisArg){
    for(let i = 0; i < this.length; ++i){
        if(!callbackFn(this[i], this)){
            return false
        }
    }

    return true
}

// usage
// let array = [1,2,3,6,5]
// console.log(array.everyOverwritten((val) => val < 0))




// 8. Logic of Array.prototype.fill
// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.
// fill(value)
// fill(value, start)
// fill(value, start, end)

Array.prototype.fillOverwritten = function(value, start, end){
    let newArray = []
   
    if(start === undefined && end === undefined){
        for(let i = 0; i < this.length; ++i){
            newArray.push(value)
        }
    }else if(end === undefined) {
        for(let i = 0; i < this.length; ++i){
            if(i >= start){
                newArray.push(value)
            }else{
                newArray.push(this[i])
            }
        }
    }else{
        for(let i = 0; i < this.length; ++i){
            if(i >= start && i < end){
                newArray.push(value)
            }else{
                newArray.push(this[i])
            }
        }
    }
    
    return newArray
}

// usage
// let array = [2,5,3,6,9]
// console.log(array.fillOverwritten(2))
// console.log(array.fillOverwritten(2,2))
// console.log(array.fillOverwritten(2,2,4))



// 9. Logic of Array.prototype.filter
//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// filter(callbackFn)
// filter(callbackFn, thisArg)  callbackFn(element, index, array)


Array.prototype.filterOverwritten = function(callbackFn, thisArg){
    let newArray = []
    for(let i = 0; i < this.length; ++i){
        if(callbackFn(this[i], i, this)){
            newArray.push(this[i])
        }
    }

    return newArray
}

//usage
// let array = ['hye', 'hello', 'greatings']
// console.log(array.filterOverwritten((val) => val.length > 4))




// 10. Logic of Array.prototype.find
// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// find(callbackFn)
// find(callbackFn, thisArg)    callbackFn(element, index, array)


Array.prototype.findOverwritten = function(callbackFn, thisArg){
    for(let i = 0; i < this.length; ++i ){
        if(callbackFn(this[i], i, this)){
            return this[i]
        }
    }
}

// usage
// let array = [1,2,5,3,6]
// console.log(array.findOverwritten((val) => val > 3))





//11. Logic of Array.prototype.findIndex
//The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)    callbackFn(element, index, array)


Array.prototype.findIndexOverwritten = function(callbackFn, thisArg){
    for(let i = 0; i < this.length; ++i ){
        if(callbackFn(this[i], i, this)){
            return i
        }
    }

    return -1
}

// usage
// let array = [1,2,5,3,6]
// console.log(array.findIndexOverwritten((val) => val > 3))





//12. Logic of Array.prototype.findLast
//The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
//findLast(callbackFn)
//findLast(callbackFn, thisArg)   callbackFn(element, index, array)


Array.prototype.findLastOverwritten = function(callbackFn, thisArg) {
    for(let i = this.length - 1; i >= 0; --i ){
        if(callbackFn(this[i], i, this)){
            return this[i]
        }
    }
}


// usage
// let array = [10,2,15,3,6]
// console.log(array.findLastOverwritten((val) => val > 9))





//13. Logic of Array.prototype.findLastIndex
//The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)   callbackFn(element, index, array)


Array.prototype.findLastIndexOverwritten = function(callbackFn, thisArg){
    for(let i = this.length - 1; i >= 0; --i  ){
        if(callbackFn(this[i], i, this)){
            return i
        }
    }

    return -1
}


// usage
// let array = [10,2,15,3,6]
// console.log(array.findLastIndexOverwritten((val) => val > 9))




//14. Logic of Array.prototype.flat
//The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// flat()
// flat(depth)


// Array.prototype.flatOverwritten = function(depth){
//     let newArray = []

//     let start = 0
//     do{
//         if(Array.isArray(this[start])){
//             newArray.concat(this[start])
//             start = 0
//         }else{
//             newArray.push(this[start])
//         }
//         ++start
//     }while(this[start] !== undefined)

//     return newArray
// }

// const array = [0, 1, [2, [3, [4, 5]]]];
// console.log(array.flatOverwritten())




// 15. Logic of Array.prototype.forEach
// The forEach() method of Array instances executes a provided function once for each array element.
// forEach(callbackFn)
// forEach(callbackFn, thisArg)  callbackFn(element, index, array)


Array.prototype.forEachOverwritten = function(callbackFn, thisArg) {
    for(let i = 0; i < this.length; ++i){
        callbackFn(this[i], i, this)
    }
}


// usage
// let array = [1,2,3,4]
// console.log(array.forEachOverwritten((item) => console.log(item)))


// 16. Logic of Array.prototype.includesOverwritten
// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// includes(searchElement)
// includes(searchElement, fromIndex)


Array.prototype.includesOverwritten = function(searchElement, fromIndex = 0){

    fromIndex = fromIndex >= 0 ? fromIndex : this.length + fromIndex

    for(let i = fromIndex; i < this.length; ++i){
        if(this[i] === searchElement){
            return true
        }
    }

    return false
}


//usage
// let pets = ['cat', 'dog', 'bat'];
// console.log(pets.includesOverwritten('cat', -3));




//  17. Logic of Array.prototype.indexOf
// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)


Array.prototype.indexOfOverwritten = function(searchElement, fromIndex = 0){

    fromIndex = fromIndex >= 0 ? fromIndex : this.length + fromIndex

    for(let i = fromIndex; i < this.length; ++i){
        if(this[i] === searchElement){
            return i
        }
    }

    return -1
}


//usage
// let pets = ['cat', 'dog', 'bat'];
// console.log(pets.indexOfOverwritten('cat'));





// 18. Logic of Array.prototype.join
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// join()
// join(separator)


Array.prototype.joinOverwritten = function(separator = ","){
    let result = ""

    if(this.length === 1){
        return this[0]
    }else{
        for(let i = 0; i < this.length; ++i){
            result += this[i] + (i !== this.length - 1 ? separator : "")
        }
    }

    return result
}


// usage
// let array = [1,2,3,6,5]
// console.log(array.joinOverwritten())





// 19. Logic of Array.prototype.keys
// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
// parameters - keys()


Array.prototype.keysOverwritten = function() {
    let range = {
        start: 0,
        end: this.length
    }

    range[Symbol.iterator] = () => {
        return({
            start: this.start,
            end: this.end,
            next(){
                if(this.start < this.end){
                    return {
                        done: false, value: this.start++
                    }
                }else{
                    return {
                        done: true
                    }
                }
            }
        })
    }

    let result = range[Symbol.iterator]()
    return result
}

// const array = ['a', 'b', 'c'];
// let res = array.keysOverwritten()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())




// 20. Logic of Array.prototype.lastIndexOf
// The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)

Array.prototype.lastIndexOfOverwritten = function(searchElement, fromIndex = 0){
    fromIndex = fromIndex >= 0 ? fromIndex : this.length + fromIndex

    for(let i = this.length - 1; i >= fromIndex; --i){
        if(this[i] === searchElement){
            return i
        }
    }

    return -1
}

// usage
// let array = [1,2,3,6,5]
// console.log(array.lastIndexOfOverwritten(6, 4))




// 21. Logic of Array.prototype.map
// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// map(callbackFn)
// map(callbackFn, thisArg)  callbackFn(element, index, thisArg)


Array.prototype.mapOverwritten = function(callbackFn, thisArg){
    let newArray = []

    for(let i = 0; i < this.length; ++i){
        newArray.push(callbackFn(this[i], i, this))
    }

    return newArray
}

// usage
// let array = [1,2,3,4,5]
// console.log(array.mapOverwritten((val) => val * val))




// 22. Logic of Array.prototype.pop
// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
// Parameters - pop()


Array.prototype.popOverwritten = function(){
    let elem = this[this.length - 1]

    this.length = this.length - 1

    return elem
}


// usage
// let array = [1,2,3,4,5]
// console.log(array.popOverwritten())




// 23. Logic of Array.prototype.push
// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// push()
// push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)


Array.prototype.pushOverwritten = function(...args){

    if(args.length === 1){
        this[this.length] = args[0]
    }else{
        for(let i = 0; i < args.length; ++i){
            this[this.length] = args[i]
        }
    }

    // console.log(this)
    return this.length
}

//usage 
// let array = [1,2,3,4,5]
// console.log(array.pushOverwritten(9,10,11))




// 24. Logic of Array.prototype.reverse
// The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
// Params - reverse()


Array.prototype.reverseOverwritten = function(){

    for(let i = 0; i < (this.length) / 2; ++i ){
        let tmp = this[i]
        this[i] = this[this.length - 1 - i]
        this[this.length - 1 -i] = tmp
    }

    return this
}


// usage
// let array = [1,2,3,4,5]
// console.log(array.reverseOverwritten())





//25. Logic of Array.prototype.shift
// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
// params - shift()

Array.prototype.shiftOverwritten = function(){
    let elem = this[0]
    
    for(let i = 0; i < this.length-1; ++i){
        this[i] = this[i + 1]
    }

    this.length = this.length - 1

    return elem
}


//usage
// let array = [1,2,3,4,5]
// console.log(array.shiftOverwritten())





//26. Logic of Array.prototype.slice
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// slice()
// slice(start)
// slice(start, end)


Array.prototype.sliceOverwritten = function(start = 0, end = this.length){

    start = start >= 0 ? start : this.length + start
    end = end >= 0 ? end : this.length + end

    let shallowCopy = []
    for(let i = start; i < end; ++i){
        shallowCopy[i] = this[i]
    }

    return shallowCopy
}

//usage
// let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice());
// console.log(animals.slice(2))
// console.log(animals.slice(2, 4))
// console.log(animals.slice(2, -1));


//27. Logic of Array.prototype.some
// The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// some(callbackFn)
// some(callbackFn, thisArg)  callbackFn(element, index, thisArg)

Array.prototype.someOverwritten = function(callbackFn, thisArg){
    for(let i = 0; i < this.length; ++i){
        if(callbackFn(this[i])){
            return true
        }
    }

    return false
}



//usage
// let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.someOverwritten((val) => val.length > 5))




// 28. Logic of Array.prototype.sort
// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// sort()
// sort(compareFn)



Array.prototype.sortOverwritten = function(compareFn){
    if(!compareFn){
        for(let i = 0; i < this.length; ++i){
            for(let j = 0; j < this.length - 1 - i; ++j){
                if(this[j] > this[j + 1]){
                    [this[j], this[j+1]] = [this[j+1], this[j]]
                }
            }
        }
    }else{
        for (let i = 0; i < this.length - 1; ++i) {
            for (let j = 0; j < this.length - i - 1; ++j) {
                if (compareFn(this[j], this[j + 1]) > 0) {
                    [this[j], this[j + 1]] = [this[j + 1], this[j]];
                }
            }
        }
    }

    return this
}


console.log([2,5,1,3,6].sortOverwritten((a, b) => b-a))

// 29. Logic of Array.prototype.splice
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


Array.prototype.spliceOverwritten = function(start, deleteCount = 0, ...args){
    let loopCount = start + deleteCount

    for(let i = 0; i < loopCount; ++i){
        let elem = 0
        if(i >= start && elem < deleteCount){   
            this[i] = args[elem]
            ++elem
        }
    }

    return this
}


// let months = ['Jan', 'March', 'April', 'June'];
// months.spliceOverwritten(1, 1, 'May');
// console.log(months);
// months.spliceOverwritten(4, 1, 'May');
// console.log(months);





// 30. Logic of Array.prototype.toString
// The toString() method of Array instances returns a string representing the specified array and its elements.
// params - toString()


Array.prototype.toStringOverwritten = function(){
    let result = ""

    for(let i = 0; i < this.length; ++i){
        result += this[i]
    }

    return result
}


// usage
// let array = [1,2,3,4,5]
// console.log(array.toStringOverwritten())





// 31. Logic of Array.prototype.unshift
// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
// unshift()
// unshift(element1)
// unshift(element1, element2)
// unshift(element1, element2, /* …, */ elementN)


Array.prototype.unshiftOverwritten = function(...args){
    let start = this.length - 1

    this.length = args.length + this.length

    for(let i = this.length -1; i >= 0; --i){
        if(this[start] !==  undefined){
            this[i] = this[start]
            --start
        }else{
            this[i] = args[i]
        }
    }

    return this.length
}

//usage
// let array = [1,2,3,4,5]
// console.log(array.unshiftOverwritten(7,8))
// parameter - values()



// 32. Logic of Array.prototype.values
// The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.
// Parameters - values()




Array.prototype.valuesOverwritten = function() {
    let range = {
        start: 0,
        end: this.length
    }

    range[Symbol.iterator] = () => {
        return({
            start: this.start,
            end: this.end,
            next(){
                if(this.start < this.end){
                    return {
                        done: false, value: this[this.start++]
                    }
                }else{
                    return {
                        done: true
                    }
                }
            }
        })
    }

    let result = range[Symbol.iterator]()
    return result
}

// const array = ['a', 'b', 'c'];
// let res = array.valuesOverwritten()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())