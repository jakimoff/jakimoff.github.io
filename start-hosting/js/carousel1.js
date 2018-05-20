$(".carousel-button-right").live('click',function(){ 
   right_carusel_click();
});
   
$(".carousel-button-left").live('click',function(){ 
   left_carusel();
});
function left_carusel(){
   var block_width = $('.carousel-block').width() + 0;
   $(".carousel-items .carousel-block").eq(-1).clone().prependTo(".carousel-items"); 
   $(".carousel-items").css({"left":"-"+block_width+"px"}); 
   $(".carousel-items").animate({left: "0px"}, 400); 
   $(".carousel-items .carousel-block").eq(-1).remove(); 
}
setInterval(function right_carusel(){
   var block_width = $('.carousel-block').width() + 0;
   $(".carousel-items").animate({left: "-"+ block_width +"px"}, 400); 
   setTimeout(function () { 
      $(".carousel-items .carousel-block").eq(0).clone().appendTo(".carousel-items"); 
      $(".carousel-items .carousel-block").eq(0).remove(); 
      $(".carousel-items").css({"left":"0px"}); 
   }, 600);
},7000);
function right_carusel_click(){
   var block_width = $('.carousel-block').width() + 0;
   $(".carousel-items").animate({left: "-"+ block_width +"px"}, 400); 
   setTimeout(function () { 
      $(".carousel-items .carousel-block").eq(0).clone().appendTo(".carousel-items"); 
      $(".carousel-items .carousel-block").eq(0).remove();
      $(".carousel-items").css({"left":"0px"}); 
   }, 600);
}



$(".carousel-button-right2").live('click',function(){ 
   right_carusel_click2();
});
   
$(".carousel-button-left2").live('click',function(){ 
   left_carusel2();
});
function left_carusel2(){
   var block_width = $('.carousel-block2').width() + 10;
   $(".carousel-items2 .carousel-block2").eq(-1).clone().prependTo(".carousel-items2"); 
   $(".carousel-items2").css({"left":"-"+block_width+"px"}); 
   $(".carousel-items2").animate({left: "0px"}, 200); 
   $(".carousel-items2 .carousel-block2").eq(-1).remove(); 
}
setInterval(function right_carusel2(){
   var block_width = $('.carousel-block2').width() + 10;
   $(".carousel-items2").animate({left: "-"+ block_width +"px"}, 200); 
   setTimeout(function () { 
      $(".carousel-items2 .carousel-block2").eq(0).clone().appendTo(".carousel-items2"); 
      $(".carousel-items2 .carousel-block2").eq(0).remove(); 
      $(".carousel-items2").css({"left":"0px"}); 
   }, 300);
}, 3000);
function right_carusel_click2(){
   var block_width = $('.carousel-block2').width() + 10;
   $(".carousel-items2").animate({left: "-"+ block_width +"px"}, 200); 
   setTimeout(function () { 
      $(".carousel-items2 .carousel-block2").eq(0).clone().appendTo(".carousel-items2"); 
      $(".carousel-items2 .carousel-block2").eq(0).remove(); 
      $(".carousel-items2").css({"left":"0px"}); 
   }, 300);
}



$(".carousel-button-right3").live('click',function(){ 
   right_carusel_click3();
});
   
$(".carousel-button-left3").live('click',function(){ 
   left_carusel3();
});
function left_carusel3(){
   var block_width = $('.carousel-block3').width() + 10;
   $(".carousel-items3 .carousel-block3").eq(-1).clone().prependTo(".carousel-items3"); 
   $(".carousel-items3").css({"left":"-"+block_width+"px"}); 
   $(".carousel-items3").animate({left: "0px"}, 200); 
   $(".carousel-items3 .carousel-block3").eq(-1).remove(); 
}
setInterval(function right_carusel3(){
   var block_width = $('.carousel-block3').width() + 1;
   $(".carousel-items3").animate({left: "-"+ block_width +"px"}, 1200);
   setTimeout(function () { 
      $(".carousel-items3 .carousel-block3").eq(0).clone().appendTo(".carousel-items3"); 
      $(".carousel-items3 .carousel-block3").eq(0).remove(); 
      $(".carousel-items3").css({"left":"0px"}); 
   }, 1800);
}, 1850);
function right_carusel_click3(){
   var block_width = $('.carousel-block3').width() + 10;
   $(".carousel-items3").animate({left: "-"+ block_width +"px"}, 200); 
   setTimeout(function () { 
      $(".carousel-items3 .carousel-block3").eq(0).clone().appendTo(".carousel-items3"); 
      $(".carousel-items3 .carousel-block3").eq(0).remove(); 
      $(".carousel-items3").css({"left":"0px"}); 
   }, 300);
}