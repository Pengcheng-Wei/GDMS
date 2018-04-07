<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>项目学生列表</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.css" />
	  <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/font-awesome.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/ui.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/form.css" />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/jquery-ui.css" />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/product.css"/>
	
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>
	<script  type="text/javascript" src="<%=request.getContextPath()%>/js/jquery-ui.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/form.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/ui.js"></script>
	
	
<script type="text/javascript">

function checkSub(sub_id){
	document.location.href="${pageContext.request.contextPath}/select_teaSelstu.action?sub_id="+sub_id;	
	
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
		  <caption>已通过的项目列表</caption>
		  <thead>
		    <tr>
		      <th>序号</th>
		      <th>项目名称</th>
		      <th>出题人</th>
		       <th>面向 本/专 科</th>
		      <th>项目类型</th>
		      <th>学科方向</th>
		      <th>所需技术</th>
		       <th>查看选题学生</th>
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
			    	 	<td>${subject.tech }</td>
			    <c:choose>
	    	 	 	<c:when test="${subject.stuSum >=4 }">
	    	 	 	<td><span style="color:red">此项目已选足四人</span></td>
	    	 	 	</c:when>
	    	 	 	<c:otherwise>
			    	 	<td><button id="check" type="button" class="btn ue-btn" onclick="checkSub(${subject.sub_id})"> <span class="fa fa-search"></span>查看</button></td>
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