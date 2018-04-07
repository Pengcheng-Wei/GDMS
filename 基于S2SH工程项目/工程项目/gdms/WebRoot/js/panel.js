(function($) {
	$.initPanel = function(option) {
		var opt = $.extend({
			onrefresh: function(a) {},
			onsetting: function(b) {},
			onsave: function(){}
		}, option);	
		
		function DragedTable(tableId) {
			var dragedTable_x0, dragedTable_y0, dragedTable_x1, dragedTable_y1;
			var dragedTable_movable = false;
			var dragedTable_preCell = null;
			var dragedTable_movedDiv = "dragedTable_movedDiv";
			var dragedTable_tableId = "";
			dragedTable_tableId = tableId;
			var oTempDiv = document.createElement("div");
			oTempDiv.id = dragedTable_movedDiv;
			oTempDiv.onselectstart = function() {
				return false
			};
			oTempDiv.style.cursor = "hand";
			oTempDiv.style.position = "absolute";
			oTempDiv.style.display = "none";
			document.body.appendChild(oTempDiv);
			document.getElementById(tableId).onmousedown = showDiv;
			function getEvent() {
				if (document.all) {
			    return window.event; //如果是ie
				}
				func = getEvent.caller;
				while (func != null) {
					var arg0 = func.arguments[0];
					if (arg0) {
						if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
							return arg0;
						}
					}
					func = func.caller;
				}
				return null;
			}
			//得到控件的绝对位置
			function getPos(cell) {
				var pos = new Array();
				var t = cell.offsetTop;
				var l = cell.offsetLeft;
				while (cell = cell.offsetParent) {
					t += cell.offsetTop;
					l += cell.offsetLeft;
				}
				pos[0] = t;
				pos[1] = l;
				return pos;
			}
			//显示图层
			function showDiv() {
				var event = getEvent();
				var obj = event.srcElement ? event.srcElement: event.target;
				var pos = new Array();
				  //获取过度图层
				var oDiv = document.getElementById(dragedTable_movedDiv);
				if (obj.className == "panel-heading") {
					obj.style.cursor = "hand";
				  	pos = getPos(obj);
				    //计算中间过度层位置，赋值
				    var w = $(obj).parents(".ue-panel").width() +"px";
				  	var h = $(obj).parents(".ue-panel").height()+"px";
				  	oDiv.style.width = w;
				  	oDiv.style.height = h;
				    
				    oDiv.style.top = pos[0] + "px";
				    oDiv.style.left = pos[1] + "px";
				    oDiv.style.background = "#ccc";
				    oDiv.style.opacity = "0.4";
				    oDiv.style.filter = "progid:DXImageTransform.Microsoft.gradient(startcolorstr = #66000000,endcolorstr = #66000000)";
				    oDiv.style.display = "block";
				    dragedTable_x0 = pos[1];
				    dragedTable_y0 = pos[0];
				    dragedTable_x1 = event.clientX;
				    dragedTable_y1 = event.clientY;
				    //记住原td
				    dragedTable_preCell = $(obj).parents("td")[0];
				    dragedTable_movable = true;
				}
			}
			function dragDiv() {
				if (dragedTable_movable) {
					var event = getEvent();
					var oDiv = document.getElementById(dragedTable_movedDiv);
					var pos = new Array();
					var x=event.x||event.pageX;
					var y=event.y||event.pageY;
					var posX=0;
					var posY=0;
					var td;
					var oTable = document.getElementById(dragedTable_tableId);
					var rowslength=oTable.rows.length;
					var cellslength=0;
					oDiv.style.top = (event.clientY - dragedTable_y1 + dragedTable_y0) + "px";
					oDiv.style.left = (event.clientX - dragedTable_x1 + dragedTable_x0) + "px";
					for(var j=0;j<rowslength;j++){
						cellslength=oTable.rows[j].cells.length;
						for (var i = 0; i < cellslength; i++) {
							td=oTable.rows[j].cells[i];
							if (td.tagName.toLowerCase() == "td") {
								pos = getPos(td);
								posX=pos[1];
								posY=pos[0];
								if (x > posX && x < posX + td.offsetWidth && y >posY && y < posY + td.offsetHeight) {
									if (td != dragedTable_preCell)
									td.style.border = "1px dashed #3e99ff";
								} else {
									if (td != dragedTable_preCell)
									td.style.border = "0px";
								}
							}
						}
					}
				}
			}
			function hideDiv() {
				if (dragedTable_movable) {
					var event = getEvent();
					var x=event.x||event.pageX;
					var y=event.y||event.pageY;
					var oTable = document.getElementById(dragedTable_tableId);
					var pos = new Array();
					var posX=0;
					var posY=0;
					var tdNext;
					var rowslength=oTable.rows.length;
					var cellslength=0;
					if (dragedTable_preCell != null) {
						for(var j=0;j<rowslength;j++){
							cellslength=oTable.rows[j].cells.length;
							for (var i = 0; i < cellslength; i++) {
								tdNext=oTable.rows[j].cells[i];
								pos = getPos(tdNext);
								posX=pos[1];
								posY=pos[0];
							//计算鼠标位置，是否在某个单元格的范围之内
							if (x >posX && x < posX + tdNext.offsetWidth && y > posY && y < posY + tdNext.offsetHeight) {
								if (oTable.rows[j].cells[i].tagName.toLowerCase() == "td") {
								//交换文本
								var tmp;	
								tmp = tdNext.innerHTML;
								tdNext.innerHTML = dragedTable_preCell.innerHTML;
								dragedTable_preCell.innerHTML = tmp;
								$(tdNext).find(".ue-panel-tools").css("display","none");
								//清除原单元格和目标单元格的样式
								tdNext.style.border = "none";
								tdNext.style.cursor = "";
								dragedTable_preCell.style.cursor = "";
								opt.onrefresh(dragedTable_preCell);
								opt.onrefresh(tdNext);
								opt.onsave();
							}
						}
					}
				}			
			}	
				dragedTable_movable = false;
				    //清除提示图层
				    document.getElementById(dragedTable_movedDiv).style.display = "none";
				}
			}
			$(document).on("mouseup","#dragedTable_movedDiv",function() {
				hideDiv();
				
			});
			$(document).on("mousemove","#dragedTable_movedDiv",function() {
				dragDiv();
			});
		}
	
		$(function(){
			//拖拽事件
			$(document).on("mouseover",".panel-heading",function(){
				var cpTableId = $(".cpTable")[0].id
				DragedTable(cpTableId);
			})
			$(document).on("mouseover mouseout",".ue-panel .panel-heading",function() {
				$(this).find(".ue-panel-tools").toggle();
			});
			//刷新功能
			$(document).on("click",".ue-panel-tools .fa-refresh",function() {
				var obj = $(this);
				//可调用刷新功能
				opt.onrefresh(obj);
			});
			//放大还原功能
			var a;
			$(document).on("click",".ue-panel-tools .fa-expand",function() {
				a = $(this).parents(".ue-panel").find(".panel-body").height()+30;
				var obj = $(this);
				$(this).parents(".ue-panel").find(".panel-body").css({"width":"100%","height":$(window).height()-50+'px'});
				$("body").css("position","relative");
				obj.parents(".ue-panel").addClass("fullscreen").css("min-height",$(window).height()+'px');
				$(this).removeClass("fa-expand").addClass("fa-compress");
				opt.onrefresh(obj);
			})
			$(document).on("click",".ue-panel-tools .fa-compress",function() {
				var obj = $(this);
				obj.parents(".ue-panel").removeClass("fullscreen");
				//$(".ue-panel").css("min-height","300px");
				$(".ue-panel").css("min-height","0px");
				$(this).parents(".ue-panel").find(".panel-body").css("height",a+"px");
				$(this).removeClass("fa-compress").addClass("fa-expand");
				opt.onrefresh(obj);
			})
		});
	}
})(jQuery);
