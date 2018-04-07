L= {
		version : '1.0'
	};

//slickGrid
L.EditGrid = function(gridId, url) {
	this.gridId = gridId;  //表格的ID
	this.url = url;	//请求数据的地址
	this.widthType = "%";
	this.params = {
		start: 0,
		limit: 10
	};
	this.changedRows = [];
	// 默认参数列表
	this.defaults = {
		paging: true,
		lengthMenu: [ 10, 25, 50, 100 ],
		info: true,
		editable:true,
		autoEdit: true,
		selectActiveRow: false,	// 点击行时将其选中，并将其余行取消选中
		multiSelect: true, // true：多选(Ctrl+左键单击行)；false：单选；默认：true。
		defaultColumnWidth: 200, // 默认列宽
		enableTextSelectionOnCells: true,
		forceFitColumns:true
	};
	this.oTable = null;
	this.pageBar = null;
	this.dataView = null;
}

// 对象原型方法
L.EditGrid.prototype = {
		init: function(options) {
			var _that = this;
			options = $.extend(_that.defaults, options);
			
			
			return _that.oTable;
		},
	
};

//校验是否为数字
function isNumber(value) {
	var reg = /^[0-9]*$/;
	if(!reg.test(value)) {
    	return {valid: false, msg: "请填写数字！"};
	}
	return {valid: true, msg: null};
}
//浮点数校验规则
function isFloat(value){
	var regx = /^(-?\d+)(\.\d+)?$/;
	if(!reg.test(value)) {
    	return {valid: false, msg: "请填写正确的浮点数"};
	}
	return {valid: true, msg: null};
}
//字符串
function isString(value){
	var regx = /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/;
	if(!regx.test(value)){
		return {valid: false,msg:"非法字符串"};
	}
	return {valid: true, msg: null};
}
//邮箱校验规则
function isEmail(value){
	var regx = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	if(!regx.test(value)){
		return {valid: false, msg: "请填写正确的邮箱地址!" };
	}
	return {valid: true, msg: null};
}

//网址校验规则
function isUrl(value){
	var regx = /^(\w+:\/\/)?\w+(\.\w+)+.*$/;
	if(!regx.test(value)){
		return {valid: false, msg: "请填写正确的url!" };
	}
	return {valid: true, msg: null};
}