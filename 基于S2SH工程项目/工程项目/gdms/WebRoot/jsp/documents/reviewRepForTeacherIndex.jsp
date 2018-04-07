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
	function updateReAu(reau_id,flag)
	{
		document.location.href
		="${pageContext.request.contextPath}/doc_updateReviewAuditIndex.action?reau_id="+reau_id+"&flag="+flag;	
		
	}
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
	<form method="post" onsubmit="return false;">
		<table class="table table-hover table-bordered">
		  <caption>下列学生需填写指导老师意见 </caption>
		  <thead>
		    <tr>
		    <th>序号</th>
		      <th>课题名称</th>
		      <th>学生姓名</th>
		       <th>学生学号</th>
		       <th>下载论文报告</th>
		      <th>填写状态</th>
		      <th>填写指导老师意见</th>
		    </tr>
		  </thead>
		  <tbody>
			   <c:forEach items="${loptList}" var="reviewAudit" varStatus="varSta">
			    	 <tr>
			    	      <td>${varSta.count }</td>
			    	 	<td>${reviewAudit.student.subject.subName }</td>
			    	 	<td>${reviewAudit.student.name }</td>
			    	 	<td>${reviewAudit.student.id }</td>
			    	 	<c:choose>
			    	 	 	<c:when test="${reviewAudit.student.graRep != null  }">
			    	 	 		<td><a onclick="doSubmit('gra','${reviewAudit.student.graRep}')">${reviewAudit.student.graRep}</a></td>
			    	 	 	</c:when>
			    	 	 	<c:otherwise>
			    	 	 		<td style="color: red;">尚未上传论文报告</td>
			    	 	 	</c:otherwise>
    	 				 </c:choose>
    	 				 
					<c:choose>
			    	 	 	<c:when test="${reviewAudit.t_opt != null}">
			    	 	 		<td style="color: #00EE76">已填写指导教师意见</td>
			    	 	 	</c:when>
			    	 	 	<c:otherwise>
			    	 	 		<td style="color: red">未填写指导教师意见</td>
			    	 	 	</c:otherwise>
				    	 </c:choose>
			    	 	<td> 
			    	 	<button type="button" class="btn ue-btn" onclick="updateReAu('${reviewAudit.reau_id}','topt')"> <span class="fa fa-search"></span>填写指导意见</button>
			    	 	</td>
			    	 </tr>
	    		  </c:forEach>
		  </tbody>
		</table>
		<table class="table table-hover table-bordered">
		  <caption>下列学生需填写评阅老师意见</caption>
		  <thead>
		    <tr>
		    <th>序号</th>
		    <th>课题名称</th>
		     <th>学生姓名</th>
		       <th>学生学号</th>
		       <th>下载论文报告</th>
		      <th>填写状态</th>
		      <th>填写评阅老师意见</th>
		    </tr>
		  </thead>
		  <tbody>
			   <c:forEach items="${coptList}" var="reviewAudit" varStatus="varSta">
			    	 <tr>
			    	      <td>${varSta.count }</td>
			    	 	<td>${reviewAudit.student.subject.subName }</td>
			    	 	<td>${reviewAudit.student.name }</td>
			    	 	<td>${reviewAudit.student.id }</td>
			    	 	<c:choose>
			    	 	 	<c:when test="${reviewAudit.student.graRep != null  }">
			    	 	 		<td><a onclick="doSubmit('gra','${reviewAudit.student.graRep}')">${reviewAudit.student.graRep}</a></td>
			    	 	 	</c:when>
			    	 	 	<c:otherwise>
			    	 	 		<td style="color: red;">尚未上传论文报告</td>
			    	 	 	</c:otherwise>
    	 				 </c:choose>
					<c:choose>
			    	 	 	<c:when test="${empty reviewAudit.c_opt}">
			    	 	 		<td style="color: red">未填写评阅教师意见</td>
			    	 	 	</c:when>
			    	 	 	<c:otherwise>
			    	 	 		<td style="color: #00EE76">已填写评阅教师意见</td>
			    	 	 	</c:otherwise>
				    	 </c:choose>
			    	 	<td> 
			    	 	<button type="button" class="btn ue-btn" onclick="updateReAu('${reviewAudit.reau_id}','copt')"> <span class="fa fa-search"></span>填写评阅意见</button>
			    	 	</td>
			    	 </tr>
	    		  </c:forEach>
		  </tbody>
		  
		</table>
		<input id = "name" name="name" style="display: none;"> 
		</form>
	</div>
	
</body>
</html>