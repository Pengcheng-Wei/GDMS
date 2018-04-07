<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String j_auth_action=request.getContextPath()+"/doc_updateReviewAudit.action";
%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>毕业设计填写表</title>

   <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/ui.css" />
      <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/font-awesome.css" />
      <script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>    
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
	      <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/form.css" />
	 <script type="text/javascript" src="<%=request.getContextPath()%>/js/form.js"></script>
	<style>
	/*选择时间的input输入框及按钮样式*/
	.input-group {
		width: 100%;
	}
	</style>
  </head>
  <body>
	<!-- 页面结构 -->
	<div class="ue-container">
		<form class="form-horizontal" method="post" >
		<input name="repro_id" style="display: none" value="${reviewAudit.reau_id }"/>
		
		<input name="reviewAudit.reau_id" style="display: none" value="${reviewAudit.reau_id }"/>
		<input name="reviewAudit.cid" style="display: none" value="${reviewAudit.cid }"/>
		<input name="reviewAudit.did" style="display: none" value="${reviewAudit.did }"/>
		<input name="stu_id" style="display: none" value="${reviewAudit.student.id }"/>
		<input name="teach_id" style="display: none" value="${reviewAudit.teacher.id }"/>
		<input name="reviewAudit.date" id="date" style="display: none" />
			<div class="form-group">
				<label class="col-sm-3 control-label">论文（设计）题目：</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="subName"
						name="student.subject.subName" value="${reviewAudit.student.subject.subName }" readonly="readonly"/>			
				</div>
				
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">学生姓名</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="student.name" value="${reviewAudit.student.name}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">专业</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" 
						name="student.major" value="${reviewAudit.student.major}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">学号</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form"
						name="student.id" value="${reviewAudit.student.id}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">年级</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="student.grade" value="${reviewAudit.student.grade}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">联系方式</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" 
						name="student.phone" value="${reviewAudit.student.phone}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">邮箱</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="student.email" value="${reviewAudit.student.email}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">指导教师</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="teaher.name" value="${reviewAudit.teacher.name}" readonly="readonly"/>			
				</div>
				<label class="col-sm-1 control-label">联系方式</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" 
						name="teacher.title" value="${reviewAudit.teacher.phone}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">邮箱</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="teacher.title" value="${reviewAudit.teacher.email}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">意见填写时间</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="reviewAudit.t_time" id="t_time" value="${reviewAudit.t_time}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">论文字数:</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" id="subName"
						name="reviewAudit.totalSum" placeholder="千字" value="${reviewAudit.totalSum }"/>			
				</div>
				<label class="col-sm-1 control-label">给出成绩:</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						id="t_grade" name="reviewAudit.t_grade" value="${reviewAudit.t_grade}" placeholder="百分制"/>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-sm-3 control-label">指导教师意见：</label>
				<div class="col-sm-9">
					<textarea name="reviewAudit.t_opt" class="form-control ue-form" rows="5" id="t_opt" >${reviewAudit.t_opt }</textarea>	
				</div>			
			</div>
			
			
			<div class="form-group" >
				<div class="col-sm-9" align="center">				 
					<button type="button" class="btn ue-btn-primary"  onclick="doUpdate()" value="保存">
						保存
					</button>
					<button type="button" class="btn ue-btn"  onclick="doBack()" >
						 返回
					</button>
				</div>
			</div>
		</form>
	</div>
   <script language="javascript">
   
   	$(document).ready(function() {
   	var strDate = "";
	var myDate = new Date();
	str = myDate.getFullYear().toString()+" 年 ";    //获取完整的年份(4位,1970-????)
	str += (myDate.getMonth()+1).toString()+" 月 ";       //获取当前月份(0-11,0代表1月)
	str+= myDate.getDate().toString()+" 日 ";        //获取当前日(1-31)
	
	$("#date").val(str);
	$("#t_time").val(str);
	});

	function doUpdate()
	{
		if(check())
		{
	 		document.forms[0].action ="${pageContext.request.contextPath }/doc_updateReviewAudit.action";
			document.forms[0].submit();
		}
	}
	function check()
	{
		var t_opt=$("#t_opt").val();
		var t_grade = $("#t_grade").val();
		
		if(t_opt=="")
		{
			$.sticky(
				"教师意见不能为空！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
			return false;
		} 
		if(t_grade=="")
		{
			$.sticky(
				"指导教师成绩不能为空！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
			return false;
		} 
		return true;
		
	}

	function doBack(){
		 window.history.back(-1);     
	}
	
	
</script>
  </body>
</html>