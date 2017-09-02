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


$(".li1").on("mouseenter", function() {
    $('#box1').show();
    $('#box1').slideDown();

})

$(".li1").on("mouseleave", function() {
    $('#box1').hide();
    $('#box1').slideUp(600);

});
$("#box1").on("mouseenter", function() {
    $(this).show();
})
$("#box1").on("mouseleave", function() {
    $(this).hide();
});