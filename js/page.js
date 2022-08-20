document.getElementById('btnd').addEventListener('click',function(){
    
    const depositField = document.getElementById('depositM');
    const depositAmount = depositField.value;
    const newDepositAmount = parseFloat(depositAmount); //to change input mood string to float
    //console.log(newDepositAmount)
    // console.log(depositAmount);
    const depostiTotalElement = document.getElementById('dtotal');
    const depostiTotal = depostiTotalElement.innerText;
    const newDepositTotal = parseFloat(depostiTotal);
    // depostiTotalElement.innerText = depositAmount;
    const currentdTotle = newDepositAmount + newDepositTotal;
    depostiTotalElement.innerText = currentdTotle;
})