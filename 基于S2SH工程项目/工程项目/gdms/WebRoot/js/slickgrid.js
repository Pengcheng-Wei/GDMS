if (function(a) {
		function b(a, b, c, d, e) {
			var f = d.source,
				g = [];
			if (null != c)
				for (var h = 0; h < f.length; h++)
					for (var i = c.toString().split(","), j = 0; j < i.length; j++) f[h].key == i[j] && g.push(f[h].value);
			return g.join(",")
		}
		function c(a, b, c, d, e) {
			return c ? "是" : "否"
		}
		a.extend(!0, window, {
			Slick : {
				Formatters : {
					enumeration : b,
					YesNo : c
				}
			}
		})
	}(jQuery), function(a) {
		function b(b) {
			var c,
				d,
				e = this;
			this.init = function() {
				c = a("<input type='text' class='editor-text'/>").appendTo(b.container).focus().select().blur(function() {
					e.validate()
				})
			}, this.destroy = function() {
				c.remove()
			}, this.focus = function() {
				c.focus()
			}, this.getValue = function() {
				return c.val()
			}, this.setValue = function(a) {
				c.val(a)
			}, this.loadValue = function(a) {
				d = void 0 == a[b.column.field] ? "" : a[b.column.field], c.val(d), c[0].defaultValue = d, c.select()
			}, this.serializeValue = function() {
				return c.val()
			}, this.applyValue = function(a, c) {
				a[b.column.field] = c
			}, this.isValueChanged = function() {
				return !("" == c.val() && null == d) && c.val() != d
			}, this.validate = function() {
				if (b.column.validator) {
					var a = b.column.validator(c.val(), c, b);
					if (!a.valid) return a
				}
				return {
					valid : !0,
					msg : null
				}
			}, this.init()
		}
		function c(b) {
			var c,
				d;
			this.init = function() {
				c = a("<input type='text' style='margin-left:0' class='editor-text' disabled='true'/>").appendTo(b.container).bind("keydown.nav", function(b) {
					(b.keyCode === a.ui.keyCode.LEFT || b.keyCode === a.ui.keyCode.RIGHT) && b.stopImmediatePropagation()
				}).focus().select()
			}, this.destroy = function() {
				c.remove()
			}, this.focus = function() {
				c.focus()
			}, this.getValue = function() {
				return c.val()
			}, this.setValue = function(a) {
				c.val(a)
			}, this.loadValue = function(a) {
				d = a[b.column.field] || "", c.val(d), c[0].defaultValue = d, c.select()
			}, this.serializeValue = function() {
				return c.val()
			}, this.applyValue = function(a, c) {
				a[b.column.field] = c
			}, this.isValueChanged = function() {
				return !("" == c.val() && null == d) && c.val() != d
			}, this.validate = function() {
				if (b.column.validator) {
					var a = b.column.validator(c.val());
					if (!a.valid) return a
				}
				return {
					valid : !0,
					msg : null
				}
			}, this.init()
		}
		function d(b) {
			var c,
				d;
			this.init = function() {
				c = a("<div></div>");
				for (var d = b.column.source, e = "", f = 0; f < d.length; f++) e += "<input type='checkbox'  value='" + d[f].key + "' text='" + d[f].value + "'/>" + d[f].value;
				c.append(e).appendTo(b.container)
			}, this.destroy = function() {
				c.remove()
			}, this.focus = function() {
				c.focus()
			}, this.loadValue = function(e) {
				d = e[b.column.field];
				var f = d.toString().split(",");
				c.find("input").each(function() {
					for (var b = a(this), c = 0; c < f.length; c++) b.attr("value") == f[c] && b.prop("checked", !0)
				})
			}, this.serializeValue = function() {
				var b = [];
				return c.find("input").each(function() {
						1 == a(this).prop("checked") && b.push(a(this).attr("value"))
					}), b.join(",")
			}, this.applyValue = function(a, c) {
				a[b.column.field] = c
			}, this.isValueChanged = function() {
				return this.serializeValue() !== d
			}, this.validate = function() {
				if (b.column.validator) {
					var a = b.column.validator($input.val());
					if (!a.valid) return a
				}
				return {
					valid : !0,
					msg : null
				}
			}, this.init()
		}
		function e(b) {
			var c,
				d,
				e,
				f = this;
			this.init = function() {
				var e = a("body");
				d = a("<DIV style='z-index:10000;position:absolute;background:white;padding:5px;border:2px solid gray;'/>").appendTo(e), c = a("<TEXTAREA hidefocus rows=5 style='backround:white;width:250px;height:80px;border:0;outline:0;padding:5px;'>").appendTo(d), a("<DIV style='text-align:right'><BUTTON class='btn btn-default btn-xs' style='margin-right:10px'>确定</BUTTON><BUTTON class='btn btn-default btn-xs'>取消</BUTTON></DIV>").appendTo(d), d.find("button:first").bind("click", this.save), d.find("button:last").bind("click", this.cancel), c.bind("keydown", this.handleKeyDown), f.position(b.position), c.focus().select()
			}, this.handleKeyDown = function(c) {
				c.which == a.ui.keyCode.ENTER && c.ctrlKey ? f.save() : c.which == a.ui.keyCode.ESCAPE ? (c.preventDefault(), f.cancel()) : c.which == a.ui.keyCode.TAB && c.shiftKey ? (c.preventDefault(), b.grid.navigatePrev()) : c.which == a.ui.keyCode.TAB && (c.preventDefault(), b.grid.navigateNext())
			}, this.save = function() {
				b.commitChanges()
			}, this.cancel = function() {
				c.val(e), b.cancelChanges()
			}, this.hide = function() {
				d.hide()
			}, this.show = function() {
				d.show()
			}, this.position = function(a) {
				d.css("top", a.top - 5).css("left", a.left - 5)
			}, this.destroy = function() {
				d.remove()
			}, this.focus = function() {
				c.focus()
			}, this.loadValue = function(a) {
				c.val(e = a[b.column.field]), c.select()
			}, this.serializeValue = function() {
				return c.val()
			}, this.applyValue = function(a, c) {
				a[b.column.field] = c
			}, this.isValueChanged = function() {
				return !("" == c.val() && null == e) && c.val() != e
			}, this.validate = function() {
				if (b.column.validator) {
					var a = b.column.validator(c.val());
					if (!a.valid) return a
				}
				return {
					valid : !0,
					msg : null
				}
			}, this.init()
		}
		function f(b) {
			var c,
				d,
				e = !1;
			this.init = function() {
				$wrapper = a('<div class="input-group date" ></div>'), c = a('<input type="text" class="form-control ue-form"/>').appendTo($wrapper), $span = a('<span class="input-group-addon ue-form-btn"><i class="fa fa-calendar"></i></span>').appendTo($wrapper);
				var d = new Date;
				$wrapper.appendTo(b.container), $wrapper.datetimepicker({
					language : "zh-CN",
					autoclose : !0,
					minView : 2,
					todayBtn : !0,
					startDate : d,
					format : "yyyy-mm-dd"
				}).on("changeDate", function() {
					a(this).find("input").blur()
				})
			}, this.destroy = function() {
				$wrapper.datetimepicker("hide"), $wrapper.datetimepicker("remove"), $wrapper.remove()
			}, this.show = function() {
				e && $wrapper.datetimepicker("show")
			}, this.hide = function() {
				e && $wrapper.datetimepicker("hide")
			}, this.position = function(a) {}, this.focus = function() {
				c.focus()
			}, this.loadValue = function(a) {
				d = a[b.column.field], c.val(d), c[0].defaultValue = d
			}, this.serializeValue = function() {
				return c.val()
			}, this.applyValue = function(a, c) {
				a[b.column.field] = c
			}, this.isValueChanged = function() {
				return !("" == c.val() && null == d) && c.val() != d
			}, this.validate = function() {
				if (b.column.validator) {
					var a = b.column.validator(c.val());
					if (!a.valid) return a
				}
				return {
					valid : !0,
					msg : null
				}
			}, this.init()
		}
		function g(b) {
			var c,
				d;
			this.init = function() {
				c = a("<select  class='editor-select'/>"), c.appendTo(b.container), c.focus().select();
				for (var d = b.column.source, e = "", f = 0; f < d.length; f++) e += "<option value=" + d[f].key + ">" + d[f].value + "</option>";
				c.append(e)
			}, this.destroy = function() {
				c.remove()
			}, this.show = function() {
				c.show()
			}, this.hide = function() {
				c.hide()
			}, this.position = function(a) {}, this.focus = function() {
				c.focus()
			}, this.loadValue = function(a) {
				d = a[b.column.field], c.val(d), c.select()
			}, this.serializeValue = function() {
				return c.val()
			}, this.applyValue = function(a, c) {
				a[b.column.field] = c
			}, this.isValueChanged = function() {
				return !("" == c.val() && null == d) && c.val() != d
			}, this.validate = function() {
				if (b.column.validator) {
					var a = b.column.validator(c.val());
					if (!a.valid) return a
				}
				return {
					valid : !0,
					msg : null
				}
			}, this.init()
		}
		a.extend(!0, window, {
			Slick : {
				Editors : {
					ReadOnly : c,
					Text : b,
					Checkbox : d,
					LongText : e,
					MonthDateEditor : f,
					SelectEditor : g
				}
			}
		})
	}(jQuery), function(a) {
		function b(b) {
			function c(c) {
				r = a.extend(!0, {}, v, b), p = c, u.subscribe(p.onActiveCellChanged, e(m)), u.subscribe(p.onKeyDown, e(n)), u.subscribe(p.onClick, e(o))
			}
			function d() {
				u.unsubscribeAll()
			}
			function e(a) {
				return function() {
					q || (q = !0, a.apply(this, arguments), q = !1)
				}
			}
			function f(a) {
				for (var b = [], c = 0; c < a.length; c++)
					for (var d = a[c].fromRow; d <= a[c].toRow; d++) b.push(d);
				return b
			}
			function g(a) {
				for (var b = [], c = p.getColumns().length - 1, d = 0; d < a.length; d++) b.push(new Slick.Range(a[d], 0, a[d], c));
				return b
			}
			function h(a, b) {
				var c,
					d = [];
				for (c = a; b >= c; c++) d.push(c);
				for (c = b; a > c; c++) d.push(c);
				return d
			}
			function i() {
				return f(s)
			}
			function j(a) {
				k(g(a))
			}
			function k(a) {
				s = a, t.onSelectedRangesChanged.notify(s)
			}
			function l() {
				return s
			}
			function m(a, b) {
				r.selectActiveRow && null != b.row && k([ new Slick.Range(b.row, 0, b.row, p.getColumns().length - 1) ])
			}
			function n(a) {
				var b = p.getActiveCell();
				if (b && a.shiftKey && !a.ctrlKey && !a.altKey && !a.metaKey && (38 == a.which || 40 == a.which)) {
					var c = i();
					c.sort(function(a, b) {
						return a - b
					}), c.length || (c = [ b.row ]);
					var d,
						e = c[0],
						f = c[c.length - 1];
					d = 40 == a.which ? b.row < f || e == f ? ++f : ++e : b.row < f ? --f : --e, d >= 0 && d < p.getDataLength() && (p.scrollRowIntoView(d), s = g(h(e, f)), k(s)), a.preventDefault(), a.stopPropagation()
				}
			}
			function o(b) {
				var c = p.getCellFromEvent(b);
				if (!c || !p.canCellBeActive(c.row, c.cell)) return !1;
				if (!p.getOptions().multiSelect || !b.ctrlKey && !b.shiftKey && !b.metaKey) return !1;
				var d = f(s),
					e = a.inArray(c.row, d);
				if (-1 === e && (b.ctrlKey || b.metaKey)) d.push(c.row), p.setActiveCell(c.row, c.cell);
				else if (-1 !== e && (b.ctrlKey || b.metaKey)) d = a.grep(d, function(a, b) {
						return a !== c.row
					}), p.setActiveCell(c.row, c.cell);
				else if (d.length && b.shiftKey) {
					var h = d.pop(),
						i = Math.min(c.row, h),
						j = Math.max(c.row, h);
					d = [];
					for (var l = i; j >= l; l++) l !== h && d.push(l);
					d.push(h), p.setActiveCell(c.row, c.cell)
				}
				return s = g(d), k(s), b.stopImmediatePropagation(), !0
			}
			var p,
				q,
				r,
				s = [],
				t = this,
				u = new Slick.EventHandler,
				v = {
					selectActiveRow : !0
				};
			a.extend(this, {
				getSelectedRows : i,
				setSelectedRows : j,
				getSelectedRanges : l,
				setSelectedRanges : k,
				init : c,
				destroy : d,
				onSelectedRangesChanged : new Slick.Event
			})
		}
		a.extend(!0, window, {
			Slick : {
				RowSelectionModel : b
			}
		})
	}(jQuery), function(a) {
		function b(b) {
			function c(a) {
				l = a, m.subscribe(l.onSelectedRowsChanged, e).subscribe(l.onClick, g).subscribe(l.onHeaderClick, i).subscribe(l.onKeyDown, f)
			}
			function d() {
				m.unsubscribeAll()
			}
			function e(a, b) {
				var c,
					d,
					e = l.getSelectedRows(),
					f = {};
				for (d = 0; d < e.length; d++) c = e[d], f[c] = !0, f[c] !== n[c] && (l.invalidateRow(c),
					delete n[c]
					);
				for (d in n) l.invalidateRow(d);
				n = f, l.render(), p.multiSelect && (e.length && e.length == l.getDataLength() ? l.updateColumnHeader(p.columnId, "<input type='checkbox' original='true' checked='checked'>", p.toolTip) : l.updateColumnHeader(p.columnId, "<input type='checkbox' original='true'>", p.toolTip))
			}
			function f(a, b) {
				32 == a.which && l.getColumns()[b.cell].id === p.columnId && ((!l.getEditorLock().isActive() || l.getEditorLock().commitCurrentEdit()) && h(b.row), a.preventDefault(), a.stopImmediatePropagation())
			}
			function g(b, c) {
				if (l.getColumns()[c.cell].id === p.columnId && a(b.target).is(":radio,:checkbox")) {
					if (l.getEditorLock().isActive() && !l.getEditorLock().commitCurrentEdit()) return b.preventDefault(), void b.stopImmediatePropagation();
					h(c.row), b.stopPropagation(), b.stopImmediatePropagation()
				}
			}
			function h(b) {
				p.multiSelect ? n[b] ? l.setSelectedRows(a.grep(l.getSelectedRows(), function(a) {
					return a != b
				})) : l.setSelectedRows(l.getSelectedRows().concat(b)) : l.setSelectedRows([ b ])
			}
			function i(b, c) {
				if (c.column.id == p.columnId && a(b.target).is(":checkbox")) {
					if (l.getEditorLock().isActive() && !l.getEditorLock().commitCurrentEdit()) return b.preventDefault(), void b.stopImmediatePropagation();
					if (a(b.target).is(":checked")) {
						for (var d = [], e = 0; e < l.getDataLength(); e++) d.push(e);
						l.setSelectedRows(d)
					} else l.setSelectedRows([]);
					b.stopPropagation(), b.stopImmediatePropagation()
				}
			}
			function j() {
				return {
					id : p.columnId,
					name : function() {
						return p.multiSelect ? "<input type='checkbox' original='true'>" : "<input type='radio' disabled='true' original='true'>"
					}(),
					toolTip : p.toolTip,
					field : "sel",
					width : p.width,
					resizable : !1,
					sortable : !1,
					cssClass : p.cssClass,
					formatter : k
				}
			}
			function k(a, b, c, d, e) {
				return e ? p.multiSelect ? n[a] ? "<input type='checkbox' checked='checked' original='true'>" : "<input type='checkbox' original='true'>" : n[a] ? "<input type='radio' checked='checked' original='true'>" : "<input type='radio' original='true'>" : null
			}
			var l,
				m = new Slick.EventHandler,
				n = {},
				o = {
					columnId : "_checkbox_selector",
					cssClass : null,
					toolTip : "全选/取消全选",
					width : 35,
					multiSelect : !0
				},
				p = a.extend(!0, {}, o, b);
			a.extend(this, {
				init : c,
				destroy : d,
				getColumnDefinition : j
			})
		}
		a.extend(!0, window, {
			Slick : {
				CheckboxSelectColumn : b
			}
		})
	}(jQuery), function(a) {
		function b(b) {
			function c(c) {
				b = a.extend(!0, {}, h, b), g = c, b.enableForCells && g.onMouseEnter.subscribe(e), b.enableForHeaderCells && g.onHeaderMouseEnter.subscribe(f)
			}
			function d() {
				b.enableForCells && g.onMouseEnter.unsubscribe(e), b.enableForHeaderCells && g.onHeaderMouseEnter.unsubscribe(f)
			}
			function e(c) {
				var d = g.getCellFromEvent(c);
				if (d) {
					var e,
						f = a(g.getCellNode(d.row, d.cell));
					f.innerWidth() < f[0].scrollWidth ? (e = a.trim(f.text()), b.maxToolTipLength && e.length > b.maxToolTipLength && (e = e.substr(0, b.maxToolTipLength - 3) + "...")) : e = "", f.attr("title", e)
				}
			}
			function f(b, c) {
				var d = c.column,
					e = a(b.target).closest(".slick-header-column");
				d.toolTip || e.attr("title", e.innerWidth() < e[0].scrollWidth ? d.name : "")
			}
			var g,
				h = {
					enableForCells : !0,
					enableForHeaderCells : !1,
					maxToolTipLength : null
				};
			a.extend(this, {
				init : c,
				destroy : d
			})
		}
		a.extend(!0, window, {
			Slick : {
				AutoTooltips : b
			}
		})
	}(jQuery), function(a) {
		function b(b) {
			function c() {
				sa = !0
			}
			function d() {
				sa = !1, ba()
			}
			function e(a) {
				ua = a
			}
			function f(a) {
				ga = a
			}
			function g(a) {
				a = a || 0;
				for (var b, c = a, d = ma.length; d > c; c++) {
					if (b = ma[c][la], void 0 === b)
						throw "Each data element must implement a unique 'id' property";
					oa[b] = c
				}
			}
			function h() {
				for (var a, b = 0, c = ma.length; c > b; b++)
					if (a = ma[b][la], void 0 === a || oa[a] !== b)
						throw "Each data element must implement a unique 'id' property"
			}
			function i() {
				return ma
			}
			function j(a, b) {
				void 0 !== b && (la = b), ma = wa = a, oa = {}, g(), h(), ba()
			}
			function k(a) {
				void 0 != a.pageSize && (Da = a.pageSize, Ea = Da ? Math.min(Ea, Math.max(0, Math.ceil(Fa / Da) - 1)) : 0), void 0 != a.pageNum && (Ea = Math.min(a.pageNum, Math.max(0, Math.ceil(Fa / Da) - 1))), Ia.notify(l(), null, ja), ba()
			}
			function l() {
				var a = Da ? Math.max(1, Math.ceil(Fa / Da)) : 1;
				return {
					pageSize : Da,
					pageNum : Ea,
					totalRows : Fa,
					totalPages : a
				}
			}
			function m(a, b) {
				ta = b, fa = a, ea = null, b === !1 && ma.reverse(), ma.sort(a), b === !1 && ma.reverse(), oa = {}, g(), ba()
			}
			function n(a, b) {
				ta = b, ea = a, fa = null;var c = Object.prototype.toString;
				Object.prototype.toString = "function" == typeof a ? a : function() {
					return this[a]
				}, b === !1 && ma.reverse(), ma.sort(), Object.prototype.toString = c, b === !1 && ma.reverse(), oa = {}, g(), ba()
			}
			function o() {
				fa ? m(fa, ta) : ea && n(ea, ta)
			}
			function p(a) {
				qa = a, b.inlineFilters && (ha = W(), ia = X()), ba()
			}
			function q() {
				return za
			}
			function r(c) {
				b.groupItemMetadataProvider || (b.groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider), Aa = [], Ba = [], c = c || [], za = c instanceof Array ? c : [ c ];
				for (var d = 0; d < za.length; d++) {
					var e = za[d] = a.extend(!0, {}, ya, za[d]);
					e.getterIsAFn = "function" == typeof e.getter, e.compiledAccumulators = [];
					for (var f = e.aggregators.length; f--;) e.compiledAccumulators[f] = V(e.aggregators[f]);
					Ba[d] = {}
				}
				ba()
			}
			function s(a, b, c) {
				return null == a ? void r([]) : void r({
					getter : a,
					formatter : b,
					comparer : c
				})
			}
			function t(a, b) {
				if (!za.length)
					throw new Error("At least one grouping must be specified before calling setAggregators().");
				za[0].aggregators = a, za[0].aggregateCollapsed = b, r(za)
			}
			function u(a) {
				return ma[a]
			}
			function v(a) {
				return oa[a]
			}
			function w() {
				if (!pa) {
					pa = {};
					for (var a = 0, b = na.length; b > a; a++) pa[na[a][la]] = a
				}
			}
			function x(a) {
				return w(), pa[a]
			}
			function y(a) {
				return ma[oa[a]]
			}
			function z(a) {
				var b = [];
				w();
				for (var c = 0; c < a.length; c++) {
					var d = pa[a[c]];
					null != d && (b[b.length] = d)
				}
				return b
			}
			function A(a) {
				for (var b = [], c = 0; c < a.length; c++) a[c] < na.length && (b[b.length] = na[a[c]][la]);
				return b
			}
			function B(a, b) {
				if (void 0 === oa[a] || a !== b[la])
					throw "Invalid or non-matching id";
				ma[oa[a]] = b, ra || (ra = {}), ra[a] = !0, ba()
			}
			function C(a, b) {
				ma.splice(a, 0, b), g(a), ba()
			}
			function D(a) {
				ma.push(a), g(ma.length - 1), ba()
			}
			function E(a) {
				var b = oa[a];
				if (void 0 === b)
					throw "Invalid id";
				delete oa[a]
				, ma.splice(b, 1), g(b), ba()
			}
			function F() {
				return na.length
			}
			function G(a) {
				return na[a]
			}
			function H(a) {
				var c = na[a];
				return void 0 === c ? null : c.__group ? b.groupItemMetadataProvider.getGroupRowMetadata(c) : c.__groupTotals ? b.groupItemMetadataProvider.getTotalsRowMetadata(c) : null
			}
			function I(a, b) {
				if (null == a)
					for (var c = 0; c < za.length; c++) Ba[c] = {}, za[c].collapsed = b;
				else Ba[a] = {}, za[a].collapsed = b;
				ba()
			}
			function J(a) {
				I(a, !0)
			}
			function K(a) {
				I(a, !1)
			}
			function L(a, b, c) {
				Ba[a][b] = za[a].collapsed ^ c, ba()
			}
			function M(a) {
				var b = Array.prototype.slice.call(arguments),
					c = b[0];
				1 == b.length && -1 != c.indexOf(Ca) ? L(c.split(Ca).length - 1, c, !0) : L(b.length - 1, b.join(Ca), !0)
			}
			function N(a) {
				var b = Array.prototype.slice.call(arguments),
					c = b[0];
				1 == b.length && -1 != c.indexOf(Ca) ? L(c.split(Ca).length - 1, c, !1) : L(b.length - 1, b.join(Ca), !1)
			}
			function O() {
				return Aa
			}
			function P(a, b) {
				for (var c, d, e, f = [], g = [], h = b ? b.level + 1 : 0, i = za[h], j = 0, k = i.predefinedValues.length; k > j; j++) d = i.predefinedValues[j], c = g[d], c || (c = new Slick.Group, c.value = d, c.level = h, c.groupingKey = (b ? b.groupingKey + Ca : "") + d, f[f.length] = c, g[d] = c);
				for (var j = 0, k = a.length; k > j; j++) e = a[j], d = i.getterIsAFn ? i.getter(e) : e[i.getter], c = g[d], c || (c = new Slick.Group, c.value = d, c.level = h, c.groupingKey = (b ? b.groupingKey + Ca : "") + d, f[f.length] = c, g[d] = c), c.rows[c.count++] = e;
				if (h < za.length - 1)
					for (var j = 0; j < f.length; j++) c = f[j], c.groups = P(c.rows, c);
				return f.sort(za[h].comparer), f
			}
			function Q(a) {
				for (var b, c = za[a.level], d = a.level == za.length, e = new Slick.GroupTotals, f = c.aggregators.length; f--;) b = c.aggregators[f], b.init(), c.compiledAccumulators[f].call(b, !d && c.aggregateChildGroups ? a.groups : a.rows), b.storeResult(e);
				e.group = a, a.totals = e
			}
			function R(a, b) {
				b = b || 0;
				for (var c, d = za[b], e = a.length; e--;) c = a[e], (!c.collapsed || d.aggregateCollapsed) && (c.groups && R(c.groups, b + 1), d.aggregators.length && (d.aggregateEmpty || c.rows.length || c.groups && c.groups.length) && Q(c))
			}
			function S(a, b) {
				b = b || 0;
				for (var c, d = za[b], e = d.collapsed, f = Ba[b], g = a.length; g--;) c = a[g], c.collapsed = e ^ f[c.groupingKey], c.title = d.formatter ? d.formatter(c) : c.value, c.groups && (S(c.groups, b + 1), c.rows = [])
			}
			function T(a, b) {
				b = b || 0;
				for (var c, d, e = za[b], f = [], g = 0, h = 0, i = a.length; i > h; h++) {
					if (d = a[h], f[g++] = d, !d.collapsed) {
						c = d.groups ? T(d.groups, b + 1) : d.rows;
						for (var j = 0, k = c.length; k > j; j++) f[g++] = c[j]
					}
					d.totals && e.displayTotalsRow && (!d.collapsed || e.aggregateCollapsed) && (f[g++] = d.totals)
				}
				return f
			}
			function U(a) {
				var b = /^function[^(]*\(([^)]*)\)\s*{([\s\S]*)}$/,
					c = a.toString().match(b);
				return {
					params : c[1].split(","),
					body : c[2]
				}
			}
			function V(a) {
				var b = U(a.accumulate),
					c = new Function("_items", "for (var " + b.params[0] + ", _i=0, _il=_items.length; _i<_il; _i++) {" + b.params[0] + " = _items[_i]; " + b.body + "}");
				return c.displayName = c.name = "compiledAccumulatorLoop", c
			}
			function W() {
				var a = U(qa),
					b = a.body.replace(/return false[;}]/gi, "{ continue _coreloop; }").replace(/return true[;}]/gi, "{ _retval[_idx++] = $item$; continue _coreloop; }").replace(/return ([^;}]+?);/gi, "{ if ($1) { _retval[_idx++] = $item$; }; continue _coreloop; }"),
					c = [ "var _retval = [], _idx = 0; ", "var $item$, $args$ = _args; ", "_coreloop: ", "for (var _i = 0, _il = _items.length; _i < _il; _i++) { ", "$item$ = _items[_i]; ", "$filter$; ", "} ", "return _retval; " ].join("");
				c = c.replace(/\$filter\$/gi, b), c = c.replace(/\$item\$/gi, a.params[0]), c = c.replace(/\$args\$/gi, a.params[1]);var d = new Function("_items,_args", c);
				return d.displayName = d.name = "compiledFilter", d
			}
			function X() {
				var a = U(qa),
					b = a.body.replace(/return false[;}]/gi, "{ continue _coreloop; }").replace(/return true[;}]/gi, "{ _cache[_i] = true;_retval[_idx++] = $item$; continue _coreloop; }").replace(/return ([^;}]+?);/gi, "{ if ((_cache[_i] = $1)) { _retval[_idx++] = $item$; }; continue _coreloop; }"),
					c = [ "var _retval = [], _idx = 0; ", "var $item$, $args$ = _args; ", "_coreloop: ", "for (var _i = 0, _il = _items.length; _i < _il; _i++) { ", "$item$ = _items[_i]; ", "if (_cache[_i]) { ", "_retval[_idx++] = $item$; ", "continue _coreloop; ", "} ", "$filter$; ", "} ", "return _retval; " ].join("");
				c = c.replace(/\$filter\$/gi, b), c = c.replace(/\$item\$/gi, a.params[0]), c = c.replace(/\$args\$/gi, a.params[1]);var d = new Function("_items,_args,_cache", c);
				return d.displayName = d.name = "compiledFilterWithCaching", d
			}
			function Y(a, b) {
				for (var c = [], d = 0, e = 0, f = a.length; f > e; e++) qa(a[e], b) && (c[d++] = a[e]);
				return c
			}
			function Z(a, b, c) {
				for (var d, e = [], f = 0, g = 0, h = a.length; h > g; g++) d = a[g], c[g] ? e[f++] = d : qa(d, b) && (e[f++] = d, c[g] = !0);
				return e
			}
			function $(a) {
				if (qa) {
					var c = b.inlineFilters ? ha : Y,
						d = b.inlineFilters ? ia : Z;
					ua.isFilterNarrowing ? wa = c(wa, ga) : ua.isFilterExpanding ? wa = d(a, ga, xa) : ua.isFilterUnchanged || (wa = c(a, ga))
				} else
					wa = Da ? a : a.concat();
				var e;
				return Da ? (wa.length < Ea * Da && (Ea = Math.floor(wa.length / Da)), e = wa.slice(Da * Ea, Da * Ea + Da)) : e = wa, {
						totalRows : wa.length,
						rows : e
				}
			}
			function _(a, b) {
				var c,
					d,
					e,
					f = [],
					g = 0,
					h = b.length;
				ua && ua.ignoreDiffsBefore && (g = Math.max(0, Math.min(b.length, ua.ignoreDiffsBefore))), ua && ua.ignoreDiffsAfter && (h = Math.min(b.length, Math.max(0, ua.ignoreDiffsAfter)));
				for (var i = g, j = a.length; h > i; i++) i >= j ? f[f.length] = i : (c = b[i], d = a[i], (za.length && (e = c.__nonDataRow || d.__nonDataRow) && c.__group !== d.__group || c.__group && !c.equals(d) || e && (c.__groupTotals || d.__groupTotals) || c[la] != d[la] || ra && ra[c[la]]) && (f[f.length] = i));
				return f
			}
			function aa(a) {
				pa = null, (ua.isFilterNarrowing != va.isFilterNarrowing || ua.isFilterExpanding != va.isFilterExpanding) && (xa = []);var b = $(a);
				Fa = b.totalRows;var c = b.rows;
				Aa = [], za.length && (Aa = P(c), Aa.length && (R(Aa), S(Aa), c = T(Aa)));var d = _(na, c);
				return na = c, d
			}
			function ba() {
				if (!sa) {
					var a = na.length,
						b = Fa,
						c = aa(ma, qa);
					Da && Ea * Da > Fa && (Ea = Math.max(0, Math.ceil(Fa / Da) - 1), c = aa(ma, qa)), ra = null, va = ua, ua = {}, b != Fa && Ia.notify(l(), null, ja), a != na.length && Ga.notify({
						previous : a,
						current : na.length
					}, null, ja), c.length > 0 && Ha.notify({
						rows : c
					}, null, ja)
				}
			}
			function ca(a, b) {
				function c() {
					if (f.length > 0) {
						d = !0;
						var c = e.mapIdsToRows(f);
						b || (f = e.mapRowsToIds(c)), a.setSelectedRows(c), d = !1
					}
				}
				var d,
					e = this,
					f = e.mapRowsToIds(a.getSelectedRows());
				a.onSelectedRowsChanged.subscribe(function(b, c) {
					d || (f = e.mapRowsToIds(a.getSelectedRows()))
				}), this.onRowsChanged.subscribe(c), this.onRowCountChanged.subscribe(c)
			}
			function da(a, b) {
				function c(a) {
					e = {};
					for (var b in a) {
						var c = na[b][la];
						e[c] = a[b]
					}
				}
				function d() {
					if (e) {
						f = !0, w();
						var c = {};
						for (var d in e) {
							var g = pa[d];
							void 0 != g && (c[g] = e[d])
						}
						a.setCellCssStyles(b, c), f = !1
					}
				}
				var e,
					f;
				c(a.getCellCssStyles(b)), a.onCellCssStylesChanged.subscribe(function(a, d) {
					f || b == d.key && d.hash && c(d.hash)
				}), this.onRowsChanged.subscribe(d), this.onRowCountChanged.subscribe(d)
			}
			var ea,
				fa,
				ga,
				ha,
				ia,
				ja = this,
				ka = {
					groupItemMetadataProvider : null,
					inlineFilters : !1
				},
				la = "id",
				ma = [],
				na = [],
				oa = {},
				pa = null,
				qa = null,
				ra = null,
				sa = !1,
				ta = !0,
				ua = {},
				va = {},
				wa = [],
				xa = [],
				ya = {
					getter : null,
					formatter : null,
					comparer : function(a, b) {
						return a.value - b.value
					},
					predefinedValues : [],
					aggregators : [],
					aggregateEmpty : !1,
					aggregateCollapsed : !1,
					aggregateChildGroups : !1,
					collapsed : !1,
					displayTotalsRow : !0
				},
				za = [],
				Aa = [],
				Ba = [],
				Ca = ":|:",
				Da = 0,
				Ea = 0,
				Fa = 0,
				Ga = new Slick.Event,
				Ha = new Slick.Event,
				Ia = new Slick.Event;
			return b = a.extend(!0, {}, ka, b), {
					beginUpdate : c,
					endUpdate : d,
					setPagingOptions : k,
					getPagingInfo : l,
					getItems : i,
					setItems : j,
					setFilter : p,
					sort : m,
					fastSort : n,
					reSort : o,
					setGrouping : r,
					getGrouping : q,
					groupBy : s,
					setAggregators : t,
					collapseAllGroups : J,
					expandAllGroups : K,
					collapseGroup : M,
					expandGroup : N,
					getGroups : O,
					getIdxById : v,
					getRowById : x,
					getItemById : y,
					getItemByIdx : u,
					mapRowsToIds : A,
					mapIdsToRows : z,
					setRefreshHints : e,
					setFilterArgs : f,
					refresh : ba,
					updateItem : B,
					insertItem : C,
					addItem : D,
					deleteItem : E,
					syncGridSelection : ca,
					syncGridCellCssStyles : da,
					getLength : F,
					getItem : G,
					getItemMetadata : H,
					onRowCountChanged : Ga,
					onRowsChanged : Ha,
					onPagingInfoChanged : Ia
			}
		}
		function c(a) {
			this.field_ = a, this.init = function() {
				this.count_ = 0, this.nonNullCount_ = 0, this.sum_ = 0
			}, this.accumulate = function(a) {
				var b = a[this.field_];
				this.count_++, null != b && "" !== b && NaN !== b && (this.nonNullCount_++, this.sum_ += parseFloat(b))
			}, this.storeResult = function(a) {
				a.avg || (a.avg = {}), 0 != this.nonNullCount_ && (a.avg[this.field_] = this.sum_ / this.nonNullCount_)
			}
		}
		function d(a) {
			this.field_ = a, this.init = function() {
				this.min_ = null
			}, this.accumulate = function(a) {
				var b = a[this.field_];
				null != b && "" !== b && NaN !== b && (null == this.min_ || b < this.min_) && (this.min_ = b)
			}, this.storeResult = function(a) {
				a.min || (a.min = {}), a.min[this.field_] = this.min_
			}
		}
		function e(a) {
			this.field_ = a, this.init = function() {
				this.max_ = null
			}, this.accumulate = function(a) {
				var b = a[this.field_];
				null != b && "" !== b && NaN !== b && (null == this.max_ || b > this.max_) && (this.max_ = b)
			}, this.storeResult = function(a) {
				a.max || (a.max = {}), a.max[this.field_] = this.max_
			}
		}
		function f(a) {
			this.field_ = a, this.init = function() {
				this.sum_ = null
			}, this.accumulate = function(a) {
				var b = a[this.field_];
				null != b && "" !== b && NaN !== b && (this.sum_ += parseFloat(b))
			}, this.storeResult = function(a) {
				a.sum || (a.sum = {}), a.sum[this.field_] = this.sum_
			}
		}
		a.extend(!0, window, {
			Slick : {
				Data : {
					DataView : b,
					Aggregators : {
						Avg : c,
						Min : d,
						Max : e,
						Sum : f
					}
				}
			}
		})
	}(jQuery), function(a) {
		function b() {
			var a = !1,
				b = !1;
			this.stopPropagation = function() {
				a = !0
			}, this.isPropagationStopped = function() {
				return a
			}, this.stopImmediatePropagation = function() {
				b = !0
			}, this.isImmediatePropagationStopped = function() {
				return b
			}
		}
		function c() {
			var a = [];
			this.subscribe = function(b) {
				a.push(b)
			}, this.unsubscribe = function(b) {
				for (var c = a.length - 1; c >= 0; c--) a[c] === b && a.splice(c, 1)
			}, this.notify = function(c, d, e) {
				d = d || new b, e = e || this;
				for (var f, g = 0; g < a.length && !d.isPropagationStopped() && !d.isImmediatePropagationStopped(); g++) f = a[g].call(e, d, c);
				return f
			}
		}
		function d() {
			var a = [];
			this.subscribe = function(b, c) {
				return a.push({
						event : b,
						handler : c
					}), b.subscribe(c), this
			}, this.unsubscribe = function(b, c) {
				for (var d = a.length; d--;)
					if (a[d].event === b && a[d].handler === c) return a.splice(d, 1), void b.unsubscribe(c);
				return this
			}, this.unsubscribeAll = function() {
				for (var b = a.length; b--;) a[b].event.unsubscribe(a[b].handler);
				return a = [], this
			}
		}
		function e(a, b, c, d) {
			void 0 === c && void 0 === d && (c = a, d = b), this.fromRow = Math.min(a, c), this.fromCell = Math.min(b, d), this.toRow = Math.max(a, c), this.toCell = Math.max(b, d), this.isSingleRow = function() {
				return this.fromRow == this.toRow
			}, this.isSingleCell = function() {
				return this.fromRow == this.toRow && this.fromCell == this.toCell
			}, this.contains = function(a, b) {
				return a >= this.fromRow && a <= this.toRow && b >= this.fromCell && b <= this.toCell
			}, this.toString = function() {
				return this.isSingleCell() ? "(" + this.fromRow + ":" + this.fromCell + ")" : "(" + this.fromRow + ":" + this.fromCell + " - " + this.toRow + ":" + this.toCell + ")"
			}
		}
		function f() {
			this.__nonDataRow = !0
		}
		function g() {
			this.__group = !0, this.level = 0, this.count = 0, this.value = null, this.title = null, this.collapsed = !1, this.totals = null, this.rows = [], this.groups = null, this.groupingKey = null
		}
		function h() {
			this.__groupTotals = !0, this.group = null, this.initialized = !1
		}
		function i() {
			var a = null;
			this.isActive = function(b) {
				return b ? a === b : null !== a
			}, this.activate = function(b) {
				if (b !== a) {
					if (null !== a)
						throw "SlickGrid.EditorLock.activate: an editController is still active, can't activate another editController";
					if (!b.commitCurrentEdit)
						throw "SlickGrid.EditorLock.activate: editController must implement .commitCurrentEdit()";
					if (!b.cancelCurrentEdit)
						throw "SlickGrid.EditorLock.activate: editController must implement .cancelCurrentEdit()";
					a = b
				}
			}, this.deactivate = function(b) {
				if (a !== b)
					throw "SlickGrid.EditorLock.deactivate: specified editController is not the currently active one";
				a = null
			}, this.commitCurrentEdit = function() {
				return a ? a.commitCurrentEdit() : !0
			}, this.cancelCurrentEdit = function() {
				return a ? a.cancelCurrentEdit() : !0
			}
		}
		a.extend(!0, window, {
			Slick : {
				Event : c,
				EventData : b,
				EventHandler : d,
				Range : e,
				NonDataRow : f,
				Group : g,
				GroupTotals : h,
				EditorLock : i,
				GlobalEditorLock : new i
			}
		}), g.prototype = new f, g.prototype.equals = function(a) {
			return this.value === a.value && this.count === a.count && this.collapsed === a.collapsed && this.title === a.title
		}, h.prototype = new f
	}(jQuery), function(a) {
		a.fn.drag = function(b, c, d) {
			var e = "string" == typeof b ? b : "",
				f = a.isFunction(b) ? b : a.isFunction(c) ? c : null;
			return 0 !== e.indexOf("drag") && (e = "drag" + e), d = (b == f ? c : d) || {}, f ? this.bind(e, d, f) : this.trigger(e)
		};
		var b = a.event,
			c = b.special,
			d = c.drag = {
				defaults : {
					which : 1,
					distance : 0,
					not : ":input",
					handle : null,
					relative : !1,
					drop : !0,
					click : !1
				},
				datakey : "dragdata",
				noBubble : !0,
				add : function(b) {
					var c = a.data(this, d.datakey),
						e = b.data || {};
					c.related += 1, a.each(d.defaults, function(a, b) {
						void 0 !== e[a] && (c[a] = e[a])
					})
				},
				remove : function() {
					a.data(this, d.datakey).related -= 1
				},
				setup : function() {
					if (!a.data(this, d.datakey)) {
						var c = a.extend({
							related : 0
						}, d.defaults);
						a.data(this, d.datakey, c), b.add(this, "touchstart mousedown", d.init, c), this.attachEvent && this.attachEvent("ondragstart", d.dontstart)
					}
				},
				teardown : function() {
					var c = a.data(this, d.datakey) || {};
					c.related || (a.removeData(this, d.datakey), b.remove(this, "touchstart mousedown", d.init), d.textselect(!0), this.detachEvent && this.detachEvent("ondragstart", d.dontstart))
				},
				init : function(e) {
					if (!d.touched) {
						var f,
							g = e.data;
						if (!(0 != e.which && g.which > 0 && e.which != g.which) && !a(e.target).is(g.not) && (!g.handle || a(e.target).closest(g.handle, e.currentTarget).length) && (d.touched = "touchstart" == e.type ? this : null, g.propagates = 1, g.mousedown = this, g.interactions = [ d.interaction(this, g) ], g.target = e.target, g.pageX = e.pageX, g.pageY = e.pageY, g.dragging = null, f = d.hijack(e, "draginit", g), g.propagates)) return f = d.flatten(f), f && f.length && (g.interactions = [], a.each(f, function() {
									g.interactions.push(d.interaction(this, g))
								})), g.propagates = g.interactions.length, g.drop !== !1 && c.drop && c.drop.handler(e, g), d.textselect(!1), d.touched ? b.add(d.touched, "touchmove touchend", d.handler, g) : b.add(document, "mousemove mouseup", d.handler, g), !d.touched || g.live ? !1 : void 0
					}
				},
				interaction : function(b, c) {
					var e = a(b)[c.relative ? "position" : "offset"]() || {
						top : 0,
						left : 0
					};
					return {
						drag : b,
						callback : new d.callback,
						droppable : [],
						offset : e
					}
				},
				handler : function(e) {
					var f = e.data;
					switch (e.type) {
					case !f.dragging && "touchmove":
						e.preventDefault();case !f.dragging && "mousemove":
						if (Math.pow(e.pageX - f.pageX, 2) + Math.pow(e.pageY - f.pageY, 2) < Math.pow(f.distance, 2))
							break;
						e.target = f.target, d.hijack(e, "dragstart", f), f.propagates && (f.dragging = !0);case "touchmove":
						e.preventDefault();case "mousemove":
						if (f.dragging) {
							if (d.hijack(e, "drag", f), f.propagates) {
								f.drop !== !1 && c.drop && c.drop.handler(e, f);
								break
							}
							e.type = "mouseup"
						}
					case "touchend":
					case "mouseup":
					default:
						d.touched ? b.remove(d.touched, "touchmove touchend", d.handler) : b.remove(document, "mousemove mouseup", d.handler), f.dragging && (f.drop !== !1 && c.drop && c.drop.handler(e, f), d.hijack(e, "dragend", f)), d.textselect(!0), f.click === !1 && f.dragging && a.data(f.mousedown, "suppress.click", (new Date).getTime() + 5), f.dragging = d.touched = !1
					}
				},
				hijack : function(c, e, f, g, h) {
					if (f) {
						var i,
							j,
							k,
							l = {
								event : c.originalEvent,
								type : c.type
							},
							m = e.indexOf("drop") ? "drag" : "drop",
							n = g || 0,
							o = isNaN(g) ? f.interactions.length : g;
						c.type = e, c.originalEvent = null, f.results = [];
						do
							if (j = f.interactions[n]) {
								if ("dragend" !== e && j.cancelled) continue;
								k = d.properties(c, f, j), j.results = [], a(h || j[m] || f.droppable).each(function(g, h) {
									return k.target = h, c.isPropagationStopped = function() {
											return !1
										}, i = h ? b.dispatch.call(h, c, k) : null, i === !1 ? ("drag" == m && (j.cancelled = !0, f.propagates -= 1), "drop" == e && (j[m][g] = null)) : "dropinit" == e && j.droppable.push(d.element(i) || h), "dragstart" == e && (j.proxy = a(d.element(i) || j.drag)[0]), j.results.push(i),
										delete c.result
										, "dropinit" !== e ? i : void 0
								}), f.results[n] = d.flatten(j.results), "dropinit" == e && (j.droppable = d.flatten(j.droppable)), "dragstart" != e || j.cancelled || k.update()
						}
						while (++n < o);
						return c.type = l.type, c.originalEvent = l.event, d.flatten(f.results)
					}
				},
				properties : function(a, b, c) {
					var e = c.callback;
					return e.drag = c.drag, e.proxy = c.proxy || c.drag, e.startX = b.pageX, e.startY = b.pageY, e.deltaX = a.pageX - b.pageX, e.deltaY = a.pageY - b.pageY, e.originalX = c.offset.left, e.originalY = c.offset.top, e.offsetX = e.originalX + e.deltaX, e.offsetY = e.originalY + e.deltaY, e.drop = d.flatten((c.drop || []).slice()), e.available = d.flatten((c.droppable || []).slice()), e
				},
				element : function(a) {
					return a && (a.jquery || 1 == a.nodeType) ? a : void 0
				},
				flatten : function(b) {
					return a.map(b, function(b) {
						return b && b.jquery ? a.makeArray(b) : b && b.length ? d.flatten(b) : b
					})
				},
				textselect : function(b) {
					a(document)[b ? "unbind" : "bind"]("selectstart", d.dontstart).css("MozUserSelect", b ? "" : "none"), document.unselectable = b ? "off" : "on"
				},
				dontstart : function() {
					return !1
				},
				callback : function() {}
			};
		d.callback.prototype = {
			update : function() {
				c.drop && this.available.length && a.each(this.available, function(a) {
					c.drop.locate(this, a)
				})
			}
		};
		var e = b.fixHooks.touchstart = b.fixHooks.touchmove = b.fixHooks.touchend = b.fixHooks.touchcancel = {
			props : "clientX clientY pageX pageY screenX screenY".split(" "),
			filter : function(b, c) {
				if (c) {
					var d = c.touches && c.touches[0] || c.changedTouches && c.changedTouches[0] || null;
					d && a.each(e.props, function(a, c) {
						b[c] = d[c]
					})
				}
				return b
			}
		};
		c.draginit = c.dragstart = c.dragend = d
	}(jQuery), "undefined" == typeof jQuery)
	throw "SlickGrid requires jquery module to be loaded";
if (!jQuery.fn.drag)
	throw "SlickGrid requires jquery.event.drag module to be loaded";
if ("undefined" == typeof Slick)
	throw "slick.core.js not loaded";
!function($) {
	function SlickGrid(container, data, columns, options) {
		function init() {
			if ($container = $(container), $container.length < 1)
				throw new Error("SlickGrid requires a valid container, " + container + " does not exist in the DOM.");
			maxSupportedCssHeight = maxSupportedCssHeight || getMaxSupportedCssHeight(), scrollbarDimensions = scrollbarDimensions || measureScrollbar(), options = $.extend({}, defaults, options), validateAndEnforceOptions(), columnDefaults.width = options.defaultColumnWidth, columnsById = {};
			for (var a = 0; a < columns.length; a++) {
				var b = columns[a] = $.extend({}, columnDefaults, columns[a]);
				columnsById[b.id] = a, b.minWidth && b.width < b.minWidth && (b.width = b.minWidth), b.maxWidth && b.width > b.maxWidth && (b.width = b.maxWidth)
			}
			if (options.enableColumnReorder && !$.fn.sortable)
				throw new Error("SlickGrid's 'enableColumnReorder = true' option requires jquery-ui.sortable module to be loaded");
			editController = {
				commitCurrentEdit : commitCurrentEdit,
				cancelCurrentEdit : cancelCurrentEdit
			}, $container.empty().css("overflow", "hidden").css("outline", 0).addClass(uid).addClass("slickgrid"), /relative|absolute|fixed/.test($container.css("position")) || $container.css("position", "relative"), $focusSink = $("<div tabIndex='0' hideFocus style='position:fixed;width:0;height:0;top:0;left:0;outline:0;'></div>").appendTo($container), $headerScroller = $("<div class='slick-header' style='overflow:hidden;position:relative;' />").appendTo($container), $headers = $("<div class='slick-header-columns' style='left:-1000px' />").appendTo($headerScroller), $headers.width(getHeadersWidth()), $headerRowScroller = $("<div class='slick-headerrow' style='overflow:hidden;position:relative;' />").appendTo($container), $headerRow = $("<div class='slick-headerrow-columns' />").appendTo($headerRowScroller), $headerRowSpacer = $("<div style='display:block;height:1px;position:absolute;top:0;left:0;'></div>").css("width", getCanvasWidth() + scrollbarDimensions.width + "px").appendTo($headerRowScroller), $topPanelScroller = $("<div class='slick-top-panel-scroller ' style='overflow:hidden;position:relative;' />").appendTo($container), $topPanel = $("<div class='slick-top-panel' style='width:10000px' />").appendTo($topPanelScroller), options.showTopPanel || $topPanelScroller.hide(), options.showHeaderRow || $headerRowScroller.hide(), $viewport = $("<div class='slick-viewport' style='width:100%;overflow:auto;outline:0;position:relative;;'>").appendTo($container), $viewport.css("overflow-y", options.autoHeight ? "hidden" : "auto"), $canvas = $("<div class='grid-canvas' />").appendTo($viewport), $focusSink2 = $focusSink.clone().appendTo($container), options.explicitInitialization || finishInitialization()
		}
		function finishInitialization() {
			initialized || (initialized = !0, viewportW = parseFloat($.css($container[0], "width", !0)), measureCellPaddingAndBorder(), disableSelection($headers), options.enableTextSelectionOnCells || $viewport.bind("selectstart.ui", function(a) {
				return $(a.target).is("input,textarea")
			}), updateColumnCaches(), createColumnHeaders(), setupColumnSort(), createCssRules(), resizeCanvas(), bindAncestorScrollEvents(), $container.bind("resize.slickgrid", resizeCanvas), $viewport.bind("scroll", handleScroll), $headerScroller.bind("contextmenu", handleHeaderContextMenu).bind("click", handleHeaderClick).delegate(".slick-header-column", "mouseenter", handleHeaderMouseEnter).delegate(".slick-header-column", "mouseleave", handleHeaderMouseLeave), $headerRowScroller.bind("scroll", handleHeaderRowScroll), $focusSink.add($focusSink2).bind("keydown", handleKeyDown), $canvas.bind("keydown", handleKeyDown).bind("click", handleClick).bind("dblclick", handleDblClick).bind("contextmenu", handleContextMenu).bind("draginit", handleDragInit).bind("dragstart", {
				distance : 3
			}, handleDragStart).bind("drag", handleDrag).bind("dragend", handleDragEnd).delegate(".slick-cell", "mouseenter", handleMouseEnter).delegate(".slick-cell", "mouseleave", handleMouseLeave), navigator.userAgent.toLowerCase().match(/webkit/) && navigator.userAgent.toLowerCase().match(/macintosh/) && $canvas.bind("mousewheel", handleMouseWheel))
		}
		function registerPlugin(a) {
			plugins.unshift(a), a.init(self)
		}
		function unregisterPlugin(a) {
			for (var b = plugins.length; b >= 0; b--)
				if (plugins[b] === a) {
					plugins[b].destroy && plugins[b].destroy(), plugins.splice(b, 1);break
			}
		}
		function setSelectionModel(a) {
			selectionModel && (selectionModel.onSelectedRangesChanged.unsubscribe(handleSelectedRangesChanged), selectionModel.destroy && selectionModel.destroy()), selectionModel = a, selectionModel && (selectionModel.init(self), selectionModel.onSelectedRangesChanged.subscribe(handleSelectedRangesChanged))
		}
		function getSelectionModel() {
			return selectionModel
		}
		function getCanvasNode() {
			return $canvas[0]
		}
		function measureScrollbar() {
			var a = $("<div style='position:absolute; top:-10000px; left:-10000px; width:100px; height:100px; overflow:scroll;'></div>").appendTo("body"),
				b = {
					width : a.width() - a[0].clientWidth,
					height : a.height() - a[0].clientHeight
				};
			return a.remove(), b
		}
		function getHeadersWidth() {
			for (var a = 0, b = 0, c = columns.length; c > b; b++) {
				var d = columns[b].width;
				a += d
			}
			return a += scrollbarDimensions.width, Math.max(a, viewportW) + 1e3
		}
		function getCanvasWidth() {
			for (var a = viewportHasVScroll ? viewportW - scrollbarDimensions.width : viewportW, b = 0, c = columns.length; c--;) b += columns[c].width;
			return options.fullWidthRows ? Math.max(b, a) : b
		}
		function updateCanvasWidth(a) {
			var b = canvasWidth;
			canvasWidth = getCanvasWidth(), canvasWidth != b && ($canvas.width(canvasWidth), $headerRow.width(canvasWidth), $headers.width(getHeadersWidth()), viewportHasHScroll = canvasWidth > viewportW - scrollbarDimensions.width), $headerRowSpacer.width(canvasWidth + (viewportHasVScroll ? scrollbarDimensions.width : 0)), (canvasWidth != b || a) && applyColumnWidths()
		}
		function disableSelection(a) {
			a && a.jquery && a.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
				return !1
			})
		}
		function getMaxSupportedCssHeight() {
			for (var a = 1e6, b = navigator.userAgent.toLowerCase().match(/firefox/) ? 6e6 : 1e9, c = $("<div style='display:none' />").appendTo(document.body);;) {
				var d = 2 * a;
				if (c.css("height", d), d > b || c.height() !== d) break;
				a = d
			}
			return c.remove(), a
		}
		function bindAncestorScrollEvents() {
			for (var a = $canvas[0]; (a = a.parentNode) != document.body && null != a;)
				if (a == $viewport[0] || a.scrollWidth != a.clientWidth || a.scrollHeight != a.clientHeight) {
					var b = $(a);
					$boundAncestors = $boundAncestors ? $boundAncestors.add(b) : b, b.bind("scroll." + uid, handleActiveCellPositionChange)
			}
		}
		function unbindAncestorScrollEvents() {
			$boundAncestors && ($boundAncestors.unbind("scroll." + uid), $boundAncestors = null)
		}
		function updateColumnHeader(a, b, c) {
			if (initialized) {
				var d = getColumnIndex(a);
				if (null != d) {
					var e = columns[d],
						f = $headers.children().eq(d);
					f && (void 0 !== b && (columns[d].name = b), void 0 !== c && (columns[d].toolTip = c), trigger(self.onBeforeHeaderCellDestroy, {
						node : f[0],
						column : e
					}), f.attr("title", c || "").children().eq(0).html(b), trigger(self.onHeaderCellRendered, {
						node : f[0],
						column : e
					}))
				}
			}
		}
		function getHeaderRow() {
			return $headerRow[0]
		}
		function getHeaderRowColumn(a) {
			var b = getColumnIndex(a),
				c = $headerRow.children().eq(b);
			return c && c[0]
		}
		function createColumnHeaders() {
			function a() {
				$(this).addClass("ui-state-hover")
			}
			function b() {
				$(this).removeClass("ui-state-hover")
			}
			$headers.find(".slick-header-column").each(function() {
				var a = $(this).data("column");
				a && trigger(self.onBeforeHeaderCellDestroy, {
					node : this,
					column : a
				})
			}), $headers.empty(), $headers.width(getHeadersWidth()), $headerRow.find(".slick-headerrow-column").each(function() {
				var a = $(this).data("column");
				a && trigger(self.onBeforeHeaderRowCellDestroy, {
					node : this,
					column : a
				})
			}), $headerRow.empty();
			for (var c = 0; c < columns.length; c++) {
				var d = columns[c],
					e = $("<div class=' slick-header-column' />").html("<span class='slick-column-name'>" + d.name + "</span>").width(d.width - headerColumnWidthDiff).attr("id", "" + uid + d.id).attr("title", d.toolTip || "").data("column", d).addClass(d.headerCssClass || "").appendTo($headers);
				if ((options.enableColumnReorder || d.sortable) && e.on("mouseenter", a).on("mouseleave", b), d.sortable && (e.addClass("slick-header-sortable"), e.append("<span class='slick-sort-indicator' />")), trigger(self.onHeaderCellRendered, {
						node : e[0],
						column : d
					}), options.showHeaderRow) {
					var f = $("<div class=' slick-headerrow-column l" + c + " r" + c + "'></div>").data("column", d).appendTo($headerRow);
					trigger(self.onHeaderRowCellRendered, {
						node : f[0],
						column : d
					})
				}
			}
			setSortColumns(sortColumns), setupColumnResize(), options.enableColumnReorder && setupColumnReorder()
		}
		function setupColumnSort() {
			$headers.click(function(a) {
				if (a.metaKey = a.metaKey || a.ctrlKey, !$(a.target).hasClass("slick-resizable-handle")) {
					var b = $(a.target).closest(".slick-header-column");
					if (b.length) {
						var c = b.data("column");
						if (c.sortable) {
							if (!getEditorLock().commitCurrentEdit()) return;
							for (var d = null, e = 0; e < sortColumns.length; e++)
								if (sortColumns[e].columnId == c.id) {
									d = sortColumns[e], d.sortAsc = !d.sortAsc;break
							}
							a.metaKey && options.multiColumnSort ? d && sortColumns.splice(e, 1) : ((a.shiftKey || a.metaKey) && options.multiColumnSort || (sortColumns = []), d ? 0 == sortColumns.length && sortColumns.push(d) : (d = {
								columnId : c.id,
								sortAsc : c.defaultSortAsc
							}, sortColumns.push(d))), setSortColumns(sortColumns), options.multiColumnSort ? trigger(self.onSort, {
								multiColumnSort : !0,
								sortCols : $.map(sortColumns, function(a) {
									return {
										sortCol : columns[getColumnIndex(a.columnId)],
										sortAsc : a.sortAsc
									}
								})
							}, a) : trigger(self.onSort, {
								multiColumnSort : !1,
								sortCol : c,
								sortAsc : d.sortAsc
							}, a)
						}
					}
				}
			})
		}
		function setupColumnReorder() {
			$headers.filter(":ui-sortable").sortable("destroy"), $headers.sortable({
				containment : "parent",
				distance : 3,
				axis : "x",
				cursor : "default",
				tolerance : "intersection",
				helper : "clone",
				placeholder : "slick-sortable-placeholder slick-header-column",
				start : function(a, b) {
					b.placeholder.width(b.helper.outerWidth() - headerColumnWidthDiff), $(b.helper).addClass("slick-header-column-active")
				},
				beforeStop : function(a, b) {
					$(b.helper).removeClass("slick-header-column-active")
				},
				stop : function(a) {
					if (!getEditorLock().commitCurrentEdit()) return void $(this).sortable("cancel");
					for (var b = $headers.sortable("toArray"), c = [], d = 0; d < b.length; d++) c.push(columns[getColumnIndex(b[d].replace(uid, ""))]);
					setColumns(c), trigger(self.onColumnsReordered, {}), a.stopPropagation(), setupColumnResize()
				}
			})
		}
		function setupColumnResize() {
			var a,
				b,
				c,
				d,
				e,
				f,
				g,
				h,
				i;
			e = $headers.children(), e.find(".slick-resizable-handle").remove(), e.each(function(a, b) {
				columns[a].resizable && (void 0 === h && (h = a), i = a)
			}), void 0 !== h && e.each(function(j, k) {
				h > j || options.forceFitColumns && j >= i || (a = $(k), $("<div class='slick-resizable-handle' />").appendTo(k).bind("dragstart", function(a, h) {
					if (!getEditorLock().commitCurrentEdit()) return !1;
					d = a.pageX, $(this).parent().addClass("slick-header-column-active");
					var i = null,
						k = null;
					if (e.each(function(a, b) {
							columns[a].previousWidth = $(b).outerWidth()
						}), options.forceFitColumns)
						for (i = 0, k = 0, b = j + 1; b < e.length; b++) c = columns[b], c.resizable && (null !== k && (c.maxWidth ? k += c.maxWidth - c.previousWidth : k = null), i += c.previousWidth - Math.max(c.minWidth || 0, absoluteColumnMinWidth));
					var l = 0,
						m = 0;
					for (b = 0; j >= b; b++) c = columns[b], c.resizable && (null !== m && (c.maxWidth ? m += c.maxWidth - c.previousWidth : m = null), l += c.previousWidth - Math.max(c.minWidth || 0, absoluteColumnMinWidth));
					null === i && (i = 1e5), null === l && (l = 1e5), null === k && (k = 1e5), null === m && (m = 1e5), g = d + Math.min(i, m), f = d - Math.min(l, k)
				}).bind("drag", function(a, h) {
					var i,
						k,
						l = Math.min(g, Math.max(f, a.pageX)) - d;
					if (0 > l) {
						for (k = l, b = j; b >= 0; b--) c = columns[b], c.resizable && (i = Math.max(c.minWidth || 0, absoluteColumnMinWidth), k && c.previousWidth + k < i ? (k += c.previousWidth - i, c.width = i) : (c.width = c.previousWidth + k, k = 0));
						if (options.forceFitColumns)
							for (k = -l, b = j + 1; b < e.length; b++) c = columns[b], c.resizable && (k && c.maxWidth && c.maxWidth - c.previousWidth < k ? (k -= c.maxWidth - c.previousWidth, c.width = c.maxWidth) : (c.width = c.previousWidth + k, k = 0))
					} else {
						for (k = l, b = j; b >= 0; b--) c = columns[b], c.resizable && (k && c.maxWidth && c.maxWidth - c.previousWidth < k ? (k -= c.maxWidth - c.previousWidth, c.width = c.maxWidth) : (c.width = c.previousWidth + k, k = 0));
						if (options.forceFitColumns)
							for (k = -l, b = j + 1; b < e.length; b++) c = columns[b], c.resizable && (i = Math.max(c.minWidth || 0, absoluteColumnMinWidth), k && c.previousWidth + k < i ? (k += c.previousWidth - i, c.width = i) : (c.width = c.previousWidth + k, k = 0))
					}
					applyColumnHeaderWidths(), options.syncColumnCellResize && applyColumnWidths()
				}).bind("dragend", function(a, d) {
					var f;
					for ($(this).parent().removeClass("slick-header-column-active"), b = 0; b < e.length; b++) c = columns[b], f = $(e[b]).outerWidth(), c.previousWidth !== f && c.rerenderOnResize && invalidateAllRows();
					updateCanvasWidth(!0), render(), trigger(self.onColumnsResized, {})
				}))
			})
		}
		function getVBoxDelta(a) {
			var b = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
				c = 0;
			return $.each(b, function(b, d) {
					c += parseFloat(a.css(d)) || 0
				}), c
		}
		function measureCellPaddingAndBorder() {
			var a,
				b = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],
				c = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ];
			a = $("<div class=' slick-header-column' style='visibility:hidden'>-</div>").appendTo($headers), headerColumnWidthDiff = headerColumnHeightDiff = 0, "border-box" != a.css("box-sizing") && "border-box" != a.css("-moz-box-sizing") && "border-box" != a.css("-webkit-box-sizing") && ($.each(b, function(b, c) {
				headerColumnWidthDiff += parseFloat(a.css(c)) || 0
			}), $.each(c, function(b, c) {
				headerColumnHeightDiff += parseFloat(a.css(c)) || 0
			})), a.remove();var d = $("<div class='slick-row' />").appendTo($canvas);
			a = $("<div class='slick-cell' id='' style='visibility:hidden'>-</div>").appendTo(d), cellWidthDiff = cellHeightDiff = 0, "border-box" != a.css("box-sizing") && "border-box" != a.css("-moz-box-sizing") && "border-box" != a.css("-webkit-box-sizing") && ($.each(b, function(b, c) {
				cellWidthDiff += parseFloat(a.css(c)) || 0
			}), $.each(c, function(b, c) {
				cellHeightDiff += parseFloat(a.css(c)) || 0
			})), d.remove(), absoluteColumnMinWidth = Math.max(headerColumnWidthDiff, cellWidthDiff)
		}
		function createCssRules() {
			$style = $("<style type='text/css' rel='stylesheet' />").appendTo($("head"));
			for (var a = options.rowHeight - cellHeightDiff, b = [ "." + uid + " .slick-header-column { left: 1000px; }", "." + uid + " .slick-top-panel { height:" + options.topPanelHeight + "px; }", "." + uid + " .slick-headerrow-columns { height:" + options.headerRowHeight + "px; }", "." + uid + " .slick-cell { height:" + a + "px; }", "." + uid + " .slick-row { height:" + options.rowHeight + "px; }" ], c = 0; c < columns.length; c++) b.push("." + uid + " .l" + c + " { }"), b.push("." + uid + " .r" + c + " { }");
			$style[0].styleSheet ? $style[0].styleSheet.cssText = b.join(" ") : $style[0].appendChild(document.createTextNode(b.join(" ")))
		}
		function getColumnCssRules(a) {
			if (!stylesheet) {
				for (var b = document.styleSheets, c = 0; c < b.length; c++)
					if ((b[c].ownerNode || b[c].owningElement) == $style[0]) {
						stylesheet = b[c];break
				}
				if (!stylesheet)
					throw new Error("Cannot find stylesheet.");
				columnCssRulesL = [], columnCssRulesR = [];
				for (var d, e, f = stylesheet.cssRules || stylesheet.rules, c = 0; c < f.length; c++) {
					var g = f[c].selectorText;
					(d = /\.l\d+/.exec(g)) ? (e = parseInt(d[0].substr(2, d[0].length - 2), 10), columnCssRulesL[e] = f[c]) : (d = /\.r\d+/.exec(g)) && (e = parseInt(d[0].substr(2, d[0].length - 2), 10), columnCssRulesR[e] = f[c])
				}
			}
			return {
				left : columnCssRulesL[a],
				right : columnCssRulesR[a]
			}
		}
		function removeCssRules() {
			$style.remove(), stylesheet = null
		}
		function destroy() {
			getEditorLock().cancelCurrentEdit(), trigger(self.onBeforeDestroy, {});
			for (var a = plugins.length; a--;) unregisterPlugin(plugins[a]);
			options.enableColumnReorder && $headers.filter(":ui-sortable").sortable("destroy"), unbindAncestorScrollEvents(), $container.unbind(".slickgrid"), removeCssRules(), $canvas.unbind("draginit dragstart dragend drag"), $container.empty().removeClass(uid)
		}
		function trigger(a, b, c) {
			return c = c || new Slick.EventData, b = b || {}, b.grid = self, a.notify(b, c, self)
		}
		function getEditorLock() {
			return options.editorLock
		}
		function getEditController() {
			return editController
		}
		function getColumnIndex(a) {
			return columnsById[a]
		}
		function autosizeColumns() {
			var a,
				b,
				c,
				d = [],
				e = 0,
				f = 0,
				g = viewportHasVScroll ? viewportW - scrollbarDimensions.width : viewportW;
			for (a = 0; a < columns.length; a++) b = columns[a], d.push(b.width), f += b.width, b.resizable && (e += b.width - Math.max(b.minWidth, absoluteColumnMinWidth));
			for (c = f; f > g && e;) {
				var h = (f - g) / e;
				for (a = 0; a < columns.length && f > g; a++) {
					b = columns[a];var i = d[a];
					if (!(!b.resizable || i <= b.minWidth || absoluteColumnMinWidth >= i)) {
						var j = Math.max(b.minWidth, absoluteColumnMinWidth),
							k = Math.floor(h * (i - j)) || 1;
						k = Math.min(k, i - j), f -= k, e -= k, d[a] -= k
					}
				}
				if (f >= c) break;
				c = f
			}
			for (c = f; g > f;) {
				var l = g / f;
				for (a = 0; a < columns.length && g > f; a++) {
					b = columns[a];var m,
						n = d[a];
					m = !b.resizable || b.maxWidth <= n ? 0 : Math.min(Math.floor(l * n) - n, b.maxWidth - n || 1e6) || 1, f += m, d[a] += m
				}
				if (c >= f) break;
				c = f
			}
			var o = !1;
			for (a = 0; a < columns.length; a++) columns[a].rerenderOnResize && columns[a].width != d[a] && (o = !0), columns[a].width = d[a];
			applyColumnHeaderWidths(), updateCanvasWidth(!0), o && (invalidateAllRows(), render())
		}
		function applyColumnHeaderWidths() {
			if (initialized) {
				for (var a, b = 0, c = $headers.children(), d = c.length; d > b; b++) a = $(c[b]), a.width() !== columns[b].width - headerColumnWidthDiff && a.width(columns[b].width - headerColumnWidthDiff);
				updateColumnCaches()
			}
		}
		function applyColumnWidths() {
			for (var a, b, c = 0, d = 0; d < columns.length; d++) a = columns[d].width, b = getColumnCssRules(d), b.left.style.left = c + "px", b.right.style.right = canvasWidth - c - a + "px", c += columns[d].width
		}
		function setSortColumn(a, b) {
			setSortColumns([ {
				columnId : a,
				sortAsc : b
			} ])
		}
		function setSortColumns(a) {
			sortColumns = a;var b = $headers.children();
			b.removeClass("slick-header-column-sorted").find(".slick-sort-indicator").removeClass("slick-sort-indicator-asc slick-sort-indicator-desc"), $.each(sortColumns, function(a, c) {
				null == c.sortAsc && (c.sortAsc = !0);
				var d = getColumnIndex(c.columnId);
				null != d && b.eq(d).addClass("slick-header-column-sorted").find(".slick-sort-indicator").addClass(c.sortAsc ? "slick-sort-indicator-asc" : "slick-sort-indicator-desc")
			})
		}
		function getSortColumns() {
			return sortColumns
		}
		function handleSelectedRangesChanged(a, b) {
			selectedRows = [];
			for (var c = {}, d = 0; d < b.length; d++)
				for (var e = b[d].fromRow; e <= b[d].toRow; e++) {
					c[e] || (selectedRows.push(e), c[e] = {});
					for (var f = b[d].fromCell; f <= b[d].toCell; f++) canCellBeSelected(e, f) && (c[e][columns[f].id] = options.selectedCellCssClass)
			}
			setCellCssStyles(options.selectedCellCssClass, c), trigger(self.onSelectedRowsChanged, {
				rows : getSelectedRows()
			}, a)
		}
		function getColumns() {
			return columns
		}
		function updateColumnCaches() {
			columnPosLeft = [], columnPosRight = [];
			for (var a = 0, b = 0, c = columns.length; c > b; b++) columnPosLeft[b] = a, columnPosRight[b] = a + columns[b].width, a += columns[b].width
		}
		function setColumns(a) {
			columns = a, columnsById = {};
			for (var b = 0; b < columns.length; b++) {
				var c = columns[b] = $.extend({}, columnDefaults, columns[b]);
				columnsById[c.id] = b, c.minWidth && c.width < c.minWidth && (c.width = c.minWidth), c.maxWidth && c.width > c.maxWidth && (c.width = c.maxWidth)
			}
			updateColumnCaches(), initialized && (invalidateAllRows(), createColumnHeaders(), removeCssRules(), createCssRules(), resizeCanvas(), applyColumnWidths(), handleScroll())
		}
		function getOptions() {
			return options
		}
		function setOptions(a) {
			getEditorLock().commitCurrentEdit() && (makeActiveCellNormal(), options.enableAddRow !== a.enableAddRow && invalidateRow(getDataLength()), options = $.extend(options, a), validateAndEnforceOptions(), $viewport.css("overflow-y", options.autoHeight ? "hidden" : "auto"), render())
		}
		function validateAndEnforceOptions() {
			options.autoHeight && (options.leaveSpaceForNewRows = !1)
		}
		function setData(a, b) {
			data = a, invalidateAllRows(), updateRowCount(), b && scrollTo(0)
		}
		function getData() {
			return data
		}
		function getDataLength() {
			return data.getLength ? data.getLength() : data.length
		}
		function getDataLengthIncludingAddNew() {
			return getDataLength() + (options.enableAddRow ? 1 : 0)
		}
		function getDataItem(a) {
			return data.getItem ? data.getItem(a) : data[a]
		}
		function getTopPanel() {
			return $topPanel[0]
		}
		function setTopPanelVisibility(a) {
			options.showTopPanel != a && (options.showTopPanel = a, a ? $topPanelScroller.slideDown("fast", resizeCanvas) : $topPanelScroller.slideUp("fast", resizeCanvas))
		}
		function setHeaderRowVisibility(a) {
			options.showHeaderRow != a && (options.showHeaderRow = a, a ? $headerRowScroller.slideDown("fast", resizeCanvas) : $headerRowScroller.slideUp("fast", resizeCanvas))
		}
		function getContainerNode() {
			return $container.get(0)
		}
		function getRowTop(a) {
			return options.rowHeight * a - offset
		}
		function getRowFromPosition(a) {
			return Math.floor((a + offset) / options.rowHeight)
		}
		function scrollTo(a) {
			a = Math.max(a, 0), a = Math.min(a, th - viewportH + (viewportHasHScroll ? scrollbarDimensions.height : 0));var b = offset;
			page = Math.min(n - 1, Math.floor(a / ph)), offset = Math.round(page * cj);var c = a - offset;
			if (offset != b) {
				var d = getVisibleRange(c);
				cleanupRows(d), updateRowPositions()
			}
			prevScrollTop != c && (vScrollDir = c + offset > prevScrollTop + b ? 1 : -1, $viewport[0].scrollTop = lastRenderedScrollTop = scrollTop = prevScrollTop = c, trigger(self.onViewportChanged, {}))
		}
		function defaultFormatter(a, b, c, d, e) {
			return null == c ? "" : (c + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
		}
		function getFormatter(a, b) {
			var c = data.getItemMetadata && data.getItemMetadata(a),
				d = c && c.columns && (c.columns[b.id] || c.columns[getColumnIndex(b.id)]);
			return d && d.formatter || c && c.formatter || b.formatter || options.formatterFactory && options.formatterFactory.getFormatter(b) || options.defaultFormatter
		}
		function getEditor(a, b) {
			var c = columns[b],
				d = data.getItemMetadata && data.getItemMetadata(a),
				e = d && d.columns;
			return e && e[c.id] && void 0 !== e[c.id].editor ? e[c.id].editor : e && e[b] && void 0 !== e[b].editor ? e[b].editor : c.editor || options.editorFactory && options.editorFactory.getEditor(c)
		}
		function getDataItemValueForColumn(a, b) {
			return options.dataItemColumnValueExtractor ? options.dataItemColumnValueExtractor(a, b) : a[b.field]
		}
		function appendRowHtml(a, b, c, d) {
			var e = getDataItem(b),
				f = d > b && !e,
				g = "slick-row" + (f ? " loading" : "") + (b === activeRow ? " active" : "") + (b % 2 == 1 ? " odd" : " even");
			e || (g += " " + options.addNewRowCssClass);var h = data.getItemMetadata && data.getItemMetadata(b);
			h && h.cssClasses && (g += " " + h.cssClasses), a.push("<div class=' " + g + "' style='top:" + getRowTop(b) + "px'>");
			for (var i, j, k = 0, l = columns.length; l > k; k++) {
				if (j = columns[k], i = 1, h && h.columns) {
					var m = h.columns[j.id] || h.columns[k];
					i = m && m.colspan || 1, "*" === i && (i = l - k)
				}
				if (columnPosRight[Math.min(l - 1, k + i - 1)] > c.leftPx) {
					if (columnPosLeft[k] > c.rightPx) break;
					appendCellHtml(a, b, k, i, e)
				}
				i > 1 && (k += i - 1)
			}
			a.push("</div>")
		}
		function appendCellHtml(a, b, c, d, e) {
			var f = columns[c],
				g = "slick-cell l" + c + " r" + Math.min(columns.length - 1, c + d - 1) + (f.cssClass ? " " + f.cssClass : "");
			b === activeRow && c === activeCell && (g += " active");
			for (var h in cellCssClasses) cellCssClasses[h][b] && cellCssClasses[h][b][f.id] && (g += " " + cellCssClasses[h][b][f.id]);
			if (a.push("<div class='" + g + "'>"), e) {
				var i = getDataItemValueForColumn(e, f);
				a.push(getFormatter(b, f)(b, c, i, f, e))
			}
			a.push("</div>"), rowsCache[b].cellRenderQueue.push(c), rowsCache[b].cellColSpans[c] = d
		}
		function cleanupRows(a) {
			for (var b in rowsCache) (b = parseInt(b, 10)) !== activeRow && (b < a.top || b > a.bottom) && removeRowFromCache(b)
		}
		function invalidate() {
			updateRowCount(), invalidateAllRows(), render()
		}
		function invalidateAllRows() {
			currentEditor && makeActiveCellNormal();
			for (var a in rowsCache) removeRowFromCache(a)
		}
		function removeRowFromCache(a) {
			var b = rowsCache[a];
			b && (rowNodeFromLastMouseWheelEvent == b.rowNode ? (b.rowNode.style.display = "none", zombieRowNodeFromLastMouseWheelEvent = rowNodeFromLastMouseWheelEvent) : $canvas[0].removeChild(b.rowNode),
			delete rowsCache[a]
			,
			delete postProcessedRows[a]
			, renderedRows--, counter_rows_removed++)
		}
		function invalidateRows(a) {
			var b,
				c;
			if (a && a.length)
				for (vScrollDir = 0, b = 0, c = a.length; c > b; b++) currentEditor && activeRow === a[b] && makeActiveCellNormal(), rowsCache[a[b]] && removeRowFromCache(a[b])
		}
		function invalidateRow(a) {
			invalidateRows([ a ])
		}
		function updateCell(a, b) {
			var c = getCellNode(a, b);
			if (c) {
				var d = columns[b],
					e = getDataItem(a);
				currentEditor && activeRow === a && activeCell === b ? currentEditor.loadValue(e) : (c.innerHTML = e ? getFormatter(a, d)(a, b, getDataItemValueForColumn(e, d), d, e) : "", invalidatePostProcessingResults(a))
			}
		}
		function updateRow(a) {
			var b = rowsCache[a];
			if (b) {
				ensureCellNodesInRowsCache(a);
				var c = getDataItem(a);
				for (var d in b.cellNodesByColumnIdx)
					if (b.cellNodesByColumnIdx.hasOwnProperty(d)) {
						d = 0 | d;
						var e = columns[d],
							f = b.cellNodesByColumnIdx[d];
						a === activeRow && d === activeCell && currentEditor ? currentEditor.loadValue(c) : c ? f.innerHTML = getFormatter(a, e)(a, d, getDataItemValueForColumn(c, e), e, c) : f.innerHTML = ""
				}
				invalidatePostProcessingResults(a)
			}
		}
		function getViewportHeight() {
			return parseFloat($.css($container[0], "height", !0)) - parseFloat($.css($container[0], "paddingTop", !0)) - parseFloat($.css($container[0], "paddingBottom", !0)) - parseFloat($.css($headerScroller[0], "height")) - getVBoxDelta($headerScroller) - (options.showTopPanel ? options.topPanelHeight + getVBoxDelta($topPanelScroller) : 0) - (options.showHeaderRow ? options.headerRowHeight + getVBoxDelta($headerRowScroller) : 0)
		}
		function resizeCanvas() {
			initialized && (viewportH = options.autoHeight ? options.rowHeight * getDataLengthIncludingAddNew() : getViewportHeight(), numVisibleRows = Math.ceil(viewportH / options.rowHeight), viewportW = parseFloat($.css($container[0], "width", !0)), options.autoHeight || $viewport.height(viewportH), options.forceFitColumns && autosizeColumns(), updateRowCount(), handleScroll(), lastRenderedScrollLeft = -1, render())
		}
		function updateRowCount() {
			if (initialized) {
				var a = getDataLengthIncludingAddNew(),
					b = a + (options.leaveSpaceForNewRows ? numVisibleRows - 1 : 0),
					c = viewportHasVScroll;
				viewportHasVScroll = !options.autoHeight && b * options.rowHeight > viewportH, makeActiveCellNormal();
				var d = a - 1;
				for (var e in rowsCache) e >= d && removeRowFromCache(e);
				activeCellNode && activeRow > d && resetActiveCell();
				var f = h;
				th = Math.max(options.rowHeight * b, viewportH - scrollbarDimensions.height), maxSupportedCssHeight > th ? (h = ph = th, n = 1, cj = 0) : (h = maxSupportedCssHeight, ph = h / 100, n = Math.floor(th / ph), cj = (th - h) / (n - 1)), h !== f && ($canvas.css("height", h), scrollTop = $viewport[0].scrollTop);
				var g = th - viewportH >= scrollTop + offset;
				0 == th || 0 == scrollTop ? page = offset = 0 : scrollTo(g ? scrollTop + offset : th - viewportH), h != f && options.autoHeight && resizeCanvas(), options.forceFitColumns && c != viewportHasVScroll && autosizeColumns(), updateCanvasWidth(!1)
			}
		}
		function getVisibleRange(a, b) {
			return null == a && (a = scrollTop), null == b && (b = scrollLeft), {
					top : getRowFromPosition(a),
					bottom : getRowFromPosition(a + viewportH) + 1,
					leftPx : b,
					rightPx : b + viewportW
			}
		}
		function getRenderedRange(a, b) {
			var c = getVisibleRange(a, b),
				d = Math.round(viewportH / options.rowHeight),
				e = 3;
			return -1 == vScrollDir ? (c.top -= d, c.bottom += e) : 1 == vScrollDir ? (c.top -= e, c.bottom += d) : (c.top -= e, c.bottom += e), c.top = Math.max(0, c.top), c.bottom = Math.min(getDataLengthIncludingAddNew() - 1, c.bottom), c.leftPx -= viewportW, c.rightPx += viewportW, c.leftPx = Math.max(0, c.leftPx), c.rightPx = Math.min(canvasWidth, c.rightPx), c
		}
		function ensureCellNodesInRowsCache(a) {
			var b = rowsCache[a];
			if (b && b.cellRenderQueue.length)
				for (var c = b.rowNode.lastChild; b.cellRenderQueue.length;) {
					var d = b.cellRenderQueue.pop();
					b.cellNodesByColumnIdx[d] = c, c = c.previousSibling
			}
		}
		function cleanUpCells(a, b) {
			var c = 0,
				d = rowsCache[b],
				e = [];
			for (var f in d.cellNodesByColumnIdx)
				if (d.cellNodesByColumnIdx.hasOwnProperty(f)) {
					f = 0 | f;
					var g = d.cellColSpans[f];
					(columnPosLeft[f] > a.rightPx || columnPosRight[Math.min(columns.length - 1, f + g - 1)] < a.leftPx) && (b != activeRow || f != activeCell) && e.push(f)
			}
			for (var h; null != (h = e.pop());) d.rowNode.removeChild(d.cellNodesByColumnIdx[h]),
				delete d.cellColSpans[h]
				,
				delete d.cellNodesByColumnIdx[h]
				, postProcessedRows[b] &&
				delete postProcessedRows[b][h]
				, c++
		}
		function cleanUpAndRenderCells(a) {
			for (var b, c, d, e = [], f = [], g = 0, h = a.top, i = a.bottom; i >= h; h++)
				if (b = rowsCache[h]) {
					ensureCellNodesInRowsCache(h), cleanUpCells(a, h), c = 0;
					var j = data.getItemMetadata && data.getItemMetadata(h);
					j = j && j.columns;
					for (var k = getDataItem(h), l = 0, m = columns.length; m > l && !(columnPosLeft[l] > a.rightPx); l++)
						if (null == (d = b.cellColSpans[l])) {
							if (d = 1, j) {
								var n = j[columns[l].id] || j[l];
								d = n && n.colspan || 1, "*" === d && (d = m - l)
							}
							columnPosRight[Math.min(m - 1, l + d - 1)] > a.leftPx && (appendCellHtml(e, h, l, d, k), c++), l += d > 1 ? d - 1 : 0
						} else
							l += d > 1 ? d - 1 : 0;
					c && (g += c, f.push(h))
			}
			if (e.length) {
				var o = document.createElement("div");
				o.innerHTML = e.join("");
				for (var p, q; null != (p = f.pop());) {
					b = rowsCache[p];
					for (var r; null != (r = b.cellRenderQueue.pop());) q = o.lastChild, b.rowNode.appendChild(q), b.cellNodesByColumnIdx[r] = q
				}
			}
		}
		function renderRows(a) {
			for (var b = $canvas[0], c = [], d = [], e = !1, f = getDataLength(), g = a.top, h = a.bottom; h >= g; g++) rowsCache[g] || (renderedRows++, d.push(g), rowsCache[g] = {
					rowNode : null,
					cellColSpans : [],
					cellNodesByColumnIdx : [],
					cellRenderQueue : []
				}, appendRowHtml(c, g, a, f), activeCellNode && activeRow === g && (e = !0), counter_rows_rendered++);
			if (d.length) {
				var i = document.createElement("div");
				i.innerHTML = c.join("");
				for (var g = 0, h = d.length; h > g; g++) rowsCache[d[g]].rowNode = b.appendChild(i.firstChild);
				e && (activeCellNode = getCellNode(activeRow, activeCell))
			}
		}
		function startPostProcessing() {
			options.enableAsyncPostRender && (clearTimeout(h_postrender), h_postrender = setTimeout(asyncPostProcessRows, options.asyncPostRenderDelay))
		}
		function invalidatePostProcessingResults(a) {
			delete postProcessedRows[a]
			, postProcessFromRow = Math.min(postProcessFromRow, a), postProcessToRow = Math.max(postProcessToRow, a), startPostProcessing()
		}
		function updateRowPositions() {
			for (var a in rowsCache) rowsCache[a].rowNode.style.top = getRowTop(a) + "px"
		}
		function render() {
			if (initialized) {
				var a = getVisibleRange(),
					b = getRenderedRange();
				cleanupRows(b), lastRenderedScrollLeft != scrollLeft && cleanUpAndRenderCells(b), renderRows(b), postProcessFromRow = a.top, postProcessToRow = Math.min(getDataLengthIncludingAddNew() - 1, a.bottom), startPostProcessing(), lastRenderedScrollTop = scrollTop, lastRenderedScrollLeft = scrollLeft, h_render = null
			}
		}
		function handleHeaderRowScroll() {
			var a = $headerRowScroller[0].scrollLeft;
			a != $viewport[0].scrollLeft && ($viewport[0].scrollLeft = a)
		}
		function handleScroll() {
			scrollTop = $viewport[0].scrollTop, scrollLeft = $viewport[0].scrollLeft;var a = Math.abs(scrollTop - prevScrollTop),
				b = Math.abs(scrollLeft - prevScrollLeft);
			if (b && (prevScrollLeft = scrollLeft, $headerScroller[0].scrollLeft = scrollLeft, $topPanelScroller[0].scrollLeft = scrollLeft, $headerRowScroller[0].scrollLeft = scrollLeft), a)
				if (vScrollDir = scrollTop > prevScrollTop ? 1 : -1, prevScrollTop = scrollTop, viewportH > a) scrollTo(scrollTop + offset);else {
					var c = offset;
					page = h == viewportH ? 0 : Math.min(n - 1, Math.floor(scrollTop * ((th - viewportH) / (h - viewportH)) * (1 / ph))), offset = Math.round(page * cj), c != offset && invalidateAllRows()
			}
			(b || a) && (h_render && clearTimeout(h_render), (Math.abs(lastRenderedScrollTop - scrollTop) > 20 || Math.abs(lastRenderedScrollLeft - scrollLeft) > 20) && (options.forceSyncScrolling || Math.abs(lastRenderedScrollTop - scrollTop) < viewportH && Math.abs(lastRenderedScrollLeft - scrollLeft) < viewportW ? render() : h_render = setTimeout(render, 50), trigger(self.onViewportChanged, {}))), trigger(self.onScroll, {
				scrollLeft : scrollLeft,
				scrollTop : scrollTop
			})
		}
		function asyncPostProcessRows() {
			for (var a = getDataLength(); postProcessToRow >= postProcessFromRow;) {
				var b = vScrollDir >= 0 ? postProcessFromRow++ : postProcessToRow--,
					c = rowsCache[b];
				if (c && !(b >= a)) {
					postProcessedRows[b] || (postProcessedRows[b] = {}), ensureCellNodesInRowsCache(b);
					for (var d in c.cellNodesByColumnIdx)
						if (c.cellNodesByColumnIdx.hasOwnProperty(d)) {
							d = 0 | d;
							var e = columns[d];
							if (e.asyncPostRender && !postProcessedRows[b][d]) {
								var f = c.cellNodesByColumnIdx[d];
								f && e.asyncPostRender(f, b, getDataItem(b), e), postProcessedRows[b][d] = !0
							}
					}
					return void (h_postrender = setTimeout(asyncPostProcessRows, options.asyncPostRenderDelay))
				}
			}
		}
		function updateCellCssStylesOnRenderedRows(a, b) {
			var c,
				d,
				e,
				f;
			for (var g in rowsCache) {
				if (f = b && b[g], e = a && a[g], f)
					for (d in f) e && f[d] == e[d] || (c = getCellNode(g, getColumnIndex(d)), c && $(c).removeClass(f[d]));
				if (e)
					for (d in e) f && f[d] == e[d] || (c = getCellNode(g, getColumnIndex(d)), c && $(c).addClass(e[d]))
			}
		}
		function addCellCssStyles(a, b) {
			if (cellCssClasses[a])
				throw "addCellCssStyles: cell CSS hash with key '" + a + "' already exists.";
			cellCssClasses[a] = b, updateCellCssStylesOnRenderedRows(b, null), trigger(self.onCellCssStylesChanged, {
				key : a,
				hash : b
			})
		}
		function removeCellCssStyles(a) {
			cellCssClasses[a] && (updateCellCssStylesOnRenderedRows(null, cellCssClasses[a]),
			delete cellCssClasses[a]
			, trigger(self.onCellCssStylesChanged, {
				key : a,
				hash : null
			}))
		}
		function setCellCssStyles(a, b) {
			var c = cellCssClasses[a];
			cellCssClasses[a] = b, updateCellCssStylesOnRenderedRows(b, c), trigger(self.onCellCssStylesChanged, {
				key : a,
				hash : b
			})
		}
		function getCellCssStyles(a) {
			return cellCssClasses[a]
		}
		function flashCell(a, b, c) {
			function d(a) {
				a && setTimeout(function() {
					e.queue(function() {
						e.toggleClass(options.cellFlashingCssClass).dequeue(), d(a - 1)
					})
				}, c)
			}
			if (c = c || 100, rowsCache[a]) {
				var e = $(getCellNode(a, b));
				d(4)
			}
		}
		function handleMouseWheel(a) {
			var b = $(a.target).closest(".slick-row")[0];
			b != rowNodeFromLastMouseWheelEvent && (zombieRowNodeFromLastMouseWheelEvent && zombieRowNodeFromLastMouseWheelEvent != b && ($canvas[0].removeChild(zombieRowNodeFromLastMouseWheelEvent), zombieRowNodeFromLastMouseWheelEvent = null), rowNodeFromLastMouseWheelEvent = b)
		}
		function handleDragInit(a, b) {
			var c = getCellFromEvent(a);
			if (!c || !cellExists(c.row, c.cell)) return !1;
			var d = trigger(self.onDragInit, b, a);
			return a.isImmediatePropagationStopped() ? d : !1
		}
		function handleDragStart(a, b) {
			var c = getCellFromEvent(a);
			if (!c || !cellExists(c.row, c.cell)) return !1;
			var d = trigger(self.onDragStart, b, a);
			return a.isImmediatePropagationStopped() ? d : !1
		}
		function handleDrag(a, b) {
			return trigger(self.onDrag, b, a)
		}
		function handleDragEnd(a, b) {
			trigger(self.onDragEnd, b, a)
		}
		function handleKeyDown(a) {
			trigger(self.onKeyDown, {
				row : activeRow,
				cell : activeCell
			}, a);var b = a.isImmediatePropagationStopped();
			if (!b)
				if (a.shiftKey || a.altKey || a.ctrlKey) 9 != a.which || !a.shiftKey || a.ctrlKey || a.altKey || (b = navigatePrev());
				else if (27 == a.which) {
					if (!getEditorLock().isActive()) return;
					cancelEditAndSetFocus();
				} else
					34 == a.which ? (navigatePageDown(), b = !0) : 33 == a.which ? (navigatePageUp(), b = !0) : 37 == a.which ? b = navigateLeft() : 39 == a.which ? b = navigateRight() : 38 == a.which ? b = navigateUp() : 40 == a.which ? b = navigateDown() : 9 == a.which ? b = navigateNext() : 13 == a.which && (options.editable && (currentEditor ? activeRow === getDataLength() ? navigateDown() : commitEditAndSetFocus() : getEditorLock().commitCurrentEdit() && makeActiveCellEditable()), b = !0);
			if (b) {
				a.stopPropagation(), a.preventDefault();try {
					a.originalEvent.keyCode = 0
				} catch (c) {}
			}
		}
		function handleClick(a) {
			currentEditor || (a.target != document.activeElement || $(a.target).hasClass("slick-cell")) && setFocus();var b = getCellFromEvent(a);
			!b || null !== currentEditor && activeRow == b.row && activeCell == b.cell || (trigger(self.onClick, {
				row : b.row,
				cell : b.cell
			}, a), a.isImmediatePropagationStopped() || activeCell == b.cell && activeRow == b.row || !canCellBeActive(b.row, b.cell) || (!getEditorLock().isActive() || getEditorLock().commitCurrentEdit()) && (scrollRowIntoView(b.row, !1), setActiveCellInternal(getCellNode(b.row, b.cell))))
		}
		function handleContextMenu(a) {
			var b = $(a.target).closest(".slick-cell", $canvas);
			0 !== b.length && (activeCellNode !== b[0] || null === currentEditor) && trigger(self.onContextMenu, {}, a)
		}
		function handleDblClick(a) {
			var b = getCellFromEvent(a);
			!b || null !== currentEditor && activeRow == b.row && activeCell == b.cell || (trigger(self.onDblClick, {
				row : b.row,
				cell : b.cell
			}, a), a.isImmediatePropagationStopped() || options.editable && gotoCell(b.row, b.cell, !0))
		}
		function handleHeaderMouseEnter(a) {
			trigger(self.onHeaderMouseEnter, {
				column : $(this).data("column")
			}, a)
		}
		function handleHeaderMouseLeave(a) {
			trigger(self.onHeaderMouseLeave, {
				column : $(this).data("column")
			}, a)
		}
		function handleHeaderContextMenu(a) {
			var b = $(a.target).closest(".slick-header-column", ".slick-header-columns"),
				c = b && b.data("column");
			trigger(self.onHeaderContextMenu, {
				column : c
			}, a)
		}
		function handleHeaderClick(a) {
			var b = $(a.target).closest(".slick-header-column", ".slick-header-columns"),
				c = b && b.data("column");
			c && trigger(self.onHeaderClick, {
				column : c
			}, a)
		}
		function handleMouseEnter(a) {
			trigger(self.onMouseEnter, {}, a)
		}
		function handleMouseLeave(a) {
			trigger(self.onMouseLeave, {}, a)
		}
		function cellExists(a, b) {
			return !(0 > a || a >= getDataLength() || 0 > b || b >= columns.length)
		}
		function getCellFromPoint(a, b) {
			for (var c = getRowFromPosition(b), d = 0, e = 0, f = 0; f < columns.length && a > e; f++) e += columns[f].width, d++;
			return 0 > d && (d = 0), {
					row : c,
					cell : d - 1
			}
		}
		function getCellFromNode(a) {
			var b = /l\d+/.exec(a.className);
			if (!b)
				throw "getCellFromNode: cannot get cell - " + a.className;
			return parseInt(b[0].substr(1, b[0].length - 1), 10)
		}
		function getRowFromNode(a) {
			for (var b in rowsCache)
				if (rowsCache[b].rowNode === a) return 0 | b;
			return null
		}
		function getCellFromEvent(a) {
			var b = $(a.target).closest(".slick-cell", $canvas);
			if (!b.length) return null;
			var c = getRowFromNode(b[0].parentNode),
				d = getCellFromNode(b[0]);
			return null == c || null == d ? null : {
				row : c,
				cell : d
			}
		}
		function getCellNodeBox(a, b) {
			if (!cellExists(a, b)) return null;
			for (var c = getRowTop(a), d = c + options.rowHeight - 1, e = 0, f = 0; b > f; f++) e += columns[f].width;
			var g = e + columns[b].width;
			return {
				top : c,
				left : e,
				bottom : d,
				right : g
			}
		}
		function resetActiveCell() {
			setActiveCellInternal(null, !1)
		}
		function setFocus() {
			-1 == tabbingDirection ? $focusSink[0].focus() : $focusSink2[0].focus()
		}
		function scrollCellIntoView(a, b, c) {
			scrollRowIntoView(a, c);var d = getColspan(a, b),
				e = columnPosLeft[b],
				f = columnPosRight[b + (d > 1 ? d - 1 : 0)],
				g = scrollLeft + viewportW;
			scrollLeft > e ? ($viewport.scrollLeft(e), handleScroll(), render()) : f > g && ($viewport.scrollLeft(Math.min(e, f - $viewport[0].clientWidth)), handleScroll(), render())
		}
		function setActiveCellInternal(a, b) {
			null !== activeCellNode && (makeActiveCellNormal(), $(activeCellNode).removeClass("active"), rowsCache[activeRow] && $(rowsCache[activeRow].rowNode).removeClass("active"));var c = activeCellNode !== a;
			activeCellNode = a, null != activeCellNode ? (activeRow = getRowFromNode(activeCellNode.parentNode), activeCell = activePosX = getCellFromNode(activeCellNode), null == b && (b = activeRow == getDataLength() || options.autoEdit), $(activeCellNode).addClass("active"), $(rowsCache[activeRow].rowNode).addClass("active"), options.editable && b && isCellPotentiallyEditable(activeRow, activeCell) && (clearTimeout(h_editorLoader), options.asyncEditorLoading ? h_editorLoader = setTimeout(function() {
				makeActiveCellEditable()
			}, options.asyncEditorLoadDelay) : makeActiveCellEditable())) : activeRow = activeCell = null, c && trigger(self.onActiveCellChanged, getActiveCell())
		}
		function clearTextSelection() {
			if (document.selection && document.selection.empty) try {
					document.selection.empty()
				} catch (a) {}
			else if (window.getSelection) {
				var b = window.getSelection();
				b && b.removeAllRanges && b.removeAllRanges()
			}
		}
		function isCellPotentiallyEditable(a, b) {
			var c = getDataLength();
			return c > a && !getDataItem(a) ? !1 : columns[b].cannotTriggerInsert && a >= c ? !1 : getEditor(a, b) ? !0 : !1
		}
		function makeActiveCellNormal() {
			if (currentEditor) {
				if (trigger(self.onBeforeCellEditorDestroy, {
						editor : currentEditor
					}), currentEditor = null, activeCellNode) {
					var a = getDataItem(activeRow);
					if ($(activeCellNode).removeClass("editable invalid"), a) {
						var b = columns[activeCell],
							c = getFormatter(activeRow, b);
						activeCellNode.innerHTML = c(activeRow, activeCell, getDataItemValueForColumn(a, b), b, a), invalidatePostProcessingResults(activeRow)
					}
				}
				navigator.userAgent.toLowerCase().match(/msie/) && clearTextSelection(), getEditorLock().deactivate(editController)
			}
		}
		function makeActiveCellEditable(a) {
			if (activeCellNode) {
				if (!options.editable)
					throw "Grid : makeActiveCellEditable : should never get called when options.editable is false";
				if (clearTimeout(h_editorLoader), isCellPotentiallyEditable(activeRow, activeCell)) {
					var b = columns[activeCell],
						c = getDataItem(activeRow);
					if (trigger(self.onBeforeEditCell, {
							row : activeRow,
							cell : activeCell,
							item : c,
							column : b
						}) === !1) return void setFocus();
					getEditorLock().activate(editController), $(activeCellNode).addClass("editable"), a || (activeCellNode.innerHTML = ""), currentEditor = new (a || getEditor(activeRow, activeCell))({
						grid : self,
						gridPosition : absBox($container[0]),
						position : absBox(activeCellNode),
						container : activeCellNode,
						column : b,
						item : c || {},
						commitChanges : commitEditAndSetFocus,
						cancelChanges : cancelEditAndSetFocus
					}), c && currentEditor.loadValue(c), serializedEditorValue = currentEditor.serializeValue(), currentEditor.position && handleActiveCellPositionChange()
				}
			}
		}
		function commitEditAndSetFocus() {
			getEditorLock().commitCurrentEdit() && (setFocus(), options.autoEdit && navigateDown())
		}
		function cancelEditAndSetFocus() {
			getEditorLock().cancelCurrentEdit() && setFocus()
		}
		function absBox(a) {
			var b = {
				top : a.offsetTop,
				left : a.offsetLeft,
				bottom : 0,
				right : 0,
				width : $(a).outerWidth(),
				height : $(a).outerHeight(),
				visible : !0
			};
			b.bottom = b.top + b.height, b.right = b.left + b.width;
			for (var c = a.offsetParent; (a = a.parentNode) != document.body;) b.visible && a.scrollHeight != a.offsetHeight && "visible" != $(a).css("overflowY") && (b.visible = b.bottom > a.scrollTop && b.top < a.scrollTop + a.clientHeight), b.visible && a.scrollWidth != a.offsetWidth && "visible" != $(a).css("overflowX") && (b.visible = b.right > a.scrollLeft && b.left < a.scrollLeft + a.clientWidth), b.left -= a.scrollLeft, b.top -= a.scrollTop, a === c && (b.left += a.offsetLeft, b.top += a.offsetTop, c = a.offsetParent), b.bottom = b.top + b.height, b.right = b.left + b.width;
			return b
		}
		function getActiveCellPosition() {
			return absBox(activeCellNode)
		}
		function getGridPosition() {
			return absBox($container[0])
		}
		function handleActiveCellPositionChange() {
			if (activeCellNode && (trigger(self.onActiveCellPositionChanged, {}), currentEditor)) {
				var a = getActiveCellPosition();
				currentEditor.show && currentEditor.hide && (a.visible ? currentEditor.show() : currentEditor.hide()), currentEditor.position && currentEditor.position(a)
			}
		}
		function getCellEditor() {
			return currentEditor
		}
		function getActiveCell() {
			return activeCellNode ? {
				row : activeRow,
				cell : activeCell
			} : null
		}
		function getActiveCellNode() {
			return activeCellNode
		}
		function scrollRowIntoView(a, b) {
			var c = a * options.rowHeight,
				d = (a + 1) * options.rowHeight - viewportH + (viewportHasHScroll ? scrollbarDimensions.height : 0);
			(a + 1) * options.rowHeight > scrollTop + viewportH + offset ? (scrollTo(b ? c : d), render()) : a * options.rowHeight < scrollTop + offset && (scrollTo(b ? d : c), render())
		}
		function scrollRowToTop(a) {
			scrollTo(a * options.rowHeight), render()
		}
		function scrollPage(a) {
			var b = a * numVisibleRows;
			if (scrollTo((getRowFromPosition(scrollTop) + b) * options.rowHeight), render(), options.enableCellNavigation && null != activeRow) {
				var c = activeRow + b,
					d = getDataLengthIncludingAddNew();
				c >= d && (c = d - 1), 0 > c && (c = 0);
				for (var e = 0, f = null, g = activePosX; activePosX >= e;) canCellBeActive(c, e) && (f = e), e += getColspan(c, e);
				null !== f ? (setActiveCellInternal(getCellNode(c, f)), activePosX = g) : resetActiveCell()
			}
		}
		function navigatePageDown() {
			scrollPage(1)
		}
		function navigatePageUp() {
			scrollPage(-1)
		}
		function getColspan(a, b) {
			var c = data.getItemMetadata && data.getItemMetadata(a);
			if (!c || !c.columns) return 1;
			var d = c.columns[columns[b].id] || c.columns[b],
				e = d && d.colspan;
			return e = "*" === e ? columns.length - b : e || 1
		}
		function findFirstFocusableCell(a) {
			for (var b = 0; b < columns.length;) {
				if (canCellBeActive(a, b)) return b;
				b += getColspan(a, b)
			}
			return null
		}
		function findLastFocusableCell(a) {
			for (var b = 0, c = null; b < columns.length;) canCellBeActive(a, b) && (c = b), b += getColspan(a, b);
			return c
		}
		function gotoRight(a, b, c) {
			if (b >= columns.length) return null;
			do b += getColspan(a, b); while (b < columns.length && !canCellBeActive(a, b));
			return b < columns.length ? {
				row : a,
				cell : b,
				posX : b
			} : null
		}
		function gotoLeft(a, b, c) {
			if (0 >= b) return null;
			var d = findFirstFocusableCell(a);
			if (null === d || d >= b) return null;
			for (var e, f = {
						row : a,
						cell : d,
						posX : d
				};;) {
				if (e = gotoRight(f.row, f.cell, f.posX), !e) return null;
				if (e.cell >= b) return f;
				f = e
			}
		}
		function gotoDown(a, b, c) {
			for (var d, e = getDataLengthIncludingAddNew();;) {
				if (++a >= e) return null;
				for (d = b = 0; c >= b;) d = b, b += getColspan(a, b);
				if (canCellBeActive(a, d)) return {
						row : a,
						cell : d,
						posX : c
				}
			}
		}
		function gotoUp(a, b, c) {
			for (var d;;) {
				if (--a < 0) return null;
				for (d = b = 0; c >= b;) d = b, b += getColspan(a, b);
				if (canCellBeActive(a, d)) return {
						row : a,
						cell : d,
						posX : c
				}
			}
		}
		function gotoNext(a, b, c) {
			if (null == a && null == b && (a = b = c = 0, canCellBeActive(a, b))) return {
					row : a,
					cell : b,
					posX : b
				};
			var d = gotoRight(a, b, c);
			if (d) return d;
			for (var e = null, f = getDataLengthIncludingAddNew(); ++a < f;)
				if (e = findFirstFocusableCell(a), null !== e) return {
						row : a,
						cell : e,
						posX : e
					};
			return null
		}
		function gotoPrev(a, b, c) {
			if (null == a && null == b && (a = getDataLengthIncludingAddNew() - 1, b = c = columns.length - 1, canCellBeActive(a, b))) return {
					row : a,
					cell : b,
					posX : b
				};
			for (var d, e; !d && !(d = gotoLeft(a, b, c));) {
				if (--a < 0) return null;
				b = 0, e = findLastFocusableCell(a), null !== e && (d = {
					row : a,
					cell : e,
					posX : e
				})
			}
			return d
		}
		function navigateRight() {
			return navigate("right")
		}
		function navigateLeft() {
			return navigate("left")
		}
		function navigateDown() {
			return navigate("down")
		}
		function navigateUp() {
			return navigate("up")
		}
		function navigateNext() {
			return navigate("next")
		}
		function navigatePrev() {
			return navigate("prev")
		}
		function navigate(a) {
			if (!options.enableCellNavigation) return !1;
			if (!activeCellNode && "prev" != a && "next" != a) return !1;
			if (!getEditorLock().commitCurrentEdit()) return !0;
			setFocus();var b = {
				up : -1,
				down : 1,
				left : -1,
				right : 1,
				prev : -1,
				next : 1
			};
			tabbingDirection = b[a];var c = {
					up : gotoUp,
					down : gotoDown,
					left : gotoLeft,
					right : gotoRight,
					prev : gotoPrev,
					next : gotoNext
				},
				d = c[a],
				e = d(activeRow, activeCell, activePosX);
			if (e) {
				var f = e.row == getDataLength();
				return scrollCellIntoView(e.row, e.cell, !f), setActiveCellInternal(getCellNode(e.row, e.cell)), activePosX = e.posX, !0
			}
			return setActiveCellInternal(getCellNode(activeRow, activeCell)), !1
		}
		function getCellNode(a, b) {
			return rowsCache[a] ? (ensureCellNodesInRowsCache(a), rowsCache[a].cellNodesByColumnIdx[b]) : null
		}
		function setActiveCell(a, b) {
			initialized && (a > getDataLength() || 0 > a || b >= columns.length || 0 > b || options.enableCellNavigation && (scrollCellIntoView(a, b, !1), setActiveCellInternal(getCellNode(a, b), !1)))
		}
		function canCellBeActive(a, b) {
			if (!options.enableCellNavigation || a >= getDataLengthIncludingAddNew() || 0 > a || b >= columns.length || 0 > b) return !1;
			var c = data.getItemMetadata && data.getItemMetadata(a);
			if (c && "boolean" == typeof c.focusable) return c.focusable;
			var d = c && c.columns;
			return d && d[columns[b].id] && "boolean" == typeof d[columns[b].id].focusable ? d[columns[b].id].focusable : d && d[b] && "boolean" == typeof d[b].focusable ? d[b].focusable : columns[b].focusable
		}
		function canCellBeSelected(a, b) {
			if (a >= getDataLength() || 0 > a || b >= columns.length || 0 > b) return !1;
			var c = data.getItemMetadata && data.getItemMetadata(a);
			if (c && "boolean" == typeof c.selectable) return c.selectable;
			var d = c && c.columns && (c.columns[columns[b].id] || c.columns[b]);
			return d && "boolean" == typeof d.selectable ? d.selectable : columns[b].selectable
		}
		function gotoCell(a, b, c) {
			if (initialized && canCellBeActive(a, b) && getEditorLock().commitCurrentEdit()) {
				scrollCellIntoView(a, b, !1);
				var d = getCellNode(a, b);
				setActiveCellInternal(d, c || a === getDataLength() || options.autoEdit), currentEditor || setFocus()
			}
		}
		function commitCurrentEdit() {
			var a = getDataItem(activeRow),
				b = columns[activeCell];
			if (currentEditor) {
				if (currentEditor.isValueChanged()) {
					var c = currentEditor.validate();
					if (c.valid) {
						if (activeRow < getDataLength()) {
							var d = {
								row : activeRow,
								cell : activeCell,
								editor : currentEditor,
								serializedValue : currentEditor.serializeValue(),
								prevSerializedValue : serializedEditorValue,
								execute : function() {
									this.editor.applyValue(a, this.serializedValue), updateRow(this.row), trigger(self.onCellChange, {
										row : activeRow,
										cell : activeCell,
										item : a
									})
								},
								undo : function() {
									this.editor.applyValue(a, this.prevSerializedValue), updateRow(this.row), trigger(self.onCellChange, {
										row : activeRow,
										cell : activeCell,
										item : a
									})
								}
							};
							options.editCommandHandler ? (makeActiveCellNormal(), options.editCommandHandler(a, b, d)) : (d.execute(), makeActiveCellNormal())
						} else {
							var e = {};
							currentEditor.applyValue(e, currentEditor.serializeValue()), makeActiveCellNormal(), trigger(self.onAddNewRow, {
								item : e,
								column : b
							})
						}
						return !getEditorLock().isActive()
					}
					return $(activeCellNode).removeClass("invalid"), $(activeCellNode).width(), $(activeCellNode).addClass("invalid"), trigger(self.onValidationError, {
							editor : currentEditor,
							cellNode : activeCellNode,
							validationResults : c,
							row : activeRow,
							cell : activeCell,
							column : b
						}), currentEditor.focus(), !1
				}
				makeActiveCellNormal()
			}
			return !0
		}
		function cancelCurrentEdit() {
			return makeActiveCellNormal(), !0
		}
		function rowsToRanges(a) {
			for (var b = [], c = columns.length - 1, d = 0; d < a.length; d++) b.push(new Slick.Range(a[d], 0, a[d], c));
			return b
		}
		function getSelectedRows() {
			if (!selectionModel)
				throw "Selection model is not set";
			return selectedRows
		}
		function setSelectedRows(a) {
			if (!selectionModel)
				throw "Selection model is not set";
			selectionModel.setSelectedRanges(rowsToRanges(a))
		}
		var defaults = {
				explicitInitialization : !1,
				rowHeight : 35,
				defaultColumnWidth : 120,
				enableAddRow : !1,
				leaveSpaceForNewRows : !1,
				editable : !1,
				autoEdit : !0,
				enableCellNavigation : !0,
				enableColumnReorder : !1,
				asyncEditorLoading : !1,
				asyncEditorLoadDelay : 100,
				forceFitColumns : !1,
				enableAsyncPostRender : !1,
				asyncPostRenderDelay : 50,
				autoHeight : !1,
				editorLock : Slick.GlobalEditorLock,
				showHeaderRow : !1,
				headerRowHeight : 25,
				showTopPanel : !1,
				topPanelHeight : 25,
				formatterFactory : null,
				editorFactory : null,
				cellFlashingCssClass : "flashing",
				selectedCellCssClass : "selected",
				multiSelect : !0,
				enableTextSelectionOnCells : !0,
				dataItemColumnValueExtractor : null,
				fullWidthRows : !1,
				multiColumnSort : !1,
				defaultFormatter : defaultFormatter,
				forceSyncScrolling : !1,
				addNewRowCssClass : "new-row"
			},
			columnDefaults = {
				name : "",
				resizable : !0,
				sortable : !1,
				minWidth : 30,
				rerenderOnResize : !1,
				headerCssClass : null,
				defaultSortAsc : !0,
				focusable : !0,
				selectable : !0
			},
			th,
			h,
			ph,
			n,
			cj,
			page = 0,
			offset = 0,
			vScrollDir = 1,
			initialized = !1,
			$container,
			uid = "slickgrid_" + Math.round(1e6 * Math.random()),
			self = this,
			$focusSink,
			$focusSink2,
			$headerScroller,
			$headers,
			$headerRow,
			$headerRowScroller,
			$headerRowSpacer,
			$topPanelScroller,
			$topPanel,
			$viewport,
			$canvas,
			$style,
			$boundAncestors,
			stylesheet,
			columnCssRulesL,
			columnCssRulesR,
			viewportH,
			viewportW,
			canvasWidth,
			viewportHasHScroll,
			viewportHasVScroll,
			headerColumnWidthDiff = 0,
			headerColumnHeightDiff = 0,
			cellWidthDiff = 0,
			cellHeightDiff = 0,
			absoluteColumnMinWidth,
			tabbingDirection = 1,
			activePosX,
			activeRow,
			activeCell,
			activeCellNode = null,
			currentEditor = null,
			serializedEditorValue,
			editController,
			rowsCache = {},
			renderedRows = 0,
			numVisibleRows,
			prevScrollTop = 0,
			scrollTop = 0,
			lastRenderedScrollTop = 0,
			lastRenderedScrollLeft = 0,
			prevScrollLeft = 0,
			scrollLeft = 0,
			selectionModel,
			selectedRows = [],
			plugins = [],
			cellCssClasses = {},
			columnsById = {},
			sortColumns = [],
			columnPosLeft = [],
			columnPosRight = [],
			h_editorLoader = null,
			h_render = null,
			h_postrender = null,
			postProcessedRows = {},
			postProcessToRow = null,
			postProcessFromRow = null,
			counter_rows_rendered = 0,
			counter_rows_removed = 0,
			rowNodeFromLastMouseWheelEvent,
			zombieRowNodeFromLastMouseWheelEvent;
		this.debug = function() {
			var a = "";
			a += "\ncounter_rows_rendered:  " + counter_rows_rendered, a += "\ncounter_rows_removed:  " + counter_rows_removed, a += "\nrenderedRows:  " + renderedRows, a += "\nnumVisibleRows:  " + numVisibleRows, a += "\nmaxSupportedCssHeight:  " + maxSupportedCssHeight, a += "\nn(umber of pages):  " + n, a += "\n(current) page:  " + page, a += "\npage height (ph):  " + ph, a += "\nvScrollDir:  " + vScrollDir, alert(a)
		}, this.eval = function(expr) {
			return eval(expr)
		}, $.extend(this, {
			slickGridVersion : "2.1",
			onScroll : new Slick.Event,
			onSort : new Slick.Event,
			onHeaderMouseEnter : new Slick.Event,
			onHeaderMouseLeave : new Slick.Event,
			onHeaderContextMenu : new Slick.Event,
			onHeaderClick : new Slick.Event,
			onHeaderCellRendered : new Slick.Event,
			onBeforeHeaderCellDestroy : new Slick.Event,
			onHeaderRowCellRendered : new Slick.Event,
			onBeforeHeaderRowCellDestroy : new Slick.Event,
			onMouseEnter : new Slick.Event,
			onMouseLeave : new Slick.Event,
			onClick : new Slick.Event,
			onDblClick : new Slick.Event,
			onContextMenu : new Slick.Event,
			onKeyDown : new Slick.Event,
			onAddNewRow : new Slick.Event,
			onValidationError : new Slick.Event,
			onViewportChanged : new Slick.Event,
			onColumnsReordered : new Slick.Event,
			onColumnsResized : new Slick.Event,
			onCellChange : new Slick.Event,
			onBeforeEditCell : new Slick.Event,
			onBeforeCellEditorDestroy : new Slick.Event,
			onBeforeDestroy : new Slick.Event,
			onActiveCellChanged : new Slick.Event,
			onActiveCellPositionChanged : new Slick.Event,
			onDragInit : new Slick.Event,
			onDragStart : new Slick.Event,
			onDrag : new Slick.Event,
			onDragEnd : new Slick.Event,
			onSelectedRowsChanged : new Slick.Event,
			onCellCssStylesChanged : new Slick.Event,
			registerPlugin : registerPlugin,
			unregisterPlugin : unregisterPlugin,
			getColumns : getColumns,
			setColumns : setColumns,
			getColumnIndex : getColumnIndex,
			updateColumnHeader : updateColumnHeader,
			setSortColumn : setSortColumn,
			setSortColumns : setSortColumns,
			getSortColumns : getSortColumns,
			autosizeColumns : autosizeColumns,
			getOptions : getOptions,
			setOptions : setOptions,
			getData : getData,
			getDataLength : getDataLength,
			getDataItem : getDataItem,
			setData : setData,
			getSelectionModel : getSelectionModel,
			setSelectionModel : setSelectionModel,
			getSelectedRows : getSelectedRows,
			setSelectedRows : setSelectedRows,
			getContainerNode : getContainerNode,
			render : render,
			invalidate : invalidate,
			invalidateRow : invalidateRow,
			invalidateRows : invalidateRows,
			invalidateAllRows : invalidateAllRows,
			updateCell : updateCell,
			updateRow : updateRow,
			getViewport : getVisibleRange,
			getRenderedRange : getRenderedRange,
			resizeCanvas : resizeCanvas,
			updateRowCount : updateRowCount,
			scrollRowIntoView : scrollRowIntoView,
			scrollRowToTop : scrollRowToTop,
			scrollCellIntoView : scrollCellIntoView,
			getCanvasNode : getCanvasNode,
			focus : setFocus,
			getCellFromPoint : getCellFromPoint,
			getCellFromEvent : getCellFromEvent,
			getActiveCell : getActiveCell,
			setActiveCell : setActiveCell,
			getActiveCellNode : getActiveCellNode,
			getActiveCellPosition : getActiveCellPosition,
			resetActiveCell : resetActiveCell,
			editActiveCell : makeActiveCellEditable,
			getCellEditor : getCellEditor,
			getCellNode : getCellNode,
			getCellNodeBox : getCellNodeBox,
			canCellBeSelected : canCellBeSelected,
			canCellBeActive : canCellBeActive,
			navigatePrev : navigatePrev,
			navigateNext : navigateNext,
			navigateUp : navigateUp,
			navigateDown : navigateDown,
			navigateLeft : navigateLeft,
			navigateRight : navigateRight,
			navigatePageUp : navigatePageUp,
			navigatePageDown : navigatePageDown,
			gotoCell : gotoCell,
			getTopPanel : getTopPanel,
			setTopPanelVisibility : setTopPanelVisibility,
			setHeaderRowVisibility : setHeaderRowVisibility,
			getHeaderRow : getHeaderRow,
			getHeaderRowColumn : getHeaderRowColumn,
			getGridPosition : getGridPosition,
			flashCell : flashCell,
			addCellCssStyles : addCellCssStyles,
			setCellCssStyles : setCellCssStyles,
			removeCellCssStyles : removeCellCssStyles,
			getCellCssStyles : getCellCssStyles,
			init : finishInitialization,
			destroy : destroy,
			getEditorLock : getEditorLock,
			getEditController : getEditController
		}), init()
	}
	$.extend(!0, window, {
		Slick : {
			Grid : SlickGrid
		}
	});
	var scrollbarDimensions,
		maxSupportedCssHeight
}(jQuery), function(a) {
	function b(b) {
		function c(c) {
			c.html(""), a('<div style="margin-top: 10px"><div class="recordstate"><span class="recordstatelabel">显示</span>&nbsp;<span id="recordsegment"></span>&nbsp;&nbsp;<span id="totalrecords"></span></div>			  <div class="pageList"><div style="display: inline-block;float:left"><label><select class="form-control input-sm ue-form recordsperpage">          </select></label></div>		  <div class="pagination"></div>          </div></div>').appendTo(c), d(a(".recordsperpage"), b.options.lengthMenu), e(a(".recordstate"), b.options.info), a(".recordsperpage").change(function() {
				f.param.params.limit = parseInt(a(this).val()), f.getData(1, b.url, f.param.params)
			})
		}
		function d(a, b) {
			for (var c = 0, d = b.length; d > c; c++) a[0][c] = new Option(b[c], b[c])
		}
		function e(a, b) {
			b ? a.show() : a.hide()
		}
		this.param = b;var f = this;
		c(b.container);this.getData(1, b.url, this.param.params)
	}
	a.extend(!0, window, {
		Slick : {
			Controls : {
				Pager : b
			}
		}
	}), Slick.Controls.Pager.prototype = {
		getData : function(b, c, d) {
			d.start = (b - 1) * d.limit;
			var e = [];
			return a.ajax({
					url : c,
					type : "POST",
					async : !1,
					contentType : "application/json",
					dataType : "json",
					data : JSON.stringify(d),
					success : function(a) {
						e = a
					},
					error : function(b, c) {
						a.dialog({
							type : "alert",
							content : b.responseText,
							autofocus : !0
						})
					}
				}), this.param.dataView.setItems(e.data), this.param.dataView.refresh(), this.loadPageInfo(b, e, d, c), e
		},
		getPageData : function(b, c, d) {
			d.start = (b - 1) * d.limit;
			var e = [];
			return a.ajax({
					url : c,
					type : "POST",
					async : !1,
					contentType : "application/json",
					dataType : "json",
					data : JSON.stringify(d),
					success : function(a) {
						e = a
					},
					error : function(b, c) {
						a.dialog({
							type : "alert",
							content : b.responseText,
							autofocus : !0
						})
					}
				}), this.param.dataView.setItems(e.data), this.param.dataView.refresh(), !1
		},
		loadPageInfo : function(b, c, d, e) {
			var f = this,
				g = c.total;
			a(".currentpage").val(b);
			var h = b,
				i = parseInt(a(".recordsperpage").val()),
				j = (h - 1) * i + 1,
				k = j + i - 1;
			k > g && (k = g), a("#recordsegment").text(j + " 到 " + k + " 条"), a("#totalrecords").text("共 " + g + " 条记录");
			var l = Math.ceil(g / i);
			a("#totalpages").text(l), a(".pagination").pagination(l, {
				num_edge_entries : 1,
				num_display_entries : 4,
				items_per_page : 1,
				callback : function(a, b) {
					f.getPageData(a + 1, e, d)
				}
			})
		}
	}
}(jQuery), function($) {
	$.fn.editgrid = function(a, b, c) {
		var d = $.extend({}, $.fn.editgrid.defaults, c),
			e = new Slick.Grid($(this), a, b, d);
		e.setSelectionModel(new Slick.RowSelectionModel({
			selectActiveRow : d.selectActiveRow
		})), e.registerPlugin(new Slick.AutoTooltips({
			enableForHeaderCells : !0
		})), e.addRow = function(b) {
			var c = a[a.length - 1];
			void 0 != b && (isNaN(b) ? "[object Object]" === Object.prototype.toString.apply(b) && (c = b) : c = a[b]), e.invalidateRow(a.length), a.push(c), e.updateRowCount(), e.render(), e.scrollRowIntoView(a.length)
		}, e.deleteRow = function(a) {
			if (void 0 != a && null != a && "" != a) {
				var b;
				b = isNaN(a) ? a : [ a ];
				var c = e.getData();
				b = b.sort(function(a, b) {
					return a - b
				});
				for (var d = 0, g = 0; g < b.length; g++) c.splice(b[g] - d, 1), d++;
				for (var g = 0; g < b.length; g++)
					delete f[b[g]];
				e.setData(c, !0), e.render()
			}
		}, e.getSerializeData = function() {
			var a = e.getActiveCell();
			null != a && e.gotoCell(a.row, a.cell);
			var b = e.getData();
			return O2String(b)
		};
		var f = new Object;
		return e.onCellChange.subscribe(function(a, b, c) {
				f[b.row] = b.item
			}), e.getChangedSerializeData = function() {
				var a = e.getActiveCell();
				null != a && e.gotoCell(a.row, a.cell);
				var b = [];
				for (key in f) b.push(f[key]);
				return O2String(b)
			}, e.getSelectedDataItems = function() {
				var a = e.getSelectedRows().map(function(a) {
					return e.getDataItem(a)
				});
				return a
			}, e.object2String = function(a) {
				return O2String(a)
			}, e.fold = function() {
				if (c.btnDefs && c.btnDefs.length) {
					var a = e.getData(),
						b = $(e.getCanvasNode()).children();
					b.each(function(b) {
						currentItem = a[b];
						var c = e.format(currentItem).html(),
							d = "<div class='operation'><span class='fa fa-angle-double-left'></span></div>";
						$(".slick-cell:last-child", this).append("<div class='compera'>" + c + d + "</div>").addClass("operCell")
					}), $(".grid-canvas").on("click", ".operation", function() {
						var a = $(this).prev(".operationBtn");
						"none" == a.css("display") ? (a.parent(".compera").addClass("comperabc"), a.show(300)) : (a.parent(".compera").removeClass("comperabc"), a.hide(300))
					})
				}
			}, e.format = function(a) {
				var b = $("<div></div>"),
					d = $('<div class="operationBtn"></div>');
				if (null != c.btnDefs) {
					for (var e = 0; e < c.btnDefs.length; e++) {
						var f = $('<button class="btn ue-btn" type="button">' + c.btnDefs[e].text + "</button>");
						f[0].setAttribute("onclick", c.btnDefs[e].handler + "(" + JSON.stringify(a) + ")"), d.append(f)
					}
					return b.append(d), b
				}
			}, e.fold(), e
	}, $.fn.editgrid.defaults = {
		editable : !0,
		enableAddRow : !1,
		enableCellNavigation : !0,
		asyncEditorLoading : !1,
		autoEdit : !0,
		enableCellNavigation : !0
	};
	var O2String = function(O) {
		if (window.JSON) return eval("var str='" + JSON.stringify(O) + "';"), str;
		var S = [],
			J = "";
		if ("[object String]" === Object.prototype.toString.apply(O))
			J = '"' + O.replace(/\"/g, "'") + '"';
		else if ("[object Array]" === Object.prototype.toString.apply(O)) {
			0 == O.length && (J = "[]");
			for (var i = 0; i < O.length; i++) S.push(O2String(O[i])), J = "[" + S.join(",") + "]"
		} else if ("[object Object]" === Object.prototype.toString.apply(O)) {
			for (var i in O) J = O2String(O[i]), S.push(i + ":" + J);
			J = "{" + S.join(",") + "}"
		} else
			J = O;
		return J
	}
}(jQuery);