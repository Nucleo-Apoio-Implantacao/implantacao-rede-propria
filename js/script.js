$(function () {

    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });

});


document.getElementById("btn-reload_page").addEventListener("click", function () {
    window.location.reload();
});

document.getElementById("reload-after-login").addEventListener("click", function () {
    window.location.reload();
});

