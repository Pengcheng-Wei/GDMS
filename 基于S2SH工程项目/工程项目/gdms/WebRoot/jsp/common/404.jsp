<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true"%>
<html lang="zh-CN">
  <head>
    <title>404</title>

    <!-- 需要引用的CSS -->
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/font-awesome.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/ui.css" />
    
	<style type="text/css">
	body {
		background-color: #fff;
	}
	.content {
		background-image: url("<%=request.getContextPath()%>/images/404.png");
		background-repeat: no-repeat;
		margin: 5% auto;
		width: 590px;
		height: 380px;
	}
	.content .fa {
		margin-right: 6px;
		font-size: 18px;
	}
	ul {
		position: relative;
		top: 280px;
		padding-left: 20px;
		padding-top: 10px;
		font-family: Microsoft yahei;
	}
	li {
		line-height: 30px;
		margin-left: 190px;
		list-style:none;
	}
	a {
		color: #027bff;
		text-decoration: none;
	}
	a:hover {
		color: blue;
		text-decoration: underline;
	}
	</style>

  </head>
  <body>
	<!-- 页面结构 -->
	<div class="content">
		<ul>
			<li><a href="javascript:window.location.reload();"><i class="fa fa-angle-double-left"></i>刷新一下</a></li>
			<li><a href="javascript:history.go(-1);"><i class="fa fa-angle-double-left"></i>返回上一页</a></li>
		</ul>
	</div>
    <!-- 需要引用的JS -->
  </body>
</html>