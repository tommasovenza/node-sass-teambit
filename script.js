

// file javascript

$(document).ready(function() {


    $('.fa-bars').click(function() {
        
        // mostra il menu a tendina
        $('.nav-container').addClass('active');
        // fissa la x in alto a destra
        $('.fa-times').addClass('set');
        
        // nasconde l'hamburger menu
        $(this).addClass('hidden');
        // mostra la x
        $('.fa-times').addClass('active');
        

    });
    
    $('.fa-times').click(function() {
        // nascondi il menu a tendina
        $('.nav-container').removeClass('active');
        
        $('.fa-times').removeClass('active');


        $('.fa-bars').removeClass('hidden');
        

    });

});