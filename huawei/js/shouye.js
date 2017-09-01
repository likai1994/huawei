/*首页顶部广告*/
$(".guanbi").click(function(){
	$("#mate9").css("display","none")
	$(".guanbi").css("display","none")
})
/*二级导航*/
$(".li").on("mouseenter", function() {
    $('.emui').show();
    $("#img").attr("src","images/11.jpg")
})
$(".li").on("mouseleave", function() {
    $('.emui').hide();
    $("#img").attr("src","images/22.jpg")
});
$(".emui").on("mouseenter", function() {
    $(this).show();
    $("#img").attr("src","images/11.jpg")
})
$(".emui").on("mouseleave", function() {
    $(this).hide();
    $("#img").attr("src","images/22.jpg")
});
/*搜索栏隐藏和显示*/
$(".text").focus(function(){
	$(".dingwei").css("display","none")
})
$(".text").blur(function(){
	if($(".text").val()==""){
		$(".dingwei").css("display","block")
	}else{
		$(".dingwei").css("display","none")
	}
})
/*banner二级导航栏*/
$("#yiji1").on("mouseenter", function() {
	$('#erji1').show();
})
$("#yiji1").on("mouseleave", function() {
    $('#erji1').hide();               
});
$("#erji1").on("mouseenter", function() {
    $(this).show();               
})
$("#erji1").on("mouseleave", function() {
    $(this).hide();                
});
/*第二*/
$("#yiji2").on("mouseenter", function() {
	$('#erji2').show();
})
$("#yiji2").on("mouseleave", function() {
    $('#erji2').hide();               
});
$("#erji2").on("mouseenter", function() {
    $(this).show();               
})
$("#erji2").on("mouseleave", function() {
    $(this).hide();                
});
/*第三*/
$("#yiji3").on("mouseenter", function() {
	$('#erji3').show();
})
$("#yiji3").on("mouseleave", function() {
    $('#erji3').hide();               
});
$("#erji3").on("mouseenter", function() {
    $(this).show();               
})
$("#erji3").on("mouseleave", function() {
    $(this).hide();                
});
/*第四*/
$("#yiji4").on("mouseenter", function() {
	$('#erji4').show();
})
$("#yiji4").on("mouseleave", function() {
    $('#erji4').hide();               
});
$("#erji4").on("mouseenter", function() {
    $(this).show();               
})
$("#erji4").on("mouseleave", function() {
    $(this).hide();                
});
/*第五*/
$("#yiji5").on("mouseenter", function() {
	$('#erji5').show();
})
$("#yiji5").on("mouseleave", function() {
    $('#erji5').hide();               
});
$("#erji5").on("mouseenter", function() {
    $(this).show();               
})
$("#erji5").on("mouseleave", function() {
    $(this).hide();                
});
/*第六*/
$("#yiji6").on("mouseenter", function() {
	$('#erji6').show();
})
$("#yiji6").on("mouseleave", function() {
    $('#erji6').hide();               
});
$("#erji6").on("mouseenter", function() {
    $(this).show();               
})
$("#erji6").on("mouseleave", function() {
    $(this).hide();                
});
/*精品推荐*/
var m =0;
$(".youjian").on("click", function(){
	m++;
	if(m>2){m=2}
	//console.log(m)
	if(m<=1){
		$(".ul").css("margin-left","-1090px")
	}else if(m>1){
		$(".ul").css("margin-left",-1415+"px");	
	}
})
$(".zuojian").click(function(){
	m--;
	if(m<0){m=0}
	//console.log(m)
	if(m>=1){
		$(".ul").css("margin-left","-218px")
	}else{
		 $(".ul").css("margin-left",0+"px");
		 //$(".zuojian").css("cursor","not-allowed")	 
	}
})
//回到顶部  
$(window).bind("scroll", function(){  
	var sTop = $(window).scrollTop();  
	var sTop = parseInt(sTop);  
	if(sTop<=1300){
		$(".dingwei1").hide("slow");
	}else{
		$(".dingwei1").show("slow");
	}
});  
$(function(){$("h5").click(function(){$('body,html').animate({scrollTop:0},400);return false;});})


$(window).bind("scroll", function () {  
	var sTop = $(window).scrollTop();  
	var sTop = parseInt(sTop);  
	if((sTop<=1500) || (sTop>=7200)){
		$(".louceng").hide("slow");
	}else{
		$(".louceng").show("slow");
	}
}); 
$(function(){
	$(".f1").click(function(){
		$('body,html').animate({scrollTop:2000},400)
		$(".f1").css("color","#ca151d")
		$(".ff1>p").css("width","112px")
	})
})
$(function(){
	$(".f2").click(function(){
		$('body,html').animate({scrollTop:2700},400)
		$(".f2").css("color","#ca151d")
		$(".ff2>p").css("width","112px")
	})
})
$(function(){
	$(".f3").click(function(){
		$('body,html').animate({scrollTop:3200},400)
		$(".f3").css("color","#ca151d")
		$(".ff3>p").css("width","112px")
	})
})
$(function(){
	$(".f4").click(function(){
		$('body,html').animate({scrollTop:4000},400)
		$(".f4").css("color","#ca151d")
		$(".ff4>p").css("width","112px")
	})
})
$(function(){
	$(".f5").click(function(){
		$('body,html').animate({scrollTop:4800},400)
		$(".f5").css("color","#ca151d")
		$(".ff5>p").css("width","112px")
	})
})
$(function(){
	$(".f6").click(function(){
		$('body,html').animate({scrollTop:5900},400)
		$(".f6").css("color","#ca151d")
		$(".ff6>p").css("width","112px")
	})
})
$(function(){
	$(".f7").click(function(){
		$('body,html').animate({scrollTop:7000},400)
		$(".f7").css("color","#ca151d")
		$(".ff7>p").css("width","112px")
	})
})

$(window).bind("scroll", function () {  
	var sTop = $(window).scrollTop();  
	var sTop = parseInt(sTop);  
	if((sTop>=1800) && (sTop<=2500)){
		$(".f1").css("color","#ca151d")
		$(".ff1>p").css("width","112px")
		$(".f2").css("color","#666")
		$(".ff2>p").css("width","0")
		$(".f3").css("color","#666")
		$(".ff3>p").css("width","0")
		$(".f4").css("color","#666")
		$(".ff4>p").css("width","0")
		$(".f5").css("color","#666")
		$(".ff5>p").css("width","0")
		$(".f6").css("color","#666")
		$(".ff6>p").css("width","0")
		$(".f7").css("color","#666")
		$(".ff7>p").css("width","0")
	}else if((sTop>2500) && (sTop<=3000)){
		$(".f1").css("color","#666")
		$(".ff1>p").css("width","0")
		$(".f2").css("color","#ca151d")
		$(".ff2>p").css("width","112px")
		$(".f3").css("color","#666")
		$(".ff3>p").css("width","0")
		$(".f4").css("color","#666")
		$(".ff4>p").css("width","0")
		$(".f5").css("color","#666")
		$(".ff5>p").css("width","0")
		$(".f6").css("color","#666")
		$(".ff6>p").css("width","0")
		$(".f7").css("color","#666")
		$(".ff7>p").css("width","0")
	}else if((sTop>3000) && (sTop<=3700)){
		$(".f1").css("color","#666")
		$(".ff1>p").css("width","0")
		$(".f2").css("color","#666")
		$(".ff2>p").css("width","0")
		$(".f3").css("color","#ca151d")
		$(".ff3>p").css("width","112px")
		$(".f4").css("color","#666")
		$(".ff4>p").css("width","0")
		$(".f5").css("color","#666")
		$(".ff5>p").css("width","0")
		$(".f6").css("color","#666")
		$(".ff6>p").css("width","0")
		$(".f7").css("color","#666")
		$(".ff7>p").css("width","0")
	}else if((sTop>3700) && (sTop<=4500)){
		$(".f1").css("color","#666")
		$(".ff1>p").css("width","0")
		$(".f2").css("color","#666")
		$(".ff2>p").css("width","0")
		$(".f3").css("color","#666")
		$(".ff3>p").css("width","0")
		$(".f4").css("color","#ca151d")
		$(".ff4>p").css("width","112px")
		$(".f5").css("color","#666")
		$(".ff5>p").css("width","0")
		$(".f6").css("color","#666")
		$(".ff6>p").css("width","0")
		$(".f7").css("color","#666")
		$(".ff7>p").css("width","0")
	}else if((sTop>4500) && (sTop<=5500)){
		$(".f1").css("color","#666")
		$(".ff1>p").css("width","0")
		$(".f2").css("color","#666")
		$(".ff2>p").css("width","0")
		$(".f3").css("color","#666")
		$(".ff3>p").css("width","0")
		$(".f4").css("color","#666")
		$(".ff4>p").css("width","0")
		$(".f5").css("color","#ca151d")
		$(".ff5>p").css("width","112px")
		$(".f6").css("color","#666")
		$(".ff6>p").css("width","0")
		$(".f7").css("color","#666")
		$(".ff7>p").css("width","0")
	}else if((sTop>5500) && (sTop<=6500)){
		$(".f1").css("color","#666")
		$(".ff1>p").css("width","0")
		$(".f2").css("color","#666")
		$(".ff2>p").css("width","0")
		$(".f3").css("color","#666")
		$(".ff3>p").css("width","0")
		$(".f4").css("color","#666")
		$(".ff4>p").css("width","0")
		$(".f5").css("color","#666")
		$(".ff5>p").css("width","0")
		$(".f6").css("color","#ca151d")
		$(".ff6>p").css("width","112px")
		$(".f7").css("color","#666")
		$(".ff7>p").css("width","0")
	}else if((sTop>6500) && (sTop<=7000)){
		$(".f1").css("color","#666")
		$(".ff1>p").css("width","0")
		$(".f2").css("color","#666")
		$(".ff2>p").css("width","0")
		$(".f3").css("color","#666")
		$(".ff3>p").css("width","0")
		$(".f4").css("color","#666")
		$(".ff4>p").css("width","0")
		$(".f5").css("color","#666")
		$(".ff5>p").css("width","0")
		$(".f6").css("color","#666")
		$(".ff6>p").css("width","0")
		$(".f7").css("color","#ca151d")
		$(".ff7>p").css("width","112px")
	}
}); 









