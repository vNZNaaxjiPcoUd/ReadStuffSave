function checkPos(){var a=$(window).scrollTop(),b=$("#ldt").position().top,c=0;a>0?$("header").addClass("down"):$("header").removeClass("down"),void 0!=$("#ldt").css("margin-top")&&(c=parseInt($("#ldt").css("margin-top").replace("px",""))),a>=parseInt(b)+c?($("#ldt").addClass("over"),$("#ldt").find(".ldt").addClass("over"),$("#ldt").find(".btns2").addClass("over")):($("#ldt").removeClass("over"),$("#ldt").find(".ldt").removeClass("over"),$("#ldt").find(".btns2").removeClass("over"))}$(document).ready(function(){$(".img.ox1").parent().hover(function(){$(this).find("div.img").addClass("bounce")}),$(".img.ox1").parent().mouseleave(function(){$(this).find("div.img").removeClass("bounce")}),$(".img.ox2").parent().hover(function(){$(this).find("div.img").addClass("jello")}),$(".img.ox2").parent().mouseleave(function(){$(this).find("div.img").removeClass("jello")}),$(".img.ox3").parent().hover(function(){$(this).find("div.img").addClass("rubberBand")}),$(".img.ox3").parent().mouseleave(function(){$(this).find("div.img").removeClass("rubberBand")}),$(".img.ox4").parent().hover(function(){$(this).find("div.img").addClass("tada")}),$(".img.ox4").parent().mouseleave(function(){$(this).find("div.img").removeClass("tada")})});
/*! Target 最后修改于： 2018-11-30 */