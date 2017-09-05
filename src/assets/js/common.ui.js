$(document).ready(function() {
    /* Wow Effect */
    new WOW().init();

    function bindNavbar() {
        if ($(window).width() > 768) {
            $('.navbar-inverse .dropdown').on('mouseover', function(){
                $('.dropdown-toggle', this).next('.dropdown-menu').show();
            }).on('mouseout', function(){
                $('.dropdown-toggle', this).next('.dropdown-menu').hide();
            });
            
            $('.dropdown-toggle').click(function() {
                if ($(this).next('.dropdown-menu').is(':visible')) {
                    window.location = $(this).attr('href');
                }
            });
        }
        else {
            $('.navbar-inverse .dropdown').off('mouseover').off('mouseout');
        }
    }
    
    $(window).resize(function() {
        bindNavbar();
    });
    
    bindNavbar();
    
    // Click event to Scroll to Top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    // Write Your JS Here
    $(function() {
        $('.js-imageslider').imageslider({
            slideItems: '.my-slider-item',
            slideContainer: '.my-slider-list',
            slideDistance: 3,
            slideDuratin: 300,
            resizable: true,
            pause: false
        });
    });
    
})

/* Equal Height */
equalheight = function(container) {
    var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function() {
    equalheight('.match-height');
});

$(window).resize(function() {
    equalheight('.match-height');
});