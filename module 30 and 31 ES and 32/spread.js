const arr = ["borshan","hasan","rahim"];
console.log(arr);
//three dot are used for spread and using this we can excess the value inside element
console.log(...arr);

const friends =["sakib",...arr];
console.log(friends);


//Math.max only work inside the element of the array so we need to use the ... here
const numbers=[10,343.5,62,56,12,54,12,55,1,4,545,445,151];
console.log(Math.max(...numbers));