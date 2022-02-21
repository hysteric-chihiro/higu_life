$(function(){
   
    $('#slider').slick({
      autoplay: true,                         
      autoplaySpeed: 2000,                    
      arrows: true,                           
      dots: true,                             
      slidesToShow: 1,                        
      centerMode: true,                       
      centerPadding: '18%',                   
      prevArrow:'<div class="prev"></div>',   
      nextArrow:'<div class="next"></div>',   
      responsive: [             
        {
          breakpoint: 900,       
          settings: {
            centerMode: false   
          }
        }
      ]
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
  });