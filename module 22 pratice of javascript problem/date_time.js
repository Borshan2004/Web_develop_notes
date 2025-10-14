
const today = new Date();
console.log(today);
console.log(today.getMonth()); //there  is a  different index for this 0 means january
console.log(today.getDay());//there  is a  different index for this 0 means sunday



const edit_date = new Date('2062-10-19');
console.log(edit_date);

const specific_date = new Date(2023,0,12);
console.log(specific_date);

specific_date.setMonth(10);
console.log(specific_date.toLocaleString('en-GB'));

