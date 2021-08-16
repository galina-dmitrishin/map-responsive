$(function() {

    $('.m4d-accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('div');

        $(this).closest('.m4d-accordion').find('div').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.m4d-accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

});


$(function() {
	$(".tabs-content").not(":first").hide();
	$(".tabs-head .tab").on("click", function() {
		$(".tabs-head .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-content").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");
});