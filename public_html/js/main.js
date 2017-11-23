$(document).ready(function() {

    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });

    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });

    /* Charts*/

    $('.chart').waypoint(function() {
        $(this).easyPieChart({
            barColor: '#3498db',
            size: '150',
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });


    /* VEGAS Home Slider */
	
	    $('#page-welcome').vegas({
        slides: [
            { src: 'img/slider/01.jpg' },
            { src: 'img/slider/02.jpg' },
            { src: 'img/slider/03.jpg' },
	    { src: 'img/slider/04.jpg' },
            { src: 'img/slider/05.jpg' }
        ],
    overlay: true
});

    $("#welcome-next").click(function() {
        $('#page-welcome').vegas('next');
    });
    $("#welcome-prev").click(function() {
       $('#page-welcome').vegas('previous');
    });

  $('#quote-carousel').carousel({
    pause: true, interval: 10000
  });

});
