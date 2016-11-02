


    $(document).ready(function(){
      $('.MobileNavDown').hide();
      $('.MobileNavUp').on('click','li#fa-bars',function(){
        $('.MobileNavDown').slideToggle();
      });
      $('.search').hide();
      $('.MobileNavUp').on('click','li#fa-search',function(){
        $('.search').slideToggle();
      }); 

      // if ($('.search').is(':visible')) {
      // 	$('.MobileNavDown').hide();
      // }
      // else {
      // 	$('.MobileNavDown').show();
      // }

      $('.searchDeskTop').hide();
      $('.navDesktop').on('click','li#fa-bars-Desktop',function(){
      	$('.searchDeskTop').slideToggle();
      })
    })



