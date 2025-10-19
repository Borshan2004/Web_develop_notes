// console.log("hello this is borshan");
// console.log(document);

// const licolection = document.getElementsByTagName('li');

// for(const li of licolection){
//     console.log(li.innerText);
// }

//in the idd it will dirrectly retun what is need 
// const h1collection = document.getElementsByTagName('h1');

// for(const h1 of h1collection){
//     console.log(h1.innerText);
// }

//class can give like an array for this need to use the for loop
// const places = document.getElementsByClassName('new_class_created');

// for(const place of places){
//     console.log(place.innerText='borshan');
// }


//for use the multiple class and idd and another thing ar a time we use the querySelector
// const liSelector = document.querySelectorAll('.f_al li');
// for(const li of liSelector){
//     console.log(li.innerText);
// }


// document.getElementById('my_new_element').style.color='red';
// document.getElementById('my_new_element').style.color='brown';
// document.getElementById('my_new_element').style.backgroundColor='red';
// document.getElementById('my_new_element').style.textAlign='center';


//if i put this at the end all will work then
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border= '2px solid red';
    section.style.gap= '2px';
    section.style.marginBottom = '10px'
    section.style.backgroundColor = 'brown'
    section.style.color = 'white'
}

const new_color = document.getElementById('new_color');
//new_color.style.backgroundColor='blue'


const new_new_color = document.getElementById('new_color');
new_new_color.classList.add('my_second_new');

const places_ul= document.querySelector('#new_color ul');

const li1=document.createElement('li');
li1.innerText = 'borshan purificaion';



const thirdid=document.getElementById('thirdid');

const li2=document.createElement('li');
li2.innerText='this is new thing';

thirdid.appendChild(li2);
thirdid.appendChild(li1);



//create a full section using the javascript
//for this first need to create a idd where the first element will be add 
const add_here=document.getElementById('new_main');

const section = document.createElement('section');

const ul =document.createElement('ul');

const li_1=document.createElement('li');
li_1.innerText='borno purificaiton';

const li_2=document.createElement('li');
li_2.innerText='srabon purification';

const li_3=document.createElement('li');
li_3.innerText='songit costa';


add_here.appendChild(section);
section.appendChild(ul);
ul.appendChild(li_1);
ul.appendChild(li_2);
ul.appendChild(li_3);


//other way of doing it 
const another_section = document.createElement('section');
another_section.innerHTML=`
<h1>Borshan</h1>
` 
add_here.appendChild(another_section);