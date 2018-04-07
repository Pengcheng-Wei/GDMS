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

</script> 	


</head>

<body>
	<div class="container">
		<table class="table table-hover table-bordered">
		  <caption>项目列表</caption>
		  <thead>
		    <tr>
		      <th>项目名称</th>
		      <th>出题人</th>
		     <th>面向本/专科</th>
		      <th>学科类型</th>
		      <th>学科方向</th>
		      <th>最终成绩等级</th>
		      <th>是否要参加二辩</th>
		    </tr>
		  </thead>
		 
		  <tbody>
			    	 <tr>
			    	 	<td>${student.subject.subName }</td>
			    	 	<td>${student.subject.teacher.name }</td>
			    	 	<td>${student.subject.faceTo }</td>
			    	 	<td>${student.subject.sub_type }</td>
			    	 	<td>${student.subject.major_direction }</td>
			    	 	<td>${student.finalGrade }</td>
			    	 	<c:choose>
			    	 	 	<c:when test="${student.finalGrade!='E'}">
			    	 	 		<td style="color: #00EE76">不需要</td>
			    	 	 	</c:when>
			    	 	 	<c:otherwise>
			    	 	 		<td style="color: red">需要</td>
			    	 	 	</c:otherwise>
				    	 </c:choose>
			    	 </tr>
	    		  
		  </tbody>
		  
		</table>
	</div>
	
</body>
</html>