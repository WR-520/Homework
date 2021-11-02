$(function(){
    $(".dropbtn").mouseenter(function(){
        $(this).siblings().children('.dropdown-content').slideUp();
        $(this).children('.dropdown-content').slideDown();
        
    })
    $('.dropbtn').mouseleave(function(){
        $(this).children('.dropdown-content').slideUp();
    })

   var permit = 200;
   var tangle_top = $('.tangle').offset().top;
   $(window).scroll(function(){
       if(window.pageYOffset >= permit){
           $('.tangle').css({"position":"fixed",
           "top": (tangle_top - permit) +'px'
       })
       }else{
           var top = $('.tangle').offset().top-$('document').scrollTop();
           $('.tangle').css({"position":"absolute",
           "top":top + 'px'
       })
       }
   })

   $('.tangle').click(function(){
    $('body,html').animate({
        scrollTop:0
    },700)
 })

})

