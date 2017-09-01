       var btn = document.getElementById("btn").children;//获取底部圆圈
      
      var num = 0;
       function goStep(){
       	     num++   
       	     if(num>= document.getElementById("wrap").children.length){
       	     	num=0;
       	     }
       	   for (var j =0;j< document.getElementById("wrap").children.length;j++) {
       	   	 	document.getElementById("wrap").children[j].style.opacity =0;
     		}
       	    document.getElementById("wrap").children[num].style.opacity =1;
       	     /*圆按钮*/
           for (var j =0;j<  document.getElementById("wrap").children.length;j++) {
     			btn[j].className="ccc";
     		}
     		btn[num].className="black";
       }

      /* 底部小圆圈鼠标移入*/
     
     for (var i in btn) {
     	btn[i].className="ccc";
     	btn[0].className="black";
     	btn[i].index = i;
     	btn[i].onmouseover = function(){
     		for (var j =0;j<  document.getElementById("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			 document.getElementById("wrap").children[j].style.opacity =0;
     		}
     		btn[this.index].className="black";
     		//console.log(this.index)
     		  document.getElementById("wrap").children[this.index].style.opacity =1; 
     	}
     }
    /*让轮播图自己走，设置定时器*/
    var time = null;  
   	time = setInterval(goStep,3000)

	document.getElementById("box").onmouseover= function(){  
    	clearInterval(time)
    };
    document.getElementById("box").onmouseout = function(){
		clearInterval(time)
        time = setInterval(goStep,3000);
    };
