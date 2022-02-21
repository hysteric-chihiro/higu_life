$(function(){

    $('.hamburger').on('click', function() {
      hamburger();
    });

    $('#navi a').on('click', function() {
      hamburger();
    });

    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });

    $(".inview").on("inview", function (event, isInView) {
      if (isInView) {
        
        $(this).stop().addClass("show");
      }
    });

    $(window).scroll(function() {  
      let scroll = $(window).scrollTop();
      mv_scale(scroll);
      if (scroll > 520) {
        $('.logo').fadeIn(500);
        $('.hamburger').fadeIn(500);
      } else {
        $('.logo').fadeOut(500);
        $('.hamburger').fadeOut(500);
      }
      
      let gallery_position = $('#works').offset().top - $(window).height();
      let access_position = $('#service').offset().top - $(window).height();
  
      if (window.innerWidth > 900) {
        if(scroll > gallery_position){
          if(scroll < access_position){
            $('#side-btn').css({
              'transform': 'rotate(-90deg) translateY(0)'
            });
          } else {
            $('#side-btn').css({
              'transform': 'rotate(-90deg) translateY(60px)'
            });
          }
        } else {
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
      }
      let contact_position = $('#contact').offset().top - $(window).height();
      if(scroll > access_position){
        if(scroll < contact_position){
          $('.bg').fadeIn(500);
        } else {
          $('.bg').fadeOut(500);
        }
      } else {
        $('.bg').fadeOut(500);
      }
    });

    $(".twitter").hover(
      function(){
        $(".icont").css("opacity", "1");
      },
      function(){
        $(".icont").css("opacity", "0");
      }
    );

    $(".insta").hover(
      function(){
        $(".iconi").css("opacity", "1");
      },
      function(){
        $(".iconi").css("opacity", "0");
      }
    );

    $(window).on('load resize', function() {
      let scroll = $(window).scrollTop();
      mv_scale(scroll);
    });

    $(window).on("scroll", function() {
      
      let height = $(document).innerHeight();
      let winh = $(window).innerHeight();
      let bottom = height - winh;

      if (bottom  == $(window).scrollTop()) {
        $(".logo").fadeOut();
      }
    });


  });
  
  function hamburger() {
    
    $('.hamburger').toggleClass('active');
  
    if ($('.hamburger').hasClass('active')) {
      
      $('#navi').addClass('active');
    } else {
      
      $('#navi').removeClass('active');
    }
  }
 
  function mv_scale(scroll) {
    if (window.innerWidth > 900) {
      $('#mainvisual img').css({
        'width': 100/3 + scroll/10  + '%'
      });
    } else {
      $('#mainvisual img').css({
        'width': 100 - scroll/10  + '%'
      });
    }
  }
