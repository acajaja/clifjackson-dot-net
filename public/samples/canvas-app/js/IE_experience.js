$(document).ready(function() {
    var delay = 0;
    var thumbs = $('#IE_Experience a');
    $.each(thumbs, function(index, image) {
        $(image).delay(delay).fadeIn(300, function() {
            $('#exp-line' + index).fadeIn(300);
        });
        delay += 600;
    });
});