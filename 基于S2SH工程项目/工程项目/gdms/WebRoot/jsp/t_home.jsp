<!DOCTYPE html>
<%@ page pageEncoding="UTF-8" language="java"%>
<html lang="en" style="height:100%">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>毕业设计管理系统</title>

    <!-- 需要引用的CSS -->
  <link rel="shortcut icon" href="<%=request.getContextPath()%>/images/favicon.ico" />
   <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.css" /> 
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/font-awesome.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/ui.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/form.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/home.css" />
    
    <!-- 需要引用的JS -->
    <script  type="text/javascript" src="<%=request.getContextPath()%>/js/knockout.js">
    
    <script type="text/javascript">
	    //项目上下文
		var context="<%=request.getContextPath()%>";
    </script>
  </head>
  <body style="height:100%;overflow: hidden;">
	<!-- 页面结构 -->
	<header class="navbar navbar-static-top">
   		<div class="navbar-header">
   			<a class="fa fa-bars pull-left" onclick="toggleSide()"></a>
   			<a href="javascript: location=location;" class="navbar-brand">齐鲁师范学院 | 毕业设计管理系统</a>
		</div>
    	<nav class="collapse navbar-collapse">
    		<ul class="nav navbar-nav navbar-right">
		        <li>
		        	<div class="dropdown" id="userInfo">
		        		<a data-toggle="dropdown" class="username">Welcome! &nbsp;${sessionScope.person.name}<span class="caret"></span></a>
		        		<div class="dropdown-menu ue-dropdown-menu dropdown-menu-right">
		        			<span class="ue-dropdown-angle"></span>
		        			<img class="user-photo" src="../images/user.jpg"/>
		        			<div class="user-info">
		        				<span class="user-role"></span>
		        				<a href="#" class="user-action"><i class="fa fa-edit md">&nbsp;</i>修改资料</a>
				        		<a href="#" class="user-action"><i class="fa fa-user-md md">&nbsp;</i>个人中心</a>
		        			</div>
				        	<div class="exit"><a onclick="logout()">退出</a></div>
		        		</div>
		        	</div>
		        </li>
		    </ul>
		    <br>
   		</nav>
	</header>
	<div class="ue-menu-wrap">
	
		<div class="ue-menu-left" id="leftMenu">
			<div class="ue-left-top" >
				<span id="dyn-top">
					<img src="../images/collect.png" class="title-icon"/>
					<span class="left-top-text ellipsis">功能导航</span>
				</span>
			</div>
		<div class="ue-left-content">
			<div class="ue-vmenu">
				<ul>
					<li><a data-role="leaf" onclick="doPlan()">日程安排</a></li>
					<li>
						<a>题目管理</a> 
						<ul>
							<li><a data-role="leaf" onclick="doApply()" id="apply">题目申请</a></li>
							<li><a data-role="leaf" onclick="doList()">题目浏览</a></li>
							<li><a data-role="leaf" onclick="doList2()">题目审核结果</a></li>
							<li>
								<a>选择学生</a>
								<ul>
									<li><a data-role="leaf" onclick="doFirstSel()">一轮选择</a></li>
									<li><a data-role="leaf" onclick="doSecondSel()">二轮选择</a></li>
								</ul>
							</li>
							<li><a data-role="leaf" onclick="doSelectResult()">选题结果</a></li>
						</ul>
					</li>
					<li>
						<a>文档填写</a>
						<ul>
							<li><a data-role="leaf" onclick="doAssBook()">任务书</a></li>
							<li><a data-role="leaf" onclick="doRePros()">开题报告</a></li>
							<li><a data-role="leaf" onclick="doInCheck()">中期测评</a></li>
						</ul>
					</li>
					
					<li><a data-role="leaf" onclick="checkReprot()">查看论文及查重报告</a></li>
					<li>
						<a>论文评阅及答辩</a>
						<ul>
							<li><a data-role="leaf" onclick="doReviewRep()">论文评阅</a></li>
							<li><a data-role="leaf" onclick="doReply()">设计答辩</a></li>
							<li><a data-role="leaf" onclick="doReviewRep()">设计二辩</a></li>
						</ul>
					</li>
					<li><a data-role="leaf" onclick="getFianlGradeForTeacher()">论文总成绩查询</a></li>
				</ul>
			</div>
		</div>
		</div>
		<div class="ue-menu-right">
			<div class="ue-right-top" >Welcome</div>
			<div class="ue-right-content" id = "parent" >
				  <iframe id="mainFrame" name="mainFrame" src="<%=request.getContextPath()%>/jsp/common/plan.jsp" frameborder="0" allowtransparency="true" width="100%" height="100%"></iframe>
			</div>
		</div>
	</div>
	
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/form.js"></script>
    <script  type="text/javascript" src="<%=request.getContextPath()%>/js/ui.js"></script>
    <script  type="text/javascript" src="<%=request.getContextPath()%>/js/intro.js"></script>
       <script  type="text/javascript" src="<%=request.getContextPath()%>/js/home.js"></script>
	
   <script type="text/javascript">

	$(function() {
		// initialize menu 
		$('.ue-vmenu').vmenu({
			autostart: 0,
			autohide: 1
		});
	});
	function logout(){
	$.dialog({
		type: 'confirm',
	    content: '您确定要退出系统吗？',
	    ok: function () {
	    	document.location.href="../signin.jsp";
	    	},
	    cancel: function () {},
	    autofocus: true
    }).showModal();
}    




function toggleSide() {
	if (!$('.ue-menu-left').data('isClose')) {
    	$('.ue-menu-right').css({'border-left':'1px solid #ddd'}).animate({left:'0px'}, "slow");
    	$('.ue-menu-left').css({'z-index':'auto'});
    	$('.ue-menu-left').data('isClose', true);
	} else {
    	$('.ue-menu-right').css({'border-left':'none'}).animate({left:'260px'}, "slow");
    	$('.ue-menu-left').data('isClose', false);
	}
}
	function doApply()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/jsp/subject/formdoc.jsp"});
		
	}
	function doList()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/sub_getSubsList.action?teachId=${sessionScope.person.id}&flag=1"});
	}
	function doList2()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/sub_getSubsList.action?teachId=${sessionScope.person.id}&flag=2"});
	}
	
	function doPlan()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/jsp/common/plan.jsp"});
	}
	function doFirstSel()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/select_teaPassSubs.action"});
	}
	function doSecondSel()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/select_teaPassSubs.action"});
	}
	function doSelectResult()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/select_getSelectResult.action"});
	}
	function doAssBook()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/doc_docIndex.action?flag=assBook"});
	}
	
	function doRePros()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/doc_docIndex.action?flag=rePro"});
	}
	function doInCheck()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/doc_docIndex.action?flag=inCheck"});
	}
	function doReviewRep()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/doc_reviewRepForTeacherIndex"});
	}
	function checkReprot()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/doc_checkReportIndex.action"});
	}
	function doReply()
	{
		$.sticky(
			"该活动在线下进行！",
		{
			style : 'success',
			autoclose : 1000,
			position : 'center'
		});
	}
	
	function getFianlGradeForTeacher()
	{
		$("#mainFrame").attr({src:"<%=request.getContextPath()%>/doc_getSelectResult.action?flag=final"});
	}
	
	</script>
  </body>
</html>