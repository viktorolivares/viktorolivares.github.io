    //Sticky
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 40) {
            $("#header").addClass("sticky");
        } else {
            $("#header").removeClass("sticky");
        }
    });