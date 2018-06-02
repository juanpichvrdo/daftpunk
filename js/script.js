$(document).ready(function() {

    $(".js--header").waypoint(function(direction) {
        $(".js--header").addClass("animated zoomIn");
    }, {
        offset: "50%"
    });

    $(".js--text-1").waypoint(function(direction) {
        $(".js--text-1").addClass("rotateInDownRight").css("opacity", "1");
    }, {
        offset: "50%"
    });

    $(".js--header-2").waypoint(function(direction) {
        $(".js--header-2").addClass("rotateInDownLeft").css("opacity", "1");
    }, {
        offset: "50%"
    });

    $(".js--pic-1").waypoint(function(direction) {
        $(".js--pic-1").addClass("bounceInRight").css("opacity", "1");
    }, {
        offset: "50%"
    });

    $(".js--text-2").waypoint(function(direction) {
        $(".js--text-2").addClass("fadeIn").css("opacity", "1");
    }, {
        offset: "50%"
    });

    $(".js--pic-2").waypoint(function(direction) {
        $(".js--pic-2").addClass("fadeInLeft").css("opacity", "1");
    }, {
        offset: "50%"
    });    

    $(".js--pic-3").waypoint(function(direction) {
        $(".js--pic-3").addClass("fadeInRight").css("opacity", "1");
    }, {
        offset: "50%"
    });  

    $(".js--pic-4").waypoint(function(direction) {
        $(".js--pic-4").addClass("jackInTheBox").css("opacity", "1");
    }, {
        offset: "50%"
    });  
    
    $(".js--pic-5").waypoint(function(direction) {
        $(".js--pic-5").addClass("fadeInDownBig").css("opacity", "1");
    }, {
        offset: "50%"
    });  
    
    $(".js--pic-6").waypoint(function(direction) {
        $(".js--pic-6").addClass("fadeInDownBig").css("opacity", "1");
    }, {
        offset: "50%"
  
    });  

    $(".js--pic-7").waypoint(function(direction) {
        $(".js--pic-7").addClass("fadeInDownBig").css("opacity", "1");
    }, {
        offset: "50%"
    });  

    $(".js--pic-8").waypoint(function(direction) {
        $(".js--pic-8").addClass("fadeInDownBig").css("opacity", "1");
    }, {
        offset: "50%"
    });  

    // Change animation for showcase

});