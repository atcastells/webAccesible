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
        var count = $(this).val().length;
        var commentCount = $("#commentCount");
        commentCount.text(count + '/300');
        if (parseInt(count) >= 300) {
            commentCount.css("color", "#FF0000");
        }
        else {
            commentCount.css("color", "#888");
        }
    });

    $(document).idleTimer(10 * 1000);

    $(document).on( "idle.idleTimer", function(event, elem, obj){
        alert("You are idle.")
    });

    $(document).on( "active.idleTimer", function(event, elem, obj, triggerevent){
        $(document).idleTimer(10 * 1000);
    });
});




