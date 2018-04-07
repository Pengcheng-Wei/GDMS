<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String j_auth_action=request.getContextPath()+"/sub_insert.action";
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
		<form class="form-horizontal" method="post">
			<div class="form-group">
				<label class="col-sm-3 control-label">项目名称</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="subName"
						name="subject.subName" value="" placeholder="名称" />			
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">项目英文名称</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="en_name"
						name="subject.en_name" value="" placeholder="英文名称" />			
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">出题人职工号</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="id"
						name="teacher.id" value="${sessionScope.person.id}"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">项目类型</label>
				<div class="col-sm-9">
					<select class="form-control ue-form" name="subject.sub_type" id="sub_type">
						<option value="">请选择</option>
						<option value="工程设计">工程设计</option>
						<option value="理论研究">理论研究</option>
					</select>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">学科方向</label>
				<div class="col-sm-9">
					<select class="form-control ue-form" name="subject.major_direction" id="major_direction">
						<option value="">请选择</option>
						<option value="计算机软件与理论">计算机软件与理论</option>
						<option value="网络与信息系统">网络与信息系统</option>
						<option value="人工智能及其应用">人工智能及其应用</option>
						<option value="计算机硬件">计算机硬件</option>
						<option value="电子应用技术">电子应用技术</option>
						<option value="嵌入式系统">嵌入式系统</option>
						<option value="集成电路设计">集成电路设计</option>
						<option value="信号与信息处理">信号与信息处理</option>
						<option value="其他领域">其他领域</option>
					</select>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">面向 本科/专科</label>
				<div class="col-sm-9 text-left radio">
					<label><input type="radio"  name="subject.faceTo" value="本科" checked="checked"/>本科 </label>					
					<label><input type="radio"  name="subject.faceTo" value="专科"/>专科</label>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">所需技术</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="tech"
						name="subject.tech" value="" placeholder="所需技术"/>			
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">项目简述</label>
				<div class="col-sm-9">
					<textarea id="order" name="subject.intro" class="form-control ue-form" rows="5" placeholder="简介不得少于200字"></textarea>	
				</div>			
			</div>
			<div class="form-group" >
				<label class="col-sm-3 control-label"></label>
				<div class="col-sm-9">				 
					<button type="button" class="btn ue-btn-primary" id="validate" onclick="doSubmit()">
						提交
					</button>
					<button type="button" class="btn ue-btn" id="cancel" onclick="doCancle()">
						取消
					</button>
				</div>
			</div>
		</form>
	</div>
	
    <!-- 需要引用的JS -->
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>    
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
   <script language="javascript">
   function doCancle()
   {
    window.history.back(-1);  
   }
	function doSubmit(){
	if(!check()) return;
    	document.forms[0].action ="<%=j_auth_action%>";  //将表单数据提交给地址j_auth_action
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
	function check()
	{
		var subName=$("#subName").val();
		var id = $("#id").val();
		var en_name=$("#en_name").val();
		var sub_type=$("#sub_type").val();
		var major_direction=$("#major_direction").val();
		var tech=$("#tech").val();
		var length=document.getElementById("order").value.length;
		var reg1 = /^[0-9]{10,10}$/;//验证账号
		var reg2= /^[A-Za-z0-9\s-]+$/
		
		if(subName=="")
		{
			$.sticky(
				"项目名不能为空！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
			return false;
		} 
		if(!reg2.test(en_name))
		{
			$.sticky(
				"英文名称不合法！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
			return false;
		}
		if(sub_type=="")
		{
			$.sticky(
				"学科类型不能为空！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
			return false;
		}
		if(major_direction=="")
		{
			$.sticky(
				"专业方向不能为空！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
			return false;
		} 
		if(tech=="")
		{
			$.sticky(
				"所需技术不能为空！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
			return false;
		}
		if(sub_type=="")
		{
			$.sticky(
				"项目类型不能为空！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
			return false;
		}
		if(length<200)
		{
			$.sticky(
				"简介字数不得少于200字！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
			return false;
		}
		if(!reg1.test(id)){
			$.sticky(
				"账号格式有误！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'center'
			});
			return false;
		}
		return true;
		
	}

</script>
  </body>
</html>