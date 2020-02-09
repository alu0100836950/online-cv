jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            var opacity = parseInt(itemWidth)
    
            $(this).css('opacity', itemWidth)
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});