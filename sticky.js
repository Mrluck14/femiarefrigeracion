window.onscroll = function() { stickyHeader() };

var header = document.querySelector('.navbar');
var slider = document.querySelector('.section-nosotros');
var sliderHeight = slider.offsetHeight;

function stickyHeader() {
if (window.pageYOffset > sliderHeight) {
    header.classList.add('sticky');
} else {
    header.classList.remove('sticky');
}
}