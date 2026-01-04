document.getElementById('cashout_btn').addEventListener('click',function(event){
    event.preventDefault();
    // const cashout_amount=document.getElementById('cashout_amount').value;
    // const cashout_amount_float = parseFloat(cashout_amount);

    const cashout_amount_float = getInputValueById('cashout_amount');

    // const cashout_pass=document.getElementById('cashout_pass').value;
    // const cashout_pass_float = parseFloat(cashout_pass);

    const cashout_pass_float = getInputValueById('cashout_pass');

    
    // const view_amount = document.getElementById('view_amount').innerText;
    // const make_float_view_amount = parseFloat(view_amount);


    const make_int_account_key = getInputValueById('account_key');

    const make_float_view_amount = getInputValueByTextInnerId('view_amount');


    if(cashout_amount_float>make_float_view_amount){
        alert("Invalid input");
        return;
    }

    if(cashout_pass_float==1234){
        const total=make_float_view_amount-cashout_amount_float;
        //document.getElementById('view_amount').innerText=total;
        setInnerTextByIddandvalue('view_amount',total);


        const p = document.createElement('p');
        p.innerText=`
        Cashout ${cashout_amount_float} from account ${make_int_account_key}
        `
        const container = document.getElementById('transection_container');
        container.appendChild(p)
        
    }
    else{
        alert('there is a error in the password');
    }
})