/*eslint-env browser*/

$(document).ready(function() {
    $('h2').css({
        'border': 'solid 1px black',
        'color': '#CC1C0D',
        'padding': '3px 20px 3px 0',
        'border-radius': '5px 0',
        'background-color': '#DFE3E6'
    });
    $('a').addClass('navigation');
    $('.navigation').css({
        'border': 'solid 1px #929CA4',
        'color': '#CC1C0D',
        'padding': '3px 20px 3px 0',
        'background-color': '#DFE3E6'
    });
    $('p').removeClass('vprospect vconvert vretain');
    $('aside p:last').append('<br> Chevy Dealers Association');
    $('aside p:first').replaceWith('<q>Throughout the years we have worked with Vecta Corporation, we have always been amazed at the level of dedication and professionalism that they have provided us and our WGDC products. It is this commitment that has increased both our income and exposure exponentially.</q>');
    $('q').css('font-style', 'italic');
    $('b').replaceWith('<a href="http://www.vectacorp.com">Vecta Corp</a>');

});


   