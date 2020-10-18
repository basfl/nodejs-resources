const numbers = [1, 2, 3, 4]
console.log(numbers)

// const newNumbers = new Array("Hi", "welcome");
// console.log(newNumbers);

// const yetAnotherNumbers = Array.of(1, 2, 3);
// console.log(yetAnotherNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);
const newArray = Array.from(listItems);
console.log(newArray);

console.log("------");
const hobbies = ["sport", "reading"];
hobbies.push("walking"); //add element to the end 
hobbies.unshift("coding"); // add element to the begining
hobbies.pop();
hobbies.shift();
console.log(hobbies);
console.log("after splice");
hobbies.splice(1, 0, "good food");
console.log(hobbies);
const removedElem = hobbies.splice(1, 1);
console.log(hobbies, removedElem);
console.log("-----using slice to copy array");
const arr1 = [1, 2, 3.4, 8];
const arr2 = arr1.slice();
arr1.push(5.6);
console.log(arr1, arr2.slice(0, 2));
prices = [1.2, 1, 3, 4]
const tax = 0.19;
const taxAdjPrice = [];
prices.forEach((element, index, prices) => {
    const priceObj = { index: index, taxAdjObj: element * tax };
    taxAdjPrice.push(priceObj);
});

console.log(taxAdjPrice);
console.log("--------using map");
const newPriceArray = prices.map((element, index, prices) => {
    const priceObj = { index: index, taxAdjObj: element * tax };
    return priceObj;
});

console.log(newPriceArray);

const arrayNums = [1, 2];
const [n1, n2] = arrayNums;
console.log(n1, n2);