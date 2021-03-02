let input = document.querySelector("p");

p = addEventListener("click",updateName);

function updateName(){
    let name = prompt('Enter new name');
    input.textContent = "Name : "+ name;  
}