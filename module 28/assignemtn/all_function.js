function task_assign_increase(id){
    const task_assign_s= document.getElementById(id).innerText;
    let task_assign_int = parseInt(task_assign_s);
    task_assign_int--;
    if(task_assign_int==0){
        alert("Congrates you have completed all the currect tasks");
    }
    document.getElementById(id).innerText=`0${task_assign_int}`;

}

function task_assign_decrease(id){
    const task_assign_s= document.getElementById(id).innerText;
    let task_assign_int = parseInt(task_assign_s);
    task_assign_int++;

    document.getElementById(id).innerText=task_assign_int;

}
