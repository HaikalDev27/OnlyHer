//for envelope mechanism

let button = document.querySelector('.button');
let letter = document.getElementById('letter');
let main = document.getElementById('main');

button.onclick = function(){
    main.classList.toggle("active");
    letter.removeAttribute("hidden");
}

const envelope = document.querySelector('.envelope');
const popup = document.querySelector('.popup');

envelope.onclick = function() {
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}