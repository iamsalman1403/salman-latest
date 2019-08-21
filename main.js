function openMenu(){
    document.getElementById('sideNav').style.width = '256px';
}
function closeMenu(){
    document.getElementById('sideNav').style.width = '0px';
}

function shutMenu(){
    document.getElementById('sideNav').style.width = '0px';
}

document.getElementById('shutMenu').addEventListener('click', shutMenu)


document.getElementById('shutDown').addEventListener('click', shutMenu)


//scroll
ScrollReveal().reveal('#headScroll', {
  duration: 2000, easing:'ease-in'
});

//Smooth scroll
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                window.location.hash = hash;
            });
        } 
    });
});

//quote
document.getElementById('Quote').style.display = 'none';

var quote = document.getElementById('Quote');
var modal = document.getElementById('Modal');
var modal2 = document.getElementById('Modal2');
var modal3 = document.getElementById('Modal3');
// var closeModal = document.getElementById('closeModal');

modal.addEventListener('click', openModal);
modal2.addEventListener('click', openModal);
modal3.addEventListener('click', openModal);
// modal.addEventListener('click', closeModal);

function openModal(){
    quote.style.display = 'block';
}

// function closeModal() {
//     quote.style.display = 'none';
// }
function closeModal(){
    quote.style.display = 'none';
}

