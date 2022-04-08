console.log("hello abhijt");
let input = document.querySelector('.input');
let button = document.querySelector('.button');
let text = document.querySelector('.text');
let hello = document.querySelector('.hello');
let graph = document.getElementsByClassName('graph');
button.addEventListener('click', () => {
   
    if (input.value == "") {
        hello.innerHTML = '';
        text.innerHTML = " Please enter your Name";



    }
    else {
        hello.innerHTML = '';
        text.innerHTML = 'Saniya' + '<br>' + "Roth dkhte niye jabi na ";
        text.style.fontSize = '2.5rem';

    


    }



})

