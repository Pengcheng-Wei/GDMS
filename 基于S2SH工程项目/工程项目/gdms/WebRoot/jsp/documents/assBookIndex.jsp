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
	function addAssBook(stu_id,assBook_id)
	{
		if(assBook_id==null|| assBook_id=="")
			document.location.href="${pageContext.request.contextPath}/doc_getStuForAssBook.action?stu_id="+stu_id;
		else{
			$.sticky(
				"该学生已有任务书，若有需要可进行查看或修改！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
		}	
		
	}
	function updateAssBook(assBook_id,stu_id)
	{
		if(assBook_id==null|| assBook_id=="")
		{
			$.sticky(
				"尚未为该学生填写任务书！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
		}
		else
			document.location.href
			="${pageContext.request.contextPath}/doc_updateAssBookIndex.action?assBook_id="+assBook_id+"&stu_id="+stu_id;	
		
	}

</script> 	


</head>

<body>
	<div class="container">
	<form method="post" onsubmit="return false;">
		<table class="table table-hover table-bordered">
		  <caption>下列学生需分发任务书</caption>
		  <thead>
		    <tr>
		    <th>序号</th>
		      <th>学生姓名</th>
		       <th>学生专业</th>
		      <th>课题名称</th>
		      <th>课题类型</th>
		      <th>课题方向</th>
		      <th>查看或修改任务书</th>
		       <th>填写任务书</th>
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
			    	 	<button type="button" class="btn ue-btn" onclick="updateAssBook('${student.assignmentBook.assBook_id}','${student.id}')"> <span class="fa fa-search"></span>查看或修改任务书</button>
			    	 	</td>
			    	 	<td> 
			    	 	<button type="button" class="btn ue-btn" onclick="addAssBook('${student.id}','${student.assignmentBook.assBook_id}')"> <span class="fa fa-plus"></span>去写任务书</button>
			    	 	</td>
			    	 </tr>
	    		  </c:forEach>
	    		  
		  </tbody>
		  
		</table>
		</form>
	</div>
	
</body>
</html>