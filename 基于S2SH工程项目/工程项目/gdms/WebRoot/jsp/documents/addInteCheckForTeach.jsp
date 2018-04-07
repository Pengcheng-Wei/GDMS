<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String j_auth_action=request.getContextPath()+"/doc_updateInCheckForTeach.action";
%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>中期检查表</title>

    <!-- 需要引用的CSS -->
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
		<input name="interimCheck.inCheck_id" style="display: none" value="${interimCheck.inCheck_id }"/>
		<input name="stu_id" style="display: none" value="${interimCheck.student.id }"/>
		<input name="teach_id" style="display: none" value="${interimCheck.teacher.id }"/>
		<input name="sub_id" style="display: none" value="${interimCheck.student.subject.sub_id }"/>
		<input name="interimCheck.date" style="display: none" value ="${interimCheck.date }"/>
		<input name="interimCheck.t_time" style="display: none" id ="t_time"/>
			<div class="form-group">
				<label class="col-sm-3 control-label">论文（设计）题目：</label>
				<div class="col-sm-4">
					<input type="text" class="form-control ue-form" id="subName"
						name="student.subject.subName" value="${interimCheck.student.subject.subName }" readonly="readonly"/>			
				</div>
				<label class="col-sm-1 control-label">指导教师</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" 
						name="teaher.name" value="${teacher.name}" readonly="readonly"/>			
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">学生姓名</label>
				<div class="col-sm-4">
					<input type="text" class="form-control ue-form" 
						name="student.name" value="${interimCheck.student.name}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">学号</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form"
						name="student.id" value="${interimCheck.student.id}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">专业</label>
				<div class="col-sm-4">
					<input type="text" class="form-control ue-form" 
						name="student.major" value="${interimCheck.student.major}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">年级</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" 
						name="student.grade" value="${interimCheck.student.grade}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">已完成的工作：</label>
				<div class="col-sm-9">
					<textarea name="interimCheck.finish" class="form-control ue-form" rows="5" id="finish">${interimCheck.finish }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">未完成的工作：</label>
				<div class="col-sm-9">
					<textarea name="interimCheck.unfinish" class="form-control ue-form" rows="5" id="unfinish">${interimCheck.unfinish }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">计划完成时间和拟采取措施：</label>
				<div class="col-sm-9">
					<textarea name="interimCheck.sub_plan" class="form-control ue-form" rows="5" id="sub_plan">${interimCheck.sub_plan}</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">教师意见：</label>
				<div class="col-sm-9">
					<textarea name="interimCheck.t_opt" class="form-control ue-form" rows="5"  id="t_opt" >${interimCheck.t_opt}</textarea>	
				</div>			
			</div>
			
			<div class="form-group" >
				<div class="col-sm-9" align="center">				 
					<button type="button" class="btn ue-btn-primary"  onclick="doAddAssBook()" value="保存">
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
	$("#t_time").val(str);
});
	function check()
	{
		var t_opt=$("#t_opt").val();
		
		if(finish=="")
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
		return true;
		
	}
	function doAddAssBook(){
		if(!check()) return;
		document.forms[0].action ="<%=j_auth_action%>";  
		
		$.sticky(
			"保存成功！",
		{
			style : 'success',
			autoclose : 1000,
			position : 'center'
		});
		setTimeout(function() {
			document.forms[0].submit();
		},1500)
    	
	}
	function doBack(){
		 window.history.back(-1);     
	}
	
	
	

</script>
  </body>
</html>