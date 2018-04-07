<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<!-- 用于学生在查询自己选题情况时  状态为尚未选题时的页面 -->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>商品信息</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/font-awesome.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/ui.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/form.css" />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/product.css"/>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/prettify.css" />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/jquery-ui.css" />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/datatables.css" />
	
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>
	<script  type="text/javascript" src="<%=request.getContextPath()%>/js/jquery-ui.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/form.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/datatables.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/ui.js"></script>
	
	
<script type="text/javascript"></script> 	


</head>

<body>
	<div class="topdist"></div>
	<div class="container">
	   <div class="row">
		<form class="form-inline" onsubmit="return false;">										
			
		    
		</form>
	</div>
	<form method="post" onsubmit="return false;">
		<table class="table table-hover table-bordered">
		<c:choose>
	    	 	 	<c:when test="${list[0].teacher.stuTotal==8 }">
	    	 	 	 <caption><span style="color:red">您已在一轮选择中选足学生8人，不能参加第二轮选择</span></caption>
	    	 	 	</c:when>
	    	 	 	<c:otherwise>
	    	 	 	</c:otherwise>
	    	</c:choose>
		   <thead>
		    <tr>
		      <th>项目名称</th>
		      <th>出题人</th>
		      <th>面向 本/专 科</th>
		      <th>项目类型</th>
		      <th>学科方向</th>
		      <th>所需技术</th>
		       <th>审核状态</th>
		       <th>删除</th>
		    </tr>
		  </thead>
	  	 
		  <tbody>
			<tr>
			<td valign="top" colspan="8" class="dataTables_empty">
			<span class="norecord"></span>
			</td>
			</tr>	    		  
		  </tbody>
		 
		  
		</table>
		</form>
	</div>
	
</body>
</html>