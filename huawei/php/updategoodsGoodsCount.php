<?php
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$goodsId   = $_REQUEST['goodsId'];
	$goodsCount = $_REQUEST['goodsCount'];
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("huawei",$conn)){
		die("数据库选择失败".mysql_error());
	}

	$sqlstr = "update rexiao set goodsCount='".$goodsCount."' where goodsId='".$goodsId."'";
	//echo($sqlstr);
	$result=true;
	if(!mysql_query($sqlstr,$conn)){
		$result=false;
	}
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	//3、给客户端返回（响应）一个注册成功！
	echo $result;
?>