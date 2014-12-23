var $ = require('jquery');

$(document).ready(function(){
    $('.sidebar nav').find('a').on('click', function(e){
        if ($(this).siblings('ul').length > 0) {
            e.preventDefault();
            $(this).parent().toggleClass('opened');
        }
    });

    $('.sidebar nav').find('li.active').parents('li').each(function(){
        $(this).addClass('opened');
    });

    $('.sidebar nav').find('li').each(function(){
        if ($(this).children('ul').length > 0) {
            $(this).children('a').append('<span class="caret"></span>');
        }
    });
});
