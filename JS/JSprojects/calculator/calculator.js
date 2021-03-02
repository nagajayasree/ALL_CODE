var display = document.getElementById('display');
var inputs = document.querySelectorAll('table button.btn');
//alert(display.innerText);
//alert(inputs[0].innerText);
//document.write(inputs[0].innerHTML);

            function setValue(){
                for(let i=0;i<=inputs.length-1;i++){
                    display.innerHTML = inputs[i].innerHTML;

                }


            }