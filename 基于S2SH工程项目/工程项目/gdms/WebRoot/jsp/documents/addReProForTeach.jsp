<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String j_auth_action=request.getContextPath()+"/doc_updateReProForTeach.action";
%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
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
		<input name="reaserchProposal.repro_id" style="display: none" value="${reaserchProposal.repro_id }"/>
		<input name="stu_id" style="display: none" value="${reaserchProposal.student.id }"/>
		<input name="teach_id" style="display: none" value="${reaserchProposal.teacher.id }"/>
		<input name="reaserchProposal.date" style="display: none" value="${reaserchProposal.date }"/>
		<input name="reaserchProposal.t_time" id="t_time" style="display: none" />
			<div class="form-group">
				<label class="col-sm-3 control-label">论文（设计）题目：</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="subName"
						name="student.subject.subName" value="${reaserchProposal.student.subject.subName }" readonly="readonly"/>			
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">学生姓名</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="student.name" value="${reaserchProposal.student.name}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">专业</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" 
						name="student.major" value="${reaserchProposal.student.major}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">学号</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form"
						name="student.id" value="${reaserchProposal.student.id}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">年级</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="student.grade" value="${reaserchProposal.student.grade}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">联系方式</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" 
						name="student.phone" value="${reaserchProposal.student.phone}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">邮箱</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="student.email" value="${reaserchProposal.student.email}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">指导教师</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="teaher.name" value="${reaserchProposal.teacher.name}" readonly="readonly"/>			
				</div>
				<label class="col-sm-1 control-label">联系方式</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" 
						name="teacher.title" value="${reaserchProposal.teacher.phone}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">邮箱</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="teacher.title" value="${reaserchProposal.teacher.email}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">计划完成时间:</label>
				<div class="col-sm-4">
					<input type="text" class="form-control ue-form" id="deadline"
						name="reaserchProposal.deadline" value="${reaserchProposal.deadline}"  placeholder="格式：yyyy/mm/dd，如：2017/08/01"/>
				</div>
				<label class="col-sm-2 control-label">计划撰写字数：</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" id="totalSum"
						name="reaserchProposal.totalSum" value="${reaserchProposal.totalSum}" placeholder="（数字）千字"/> 
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-sm-3 control-label">学院负责人（签名）：</label>
				<div class="col-sm-4">
					<input type="text" class="form-control ue-form" 
						name="reaserchProposal.dept_name" value="${reaserchProposal.dept_name}"  readonly="readonly"/>
				</div>
				<label class="col-sm-2 control-label">学院负责人签字时间：</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" id="check_time"
						name="reaserchProposal.dept_time" value="${reaserchProposal.dept_time}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">本选题研究的目的、意义和实用价值：</label>
				<div class="col-sm-9">
					<textarea name="reaserchProposal.sub_gogal" class="form-control ue-form" rows="5" id="sub_gogal">${reaserchProposal.sub_gogal }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">本选题国内外研究现状：</label>
				<div class="col-sm-9">
					<textarea name="reaserchProposal.sub_background" class="form-control ue-form" rows="5" id="sub_background">${reaserchProposal.sub_background }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">本选题的主要研究内容（提纲）：</label>
				<div class="col-sm-9">
					<textarea name="reaserchProposal.sub_content" class="form-control ue-form" rows="5"  id="sub_content">${reaserchProposal.sub_content }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">围绕本选题已做哪些准备工作，计划再做的工作：</label>
				<div class="col-sm-9">
					<textarea name="reaserchProposal.sub_plan" class="form-control ue-form" rows="5" id="sub_plan">${reaserchProposal.sub_plan }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">拟解决的关键问题：</label>
				<div class="col-sm-9">
					<textarea name="reaserchProposal.sub_question" class="form-control ue-form" rows="5" id="sub_question">${reaserchProposal.sub_question }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">主要参考文献（不少于10篇）：</label>
				<div class="col-sm-9">
					<textarea name="reaserchProposal.sub_refe" class="form-control ue-form" rows="5" id="sub_refe">${reaserchProposal.sub_refe }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">指导教师意见：</label>
				<div class="col-sm-9">
					<textarea name="reaserchProposal.t_opt" class="form-control ue-form" rows="5" id="t_opt">${reaserchProposal.t_opt }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">学院意见:</label>
				<div class="col-sm-9">
					<textarea name="reaserchProposal.dept_opt" class="form-control ue-form" rows="5" id="dept_opt" readonly="readonly">${reaserchProposal.dept_opt }</textarea>	
				</div>			
			</div>
			
			<div class="form-group" >
				<div class="col-sm-9" align="center">				 
					<button type="button" class="btn ue-btn-primary"  onclick="doRePro()" value="保存">
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
		
		return true;
		
	}

	function doRePro(){
		//if(!check()) return;
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