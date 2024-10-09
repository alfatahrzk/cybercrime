$(document).ready(function() {
    // Smooth scroll for navbar links
    $('#nav-main a').on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store the anchor's href
        var target = this.hash;

        // Animate the scroll to the target
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000, function() {
            // Add hash to URL when done (default click behavior)
            window.location.hash = target;
        });
    });
});
