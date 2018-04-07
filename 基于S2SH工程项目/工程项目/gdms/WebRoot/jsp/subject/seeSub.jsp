<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String j_auth_action=request.getContextPath()+"/sub_update.action";
%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>毕业设计填写表</title>

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
			<div style="display: none">
					<div class="col-sm-9">
						<input type="text" class="form-control ue-form" 
							name="subject.sub_id" value="${subject.sub_id }" placeholder="名称"  readonly="readonly"/>			
					</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">项目名称</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="subName"
						name="subject.subName" value="${subject.subName }" placeholder="名称"  readonly="readonly"/>			
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">项目英文名称</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="en_name"
						name="subject.en_name" value="${subject.en_name }" placeholder="英文名称"  readonly="readonly"/>			
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">出题人职工号</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="id"
						name="teacher.id" value="${subject.teacher.id}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">出题人姓名</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="id"
						name="subject.teacher.name" value="${subject.teacher.name}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">项目类型</label>
				<div class="col-sm-9">
					<select class="form-control ue-form" name="subject.sub_type" id="sub_type">
						<option value="${subject.sub_type }">${subject.sub_type }</option>
					</select>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">学科方向</label>
				<div class="col-sm-9">
					<select class="form-control ue-form" name="subject.major_direction" id="major_direction">
						<option value="${subject.major_direction }">${subject.major_direction }</option>
					</select>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">面向 本科/专科</label>
				<div class="col-sm-9 text-left radio">
					<label><input type="radio"  name="subject.faceTo" value="${subject.faceTo }" checked="checked"/>${subject.faceTo } </label>					
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">所需技术</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="tech"
						name="subject.tech" value="${subject.tech }" placeholder="所需技术" readonly="readonly"/>			
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">项目简述</label>
				<div class="col-sm-9">
					<textarea id="order" name="subject.intro" class="form-control ue-form" rows="5"  readonly="readonly">${subject.intro }</textarea>	
				</div>			
			</div>
			<div class="form-group" >
				<label class="col-sm-3 control-label"></label>
				<input type="text"style="display:none " name="subject.leadOpt" value="${subject.leadOpt}"/>
				<input type="text"style="display:none " name="subject.direcOpt" value="${subject.direcOpt}"/>
				<input type="text"style="display:none " name="subject.status" value="${subject.status}"/>
				<div class="col-sm-9">				 
					<button type="button" class="btn ue-btn-primary" id="validate" onclick="doSubmit()" name="subject.direcOpt" value="审核通过">
						审核通过
					</button>
					<button type="button" class="btn ue-btn" id="unpass" onclick="doUnpass()" name="subject.direcOpt" value="审核不通过">
						审核不通过
					</button>
					
					<button type="button" class="btn ue-btn" id="cancel" onclick="doCancle()" >
						我再看看
					</button>
				</div>
			</div>
		</form>
	</div>
	
    <!-- 需要引用的JS -->
   <script language="javascript">
	function doSubmit(){
		document.forms[0].action ="<%=j_auth_action%>"+"?ifPass=passed";  //将表单数据提交给地址j_auth_action
		$.sticky(
			"提交成功！",
		{
			style : 'success',
			autoclose : 1000,
			position : 'center'
		});
		setTimeout(function() {
			document.forms[0].submit();
		},1500)
    	
	}
	function doUnpass()
	{
		document.forms[0].action ="<%=j_auth_action%>"+"?ifPass=unpassed";  //将表单数据提交给地址j_auth_action
		$.sticky(
			"提交成功！",
		{
			style : 'success',
			autoclose : 1000,
			position : 'center'
		});
		setTimeout(function() {
			document.forms[0].submit();
		},1500)
	}
	
	
	function doCancle(){
		 window.history.back(-1);     
	}
	
	
	

</script>
  </body>
</html>