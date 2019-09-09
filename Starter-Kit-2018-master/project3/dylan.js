$(document).ready(function(){
  var ui = {
      scroll: function(){
      $(document).on('scroll',function(){
         var pos = $(window).scrollTop();
          if(pos > 120){
              $('.scroll').css('display', 'block');
          }
          else{
             $('.scroll').css('display', 'none');
          }
      });

        $('.scroll').click(function(){
        $('html, body').animate({   
                scrollTop: 0
             }, 900);
             console.log($(window).scrollTop());
        });
      }
  };
  ui.scroll();
});
