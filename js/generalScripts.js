/**
 * Created by Oscar Oliver on 16/01/17.
 */

/* Mark class="active" the actual menu link */
$(document).ready(function(){
    $('#navbar ul').children().each(function() {
        var link = $(this).find('a'); // or var link = $(this).children('a');
        var loc = "" + location.href;
        loc = loc.substr(loc.lastIndexOf('/') + 1);
        if (link.attr('href') == loc) {
            $(link).addClass('active');
            return false;
        }
    });
});
