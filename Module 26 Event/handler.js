//this is for the first one 
document.getElementById('btn_work').addEventListener('click', function () {
    const Title_work = document.getElementById('work_h1');
    Title_work.innerText = 'Thankyou For ordering';
})


//this is for the second one 
document.getElementById('btn_update').addEventListener('click', function () {
    const Input_collect = document.getElementById('input_work');
    const Input_collect_value = Input_collect.value;

    const update_p = document.getElementById('p_work');
    update_p.innerText = Input_collect_value;
})