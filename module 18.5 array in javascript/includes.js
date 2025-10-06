const friend = ['rahim','karim','hasan','hanif'];
console.log(friend.includes('rahim'));

if(friend.includes('rahim')){
    console.log("rahim is present");
}
else{
    console.log("rahim is  not present");
}


console.log(friend.indexOf('hasan'));

const ar1=[];
const t1= 20;

console.log(Array.isArray(friend));
console.log(Array.isArray(ar1));
console.log(Array.isArray(t1));