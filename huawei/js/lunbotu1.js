
      var btn1 = document.getElementById("btn1").children;//获取底部圆圈
      
      var num1 = 0;
       function goStep1(){
       	     num1++   
       	     if(num1>= document.getElementById("wrap1").children.length){
       	     	num1=0;
       	     }
       	   for (var j =0;j< document.getElementById("wrap1").children.length;j++) {
       	   	 	document.getElementById("wrap1").children[j].style.opacity =0;
     		}
       	    document.getElementById("wrap1").children[num1].style.opacity =1;
       	     /*圆按钮*/
           for (var j =0;j<  document.getElementById("wrap1").children.length;j++) {
     			btn1[j].className="ccc1";
     		}
     		btn1[num1].className="black1";
       }

      /* 底部小圆圈鼠标移入*/
     
     for (var i in btn1) {
     	btn1[i].className="ccc1";
     	btn1[0].className="black1";
     	btn1[i].index = i;
     	btn1[i].onmouseover = function(){
     		for (var j =0;j<  document.getElementById("wrap1").children.length;j++) {
     			btn1[j].className="ccc1";
     			 document.getElementById("wrap1").children[j].style.opacity =0;
     		}
     		btn1[this.index].className="black1";
     		//console.log(this.index)
     		  document.getElementById("wrap1").children[this.index].style.opacity =1; 
     	}
     }
    /*让轮播图自己走，设置定时器*/
    var time = null;  
   	time = setInterval(goStep1,3000)

	document.getElementById("lunbo").onmouseover= function(){  
    	clearInterval(time)
    };
    document.getElementById("lunbo").onmouseout = function(){
		clearInterval(time)
        time = setInterval(goStep1,3000);
    };