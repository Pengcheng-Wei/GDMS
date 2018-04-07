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


<script type="text/javascript">
function addSub() {
		$.sticky(
			"提交成功！",
		{
			style : 'success',
			autoclose : 1000,
			position : 'center'
		});
	document.forms[0].action ="<%=j_auth_action%>";
	setTimeout(function() {
			document.forms[0].submit();
		},1500)
}


</script> 	


</head>

<body>
	<form method="post" onsubmit="return false;">
		<table class="table table-hover table-bordered">
		  <caption>需要填写答辩时间和地点</caption>
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
		    	 	<td><input type="text" class="form-control ue-form"
						name="dDate" placeholder="答辩时间" value="${director.dDate}"/></td>
		    	 	<td><input type="text" class="form-control ue-form"
						name="dPlace" placeholder="答辩地点" value="${director.dPlace}"/></td>
		    	 </tr>
	    		  <tr>
	    		  	<td colspan="9" align="center">
	    		  	<button id="add" type="button" class="btn ue-btn" onclick="addSub()"> <span class="fa fa-plus"></span>提交</button>
	    		  	</td>
	    		  </tr>
	    		  
		  </tbody>
		  
		</table>
		<s:token></s:token>
		</form>
	</div>
	
</body>
</html>