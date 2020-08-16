$(document).ready(function() {
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider();

    $('.fa-phone-square').on('click', (event) => {
        event.preventDefault();
        $('.phoneNumber').toggle();
    })
    $('.fa-envelope-square').on('click', (event) => {
        event.preventDefault();
        $('.emailAddress').toggle();
    })
})