$(document).on("pagecreate", "#portfolio-page", function() {

    // --- COMPORTAMENTO 1: Rolagem Suave para as âncoras ---
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 50 
            }, 1000);
        }
    });

    // --- COMPORTAMENTO 2: Animação de Fade-in ao Rolar ---
    var $sections = $('.fade-in-section');

    function checkInView() {
        var windowHeight = $(window).height();
        var windowTopPosition = $(window).scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($sections, function() {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('visible');
            }
        });
    }

    $(window).on('scroll resize', checkInView);
    checkInView();

});