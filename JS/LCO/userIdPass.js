document.querySelector('.myclass').addEventListener('submit',(event) => {
    event.preventDefault();
    //console.log(event.target.username.value);
    //console.log(event.target.mailid.value);
    // console.log(event.target.password.value);
    // console.log(event.target.repassword.value);
    event.target.username.value = '';
    event.target.mailid.value = '';
    event.target.password.value = '';
    event.target.repassword.value = '';
})


function passwordCheck(){
    let passone = document.getElementById('id3').value;
    let passtwo = document.getElementById('id4').value;
    if(passone == passtwo){
        console.log('password matched');
    }
    else{
        let newPara = document.createElement('p');
        newPara.textContent = 'Could\'t Sign in,Password did not match.Try again';
        document.querySelector('.myclass').addEventListener('submit',(event) => {
            event.target.textContent = newPara.textContent;
        })
    }
}
    
    