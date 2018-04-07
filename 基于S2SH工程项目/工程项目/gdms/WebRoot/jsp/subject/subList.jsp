<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
$(function () { $("[data-toggle='tooltip']").tooltip(); });
// 增加一行
function addSub() {
	var url = "${pageContext.request.contextPath}/jsp/formdoc.jsp";
	document.location.href=url
}
function delSub(sub_id,status){
	if(status == '审核通过')
	{
	 $.sticky(
		"已审核通过不能删除！",
		{
			style : 'warning',
			autoclose : 1000,
			position : 'top'
		});
	}else{
		$.dialog({
		type: 'confirm',
	    content: '您确定删除该项目吗？',
	    ok: function () {
	    	document.location.href="${pageContext.request.contextPath}/sub_delSub.action?sub_id="+sub_id;	
	    	},
	    cancel: function () {},
	    autofocus: true
   		 }).showModal();
		
	}
	
} 
function checkSub(sub_id,status){
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
		      <th>所需技术</th>
		       <th>查看详情</th>
		        <th>删除</th>
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
			    	 	<td>
			    	 	<button id="check" type="button" class="btn ue-btn" onclick="checkSub(${subject.sub_id},'${subject.status}')"> <span class="fa fa-search"></span>修改</button>
			    	 	</td>
			    	 	<td>
			    	 	<button id="del" type="button" class="btn ue-btn" onclick="delSub(${subject.sub_id},'${subject.status}')"  data-toggle="tooltip"  title="删除立即生效！"> <span class="fa fa-minus"></span>删除</button>
			    	 	</td>
			    	 </tr>
	    		  </c:forEach>
	    		  <tr>
	    		  	<td colspan="9" align="center">
	    		  	<button id="add" type="button" class="btn ue-btn" onclick="addSub()"> <span class="fa fa-plus"></span>增加</button>
	    		  	</td>
	    		  </tr>
	    		  
		  </tbody>
		  
		</table>
		</form>
	</div>
	
</body>
</html>