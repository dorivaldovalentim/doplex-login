function clicarLogin(){
    const email = document.getElementById('emailId').value;
    const password = document.getElementById('passwordId').value;
    if(password.length < 1 || email.length < 1){
        alert("[ERRO] Campo inválido! Digite novamente para prosseguir.")
    }
}

