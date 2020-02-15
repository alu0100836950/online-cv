jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    $('.cap').css('opacity', 0.7);

    let growBars = () => {
        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            var opacity = parseInt(itemWidth)
    
            $(this).css('opacity', 0.7)

            if (parseInt($(this).data('level')) < 40) {
                $(this).css('background', '#D85858')
            }
            else if(parseInt($(this).data('level')) < 75) {
                $(this).css('background', '#D8D061')
            }
            else {
                $(this).css('background', '#49AE61')
            }
            
            $(this).animate({
                width: itemWidth
            }, 1500);
            
        });
    }

    let checkVisible = () => {
        var top_of_element = $('#start-grow').offset().top;
        var bottom_of_element = $('#start-grow').offset().top + $('#start-grow').outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
    
        if ((bottom_of_screen > top_of_element + 50) && (top_of_screen < bottom_of_element))
            growBars();
    }

    $(window).scroll(function() {
        checkVisible();
    });
   

});