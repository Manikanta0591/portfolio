$(document).ready(function() {
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 56 
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        $('.nav-link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos + 60 && refElement.position().top + refElement.height() > scrollPos + 60) {
                $('.nav-link').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    });
});