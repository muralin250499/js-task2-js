//------------------------------------
//Array methods(forEach,map,filter,include,indexOf,findIndex,findIndex,reduce,slice,splice,sort,reverse,concat,pop,push,shift,unshift)


let arr1=['a','b','c',23,'murali'];
let num1=[2,3,1,5,9,2,4];
let i=0;
console.log(arr1);
//output:["a", "b", "c", 23, "murali"]

arr1.forEach(index=>console.log(index));
//for each - traverses the loop
//output:a b c 23 murali

let arr2=arr1.map(index=>index);
console.log(arr2);
//map-mapping an array to another
//output:["a", "b", "c", 23, "murali"]

let arr3=arr1.filter(index=>isNaN(index)===false)
console.log(arr3);
//filter:filters the given array based on the condition
//output:[23]

let arr4=arr1.includes('a');
console.log(arr4);
//includes:to find whether the array includes the given element or not and returns boolean
//output:true

let arr4=arr1.indexOf('c');
console.log(arr4);
//indexOf:returns the index,expects a value(for primitve datatype)
//output:2

let arr5=arr1.findIndex(index=>index===23);
console.log(arr5);
//findindex:returns a index,expects a callback(for non-primitve datatype)
//output:3

let arr6=arr1.reduce((acc,item)=>{return acc+item});
console.log(arr6);
//reduces the array into a sinlge value
//output:abc23murali

let arr7=arr1.slice(0,3);
console.log(arr7);
//slices the array from start to end
//output:["a", "b", "c"]

let arr8=arr2.splice(0,3);
console.log(arr8);
//splice cuts the elements from original array,it changes the original Array
//output:["a", "b", "c"]

console.log(num1.sort());
//sorting the Array
//output:[1, 2, 2, 3, 4, 5, 9]

console.log(num1.reverse());
//reverse the Array
//output:[9, 5, 4, 3, 2, 2, 1]

let arr11=arr9.concat(arr1);
console.log(arr11);
//concatinates two strings
//output:[9, 5, 4, 3, 2, 2, 1, "a", "b", "c", 23, "murali"]


console.log(num1.pop());
console.log(num1)



