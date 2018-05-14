
$(function() { 
 //共通モーダルメニューの開閉//   
  $('.header-menu').click(function() {
    $('.menu').fadeIn();
  });
   $('.member-btn').click(function() {
    $('.menu').fadeIn();
  });   
  $('.close-menu').click(function() {
    $('.menu').fadeOut();
  });  
//image//
      $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active'); 
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );
  //メンバー--------------------------// 
    /*メンバー写真変化*/     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/omoteyugi.jpg"]').attr('src','../img/yugi.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/yugi.jpg"]').attr('src','../img/omoteyugi.jpg');
    }
  ); 

  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/omotemariku.jpg"]').attr('src','../img/mariku.png'); 
    },
    function() {
      $(this).find('img[src="../img/mariku.png"]').attr('src','../img/omotemariku.jpg');
    }
  );     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/kaiba.jpg"]').attr('src','../img/shinkaiba.PNG'); 
    },
    function() {
      $(this).find('img[src="../img/shinkaiba.PNG"]').attr('src','../img/kaiba.jpg');
    }
  );       
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/jono.jpeg"]').attr('src','../img/outjono.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/outjono.jpg"]').attr('src','../img/jono.jpeg');
    }
  );     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/2ichigo.PNG"]').attr('src','../img/mugetsu.png'); 
    },
    function() {
      $(this).find('img[src="../img/mugetsu.png"]').attr('src','../img/2ichigo.PNG');
    }
  );     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/ul.jpg"]').attr('src','../img/2ul.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/2ul.jpg"]').attr('src','../img/ul.jpg');
    }
  );    
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/2wichigo.PNG"]').attr('src','../img/shirozangetsu.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/shirozangetsu.jpg"]').attr('src','../img/2wichigo.PNG');
    }
  );    
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/jobs1.jpg"]').attr('src','../img/jobs2.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/jobs2.jpg"]').attr('src','../img/jobs1.jpg');
    }
  );   
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/zaq1.jpg"]').attr('src','../img/zaq2.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/zaq2.jpg"]').attr('src','../img/zaq1.jpg');
    }
  );   
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/rally1.jpg"]').attr('src','../img/rally2.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/rally2.jpg"]').attr('src','../img/rally1.jpg');
    }
  );   
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/jeff1.jpg"]').attr('src','../img/jeff2.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/jeff2.jpg"]').attr('src','../img/jeff1.jpg');
    }
  );
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/Bill1.jpg"]').attr('src','../img/bill2.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/bill2.jpg"]').attr('src','../img/Bill1.jpg');
    }
  );

    
  // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find("span").text("+");
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
     $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find("span").text("-");
      
    }
  });
    
    
    
    
    
    
    
    
    
    
    
});
