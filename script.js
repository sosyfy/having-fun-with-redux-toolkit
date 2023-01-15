

function findMostFrequent(arr) {
    let frequency = {};
    let max = 0;
    let maxElement = null;
  
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]] === undefined) {
            frequency[arr[i]] = 1;
        } else {
            frequency[arr[i]]++;
        }
    }

    console.log(frequency);
  
    for (const key in frequency) {
        if (frequency[key] > max) {
            max = frequency[key];
            maxElement = key;
        }
    }
  
    return { element: maxElement, frequency: max };
}

let myArray = [1, 2, 3, 4, 2, 3, 5,7, 3, 1];
let result = findMostFrequent(myArray);
console.log(result); // Output: {element: 3, frequency: 3}



// functional components  vs class components 
// pure components 
// redux must do
// explaining simple hooks  , useState , useEffect , useRef , useMemo , useCallback 
// enable and disable all console logs in a projects 
// Doctype in html , what is its effect 
// css 3 vs basic css 
// box sizing in css 
// ecma script 
// let const var difference 
// arrow functions all types 
// Typescript 
// Stop set interval 
// Code to find which element appears in an array highest number of times and how many times 
// Why react over other languages  and and virtual dom 
// controlled components and uncontrolled component in React js 
// hooks in react JS 
// middleware in redux 
// difference of using a var and a let in a for loop 
// string.prototype 
// when session storage expires 
// javascript array methods those that modify the original array 
// const with primitive and non primitive 
// shallow vs deep copy  of objects
// prototype and how it works 
// when we use bind vs call and apply 
// spread vs rest operator 
// type coercion 
// middleware in node js 
// element vs component in react 
// forwardref
// interceptors
// lifecycle methods in react 
// higher order components 
// lifting up state 
// react working in 
// context api ###################
// promises 
// react hook form and  ####################
// css selectors 
// finding  number in an array 
// type of css 
// hoisting in js 
// curring in js 
// handling errors in react 
// render prop 
// react portals 
// lexical scope and global execution 
// merging vs rebasing in git 
// class based vs functional and why functional 
// usestate vs useeffect 
// strict mode in react 
// redux vs context api 
// testing in react 
// using iin8 
// fetch in js 
// 




















































































































































































































































