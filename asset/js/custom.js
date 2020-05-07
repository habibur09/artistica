
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 450) {
      $(".navbar").css({"background-color": "#2A2E48", "transition":".7s"});
    }

    else{
      $(".navbar").css("background" , "transparent");  	
    }

  })
