$(document).ready(function() {
    setBindings();
});


//Allow screen to Scroll to selected section
function setBindings() {
    $(".navbar ul li a").click(function (tip) {
        tip.preventDefault();
        var sectionID = $(this).attr('href');

        $("html body").animate({
            scrollTop: $(sectionID).offset().top
        }, 1000);
    });
}