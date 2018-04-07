/*
 * 页面静态类
 */
(function($) {
	if (typeof CPortal == "undefined") {
		CPortal = {
			// 当前操作表格
			curTable : null,
			
			// 当前操作行
			curTr : null,

			// 当前事件
			curEvent : null,

			// 从组件栏里拖动的组件
			curDragWidget : null,

			// 当前状态，0:新增,1:修改
			curState : "0",

			// 应用路径(相对路径)
			webPath :null,
				
			// 应用路径(绝对路径)
			fullWebPath:null,
			
			// 组件模板
			widgetTpl:'<div class="panel ue-panel" data_widgetId="{widgetId}">'
							+ '<div class="panel-heading">'
							+ '{widgetTitle}'
							+ '<ul class="ue-panel-tools">'
							+ '<li><a><i class="fa fa-refresh" widget_id="{widgetId}"></i></a></li>'
							+ '<li><a><i class="fa fa-expand"></i></a></li>'
							+ '<li><a><i class="fa fa-times"></i></a></li>'
							+ '</ul>'
						+ '</div>'
						+ '<div class="panel-body" id="{widgetId}" style="height:{height}">'
						+'<div>'
						+'<div>作者:'
						+'{author}'
						+'</div>'
						+'<div>描述:'
						+'{desc}'
						+'</div>'
						+'</div>'
						+ '</div>'
					 + '</div>',
			
		};
	}

	/**
	 * 初始化
	 */
	$(function() {
		CPortal.getBuilder().init();
	});

	/**
	 * 设置构建器
	 */
	CPortal.setBuilder = function(builder) {
		this.builder = builder;
	};

	/**
	 * 获得构建器
	 */
	CPortal.getBuilder = function() {
		return this.builder;
	};

	/**
	 * 注册组件
	 */
	CPortal.reg = function(widget) {
		var id = CPortal.getWidgetId();
		this.getBuilder().add(id, widget);
	};

	/**
	 * 获得设计区document
	 */
	CPortal.getDocument = function() {
		return $("#designIframe")[0].contentWindow.document;
	};

	/**
	 * 获得设计区form
	 */
	CPortal.getForm = function() {
		return this.getDocument().forms[0];
	};
	
	/**
	 * 获得设计区table
	 */
	CPortal.getTable = function() {
		return $(this.getDocument()).find("table")[0];
	};

	/**
	 * 获得设计完毕产生的代码
	 */
	CPortal.getCode = function() {
		// 去除设计工具引入的样式文件
		CPortal.removeLink();
		
		// 去除选中元素的样式
		$(this.getDocument()).find(".selected").removeClass("selected");
		
		// 去除IE添加的jQuery的属性
		var htmlStr = $(this.getDocument()).find("html")[0].outerHTML;
		htmlStr = htmlStr.replace(/\s+sizset="((false)|(true))"/g, '');
		htmlStr = htmlStr.replace(/\s+sizcache[0-9]+="\d+.\d+.\d+"/g, '');
		htmlStr = htmlStr.replace(/\s+jQuery[0-9]+="\d+"/g, '');
		
		// 重新添加引入的样式文件
		CPortal.importLink();
		
		return htmlStr;
	};

	/**
	 * 获得设计区选定的区域
	 */
	CPortal.getRange = function() {
		var iframeWindow = $("#designIframe")[0].contentWindow;
		var userSelection;
		// firefox/chrome
		if (iframeWindow.getSelection) {
			userSelection = iframeWindow.getSelection();
		}
		// IE
		else if (iframeWindow.document.selection) {
			userSelection = iframeWindow.document.selection.createRange();
		}

		if (!userSelection) {
			return {
				node : null,
				range : null,
				text : null
			};
		}
		var range;
		if (userSelection.getRangeAt)
			range = userSelection.getRangeAt(0);
		else {
			range = userSelection;
		}
		var text = iframeWindow.getSelection ? range : range.text;
		var rangeNode = null;
		if (range.commonAncestorContainer) {
			rangeNode = range.commonAncestorContainer.parentElement;
		} else if (range.parentElement) {
			rangeNode = range.parentElement();
		}
		return ({
			node : rangeNode,
			range : range,
			text : text
		});
	};

	/**
	 * 引入云表单默认样式+业务自定义样式
	 */
	CPortal.importLink = function() {
		var $head = $(this.getDocument()).find("head");
		// 云表单默认样式
		var cssFileArray = $("#cfDefaultCss").val().split(";");
		$.each(cssFileArray, function(index, cssFile) {
			if (!/msie/.test(navigator.userAgent.toLowerCase()) && cssFile.indexOf("ie") > 0) {
				return;
			}
			$head.append(cssFile);
		});
	};
	
	/**
	 * 去除设计时引入的样式文件
	 */
	CPortal.removeLink = function() {
		$(this.getDocument()).find("link").remove();
	};
	
	/**
	 * 去除设计时引入的业务自定义样式
	 */
	CPortal.removeBizLink = function() {
		$(this.getDocument()).find("link").each(function() {
			if (this.id == "bizLink") {
				$(this).remove();
			}
		});
	};

	/**
	 * 添加可放置控件样式
	 */
	CPortal.setDroppableStyle = function(e, f) {
		CPortal.removeDroppableStyle();
		
		var eTarget = e.target;
		if (eTarget.tagName == "TD") {
			$(eTarget).trigger("mousedown");
		} else if ($(eTarget).parent("td").length > 0) {
			$(eTarget).parent("td").trigger("mousedown");
		}
	};

	/**
	 * 移除可放置控件样式
	 */
	CPortal.removeDroppableStyle = function() {
//		$(CPortal.getForm()).find(".selected").removeClass("selected");
	};

	// 解析url，获得传入参数
	CPortal.parseUrl = function() {
		var parameters = document.URL.split("?");
		if (parameters.length <= 1) {
			return;
		}
		var keyValues = parameters[1].split("&");
		for ( var i = 0; i < keyValues.length; i++) {
			var keyValue = keyValues[i].split("=");
			if (keyValue.length == 2) {
				CPortal[keyValue[0]] = keyValue[1];
			}
		}
	};

	// 获得组件ID
	CPortal.getWidgetId = function() {
		var scripts = $('script');
		/**
		 * js文件的加载可以是同步或异步方式，但执行时，一定是按照在文档流中的顺序来执行的
		 * 
		 * 当某个js文件执行时，一定是“已加载”的js文件中的最后一个
		 */
		var curScript = scripts.get(scripts.length - 1);
		var params = curScript.src.split("?");
		var id = "";

		if (params.length > 1) {
			var keyValues = params[1].split("&");
			for ( var i = 0; i < keyValues.length; i++) {
				var keyValue = keyValues[i].split("=");
				if (keyValue.length == 2) {
					if (keyValue[0] == "id") {
						id = keyValue[1];
						break;
					}
				}
			}
		}

		if (!id) {
			showDialog("alert", "脚本[" + curScript.src + "]未设置组件ID！", "提示信息");
			return;
		}

		return id;
	};
	
	/**
	 * 去除特殊字符
	 * 
	 * @param s
	 *            值
	 * @return
	 */
	CPortal.removeSpecialChar = function(s) {
		var pattern = /[a-zA-Z0-9_]{1}/;
		var rs = "";

		for ( var i = 0; i < s.length; i++) {
			var single = s.substr(i, 1);
			if (single.match(pattern)) {
				rs = rs + single;
			}
		}

		return rs;
	};

	/**
	 * 鼠标拖动调整表格宽度
	 */
	CPortal.initTablesResize = function() {
		var iframeDoc = this.getDocument();
		$(iframeDoc).find(".cfTable").each(function() {
			$.tableresize($(this));
		});
	};

})(jQuery);