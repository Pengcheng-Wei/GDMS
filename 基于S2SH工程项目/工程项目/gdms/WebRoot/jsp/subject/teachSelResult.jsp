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
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/product.css"/>
	
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>
	<script  type="text/javascript" src="<%=request.getContextPath()%>/js/jquery-ui.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/form.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/ui.js"></script>
	
<script type="text/javascript">
	$(function () { $("[data-toggle='tooltip']").tooltip(); });
	function delSub(stu_id){
	$.dialog({
		type: 'confirm',
	    content: '您确定删除该学生吗？',
	    ok: function () {
	    	document.location.href="${pageContext.request.contextPath}/select_teachDelSub.action?stu_id="+stu_id;	
	    	},
	    cancel: function () {},
	    autofocus: true
   		 }).showModal();
		
		
	}

</script> 	


</head>

<body>
	<div class="container">
	<form method="post" onsubmit="return false;">
		<table class="table table-hover table-bordered">
		  <caption>一轮：已选取的学生列表</caption>
		  <thead>
		    <tr>
		    <th>序号</th>
		      <th>学生姓名</th>
		       <th>学生专业</th>
		       <th>学生电话</th>
		      <th>课题名称</th>
		      <th>课题类型</th>
		      <th>课题方向</th>
		       <th>删除</th>
		    </tr>
		  </thead>
		 
		  <tbody>
			   <c:forEach items="${stuResultList}" var="student" varStatus="varSta">
			    	 <tr>
			    	      <td>${varSta.count }</td>
			    	 	<td>${student.name }</td>
			    	 	<td>${student.major }</td>
	    	 			<td>${student.phone }</td>
			    	 	<td>${student.subject.subName }</td>
			    	 	<td>${student.subject.sub_type }</td>
			    	 	<td>${student.subject.major_direction }</td>
			    	 	<td> 
			    	 	<button id="check" type="button" class="btn ue-btn" onclick="delSub(${student.id})" data-toggle="tooltip"  title="删除立即生效！"> <span class="fa fa-minus"></span>删除</button>
			    	 	</td>
			    	 </tr>
	    		  </c:forEach>
	    		  
		  </tbody>
		  
		</table>
		</form>
	</div>
	
</body>
</html>