document.getElementById('add_money').addEventListener('click',function(event){
    event.preventDefault();
    const password_key = document.getElementById('pass_key').value;
    const make_int_password_key = parseInt(password_key);


    const amount_key = document.getElementById('amount_key').value;
    const make_int_amount_key = parseFloat(amount_key);

      
    
    const view_amount = document.getElementById('view_amount').innerText;
    const make_int_view_amount = parseFloat(view_amount);


    if(make_int_password_key==1234){

        const sum = make_int_amount_key+ make_int_view_amount;

        document.getElementById('view_amount').innerText=sum;

    }
    else{
        alert("Password is not correct");
    }


})