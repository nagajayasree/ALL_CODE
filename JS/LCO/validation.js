function validate(){
    let myValue = document.getElementById('myform').value;
    if(isNaN(myValue) || myValue < 1 || myValue > 20){
        console.log('invalid input');
    }
    else{
        console.log("this is a valid input");
    }
}

function changeInnText(){
    let myValue = document.getElementById('myform').value;
    //console.log(myValue);
    let searchValue = document.getElementById('id1').innerText;
    //console.log(searchValue);
    if(myValue == searchValue ){
        console.log('equal');
    }
    else{
        console.log('not equal');
    }
}

// function resetInput(){
    
//}
//    let inpt = document.getElementById('myClass'),value;
//    document.querySelector('.myClass').addEventListener('input',(event) => {
//    console.log(event.target.value = '');
//    })


//tracking input form
document.querySelector('#myform').addEventListener('input',(event) => {
    console.log(event.target.value);
})


//form validation
document.querySelector('.myform').addEventListener('submit',(event) => {
    event.preventDefault();
    console.log(event.target.firstname.value);
    console.log(event.target.lastname.value);
    event.target.firstname.value = '';
    event.target.lastname.value = '';
})