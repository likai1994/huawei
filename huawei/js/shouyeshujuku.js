$(function(){
	$.ajax({
		url:"php/rexiao.php",
		type:"get",
		success:function(data){
			var obj=eval(data);
			for(i=0;i<8;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul1").append(str);
			}
			for(i=8;i<20;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul2").append(str);
			}
			for(i=20;i<27;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul3").append(str);
			}
			for(i=27;i<30;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul4").append(str);
			}
			for(i=30;i<37;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul5").append(str);
			}
			for(i=37;i<44;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul6").append(str);
			}
			for(i=44;i<50;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul7").append(str);
			}
			for(i=50;i<62;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul8").append(str);
			}
			for(i=62;i<68;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul9").append(str);
			}
			for(i=68;i<80;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul10").append(str);
			}
			for(i=80;i<86;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul11").append(str);
			}
			for(i=86;i<98;i++){
				let goodsId=obj[i].goodsId;//1
				let goodsPrice=obj[i].goodsPrice;//价格
				let goodsImg=obj[i].goodsImg;//图片
				let goodsName=obj[i].goodsName;//名字
				let goodsDesc=obj[i].goodsDesc;//描述
				let str="<li ord="+goodsId+"><a href='#'><img src='"+goodsImg+"'/><h4>"+goodsName+"</h4><p>"+goodsDesc+"</p><span>￥"+goodsPrice+"</span></a></li>";
				$("#ul12").append(str);
			}
		}
	});
})
$(".biao").on("click","li",function(){
	var GoodsId=$(this).attr("ord"); 
	saveCookie("GoodsId",GoodsId,7);
	location.href=("xiangqing.html")
});