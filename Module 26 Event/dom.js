// option-2

function yellocolorchange(){
    document.body.style.backgroundColor='yellow';
}

function blackcolorchange(){
    document.body.style.backgroundColor='black';
}

// option-3

const btn_color_blue = document.getElementById('btn_color_blue');

//option-3 one way
// btn_color_blue.onclick = function blueMaker(){
//     document.body.style.backgroundColor='blue';
// }

//option-3 another way

btn_color_blue.onclick= redmaker;

function redmaker(){
    document.body.style.backgroundColor='red';
}

//option -4

document.getElementById('btn_color_grren').addEventListener('click',function grrencolor(){
    document.body.style.backgroundColor='green';
})