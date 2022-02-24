document.getElementById('Doposit-button').addEventListener('click', function () {
    const DopositInput = document.getElementById('Doposit-input');
    const DopositAmountText = DopositInput.value;
    const DopositAmount = parseFloat(DopositAmountText);

    const DopositTotal = document.getElementById('Doposit-total');
    const DopositTotalText = DopositTotal.innerText;
    const previousDopositTotal = parseFloat(DopositTotalText);

    DopositTotal.innerText = previousDopositTotal + DopositAmount;
    // update................
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(balenceTotalText);
    balenceTotal.innerText = previousBalenceTotal + DopositAmount;





    DopositInput.value = '';
})

//2....................
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const WithdrawInput = document.getElementById('Withdraw-input');
    const WithdrawAmountText = WithdrawInput.value;
    const WithdrawAmount = parseFloat(WithdrawAmountText);
    const WithdrawTotal = document.getElementById('Withdraw-total');
    const previousWithdrawTotalText = WithdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    WithdrawTotal.innerText = previousWithdrawTotal + WithdrawAmount;


    //...............

    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(balenceTotalText);
    balenceTotal.innerText = previousBalenceTotal - WithdrawAmount;


    WithdrawInput.value = '';
})