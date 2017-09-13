$(document).ready(function() {
    /* Wow Effect */
    new WOW().init();


    
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

    // Partners
    $(function () {
        $('.marquee').marquee({
            duration: 8000,
            duplicated: true,
            gap: 00, 
            direction: 'left',
            pauseOnHover: true
        });
    });
    
})

function show() {
   $('#showBox').show( "slow" );
}

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