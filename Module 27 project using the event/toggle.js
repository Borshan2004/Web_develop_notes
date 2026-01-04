// document.getElementById('cash_out').style.display = 'none';
// document.getElementById('transfer_money').style.display = 'none';
// document.getElementById('get_bonous').style.display = 'none';
// document.getElementById('paybill').style.display = 'none';

ToogleHandle('cash_out', 'none');
ToogleHandle('transfer_money', 'none');
ToogleHandle('get_bonous', 'none');
ToogleHandle('paybill', 'none');
ToogleHandle('transsection', 'none');


document.getElementById('add_money_box').addEventListener('click', function () {
    // document.getElementById('add_money').style.display = 'block';
    // document.getElementById('cash_out').style.display = 'none';
    // document.getElementById('transfer_money').style.display = 'none';
    // document.getElementById('get_bonous').style.display = 'none';
    // document.getElementById('paybill').style.display = 'none';
    ToogleHandle('add_money', 'block');
    ToogleHandle('cash_out', 'none');
    ToogleHandle('transfer_money', 'none');
    ToogleHandle('get_bonous', 'none');
    ToogleHandle('paybill', 'none');
    ToogleHandle('transsection', 'none');

})

document.getElementById('cash_out_box').addEventListener('click', function () {
    // document.getElementById('cash_out').style.display = 'block';
    // document.getElementById('add_money').style.display = 'none';
    // document.getElementById('transfer_money').style.display = 'none';
    // document.getElementById('get_bonous').style.display = 'none';
    // document.getElementById('paybill').style.display = 'none';

    ToogleHandle('cash_out', 'block');
    ToogleHandle('add_money', 'none');
    ToogleHandle('transfer_money', 'none');
    ToogleHandle('get_bonous', 'none');
    ToogleHandle('paybill', 'none');
    ToogleHandle('transsection', 'none');

})

document.getElementById('transfer_money_box').addEventListener('click', function () {
    // document.getElementById('transfer_money').style.display = 'block';
    // document.getElementById('add_money').style.display = 'none';
    // document.getElementById('cash_out').style.display = 'none';
    // document.getElementById('get_bonous').style.display = 'none';
    // document.getElementById('paybill').style.display = 'none';

    ToogleHandle('transfer_money', 'block');
    ToogleHandle('add_money', 'none');
    ToogleHandle('cash_out', 'none');
    ToogleHandle('get_bonous', 'none');
    ToogleHandle('paybill', 'none');
    ToogleHandle('transsection', 'none');

})

document.getElementById('get_bonous_box').addEventListener('click', function () {
    // document.getElementById('get_bonous').style.display = 'block';
    // document.getElementById('add_money').style.display = 'none';
    // document.getElementById('cash_out').style.display = 'none';
    // document.getElementById('transfer_money').style.display = 'none';
    // document.getElementById('paybill').style.display = 'none';

    ToogleHandle('get_bonous', 'block');
    ToogleHandle('add_money', 'none');
    ToogleHandle('cash_out', 'none');
    ToogleHandle('transfer_money', 'none');
    ToogleHandle('paybill', 'none');
    ToogleHandle('transsection', 'none');

})


document.getElementById('paybill_box').addEventListener('click', function () {
    // document.getElementById('paybill').style.display = 'block';
    // document.getElementById('add_money').style.display = 'none';
    // document.getElementById('cash_out').style.display = 'none';
    // document.getElementById('transfer_money').style.display = 'none';
    // document.getElementById('get_bonous').style.display = 'none';


    ToogleHandle('paybill', 'block');
    ToogleHandle('add_money', 'none');
    ToogleHandle('cash_out', 'none');
    ToogleHandle('transfer_money', 'none');
    ToogleHandle('get_bonous', 'none');
    ToogleHandle('transsection', 'none');

})


document.getElementById('trans_sactor_box').addEventListener('click', function () {

    ToogleHandle('transsection', 'block');
    ToogleHandle('paybill', 'none');
    ToogleHandle('add_money', 'none');
    ToogleHandle('cash_out', 'none');
    ToogleHandle('transfer_money', 'none');
    ToogleHandle('get_bonous', 'none');
})

function ToogleHandle(id, status) {
    document.getElementById(id).style.display = status;
}