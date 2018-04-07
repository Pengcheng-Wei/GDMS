<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>文件上传-plupload</title>

<!-- 需要引用的css -->
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/font-awesome.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/form.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/ui.css">
</head>
<body>

	<table class="table table-hover table-bordered">
	<caption>&nbsp;&nbsp;已上传的文件</caption>
		 <thead>
		    <tr>
		    <th>所需文件</th>
		      <th>文件名称</th>
		      <th>上传状态</th>
		      <th>下载文件</th>
		      <th>选择文件</th>
		      <th>上传</th>
		     
		    </tr>
		  </thead>
		  <tbody>
		  <tr>
		  	<td>毕业论文</td>
		  	<c:choose>
	   	 	 	<c:when test="${student.graRep !=null}">
	   	 	 	 <td>${student.graRep }</td><td><span style="color:green">已上传</span></td>
	   	 	 	</c:when>
	   	 	 	<c:otherwise>
	   	 	 	<td align="center" ><span style="color:red">未上传文件</span></td><td><span style="color:red">未上传</span></td>	
	   	 	 	</c:otherwise>
	  	 	 </c:choose>
	  	 	 <td><button type="button" class="btn ue-btn" onclick="doDownloadgra('gra')" >下载</button></td>
	  	 	 <form method="post" enctype="multipart/form-data" >
	  	 	 <input type="text" style="display: none" name="name" value="${student.graRep }">
	  	 	 <td align="center"><input  id="gra" type="file" name="attach" /></td>
	  	 	 <td align="center"><input  type="button"  class="btn ue-btn" value="上传或重新上传" onclick="doUploadGra()"/></td>
	  	 	 </form>
	  	 	 
		  </tr>
		  
		  <tr>
		  	<td>毕业论文查重报告</td>
		  	<c:choose>
	   	 	 	<c:when test="${student.repeatRep !=null}">
	   	 	 	 <td>${student.repeatRep }</td><td><span style="color:green">已上传</span></td>
	   	 	 	</c:when>
	   	 	 	<c:otherwise>
	   	 	 	<td align="center"><span style="color:red">未上传文件</span></td><td><span style="color:red">未上传</span></td>	
	   	 	 	</c:otherwise>
	  	 	 </c:choose>
	  	 	 <td><button type="button" class="btn ue-btn" onclick="doDownloadrep('repeat')">下载</button></td>
	  	 	  <form method="post" enctype="multipart/form-data" >
	  	 	  <input type="text" style="display: none" name="name" value="${student.repeatRep }">
	  	 	 <td align="center"><input  id = "repeat" type="file" name="attach" /></td>
	  	 	 <td align="center"><input  type="button"  class="btn ue-btn" value="上传或重新上传" onclick="doUploadReapeat()"/></td>
	  	 	 </form>
	  	 	 
		  </tr>
		  </tbody>
		</table>
		

	<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/form.js"></script>
	<script type="text/javascript">
	//下载毕业论文
	function doDownloadgra(flag)
	{
		if(${student.graRep ==null})
		{
			 $.sticky(
			"无文件可下载！！！！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'top'
			});
		
		}
		else{
			document.forms[0].action ="${pageContext.request.contextPath }/down_down?flag="+flag;
			document.forms[0].submit();
		}
	}
	//下载查重报告
	function doDownloadrep(flag)
	{
		if(${student.repeatRep ==null})
		{
			 $.sticky(
			"无文件可下载！！！！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'top'
			});
		}
		else{
		document.forms[1].action ="${pageContext.request.contextPath }/down_down?flag="+flag;
		document.forms[1].submit();
		}
		
			
	}
	
	
	
	
	
	
	function doUploadReapeat()
	{
	
    		var filePath = $("#repeat").val();
		if(filePath=="")
		{
			 $.sticky(
			"未选择任何文件！！！！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'top'
			});
		}
		else
		{
		    var re = /(\\+)/g;
		    var filename=filePath.replace(re,"#");
		    //对路径字符串进行剪切截取
		    var one=filename.split("#");
		    //获取数组中最后一个，即文件名
		    var two=one[one.length-1];
		    //再对文件名进行截取，以取得后缀名
		    var three=two.split(".");
		     //获取截取的最后一个字符串，即为后缀名
		    var last=three[three.length-1];
		    //添加需要判断的后缀名类型
		    var tp ="doc,docx";
		    //返回符合条件的后缀名在字符串中的位置
		    var rs=tp.indexOf(last);
		    
		    
		if(rs>=0){
		     document.forms[1].action ="${pageContext.request.contextPath}/upload_upload.action?flag=repeat";  //将表单数据提交给地址j_auth_action
			$.sticky(
				"上传成功！",
			{
				style : 'success',
				autoclose : 1000,
				position : 'center'
			});
			setTimeout(function() {
				document.forms[1].submit();
			},1500)
		     }else{
		     	$.sticky(
			"文件格式有误！！！！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'top'
			});
		      }
			
		}	
	}
	function doUploadGra()
	{
	
    	var filePath = $("#gra").val();
		if(filePath=="")
		{
			 $.sticky(
			"未选择任何文件！！！！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'top'
			});
		}
		else
		{
			var re = /(\\+)/g;
		    var filename=filePath.replace(re,"#");
		    //对路径字符串进行剪切截取
		    var one=filename.split("#");
		    //获取数组中最后一个，即文件名
		    var two=one[one.length-1];
		    //再对文件名进行截取，以取得后缀名
		    var three=two.split(".");
		     //获取截取的最后一个字符串，即为后缀名
		    var last=three[three.length-1];
		    //添加需要判断的后缀名类型
		    var tp ="doc,docx";
		    //返回符合条件的后缀名在字符串中的位置
		    var rs=tp.indexOf(last);
		    
		    //alert(rs);
		if(rs>=0){
		     document.forms[0].action ="${pageContext.request.contextPath}/upload_upload.action?flag=gra";  //将表单数据提交给地址j_auth_action
			$.sticky(
				"上传成功！",
			{
				style : 'success',
				autoclose : 1000,
				position : 'center'
			});
			setTimeout(function() {
				document.forms[0].submit();
			},1500)
		     }else{
		     	$.sticky(
			"文件格式有误！！！！",
			{
				style : 'error',
				autoclose : 1000,
				position : 'top'
			});
		      }
		}	
	}

	</script>
</body>
</html>
