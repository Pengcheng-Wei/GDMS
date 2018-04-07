<!DOCTYPE html>
<%@ page pageEncoding="UTF-8" language="java"%>
<%@ page import="java.net.URLDecoder" %>
<%@taglib uri="/struts-tags" prefix="s" %>
<%
String j_auth_action=request.getContextPath()+"/user_verify.action";

String msg=(String)request.getSession().getAttribute("AuthenticationException");
if(msg==null){
	msg="";
}else if(msg.indexOf("，")>0){
	String[] info = msg.split("，");
	if(info.length > 2)
		msg = info[info.length-1];
	else
		msg = info[0];
}
request.getSession().setAttribute("AuthenticationException",null);
//获取用户名
String userName = null;
Cookie[] cookies = request.getCookies();
if(cookies!=null){
	for(int i = 0 ; i < cookies.length; i++){
		if(cookies[i].getName().equals("userName")) {
			userName=URLDecoder.decode(cookies[i].getValue(), "UTF-8");
			  break;
		}
	}
}
%>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>毕业设计管理页面-登录页</title>

    <!-- 需要引用的CSS -->
    <link rel="shortcut icon" href="<%=request.getContextPath()%>/images/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/ui.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/login.css" />

  </head>
  <body>
	<!-- 页面结构 -->
	<div class="login">
		<header class="navbar navbar-static-top login-top">
		  <div class="container">
		    <div class="navbar-header">
		      <a href="http://www.qlnu.edu.cn/" class="navbar-brand"><span>|</span>毕业设计管理系统</a>
		    </div>
		    <nav class="collapse navbar-collapse">
		      <ul class="nav navbar-nav navbar-right">
		        <li>
		          <a href="http://www.qlnu.edu.cn/">校园首页</a>
		        </li>
		        <li>
		          <a href="http://ids.qlnu.edu.cn/authserver/login?service=http%3A%2F%2Fmy.qlnu.edu.cn%2Flogin.portal">数字校园</a>
		        </li>
		        <li>
		          <a href="#">帮助</a>
		        </li>
		      </ul>
		    </nav>
		  </div>
		</header>
		<div class="login-body">
			<div class="login-left pull-left"><img src="<%=request.getContextPath()%>/images/login-bg.png" /></div>
			<div class="login-right pull-right">
				<div class="avatar">
				  	<h4>登录</h4>
				</div>
                <div id="hints" class="error-hints" >
                	<img src="<%=request.getContextPath()%>/images/error.png"/>
                	<p><%=msg%></p>
                </div>
                	
				<form method="post" onsubmit="return false;">
				  <div class="form-group" >
				    <span class="quickdelete-wrap">
				    	<input type="text" class="form-control ue-form qd_ipt" id="userName" name="p.id" tabindex="1" placeholder="请输入用户名">
				    	<a id="deleteName" class="quickdelete" href="javascript:void(0)" onclick="clearName()" title="清空" ></a>
				    </span>
				  </div>
				  <div class="form-group">
				  	<span class="quickdelete-wrap">
						<input type="password" class="form-control ue-form qd_ipt" id="password" name="p.password" tabindex="2" placeholder="请输入密码">
						<a id="deletePassword" class="quickdelete" href="javascript:void(0)" onclick="clearPassword()" title="清空" ></a>
					</span>
				  </div>
				  <div class="checkbox">
				    <label class="form-checkbox">
				      <input type="checkbox" tabindex="3"> 下次自动登录
				    </label>
				    <label class="form-forget">
				       <a>忘记密码？</a>
				    </label>
				  </div>
				  <br/>
			  	  <button class="btn btn-login" tabindex="4" onclick="doLogin()">登录</button>
			  	  <s:token></s:token>
			  	  <br/>
			  	   <br/>
			  	  <span style="color:red" >登录失败，请检查用户名和密码是否正确！</span>
			  	  <br/>
			  	  <br/>
			  	  <br/>
				</form>
			</div>
		</div>
		<div class="login-bottom">
		&copy By Allen &nbsp; phone:18866992102 &nbsp;email:enthusiast521@gmail.com
		</div>
	</div>
	
    <!-- 需要引用的JS -->
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/md5.js" ></script> 
    <script language="javascript">
    	$(function(){
    		$("#deleteName").hide();
    		$("#deletePassword").hide();
    		$("#hints").hide();
    		if('<%=msg%>' != ""){
    			$("#hints").show();
    		}
    		if('<%=userName%>' != "null"){
    			$("#userName")[0].value = '<%=userName%>';
    			$("#deleteName").show();
    		}
    		
    	});
		function doSession(){
		if(window.dialogArguments!=null){
			 window.dialogArguments.location=self.location;
			 window.returnValue="aa";
			 parent.close();
			 return;
			}
			if(self!=top){top.location=self.location;}
		}
		doSession();
		function doLogin(){
			if(!check()) return;
		    document.forms[0].action ="<%=j_auth_action%>";  //将表单数据提交给地址j_auth_action
			var password = document.getElementById("password");
			password.value = hex_md5(password.value);
		    document.forms[0].submit();
		}
		//如果名称或者密码 为空要返回提示 
		function check(){
			var username = document.getElementById("userName");
			var password = document.getElementById("password");
			if(username.value=="" && password.value==""){
				$("#hints").show();
				$("#hints").children("p").text("请输入用户名和密码");
				username.focus();
				return false;
			}
			if(username.value==""){
				$("#hints").show();
				$("#hints").children("p").text("请输入用户名");
				username.focus();
				return false;
			}
			if(password.value==""){
				$("#hints").show();
				$("#hints").children("p").text("请输入密码");
				password.focus();
				return false;
			}
			return true;
		
		}
		//'enter' key,/=47,*=42,+=43
		function keypress(e)
		{
		
			if(!window.event){
				e = e.which;
			}else{
				e = window.event.keyCode;
			}
			if(e==13||e==42)	//'enter' key,*
			{
				doLogin();
			}
		
		}
		//用户姓名输入框清空按钮
		$("#userName").bind("input propertychange",function(){
			if($("#userName")[0].value!="")
				$("#deleteName").show();
			else
				$("#deleteName").hide();
		});
		function clearName(){
			$("#userName")[0].value="";
			$("#deleteName").hide();
		}
		//用户密码输入框清空按钮
		$("#password").bind("input propertychange",function(){
			if($("#password")[0].value!="")
				$("#deletePassword").show();
			else
				$("#deletePassword").hide();
		});
		function clearPassword(){
			$("#password")[0].value="";
			$("#deletePassword").hide();
		}
</script>
  </body>
</html>