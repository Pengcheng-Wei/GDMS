<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>课题信息</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/font-awesome.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/ui.css" />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/product.css"/>
	
		<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/form.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/ui.js"></script>
	
	
<script type="text/javascript">
$(function () { $("[data-toggle='tooltip']").tooltip(); });
// 增加一行
function addSub() {
	var url = "${pageContext.request.contextPath}/jsp/formdoc.jsp";
	document.location.href=url
}
function delSub(sub_id){
	document.location.href="${pageContext.request.contextPath}/sub_delSub.action?sub_id="+sub_id;	
} 
function checkSub(sub_id){
	document.location.href="${pageContext.request.contextPath}/sub_checkSub.action?sub_id="+sub_id;	
	
}

</script> 	


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
		  <caption>项目列表</caption>
		  <thead>
		    <tr>
		      <th>序号</th>
		      <th>项目名称</th>
		      <th>出题人</th>
		      <th>面向本/专科</th>
		      <th>学科类型</th>
		      <th>学科方向</th>
		      <th>主任意见</th>
		      <th>院长意见</th>
		       <th>审核状态</th>
		    </tr>
		  </thead>
		 
		  <tbody>
			   <c:forEach items="${list}" var="subject" varStatus="varSta">
			    	 <tr>
			    	 	<td>${varSta.count }</td>
			    	 	<td>${subject.subName }</td>
			    	 	<td>${subject.teacher.name }</td>
			    	 	<td>${subject.faceTo }</td>
			    	 	<td>${subject.sub_type }</td>
			    	 	<td>${subject.major_direction }</td>
			    	 	<c:choose>
			    	 	 	<c:when test="${subject.direcOpt == '审核通过' }">
			    	 	 		<td style="color: #00EE76">${subject.direcOpt}</td>
			    	 	 	</c:when>
			    	 	 	<c:otherwise>
			    	 	 		<td style="color: red">${subject.direcOpt}</td>
			    	 	 	</c:otherwise>
				    	 </c:choose>
	    	 			
			    	 	<c:choose>
			    	 	 	<c:when test="${subject.leadOpt == '审核通过' }">
			    	 	 		<td style="color: #00EE76">${subject.leadOpt}</td>
			    	 	 	</c:when>
			    	 	 	<c:otherwise>
			    	 	 		<td style="color: red">${subject.leadOpt}</td>
			    	 	 	</c:otherwise>
				    	 </c:choose>
			    	 	<c:choose>
			    	 	 	<c:when test="${subject.status == '审核通过' }">
			    	 	 		<td style="color: #00EE76">${subject.status }</td>
			    	 	 	</c:when>
			    	 	 	<c:otherwise>
			    	 	 		<td style="color: red">${subject.status }</td>
			    	 	 	</c:otherwise>
				    	 </c:choose>
			    	 </tr>
	    		  </c:forEach>
	    		  
		  </tbody>
		  
		</table>
		</form>
	</div>
	
</body>
</html>