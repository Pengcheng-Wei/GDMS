<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>项目学生列表</title>
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
 function doSubmit(flag,name)
 {
 	$("#name").val(name);
	document.forms[0].action ="${pageContext.request.contextPath }/down_down?flag="+flag;
	document.forms[0].submit();
 }

</script> 	


</head>

<body>
	<div class="container">
	<form method="post" onsubmit="return false;" id="form">
		<table class="table table-hover table-bordered">
		  <caption>论文及查重报告</caption>
		  <thead>
		    <tr>
		    <th>序号</th>
		      <th>学生姓名</th>
		      <th>学生学号</th>
		       <th>学生专业</th>
		       <th>课题名称</th>
		      <th>课题类型</th>
		      <th>课题方向</th>
		      <th>论文下载</th>
		       <th>查重报告下载</th>
		    </tr>
		  </thead>
		 
		  <tbody>
			   <c:forEach items="${stuResultList}" var="student" varStatus="varSta">
			    	 <tr>
			    	      <td>${varSta.count }</td>
			    	 	<td>${student.name }</td>
			    	 	<td>${student.id }</td>
			    	 	<td>${student.major }</td>
			    	 	<td>${student.subject.subName }</td>
			    	 	<td>${student.subject.sub_type }</td>
			    	 	<td>${student.subject.major_direction }</td>
			    	 	
				    	<c:choose>
			    	 	 	<c:when test="${student.graRep != null  }">
			    	 	 		<td><a onclick="doSubmit('gra','${student.graRep}')">${student.graRep}</a></td>
			    	 	 	</c:when>
			    	 	 	<c:otherwise>
			    	 	 		<td style="color: red;">尚未上传论文报告</td>
			    	 	 	</c:otherwise>
    	 				 </c:choose>
				    	<c:choose>
			    	 	 	<c:when test="${student.repeatRep != null  }">
			    	 	 		<td><a onclick="doSubmit('repeat','${student.repeatRep }')">${student.repeatRep }</a></td>
			    	 	 	</c:when>
			    	 	 	<c:otherwise>
			    	 	 		<td style="color: red;">尚未上传查重报告</td>
			    	 	 	</c:otherwise>
    	 				 </c:choose>
			    	 	<td></td>
			    	 </tr>
	    		  </c:forEach>
	    		  
		  </tbody>
		  
		</table>
		<input id = "name" name="name" style="display: none;"> 
		</form>
	</div>
	
</body>
</html>