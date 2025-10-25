document.getElementById('login_btn').addEventListener('click', function (event) {
    event.preventDefault();

    const input_account = document.getElementById('input_of_the_acccount').value;
    const input_password = document.getElementById('input_of_the_password').value;



    const convert_password_int = parseInt(input_password);

    if (input_account.length == 11) {
        console.log("The account number is correct");
        if (convert_password_int == 1234) {
            window.location.href = "./main.html"

        }
        else {
            alert("password is not right");
        }
    }
    else {
        console.log("The number of the password is not correct");
    }


})