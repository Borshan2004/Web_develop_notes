document.getElementById('add_m_boxoney').addEventListener('click', function (event) {
    event.preventDefault();
    // const password_key = document.getElementById('pass_key').value;
    // const make_int_password_key = parseInt(password_key);


    // const amount_key = document.getElementById('amount_key').value;
    // const make_int_amount_key = parseFloat(amount_key);



    // const view_amount = document.getElementById('view_amount').innerText;
    // const make_int_view_amount = parseFloat(view_amount);
               

    //use the function 
    const make_int_password_key = getInputValueById('pass_key');
    const make_int_amount_key = getInputValueById('amount_key');
    const make_int_account_key = getInputValueById('account_key');
    const make_int_view_amount= getInputValueByTextInnerId('view_amount');
    const bank = document.getElementById('allbank').value;
    

    if(make_int_amount_key<0){
        alert("Invalid input is given");
        return;
    }

    if (amount_key && pass_key) {
        if (make_int_password_key == 1234) {

            const sum = make_int_amount_key + make_int_view_amount;

            // document.getElementById('view_amount').innerText = sum;

            setInnerTextByIddandvalue('view_amount',sum);

            
            // const p = document.createElement('p');
            // p.innerText=`
            // Added ${make_int_amount_key} from account number ${make_int_account_key}
            // `
            
            
            // const container = document.getElementById('transection_container');
            // container.appendChild(p);


            const div = document.createElement('div');
            div.classList.add('bg-red-400');
            div.innerHTML=`
            
            <h1 class='text-yellow-300'>Added item </h1>
            <h3>Bank:${bank}     Amount: ${make_int_amount_key}      Account: ${make_int_account_key}</h3>

            `

             const container = document.getElementById('transection_container');
             container.appendChild(div);


        }
        else {
            alert("Password is not correct");
        }
    }
    else {
        alert("please enter the amount and password")
    }




})