document.getElementById("btn_1").addEventListener("click", function () {

    button_work("btn_1", "card_1_h1", "add_here", "task_assign", "task_assign_header");

})

document.getElementById("btn_2").addEventListener("click", function () {

    button_work("btn_2", "card_2_h1", "add_here", "task_assign", "task_assign_header");

})


document.getElementById("btn_3").addEventListener("click", function () {

    button_work("btn_3", "card_3_h1", "add_here", "task_assign", "task_assign_header");

})

document.getElementById("btn_4").addEventListener("click", function () {

    button_work("btn_4", "card_4_h1", "add_here", "task_assign", "task_assign_header");

})

document.getElementById("btn_5").addEventListener("click", function () {

    button_work("btn_5", "card_5_h1", "add_here", "task_assign", "task_assign_header");

})

document.getElementById("btn_6").addEventListener("click", function () {

    button_work("btn_6", "card_6_h1", "add_here", "task_assign", "task_assign_header");

})

function button_work(id1, id2, id3, id4, id5) {
    alert("Board Updated Sucessfully");


    document.getElementById(id1).classList.remove("bg-indigo-600", "border-indigo-600");
    document.getElementById(id1).classList.add("bg-indigo-200", "border-indigo-200");

    const p = document.createElement("p");

    const card_word = document.getElementById(id2).innerText;

    p.innerText = `You have completed the task ${card_word} at 1:26:56 AM `;

    p.classList.add("bg-indigo-100", "p-3", "m-2", "rounded-md");
    document.getElementById(id3).appendChild(p);

    task_assign_increase(id4);
    task_assign_decrease(id5)

    document.getElementById(id1).disabled = true;
}




document.getElementById("Discovery_click").addEventListener("click", function () {
    window.location.href = "./index2.html"
})



document.getElementById("clear_btn").addEventListener("click", function () {
    document.getElementById("add_here").innerHTML = "";
});


let cnt = 0;
document.getElementById("theme_btn").addEventListener("click", function () {
    cnt++;
    if (cnt == 1) {
        document.body.style.backgroundColor = "white";
    }

    if (cnt == 2) {
        document.body.style.backgroundColor = "black";
    }

    if (cnt > 2) {
        cnt = 0; 
        document.body.style.backgroundColor = "oklch(93% 0.034 272.788)";
    }


})