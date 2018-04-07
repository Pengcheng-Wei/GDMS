<!DOCTYPE html>
<%@ page pageEncoding="UTF-8" language="java"%>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
<title>可视化流程图</title>

<!-- 需要引用的CSS -->
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/ui.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/raphael-flowchart.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/prettify.css" />
<style type="text/css">
#content {
	position: relative;
	font-size: 15px;
	height: 240px;
}

.red {
	background-color: #fe3e53;
	background-image: url(<%=request.getContextPath()%>/images/machine.png);
}

.blue {
	background-color: #3d99fe;
	background-image: url(<%=request.getContextPath()%>/images/file.png);
}

.brown {
	background-color: #c2a178;
	background-image: url(<%=request.getContextPath()%>/images/user.png);
}

.green {
	background-color: #00a6a4;
	background-image: url(<%=request.getContextPath()%>/images/machine.png);
}

</style>
</head>
<body>
	<div class="ue-container">
		<div id="content"></div>
	</div>
	<!-- 需要引用的JS -->
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/raphael.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/arttemplate.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery-ui.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/raphael-flowchart.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/prettify.js"></script>

	<script type="text/html" id="T-graph">
		<div class="ue-flowchart-graph" data-index="{{data.index}}" data-id="{{data.id}}" style="left:{{data.x}}px; top:{{data.y}}px; width:{{data.widthNum}}px">
			<div class="{{data.className}} ue-flowchart-left">
			</div>
			<div class="ue-flowchart-right">
				<dl class="ue-flowchart-title">{{data.title}}</dl>
				<div class="ue-flowchart-content" style="height: {{data.rowsHeight}}px"></div>
			</div>
		</div>
	</script>
	<script type="text/html" id="row">
		<dl class="ue-rowContent " style = "height: {{data.height}}px; line-height: {{data.height-10}}px">{{data.content}}</dl> 
	</script>
	<script type="text/javascript">
		var data = {
			"states" : [ {
				"id" : 1,
				"title" : "① 题目申报",
				"content" : ["2017-08-07 10:20","2017-08-10 10:20"],
				"type" : 1,
				"order" : 1
			}, {
				"id" : 2,
				"title" : "④ 学生一轮选题",
				"content" : ["2017-08-28 10:20","2017-08-30 10:20"],
				"type" : 1,
				"order" : 1
			}, {
				"id" : 3,
				"title" : "② 题目审核",
				"content" : ["2017-08-20 10:20","2017-08-23 10:20"],
				"type" : 2,
				"order" : 2
			}, {
				"id" : 4,
				"title" : "⑤ 教师一轮选学生",
				"content" : ["2017-08-31 10:20","2017-09-03 10:20"],
				"type" : 2,
				"order" : 2
			}, {
				"id" : 5,
				"title" : "③ 题目预览",
				"content" : ["2017-08-24 10:20","2017-08-27 10:20"],
				"type" : 3,
				"order" : 3
			} , {
				"id" : 6,
				"title" : "⑥ 学生二轮选题",
				"content" : ["2017-09-05 10:20","2017-09-09 10:20"],
				"type" : 3,
				"order" : 3
			}, {
				"id" : 7,
				"title" : "⑦ 教师二轮选学生",
				"content" : ["2017-09-11 10:20","2017-09-15 10:20"],
				"type" : 1,
				"order" : 1
			} , {
				"id" : 8,
				"title" : "⑩ 任务书",
				"content" : ["2017-10-21 10:20","2017-10-31 10:20"],
				"type" : 1,
				"order" : 1
			}, {
				"id" : 9,
				"title" : "⑧ 系统随机为学生分配题目",
				"content" : ["2017-09-17 10:20","2017-09-20 10:20"],
				"type" : 2,
				"order" : 2
			}, {
				"id" : 10,
				"title" : "⑪ 开题报告",
				"content" : ["2017-11-02 10:20","2017-11-15 10:20"],
				"type" : 2,
				"order" : 2
			}, {
				"id" : 11,
				"title" : "⑨ 选题完结，进入开题环节",
				"content" : ["2017-09-21 10:20","2017-10-20 10:20"],
				"type" : 3,
				"order" : 3
			} , {
				"id" : 12,
				"title" : "⑫ 中期报告",
				"content" : ["2018-05-02 10:20","2018-05-05 10:20"],
				"type" : 3,
				"order" : 3
			},{
				"id" : 13,
				"title" : "⑬ 论文及查重报告提交",
				"content" : ["2018-05-07 10:20","2018-05-18 10:20"],
				"type" : 1,
				"order" : 1
			}, {
				"id" : 14,
				"title" : "⑯ 设计二辩",
				"content" : ["2018-06-13 10:20","2018-06-15 10:20"],
				"type" : 1,
				"order" : 1
			},{
				"id" : 15,
				"title" : "⑭ 论文评阅审核",
				"content" : ["2018-05-23 10:20","2018-05-30 10:20"],
				"type" : 2,
				"order" : 2
			}, {
				"id" : 16,
				"title" : "⑰ 总成绩查询",
				"content" : ["2018-06-16 10:20","2018-06-20 10:20"],
				"type" : 2,
				"order" : 2
			}, {
				"id" : 17,
				"title" : "⑮ 设计答辩",
				"content" : ["2018-06-01 10:20","2018-06-05 10:20"],
				"type" : 3,
				"order" : 3
			} , {
				"id" : 18,
				"title" : "⑱ 毕业设计整体流程结束",
				"content" : ["&nbsp;崇德象贤","&nbsp;博学明道"],
				"type" : 3,
				"order" : 3
			} ],
		};
		$(function() {
			$("#content").showGraph(data, {
				styleKey : "type",
				styleRef : {
					"1" : "red",
					"2" : "blue", 
					"3" : "green",
				},
				lineColor : "#00000",
				rows: 3,
				rowHeight: 24
			});
		});
	</script>
</body>
</html>
