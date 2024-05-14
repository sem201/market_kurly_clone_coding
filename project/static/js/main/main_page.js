/* main page - JS */
$(document).ready(function() {
    $('#item_list .item:lt(3)').addClass('active');

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height();
        var documentHeight = $(document).height();

        if (scrollTop + windowHeight == documentHeight) {
            $('#item_list .item.active:last').nextAll('.item').slice(0, 3).addClass('active');
        }
    });
});
