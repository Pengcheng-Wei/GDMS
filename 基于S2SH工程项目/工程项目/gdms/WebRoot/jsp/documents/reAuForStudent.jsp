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
		<input name="reviewAudit.reau_id" style="display: none" value="${reviewAudit.reau_id }"/>
		<input name="reau_id" style="display: none" value="${reviewAudit.reau_id }"/>
		<input name="stu_id" style="display: none" value="${reviewAudit.student.id }"/>
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
						name="reviewAudit.teaher.name" value="${reviewAudit.teacher.name}" readonly="readonly"/>			
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
				<label class="col-sm-3 control-label">指导成绩：</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						name="reviewAudit.c_time" id="c_time" value="${reviewAudit.t_grade}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">评阅成绩</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" id="subName"
						name="reviewAudit.totalSum" placeholder="千字" value="${reviewAudit.c_grade }" readonly="readonly"/>			
				</div>
				<label class="col-sm-1 control-label">答辩成绩</label>
				<div class="col-sm-2">
					<input type="text" class="form-control ue-form" 
						id="c_grade" name="reviewAudit.c_grade" value="${reviewAudit.d_grade}" readonly="readonly"/>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-sm-3 control-label">指导教师意见：</label>
				<div class="col-sm-9">
					<textarea name="reviewAudit.t_opt" class="form-control ue-form" rows="5" >${reviewAudit.t_opt }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">评阅教师意见：</label>
				<div class="col-sm-9">
					<textarea name="reviewAudit.c_opt" class="form-control ue-form" rows="5"  >${reviewAudit.c_opt }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">评阅小组意见：</label>
				<div class="col-sm-9">
					<textarea name="reviewAudit.d_opt" class="form-control ue-form" rows="5"  >${reviewAudit.d_opt }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">院长意见：</label>
				<div class="col-sm-9">
					<textarea name="reviewAudit.c_opt" class="form-control ue-form" rows="5"  >${reviewAudit.l_opt }</textarea>	
				</div>			
			</div>
			
			
			<div class="form-group" >
				<div class="col-sm-9" align="center">				 
					<button type="button" class="btn ue-btn-primary"  onclick="downLoadAssBook()" value="导出word版">
						导出word版
					</button>
				</div>
			</div>
			<input type="text" name="name" value="${student.id }-评阅审核表.doc" style="display: none"/>
		</form>
	</div>
   <script language="javascript">
  		 function downLoadAssBook()
		{
  			document.forms[0].action ="${pageContext.request.contextPath }/down_down?flag=reAu";
			document.forms[0].submit();
		}
</script>
  </body>
</html>