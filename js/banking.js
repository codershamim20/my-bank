function getInput(inputId) {
    const inputField = document.getElementById(inputId)
    const inputText = inputField.value;
    const inputNumber = parseFloat(inputText)
    // clear the field
    inputField.value = '';
    return inputNumber;
}
function updateField(totalField,inputNumber) {
    const fieldTotal = document.getElementById(totalField)
    totalText = fieldTotal.innerText;
    const previousTotal = parseFloat(totalText)
    fieldTotal.innerText = inputNumber + previousTotal
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance')
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    return balanceTotalNumber;
}
function updateBalance(depositInputNumber, isAdd) {
    const balanceTotal = document.getElementById('balance')
    const balanceTotalNumber=getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalNumber + depositInputNumber;
    }
    else {
        balanceTotal.innerText = balanceTotalNumber - depositInputNumber;
    }
}
document.getElementById('deposit-button').addEventListener("click", function () {
    const depositInputNumber=getInput('deposit-input')
    if (depositInputNumber > 0) { 
    const previousdepositTotal= updateField('deposit-total',depositInputNumber) 
    const update= updateBalance(depositInputNumber,true)
    }
    
})
document.getElementById('withdraw-button').addEventListener("click", function () {
    const withdrawInputNumber = getInput('withdraw-input')
    const currentBalance=getCurrentBalance()
    if (withdrawInputNumber > 0 && withdrawInputNumber<currentBalance) {
        const previouswithdrawTotal=updateField('withdraw-total',withdrawInputNumber)
        const update= updateBalance(withdrawInputNumber,false)
    }
    if (withdrawInputNumber > currentBalance) {
        alert("You can not withdraw more money than you have")
    }
})