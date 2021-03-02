// function home(){
//     let content = document.getElementById('home').innerHTML;
//     document.write(content);
// }

function showContent(){
    let tablinks;
    let tabcontent = document.getElementsByClassName('tabcontent');
    for(let i = 0;i < tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    } 

    let tablinks = document.getElementsByClassName('tablinks');
    for(let i = 0;i < tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace("active","");
    }
}

// function pageRedirect(){
//     window.location.href = "./home.js";
// }