document.getElementById('btn').addEventListener('click',function(){
    const emailField = document.getElementById('uemail');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if (email === 'abc@gmail.com' && password === 'secrit'){
        window.location.href='page.html'
    }
    else{
        alert('invalid email or password');
    }
})