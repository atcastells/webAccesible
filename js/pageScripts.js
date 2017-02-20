/**
 * Created by Oscar Oliver on 16/01/17.
 */

$(document).ready(function(){
    $("button.transcription").click(function () {
        var shown = $("div.transcription").css("display");
        if(shown == 'none'){
            $("div.transcription").fadeIn();
        }
        else {
            $("div.transcription").fadeOut();
        }
    });

    $('#comment').keyup(function () {
        var count = $(this).val().trim().length;
        $("#commentCount").text(count + '/300');
    });
});

