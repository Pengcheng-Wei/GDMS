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
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/product.css"/>
	
		<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/form.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/ui.js"></script>
	
	
<script type="text/javascript">
	function updateRePro(rePro_id,stu_id)
	{
		if(rePro_id==null|| rePro_id=="")
		{
			$.sticky(
				"该学生尚未完成开题报告！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
		}
		else
			document.location.href
			="${pageContext.request.contextPath}/doc_updateReProIndex.action?stu_id="+stu_id+"&teach_id=${teacher.id}";	
		
	}

</script> 	


</head>

<body>
	<div class="container">
	<form method="post" onsubmit="return false;">
		<table class="table table-hover table-bordered">
		  <caption>下列学生需填写开题报告意见</caption>
		  <thead>
		    <tr>
		    <th>序号</th>
		      <th>学生姓名</th>
		       <th>学生专业</th>
		      <th>课题名称</th>
		      <th>课题类型</th>
		      <th>课题方向</th>
		      <th>填写开题报告意见</th>
		    </tr>
		  </thead>
		 
		  <tbody>
			   <c:forEach items="${stuResultList}" var="student" varStatus="varSta">
			    	 <tr>
			    	      <td>${varSta.count }</td>
			    	 	<td>${student.name }</td>
			    	 	<td>${student.major }</td>
			    	 	<td>${student.subject.subName }</td>
			    	 	<td>${student.subject.sub_type }</td>
			    	 	<td>${student.subject.major_direction }</td>
			    	 	<td> 
			    	 	<button type="button" class="btn ue-btn" onclick="updateRePro('${student.reaserchProposal.repro_id}','${student.id}')"> <span class="fa fa-search"></span>填写开题报告意见</button>
			    	 	</td>
			    	 </tr>
	    		  </c:forEach>
	    		  
		  </tbody>
		  
		</table>
		</form>
	</div>
	
</body>
</html>