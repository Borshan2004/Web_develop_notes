const sentence = 'Borshan purification';

// let reverse='';

// for(const i of sentence){

//    reverse = i + reverse;

  
// }

// console.log(reverse);



let reverse = '';
for(let i=0;i<sentence.length;i++){
    const letter = sentence[i];
    reverse= letter +reverse;
}

console.log(reverse);