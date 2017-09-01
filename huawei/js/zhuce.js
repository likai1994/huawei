var reg = /^1[35784][0-9]{9}$/;	
var shuzi = /^[0-9]*[1-9][0-9]*$/;
var yanzheng=0;
$('input').keyup(function(){		
    var $parent = $(this).parent();
    	$parent.find(".formtips").remove();
        //验证用户名
        if($(this).is('#put')){							
            if( shuzi.test(this.value)==false  ){                   	
	            var errorMsg = '*请输入电话号码';
	                $(".tishi").html(errorMsg);
	                $(".tishi").css("color","red")
	                $("#put").val("")
            }
            if(reg.test(this.value)==false){
                var errorMsg = '*请输入电话号码';
	                $(".tishi").html(errorMsg);
	                $(".tishi").css("color","red")      
                }else{
                	var okMsg = '*√';
                    $(".tishi ").html(okMsg);
                    $(".tishi").css("color","green")
                }
            }
           	if($(this).is('#mima')){
           		var n = /[a-z]+/g
           		var b = /[A-Z]+/g
           		var re = /\d+/g
           		var qiangdu=0;
           		if(this.value=="" || this.value.length<6){
           			var errorMsg = '密码最少6位';
                    $parent.append('<span style="color:red;"  id="mima"  class="formtips onError">*'+errorMsg+'</span>');       	     
           		}
           		if(this.value.length>=6){
           			$("#p1").css("color","#41CE48")
                    $("#img1").attr('src',"images/dui1.png");
           			qiangdu++;
           		}else{
           			$("#p1").css("color","#666")
                    $("#img1").attr('src',"images/dui.png");
           		}
           		if(n.test(this.value)==true&&b.test(this.value)){
           			 $("#p2").css("color","#41CE48")
                     $("#img2").attr('src',"images/dui1.png");
                     qiangdu++;
           		}else{
           			$("#p2").css("color","#666")
                    $("#img2").attr('src',"images/dui.png");
           		}
           		if(re.test(this.value)==true){ 
                     $("#p3").css("color","#41CE48")
                     $("#img3").attr('src',"images/dui1.png");
                     qiangdu++;
                     console.log(qiangdu)
           		}else{
           			$("#p3").css("color","#666")
                    $("#img3").attr('src',"images/dui.png");
           		}
           		if(this.value.length>=16){
           			var errorMsg = '密码最长16位';
                    $parent.append('<span style="color:red;"  id="mima"  class="formtips onError">*'+errorMsg+'</span>');    
           		}
           		if(qiangdu==3){
           			$(".box").css("background","#41ce48")
           			yanzheng=1
           		}else{
           			$(".box").css("background","#e6e6e6")
           		}
           	}
           	if( $(this).is('#queren') ){
             	if(this.value==($("#mima")[0].value) && this.value!=""){
             		var errorMsg = '*√';
                        $(".panduan").html(errorMsg)
                        $(".panduan").css("color","#41CE48")
             	}else{
             		var errorMsg = '*输入错误';
                   		$(".panduan").html(errorMsg)
                   		$(".panduan").css("color","red")
             	}
            }
})
$("#btn").click(function(){
	if(yanzheng==1){
		$.ajax({
			url:"php/regSave.php",
			async:true,
			data:"userName="+$('#put').val()+"&userPass="+$("#mima").val(),
			type:"post",
			success:function(data){
				//console.log(data)
				if(data=="1"){					
					location.href="shouye.html";
					}else{
						alert("您输入的有误，请检查注册")
					}
				}		
			})
		}else{
			alert("您输入的有误，请检查注册")
		}
	})
	
$("#put").blur(function(){
	$.ajax({
		url:"php/yonghuming.php",
		async:true,
		data:"userName="+this.value,
		type:"get",
		success:function(data){
			if(data=="0" && reg.test($("#put")[0].value)==true){
				$(".tishi").html("该用户没有人使用");
			}
			if(data=="1" && reg.test($("#put")[0].value)==true){
				$(".tishi").html("*该手机已注册");
				$(".tishi").css("color","red")
			}
				
		}		
	})
})