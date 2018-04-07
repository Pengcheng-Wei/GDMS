<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%
String j_auth_action=request.getContextPath();
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>选题学生信息</title>
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


	var cnt = ${avialable };
	$(function () { $("[data-toggle='tooltip']").tooltip(); });
	$(document).ready(function(){
	var cntPass = $("span[name='pass']").length;
		if(cnt==8)
		{
			$("input[type=checkbox]").attr('disabled','disabled');
			 $.sticky(
			"每个老师最多指导8个人,已达上限",
			{
				style : 'warning',
				autoclose : 1000,
				position : 'top'
			});
		}
	
		 $('input[type=checkbox]').click(function(){
		 //alert(cnt);
		 //alert(cntPass);
		   //检查每个项目不多于4个人
		   if($("input[type=checkbox]:checked").length >= 4 || $("input[type=checkbox]:checked").length >= (8-cnt+cntPass))
		   {
		     $("input[type=checkbox]:not(:checked)").attr('disabled','disabled');
		     if($("input[type=checkbox]:checked").length >= 4 )
		     {
			     $.sticky(
				"每个题目最多四个人,已达上限",
				{
					style : 'warning',
					autoclose : 2000,
					position : 'top'
				});
		     }
		   //检查每个老师 指导学生不超过8个人
		     if($("input[type=checkbox]:checked").length >=  (8-cnt+cntPass))
		   {
		     $("input[type=checkbox]:not(:checked)").attr('disabled','disabled');
		     $.sticky(
			"每个老师最多指导8个人,已达上限",
			{
				style : 'warning',
				autoclose : 1000,
				position : 'top'
			});
		
		   }
		
		   }
		   else {
			 $("input[type=checkbox]:not(:checked)").attr('disabled',null);
		   }
		 });
	  
	 $('#submit').click(function(){
	   
	   var str ="";
	   
		$("input[type=checkbox]:checked").each(function(){
			if($(this).val()!="")
				str+= $(this).val()+",";
		});
		$.ajax({
		url:"<%=j_auth_action%>"+"/select_selFristStu.action",
		data:{"stuids":str},
		type:"post",
		success: function(){
	     		window.location.href="<%=j_auth_action%>/select_teaPassSubs.action" ;
	   	}
		});
	 });
	  $('#cancle').click(function(){
	     window.history.back(-1);    
	 });  		 		
})	


</script> 	


</head>

<body>
	<div class="container">
	<form method="post" onsubmit="return false;">
		<table class="table table-hover table-bordered">
		  <caption>学生列表</caption>
		  <thead>
		    <tr>
		      <th>序号</th>
		      <th>姓名</th>
		      <th>性别</th>
		       <th>本/专 科</th>
		      <th>年级</th>
		      <th>专业方向</th>
		      <th>联系电话</th>
		       <th>同意选中提交即可</th>
		    </tr>
		  </thead>
		 
		  <tbody>
			   <c:forEach items="${stulist}" var="student" varStatus="varSta">
			   <tr>
			   <td>${varSta.count }</td>
			   <td>${student.name }</td>
			   <td>${student.gender }</td>
			   <td>${student.stype }</td>
			   <td>${student.grade }</td>
			   <td>${student.major }</td>
			   <td>${student.phone }</td>
			   <c:choose>
	    	 	 	<c:when test="${student.subStatus == '审核通过'}"><td><input type="checkbox" style="display: none;" checked="checked" value=""/><span name="pass" style="color:red" >已审核通过</span></td></c:when>
	    	 	 	<c:otherwise><td><input type="checkbox" value="${student.id }"/></td>
	    	 	 	</c:otherwise>
	    	 	  </c:choose>
			    </tr>
	    		  </c:forEach>
	    		  	 
	    		  <tr>
	    		  <td colspan="8" align="center">
	    		  <button id="submit" type="button" class="btn ue-btn" data-toggle="tooltip"  title="提交后立即生效">提交</button>
	    		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	    		  <button id="cancle" type="button" class="btn ue-btn">返回</button>
	    		  </td>
	    		  </tr>
	    		  <tr>
	    		  <td colspan="8" align="center"><span>注：每个项目不超过4人，每位指导老师指导学生总数不超过8人</span>
	    		  </td>
	    		  </tr>
	    		  
		  </tbody>
		  
		</table>
		</form>
	</div>
	
</body>
</html>