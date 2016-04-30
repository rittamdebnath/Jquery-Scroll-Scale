(function() {

    $(window).scroll(function() {
        // console.log(wScroll);
        var wScroll = $(this).scrollTop();

        $('.banner').css({
            'top': '-' + wScroll / 4 + 'px',
            'right': '-' + wScroll / 4 + 'px',
            'left': '-' + wScroll / 4 + 'px',
            'bottom': '0px'
        })

    });

})();
