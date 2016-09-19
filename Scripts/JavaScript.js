$(document).ready(function() {
    setBindings();
});


//Allow screen to Scroll to selected section
function setBindings() {
    $("nav a").click(function (tip){
        tip.preventDefault();
        var sectionID = "#" + tip.currentTarget.id + "Sect";
        //alert('button id ' + sectionID);
        
        $("html body").animate({
            scrollTop: $(sectionID).offset().top
        }, 1000)
    })
}