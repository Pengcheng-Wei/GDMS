<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String j_auth_action=request.getContextPath()+"/doc_updateAssBookLead.action";
%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
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
		<input name="assBook_id" style="display: none" value="${assignmentBook.assBook_id }"/>
		<input name="assignmentBook.assBook_id" style="display: none" value="${assignmentBook.assBook_id }"/>
		<input name="stu_id" style="display: none" value="${assignmentBook.student.id }"/>
		<input name="teach_id" style="display: none" value="${assignmentBook.teacher.id }"/>
		<input name="sub_id" style="display: none" value="${assignmentBook.student.subject.sub_id }"/>
			<div class="form-group">
				<label class="col-sm-3 control-label">论文（设计）题目：</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" id="subName"
						name=assignmentBook.subject.subName" value="${assignmentBook.student.subject.subName }" readonly="readonly"/>			
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">指导教师</label>
				<div class="col-sm-4">
					<input type="text" class="form-control ue-form" 
						name="assignmentBook.teaher.name" value="${assignmentBook.teacher.name}" readonly="readonly"/>			
				</div>
				<label class="col-sm-1 control-label">职称</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" 
						name="assignmentBook.teacher.title" value="${assignmentBook.teacher.title}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">学生姓名</label>
				<div class="col-sm-4">
					<input type="text" class="form-control ue-form" 
						name="sassignmentBook.tudent.name" value="${assignmentBook.student.name}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">学号</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form"
						name="assignmentBook.student.id" value="${assignmentBook.student.id}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">专业</label>
				<div class="col-sm-4">
					<input type="text" class="form-control ue-form" 
						name="assignmentBook.student.major" value="${assignmentBook.student.major}"  readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">年级</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" 
						name="assignmentBook.student.grade" value="${assignmentBook.student.grade}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">学院负责人（签名）：</label>
				<div class="col-sm-4">
					<input type="text" class="form-control ue-form" 
						name="assignmentBook.sub_deptName" value="${assignmentBook.sub_deptName}" readonly="readonly"/>
				</div>
				<label class="col-sm-1 control-label">时间</label>
				<div class="col-sm-3">
					<input type="text" class="form-control ue-form" id="check_time"
						name="assignmentBook.check_time" value="${assignmentBook.check_time}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">选题类别</label>
				<div class="col-sm-9">
					<input type="text" class="form-control ue-form" 
						name="assignmentBook.subject.sub_type" value="${assignmentBook.student.subject.sub_type}"  readonly="readonly"/>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">选题来源</label>
				<div class="col-sm-9">
					<select class="form-control ue-form" name="assignmentBook.sub_src" id="sub_src">
						<option value="${assignmentBook.sub_src }">${assignmentBook.sub_src }</option>
					</select>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">选题性质与完成途径（可多选）</label>
				<div class="col-sm-9 text-left radio">
					<input type="text"  class="form-control ue-form" id="sub_property"  name="assignmentBook.sub_property" value="${assignmentBook.sub_property }" readonly="readonly"/>				
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">论文（设计）的基本要求</label>
				<div class="col-sm-9">
					<textarea name="assignmentBook.sub_baseReq" class="form-control ue-form" rows="5" id="sub_baseReq" readonly="readonly">${assignmentBook.sub_baseReq }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">论文（设计）的主要研究任务及预期目标</label>
				<div class="col-sm-9">
					<textarea name="assignmentBook.sub_gogal" class="form-control ue-form" rows="5" id="sub_gogal" readonly="readonly">${assignmentBook.sub_gogal }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">论文（设计）的主要内容</label>
				<div class="col-sm-9">
					<textarea name="assignmentBook.sub_content" class="form-control ue-form" rows="5"  id="sub_content" readonly="readonly">${assignmentBook.sub_content }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">主要阅读书目以及参考文献</label>
				<div class="col-sm-9">
					<textarea name="assignmentBook.sub_refe" class="form-control ue-form" rows="5" id="sub_refe" readonly="readonly">${assignmentBook.sub_refe }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">进度安排</label>
				<div class="col-sm-9">
					<textarea name="assignmentBook.sub_process" class="form-control ue-form" rows="5" id="sub_process" readonly="readonly">${assignmentBook.sub_process }</textarea>	
				</div>			
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">学院意见</label>
				<div class="col-sm-9">
					<textarea name="assignmentBook.sub_deptOpt" class="form-control ue-form" rows="5" id="sub_deptOpt" readonly="readonly">${assignmentBook.sub_deptOpt }</textarea>	
				</div>			
			</div>
			
			<div class="form-group" >
				<div class="col-sm-9" align="center">				 
					<button type="button" class="btn ue-btn-primary"  onclick="downLoadAssBook()" value="下载word版">
						下载word版
					</button>
				</div>
			</div>
			<input type="text" name="name" value="${student.id }-任务书.doc" style="display: none"/>
		</form>
	</div>
   	<script language="javascript">
		function downLoadAssBook()
		{
  			document.forms[0].action ="${pageContext.request.contextPath }/down_down?flag=assBook";
			document.forms[0].submit();
		}
      </script>
  </body>
</html>