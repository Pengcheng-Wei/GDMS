<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="/struts-tags" prefix="s" %>
<%
String j_auth_action=request.getContextPath()+"/user_setDGroup.action";
%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>课题信息</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/css/bootstrap.css" />
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/css/font-awesome.css" />
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/css/ui.css" />
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/css/product.css" />

<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/jquery.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/css/form.css" />
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/form.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/ui.js"></script>

</head>

<body>
		<table class="table table-hover table-bordered">
		  <caption>答辩时间和地点</caption>
		  <thead>
		    <tr>
		      <th>答辩小组序号</th>
		      <th>答辩小组组长</th>
		      <th>答辩时间</th>
		      <th>答辩地点</th>
		    </tr>
		  </thead>
		  <tbody>
		    	 <tr>
		    	 	<td>${director.id_dept }</td>
		    	 	<td>${director.name}</td>
		    	 	<td>${director.dDate}</td>
		    	 	<td>${director.dPlace}</td>
		    	 </tr>
	    		  
		  </tbody>
		  
		</table>
	</div>
	
</body>
</html>