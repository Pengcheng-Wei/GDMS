<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<!-- 用于查看节选题结果时 有一条记录的页面 -->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>题目信息</title>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.css" />
      <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/font-awesome.css" />
      <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/ui.css" />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/product.css"/>

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

function delSub(){
	if(${student.subStatus == '审核通过' })
	{
	 $.sticky(
		"已审核通过不能删除！",
		{
			style : 'error',
			autoclose : 1000,
			position : 'top'
		});
	}else{
		$.dialog({
		type: 'confirm',
	    content: '您确定删除该项目吗？',
	    ok: function () {
	    	document.location.href="${pageContext.request.contextPath}/select_delSub.action";
	    	},
	    cancel: function () {},
	    autofocus: true
   		 }).showModal();
			
	}
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
		  <thead>
		    <tr>
		      <th>项目名称</th>
		      <th>出题人</th>
		      <th>出题人职称</th>
		      <th>出题人手机号</th>
		      <th>出题人邮箱</th>
		      <th>审核状态</th>
		      <th>删除</th>
		    </tr>
		  </thead>
	  	  <tbody>
		    	 <tr>
		    	 	<td>${subject.subName }</td>
		    	 	<td>${subject.teacher.name }</td>
		    	 	<td>${subject.teacher.title }</td>
		    	 	<td>${subject.teacher.phone }</td>
		    	 	<td>${subject.teacher.email }</td>
		    	 	
		    	 	<c:choose>
		    	 	 	<c:when test="${student.subStatus == '审核通过' }">
		    	 	 		<td style="color: #00EE76">${student.subStatus }</td>
		    	 	 	</c:when>
		    	 	 	<c:otherwise>
		    	 	 		<td style="color: red">${student.subStatus }</td>
		    	 	 	</c:otherwise>
			    	 </c:choose>
			    	 <td>
				 <button id="del" type="button" class="btn ue-btn" onclick="delSub()">
				 <span class="fa fa-minus"></span>删除</button>
				 </td>
		    	 </tr>
	    		  
		  </tbody>
	    		  
		  
		</table>
		</form>
	</div>
	
</body>
</html>