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
    })
});

