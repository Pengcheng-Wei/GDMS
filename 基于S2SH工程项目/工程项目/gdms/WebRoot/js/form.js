function idcard(a, b, c, d) {
	function e(a) {
		var b = 0;
		"x" == a[17].toLowerCase() && (a[17] = 10);
		for (var c = 0; 17 > c; c++) b += h[c] * a[c];
		return valCodePosition = b % 11, a[17] == i[valCodePosition] ? !0 : !1
	}
	function f(a) {
		var b = a.substring(6, 10),
			c = a.substring(10, 12),
			d = a.substring(12, 14),
			e = new Date(b, parseFloat(c) - 1, parseFloat(d));
		return e.getFullYear() != parseFloat(b) || e.getMonth() != parseFloat(c) - 1 || e.getDate() != parseFloat(d) ? !1 : !0
	}
	function g(a) {
		var b = a.substring(6, 8),
			c = a.substring(8, 10),
			d = a.substring(10, 12),
			e = new Date(b, parseFloat(c) - 1, parseFloat(d));
		return e.getYear() != parseFloat(b) || e.getMonth() != parseFloat(c) - 1 || e.getDate() != parseFloat(d) ? !1 : !0
	}
	var h = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ],
		i = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
	if (15 == a.length) return g(a);
	if (18 == a.length) {
		var j = a.split("");
		return f(a) && e(j) ? !0 : !1
	}
	return !1
}
function email(a, b, c, d) {
	var e = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	return e.test(a)
}
!function() {
	function a(b) {
		var d = c[b],
			e = "exports";
		return "object" == typeof d ? d : (d[e] || (d[e] = {}, d[e] = d.call(d[e], a, d[e], d) || d[e]), d[e])
	}
	function b(a, b) {
		c[a] = b
	}
	var c = {};
	b("jquery", function() {
		return jQuery
	}), b("popup", function(a) {
		function b() {
			this.destroyed = !1, this.__popup = c("<div />").css({
				display : "none",
				position : "absolute",
				outline : 0
			}).attr("tabindex", "-1").html(this.innerHTML).appendTo("body"), this.__backdrop = this.__mask = c("<div />").css({
				opacity : .7,
				background : "#000"
			}), this.node = this.__popup[0], this.backdrop = this.__backdrop[0], d++
		}
		var c = a("jquery"),
			d = 0,
			e = !("minWidth" in c("html")[0].style),
			f = !e;
		return c.extend(b.prototype, {
				node : null,
				backdrop : null,
				fixed : !1,
				destroyed : !0,
				open : !1,
				returnValue : "",
				autofocus : !0,
				align : "bottom left",
				innerHTML : "",
				className : "ui-popup",
				show : function(a) {
					if (this.destroyed) return this;
					var d = this.__popup,
						g = this.__backdrop;
					if (this.__activeElement = this.__getActive(), this.open = !0, this.follow = a || this.follow, !this.__ready) {
						if (d.addClass(this.className).attr("role", this.modal ? "alertdialog" : "dialog").css("position", this.fixed ? "fixed" : "absolute"), e || c(window).on("resize", c.proxy(this.reset, this)), this.modal) {
							var h = {
								position : "fixed",
								left : 0,
								top : 0,
								width : "100%",
								height : "100%",
								overflow : "hidden",
								userSelect : "none",
								zIndex : this.zIndex || b.zIndex
							};
							d.addClass(this.className + "-modal"), f || c.extend(h, {
								position : "absolute",
								width : c(window).width() + "px",
								height : c(document).height() + "px"
							}), g.css(h).attr({
								tabindex : "0"
							}).on("focus", c.proxy(this.focus, this)), this.__mask = g.clone(!0).attr("style", "").insertAfter(d), g.addClass(this.className + "-backdrop").insertBefore(d), this.__ready = !0
						}
						d.html() || d.html(this.innerHTML)
					}
					return d.addClass(this.className + "-show").show(), g.show(), this.reset().focus(), this.__dispatchEvent("show"), this
				},
				showModal : function() {
					return this.modal = !0, this.show.apply(this, arguments)
				},
				close : function(a) {
					return !this.destroyed && this.open && (void 0 !== a && (this.returnValue = a), this.__popup.hide().removeClass(this.className + "-show"), this.__backdrop.hide(), this.open = !1, this.blur(), this.__dispatchEvent("close")), this
				},
				remove : function() {
					if (this.destroyed) return this;
					this.__dispatchEvent("beforeremove"), b.current === this && (b.current = null), this.__popup.remove(), this.__backdrop.remove(), this.__mask.remove(), e || c(window).off("resize", this.reset), this.__dispatchEvent("remove");
					for (var a in this)
						delete this[a];
					return this
				},
				reset : function() {
					var a = this.follow;
					return a ? this.__follow(a) : this.__center(), this.__dispatchEvent("reset"), this
				},
				focus : function() {
					var a = this.node,
						d = this.__popup,
						e = b.current,
						f = this.zIndex = b.zIndex++;
					if (e && e !== this && e.blur(!1), !c.contains(a, this.__getActive())) {
						var g = d.find("[autofocus]")[0];
						!this._autofocus && g ? this._autofocus = !0 : g = a, this.__focus(g)
					}
					return d.css("zIndex", f), b.current = this, d.addClass(this.className + "-focus"), this.__dispatchEvent("focus"), this
				},
				blur : function() {
					var a = this.__activeElement,
						b = arguments[0];
					return b !== !1 && this.__focus(a), this._autofocus = !1, this.__popup.removeClass(this.className + "-focus"), this.__dispatchEvent("blur"), this
				},
				addEventListener : function(a, b) {
					return this.__getEventListener(a).push(b), this
				},
				removeEventListener : function(a, b) {
					for (var c = this.__getEventListener(a), d = 0; d < c.length; d++) b === c[d] && c.splice(d--, 1);
					return this
				},
				__getEventListener : function(a) {
					var b = this.__listener;
					return b || (b = this.__listener = {}), b[a] || (b[a] = []), b[a]
				},
				__dispatchEvent : function(a) {
					var b = this.__getEventListener(a);
					this["on" + a] && this["on" + a]();
					for (var c = 0; c < b.length; c++) b[c].call(this)
				},
				__focus : function(a) {
					try {
						this.autofocus && !/^iframe$/i.test(a.nodeName) && a.focus()
					} catch (b) {}
				},
				__getActive : function() {
					try {
						var a = document.activeElement,
							b = a.contentDocument,
							c = b && b.activeElement || a;
						return c
					} catch (d) {}
				},
				__center : function() {
					var a = this.__popup,
						b = c(window),
						d = c(document),
						e = this.fixed,
						f = e ? 0 : d.scrollLeft(),
						g = e ? 0 : d.scrollTop(),
						h = b.width(),
						i = b.height(),
						j = a.width(),
						k = a.height(),
						l = (h - j) / 2 + f,
						m = 382 * (i - k) / 1e3 + g,
						n = a[0].style;
					n.left = Math.max(parseInt(l), f) + "px", n.top = Math.max(parseInt(m), g) + "px"
				},
				__follow : function(a) {
					var b = a.parentNode && c(a),
						d = this.__popup;
					if (this.__followSkin && d.removeClass(this.__followSkin), b) {
						var e = b.offset();
						if (e.left * e.top < 0) return this.__center()
					}
					var f = this,
						g = this.fixed,
						h = c(window),
						i = c(document),
						j = h.width(),
						k = h.height(),
						l = i.scrollLeft(),
						m = i.scrollTop(),
						n = d.width(),
						o = d.height(),
						p = b ? b.outerWidth() : 0,
						q = b ? b.outerHeight() : 0,
						r = this.__offset(a),
						s = r.left,
						t = r.top,
						u = g ? s - l : s,
						v = g ? t - m : t,
						w = g ? 0 : l,
						x = g ? 0 : m,
						y = w + j - n,
						z = x + k - o,
						A = {},
						B = this.align.split(" "),
						C = this.className + "-",
						D = {
							top : "bottom",
							bottom : "top",
							left : "right",
							right : "left"
						},
						E = {
							top : "top",
							bottom : "top",
							left : "left",
							right : "left"
						},
						F = [ {
							top : v - o,
							bottom : v + q,
							left : u - n,
							right : u + p
						}, {
							top : v,
							bottom : v - o + q,
							left : u,
							right : u - n + p
						} ],
						G = {
							left : u + p / 2 - n / 2,
							top : v + q / 2 - o / 2
						},
						H = {
							left : [ w, y ],
							top : [ x, z ]
						};
					c.each(B, function(a, b) {
						F[a][b] > H[E[b]][1] && (b = B[a] = D[b]), F[a][b] < H[E[b]][0] && (B[a] = D[b])
					}), B[1] || (E[B[1]] = "left" === E[B[0]] ? "top" : "left", F[1][B[1]] = G[E[B[1]]]), C += B.join("-") + " " + this.className + "-follow", f.__followSkin = C, b && d.addClass(C), A[E[B[0]]] = parseInt(F[0][B[0]]), A[E[B[1]]] = parseInt(F[1][B[1]]), d.css(A)
				},
				__offset : function(a) {
					var b = a.parentNode,
						d = b ? c(a).offset() : {
							left : a.pageX,
							top : a.pageY
						};
					a = b ? a : a.target;
					var e = a.ownerDocument,
						f = e.defaultView || e.parentWindow;
					if (f == window) return d;
					var g = f.frameElement,
						h = c(e),
						i = h.scrollLeft(),
						j = h.scrollTop(),
						k = c(g).offset(),
						l = k.left,
						m = k.top;
					return {
						left : d.left + l - i,
						top : d.top + m - j
					}
				}
			}), b.zIndex = 1024, b.current = null, b
	}), b("dialog-config", {
		backdropBackground : "#000",
		backdropOpacity : .7,
		content : '<span class="ui-dialog-loading">Loading..</span>',
		title : "",
		statusbar : "",
		button : null,
		ok : null,
		cancel : null,
		okValue : "ok",
		cancelValue : "cancel",
		cancelDisplay : !0,
		width : "",
		height : "",
		padding : "",
		skin : "",
		quickClose : !1,
		cssUri : "../css/ui-dialog.css",
		innerHTML : '<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>'
	}), b("dialog", function(a) {
		var b = a("jquery"),
			c = a("popup"),
			d = a("dialog-config"),
			e = d.cssUri;
		if (e) {
			var f = a[a.toUrl ? "toUrl" : "resolve"];
			f && (e = f(e), e = '<link rel="stylesheet" href="' + e + '" />', b("base")[0] ? b("base").before(e) : b("head").append(e))
		}
		var g = 0,
			h = new Date - 0,
			i = !("minWidth" in b("html")[0].style),
			j = "createTouch" in document && !("onmousemove" in document) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent),
			k = !i && !j,
			l = function(a, c, d) {
				var e = a = a || {};
				("string" == typeof a || 1 === a.nodeType) && (a = {
					content : a,
					fixed : !j
				}), a = b.extend(!0, {}, l.defaults, a), a.original = e;
				var f = a.id = a.id || h + g,
					i = l.get(f);
				return i ? i.focus() : (k || (a.fixed = !1), a.quickClose && (a.modal = !0, a.backdropOpacity = 0), b.isArray(a.button) || (a.button = []), void 0 !== c && (a.ok = c), a.ok && a.button.push({
					id : "ok",
					value : a.okValue,
					callback : a.ok,
					autofocus : !0
				}), void 0 !== d && (a.cancel = d), a.cancel && a.button.push({
					id : "cancel",
					value : a.cancelValue,
					callback : a.cancel,
					display : a.cancelDisplay
				}), l.list[f] = new l.create(a))
			},
			m = function() {};
		m.prototype = c.prototype;
		var n = l.prototype = new m;
		return l.create = function(a) {
				var d = this;
				b.extend(this, new c);
				var e = (a.original, b(this.node).html(a.innerHTML)),
					f = b(this.backdrop);
				return this.options = a, this._popup = e, b.each(a, function(a, b) {
						"function" == typeof d[a] ? d[a](b) : d[a] = b
					}), a.zIndex && (c.zIndex = a.zIndex), e.attr({
						"aria-labelledby" : this._$("title").attr("id", "title:" + this.id).attr("id"),
						"aria-describedby" : this._$("content").attr("id", "content:" + this.id).attr("id")
					}), this._$("close").css("display", this.cancel === !1 ? "none" : "").attr("title", this.cancelValue).on("click", function(a) {
						d._trigger("cancel"), a.preventDefault()
					}), this._$("dialog").addClass(this.skin), this._$("body").css("padding", this.padding), a.quickClose && f.on("onmousedown" in document ? "mousedown" : "click", function() {
						return d._trigger("cancel"), !1
					}), this.addEventListener("show", function() {
						f.css({
							opacity : 0,
							background : a.backdropBackground
						}).animate({
							opacity : a.backdropOpacity
						}, 150)
					}), this._esc = function(a) {
						var b = a.target,
							e = b.nodeName,
							f = /^input|textarea$/i,
							g = c.current === d,
							h = a.keyCode;
						!g || f.test(e) && "button" !== b.type || 27 === h && d._trigger("cancel")
					}, b(document).on("keydown", this._esc), this.addEventListener("remove", function() {
						b(document).off("keydown", this._esc),
						delete l.list[this.id]
					}), g++, l.oncreate(this), this
			}, l.create.prototype = n, b.extend(n, {
				content : function(a) {
					var c = this._$("content");
					return "object" == typeof a ? (a = b(a), c.empty("").append(a.show()), this.addEventListener("beforeremove", function() {
							b("body").append(a.hide())
						})) : c.html(a), this.reset()
				},
				title : function(a) {
					return this._$("title").text(a), this._$("header")[a ? "show" : "hide"](), this
				},
				width : function(a) {
					return this._$("content").css("width", a), this.reset()
				},
				height : function(a) {
					return this._$("content").css("height", a), this.reset()
				},
				button : function(a) {
					a = a || [];
					var c = this,
						d = "",
						e = 0;
					return this.callbacks = {}, "string" == typeof a ? (d = a, e++) : b.each(a, function(a, f) {
							var g = f.id = f.id || f.value,
								h = "";
							c.callbacks[g] = f.callback, f.display === !1 ? h = ' style="display:none"' : e++, d += '<button type="button" i-id="' + g + '"' + h + (f.disabled ? " disabled" : "") + (f.autofocus ? ' autofocus class="ui-dialog-autofocus"' : "") + ">" + f.value + "</button>", c._$("button").on("click", "[i-id=" + g + "]", function(a) {
								var d = b(this);
								d.attr("disabled") || c._trigger(g), a.preventDefault()
							})
						}), this._$("button").html(d), this._$("footer")[e ? "show" : "hide"](), this
				},
				statusbar : function(a) {
					return this._$("statusbar").html(a)[a ? "show" : "hide"](), this
				},
				_$ : function(a) {
					return this._popup.find("[i=" + a + "]")
				},
				_trigger : function(a) {
					var b = this.callbacks[a];
					return "function" != typeof b || b.call(this) !== !1 ? this.close().remove() : this
				}
			}), l.oncreate = b.noop, l.getCurrent = function() {
				return c.current
			}, l.get = function(a) {
				return void 0 === a ? l.list : l.list[a]
			}, l.list = {}, l.defaults = d, l
	}), b("drag", function(a) {
		var b = a("jquery"),
			c = b(window),
			d = b(document),
			e = "createTouch" in document,
			f = document.documentElement,
			g = !("minWidth" in f.style),
			h = !g && "onlosecapture" in f,
			i = "setCapture" in f,
			j = {
				start : e ? "touchstart" : "mousedown",
				over : e ? "touchmove" : "mousemove",
				end : e ? "touchend" : "mouseup"
			},
			k = e ? function(a) {
				return a.touches || (a = a.originalEvent.touches.item(0)), a
			} : function(a) {
				return a
			},
			l = function() {
				this.start = b.proxy(this.start, this), this.over = b.proxy(this.over, this), this.end = b.proxy(this.end, this), this.onstart = this.onover = this.onend = b.noop
			};
		return l.types = j, l.prototype = {
				start : function(a) {
					return a = this.startFix(a), d.on(j.over, this.over).on(j.end, this.end), this.onstart(a), !1
				},
				over : function(a) {
					return a = this.overFix(a), this.onover(a), !1
				},
				end : function(a) {
					return a = this.endFix(a), d.off(j.over, this.over).off(j.end, this.end), this.onend(a), !1
				},
				startFix : function(a) {
					return a = k(a), this.target = b(a.target), this.selectstart = function() {
							return !1
						}, d.on("selectstart", this.selectstart).on("dblclick", this.end), h ? this.target.on("losecapture", this.end) : c.on("blur", this.end), i && this.target[0].setCapture(), a
				},
				overFix : function(a) {
					return a = k(a)
				},
				endFix : function(a) {
					return a = k(a), d.off("selectstart", this.selectstart).off("dblclick", this.end), h ? this.target.off("losecapture", this.end) : c.off("blur", this.end), i && this.target[0].releaseCapture(), a
				}
			}, l.create = function(a, e) {
				var f,
					g,
					h,
					i,
					j = b(a),
					k = new l,
					m = l.types.start,
					n = function() {},
					o = a.className.replace(/^\s|\s.*/g, "") + "-drag-start",
					p = {
						onstart : n,
						onover : n,
						onend : n,
						off : function() {
							j.off(m, k.start)
						}
					};
				return k.onstart = function(b) {
						var e = "fixed" === j.css("position"),
							k = d.scrollLeft(),
							l = d.scrollTop(),
							m = j.width(),
							n = j.height();
						f = 0, g = 0, h = e ? c.width() - m + f : d.width() - m, i = e ? c.height() - n + g : d.height() - n;
						var q = j.offset(),
							r = this.startLeft = e ? q.left - k : q.left,
							s = this.startTop = e ? q.top - l : q.top;
						this.clientX = b.clientX, this.clientY = b.clientY, j.addClass(o), p.onstart.call(a, b, r, s)
					}, k.onover = function(b) {
						var c = b.clientX - this.clientX + this.startLeft,
							d = b.clientY - this.clientY + this.startTop,
							e = j[0].style;
						c = Math.max(f, Math.min(h, c)), d = Math.max(g, Math.min(i, d)), e.left = c + "px", e.top = d + "px", p.onover.call(a, b, c, d)
					}, k.onend = function(b) {
						var c = j.position(),
							d = c.left,
							e = c.top;
						j.removeClass(o), p.onend.call(a, b, d, e)
					}, k.off = function() {
						j.off(m, k.start)
					}, e ? k.start(e) : j.on(m, k.start), p
			}, l
	}), b("dialog-plus", function(a) {
		var b = a("jquery"),
			c = a("dialog"),
			d = a("drag");
		return c.oncreate = function(a) {
				var c,
					e = a.options,
					f = e.original,
					g = e.url,
					h = e.oniframeload;
				if (g && (this.padding = e.padding = 0, c = b("<iframe />"), c.attr({
						src : g,
						name : a.id,
						width : "100%",
						height : "100%",
						allowtransparency : "yes",
						frameborder : "no",
						scrolling : "auto"
					}).on("load", function() {
						var b;
						try {
							b = c[0].contentWindow.frameElement
						} catch (d) {} b && (e.width || a.width(c.contents().width()), e.height || a.height(c.contents().height())), h && h.call(a)
					}), a.addEventListener("beforeremove", function() {
						c.attr("src", "about:blank").remove()
					}, !1), a.content(c[0]), a.iframeNode = c[0]), !(f instanceof Object))
					for (var i = function() {
								a.close().remove()
							}, j = 0; j < frames.length; j++) try {
							if (f instanceof frames[j].Object) {
								b(frames[j]).one("unload", i);break
							}
						} catch (k) {} b(a.node).on(d.types.start, "[i=title]", function(b) {
					a.follow || (a.focus(), d.create(a.node, b))
				})
			}, c.get = function(a) {
				if (a && a.frameElement) {
					var b,
						d = a.frameElement,
						e = c.list;
					for (var f in e)
						if (b = e[f], b.node.getElementsByTagName("iframe")[0] === d) return b
				} else if (a) return c.list[a]
			}, c
	}), window.dialog = a("dialog-plus")
}(), function(a) {
	a.dialog = function(b) {
		var c = a.extend({
				title : "提示",
				okValue : "确定",
				ok : function() {},
				cancelValue : "取消",
				backdropOpacity : .4,
				autofocus : !1
			}, b),
			d = b.type,
			e = !0;
		return "alert" == d ? e ? dialog(c).showModal() : dialog(c).show() : "confirm" == d ? e ? dialog(c).showModal() : dialog(c).show() : "iframe" == d ? e ? dialog(a.extend({
			backdropOpacity : .4
		}, b)).showModal() : dialog(a.extend({
			backdropOpacity : .4
		}, b)).show() : void 0
	}
}(jQuery), function(a) {
	var b = null;
	a.fn.loading = function(c) {
		c = a.extend({
			isShowMask : !1,
			maskColor : "#000",
			maskOpacity : "0.2",
			color : "#fff",
			opacity : "0.2",
			loadingText : "加载中..."
		}, c);
		var d = a(this);
		d.css("position", "relative"), d.append('<div class="ue-loading"></div>');
		var e = a(".ue-loading");
		b = new Spinner(c).spin(e[0]), c.loadingText && d.find(".ue-loading").append('<div class="ue-loading-text">' + c.loadingText + "</div>"), c.isShowMask && d.find(".ue-loading").append('<div class="ue-mask" style="background: ' + c.maskColor + ";opacity: " + c.maskOpacity + ";filter: alpha(opacity=" + 100 * c.maskOpacity + ');"></div>')
	}, a.fn.unloading = function() {
		b.spin(), a(this).find(".ue-mask").remove(), a(this).find(".ue-loading").remove()
	}
}(jQuery), function(a) {
	a.fn.collapse = function(b) {
		b = b || !1;
		var c = a(this);
		a(document).on("click", ".ue-collapse-header", function() {
			var d = a(this),
				e = d.next();
			e.slideToggle(), d.parent().toggleClass("open"), b || c.find(".ue-collapse-body").not(e).slideUp().parent().removeClass("open")
		})
	}
}(jQuery), function(a) {
	"function" == typeof define && define.amd ? define([ "jquery" ], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
	function b(a) {
		return h.raw ? a : encodeURIComponent(a)
	}
	function c(a) {
		return h.raw ? a : decodeURIComponent(a)
	}
	function d(a) {
		return b(h.json ? JSON.stringify(a) : String(a))
	}
	function e(a) {
		0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));try {
			return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
		} catch (b) {}
	}
	function f(b, c) {
		var d = h.raw ? b : e(b);
		return a.isFunction(c) ? c(d) : d
	}
	var g = /\+/g,
		h = a.cookie = function(e, g, i) {
			if (void 0 !== g && !a.isFunction(g)) {
				if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
					var j = i.expires,
						k = i.expires = new Date;
					k.setTime(+k + 864e5 * j)
				}
				return document.cookie = [ b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : "" ].join("")
			}
			for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
				var p = m[n].split("="),
					q = c(p.shift()),
					r = p.join("=");
				if (e && e === q) {
					l = f(r, g);break
				}
				e || void 0 === (r = f(r)) || (l[q] = r)
			}
			return l
		};
	h.defaults = {}, a.removeCookie = function(b, c) {
		return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
			expires : -1
		})), !a.cookie(b))
	}
}), function(a) {
	"use strict";
	var b = '[data-toggle="context"]',
		c = function(b, c) {
			this.$element = a(b), this.before = c.before || this.before, this.onItem = c.onItem || this.onItem, this.scopes = c.scopes || null, c.target && this.$element.data("target", c.target), this.listen()
		};
	c.prototype = {
		constructor : c,
		show : function(b) {
			var c,
				d,
				e,
				f,
				g = {
					relatedTarget : this,
					target : b.currentTarget
				};
			if (!this.isDisabled() && (this.closemenu(), this.before.call(this, b, a(b.currentTarget)) !== !1)) return c = this.getMenu(), c.trigger(d = a.Event("show.bs.context", g)), e = this.getPosition(b, c), f = "li:not(.divider)", c.attr("style", "").css(e).addClass("open").on("click.context.data-api", f, a.proxy(this.onItem, this, a(b.currentTarget))).trigger("shown.bs.context", g), a("html").on("click.context.data-api", c.selector, a.proxy(this.closemenu, this)), !1
		},
		closemenu : function(b) {
			var c,
				d,
				e,
				f;
			c = this.getMenu(), c.hasClass("open") && (f = {
				relatedTarget : this
			}, c.trigger(d = a.Event("hide.bs.context", f)), e = "li:not(.divider)", c.removeClass("open").off("click.context.data-api", e).trigger("hidden.bs.context", f), a("html").off("click.context.data-api", c.selector), b.stopPropagation())
		},
		keydown : function(a) {
			27 == a.which && this.closemenu(a)
		},
		before : function(a) {
			return !0
		},
		onItem : function(a) {
			return !0
		},
		listen : function() {
			this.$element.on("contextmenu.context.data-api", this.scopes, a.proxy(this.show, this)), a("html").on("click.context.data-api", a.proxy(this.closemenu, this)), a("html").on("keydown.context.data-api", a.proxy(this.keydown, this))
		},
		destroy : function() {
			this.$element.off(".context.data-api").removeData("context"), a("html").off(".context.data-api")
		},
		isDisabled : function() {
			return this.$element.hasClass("disabled") || this.$element.attr("disabled")
		},
		getMenu : function() {
			var b,
				c = this.$element.data("target");
			return c || (c = this.$element.attr("href"), c = c && c.replace(/.*(?=#[^\s]*$)/, "")), b = a(c), b && b.length ? b : this.$element.find(c)
		},
		getPosition : function(b, c) {
			var d,
				e,
				f,
				g = b.clientX,
				h = b.clientY,
				i = a(window).width(),
				j = a(window).height(),
				k = c.find(".dropdown-menu").outerWidth(),
				l = c.find(".dropdown-menu").outerHeight(),
				m = {
					position : "absolute",
					"z-index" : 9999
				};
			return d = h + l > j ? {
					top : h - l + a(window).scrollTop()
				} : {
					top : h + a(window).scrollTop()
				}, e = g + k > i && g - k > 0 ? {
					left : g - k + a(window).scrollLeft()
				} : {
					left : g + a(window).scrollLeft()
				}, f = c.offsetParent().offset(), e.left = e.left - f.left, d.top = d.top - f.top, a.extend(m, d, e)
		}
	}, a.fn.contextmenu = function(b, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("context"),
				g = "object" == typeof b && b;
			f || e.data("context", f = new c(e, g)), "string" == typeof b && f[b].call(f, d)
		})
	}, a.fn.contextmenu.Constructor = c, a(document).on("contextmenu.context.data-api", function() {
		a(b).each(function() {
			var b = a(this).data("context");
			b && b.closemenu()
		})
	}).on("contextmenu.context.data-api", b, function(b) {
		a(this).contextmenu("show", b), b.preventDefault(), b.stopPropagation()
	})
}(jQuery), !function(a) {
	"function" == typeof define && define.amd ? define([ "jquery" ], a) : a(jQuery)
}(function(a) {
	a.cxSelect = function(b) {
		var c,
			d,
			e,
			f = {
				dom : {},
				api : {}
			},
			g = function(a) {
				return a && ("function" == typeof HTMLElement || "object" == typeof HTMLElement) && a instanceof HTMLElement ? !0 : a && a.nodeType && 1 === a.nodeType ? !0 : !1
			},
			h = function(a) {
				return a && a.length && ("function" == typeof jQuery || "object" == typeof jQuery) && a instanceof jQuery ? !0 : !1
			},
			i = function(a) {
				return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
			};
		for (d = 0, e = arguments.length; e > d; d++) h(arguments[d]) ? c = arguments[d] : g(arguments[d]) ? c = a(arguments[d]) : "object" == typeof arguments[d] && (b = arguments[d]);
		return c.length < 1 ? void 0 : (f.init = function() {
			var d,
				e = this;
			if (e.dom.box = c, e.settings = a.extend({}, a.cxSelect.defaults, b, {
					url : e.dom.box.data("url"),
					nodata : e.dom.box.data("nodata"),
					required : e.dom.box.data("required"),
					firstTitle : e.dom.box.data("firstTitle"),
					firstValue : e.dom.box.data("firstValue")
				}), e.settings.selects.length) {
				for (e.selectArray = [], e.selectSum = e.settings.selects.length, d = 0; d < e.selectSum && e.dom.box.find("select." + e.settings.selects[d]); d++) e.selectArray.push(e.dom.box.find("select." + e.settings.selects[d]));
				e.selectSum = e.selectArray.length, e.selectSum && ("string" == typeof e.settings.url ? a.getJSON(e.settings.url, function(a) {
					e.dataJson = a, e.buildContent()
				}) : "object" == typeof e.settings.url && (e.dataJson = e.settings.url, e.buildContent()))
			}
		}, f.getIndex = function(a) {
			return this.settings.required ? a : a - 1
		}, f.getNewOptions = function(b, c) {
			var d,
				e,
				f,
				g,
				h;
			return b ? (d = this.settings.firstTitle, e = this.settings.firstValue, f = b.data("firstTitle"), g = b.data("firstValue"), h = "", ("string" == typeof f || "number" == typeof f || "boolean" == typeof f) && (d = f.toString()), ("string" == typeof g || "number" == typeof g || "boolean" == typeof g) && (e = g.toString()), this.settings.required || (h = '<option value="' + e + '">' + d + "</option>"), a.each(c, function(a, b) {
				h += "string" == typeof b.v || "number" == typeof b.v || "boolean" == typeof b.v ? '<option value="' + b.v + '">' + b.n + "</option>" : '<option value="' + b.n + '">' + b.n + "</option>"
			}), h) : void 0
		}, f.buildContent = function() {
			var a,
				b = this;
			b.dom.box.on("change", "select", function() {
				b.selectChange(this.className)
			}), a = b.getNewOptions(b.selectArray[0], b.dataJson), b.selectArray[0].html(a).prop("disabled", !1).trigger("change"), b.setDefaultValue()
		}, f.setDefaultValue = function(a) {
			var b,
				c;
			a = a || 0, b = this, a >= b.selectSum || !b.selectArray[a] || (c = b.selectArray[a].data("value"), ("string" == typeof c || "number" == typeof c || "boolean" == typeof c) && (c = c.toString(), setTimeout(function() {
				b.selectArray[a].val(c).trigger("change"), a++, b.setDefaultValue(a)
			}, 1)))
		}, f.selectChange = function(a) {
			var b,
				c,
				d,
				e,
				f,
				g;
			for (a = a.replace(/ /g, ","), a = "," + a + ",", b = [], g = 0; g < this.selectSum; g++) b.push(this.getIndex(this.selectArray[g].get(0).selectedIndex)), "number" == typeof c && g > c && (this.selectArray[g].empty().prop("disabled", !0), "none" === this.settings.nodata ? this.selectArray[g].css("display", "none") : "hidden" === this.settings.nodata && this.selectArray[g].css("visibility", "hidden")), a.indexOf("," + this.settings.selects[g] + ",") > -1 && (c = g);
			for (d = c + 1, e = this.dataJson, g = 0; d > g; g++) {
				if ("undefined" == typeof e[b[g]] || i(e[b[g]].s) === !1 || !e[b[g]].s.length) return;
				e = e[b[g]].s
			}
			this.selectArray[d] && (f = this.getNewOptions(this.selectArray[d], e), this.selectArray[d].html(f).prop("disabled", !1).css({
				display : "",
				visibility : ""
			}).trigger("change"))
		}, f.init(), this)
	}, a.cxSelect.defaults = {
		selects : [],
		url : null,
		nodata : null,
		required : !1,
		firstTitle : "请选择",
		firstValue : "0"
	}, a.fn.cxSelect = function(b, c) {
		return this.each(function() {
				a.cxSelect(this, b, c)
			}), this
	}
});
var provinceObject = {
		"北京" : {
			"北京市" : [ "东城区", "西城区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县" ]
		},
		"重庆" : {
			"重庆市" : [ "万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "綦江区", "大足区", "渝北区", "巴南区", "黔江区", "长寿区", "江津区", "合川区", "永川区", "南川区", "潼南县", "铜梁县", "荣昌县", "璧山县", "梁平县", "城口县", "丰都县", "垫江县", "武隆县", "忠县", "开县", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县" ]
		},
		"澳门特别行政区" : {
			"澳门半岛" : [ "花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区" ],
			"澳门离岛" : [ "嘉模堂区", "圣方济各堂区" ],
			"无堂区划分区域" : [ "路氹城" ]
		},
		"广东省" : {
			"潮州市" : [ "湘桥区", "潮安县", "饶平县" ],
			"珠海市" : [ "香洲区", "斗门区", "金湾区" ],
			"阳江市" : [ "江城区", "阳西县", "阳东县", "阳春市" ],
			"东莞市" : [ "莞城", "南城", "万江", "东城", "石碣", "石龙", "茶山", "石排", "企石", "横沥", "桥头", "谢岗", "东坑", "常平", "寮步", "大朗", "黄江", "清溪", "塘厦", "凤岗", "长安", "虎门", "厚街", "沙田", "道窖", "洪梅", "麻涌", "中堂", "高埗", "樟木头", "大岭山", "望牛墩" ],
			"茂名市" : [ "茂南区", "茂港区", "电白县", "高州市", "化州市", "信宜市" ],
			"韶关市" : [ "武江区", "浈江区", "曲江区", "始兴县", "仁化县", "翁源县", "乳源瑶族自治县", "新丰县", "乐昌市", "南雄市" ],
			"梅州市" : [ "梅江区", "梅县", "大埔县", "丰顺县", "五华县", "平远县", "蕉岭县", "兴宁市" ],
			"肇庆市" : [ "端州区", "鼎湖区", "广宁县", "怀集县", "封开县", "德庆县", "高要市", "四会市" ],
			"中山市" : [ "东区", "南区", "石岐区", "西区", "五桂山区", "火炬高技术产业开发区", "板芙镇", "大涌镇", "东凤镇", "东升镇", "阜沙镇", "港口镇", "古镇镇", "横栏镇", "黄圃镇", "民众镇", "南朗镇", "南头镇", "三角镇", "三乡镇", "沙溪镇", "神湾镇", "坦洲镇", "小榄镇" ],
			"湛江市" : [ "赤坎区", "霞山区", "坡头区", "麻章区", "遂溪县", "徐闻县", "廉江市", "雷州市", "吴川市" ],
			"清远市" : [ "清城区", "佛冈县", "阳山县", "连山壮族瑶族自治县", "连南瑶族自治县", "清新县", "英德市", "连州市" ],
			"佛山市" : [ "禅城区", "南海区", "顺德区", "三水区", "高明区" ],
			"汕尾市" : [ "城区", "海丰县", "陆河县", "陆丰市" ],
			"广州市" : [ "荔湾区", "越秀区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "萝岗区", "增城市", "从化市" ],
			"惠州市" : [ "惠城区", "惠阳区", "博罗县", "惠东县", "龙门县" ],
			"深圳市" : [ "罗湖区", "福田区", "南山区", "宝安区", "龙岗区", "盐田区" ],
			"汕头市" : [ "龙湖区", "金平区", "濠江区", "潮阳区", "潮南区", "澄海区", "南澳县" ],
			"江门市" : [ "蓬江区", "江海区", "新会区", "台山市", "开平市", "鹤山市", "恩平市" ],
			"云浮市" : [ "云城区", "新兴县", "郁南县", "云安县", "罗定市" ],
			"河源市" : [ "源城区", "紫金县", "龙川县", "连平县", "和平县", "东源县" ],
			"揭阳市" : [ "榕城区", "揭东县", "揭西县", "惠来县", "普宁市" ]
		},
		"天津" : {
			"天津市" : [ "和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "滨海新区", "宁河县", "静海县", "蓟县" ]
		},
		"陕西省" : {
			"渭南市" : [ "临渭区", "华县", "潼关县", "大荔县", "合阳县", "澄城县", "蒲城县", "白水县", "富平县", "韩城市", "华阴市" ],
			"宝鸡市" : [ "渭滨区", "金台区", "陈仓区", "凤翔县", "岐山县", "扶风县", "眉县", "陇县", "千阳县", "麟游县", "凤县", "太白县" ],
			"榆林市" : [ "榆阳区", "神木县", "府谷县", "横山县", "靖边县", "定边县", "绥德县", "米脂县", "佳县", "吴堡县", "清涧县", "子洲县" ],
			"汉中市" : [ "汉台区", "南郑县", "城固县", "洋县", "西乡县", "勉县", "宁强县", "略阳县", "镇巴县", "留坝县", "佛坪县" ],
			"咸阳市" : [ "秦都区", "杨陵区", "渭城区", "三原县", "泾阳县", "乾县", "礼泉县", "永寿县", "彬县", "长武县", "旬邑县", "淳化县", "武功县", "兴平市" ],
			"商洛市" : [ "商州区", "洛南县", "丹凤县", "商南县", "山阳县", "镇安县", "柞水县" ],
			"西安市" : [ "新城区", "碑林区", "莲湖区", "灞桥区", "未央区", "雁塔区", "阎良区", "临潼区", "长安区", "蓝田县", "周至县", "户县", "高陵县" ],
			"安康市" : [ "汉滨区", "汉阴县", "石泉县", "宁陕县", "紫阳县", "岚皋县", "平利县", "镇坪县", "旬阳县", "白河县" ],
			"铜川市" : [ "王益区", "印台区", "耀州区", "宜君县" ],
			"延安市" : [ "宝塔区", "延长县", "延川县", "子长县", "安塞县", "志丹县", "吴起县", "甘泉县", "富县", "洛川县", "宜川县", "黄龙县", "黄陵县" ]
		},
		"河南省" : {
			"三门峡市" : [ "湖滨区", "渑池县", "陕县", "卢氏县", "义马市", "灵宝市" ],
			"洛阳市" : [ "老城区", "西工区", "瀍河回族区", "涧西区", "吉利区", "洛龙区", "孟津县", "新安县", "栾川县", "嵩县", "汝阳县", "宜阳县", "洛宁县", "伊川县", "偃师市" ],
			"周口市" : [ "川汇区", "扶沟县", "西华县", "商水县", "沈丘县", "郸城县", "淮阳县", "太康县", "鹿邑县", "项城市" ],
			"鹤壁市" : [ "鹤山区", "山城区", "淇滨区", "浚县", "淇县" ],
			"安阳市" : [ "文峰区", "北关区", "殷都区", "龙安区", "安阳县", "汤阴县", "滑县", "内黄县", "林州市" ],
			"平顶山市" : [ "新华区", "卫东区", "石龙区", "湛河区", "宝丰县", "叶县", "鲁山县", "郏县", "舞钢市", "汝州市" ],
			"商丘市" : [ "梁园区", "睢阳区", "民权县", "睢县", "宁陵县", "柘城县", "虞城县", "夏邑县", "永城市" ],
			"漯河市" : [ "源汇区", "郾城区", "召陵区", "舞阳县", "临颍县" ],
			"濮阳市" : [ "华龙区", "清丰县", "南乐县", "范县", "台前县", "濮阳县" ],
			"郑州市" : [ "中原区", "二七区", "管城回族区", "金水区", "上街区", "惠济区", "中牟县", "巩义市", "荥阳市", "新密市", "新郑市", "登封市" ],
			"驻马店市" : [ "驿城区", "西平县", "上蔡县", "平舆县", "正阳县", "确山县", "泌阳县", "汝南县", "遂平县", "新蔡县" ],
			"信阳市" : [ "浉河区", "平桥区", "罗山县", "光山县", "新县", "商城县", "固始县", "潢川县", "淮滨县", "息县" ],
			"南阳市" : [ "宛城区", "卧龙区", "南召县", "方城县", "西峡县", "镇平县", "内乡县", "淅川县", "社旗县", "唐河县", "新野县", "桐柏县", "邓州市" ],
			"济源市" : [ "沁园街道", "济水街道", "北海街道", "天坛街道", "玉泉街道", "克井镇", "五龙口镇", "轵城镇", "承留镇", "邵原镇", "坡头镇", "梨林镇", "大峪镇", "思礼镇", "王屋镇", "下冶镇" ],
			"焦作市" : [ "解放区", "中站区", "马村区", "山阳区", "修武县", "博爱县", "武陟县", "温县", "沁阳市", "孟州市" ],
			"许昌市" : [ "魏都区", "许昌县", "鄢陵县", "襄城县", "禹州市", "长葛市" ],
			"新乡市" : [ "红旗区", "卫滨区", "凤泉区", "牧野区", "新乡县", "获嘉县", "原阳县", "延津县", "封丘县", "长垣县", "卫辉市", "辉县市" ],
			"开封市" : [ "龙亭区", "顺河回族区", "鼓楼区", "禹王台区", "金明区", "杞县", "通许县", "尉氏县", "开封县", "兰考县" ]
		},
		"江西省" : {
			"鹰潭市" : [ "月湖区", "余江县", "贵溪市" ],
			"吉安市" : [ "吉州区", "青原区", "吉安县", "吉水县", "峡江县", "新干县", "永丰县", "泰和县", "遂川县", "万安县", "安福县", "永新县", "井冈山市" ],
			"萍乡市" : [ "安源区", "湘东区", "莲花县", "上栗县", "芦溪县" ],
			"九江市" : [ "庐山区", "浔阳区", "九江县", "武宁县", "修水县", "永修县", "德安县", "星子县", "都昌县", "湖口县", "彭泽县", "瑞昌市", "共青城市" ],
			"抚州市" : [ "临川区", "南城县", "黎川县", "南丰县", "崇仁县", "乐安县", "宜黄县", "金溪县", "资溪县", "东乡县", "广昌县" ],
			"南昌市" : [ "东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "南昌县", "新建县", "安义县", "进贤县" ],
			"上饶市" : [ "信州区", "上饶县", "广丰县", "玉山县", "铅山县", "横峰县", "弋阳县", "余干县", "鄱阳县", "万年县", "婺源县", "德兴市" ],
			"新余市" : [ "渝水区", "分宜县" ],
			"景德镇市" : [ "昌江区", "珠山区", "浮梁县", "乐平市" ],
			"赣州市" : [ "章贡区", "赣县", "信丰县", "大余县", "上犹县", "崇义县", "安远县", "龙南县", "定南县", "全南县", "宁都县", "于都县", "兴国县", "会昌县", "寻乌县", "石城县", "瑞金市", "南康市" ],
			"宜春市" : [ "袁州区", "奉新县", "万载县", "上高县", "宜丰县", "靖安县", "铜鼓县", "丰城市", "樟树市", "高安市" ]
		},
		"海南省" : {
			"文昌市" : [ "文城镇", "重兴镇", "蓬莱镇", "会文镇", "东路镇", "潭牛镇", "东阁镇", "文教镇", "东郊镇", "龙楼镇", "昌洒镇", "翁田镇", "抱罗镇", "冯坡镇", "锦山镇", "铺前镇", "公坡镇" ],
			"琼中黎族苗族自治县" : [ "营根镇", "湾岭镇", "黎母山镇", "红毛镇", "长征镇", "中平镇", "和平镇", "什运乡", "上安乡", "吊罗山乡" ],
			"临高县" : [ "临城镇", "波莲镇", "东英镇", "博厚镇", "皇桐镇", "多文镇", "和舍镇", "南宝镇", "新盈镇", "调楼镇", "加来镇" ],
			"澄迈县" : [ "金江镇", "瑞溪镇", "永发镇", "老城镇", "加乐镇", "文儒镇", "福山镇", "桥头镇", "中兴镇", "仁兴镇", "大丰镇" ],
			"三亚市" : [ "海棠区", "吉阳区", "天涯区", "崖州区" ],
			"昌江黎族自治县" : [ "十月田镇", "昌化镇", "石碌镇", "叉河镇", "乌烈镇", "海尾镇", "七叉镇", "王下乡" ],
			"五指山市" : [ "冲山镇", "南圣镇", "毛阳镇", "番阳镇", "水满乡", "畅好乡", "毛道乡" ],
			"白沙黎族自治县" : [ "牙叉镇", "七坊镇", "邦溪镇", "打安镇", "细水乡", "元门乡", "南开乡", "阜龙乡", "青松乡", "金波乡", "荣邦乡" ],
			"海口市" : [ "秀英区", "龙华区", "琼山区", "美兰区" ],
			"屯昌县" : [ "屯城镇", "新兴镇", "枫木镇", "乌坡镇", "南吕镇", "南坤镇", "坡心镇", "西昌镇" ],
			"儋州市" : [ "那大镇", "和庆镇", "南丰镇", "大成镇", "雅星镇", "兰洋镇", "光村镇", "木棠镇", "海头镇", "峨蔓镇", "三都镇", "王五镇", "白马井镇", "中和镇", "排浦镇", "东成镇", "新州镇" ],
			"陵水黎族自治县" : [ "椰林镇", "光坡镇", "三才镇", "英州镇", "隆广镇", "文罗镇", "本号镇", "新村镇", "黎安镇", "提蒙乡", "群英乡" ],
			"万宁市" : [ "三更罗镇", "万城镇", "龙滚镇", "和乐镇", "后安镇", "大茂镇", "东澳镇", "礼纪镇", "长丰镇", "山根镇", "北大镇", "南桥镇" ],
			"乐东黎族自治县" : [ "莺歌海镇", "抱由镇", "万冲镇", "大安镇", "志仲镇", "千家镇", "九所镇", "利国镇", "黄流镇", "佛罗镇", "尖峰镇" ],
			"洋浦经济开发区" : [ "新干冲区", "三都镇" ],
			"定安县" : [ "定城镇", "新竹镇", "龙湖镇", "黄竹镇", "雷鸣镇", "龙门镇", "岭口镇", "翰林镇", "龙河镇", "富文镇" ],
			"东方市" : [ "东河镇", "八所镇", "大田镇", "感城镇", "板桥镇", "三家镇", "四更镇", "新龙镇", "天安乡", "江边乡" ],
			"保亭黎族苗族自治县" : [ "保城镇", "什玲镇", "加茂镇", "响水镇", "新政镇", "三道镇", "六弓乡", "南林乡", "毛感乡" ],
			"三沙市" : [ "西沙群岛", "南沙群岛", "中沙群岛" ],
			"琼海市" : [ "博鳌镇", "嘉积镇", "万泉镇", "石壁镇", "中原镇", "阳江镇", "龙江镇", "潭门镇", "塔洋镇", "长坡镇", "大路镇", "会山镇" ]
		},
		"吉林省" : {
			"松原市" : [ "宁江区", "前郭尔罗斯蒙古族自治县", "长岭县", "乾安县", "扶余县" ],
			"辽源市" : [ "龙山区", "西安区", "东丰县", "东辽县" ],
			"长春市" : [ "南关区", "宽城区", "朝阳区", "二道区", "绿园区", "双阳区", "农安县", "九台市", "榆树市", "德惠市" ],
			"延边朝鲜族自治州" : [ "延吉市", "图们市", "敦化市", "珲春市", "龙井市", "和龙市", "汪清县", "安图县" ],
			"吉林市" : [ "昌邑区", "龙潭区", "船营区", "丰满区", "永吉县", "蛟河市", "桦甸市", "舒兰市", "磐石市" ],
			"通化市" : [ "东昌区", "二道江区", "通化县", "辉南县", "柳河县", "梅河口市", "集安市" ],
			"白城市" : [ "洮北区", "镇赉县", "通榆县", "洮南市", "大安市" ],
			"四平市" : [ "铁西区", "铁东区", "梨树县", "伊通满族自治县", "公主岭市", "双辽市" ],
			"白山市" : [ "浑江区", "江源区", "抚松县", "靖宇县", "长白朝鲜族自治县", "临江市" ]
		},
		"安徽省" : {
			"淮南市" : [ "大通区", "田家庵区", "谢家集区", "八公山区", "潘集区", "凤台县" ],
			"池州市" : [ "贵池区", "东至县", "石台县", "青阳县" ],
			"宿州市" : [ "埇桥区", "砀山县", "萧县", "灵璧县", "泗县" ],
			"安庆市" : [ "迎江区", "大观区", "宜秀区", "怀宁县", "枞阳县", "潜山县", "太湖县", "宿松县", "望江县", "岳西县", "桐城市" ],
			"马鞍山市" : [ "花山区", "雨山区", "博望区", "当涂县", "含山县", "和县" ],
			"合肥市" : [ "瑶海区", "庐阳区", "蜀山区", "包河区", "长丰县", "肥东县", "肥西县", "庐江县", "巢湖市" ],
			"亳州市" : [ "谯城区", "涡阳县", "蒙城县", "利辛县" ],
			"阜阳市" : [ "颍州区", "颍东区", "颍泉区", "临泉县", "太和县", "阜南县", "颍上县", "界首市" ],
			"滁州市" : [ "琅琊区", "南谯区", "来安县", "全椒县", "定远县", "凤阳县", "天长市", "明光市" ],
			"宣城市" : [ "宣州区", "郎溪县", "广德县", "泾县", "绩溪县", "旌德县", "宁国市" ],
			"黄山市" : [ "屯溪区", "黄山区", "徽州区", "歙县", "休宁县", "黟县", "祁门县" ],
			"淮北市" : [ "杜集区", "相山区", "烈山区", "濉溪县" ],
			"六安市" : [ "金安区", "裕安区", "寿县", "霍邱县", "舒城县", "金寨县", "霍山县" ],
			"铜陵市" : [ "铜官山区", "狮子山区", "郊区", "铜陵县" ],
			"蚌埠市" : [ "龙子湖区", "蚌山区", "禹会区", "淮上区", "怀远县", "五河县", "固镇县" ],
			"芜湖市" : [ "镜湖区", "弋江区", "鸠江区", "三山区", "芜湖县", "繁昌县", "南陵县", "无为县" ]
		},
		"河北省" : {
			"秦皇岛市" : [ "海港区", "山海关区", "北戴河区", "青龙满族自治县", "昌黎县", "抚宁县", "卢龙县" ],
			"张家口市" : [ "桥东区", "桥西区", "宣化区", "下花园区", "宣化县", "张北县", "康保县", "沽源县", "尚义县", "蔚县", "阳原县", "怀安县", "万全县", "怀来县", "涿鹿县", "赤城县", "崇礼县" ],
			"保定市" : [ "新市区", "北市区", "南市区", "满城县", "清苑县", "涞水县", "阜平县", "徐水县", "定兴县", "唐县", "高阳县", "容城县", "涞源县", "望都县", "安新县", "易县", "曲阳县", "蠡县", "顺平县", "博野县", "雄县", "涿州市", "定州市", "安国市", "高碑店市" ],
			"唐山市" : [ "路南区", "路北区", "古冶区", "开平区", "丰南区", "丰润区", "曹妃甸区", "滦县", "滦南县", "乐亭县", "迁西县", "玉田县", "遵化市", "迁安市" ],
			"廊坊市" : [ "安次区", "广阳区", "固安县", "永清县", "香河县", "大城县", "文安县", "大厂回族自治县", "霸州市", "三河市" ],
			"沧州市" : [ "新华区", "运河区", "沧县", "青县", "东光县", "海兴县", "盐山县", "肃宁县", "南皮县", "吴桥县", "献县", "孟村回族自治县", "泊头市", "任丘市", "黄骅市", "河间市" ],
			"邯郸市" : [ "邯山区", "丛台区", "复兴区", "峰峰矿区", "邯郸县", "临漳县", "成安县", "大名县", "涉县", "磁县", "肥乡县", "永年县", "邱县", "鸡泽县", "广平县", "馆陶县", "魏县", "曲周县", "武安市" ],
			"衡水市" : [ "桃城区", "枣强县", "武邑县", "武强县", "饶阳县", "安平县", "故城县", "景县", "阜城县", "冀州市", "深州市" ],
			"邢台市" : [ "桥东区", "桥西区", "邢台县", "临城县", "内丘县", "柏乡县", "隆尧县", "任县", "南和县", "宁晋县", "巨鹿县", "新河县", "广宗县", "平乡县", "威县", "清河县", "临西县", "南宫市", "沙河市" ],
			"承德市" : [ "双桥区", "双滦区", "鹰手营子矿区", "承德县", "兴隆县", "平泉县", "滦平县", "隆化县", "丰宁满族自治县", "宽城满族自治县", "围场满族蒙古族自治县" ],
			"石家庄市" : [ "长安区", "桥东区", "桥西区", "新华区", "井陉矿区", "裕华区", "井陉县", "正定县", "栾城县", "行唐县", "灵寿县", "高邑县", "深泽县", "赞皇县", "无极县", "平山县", "元氏县", "赵县", "辛集市", "藁城市", "晋州市", "新乐市", "鹿泉市" ]
		},
		"甘肃省" : {
			"平凉市" : [ "崆峒区", "泾川县", "灵台县", "崇信县", "华亭县", "庄浪县", "静宁县" ],
			"白银市" : [ "白银区", "平川区", "靖远县", "会宁县", "景泰县" ],
			"武威市" : [ "凉州区", "民勤县", "古浪县", "天祝藏族自治县" ],
			"临夏回族自治州" : [ "临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡族自治县", "积石山保安族东乡族撒拉族自治县" ],
			"陇南市" : [ "武都区", "成县", "文县", "宕昌县", "康县", "西和县", "礼县", "徽县", "两当县" ],
			"嘉峪关市" : [ "嘉峪关市" ],
			"张掖市" : [ "甘州区", "肃南裕固族自治县", "民乐县", "临泽县", "高台县", "山丹县" ],
			"天水市" : [ "秦州区", "麦积区", "清水县", "秦安县", "甘谷县", "武山县", "张家川回族自治县" ],
			"甘南藏族自治州" : [ "合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县" ],
			"定西市" : [ "安定区", "通渭县", "陇西县", "渭源县", "临洮县", "漳县", "岷县" ],
			"金昌市" : [ "金川区", "永昌县" ],
			"庆阳市" : [ "西峰区", "庆城县", "环县", "华池县", "合水县", "正宁县", "宁县", "镇原县" ],
			"兰州市" : [ "城关区", "七里河区", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县" ],
			"酒泉市" : [ "肃州区", "金塔县", "瓜州县", "肃北蒙古族自治县", "阿克塞哈萨克族自治县", "玉门市", "敦煌市" ]
		},
		"宁夏回族自治区" : {
			"中卫市" : [ "沙坡头区", "中宁县", "海原县" ],
			"吴忠市" : [ "利通区", "红寺堡区", "盐池县", "同心县", "青铜峡市" ],
			"固原市" : [ "原州区", "西吉县", "隆德县", "泾源县", "彭阳县" ],
			"银川市" : [ "兴庆区", "西夏区", "金凤区", "永宁县", "贺兰县", "灵武市" ],
			"石嘴山市" : [ "大武口区", "惠农区", "平罗县" ]
		},
		"山西省" : {
			"朔州市" : [ "朔城区", "平鲁区", "山阴县", "应县", "右玉县", "怀仁县" ],
			"运城市" : [ "盐湖区", "临猗县", "万荣县", "闻喜县", "稷山县", "新绛县", "绛县", "垣曲县", "夏县", "平陆县", "芮城县", "永济市", "河津市" ],
			"忻州市" : [ "忻府区", "定襄县", "五台县", "代县", "繁峙县", "宁武县", "静乐县", "神池县", "五寨县", "岢岚县", "河曲县", "保德县", "偏关县", "原平市" ],
			"阳泉市" : [ "城区", "矿区", "郊区", "平定县", "盂县" ],
			"晋中市" : [ "榆次区", "榆社县", "左权县", "和顺县", "昔阳县", "寿阳县", "太谷县", "祁县", "平遥县", "灵石县", "介休市" ],
			"长治市" : [ "城区", "郊区", "长治县", "襄垣县", "屯留县", "平顺县", "黎城县", "壶关县", "长子县", "武乡县", "沁县", "沁源县", "潞城市" ],
			"大同市" : [ "城区", "矿区", "南郊区", "新荣区", "阳高县", "天镇县", "广灵县", "灵丘县", "浑源县", "左云县", "大同县" ],
			"晋城市" : [ "城区", "沁水县", "阳城县", "陵川县", "泽州县", "高平市" ],
			"临汾市" : [ "尧都区", "曲沃县", "翼城县", "襄汾县", "洪洞县", "古县", "安泽县", "浮山县", "吉县", "乡宁县", "大宁县", "隰县", "永和县", "蒲县", "汾西县", "侯马市", "霍州市" ],
			"太原市" : [ "小店区", "迎泽区", "杏花岭区", "尖草坪区", "万柏林区", "晋源区", "清徐县", "阳曲县", "娄烦县", "古交市" ],
			"吕梁市" : [ "离石区", "文水县", "交城县", "兴县", "临县", "柳林县", "石楼县", "岚县", "方山县", "中阳县", "交口县", "孝义市", "汾阳市" ]
		},
		"江苏省" : {
			"徐州市" : [ "鼓楼区", "云龙区", "贾汪区", "泉山区", "铜山区", "丰县", "沛县", "睢宁县", "新沂市", "邳州市" ],
			"泰州市" : [ "海陵区", "高港区", "兴化市", "靖江市", "泰兴市", "姜堰市" ],
			"南京市" : [ "玄武区", "白下区", "秦淮区", "建邺区", "鼓楼区", "下关区", "浦口区", "栖霞区", "雨花台区", "江宁区", "六合区", "溧水县", "高淳县" ],
			"常州市" : [ "天宁区", "钟楼区", "戚墅堰区", "新北区", "武进区", "溧阳市", "金坛市" ],
			"镇江市" : [ "京口区", "润州区", "丹徒区", "丹阳市", "扬中市", "句容市" ],
			"宿迁市" : [ "宿城区", "宿豫区", "沭阳县", "泗阳县", "泗洪县" ],
			"苏州市" : [ "姑苏区", "虎丘区", "吴中区", "相城区", "吴江区", "常熟市", "张家港市", "昆山市", "太仓市" ],
			"连云港市" : [ "连云区", "新浦区", "海州区", "赣榆县", "东海县", "灌云县", "灌南县" ],
			"无锡市" : [ "崇安区", "南长区", "北塘区", "锡山区", "惠山区", "滨湖区", "江阴市", "宜兴市" ],
			"盐城市" : [ "亭湖区", "盐都区", "响水县", "滨海县", "阜宁县", "射阳县", "建湖县", "东台市", "大丰市" ],
			"扬州市" : [ "广陵区", "邗江区", "江都市", "宝应县", "仪征市", "高邮市" ],
			"淮安市" : [ "清河区", "淮安区", "淮阴区", "青浦区", "涟水县", "洪泽县", "盱眙县", "金湖县" ],
			"南通市" : [ "崇川区", "港闸区", "通州区", "海安县", "如东县", "启东市", "如皋市", "海门市" ]
		},
		"四川省" : {
			"成都市" : [ "锦江区", "青羊区", "金牛区", "武侯区", "成华区", "龙泉驿区", "青白江区", "新都区", "温江区", "金堂县", "双流县", "郫县", "大邑县", "蒲江县", "新津县", "都江堰市", "彭州市", "邛崃市", "崇州市" ],
			"德阳市" : [ "旌阳区", "中江县", "罗江县", "广汉市", "什邡市", "绵竹市" ],
			"绵阳市" : [ "涪城区", "游仙区", "三台县", "盐亭县", "安县", "梓潼县", "北川羌族自治县", "平武县", "江油市" ],
			"泸州市" : [ "江阳区", "纳溪区", "龙马潭区", "泸县", "合江县", "叙永县", "古蔺县" ],
			"广元市" : [ "利州区", "元坝区", "朝天区", "旺苍县", "青川县", "剑阁县", "苍溪县" ],
			"眉山市" : [ "东坡区", "仁寿县", "彭山县", "洪雅县", "丹棱县", "青神县" ],
			"内江市" : [ "市中区", "东兴区", "威远县", "资中县", "隆昌县" ],
			"攀枝花市" : [ "东区", "西区", "仁和区", "米易县", "盐边县" ],
			"南充市" : [ "顺庆区", "高坪区", "嘉陵区", "南部县", "营山县", "蓬安县", "仪陇县", "西充县", "阆中市" ],
			"乐山市" : [ "市中区", "沙湾区", "五通桥区", "金口河区", "犍为县", "井研县", "夹江县", "沐川县", "峨边彝族自治县", "马边彝族自治县", "峨眉山市" ],
			"雅安市" : [ "雨城区", "名山县", "荥经县", "汉源县", "石棉县", "天全县", "芦山县", "宝兴县" ],
			"阿坝藏族羌族自治州" : [ "汶川县", "理县", "茂县", "松潘县", "九寨沟县", "金川县", "小金县", "黑水县", "马尔康县", "壤塘县", "阿坝县", "若尔盖县", "红原县" ],
			"资阳市" : [ "雁江区", "安岳县", "乐至县", "简阳市" ],
			"凉山彝族自治州" : [ "西昌市", "木里藏族自治县", "盐源县", "德昌县", "会理县", "会东县", "宁南县", "普格县", "布拖县", "金阳县", "昭觉县", "喜德县", "冕宁县", "越西县", "甘洛县", "美姑县", "雷波县" ],
			"自贡市" : [ "自流井区", "贡井区", "大安区", "沿滩区", "荣县", "富顺县" ],
			"甘孜藏族自治州" : [ "康定县", "泸定县", "丹巴县", "九龙县", "雅江县", "道孚县", "炉霍县", "甘孜县", "新龙县", "德格县", "白玉县", "石渠县", "色达县", "理塘县", "巴塘县", "乡城县", "稻城县", "得荣县" ],
			"遂宁市" : [ "船山区", "安居区", "蓬溪县", "射洪县", "大英县" ],
			"广安市" : [ "广安区", "岳池县", "武胜县", "邻水县", "华蓥市" ],
			"宜宾市" : [ "翠屏区", "南溪区", "宜宾县", "江安县", "长宁县", "高县", "珙县", "筠连县", "兴文县", "屏山县" ],
			"巴中市" : [ "巴州区", "通江县", "南江县", "平昌县" ],
			"达州市" : [ "通川区", "达县", "宣汉县", "开江县", "大竹县", "渠县", "万源市" ]
		},
		"福建省" : {
			"福州市" : [ "鼓楼区", "台江区", "仓山区", "马尾区", "晋安区", "闽侯县", "连江县", "罗源县", "闽清县", "永泰县", "平潭县", "福清市", "长乐市" ],
			"厦门市" : [ "思明区", "海沧区", "湖里区", "集美区", "同安区", "翔安区" ],
			"南平市" : [ "延平区", "顺昌县", "浦城县", "光泽县", "松溪县", "政和县", "邵武市", "武夷山市", "建瓯市", "建阳市" ],
			"泉州市" : [ "鲤城区", "丰泽区", "洛江区", "泉港区", "惠安县", "安溪县", "永春县", "德化县", "金门县", "石狮市", "晋江市", "南安市" ],
			"三明市" : [ "梅列区", "三元区", "明溪县", "清流县", "宁化县", "大田县", "尤溪县", "沙县", "将乐县", "泰宁县", "建宁县", "永安市" ],
			"漳州市" : [ "芗城区", "龙文区", "云霄县", "漳浦县", "诏安县", "长泰县", "东山县", "南靖县", "平和县", "华安县", "龙海市" ],
			"龙岩市" : [ "新罗区", "长汀县", "永定县", "上杭县", "武平县", "连城县", "漳平市" ],
			"莆田市" : [ "城厢区", "涵江区", "荔城区", "秀屿区", "仙游县" ],
			"宁德市" : [ "蕉城区", "霞浦县", "古田县", "屏南县", "寿宁县", "周宁县", "柘荣县", "福安市", "福鼎市" ]
		},
		"湖南省" : {
			"岳阳市" : [ "岳阳楼区", "云溪区", "君山区", "岳阳县", "华容县", "湘阴县", "平江县", "汨罗市", "临湘市" ],
			"郴州市" : [ "北湖区", "苏仙区", "桂阳县", "宜章县", "永兴县", "嘉禾县", "临武县", "汝城县", "桂东县", "安仁县", "资兴市" ],
			"衡阳市" : [ "珠晖区", "雁峰区", "石鼓区", "蒸湘区", "南岳区", "衡阳县", "衡南县", "衡山县", "衡东县", "祁东县", "耒阳市", "常宁市" ],
			"怀化市" : [ "鹤城区", "中方县", "沅陵县", "辰溪县", "溆浦县", "会同县", "麻阳苗族自治县", "新晃侗族自治县", "芷江侗族自治县", "靖州苗族侗族自治县", "通道侗族自治县", "洪江市" ],
			"张家界市" : [ "永定区", "武陵源区", "慈利县", "桑植县" ],
			"娄底市" : [ "娄星区", "双峰县", "新化县", "冷水江市", "涟源市" ],
			"湘潭市" : [ "雨湖区", "岳塘区", "湘潭县", "湘乡市", "韶山市" ],
			"常德市" : [ "武陵区", "鼎城区", "安乡县", "汉寿县", "澧县", "临澧县", "桃源县", "石门县", "津市市" ],
			"长沙市" : [ "芙蓉区", "天心区", "岳麓区", "开福区", "雨花区", "望城区", "长沙县", "宁乡县", "浏阳市" ],
			"湘西土家族苗族自治州" : [ "吉首市", "泸溪县", "凤凰县", "花垣县", "保靖县", "古丈县", "永顺县", "龙山县" ],
			"永州市" : [ "零陵区", "冷水滩区", "祁阳县", "东安县", "双牌县", "道县", "江永县", "宁远县", "蓝山县", "新田县", "江华瑶族自治县" ],
			"益阳市" : [ "资阳区", "赫山区", "南县", "桃江县", "安化县", "沅江市" ],
			"邵阳市" : [ "双清区", "大祥区", "北塔区", "邵东县", "新邵县", "邵阳县", "隆回县", "洞口县", "绥宁县", "新宁县", "城步苗族自治县", "武冈市" ],
			"株洲市" : [ "荷塘区", "芦淞区", "石峰区", "天元区", "株洲县", "攸县", "茶陵县", "炎陵县", "醴陵市" ]
		},
		"浙江省" : {
			"杭州市" : [ "上城区", "下城区", "江干区", "拱墅区", "西湖区", "滨江区", "萧山区", "余杭区", "桐庐县", "淳安县", "建德市", "富阳市", "临安市" ],
			"湖州市" : [ "吴兴区", "南浔区", "德清县", "长兴县", "安吉县" ],
			"绍兴市" : [ "越城区", "绍兴县", "新昌县", "诸暨市", "上虞市", "嵊州市" ],
			"温州市" : [ "鹿城区", "龙湾区", "瓯海区", "洞头县", "永嘉县", "平阳县", "苍南县", "文成县", "泰顺县", "瑞安市", "乐清市" ],
			"台州市" : [ "椒江区", "黄岩区", "路桥区", "玉环县", "三门县", "天台县", "仙居县", "温岭市", "临海市" ],
			"舟山市" : [ "定海区", "普陀区", "岱山县", "嵊泗县" ],
			"宁波市" : [ "海曙区", "江东区", "江北区", "北仑区", "镇海区", "鄞州区", "象山县", "宁海县", "余姚市", "慈溪市", "奉化市" ],
			"金华市" : [ "婺城区", "金东区", "武义县", "浦江县", "磐安县", "兰溪市", "义乌市", "东阳市", "永康市" ],
			"丽水市" : [ "莲都区", "青田县", "缙云县", "遂昌县", "松阳县", "云和县", "庆元县", "景宁畲族自治县", "龙泉市" ],
			"嘉兴市" : [ "南湖区", "秀洲区", "嘉善县", "海盐县", "海宁市", "平湖市", "桐乡市" ],
			"衢州市" : [ "柯城区", "衢江区", "常山县", "开化县", "龙游县", "江山市" ]
		},
		"贵州省" : {
			"遵义市" : [ "红花岗区", "汇川区", "遵义县", "桐梓县", "绥阳县", "正安县", "道真仡佬族苗族自治县", "务川仡佬族苗族自治县", "凤冈县", "湄潭县", "余庆县", "习水县", "赤水市", "仁怀市" ],
			"铜仁市" : [ "碧江区", "万山区", "江口县", "玉屏侗族自治县", "石阡县", "思南县", "印江土家族苗族自治县", "德江县", "沿河土家族自治县", "松桃苗族自治县" ],
			"六盘水市" : [ "钟山区", "六枝特区", "水城县", "盘县" ],
			"安顺市" : [ "西秀区", "平坝县", "普定县", "镇宁布依族苗族自治县", "关岭布依族苗族自治县", "紫云苗族布依族自治县" ],
			"黔东南苗族侗族自治州" : [ "凯里市", "黄平县", "施秉县", "三穗县", "镇远县", "岑巩县", "天柱县", "锦屏县", "剑河县", "台江县", "黎平县", "榕江县", "从江县", "雷山县", "麻江县", "丹寨县" ],
			"黔南布依族苗族自治州" : [ "都匀市", "福泉市", "荔波县", "贵定县", "瓮安县", "独山县", "平塘县", "罗甸县", "长顺县", "龙里县", "惠水县", "三都水族自治县" ],
			"贵阳市" : [ "南明区", "云岩区", "花溪区", "乌当区", "白云区", "小河区", "开阳县", "息烽县", "修文县", "清镇市" ],
			"毕节市" : [ "七星关区", "大方县", "黔西县", "金沙县", "织金县", "纳雍县", "威宁彝族回族苗族自治县", "赫章县" ],
			"黔西南布依族苗族自治州" : [ "兴义市", "兴仁县", "普安县", "晴隆县", "贞丰县", "望谟县", "册亨县", "安龙县" ]
		},
		"台湾省" : {
			"基隆市" : [ "仁爱区", "信义区", "中正区", "中山区", "安乐区", "暖暖区", "七堵区" ],
			"高雄市" : [ "新兴区", "前金区", "芩雅区", "盐埕区", "鼓山区", "旗津区", "前镇区", "三民区", "左营区", "楠梓区", "小港区" ],
			"嘉义市" : [ "东区", "西区" ],
			"台南市" : [ "中西区", "东区", "南区", "北区", "安平区", "安南区" ],
			"新竹市" : [ "东区", "北区", "香山区" ],
			"台北市" : [ "中正区", "大同区", "中山区", "松山区", "大安区", "万华区", "信义区", "士林区", "北投区", "内湖区", "南港区", "文山区" ],
			"省直辖" : [ "台北县", "宜兰县", "新竹县", "桃园县", "苗栗县", "台中县", "彰化县", "南投县", "嘉义县", "云林县", "台南县", "高雄县", "屏东县", "台东县", "花莲县", "澎湖县" ],
			"台中市" : [ "中区", "东区", "南区", "西区", "北区", "北屯区", "西屯区", "南屯区" ]
		},
		"辽宁省" : {
			"本溪市" : [ "平山区", "溪湖区", "明山区", "南芬区", "本溪满族自治县", "桓仁满族自治县" ],
			"鞍山市" : [ "铁东区", "铁西区", "立山区", "千山区", "台安县", "岫岩满族自治县", "海城市" ],
			"锦州市" : [ "古塔区", "凌河区", "太和区", "黑山县", "义县", "凌海市", "北镇市" ],
			"大连市" : [ "中山区", "西岗区", "沙河口区", "甘井子区", "旅顺口区", "金州区", "长海县", "瓦房店市", "普兰店市", "庄河市" ],
			"辽阳市" : [ "白塔区", "文圣区", "宏伟区", "弓长岭区", "太子河区", "辽阳县", "灯塔市" ],
			"营口市" : [ "站前区", "西市区", "鲅鱼圈区", "老边区", "盖州市", "大石桥市" ],
			"丹东市" : [ "元宝区", "振兴区", "振安区", "宽甸满族自治县", "东港市", "凤城市" ],
			"朝阳市" : [ "双塔区", "龙城区", "朝阳县", "建平县", "喀喇沁左翼蒙古族自治县", "北票市", "凌源市" ],
			"阜新市" : [ "海州区", "新邱区", "太平区", "清河门区", "细河区", "阜新蒙古族自治县", "彰武县" ],
			"盘锦市" : [ "双台子区", "兴隆台区", "大洼县", "盘山县" ],
			"葫芦岛市" : [ "连山区", "龙港区", "南票区", "绥中县", "建昌县", "兴城市" ],
			"沈阳市" : [ "和平区", "沈河区", "大东区", "皇姑区", "铁西区", "苏家屯区", "东陵区", "沈北新区", "于洪区", "辽中县", "康平县", "法库县", "新民市" ],
			"铁岭市" : [ "银州区", "清河区", "铁岭县", "西丰县", "昌图县", "调兵山市", "开原市" ],
			"抚顺市" : [ "新抚区", "东洲区", "望花区", "顺城区", "抚顺县", "新宾满族自治县", "清原满族自治县" ]
		},
		"山东省" : {
			"淄博市" : [ "淄川区", "张店区", "博山区", "临淄区", "周村区", "桓台县", "高青县", "沂源县" ],
			"滨州市" : [ "滨城区", "惠民县", "阳信县", "无棣县", "沾化县", "博兴县", "邹平县" ],
			"泰安市" : [ "泰山区", "岱岳区", "宁阳县", "东平县", "新泰市", "肥城市" ],
			"烟台市" : [ "芝罘区", "福山区", "牟平区", "莱山区", "长岛县", "龙口市", "莱阳市", "莱州市", "蓬莱市", "招远市", "栖霞市", "海阳市" ],
			"济南市" : [ "历下区", "市中区", "槐荫区", "天桥区", "历城区", "长清区", "平阴县", "济阳县", "商河县", "章丘市" ],
			"临沂市" : [ "兰山区", "罗庄区", "河东区", "沂南县", "郯城县", "沂水县", "苍山县", "费县", "平邑县", "莒南县", "蒙阴县", "临沭县" ],
			"聊城市" : [ "东昌府区", "阳谷县", "莘县", "茌平县", "东阿县", "冠县", "高唐县", "临清市" ],
			"潍坊市" : [ "潍城区", "寒亭区", "坊子区", "奎文区", "临朐县", "昌乐县", "青州市", "诸城市", "寿光市", "安丘市", "高密市", "昌邑市" ],
			"青岛市" : [ "市南区", "市北区", "四方区", "黄岛区", "崂山区", "李沧区", "城阳区", "胶州市", "即墨市", "平度市", "胶南市", "莱西市" ],
			"枣庄市" : [ "市中区", "薛城区", "峄城区", "台儿庄区", "山亭区", "滕州市" ],
			"德州市" : [ "德城区", "陵县", "宁津县", "庆云县", "临邑县", "齐河县", "平原县", "夏津县", "武城县", "乐陵市", "禹城市" ],
			"莱芜市" : [ "莱城区", "钢城区" ],
			"威海市" : [ "环翠区", "文登市", "荣成市", "乳山市" ],
			"东营市" : [ "东营区", "河口区", "垦利县", "利津县", "广饶县" ],
			"济宁市" : [ "市中区", "任城区", "微山县", "鱼台县", "金乡县", "嘉祥县", "汶上县", "泗水县", "梁山县", "曲阜市", "兖州市", "邹城市" ],
			"日照市" : [ "东港区", "岚山区", "五莲县", "莒县" ],
			"菏泽市" : [ "牡丹区", "曹县", "单县", "成武县", "巨野县", "郓城县", "鄄城县", "定陶县", "东明县" ]
		},
		"上海" : {
			"上海市" : [ "黄浦区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "奉贤区", "崇明县" ]
		},
		"新疆维吾尔自治区" : {
			"昌吉回族自治州" : [ "昌吉市", "阜康市", "呼图壁县", "玛纳斯县", "奇台县", "吉木萨尔县", "木垒哈萨克自治县" ],
			"乌鲁木齐市" : [ "天山区", "沙依巴克区", "新市区", "水磨沟区", "头屯河区", "达坂城区", "米东区", "乌鲁木齐县" ],
			"图木舒克市" : [ "齐干却勒街道办事处", "前海街道办事处", "永安坝街道办事处", "兵团四十四团", "兵团四十九团", "兵团五十团", "兵团五十一团", "兵团五十三团", "兵团图木舒克市喀拉拜勒镇", "兵团图木舒克市永安坝" ],
			"和田地区" : [ "和田市", "和田县", "墨玉县", "皮山县", "洛浦县", "策勒县", "于田县", "民丰县" ],
			"克拉玛依市" : [ "独山子区", "克拉玛依区", "白碱滩区", "乌尔禾区" ],
			"塔城地区" : [ "塔城市", "乌苏市", "额敏县", "沙湾县", "托里县", "裕民县", "和布克赛尔蒙古自治县" ],
			"哈密地区" : [ "哈密市", "巴里坤哈萨克自治县", "伊吾县" ],
			"吐鲁番地区" : [ "吐鲁番市", "鄯善县", "托克逊县" ],
			"石河子市" : [ "石河子乡", "新城街道", "向阳街道", "红山街道", "老街街道", "东城街道", "北泉镇" ],
			"喀什地区" : [ "喀什市", "疏附县", "疏勒县", "英吉沙县", "泽普县", "莎车县", "叶城县", "麦盖提县", "岳普湖县", "麦盖提县", "伽师县", "巴楚县", "塔什库尔干塔吉克自治县" ],
			"阿克苏地区" : [ "阿克苏市", "温宿县", "库车县", "沙雅县", "新和县", "拜城县", "乌什县", "阿瓦提县", "柯坪县" ],
			"巴音郭楞蒙古自治州" : [ "库尔勒市", "轮台县", "尉犁县", "若羌县", "且末县", "焉耆回族自治县", "和静县", "和硕县", "博湖县" ],
			"克孜勒苏柯尔克孜自治州" : [ "阿图什市", "阿克陶县", "阿合奇县", "乌恰县" ],
			"阿勒泰地区" : [ "阿勒泰市", "布尔津县", "富蕴县", "福海县", "哈巴河县", "青河县", "吉木乃县" ],
			"阿拉尔市" : [ "幸福路街道", "金银川路街道", "青松路街道", "南口街道", "托喀依乡", "金银川镇" ],
			"伊犁哈萨克自治州" : [ "伊宁市", "奎屯市", "伊宁县", "察布查尔锡伯自治县", "霍城县", "巩留县", "新源县", "昭苏县", "特克斯县", "尼勒克县" ],
			"五家渠市" : [ "军垦路街道", "青湖路街道", "人民路街道", "101团（拟设铁牛镇）", "102团（梧桐镇）", "103团（蔡家湖镇）" ],
			"博尔塔拉蒙古自治州" : [ "博乐市", "精河县", "温泉县" ]
		},
		"内蒙古自治区" : {
			"阿拉善盟" : [ "阿拉善左旗", "阿拉善右旗", "额济纳旗" ],
			"巴彦淖尔市" : [ "临河区", "五原县", "磴口县", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "杭锦后旗" ],
			"包头市" : [ "东河区", "昆都仑区", "青山区", "石拐区", "白云鄂博矿区", "九原区", "土默特右旗", "固阳县", "达尔罕茂明安联合旗" ],
			"鄂尔多斯市" : [ "东胜区", "达拉特旗", "准格尔旗", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗" ],
			"乌海市" : [ "海勃湾区", "海南区", "乌达区" ],
			"通辽市" : [ "科尔沁区", "科尔沁左翼中旗", "科尔沁左翼后旗", "开鲁县", "库伦旗", "奈曼旗", "扎鲁特旗", "霍林郭勒市" ],
			"兴安盟" : [ "乌兰浩特市", "阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "扎赉特旗", "突泉县" ],
			"呼和浩特市" : [ "新城区", "回民区", "玉泉区", "赛罕区", "土默特左旗", "托克托县", "和林格尔县", "清水河县", "武川县" ],
			"呼伦贝尔市" : [ "海拉尔区", "阿荣旗", "莫力达瓦达斡尔族自治旗", "鄂伦春自治旗", "鄂温克族自治旗", "陈巴尔虎旗", "新巴尔虎左旗", "新巴尔虎右旗", "满洲里市", "牙克石市", "扎兰屯市", "额尔古纳市", "根河市" ],
			"锡林郭勒盟" : [ "二连浩特市", "锡林浩特市", "阿巴嘎旗", "苏尼特左旗", "苏尼特右旗", "东乌珠穆沁旗", "西乌珠穆沁旗", "太仆寺旗", "镶黄旗", "正镶白旗", "正蓝旗", "多伦县" ],
			"乌兰察布市" : [ "集宁区", "卓资县", "化德县", "商都县", "兴和县", "凉城县", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "四子王旗", "丰镇市" ],
			"赤峰市" : [ "红山区", "元宝山区", "松山区", "阿鲁科尔沁旗", "巴林左旗", "巴林右旗", "林西县", "克什克腾旗", "翁牛特旗", "喀喇沁旗", "宁城县", "敖汉旗" ]
		},
		"西藏自治区" : {
			"林芝地区" : [ "林芝县", "工布江达县", "米林县", "墨脱县", "波密县", "察隅县", "朗县" ],
			"昌都地区" : [ "昌都县", "江达县", "贡觉县", "类乌齐县", "丁青县", "察雅县", "八宿县", "左贡县", "芒康县", "洛隆县", "边坝县" ],
			"阿里地区" : [ "普兰县", "札达县", "噶尔县", "日土县", "革吉县", "改则县", "措勤县" ],
			"日喀则地区" : [ "日喀则市", "南木林县", "江孜县", "定日县", "萨迦县", "拉孜县", "昂仁县", "谢通门县", "白朗县", "仁布县", "康马县", "定结县", "仲巴县", "亚东县", "吉隆县", "聂拉木县", "萨嘎县", "岗巴县" ],
			"那曲地区" : [ "那曲县", "嘉黎县", "比如县", "聂荣县", "安多县", "申扎县", "索县", "班戈县", "巴青县", "尼玛县" ],
			"拉萨市" : [ "城关区", "林周县", "当雄县", "尼木县", "曲水县", "堆龙德庆县", "达孜县", "墨竹工卡县" ],
			"山南地区" : [ "乃东县", "扎囊县", "贡嘎县", "桑日县", "琼结县", "曲松县", "措美县", "洛扎县", "加查县", "隆子县", "错那县", "浪卡子县" ]
		},
		"香港特别行政区" : {
			"九龙" : [ "油尖旺区", "深水埗区", "九龙城区", "黄大仙区", "观塘区" ],
			"香港岛" : [ "中西区", "湾仔区", "东区", "南区" ],
			"新界" : [ "北区", "大埔区", "沙田区", "西贡区", "荃湾区", "屯门区", "元朗区", "葵青区", "离岛区" ]
		},
		"广西壮族自治区" : {
			"钦州市" : [ "钦南区", "钦北区", "灵山县", "浦北县" ],
			"贵港市" : [ "港北区", "港南区", "覃塘区", "平南县", "桂平市" ],
			"柳州市" : [ "城中区", "鱼峰区", "柳南区", "柳北区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县" ],
			"防城港市" : [ "港口区", "防城区", "上思县", "东兴市" ],
			"来宾市" : [ "兴宾区", "忻城县", "象州县", "武宣县", "金秀瑶族自治县", "合山市" ],
			"河池市" : [ "金城江区", "南丹县", "天峨县", "凤山县", "东兰县", "罗城仫佬族自治县", "环江毛南族自治县", "巴马瑶族自治县", "都安瑶族自治县", "大化瑶族自治县", "宜州市" ],
			"贺州市" : [ "八步区", "平桂管理区", "昭平县", "钟山县", "富川瑶族自治县" ],
			"百色市" : [ "右江区", "田阳县", "田东县", "平果县", "德保县", "靖西县", "那坡县", "凌云县", "乐业县", "田林县", "西林县", "隆林各族自治县" ],
			"崇左市" : [ "江洲区", "扶绥县", "宁明县", "龙州县", "大新县", "天等县", "凭祥市" ],
			"桂林市" : [ "秀峰区", "叠彩区", "象山区", "七星区", "雁山区", "阳朔县", "临桂县", "灵川县", "全州县", "兴安县", "永福县", "灌阳县", "龙胜各族自治县", "资源县", "平乐县", "荔蒲县", "恭城瑶族自治县" ],
			"玉林市" : [ "玉州区", "容县", "陆川县", "博白县", "兴业县", "北流市" ],
			"梧州市" : [ "万秀区", "蝶山区", "长洲区", "苍梧县", "藤县", "蒙山县", "岑溪市" ],
			"南宁市" : [ "兴宁区", "青秀区", "江南区", "西乡塘区", "良庆区", "邕宁区", "武鸣县", "隆安县", "马山县", "上林县", "宾阳县", "横县" ],
			"北海市" : [ "海城区", "银海区", "铁山港区", "合浦县" ]
		},
		"湖北省" : {
			"鄂州市" : [ "梁子湖区", "华容区", "鄂城区" ],
			"仙桃市" : [ "干河街道（高新技术产业园）", "龙华山街道", "沙嘴街道", "郑场镇", "毛嘴镇", "剅河镇", "三伏潭镇", "胡场镇", "长埫口镇", "西流河镇（化工产业园）", "彭场镇（彭场工业园）", "沙湖镇", "杨林尾镇", "张沟镇", "郭河镇", "沔城回族镇", "通海口镇", "陈场镇", "仙桃经济开发区", "仙桃工业园", "沙湖原种场", "九合垸原种场", "排湖风景区" ],
			"黄冈市" : [ "黄州区", "团风县", "红安县", "罗田县", "英山县", "浠水县", "蕲春县", "黄梅县", "麻城市", "武穴市" ],
			"荆州市" : [ "沙市区", "荆州区", "公安县", "监利县", "江陵县", "石首市", "洪湖市", "松滋市" ],
			"随州市" : [ "曾都区", "随县", "广水市" ],
			"黄石市" : [ "黄石港区", "西塞山区", "下陆区", "铁山区", "阳新县", "大冶市" ],
			"潜江市" : [ "园林办事处", "广华办事处", "杨市办事处", "周矶办事处", "泽口办事处", "泰丰办事处", "高场办事处", "熊口镇", "竹根滩镇", "高石碑镇", "老新镇", "王场镇", "渔洋镇", "龙湾镇", "浩口镇", "积玉口镇", "张金镇", "白鹭湖管理区", "总口管理区", "熊口农场管理区", "运粮湖管理区", "后湖管理区", "周矶管理区", "潜江开发区" ],
			"襄阳市" : [ "襄城区", "樊城区", "襄州区", "南漳县", "谷城县", "保康县", "老河口市", "枣阳市", "宜城市" ],
			"神农架林区" : [ "松柏镇", "阳日镇", "木鱼镇", "红坪镇", "新华镇", "宋洛乡", "九湖乡", "下谷坪土家族乡" ],
			"孝感市" : [ "孝南区", "孝昌县", "大悟县", "云梦县", "应城市", "安陆市", "汉川市" ],
			"恩施土家族苗族自治州" : [ "恩施市", "利川市", "建始县", "巴东县", "宣恩县", "咸丰县", "来凤县", "鹤峰县" ],
			"武汉市" : [ "江岸区", "江汉区", "硚口区", "汉阳区", "武昌区", "青山区", "洪山区", "东西湖区", "汉南区", "蔡甸区", "江夏区", "黄陂区", "新洲区" ],
			"荆门市" : [ "东宝区", "掇刀区", "京山县", "沙洋县", "钟祥市" ],
			"宜昌市" : [ "西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "远安县", "兴山县", "秭归县", "长阳土家族自治县", "五峰土家族自治县", "宜都市", "当阳市", "枝江市" ],
			"天门市" : [ "竟陵", "杨林", "侯口（天门经济开发区）", "多宝", "拖市", "张港", "蒋场", "汪场", "渔薪", "黄潭", "岳口", "横林", "彭市", "麻洋", "干驿", "马湾", "卢市", "小板", "九真", "皂市", "胡市", "石河", "佛子山", "净潭", "国营蒋湖农场", "天门工业园", "白茅湖棉花原种场" ],
			"咸宁市" : [ "咸安区", "嘉鱼县", "通城县", "崇阳县", "通山县", "赤壁市" ],
			"十堰市" : [ "茅箭区", "张湾区", "郧县", "郧西县", "竹山县", "竹溪县", "房县", "丹江口市" ]
		},
		"黑龙江省" : {
			"齐齐哈尔市" : [ "龙沙区", "建华区", "铁锋区", "昂昂溪区", "富拉尔基区", "碾子山区", "梅里斯达斡尔族区", "龙江县", "依安县", "泰来县", "甘南县", "富裕县", "克山县", "克东县", "拜泉县", "讷河市" ],
			"大兴安岭地区" : [ "加格达奇区", "松岭区", "新林区", "呼中区", "呼玛县", "塔河县", "漠河县" ],
			"绥化市" : [ "北林区", "望奎县", "兰西县", "青冈县", "庆安县", "明水县", "绥棱县", "安达市", "肇东市", "海伦市" ],
			"伊春市" : [ "伊春区", "南岔区", "友好区", "西林区", "翠峦区", "新青区", "美溪区", "金山屯区", "五营区", "乌马河区", "汤旺河区", "带岭区", "乌伊岭区", "红星区", "上甘岭区", "嘉荫县", "铁力市" ],
			"双鸭山市" : [ "尖山区", "岭东区", "四方台区", "宝山区", "集贤县", "友谊县", "宝清县", "饶河县" ],
			"佳木斯市" : [ "向阳区", "前进区", "东风区", "郊区", "桦南县", "桦川县", "汤原县", "抚远县", "同江市", "富锦市" ],
			"七台河市" : [ "新兴区", "桃山区", "茄子河区", "勃利县" ],
			"哈尔滨市" : [ "道里区", "南岗区", "道外区", "平房区", "松北区", "香坊区", "呼兰区", "阿城区", "依兰县", "方正县", "宾县", "巴彦县", "木兰县", "通河县", "延寿县", "双城市", "尚志市", "五常市" ],
			"大庆市" : [ "萨尔图区", "龙凤区", "让胡路区", "红岗区", "大同区", "肇州县", "肇源县", "林甸县", "杜尔伯特蒙古族自治县" ],
			"牡丹江市" : [ "东安区", "阳明区", "爱民区", "西安区", "东宁县", "林口县", "绥芬河市", "海林市", "宁安市", "穆棱市" ],
			"鹤岗市" : [ "向阳区", "工农区", "南山区", "兴安区", "东山区", "兴山区", "萝北县", "绥滨县" ],
			"黑河市" : [ "爱辉区", "嫩江县", "逊克县", "孙吴县", "北安市", "五大连池市" ],
			"鸡西市" : [ "鸡冠区", "恒山区", "滴道区", "梨树区", "城子河区", "麻山区", "鸡东县", "虎林市", "密山市" ]
		},
		"云南省" : {
			"临沧市" : [ "临翔区", "凤庆县", "云县", "永德县", "镇康县", "双江拉祜族佤族布朗族傣族自治县", "耿马傣族佤族自治县", "沧源佤族自治县" ],
			"怒江傈僳族自治州" : [ "泸水县", "福贡县", "贡山独龙族怒族自治县", "兰坪白族普米族自治县" ],
			"保山市" : [ "隆阳区", "施甸县", "腾冲县", "龙陵县", "昌宁县" ],
			"德宏傣族景颇族自治州" : [ "瑞丽市", "芒市", "梁河县", "盈江县", "陇川县" ],
			"楚雄彝族自治州" : [ "楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县" ],
			"玉溪市" : [ "红塔区", "江川县", "澄江县", "通海县", "华宁县", "易门县", "峨山彝族自治县", "新平彝族傣族自治县", "元江哈尼族彝族傣族自治县" ],
			"曲靖市" : [ "麒麟区", "马龙县", "陆良县", "师宗县", "罗平县", "富源县", "会泽县", "沾益县", "宣威市" ],
			"昆明市" : [ "五华区", "盘龙区", "官渡区", "西山区", "东川区", "呈贡区", "晋宁县", "富民县", "宜良县", "石林彝族自治县", "嵩明县", "禄劝彝族苗族自治县", "寻甸回族彝族自治县", "安宁市" ],
			"迪庆藏族自治州" : [ "香格里拉县", "德钦县", "维西傈僳族自治县" ],
			"文山壮族苗族自治州" : [ "文山市", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县" ],
			"普洱市" : [ "思茅区", "宁洱哈尼族彝族自治县", "墨江哈尼族自治县", "景东彝族自治县", "景谷傣族彝族自治县", "镇沅彝族哈尼族拉祜族自治县", "江城哈尼族彝族自治县", "孟连傣族拉祜族佤族自治县", "澜沧拉祜族自治县", "西盟佤族自治县" ],
			"大理白族自治州" : [ "大理市", "漾濞彝族自治县", "祥云县", "宾川县", "弥渡县", "南涧彝族自治县", "巍山彝族回族自治县", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县" ],
			"红河哈尼族彝族自治州" : [ "个旧市", "开远市", "蒙自市", "屏边苗族自治县", "建水县", "石屏县", "弥勒县", "泸西县", "元阳县", "红河县", "金平苗族瑶族傣族自治县", "绿春县", "河口瑶族自治县" ],
			"昭通市" : [ "昭阳区", "鲁甸县", "巧家县", "盐津县", "大关县", "永善县", "绥江县", "镇雄县", "彝良县", "威信县", "水富县" ],
			"丽江市" : [ "古城区", "玉龙纳西族自治县", "永胜县", "华坪县", "宁蒗彝族自治县" ],
			"西双版纳傣族自治州" : [ "景洪市", "勐海县", "勐腊县" ]
		},
		"青海省" : {
			"海南藏族自治州" : [ "共和县", "同德县", "贵德县", "兴海县", "贵南县" ],
			"西宁市" : [ "城东区", "城中区", "城西区", "城北区", "大通回族土族自治县", "湟中县", "湟源县" ],
			"玉树藏族自治州" : [ "玉树县", "杂多县", "称多县", "治多县", "囊谦县", "曲麻莱县" ],
			"海西蒙古族藏族自治州" : [ "格尔木市", "德令哈市", "乌兰县", "都兰县", "天峻县" ],
			"海北藏族自治州" : [ "门源回族自治县", "祁连县", "海晏县", "刚察县" ],
			"黄南藏族自治州" : [ "同仁县", "尖扎县", "泽库县", "河南蒙古族自治县" ],
			"海东地区" : [ "平安县", "民和回族土族自治县", "乐都县", "互助土族自治县", "化隆回族自治县", "循化撒拉族自治县" ],
			"果洛藏族自治州" : [ "玛沁县", "班玛县", "甘德县", "达日县", "久治县", "玛多县" ]
		}
	},
	provinceObjectDiv = '<div><div class="dropdown-menu ue-procity-menu">  <div class="ue-procity-nav"><span class="hover" idx="1">省份</span><span idx="2">城市</span><span idx="3">区县</span><span idx="4">清空</span></div>  <div class="province">   <div class="ue-procity-progroup">     <div class="ue-procity-az">A-G</div>     <div class="ue-procity-proname"><P>安徽</P><P>澳门</P><P>北京</P><P>重庆</P><P>福建</P><P>甘肃</P><P>广东</P><P>广西</P><P>贵州</P>     </div>   </div>   <div class="ue-procity-progroup">     <div class="ue-procity-az">H-K</div>     <div class="ue-procity-proname"><P>海南</P><P>河北</P><P>河南</P><P>黑龙江</P><P>湖北</P><P>湖南</P><P>吉林</P><P>江苏</P><P>江西</P>     </div>   </div>   <div class="ue-procity-progroup">     <div class="ue-procity-az">L-S</div>     <div class="ue-procity-proname"><P>辽宁</P><P>内蒙古</P><P>宁夏</P><P>青海</P><P>山东</P><P>山西</P><P>陕西</P><P>上海</P><P>四川</P>     </div>   </div>   <div class="ue-procity-progroup">     <div class="ue-procity-az">T-Z</div>     <div class="ue-procity-proname"><P>天津</P><P>台湾</P><P>香港</P><P>西藏</P><P>新疆</P><P>云南</P><P>浙江</P>     </div>   </div> </div> <div class="city" style="display: none;">   <div class="ue-procity-progroup">     <div class="ue-procity-proname" style="width:100%;padding-left: 5px;">     </div>   </div> </div> <div class="area" style="display: none;">    <div class="ue-procity-progroup">     <div class="ue-procity-proname" style="width:100%;padding-left: 5px;">     </div>   </div> </div></div></div>';
!function(a) {
	a.fn.proCity = function() {
		var b = null,
			c = null;
		c = a(this), c.parent().append(a(provinceObjectDiv).html()).closest("div").css("overflow", "visible");
		var b = c.parent().children(".ue-procity-menu");
		c.click(function(d) {
			var e = a(this);
			c && e.offset().top != c.offset().top && b.is(":visible") && b.hide(), b.toggle(), c = a(this)
		}), b.on("click", ".ue-procity-nav span", function(d) {
			var e = a(this).attr("idx");
			a(this).parent().find("span").removeClass("hover"), b.find(".province").css("display", "none"), b.find(".city").css("display", "none"), b.find(".area").css("display", "none"), 1 == e ? (a(this).addClass("hover"), b.find(".province").css("display", "block")) : 2 == e ? (a(this).addClass("hover"), b.find(".city").css("display", "block")) : 3 == e ? (a(this).addClass("hover"), b.find(".area").css("display", "block")) : 4 == e && (a(this).addClass("hover"), c.val("请选择城市"), c.attr("请选择城市"), c.trigger("click"), b.find(".ue-procity-nav span[idx=1]").trigger("click"))
		});
		var d = "",
			e = "",
			f = {
				"北京" : "北京",
				"天津" : "天津",
				"内蒙古" : "内蒙古自治区",
				"上海" : "上海",
				"广西" : "广西壮族自治区",
				"重庆" : "重庆",
				"西藏" : "西藏自治区",
				"宁夏" : "宁夏回族自治区",
				"新疆" : "新疆维吾尔自治区",
				"香港" : "香港特别行政区",
				"澳门" : "澳门特别行政区"
			};
		b.on("click", ".province .ue-procity-proname p", function(e) {
			var g = a(this).text();
			f[g] ? g = f[g] : g += "省", d = g;
			var h = "";
			a.each(provinceObject[g], function(a) {
				h += "<p style='width:auto;padding-right: 6px;'>" + a + "</p>"
			});
			var i = b.find(".city .ue-procity-progroup .ue-procity-proname");
			i.html(""), a(h).appendTo(i), b.find(".ue-procity-nav span[idx=2]").trigger("click"), c.val(d + "-"), c.attr("title", c.val())
		}), b.on("click", ".city .ue-procity-proname p", function(f) {
			var g = a(this).text();
			e = g;
			var h = "";
			a.each(provinceObject[d][g], function(a, b) {
				h += "<p style='width:auto;padding-right: 6px;'>" + b + "</p>"
			});
			var i = b.find(".area .ue-procity-progroup .ue-procity-proname");
			i.html(""), a(h).appendTo(i), b.find(".ue-procity-nav span[idx=3]").trigger("click"), c.val(d + "-" + e + "-"), c.attr("title", c.val())
		}), b.on("click", ".area .ue-procity-proname p", function(b) {
			var f = a(this).text();
			c.val(d + "-" + e + "-" + f), c.attr("title", c.val()), c.trigger("click")
		}), a(".wrapper").off("keypress", ".addr_city_detail").on("keypress", ".addr_city_detail", function(a) {
			var b = new RegExp("[,]"),
				c = "undefined" != typeof a.charCode ? a.charCode : a.keyCode,
				d = String.fromCharCode(c);
			return b.test(d) ? void a.preventDefault() : void 0
		}).off("blur", ".addr_city_detail").on("blur", ".addr_city_detail", function() {
			var b = a(this).val();
			-1 != b.indexOf(",") && a(this).val(b.replace(/,/g, ""))
		})
	}
}(jQuery), !function(a) {
	function b() {
		return new Date(Date.UTC.apply(Date, arguments))
	}
	var c = function(b, c) {
		var d = this;
		this.element = a(b), this.container = c.container || "body", this.language = c.language || this.element.data("date-language") || "en", this.language = this.language in e ? this.language : "en", this.isRTL = e[this.language].rtl || !1, this.formatType = c.formatType || this.element.data("format-type") || "standard", this.format = f.parseFormat(c.format || this.element.data("date-format") || e[this.language].format || f.getDefaultFormat(this.formatType, "input"), this.formatType), this.isInline = !1, this.isVisible = !1, this.isInput = this.element.is("input"), this.fontAwesome = c.fontAwesome || this.element.data("font-awesome") || !1, this.bootcssVer = c.bootcssVer || (this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2), this.component = this.element.is(".date") ? 3 == this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar .fa-calendar .fa-clock-o").parent() : !1, this.componentReset = this.element.is(".date") ? 3 == this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent() : this.element.find(".add-on .icon-remove, .add-on .fa-times").parent() : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.linkField = c.linkField || this.element.data("link-field") || !1, this.linkFormat = f.parseFormat(c.linkFormat || this.element.data("link-format") || f.getDefaultFormat(this.formatType, "link"), this.formatType), this.minuteStep = c.minuteStep || this.element.data("minute-step") || 5, this.pickerPosition = c.pickerPosition || this.element.data("picker-position") || "bottom-right", this.showMeridian = c.showMeridian || this.element.data("show-meridian") || !1, this.initialDate = c.initialDate || new Date, this.zIndex = c.zIndex || this.element.data("z-index") || void 0, this.icons = {
			leftArrow : this.fontAwesome ? "fa-arrow-left" : 3 === this.bootcssVer ? "glyphicon-arrow-left" : "icon-arrow-left",
			rightArrow : this.fontAwesome ? "fa-arrow-right" : 3 === this.bootcssVer ? "glyphicon-arrow-right" : "icon-arrow-right"
		}, this.icontype = this.fontAwesome ? "fa" : "glyphicon", this._attachEvents(), this.formatViewType = "datetime", "formatViewType" in c ? this.formatViewType = c.formatViewType : "formatViewType" in this.element.data() && (this.formatViewType = this.element.data("formatViewType")), this.minView = 0, "minView" in c ? this.minView = c.minView : "minView" in this.element.data() && (this.minView = this.element.data("min-view")), this.minView = f.convertViewMode(this.minView), this.maxView = f.modes.length - 1, "maxView" in c ? this.maxView = c.maxView : "maxView" in this.element.data() && (this.maxView = this.element.data("max-view")), this.maxView = f.convertViewMode(this.maxView), this.wheelViewModeNavigation = !1, "wheelViewModeNavigation" in c ? this.wheelViewModeNavigation = c.wheelViewModeNavigation : "wheelViewModeNavigation" in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")), this.wheelViewModeNavigationInverseDirection = !1, "wheelViewModeNavigationInverseDirection" in c ? this.wheelViewModeNavigationInverseDirection = c.wheelViewModeNavigationInverseDirection : "wheelViewModeNavigationInverseDirection" in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")), this.wheelViewModeNavigationDelay = 100, "wheelViewModeNavigationDelay" in c ? this.wheelViewModeNavigationDelay = c.wheelViewModeNavigationDelay : "wheelViewModeNavigationDelay" in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")), this.startViewMode = 2, "startView" in c ? this.startViewMode = c.startView : "startView" in this.element.data() && (this.startViewMode = this.element.data("start-view")), this.startViewMode = f.convertViewMode(this.startViewMode), this.viewMode = this.startViewMode, this.viewSelect = this.minView, "viewSelect" in c ? this.viewSelect = c.viewSelect : "viewSelect" in this.element.data() && (this.viewSelect = this.element.data("view-select")), this.viewSelect = f.convertViewMode(this.viewSelect), this.forceParse = !0, "forceParse" in c ? this.forceParse = c.forceParse : "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse"));
		for (var g = 3 === this.bootcssVer ? f.templateV3 : f.template; -1 !== g.indexOf("{iconType}");) g = g.replace("{iconType}", this.icontype);
		for (; -1 !== g.indexOf("{leftArrow}");) g = g.replace("{leftArrow}", this.icons.leftArrow);
		for (; -1 !== g.indexOf("{rightArrow}");) g = g.replace("{rightArrow}", this.icons.rightArrow);
		if (this.picker = a(g).appendTo(this.isInline ? this.element : this.container).on({
				click : a.proxy(this.click, this),
				mousedown : a.proxy(this.mousedown, this)
			}), this.wheelViewModeNavigation && (a.fn.mousewheel ? this.picker.on({
				mousewheel : a.proxy(this.mousewheel, this)
			}) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")), this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu"), this.isRTL) {
			this.picker.addClass("datetimepicker-rtl");
			var h = 3 === this.bootcssVer ? ".prev span, .next span" : ".prev i, .next i";
			this.picker.find(h).toggleClass(this.icons.leftArrow + " " + this.icons.rightArrow)
		}
		a(document).on("mousedown", function(b) {
			0 === a(b.target).closest(".datetimepicker").length && d.hide()
		}), this.autoclose = !1, "autoclose" in c ? this.autoclose = c.autoclose : "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")), this.keyboardNavigation = !0, "keyboardNavigation" in c ? this.keyboardNavigation = c.keyboardNavigation : "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")), this.todayBtn = c.todayBtn || this.element.data("date-today-btn") || !1, this.todayHighlight = c.todayHighlight || this.element.data("date-today-highlight") || !1, this.weekStart = (c.weekStart || this.element.data("date-weekstart") || e[this.language].weekStart || 0) % 7, this.weekEnd = (this.weekStart + 6) % 7, this.startDate = -(1 / 0), this.endDate = 1 / 0, this.daysOfWeekDisabled = [], this.setStartDate(c.startDate || this.element.data("date-startdate")), this.setEndDate(c.endDate || this.element.data("date-enddate")), this.setDaysOfWeekDisabled(c.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")), this.setMinutesDisabled(c.minutesDisabled || this.element.data("date-minute-disabled")), this.setHoursDisabled(c.hoursDisabled || this.element.data("date-hour-disabled")), this.fillDow(), this.fillMonths(), this.update(), this.showMode(), this.isInline && this.show()
	};
	c.prototype = {
		constructor : c,
		_events : [],
		_attachEvents : function() {
			this._detachEvents(), this.isInput ? this._events = [ [ this.element, {
				focus : a.proxy(this.show, this),
				keyup : a.proxy(this.update, this),
				keydown : a.proxy(this.keydown, this)
			} ] ] : this.component && this.hasInput ? (this._events = [ [ this.element.find("input"), {
				focus : a.proxy(this.show, this),
				keyup : a.proxy(this.update, this),
				keydown : a.proxy(this.keydown, this)
			} ], [ this.component, {
				click : a.proxy(this.show, this)
			} ] ], this.componentReset && this._events.push([ this.componentReset, {
				click : a.proxy(this.reset, this)
			} ])) : this.element.is("div") ? this.isInline = !0 : this._events = [ [ this.element, {
				click : a.proxy(this.show, this)
			} ] ];
			for (var b, c, d = 0; d < this._events.length; d++) b = this._events[d][0], c = this._events[d][1], b.on(c)
		},
		_detachEvents : function() {
			for (var a, b, c = 0; c < this._events.length; c++) a = this._events[c][0], b = this._events[c][1], a.off(b);
			this._events = []
		},
		show : function(b) {
			this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.forceParse && this.update(), this.place(), a(window).on("resize", a.proxy(this.place, this)), b && (b.stopPropagation(), b.preventDefault()), this.isVisible = !0, this.element.trigger({
				type : "show",
				date : this.date
			})
		},
		hide : function(b) {
			this.isVisible && (this.isInline || (this.picker.hide(), a(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || a(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.isVisible = !1, this.element.trigger({
				type : "hide",
				date : this.date
			})))
		},
		remove : function() {
			this._detachEvents(), this.picker.remove(),
			delete this.picker
			,
			delete this.element.data().datetimepicker
		},
		getDate : function() {
			var a = this.getUTCDate();
			return new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
		},
		getUTCDate : function() {
			return this.date
		},
		setDate : function(a) {
			this.setUTCDate(new Date(a.getTime() - 6e4 * a.getTimezoneOffset()))
		},
		setUTCDate : function(a) {
			a >= this.startDate && a <= this.endDate ? (this.date = a, this.setValue(), this.viewDate = this.date, this.fill()) : this.element.trigger({
				type : "outOfRange",
				date : a,
				startDate : this.startDate,
				endDate : this.endDate
			})
		},
		setFormat : function(a) {
			this.format = f.parseFormat(a, this.formatType);
			var b;
			this.isInput ? b = this.element : this.component && (b = this.element.find("input")), b && b.val() && this.setValue()
		},
		setValue : function() {
			var b = this.getFormattedDate();
			this.isInput ? this.element.val(b) : (this.component && this.element.find("input").val(b), this.element.data("date", b)), this.linkField && a("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
		},
		getFormattedDate : function(a) {
			return void 0 == a && (a = this.format), f.formatDate(this.date, a, this.language, this.formatType)
		},
		setStartDate : function(a) {
			this.startDate = a || -(1 / 0), this.startDate !== -(1 / 0) && (this.startDate = f.parseDate(this.startDate, this.format, this.language, this.formatType)), this.update(), this.updateNavArrows()
		},
		setEndDate : function(a) {
			this.endDate = a || 1 / 0, this.endDate !== 1 / 0 && (this.endDate = f.parseDate(this.endDate, this.format, this.language, this.formatType)), this.update(), this.updateNavArrows()
		},
		setDaysOfWeekDisabled : function(b) {
			this.daysOfWeekDisabled = b || [], a.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)), this.daysOfWeekDisabled = a.map(this.daysOfWeekDisabled, function(a) {
				return parseInt(a, 10)
			}), this.update(), this.updateNavArrows()
		},
		setMinutesDisabled : function(b) {
			this.minutesDisabled = b || [], a.isArray(this.minutesDisabled) || (this.minutesDisabled = this.minutesDisabled.split(/,\s*/)), this.minutesDisabled = a.map(this.minutesDisabled, function(a) {
				return parseInt(a, 10)
			}), this.update(), this.updateNavArrows()
		},
		setHoursDisabled : function(b) {
			this.hoursDisabled = b || [], a.isArray(this.hoursDisabled) || (this.hoursDisabled = this.hoursDisabled.split(/,\s*/)), this.hoursDisabled = a.map(this.hoursDisabled, function(a) {
				return parseInt(a, 10)
			}), this.update(), this.updateNavArrows()
		},
		place : function() {
			if (!this.isInline) {
				if (!this.zIndex) {
					var b = 0;
					a("div").each(function() {
						var c = parseInt(a(this).css("zIndex"), 10);
						c > b && (b = c)
					}), this.zIndex = b + 10
				}
				var c,
					d,
					e,
					f;
				f = this.container instanceof a ? this.container.offset() : a(this.container).offset(), this.component ? (c = this.component.offset(), e = c.left, ("bottom-left" == this.pickerPosition || "top-left" == this.pickerPosition) && (e += this.component.outerWidth() - this.picker.outerWidth())) : (c = this.element.offset(), e = c.left), e + 220 > document.body.clientWidth && (e = document.body.clientWidth - 220), d = "top-left" == this.pickerPosition || "top-right" == this.pickerPosition ? c.top - this.picker.outerHeight() : c.top + this.height, d -= f.top, e -= f.left, "body" != this.container && (d += document.body.scrollTop), this.picker.css({
					top : d,
					left : e,
					zIndex : this.zIndex
				})
			}
		},
		update : function() {
			var a,
				b = !1;
			arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (a = arguments[0], b = !0) : (a = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate, ("string" == typeof a || a instanceof String) && (a = a.replace(/^\s+|\s+$/g, ""))), a || (a = new Date, b = !1), this.date = f.parseDate(a, this.format, this.language, this.formatType), b && this.setValue(), this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date), this.fill()
		},
		fillDow : function() {
			for (var a = this.weekStart, b = "<tr>"; a < this.weekStart + 7;) b += '<th class="dow">' + e[this.language].daysMin[a++ % 7] + "</th>";
			b += "</tr>", this.picker.find(".datetimepicker-days thead").append(b)
		},
		fillMonths : function() {
			for (var a = "", b = 0; 12 > b;) a += '<span class="month">' + e[this.language].monthsShort[b++] + "</span>";
			this.picker.find(".datetimepicker-months td").html(a)
		},
		fill : function() {
			if (null != this.date && null != this.viewDate) {
				var c = new Date(this.viewDate),
					d = c.getUTCFullYear(),
					g = c.getUTCMonth(),
					h = c.getUTCDate(),
					i = c.getUTCHours(),
					j = c.getUTCMinutes(),
					k = this.startDate !== -(1 / 0) ? this.startDate.getUTCFullYear() : -(1 / 0),
					l = this.startDate !== -(1 / 0) ? this.startDate.getUTCMonth() + 1 : -(1 / 0),
					m = this.endDate !== 1 / 0 ? this.endDate.getUTCFullYear() : 1 / 0,
					n = this.endDate !== 1 / 0 ? this.endDate.getUTCMonth() + 1 : 1 / 0,
					o = new b(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
					p = new Date;
				if (this.picker.find(".datetimepicker-days thead th:eq(1)").text(e[this.language].months[g] + " " + d), "time" == this.formatViewType) {
					var q = this.getFormattedDate();
					this.picker.find(".datetimepicker-hours thead th:eq(1)").text(q), this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(q)
				} else this.picker.find(".datetimepicker-hours thead th:eq(1)").text(h + " " + e[this.language].months[g] + " " + d), this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(h + " " + e[this.language].months[g] + " " + d);
				this.picker.find("tfoot th.today").text(e[this.language].today).toggle(this.todayBtn !== !1), this.updateNavArrows(), this.fillMonths();
				var r = b(d, g - 1, 28, 0, 0, 0, 0),
					s = f.getDaysInMonth(r.getUTCFullYear(), r.getUTCMonth());
				r.setUTCDate(s), r.setUTCDate(s - (r.getUTCDay() - this.weekStart + 7) % 7);
				var t = new Date(r);
				t.setUTCDate(t.getUTCDate() + 42), t = t.valueOf();
				for (var u, v = []; r.valueOf() < t;) r.getUTCDay() == this.weekStart && v.push("<tr>"), u = "", r.getUTCFullYear() < d || r.getUTCFullYear() == d && r.getUTCMonth() < g ? u += " old" : (r.getUTCFullYear() > d || r.getUTCFullYear() == d && r.getUTCMonth() > g) && (u += " new"), this.todayHighlight && r.getUTCFullYear() == p.getFullYear() && r.getUTCMonth() == p.getMonth() && r.getUTCDate() == p.getDate() && (u += " today"), r.valueOf() == o && (u += " active"), (r.valueOf() + 864e5 <= this.startDate || r.valueOf() > this.endDate || -1 !== a.inArray(r.getUTCDay(), this.daysOfWeekDisabled)) && (u += " disabled"), v.push('<td class="day' + u + '">' + r.getUTCDate() + "</td>"), r.getUTCDay() == this.weekEnd && v.push("</tr>"), r.setUTCDate(r.getUTCDate() + 1);
				this.picker.find(".datetimepicker-days tbody").empty().append(v.join("")), v = [];
				for (var w = "", x = "", y = "", z = this.hoursDisabled || [], A = 0; 24 > A; A++)
					if (-1 === z.indexOf(A)) {
						var B = b(d, g, h, A);
						u = "", B.valueOf() + 36e5 <= this.startDate || B.valueOf() > this.endDate ? u += " disabled" : i == A && (u += " active"), this.showMeridian && 2 == e[this.language].meridiem.length ? (x = 12 > A ? e[this.language].meridiem[0] : e[this.language].meridiem[1], x != y && ("" != y && v.push("</fieldset>"), v.push('<fieldset class="hour"><legend>' + x.toUpperCase() + "</legend>")), y = x, w = A % 12 ? A % 12 : 12, v.push('<span class="hour' + u + " hour_" + (12 > A ? "am" : "pm") + '">' + w + "</span>"), 23 == A && v.push("</fieldset>")) : (w = A + ":00", v.push('<span class="hour' + u + '">' + w + "</span>"))
				}
				this.picker.find(".datetimepicker-hours td").html(v.join("")), v = [], w = "", x = "", y = "";
				for (var C = this.minutesDisabled || [], A = 0; 60 > A; A += this.minuteStep)
					if (-1 === C.indexOf(A)) {
						var B = b(d, g, h, i, A, 0);
						u = "", B.valueOf() < this.startDate || B.valueOf() > this.endDate ? u += " disabled" : Math.floor(j / this.minuteStep) == Math.floor(A / this.minuteStep) && (u += " active"), this.showMeridian && 2 == e[this.language].meridiem.length ? (x = 12 > i ? e[this.language].meridiem[0] : e[this.language].meridiem[1], x != y && ("" != y && v.push("</fieldset>"), v.push('<fieldset class="minute"><legend>' + x.toUpperCase() + "</legend>")), y = x, w = i % 12 ? i % 12 : 12, v.push('<span class="minute' + u + '">' + w + ":" + (10 > A ? "0" + A : A) + "</span>"), 59 == A && v.push("</fieldset>")) : (w = A + ":00", v.push('<span class="minute' + u + '">' + i + ":" + (10 > A ? "0" + A : A) + "</span>"))
				}
				this.picker.find(".datetimepicker-minutes td").html(v.join(""));
				var D = this.date.getUTCFullYear(),
					E = this.picker.find(".datetimepicker-months").find("th:eq(1)").text(d).end().find("span").removeClass("active");
				D == d && E.eq(this.date.getUTCMonth() + 2).addClass("active"), (k > d || d > m) && E.addClass("disabled"), d == k && E.slice(0, l + 1).addClass("disabled"), d == m && E.slice(n).addClass("disabled"), v = "", d = 10 * parseInt(d / 10, 10);
				var F = this.picker.find(".datetimepicker-years").find("th:eq(1)").text(d + "-" + (d + 9)).end().find("td");
				d -= 1;
				for (var A = -1; 11 > A; A++) v += '<span class="year' + (-1 == A || 10 == A ? " old" : "") + (D == d ? " active" : "") + (k > d || d > m ? " disabled" : "") + '">' + d + "</span>", d += 1;
				F.html(v), this.place()
			}
		},
		updateNavArrows : function() {
			var a = new Date(this.viewDate),
				b = a.getUTCFullYear(),
				c = a.getUTCMonth(),
				d = a.getUTCDate(),
				e = a.getUTCHours();
			switch (this.viewMode) {
			case 0:
				this.startDate !== -(1 / 0) && b <= this.startDate.getUTCFullYear() && c <= this.startDate.getUTCMonth() && d <= this.startDate.getUTCDate() && e <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
					visibility : "hidden"
				}) : this.picker.find(".prev").css({
					visibility : "visible"
				}), this.endDate !== 1 / 0 && b >= this.endDate.getUTCFullYear() && c >= this.endDate.getUTCMonth() && d >= this.endDate.getUTCDate() && e >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
					visibility : "hidden"
				}) : this.picker.find(".next").css({
					visibility : "visible"
				});
				break;case 1:
				this.startDate !== -(1 / 0) && b <= this.startDate.getUTCFullYear() && c <= this.startDate.getUTCMonth() && d <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
					visibility : "hidden"
				}) : this.picker.find(".prev").css({
					visibility : "visible"
				}), this.endDate !== 1 / 0 && b >= this.endDate.getUTCFullYear() && c >= this.endDate.getUTCMonth() && d >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
					visibility : "hidden"
				}) : this.picker.find(".next").css({
					visibility : "visible"
				});
				break;case 2:
				this.startDate !== -(1 / 0) && b <= this.startDate.getUTCFullYear() && c <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
					visibility : "hidden"
				}) : this.picker.find(".prev").css({
					visibility : "visible"
				}), this.endDate !== 1 / 0 && b >= this.endDate.getUTCFullYear() && c >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
					visibility : "hidden"
				}) : this.picker.find(".next").css({
					visibility : "visible"
				});
				break;case 3:
			case 4:
				this.startDate !== -(1 / 0) && b <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
					visibility : "hidden"
				}) : this.picker.find(".prev").css({
					visibility : "visible"
				}), this.endDate !== 1 / 0 && b >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
					visibility : "hidden"
				}) : this.picker.find(".next").css({
					visibility : "visible"
				})
			}
		},
		mousewheel : function(b) {
			if (b.preventDefault(), b.stopPropagation(), !this.wheelPause) {
				this.wheelPause = !0;
				var c = b.originalEvent,
					d = c.wheelDelta,
					e = d > 0 ? 1 : 0 === d ? 0 : -1;
				this.wheelViewModeNavigationInverseDirection && (e = -e), this.showMode(e), setTimeout(a.proxy(function() {
					this.wheelPause = !1
				}, this), this.wheelViewModeNavigationDelay)
			}
		},
		click : function(c) {
			c.stopPropagation(), c.preventDefault();
			var d = a(c.target).closest("span, td, th, legend");
			if (d.is("." + this.icontype) && (d = a(d).parent().closest("span, td, th, legend")), 1 == d.length) {
				if (d.is(".disabled")) return void this.element.trigger({
						type : "outOfRange",
						date : this.viewDate,
						startDate : this.startDate,
						endDate : this.endDate
					});
				switch (d[0].nodeName.toLowerCase()) {
				case "th":
					switch (d[0].className) {
					case "switch":
						this.showMode(1);
						break;case "prev":
					case "next":
						var e = f.modes[this.viewMode].navStep * ("prev" == d[0].className ? -1 : 1);
						switch (this.viewMode) {
						case 0:
							this.viewDate = this.moveHour(this.viewDate, e);
							break;case 1:
							this.viewDate = this.moveDate(this.viewDate, e);
							break;case 2:
							this.viewDate = this.moveMonth(this.viewDate, e);
							break;case 3:
						case 4:
							this.viewDate = this.moveYear(this.viewDate, e)
						}
						this.fill(), this.element.trigger({
							type : d[0].className + ":" + this.convertViewModeText(this.viewMode),
							date : this.viewDate,
							startDate : this.startDate,
							endDate : this.endDate
						});
						break;case "today":
						var g = new Date;
						g = b(g.getFullYear(), g.getMonth(), g.getDate(), g.getHours(), g.getMinutes(), g.getSeconds(), 0), g < this.startDate ? g = this.startDate : g > this.endDate && (g = this.endDate), this.viewMode = this.startViewMode, this.showMode(0), this._setDate(g), this.fill(), this.autoclose && this.hide()
					}
					break;case "span":
					if (!d.is(".disabled")) {
						var h = this.viewDate.getUTCFullYear(),
							i = this.viewDate.getUTCMonth(),
							j = this.viewDate.getUTCDate(),
							k = this.viewDate.getUTCHours(),
							l = this.viewDate.getUTCMinutes(),
							m = this.viewDate.getUTCSeconds();
						if (d.is(".month") ? (this.viewDate.setUTCDate(1), i = d.parent().find("span").index(d), j = this.viewDate.getUTCDate(), this.viewDate.setUTCMonth(i), this.element.trigger({
								type : "changeMonth",
								date : this.viewDate
							}), this.viewSelect >= 3 && this._setDate(b(h, i, j, k, l, m, 0))) : d.is(".year") ? (this.viewDate.setUTCDate(1), h = parseInt(d.text(), 10) || 0, this.viewDate.setUTCFullYear(h), this.element.trigger({
								type : "changeYear",
								date : this.viewDate
							}), this.viewSelect >= 4 && this._setDate(b(h, i, j, k, l, m, 0))) : d.is(".hour") ? (k = parseInt(d.text(), 10) || 0, (d.hasClass("hour_am") || d.hasClass("hour_pm")) && (12 == k && d.hasClass("hour_am") ? k = 0 : 12 != k && d.hasClass("hour_pm") && (k += 12)), this.viewDate.setUTCHours(k), this.element.trigger({
								type : "changeHour",
								date : this.viewDate
							}), this.viewSelect >= 1 && this._setDate(b(h, i, j, k, l, m, 0))) : d.is(".minute") && (l = parseInt(d.text().substr(d.text().indexOf(":") + 1), 10) || 0, this.viewDate.setUTCMinutes(l), this.element.trigger({
								type : "changeMinute",
								date : this.viewDate
							}), this.viewSelect >= 0 && this._setDate(b(h, i, j, k, l, m, 0))), 0 != this.viewMode) {
							var n = this.viewMode;
							this.showMode(-1), this.fill(), n == this.viewMode && this.autoclose && this.hide()
						} else this.fill(), this.autoclose && this.hide()
					}
					break;case "td":
					if (d.is(".day") && !d.is(".disabled")) {
						var j = parseInt(d.text(), 10) || 1,
							h = this.viewDate.getUTCFullYear(),
							i = this.viewDate.getUTCMonth(),
							k = this.viewDate.getUTCHours(),
							l = this.viewDate.getUTCMinutes(),
							m = this.viewDate.getUTCSeconds();
						d.is(".old") ? 0 === i ? (i = 11, h -= 1) : i -= 1 : d.is(".new") && (11 == i ? (i = 0, h += 1) : i += 1), this.viewDate.setUTCFullYear(h), this.viewDate.setUTCMonth(i, j), this.element.trigger({
							type : "changeDay",
							date : this.viewDate
						}), this.viewSelect >= 2 && this._setDate(b(h, i, j, k, l, m, 0))
					}
					var n = this.viewMode;
					this.showMode(-1), this.fill(), n == this.viewMode && this.autoclose && this.hide()
				}
			}
		},
		_setDate : function(a, b) {
			b && "date" != b || (this.date = a), b && "view" != b || (this.viewDate = a), this.fill(), this.setValue();
			var c;
			this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && (c.change(), this.autoclose && (!b || "date" == b)), this.element.trigger({
				type : "changeDate",
				date : this.date
			})
		},
		moveMinute : function(a, b) {
			if (!b) return a;
			var c = new Date(a.valueOf());
			return c.setUTCMinutes(c.getUTCMinutes() + b * this.minuteStep), c
		},
		moveHour : function(a, b) {
			if (!b) return a;
			var c = new Date(a.valueOf());
			return c.setUTCHours(c.getUTCHours() + b), c
		},
		moveDate : function(a, b) {
			if (!b) return a;
			var c = new Date(a.valueOf());
			return c.setUTCDate(c.getUTCDate() + b), c
		},
		moveMonth : function(a, b) {
			if (!b) return a;
			var c,
				d,
				e = new Date(a.valueOf()),
				f = e.getUTCDate(),
				g = e.getUTCMonth(),
				h = Math.abs(b);
			if (b = b > 0 ? 1 : -1, 1 == h) d = -1 == b ? function() {
					return e.getUTCMonth() == g
				} : function() {
					return e.getUTCMonth() != c
				}, c = g + b, e.setUTCMonth(c), (0 > c || c > 11) && (c = (c + 12) % 12);else {
				for (var i = 0; h > i; i++) e = this.moveMonth(e, b);
				c = e.getUTCMonth(), e.setUTCDate(f), d = function() {
					return c != e.getUTCMonth()
				}
			}
			for (; d();) e.setUTCDate(--f), e.setUTCMonth(c);
			return e
		},
		moveYear : function(a, b) {
			return this.moveMonth(a, 12 * b)
		},
		dateWithinRange : function(a) {
			return a >= this.startDate && a <= this.endDate
		},
		keydown : function(a) {
			if (this.picker.is(":not(:visible)")) return void (27 == a.keyCode && this.show());
			var b,
				c,
				d,
				e = !1;
			switch (a.keyCode) {
			case 27:
				this.hide(), a.preventDefault();
				break;case 37:
			case 39:
				if (!this.keyboardNavigation) break;
				b = 37 == a.keyCode ? -1 : 1, viewMode = this.viewMode, a.ctrlKey ? viewMode += 2 : a.shiftKey && (viewMode += 1), 4 == viewMode ? (c = this.moveYear(this.date, b), d = this.moveYear(this.viewDate, b)) : 3 == viewMode ? (c = this.moveMonth(this.date, b), d = this.moveMonth(this.viewDate, b)) : 2 == viewMode ? (c = this.moveDate(this.date, b), d = this.moveDate(this.viewDate, b)) : 1 == viewMode ? (c = this.moveHour(this.date, b), d = this.moveHour(this.viewDate, b)) : 0 == viewMode && (c = this.moveMinute(this.date, b), d = this.moveMinute(this.viewDate, b)), this.dateWithinRange(c) && (this.date = c, this.viewDate = d, this.setValue(), this.update(), a.preventDefault(), e = !0);
				break;case 38:
			case 40:
				if (!this.keyboardNavigation) break;
				b = 38 == a.keyCode ? -1 : 1, viewMode = this.viewMode, a.ctrlKey ? viewMode += 2 : a.shiftKey && (viewMode += 1), 4 == viewMode ? (c = this.moveYear(this.date, b), d = this.moveYear(this.viewDate, b)) : 3 == viewMode ? (c = this.moveMonth(this.date, b), d = this.moveMonth(this.viewDate, b)) : 2 == viewMode ? (c = this.moveDate(this.date, 7 * b), d = this.moveDate(this.viewDate, 7 * b)) : 1 == viewMode ? this.showMeridian ? (c = this.moveHour(this.date, 6 * b), d = this.moveHour(this.viewDate, 6 * b)) : (c = this.moveHour(this.date, 4 * b), d = this.moveHour(this.viewDate, 4 * b)) : 0 == viewMode && (c = this.moveMinute(this.date, 4 * b), d = this.moveMinute(this.viewDate, 4 * b)), this.dateWithinRange(c) && (this.date = c, this.viewDate = d, this.setValue(), this.update(), a.preventDefault(), e = !0);
				break;case 13:
				if (0 != this.viewMode) {
					var f = this.viewMode;
					this.showMode(-1), this.fill(), f == this.viewMode && this.autoclose && this.hide()
				} else this.fill(), this.autoclose && this.hide();
				a.preventDefault();
				break;case 9:
				this.hide()
			}
			if (e) {
				var g;
				this.isInput ? g = this.element : this.component && (g = this.element.find("input")), g && g.change(), this.element.trigger({
					type : "changeDate",
					date : this.date
				})
			}
		},
		showMode : function(a) {
			if (a) {
				var b = Math.max(0, Math.min(f.modes.length - 1, this.viewMode + a));
				b >= this.minView && b <= this.maxView && (this.element.trigger({
					type : "changeMode",
					date : this.viewDate,
					oldViewMode : this.viewMode,
					newViewMode : b
				}), this.viewMode = b)
			}
			this.picker.find(">div").hide().filter(".datetimepicker-" + f.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
		},
		reset : function(a) {
			this._setDate(null, "date")
		},
		convertViewModeText : function(a) {
			switch (a) {
			case 4:
				return "decade";case 3:
				return "year";case 2:
				return "month";case 1:
				return "day";case 0:
				return "hour"
			}
		}
	};
	var d = a.fn.datetimepicker;
	a.fn.datetimepicker = function(b) {
		var d = Array.apply(null, arguments);
		d.shift();
		var e;
		return this.each(function() {
				var f = a(this),
					g = f.data("datetimepicker"),
					h = "object" == typeof b && b;
				return g || f.data("datetimepicker", g = new c(this, a.extend({}, a.fn.datetimepicker.defaults, h))), "string" == typeof b && "function" == typeof g[b] && (e = g[b].apply(g, d), void 0 !== e) ? !1 : void 0
			}), void 0 !== e ? e : this
	}, a.fn.datetimepicker.defaults = {}, a.fn.datetimepicker.Constructor = c;
	var e = a.fn.datetimepicker.dates = {
			en : {
				days : [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
				daysShort : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
				daysMin : [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su" ],
				months : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
				monthsShort : [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
				meridiem : [ "am", "pm" ],
				suffix : [ "st", "nd", "rd", "th" ],
				today : "Today"
			}
		},
		f = {
			modes : [ {
				clsName : "minutes",
				navFnc : "Hours",
				navStep : 1
			}, {
				clsName : "hours",
				navFnc : "Date",
				navStep : 1
			}, {
				clsName : "days",
				navFnc : "Month",
				navStep : 1
			}, {
				clsName : "months",
				navFnc : "FullYear",
				navStep : 1
			}, {
				clsName : "years",
				navFnc : "FullYear",
				navStep : 10
			} ],
			isLeapYear : function(a) {
				return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
			},
			getDaysInMonth : function(a, b) {
				return [ 31, f.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][b]
			},
			getDefaultFormat : function(a, b) {
				if ("standard" == a) return "input" == b ? "yyyy-mm-dd hh:ii" : "yyyy-mm-dd hh:ii:ss";
				if ("php" == a) return "input" == b ? "Y-m-d H:i" : "Y-m-d H:i:s";
				throw new Error("Invalid format type.")
			},
			validParts : function(a) {
				if ("standard" == a) return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
				if ("php" == a) return /[dDjlNwzFmMnStyYaABgGhHis]/g;
				throw new Error("Invalid format type.")
			},
			nonpunctuation : /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
			parseFormat : function(a, b) {
				var c = a.replace(this.validParts(b), "\x00").split("\x00"),
					d = a.match(this.validParts(b));
				if (!c || !c.length || !d || 0 == d.length)
					throw new Error("Invalid date format.");
				return {
					separators : c,
					parts : d
				}
			},
			parseDate : function(d, f, g, h) {
				if (d instanceof Date) {
					var i = new Date(d.valueOf() - 6e4 * d.getTimezoneOffset());
					return i.setMilliseconds(0), i
				}
				if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(d) && (f = this.parseFormat("yyyy-mm-dd", h)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(d) && (f = this.parseFormat("yyyy-mm-dd hh:ii", h)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(d) && (f = this.parseFormat("yyyy-mm-dd hh:ii:ss", h)), /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(d)) {
					var j,
						k,
						l = /([-+]\d+)([dmwy])/,
						m = d.match(/([-+]\d+)([dmwy])/g);
					d = new Date;
					for (var n = 0; n < m.length; n++) switch (j = l.exec(m[n]), k = parseInt(j[1]), j[2]) {
						case "d":
							d.setUTCDate(d.getUTCDate() + k);
							break;case "m":
							d = c.prototype.moveMonth.call(c.prototype, d, k);
							break;case "w":
							d.setUTCDate(d.getUTCDate() + 7 * k);
							break;case "y":
							d = c.prototype.moveYear.call(c.prototype, d, k)
					}
					return b(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), 0)
				}
				var o,
					p,
					j,
					m = d && d.toString().match(this.nonpunctuation) || [],
					d = new Date(0, 0, 0, 0, 0, 0, 0),
					q = {},
					r = [ "hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P" ],
					s = {
						hh : function(a, b) {
							return a.setUTCHours(b)
						},
						h : function(a, b) {
							return a.setUTCHours(b)
						},
						HH : function(a, b) {
							return a.setUTCHours(12 == b ? 0 : b)
						},
						H : function(a, b) {
							return a.setUTCHours(12 == b ? 0 : b)
						},
						ii : function(a, b) {
							return a.setUTCMinutes(b)
						},
						i : function(a, b) {
							return a.setUTCMinutes(b)
						},
						ss : function(a, b) {
							return a.setUTCSeconds(b)
						},
						s : function(a, b) {
							return a.setUTCSeconds(b)
						},
						yyyy : function(a, b) {
							return a.setUTCFullYear(b)
						},
						yy : function(a, b) {
							return a.setUTCFullYear(2e3 + b)
						},
						m : function(a, b) {
							for (b -= 1; 0 > b;) b += 12;
							for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() != b;) {
								if (isNaN(a.getUTCMonth())) return a;
								a.setUTCDate(a.getUTCDate() - 1)
							}
							return a
						},
						d : function(a, b) {
							return a.setUTCDate(b)
						},
						p : function(a, b) {
							return a.setUTCHours(1 == b ? a.getUTCHours() + 12 : a.getUTCHours())
						}
					};
				if (s.M = s.MM = s.mm = s.m, s.dd = s.d, s.P = s.p, d = b(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()), m.length == f.parts.length) {
					for (var n = 0, t = f.parts.length; t > n; n++) {
						if (o = parseInt(m[n], 10), j = f.parts[n], isNaN(o)) switch (j) {
							case "MM":
								p = a(e[g].months).filter(function() {
									var a = this.slice(0, m[n].length),
										b = m[n].slice(0, a.length);
									return a == b
								}), o = a.inArray(p[0], e[g].months) + 1;
								break;case "M":
								p = a(e[g].monthsShort).filter(function() {
									var a = this.slice(0, m[n].length),
										b = m[n].slice(0, a.length);
									return a.toLowerCase() == b.toLowerCase()
								}), o = a.inArray(p[0], e[g].monthsShort) + 1;
								break;case "p":
							case "P":
								o = a.inArray(m[n].toLowerCase(), e[g].meridiem)
						}
						q[j] = o
					}
					for (var u, n = 0; n < r.length; n++) u = r[n], u in q && !isNaN(q[u]) && s[u](d, q[u])
				}
				return d
			},
			formatDate : function(b, c, d, g) {
				if (null == b) return "";
				var h;
				if ("standard" == g) h = {
						yy : b.getUTCFullYear().toString().substring(2),
						yyyy : b.getUTCFullYear(),
						m : b.getUTCMonth() + 1,
						M : e[d].monthsShort[b.getUTCMonth()],
						MM : e[d].months[b.getUTCMonth()],
						d : b.getUTCDate(),
						D : e[d].daysShort[b.getUTCDay()],
						DD : e[d].days[b.getUTCDay()],
						p : 2 == e[d].meridiem.length ? e[d].meridiem[b.getUTCHours() < 12 ? 0 : 1] : "",
						h : b.getUTCHours(),
						i : b.getUTCMinutes(),
						s : b.getUTCSeconds()
					}, 2 == e[d].meridiem.length ? h.H = h.h % 12 == 0 ? 12 : h.h % 12 : h.H = h.h, h.HH = (h.H < 10 ? "0" : "") + h.H, h.P = h.p.toUpperCase(), h.hh = (h.h < 10 ? "0" : "") + h.h, h.ii = (h.i < 10 ? "0" : "") + h.i, h.ss = (h.s < 10 ? "0" : "") + h.s, h.dd = (h.d < 10 ? "0" : "") + h.d, h.mm = (h.m < 10 ? "0" : "") + h.m;else {
					if ("php" != g)
						throw new Error("Invalid format type.");
					h = {
						y : b.getUTCFullYear().toString().substring(2),
						Y : b.getUTCFullYear(),
						F : e[d].months[b.getUTCMonth()],
						M : e[d].monthsShort[b.getUTCMonth()],
						n : b.getUTCMonth() + 1,
						t : f.getDaysInMonth(b.getUTCFullYear(), b.getUTCMonth()),
						j : b.getUTCDate(),
						l : e[d].days[b.getUTCDay()],
						D : e[d].daysShort[b.getUTCDay()],
						w : b.getUTCDay(),
						N : 0 == b.getUTCDay() ? 7 : b.getUTCDay(),
						S : b.getUTCDate() % 10 <= e[d].suffix.length ? e[d].suffix[b.getUTCDate() % 10 - 1] : "",
						a : 2 == e[d].meridiem.length ? e[d].meridiem[b.getUTCHours() < 12 ? 0 : 1] : "",
						g : b.getUTCHours() % 12 == 0 ? 12 : b.getUTCHours() % 12,
						G : b.getUTCHours(),
						i : b.getUTCMinutes(),
						s : b.getUTCSeconds()
					}, h.m = (h.n < 10 ? "0" : "") + h.n, h.d = (h.j < 10 ? "0" : "") + h.j, h.A = h.a.toString().toUpperCase(), h.h = (h.g < 10 ? "0" : "") + h.g, h.H = (h.G < 10 ? "0" : "") + h.G, h.i = (h.i < 10 ? "0" : "") + h.i, h.s = (h.s < 10 ? "0" : "") + h.s
				}
				for (var b = [], i = a.extend([], c.separators), j = 0, k = c.parts.length; k > j; j++) i.length && b.push(i.shift()), b.push(h[c.parts[j]]);
				return i.length && b.push(i.shift()), b.join("")
			},
			convertViewMode : function(a) {
				switch (a) {
				case 4:
				case "decade":
					a = 4;
					break;case 3:
				case "year":
					a = 3;
					break;case 2:
				case "month":
					a = 2;
					break;case 1:
				case "day":
					a = 1;
					break;case 0:
				case "hour":
					a = 0
				}
				return a
			},
			headTemplate : '<thead><tr><th class="prev"><i class="{leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{rightArrow}"/></th></tr></thead>',
			headTemplateV3 : '<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',
			contTemplate : '<tbody><tr><td colspan="7"></td></tr></tbody>',
			footTemplate : '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
		};
	f.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + f.headTemplate + f.contTemplate + f.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + f.headTemplate + f.contTemplate + f.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + f.headTemplate + "<tbody></tbody>" + f.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + f.headTemplate + f.contTemplate + f.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + f.headTemplate + f.contTemplate + f.footTemplate + "</table></div></div>", f.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + f.headTemplateV3 + f.contTemplate + f.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + f.headTemplateV3 + f.contTemplate + f.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + f.headTemplateV3 + "<tbody></tbody>" + f.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + f.headTemplateV3 + f.contTemplate + f.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + f.headTemplateV3 + f.contTemplate + f.footTemplate + "</table></div></div>", a.fn.datetimepicker.DPGlobal = f, a.fn.datetimepicker.noConflict = function() {
		return a.fn.datetimepicker = d, this
	}, a(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function(b) {
		var c = a(this);
		c.data("datetimepicker") || (b.preventDefault(), c.datetimepicker("show"))
	}), a(function() {
		a('[data-provide="datetimepicker-inline"]').datetimepicker()
	})
}(window.jQuery), function(a) {
	a.fn.datetimepicker.dates["zh-CN"] = {
		days : [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日" ],
		daysShort : [ "周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日" ],
		daysMin : [ "日", "一", "二", "三", "四", "五", "六", "日" ],
		months : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
		monthsShort : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
		today : "今天",
		suffix : [],
		meridiem : [ "上午", "下午" ]
	}
}(jQuery), function(a) {
	function b() {
		return {
			empty : !1,
			unusedTokens : [],
			unusedInput : [],
			overflow : -2,
			charsLeftOver : 0,
			nullInput : !1,
			invalidMonth : null,
			invalidFormat : !1,
			userInvalidated : !1,
			iso : !1
		}
	}
	function c(a, b) {
		return function(c) {
			return k(a.call(this, c), b)
		}
	}
	function d(a, b) {
		return function(c) {
			return this.lang().ordinal(a.call(this, c), b)
		}
	}
	function e() {
	}
	function f(a) {
		w(a), h(this, a)
	}
	function g(a) {
		var b = q(a),
			c = b.year || 0,
			d = b.month || 0,
			e = b.week || 0,
			f = b.day || 0,
			g = b.hour || 0,
			h = b.minute || 0,
			i = b.second || 0,
			j = b.millisecond || 0;
		this._milliseconds = +j + 1e3 * i + 6e4 * h + 36e5 * g, this._days = +f + 7 * e, this._months = +d + 12 * c, this._data = {}, this._bubble()
	}
	function h(a, b) {
		for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
		return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
	}
	function i(a) {
		var b,
			c = {};
		for (b in a) a.hasOwnProperty(b) && qa.hasOwnProperty(b) && (c[b] = a[b]);
		return c
	}
	function j(a) {
		return 0 > a ? Math.ceil(a) : Math.floor(a)
	}
	function k(a, b, c) {
		for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
		return (e ? c ? "+" : "" : "-") + d
	}
	function l(a, b, c, d) {
		var e,
			f,
			g = b._milliseconds,
			h = b._days,
			i = b._months;
		g && a._d.setTime(+a._d + g * c), (h || i) && (e = a.minute(), f = a.hour()), h && a.date(a.date() + h * c), i && a.month(a.month() + i * c), g && !d && da.updateOffset(a), (h || i) && (a.minute(e), a.hour(f))
	}
	function m(a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	}
	function n(a) {
		return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
	}
	function o(a, b, c) {
		var d,
			e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0;
		for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && s(a[d]) !== s(b[d])) && g++;
		return g + f
	}
	function p(a) {
		if (a) {
			var b = a.toLowerCase().replace(/(.)s$/, "$1");
			a = Ta[a] || Ua[b] || b
		}
		return a
	}
	function q(a) {
		var b,
			c,
			d = {};
		for (c in a) a.hasOwnProperty(c) && (b = p(c), b && (d[b] = a[c]));
		return d
	}
	function r(b) {
		var c,
			d;
		if (0 === b.indexOf("week")) c = 7, d = "day";else {
			if (0 !== b.indexOf("month")) return;
			c = 12, d = "month"
		}
		da[b] = function(e, f) {
			var g,
				h,
				i = da.fn._lang[b],
				j = [];
			if ("number" == typeof e && (f = e, e = a), h = function(a) {
					var b = da().utc().set(d, a);
					return i.call(da.fn._lang, b, e || "")
				}, null != f) return h(f);
			for (g = 0; c > g; g++) j.push(h(g));
			return j
		}
	}
	function s(a) {
		var b = +a,
			c = 0;
		return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
	}
	function t(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}
	function u(a) {
		return v(a) ? 366 : 365
	}
	function v(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}
	function w(a) {
		var b;
		a._a && -2 === a._pf.overflow && (b = a._a[ja] < 0 || a._a[ja] > 11 ? ja : a._a[ka] < 1 || a._a[ka] > t(a._a[ia], a._a[ja]) ? ka : a._a[la] < 0 || a._a[la] > 23 ? la : a._a[ma] < 0 || a._a[ma] > 59 ? ma : a._a[na] < 0 || a._a[na] > 59 ? na : a._a[oa] < 0 || a._a[oa] > 999 ? oa : -1, a._pf._overflowDayOfYear && (ia > b || b > ka) && (b = ka), a._pf.overflow = b)
	}
	function x(a) {
		return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
	}
	function y(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}
	function z(a, b) {
		return b._isUTC ? da(a).zone(b._offset || 0) : da(a).local()
	}
	function A(a, b) {
		return b.abbr = a, pa[a] || (pa[a] = new e), pa[a].set(b), pa[a]
	}
	function B(a) {
		delete pa[a]
	}
	function C(a) {
		var b,
			c,
			d,
			e,
			f = 0,
			g = function(a) {
				if (!pa[a] && ra) try {
						require("./lang/" + a)
					} catch (b) {} return pa[a]
			};
		if (!a) return da.fn._lang;
		if (!m(a)) {
			if (c = g(a)) return c;
			a = [ a ]
		}
		for (; f < a.length;) {
			for (e = y(a[f]).split("-"), b = e.length, d = y(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
				if (c = g(e.slice(0, b).join("-"))) return c;
				if (d && d.length >= b && o(e, d, !0) >= b - 1) break;
				b--
			}
			f++
		}
		return da.fn._lang
	}
	function D(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}
	function E(a) {
		var b,
			c,
			d = a.match(va);
		for (b = 0, c = d.length; c > b; b++) Ya[d[b]] ? d[b] = Ya[d[b]] : d[b] = D(d[b]);
		return function(e) {
			var f = "";
			for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
			return f
		}
	}
	function F(a, b) {
		return a.isValid() ? (b = G(b, a.lang()), Va[b] || (Va[b] = E(b)), Va[b](a)) : a.lang().invalidDate()
	}
	function G(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}
		var d = 5;
		for (wa.lastIndex = 0; d >= 0 && wa.test(a);) a = a.replace(wa, c), wa.lastIndex = 0, d -= 1;
		return a
	}
	function H(a, b) {
		var c,
			d = b._strict;
		switch (a) {
		case "DDDD":
			return Ia;case "YYYY":
		case "GGGG":
		case "gggg":
			return d ? Ja : za;case "Y":
		case "G":
		case "g":
			return La;case "YYYYYY":
		case "YYYYY":
		case "GGGGG":
		case "ggggg":
			return d ? Ka : Aa;case "S":
			if (d) return Ga;
		case "SS":
			if (d) return Ha;
		case "SSS":
			if (d) return Ia;
		case "DDD":
			return ya;case "MMM":
		case "MMMM":
		case "dd":
		case "ddd":
		case "dddd":
			return Ca;case "a":
		case "A":
			return C(b._l)._meridiemParse;case "X":
			return Fa;case "Z":
		case "ZZ":
			return Da;case "T":
			return Ea;case "SSSS":
			return Ba;case "MM":
		case "DD":
		case "YY":
		case "GG":
		case "gg":
		case "HH":
		case "hh":
		case "mm":
		case "ss":
		case "ww":
		case "WW":
			return d ? Ha : xa;case "M":
		case "D":
		case "d":
		case "H":
		case "h":
		case "m":
		case "s":
		case "w":
		case "W":
		case "e":
		case "E":
			return xa;default:
			return c = new RegExp(P(O(a.replace("\\", "")), "i"))
		}
	}
	function I(a) {
		a = a || "";var b = a.match(Da) || [],
			c = b[b.length - 1] || [],
			d = (c + "").match(Qa) || [ "-", 0, 0 ],
			e = +(60 * d[1]) + s(d[2]);
		return "+" === d[0] ? -e : e
	}
	function J(a, b, c) {
		var d,
			e = c._a;
		switch (a) {
		case "M":
		case "MM":
			null != b && (e[ja] = s(b) - 1);
			break;case "MMM":
		case "MMMM":
			d = C(c._l).monthsParse(b), null != d ? e[ja] = d : c._pf.invalidMonth = b;
			break;case "D":
		case "DD":
			null != b && (e[ka] = s(b));
			break;case "DDD":
		case "DDDD":
			null != b && (c._dayOfYear = s(b));
			break;case "YY":
			e[ia] = s(b) + (s(b) > 68 ? 1900 : 2e3);
			break;case "YYYY":
		case "YYYYY":
		case "YYYYYY":
			e[ia] = s(b);
			break;case "a":
		case "A":
			c._isPm = C(c._l).isPM(b);
			break;case "H":
		case "HH":
		case "h":
		case "hh":
			e[la] = s(b);
			break;case "m":
		case "mm":
			e[ma] = s(b);
			break;case "s":
		case "ss":
			e[na] = s(b);
			break;case "S":
		case "SS":
		case "SSS":
		case "SSSS":
			e[oa] = s(1e3 * ("0." + b));
			break;case "X":
			c._d = new Date(1e3 * parseFloat(b));
			break;case "Z":
		case "ZZ":
			c._useUTC = !0, c._tzm = I(b);
			break;case "w":
		case "ww":
		case "W":
		case "WW":
		case "d":
		case "dd":
		case "ddd":
		case "dddd":
		case "e":
		case "E":
			a = a.substr(0, 1);case "gg":
		case "gggg":
		case "GG":
		case "GGGG":
		case "GGGGG":
			a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b)
		}
	}
	function K(a) {
		var b,
			c,
			d,
			e,
			f,
			g,
			h,
			i,
			j,
			k,
			l = [];
		if (!a._d) {
			for (d = M(a), a._w && null == a._a[ka] && null == a._a[ja] && (f = function(b) {
					var c = parseInt(b, 10);
					return b ? b.length < 3 ? c > 68 ? 1900 + c : 2e3 + c : c : null == a._a[ia] ? da().weekYear() : a._a[ia]
				}, g = a._w, null != g.GG || null != g.W || null != g.E ? h = Z(f(g.GG), g.W || 1, g.E, 4, 1) : (i = C(a._l), j = null != g.d ? V(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = Z(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[ia] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[ia] ? d[ia] : a._a[ia], a._dayOfYear > u(e) && (a._pf._overflowDayOfYear = !0), c = U(e, 0, a._dayOfYear), a._a[ja] = c.getUTCMonth(), a._a[ka] = c.getUTCDate()), b = 0;3 > b && null == a._a[b]; ++b) a._a[b] = l[b] = d[b];
			for (; 7 > b; b++) a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
			l[la] += s((a._tzm || 0) / 60), l[ma] += s((a._tzm || 0) % 60), a._d = (a._useUTC ? U : T).apply(null, l)
		}
	}
	function L(a) {
		var b;
		a._d || (b = q(a._i), a._a = [ b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond ], K(a))
	}
	function M(a) {
		var b = new Date;
		return a._useUTC ? [ b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate() ] : [ b.getFullYear(), b.getMonth(), b.getDate() ]
	}
	function N(a) {
		a._a = [], a._pf.empty = !0;var b,
			c,
			d,
			e,
			f,
			g = C(a._l),
			h = "" + a._i,
			i = h.length,
			j = 0;
		for (d = G(a._f, g).match(va) || [], b = 0; b < d.length; b++) e = d[b], c = (h.match(H(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), Ya[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), J(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
		a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[la] < 12 && (a._a[la] += 12), a._isPm === !1 && 12 === a._a[la] && (a._a[la] = 0), K(a), w(a)
	}
	function O(a) {
		return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
			return b || c || d || e
		})
	}
	function P(a) {
		return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}
	function Q(a) {
		var c,
			d,
			e,
			f,
			g;
		if (0 === a._f.length) return a._pf.invalidFormat = !0, void (a._d = new Date(NaN));
		for (f = 0; f < a._f.length; f++) g = 0, c = h({}, a), c._pf = b(), c._f = a._f[f], N(c), x(c) && (g += c._pf.charsLeftOver, g += 10 * c._pf.unusedTokens.length, c._pf.score = g, (null == e || e > g) && (e = g, d = c));
		h(a, d || c)
	}
	function R(a) {
		var b,
			c,
			d = a._i,
			e = Ma.exec(d);
		if (e) {
			for (a._pf.iso = !0, b = 0, c = Oa.length; c > b; b++)
				if (Oa[b][1].exec(d)) {
					a._f = Oa[b][0] + (e[6] || " ");break
			}
			for (b = 0, c = Pa.length; c > b; b++)
				if (Pa[b][1].exec(d)) {
					a._f += Pa[b][0];break
			}
			d.match(Da) && (a._f += "Z"), N(a)
		} else
			a._d = new Date(d)
	}
	function S(b) {
		var c = b._i,
			d = sa.exec(c);
		c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? R(b) : m(c) ? (b._a = c.slice(0), K(b)) : n(c) ? b._d = new Date(+c) : "object" == typeof c ? L(b) : b._d = new Date(c)
	}
	function T(a, b, c, d, e, f, g) {
		var h = new Date(a, b, c, d, e, f, g);
		return 1970 > a && h.setFullYear(a), h
	}
	function U(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		return 1970 > a && b.setUTCFullYear(a), b
	}
	function V(a, b) {
		if ("string" == typeof a)
			if (isNaN(a)) {
				if (a = b.weekdaysParse(a), "number" != typeof a) return null
			} else
				a = parseInt(a, 10);
		return a
	}
	function W(a, b, c, d, e) {
		return e.relativeTime(b || 1, !!c, a, d)
	}
	function X(a, b, c) {
		var d = ha(Math.abs(a) / 1e3),
			e = ha(d / 60),
			f = ha(e / 60),
			g = ha(f / 24),
			h = ha(g / 365),
			i = 45 > d && [ "s", d ] || 1 === e && [ "m" ] || 45 > e && [ "mm", e ] || 1 === f && [ "h" ] || 22 > f && [ "hh", f ] || 1 === g && [ "d" ] || 25 >= g && [ "dd", g ] || 45 >= g && [ "M" ] || 345 > g && [ "MM", ha(g / 30) ] || 1 === h && [ "y" ] || [ "yy", h ];
		return i[2] = b, i[3] = a > 0, i[4] = c, W.apply({}, i)
	}
	function Y(a, b, c) {
		var d,
			e = c - b,
			f = c - a.day();
		return f > e && (f -= 7), e - 7 > f && (f += 7), d = da(a).add("d", f), {
				week : Math.ceil(d.dayOfYear() / 7),
				year : d.year()
		}
	}
	function Z(a, b, c, d, e) {
		var f,
			g,
			h = U(a, 0, 1).getUTCDay();
		return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
				year : g > 0 ? a : a - 1,
				dayOfYear : g > 0 ? g : u(a - 1) + g
		}
	}
	function $(a) {
		var b = a._i,
			c = a._f;
		return null === b ? da.invalid({
			nullInput : !0
		}) : ("string" == typeof b && (a._i = b = C().preparse(b)), da.isMoment(b) ? (a = i(b), a._d = new Date(+b._d)) : c ? m(c) ? Q(a) : N(a) : S(a), new f(a))
	}
	function _(a, b) {
		da.fn[a] = da.fn[a + "s"] = function(a) {
			var c = this._isUTC ? "UTC" : "";
			return null != a ? (this._d["set" + c + b](a), da.updateOffset(this), this) : this._d["get" + c + b]()
		}
	}
	function aa(a) {
		da.duration.fn[a] = function() {
			return this._data[a]
		}
	}
	function ba(a, b) {
		da.duration.fn["as" + a] = function() {
			return +this / b
		}
	}
	function ca(a) {
		var b = !1,
			c = da;
		"undefined" == typeof ender && (a ? (ga.moment = function() {
			return !b && console && console.warn && (b = !0,
				console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), c.apply(null, arguments)
		}, h(ga.moment, c)) : ga.moment = da)
	}
	for (var da, ea, fa = "2.5.1", ga = this, ha = Math.round, ia = 0, ja = 1, ka = 2, la = 3, ma = 4, na = 5, oa = 6, pa = {}, qa = {
				_isAMomentObject : null,
				_i : null,
				_f : null,
				_l : null,
				_strict : null,
				_isUTC : null,
				_offset : null,
				_pf : null,
				_lang : null
			}, ra = "undefined" != typeof module && module.exports && "undefined" != typeof require, sa = /^\/?Date\((\-?\d+)/i, ta = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, ua = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, va = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, wa = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, xa = /\d\d?/, ya = /\d{1,3}/, za = /\d{1,4}/, Aa = /[+\-]?\d{1,6}/, Ba = /\d+/, Ca = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Da = /Z|[\+\-]\d\d:?\d\d/gi, Ea = /T/i, Fa = /[\+\-]?\d+(\.\d{1,3})?/, Ga = /\d/, Ha = /\d\d/, Ia = /\d{3}/, Ja = /\d{4}/, Ka = /[+-]?\d{6}/, La = /[+-]?\d+/, Ma = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Na = "YYYY-MM-DDTHH:mm:ssZ", Oa = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/ ], [ "YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d{2}/ ], [ "YYYY-DDD", /\d{4}-\d{3}/ ] ], Pa = [ [ "HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/ ], [ "HH:mm:ss", /(T| )\d\d:\d\d:\d\d/ ], [ "HH:mm", /(T| )\d\d:\d\d/ ], [ "HH", /(T| )\d\d/ ] ], Qa = /([\+\-]|\d\d)/gi, Ra = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Sa = {
				Milliseconds : 1,
				Seconds : 1e3,
				Minutes : 6e4,
				Hours : 36e5,
				Days : 864e5,
				Months : 2592e6,
				Years : 31536e6
			}, Ta = {
				ms : "millisecond",
				s : "second",
				m : "minute",
				h : "hour",
				d : "day",
				D : "date",
				w : "week",
				W : "isoWeek",
				M : "month",
				y : "year",
				DDD : "dayOfYear",
				e : "weekday",
				E : "isoWeekday",
				gg : "weekYear",
				GG : "isoWeekYear"
			}, Ua = {
				dayofyear : "dayOfYear",
				isoweekday : "isoWeekday",
				isoweek : "isoWeek",
				weekyear : "weekYear",
				isoweekyear : "isoWeekYear"
			}, Va = {}, Wa = "DDD w W M D d".split(" "), Xa = "M D H h m s w W".split(" "), Ya = {
				M : function() {
					return this.month() + 1
				},
				MMM : function(a) {
					return this.lang().monthsShort(this, a)
				},
				MMMM : function(a) {
					return this.lang().months(this, a)
				},
				D : function() {
					return this.date()
				},
				DDD : function() {
					return this.dayOfYear()
				},
				d : function() {
					return this.day()
				},
				dd : function(a) {
					return this.lang().weekdaysMin(this, a)
				},
				ddd : function(a) {
					return this.lang().weekdaysShort(this, a)
				},
				dddd : function(a) {
					return this.lang().weekdays(this, a)
				},
				w : function() {
					return this.week()
				},
				W : function() {
					return this.isoWeek()
				},
				YY : function() {
					return k(this.year() % 100, 2)
				},
				YYYY : function() {
					return k(this.year(), 4)
				},
				YYYYY : function() {
					return k(this.year(), 5)
				},
				YYYYYY : function() {
					var a = this.year(),
						b = a >= 0 ? "+" : "-";
					return b + k(Math.abs(a), 6)
				},
				gg : function() {
					return k(this.weekYear() % 100, 2)
				},
				gggg : function() {
					return k(this.weekYear(), 4)
				},
				ggggg : function() {
					return k(this.weekYear(), 5)
				},
				GG : function() {
					return k(this.isoWeekYear() % 100, 2)
				},
				GGGG : function() {
					return k(this.isoWeekYear(), 4)
				},
				GGGGG : function() {
					return k(this.isoWeekYear(), 5)
				},
				e : function() {
					return this.weekday()
				},
				E : function() {
					return this.isoWeekday()
				},
				a : function() {
					return this.lang().meridiem(this.hours(), this.minutes(), !0)
				},
				A : function() {
					return this.lang().meridiem(this.hours(), this.minutes(), !1)
				},
				H : function() {
					return this.hours()
				},
				h : function() {
					return this.hours() % 12 || 12
				},
				m : function() {
					return this.minutes()
				},
				s : function() {
					return this.seconds()
				},
				S : function() {
					return s(this.milliseconds() / 100)
				},
				SS : function() {
					return k(s(this.milliseconds() / 10), 2)
				},
				SSS : function() {
					return k(this.milliseconds(), 3)
				},
				SSSS : function() {
					return k(this.milliseconds(), 3)
				},
				Z : function() {
					var a = -this.zone(),
						b = "+";
					return 0 > a && (a = -a, b = "-"), b + k(s(a / 60), 2) + ":" + k(s(a) % 60, 2)
				},
				ZZ : function() {
					var a = -this.zone(),
						b = "+";
					return 0 > a && (a = -a, b = "-"), b + k(s(a / 60), 2) + k(s(a) % 60, 2)
				},
				z : function() {
					return this.zoneAbbr()
				},
				zz : function() {
					return this.zoneName()
				},
				X : function() {
					return this.unix()
				},
				Q : function() {
					return this.quarter()
				}
			}, Za = [ "months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin" ];Wa.length;) ea = Wa.pop(), Ya[ea + "o"] = d(Ya[ea], ea);
	for (; Xa.length;) ea = Xa.pop(), Ya[ea + ea] = c(Ya[ea], 2);
	for (Ya.DDDD = c(Ya.DDD, 3), h(e.prototype, {
			set : function(a) {
				var b,
					c;
				for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
			},
			_months : "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			months : function(a) {
				return this._months[a.month()]
			},
			_monthsShort : "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort : function(a) {
				return this._monthsShort[a.month()]
			},
			monthsParse : function(a) {
				var b,
					c,
					d;
				for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)
					if (this._monthsParse[b] || (c = da.utc([ 2e3, b ]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
			},
			_weekdays : "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdays : function(a) {
				return this._weekdays[a.day()]
			},
			_weekdaysShort : "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort : function(a) {
				return this._weekdaysShort[a.day()]
			},
			_weekdaysMin : "日_一_二_三_四_五_六".split("_"),
			weekdaysMin : function(a) {
				return this._weekdaysMin[a.day()]
			},
			weekdaysParse : function(a) {
				var b,
					c,
					d;
				for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
					if (this._weekdaysParse[b] || (c = da([ 2e3, 1 ]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
			},
			_longDateFormat : {
				LT : "h:mm A",
				L : "YYYY-MM-DD",
				LL : "MMMM D YYYY",
				LLL : "MMMM D YYYY LT",
				LLLL : "dddd, MMMM D YYYY LT"
			},
			longDateFormat : function(a) {
				var b = this._longDateFormat[a];
				return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
						return a.slice(1)
					}), this._longDateFormat[a] = b), b
			},
			isPM : function(a) {
				return "p" === (a + "").toLowerCase().charAt(0)
			},
			_meridiemParse : /[ap]\.?m?\.?/i,
			meridiem : function(a, b, c) {
				return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
			},
			_calendar : {
				sameDay : "[Today at] LT",
				nextDay : "[Tomorrow at] LT",
				nextWeek : "dddd [at] LT",
				lastDay : "[Yesterday at] LT",
				lastWeek : "[Last] dddd [at] LT",
				sameElse : "L"
			},
			calendar : function(a, b) {
				var c = this._calendar[a];
				return "function" == typeof c ? c.apply(b) : c
			},
			_relativeTime : {
				future : "in %s",
				past : "%s ago",
				s : "a few seconds",
				m : "a minute",
				mm : "%d minutes",
				h : "an hour",
				hh : "%d hours",
				d : "a day",
				dd : "%d days",
				M : "a month",
				MM : "%d months",
				y : "a year",
				yy : "%d years"
			},
			relativeTime : function(a, b, c, d) {
				var e = this._relativeTime[c];
				return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
			},
			pastFuture : function(a, b) {
				var c = this._relativeTime[a > 0 ? "future" : "past"];
				return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
			},
			ordinal : function(a) {
				return this._ordinal.replace("%d", a)
			},
			_ordinal : "%d",
			preparse : function(a) {
				return a
			},
			postformat : function(a) {
				return a
			},
			week : function(a) {
				return Y(a, this._week.dow, this._week.doy).week
			},
			_week : {
				dow : 0,
				doy : 6
			},
			_invalidDate : "Invalid date",
			invalidDate : function() {
				return this._invalidDate
			}
		}), da = function(c, d, e, f) {
			var g;
			return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = c, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = b(), $(g)
		}, da.utc = function(c, d, e, f) {
			var g;
			return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = c, g._f = d, g._strict = f, g._pf = b(), $(g).utc()
		}, da.unix = function(a) {
			return da(1e3 * a)
		}, da.duration = function(a, b) {
			var c,
				d,
				e,
				f = a,
				h = null;
			return da.isDuration(a) ? f = {
					ms : a._milliseconds,
					d : a._days,
					M : a._months
				} : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = ta.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
					y : 0,
					d : s(h[ka]) * c,
					h : s(h[la]) * c,
					m : s(h[ma]) * c,
					s : s(h[na]) * c,
					ms : s(h[oa]) * c
				}) : (h = ua.exec(a)) && (c = "-" === h[1] ? -1 : 1, e = function(a) {
					var b = a && parseFloat(a.replace(",", "."));
					return (isNaN(b) ? 0 : b) * c
				}, f = {
					y : e(h[2]),
					M : e(h[3]),
					d : e(h[4]),
					h : e(h[5]),
					m : e(h[6]),
					s : e(h[7]),
					w : e(h[8])
				}), d = new g(f), da.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
		}, da.version = fa, da.defaultFormat = Na, da.updateOffset = function() {}, da.lang = function(a, b) {
			var c;
			return a ? (b ? A(y(a), b) : null === b ? (B(a), a = "en") : pa[a] || C(a), c = da.duration.fn._lang = da.fn._lang = C(a), c._abbr) : da.fn._lang._abbr
		}, da.langData = function(a) {
			return a && a._lang && a._lang._abbr && (a = a._lang._abbr), C(a)
		}, da.isMoment = function(a) {
			return a instanceof f || null != a && a.hasOwnProperty("_isAMomentObject")
		}, da.isDuration = function(a) {
			return a instanceof g
		}, ea = Za.length - 1;ea >= 0; --ea) r(Za[ea]);
	for (da.normalizeUnits = function(a) {
			return p(a)
		}, da.invalid = function(a) {
			var b = da.utc(NaN);
			return null != a ? h(b._pf, a) : b._pf.userInvalidated = !0, b
		}, da.parseZone = function(a) {
			return da(a).parseZone()
		}, h(da.fn = f.prototype, {
			clone : function() {
				return da(this)
			},
			valueOf : function() {
				return +this._d + 6e4 * (this._offset || 0)
			},
			unix : function() {
				return Math.floor(+this / 1e3)
			},
			toString : function() {
				return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
			},
			toDate : function() {
				return this._offset ? new Date(+this) : this._d
			},
			toISOString : function() {
				var a = da(this).utc();
				return 0 < a.year() && a.year() <= 9999 ? F(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : F(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
			},
			toArray : function() {
				var a = this;
				return [ a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds() ]
			},
			isValid : function() {
				return x(this)
			},
			isDSTShifted : function() {
				return this._a ? this.isValid() && o(this._a, (this._isUTC ? da.utc(this._a) : da(this._a)).toArray()) > 0 : !1
			},
			parsingFlags : function() {
				return h({}, this._pf)
			},
			invalidAt : function() {
				return this._pf.overflow
			},
			utc : function() {
				return this.zone(0)
			},
			local : function() {
				return this.zone(0), this._isUTC = !1, this
			},
			format : function(a) {
				var b = F(this, a || da.defaultFormat);
				return this.lang().postformat(b)
			},
			add : function(a, b) {
				var c;
				return c = "string" == typeof a ? da.duration(+b, a) : da.duration(a, b), l(this, c, 1), this
			},
			subtract : function(a, b) {
				var c;
				return c = "string" == typeof a ? da.duration(+b, a) : da.duration(a, b), l(this, c, -1), this
			},
			diff : function(a, b, c) {
				var d,
					e,
					f = z(a, this),
					g = 6e4 * (this.zone() - f.zone());
				return b = p(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - da(this).startOf("month") - (f - da(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - da(this).startOf("month").zone() - (f.zone() - da(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : j(e)
			},
			from : function(a, b) {
				return da.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
			},
			fromNow : function(a) {
				return this.from(da(), a)
			},
			calendar : function() {
				var a = z(da(), this).startOf("day"),
					b = this.diff(a, "days", !0),
					c = -6 > b ? "sameElse" : -1 > b ? "lastWeek" : 0 > b ? "lastDay" : 1 > b ? "sameDay" : 2 > b ? "nextDay" : 7 > b ? "nextWeek" : "sameElse";
				return this.format(this.lang().calendar(c, this))
			},
			isLeapYear : function() {
				return v(this.year())
			},
			isDST : function() {
				return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
			},
			day : function(a) {
				var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
				return null != a ? (a = V(a, this.lang()), this.add({
					d : a - b
				})) : b
			},
			month : function(a) {
				var b,
					c = this._isUTC ? "UTC" : "";
				return null != a ? "string" == typeof a && (a = this.lang().monthsParse(a), "number" != typeof a) ? this : (b = this.date(), this.date(1), this._d["set" + c + "Month"](a), this.date(Math.min(b, this.daysInMonth())), da.updateOffset(this), this) : this._d["get" + c + "Month"]()
			},
			startOf : function(a) {
				switch (
				a = p(a)) {
				case "year":
					this.month(0);case "month":
					this.date(1);case "week":
				case "isoWeek":
				case "day":
					this.hours(0);case "hour":
					this.minutes(0);case "minute":
					this.seconds(0);case "second":
					this.milliseconds(0)
				}
				return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), this
			},
			endOf : function(a) {
				return a = p(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
			},
			isAfter : function(a, b) {
				return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +da(a).startOf(b)
			},
			isBefore : function(a, b) {
				return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +da(a).startOf(b)
			},
			isSame : function(a, b) {
				return b = b || "ms", +this.clone().startOf(b) === +z(a, this).startOf(b)
			},
			min : function(a) {
				return a = da.apply(null, arguments), this > a ? this : a
			},
			max : function(a) {
				return a = da.apply(null, arguments), a > this ? this : a
			},
			zone : function(a) {
				var b = this._offset || 0;
				return null == a ? this._isUTC ? b : this._d.getTimezoneOffset() : ("string" == typeof a && (a = I(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, b !== a && l(this, da.duration(b - a, "m"), 1, !0), this)
			},
			zoneAbbr : function() {
				return this._isUTC ? "UTC" : ""
			},
			zoneName : function() {
				return this._isUTC ? "Coordinated Universal Time" : ""
			},
			parseZone : function() {
				return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
			},
			hasAlignedHourOffset : function(a) {
				return a = a ? da(a).zone() : 0, (this.zone() - a) % 60 === 0
			},
			daysInMonth : function() {
				return t(this.year(), this.month())
			},
			dayOfYear : function(a) {
				var b = ha((da(this).startOf("day") - da(this).startOf("year")) / 864e5) + 1;
				return null == a ? b : this.add("d", a - b)
			},
			quarter : function() {
				return Math.ceil((this.month() + 1) / 3)
			},
			weekYear : function(a) {
				var b = Y(this, this.lang()._week.dow, this.lang()._week.doy).year;
				return null == a ? b : this.add("y", a - b)
			},
			isoWeekYear : function(a) {
				var b = Y(this, 1, 4).year;
				return null == a ? b : this.add("y", a - b)
			},
			week : function(a) {
				var b = this.lang().week(this);
				return null == a ? b : this.add("d", 7 * (a - b))
			},
			isoWeek : function(a) {
				var b = Y(this, 1, 4).week;
				return null == a ? b : this.add("d", 7 * (a - b))
			},
			weekday : function(a) {
				var b = (this.day() + 7 - this.lang()._week.dow) % 7;
				return null == a ? b : this.add("d", a - b)
			},
			isoWeekday : function(a) {
				return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
			},
			get : function(a) {
				return a = p(a), this[a]()
			},
			set : function(a, b) {
				return a = p(a), "function" == typeof this[a] && this[a](b), this
			},
			lang : function(b) {
				return b === a ? this._lang : (this._lang = C(b), this)
			}
		}), ea = 0;ea < Ra.length; ea++) _(Ra[ea].toLowerCase().replace(/s$/, ""), Ra[ea]);
	_("year", "FullYear"), da.fn.days = da.fn.day, da.fn.months = da.fn.month, da.fn.weeks = da.fn.week, da.fn.isoWeeks = da.fn.isoWeek, da.fn.toJSON = da.fn.toISOString, h(da.duration.fn = g.prototype, {
		_bubble : function() {
			var a,
				b,
				c,
				d,
				e = this._milliseconds,
				f = this._days,
				g = this._months,
				h = this._data;
			h.milliseconds = e % 1e3, a = j(e / 1e3), h.seconds = a % 60, b = j(a / 60), h.minutes = b % 60, c = j(b / 60), h.hours = c % 24, f += j(c / 24), h.days = f % 30, g += j(f / 30), h.months = g % 12, d = j(g / 12), h.years = d
		},
		weeks : function() {
			return j(this.days() / 7)
		},
		valueOf : function() {
			return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * s(this._months / 12)
		},
		humanize : function(a) {
			var b = +this,
				c = X(b, !a, this.lang());
			return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
		},
		add : function(a, b) {
			var c = da.duration(a, b);
			return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
		},
		subtract : function(a, b) {
			var c = da.duration(a, b);
			return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
		},
		get : function(a) {
			return a = p(a), this[a.toLowerCase() + "s"]()
		},
		as : function(a) {
			return a = p(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
		},
		lang : da.fn.lang,
		toIsoString : function() {
			var a = Math.abs(this.years()),
				b = Math.abs(this.months()),
				c = Math.abs(this.days()),
				d = Math.abs(this.hours()),
				e = Math.abs(this.minutes()),
				f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
			return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
		}
	});
	for (ea in Sa) Sa.hasOwnProperty(ea) && (ba(ea, Sa[ea]), aa(ea.toLowerCase()));
	ba("Weeks", 6048e5), da.duration.fn.asMonths = function() {
		return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
	}, da.lang("en", {
		ordinal : function(a) {
			var b = a % 10,
				c = 1 === s(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
			return a + c
		}
	}), ra ? (module.exports = da, ca(!0)) : "function" == typeof define && define.amd ? define("moment", function(b, c, d) {
		return d.config && d.config() && d.config().noGlobal !== !0 && ca(d.config().noGlobal === a), da
	}) : ca()
}.call(this), !function(a, b) {
	var c = function(b, c, d) {
		this.parentEl = "body", this.element = a(b);
		var e = '<div class="daterangepicker dropdown-menu"><div class="calendar left"></div><div class="calendar right"></div><div class="clear"></div><div class="ranges"><div class="range_inputs"><button class="applyBtn"></button>&nbsp;<button class="cancelBtn"></button></div></div><div class="clear"></div>';
		("object" != typeof c || null === c) && (c = {}), this.parentEl = a("object" == typeof c && c.parentEl && a(c.parentEl).length ? c.parentEl : this.parentEl), this.container = a(e).appendTo(this.parentEl), this.setOptions(c, d);
		var f = this.container;
		a.each(this.buttonClasses, function(a, b) {
			f.find("button").addClass(b)
		}), this.container.find(".daterangepicker_start_input label").html(this.locale.fromLabel), this.container.find(".daterangepicker_end_input label").html(this.locale.toLabel), this.applyClass.length && this.container.find(".applyBtn").addClass(this.applyClass), this.cancelClass.length && this.container.find(".cancelBtn").addClass(this.cancelClass), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".calendar").on("click.daterangepicker", ".prev", a.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", a.proxy(this.clickNext, this)).on("click.daterangepicker", "td.available", a.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", a.proxy(this.enterDate, this)).on("mouseleave.daterangepicker", "td.available", a.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", a.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.monthselect", a.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.ampmselect", a.proxy(this.updateTime, this)), this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", a.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", a.proxy(this.clickCancel, this)).on("click.daterangepicker", ".daterangepicker_start_input,.daterangepicker_end_input", a.proxy(this.showCalendars, this)).on("click.daterangepicker", "li", a.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", a.proxy(this.enterRange, this)).on("mouseleave.daterangepicker", "li", a.proxy(this.updateFormInputs, this)), this.element.is("input") ? this.element.on({
			"click.daterangepicker" : a.proxy(this.show, this),
			"focus.daterangepicker" : a.proxy(this.show, this),
			"keyup.daterangepicker" : a.proxy(this.updateFromControl, this)
		}) : this.element.on("click.daterangepicker", a.proxy(this.toggle, this))
	};
	c.prototype = {
		constructor : c,
		setOptions : function(c, d) {
			if (this.startDate = b().startOf("day"), this.endDate = b().endOf("day"), this.minDate = !1, this.maxDate = !1, this.dateLimit = !1, this.showDropdowns = !1, this.showWeekNumbers = !1, this.timePicker = !1, this.timePickerIncrement = 30, this.timePicker12Hour = !0, this.singleDatePicker = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.buttonClasses = [ "btn", "btn-small" ], this.applyClass = "ue-btn-primary", this.cancelClass = "ue-btn", this.format = "YYYY-MM-DD", this.separator = " - ", this.locale = {
					applyLabel : "确定",
					cancelLabel : "取消",
					fromLabel : "从",
					toLabel : "到",
					weekLabel : "W",
					customRangeLabel : "Custom Range",
					daysOfWeek : b()._lang._weekdaysMin.slice(),
					monthNames : b()._lang._monthsShort.slice(),
					firstDay : 0
				}, this.cb = function() {}, "string" == typeof c.format && (this.format = c.format), "string" == typeof c.separator && (this.separator = c.separator), "string" == typeof c.startDate && (this.startDate = b(c.startDate, this.format)), "string" == typeof c.endDate && (this.endDate = b(c.endDate, this.format)), "string" == typeof c.minDate && (this.minDate = b(c.minDate, this.format)), "string" == typeof c.maxDate && (this.maxDate = b(c.maxDate, this.format)), "object" == typeof c.startDate && (this.startDate = b(c.startDate)), "object" == typeof c.endDate && (this.endDate = b(c.endDate)), "object" == typeof c.minDate && (this.minDate = b(c.minDate)), "object" == typeof c.maxDate && (this.maxDate = b(c.maxDate)), "string" == typeof c.applyClass && (this.applyClass = c.applyClass), "string" == typeof c.cancelClass && (this.cancelClass = c.cancelClass), "object" == typeof c.dateLimit && (this.dateLimit = c.dateLimit), "object" == typeof c.locale) {
				if ("object" == typeof c.locale.daysOfWeek && (this.locale.daysOfWeek = c.locale.daysOfWeek.slice()), "object" == typeof c.locale.monthNames && (this.locale.monthNames = c.locale.monthNames.slice()), "number" == typeof c.locale.firstDay) {
					this.locale.firstDay = c.locale.firstDay;
					for (var e = c.locale.firstDay; e > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), e--
				}
				"string" == typeof c.locale.applyLabel && (this.locale.applyLabel = c.locale.applyLabel), "string" == typeof c.locale.cancelLabel && (this.locale.cancelLabel = c.locale.cancelLabel), "string" == typeof c.locale.fromLabel && (this.locale.fromLabel = c.locale.fromLabel), "string" == typeof c.locale.toLabel && (this.locale.toLabel = c.locale.toLabel), "string" == typeof c.locale.weekLabel && (this.locale.weekLabel = c.locale.weekLabel), "string" == typeof c.locale.customRangeLabel && (this.locale.customRangeLabel = c.locale.customRangeLabel)
			}
			"string" == typeof c.opens && (this.opens = c.opens), "boolean" == typeof c.showWeekNumbers && (this.showWeekNumbers = c.showWeekNumbers), "string" == typeof c.buttonClasses && (this.buttonClasses = [ c.buttonClasses ]), "object" == typeof c.buttonClasses && (this.buttonClasses = c.buttonClasses), "boolean" == typeof c.showDropdowns && (this.showDropdowns = c.showDropdowns), "boolean" == typeof c.singleDatePicker && (this.singleDatePicker = c.singleDatePicker), "boolean" == typeof c.timePicker && (this.timePicker = c.timePicker), "number" == typeof c.timePickerIncrement && (this.timePickerIncrement = c.timePickerIncrement), "boolean" == typeof c.timePicker12Hour && (this.timePicker12Hour = c.timePicker12Hour);
			var f,
				g,
				h;
			if ("undefined" == typeof c.startDate && "undefined" == typeof c.endDate && a(this.element).is("input[type=text]")) {
				var i = a(this.element).val(),
					j = i.split(this.separator);
				f = g = null, 2 == j.length ? (f = b(j[0], this.format), g = b(j[1], this.format)) : this.singleDatePicker && (f = b(i, this.format), g = b(i, this.format)), null !== f && null !== g && (this.startDate = f, this.endDate = g)
			}
			if ("object" == typeof c.ranges) {
				for (h in c.ranges) f = b(c.ranges[h][0]), g = b(c.ranges[h][1]), this.minDate && f.isBefore(this.minDate) && (f = b(this.minDate)), this.maxDate && g.isAfter(this.maxDate) && (g = b(this.maxDate)), this.minDate && g.isBefore(this.minDate) || this.maxDate && f.isAfter(this.maxDate) || (this.ranges[h] = [ f, g ]);
				var k = "<ul>";
				for (h in this.ranges) k += "<li>" + h + "</li>";
				k += "<li>" + this.locale.customRangeLabel + "</li>", k += "</ul>", this.container.find(".ranges ul").remove(), this.container.find(".ranges").prepend(k)
			}
			if ("function" == typeof d && (this.cb = d), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day")), this.singleDatePicker ? (this.opens = "right", this.container.find(".calendar.right").show(), this.container.find(".calendar.left").hide(), this.container.find(".ranges").hide(), this.container.find(".calendar.right").hasClass("single") || this.container.find(".calendar.right").addClass("single")) : (this.container.find(".calendar.right").removeClass("single"), this.container.find(".ranges").show()), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.oldChosenLabel = this.chosenLabel, this.leftCalendar = {
					month : b([ this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate.minute() ]),
					calendar : []
				}, this.rightCalendar = {
					month : b([ this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute() ]),
					calendar : []
				}, "right" == this.opens) {
				var l = this.container.find(".calendar.left"),
					m = this.container.find(".calendar.right");
				l.removeClass("left").addClass("right"), m.removeClass("right").addClass("left")
			}
			"undefined" != typeof c.ranges || this.singleDatePicker || this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.updateView(), this.updateCalendars()
		},
		setStartDate : function(a) {
			"string" == typeof a && (this.startDate = b(a, this.format)), "object" == typeof a && (this.startDate = b(a)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.oldStartDate = this.startDate.clone(), this.updateView(), this.updateCalendars()
		},
		setEndDate : function(a) {
			"string" == typeof a && (this.endDate = b(a, this.format)), "object" == typeof a && (this.endDate = b(a)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.oldEndDate = this.endDate.clone(), this.updateView(), this.updateCalendars()
		},
		updateView : function() {
			this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()), this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()), this.updateFormInputs()
		},
		updateFormInputs : function() {
			this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format)), this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format)), this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
		},
		updateFromControl : function() {
			if (this.element.is("input") && this.element.val().length) {
				var a = this.element.val().split(this.separator),
					c = null,
					d = null;
				2 === a.length && (c = b(a[0], this.format), d = b(a[1], this.format)), (this.singleDatePicker || null === c || null === d) && (c = b(this.element.val(), this.format), d = c), d.isBefore(c) || (this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.startDate = c, this.endDate = d, this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.notify(), this.updateCalendars())
			}
		},
		notify : function() {
			this.updateView(), this.cb(this.startDate, this.endDate, this.chosenLabel)
		},
		move : function() {
			var b = {
				top : 0,
				left : 0
			};
			this.parentEl.is("body") || (b = {
				top : this.parentEl.offset().top - this.parentEl.scrollTop(),
				left : this.parentEl.offset().left - this.parentEl.scrollLeft()
			}), "left" == this.opens ? (this.container.css({
				top : this.element.offset().top + this.element.outerHeight() - b.top,
				right : a(window).width() - this.element.offset().left - this.element.outerWidth() - b.left,
				left : "auto"
			}), this.container.offset().left < 0 && this.container.css({
				right : "auto",
				left : 9
			})) : (this.container.css({
				top : this.element.offset().top + this.element.outerHeight() - b.top,
				left : this.element.offset().left - b.left,
				right : "auto"
			}), this.container.offset().left + this.container.outerWidth() > a(window).width() && this.container.css({
				left : "auto",
				right : 0
			}))
		},
		toggle : function(a) {
			this.element.hasClass("active") ? this.hide() : this.show()
		},
		show : function(b) {
			this.element.addClass("active"), this.container.show(), this.move(), a(document).on("click.daterangepicker", a.proxy(this.outsideClick, this)), a(document).on("click.daterangepicker", "[data-toggle=dropdown]", a.proxy(this.outsideClick, this)), this.element.trigger("show.daterangepicker", this)
		},
		outsideClick : function(b) {
			var c = a(b.target);
			c.closest(this.element).length || c.closest(this.container).length || c.closest(".calendar-date").length || this.hide()
		},
		hide : function(b) {
			a(document).off("click.daterangepicker", this.outsideClick), this.element.removeClass("active"), this.container.hide(), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.notify(), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.element.trigger("hide.daterangepicker", this)
		},
		enterRange : function(a) {
			var b = a.target.innerHTML;
			if (b == this.locale.customRangeLabel) this.updateView();else {
				var c = this.ranges[b];
				this.container.find("input[name=daterangepicker_start]").val(c[0].format(this.format)), this.container.find("input[name=daterangepicker_end]").val(c[1].format(this.format))
			}
		},
		showCalendars : function() {
			this.container.addClass("show-calendar"), this.move()
		},
		hideCalendars : function() {
			this.container.removeClass("show-calendar")
		},
		updateInputText : function() {
			this.element.is("input") && !this.singleDatePicker ? this.element.val(this.startDate.format(this.format) + this.separator + this.endDate.format(this.format)) : this.element.is("input") && this.element.val(this.startDate.format(this.format))
		},
		clickRange : function(a) {
			var b = a.target.innerHTML;
			if (this.chosenLabel = b, b == this.locale.customRangeLabel) this.showCalendars();else {
				var c = this.ranges[b];
				this.startDate = c[0], this.endDate = c[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute()), this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute()), this.updateCalendars(), this.updateInputText(), this.hideCalendars(), this.hide(), this.element.trigger("apply.daterangepicker", this)
			}
		},
		clickPrev : function(b) {
			var c = a(b.target).parents(".calendar");
			c.hasClass("left") ? this.leftCalendar.month.subtract("month", 1) : this.rightCalendar.month.subtract("month", 1), this.updateCalendars()
		},
		clickNext : function(b) {
			var c = a(b.target).parents(".calendar");
			c.hasClass("left") ? this.leftCalendar.month.add("month", 1) : this.rightCalendar.month.add("month", 1), this.updateCalendars()
		},
		enterDate : function(b) {
			var c = a(b.target).attr("data-title"),
				d = c.substr(1, 1),
				e = c.substr(3, 1),
				f = a(b.target).parents(".calendar");
			f.hasClass("left") ? this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[d][e].format(this.format)) : this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[d][e].format(this.format))
		},
		clickDate : function(c) {
			var d,
				e,
				f = a(c.target).attr("data-title"),
				g = f.substr(1, 1),
				h = f.substr(3, 1),
				i = a(c.target).parents(".calendar");
			if (i.hasClass("left")) {
				if (d = this.leftCalendar.calendar[g][h], e = this.endDate, "object" == typeof this.dateLimit) {
					var j = b(d).add(this.dateLimit).startOf("day");
					e.isAfter(j) && (e = j)
				}
			} else if (d = this.startDate, e = this.rightCalendar.calendar[g][h], "object" == typeof this.dateLimit) {
				var k = b(e).subtract(this.dateLimit).startOf("day");
				d.isBefore(k) && (d = k)
			}
			if (this.singleDatePicker && i.hasClass("left") ? e = d.clone() : this.singleDatePicker && i.hasClass("right") && (d = e.clone()), i.find("td").removeClass("active"), d.isSame(e) || d.isBefore(e)) a(c.target).addClass("active"), this.startDate = d, this.endDate = e, this.chosenLabel = this.locale.customRangeLabel;
			else if (d.isAfter(e)) {
				a(c.target).addClass("active");
				var l = this.endDate.diff(this.startDate);
				this.startDate = d, this.endDate = b(d).add("ms", l), this.chosenLabel = this.locale.customRangeLabel
			}
			this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()), this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()), this.updateCalendars(), this.timePicker || e.endOf("day"), this.singleDatePicker && this.clickApply()
		},
		clickApply : function(a) {
			this.updateInputText(), this.hide(), this.element.trigger("apply.daterangepicker", this)
		},
		clickCancel : function(a) {
			this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.chosenLabel = this.oldChosenLabel, this.updateView(), this.updateCalendars(), this.hide(), this.element.trigger("cancel.daterangepicker", this)
		},
		updateMonthYear : function(b) {
			var c = a(b.target).closest(".calendar").hasClass("left"),
				d = c ? "left" : "right",
				e = this.container.find(".calendar." + d),
				f = parseInt(e.find(".monthselect").val(), 10),
				g = e.find(".yearselect").val();
			this[d + "Calendar"].month.month(f).year(g), this.updateCalendars()
		},
		updateTime : function(b) {
			var c = a(b.target).closest(".calendar").hasClass("left"),
				d = c ? "left" : "right",
				e = this.container.find(".calendar." + d),
				f = parseInt(e.find(".hourselect").val(), 10),
				g = parseInt(e.find(".minuteselect").val(), 10);
			if (this.timePicker12Hour) {
				var h = e.find(".ampmselect").val();
				"PM" === h && 12 > f && (f += 12), "AM" === h && 12 === f && (f = 0)
			}
			if (c) {
				var i = this.startDate.clone();
				i.hour(f), i.minute(g), this.startDate = i, this.leftCalendar.month.hour(f).minute(g)
			} else {
				var j = this.endDate.clone();
				j.hour(f), j.minute(g), this.endDate = j, this.rightCalendar.month.hour(f).minute(g)
			}
			this.updateCalendars()
		},
		updateCalendars : function() {
			this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), "left"), this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), "right"), this.container.find(".calendar.left").empty().html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate)),
			this.container.find(".calendar.right").empty().html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, this.startDate, this.maxDate)), this.container.find(".ranges li").removeClass("active");
			var a = !0,
				b = 0;
			for (var c in this.ranges) this.timePicker ? this.startDate.isSame(this.ranges[c][0]) && this.endDate.isSame(this.ranges[c][1]) && (a = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + b + ")").addClass("active").html()) : this.startDate.format("YYYY-MM-DD") == this.ranges[c][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[c][1].format("YYYY-MM-DD") && (a = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + b + ")").addClass("active").html()), b++;
			a && (this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html())
		},
		buildCalendar : function(a, c, d, e, f) {
			var g,
				h = b([ c, a, 1 ]),
				i = b(h).subtract("month", 1).month(),
				j = b(h).subtract("month", 1).year(),
				k = b([ j, i ]).daysInMonth(),
				l = h.day(),
				m = [];
			for (g = 0; 6 > g; g++) m[g] = [];
			var n = k - l + this.locale.firstDay + 1;
			n > k && (n -= 7), l == this.locale.firstDay && (n = k - 6);
			var o,
				p,
				q = b([ j, i, n, 12, e ]);
			for (g = 0, o = 0, p = 0; 42 > g; g++, o++, q = b(q).add("hour", 24)) g > 0 && o % 7 === 0 && (o = 0, p++), m[p][o] = q.clone().hour(d), q.hour(12);
			return m
		},
		renderDropdowns : function(a, b, c) {
			for (var d = a.month(), e = '<select class="monthselect">', f = !1, g = !1, h = 0; 12 > h; h++) (!f || h >= b.month()) && (!g || h <= c.month()) && (e += "<option value='" + h + "'" + (h === d ? " selected='selected'" : "") + ">" + this.locale.monthNames[h] + "</option>");
			e += "</select>";
			for (var i = a.year(), j = c && c.year() || i + 5, k = b && b.year() || i - 50, l = '<select class="yearselect">', m = k; j >= m; m++) l += '<option value="' + m + '"' + (m === i ? ' selected="selected"' : "") + ">" + m + "</option>";
			return l += "</select>", e + l
		},
		renderCalendar : function(b, c, d, e) {
			var f = '<div class="calendar-date">';
			f += '<table class="table-condensed">', f += "<thead>", f += "<tr>", this.showWeekNumbers && (f += "<th></th>"), f += !d || d.isBefore(b[1][1]) ? '<th class="prev available"><i class="fa fa-arrow-left icon-arrow-left glyphicon glyphicon-arrow-left"></i></th>' : "<th></th>";
			var g = this.locale.monthNames[b[1][1].month()] + b[1][1].format(" YYYY");
			this.showDropdowns && (g = this.renderDropdowns(b[1][1], d, e)), f += '<th colspan="5" class="month">' + g + "</th>", f += !e || e.isAfter(b[1][1]) ? '<th class="next available"><i class="fa fa-arrow-right icon-arrow-right glyphicon glyphicon-arrow-right"></i></th>' : "<th></th>", f += "</tr>", f += "<tr>", this.showWeekNumbers && (f += '<th class="week">' + this.locale.weekLabel + "</th>"), a.each(this.locale.daysOfWeek, function(a, b) {
				f += "<th>" + b + "</th>"
			}), f += "</tr>", f += "</thead>", f += "<tbody>";
			for (var h = 0; 6 > h; h++) {
				f += "<tr>", this.showWeekNumbers && (f += '<td class="week">' + b[h][0].week() + "</td>");
				for (var i = 0; 7 > i; i++) {
					var j = "available ";
					j += b[h][i].month() == b[1][1].month() ? "" : "off", d && b[h][i].isBefore(d) || e && b[h][i].isAfter(e) ? j = " off disabled " : b[h][i].format("YYYY-MM-DD") == c.format("YYYY-MM-DD") ? (j += " active ", b[h][i].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && (j += " start-date "), b[h][i].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && (j += " end-date ")) : b[h][i] >= this.startDate && b[h][i] <= this.endDate && (j += " in-range ", b[h][i].isSame(this.startDate) && (j += " start-date "), b[h][i].isSame(this.endDate) && (j += " end-date "));var k = "r" + h + "c" + i;
					f += '<td class="' + j.replace(/\s+/g, " ").replace(/^\s?(.*?)\s?$/, "$1") + '" data-title="' + k + '">' + b[h][i].date() + "</td>"
				}
				f += "</tr>"
			}
			f += "</tbody>", f += "</table>", f += "</div>";
			var l;
			if (this.timePicker) {
				f += '<div class="calendar-time">', f += '<select class="hourselect">';
				var m = 0,
					n = 23,
					o = c.hour();
				for (this.timePicker12Hour && (m = 1, n = 12, o >= 12 && (o -= 12), 0 === o && (o = 12)), l = m; n >= l; l++) f += l == o ? '<option value="' + l + '" selected="selected">' + l + "</option>" : '<option value="' + l + '">' + l + "</option>";
				for (f += "</select> : ", f += '<select class="minuteselect">', l = 0; 60 > l; l += this.timePickerIncrement) {
					var p = l;
					10 > p && (p = "0" + p), f += l == c.minute() ? '<option value="' + l + '" selected="selected">' + p + "</option>" : '<option value="' + l + '">' + p + "</option>"
				}
				f += "</select> ", this.timePicker12Hour && (f += '<select class="ampmselect">', f += c.hour() >= 12 ? '<option value="AM">AM</option><option value="PM" selected="selected">PM</option>' : '<option value="AM" selected="selected">AM</option><option value="PM">PM</option>', f += "</select>"), f += "</div>"
			}
			return f
		},
		remove : function() {
			this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData("daterangepicker")
		}
	}, a.fn.daterangepicker = function(b, d) {
		return this.each(function() {
				var e = a(this);
				e.data("daterangepicker") && e.data("daterangepicker").remove(), e.data("daterangepicker", new c(e, b, d))
			}), this
	}
}(window.jQuery, window.moment), function(a) {
	a.easing.jswing = a.easing.swing, a.extend(a.easing, {
		def : "easeOutQuad",
		swing : function(b, c, d, e, f) {
			return a.easing[a.easing.def](b, c, d, e, f)
		},
		easeInQuad : function(a, b, c, d, e) {
			return d * (b /= e) * b + c
		},
		easeOutQuad : function(a, b, c, d, e) {
			return -d * (b /= e) * (b - 2) + c
		},
		easeInOutQuad : function(a, b, c, d, e) {
			return 1 > (b /= e / 2) ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
		},
		easeInCubic : function(a, b, c, d, e) {
			return d * (b /= e) * b * b + c
		},
		easeOutCubic : function(a, b, c, d, e) {
			return d * ((b = b / e - 1) * b * b + 1) + c
		},
		easeInOutCubic : function(a, b, c, d, e) {
			return 1 > (b /= e / 2) ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
		},
		easeInQuart : function(a, b, c, d, e) {
			return d * (b /= e) * b * b * b + c
		},
		easeOutQuart : function(a, b, c, d, e) {
			return -d * ((b = b / e - 1) * b * b * b - 1) + c
		},
		easeInOutQuart : function(a, b, c, d, e) {
			return 1 > (b /= e / 2) ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
		},
		easeInQuint : function(a, b, c, d, e) {
			return d * (b /= e) * b * b * b * b + c
		},
		easeOutQuint : function(a, b, c, d, e) {
			return d * ((b = b / e - 1) * b * b * b * b + 1) + c
		},
		easeInOutQuint : function(a, b, c, d, e) {
			return 1 > (b /= e / 2) ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
		},
		easeInSine : function(a, b, c, d, e) {
			return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
		},
		easeOutSine : function(a, b, c, d, e) {
			return d * Math.sin(b / e * (Math.PI / 2)) + c
		},
		easeInOutSine : function(a, b, c, d, e) {
			return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
		},
		easeInExpo : function(a, b, c, d, e) {
			return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
		},
		easeOutExpo : function(a, b, c, d, e) {
			return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
		},
		easeInOutExpo : function(a, b, c, d, e) {
			return 0 == b ? c : b == e ? c + d : 1 > (b /= e / 2) ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
		},
		easeInCirc : function(a, b, c, d, e) {
			return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
		},
		easeOutCirc : function(a, b, c, d, e) {
			return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
		},
		easeInOutCirc : function(a, b, c, d, e) {
			return 1 > (b /= e / 2) ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
		},
		easeInElastic : function(a, b, c, d, e) {
			a = 1.70158;
			var f = 0,
				g = d;
			return 0 == b ? c : 1 == (b /= e) ? c + d : (f || (f = .3 * e), g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g), -(g * Math.pow(2, 10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / f)) + c)
		},
		easeOutElastic : function(a, b, c, d, e) {
			a = 1.70158;
			var f = 0,
				g = d;
			return 0 == b ? c : 1 == (b /= e) ? c + d : (f || (f = .3 * e), g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g), g * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - a) * Math.PI / f) + d + c)
		},
		easeInOutElastic : function(a, b, c, d, e) {
			a = 1.70158;
			var f = 0,
				g = d;
			return 0 == b ? c : 2 == (b /= e / 2) ? c + d : (f || (f = .3 * e * 1.5), g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g), 1 > b ? -.5 * g * Math.pow(2, 10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / f) + c : g * Math.pow(2, -10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / f) * .5 + d + c)
		},
		easeInBack : function(a, b, c, d, e, f) {
			return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
		},
		easeOutBack : function(a, b, c, d, e, f) {
			return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
		},
		easeInOutBack : function(a, b, c, d, e, f) {
			return void 0 == f && (f = 1.70158), 1 > (b /= e / 2) ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
		},
		easeInBounce : function(b, c, d, e, f) {
			return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d
		},
		easeOutBounce : function(a, b, c, d, e) {
			return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
		},
		easeInOutBounce : function(b, c, d, e, f) {
			return f / 2 > c ? .5 * a.easing.easeInBounce(b, 2 * c, 0, e, f) + d : .5 * a.easing.easeOutBounce(b, 2 * c - f, 0, e, f) + .5 * e + d
		}
	})
}(jQuery), !function(a) {
	jQuery.fn.extend({
		slimScroll : function(b) {
			var c = {
					width : "auto",
					height : "250px",
					size : "7px",
					color : "#000",
					position : "right",
					distance : "1px",
					start : "top",
					opacity : .4,
					alwaysVisible : !1,
					disableFadeOut : !1,
					railVisible : !1,
					railColor : "#333",
					railOpacity : .2,
					railDraggable : !0,
					railClass : "slimScrollRail",
					barClass : "slimScrollBar",
					wrapperClass : "slimScrollDiv",
					allowPageScroll : !1,
					wheelStep : 20,
					touchScrollStep : 200,
					borderRadius : "7px",
					railBorderRadius : "7px"
				},
				d = a.extend(c, b);
			return this.each(function() {
					function c(b) {
						if (j) {
							var b = b || window.event,
								c = 0;
							b.wheelDelta && (c = -b.wheelDelta / 120), b.detail && (c = b.detail / 3);
							var f = b.target || b.srcTarget || b.srcElement;
							a(f).closest("." + d.wrapperClass).is(v.parent()) && e(c, !0), b.preventDefault && !u && b.preventDefault(), u || (b.returnValue = !1)
						}
					}
					function e(a, b, c) {
						u = !1;var e = a,
							f = v.outerHeight() - B.outerHeight();
						if (b && (e = parseInt(B.css("top")) + a * parseInt(d.wheelStep) / 100 * B.outerHeight(), e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), B.css({
								top : e + "px"
							})), p = parseInt(B.css("top")) / (v.outerHeight() - B.outerHeight()), e = p * (v[0].scrollHeight - v.outerHeight()), c) {
							e = a;
							var g = e / v[0].scrollHeight * v.outerHeight();
							g = Math.min(Math.max(g, 0), f), B.css({
								top : g + "px"
							})
						}
						v.scrollTop(e), v.trigger("slimscrolling", ~~e), h(), i()
					}
					function f() {
						window.addEventListener ? (this.addEventListener("DOMMouseScroll", c, !1), this.addEventListener("mousewheel", c, !1), this.addEventListener("MozMousePixelScroll", c, !1)) : document.attachEvent("onmousewheel", c)
					}
					function g() {
						o = Math.max(v.outerHeight() / v[0].scrollHeight * v.outerHeight(), s), B.css({
							height : o + "px"
						});var a = o == v.outerHeight() ? "none" : "block";
						B.css({
							display : a
						})
					}
					function h() {
						if (g(), clearTimeout(m), p == ~~p) {
							if (u = d.allowPageScroll, q != p) {
								var a = 0 == ~~p ? "top" : "bottom";
								v.trigger("slimscroll", a)
							}
						} else
							u = !1;
						return q = p, o >= v.outerHeight() ? void (u = !0) : (B.stop(!0, !0).fadeIn("fast"), void (d.railVisible && A.stop(!0, !0).fadeIn("fast")))
					}
					function i() {
						d.alwaysVisible || (m = setTimeout(function() {
							d.disableFadeOut && j || k || l || (B.fadeOut("slow"), A.fadeOut("slow"))
						}, 1e3))
					}
					var j,
						k,
						l,
						m,
						n,
						o,
						p,
						q,
						r = "<div></div>",
						s = 30,
						u = !1,
						v = a(this);
					if (v.parent().hasClass(d.wrapperClass)) {
						var w = v.scrollTop();
						if (B = v.parent().find("." + d.barClass), A = v.parent().find("." + d.railClass), g(), a.isPlainObject(b)) {
							if ("height" in b && "auto" == b.height) {
								v.parent().css("height", "auto"), v.css("height", "auto");
								var x = v.parent().parent().height();
								v.parent().css("height", x), v.css("height", x)
							} else if ("height" in b) {
								var y = b.height;
								v.parent().css("height", y), v.css("height", y)
							}
							if ("scrollTo" in b)
								w = parseInt(d.scrollTo);
							else if ("scrollBy" in b)
								w += parseInt(d.scrollBy);
							else if ("destroy" in b) return B.remove(), A.remove(), void v.unwrap();
							e(w, !1, !0)
						}
					} else {
						d.height = "auto" == d.height ? v.parent().height() : d.height;
						var z = a(r).addClass(d.wrapperClass).css({
							position : "relative",
							overflow : "hidden",
							width : d.width,
							height : d.height
						});
						v.css({
							overflow : "hidden",
							width : d.width,
							height : d.height
						});
						var A = a(r).addClass(d.railClass).css({
								width : d.size,
								height : "100%",
								position : "absolute",
								top : 0,
								display : d.alwaysVisible && d.railVisible ? "block" : "none",
								"border-radius" : d.railBorderRadius,
								background : d.railColor,
								opacity : d.railOpacity,
								zIndex : 90
							}),
							B = a(r).addClass(d.barClass).css({
								background : d.color,
								width : d.size,
								position : "absolute",
								top : 0,
								opacity : d.opacity,
								display : d.alwaysVisible ? "block" : "none",
								"border-radius" : d.borderRadius,
								BorderRadius : d.borderRadius,
								MozBorderRadius : d.borderRadius,
								WebkitBorderRadius : d.borderRadius,
								zIndex : 99
							}),
							C = "right" == d.position ? {
								right : d.distance
							} : {
								left : d.distance
							};
						A.css(C), B.css(C), v.wrap(z), v.parent().append(B), v.parent().append(A), d.railDraggable && B.bind("mousedown", function(b) {
							var c = a(document);
							return l = !0, t = parseFloat(B.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function(a) {
									currTop = t + a.pageY - pageY, B.css("top", currTop), e(0, B.position().top, !1)
								}), c.bind("mouseup.slimscroll", function() {
									l = !1, i(), c.unbind(".slimscroll")
								}), !1
						}).bind("selectstart.slimscroll", function(a) {
							return a.stopPropagation(), a.preventDefault(), !1
						}), A.hover(function() {
							h()
						}, function() {
							i()
						}), B.hover(function() {
							k = !0
						}, function() {
							k = !1
						}), v.hover(function() {
							j = !0, h(), i()
						}, function() {
							j = !1, i()
						}), v.bind("touchstart", function(a) {
							a.originalEvent.touches.length && (n = a.originalEvent.touches[0].pageY)
						}), v.bind("touchmove", function(a) {
							if (u || a.originalEvent.preventDefault(), a.originalEvent.touches.length) {
								var b = (n - a.originalEvent.touches[0].pageY) / d.touchScrollStep;
								e(b, !0), n = a.originalEvent.touches[0].pageY
							}
						}), g(), "bottom" === d.start ? (B.css({
							top : v.outerHeight() - B.outerHeight()
						}), e(0, !0)) : "top" !== d.start && (e(a(d.start).position().top, null, !0), d.alwaysVisible || B.hide()), f()
					}
				}), this
		}
	}), jQuery.fn.extend({
		slimscroll : jQuery.fn.slimScroll
	})
}(jQuery), !function(a, b) {
	"object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Spinner = b()
}(this, function() {
	"use strict";
	function a(a, b) {
		var c,
			d = document.createElement(a || "div");
		for (c in b) d[c] = b[c];
		return d
	}
	function b(a) {
		for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
		return a
	}
	function c(a, b, c, d) {
		var e = [ "opacity", b, ~~(100 * a), c, d ].join("-"),
			f = .01 + c / d * 100,
			g = Math.max(1 - (1 - a) / b * (100 - f), a),
			h = j.substring(0, j.indexOf("Animation")).toLowerCase(),
			i = h && "-" + h + "-" || "";
		return m[e] || (k.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", k.cssRules.length), m[e] = 1), e
	}
	function d(a, b) {
		var c,
			d,
			e = a.style;
		if (b = b.charAt(0).toUpperCase() + b.slice(1), void 0 !== e[b]) return b;
		for (d = 0; d < l.length; d++)
			if (c = l[d] + b, void 0 !== e[c]) return c
	}
	function e(a, b) {
		for (var c in b) a.style[d(a, c) || c] = b[c];
		return a
	}
	function f(a) {
		for (var b = 1; b < arguments.length; b++) {
			var c = arguments[b];
			for (var d in c) void 0 === a[d] && (a[d] = c[d])
		}
		return a
	}
	function g(a, b) {
		return "string" == typeof a ? a : a[b % a.length]
	}
	function h(a) {
		this.opts = f(a || {}, h.defaults, n)
	}
	function i() {
		function c(b, c) {
			return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
		}
		k.addRule(".spin-vml", "behavior:url(#default#VML)"), h.prototype.lines = function(a, d) {
			function f() {
				return e(c("group", {
					coordsize : k + " " + k,
					coordorigin : -j + " " + -j
				}), {
					width : k,
					height : k
				})
			}
			function h(a, h, i) {
				b(m, b(e(f(), {
					rotation : 360 / d.lines * a + "deg",
					left : ~~h
				}), b(e(c("roundrect", {
					arcsize : d.corners
				}), {
					width : j,
					height : d.scale * d.width,
					left : d.scale * d.radius,
					top : -d.scale * d.width >> 1,
					filter : i
				}), c("fill", {
					color : g(d.color, a),
					opacity : d.opacity
				}), c("stroke", {
					opacity : 0
				}))))
			}
			var i,
				j = d.scale * (d.length + d.width),
				k = 2 * d.scale * j,
				l = -(d.width + d.length) * d.scale * 2 + "px",
				m = e(f(), {
					position : "absolute",
					top : l,
					left : l
				});
			if (d.shadow)
				for (i = 1; i <= d.lines; i++) h(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
			for (i = 1; i <= d.lines; i++) h(i);
			return b(a, m)
		}, h.prototype.opacity = function(a, b, c, d) {
			var e = a.firstChild;
			d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
		}
	}
	var j,
		k,
		l = [ "webkit", "Moz", "ms", "O" ],
		m = {},
		n = {
			lines : 12,
			length : 7,
			width : 5,
			radius : 10,
			scale : 1,
			corners : 1,
			color : "#000",
			opacity : .25,
			rotate : 0,
			direction : 1,
			speed : 1,
			trail : 100,
			fps : 20,
			zIndex : 2e9,
			className : "spinner",
			top : "50%",
			left : "50%",
			shadow : !1,
			hwaccel : !1,
			position : "absolute"
		};
	if (h.defaults = {}, f(h.prototype, {
			spin : function(b) {
				this.stop();
				var c = this,
					d = c.opts,
					f = c.el = a(null, {
						className : d.className
					});
				if (e(f, {
						position : d.position,
						width : 0,
						zIndex : d.zIndex,
						left : d.left,
						top : d.top
					}), b && b.insertBefore(f, b.firstChild || null), f.setAttribute("role", "progressbar"), c.lines(f, c.opts), !j) {
					var g,
						h = 0,
						i = (d.lines - 1) * (1 - d.direction) / 2,
						k = d.fps,
						l = k / d.speed,
						m = (1 - d.opacity) / (l * d.trail / 100),
						n = l / d.lines;
					!function o() {
						h++;
						for (var a = 0; a < d.lines; a++) g = Math.max(1 - (h + (d.lines - a) * n) % l * m, d.opacity), c.opacity(f, a * d.direction + i, g, d);
						c.timeout = c.el && setTimeout(o, ~~(1e3 / k))
					}()
				}
				return c
			},
			stop : function() {
				var a = this.el;
				return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = void 0), this
			},
			lines : function(d, f) {
				function h(b, c) {
					return e(a(), {
						position : "absolute",
						width : f.scale * (f.length + f.width) + "px",
						height : f.scale * f.width + "px",
						background : b,
						boxShadow : c,
						transformOrigin : "left",
						transform : "rotate(" + ~~(360 / f.lines * k + f.rotate) + "deg) translate(" + f.scale * f.radius + "px,0)",
						borderRadius : (f.corners * f.scale * f.width >> 1) + "px"
					})
				}
				for (var i, k = 0, l = (f.lines - 1) * (1 - f.direction) / 2; k < f.lines; k++) i = e(a(), {
						position : "absolute",
						top : 1 + ~(f.scale * f.width / 2) + "px",
						transform : f.hwaccel ? "translate3d(0,0,0)" : "",
						opacity : f.opacity,
						animation : j && c(f.opacity, f.trail, l + k * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite"
					}), f.shadow && b(i, e(h("#000", "0 0 4px #000"), {
						top : "2px"
					})), b(d, b(i, h(g(f.color, k), "0 0 1px rgba(0,0,0,.1)")));
				return d
			},
			opacity : function(a, b, c) {
				b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
			}
		}), "undefined" != typeof document) {
		k = function() {
			var c = a("style", {
				type : "text/css"
			});
			return b(document.getElementsByTagName("head")[0], c), c.sheet || c.styleSheet
		}();
		var o = e(a("group"), {
			behavior : "url(#default#VML)"
		});
		!d(o, "transform") && o.adj ? i() : j = d(o, "animation")
	}
	return h
}), function(a, b) {
	"function" == typeof define && define.amd ? define([ "jquery" ], function(c) {
		return b(c, a, a.document, a.Math)
	}) : "undefined" != typeof exports ? module.exports = b(require("jquery"), a, a.document, a.Math) : b(jQuery, a, a.document, a.Math)
}("undefined" != typeof window ? window : this, function(a, b, c, d, e) {
	var f = a(b),
		g = a(c);
	a.fn.fullpage = function(h) {
		function i(a) {
			a.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != h.controlArrowColor && (a.find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + h.controlArrowColor), a.find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + h.controlArrowColor + " transparent transparent")), h.loopHorizontal || a.find(".fp-controlArrow.fp-prev").hide()
		}
		function j() {
			la.append('<div id="fp-nav"><ul></ul></div>'), pa = a("#fp-nav"), pa.addClass(function() {
				return h.showActiveTooltip ? "fp-show-active " + h.navigationPosition : h.navigationPosition
			});
			for (var b = 0; b < a(".fp-section").length; b++) {
				var c = "";
				h.anchors.length && (c = h.anchors[b]);var c = '<li><a href="#' + c + '"><span></span></a>',
					d = h.navigationTooltips[b];
				"undefined" != typeof d && "" !== d && (c += '<div class="fp-tooltip ' + h.navigationPosition + '">' + d + "</div>"), c += "</li>", pa.find("ul").append(c)
			}
		}
		function k() {
			a(".fp-section").each(function() {
				var b = a(this).find(".fp-slide");
				b.length ? b.each(function() {
					N(a(this))
				}) : N(a(this))
			}), l()
		}
		function l() {
			var b = a(".fp-section.active"),
				c = b.find("SLIDES_WRAPPER"),
				d = b.find(".fp-scrollable");
			c.length && (d = c.find(".fp-slide.active")), d.mouseover(), B(b), a.isFunction(h.afterLoad) && h.afterLoad.call(b, b.data("anchor"), b.index(".fp-section") + 1), a.isFunction(h.afterRender) && h.afterRender.call(this)
		}
		function m() {
			var b;
			if (!h.autoScrolling || h.scrollBar) {
				for (var e = f.scrollTop(), g = 0, i = d.abs(e - c.querySelectorAll(".fp-section")[0].offsetTop), j = c.querySelectorAll(".fp-section"), k = 0; k < j.length; ++k) {
					var l = d.abs(e - j[k].offsetTop);
					i > l && (g = k, i = l)
				}
				b = a(j).eq(g)
			}
			if (!h.autoScrolling || h.scrollBar) {
				if (!b.hasClass("active")) {
					if (Da = !0, e = a(".fp-section.active"), g = e.index(".fp-section") + 1, i = M(b), j = b.data("anchor"), k = b.index(".fp-section") + 1, l = b.find(".fp-slide.active"), l.length) var m = l.data("anchor"),
							n = l.index();
					xa && (b.addClass("active").siblings().removeClass("active"), a.isFunction(h.onLeave) && h.onLeave.call(e, g, k, i), a.isFunction(h.afterLoad) && h.afterLoad.call(b, j, k), L(j, k - 1), h.anchors.length && (na = j, W(n, m, j, k))), clearTimeout(Ba), Ba = setTimeout(function() {
						Da = !1
					}, 100)
				}
				h.fitToSection && (clearTimeout(Ca), Ca = setTimeout(function() {
					xa && (a(".fp-section.active").is(b) && (wa = !0), x(b), wa = !1)
				}, 1e3))
			}
		}
		function n(a) {
			return a.find(".fp-slides").length ? a.find(".fp-slide.active").find(".fp-scrollable") : a.find(".fp-scrollable")
		}
		function o(a, b) {
			if (za.m[a]) {
				var c,
					d;
				if ("down" == a ? (c = "bottom", d = ma.moveSectionDown) : (c = "top", d = ma.moveSectionUp), 0 < b.length) {
					if (!(c = "top" === c ? !b.scrollTop() : "bottom" === c ? b.scrollTop() + 1 + b.innerHeight() >= b[0].scrollHeight : void 0)) return !0;
					d()
				} else d()
			}
		}
		function p(b) {
			var c = b.originalEvent;
			if (!q(b.target) && r(c)) {
				h.autoScrolling && b.preventDefault(), b = a(".fp-section.active");
				var e = n(b);
				xa && !ra && (c = ca(c), Ga = c.y, Ha = c.x, b.find(".fp-slides").length && d.abs(Fa - Ha) > d.abs(Ea - Ga) ? d.abs(Fa - Ha) > f.width() / 100 * h.touchSensitivity && (Fa > Ha ? za.m.right && ma.moveSlideRight() : za.m.left && ma.moveSlideLeft()) : h.autoScrolling && d.abs(Ea - Ga) > f.height() / 100 * h.touchSensitivity && (Ea > Ga ? o("down", e) : Ga > Ea && o("up", e)))
			}
		}
		function q(b, c) {
			c = c || 0;var d = a(b).parent();
			return c < h.normalScrollElementTouchThreshold && d.is(h.normalScrollElements) ? !0 : c == h.normalScrollElementTouchThreshold ? !1 : q(d, ++c)
		}
		function r(a) {
			return "undefined" == typeof a.pointerType || "mouse" != a.pointerType
		}
		function s(a) {
			a = a.originalEvent, h.fitToSection && ka.stop(), r(a) && (a = ca(a), Ea = a.y, Fa = a.x)
		}
		function t(a, b) {
			for (var c = 0, e = a.slice(d.max(a.length - b, 1)), f = 0; f < e.length; f++) c += e[f];
			return d.ceil(c / b)
		}
		function u(c) {
			var e = (new Date).getTime();
			if (h.autoScrolling && !qa) {
				c = b.event || c;
				var f = c.wheelDelta || -c.deltaY || -c.detail,
					g = d.max(-1, d.min(1, f));
				return 149 < ya.length && ya.shift(), ya.push(d.abs(f)), h.scrollBar && (c.preventDefault ? c.preventDefault() : c.returnValue = !1), c = a(".fp-section.active"), c = n(c), f = e - Ia, Ia = e, f > 200 && (ya = []), xa && (e = t(ya, 10), f = t(ya, 70), e >= f && (0 > g ? o("down", c) : o("up", c))), !1
			}
			h.fitToSection && ka.stop()
		}
		function v(b) {
			var c = a(".fp-section.active").find(".fp-slides"),
				d = c.find(".fp-slide").length;
			if (!(!c.length || ra || 2 > d)) {
				var d = c.find(".fp-slide.active"),
					e = null,
					e = "prev" === b ? d.prev(".fp-slide") : d.next(".fp-slide");
				if (!e.length) {
					if (!h.loopHorizontal) return;
					e = "prev" === b ? d.siblings(":last") : d.siblings(":first")
				}
				ra = !0, G(c, e)
			}
		}
		function w() {
			a(".fp-slide.active").each(function() {
				da(a(this), "internal")
			})
		}
		function x(b, c, d) {
			var e = b.position();
			if ("undefined" != typeof e && (c = {
					element : b,
					callback : c,
					isMovementUp : d,
					dest : e,
					dtop : e.top,
					yMovement : M(b),
					anchorLink : b.data("anchor"),
					sectionIndex : b.index(".fp-section"),
					activeSlide : b.find(".fp-slide.active"),
					activeSection : a(".fp-section.active"),
					leavingSection : a(".fp-section.active").index(".fp-section") + 1,
					localIsResizing : wa
				}, !(c.activeSection.is(b) && !wa || h.scrollBar && f.scrollTop() === c.dtop))) {
				if (c.activeSlide.length) var g = c.activeSlide.data("anchor"),
						i = c.activeSlide.index();
				if (h.autoScrolling && h.continuousVertical && "undefined" != typeof c.isMovementUp && (!c.isMovementUp && "up" == c.yMovement || c.isMovementUp && "down" == c.yMovement) && (c.isMovementUp ? a(".fp-section.active").before(c.activeSection.nextAll(".fp-section")) : a(".fp-section.active").after(c.activeSection.prevAll(".fp-section").get().reverse()), ea(a(".fp-section.active").position().top), w(), c.wrapAroundElements = c.activeSection, c.dest = c.element.position(), c.dtop = c.dest.top, c.yMovement = M(c.element)), a.isFunction(h.onLeave) && !c.localIsResizing) {
					if (!1 === h.onLeave.call(c.activeSection, c.leavingSection, c.sectionIndex + 1, c.yMovement)) return;
					D(c.activeSection)
				}
				b.addClass("active").siblings().removeClass("active"), xa = !1, W(i, g, c.anchorLink, c.sectionIndex), y(c), na = c.anchorLink, L(c.anchorLink, c.sectionIndex)
			}
		}
		function y(b) {
			if (h.css3 && h.autoScrolling && !h.scrollBar) R("translate3d(0px, -" + b.dtop + "px, 0px)", !0), h.scrollingSpeed ? setTimeout(function() {
					A(b)
				}, h.scrollingSpeed) : A(b);else {
				var c = z(b);
				a(c.element).animate(c.options, h.scrollingSpeed, h.easing).promise().done(function() {
					A(b)
				})
			}
		}
		function z(a) {
			var b = {};
			return h.autoScrolling && !h.scrollBar ? (b.options = {
					top : -a.dtop
				}, b.element = ".fullpage-wrapper") : (b.options = {
					scrollTop : a.dtop
				}, b.element = "html, body"), b
		}
		function A(b) {
			b.wrapAroundElements && b.wrapAroundElements.length && (b.isMovementUp ? a(".fp-section:first").before(b.wrapAroundElements) : a(".fp-section:last").after(b.wrapAroundElements), ea(a(".fp-section.active").position().top), w()), b.element.find(".fp-scrollable").mouseover(), a.isFunction(h.afterLoad) && !b.localIsResizing && h.afterLoad.call(b.element, b.anchorLink, b.sectionIndex + 1), B(b.element), C(b.element), xa = !0, a.isFunction(b.callback) && b.callback.call(this)
		}
		function B(b) {
			b.find("img[data-src], video[data-src], audio[data-src]").each(function() {
				a(this).attr("src", a(this).data("src")), a(this).removeAttr("data-src")
			})
		}
		function C(b) {
			b.find("video, audio").each(function() {
				var b = a(this).get(0);
				b.hasAttribute("autoplay") && "function" == typeof b.play && b.play()
			})
		}
		function D(b) {
			b.find("video, audio").each(function() {
				var b = a(this).get(0);
				b.hasAttribute("data-ignore") || "function" != typeof b.pause || b.pause()
			})
		}
		function E() {
			if (!Da && !h.lockAnchors) {
				var a = b.location.hash.replace("#", "").split("/"),
					c = a[0],
					a = a[1];
				if (c.length) {
					var d = "undefined" == typeof na,
						e = "undefined" == typeof na && "undefined" == typeof a && !ra;
					(c && c !== na && !d || e || !ra && oa != a) && T(c, a)
				}
			}
		}
		function F(a) {
			xa && (a.pageY < Ka ? ma.moveSectionUp() : a.pageY > Ka && ma.moveSectionDown()), Ka = a.pageY
		}
		function G(b, c) {
			var e = c.position(),
				f = c.index(),
				g = b.closest(".fp-section"),
				i = g.index(".fp-section"),
				j = g.data("anchor"),
				k = g.find(".fp-slidesNav"),
				l = Y(c),
				m = wa;
			if (h.onSlideLeave) {
				var n,
					o = g.find(".fp-slide.active"),
					p = o.index();
				if (n = p == f ? "none" : p > f ? "left" : "right", !m && "none" !== n && a.isFunction(h.onSlideLeave) && !1 === h.onSlideLeave.call(o, j, i + 1, p, n, f)) return void (ra = !1)
			}
			c.addClass("active").siblings().removeClass("active"), !h.loopHorizontal && h.controlArrows && (g.find(".fp-controlArrow.fp-prev").toggle(0 !== f), g.find(".fp-controlArrow.fp-next").toggle(!c.is(":last-child"))), g.hasClass("active") && W(f, l, j, i);var q = function() {
				m || a.isFunction(h.afterSlideLoad) && h.afterSlideLoad.call(c, j, i + 1, l, f), ra = !1
			};
			h.css3 ? (e = "translate3d(-" + d.round(e.left) + "px, 0px, 0px)", J(b.find(".fp-slidesContainer"), 0 < h.scrollingSpeed).css(fa(e)), setTimeout(function() {
				q()
			}, h.scrollingSpeed, h.easing)) : b.animate({
				scrollLeft : d.round(e.left)
			}, h.scrollingSpeed, h.easing, function() {
				q()
			}), k.find(".active").removeClass("active"), k.find("li").eq(f).find("a").addClass("active")
		}
		function H() {
			if (I(), sa) {
				var b = a(c.activeElement);
				b.is("textarea") || b.is("input") || b.is("select") || (b = f.height(), d.abs(b - Ma) > 20 * d.max(Ma, b) / 100 && (ma.reBuild(!0), Ma = b))
			} else clearTimeout(La), La = setTimeout(function() {
					ma.reBuild(!0)
				}, 350)
		}
		function I() {
			var a = h.responsive || h.responsiveWidth,
				b = h.responsiveHeight;
			a && ma.setResponsive(f.width() < a), b && (ua.hasClass("fp-responsive") || ma.setResponsive(f.height() < b))
		}
		function J(a) {
			var b = "all " + h.scrollingSpeed + "ms " + h.easingcss3;
			return a.removeClass("fp-notransition"), a.css({
					"-webkit-transition" : b,
					transition : b
				})
		}
		function K(a, b) {
			if (825 > a || 900 > b) {
				var c = d.min(100 * a / 825, 100 * b / 900).toFixed(2);
				la.css("font-size", c + "%")
			} else la.css("font-size", "100%")
		}
		function L(b, c) {
			h.menu && (a(h.menu).find(".active").removeClass("active"), a(h.menu).find('[data-menuanchor="' + b + '"]').addClass("active")), h.navigation && (a("#fp-nav").find(".active").removeClass("active"), b ? a("#fp-nav").find('a[href="#' + b + '"]').addClass("active") : a("#fp-nav").find("li").eq(c).find("a").addClass("active"))
		}
		function M(b) {
			var c = a(".fp-section.active").index(".fp-section");
			return b = b.index(".fp-section"), c == b ? "none" : c > b ? "up" : "down"
		}
		function N(a) {
			a.css("overflow", "hidden");var b,
				c = a.closest(".fp-section"),
				d = a.find(".fp-scrollable");
			d.length ? b = d.get(0).scrollHeight : (b = a.get(0).scrollHeight, h.verticalCentered && (b = a.find(".fp-tableCell").get(0).scrollHeight)), c = va - parseInt(c.css("padding-bottom")) - parseInt(c.css("padding-top")), b > c ? d.length ? d.css("height", c + "px").parent().css("height", c + "px") : (h.verticalCentered ? a.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : a.wrapInner('<div class="fp-scrollable" />'), a.find(".fp-scrollable").slimScroll({
				allowPageScroll : !0,
				height : c + "px",
				size : "10px",
				alwaysVisible : !0
			})) : O(a), a.css("overflow", "")
		}
		function O(a) {
			a.find(".fp-scrollable").children().first().unwrap().unwrap(), a.find(".slimScrollBar").remove(), a.find(".slimScrollRail").remove()
		}
		function P(a) {
			a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + Q(a) + 'px;" />')
		}
		function Q(a) {
			var b = va;
			return (h.paddingTop || h.paddingBottom) && (b = a, b.hasClass("fp-section") || (b = a.closest(".fp-section")), a = parseInt(b.css("padding-top")) + parseInt(b.css("padding-bottom")), b = va - a), b
		}
		function R(a, b) {
			b ? J(ua) : ua.addClass("fp-notransition"), ua.css(fa(a)), setTimeout(function() {
				ua.removeClass("fp-notransition")
			}, 10)
		}
		function S(b) {
			var c = a('.fp-section[data-anchor="' + b + '"]');
			return c.length || (c = a(".fp-section").eq(b - 1)), c
		}
		function T(a, b) {
			var c = S(a);
			"undefined" == typeof b && (b = 0), a === na || c.hasClass("active") ? U(c, b) : x(c, function() {
				U(c, b)
			})
		}
		function U(a, b) {
			if ("undefined" != typeof b) {
				var c,
					d = a.find(".fp-slides");
				c = a.find(".fp-slides");
				var e = c.find('.fp-slide[data-anchor="' + b + '"]');
				e.length || (e = c.find(".fp-slide").eq(b)), c = e, c.length && G(d, c)
			}
		}
		function V(a, b) {
			a.append('<div class="fp-slidesNav"><ul></ul></div>');var c = a.find(".fp-slidesNav");
			c.addClass(h.slidesNavPosition);
			for (var d = 0; b > d; d++) c.find("ul").append('<li><a href="#"><span></span></a></li>');
			c.css("margin-left", "-" + c.width() / 2 + "px"), c.find("li").first().find("a").addClass("active")
		}
		function W(a, b, c, d) {
			d = "", h.anchors.length && !h.lockAnchors && (a ? ("undefined" != typeof c && (d = c), "undefined" == typeof b && (b = a), oa = b, X(d + "/" + b)) : ("undefined" != typeof a && (oa = b), X(c))), Z()
		}
		function X(a) {
			if (h.recordHistory)
				location.hash = a;
			else if (sa || ta) history.replaceState(e, e, "#" + a);else {
				var c = b.location.href.split("#")[0];
				b.location.replace(c + "#" + a)
			}
		}
		function Y(a) {
			var b = a.data("anchor");
			return a = a.index(), "undefined" == typeof b && (b = a), b
		}
		function Z() {
			var b = a(".fp-section.active"),
				c = b.find(".fp-slide.active"),
				d = b.data("anchor"),
				e = Y(c),
				b = b.index(".fp-section"),
				b = String(b);
			h.anchors.length && (b = d), c.length && (b = b + "-" + e), b = b.replace("/", "-").replace("#", ""), la[0].className = la[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g"), ""), la.addClass("fp-viewing-" + b)
		}
		function $() {
			var a,
				d = c.createElement("p"),
				f = {
					webkitTransform : "-webkit-transform",
					OTransform : "-o-transform",
					msTransform : "-ms-transform",
					MozTransform : "-moz-transform",
					transform : "transform"
				};
			c.body.insertBefore(d, null);
			for (var g in f) d.style[g] !== e && (d.style[g] = "translate3d(1px,1px,1px)", a = b.getComputedStyle(d).getPropertyValue(f[g]));
			return c.body.removeChild(d), a !== e && 0 < a.length && "none" !== a
		}
		function _() {
			if (sa || ta) {
				var b = ba();
				a(".fullpage-wrapper").off("touchstart " + b.down).on("touchstart " + b.down, s), a(".fullpage-wrapper").off("touchmove " + b.move).on("touchmove " + b.move, p)
			}
		}
		function aa() {
			if (sa || ta) {
				var b = ba();
				a(".fullpage-wrapper").off("touchstart " + b.down), a(".fullpage-wrapper").off("touchmove " + b.move)
			}
		}
		function ba() {
			return b.PointerEvent ? {
				down : "pointerdown",
				move : "pointermove"
			} : {
				down : "MSPointerDown",
				move : "MSPointerMove"
			}
		}
		function ca(a) {
			var b = [];
			return b.y = "undefined" != typeof a.pageY && (a.pageY || a.pageX) ? a.pageY : a.touches[0].pageY, b.x = "undefined" != typeof a.pageX && (a.pageY || a.pageX) ? a.pageX : a.touches[0].pageX, ta && r(a) && (b.y = a.touches[0].pageY, b.x = a.touches[0].pageX), b
		}
		function da(a, b) {
			ma.setScrollingSpeed(0, "internal"), "undefined" != typeof b && (wa = !0), G(a.closest(".fp-slides"), a), "undefined" != typeof b && (wa = !1), ma.setScrollingSpeed(Aa.scrollingSpeed, "internal")
		}
		function ea(a) {
			h.scrollBar ? ua.scrollTop(a) : h.css3 ? R("translate3d(0px, -" + a + "px, 0px)", !1) : ua.css("top", -a)
		}
		function fa(a) {
			return {
				"-webkit-transform" : a,
				"-moz-transform" : a,
				"-ms-transform" : a,
				transform : a
			}
		}
		function ga(a, b, c) {
			switch (b) {
			case "up":
				za[c].up = a;
				break;case "down":
				za[c].down = a;
				break;case "left":
				za[c].left = a;
				break;case "right":
				za[c].right = a;
				break;case "all":
				"m" == c ? ma.setAllowScrolling(a) : ma.setKeyboardScrolling(a)
			}
		}
		function ha() {
			ea(0), a("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(), a(".fp-section").css({
				height : "",
				"background-color" : "",
				padding : ""
			}), a(".fp-slide").css({
				width : ""
			}), ua.css({
				height : "",
				position : "",
				"-ms-touch-action" : "",
				"touch-action" : ""
			}), a(".fp-section, .fp-slide").each(function() {
				O(a(this)), a(this).removeClass("fp-table active")
			}), ua.addClass("fp-notransition"), ua.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function() {
				a(this).replaceWith(this.childNodes)
			}), ka.scrollTop(0)
		}
		function ia(a, b, c) {
			h[a] = b, "internal" !== c && (Aa[a] = b)
		}
		function ja(a, b) {
			console && console[a] && console[a]("fullPage: " + b)
		}
		var ka = a("html, body"),
			la = a("body"),
			ma = a.fn.fullpage;
		h = a.extend({
			menu : !1,
			anchors : [],
			lockAnchors : !1,
			navigation : !1,
			navigationPosition : "right",
			navigationTooltips : [],
			showActiveTooltip : !1,
			slidesNavigation : !1,
			slidesNavPosition : "bottom",
			scrollBar : !1,
			css3 : !0,
			scrollingSpeed : 700,
			autoScrolling : !0,
			fitToSection : !0,
			easing : "easeInOutCubic",
			easingcss3 : "ease",
			loopBottom : !1,
			loopTop : !1,
			loopHorizontal : !0,
			continuousVertical : !1,
			normalScrollElements : null,
			scrollOverflow : !1,
			touchSensitivity : 5,
			normalScrollElementTouchThreshold : 5,
			keyboardScrolling : !0,
			animateAnchor : !0,
			recordHistory : !0,
			controlArrows : !0,
			controlArrowColor : "#fff",
			verticalCentered : !0,
			resize : !1,
			sectionsColor : [],
			paddingTop : 0,
			paddingBottom : 0,
			fixedElements : null,
			responsive : 0,
			responsiveWidth : 0,
			responsiveHeight : 0,
			sectionSelector : ".section",
			slideSelector : ".slide",
			afterLoad : null,
			onLeave : null,
			afterRender : null,
			afterResize : null,
			afterReBuild : null,
			afterSlideLoad : null,
			onSlideLeave : null
		}, h), function() {
			h.continuousVertical && (h.loopTop || h.loopBottom) && (h.continuousVertical = !1, ja("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), h.continuousVertical && h.scrollBar && (h.continuousVertical = !1, ja("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), a.each(h.anchors, function(b, c) {
				(a("#" + c).length || a('[name="' + c + '"]').length) && ja("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
			})
		}(), a.extend(a.easing, {
			easeInOutCubic : function(a, b, c, d, e) {
				return 1 > (b /= e / 2) ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
			}
		}), a.extend(a.easing, {
			easeInQuart : function(a, b, c, d, e) {
				return d * (b /= e) * b * b * b + c
			}
		}), ma.setAutoScrolling = function(b, c) {
			ia("autoScrolling", b, c);
			var d = a(".fp-section.active");
			h.autoScrolling && !h.scrollBar ? (ka.css({
				overflow : "hidden",
				height : "100%"
			}), ma.setRecordHistory(h.recordHistory, "internal"), ua.css({
				"-ms-touch-action" : "none",
				"touch-action" : "none"
			}), d.length && ea(d.position().top)) : (ka.css({
				overflow : "visible",
				height : "initial"
			}), ma.setRecordHistory(!1, "internal"), ua.css({
				"-ms-touch-action" : "",
				"touch-action" : ""
			}), ea(0), d.length && ka.scrollTop(d.position().top))
		}, ma.setRecordHistory = function(a, b) {
			ia("recordHistory", a, b)
		}, ma.setScrollingSpeed = function(a, b) {
			ia("scrollingSpeed", a, b)
		}, ma.setFitToSection = function(a, b) {
			ia("fitToSection", a, b)
		}, ma.setLockAnchors = function(a) {
			h.lockAnchors = a
		}, ma.setMouseWheelScrolling = function(a) {
			a ? c.addEventListener ? (c.addEventListener("mousewheel", u, !1), c.addEventListener("wheel", u, !1), c.addEventListener("DOMMouseScroll", u, !1)) : c.attachEvent("onmousewheel", u) : c.addEventListener ? (c.removeEventListener("mousewheel", u, !1), c.removeEventListener("wheel", u, !1), c.removeEventListener("DOMMouseScroll", u, !1)) : c.detachEvent("onmousewheel", u)
		}, ma.setAllowScrolling = function(b, c) {
			"undefined" != typeof c ? (c = c.replace(/ /g, "").split(","), a.each(c, function(a, c) {
				ga(b, c, "m")
			})) : b ? (ma.setMouseWheelScrolling(!0), _()) : (ma.setMouseWheelScrolling(!1), aa())
		}, ma.setKeyboardScrolling = function(b, c) {
			"undefined" != typeof c ? (c = c.replace(/ /g, "").split(","), a.each(c, function(a, c) {
				ga(b, c, "k")
			})) : h.keyboardScrolling = b
		}, ma.moveSectionUp = function() {
			var b = a(".fp-section.active").prev(".fp-section");
			b.length || !h.loopTop && !h.continuousVertical || (b = a(".fp-section").last()), b.length && x(b, null, !0)
		}, ma.moveSectionDown = function() {
			var b = a(".fp-section.active").next(".fp-section");
			b.length || !h.loopBottom && !h.continuousVertical || (b = a(".fp-section").first()), !b.length || h.onBeforeMoveSection && a.isFunction(h.onBeforeMoveSection) && !1 === h.onBeforeMoveSection.call(this, direction, currentSlide, destiny, slides, activeSection) || x(b, null, !1)
		}, ma.silentMoveTo = function(a, b) {
			ma.setScrollingSpeed(0, "internal"), ma.moveTo(a, b), ma.setScrollingSpeed(Aa.scrollingSpeed, "internal")
		}, ma.moveTo = function(a, b) {
			var c = S(a);
			"undefined" != typeof b ? T(a, b) : 0 < c.length && x(c)
		}, ma.moveSlideRight = function() {
			v("next")
		}, ma.moveSlideLeft = function() {
			v("prev")
		}, ma.reBuild = function(b) {
			if (!ua.hasClass("fp-destroyed")) {
				wa = !0;
				var c = f.width();
				va = f.height(), h.resize && K(va, c), a(".fp-section").each(function() {
					var b = a(this).find(".fp-slides"),
						c = a(this).find(".fp-slide");
					h.verticalCentered && a(this).find(".fp-tableCell").css("height", Q(a(this)) + "px"), a(this).css("height", va + "px"), h.scrollOverflow && (c.length ? c.each(function() {
						N(a(this))
					}) : N(a(this))), 1 < c.length && G(b, b.find(".fp-slide.active"))
				}), (c = a(".fp-section.active").index(".fp-section")) && ma.silentMoveTo(c + 1), wa = !1, a.isFunction(h.afterResize) && b && h.afterResize.call(ua), a.isFunction(h.afterReBuild) && !b && h.afterReBuild.call(ua)
			}
		}, ma.setResponsive = function(b) {
			var c = ua.hasClass("fp-responsive");
			b ? c || (ma.setAutoScrolling(!1, "internal"), ma.setFitToSection(!1, "internal"), a("#fp-nav").hide(), ua.addClass("fp-responsive")) : c && (ma.setAutoScrolling(Aa.autoScrolling, "internal"), ma.setFitToSection(Aa.autoScrolling, "internal"), a("#fp-nav").show(), ua.removeClass("fp-responsive"))
		};
		var na,
			oa,
			pa,
			qa,
			ra = !1,
			sa = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
			ta = "ontouchstart" in b || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
			ua = a(this),
			va = f.height(),
			wa = !1,
			xa = !0,
			ya = [],
			za = {
				m : {
					up : !0,
					down : !0,
					left : !0,
					right : !0
				}
			};
		za.k = a.extend(!0, {}, za.m);
		var Aa = a.extend(!0, {}, h);
		a(this).length ? (ua.css({
			height : "100%",
			position : "relative"
		}), ua.addClass("fullpage-wrapper"), a("html").addClass("fp-enabled")) : ja("error", "Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"), h.css3 && (h.css3 = $()), ma.setAllowScrolling(!0), ua.removeClass("fp-destroyed"), a(h.sectionSelector).each(function() {
			a(this).addClass("fp-section")
		}), a(h.slideSelector).each(function() {
			a(this).addClass("fp-slide")
		}), h.navigation && j(), a(".fp-section").each(function(b) {
			var c = a(this),
				d = a(this).find(".fp-slide"),
				e = d.length;
			if (b || 0 !== a(".fp-section.active").length || a(this).addClass("active"), a(this).css("height", va + "px"), h.paddingTop && a(this).css("padding-top", h.paddingTop), h.paddingBottom && a(this).css("padding-bottom", h.paddingBottom), "undefined" != typeof h.sectionsColor[b] && a(this).css("background-color", h.sectionsColor[b]), "undefined" != typeof h.anchors[b] && (a(this).attr("data-anchor", h.anchors[b]), a(this).hasClass("active") && L(h.anchors[b], b)), e > 0) {
				b = 100 * e;
				var f = 100 / e;
				d.wrapAll('<div class="fp-slidesContainer" />'), d.parent().wrap('<div class="fp-slides" />'), a(this).find(".fp-slidesContainer").css("width", b + "%"), e > 1 && (h.controlArrows && i(a(this)), h.slidesNavigation && V(a(this), e)), d.each(function(b) {
					a(this).css("width", f + "%"), h.verticalCentered && P(a(this))
				}), c = c.find(".fp-slide.active"), c.length ? da(c) : d.eq(0).addClass("active")
			} else h.verticalCentered && P(a(this))
		}).promise().done(function() {
			ma.setAutoScrolling(h.autoScrolling, "internal");
			var d = a(".fp-section.active").find(".fp-slide.active");
			if (d.length && (0 !== a(".fp-section.active").index(".fp-section") || 0 === a(".fp-section.active").index(".fp-section") && 0 !== d.index()) && da(d), h.fixedElements && h.css3 && a(h.fixedElements).appendTo(la), h.navigation && (pa.css("margin-top", "-" + pa.height() / 2 + "px"), pa.find("li").eq(a(".fp-section.active").index(".fp-section")).find("a").addClass("active")), h.menu && h.css3 && a(h.menu).closest(".fullpage-wrapper").length && a(h.menu).appendTo(la), h.scrollOverflow ? ("complete" === c.readyState && k(), f.on("load", k)) : l(), I(), !h.animateAnchor && (d = b.location.hash.replace("#", "").split("/")[0], d.length)) {
				var e = a('[data-anchor="' + d + '"]');
				e.length && (h.autoScrolling ? ea(e.position().top) : (ea(0), ka.scrollTop(e.position().top)), L(d, null), a.isFunction(h.afterLoad) && h.afterLoad.call(e, d, e.index(".fp-section") + 1), e.addClass("active").siblings().removeClass("active"))
			}
			Z(), f.on("load", function() {
				var a = b.location.hash.replace("#", "").split("/"),
					c = a[0],
					a = a[1];
				c && T(c, a)
			})
		});
		var Ba,
			Ca,
			Da = !1;
		f.on("scroll", m);
		var Ea = 0,
			Fa = 0,
			Ga = 0,
			Ha = 0,
			Ia = (new Date).getTime();
		f.on("hashchange", E), g.keydown(function(b) {
			clearTimeout(Ja);
			var c = a(":focus");
			c.is("textarea") || c.is("input") || c.is("select") || !h.keyboardScrolling || !h.autoScrolling || (-1 < a.inArray(b.which, [ 40, 38, 32, 33, 34 ]) && b.preventDefault(), Ja = setTimeout(function() {
				var c = b.shiftKey;
				switch (qa = b.ctrlKey, b.which) {
				case 38:
				case 33:
					za.k.up && ma.moveSectionUp();
					break;case 32:
					if (c && za.k.up) {
						ma.moveSectionUp();
						break
					}
				case 40:
				case 34:
					za.k.down && ma.moveSectionDown();
					break;case 36:
					za.k.up && ma.moveTo(1);
					break;case 35:
					za.k.down && ma.moveTo(a(".fp-section").length);
					break;case 37:
					za.k.left && ma.moveSlideLeft();
					break;case 39:
					za.k.right && ma.moveSlideRight()
				}
			}, 150))
		}), g.keyup(function(a) {
			qa = a.ctrlKey
		}), a(b).blur(function() {
			qa = !1
		});
		var Ja;
		ua.mousedown(function(a) {
			2 == a.which && (Ka = a.pageY, ua.on("mousemove", F))
		}), ua.mouseup(function(a) {
			2 == a.which && ua.off("mousemove")
		});
		var Ka = 0;
		g.on("click touchstart", "#fp-nav a", function(b) {
			b.preventDefault(), b = a(this).parent().index(), x(a(".fp-section").eq(b))
		}), g.on("click touchstart", ".fp-slidesNav a", function(b) {
			b.preventDefault(), b = a(this).closest(".fp-section").find(".fp-slides");
			var c = b.find(".fp-slide").eq(a(this).closest("li").index());
			G(b, c)
		}), h.normalScrollElements && (g.on("mouseenter", h.normalScrollElements, function() {
			ma.setMouseWheelScrolling(!1)
		}), g.on("mouseleave", h.normalScrollElements, function() {
			ma.setMouseWheelScrolling(!0)
		})), a(".fp-section").on("click touchstart", ".fp-controlArrow", function() {
			a(this).hasClass("fp-prev") ? za.m.left && ma.moveSlideLeft() : za.m.right && ma.moveSlideRight()
		}), f.resize(H);
		var La,
			Ma = va;
		ma.destroy = function(b) {
			ma.setAutoScrolling(!1, "internal"), ma.setAllowScrolling(!1), ma.setKeyboardScrolling(!1), ua.addClass("fp-destroyed"), f.off("scroll", m).off("hashchange", E).off("resize", H), g.off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", h.normalScrollElements).off("mouseout", h.normalScrollElements), a(".fp-section").off("click", ".fp-controlArrow"), b && ha()
		}
	}
}), function(a) {
	a.fn.transfer = function(b) {
		var c = {
				target : "",
				fullcharts : !0,
				evt : "blur"
			},
			d = a.extend(c, b);
		d.fullcharts ? a(this).on(d.evt, function() {
			a(d.target).val(e.getFullChars(a(this).val()))
		}) : a(this).on(d.evt, function() {
			a(d.target).val(e.getCamelChars(a(this).val()))
		});
		var e = function() {
			var a = function(a) {
					this.initialize(a)
				},
				b = {
					checkPolyphone : !1,
					charcase : "default"
				};
			a.fn = a.prototype = {
				init : function(a) {
					this.options = c(b, a)
				},
				initialize : function(a) {
					this.init(a), this.char_dict = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY", this.full_dict = {
						a : "啊阿锕",
						ai : "埃挨哎唉哀皑癌蔼矮艾碍爱隘诶捱嗳嗌嫒瑷暧砹锿霭",
						an : "鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌顸黯",
						ang : "肮昂盎",
						ao : "凹敖熬翱袄傲奥懊澳坳拗嗷噢岙廒遨媪骜聱螯鏊鳌鏖",
						ba : "芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝萆捭岜灞杷钯粑鲅魃",
						bai : "白柏百摆佰败拜稗薜掰鞴",
						ban : "斑班搬扳般颁板版扮拌伴瓣半办绊阪坂豳钣瘢癍舨",
						bang : "邦帮梆榜膀绑棒磅蚌镑傍谤蒡螃",
						bao : "苞胞包褒雹保堡饱宝抱报暴豹鲍爆勹葆宀孢煲鸨褓趵龅",
						bo : "剥薄玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳蕃啵饽檗擘礴钹鹁簸跛",
						bei : "杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶埤蓓呗怫悖碚鹎褙鐾",
						ben : "奔苯本笨畚坌锛",
						beng : "崩绷甭泵蹦迸唪嘣甏",
						bi : "逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛匕仳俾芘荜荸吡哔狴庳愎滗濞弼妣婢嬖璧贲畀铋秕裨筚箅篦舭襞跸髀",
						bian : "鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥稹窆蝙笾鳊",
						biao : "标彪膘表婊骠飑飙飚灬镖镳瘭裱鳔",
						bie : "鳖憋别瘪蹩鳘",
						bin : "彬斌濒滨宾摈傧浜缤玢殡膑镔髌鬓",
						bing : "兵冰柄丙秉饼炳病并禀邴摒绠枋槟燹",
						bu : "捕卜哺补埠不布步簿部怖拊卟逋瓿晡钚醭",
						ca : "擦嚓礤",
						cai : "猜裁材才财睬踩采彩菜蔡",
						can : "餐参蚕残惭惨灿骖璨粲黪",
						cang : "苍舱仓沧藏伧",
						cao : "操糙槽曹草艹嘈漕螬艚",
						ce : "厕策侧册测刂帻恻",
						ceng : "层蹭噌",
						cha : "插叉茬茶查碴搽察岔差诧猹馇汊姹杈楂槎檫钗锸镲衩",
						chai : "拆柴豺侪茈瘥虿龇",
						chan : "搀掺蝉馋谗缠铲产阐颤冁谄谶蒇廛忏潺澶孱羼婵嬗骣觇禅镡裣蟾躔",
						chang : "昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳",
						chao : "超抄钞朝嘲潮巢吵炒怊绉晁耖",
						che : "车扯撤掣彻澈坼屮砗",
						chen : "郴臣辰尘晨忱沉陈趁衬称谌抻嗔宸琛榇肜胂碜龀",
						cheng : "撑城橙成呈乘程惩澄诚承逞骋秤埕嵊徵浈枨柽樘晟塍瞠铖裎蛏酲",
						chi : "吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺墀芪茌搋叱哧啻嗤彳饬沲媸敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑",
						chong : "充冲虫崇宠茺忡憧铳艟",
						chou : "抽酬畴踌稠愁筹仇绸瞅丑俦圳帱惆溴妯瘳雠鲋",
						chu : "臭初出橱厨躇锄雏滁除楚础储矗搐触处亍刍憷绌杵楮樗蜍蹰黜",
						chuan : "揣川穿椽传船喘串掾舛惴遄巛氚钏镩舡",
						chuang : "疮窗幢床闯创怆",
						chui : "吹炊捶锤垂陲棰槌",
						chun : "春椿醇唇淳纯蠢促莼沌肫朐鹑蝽",
						chuo : "戳绰蔟辶辍镞踔龊",
						ci : "疵茨磁雌辞慈瓷词此刺赐次荠呲嵯鹚螅糍趑",
						cong : "聪葱囱匆从丛偬苁淙骢琮璁枞",
						cu : "凑粗醋簇猝殂蹙",
						cuan : "蹿篡窜汆撺昕爨",
						cui : "摧崔催脆瘁粹淬翠萃悴璀榱隹",
						cun : "村存寸磋忖皴",
						cuo : "撮搓措挫错厝脞锉矬痤鹾蹉躜",
						da : "搭达答瘩打大耷哒嗒怛妲疸褡笪靼鞑",
						dai : "呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨逯骀绐玳黛",
						dan : "耽担丹单郸掸胆旦氮但惮淡诞弹蛋亻儋卩萏啖澹檐殚赕眈瘅聃箪",
						dang : "当挡党荡档谠凼菪宕砀铛裆",
						dao : "刀捣蹈倒岛祷导到稻悼道盗叨啁忉洮氘焘忑纛",
						de : "德得的锝",
						deng : "蹬灯登等瞪凳邓噔嶝戥磴镫簦",
						di : "堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻莜荻嘀娣柢棣觌砥碲睇镝羝骶",
						dian : "颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫埝巅玷癜癫簟踮",
						diao : "碉叼雕凋刁掉吊钓调轺铞蜩粜貂",
						die : "跌爹碟蝶迭谍叠佚垤堞揲喋渫轶牒瓞褶耋蹀鲽鳎",
						ding : "丁盯叮钉顶鼎锭定订丢仃啶玎腚碇町铤疔耵酊",
						dong : "东冬董懂动栋侗恫冻洞垌咚岽峒夂氡胨胴硐鸫",
						dou : "兜抖斗陡豆逗痘蔸钭窦窬蚪篼酡",
						du : "都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟橐牍蠹笃髑黩",
						duan : "端短锻段断缎彖椴煅簖",
						dui : "堆兑队对怼憝碓",
						dun : "墩吨蹲敦顿囤钝盾遁炖砘礅盹镦趸",
						duo : "掇哆多夺垛躲朵跺舵剁惰堕咄哚缍柁铎裰踱",
						e : "蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩垭苊莪萼呃愕屙婀轭曷腭硪锇锷鹗颚鳄",
						en : "恩蒽摁唔嗯",
						er : "而儿耳尔饵洱二贰迩珥铒鸸鲕",
						fa : "发罚筏伐乏阀法珐垡砝",
						fan : "藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蘩幡犭梵攵燔畈蹯",
						fang : "坊芳方肪房防妨仿访纺放匚邡彷钫舫鲂",
						fei : "菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绋绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱",
						fen : "芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼愍鲼鼢",
						feng : "丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑沣砜",
						fu : "佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙苻茯莩菔呋幞滏艴孚驸绂桴赙黻黼罘稃馥虍蚨蜉蝠蝮麸趺跗鳆",
						ga : "噶嘎蛤尬呷尕尜旮钆",
						gai : "该改概钙盖溉丐陔垓戤赅胲",
						gan : "干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐",
						gang : "冈刚钢缸肛纲岗港戆罡颃筻",
						gong : "杠工攻功恭龚供躬公宫弓巩汞拱贡共蕻廾咣珙肱蚣蛩觥",
						gao : "篙皋高膏羔糕搞镐稿告睾诰郜蒿藁缟槔槁杲锆",
						ge : "哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿塥嗝纥搿膈硌铪镉袼颌虼舸骼髂",
						gei : "给",
						gen : "根跟亘茛哏艮",
						geng : "耕更庚羹埂耿梗哽赓鲠",
						gou : "钩勾沟苟狗垢构购够佝诟岣遘媾缑觏彀鸲笱篝鞲",
						gu : "辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰哌崮汩梏轱牯牿胍臌毂瞽罟钴锢瓠鸪鹄痼蛄酤觚鲴骰鹘",
						gua : "刮瓜剐寡挂褂卦诖呱栝鸹",
						guai : "乖拐怪哙",
						guan : "棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏",
						guang : "光广逛犷桄胱疒",
						gui : "瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜",
						gun : "辊滚棍丨衮绲磙鲧",
						guo : "锅郭国果裹过馘蠃埚掴呙囗帼崞猓椁虢锞聒蜮蜾蝈",
						ha : "哈",
						hai : "骸孩海氦亥害骇咴嗨颏醢",
						han : "酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖阚瀚晗焓颔蚶鼾",
						hen : "夯痕很狠恨",
						hang : "杭航沆绗珩桁",
						hao : "壕嚎豪毫郝好耗号浩薅嗥嚆濠灏昊皓颢蚝",
						he : "呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺诃劾壑藿嗑嗬阖盍蚵翮",
						hei : "嘿黑",
						heng : "哼亨横衡恒訇蘅",
						hong : "轰哄烘虹鸿洪宏弘红黉讧荭薨闳泓",
						hou : "喉侯猴吼厚候后堠後逅瘊篌糇鲎骺",
						hu : "呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜鹕鹱笏醐斛",
						hua : "花哗华猾滑画划化话劐浍骅桦铧稞",
						huai : "槐徊怀淮坏还踝",
						huan : "欢环桓缓换患唤痪豢焕涣宦幻郇奂垸擐圜洹浣漶寰逭缳锾鲩鬟",
						huang : "荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇",
						hui : "灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙哕喙隳洄彗缋珲晖恚虺蟪麾",
						hun : "荤昏婚魂浑混诨馄阍溷缗",
						huo : "豁活伙火获或惑霍货祸攉嚯夥钬锪镬耠蠖",
						ji : "击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪居丌乩剞佶佴脔墼芨芰萁蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂",
						jia : "嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏拮岬浃迦珈戛胛恝铗镓痂蛱笳袈跏",
						jian : "歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧柙楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯",
						jiang : "僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇",
						jiao : "蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫佼僬茭挢噍峤徼姣纟敫皎鹪蛟醮跤鲛",
						jie : "窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届偈讦诘喈嗟獬婕孑桀獒碣锴疖袷颉蚧羯鲒骱髫",
						jin : "巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽卺荩堇噤馑廑妗缙瑾槿赆觐钅锓衿矜",
						jing : "劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌",
						jiong : "炯窘冂迥扃",
						jiu : "揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鹫赳鬏",
						ju : "鞠拘狙疽驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫",
						juan : "捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽",
						jue : "撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖",
						jun : "均菌钧军君峻俊竣浚郡骏捃狻皲筠麇",
						ka : "喀咖卡佧咔胩",
						ke : "咯坷苛柯棵磕颗科壳咳可渴克刻客课岢恪溘骒缂珂轲氪瞌钶疴窠蝌髁",
						kai : "开揩楷凯慨剀垲蒈忾恺铠锎",
						kan : "刊堪勘坎砍看侃凵莰莶戡龛瞰",
						kang : "康慷糠扛抗亢炕坑伉闶钪",
						kao : "考拷烤靠尻栲犒铐",
						ken : "肯啃垦恳垠裉颀",
						keng : "吭忐铿",
						kong : "空恐孔控倥崆箜",
						kou : "抠口扣寇芤蔻叩眍筘",
						ku : "枯哭窟苦酷库裤刳堀喾绔骷",
						kua : "夸垮挎跨胯侉",
						kuai : "块筷侩快蒯郐蒉狯脍",
						kuan : "宽款髋",
						kuang : "匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶",
						kui : "亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗揆喹喟悝愦阕逵暌睽聩蝰篑臾跬",
						kun : "坤昆捆困悃阃琨锟醌鲲髡",
						kuo : "括扩廓阔蛞",
						la : "垃拉喇蜡腊辣啦剌摺邋旯砬瘌",
						lai : "莱来赖崃徕涞濑赉睐铼癞籁",
						lan : "蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴",
						lang : "琅榔狼廊郎朗浪莨蒗啷阆锒稂螂",
						lao : "捞劳牢老佬姥酪烙涝唠崂栳铑铹痨醪",
						le : "勒乐肋仂叻嘞泐鳓",
						lei : "雷镭蕾磊累儡垒擂类泪羸诔荽咧漯嫘缧檑耒酹",
						ling : "棱冷拎玲菱零龄铃伶羚凌灵陵岭领另令酃塄苓呤囹泠绫柃棂瓴聆蛉翎鲮",
						leng : "楞愣",
						li : "厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜捩呖唳喱猁溧澧逦娌嫠骊缡珞枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧",
						lian : "俩联莲连镰廉怜涟帘敛脸链恋炼练挛蔹奁潋濂娈琏楝殓臁膦裢蠊鲢",
						liang : "粮凉梁粱良两辆量晾亮谅墚椋踉靓魉",
						liao : "撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩耢",
						lie : "列裂烈劣猎冽埒洌趔躐鬣",
						lin : "琳林磷霖临邻鳞淋凛赁吝蔺嶙廪遴檩辚瞵粼躏麟",
						liu : "溜琉榴硫馏留刘瘤流柳六抡偻蒌泖浏遛骝绺旒熘锍镏鹨鎏",
						"long" : "龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃",
						lou : "楼娄搂篓漏陋喽嵝镂瘘耧蝼髅",
						lu : "芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆摅撸噜泸渌漉璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈",
						lv : "驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛",
						luan : "峦孪滦卵乱栾鸾銮",
						lue : "掠略锊",
						lun : "轮伦仑沦纶论囵",
						luo : "萝螺罗逻锣箩骡裸落洛骆络倮荦摞猡泺椤脶镙瘰雒",
						ma : "妈麻玛码蚂马骂嘛吗唛犸嬷杩麽",
						mai : "埋买麦卖迈脉劢荬咪霾",
						man : "瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔",
						mang : "芒茫盲忙莽邙漭朦硭蟒",
						meng : "氓萌蒙檬盟锰猛梦孟勐甍瞢懵礞虻蜢蠓艋艨黾",
						miao : "猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱",
						mao : "茅锚毛矛铆卯茂冒帽貌贸侔袤勖茆峁瑁昴牦耄旄懋瞀蛑蝥蟊髦",
						me : "么",
						mei : "玫枚梅酶霉煤没眉媒镁每美昧寐妹媚坶莓嵋猸浼湄楣镅鹛袂魅",
						men : "门闷们扪玟焖懑钔",
						mi : "眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼嘧猕獯汨宓弭脒敉糸縻麋",
						mian : "棉眠绵冕免勉娩缅面沔湎腼眄",
						mie : "蔑灭咩蠛篾",
						min : "民抿皿敏悯闽苠岷闵泯珉",
						ming : "明螟鸣铭名命冥茗溟暝瞑酩",
						miu : "谬",
						mo : "摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫镆秣瘼耱蟆貊貘",
						mou : "谋牟某厶哞婺眸鍪",
						mu : "拇牡亩姆母墓暮幕募慕木目睦牧穆仫苜呒沐毪钼",
						na : "拿哪呐钠那娜纳内捺肭镎衲箬",
						nai : "氖乃奶耐奈鼐艿萘柰",
						nan : "南男难囊喃囡楠腩蝻赧",
						nao : "挠脑恼闹孬垴猱瑙硇铙蛲",
						ne : "淖呢讷",
						nei : "馁",
						nen : "嫩能枘恁",
						ni : "妮霓倪泥尼拟你匿腻逆溺伲坭猊怩滠昵旎祢慝睨铌鲵",
						nian : "蔫拈年碾撵捻念廿辇黏鲇鲶",
						niang : "娘酿",
						niao : "鸟尿茑嬲脲袅",
						nie : "捏聂孽啮镊镍涅乜陧蘖嗫肀颞臬蹑",
						nin : "您柠",
						ning : "狞凝宁拧泞佞蓥咛甯聍",
						niu : "牛扭钮纽狃忸妞蚴",
						nong : "脓浓农侬",
						nu : "奴努怒呶帑弩胬孥驽",
						nv : "女恧钕衄",
						nuan : "暖",
						nuenue : "虐",
						nue : "疟谑",
						nuo : "挪懦糯诺傩搦喏锘",
						ou : "哦欧鸥殴藕呕偶沤怄瓯耦",
						pa : "啪趴爬帕怕琶葩筢",
						pai : "拍排牌徘湃派俳蒎",
						pan : "攀潘盘磐盼畔判叛爿泮袢襻蟠蹒",
						pang : "乓庞旁耪胖滂逄",
						pao : "抛咆刨炮袍跑泡匏狍庖脬疱",
						pei : "呸胚培裴赔陪配佩沛掊辔帔淠旆锫醅霈",
						pen : "喷盆湓",
						peng : "砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯堋嘭怦蟛",
						pi : "砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕陴邳郫圮鼙擗噼庀媲纰枇甓睥罴铍痦癖疋蚍貔",
						pian : "篇偏片骗谝骈犏胼褊翩蹁",
						piao : "飘漂瓢票剽嘌嫖缥殍瞟螵",
						pie : "撇瞥丿苤氕",
						pin : "拼频贫品聘拚姘嫔榀牝颦",
						ping : "乒坪苹萍平凭瓶评屏俜娉枰鲆",
						po : "坡泼颇婆破魄迫粕叵鄱溥珀钋钷皤笸",
						pou : "剖裒踣",
						pu : "扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗濮璞氆镤镨蹼",
						qi : "期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亟亓圻芑萋葺嘁屺岐汔淇骐绮琪琦杞桤槭欹祺憩碛蛴蜞綦綮趿蹊鳍麒",
						qia : "掐恰洽葜",
						qian : "牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉佥阡芊芡荨掮岍悭慊骞搴褰缱椠肷愆钤虔箝",
						qiang : "枪呛腔羌墙蔷强抢嫱樯戗炝锖锵镪襁蜣羟跫跄",
						qiao : "橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵毳硗跷鞒",
						qie : "切茄且怯窃郄唼惬妾挈锲箧",
						qin : "钦侵亲秦琴勤芹擒禽寝沁芩蓁蕲揿吣嗪噙溱檎螓衾",
						qing : "青轻氢倾卿清擎晴氰情顷请庆倩苘圊檠磬蜻罄箐謦鲭黥",
						qiong : "琼穷邛茕穹筇銎",
						qiu : "秋丘邱球求囚酋泅俅氽巯艽犰湫逑遒楸赇鸠虬蚯蝤裘糗鳅鼽",
						qu : "趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍祛磲癯蛐蠼麴瞿黢",
						quan : "圈颧权醛泉全痊拳犬券劝诠荃獾悛绻辁畎铨蜷筌鬈",
						que : "缺炔瘸却鹊榷确雀阙悫",
						qun : "裙群逡",
						ran : "然燃冉染苒髯",
						rang : "瓤壤攘嚷让禳穰",
						rao : "饶扰绕荛娆桡",
						ruo : "惹若弱",
						re : "热偌",
						ren : "壬仁人忍韧任认刃妊纫仞荏葚饪轫稔衽",
						reng : "扔仍",
						ri : "日",
						rong : "戎茸蓉荣融熔溶容绒冗嵘狨缛榕蝾",
						rou : "揉柔肉糅蹂鞣",
						ru : "茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡铷襦颥",
						ruan : "软阮朊",
						rui : "蕊瑞锐芮蕤睿蚋",
						run : "闰润",
						sa : "撒洒萨卅仨挲飒",
						sai : "腮鳃塞赛噻",
						san : "三叁伞散彡馓氵毵糁霰",
						sang : "桑嗓丧搡磉颡",
						sao : "搔骚扫嫂埽臊瘙鳋",
						se : "瑟色涩啬铩铯穑",
						sen : "森",
						seng : "僧",
						sha : "莎砂杀刹沙纱傻啥煞脎歃痧裟霎鲨",
						shai : "筛晒酾",
						shan : "珊苫杉山删煽衫闪陕擅赡膳善汕扇缮剡讪鄯埏芟潸姗骟膻钐疝蟮舢跚鳝",
						shang : "墒伤商赏晌上尚裳垧绱殇熵觞",
						shao : "梢捎稍烧芍勺韶少哨邵绍劭苕潲蛸笤筲艄",
						she : "奢赊蛇舌舍赦摄射慑涉社设厍佘猞畲麝",
						shen : "砷申呻伸身深娠绅神沈审婶甚肾慎渗诜谂吲哂渖椹矧蜃",
						sheng : "声生甥牲升绳省盛剩胜圣丞渑媵眚笙",
						shi : "师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑唑饣轼耆贳炻礻铈铊螫舐筮豕鲥鲺",
						shou : "收手首守寿授售受瘦兽扌狩绶艏",
						shu : "蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽忄沭涑澍姝纾毹腧殳镯秫鹬",
						shua : "刷耍唰涮",
						shuai : "摔衰甩帅蟀",
						shuan : "栓拴闩",
						shuang : "霜双爽孀",
						shui : "谁水睡税",
						shun : "吮瞬顺舜恂",
						shuo : "说硕朔烁蒴搠嗍濯妁槊铄",
						si : "斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕菥咝汜泗澌姒驷缌祀祠锶鸶耜蛳笥",
						song : "松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦",
						sou : "搜艘擞嗽叟嗖嗾馊溲飕瞍锼螋",
						su : "苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫簌觫稣",
						suan : "酸蒜算",
						sui : "虽隋随绥髓碎岁穗遂隧祟蓑冫谇濉邃燧眭睢",
						sun : "孙损笋荪狲飧榫跣隼",
						suo : "梭唆缩琐索锁所唢嗦娑桫睃羧",
						ta : "塌他它她塔獭挞蹋踏闼溻遢榻沓",
						tai : "胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐",
						tan : "坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯蕈昙钽锬覃",
						tang : "汤塘搪堂棠膛唐糖傥饧溏瑭铴镗耥螗螳羰醣",
						thang : "倘躺淌",
						theng : "趟烫",
						tao : "掏涛滔绦萄桃逃淘陶讨套挑鼗啕韬饕",
						te : "特",
						teng : "藤腾疼誊滕",
						ti : "梯剔踢锑提题蹄啼体替嚏惕涕剃屉荑悌逖绨缇鹈裼醍",
						tian : "天添填田甜恬舔腆掭忝阗殄畋钿蚺",
						tiao : "条迢眺跳佻祧铫窕龆鲦",
						tie : "贴铁帖萜餮",
						ting : "厅听烃汀廷停亭庭挺艇莛葶婷梃蜓霆",
						tong : "通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼",
						tou : "偷投头透亠",
						tu : "凸秃突图徒途涂屠土吐兔堍荼菟钍酴",
						tuan : "湍团疃",
						tui : "推颓腿蜕褪退忒煺",
						tun : "吞屯臀饨暾豚窀",
						tuo : "拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝砣箨舄跎鼍",
						wa : "挖哇蛙洼娃瓦袜佤娲腽",
						wai : "歪外",
						wan : "豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄苋菀纨绾琬脘畹蜿箢",
						wang : "汪王亡枉网往旺望忘妄罔尢惘辋魍",
						wei : "威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫倭偎诿隈葳薇帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨熨痿艉鲔",
						wen : "瘟温蚊文闻纹吻稳紊问刎愠阌汶璺韫殁雯",
						weng : "嗡翁瓮蓊蕹",
						wo : "挝蜗涡窝我斡卧握沃莴幄渥杌肟龌",
						wu : "巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴庑怃忤浯寤迕妩骛牾焐鹉鹜蜈鋈鼯",
						xi : "昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗茜葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧钸皙穸蜥蟋舾羲粞翕醯鼷",
						xia : "瞎虾匣霞辖暇峡侠狭下厦夏吓掀葭嗄狎遐瑕硖瘕罅黠",
						xian : "锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼藓岘猃暹娴氙祆鹇痫蚬筅籼酰跹",
						xiang : "相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨",
						xiao : "萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓咻崤潇逍骁绡枭枵筱箫魈",
						xie : "楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷廨瀣邂绁缬榭榍歙躞",
						xin : "薪芯锌欣辛新忻心信衅囟馨莘歆铽鑫",
						xing : "星腥猩惺兴刑型形邢行醒幸杏性姓陉荇荥擤悻硎",
						xiong : "兄凶胸匈汹雄熊芎",
						xiu : "休修羞朽嗅锈秀袖绣莠岫馐庥鸺貅髹",
						xu : "墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续讴诩圩蓿怵洫溆顼栩煦砉盱胥糈醑",
						xuan : "轩喧宣悬旋玄选癣眩绚儇谖萱揎馔泫洵渲漩璇楦暄炫煊碹铉镟痃",
						xue : "靴薛学穴雪血噱泶鳕",
						xun : "勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀薰峋徇浔曛窨醺鲟",
						ya : "压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢揠吖岈迓娅琊桠氩砑睚痖",
						yan : "焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣靥赝俨偃兖讠谳郾鄢芫菸崦恹闫阏洇湮滟妍嫣琰晏胭腌焱罨筵酽魇餍鼹",
						yang : "殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅",
						yao : "邀腰妖瑶摇尧遥窑谣姚咬舀药要耀夭爻吆崾徭瀹幺珧杳曜肴鹞窈繇鳐",
						ye : "椰噎耶爷野冶也页掖业叶曳腋夜液谒邺揶馀晔烨铘",
						yi : "一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佾诒圪圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪贻旖熠钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟",
						yin : "茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞堙茚喑狺夤氤铟瘾蚓霪龈",
						ying : "英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦撄嘤膺滢潆瀛瑛璎楹鹦瘿颍罂",
						yo : "哟唷",
						yong : "拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉慵邕镛甬鳙饔",
						you : "幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莸呦囿宥柚猷牖铕疣蝣鱿黝鼬",
						yu : "迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄喁圄圉嵛狳饫庾阈妪妤纡瑜昱觎腴欤於煜燠聿钰鹆瘐瘀窳蝓竽舁雩龉",
						yuan : "鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院塬沅媛瑗橼爰眢鸢螈鼋",
						yue : "曰约越跃钥岳粤月悦阅龠樾刖钺",
						yun : "耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽纭殒昀氲",
						za : "匝砸杂拶咂",
						zai : "栽哉灾宰载再在咱崽甾",
						zan : "攒暂赞瓒昝簪糌趱錾",
						zang : "赃脏葬奘戕臧",
						zao : "遭糟凿藻枣早澡蚤躁噪造皂灶燥唣缫",
						ze : "责择则泽仄赜啧迮昃笮箦舴",
						zei : "贼",
						zen : "怎谮",
						zeng : "增憎曾赠缯甑罾锃",
						zha : "扎喳渣札轧铡闸眨栅榨咋乍炸诈揸吒咤哳怍砟痄蚱齄",
						zhai : "摘斋宅窄债寨砦",
						zhan : "瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃",
						zhang : "樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑",
						zhao : "招昭找沼赵照罩兆肇召爪诏棹钊笊",
						zhe : "遮折哲蛰辙者锗蔗这浙谪陬柘辄磔鹧褚蜇赭",
						zhen : "珍斟真甄砧臻贞针侦枕疹诊震振镇阵缜桢榛轸赈胗朕祯畛鸩",
						zheng : "蒸挣睁征狰争怔整拯正政帧症郑证诤峥钲铮筝",
						zhi : "芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾攴贽膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯",
						zhong : "中盅忠钟衷终种肿重仲众冢锺螽舂舯踵",
						zhou : "舟周州洲诌粥轴肘帚咒皱宙昼骤啄着倜诹荮鬻纣胄碡籀舳酎鲷",
						zhu : "珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴驺杼槠橥炷铢疰瘃蚰竺箸翥躅麈",
						zhua : "抓",
						zhuai : "拽",
						zhuan : "专砖转撰赚篆抟啭颛",
						zhuang : "桩庄装妆撞壮状丬",
						zhui : "椎锥追赘坠缀萑骓缒",
						zhun : "谆准",
						zhuo : "捉拙卓桌琢茁酌灼浊倬诼廴蕞擢啜浞涿杓焯禚斫",
						zi : "兹咨资姿滋淄孜紫仔籽滓子自渍字谘嵫姊孳缁梓辎赀恣眦锱秭耔笫粢觜訾鲻髭",
						zong : "鬃棕踪宗综总纵腙粽",
						zou : "邹走奏揍鄹鲰",
						zu : "租足卒族祖诅阻组俎菹啐徂驵蹴",
						zuan : "钻纂攥缵",
						zui : "嘴醉最罪",
						zun : "尊遵撙樽鳟",
						zuo : "昨左佐柞做作坐座阝阼胙祚酢",
						cou : "薮楱辏腠",
						nang : "攮哝囔馕曩",
						o : "喔",
						dia : "嗲",
						chuai : "嘬膪踹",
						cen : "岑涔",
						diu : "铥",
						nou : "耨",
						fou : "缶",
						bia : "髟"
					}, this.polyphone = {
						19969 : "DZ",
						19975 : "WM",
						19988 : "QJ",
						20048 : "YL",
						20056 : "SC",
						20060 : "NM",
						20094 : "QG",
						20127 : "QJ",
						20167 : "QC",
						20193 : "YG",
						20250 : "KH",
						20256 : "ZC",
						20282 : "SC",
						20285 : "QJG",
						20291 : "TD",
						20314 : "YD",
						20340 : "NE",
						20375 : "TD",
						20389 : "YJ",
						20391 : "CZ",
						20415 : "PB",
						20446 : "YS",
						20447 : "SQ",
						20504 : "TC",
						20608 : "KG",
						20854 : "QJ",
						20857 : "ZC",
						20911 : "PF",
						20504 : "TC",
						20608 : "KG",
						20854 : "QJ",
						20857 : "ZC",
						20911 : "PF",
						20985 : "AW",
						21032 : "PB",
						21048 : "XQ",
						21049 : "SC",
						21089 : "YS",
						21119 : "JC",
						21242 : "SB",
						21273 : "SC",
						21305 : "YP",
						21306 : "QO",
						21330 : "ZC",
						21333 : "SDC",
						21345 : "QK",
						21378 : "CA",
						21397 : "SC",
						21414 : "XS",
						21442 : "SC",
						21477 : "JG",
						21480 : "TD",
						21484 : "ZS",
						21494 : "YX",
						21505 : "YX",
						21512 : "HG",
						21523 : "XH",
						21537 : "PB",
						21542 : "PF",
						21549 : "KH",
						21571 : "E",
						21574 : "DA",
						21588 : "TD",
						21589 : "O",
						21618 : "ZC",
						21621 : "KHA",
						21632 : "ZJ",
						21654 : "KG",
						21679 : "LKG",
						21683 : "KH",
						21710 : "A",
						21719 : "YH",
						21734 : "WOE",
						21769 : "A",
						21780 : "WN",
						21804 : "XH",
						21834 : "A",
						21899 : "ZD",
						21903 : "RN",
						21908 : "WO",
						21939 : "ZC",
						21956 : "SA",
						21964 : "YA",
						21970 : "TD",
						22003 : "A",
						22031 : "JG",
						22040 : "XS",
						22060 : "ZC",
						22066 : "ZC",
						22079 : "MH",
						22129 : "XJ",
						22179 : "XA",
						22237 : "NJ",
						22244 : "TD",
						22280 : "JQ",
						22300 : "YH",
						22313 : "XW",
						22331 : "YQ",
						22343 : "YJ",
						22351 : "PH",
						22395 : "DC",
						22412 : "TD",
						22484 : "PB",
						22500 : "PB",
						22534 : "ZD",
						22549 : "DH",
						22561 : "PB",
						22612 : "TD",
						22771 : "KQ",
						22831 : "HB",
						22841 : "JG",
						22855 : "QJ",
						22865 : "XQ",
						23013 : "ML",
						23081 : "WM",
						23487 : "SX",
						23558 : "QJ",
						23561 : "YW",
						23586 : "YW",
						23614 : "YW",
						23615 : "SN",
						23631 : "PB",
						23646 : "ZS",
						23663 : "ZT",
						23673 : "YG",
						23762 : "TD",
						23769 : "ZS",
						23780 : "QJ",
						23884 : "QK",
						24055 : "XH",
						24113 : "DC",
						24162 : "ZC",
						24191 : "GA",
						24273 : "QJ",
						24324 : "NL",
						24377 : "TD",
						24378 : "QJ",
						24439 : "PF",
						24554 : "ZS",
						24683 : "TD",
						24694 : "WE",
						24733 : "LK",
						24925 : "TN",
						25094 : "ZG",
						25100 : "XQ",
						25103 : "XH",
						25153 : "PB",
						25170 : "PB",
						25179 : "KG",
						25203 : "PB",
						25240 : "ZS",
						25282 : "FB",
						25303 : "NA",
						25324 : "KG",
						25341 : "ZY",
						25373 : "WZ",
						25375 : "XJ",
						25384 : "A",
						25457 : "A",
						25528 : "SD",
						25530 : "SC",
						25552 : "TD",
						25774 : "ZC",
						25874 : "ZC",
						26044 : "YW",
						26080 : "WM",
						26292 : "PB",
						26333 : "PB",
						26355 : "ZY",
						26366 : "CZ",
						26397 : "ZC",
						26399 : "QJ",
						26415 : "ZS",
						26451 : "SB",
						26526 : "ZC",
						26552 : "JG",
						26561 : "TD",
						26588 : "JG",
						26597 : "CZ",
						26629 : "ZS",
						26638 : "YL",
						26646 : "XQ",
						26653 : "KG",
						26657 : "XJ",
						26727 : "HG",
						26894 : "ZC",
						26937 : "ZS",
						26946 : "ZC",
						26999 : "KJ",
						27099 : "KJ",
						27449 : "YQ",
						27481 : "XS",
						27542 : "ZS",
						27663 : "ZS",
						27748 : "TS",
						27784 : "SC",
						27788 : "ZD",
						27795 : "TD",
						27812 : "O",
						27850 : "PB",
						27852 : "MB",
						27895 : "SL",
						27898 : "PL",
						27973 : "QJ",
						27981 : "KH",
						27986 : "HX",
						27994 : "XJ",
						28044 : "YC",
						28065 : "WG",
						28177 : "SM",
						28267 : "QJ",
						28291 : "KH",
						28337 : "ZQ",
						28463 : "TL",
						28548 : "DC",
						28601 : "TD",
						28689 : "PB",
						28805 : "JG",
						28820 : "QG",
						28846 : "PB",
						28952 : "TD",
						28975 : "ZC",
						29100 : "A",
						29325 : "QJ",
						29575 : "SL",
						29602 : "FB",
						30010 : "TD",
						30044 : "CX",
						30058 : "PF",
						30091 : "YSP",
						30111 : "YN",
						30229 : "XJ",
						30427 : "SC",
						30465 : "SX",
						30631 : "YQ",
						30655 : "QJ",
						30684 : "QJG",
						30707 : "SD",
						30729 : "XH",
						30796 : "LG",
						30917 : "PB",
						31074 : "NM",
						31085 : "JZ",
						31109 : "SC",
						31181 : "ZC",
						31192 : "MLB",
						31293 : "JQ",
						31400 : "YX",
						31584 : "YJ",
						31896 : "ZN",
						31909 : "ZY",
						31995 : "XJ",
						32321 : "PF",
						32327 : "ZY",
						32418 : "HG",
						32420 : "XQ",
						32421 : "HG",
						32438 : "LG",
						32473 : "GJ",
						32488 : "TD",
						32521 : "QJ",
						32527 : "PB",
						32562 : "ZSQ",
						32564 : "JZ",
						32735 : "ZD",
						32793 : "PB",
						33071 : "PF",
						33098 : "XL",
						33100 : "YA",
						33152 : "PB",
						33261 : "CX",
						33324 : "BP",
						33333 : "TD",
						33406 : "YA",
						33426 : "WM",
						33432 : "PB",
						33445 : "JG",
						33486 : "ZN",
						33493 : "TS",
						33507 : "QJ",
						33540 : "QJ",
						33544 : "ZC",
						33564 : "XQ",
						33617 : "YT",
						33632 : "QJ",
						33636 : "XH",
						33637 : "YX",
						33694 : "WG",
						33705 : "PF",
						33728 : "YW",
						33882 : "SR",
						34067 : "WM",
						34074 : "YW",
						34121 : "QJ",
						34255 : "ZC",
						34259 : "XL",
						34425 : "JH",
						34430 : "XH",
						34485 : "KH",
						34503 : "YS",
						34532 : "HG",
						34552 : "XS",
						34558 : "YE",
						34593 : "ZL",
						34660 : "YQ",
						34892 : "XH",
						34928 : "SC",
						34999 : "QJ",
						35048 : "PB",
						35059 : "SC",
						35098 : "ZC",
						35203 : "TQ",
						35265 : "JX",
						35299 : "JX",
						35782 : "SZ",
						35828 : "YS",
						35830 : "E",
						35843 : "TD",
						35895 : "YG",
						35977 : "MH",
						36158 : "JG",
						36228 : "QJ",
						36426 : "XQ",
						36466 : "DC",
						36710 : "JC",
						36711 : "ZYG",
						36767 : "PB",
						36866 : "SK",
						36951 : "YW",
						37034 : "YX",
						37063 : "XH",
						37218 : "ZC",
						37325 : "ZC",
						38063 : "PB",
						38079 : "TD",
						38085 : "QY",
						38107 : "DC",
						38116 : "TD",
						38123 : "YD",
						38224 : "HG",
						38241 : "XTC",
						38271 : "ZC",
						38415 : "YE",
						38426 : "KH",
						38461 : "YD",
						38463 : "AE",
						38466 : "PB",
						38477 : "XJ",
						38518 : "YT",
						38551 : "WK",
						38585 : "ZC",
						38704 : "XS",
						38739 : "LJ",
						38761 : "GJ",
						38808 : "SQ",
						39048 : "JG",
						39049 : "XJ",
						39052 : "HG",
						39076 : "CZ",
						39271 : "XT",
						39534 : "TD",
						39552 : "TD",
						39584 : "PB",
						39647 : "SB",
						39730 : "LG",
						39748 : "TPB",
						40109 : "ZQ",
						40479 : "ND",
						40516 : "HG",
						40536 : "HG",
						40583 : "QJ",
						40765 : "YQ",
						40784 : "QJ",
						40840 : "YK",
						40863 : "QJG"
					}
				},
				getFullChars : function(a) {
					for (var b, c = "", d = (new RegExp("[a-zA-Z0-9- ]"), 0), e = a.length; e > d; d++) {
						var f = a.substr(d, 1),
							g = f.charCodeAt(0);
						g > 40869 || 19968 > g ? c += f : (b = this._getFullChar(f), b !== !1 && (c += b))
					}
					return c
				},
				getCamelChars : function(a) {
					if ("string" != typeof a)
						throw new Error(-1, "函数getFisrt需要字符串类型参数!");
					for (var b = [], c = 0, d = a.length; d > c; c++) {
						var e = a.charAt(c);
						b.push(this._getChar(e))
					}
					return this._getResult(b)
				},
				_getFullChar : function(a) {
					for (var b in this.full_dict)
						if (-1 !== this.full_dict[b].indexOf(a)) return this._capitalize(b);
					return !1
				},
				_capitalize : function(a) {
					if (a.length > 0) {
						var b = a.substr(0, 1).toUpperCase(),
							c = a.substr(1, a.length);
						return b + c
					}
				},
				_getChar : function(a) {
					var b = a.charCodeAt(0);
					return b > 40869 || 19968 > b ? a : this.options.checkPolyphone && this.polyphone[b] ? this.polyphone[b] : this.char_dict.charAt(b - 19968)
				},
				_getResult : function(a) {
					if (!this.options.checkPolyphone) return a.join("");
					for (var b = [ "" ], c = 0, d = a.length; d > c; c++) {
						var e = a[c],
							f = e.length;
						if (1 == f)
							for (var g = 0; g < b.length; g++) b[j] += e;else {
							var h = b.slice(0);
							b = [];
							for (var g = 0; f > g; g++) {
								for (var i = h.slice(0), j = 0; j < i.length; j++) i[j] += e.charAt(g);
								b = b.concat(i)
							}
						}
					}
					return b
				}
			};
			var c = function(a, b) {
				for (var c in b) a[c] = b[c];
				return a
			};
			return new a(arguments)
		}()
	}
}(jQuery), function(a) {
	a.pageloading = function(b) {
		b = a.extend({
			opacity : 1,
			backgroundColor : "#fff",
			loadingTips : "加载中...",
			TipsColor : "#666",
			delayTime : 1e3,
			zindex : 999,
			sleep : 0
		}, b);
		var c = document.documentElement.clientHeight,
			d = document.documentElement.clientWidth,
			e = '<div class="ue-pageloading" style="height:' + c + "px;background:" + b.backgroundColor + ";opacity:" + b.opacity + ";filter:alpha(opacity=" + 100 * b.opacity + ");z-index:" + b.zindex + ';"><div class="ue-pageloading-tips" style="color:' + b.TipsColor + ';">' + b.loadingTips + "</div></div>";
		a("body").append(e);
		var f = a(".ue-pageloading-tips"),
			g = f.height(),
			h = f.width(),
			i = c > g ? (c - g) / 2 : 0,
			j = d > h ? (d - h) / 2 : 0;
		f.css({
			left : j + "px",
			top : i + "px"
		}), document.onreadystatechange = function() {
			if ("complete" == document.readyState) {
				var c = a(".ue-pageloading");
				setTimeout(function() {
					c.animate({
						opacity : 0
					}, b.delayTime, function() {
						a(this).hide()
					})
				}, b.sleep)
			}
		}
	}
}(jQuery), jQuery.fn.pagination = function(a, b) {
	return b = jQuery.extend({
			items_per_page : 10,
			num_display_entries : 10,
			current_page : 0,
			num_edge_entries : 0,
			link_to : "#",
			prev_text : "《",
			next_text : "》",
			ellipse_text : "...",
			prev_show_always : !0,
			next_show_always : !0,
			callback : function() {
				return !1
			}
		}, b || {}), this.each(function() {
			function c() {
				return Math.ceil(a / b.items_per_page)
			}
			function d() {
				var a = Math.ceil(b.num_display_entries / 2),
					d = c(),
					e = d - b.num_display_entries,
					f = g > a ? Math.max(Math.min(g - a, e), 0) : 0,
					h = g > a ? Math.min(g + a, d) : Math.min(b.num_display_entries, d);
				return [ f, h ]
			}
			function e(a, c) {
				g = a, f();var d = b.callback(a, h);
				return d || (c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0), d
			}
			function f() {
				h.empty();var a = d(),
					f = c(),
					i = function(a) {
						return function(b) {
							return e(a, b)
						}
					},
					j = function(a, c) {
						if (a = 0 > a ? 0 : f > a ? a : f - 1, c = jQuery.extend({
								text : a + 1,
								classes : ""
							}, c || {}), a == g) var d = jQuery("<span class='current'>" + c.text + "</span>");
						else var d = jQuery("<a>" + c.text + "</a>").bind("click", i(a)).attr("href", b.link_to.replace(/__id__/, a));
						c.classes && d.addClass(c.classes), h.append(d)
					};
				if (b.prev_text && (g > 0 || b.prev_show_always) && j(g - 1, {
						text : b.prev_text,
						classes : "prev"
					}), a[0] > 0 && b.num_edge_entries > 0) {
					for (var k = Math.min(b.num_edge_entries, a[0]), l = 0; k > l; l++) j(l);
					b.num_edge_entries < a[0] && b.ellipse_text && jQuery("<span>" + b.ellipse_text + "</span>").appendTo(h)
				}
				for (var l = a[0]; l < a[1]; l++) j(l);
				if (a[1] < f && b.num_edge_entries > 0) {
					f - b.num_edge_entries > a[1] && b.ellipse_text && jQuery("<span>" + b.ellipse_text + "</span>").appendTo(h);
					for (var m = Math.max(f - b.num_edge_entries, a[1]), l = m; f > l; l++) j(l)
				}
				b.next_text && (f - 1 > g || b.next_show_always) && j(g + 1, {
					text : b.next_text,
					classes : "next"
				})
			}
			var g = b.current_page;
			a = !a || 0 > a ? 1 : a, b.items_per_page = !b.items_per_page || b.items_per_page < 0 ? 1 : b.items_per_page;
			var h = jQuery(this);
			this.selectPage = function(a) {
				e(a)
			}, this.prevPage = function() {
				return g > 0 ? (e(g - 1), !0) : !1
			}, this.nextPage = function() {
				return g < c() - 1 ? (e(g + 1), !0) : !1
			}, f(), b.callback(g, this)
		})
};
var MXI_DEBUG = !0;
!function(a, b) {
	"use strict";
	function c(a, b) {
		for (var c, d = [], f = 0; f < a.length; ++f) {
			if (c = g[a[f]] || e(a[f]), !c)
				throw "module definition dependecy not found: " + a[f];
			d.push(c)
		}
		b.apply(null, d)
	}
	function d(a, d, e) {
		if ("string" != typeof a)
			throw "invalid module definition, module id must be defined and be a string";
		if (d === b)
			throw "invalid module definition, dependencies must be specified";
		if (e === b)
			throw "invalid module definition, definition function must be specified";
		c(d, function() {
			g[a] = e.apply(null, arguments)
		})
	}
	function e(b) {
		for (var c = a, d = b.split(/[.\/]/), e = 0; e < d.length; ++e) {
			if (!c[d[e]]) return;
			c = c[d[e]]
		}
		return c
	}
	function f(c) {
		for (var d = 0; d < c.length; d++) {
			for (var e = a, f = c[d], h = f.split(/[.\/]/), i = 0; i < h.length - 1; ++i) e[h[i]] === b && (e[h[i]] = {}), e = e[h[i]];
			e[h[h.length - 1]] = g[f]
		}
	}
	var g = {};
	d("moxie/core/utils/Basic", [], function() {
		var a = function(a) {
				var b;
				return a === b ? "undefined" : null === a ? "null" : a.nodeType ? "node" : {}.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
			},
			b = function(d) {
				var e;
				return c(arguments, function(f, h) {
						h > 0 && c(f, function(c, f) {
							c !== e && (a(d[f]) === a(c) && ~g(a(c), [ "array", "object" ]) ? b(d[f], c) : d[f] = c)
						})
					}), d
			},
			c = function(b, c) {
				var d,
					e,
					f;
				if (b)
					if ("number" === a(b.length)) {
						for (f = 0, d = b.length; d > f; f++)
							if (c(b[f], f) === !1) return
					} else if ("object" === a(b))
						for (e in b)
							if (b.hasOwnProperty(e) && c(b[e], e) === !1) return
			},
			d = function(b) {
				var c;
				if (!b || "object" !== a(b)) return !0;
				for (c in b) return !1;
				return !0
			},
			e = function(b, c) {
				function d(e) {
					"function" === a(b[e]) && b[e](function(a) {
						++e < f && !a ? d(e) : c(a)
					})
				}
				var e = 0,
					f = b.length;
				"function" !== a(c) && (c = function() {}), b && b.length || c(), d(e)
			},
			f = function(a, b) {
				var d = 0,
					e = a.length,
					f = new Array(e);
				c(a, function(a, c) {
					a(function(a) {
						if (a) return b(a);
						var g = [].slice.call(arguments);
						g.shift(), f[c] = g, d++, d === e && (f.unshift(null), b.apply(this, f))
					})
				})
			},
			g = function(a, b) {
				if (b) {
					if (Array.prototype.indexOf) return Array.prototype.indexOf.call(b, a);
					for (var c = 0, d = b.length; d > c; c++)
						if (b[c] === a) return c
				}
				return -1
			},
			h = function(b, c) {
				var d = [];
				"array" !== a(b) && (b = [ b ]), "array" !== a(c) && (c = [ c ]);
				for (var e in b) -1 === g(b[e], c) && d.push(b[e]);
				return d.length ? d : !1
			},
			i = function(a, b) {
				var d = [];
				return c(a, function(a) {
						-1 !== g(a, b) && d.push(a)
					}), d.length ? d : null
			},
			j = function(a) {
				var b,
					c = [];
				for (b = 0; b < a.length; b++) c[b] = a[b];
				return c
			},
			k = function() {
				var a = 0;
				return function(b) {
					var c,
						d = (new Date).getTime().toString(32);
					for (c = 0; 5 > c; c++) d += Math.floor(65535 * Math.random()).toString(32);
					return (b || "o_") + d + (a++).toString(32)
				}
			}(),
			l = function(a) {
				return a ? String.prototype.trim ? String.prototype.trim.call(a) : a.toString().replace(/^\s*/, "").replace(/\s*$/, "") : a
			},
			m = function(a) {
				if ("string" != typeof a) return a;
				var b,
					c = {
						t : 1099511627776,
						g : 1073741824,
						m : 1048576,
						k : 1024
					};
				return a = /^([0-9\.]+)([tmgk]?)$/.exec(a.toLowerCase().replace(/[^0-9\.tmkg]/g, "")), b = a[2], a = +a[1], c.hasOwnProperty(b) && (a *= c[b]), Math.floor(a)
			},
			n = function(b) {
				var c = [].slice.call(arguments, 1);
				return b.replace(/%[a-z]/g, function() {
					var b = c.shift();
					return "undefined" !== a(b) ? b : ""
				})
			};
		return {
			guid : k,
			typeOf : a,
			extend : b,
			each : c,
			isEmptyObj : d,
			inSeries : e,
			inParallel : f,
			inArray : g,
			arrayDiff : h,
			arrayIntersect : i,
			toArray : j,
			trim : l,
			sprintf : n,
			parseSizeStr : m
		}
	}), d("moxie/core/utils/Env", [ "moxie/core/utils/Basic" ], function(a) {
		function b(a, b, c) {
			var d = 0,
				e = 0,
				f = 0,
				g = {
					dev : -6,
					alpha : -5,
					a : -5,
					beta : -4,
					b : -4,
					RC : -3,
					rc : -3,
					"#" : -2,
					p : 1,
					pl : 1
				},
				h = function(a) {
					return a = ("" + a).replace(/[_\-+]/g, "."), a = a.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), a.length ? a.split(".") : [ -8 ]
				},
				i = function(a) {
					return a ? isNaN(a) ? g[a] || -7 : parseInt(a, 10) : 0
				};
			for (a = h(a), b = h(b), e = Math.max(a.length, b.length), d = 0; e > d; d++)
				if (a[d] != b[d]) {
					if (a[d] = i(a[d]), b[d] = i(b[d]), a[d] < b[d]) {
						f = -1;break
					}
					if (a[d] > b[d]) {
						f = 1;break
					}
			}
			if (!c) return f;
			switch (c) {
			case ">":
			case "gt":
				return f > 0;case ">=":
			case "ge":
				return f >= 0;case "<=":
			case "le":
				return 0 >= f;case "==":
			case "=":
			case "eq":
				return 0 === f;case "<>":
			case "!=":
			case "ne":
				return 0 !== f;case "":
			case "<":
			case "lt":
				return 0 > f;default:
				return null
			}
		}
		var c = function(a) {
				var b = "",
					c = "?",
					d = "function",
					e = "undefined",
					f = "object",
					g = "name",
					h = "version",
					i = {
						has : function(a, b) {
							return -1 !== b.toLowerCase().indexOf(a.toLowerCase())
						},
						lowerize : function(a) {
							return a.toLowerCase()
						}
					},
					j = {
						rgx : function() {
							for (var b, c, g, h, i, j, k, l = 0, m = arguments; l < m.length; l += 2) {
								var n = m[l],
									o = m[l + 1];
								if (typeof b === e) {
									b = {};
									for (h in o) i = o[h], typeof i === f ? b[i[0]] = a : b[i] = a
								}
								for (c = g = 0; c < n.length; c++)
									if (j = n[c].exec(this.getUA())) {
										for (h = 0; h < o.length; h++) k = j[++g], i = o[h], typeof i === f && i.length > 0 ? 2 == i.length ? typeof i[1] == d ? b[i[0]] = i[1].call(this, k) : b[i[0]] = i[1] : 3 == i.length ? typeof i[1] !== d || i[1].exec && i[1].test ? b[i[0]] = k ? k.replace(i[1], i[2]) : a : b[i[0]] = k ? i[1].call(this, k, i[2]) : a : 4 == i.length && (b[i[0]] = k ? i[3].call(this, k.replace(i[1], i[2])) : a) : b[i] = k ? k : a;
										break
								}
								if (j) break
							}
							return b
						},
						str : function(b, d) {
							for (var e in d)
								if (typeof d[e] === f && d[e].length > 0) {
									for (var g = 0; g < d[e].length; g++)
										if (i.has(d[e][g], b)) return e === c ? a : e
								} else if (i.has(d[e], b)) return e === c ? a : e;
							return b
						}
					},
					k = {
						browser : {
							oldsafari : {
								major : {
									1 : [ "/8", "/1", "/3" ],
									2 : "/4",
									"?" : "/"
								},
								version : {
									"1.0" : "/8",
									1.2 : "/1",
									1.3 : "/3",
									"2.0" : "/412",
									"2.0.2" : "/416",
									"2.0.3" : "/417",
									"2.0.4" : "/419",
									"?" : "/"
								}
							}
						},
						device : {
							sprint : {
								model : {
									"Evo Shift 4G" : "7373KT"
								},
								vendor : {
									HTC : "APA",
									Sprint : "Sprint"
								}
							}
						},
						os : {
							windows : {
								version : {
									ME : "4.90",
									"NT 3.11" : "NT3.51",
									"NT 4.0" : "NT4.0",
									2000 : "NT 5.0",
									XP : [ "NT 5.1", "NT 5.2" ],
									Vista : "NT 6.0",
									7 : "NT 6.1",
									8 : "NT 6.2",
									8.1 : "NT 6.3",
									RT : "ARM"
								}
							}
						}
					},
					l = {
						browser : [ [ /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i ], [ g, h ], [ /\s(opr)\/([\w\.]+)/i ], [ [ g, "Opera" ], h ], [ /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i ], [ g, h ], [ /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i ], [ [ g, "IE" ], h ], [ /(edge)\/((\d+)?[\w\.]+)/i ], [ g, h ], [ /(yabrowser)\/([\w\.]+)/i ], [ [ g, "Yandex" ], h ], [ /(comodo_dragon)\/([\w\.]+)/i ], [ [ g, /_/g, " " ], h ], [ /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i ], [ g, h ], [ /(dolfin)\/([\w\.]+)/i ], [ [ g, "Dolphin" ], h ], [ /((?:android.+)crmo|crios)\/([\w\.]+)/i ], [ [ g, "Chrome" ], h ], [ /XiaoMi\/MiuiBrowser\/([\w\.]+)/i ], [ h, [ g, "MIUI Browser" ] ], [ /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i ], [ h, [ g, "Android Browser" ] ], [ /FBAV\/([\w\.]+);/i ], [ h, [ g, "Facebook" ] ], [ /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i ], [ h, [ g, "Mobile Safari" ] ], [ /version\/([\w\.]+).+?(mobile\s?safari|safari)/i ], [ h, g ], [ /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i ], [ g, [ h, j.str, k.browser.oldsafari.version ] ], [ /(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i ], [ g, h ], [ /(navigator|netscape)\/([\w\.-]+)/i ], [ [ g, "Netscape" ], h ], [ /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i ], [ g, h ] ],
						engine : [ [ /windows.+\sedge\/([\w\.]+)/i ], [ h, [ g, "EdgeHTML" ] ], [ /(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i ], [ g, h ], [ /rv\:([\w\.]+).*(gecko)/i ], [ h, g ] ],
						os : [ [ /microsoft\s(windows)\s(vista|xp)/i ], [ g, h ], [ /(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i ], [ g, [ h, j.str, k.os.windows.version ] ], [ /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i ], [ [ g, "Windows" ], [ h, j.str, k.os.windows.version ] ], [ /\((bb)(10);/i ], [ [ g, "BlackBerry" ], h ], [ /(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i ], [ g, h ], [ /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i ], [ [ g, "Symbian" ], h ], [ /\((series40);/i ], [ g ], [ /mozilla.+\(mobile;.+gecko.+firefox/i ], [ [ g, "Firefox OS" ], h ], [ /(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i ], [ g, h ], [ /(cros)\s[\w]+\s([\w\.]+\w)/i ], [ [ g, "Chromium OS" ], h ], [ /(sunos)\s?([\w\.]+\d)*/i ], [ [ g, "Solaris" ], h ], [ /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i ], [ g, h ], [ /(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i ], [ [ g, "iOS" ], [ h, /_/g, "." ] ], [ /(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i ], [ [ g, "Mac OS" ], [ h, /_/g, "." ] ], [ /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i ], [ g, h ] ]
					},
					m = function(a) {
						var c = a || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : b);
						this.getBrowser = function() {
							return j.rgx.apply(this, l.browser)
						}, this.getEngine = function() {
							return j.rgx.apply(this, l.engine)
						}, this.getOS = function() {
							return j.rgx.apply(this, l.os)
						}, this.getResult = function() {
							return {
								ua : this.getUA(),
								browser : this.getBrowser(),
								engine : this.getEngine(),
								os : this.getOS()
							}
						}, this.getUA = function() {
							return c
						}, this.setUA = function(a) {
							return c = a, this
						}, this.setUA(c)
					};
				return m
			}(),
			d = function() {
				var b = {
					define_property : function() {
						return !1
					}(),
					create_canvas : function() {
						var a = document.createElement("canvas");
						return !(!a.getContext || !a.getContext("2d"))
					}(),
					return_response_type : function(b) {
						try {
							if (-1 !== a.inArray(b, [ "", "text", "document" ])) return !0;
							if (window.XMLHttpRequest) {
								var c = new XMLHttpRequest;
								if (c.open("get", "/"), "responseType" in c) return c.responseType = b, c.responseType !== b ? !1 : !0
							}
						} catch (d) {} return !1
					},
					use_data_uri : function() {
						var a = new Image;
						return a.onload = function() {
								b.use_data_uri = 1 === a.width && 1 === a.height
							}, setTimeout(function() {
								a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
							}, 1), !1
					}(),
					use_data_uri_over32kb : function() {
						return b.use_data_uri && ("IE" !== f.browser || f.version >= 9)
					},
					use_data_uri_of : function(a) {
						return b.use_data_uri && 33e3 > a || b.use_data_uri_over32kb()
					},
					use_fileinput : function() {
						if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
						var a = document.createElement("input");
						return a.setAttribute("type", "file"), !a.disabled
					}
				};
				return function(c) {
					var d = [].slice.call(arguments);
					return d.shift(), "function" === a.typeOf(b[c]) ? b[c].apply(this, d) : !!b[c]
				}
			}(),
			e = (new c).getResult(),
			f = {
				can : d,
				uaParser : c,
				browser : e.browser.name,
				version : e.browser.version,
				os : e.os.name,
				osVersion : e.os.version,
				verComp : b,
				swf_url : "../flash/Moxie.swf",
				xap_url : "../silverlight/Moxie.xap",
				global_event_dispatcher : "moxie.core.EventTarget.instance.dispatchEvent"
			};
		return f.OS = f.os, MXI_DEBUG && (f.debug = {
				runtime : !0,
				events : !1
			}, f.log = function() {
				function b(a) {
					d.appendChild(document.createTextNode(a + "\n"))
				}
				var c = arguments[0];
				if ("string" === a.typeOf(c) && (c = a.sprintf.apply(this, arguments)), window && window.console && window.console.log) window.console.log(c);
				else if (document) {
					var d = document.getElementById("moxie-console");
					d || (d = document.createElement("pre"), d.id = "moxie-console", d.style.display = "none", document.body.appendChild(d)), -1 !== a.inArray(a.typeOf(c), [ "object", "array" ]) ? b(c) : d.appendChild(document.createTextNode(c + "\n"))
				}
			}), f
	}), d("moxie/core/I18n", [ "moxie/core/utils/Basic" ], function(a) {
		var b = {};
		return {
			addI18n : function(c) {
				return a.extend(b, c)
			},
			translate : function(a) {
				return b[a] || a
			},
			_ : function(a) {
				return this.translate(a)
			},
			sprintf : function(b) {
				var c = [].slice.call(arguments, 1);
				return b.replace(/%[a-z]/g, function() {
					var b = c.shift();
					return "undefined" !== a.typeOf(b) ? b : ""
				})
			}
		}
	}), d("moxie/core/utils/Mime", [ "moxie/core/utils/Basic", "moxie/core/I18n" ], function(a, b) {
		var c = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/java-archive,war,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",
			d = {
				mimes : {},
				extensions : {},
				addMimeType : function(a) {
					var b,
						c,
						d,
						e = a.split(/,/);
					for (b = 0; b < e.length; b += 2) {
						for (d = e[b + 1].split(/ /), c = 0; c < d.length; c++) this.mimes[d[c]] = e[b];
						this.extensions[e[b]] = d
					}
				},
				extList2mimes : function(b, c) {
					var d,
						e,
						f,
						g,
						h = this,
						i = [];
					for (e = 0; e < b.length; e++)
						for (d = b[e].extensions.split(/\s*,\s*/), f = 0; f < d.length; f++) {
							if ("*" === d[f]) return [];
							if (g = h.mimes[d[f]], g && -1 === a.inArray(g, i) && i.push(g), c && /^\w+$/.test(d[f]) || "application/java-archive" == g) i.push("." + d[f]);
							else if (!g) return []
					}
					return i
				},
				mimes2exts : function(b) {
					var c = this,
						d = [];
					return a.each(b, function(b) {
							if ("*" === b) return d = [], !1;
							var e = b.match(/^(\w+)\/(\*|\w+)$/);
							e && ("*" === e[2] ? a.each(c.extensions, function(a, b) {
								new RegExp("^" + e[1] + "/").test(b) && [].push.apply(d, c.extensions[b])
							}) : c.extensions[b] && [].push.apply(d, c.extensions[b]))
						}), d
				},
				mimes2extList : function(c) {
					var d = [],
						e = [];
					return "string" === a.typeOf(c) && (c = a.trim(c).split(/\s*,\s*/)), e = this.mimes2exts(c), d.push({
							title : b.translate("Files"),
							extensions : e.length ? e.join(",") : "*"
						}), d.mimes = c, d
				},
				getFileExtension : function(a) {
					var b = a && a.match(/\.([^.]+)$/);
					return b ? b[1].toLowerCase() : ""
				},
				getFileMime : function(a) {
					return this.mimes[this.getFileExtension(a)] || ""
				}
			};
		return d.addMimeType(c), d
	}), d("moxie/core/utils/Dom", [ "moxie/core/utils/Env" ], function(a) {
		var b = function(a) {
				return "string" != typeof a ? a : document.getElementById(a)
			},
			c = function(a, b) {
				if (!a.className) return !1;
				var c = new RegExp("(^|\\s+)" + b + "(\\s+|$)");
				return c.test(a.className)
			},
			d = function(a, b) {
				c(a, b) || (a.className = a.className ? a.className.replace(/\s+$/, "") + " " + b : b)
			},
			e = function(a, b) {
				if (a.className) {
					var c = new RegExp("(^|\\s+)" + b + "(\\s+|$)");
					a.className = a.className.replace(c, function(a, b, c) {
						return " " === b && " " === c ? " " : ""
					})
				}
			},
			f = function(a, b) {
				return a.currentStyle ? a.currentStyle[b] : window.getComputedStyle ? window.getComputedStyle(a, null)[b] : void 0
			},
			g = function(b, c) {
				function d(a) {
					var b,
						c,
						d = 0,
						e = 0;
					return a && (c = a.getBoundingClientRect(), b = "CSS1Compat" === j.compatMode ? j.documentElement : j.body, d = c.left + b.scrollLeft, e = c.top + b.scrollTop), {
							x : d,
							y : e
					}
				}
				var e,
					f,
					g,
					h = 0,
					i = 0,
					j = document;
				if (b = b, c = c || j.body, b && b.getBoundingClientRect && "IE" === a.browser && (!j.documentMode || j.documentMode < 8)) return f = d(b), g = d(c), {
							x : f.x - g.x,
							y : f.y - g.y
						};
				for (e = b; e && e != c && e.nodeType;) h += e.offsetLeft || 0, i += e.offsetTop || 0, e = e.offsetParent;
				for (e = b.parentNode; e && e != c && e.nodeType;) h -= e.scrollLeft || 0,
					i -= e.scrollTop || 0, e = e.parentNode;
				return {
					x : h,
					y : i
				}
			},
			h = function(a) {
				return {
					w : a.offsetWidth || a.clientWidth,
					h : a.offsetHeight || a.clientHeight
				}
			};
		return {
			get : b,
			hasClass : c,
			addClass : d,
			removeClass : e,
			getStyle : f,
			getPos : g,
			getSize : h
		}
	}), d("moxie/core/Exceptions", [ "moxie/core/utils/Basic" ], function(a) {
		function b(a, b) {
			var c;
			for (c in a)
				if (a[c] === b) return c;
			return null
		}
		return {
			RuntimeError : function() {
				function c(a) {
					this.code = a, this.name = b(d, a), this.message = this.name + ": RuntimeError " + this.code
				}
				var d = {
					NOT_INIT_ERR : 1,
					NOT_SUPPORTED_ERR : 9,
					JS_ERR : 4
				};
				return a.extend(c, d), c.prototype = Error.prototype, c
			}(),
			OperationNotAllowedException : function() {
				function b(a) {
					this.code = a, this.name = "OperationNotAllowedException"
				}
				return a.extend(b, {
						NOT_ALLOWED_ERR : 1
					}), b.prototype = Error.prototype, b
			}(),
			ImageError : function() {
				function c(a) {
					this.code = a, this.name = b(d, a), this.message = this.name + ": ImageError " + this.code
				}
				var d = {
					WRONG_FORMAT : 1,
					MAX_RESOLUTION_ERR : 2,
					INVALID_META_ERR : 3
				};
				return a.extend(c, d), c.prototype = Error.prototype, c
			}(),
			FileException : function() {
				function c(a) {
					this.code = a, this.name = b(d, a), this.message = this.name + ": FileException " + this.code
				}
				var d = {
					NOT_FOUND_ERR : 1,
					SECURITY_ERR : 2,
					ABORT_ERR : 3,
					NOT_READABLE_ERR : 4,
					ENCODING_ERR : 5,
					NO_MODIFICATION_ALLOWED_ERR : 6,
					INVALID_STATE_ERR : 7,
					SYNTAX_ERR : 8
				};
				return a.extend(c, d), c.prototype = Error.prototype, c
			}(),
			DOMException : function() {
				function c(a) {
					this.code = a, this.name = b(d, a), this.message = this.name + ": DOMException " + this.code
				}
				var d = {
					INDEX_SIZE_ERR : 1,
					DOMSTRING_SIZE_ERR : 2,
					HIERARCHY_REQUEST_ERR : 3,
					WRONG_DOCUMENT_ERR : 4,
					INVALID_CHARACTER_ERR : 5,
					NO_DATA_ALLOWED_ERR : 6,
					NO_MODIFICATION_ALLOWED_ERR : 7,
					NOT_FOUND_ERR : 8,
					NOT_SUPPORTED_ERR : 9,
					INUSE_ATTRIBUTE_ERR : 10,
					INVALID_STATE_ERR : 11,
					SYNTAX_ERR : 12,
					INVALID_MODIFICATION_ERR : 13,
					NAMESPACE_ERR : 14,
					INVALID_ACCESS_ERR : 15,
					VALIDATION_ERR : 16,
					TYPE_MISMATCH_ERR : 17,
					SECURITY_ERR : 18,
					NETWORK_ERR : 19,
					ABORT_ERR : 20,
					URL_MISMATCH_ERR : 21,
					QUOTA_EXCEEDED_ERR : 22,
					TIMEOUT_ERR : 23,
					INVALID_NODE_TYPE_ERR : 24,
					DATA_CLONE_ERR : 25
				};
				return a.extend(c, d), c.prototype = Error.prototype, c
			}(),
			EventException : function() {
				function b(a) {
					this.code = a, this.name = "EventException"
				}
				return a.extend(b, {
						UNSPECIFIED_EVENT_TYPE_ERR : 0
					}), b.prototype = Error.prototype, b
			}()
		}
	}), d("moxie/core/EventTarget", [ "moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Basic" ], function(a, b, c) {
		function d() {
			var d = {};
			c.extend(this, {
				uid : null,
				init : function() {
					this.uid || (this.uid = c.guid("uid_"))
				},
				addEventListener : function(a, b, e, f) {
					var g,
						h = this;
					return this.hasOwnProperty("uid") || (this.uid = c.guid("uid_")), a = c.trim(a), /\s/.test(a) ? void c.each(a.split(/\s+/), function(a) {
							h.addEventListener(a, b, e, f)
						}) : (a = a.toLowerCase(), e = parseInt(e, 10) || 0, g = d[this.uid] && d[this.uid][a] || [], g.push({
							fn : b,
							priority : e,
							scope : f || this
						}), d[this.uid] || (d[this.uid] = {}), void (d[this.uid][a] = g))
				},
				hasEventListener : function(a) {
					var b = a ? d[this.uid] && d[this.uid][a] : d[this.uid];
					return b ? b : !1
				},
				removeEventListener : function(a, b) {
					a = a.toLowerCase();
					var e,
						f = d[this.uid] && d[this.uid][a];
					if (f) {
						if (b) {
							for (e = f.length - 1; e >= 0; e--)
								if (f[e].fn === b) {
									f.splice(e, 1);break
							}
						} else
							f = [];
						f.length || (
						delete d[this.uid][a]
						, c.isEmptyObj(d[this.uid]) &&
						delete d[this.uid]
						)
					}
				},
				removeAllEventListeners : function() {
					d[this.uid] &&
					delete d[this.uid]
				},
				dispatchEvent : function(e) {
					var f,
						g,
						h,
						i,
						j,
						k = {},
						l = !0;
					if ("string" !== c.typeOf(e)) {
						if (i = e, "string" !== c.typeOf(i.type))
							throw new b.EventException(b.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
						e = i.type, i.total !== j && i.loaded !== j && (k.total = i.total, k.loaded = i.loaded), k.async = i.async || !1
					}
					if (-1 !== e.indexOf("::") ? !function(a) {
							f = a[0], e = a[1]
						}(e.split("::")) : f = this.uid, e = e.toLowerCase(), g = d[f] && d[f][e]) {
						g.sort(function(a, b) {
							return b.priority - a.priority
						}), h = [].slice.call(arguments), h.shift(), k.type = e, h.unshift(k), MXI_DEBUG && a.debug.events && a.log("Event '%s' fired on %u", k.type, f);
						var m = [];
						c.each(g, function(a) {
							h[0].target = a.scope, k.async ? m.push(function(b) {
								setTimeout(function() {
									b(a.fn.apply(a.scope, h) === !1)
								}, 1)
							}) : m.push(function(b) {
								b(a.fn.apply(a.scope, h) === !1)
							})
						}), m.length && c.inSeries(m, function(a) {
							l = !a
						})
					}
					return l
				},
				bind : function() {
					this.addEventListener.apply(this, arguments)
				},
				unbind : function() {
					this.removeEventListener.apply(this, arguments)
				},
				unbindAll : function() {
					this.removeAllEventListeners.apply(this, arguments)
				},
				trigger : function() {
					return this.dispatchEvent.apply(this, arguments)
				},
				handleEventProps : function(a) {
					var b = this;
					this.bind(a.join(" "), function(a) {
						var b = "on" + a.type.toLowerCase();
						"function" === c.typeOf(this[b]) && this[b].apply(this, arguments)
					}), c.each(a, function(a) {
						a = "on" + a.toLowerCase(a), "undefined" === c.typeOf(b[a]) && (b[a] = null)
					})
				}
			})
		}
		return d.instance = new d, d
	}), d("moxie/runtime/Runtime", [ "moxie/core/utils/Env", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/EventTarget" ], function(a, b, c, d) {
		function e(d, f, h, i, j) {
			var k,
				l = this,
				m = b.guid(f + "_"),
				n = j || "browser";
			d = d || {}, g[m] = this, h = b.extend({
				access_binary : !1,
				access_image_binary : !1,
				display_media : !1,
				do_cors : !1,
				drag_and_drop : !1,
				filter_by_extension : !0,
				resize_image : !1,
				report_upload_progress : !1,
				return_response_headers : !1,
				return_response_type : !1,
				return_status_code : !0,
				send_custom_headers : !1,
				select_file : !1,
				select_folder : !1,
				select_multiple : !0,
				send_binary_string : !1,
				send_browser_cookies : !0,
				send_multipart : !0,
				slice_blob : !1,
				stream_upload : !1,
				summon_file_dialog : !1,
				upload_filesize : !0,
				use_http_method : !0
			}, h), d.preferred_caps && (n = e.getMode(i, d.preferred_caps, n)), MXI_DEBUG && a.debug.runtime && a.log("	default mode: %s", n), k = function() {
				var a = {};
				return {
					exec : function(b, c, d, e) {
						return k[c] && (a[b] || (a[b] = {
							context : this,
							instance : new k[c]
						}), a[b].instance[d]) ? a[b].instance[d].apply(this, e) : void 0
					},
					removeInstance : function(b) {
						delete a[b]
					},
					removeAllInstances : function() {
						var c = this;
						b.each(a, function(a, d) {
							"function" === b.typeOf(a.instance.destroy) && a.instance.destroy.call(a.context), c.removeInstance(d)
						})
					}
				}
			}(), b.extend(this, {
				initialized : !1,
				uid : m,
				type : f,
				mode : e.getMode(i, d.required_caps, n),
				shimid : m + "_container",
				clients : 0,
				options : d,
				can : function(a, c) {
					var d = arguments[2] || h;
					if ("string" === b.typeOf(a) && "undefined" === b.typeOf(c) && (a = e.parseCaps(a)), "object" === b.typeOf(a)) {
						for (var f in a)
							if (!this.can(f, a[f], d)) return !1;
						return !0
					}
					return "function" === b.typeOf(d[a]) ? d[a].call(this, c) : c === d[a]
				},
				getShimContainer : function() {
					var a,
						d = c.get(this.shimid);
					return d || (a = this.options.container ? c.get(this.options.container) : document.body, d = document.createElement("div"), d.id = this.shimid, d.className = "moxie-shim moxie-shim-" + this.type, b.extend(d.style, {
							position : "absolute",
							top : "0px",
							left : "0px",
							width : "1px",
							height : "1px",
							overflow : "hidden"
						}), a.appendChild(d), a = null), d
				},
				getShim : function() {
					return k
				},
				shimExec : function(a, b) {
					var c = [].slice.call(arguments, 2);
					return l.getShim().exec.call(this, this.uid, a, b, c)
				},
				exec : function(a, b) {
					var c = [].slice.call(arguments, 2);
					return l[a] && l[a][b] ? l[a][b].apply(this, c) : l.shimExec.apply(this, arguments)
				},
				destroy : function() {
					if (l) {
						var a = c.get(this.shimid);
						a && a.parentNode.removeChild(a), k && k.removeAllInstances(), this.unbindAll(),
						delete g[this.uid]
						, this.uid = null, m = l = k = a = null
					}
				}
			}), this.mode && d.required_caps && !this.can(d.required_caps) && (this.mode = !1)
		}
		var f = {},
			g = {};
		return e.order = "html5,flash,silverlight,html4", e.getRuntime = function(a) {
				return g[a] ? g[a] : !1
			}, e.addConstructor = function(a, b) {
				b.prototype = d.instance, f[a] = b
			}, e.getConstructor = function(a) {
				return f[a] || null
			}, e.getInfo = function(a) {
				var b = e.getRuntime(a);
				return b ? {
					uid : b.uid,
					type : b.type,
					mode : b.mode,
					can : function() {
						return b.can.apply(b, arguments)
					}
				} : null
			}, e.parseCaps = function(a) {
				var c = {};
				return "string" !== b.typeOf(a) ? a || {} : (b.each(a.split(","), function(a) {
					c[a] = !0
				}), c)
			}, e.can = function(a, b) {
				var c,
					d,
					f = e.getConstructor(a);
				return f ? (c = new f({
					required_caps : b
				}), d = c.mode, c.destroy(), !!d) : !1
			}, e.thatCan = function(a, b) {
				var c = (b || e.order).split(/\s*,\s*/);
				for (var d in c)
					if (e.can(c[d], a)) return c[d];
				return null
			}, e.getMode = function(c, d, e) {
				var f = null;
				if ("undefined" === b.typeOf(e) && (e = "browser"), d && !b.isEmptyObj(c)) {
					if (b.each(d, function(d, e) {
							if (c.hasOwnProperty(e)) {
								var g = c[e](d);
								if ("string" == typeof g && (g = [ g ]), f) {
									if (!(f = b.arrayIntersect(f, g))) return MXI_DEBUG && a.debug.runtime && a.log("		%c: %v (conflicting mode requested: %s)", e, d, g), f = !1
								} else
									f = g
							}
							MXI_DEBUG && a.debug.runtime && a.log("		%c: %v (compatible modes: %s)", e, d, f)
						}), f) return -1 !== b.inArray(e, f) ? e : f[0];
					if (f === !1) return !1
				}
				return e
			}, e.capTrue = function() {
				return !0
			}, e.capFalse = function() {
				return !1
			}, e.capTest = function(a) {
				return function() {
					return !!a
				}
			}, e
	}), d("moxie/runtime/RuntimeClient", [ "moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/Runtime" ], function(a, b, c, d) {
		return function() {
			var e;
			c.extend(this, {
				connectRuntime : function(f) {
					function g(c) {
						var h,
							j;
						return c.length ? (h = c.shift().toLowerCase(), (j = d.getConstructor(h)) ? (MXI_DEBUG && a.debug.runtime && (a.log("Trying runtime: %s", h), a.log(f)), e = new j(f), e.bind("Init", function() {
							e.initialized = !0, MXI_DEBUG && a.debug.runtime && a.log("Runtime '%s' initialized", e.type), setTimeout(function() {
								e.clients++, i.trigger("RuntimeInit", e)
							}, 1)
						}), e.bind("Error", function() {
							MXI_DEBUG && a.debug.runtime && a.log("Runtime '%s' failed to initialize", e.type), e.destroy(), g(c)
						}), MXI_DEBUG && a.debug.runtime && a.log("	selected mode: %s", e.mode), e.mode ? void e.init() : void e.trigger("Error")) : void g(c)) : (i.trigger("RuntimeError", new b.RuntimeError(b.RuntimeError.NOT_INIT_ERR)), void (e = null))
					}
					var h,
						i = this;
					if ("string" === c.typeOf(f) ? h = f : "string" === c.typeOf(f.ruid) && (h = f.ruid), h) {
						if (e = d.getRuntime(h)) return e.clients++, e;
						throw new b.RuntimeError(b.RuntimeError.NOT_INIT_ERR)
					}
					g((f.runtime_order || d.order).split(/\s*,\s*/))
				},
				disconnectRuntime : function() {
					e && --e.clients <= 0 && e.destroy(), e = null
				},
				getRuntime : function() {
					return e && e.uid ? e : e = null
				},
				exec : function() {
					return e ? e.exec.apply(this, arguments) : null
				}
			})
		}
	}), d("moxie/file/FileInput", [ "moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Mime", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/I18n", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient" ], function(a, b, c, d, e, f, g, h, i) {
		function j(f) {
			MXI_DEBUG && b.log("Instantiating FileInput...");var j,
				l,
				m,
				n = this;
			if (-1 !== a.inArray(a.typeOf(f), [ "string", "node" ]) && (f = {
					browse_button : f
				}), l = d.get(f.browse_button), !l)
				throw new e.DOMException(e.DOMException.NOT_FOUND_ERR);
			m = {
				accept : [ {
					title : g.translate("All Files"),
					extensions : "*"
				} ],
				name : "file",
				multiple : !1,
				required_caps : !1,
				container : l.parentNode || document.body
			}, f = a.extend({}, m, f), "string" == typeof f.required_caps && (f.required_caps = h.parseCaps(f.required_caps)), "string" == typeof f.accept && (f.accept = c.mimes2extList(f.accept)), j = d.get(f.container), j || (j = document.body), "static" === d.getStyle(j, "position") && (j.style.position = "relative"), j = l = null, i.call(n), a.extend(n, {
				uid : a.guid("uid_"),
				ruid : null,
				shimid : null,
				files : null,
				init : function() {
					n.bind("RuntimeInit", function(b, c) {
						n.ruid = c.uid, n.shimid = c.shimid, n.bind("Ready", function() {
							n.trigger("Refresh")
						}, 999), n.bind("Refresh", function() {
							var b,
								e,
								g,
								h;
							g = d.get(f.browse_button), h = d.get(c.shimid), g && (b = d.getPos(g, d.get(f.container)), e = d.getSize(g), h && a.extend(h.style, {
								top : b.y + "px",
								left : b.x + "px",
								width : e.w + "px",
								height : e.h + "px"
							})), h = g = null
						}), c.exec.call(n, "FileInput", "init", f)
					}), n.connectRuntime(a.extend({}, f, {
						required_caps : {
							select_file : !0
						}
					}))
				},
				disable : function(b) {
					var c = this.getRuntime();
					c && c.exec.call(this, "FileInput", "disable", "undefined" === a.typeOf(b) ? !0 : b)
				},
				refresh : function() {
					n.trigger("Refresh")
				},
				destroy : function() {
					var b = this.getRuntime();
					b && (b.exec.call(this, "FileInput", "destroy"), this.disconnectRuntime()), "array" === a.typeOf(this.files) && a.each(this.files, function(a) {
						a.destroy()
					}), this.files = null, this.unbindAll()
				}
			}), this.handleEventProps(k)
		}
		var k = [ "ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup" ];
		return j.prototype = f.instance, j
	}), d("moxie/core/utils/Encode", [], function() {
		var a = function(a) {
				return unescape(encodeURIComponent(a))
			},
			b = function(a) {
				return decodeURIComponent(escape(a))
			},
			c = function(a, c) {
				if ("function" == typeof window.atob) return c ? b(window.atob(a)) : window.atob(a);
				var d,
					e,
					f,
					g,
					h,
					i,
					j,
					k,
					l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					m = 0,
					n = 0,
					o = "",
					p = [];
				if (!a) return a;
				a += "";
				do g = l.indexOf(a.charAt(m++)), h = l.indexOf(a.charAt(m++)), i = l.indexOf(a.charAt(m++)), j = l.indexOf(a.charAt(m++)), k = g << 18 | h << 12 | i << 6 | j, d = k >> 16 & 255, e = k >> 8 & 255, f = 255 & k, 64 == i ? p[n++] = String.fromCharCode(d) : 64 == j ? p[n++] = String.fromCharCode(d, e) : p[n++] = String.fromCharCode(d, e, f); while (m < a.length);
				return o = p.join(""), c ? b(o) : o
			},
			d = function(b, c) {
				if (c && (b = a(b)), "function" == typeof window.btoa) return window.btoa(b);
				var d,
					e,
					f,
					g,
					h,
					i,
					j,
					k,
					l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					m = 0,
					n = 0,
					o = "",
					p = [];
				if (!b) return b;
				do d = b.charCodeAt(m++), e = b.charCodeAt(m++), f = b.charCodeAt(m++), k = d << 16 | e << 8 | f, g = k >> 18 & 63, h = k >> 12 & 63, i = k >> 6 & 63, j = 63 & k, p[n++] = l.charAt(g) + l.charAt(h) + l.charAt(i) + l.charAt(j); while (m < b.length);
				o = p.join("");
				var q = b.length % 3;
				return (q ? o.slice(0, q - 3) : o) + "===".slice(q || 3)
			};
		return {
			utf8_encode : a,
			utf8_decode : b,
			atob : c,
			btoa : d
		}
	}), d("moxie/file/Blob", [ "moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient" ], function(a, b, c) {
		function d(f, g) {
			function h(b, c, f) {
				var g,
					h = e[this.uid];
				return "string" === a.typeOf(h) && h.length ? (g = new d(null, {
					type : f,
					size : c - b
				}), g.detach(h.substr(b, g.size)), g) : null
			}
			c.call(this), f && this.connectRuntime(f), g ? "string" === a.typeOf(g) && (g = {
				data : g
			}) : g = {}, a.extend(this, {
				uid : g.uid || a.guid("uid_"),
				ruid : f,
				size : g.size || 0,
				type : g.type || "",
				slice : function(a, b, c) {
					return this.isDetached() ? h.apply(this, arguments) : this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), a, b, c)
				},
				getSource : function() {
					return e[this.uid] ? e[this.uid] : null
				},
				detach : function(a) {
					if (this.ruid && (this.getRuntime().exec.call(this, "Blob", "destroy"), this.disconnectRuntime(), this.ruid = null), a = a || "", "data:" == a.substr(0, 5)) {
						var c = a.indexOf(";base64,");
						this.type = a.substring(5, c), a = b.atob(a.substring(c + 8))
					}
					this.size = a.length, e[this.uid] = a
				},
				isDetached : function() {
					return !this.ruid && "string" === a.typeOf(e[this.uid])
				},
				destroy : function() {
					this.detach(),
					delete e[this.uid]
				}
			}), g.data ? this.detach(g.data) : e[this.uid] = g
		}
		var e = {};
		return d
	}), d("moxie/file/File", [ "moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/file/Blob" ], function(a, b, c) {
		function d(d, e) {
			e || (e = {}), c.apply(this, arguments), this.type || (this.type = b.getFileMime(e.name));var f;
			if (e.name) f = e.name.replace(/\\/g, "/"), f = f.substr(f.lastIndexOf("/") + 1);
			else if (this.type) {
				var g = this.type.split("/")[0];
				f = a.guid(("" !== g ? g : "file") + "_"), b.extensions[this.type] && (f += "." + b.extensions[this.type][0])
			}
			a.extend(this, {
				name : f || a.guid("file_"),
				relativePath : "",
				lastModifiedDate : e.lastModifiedDate || (new Date).toLocaleString()
			})
		}
		return d.prototype = c.prototype, d
	}), d("moxie/file/FileDrop", [ "moxie/core/I18n", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/file/File", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget", "moxie/core/utils/Mime" ], function(a, b, c, d, e, f, g, h, i) {
		function j(c) {
			MXI_DEBUG && e.log("Instantiating FileDrop...");var f,
				h = this;
			"string" == typeof c && (c = {
				drop_zone : c
			}), f = {
				accept : [ {
					title : a.translate("All Files"),
					extensions : "*"
				} ],
				required_caps : {
					drag_and_drop : !0
				}
			}, c = "object" == typeof c ? d.extend({}, f, c) : f, c.container = b.get(c.drop_zone) || document.body, "static" === b.getStyle(c.container, "position") && (c.container.style.position = "relative"), "string" == typeof c.accept && (c.accept = i.mimes2extList(c.accept)), g.call(h), d.extend(h, {
				uid : d.guid("uid_"),
				ruid : null,
				files : null,
				init : function() {
					h.bind("RuntimeInit", function(a, b) {
						h.ruid = b.uid, b.exec.call(h, "FileDrop", "init", c), h.dispatchEvent("ready")
					}), h.connectRuntime(c)
				},
				destroy : function() {
					var a = this.getRuntime();
					a && (a.exec.call(this, "FileDrop", "destroy"), this.disconnectRuntime()), this.files = null, this.unbindAll()
				}
			}), this.handleEventProps(k)
		}
		var k = [ "ready", "dragenter", "dragleave", "drop", "error" ];
		return j.prototype = h.instance, j
	}), d("moxie/file/FileReader", [ "moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/runtime/RuntimeClient" ], function(a, b, c, d, e, f) {
		function g() {
			function d(a, d) {
				if (this.trigger("loadstart"), this.readyState === g.LOADING) return this.trigger("error", new c.DOMException(c.DOMException.INVALID_STATE_ERR)), void this.trigger("loadend");
				if (!(d instanceof e)) return this.trigger("error", new c.DOMException(c.DOMException.NOT_FOUND_ERR)), void this.trigger("loadend");
				if (this.result = null, this.readyState = g.LOADING, d.isDetached()) {
					var f = d.getSource();
					switch (a) {
					case "readAsText":
					case "readAsBinaryString":
						this.result = f;
						break;case "readAsDataURL":
						this.result = "data:" + d.type + ";base64," + b.btoa(f)
					}
					this.readyState = g.DONE, this.trigger("load"), this.trigger("loadend")
				} else this.connectRuntime(d.ruid), this.exec("FileReader", "read", a, d)
			}
			f.call(this), a.extend(this, {
				uid : a.guid("uid_"),
				readyState : g.EMPTY,
				result : null,
				error : null,
				readAsBinaryString : function(a) {
					d.call(this, "readAsBinaryString", a)
				},
				readAsDataURL : function(a) {
					d.call(this, "readAsDataURL", a)
				},
				readAsText : function(a) {
					d.call(this, "readAsText", a)
				},
				abort : function() {
					this.result = null, -1 === a.inArray(this.readyState, [ g.EMPTY, g.DONE ]) && (this.readyState === g.LOADING && (this.readyState = g.DONE), this.exec("FileReader", "abort"), this.trigger("abort"), this.trigger("loadend"))
				},
				destroy : function() {
					this.abort(), this.exec("FileReader", "destroy"), this.disconnectRuntime(), this.unbindAll()
				}
			}), this.handleEventProps(h), this.bind("Error", function(a, b) {
				this.readyState = g.DONE, this.error = b
			}, 999), this.bind("Load", function(a) {
				this.readyState = g.DONE
			}, 999)
		}
		var h = [ "loadstart", "progress", "load", "abort", "error", "loadend" ];
		return g.EMPTY = 0, g.LOADING = 1, g.DONE = 2, g.prototype = d.instance, g
	}), d("moxie/core/utils/Url", [], function() {
		var a = function(b, c) {
				for (var d = [ "source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment" ], e = d.length, f = {
							http : 80,
							https : 443
						}, g = {}, h = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/, i = h.exec(b || ""); e--;) i[e] && (g[d[e]] = i[e]);
				if (!g.scheme) {
					c && "string" != typeof c || (c = a(c || document.location.href)), g.scheme = c.scheme, g.host = c.host, g.port = c.port;
					var j = "";
					/^[^\/]/.test(g.path) && (j = c.path, j = /\/[^\/]*\.[^\/]*$/.test(j) ? j.replace(/\/[^\/]+$/, "/") : j.replace(/\/?$/, "/")), g.path = j + (g.path || "")
				}
				return g.port || (g.port = f[g.scheme] || 80), g.port = parseInt(g.port, 10), g.path || (g.path = "/"),
					delete g.source
					, g
			},
			b = function(b) {
				var c = {
						http : 80,
						https : 443
					},
					d = "object" == typeof b ? b : a(b);
				return d.scheme + "://" + d.host + (d.port !== c[d.scheme] ? ":" + d.port : "") + d.path + (d.query ? d.query : "")
			},
			c = function(b) {
				function c(a) {
					return [ a.scheme, a.host, a.port ].join("/")
				}
				return "string" == typeof b && (b = a(b)), c(a()) === c(b)
			};
		return {
			parseUrl : a,
			resolveUrl : b,
			hasSameOrigin : c
		}
	}), d("moxie/runtime/RuntimeTarget", [ "moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget" ], function(a, b, c) {
		function d() {
			this.uid = a.guid("uid_"), b.call(this), this.destroy = function() {
				this.disconnectRuntime(), this.unbindAll()
			}
		}
		return d.prototype = c.instance, d
	}), d("moxie/file/FileReaderSync", [ "moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/utils/Encode" ], function(a, b, c) {
		return function() {
			function d(a, b) {
				if (!b.isDetached()) {
					var d = this.connectRuntime(b.ruid).exec.call(this, "FileReaderSync", "read", a, b);
					return this.disconnectRuntime(), d
				}
				var e = b.getSource();
				switch (a) {
				case "readAsBinaryString":
					return e;case "readAsDataURL":
					return "data:" + b.type + ";base64," + c.btoa(e);case "readAsText":
					for (var f = "", g = 0, h = e.length; h > g; g++) f += String.fromCharCode(e[g]);
					return f
				}
			}
			b.call(this), a.extend(this, {
				uid : a.guid("uid_"),
				readAsBinaryString : function(a) {
					return d.call(this, "readAsBinaryString", a)
				},
				readAsDataURL : function(a) {
					return d.call(this, "readAsDataURL", a)
				},
				readAsText : function(a) {
					return d.call(this, "readAsText", a)
				}
			})
		}
	}), d("moxie/xhr/FormData", [ "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/file/Blob" ], function(a, b, c) {
		function d() {
			var a,
				d = [];
			b.extend(this, {
				append : function(e, f) {
					var g = this,
						h = b.typeOf(f);
					f instanceof c ? a = {
						name : e,
						value : f
					} : "array" === h ? (e += "[]", b.each(f, function(a) {
						g.append(e, a)
					})) : "object" === h ? b.each(f, function(a, b) {
						g.append(e + "[" + b + "]", a)
					}) : "null" === h || "undefined" === h || "number" === h && isNaN(f) ? g.append(e, "false") : d.push({
						name : e,
						value : f.toString()
					})
				},
				hasBlob : function() {
					return !!this.getBlob()
				},
				getBlob : function() {
					return a && a.value || null
				},
				getBlobName : function() {
					return a && a.name || null
				},
				each : function(c) {
					b.each(d, function(a) {
						c(a.value, a.name)
					}), a && c(a.value, a.name)
				},
				destroy : function() {
					a = null, d = []
				}
			})
		}
		return d
	}), d("moxie/xhr/XMLHttpRequest", [ "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/utils/Encode", "moxie/core/utils/Url", "moxie/runtime/Runtime", "moxie/runtime/RuntimeTarget", "moxie/file/Blob", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/core/utils/Env", "moxie/core/utils/Mime" ], function(a, b, c, d, e, f, g, h, i, j, k, l) {
		function m() {
			this.uid = a.guid("uid_")
		}
		function n() {
			function c(a, b) {
				return A.hasOwnProperty(a) ? 1 === arguments.length ? k.can("define_property") ? A[a] : z[a] : void (k.can("define_property") ? A[a] = b : z[a] = b) : void 0
			}
			function i(b) {
				function d() {
					x && (x.destroy(), x = null), h.dispatchEvent("loadend"), h = null
				}
				function e(e) {
					x.bind("LoadStart", function(a) {
						c("readyState", n.LOADING), h.dispatchEvent("readystatechange"), h.dispatchEvent(a), H && h.upload.dispatchEvent(a)
					}), x.bind("Progress", function(a) {
						c("readyState") !== n.LOADING && (c("readyState", n.LOADING), h.dispatchEvent("readystatechange")), h.dispatchEvent(a)
					}), x.bind("UploadProgress", function(a) {
						H && h.upload.dispatchEvent({
							type : "progress",
							lengthComputable : !1,
							total : a.total,
							loaded : a.loaded
						})
					}), x.bind("Load", function(b) {
						c("readyState", n.DONE), c("status", Number(e.exec.call(x, "XMLHttpRequest", "getStatus") || 0)), c("statusText", o[c("status")] || ""), c("response", e.exec.call(x, "XMLHttpRequest", "getResponse", c("responseType"))), ~a.inArray(c("responseType"), [ "text", "" ]) ? c("responseText", c("response")) : "document" === c("responseType") && c("responseXML", c("response")), O = e.exec.call(x, "XMLHttpRequest", "getAllResponseHeaders"), h.dispatchEvent("readystatechange"), c("status") > 0 ? (H && h.upload.dispatchEvent(b), h.dispatchEvent(b)) : (J = !0, h.dispatchEvent("error")), d()
					}), x.bind("Abort", function(a) {
						h.dispatchEvent(a), d()
					}), x.bind("Error", function(a) {
						J = !0, c("readyState", n.DONE), h.dispatchEvent("readystatechange"), I = !0, h.dispatchEvent(a), d()
					}), e.exec.call(x, "XMLHttpRequest", "send", {
						url : r,
						method : s,
						async : B,
						user : t,
						password : u,
						headers : C,
						mimeType : E,
						encoding : D,
						responseType : h.responseType,
						withCredentials : h.withCredentials,
						options : N
					}, b)
				}
				var h = this;
				v = (new Date).getTime(), x = new g, "string" == typeof N.required_caps && (N.required_caps = f.parseCaps(N.required_caps)), N.required_caps = a.extend({}, N.required_caps, {
					return_response_type : h.responseType
				}), b instanceof j && (N.required_caps.send_multipart = !0), a.isEmptyObj(C) || (N.required_caps.send_custom_headers = !0), K || (N.required_caps.do_cors = !0), N.ruid ? e(x.connectRuntime(N)) : (x.bind("RuntimeInit", function(a, b) {
					e(b)
				}), x.bind("RuntimeError", function(a, b) {
					h.dispatchEvent("RuntimeError", b)
				}), x.connectRuntime(N))
			}
			function q() {
				c("responseText", ""), c("responseXML", null), c("response", null), c("status", 0), c("statusText", ""), v = w = null
			}
			var r,
				s,
				t,
				u,
				v,
				w,
				x,
				y,
				z = this,
				A = {
					timeout : 0,
					readyState : n.UNSENT,
					withCredentials : !1,
					status : 0,
					statusText : "",
					responseType : "",
					responseXML : null,
					responseText : null,
					response : null
				},
				B = !0,
				C = {},
				D = null,
				E = null,
				F = !1,
				G = !1,
				H = !1,
				I = !1,
				J = !1,
				K = !1,
				L = null,
				M = null,
				N = {},
				O = "";
			a.extend(this, A, {
				uid : a.guid("uid_"),
				upload : new m,
				open : function(f, g, h, i, j) {
					var k;
					if (!f || !g)
						throw new b.DOMException(b.DOMException.SYNTAX_ERR);
					if (/[\u0100-\uffff]/.test(f) || d.utf8_encode(f) !== f)
						throw new b.DOMException(b.DOMException.SYNTAX_ERR);
					if (~a.inArray(f.toUpperCase(), [ "CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK" ]) && (s = f.toUpperCase()), ~a.inArray(s, [ "CONNECT", "TRACE", "TRACK" ]))
						throw new b.DOMException(b.DOMException.SECURITY_ERR);
					if (g = d.utf8_encode(g), k = e.parseUrl(g), K = e.hasSameOrigin(k), r = e.resolveUrl(g), (i || j) && !K)
						throw new b.DOMException(b.DOMException.INVALID_ACCESS_ERR);
					if (t = i || k.user, u = j || k.pass, B = h || !0, B === !1 && (c("timeout") || c("withCredentials") || "" !== c("responseType")))
						throw new b.DOMException(b.DOMException.INVALID_ACCESS_ERR);
					F = !B, G = !1, C = {}, q.call(this), c("readyState", n.OPENED), this.dispatchEvent("readystatechange")
				},
				setRequestHeader : function(e, f) {
					var g = [ "accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via" ];
					if (c("readyState") !== n.OPENED || G)
						throw new b.DOMException(b.DOMException.INVALID_STATE_ERR);
					if (/[\u0100-\uffff]/.test(e) || d.utf8_encode(e) !== e)
						throw new b.DOMException(b.DOMException.SYNTAX_ERR);
					return e = a.trim(e).toLowerCase(), ~a.inArray(e, g) || /^(proxy\-|sec\-)/.test(e) ? !1 : (C[e] ? C[e] += ", " + f : C[e] = f, !0)
				},
				getAllResponseHeaders : function() {
					return O || ""
				},
				getResponseHeader : function(b) {
					return b = b.toLowerCase(), J || ~a.inArray(b, [ "set-cookie", "set-cookie2" ]) ? null : O && "" !== O && (y || (y = {}, a.each(O.split(/\r\n/), function(b) {
							var c = b.split(/:\s+/);
							2 === c.length && (c[0] = a.trim(c[0]), y[c[0].toLowerCase()] = {
								header : c[0],
								value : a.trim(c[1])
							})
						})), y.hasOwnProperty(b)) ? y[b].header + ": " + y[b].value : null
				},
				overrideMimeType : function(d) {
					var e,
						f;
					if (~a.inArray(c("readyState"), [ n.LOADING, n.DONE ]))
						throw new b.DOMException(b.DOMException.INVALID_STATE_ERR);
					if (d = a.trim(d.toLowerCase()), /;/.test(d) && (e = d.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) && (d = e[1], e[2] && (f = e[2])), !l.mimes[d])
						throw new b.DOMException(b.DOMException.SYNTAX_ERR);
					L = d, M = f
				},
				send : function(c, e) {
					if (N = "string" === a.typeOf(e) ? {
							ruid : e
						} : e ? e : {}, this.readyState !== n.OPENED || G)
						throw new b.DOMException(b.DOMException.INVALID_STATE_ERR);
					if (c instanceof h) N.ruid = c.ruid, E = c.type || "application/octet-stream";
					else if (c instanceof j) {
						if (c.hasBlob()) {
							var f = c.getBlob();
							N.ruid = f.ruid, E = f.type || "application/octet-stream"
						}
					} else "string" == typeof c && (D = "UTF-8", E = "text/plain;charset=UTF-8", c = d.utf8_encode(c));
					this.withCredentials || (this.withCredentials = N.required_caps && N.required_caps.send_browser_cookies && !K), H = !F && this.upload.hasEventListener(), J = !1, I = !c, F || (G = !0), i.call(this, c)
				},
				abort : function() {
					if (J = !0, F = !1, ~a.inArray(c("readyState"), [ n.UNSENT, n.OPENED, n.DONE ])) c("readyState", n.UNSENT);else {
						if (c("readyState", n.DONE), G = !1, !x)
							throw new b.DOMException(b.DOMException.INVALID_STATE_ERR);
						x.getRuntime().exec.call(x, "XMLHttpRequest", "abort", I), I = !0
					}
				},
				destroy : function() {
					x && ("function" === a.typeOf(x.destroy) && x.destroy(), x = null), this.unbindAll(), this.upload && (this.upload.unbindAll(), this.upload = null)
				}
			}), this.handleEventProps(p.concat([ "readystatechange" ])), this.upload.handleEventProps(p)
		}
		var o = {
			100 : "Continue",
			101 : "Switching Protocols",
			102 : "Processing",
			200 : "OK",
			201 : "Created",
			202 : "Accepted",
			203 : "Non-Authoritative Information",
			204 : "No Content",
			205 : "Reset Content",
			206 : "Partial Content",
			207 : "Multi-Status",
			226 : "IM Used",
			300 : "Multiple Choices",
			301 : "Moved Permanently",
			302 : "Found",
			303 : "See Other",
			304 : "Not Modified",
			305 : "Use Proxy",
			306 : "Reserved",
			307 : "Temporary Redirect",
			400 : "Bad Request",
			401 : "Unauthorized",
			402 : "Payment Required",
			403 : "Forbidden",
			404 : "Not Found",
			405 : "Method Not Allowed",
			406 : "Not Acceptable",
			407 : "Proxy Authentication Required",
			408 : "Request Timeout",
			409 : "Conflict",
			410 : "Gone",
			411 : "Length Required",
			412 : "Precondition Failed",
			413 : "Request Entity Too Large",
			414 : "Request-URI Too Long",
			415 : "Unsupported Media Type",
			416 : "Requested Range Not Satisfiable",
			417 : "Expectation Failed",
			422 : "Unprocessable Entity",
			423 : "Locked",
			424 : "Failed Dependency",
			426 : "Upgrade Required",
			500 : "Internal Server Error",
			501 : "Not Implemented",
			502 : "Bad Gateway",
			503 : "Service Unavailable",
			504 : "Gateway Timeout",
			505 : "HTTP Version Not Supported",
			506 : "Variant Also Negotiates",
			507 : "Insufficient Storage",
			510 : "Not Extended"
		};
		m.prototype = c.instance;
		var p = [ "loadstart", "progress", "abort", "error", "load", "timeout", "loadend" ];
		return n.UNSENT = 0, n.OPENED = 1, n.HEADERS_RECEIVED = 2, n.LOADING = 3, n.DONE = 4, n.prototype = c.instance, n
	}), d("moxie/runtime/Transporter", [ "moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget" ], function(a, b, c, d) {
		function e() {
			function d() {
				k = l = 0, j = this.result = null
			}
			function f(b, c) {
				var d = this;
				i = c, d.bind("TransportingProgress", function(b) {
					l = b.loaded, k > l && -1 === a.inArray(d.state, [ e.IDLE, e.DONE ]) && g.call(d)
				}, 999), d.bind("TransportingComplete", function() {
					l = k, d.state = e.DONE, j = null, d.result = i.exec.call(d, "Transporter", "getAsBlob", b || "")
				}, 999), d.state = e.BUSY, d.trigger("TransportingStarted"), g.call(d)
			}
			function g() {
				var a,
					c = this,
					d = k - l;
				m > d && (m = d), a = b.btoa(j.substr(l, m)), i.exec.call(c, "Transporter", "receive", a, k)
			}
			var h,
				i,
				j,
				k,
				l,
				m;
			c.call(this), a.extend(this, {
				uid : a.guid("uid_"),
				state : e.IDLE,
				result : null,
				transport : function(b, c, e) {
					var g = this;
					if (e = a.extend({
							chunk_size : 204798
						}, e), (h = e.chunk_size % 3) && (e.chunk_size += 3 - h), m = e.chunk_size, d.call(this), j = b, k = b.length, "string" === a.typeOf(e) || e.ruid) f.call(g, c, this.connectRuntime(e));else {
						var i = function(a, b) {
							g.unbind("RuntimeInit", i), f.call(g, c, b)
						};
						this.bind("RuntimeInit", i), this.connectRuntime(e)
					}
				},
				abort : function() {
					var a = this;
					a.state = e.IDLE, i && (i.exec.call(a, "Transporter", "clear"), a.trigger("TransportingAborted")), d.call(a)
				},
				destroy : function() {
					this.unbindAll(), i = null, this.disconnectRuntime(), d.call(this)
				}
			})
		}
		return e.IDLE = 0, e.BUSY = 1, e.DONE = 2, e.prototype = d.instance, e
	}), d("moxie/image/Image", [ "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/file/FileReaderSync", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/runtime/Transporter", "moxie/core/utils/Env", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/file/File", "moxie/core/utils/Encode" ], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
		function n() {
			function d(a) {
				a || (a = this.exec("Image", "getInfo")), this.size = a.size, this.width = a.width, this.height = a.height, this.type = a.type, this.meta = a.meta, "" === this.name && (this.name = a.name)
			}
			function j(b) {
				var d = a.typeOf(b);
				try {
					if (b instanceof n) {
						if (!b.size)
							throw new c.DOMException(c.DOMException.INVALID_STATE_ERR);
						p.apply(this, arguments)
					} else if (b instanceof k) {
						if (!~a.inArray(b.type, [ "image/jpeg", "image/png" ]))
							throw new c.ImageError(c.ImageError.WRONG_FORMAT);
						q.apply(this, arguments)
					} else if (-1 !== a.inArray(d, [ "blob", "file" ])) j.call(this, new l(null, b), arguments[1]);
					else if ("string" === d)
						"data:" === b.substr(0, 5) ? j.call(this, new k(null, {
							data : b
						}), arguments[1]) : r.apply(this, arguments);else {
						if ("node" !== d || "img" !== b.nodeName.toLowerCase())
							throw new c.DOMException(c.DOMException.TYPE_MISMATCH_ERR);
						j.call(this, b.src, arguments[1])
					}
				} catch (e) {
					this.trigger("error", e.code)
				}
			}
			function p(b, c) {
				var d = this.connectRuntime(b.ruid);
				this.ruid = d.uid, d.exec.call(this, "Image", "loadFromImage", b, "undefined" === a.typeOf(c) ? !0 : c)
			}
			function q(b, c) {
				function d(a) {
					e.ruid = a.uid, a.exec.call(e, "Image", "loadFromBlob", b)
				}
				var e = this;
				e.name = b.name || "", b.isDetached() ? (this.bind("RuntimeInit", function(a, b) {
					d(b)
				}), c && "string" == typeof c.required_caps && (c.required_caps = f.parseCaps(c.required_caps)), this.connectRuntime(a.extend({
					required_caps : {
						access_image_binary : !0,
						resize_image : !0
					}
				}, c))) : d(this.connectRuntime(b.ruid))
			}
			function r(a, b) {
				var c,
					d = this;
				c = new e, c.open("get", a), c.responseType = "blob", c.onprogress = function(a) {
					d.trigger(a)
				}, c.onload = function() {
					q.call(d, c.response, !0)
				}, c.onerror = function(a) {
					d.trigger(a)
				}, c.onloadend = function() {
					c.destroy()
				}, c.bind("RuntimeError", function(a, b) {
					d.trigger("RuntimeError", b)
				}), c.send(null, b)
			}
			g.call(this), a.extend(this, {
				uid : a.guid("uid_"),
				ruid : null,
				name : "",
				size : 0,
				width : 0,
				height : 0,
				type : "",
				meta : {},
				clone : function() {
					this.load.apply(this, arguments)
				},
				load : function() {
					j.apply(this, arguments)
				},
				downsize : function(b) {
					var d = {
						width : this.width,
						height : this.height,
						type : this.type || "image/jpeg",
						quality : 90,
						crop : !1,
						preserveHeaders : !0,
						resample : !1
					};
					b = "object" == typeof b ? a.extend(d, b) : a.extend(d, {
						width : arguments[0],
						height : arguments[1],
						crop : arguments[2],
						preserveHeaders : arguments[3]
					});try {
						if (!this.size)
							throw new c.DOMException(c.DOMException.INVALID_STATE_ERR);
						if (this.width > n.MAX_RESIZE_WIDTH || this.height > n.MAX_RESIZE_HEIGHT)
							throw new c.ImageError(c.ImageError.MAX_RESOLUTION_ERR);
						this.exec("Image", "downsize", b.width, b.height, b.crop, b.preserveHeaders)
					} catch (e) {
						this.trigger("error", e.code);
					}
				},
				crop : function(a, b, c) {
					this.downsize(a, b, !0, c)
				},
				getAsCanvas : function() {
					if (!i.can("create_canvas"))
						throw new c.RuntimeError(c.RuntimeError.NOT_SUPPORTED_ERR);
					var a = this.connectRuntime(this.ruid);
					return a.exec.call(this, "Image", "getAsCanvas")
				},
				getAsBlob : function(a, b) {
					if (!this.size)
						throw new c.DOMException(c.DOMException.INVALID_STATE_ERR);
					return this.exec("Image", "getAsBlob", a || "image/jpeg", b || 90)
				},
				getAsDataURL : function(a, b) {
					if (!this.size)
						throw new c.DOMException(c.DOMException.INVALID_STATE_ERR);
					return this.exec("Image", "getAsDataURL", a || "image/jpeg", b || 90)
				},
				getAsBinaryString : function(a, b) {
					var c = this.getAsDataURL(a, b);
					return m.atob(c.substring(c.indexOf("base64,") + 7))
				},
				embed : function(d, e) {
					function f(b, e) {
						var f = this;
						if (i.can("create_canvas")) {
							var k = f.getAsCanvas();
							if (k) return d.appendChild(k), k = null, f.destroy(), void j.trigger("embedded")
						}
						var l = f.getAsDataURL(b, e);
						if (!l)
							throw new c.ImageError(c.ImageError.WRONG_FORMAT);
						if (i.can("use_data_uri_of", l.length)) d.innerHTML = '<img src="' + l + '" width="' + f.width + '" height="' + f.height + '" />', f.destroy(), j.trigger("embedded");else {
							var n = new h;
							n.bind("TransportingComplete", function() {
								g = j.connectRuntime(this.result.ruid), j.bind("Embedded", function() {
									a.extend(g.getShimContainer().style, {
										top : "0px",
										left : "0px",
										width : f.width + "px",
										height : f.height + "px"
									}), g = null
								}, 999), g.exec.call(j, "ImageView", "display", this.result.uid, width, height), f.destroy()
							}), n.transport(m.atob(l.substring(l.indexOf("base64,") + 7)), b, {
								required_caps : {
									display_media : !0
								},
								runtime_order : "flash,silverlight",
								container : d
							})
						}
					}
					var g,
						j = this;
					e = a.extend({
						width : this.width,
						height : this.height,
						type : this.type || "image/jpeg",
						quality : 90
					}, e || {});try {
						if (!(d = b.get(d)))
							throw new c.DOMException(c.DOMException.INVALID_NODE_TYPE_ERR);
						if (!this.size)
							throw new c.DOMException(c.DOMException.INVALID_STATE_ERR);
						this.width > n.MAX_RESIZE_WIDTH || this.height > n.MAX_RESIZE_HEIGHT;var k = new n;
						return k.bind("Resize", function() {
								f.call(this, e.type, e.quality)
							}), k.bind("Load", function() {
								k.downsize(e)
							}), this.meta.thumb && this.meta.thumb.width >= e.width && this.meta.thumb.height >= e.height ? k.load(this.meta.thumb.data) : k.clone(this, !1), k
					} catch (l) {
						this.trigger("error", l.code)
					}
				},
				destroy : function() {
					this.ruid && (this.getRuntime().exec.call(this, "Image", "destroy"), this.disconnectRuntime()), this.unbindAll()
				}
			}), this.handleEventProps(o), this.bind("Load Resize", function() {
				d.call(this)
			}, 999)
		}
		var o = [ "progress", "load", "error", "resize", "embedded" ];
		return n.MAX_RESIZE_WIDTH = 8192, n.MAX_RESIZE_HEIGHT = 8192, n.prototype = j.instance, n
	}), d("moxie/runtime/html5/Runtime", [ "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env" ], function(a, b, c, d) {
		function e(b) {
			var e = this,
				h = c.capTest,
				i = c.capTrue,
				j = a.extend({
					access_binary : h(window.FileReader || window.File && window.File.getAsDataURL),
					access_image_binary : function() {
						return e.can("access_binary") && !!g.Image
					},
					display_media : h(d.can("create_canvas") || d.can("use_data_uri_over32kb")),
					do_cors : h(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
					drag_and_drop : h(function() {
						var a = document.createElement("div");
						return ("draggable" in a || "ondragstart" in a && "ondrop" in a) && ("IE" !== d.browser || d.verComp(d.version, 9, ">"))
					}()),
					filter_by_extension : h(function() {
						return "Chrome" === d.browser && d.verComp(d.version, 28, ">=") || "IE" === d.browser && d.verComp(d.version, 10, ">=") || "Safari" === d.browser && d.verComp(d.version, 7, ">=")
					}()),
					return_response_headers : i,
					return_response_type : function(a) {
						return "json" === a && window.JSON ? !0 : d.can("return_response_type", a)
					},
					return_status_code : i,
					report_upload_progress : h(window.XMLHttpRequest && (new XMLHttpRequest).upload),
					resize_image : function() {
						return e.can("access_binary") && d.can("create_canvas")
					},
					select_file : function() {
						return d.can("use_fileinput") && window.File
					},
					select_folder : function() {
						return e.can("select_file") && "Chrome" === d.browser && d.verComp(d.version, 21, ">=")
					},
					select_multiple : function() {
						return e.can("select_file") && !("Safari" === d.browser && "Windows" === d.os) && !("iOS" === d.os && d.verComp(d.osVersion, "7.0.0", ">") && d.verComp(d.osVersion, "8.0.0", "<"))
					},
					send_binary_string : h(window.XMLHttpRequest && ((new XMLHttpRequest).sendAsBinary || window.Uint8Array && window.ArrayBuffer)),
					send_custom_headers : h(window.XMLHttpRequest),
					send_multipart : function() {
						return !!(window.XMLHttpRequest && (new XMLHttpRequest).upload && window.FormData) || e.can("send_binary_string")
					},
					slice_blob : h(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
					stream_upload : function() {
						return e.can("slice_blob") && e.can("send_multipart")
					},
					summon_file_dialog : function() {
						return e.can("select_file") && ("Firefox" === d.browser && d.verComp(d.version, 4, ">=") || "Opera" === d.browser && d.verComp(d.version, 12, ">=") || "IE" === d.browser && d.verComp(d.version, 10, ">=") || !!~a.inArray(d.browser, [ "Chrome", "Safari" ]))
					},
					upload_filesize : i
				}, arguments[2]);
			c.call(this, b, arguments[1] || f, j), a.extend(this, {
				init : function() {
					this.trigger("Init")
				},
				destroy : function(a) {
					return function() {
						a.call(e), a = e = null
					}
				}(this.destroy)
			}), a.extend(this.getShim(), g)
		}
		var f = "html5",
			g = {};
		return c.addConstructor(f, e), g
	}), d("moxie/core/utils/Events", [ "moxie/core/utils/Basic" ], function(a) {
		function b() {
			this.returnValue = !1
		}
		function c() {
			this.cancelBubble = !0
		}
		var d = {},
			e = "moxie_" + a.guid(),
			f = function(f, g, h, i) {
				var j,
					k;
				g = g.toLowerCase(), f.addEventListener ? (j = h, f.addEventListener(g, j, !1)) : f.attachEvent && (j = function() {
					var a = window.event;
					a.target || (a.target = a.srcElement), a.preventDefault = b, a.stopPropagation = c, h(a)
				}, f.attachEvent("on" + g, j)), f[e] || (f[e] = a.guid()), d.hasOwnProperty(f[e]) || (d[f[e]] = {}), k = d[f[e]], k.hasOwnProperty(g) || (k[g] = []), k[g].push({
					func : j,
					orig : h,
					key : i
				})
			},
			g = function(b, c, f) {
				var g,
					h;
				if (c = c.toLowerCase(), b[e] && d[b[e]] && d[b[e]][c]) {
					g = d[b[e]][c];
					for (var i = g.length - 1; i >= 0 && (g[i].orig !== f && g[i].key !== f || (b.removeEventListener ? b.removeEventListener(c, g[i].func, !1) : b.detachEvent && b.detachEvent("on" + c, g[i].func), g[i].orig = null, g[i].func = null, g.splice(i, 1), f === h)); i--)
						;
					if (g.length ||
						delete d[b[e]][c]
						, a.isEmptyObj(d[b[e]])) {
						delete d[b[e]];
						try {
							delete b[e]
						} catch (j) {
							b[e] = h
						}
					}
				}
			},
			h = function(b, c) {
				b && b[e] && a.each(d[b[e]], function(a, d) {
					g(b, d, c)
				})
			};
		return {
			addEvent : f,
			removeEvent : g,
			removeAllEvents : h
		}
	}), d("moxie/runtime/html5/file/FileInput", [ "moxie/runtime/html5/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env" ], function(a, b, c, d, e, f, g) {
		function h() {
			var a;
			c.extend(this, {
				init : function(h) {
					var i,
						j,
						k,
						l,
						m,
						n,
						o = this,
						p = o.getRuntime();
					a = h, k = a.accept.mimes || f.extList2mimes(a.accept, p.can("filter_by_extension")), j = p.getShimContainer(), j.innerHTML = '<input id="' + p.uid + '" type="file" style="font-size:999px;opacity:0;"' + (a.multiple && p.can("select_multiple") ? "multiple" : "") + (a.directory && p.can("select_folder") ? "webkitdirectory directory" : "") + (k ? ' accept="' + k.join(",") + '"' : "") + " />", i = d.get(p.uid), c.extend(i.style, {
						position : "absolute",
						top : 0,
						left : 0,
						width : "100%",
						height : "100%"
					}), l = d.get(a.browse_button), p.can("summon_file_dialog") && ("static" === d.getStyle(l, "position") && (l.style.position = "relative"), m = parseInt(d.getStyle(l, "z-index"), 10) || 1, l.style.zIndex = m, j.style.zIndex = m - 1, e.addEvent(l, "click", function(a) {
						var b = d.get(p.uid);
						b && !b.disabled && b.click(), a.preventDefault()
					}, o.uid)), n = p.can("summon_file_dialog") ? l : j, e.addEvent(n, "mouseover", function() {
						o.trigger("mouseenter")
					}, o.uid), e.addEvent(n, "mouseout", function() {
						o.trigger("mouseleave")
					}, o.uid), e.addEvent(n, "mousedown", function() {
						o.trigger("mousedown")
					}, o.uid), e.addEvent(d.get(a.container), "mouseup", function() {
						o.trigger("mouseup")
					}, o.uid), i.onchange = function q(d) {
						if (o.files = [], c.each(this.files, function(c) {
								var d = "";
								return a.directory && "." == c.name ? !0 : (c.webkitRelativePath && (d = "/" + c.webkitRelativePath.replace(/^\//, "")), c = new b(p.uid, c), c.relativePath = d, void o.files.push(c))
							}), "IE" !== g.browser && "IEMobile" !== g.browser)
							this.value = "";else {
							var e = this.cloneNode(!0);
							this.parentNode.replaceChild(e, this), e.onchange = q
						}
						o.files.length && o.trigger("change")
					}, o.trigger({
						type : "ready",
						async : !0
					}), j = null
				},
				disable : function(a) {
					var b,
						c = this.getRuntime();
					(b = d.get(c.uid)) && (b.disabled = !!a)
				},
				destroy : function() {
					var b = this.getRuntime(),
						c = b.getShim(),
						f = b.getShimContainer();
					e.removeAllEvents(f, this.uid), e.removeAllEvents(a && d.get(a.container), this.uid), e.removeAllEvents(a && d.get(a.browse_button), this.uid), f && (f.innerHTML = ""), c.removeInstance(this.uid), a = f = c = null
				}
			})
		}
		return a.FileInput = h
	}), d("moxie/runtime/html5/file/Blob", [ "moxie/runtime/html5/Runtime", "moxie/file/Blob" ], function(a, b) {
		function c() {
			function a(a, b, c) {
				var d;
				if (!window.File.prototype.slice) return (d = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) ? d.call(a, b, c) : null;
				try {
					return a.slice(), a.slice(b, c)
				} catch (e) {
					return a.slice(b, c - b)
				}
			}
			this.slice = function() {
				return new b(this.getRuntime().uid, a.apply(this, arguments))
			}
		}
		return a.Blob = c
	}), d("moxie/runtime/html5/file/FileDrop", [ "moxie/runtime/html5/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime" ], function(a, b, c, d, e, f) {
		function g() {
			function a(a) {
				if (!a.dataTransfer || !a.dataTransfer.types) return !1;
				var b = c.toArray(a.dataTransfer.types || []);
				return -1 !== c.inArray("Files", b) || -1 !== c.inArray("public.file-url", b) || -1 !== c.inArray("application/x-moz-file", b)
			}
			function g(a, c) {
				if (i(a)) {
					var d = new b(o, a);
					d.relativePath = c || "", p.push(d)
				}
			}
			function h(a) {
				for (var b = [], d = 0; d < a.length; d++) [].push.apply(b, a[d].extensions.split(/\s*,\s*/));
				return -1 === c.inArray("*", b) ? b : []
			}
			function i(a) {
				if (!q.length) return !0;
				var b = f.getFileExtension(a.name);
				return !b || -1 !== c.inArray(b, q)
			}
			function j(a, b) {
				var d = [];
				c.each(a, function(a) {
					var b = a.webkitGetAsEntry();
					b && (b.isFile ? g(a.getAsFile(), b.fullPath) : d.push(b))
				}), d.length ? k(d, b) : b()
			}
			function k(a, b) {
				var d = [];
				c.each(a, function(a) {
					d.push(function(b) {
						l(a, b)
					})
				}), c.inSeries(d, function() {
					b()
				})
			}
			function l(a, b) {
				a.isFile ? a.file(function(c) {
					g(c, a.fullPath), b()
				}, function() {
					b()
				}) : a.isDirectory ? m(a, b) : b()
			}
			function m(a, b) {
				function c(a) {
					e.readEntries(function(b) {
						b.length ? ([].push.apply(d, b), c(a)) : a()
					}, a)
				}
				var d = [],
					e = a.createReader();
				c(function() {
					k(d, b)
				})
			}
			var n,
				o,
				p = [],
				q = [];
			c.extend(this, {
				init : function(b) {
					var d,
						f = this;
					n = b, o = f.ruid, q = h(n.accept), d = n.container, e.addEvent(d, "dragover", function(b) {
						a(b) && (b.preventDefault(), b.dataTransfer.dropEffect = "copy")
					}, f.uid), e.addEvent(d, "drop", function(b) {
						a(b) && (b.preventDefault(), p = [], b.dataTransfer.items && b.dataTransfer.items[0].webkitGetAsEntry ? j(b.dataTransfer.items, function() {
							f.files = p, f.trigger("drop")
						}) : (c.each(b.dataTransfer.files, function(a) {
							g(a)
						}), f.files = p, f.trigger("drop")))
					}, f.uid), e.addEvent(d, "dragenter", function(a) {
						f.trigger("dragenter")
					}, f.uid), e.addEvent(d, "dragleave", function(a) {
						f.trigger("dragleave")
					}, f.uid)
				},
				destroy : function() {
					e.removeAllEvents(n && d.get(n.container), this.uid), o = p = q = n = null
				}
			})
		}
		return a.FileDrop = g
	}), d("moxie/runtime/html5/file/FileReader", [ "moxie/runtime/html5/Runtime", "moxie/core/utils/Encode", "moxie/core/utils/Basic" ], function(a, b, c) {
		function d() {
			function a(a) {
				return b.atob(a.substring(a.indexOf("base64,") + 7))
			}
			var d,
				e = !1;
			c.extend(this, {
				read : function(b, f) {
					var g = this;
					g.result = "", d = new window.FileReader, d.addEventListener("progress", function(a) {
						g.trigger(a)
					}), d.addEventListener("load", function(b) {
						g.result = e ? a(d.result) : d.result, g.trigger(b)
					}), d.addEventListener("error", function(a) {
						g.trigger(a, d.error)
					}), d.addEventListener("loadend", function(a) {
						d = null, g.trigger(a)
					}), "function" === c.typeOf(d[b]) ? (e = !1, d[b](f.getSource())) : "readAsBinaryString" === b && (e = !0, d.readAsDataURL(f.getSource()))
				},
				abort : function() {
					d && d.abort()
				},
				destroy : function() {
					d = null
				}
			})
		}
		return a.FileReader = d
	}), d("moxie/runtime/html5/xhr/XMLHttpRequest", [ "moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/core/utils/Url", "moxie/file/File", "moxie/file/Blob", "moxie/xhr/FormData", "moxie/core/Exceptions", "moxie/core/utils/Env" ], function(a, b, c, d, e, f, g, h, i) {
		function j() {
			function a(a, b) {
				var c,
					d,
					e = this;
				c = b.getBlob().getSource(), d = new window.FileReader, d.onload = function() {
					b.append(b.getBlobName(), new f(null, {
						type : c.type,
						data : d.result
					})), o.send.call(e, a, b)
				}, d.readAsBinaryString(c)
			}
			function j() {
				return !window.XMLHttpRequest || "IE" === i.browser && i.verComp(i.version, 8, "<") ? function() {
					for (var a = [ "Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP" ], b = 0; b < a.length; b++) try {
							return new ActiveXObject(a[b])
						} catch (c) {}
				}() : new window.XMLHttpRequest
			}
			function k(a) {
				var b = a.responseXML,
					c = a.responseText;
				return "IE" === i.browser && c && b && !b.documentElement && /[^\/]+\/[^\+]+\+xml/.test(a.getResponseHeader("Content-Type")) && (b = new window.ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.validateOnParse = !1, b.loadXML(c)), b && ("IE" === i.browser && 0 !== b.parseError || !b.documentElement || "parsererror" === b.documentElement.tagName) ? null : b
			}
			function l(a) {
				var b = "----moxieboundary" + (new Date).getTime(),
					c = "--",
					d = "\r\n",
					e = "",
					g = this.getRuntime();
				if (!g.can("send_binary_string"))
					throw new h.RuntimeError(h.RuntimeError.NOT_SUPPORTED_ERR);
				return m.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + b), a.each(function(a, g) {
						e += a instanceof f ? c + b + d + 'Content-Disposition: form-data; name="' + g + '"; filename="' + unescape(encodeURIComponent(a.name || "blob")) + '"' + d + "Content-Type: " + (a.type || "application/octet-stream") + d + d + a.getSource() + d : c + b + d + 'Content-Disposition: form-data; name="' + g + '"' + d + d + unescape(encodeURIComponent(a)) + d
					}), e += c + b + c + d
			}
			var m,
				n,
				o = this;
			b.extend(this, {
				send : function(c, e) {
					var h = this,
						k = "Mozilla" === i.browser && i.verComp(i.version, 4, ">=") && i.verComp(i.version, 7, "<"),
						o = "Android Browser" === i.browser,
						p = !1;
					if (n = c.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase(), m = j(), m.open(c.method, c.url, c.async, c.user, c.password), e instanceof f) e.isDetached() && (p = !0), e = e.getSource();
					else if (e instanceof g) {
						if (e.hasBlob())
							if (e.getBlob().isDetached()) e = l.call(h, e), p = !0;
							else if ((k || o) && "blob" === b.typeOf(e.getBlob().getSource()) && window.FileReader) return void a.call(h, c, e);
						if (e instanceof g) {
							var q = new window.FormData;
							e.each(function(a, b) {
								a instanceof f ? q.append(b, a.getSource()) : q.append(b, a)
							}), e = q
						}
					}
					m.upload ? (c.withCredentials && (m.withCredentials = !0), m.addEventListener("load", function(a) {
						h.trigger(a)
					}), m.addEventListener("error", function(a) {
						h.trigger(a)
					}), m.addEventListener("progress", function(a) {
						h.trigger(a)
					}), m.upload.addEventListener("progress", function(a) {
						h.trigger({
							type : "UploadProgress",
							loaded : a.loaded,
							total : a.total
						})
					})) : m.onreadystatechange = function() {
						switch (m.readyState) {
						case 1:
							break;case 2:
							break;case 3:
							var a,
								b;
							try {
								d.hasSameOrigin(c.url) && (a = m.getResponseHeader("Content-Length") || 0), m.responseText && (b = m.responseText.length)
							} catch (e) {
								a = b = 0
							} h.trigger({
								type : "progress",
								lengthComputable : !!a,
								total : parseInt(a, 10),
								loaded : b
							});
							break;case 4:
							m.onreadystatechange = function() {}, 0 === m.status ? h.trigger("error") : h.trigger("load")
						}
					}, b.isEmptyObj(c.headers) || b.each(c.headers, function(a, b) {
						m.setRequestHeader(b, a)
					}), "" !== c.responseType && "responseType" in m && ("json" !== c.responseType || i.can("return_response_type", "json") ? m.responseType = c.responseType : m.responseType = "text"), p ? m.sendAsBinary ? m.sendAsBinary(e) : !function() {
						for (var a = new Uint8Array(e.length), b = 0; b < e.length; b++) a[b] = 255 & e.charCodeAt(b);
						m.send(a.buffer)
					}() : m.send(e), h.trigger("loadstart")
				},
				getStatus : function() {
					try {
						if (m) return m.status
					} catch (a) {} return 0
				},
				getResponse : function(a) {
					var b = this.getRuntime();
					try {
						switch (a) {
						case "blob":
							var d = new e(b.uid, m.response),
								f = m.getResponseHeader("Content-Disposition");
							if (f) {
								var g = f.match(/filename=([\'\"'])([^\1]+)\1/);
								g && (n = g[2])
							}
							return d.name = n, d.type || (d.type = c.getFileMime(n)), d;case "json":
							return i.can("return_response_type", "json") ? m.response : 200 === m.status && window.JSON ? JSON.parse(m.responseText) : null;case "document":
							return k(m);default:
							return "" !== m.responseText ? m.responseText : null
						}
					} catch (h) {
						return null
					}
				},
				getAllResponseHeaders : function() {
					try {
						return m.getAllResponseHeaders()
					} catch (a) {} return ""
				},
				abort : function() {
					m && m.abort()
				},
				destroy : function() {
					o = n = null
				}
			})
		}
		return a.XMLHttpRequest = j
	}), d("moxie/runtime/html5/utils/BinaryReader", [ "moxie/core/utils/Basic" ], function(a) {
		function b(a) {
			a instanceof ArrayBuffer ? c.apply(this, arguments) : d.apply(this, arguments)
		}
		function c(b) {
			var c = new DataView(b);
			a.extend(this, {
				readByteAt : function(a) {
					return c.getUint8(a)
				},
				writeByteAt : function(a, b) {
					c.setUint8(a, b)
				},
				SEGMENT : function(a, d, e) {
					switch (arguments.length) {
					case 2:
						return b.slice(a, a + d);case 1:
						return b.slice(a);case 3:
						if (null === e && (e = new ArrayBuffer), e instanceof ArrayBuffer) {
							var f = new Uint8Array(this.length() - d + e.byteLength);
							a > 0 && f.set(new Uint8Array(b.slice(0, a)), 0), f.set(new Uint8Array(e), a), f.set(new Uint8Array(b.slice(a + d)), a + e.byteLength), this.clear(), b = f.buffer, c = new DataView(b);
							break
						}
					default:
						return b
					}
				},
				length : function() {
					return b ? b.byteLength : 0
				},
				clear : function() {
					c = b = null
				}
			})
		}
		function d(b) {
			function c(a, c, d) {
				d = 3 === arguments.length ? d : b.length - c - 1, b = b.substr(0, c) + a + b.substr(d + c)
			}
			a.extend(this, {
				readByteAt : function(a) {
					return b.charCodeAt(a)
				},
				writeByteAt : function(a, b) {
					c(String.fromCharCode(b), a, 1)
				},
				SEGMENT : function(a, d, e) {
					switch (arguments.length) {
					case 1:
						return b.substr(a);case 2:
						return b.substr(a, d);case 3:
						c(null !== e ? e : "", a, d);
						break;default:
						return b
					}
				},
				length : function() {
					return b ? b.length : 0
				},
				clear : function() {
					b = null
				}
			})
		}
		return a.extend(b.prototype, {
				littleEndian : !1,
				read : function(a, b) {
					var c,
						d,
						e;
					if (a + b > this.length())
						throw new Error("You are trying to read outside the source boundaries.");
					for (d = this.littleEndian ? 0 : -8 * (b - 1), e = 0, c = 0; b > e; e++) c |= this.readByteAt(a + e) << Math.abs(d + 8 * e);
					return c
				},
				write : function(a, b, c) {
					var d,
						e;
					if (a > this.length())
						throw new Error("You are trying to write outside the source boundaries.");
					for (d = this.littleEndian ? 0 : -8 * (c - 1), e = 0; c > e; e++) this.writeByteAt(a + e, b >> Math.abs(d + 8 * e) & 255)
				},
				BYTE : function(a) {
					return this.read(a, 1)
				},
				SHORT : function(a) {
					return this.read(a, 2)
				},
				LONG : function(a) {
					return this.read(a, 4)
				},
				SLONG : function(a) {
					var b = this.read(a, 4);
					return b > 2147483647 ? b - 4294967296 : b
				},
				CHAR : function(a) {
					return String.fromCharCode(this.read(a, 1))
				},
				STRING : function(a, b) {
					return this.asArray("CHAR", a, b).join("")
				},
				asArray : function(a, b, c) {
					for (var d = [], e = 0; c > e; e++) d[e] = this[a](b + e);
					return d
				}
			}), b
	}), d("moxie/runtime/html5/image/JPEGHeaders", [ "moxie/runtime/html5/utils/BinaryReader", "moxie/core/Exceptions" ], function(a, b) {
		return function c(d) {
			var e,
				f,
				g,
				h = [],
				i = 0;
			if (e = new a(d), 65496 !== e.SHORT(0))
				throw e.clear(), new b.ImageError(b.ImageError.WRONG_FORMAT);
			for (f = 2; f <= e.length();)
				if (g = e.SHORT(f), g >= 65488 && 65495 >= g)
					f += 2;else {
					if (65498 === g || 65497 === g) break;
					i = e.SHORT(f + 2) + 2, g >= 65505 && 65519 >= g && h.push({
						hex : g,
						name : "APP" + (15 & g),
						start : f,
						length : i,
						segment : e.SEGMENT(f, i)
					}), f += i
			}
			return e.clear(), {
					headers : h,
					restore : function(b) {
						var c,
							d,
							e;
						for (e = new a(b), f = 65504 == e.SHORT(2) ? 4 + e.SHORT(4) : 2, d = 0, c = h.length; c > d; d++) e.SEGMENT(f, 0, h[d].segment), f += h[d].length;
						return b = e.SEGMENT(), e.clear(), b
					},
					strip : function(b) {
						var d,
							e,
							f,
							g;
						for (f = new c(b), e = f.headers, f.purge(), d = new a(b), g = e.length; g--;) d.SEGMENT(e[g].start, e[g].length, "");
						return b = d.SEGMENT(), d.clear(), b
					},
					get : function(a) {
						for (var b = [], c = 0, d = h.length; d > c; c++) h[c].name === a.toUpperCase() && b.push(h[c].segment);
						return b
					},
					set : function(a, b) {
						var c,
							d,
							e,
							f = [];
						for ("string" == typeof b ? f.push(b) : f = b, c = d = 0, e = h.length; e > c && (h[c].name === a.toUpperCase() && (h[c].segment = f[d], h[c].length = f[d].length, d++), !(d >= f.length)); c++)
							;
					},
					purge : function() {
						this.headers = h = []
					}
			}
		}
	}), d("moxie/runtime/html5/image/ExifParser", [ "moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader", "moxie/core/Exceptions" ], function(a, c, d) {
		function e(f) {
			function g(c, e) {
				var f,
					g,
					h,
					i,
					j,
					m,
					n,
					o,
					p = this,
					q = [],
					r = {},
					s = {
						1 : "BYTE",
						7 : "UNDEFINED",
						2 : "ASCII",
						3 : "SHORT",
						4 : "LONG",
						5 : "RATIONAL",
						9 : "SLONG",
						10 : "SRATIONAL"
					},
					t = {
						BYTE : 1,
						UNDEFINED : 1,
						ASCII : 1,
						SHORT : 2,
						LONG : 4,
						RATIONAL : 8,
						SLONG : 4,
						SRATIONAL : 8
					};
				for (f = p.SHORT(c), g = 0; f > g; g++)
					if (q = [], n = c + 2 + 12 * g, h = e[p.SHORT(n)], h !== b) {
						if (i = s[p.SHORT(n += 2)], j = p.LONG(n += 2), m = t[i], !m)
							throw new d.ImageError(d.ImageError.INVALID_META_ERR);
						if (n += 4, m * j > 4 && (n = p.LONG(n) + l.tiffHeader), n + m * j >= this.length())
							throw new d.ImageError(d.ImageError.INVALID_META_ERR);
						"ASCII" !== i ? (q = p.asArray(i, n, j), o = 1 == j ? q[0] : q, k.hasOwnProperty(h) && "object" != typeof o ? r[h] = k[h][o] : r[h] = o) : r[h] = a.trim(p.STRING(n, j).replace(/\0$/, ""))
				}
				return r
			}
			function h(a, b, c) {
				var d,
					e,
					f,
					g = 0;
				if ("string" == typeof b) {
					var h = j[a.toLowerCase()];
					for (var i in h)
						if (h[i] === b) {
							b = i;break
					}
				}
				d = l[a.toLowerCase() + "IFD"], e = this.SHORT(d);
				for (var k = 0; e > k; k++)
					if (f = d + 12 * k + 2, this.SHORT(f) == b) {
						g = f + 8;break
				}
				if (!g) return !1;
				try {
					this.write(g, c, 4)
				} catch (m) {
					return !1
				} return !0
			}
			var i,
				j,
				k,
				l,
				m,
				n;
			if (c.call(this, f), j = {
					tiff : {
						274 : "Orientation",
						270 : "ImageDescription",
						271 : "Make",
						272 : "Model",
						305 : "Software",
						34665 : "ExifIFDPointer",
						34853 : "GPSInfoIFDPointer"
					},
					exif : {
						36864 : "ExifVersion",
						40961 : "ColorSpace",
						40962 : "PixelXDimension",
						40963 : "PixelYDimension",
						36867 : "DateTimeOriginal",
						33434 : "ExposureTime",
						33437 : "FNumber",
						34855 : "ISOSpeedRatings",
						37377 : "ShutterSpeedValue",
						37378 : "ApertureValue",
						37383 : "MeteringMode",
						37384 : "LightSource",
						37385 : "Flash",
						37386 : "FocalLength",
						41986 : "ExposureMode",
						41987 : "WhiteBalance",
						41990 : "SceneCaptureType",
						41988 : "DigitalZoomRatio",
						41992 : "Contrast",
						41993 : "Saturation",
						41994 : "Sharpness"
					},
					gps : {
						0 : "GPSVersionID",
						1 : "GPSLatitudeRef",
						2 : "GPSLatitude",
						3 : "GPSLongitudeRef",
						4 : "GPSLongitude"
					},
					thumb : {
						513 : "JPEGInterchangeFormat",
						514 : "JPEGInterchangeFormatLength"
					}
				}, k = {
					ColorSpace : {
						1 : "sRGB",
						0 : "Uncalibrated"
					},
					MeteringMode : {
						0 : "Unknown",
						1 : "Average",
						2 : "CenterWeightedAverage",
						3 : "Spot",
						4 : "MultiSpot",
						5 : "Pattern",
						6 : "Partial",
						255 : "Other"
					},
					LightSource : {
						1 : "Daylight",
						2 : "Fliorescent",
						3 : "Tungsten",
						4 : "Flash",
						9 : "Fine weather",
						10 : "Cloudy weather",
						11 : "Shade",
						12 : "Daylight fluorescent (D 5700 - 7100K)",
						13 : "Day white fluorescent (N 4600 -5400K)",
						14 : "Cool white fluorescent (W 3900 - 4500K)",
						15 : "White fluorescent (WW 3200 - 3700K)",
						17 : "Standard light A",
						18 : "Standard light B",
						19 : "Standard light C",
						20 : "D55",
						21 : "D65",
						22 : "D75",
						23 : "D50",
						24 : "ISO studio tungsten",
						255 : "Other"
					},
					Flash : {
						0 : "Flash did not fire",
						1 : "Flash fired",
						5 : "Strobe return light not detected",
						7 : "Strobe return light detected",
						9 : "Flash fired, compulsory flash mode",
						13 : "Flash fired, compulsory flash mode, return light not detected",
						15 : "Flash fired, compulsory flash mode, return light detected",
						16 : "Flash did not fire, compulsory flash mode",
						24 : "Flash did not fire, auto mode",
						25 : "Flash fired, auto mode",
						29 : "Flash fired, auto mode, return light not detected",
						31 : "Flash fired, auto mode, return light detected",
						32 : "No flash function",
						65 : "Flash fired, red-eye reduction mode",
						69 : "Flash fired, red-eye reduction mode, return light not detected",
						71 : "Flash fired, red-eye reduction mode, return light detected",
						73 : "Flash fired, compulsory flash mode, red-eye reduction mode",
						77 : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
						79 : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
						89 : "Flash fired, auto mode, red-eye reduction mode",
						93 : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
						95 : "Flash fired, auto mode, return light detected, red-eye reduction mode"
					},
					ExposureMode : {
						0 : "Auto exposure",
						1 : "Manual exposure",
						2 : "Auto bracket"
					},
					WhiteBalance : {
						0 : "Auto white balance",
						1 : "Manual white balance"
					},
					SceneCaptureType : {
						0 : "Standard",
						1 : "Landscape",
						2 : "Portrait",
						3 : "Night scene"
					},
					Contrast : {
						0 : "Normal",
						1 : "Soft",
						2 : "Hard"
					},
					Saturation : {
						0 : "Normal",
						1 : "Low saturation",
						2 : "High saturation"
					},
					Sharpness : {
						0 : "Normal",
						1 : "Soft",
						2 : "Hard"
					},
					GPSLatitudeRef : {
						N : "North latitude",
						S : "South latitude"
					},
					GPSLongitudeRef : {
						E : "East longitude",
						W : "West longitude"
					}
				}, l = {
					tiffHeader : 10
				}, m = l.tiffHeader, i = {
					clear : this.clear
				}, a.extend(this, {
					read : function() {
						try {
							return e.prototype.read.apply(this, arguments)
						} catch (a) {
							throw new d.ImageError(d.ImageError.INVALID_META_ERR)
						}
					},
					write : function() {
						try {
							return e.prototype.write.apply(this, arguments)
						} catch (a) {
							throw new d.ImageError(d.ImageError.INVALID_META_ERR)
						}
					},
					UNDEFINED : function() {
						return this.BYTE.apply(this, arguments)
					},
					RATIONAL : function(a) {
						return this.LONG(a) / this.LONG(a + 4)
					},
					SRATIONAL : function(a) {
						return this.SLONG(a) / this.SLONG(a + 4)
					},
					ASCII : function(a) {
						return this.CHAR(a)
					},
					TIFF : function() {
						return n || null
					},
					EXIF : function() {
						var b = null;
						if (l.exifIFD) {
							try {
								b = g.call(this, l.exifIFD, j.exif)
							} catch (c) {
								return null
							}
							if (b.ExifVersion && "array" === a.typeOf(b.ExifVersion)) {
								for (var d = 0, e = ""; d < b.ExifVersion.length; d++) e += String.fromCharCode(b.ExifVersion[d]);
								b.ExifVersion = e
							}
						}
						return b
					},
					GPS : function() {
						var b = null;
						if (l.gpsIFD) {
							try {
								b = g.call(this, l.gpsIFD, j.gps)
							} catch (c) {
								return null
							} b.GPSVersionID && "array" === a.typeOf(b.GPSVersionID) && (b.GPSVersionID = b.GPSVersionID.join("."))
						}
						return b
					},
					thumb : function() {
						if (l.IFD1) try {
								var a = g.call(this, l.IFD1, j.thumb);
								if ("JPEGInterchangeFormat" in a) return this.SEGMENT(l.tiffHeader + a.JPEGInterchangeFormat, a.JPEGInterchangeFormatLength)
							} catch (b) {} return null
					},
					setExif : function(a, b) {
						return "PixelXDimension" !== a && "PixelYDimension" !== a ? !1 : h.call(this, "exif", a, b)
					},
					clear : function() {
						i.clear(), f = j = k = n = l = i = null
					}
				}), 65505 !== this.SHORT(0) || "EXIF\x00" !== this.STRING(4, 5).toUpperCase())
				throw new d.ImageError(d.ImageError.INVALID_META_ERR);
			if (this.littleEndian = 18761 == this.SHORT(m), 42 !== this.SHORT(m += 2))
				throw new d.ImageError(d.ImageError.INVALID_META_ERR);
			l.IFD0 = l.tiffHeader + this.LONG(m += 2), n = g.call(this, l.IFD0, j.tiff), "ExifIFDPointer" in n && (l.exifIFD = l.tiffHeader + n.ExifIFDPointer,
			delete n.ExifIFDPointer
			), "GPSInfoIFDPointer" in n && (l.gpsIFD = l.tiffHeader + n.GPSInfoIFDPointer,
			delete n.GPSInfoIFDPointer
			), a.isEmptyObj(n) && (n = null);var o = this.LONG(l.IFD0 + 12 * this.SHORT(l.IFD0) + 2);
			o && (l.IFD1 = l.tiffHeader + o)
		}
		return e.prototype = c.prototype, e
	}), d("moxie/runtime/html5/image/JPEG", [ "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEGHeaders", "moxie/runtime/html5/utils/BinaryReader", "moxie/runtime/html5/image/ExifParser" ], function(a, b, c, d, e) {
		function f(f) {
			function g(a) {
				var b,
					c,
					d = 0;
				for (a || (a = j); d <= a.length();) {
					if (b = a.SHORT(d += 2), b >= 65472 && 65475 >= b) return d += 5, {
								height : a.SHORT(d),
								width : a.SHORT(d += 2)
							};
					c = a.SHORT(d += 2), d += c - 2
				}
				return null
			}
			function h() {
				var a,
					b,
					c = l.thumb();
				return c && (a = new d(c), b = g(a), a.clear(), b) ? (b.data = c, b) : null
			}
			function i() {
				l && k && j && (l.clear(), k.purge(), j.clear(), m = k = l = j = null)
			}
			var j,
				k,
				l,
				m;
			if (j = new d(f), 65496 !== j.SHORT(0))
				throw new b.ImageError(b.ImageError.WRONG_FORMAT);
			k = new c(f);try {
				l = new e(k.get("app1")[0])
			} catch (n) {} m = g.call(this), a.extend(this, {
				type : "image/jpeg",
				size : j.length(),
				width : m && m.width || 0,
				height : m && m.height || 0,
				setExif : function(b, c) {
					return l ? ("object" === a.typeOf(b) ? a.each(b, function(a, b) {
						l.setExif(b, a)
					}) : l.setExif(b, c), void k.set("app1", l.SEGMENT())) : !1
				},
				writeHeaders : function() {
					return arguments.length ? k.restore(arguments[0]) : k.restore(f)
				},
				stripHeaders : function(a) {
					return k.strip(a)
				},
				purge : function() {
					i.call(this)
				}
			}), l && (this.meta = {
				tiff : l.TIFF(),
				exif : l.EXIF(),
				gps : l.GPS(),
				thumb : h()
			})
		}
		return f
	}), d("moxie/runtime/html5/image/PNG", [ "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader" ], function(a, b, c) {
		function d(d) {
			function e() {
				var a,
					b;
				return a = g.call(this, 8), "IHDR" == a.type ? (b = a.start, {
						width : h.LONG(b),
						height : h.LONG(b += 4)
					}) : null
			}
			function f() {
				h && (h.clear(), d = k = i = j = h = null)
			}
			function g(a) {
				var b,
					c,
					d,
					e;
				return b = h.LONG(a), c = h.STRING(a += 4, 4), d = a += 4, e = h.LONG(a + b), {
						length : b,
						type : c,
						start : d,
						CRC : e
				}
			}
			var h,
				i,
				j,
				k;
			h = new c(d), function() {
				var b = 0,
					c = 0,
					d = [ 35152, 20039, 3338, 6666 ];
				for (c = 0; c < d.length; c++, b += 2)
					if (d[c] != h.SHORT(b))
						throw new a.ImageError(a.ImageError.WRONG_FORMAT)
			}(), k = e.call(this), b.extend(this, {
				type : "image/png",
				size : h.length(),
				width : k.width,
				height : k.height,
				purge : function() {
					f.call(this)
				}
			}), f.call(this)
		}
		return d
	}), d("moxie/runtime/html5/image/ImageInfo", [ "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEG", "moxie/runtime/html5/image/PNG" ], function(a, b, c, d) {
		return function(e) {
			var f,
				g = [ c, d ];
			f = function() {
				for (var a = 0; a < g.length; a++) try {
						return new g[a](e)
					} catch (c) {}
				throw new b.ImageError(b.ImageError.WRONG_FORMAT)
			}(), a.extend(this, {
				type : "",
				size : 0,
				width : 0,
				height : 0,
				setExif : function() {},
				writeHeaders : function(a) {
					return a
				},
				stripHeaders : function(a) {
					return a
				},
				purge : function() {
					e = null
				}
			}), a.extend(this, f), this.purge = function() {
				f.purge(), f = null
			}
		}
	}), d("moxie/runtime/html5/image/MegaPixel", [], function() {
		function a(a, d, e) {
			var f = a.naturalWidth,
				g = a.naturalHeight,
				h = e.width,
				i = e.height,
				j = e.x || 0,
				k = e.y || 0,
				l = d.getContext("2d");
			b(a) && (f /= 2, g /= 2);var m = 1024,
				n = document.createElement("canvas");
			n.width = n.height = m;
			for (var o = n.getContext("2d"), p = c(a, f, g), q = 0; g > q;) {
				for (var r = q + m > g ? g - q : m, s = 0; f > s;) {
					var t = s + m > f ? f - s : m;
					o.clearRect(0, 0, m, m), o.drawImage(a, -s, -q);var u = s * h / f + j << 0,
						v = Math.ceil(t * h / f),
						w = q * i / g / p + k << 0,
						x = Math.ceil(r * i / g / p);
					l.drawImage(n, 0, 0, t, r, u, w, v, x), s += m
				}
				q += m
			}
			n = o = null
		}
		function b(a) {
			var b = a.naturalWidth,
				c = a.naturalHeight;
			if (b * c > 1048576) {
				var d = document.createElement("canvas");
				d.width = d.height = 1;
				var e = d.getContext("2d");
				return e.drawImage(a, -b + 1, 0), 0 === e.getImageData(0, 0, 1, 1).data[3]
			}
			return !1
		}
		function c(a, b, c) {
			var d = document.createElement("canvas");
			d.width = 1, d.height = c;var e = d.getContext("2d");
			e.drawImage(a, 0, 0);
			for (var f = e.getImageData(0, 0, 1, c).data, g = 0, h = c, i = c; i > g;) {
				var j = f[4 * (i - 1) + 3];
				0 === j ? h = i : g = i, i = h + g >> 1
			}
			d = null;var k = i / c;
			return 0 === k ? 1 : k
		}
		return {
			isSubsampled : b,
			renderTo : a
		}
	}), d("moxie/runtime/html5/image/Image", [ "moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/utils/Encode", "moxie/file/Blob", "moxie/file/File", "moxie/runtime/html5/image/ImageInfo", "moxie/runtime/html5/image/MegaPixel", "moxie/core/utils/Mime", "moxie/core/utils/Env" ], function(a, b, c, d, e, f, g, h, i, j) {
		function k() {
			function a() {
				if (!u && !s)
					throw new c.ImageError(c.DOMException.INVALID_STATE_ERR);
				return u || s
			}
			function k(a) {
				return d.atob(a.substring(a.indexOf("base64,") + 7))
			}
			function l(a, b) {
				return "data:" + (b || "") + ";base64," + d.btoa(a)
			}
			function m(a) {
				var b = this;
				s = new Image, s.onerror = function() {
					r.call(this), b.trigger("error", c.ImageError.WRONG_FORMAT)
				}, s.onload = function() {
					b.trigger("load")
				}, s.src = "data:" == a.substr(0, 5) ? a : l(a, w.type)
			}
			function n(a, b) {
				var d,
					e = this;
				return window.FileReader ? (d = new FileReader, d.onload = function() {
					b(this.result)
				}, d.onerror = function() {
					e.trigger("error", c.ImageError.WRONG_FORMAT)
				}, d.readAsDataURL(a), void 0) : b(a.getAsDataURL())
			}
			function o(c, d, e, f) {
				var g,
					h,
					i,
					j,
					k,
					l = this,
					m = 0,
					n = 0;
				if (z = f, k = this.meta && this.meta.tiff && this.meta.tiff.Orientation || 1, -1 !== b.inArray(k, [ 5, 6, 7, 8 ])) {
					var o = c;
					c = d, d = o
				}
				return h = a(), e ? (c = Math.min(c, h.width), d = Math.min(d, h.height), g = Math.max(c / h.width, d / h.height)) : g = Math.min(c / h.width, d / h.height), g > 1 && !e && f ? void this.trigger("Resize") : (u || (u = document.createElement("canvas")), i = Math.round(h.width * g), j = Math.round(h.height * g), e ? (u.width = c, u.height = d, i > c && (m = Math.round((i - c) / 2)), j > d && (n = Math.round((j - d) / 2))) : (u.width = i, u.height = j), z || q(u.width, u.height, k), p.call(this, h, u, -m, -n, i, j), this.width = u.width, this.height = u.height, y = !0, void l.trigger("Resize"))
			}
			function p(a, b, c, d, e, f) {
				if ("iOS" === j.OS) h.renderTo(a, b, {
						width : e,
						height : f,
						x : c,
						y : d
					});else {
					var g = b.getContext("2d");
					g.drawImage(a, c, d, e, f)
				}
			}
			function q(a, b, c) {
				switch (c) {
				case 5:
				case 6:
				case 7:
				case 8:
					u.width = b, u.height = a;
					break;default:
					u.width = a, u.height = b
				}
				var d = u.getContext("2d");
				switch (c) {
				case 2:
					d.translate(a, 0), d.scale(-1, 1);
					break;case 3:
					d.translate(a, b), d.rotate(Math.PI);
					break;case 4:
					d.translate(0, b), d.scale(1, -1);
					break;case 5:
					d.rotate(.5 * Math.PI), d.scale(1, -1);
					break;case 6:
					d.rotate(.5 * Math.PI), d.translate(0, -b);
					break;case 7:
					d.rotate(.5 * Math.PI), d.translate(a, -b), d.scale(-1, 1);
					break;case 8:
					d.rotate(-.5 * Math.PI), d.translate(-a, 0)
				}
			}
			function r() {
				t && (t.purge(), t = null), v = s = u = w = null, y = !1
			}
			var s,
				t,
				u,
				v,
				w,
				x = this,
				y = !1,
				z = !0;
			b.extend(this, {
				loadFromBlob : function(a) {
					var b = this,
						d = b.getRuntime(),
						e = arguments.length > 1 ? arguments[1] : !0;
					if (!d.can("access_binary"))
						throw new c.RuntimeError(c.RuntimeError.NOT_SUPPORTED_ERR);
					return w = a, a.isDetached() ? (v = a.getSource(), void m.call(this, v)) : void n.call(this, a.getSource(), function(a) {
							e && (v = k(a)), m.call(b, a)
						})
				},
				loadFromImage : function(a, b) {
					this.meta = a.meta, w = new f(null, {
						name : a.name,
						size : a.size,
						type : a.type
					}), m.call(this, b ? v = a.getAsBinaryString() : a.getAsDataURL())
				},
				getInfo : function() {
					var b,
						c = this.getRuntime();
					return !t && v && c.can("access_image_binary") && (t = new g(v)), b = {
							width : a().width || 0,
							height : a().height || 0,
							type : w.type || i.getFileMime(w.name),
							size : v && v.length || w.size || 0,
							name : w.name || "",
							meta : t && t.meta || this.meta || {}
						}, !b.meta || !b.meta.thumb || b.meta.thumb.data instanceof e || (b.meta.thumb.data = new e(null, {
							type : "image/jpeg",
							data : b.meta.thumb.data
						})), b
				},
				downsize : function() {
					o.apply(this, arguments)
				},
				getAsCanvas : function() {
					return u && (u.id = this.uid + "_canvas"), u
				},
				getAsBlob : function(a, b) {
					return a !== this.type && o.call(this, this.width, this.height, !1), new f(null, {
							name : w.name || "",
							type : a,
							data : x.getAsBinaryString.call(this, a, b)
						})
				},
				getAsDataURL : function(a) {
					var b = arguments[1] || 90;
					if (!y) return s.src;
					if ("image/jpeg" !== a) return u.toDataURL("image/png");
					try {
						return u.toDataURL("image/jpeg", b / 100)
					} catch (c) {
						return u.toDataURL("image/jpeg")
					}
				},
				getAsBinaryString : function(a, b) {
					if (!y) return v || (v = k(x.getAsDataURL(a, b))), v;
					if ("image/jpeg" !== a)
						v = k(x.getAsDataURL(a, b));else {
						var c;
						b || (b = 90);try {
							c = u.toDataURL("image/jpeg", b / 100)
						} catch (d) {
							c = u.toDataURL("image/jpeg")
						} v = k(c), t && (v = t.stripHeaders(v), z && (t.meta && t.meta.exif && t.setExif({
							PixelXDimension : this.width,
							PixelYDimension : this.height
						}), v = t.writeHeaders(v)), t.purge(), t = null)
					}
					return y = !1, v
				},
				destroy : function() {
					x = null, r.call(this), this.getRuntime().getShim().removeInstance(this.uid)
				}
			})
		}
		return a.Image = k
	}), d("moxie/runtime/flash/Runtime", [ "moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime" ], function(a, b, c, d, e) {
		function f() {
			var a;
			try {
				a = navigator.plugins["Shockwave Flash"], a = a.description
			} catch (b) {
				try {
					a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
				} catch (c) {
					a = "0.0"
				}
			} return a = a.match(/\d+/g), parseFloat(a[0] + "." + a[1])
		}
		function g(a) {
			var d = c.get(a);
			d && "OBJECT" == d.nodeName && ("IE" === b.browser ? (d.style.display = "none", function e() {
				4 == d.readyState ? h(a) : setTimeout(e, 10)
			}()) : d.parentNode.removeChild(d))
		}
		function h(a) {
			var b = c.get(a);
			if (b) {
				for (var d in b) "function" == typeof b[d] && (b[d] = null);
				b.parentNode.removeChild(b)
			}
		}
		function i(h) {
			var i,
				l = this;
			h = a.extend({
				swf_url : b.swf_url
			}, h), e.call(this, h, j, {
				access_binary : function(a) {
					return a && "browser" === l.mode
				},
				access_image_binary : function(a) {
					return a && "browser" === l.mode
				},
				display_media : e.capTrue,
				do_cors : e.capTrue,
				drag_and_drop : !1,
				report_upload_progress : function() {
					return "client" === l.mode
				},
				resize_image : e.capTrue,
				return_response_headers : !1,
				return_response_type : function(b) {
					return "json" === b && window.JSON ? !0 : !a.arrayDiff(b, [ "", "text", "document" ]) || "browser" === l.mode
				},
				return_status_code : function(b) {
					return "browser" === l.mode || !a.arrayDiff(b, [ 200, 404 ])
				},
				select_file : e.capTrue,
				select_multiple : e.capTrue,
				send_binary_string : function(a) {
					return a && "browser" === l.mode
				},
				send_browser_cookies : function(a) {
					return a && "browser" === l.mode
				},
				send_custom_headers : function(a) {
					return a && "browser" === l.mode
				},
				send_multipart : e.capTrue,
				slice_blob : function(a) {
					return a && "browser" === l.mode
				},
				stream_upload : function(a) {
					return a && "browser" === l.mode
				},
				summon_file_dialog : !1,
				upload_filesize : function(b) {
					return a.parseSizeStr(b) <= 2097152 || "client" === l.mode
				},
				use_http_method : function(b) {
					return !a.arrayDiff(b, [ "GET", "POST" ])
				}
			}, {
				access_binary : function(a) {
					return a ? "browser" : "client"
				},
				access_image_binary : function(a) {
					return a ? "browser" : "client"
				},
				report_upload_progress : function(a) {
					return a ? "browser" : "client"
				},
				return_response_type : function(b) {
					return a.arrayDiff(b, [ "", "text", "json", "document" ]) ? "browser" : [ "client", "browser" ]
				},
				return_status_code : function(b) {
					return a.arrayDiff(b, [ 200, 404 ]) ? "browser" : [ "client", "browser" ]
				},
				send_binary_string : function(a) {
					return a ? "browser" : "client"
				},
				send_browser_cookies : function(a) {
					return a ? "browser" : "client"
				},
				send_custom_headers : function(a) {
					return a ? "browser" : "client"
				},
				stream_upload : function(a) {
					return a ? "client" : "browser"
				},
				upload_filesize : function(b) {
					return a.parseSizeStr(b) >= 2097152 ? "client" : "browser"
				}
			}, "client"), f() < 10 && (MXI_DEBUG && b.debug.runtime && b.log("	Flash didn't meet minimal version requirement (10)."), this.mode = !1), a.extend(this, {
				getShim : function() {
					return c.get(this.uid)
				},
				shimExec : function(a, b) {
					var c = [].slice.call(arguments, 2);
					return l.getShim().exec(this.uid, a, b, c)
				},
				init : function() {
					var c,
						e,
						f;
					f = this.getShimContainer(), a.extend(f.style, {
						position : "absolute",
						top : "-8px",
						left : "-8px",
						width : "9px",
						height : "9px",
						overflow : "hidden"
					}), c = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + h.swf_url + '" ', "IE" === b.browser && (c += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), c += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + h.swf_url + '" /><param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + b.global_event_dispatcher + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>', "IE" === b.browser ? (e = document.createElement("div"), f.appendChild(e), e.outerHTML = c, e = f = null) : f.innerHTML = c, i = setTimeout(function() {
						l && !l.initialized && (l.trigger("Error", new d.RuntimeError(d.RuntimeError.NOT_INIT_ERR)), MXI_DEBUG && b.debug.runtime && b.log("	Flash failed to initialize within a specified period of time (typically 5s)."))
					}, 5e3)
				},
				destroy : function(a) {
					return function() {
						g(l.uid), a.call(l), clearTimeout(i), h = i = a = l = null
					}
				}(this.destroy)
			}, k)
		}
		var j = "flash",
			k = {};
		return e.addConstructor(j, i), k
	}), d("moxie/runtime/flash/file/FileInput", [ "moxie/runtime/flash/Runtime", "moxie/file/File", "moxie/core/utils/Basic" ], function(a, b, c) {
		var d = {
			init : function(a) {
				var d = this,
					e = this.getRuntime();
				this.bind("Change", function() {
					var a = e.shimExec.call(d, "FileInput", "getFiles");
					d.files = [], c.each(a, function(a) {
						d.files.push(new b(e.uid, a))
					})
				}, 999), this.getRuntime().shimExec.call(this, "FileInput", "init", {
					name : a.name,
					accept : a.accept,
					multiple : a.multiple
				}), this.trigger("ready")
			}
		};
		return a.FileInput = d
	}), d("moxie/runtime/flash/file/Blob", [ "moxie/runtime/flash/Runtime", "moxie/file/Blob" ], function(a, b) {
		var c = {
			slice : function(a, c, d, e) {
				var f = this.getRuntime();
				return 0 > c ? c = Math.max(a.size + c, 0) : c > 0 && (c = Math.min(c, a.size)), 0 > d ? d = Math.max(a.size + d, 0) : d > 0 && (d = Math.min(d, a.size)), a = f.shimExec.call(this, "Blob", "slice", c, d, e || ""), a && (a = new b(f.uid, a)), a
			}
		};
		return a.Blob = c
	}), d("moxie/runtime/flash/file/FileReader", [ "moxie/runtime/flash/Runtime", "moxie/core/utils/Encode" ], function(a, b) {
		function c(a, c) {
			switch (c) {
			case "readAsText":
				return b.atob(a, "utf8");case "readAsBinaryString":
				return b.atob(a);case "readAsDataURL":
				return a
			}
			return null
		}
		var d = {
			read : function(a, b) {
				var d = this;
				return d.result = "", "readAsDataURL" === a && (d.result = "data:" + (b.type || "") + ";base64,"), d.bind("Progress", function(b, e) {
						e && (d.result += c(e, a))
					}, 999), d.getRuntime().shimExec.call(this, "FileReader", "readAsBase64", b.uid)
			}
		};
		return a.FileReader = d
	}), d("moxie/runtime/flash/file/FileReaderSync", [ "moxie/runtime/flash/Runtime", "moxie/core/utils/Encode" ], function(a, b) {
		function c(a, c) {
			switch (c) {
			case "readAsText":
				return b.atob(a, "utf8");case "readAsBinaryString":
				return b.atob(a);case "readAsDataURL":
				return a
			}
			return null
		}
		var d = {
			read : function(a, b) {
				var d,
					e = this.getRuntime();
				return (d = e.shimExec.call(this, "FileReaderSync", "readAsBase64", b.uid)) ? ("readAsDataURL" === a && (d = "data:" + (b.type || "") + ";base64," + d), c(d, a, b.type)) : null
			}
		};
		return a.FileReaderSync = d
	}), d("moxie/runtime/flash/xhr/XMLHttpRequest", [ "moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/file/File", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/runtime/Transporter" ], function(a, b, c, d, e, f, g) {
		var h = {
			send : function(a, d) {
				function e() {
					a.transport = k.mode, k.shimExec.call(j, "XMLHttpRequest", "send", a, d)
				}
				function h(a, b) {
					k.shimExec.call(j, "XMLHttpRequest", "appendBlob", a, b.uid), d = null, e()
				}
				function i(a, b) {
					var c = new g;
					c.bind("TransportingComplete", function() {
						b(this.result)
					}), c.transport(a.getSource(), a.type, {
						ruid : k.uid
					})
				}
				var j = this,
					k = j.getRuntime();
				if (b.isEmptyObj(a.headers) || b.each(a.headers, function(a, b) {
						k.shimExec.call(j, "XMLHttpRequest", "setRequestHeader", b, a.toString())
					}), d instanceof f) {
					var l;
					if (d.each(function(a, b) {
							a instanceof c ? l = b : k.shimExec.call(j, "XMLHttpRequest", "append", b, a)
						}), d.hasBlob()) {
						var m = d.getBlob();
						m.isDetached() ? i(m, function(a) {
							m.destroy(), h(l, a)
						}) : h(l, m)
					} else d = null, e()
				} else
					d instanceof c ? d.isDetached() ? i(d, function(a) {
						d.destroy(), d = a.uid, e()
					}) : (d = d.uid, e()) : e()
			},
			getResponse : function(a) {
				var c,
					f,
					g = this.getRuntime();
				if (f = g.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob")) {
					if (f = new d(g.uid, f), "blob" === a) return f;
					try {
						if (c = new e, ~b.inArray(a, [ "", "text" ])) return c.readAsText(f);
						if ("json" === a && window.JSON) return JSON.parse(c.readAsText(f))
					} finally {
						f.destroy()
					}
				}
				return null
			},
			abort : function(a) {
				var b = this.getRuntime();
				b.shimExec.call(this, "XMLHttpRequest", "abort"), this.dispatchEvent("readystatechange"), this.dispatchEvent("abort")
			}
		};
		return a.XMLHttpRequest = h
	}), d("moxie/runtime/flash/runtime/Transporter", [ "moxie/runtime/flash/Runtime", "moxie/file/Blob" ], function(a, b) {
		var c = {
			getAsBlob : function(a) {
				var c = this.getRuntime(),
					d = c.shimExec.call(this, "Transporter", "getAsBlob", a);
				return d ? new b(c.uid, d) : null
			}
		};
		return a.Transporter = c
	}), d("moxie/runtime/flash/image/Image", [ "moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/runtime/Transporter", "moxie/file/Blob", "moxie/file/FileReaderSync" ], function(a, b, c, d, e) {
		var f = {
			loadFromBlob : function(a) {
				function b(a) {
					e.shimExec.call(d, "Image", "loadFromBlob", a.uid), d = e = null
				}
				var d = this,
					e = d.getRuntime();
				if (a.isDetached()) {
					var f = new c;
					f.bind("TransportingComplete", function() {
						b(f.result.getSource())
					}), f.transport(a.getSource(), a.type, {
						ruid : e.uid
					})
				} else b(a.getSource())
			},
			loadFromImage : function(a) {
				var b = this.getRuntime();
				return b.shimExec.call(this, "Image", "loadFromImage", a.uid)
			},
			getInfo : function() {
				var a = this.getRuntime(),
					b = a.shimExec.call(this, "Image", "getInfo");
				return !b.meta || !b.meta.thumb || b.meta.thumb.data instanceof d || (b.meta.thumb.data = new d(a.uid, b.meta.thumb.data)), b
			},
			getAsBlob : function(a, b) {
				var c = this.getRuntime(),
					e = c.shimExec.call(this, "Image", "getAsBlob", a, b);
				return e ? new d(c.uid, e) : null
			},
			getAsDataURL : function() {
				var a,
					b = this.getRuntime(),
					c = b.Image.getAsBlob.apply(this, arguments);
				return c ? (a = new e, a.readAsDataURL(c)) : null
			}
		};
		return a.Image = f
	}), d("moxie/runtime/silverlight/Runtime", [ "moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime" ], function(a, b, c, d, e) {
		function f(a) {
			var b,
				c,
				d,
				e,
				f,
				g = !1,
				h = null,
				i = 0;
			try {
				try {
					h = new ActiveXObject("AgControl.AgControl"), h.IsVersionSupported(a) && (g = !0), h = null
				} catch (j) {
					var k = navigator.plugins["Silverlight Plug-In"];
					if (k) {
						for (b = k.description, "1.0.30226.2" === b && (b = "2.0.30226.2"), c = b.split("."); c.length > 3;) c.pop();
						for (; c.length < 4;) c.push(0);
						for (d = a.split("."); d.length > 4;) d.pop();
						do e = parseInt(d[i], 10), f = parseInt(c[i], 10), i++; while (i < d.length && e === f);
						f >= e && !isNaN(e) && (g = !0)
					}
				}
			} catch (l) {
				g = !1
			} return g
		}
		function g(g) {
			var j,
				k = this;
			g = a.extend({
				xap_url : b.xap_url
			}, g), e.call(this, g, h, {
				access_binary : e.capTrue,
				access_image_binary : e.capTrue,
				display_media : e.capTrue,
				do_cors : e.capTrue,
				drag_and_drop : !1,
				report_upload_progress : e.capTrue,
				resize_image : e.capTrue,
				return_response_headers : function(a) {
					return a && "client" === k.mode
				},
				return_response_type : function(a) {
					return "json" !== a ? !0 : !!window.JSON
				},
				return_status_code : function(b) {
					return "client" === k.mode || !a.arrayDiff(b, [ 200, 404 ])
				},
				select_file : e.capTrue,
				select_multiple : e.capTrue,
				send_binary_string : e.capTrue,
				send_browser_cookies : function(a) {
					return a && "browser" === k.mode
				},
				send_custom_headers : function(a) {
					return a && "client" === k.mode
				},
				send_multipart : e.capTrue,
				slice_blob : e.capTrue,
				stream_upload : !0,
				summon_file_dialog : !1,
				upload_filesize : e.capTrue,
				use_http_method : function(b) {
					return "client" === k.mode || !a.arrayDiff(b, [ "GET", "POST" ])
				}
			}, {
				return_response_headers : function(a) {
					return a ? "client" : "browser"
				},
				return_status_code : function(b) {
					return a.arrayDiff(b, [ 200, 404 ]) ? "client" : [ "client", "browser" ]
				},
				send_browser_cookies : function(a) {
					return a ? "browser" : "client"
				},
				send_custom_headers : function(a) {
					return a ? "client" : "browser"
				},
				use_http_method : function(b) {
					return a.arrayDiff(b, [ "GET", "POST" ]) ? "client" : [ "client", "browser" ]
				}
			}), f("2.0.31005.0") && "Opera" !== b.browser || (MXI_DEBUG && b.debug.runtime && b.log("	Silverlight is not installed or minimal version (2.0.31005.0) requirement not met (not likely)."), this.mode = !1), a.extend(this, {
				getShim : function() {
					return c.get(this.uid).content.Moxie
				},
				shimExec : function(a, b) {
					var c = [].slice.call(arguments, 2);
					return k.getShim().exec(this.uid, a, b, c)
				},
				init : function() {
					var a;
					a = this.getShimContainer(), a.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="' + g.xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid=' + this.uid + ",target=" + b.global_event_dispatcher + '"/></object>', j = setTimeout(function() {
						k && !k.initialized && (k.trigger("Error", new d.RuntimeError(d.RuntimeError.NOT_INIT_ERR)), MXI_DEBUG && b.debug.runtime && b.log("Silverlight failed to initialize within a specified period of time (5-10s)."))
					}, "Windows" !== b.OS ? 1e4 : 5e3)
				},
				destroy : function(a) {
					return function() {
						a.call(k), clearTimeout(j), g = j = a = k = null
					}
				}(this.destroy)
			}, i)
		}
		var h = "silverlight",
			i = {};
		return e.addConstructor(h, g), i
	}), d("moxie/runtime/silverlight/file/FileInput", [ "moxie/runtime/silverlight/Runtime", "moxie/file/File", "moxie/core/utils/Basic" ], function(a, b, c) {
		var d = {
			init : function(a) {
				function d(a) {
					for (var b = "", c = 0; c < a.length; c++) b += ("" !== b ? "|" : "") + a[c].title + " | *." + a[c].extensions.replace(/,/g, ";*.");
					return b
				}
				var e = this,
					f = this.getRuntime();
				this.bind("Change", function() {
					var a = f.shimExec.call(e, "FileInput", "getFiles");
					e.files = [], c.each(a, function(a) {
						e.files.push(new b(f.uid, a))
					})
				}, 999), this.getRuntime().shimExec.call(this, "FileInput", "init", d(a.accept), a.name, a.multiple), this.trigger("ready")
			}
		};
		return a.FileInput = d
	}), d("moxie/runtime/silverlight/file/Blob", [ "moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/Blob" ], function(a, b, c) {
		return a.Blob = b.extend({}, c)
	}), d("moxie/runtime/silverlight/file/FileDrop", [ "moxie/runtime/silverlight/Runtime", "moxie/core/utils/Dom", "moxie/core/utils/Events" ], function(a, b, c) {
		var d = {
			init : function() {
				var a,
					d = this,
					e = d.getRuntime();
				return a = e.getShimContainer(), c.addEvent(a, "dragover", function(a) {
						a.preventDefault(), a.stopPropagation(), a.dataTransfer.dropEffect = "copy"
					}, d.uid), c.addEvent(a, "dragenter", function(a) {
						a.preventDefault();
						var c = b.get(e.uid).dragEnter(a);
						c && a.stopPropagation()
					}, d.uid), c.addEvent(a, "drop", function(a) {
						a.preventDefault();
						var c = b.get(e.uid).dragDrop(a);
						c && a.stopPropagation()
					}, d.uid), e.shimExec.call(this, "FileDrop", "init")
			}
		};
		return a.FileDrop = d
	}), d("moxie/runtime/silverlight/file/FileReader", [ "moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReader" ], function(a, b, c) {
		return a.FileReader = b.extend({}, c)
	}), d("moxie/runtime/silverlight/file/FileReaderSync", [ "moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReaderSync" ], function(a, b, c) {
		return a.FileReaderSync = b.extend({}, c)
	}), d("moxie/runtime/silverlight/xhr/XMLHttpRequest", [ "moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/xhr/XMLHttpRequest" ], function(a, b, c) {
		return a.XMLHttpRequest = b.extend({}, c)
	}), d("moxie/runtime/silverlight/runtime/Transporter", [ "moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/runtime/Transporter" ], function(a, b, c) {
		return a.Transporter = b.extend({}, c)
	}), d("moxie/runtime/silverlight/image/Image", [ "moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/runtime/flash/image/Image" ], function(a, b, c, d) {
		return a.Image = b.extend({}, d, {
			getInfo : function() {
				var a = this.getRuntime(),
					d = [ "tiff", "exif", "gps", "thumb" ],
					e = {
						meta : {}
					},
					f = a.shimExec.call(this, "Image", "getInfo");
				return f.meta && (b.each(d, function(a) {
						var b,
							c,
							d,
							g,
							h = f.meta[a];
						if (h && h.keys)
							for (e.meta[a] = {}, c = 0, d = h.keys.length; d > c; c++) b = h.keys[c], g = h[b], g && (/^(\d|[1-9]\d+)$/.test(g) ? g = parseInt(g, 10) : /^\d*\.\d+$/.test(g) && (g = parseFloat(g)), e.meta[a][b] = g)
					}), !e.meta || !e.meta.thumb || e.meta.thumb.data instanceof c || (e.meta.thumb.data = new c(a.uid, e.meta.thumb.data))), e.width = parseInt(f.width, 10), e.height = parseInt(f.height, 10), e.size = parseInt(f.size, 10), e.type = f.type, e.name = f.name, e
			}
		})
	}), d("moxie/runtime/html4/Runtime", [ "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env" ], function(a, b, c, d) {
		function e(b) {
			var e = this,
				h = c.capTest,
				i = c.capTrue;
			c.call(this, b, f, {
				access_binary : h(window.FileReader || window.File && File.getAsDataURL),
				access_image_binary : !1,
				display_media : h(g.Image && (d.can("create_canvas") || d.can("use_data_uri_over32kb"))),
				do_cors : !1,
				drag_and_drop : !1,
				filter_by_extension : h(function() {
					return "Chrome" === d.browser && d.verComp(d.version, 28, ">=") || "IE" === d.browser && d.verComp(d.version, 10, ">=") || "Safari" === d.browser && d.verComp(d.version, 7, ">=")
				}()),
				resize_image : function() {
					return g.Image && e.can("access_binary") && d.can("create_canvas")
				},
				report_upload_progress : !1,
				return_response_headers : !1,
				return_response_type : function(b) {
					return "json" === b && window.JSON ? !0 : !!~a.inArray(b, [ "text", "document", "" ])
				},
				return_status_code : function(b) {
					return !a.arrayDiff(b, [ 200, 404 ])
				},
				select_file : function() {
					return d.can("use_fileinput")
				},
				select_multiple : !1,
				send_binary_string : !1,
				send_custom_headers : !1,
				send_multipart : !0,
				slice_blob : !1,
				stream_upload : function() {
					return e.can("select_file")
				},
				summon_file_dialog : function() {
					return e.can("select_file") && ("Firefox" === d.browser && d.verComp(d.version, 4, ">=") || "Opera" === d.browser && d.verComp(d.version, 12, ">=") || "IE" === d.browser && d.verComp(d.version, 10, ">=") || !!~a.inArray(d.browser, [ "Chrome", "Safari" ]))
				},
				upload_filesize : i,
				use_http_method : function(b) {
					return !a.arrayDiff(b, [ "GET", "POST" ])
				}
			}), a.extend(this, {
				init : function() {
					this.trigger("Init")
				},
				destroy : function(a) {
					return function() {
						a.call(e), a = e = null
					}
				}(this.destroy)
			}), a.extend(this.getShim(), g)
		}
		var f = "html4",
			g = {};
		return c.addConstructor(f, e), g
	}), d("moxie/runtime/html4/file/FileInput", [ "moxie/runtime/html4/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env" ], function(a, b, c, d, e, f, g) {
		function h() {
			function a() {
				var f,
					k,
					l,
					m,
					n,
					o,
					p = this,
					q = p.getRuntime();
				o = c.guid("uid_"), f = q.getShimContainer(), h && (l = d.get(h + "_form"), l && c.extend(l.style, {
					top : "100%"
				})), m = document.createElement("form"), m.setAttribute("id", o + "_form"), m.setAttribute("method", "post"), m.setAttribute("enctype", "multipart/form-data"), m.setAttribute("encoding", "multipart/form-data"), c.extend(m.style, {
					overflow : "hidden",
					position : "absolute",
					top : 0,
					left : 0,
					width : "100%",
					height : "100%"
				}), n = document.createElement("input"), n.setAttribute("id", o), n.setAttribute("type", "file"), n.setAttribute("name", i.name || "Filedata"), n.setAttribute("accept", j.join(",")), c.extend(n.style, {
					fontSize : "999px",
					opacity : 0
				}), m.appendChild(n), f.appendChild(m), c.extend(n.style, {
					position : "absolute",
					top : 0,
					left : 0,
					width : "100%",
					height : "100%"
				}), "IE" === g.browser && g.verComp(g.version, 10, "<") && c.extend(n.style, {
					filter : "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
				}), n.onchange = function() {
					var c;
					if (this.value) {
						if (this.files) {
							if (c = this.files[0], 0 === c.size) return void m.parentNode.removeChild(m)
						} else
							c = {
								name : this.value
							};
						c = new b(q.uid, c), this.onchange = function() {}, a.call(p), p.files = [ c ], n.setAttribute("id", c.uid), m.setAttribute("id", c.uid + "_form"), p.trigger("change"), n = m = null
					}
				}, q.can("summon_file_dialog") && (k = d.get(i.browse_button), e.removeEvent(k, "click", p.uid), e.addEvent(k, "click", function(a) {
					n && !n.disabled && n.click(), a.preventDefault()
				}, p.uid)), h = o, f = l = k = null
			}
			var h,
				i,
				j = [];
			c.extend(this, {
				init : function(b) {
					var c,
						g = this,
						h = g.getRuntime();
					i = b, j = b.accept.mimes || f.extList2mimes(b.accept, h.can("filter_by_extension")), c = h.getShimContainer(), function() {
						var a,
							f,
							i;
						a = d.get(b.browse_button), h.can("summon_file_dialog") && ("static" === d.getStyle(a, "position") && (a.style.position = "relative"), f = parseInt(d.getStyle(a, "z-index"), 10) || 1, a.style.zIndex = f, c.style.zIndex = f - 1), i = h.can("summon_file_dialog") ? a : c, e.addEvent(i, "mouseover", function() {
							g.trigger("mouseenter")
						}, g.uid), e.addEvent(i, "mouseout", function() {
							g.trigger("mouseleave")
						}, g.uid), e.addEvent(i, "mousedown", function() {
							g.trigger("mousedown")
						}, g.uid), e.addEvent(d.get(b.container), "mouseup", function() {
							g.trigger("mouseup")
						}, g.uid), a = null
					}(), a.call(this), c = null, g.trigger({
						type : "ready",
						async : !0
					})
				},
				disable : function(a) {
					var b;
					(b = d.get(h)) && (b.disabled = !!a)
				},
				destroy : function() {
					var a = this.getRuntime(),
						b = a.getShim(),
						c = a.getShimContainer();
					e.removeAllEvents(c, this.uid), e.removeAllEvents(i && d.get(i.container), this.uid), e.removeAllEvents(i && d.get(i.browse_button), this.uid), c && (c.innerHTML = ""), b.removeInstance(this.uid), h = j = i = c = b = null
				}
			})
		}
		return a.FileInput = h
	}), d("moxie/runtime/html4/file/FileReader", [ "moxie/runtime/html4/Runtime", "moxie/runtime/html5/file/FileReader" ], function(a, b) {
		return a.FileReader = b
	}), d("moxie/runtime/html4/xhr/XMLHttpRequest", [ "moxie/runtime/html4/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Url", "moxie/core/Exceptions", "moxie/core/utils/Events", "moxie/file/Blob", "moxie/xhr/FormData" ], function(a, b, c, d, e, f, g, h) {
		function i() {
			function a(a) {
				var b,
					d,
					e,
					g,
					h = this,
					i = !1;
				if (k) {
					if (b = k.id.replace(/_iframe$/, ""), d = c.get(b + "_form")) {
						for (e = d.getElementsByTagName("input"), g = e.length; g--;) switch (e[g].getAttribute("type")) {
							case "hidden":
								e[g].parentNode.removeChild(e[g]);
								break;case "file":
								i = !0
						}
						e = [], i || d.parentNode.removeChild(d), d = null
					}
					setTimeout(function() {
						f.removeEvent(k, "load", h.uid), k.parentNode && k.parentNode.removeChild(k);
						var b = h.getRuntime().getShimContainer();
						b.children.length || b.parentNode.removeChild(b), b = k = null, a()
					}, 1)
				}
			}
			var i,
				j,
				k;
			b.extend(this, {
				send : function(l, m) {
					function n() {
						var c = t.getShimContainer() || document.body,
							e = document.createElement("div");
						e.innerHTML = '<iframe id="' + o + '_iframe" name="' + o + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>', k = e.firstChild, c.appendChild(k), f.addEvent(k, "load", function() {
							var c;
							try {
								c = k.contentWindow.document || k.contentDocument || window.frames[k.id].document, /^4(0[0-9]|1[0-7]|2[2346])\s/.test(c.title) ? i = c.title.replace(/^(\d+).*$/, "$1") : (i = 200, j = b.trim(c.body.innerHTML), s.trigger({
									type : "progress",
									loaded : j.length,
									total : j.length
								}), r && s.trigger({
									type : "uploadprogress",
									loaded : r.size || 1025,
									total : r.size || 1025
								}))
							} catch (e) {
								if (!d.hasSameOrigin(l.url)) return void a.call(s, function() {
										s.trigger("error")
									});
								i = 404
							} a.call(s, function() {
								s.trigger("load")
							})
						}, s.uid)
					}
					var o,
						p,
						q,
						r,
						s = this,
						t = s.getRuntime();
					if (i = j = null, m instanceof h && m.hasBlob()) {
						if (r = m.getBlob(), o = r.uid, q = c.get(o), p = c.get(o + "_form"), !p)
							throw new e.DOMException(e.DOMException.NOT_FOUND_ERR)
					} else o = b.guid("uid_"), p = document.createElement("form"), p.setAttribute("id", o + "_form"), p.setAttribute("method", l.method), p.setAttribute("enctype", "multipart/form-data"), p.setAttribute("encoding", "multipart/form-data"), t.getShimContainer().appendChild(p);
					p.setAttribute("target", o + "_iframe"), m instanceof h && m.each(function(a, c) {
						if (a instanceof g) q && q.setAttribute("name", c);else {
							var d = document.createElement("input");
							b.extend(d, {
								type : "hidden",
								name : c,
								value : a
							}), q ? p.insertBefore(d, q) : p.appendChild(d)
						}
					}), p.setAttribute("action", l.url), n(), p.submit(), s.trigger("loadstart")
				},
				getStatus : function() {
					return i
				},
				getResponse : function(a) {
					if ("json" === a && "string" === b.typeOf(j) && window.JSON) try {
							return JSON.parse(j.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""))
						} catch (c) {
							return null
					} return j
				},
				abort : function() {
					var b = this;
					k && k.contentWindow && (k.contentWindow.stop ? k.contentWindow.stop() : k.contentWindow.document.execCommand ? k.contentWindow.document.execCommand("Stop") : k.src = "about:blank"), a.call(this, function() {
						b.dispatchEvent("abort")
					})
				}
			})
		}
		return a.XMLHttpRequest = i
	}), d("moxie/runtime/html4/image/Image", [ "moxie/runtime/html4/Runtime", "moxie/runtime/html5/image/Image" ], function(a, b) {
		return a.Image = b
	}), f([ "moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/I18n", "moxie/core/utils/Mime", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/file/FileInput", "moxie/core/utils/Encode", "moxie/file/Blob", "moxie/file/File", "moxie/file/FileDrop", "moxie/file/FileReader", "moxie/core/utils/Url", "moxie/runtime/RuntimeTarget", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Transporter", "moxie/image/Image", "moxie/core/utils/Events" ])
}(this), function(a) {
	"use strict";
	var b = {},
		c = a.moxie.core.utils.Basic.inArray;
	return function d(a) {
			var e,
				f;
			for (e in a) f = typeof a[e], "object" !== f || ~c(e, [ "Exceptions", "Env", "Mime" ]) ? "function" === f && (b[e] = a[e]) : d(a[e])
		}(a.moxie), b.Env = a.moxie.core.utils.Env, b.Mime = a.moxie.core.utils.Mime, b.Exceptions = a.moxie.core.Exceptions, a.mOxie = b, a.o || (a.o = b), b
}(this), function(a, b, c) {
	function d(a) {
		function b(a, b, c) {
			var e = {
				chunks : "slice_blob",
				jpgresize : "send_binary_string",
				pngresize : "send_binary_string",
				progress : "report_upload_progress",
				multi_selection : "select_multiple",
				dragdrop : "drag_and_drop",
				drop_element : "drag_and_drop",
				headers : "send_custom_headers",
				urlstream_upload : "send_binary_string",
				canSendBinary : "send_binary",
				triggerDialog : "summon_file_dialog"
			};
			e[a] ? d[e[a]] = b : c || (d[a] = b)
		}
		var c = a.required_features,
			d = {};
		return "string" == typeof c ? g.each(c.split(/\s*,\s*/), function(a) {
				b(a, !0)
			}) : "object" == typeof c ? g.each(c, function(a, c) {
				b(c, a)
			}) : c === !0 && (a.chunk_size > 0 && (d.slice_blob = !0), (a.resize.enabled || !a.multipart) && (d.send_binary_string = !0), g.each(a, function(a, c) {
				b(c, !!a, !0)
			})), d
	}
	var e = a.setTimeout,
		f = {},
		g = {
			VERSION : "2.1.8",
			STOPPED : 1,
			STARTED : 2,
			QUEUED : 1,
			UPLOADING : 2,
			FAILED : 4,
			DONE : 5,
			GENERIC_ERROR : -100,
			HTTP_ERROR : -200,
			IO_ERROR : -300,
			SECURITY_ERROR : -400,
			INIT_ERROR : -500,
			FILE_SIZE_ERROR : -600,
			FILE_EXTENSION_ERROR : -601,
			FILE_DUPLICATE_ERROR : -602,
			IMAGE_FORMAT_ERROR : -700,
			MEMORY_ERROR : -701,
			IMAGE_DIMENSIONS_ERROR : -702,
			mimeTypes : b.mimes,
			ua : b.ua,
			typeOf : b.typeOf,
			extend : b.extend,
			guid : b.guid,
			get : function(a) {
				var c,
					d = [];
				"array" !== b.typeOf(a) && (a = [ a ]);
				for (var e = a.length; e--;) c = b.get(a[e]), c && d.push(c);
				return d.length ? d : null
			},
			each : b.each,
			getPos : b.getPos,
			getSize : b.getSize,
			xmlEncode : function(a) {
				var b = {
						"<" : "lt",
						">" : "gt",
						"&" : "amp",
						'"' : "quot",
						"'" : "#39"
					},
					c = /[<>&\"\']/g;
				return a ? ("" + a).replace(c, function(a) {
					return b[a] ? "&" + b[a] + ";" : a
				}) : a
			},
			toArray : b.toArray,
			inArray : b.inArray,
			addI18n : b.addI18n,
			translate : b.translate,
			isEmptyObj : b.isEmptyObj,
			hasClass : b.hasClass,
			addClass : b.addClass,
			removeClass : b.removeClass,
			getStyle : b.getStyle,
			addEvent : b.addEvent,
			removeEvent : b.removeEvent,
			removeAllEvents : b.removeAllEvents,
			cleanName : function(a) {
				var b,
					c;
				for (c = [ /[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u" ], b = 0; b < c.length; b += 2) a = a.replace(c[b], c[b + 1]);
				return a = a.replace(/\s+/g, "_"), a = a.replace(/[^a-z0-9_\-\.]+/gi, "")
			},
			buildUrl : function(a, b) {
				var c = "";
				return g.each(b, function(a, b) {
						c += (c ? "&" : "") + encodeURIComponent(b) + "=" + encodeURIComponent(a)
					}), c && (a += (a.indexOf("?") > 0 ? "&" : "?") + c), a
			},
			formatSize : function(a) {
				function b(a, b) {
					return Math.round(a * Math.pow(10, b)) / Math.pow(10, b)
				}
				if (a === c || /\D/.test(a)) return g.translate("N/A");
				var d = Math.pow(1024, 4);
				return a > d ? b(a / d, 1) + " " + g.translate("tb") : a > (d /= 1024) ? b(a / d, 1) + " " + g.translate("gb") : a > (d /= 1024) ? b(a / d, 1) + " " + g.translate("mb") : a > 1024 ? Math.round(a / 1024) + " " + g.translate("kb") : a + " " + g.translate("b")
			},
			parseSize : b.parseSizeStr,
			predictRuntime : function(a, c) {
				var d,
					e;
				return d = new g.Uploader(a), e = b.Runtime.thatCan(d.getOption().required_features, c || a.runtimes), d.destroy(), e
			},
			addFileFilter : function(a, b) {
				f[a] = b
			}
		};
	g.addFileFilter("mime_types", function(a, b, c) {
		a.length && !a.regexp.test(b.name) ? (this.trigger("Error", {
			code : g.FILE_EXTENSION_ERROR,
			message : g.translate("File extension error."),
			file : b
		}), c(!1)) : c(!0)
	}), g.addFileFilter("max_file_size", function(a, b, c) {
		var d;
		a = g.parseSize(a), b.size !== d && a && b.size > a ? (this.trigger("Error", {
			code : g.FILE_SIZE_ERROR,
			message : g.translate("File size error."),
			file : b
		}), c(!1)) : c(!0)
	}), g.addFileFilter("prevent_duplicates", function(a, b, c) {
		if (a)
			for (var d = this.files.length; d--;)
				if (b.name === this.files[d].name && b.size === this.files[d].size) return this.trigger("Error", {
							code : g.FILE_DUPLICATE_ERROR,
							message : g.translate("Duplicate file error."),
							file : b
						}), void c(!1);
		c(!0)
	}), g.Uploader = function(a) {
		function h() {
			var a,
				b,
				c = 0;
			if (this.state == g.STARTED) {
				for (b = 0; b < D.length; b++) a || D[b].status != g.QUEUED ? c++ : (a = D[b], this.trigger("BeforeUpload", a) && (a.status = g.UPLOADING, this.trigger("UploadFile", a)));
				c == D.length && (this.state !== g.STOPPED && (this.state = g.STOPPED, this.trigger("StateChanged")), this.trigger("UploadComplete", D))
			}
		}
		function i(a) {
			a.percent = a.size > 0 ? Math.ceil(a.loaded / a.size * 100) : 100, j()
		}
		function j() {
			var a,
				b;
			for (A.reset(), a = 0; a < D.length; a++) b = D[a], b.size !== c ? (A.size += b.origSize, A.loaded += b.loaded * b.origSize / b.size) : A.size = c, b.status == g.DONE ? A.uploaded++ : b.status == g.FAILED ? A.failed++ : A.queued++;
			A.size === c ? A.percent = D.length > 0 ? Math.ceil(A.uploaded / D.length * 100) : 0 : (A.bytesPerSec = Math.ceil(A.loaded / ((+new Date - z || 1) / 1e3)), A.percent = A.size > 0 ? Math.ceil(A.loaded / A.size * 100) : 0)
		}
		function k() {
			var a = F[0] || G[0];
			return a ? a.getRuntime().uid : !1
		}
		function l(a, c) {
			if (a.ruid) {
				var d = b.Runtime.getInfo(a.ruid);
				if (d) return d.can(c)
			}
			return !1
		}
		function m() {
			this.bind("FilesAdded FilesRemoved", function(a) {
				a.trigger("QueueChanged"), a.refresh()
			}), this.bind("CancelUpload", u), this.bind("BeforeUpload", q), this.bind("UploadFile", r), this.bind("UploadProgress", s), this.bind("StateChanged", t), this.bind("QueueChanged", j), this.bind("Error", w), this.bind("FileUploaded", v), this.bind("Destroy", x)
		}
		function n(a, c) {
			var d = this,
				e = 0,
				f = [],
				h = {
					runtime_order : a.runtimes,
					required_caps : a.required_features,
					preferred_caps : E,
					swf_url : a.flash_swf_url,
					xap_url : a.silverlight_xap_url
				};
			g.each(a.runtimes.split(/\s*,\s*/), function(b) {
				a[b] && (h[b] = a[b])
			}), a.browse_button && g.each(a.browse_button, function(c) {
				f.push(function(f) {
					var i = new b.FileInput(g.extend({}, h, {
						accept : a.filters.mime_types,
						name : a.file_data_name,
						multiple : a.multi_selection,
						container : a.container,
						browse_button : c
					}));
					i.onready = function() {
						var a = b.Runtime.getInfo(this.ruid);
						b.extend(d.features, {
							chunks : a.can("slice_blob"),
							multipart : a.can("send_multipart"),
							multi_selection : a.can("select_multiple")
						}), e++, F.push(this), f()
					}, i.onchange = function() {
						d.addFile(this.files)
					}, i.bind("mouseenter mouseleave mousedown mouseup", function(d) {
						H || (a.browse_button_hover && ("mouseenter" === d.type ? b.addClass(c, a.browse_button_hover) : "mouseleave" === d.type && b.removeClass(c, a.browse_button_hover)), a.browse_button_active && ("mousedown" === d.type ? b.addClass(c, a.browse_button_active) : "mouseup" === d.type && b.removeClass(c, a.browse_button_active)))
					}), i.bind("mousedown", function() {
						d.trigger("Browse")
					}), i.bind("error runtimeerror", function() {
						i = null, f()
					}), i.init()
				})
			}), a.drop_element && g.each(a.drop_element, function(a) {
				f.push(function(c) {
					var f = new b.FileDrop(g.extend({}, h, {
						drop_zone : a
					}));
					f.onready = function() {
						var a = b.Runtime.getInfo(this.ruid);
						d.features.dragdrop = a.can("drag_and_drop"), e++, G.push(this), c()
					}, f.ondrop = function() {
						d.addFile(this.files)
					}, f.bind("error runtimeerror", function() {
						f = null, c()
					}), f.init()
				})
			}), b.inSeries(f, function() {
				"function" == typeof c && c(e)
			})
		}
		function o(a, d, e) {
			var f = new b.Image;
			try {
				f.onload = function() {
					return d.width > this.width && d.height > this.height && d.quality === c && d.preserve_headers && !d.crop ? (this.destroy(), e(a)) : void f.downsize(d.width, d.height, d.crop, d.preserve_headers)
				}, f.onresize = function() {
					e(this.getAsBlob(a.type, d.quality)), this.destroy()
				}, f.onerror = function() {
					e(a)
				}, f.load(a)
			} catch (g) {
				e(a)
			}
		}
		function p(a, c, e) {
			function f(a, b, c) {
				var d = y[a];
				switch (a) {
				case "max_file_size":
					"max_file_size" === a && (y.max_file_size = y.filters.max_file_size = b);
					break;case "chunk_size":
					(b = g.parseSize(b)) && (y[a] = b, y.send_file_name = !0);
					break;case "multipart":
					y[a] = b, b || (y.send_file_name = !0);
					break;case "unique_names":
					y[a] = b, b && (y.send_file_name = !0);
					break;case "filters":
					"array" === g.typeOf(b) && (b = {
						mime_types : b
					}), c ? g.extend(y.filters, b) : y.filters = b, b.mime_types && (y.filters.mime_types.regexp = function(a) {
						var b = [];
						return g.each(a, function(a) {
								g.each(a.extensions.split(/,/), function(a) {
									/^\s*\*\s*$/.test(a) ? b.push("\\.*") : b.push("\\." + a.replace(new RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"))
								})
							}), new RegExp("(" + b.join("|") + ")$", "i")
					}(y.filters.mime_types));
					break;case "resize":
					c ? g.extend(y.resize, b, {
						enabled : !0
					}) : y.resize = b;
					break;case "prevent_duplicates":
					y.prevent_duplicates = y.filters.prevent_duplicates = !!b;
					break;case "browse_button":
				case "drop_element":
					b = g.get(b);case "container":
				case "runtimes":
				case "multi_selection":
				case "flash_swf_url":
				case "silverlight_xap_url":
					y[a] = b, c || (i = !0);
					break;default:
					y[a] = b
				}
				c || h.trigger("OptionChanged", a, b, d)
			}
			var h = this,
				i = !1;
			"object" == typeof a ? g.each(a, function(a, b) {
				f(b, a, e)
			}) : f(a, c, e), e ? (y.required_features = d(g.extend({}, y)), E = d(g.extend({}, y, {
				required_features : !0
			}))) : i && (h.trigger("Destroy"), n.call(h, y, function(a) {
				a ? (h.runtime = b.Runtime.getInfo(k()).type, h.trigger("Init", {
					runtime : h.runtime
				}), h.trigger("PostInit")) : h.trigger("Error", {
					code : g.INIT_ERROR,
					message : g.translate("Init error.")
				})
			}))
		}
		function q(a, b) {
			if (a.settings.unique_names) {
				var c = b.name.match(/\.([^.]+)$/),
					d = "part";
				c && (d = c[1]), b.target_name = b.id + "." + d
			}
		}
		function r(a, c) {
			function d() {
				k-- > 0 ? e(f, 1e3) : (c.loaded = n, a.trigger("Error", {
					code : g.HTTP_ERROR,
					message : g.translate("HTTP Error."),
					file : c,
					response : B.responseText,
					status : B.status,
					responseHeaders : B.getAllResponseHeaders()
				}))
			}
			function f() {
				var l,
					o,
					p,
					q = {};
				c.status === g.UPLOADING && a.state !== g.STOPPED && (a.settings.send_file_name && (q.name = c.target_name || c.name), j && m.chunks && h.size > j ? (p = Math.min(j, h.size - n), l = h.slice(n, n + p)) : (p = h.size, l = h), j && m.chunks && (a.settings.send_chunk_number ? (q.chunk = Math.ceil(n / j), q.chunks = Math.ceil(h.size / j)) : (q.offset = n, q.total = h.size)), B = new b.XMLHttpRequest, B.upload && (B.upload.onprogress = function(b) {
					c.loaded = Math.min(c.size, n + b.loaded), a.trigger("UploadProgress", c)
				}), B.onload = function() {
					return B.status >= 400 ? void d() : (k = a.settings.max_retries, p < h.size ? (l.destroy(), n += p, c.loaded = Math.min(n, h.size), a.trigger("ChunkUploaded", c, {
						offset : c.loaded,
						total : h.size,
						response : B.responseText,
						status : B.status,
						responseHeaders : B.getAllResponseHeaders()
					}), "Android Browser" === b.Env.browser && a.trigger("UploadProgress", c)) : c.loaded = c.size, l = o = null, void (!n || n >= h.size ? (c.size != c.origSize && (h.destroy(), h = null), a.trigger("UploadProgress", c), c.status = g.DONE, a.trigger("FileUploaded", c, {
						response : B.responseText,
						status : B.status,
						responseHeaders : B.getAllResponseHeaders()
					})) : e(f, 1)))
				}, B.onerror = function() {
					d()
				}, B.onloadend = function() {
					this.destroy(), B = null
				}, a.settings.multipart && m.multipart ? (B.open("post", i, !0), g.each(a.settings.headers, function(a, b) {
					B.setRequestHeader(b, a)
				}), o = new b.FormData, g.each(g.extend(q, a.settings.multipart_params), function(a, b) {
					o.append(b, a)
				}), o.append(a.settings.file_data_name, l), B.send(o, {
					runtime_order : a.settings.runtimes,
					required_caps : a.settings.required_features,
					preferred_caps : E,
					swf_url : a.settings.flash_swf_url,
					xap_url : a.settings.silverlight_xap_url
				})) : (i = g.buildUrl(a.settings.url, g.extend(q, a.settings.multipart_params)), B.open("post", i, !0), B.setRequestHeader("Content-Type", "application/octet-stream"), g.each(a.settings.headers, function(a, b) {
					B.setRequestHeader(b, a)
				}), B.send(l, {
					runtime_order : a.settings.runtimes,
					required_caps : a.settings.required_features,
					preferred_caps : E,
					swf_url : a.settings.flash_swf_url,
					xap_url : a.settings.silverlight_xap_url
				})))
			}
			var h,
				i = a.settings.url,
				j = a.settings.chunk_size,
				k = a.settings.max_retries,
				m = a.features,
				n = 0;
			c.loaded && (n = c.loaded = j ? j * Math.floor(c.loaded / j) : 0), h = c.getSource(), a.settings.resize.enabled && l(h, "send_binary_string") && ~b.inArray(h.type, [ "image/jpeg", "image/png" ]) ? o.call(this, h, a.settings.resize, function(a) {
				h = a, c.size = a.size, f()
			}) : f()
		}
		function s(a, b) {
			i(b)
		}
		function t(a) {
			if (a.state == g.STARTED)
				z = +new Date;
			else if (a.state == g.STOPPED)
				for (var b = a.files.length - 1; b >= 0; b--) a.files[b].status == g.UPLOADING && (a.files[b].status = g.QUEUED, j())
		}
		function u() {
			B && B.abort()
		}
		function v(a) {
			j(), e(function() {
				h.call(a)
			}, 1)
		}
		function w(a, b) {
			b.code === g.INIT_ERROR ? a.destroy() : b.code === g.HTTP_ERROR && (b.file.status = g.FAILED, i(b.file), a.state == g.STARTED && (a.trigger("CancelUpload"), e(function() {
				h.call(a)
			}, 1)))
		}
		function x(a) {
			a.stop(), g.each(D, function(a) {
				a.destroy()
			}), D = [], F.length && (g.each(F, function(a) {
				a.destroy()
			}), F = []), G.length && (g.each(G, function(a) {
				a.destroy()
			}), G = []), E = {}, H = !1, z = B = null, A.reset()
		}
		var y,
			z,
			A,
			B,
			C = g.guid(),
			D = [],
			E = {},
			F = [],
			G = [],
			H = !1;
		y = {
			runtimes : b.Runtime.order,
			max_retries : 0,
			chunk_size : 0,
			multipart : !0,
			multi_selection : !0,
			file_data_name : "file",
			flash_swf_url : "js/Moxie.swf",
			silverlight_xap_url : "js/Moxie.xap",
			filters : {
				mime_types : [],
				prevent_duplicates : !1,
				max_file_size : 0
			},
			resize : {
				enabled : !1,
				preserve_headers : !0,
				crop : !1
			},
			send_file_name : !0,
			send_chunk_number : !0
		}, p.call(this, a, null, !0), A = new g.QueueProgress, g.extend(this, {
			id : C,
			uid : C,
			state : g.STOPPED,
			features : {},
			runtime : null,
			files : D,
			settings : y,
			total : A,
			init : function() {
				var a = this;
				return "function" == typeof y.preinit ? y.preinit(a) : g.each(y.preinit, function(b, c) {
						a.bind(c, b)
					}), m.call(this), y.browse_button && y.url ? void n.call(this, y, function(c) {
						"function" == typeof y.init ? y.init(a) : g.each(y.init, function(b, c) {
							a.bind(c, b)
						}), c ? (a.runtime = b.Runtime.getInfo(k()).type, a.trigger("Init", {
							runtime : a.runtime
						}), a.trigger("PostInit")) : a.trigger("Error", {
							code : g.INIT_ERROR,
							message : g.translate("Init error.")
						})
					}) : void this.trigger("Error", {
						code : g.INIT_ERROR,
						message : g.translate("Init error.")
					})
			},
			setOption : function(a, b) {
				p.call(this, a, b, !this.runtime)
			},
			getOption : function(a) {
				return a ? y[a] : y
			},
			refresh : function() {
				F.length && g.each(F, function(a) {
					a.trigger("Refresh")
				}), this.trigger("Refresh")
			},
			start : function() {
				this.state != g.STARTED && (this.state = g.STARTED, this.trigger("StateChanged"), h.call(this))
			},
			stop : function() {
				this.state != g.STOPPED && (this.state = g.STOPPED, this.trigger("StateChanged"), this.trigger("CancelUpload"))
			},
			disableBrowse : function() {
				H = arguments[0] !== c ? arguments[0] : !0, F.length && g.each(F, function(a) {
					a.disable(H)
				}), this.trigger("DisableBrowse", H)
			},
			getFile : function(a) {
				var b;
				for (b = D.length - 1; b >= 0; b--)
					if (D[b].id === a) return D[b]
			},
			addFile : function(a, c) {
				function d(a, c) {
					var d = [];
					b.each(j.settings.filters, function(b, c) {
						f[c] && d.push(function(d) {
							f[c].call(j, b, a, function(a) {
								d(!a)
							})
						})
					}), b.inSeries(d, c)
				}
				function h(a) {
					var f = b.typeOf(a);
					if (a instanceof b.File) {
						if (!a.ruid && !a.isDetached()) {
							if (!i) return !1;
							a.ruid = i, a.connectRuntime(i)
						}
						h(new g.File(a))
					} else
						a instanceof b.Blob ? (h(a.getSource()), a.destroy()) : a instanceof g.File ? (c && (a.name = c), l.push(function(b) {
							d(a, function(c) {
								c || (D.push(a), m.push(a), j.trigger("FileFiltered", a)), e(b, 1)
							})
						})) : -1 !== b.inArray(f, [ "file", "blob" ]) ? h(new b.File(null, a)) : "node" === f && "filelist" === b.typeOf(a.files) ? b.each(a.files, h) : "array" === f && (c = null, b.each(a, h))
				}
				var i,
					j = this,
					l = [],
					m = [];
				i = k(), h(a), l.length && b.inSeries(l, function() {
					m.length && j.trigger("FilesAdded", m)
				})
			},
			removeFile : function(a) {
				for (var b = "string" == typeof a ? a : a.id, c = D.length - 1; c >= 0; c--)
					if (D[c].id === b) return this.splice(c, 1)[0]
			},
			splice : function(a, b) {
				var d = D.splice(a === c ? 0 : a, b === c ? D.length : b),
					e = !1;
				return this.state == g.STARTED && (g.each(d, function(a) {
						return a.status === g.UPLOADING ? (e = !0, !1) : void 0
					}), e && this.stop()), this.trigger("FilesRemoved", d), g.each(d, function(a) {
						a.destroy()
					}), e && this.start(), d
			},
			dispatchEvent : function(a) {
				var b,
					c;
				if (a = a.toLowerCase(), b = this.hasEventListener(a)) {
					b.sort(function(a, b) {
						return b.priority - a.priority
					}), c = [].slice.call(arguments), c.shift(), c.unshift(this);
					for (var d = 0; d < b.length; d++)
						if (b[d].fn.apply(b[d].scope, c) === !1) return !1
				}
				return !0
			},
			bind : function(a, b, c, d) {
				g.Uploader.prototype.bind.call(this, a, b, d, c)
			},
			destroy : function() {
				this.trigger("Destroy"), y = A = null, this.unbindAll()
			}
		})
	}, g.Uploader.prototype = b.EventTarget.instance, g.File = function() {
		function a(a) {
			g.extend(this, {
				id : g.guid(),
				name : a.name || a.fileName,
				type : a.type || "",
				size : a.size || a.fileSize,
				origSize : a.size || a.fileSize,
				loaded : 0,
				percent : 0,
				status : g.QUEUED,
				lastModifiedDate : a.lastModifiedDate || (new Date).toLocaleString(),
				getNative : function() {
					var a = this.getSource().getSource();
					return -1 !== b.inArray(b.typeOf(a), [ "blob", "file" ]) ? a : null
				},
				getSource : function() {
					return c[this.id] ? c[this.id] : null
				},
				destroy : function() {
					var a = this.getSource();
					a && (a.destroy(),
					delete c[this.id]
					)
				}
			}), c[this.id] = a
		}
		var c = {};
		return a
	}(), g.QueueProgress = function() {
		var a = this;
		a.size = 0, a.loaded = 0, a.uploaded = 0, a.failed = 0, a.queued = 0, a.percent = 0, a.bytesPerSec = 0, a.reset = function() {
			a.size = a.loaded = a.uploaded = a.failed = a.queued = a.percent = a.bytesPerSec = 0
		}
	}, a.plupload = g
}(window, mOxie), function(a, b) {
	function c(a) {
		return plupload.translate(a) || a
	}
	function d(b, d) {
		d.contents().each(function(b, c) {
			c = a(c), c.is(".plupload") || c.remove()
		}), d.prepend('<div class="plupload_wrapper plupload_scroll"><div id="' + b + '_container" class="plupload_container"><div class="plupload"><div class="plupload_header"><div class="plupload_header_content"><div class="plupload_header_title">' + c("Select files") + '</div><div class="plupload_header_text">' + c("Add files to the upload queue and click the start button.") + '</div></div></div><div class="plupload_content"><div class="plupload_filelist_header"><div class="plupload_file_name">' + c("Filename") + '</div><div class="plupload_file_action">&nbsp;</div><div class="plupload_file_status"><span>' + c("Status") + '</span></div><div class="plupload_file_size">' + c("Size") + '</div><div class="plupload_clearer">&nbsp;</div></div><ul id="' + b + '_filelist" class="plupload_filelist"></ul><div class="plupload_filelist_footer"><div class="plupload_file_name"><div class="plupload_buttons"><a href="#" class="plupload_button plupload_add" id="' + b + '_browse">' + c("Add Files") + '</a><a href="#" class="plupload_button plupload_start">' + c("Start Upload") + '</a></div><span class="plupload_upload_status"></span></div><div class="plupload_file_action"></div><div class="plupload_file_status"><span class="plupload_total_status">0%</span></div><div class="plupload_file_size"><span class="plupload_total_file_size">0 b</span></div><div class="plupload_progress"><div class="plupload_progress_container"><div class="plupload_progress_bar"></div></div></div><div class="plupload_clearer">&nbsp;</div></div></div></div></div><input type="hidden" id="' + b + '_count" name="' + b + '_count" value="0" /></div>')
	}
	var e = {};
	a.fn.pluploadQueue = function(f) {
		return f ? (this.each(function() {
			function g(b) {
				var c;
				b.status == plupload.DONE && (c = "plupload_done"), b.status == plupload.FAILED && (c = "plupload_failed"), b.status == plupload.QUEUED && (c = "plupload_delete"), b.status == plupload.UPLOADING && (c = "plupload_uploading");var d = a("#" + b.id).attr("class", c).find("a").css("display", "block");
				b.hint && d.attr("title", b.hint)
			}
			function h() {
				a("span.plupload_total_status", l).html(k.total.percent + "%"), a("div.plupload_progress_bar", l).css("width", k.total.percent + "%"), a("span.plupload_upload_status", l).html(b.sprintf(c("Uploaded %d/%d files"), k.total.uploaded, k.files.length))
			}
			function i() {
				var d,
					e = a("ul.plupload_filelist", l).html(""),
					f = 0;
				a.each(k.files, function(b, c) {
					d = "", c.status == plupload.DONE && (c.target_name && (d += '<input type="hidden" name="' + m + "_" + f + '_tmpname" value="' + plupload.xmlEncode(c.target_name) + '" />'), d += '<input type="hidden" name="' + m + "_" + f + '_name" value="' + plupload.xmlEncode(c.name) + '" />', d += '<input type="hidden" name="' + m + "_" + f + '_status" value="' + (c.status == plupload.DONE ? "done" : "failed") + '" />', f++, a("#" + m + "_count").val(f)), e.append('<li id="' + c.id + '"><div class="plupload_file_name"><span>' + c.name + '</span></div><div class="plupload_file_action"><a href="#"></a></div><div class="plupload_file_status">' + c.percent + '%</div><div class="plupload_file_size">' + plupload.formatSize(c.size) + '</div><div class="plupload_clearer">&nbsp;</div>' + d + "</li>"), g(c), a("#" + c.id + ".plupload_delete a").click(function(b) {
						a("#" + c.id).remove(), k.removeFile(c), b.preventDefault()
					})
				}), a("span.plupload_total_file_size", l).html(plupload.formatSize(k.total.size)), 0 === k.total.queued ? a("span.plupload_add_text", l).html(c("Add Files")) : a("span.plupload_add_text", l).html(b.sprintf(c("%d files queued"), k.total.queued)), a("a.plupload_start", l).toggleClass("plupload_disabled", k.files.length == k.total.uploaded + k.total.failed), e[0].scrollTop = e[0].scrollHeight, h(), !k.files.length && k.features.dragdrop && k.settings.dragdrop && a("#" + m + "_filelist").append('<li class="plupload_droptext">' + c("Drag files here.") + "</li>")
			}
			function j() {
				delete e[m]
				, k.destroy(), l.html(n), k = l = n = null
			}
			var k,
				l,
				m,
				n;
			l = a(this), m = l.attr("id"), m || (m = plupload.guid(), l.attr("id", m)), n = l.html(), d(m, l), f = a.extend({
				dragdrop : !0,
				browse_button : m + "_browse",
				container : m
			}, f), f.dragdrop && (f.drop_element = m + "_filelist"), k = new plupload.Uploader(f), e[m] = k, k.bind("UploadFile", function(b, c) {
				a("#" + c.id).addClass("plupload_current_file")
			}), k.bind("Init", function(b, c) {
				!f.unique_names && f.rename && l.on("click", "#" + m + "_filelist div.plupload_file_name span", function(c) {
					var d,
						e,
						f,
						g = a(c.target),
						h = "";
					d = b.getFile(g.parents("li")[0].id), f = d.name, e = /^(.+)(\.[^.]+)$/.exec(f), e && (f = e[1], h = e[2]), g.hide().after('<input type="text" />'), g.next().val(f).focus().blur(function() {
						g.show().next().remove()
					}).keydown(function(b) {
						var c = a(this);
						13 == b.keyCode && (b.preventDefault(), d.name = c.val() + h, g.html(d.name), c.blur())
					})
				}), a("#" + m + "_container").attr("title", "Using runtime: " + c.runtime), a("a.plupload_start", l).click(function(b) {
					a(this).hasClass("plupload_disabled") || k.start(), b.preventDefault()
				}), a("a.plupload_stop", l).click(function(a) {
					a.preventDefault(), k.stop()
				}), a("a.plupload_start", l).addClass("plupload_disabled")
			}), k.bind("Error", function(b, d) {
				var e,
					f = d.file;
				f && (e = d.message, d.details && (e += " (" + d.details + ")"), d.code == plupload.FILE_SIZE_ERROR && alert(c("Error: File too large:") + " " + f.name), d.code == plupload.FILE_EXTENSION_ERROR && alert(c("Error: Invalid file extension:") + " " + f.name), f.hint = e, a("#" + f.id).attr("class", "plupload_failed").find("a").css("display", "block").attr("title", e)), d.code === plupload.INIT_ERROR && setTimeout(function() {
					j()
				}, 1)
			}), k.bind("PostInit", function(b) {
				b.settings.dragdrop && b.features.dragdrop && a("#" + m + "_filelist").append('<li class="plupload_droptext">' + c("Drag files here.") + "</li>")
			}), k.init(), k.bind("StateChanged", function() {
				k.state === plupload.STARTED ? (a("li.plupload_delete a,div.plupload_buttons", l).hide(), k.disableBrowse(!0), a("span.plupload_upload_status,div.plupload_progress,a.plupload_stop", l).css("display", "block"), a("span.plupload_upload_status", l).html("Uploaded " + k.total.uploaded + "/" + k.files.length + " files"), f.multiple_queues && a("span.plupload_total_status,span.plupload_total_file_size", l).show()) : (i(), a("a.plupload_stop,div.plupload_progress", l).hide(), a("a.plupload_delete", l).css("display", "block"), f.multiple_queues && k.total.uploaded + k.total.failed == k.files.length && (a(".plupload_buttons,.plupload_upload_status", l).css("display", "inline"), k.disableBrowse(!1), a(".plupload_start", l).addClass("plupload_disabled"), a("span.plupload_total_status,span.plupload_total_file_size", l).hide()))
			}), k.bind("FilesAdded", i), k.bind("FilesRemoved", function() {
				var b = a("#" + m + "_filelist").scrollTop();
				i(), a("#" + m + "_filelist").scrollTop(b)
			}), k.bind("FileUploaded", function(a, b) {
				g(b)
			}), k.bind("UploadProgress", function(b, c) {
				a("#" + c.id + " div.plupload_file_status", l).html(c.percent + "%"), g(c), h()
			}), f.setup && f.setup(k)
		}), this) : e[a(this[0]).attr("id")]
	}
}(jQuery, mOxie), plupload.addI18n({
	"Stop Upload" : "停止上传",
	"Upload URL might be wrong or doesn't exist." : "上传的URL可能是错误的或不存在。",
	tb : "tb",
	Size : "大小",
	Close : "关闭",
	"Init error." : "初始化错误。",
	"Add files to the upload queue and click the start button." : "将文件添加到上传队列，然后点击”开始上传“按钮。",
	Filename : "文件名",
	"Image format either wrong or not supported." : "图片格式错误或者不支持。",
	Status : "状态",
	"HTTP Error." : "HTTP 错误。",
	"Start Upload" : "开始上传",
	mb : "mb",
	kb : "kb",
	"Duplicate file error." : "重复文件错误。",
	"File size error." : "文件大小错误。",
	"N/A" : "N/A",
	gb : "gb",
	"Error: Invalid file extension:" : "错误：无效的文件扩展名:",
	"Select files" : "选择文件",
	"%s already present in the queue." : "%s 已经在当前队列里。",
	"File: %s" : "文件: %s",
	b : "b",
	"Uploaded %d/%d files" : "已上传 %d/%d 个文件",
	"Upload element accepts only %d file(s) at a time. Extra files were stripped." : "每次只接受同时上传 %d 个文件，多余的文件将会被删除。",
	"%d files queued" : "%d 个文件加入到队列",
	"File: %s, size: %d, max file size: %d" : "文件: %s, 大小: %d, 最大文件大小: %d",
	"Drag files here." : "把文件拖到这里。",
	"Runtime ran out of available memory." : "运行时已消耗所有可用内存。",
	"File count error." : "文件数量错误。",
	"File extension error." : "文件扩展名错误。",
	"Error: File too large:" : "错误: 文件太大:",
	"Add Files" : "增加文件"
}), function(a) {
	a.initPanel = function(b) {
		b = a.extend({
			onRefresh : function() {},
			onSetting : function() {}
		}, b), a(document).on("mouseover mouseout", ".ue-panel .panel-heading", function() {
			a(this).find(".ue-panel-tools").toggle()
		}), a(document).on("click", ".ue-panel-tools .fa-refresh", function() {
			var c = a(this);
			b.onRefresh(c)
		});a(document).on("click", ".ue-panel-tools .fa-expand", function() {
			a("body").css("position", "relative");
			var c = a(this),
				d = c.parents(".ue-panel").eq(0);
			d.addClass("fullscreen"), c.removeClass("fa-expand").addClass("fa-compress"), b.onRefresh(c)
		}), a(document).on("click", ".ue-panel-tools .fa-compress", function() {
			var c = a(this),
				d = c.parents(".ue-panel").eq(0);
			d.removeClass("fullscreen"), c.removeClass("fa-compress").addClass("fa-expand"), b.onRefresh(c)
		}), a(document).on("click", ".ue-panel-tools .fa-times", function() {
			a(this).parents(".ue-panel").eq(0).remove()
		})
	}, a.initPanel.destory = function() {
		a(document).off("mouseover mouseout", ".ue-panel .panel-heading")
	}
}(jQuery), !function(a) {
	"use strict";
	a.fn.toTop = function(b) {
		var c = this,
			d = a(window),
			e = a("html, body"),
			f = a.extend({
				autohide : !0,
				offset : 420,
				speed : 500,
				position : !0,
				right : 15,
				bottom : 15
			}, b);
		c.css({
			cursor : "pointer"
		}), f.autohide && c.css("display", "none"), f.position && c.css({
			position : "fixed",
			right : f.right,
			bottom : f.bottom
		}), c.click(function() {
			e.animate({
				scrollTop : 0
			}, f.speed)
		}), d.scroll(function() {
			var a = d.scrollTop();
			f.autohide && (a > f.offset ? c.fadeIn(f.speed) : c.fadeOut(f.speed))
		})
	}
}(jQuery), function(a, b) {
	if (!a) return b;
	var c = function() {
		this.el = b, this.items = b, this.sizes = [], this.max = [ 0, 0 ], this.current = 0, this.interval = b, this.opts = {
			speed : 500,
			delay : 3e3,
			complete : b,
			keys : !b,
			dots : b,
			fluid : b
		};
		var c = this;
		this.init = function(b, c) {
			return this.el = b, this.ul = b.children("ul"), this.max = [ b.outerWidth(), b.outerHeight() ], this.items = this.ul.children("li").each(this.calculate), this.opts = a.extend(this.opts, c), this.setup(), this
		}, this.calculate = function(b) {
			var d = a(this),
				e = d.outerWidth(),
				f = d.outerHeight();
			c.sizes[b] = [ e, f ], e > c.max[0] && (c.max[0] = e), f > c.max[1] && (c.max[1] = f)
		}, this.setup = function() {
			if (this.el.css({
					overflow : "hidden",
					width : c.max[0],
					height : this.items.first().outerHeight()
				}), this.ul.css({
					width : 100 * this.items.length + "%",
					position : "relative"
				}), this.items.css("width", 100 / this.items.length + "%"), this.opts.delay !== b && (this.start(), this.el.hover(this.stop, this.start)), this.opts.keys && a(document).keydown(this.keys), this.opts.dots && this.dots(), this.opts.fluid) {
				var d = function() {
					c.el.css("width", Math.min(Math.round(c.el.outerWidth() / c.el.parent().outerWidth() * 100), 100) + "%")
				};
				d(), a(window).resize(d)
			}
			this.opts.arrows && this.el.parent().append('<p class="arrows"><span class="prev">←</span><span class="next">→</span></p>').find(".arrows span").click(function() {
				a.isFunction(c[this.className]) && c[this.className]()
			}), a.event.swipe && this.el.on("swipeleft", c.prev).on("swiperight", c.next)
		}, this.move = function(b, d) {
			this.items.eq(b).length || (b = 0), 0 > b && (b = this.items.length - 1);
			var e = this.items.eq(b),
				f = {
					height : e.outerHeight()
				},
				g = d ? 5 : this.opts.speed;
			this.ul.is(":animated") || (c.el.find(".dot:eq(" + b + ")").addClass("active").siblings().removeClass("active"), this.el.animate(f, g) && this.ul.animate(a.extend({
				left : "-" + b + "00%"
			}, f), g, function(e) {
				c.current = b, a.isFunction(c.opts.complete) && !d && c.opts.complete(c.el)
			}))
		}, this.start = function() {
			c.interval = setInterval(function() {
				c.move(c.current + 1)
			}, c.opts.delay)
		}, this.stop = function() {
			return c.interval = clearInterval(c.interval), c
		}, this.keys = function(b) {
			var d = b.which,
				e = {
					37 : c.prev,
					39 : c.next,
					27 : c.stop
				};
			a.isFunction(e[d]) && e[d]()
		}, this.next = function() {
			return c.stop().move(c.current + 1)
		}, this.prev = function() {
			return c.stop().move(c.current - 1)
		}, this.dots = function() {
			var b = '<ol class="dots">';
			a.each(this.items, function(a) {
				b += '<li class="dot' + (1 > a ? " active" : "") + '">' + (a + 1) + "</li>"
			}), b += "</ol>", this.el.addClass("has-dots").append(b).find(".dot").click(function() {
				c.move(a(this).index())
			})
		}
	};
	a.fn.unslider = function(b) {
		var d = this.length;
		return this.each(function(e) {
			var f = a(this),
				g = (new c).init(f, b);
			f.data("unslider" + (d > 1 ? "-" + (e + 1) : ""), g)
		})
	}
}(window.jQuery, !1), function(a) {
	a.fn.vmenu = function(b) {
		function c(a) {
			var d = a.parent("ul");
			if (!d.parent().is(".ue-vmenu")) {
				var e = d.parent("li");
				d.slideDown(b.speed, function() {
					e.addClass("on"), e.children(".inactive").removeClass(), e.children("a").addClass("active")
				}), c(e)
			}
		}
		var d = a(this),
			e = d.find("ul li");
		window.location;
		b = jQuery.extend({
			speed : 220,
			autostart : 0,
			autohide : 1
		}, b);
		var f = e.children("ul").parent("li").children("a");
		f.addClass("inactive"), f.prepend('<i class="ue-vmenu-icon"></i>');
		var g = d.find("a[data-role=leaf]");
		g.prepend('<i class="ue-vmenu-icon leaf"></i>'), f.unbind("click").click(function() {
			var c = a(this);
			b.autohide && c.parent().parent().find(".active").next().slideUp(b.speed / 1.2, function() {
				a(this).parent("li").children("a").addClass("inactive").removeClass("active")
			}), c.hasClass("active") ? c.attr("class", "inactive").next().slideUp(b.speed) : c.next().slideDown(b.speed, function() {
				c.addClass("active").removeClass("inactive")
			})
		}), d.unbind("click").on("click", "a", function() {
			var c = a(this),
				e = c.parent(),
				f = e.siblings(".on");
			b.autohide && f.removeClass("on"), c.find(".ue-vmenu-icon").length && !c.find(".ue-vmenu-icon.leaf").length ? e.hasClass("on") ? e.removeClass("on") : e.addClass("on") : (d.find(".curr").removeClass("curr"), e.addClass("curr"))
		}), b.autostart && e.children("a").each(function() {
			var b = a(this).parent("li");
			c(b)
		})
	}
}(jQuery), function(a) {
	var b = a(".ue-navbar");
	b.length && (b.find(a(".navbar-nav>li")).click(function() {
		a(".admin").removeClass("active"), b.find(a(".navbar-collapse li.active")).removeClass("active"), a(this).addClass("active")
	}), b.find(a(".admin")).click(function() {
		b.find(a(".navbar-collapse li.active")).removeClass("active"), a(".admin").addClass("active")
	}))
}(jQuery), function(a) {
	var b = function(b, c) {
		this.defaults = a.extend(this.defaults, c), this.container = b, this.initialize(b)
	};
	b.prototype = {
		defaults : {
			value : 0,
			minValue : 20,
			maxValue : 100,
			bindField : null,
			errorTip : "top",
			callback : function(a) {}
		},
		container : null,
		initialize : function(b) {
			if (!(this.defaults.value > this.defaults.maxValue)) {
				this.defaults.value < this.defaults.minValue && (this.defaults.value = this.defaults.minValue), b.append('<div class="ue-scroll-bar"><div class="ue-scroll-track"></div><div class="ue-scroll-thumb"></div></div>');
				var c = a(".ue-scroll-thumb").width(),
					d = (a(".ue-scroll-bar").width() - c) * ((this.defaults.value - this.defaults.minValue) / (this.defaults.maxValue - this.defaults.minValue));
				a(".ue-scroll-track").css("width", d + "px"), a(".ue-scroll-thumb").css("margin-left", d - 1 + "px"), this.setValue(), a(this.defaults.bindField).val(this.defaults.value);
				var e = this;
				a(this.defaults.bindField).on("input change", function(b) {
					var d = a(this).val(),
						f = null;
					if (isNaN(d))
						f = "只能输入数字";
					else if (d >= e.defaults.minValue && d <= e.defaults.maxValue) {
						a(this).popover("destroy"), e.defaults.value = d;
						var g = (a(".ue-scroll-bar").width() - c) * ((e.defaults.value - e.defaults.minValue) / (e.defaults.maxValue - e.defaults.minValue));
						a(".ue-scroll-track").css("width", g + "px"), a(".ue-scroll-thumb").css("margin-left", g - 1 + "px")
					} else
						f = "不在取值范围";
					if (f) {
						var h = a(this).data("bs.popover");
						h && (h.tip().remove(), a(this).removeData("bs.popover")), a(this).popover({
							content : f,
							placement : e.defaults.errorTip,
							trigger : "manual"
						}).popover("show")
					}
				})
			}
		},
		setValue : function() {
			var b,
				c = !1,
				d = this,
				e = a(".ue-scroll-thumb"),
				f = a(".ue-scroll-track"),
				g = a(".ue-scroll-bar");
			e.mousedown(function() {
				c = !0, a(document.body).mousemove(function(h) {
					0 != c && (e.addClass("selected"), b = h.clientX - g.offset().left, e.css("margin-left", b + "px"), f.css("width", b + "px"), a(d.defaults.bindField).val(d.defaults.value), a(d.defaults.bindField).popover("destroy"), b + parseInt(e.width()) >= g.width() ? (e.css("margin-left", g.width() - parseInt(e.width()) - 1 + "px"), f.css("width", g.width() + "px"), d.defaults.value = d.defaults.maxValue) : 0 >= b ? (e.css("margin-left", "-1px"), f.css("width", "0px"), d.defaults.value = d.defaults.minValue) : d.defaults.value = Math.round((d.defaults.maxValue - d.defaults.minValue) * b / (g.width() - e.width())) + d.defaults.minValue, d.defaults.callback && d.defaults.callback(d.defaults.value))
				})
			}), a(document.body).mouseup(function() {
				c = !1, e.removeClass("selected"), d.defaults.value = Math.round(100 * (b / g.width())), d.defaults.value >= d.defaults.maxValue && (d.defaults.value = d.defaults.maxValue), d.defaults.value <= d.defaults.minValue && (d.defaults.value = d.defaults.minValue)
			})
		}
	}, a.fn.scrollbar = function(c) {
		new b(a(this), c)
	}
}(jQuery), function(a) {
	a.fn.scrollbox = function(b) {
		var c = {
			linear : !1,
			startDelay : 2,
			delay : 3,
			step : 5,
			speed : 32,
			switchItems : 1,
			direction : "vertical",
			distance : "auto",
			autoPlay : !0,
			onMouseOverPause : !0,
			paused : !1,
			queue : null
		};
		return b = a.extend(c, b), b.scrollOffset = "vertical" === b.direction ? "scrollTop" : "scrollLeft", b.queue && (b.queue = a("#" + b.queue)), this.each(function() {
				var c,
					d,
					e,
					f,
					g,
					h,
					i = a(this),
					j = null,
					k = null,
					l = !1;
				b.onMouseOverPause && (i.bind("mouseover", function() {
					l = !0
				}), i.bind("mouseout", function() {
					l = !1
				})), c = i.children("ul:first-child"), g = function() {
					if (!l) {
						var a,
							d,
							f,
							g,
							h;
						if (a = c.children("li:first-child"), g = "auto" !== b.distance ? b.distance : "vertical" === b.direction ? a.height() : a.width(), b.linear ? f = Math.min(i[0][b.scrollOffset] + b.step, g) : (h = Math.max(3, parseInt(.3 * (g - i[0][b.scrollOffset]), 10)), f = Math.min(i[0][b.scrollOffset] + h, g)), i[0][b.scrollOffset] = f, f >= g) {
							for (d = 0; d < b.switchItems; d++) b.queue && b.queue.hasChildNodes() && b.queue.getElementsByTagName("li").length > 0 ? (c.append(b.queue.getElementsByTagName("li")[0]), c.remove(c.children("li:first-child"))) : c.append(c.children("li:first-child"));
							i[0][b.scrollOffset] = 0, clearInterval(j), b.autoPlay && (k = setTimeout(e, 1e3 * b.delay))
						}
					}
				}, h = function() {
					if (!l) {
						var a,
							d,
							f,
							g,
							h,
							m;
						if (0 === i[0][b.scrollOffset]) {
							for (f = c.children("li").length, d = 0; d < b.switchItems; d++) c.children("li:last-child").insertBefore(c.children("li:first-child"));
							a = i.children("li:first-child"), h = "auto" !== b.distance ? b.distance : "vertical" === b.direction ? a.height() : a.width(), i[0][b.scrollOffset] = h
						}
						b.linear ? g = Math.max(i[0][b.scrollOffset] - b.step, 0) : (m = Math.max(3, parseInt(.3 * i[0][b.scrollOffset], 10)), g = Math.max(i[0][b.scrollOffset] - m, 0)), i[0][b.scrollOffset] = g, 0 === g && (clearInterval(j), b.autoPlay && (k = setTimeout(e, 1e3 * b.delay)))
					}
				}, e = function() {
					clearInterval(j), j = setInterval(g, b.speed)
				}, d = function() {
					clearInterval(j), j = setInterval(h, b.speed)
				}, f = function(a) {
					b.delay = a || b.delay, clearTimeout(k), b.autoPlay && (k = setTimeout(e, 1e3 * b.delay))
				}, b.autoPlay && (k = setTimeout(e, 1e3 * b.startDelay)), i.bind("resetClock", function(a) {
					f(a)
				}), i.bind("forward", function() {
					clearTimeout(k), e()
				}), i.bind("backward", function() {
					clearTimeout(k), d()
				}), i.bind("speedUp", function(a) {
					"undefined" == typeof a && (a = Math.max(1, parseInt(b.speed / 2, 10))), b.speed = a
				}), i.bind("speedDown", function(a) {
					"undefined" == typeof a && (a = 2 * b.speed), b.speed = a
				})
			})
	}
}(jQuery), function(a) {
	var b = !1,
		c = !1,
		d = {
			isUrl : function(a) {
				var b = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
				return b.test(a) ? !0 : !1
			},
			loadContent : function(a, b) {
				a.html(b)
			},
			addPrefix : function(a) {
				var b = a.attr("id"),
					c = a.attr("class");
				"string" == typeof b && "" !== b && a.attr("id", b.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")), "string" == typeof c && "" !== c && "sidr-inner" !== c && a.attr("class", c.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")), a.removeAttr("style")
			},
			execute : function(d, f, g) {
				"function" == typeof f ? (g = f, f = "sidr") : f || (f = "sidr");
				var h,
					i,
					j,
					k = a("#" + f),
					l = a(k.data("body")),
					m = a("html"),
					n = k.outerWidth(!0),
					o = k.data("speed"),
					p = k.data("side"),
					q = k.data("displace"),
					r = k.data("onOpen"),
					s = k.data("onClose"),
					t = "sidr" === f ? "sidr-open" : "sidr-open " + f + "-open";
				if ("open" === d || "toggle" === d && !k.is(":visible")) {
					if (k.is(":visible") || b) return;
					if (c !== !1) return void e.close(c, function() {
							e.open(f)
						});
					b = !0, "left" === p ? (h = {
						left : n + "px"
					}, i = {
						left : "0px"
					}) : (h = {
						right : n + "px"
					}, i = {
						right : "0px"
					}), l.is("body") && (j = m.scrollTop(), m.css("overflow-x", "hidden").scrollTop(j)), q ? l.addClass("sidr-animating").css({
						width : l.width(),
						position : "absolute"
					}).animate(h, o, function() {
						a(this).addClass(t)
					}) : setTimeout(function() {
						a(this).addClass(t)
					}, o), k.css("display", "block").animate(i, o, function() {
						b = !1, c = f, "function" == typeof g && g(f), l.removeClass("sidr-animating")
					}), r()
				} else {
					if (!k.is(":visible") || b) return;
					b = !0, "left" === p ? (h = {
						left : 0
					}, i = {
						left : "-" + n + "px"
					}) : (h = {
						right : 0
					}, i = {
						right : "-" + n + "px"
					}), l.is("body") && (j = m.scrollTop(), m.removeAttr("style").scrollTop(j)), l.addClass("sidr-animating").animate(h, o).removeClass(t), k.animate(i, o, function() {
						k.removeAttr("style").hide(), l.removeAttr("style"), a("html").removeAttr("style"), b = !1, c = !1, "function" == typeof g && g(f), l.removeClass("sidr-animating")
					}), s()
				}
			}
		},
		e = {
			open : function(a, b) {
				d.execute("open", a, b)
			},
			close : function(a, b) {
				d.execute("close", a, b)
			},
			toggle : function(a, b) {
				d.execute("toggle", a, b)
			},
			toogle : function(a, b) {
				d.execute("toggle", a, b)
			}
		};
	a.sidr = function(b) {
		return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof b && "string" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.sidr") : e.toggle.apply(this, arguments)
	}, a.fn.sidr = function(b) {
		var c = a.extend({
				name : "sidr",
				speed : 200,
				side : "left",
				source : null,
				renaming : !0,
				body : "body",
				displace : !0,
				onOpen : function() {},
				onClose : function() {}
			}, b),
			f = c.name,
			g = a("#" + f);
		if (0 === g.length && (g = a("<div />").attr("id", f).appendTo(a("body"))), g.addClass("sidr").addClass(c.side).data({
				speed : c.speed,
				side : c.side,
				body : c.body,
				displace : c.displace,
				onOpen : c.onOpen,
				onClose : c.onClose
			}), "function" == typeof c.source) {
			var h = c.source(f);
			d.loadContent(g, h)
		} else if ("string" == typeof c.source && d.isUrl(c.source)) a.get(c.source, function(a) {
				d.loadContent(g, a)
			});
		else if ("string" == typeof c.source) {
			var i = "",
				j = c.source.split(",");
			if (a.each(j, function(b, c) {
					i += '<div class="sidr-inner">' + a(c).html() + "</div>"
				}), c.renaming) {
				var k = a("<div />").html(i);
				k.find("*").each(function(b, c) {
					var e = a(c);
					d.addPrefix(e)
				}), i = k.html()
			}
			d.loadContent(g, i)
		} else null !== c.source && a.error("Invalid Sidr Source");
		return this.each(function() {
			var b = a(this),
				c = b.data("sidr");
			c || (b.data("sidr", f), "ontouchstart" in document.documentElement ? (b.bind("touchstart", function(a) {
				a.originalEvent.touches[0];
				this.touched = a.timeStamp
			}), b.bind("touchend", function(a) {
				var b = Math.abs(a.timeStamp - this.touched);
				200 > b && (a.preventDefault(), e.toggle(f))
			})) : b.click(function(a) {
				a.preventDefault(), e.toggle(f)
			}))
		})
	}
}(jQuery), function(a) {
	a.sticky = function(b, c, d) {
		var e = {
			speed : "fast",
			autoclose : 1e3,
			duplicates : !1,
			position : "center",
			style : "success"
		};
		c && a.extend(e, c);
		var f = Math.floor(99999 * Math.random()),
			g = (Math.floor(99999 * Math.random()), a(".ue-sticky-queue." + e.position));
		g.length ? e.duplicates || g.empty() : (g = a('<div class="ue-sticky-queue ' + e.position + '" ></div>'), a("body").append(g));
		var h = a('<div class="ue-sticky " id="' + f + '"></div>');
		g.prepend(h), h.append('<span class="ue-sticky-close">X</span>'), h.append('<div class="ue-sticky-note">' + b + "</div>"), h.css("height", "auto"), h.addClass(e.style), h.slideDown(e.speed);
		var i = h.width() / -2;
		g.css("margin-left", i), h.ready(function() {
			e.autoclose && h.delay(e.autoclose).fadeOut(e.speed)
		}), a(".ue-sticky-close").click(function() {
			a(this).parent().dequeue().fadeOut(e.speed)
		});
		var j = {
			id : f,
			position : e.position,
			style : e.style
		};
		return d ? void d(j) : j
	}
}(jQuery), function(a) {
	"use strict";
	var b = {
		init : function(c) {
			return this.each(function() {
				this.self = a(this), b.destroy.call(this.self), this.opt = a.extend(!0, {}, a.fn.raty.defaults, c), b._adjustCallback.call(this), b._adjustNumber.call(this), b._adjustHints.call(this), this.opt.score = b._adjustedScore.call(this, this.opt.score), "img" !== this.opt.starType && b._adjustStarType.call(this), b._adjustPath.call(this), b._createStars.call(this), this.opt.cancel && b._createCancel.call(this), this.opt.precision && b._adjustPrecision.call(this), b._createScore.call(this), b._apply.call(this, this.opt.score), b._setTitle.call(this, this.opt.score), b._target.call(this, this.opt.score), this.opt.readOnly ? b._lock.call(this) : (this.style.cursor = "pointer", b._binds.call(this))
			})
		},
		_adjustCallback : function() {
			for (var a = [ "number", "readOnly", "score", "scoreName", "target", "path" ], b = 0; b < a.length; b++) "function" == typeof this.opt[a[b]] && (this.opt[a[b]] = this.opt[a[b]].call(this))
		},
		_adjustedScore : function(a) {
			return a ? b._between(a, 0, this.opt.number) : a
		},
		_adjustHints : function() {
			if (this.opt.hints || (this.opt.hints = []), this.opt.halfShow || this.opt.half)
				for (var a = this.opt.precision ? 10 : 2, b = 0; b < this.opt.number; b++) {
					var c = this.opt.hints[b];
					"[object Array]" !== Object.prototype.toString.call(c) && (c = [ c ]), this.opt.hints[b] = [];
					for (var d = 0; a > d; d++) {
						var e = c[d],
							f = c[c.length - 1];
						void 0 === f && (f = null), this.opt.hints[b][d] = void 0 === e ? f : e
					}
			}
		},
		_adjustNumber : function() {
			this.opt.number = b._between(this.opt.number, 1, this.opt.numberMax)
		},
		_adjustPath : function() {
			this.opt.path = this.opt.path || "", this.opt.path && "/" !== this.opt.path.charAt(this.opt.path.length - 1) && (this.opt.path += "/")
		},
		_adjustPrecision : function() {
			this.opt.half = !0
		},
		_adjustStarType : function() {
			var a = [ "cancelOff", "cancelOn", "starHalf", "starOff", "starOn" ];
			this.opt.path = "";
			for (var b = 0; b < a.length; b++) this.opt[a[b]] = this.opt[a[b]].replace(".", "-")
		},
		_apply : function(a) {
			b._fill.call(this, a), a && (a > 0 && this.score.val(a), b._roundStars.call(this, a))
		},
		_between : function(a, b, c) {
			return Math.min(Math.max(parseFloat(a), b), c)
		},
		_binds : function() {
			this.cancel && (b._bindOverCancel.call(this), b._bindClickCancel.call(this), b._bindOutCancel.call(this)), b._bindOver.call(this), b._bindClick.call(this), b._bindOut.call(this)
		},
		_bindClick : function() {
			var c = this;
			c.stars.on("click.raty", function(d) {
				var e = !0,
					f = c.opt.half || c.opt.precision ? c.self.data("score") : this.alt || a(this).data("alt");
				c.opt.click && (e = c.opt.click.call(c, +f, d)), (e || void 0 === e) && (c.opt.half && !c.opt.precision && (f = b._roundHalfScore.call(c, f)), b._apply.call(c, f))
			})
		},
		_bindClickCancel : function() {
			var a = this;
			a.cancel.on("click.raty", function(b) {
				a.score.removeAttr("value"), a.opt.click && a.opt.click.call(a, null, b)
			})
		},
		_bindOut : function() {
			var a = this;
			a.self.on("mouseleave.raty", function(c) {
				var d = +a.score.val() || void 0;
				b._apply.call(a, d), b._target.call(a, d, c), b._resetTitle.call(a), a.opt.mouseout && a.opt.mouseout.call(a, d, c)
			})
		},
		_bindOutCancel : function() {
			var a = this;
			a.cancel.on("mouseleave.raty", function(c) {
				var d = a.opt.cancelOff;
				if ("img" !== a.opt.starType && (d = a.opt.cancelClass + " " + d), b._setIcon.call(a, this, d), a.opt.mouseout) {
					var e = +a.score.val() || void 0;
					a.opt.mouseout.call(a, e, c)
				}
			})
		},
		_bindOver : function() {
			var a = this,
				c = a.opt.half ? "mousemove.raty" : "mouseover.raty";
			a.stars.on(c, function(c) {
				var d = b._getScoreByPosition.call(a, c, this);
				b._fill.call(a, d), a.opt.half && (b._roundStars.call(a, d, c), b._setTitle.call(a, d, c), a.self.data("score", d)), b._target.call(a, d, c), a.opt.mouseover && a.opt.mouseover.call(a, d, c)
			})
		},
		_bindOverCancel : function() {
			var a = this;
			a.cancel.on("mouseover.raty", function(c) {
				var d = a.opt.path + a.opt.starOff,
					e = a.opt.cancelOn;
				"img" === a.opt.starType ? a.stars.attr("src", d) : (e = a.opt.cancelClass + " " + e, a.stars.attr("class", d)), b._setIcon.call(a, this, e), b._target.call(a, null, c), a.opt.mouseover && a.opt.mouseover.call(a, null)
			})
		},
		_buildScoreField : function() {
			return a("<input />", {
				name : this.opt.scoreName,
				type : "hidden"
			}).appendTo(this)
		},
		_createCancel : function() {
			var b = this.opt.path + this.opt.cancelOff,
				c = a("<" + this.opt.starType + " />", {
					title : this.opt.cancelHint,
					"class" : this.opt.cancelClass
				});
			"img" === this.opt.starType ? c.attr({
				src : b,
				alt : "x"
			}) : c.attr("data-alt", "x").addClass(b), "left" === this.opt.cancelPlace ? this.self.prepend("&#160;").prepend(c) : this.self.append("&#160;").append(c), this.cancel = c
		},
		_createScore : function() {
			var c = a(this.opt.targetScore);
			this.score = c.length ? c : b._buildScoreField.call(this)
		},
		_createStars : function() {
			for (var c = 1; c <= this.opt.number; c++) {
				var d = b._nameForIndex.call(this, c),
					e = {
						alt : c,
						src : this.opt.path + this.opt[d]
					};
				"img" !== this.opt.starType && (e = {
					"data-alt" : c,
					"class" : e.src
				}), e.title = b._getHint.call(this, c), a("<" + this.opt.starType + " />", e).appendTo(this), this.opt.space && this.self.append(c < this.opt.number ? "&#160;" : "")
			}
			this.stars = this.self.children(this.opt.starType)
		},
		_error : function(b) {
			a(this).text(b), a.error(b)
		},
		_fill : function(a) {
			for (var c = 0, d = 1; d <= this.stars.length; d++) {
				var e,
					f = this.stars[d - 1],
					g = b._turnOn.call(this, d, a);
				if (this.opt.iconRange && this.opt.iconRange.length > c) {
					var h = this.opt.iconRange[c];
					e = b._getRangeIcon.call(this, h, g), d <= h.range && b._setIcon.call(this, f, e), d === h.range && c++
				} else e = this.opt[g ? "starOn" : "starOff"], b._setIcon.call(this, f, e)
			}
		},
		_getFirstDecimal : function(a) {
			var b = a.toString().split(".")[1],
				c = 0;
			return b && (c = parseInt(b.charAt(0), 10), "9999" === b.slice(1, 5) && c++), c
		},
		_getRangeIcon : function(a, b) {
			return b ? a.on || this.opt.starOn : a.off || this.opt.starOff
		},
		_getScoreByPosition : function(c, d) {
			var e = parseInt(d.alt || d.getAttribute("data-alt"), 10);
			if (this.opt.half) {
				var f = b._getWidth.call(this),
					g = parseFloat((c.pageX - a(d).offset().left) / f);
				e = e - 1 + g
			}
			return e
		},
		_getHint : function(a, c) {
			if (0 !== a && !a) return this.opt.noRatedMsg;
			var d = b._getFirstDecimal.call(this, a),
				e = Math.ceil(a),
				f = this.opt.hints[(e || 1) - 1],
				g = f,
				h = !c || this.move;
			return this.opt.precision ? (h && (d = 0 === d ? 9 : d - 1), g = f[d]) : (this.opt.halfShow || this.opt.half) && (d = h && 0 === d ? 1 : d > 5 ? 1 : 0, g = f[d]), "" === g ? "" : g || a
		},
		_getWidth : function() {
			var a = this.stars[0].width || parseFloat(this.stars.eq(0).css("font-size"));
			return a || b._error.call(this, "Could not get the icon width!"), a
		},
		_lock : function() {
			var a = b._getHint.call(this, this.score.val());
			this.style.cursor = "", this.title = a, this.score.prop("readonly", !0), this.stars.prop("title", a), this.cancel && this.cancel.hide(), this.self.data("readonly", !0)
		},
		_nameForIndex : function(a) {
			return this.opt.score && this.opt.score >= a ? "starOn" : "starOff"
		},
		_resetTitle : function(a) {
			for (var c = 0; c < this.opt.number; c++) this.stars[c].title = b._getHint.call(this, c + 1)
		},
		_roundHalfScore : function(a) {
			var c = parseInt(a, 10),
				d = b._getFirstDecimal.call(this, a);
			return 0 !== d && (d = d > 5 ? 1 : .5), c + d
		},
		_roundStars : function(a, c) {
			var d,
				e = (a % 1).toFixed(2);
			if (c || this.move ? d = e > .5 ? "starOn" : "starHalf" : e > this.opt.round.down && (d = "starOn", this.opt.halfShow && e < this.opt.round.up ? d = "starHalf" : e < this.opt.round.full && (d = "starOff")), d) {
				var f = this.opt[d],
					g = this.stars[Math.ceil(a) - 1];
				b._setIcon.call(this, g, f)
			}
		},
		_setIcon : function(a, b) {
			a["img" === this.opt.starType ? "src" : "className"] = this.opt.path + b
		},
		_setTarget : function(a, b) {
			b && (b = this.opt.targetFormat.toString().replace("{score}", b)), a.is(":input") ? a.val(b) : a.html(b)
		},
		_setTitle : function(a, c) {
			if (a) {
				var d = parseInt(Math.ceil(a), 10),
					e = this.stars[d - 1];
				e.title = b._getHint.call(this, a, c)
			}
		},
		_target : function(c, d) {
			if (this.opt.target) {
				var e = a(this.opt.target);
				e.length || b._error.call(this, "Target selector invalid or missing!");
				var f = d && "mouseover" === d.type;
				if (void 0 === c)
					c = this.opt.targetText;
				else if (null === c)
					c = f ? this.opt.cancelHint : this.opt.targetText;else {
					"hint" === this.opt.targetType ? c = b._getHint.call(this, c, d) : this.opt.precision && (c = parseFloat(c).toFixed(1));
					var g = d && "mousemove" === d.type;
					f || g || this.opt.targetKeep || (c = this.opt.targetText)
				}
				b._setTarget.call(this, e, c)
			}
		},
		_turnOn : function(a, b) {
			return this.opt.single ? a === b : b >= a
		},
		_unlock : function() {
			this.style.cursor = "pointer", this.removeAttribute("title"), this.score.removeAttr("readonly"), this.self.data("readonly", !1);
			for (var a = 0; a < this.opt.number; a++) this.stars[a].title = b._getHint.call(this, a + 1);
			this.cancel && this.cancel.css("display", "")
		},
		cancel : function(c) {
			return this.each(function() {
				var d = a(this);
				d.data("readonly") !== !0 && (b[c ? "click" : "score"].call(d, null), this.score.removeAttr("value"))
			})
		},
		click : function(c) {
			return this.each(function() {
				a(this).data("readonly") !== !0 && (c = b._adjustedScore.call(this, c), b._apply.call(this, c), this.opt.click && this.opt.click.call(this, c, a.Event("click")), b._target.call(this, c))
			})
		},
		destroy : function() {
			return this.each(function() {
				var b = a(this),
					c = b.data("raw");
				c ? b.off(".raty").empty().css({
					cursor : c.style.cursor
				}).removeData("readonly") : b.data("raw", b.clone()[0])
			})
		},
		getScore : function() {
			var a,
				b = [];
			return this.each(function() {
					a = this.score.val(), b.push(a ? +a : void 0)
				}), b.length > 1 ? b : b[0]
		},
		move : function(c) {
			return this.each(function() {
				var d = parseInt(c, 10),
					e = b._getFirstDecimal.call(this, c);
				d >= this.opt.number && (d = this.opt.number - 1, e = 10);
				var f = b._getWidth.call(this),
					g = f / 10,
					h = a(this.stars[d]),
					i = h.offset().left + g * e,
					j = a.Event("mousemove", {
						pageX : i
					});
				this.move = !0, h.trigger(j), this.move = !1
			})
		},
		readOnly : function(c) {
			return this.each(function() {
				var d = a(this);
				d.data("readonly") !== c && (c ? (d.off(".raty").children("img").off(".raty"), b._lock.call(this)) : (b._binds.call(this), b._unlock.call(this)), d.data("readonly", c))
			})
		},
		reload : function() {
			return b.set.call(this, {})
		},
		score : function() {
			var c = a(this);
			return arguments.length ? b.setScore.apply(c, arguments) : b.getScore.call(c)
		},
		set : function(b) {
			return this.each(function() {
				a(this).raty(a.extend({}, this.opt, b))
			})
		},
		setScore : function(c) {
			return this.each(function() {
				a(this).data("readonly") !== !0 && (c = b._adjustedScore.call(this, c), b._apply.call(this, c), b._target.call(this, c))
			})
		}
	};
	a.fn.raty = function(c) {
		return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist!") : b.init.apply(this, arguments)
	}, a.fn.raty.defaults = {
		cancel : !1,
		cancelClass : "raty-cancel",
		cancelHint : "Cancel this rating!",
		cancelOff : "cancel-off.png",
		cancelOn : "cancel-on.png",
		cancelPlace : "left",
		click : void 0,
		half : !1,
		halfShow : !0,
		hints : [ "bad", "poor", "regular", "good", "gorgeous" ],
		iconRange : void 0,
		mouseout : void 0,
		mouseover : void 0,
		noRatedMsg : "Not rated yet!",
		number : 5,
		numberMax : 20,
		path : "../../dist/skin/img",
		precision : !1,
		readOnly : !1,
		round : {
			down : .25,
			full : .6,
			up : .76
		},
		score : void 0,
		scoreName : "score",
		single : !1,
		space : !0,
		starHalf : "star-half.png",
		starOff : "star-off.png",
		starOn : "star-on.png",
		starType : "img",
		target : void 0,
		targetFormat : "{score}",
		targetKeep : !1,
		targetScore : void 0,
		targetText : "",
		targetType : "hint"
	}
}(jQuery), function(a, b, c) {
	function d(b, c) {
		var d = (a(window).width() - b.outerWidth()) / 2,
			e = (a(window).height() - b.outerHeight()) / 2,
			e = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + (e > 0 ? e : 0);
		b.css({
			left : d
		}).animate({
			top : e
		}, {
			duration : c,
			queue : !1
		})
	}
	function e() {
		return 0 !== a("#Validform_msg").length ? !1 : (g = a('<div id="Validform_msg"><div class="Validform_title">' + i.tit + '<a class="Validform_close" href="javascript:void(0);">&chi;</a></div><div class="Validform_info"></div><div class="iframe"><iframe frameborder="0" scrolling="no" height="100%" width="100%"></iframe></div></div>').appendTo("body"), g.find("a.Validform_close").click(function() {
			return g.hide(), h = !0, f && f.focus().addClass("Validform_error"), !1
		}).focus(function() {
			this.blur()
		}), void a(window).bind("scroll resize", function() {
			!h && d(g, 400)
		}))
	}
	var f = null,
		g = null,
		h = !0,
		i = {
			tit : "提示信息",
			w : {
				"*" : "不能为空！",
				"*6-16" : "请填写6到16位任意字符！",
				n : "请填写数字！",
				"n6-16" : "请填写6到16位数字！",
				s : "不能输入特殊字符！",
				"s6-18" : "请填写6到18位字符！",
				p : "请填写邮政编码！",
				m : "请填写手机号码！",
				e : "邮箱地址格式不对！",
				url : "请填写网址！"
			},
			def : "请填写正确信息！",
			undef : "datatype未定义！",
			reck : "两次输入的内容不一致！",
			r : "通过信息验证！",
			c : "正在检测信息…",
			s : "请{填写|选择}{0|信息}！",
			v : "所填信息没有经过验证，请稍后…",
			p : "正在提交数据…"
		};
	a.Tipmsg = i;
	var j = function(b, d, f) {
		var d = a.extend({}, j.defaults, d);
		d.datatype && a.extend(j.util.dataType, d.datatype);
		var g = this;
		return g.tipmsg = {
				w : {}
			}, g.forms = b, g.objects = [], f === !0 ? !1 : (b.each(function() {
				if ("inited" == this.validform_inited) return !0;
				this.validform_inited = "inited";
				var b = this;
				b.settings = a.extend({}, d);
				var e = a(b);
				b.validform_status = "normal", e.data("tipmsg", g.tipmsg), e.delegate("[datatype]", "blur", function() {
					var a = arguments[1];
					j.util.check.call(this, e, a)
				}), e.delegate(":text", "keypress", function(a) {
					13 == a.keyCode && 0 == e.find(":submit").length && e.submit()
				}), j.util.enhance.call(e, b.settings.tiptype, b.settings.usePlugin, b.settings.tipSweep), b.settings.btnSubmit && e.find(b.settings.btnSubmit).bind("click", function() {
					return e.trigger("submit"), !1
				}), e.submit(function() {
					var a = j.util.submitForm.call(e, b.settings);
					return a === c && (a = !0), a
				}), e.find("[type='reset']").add(e.find(b.settings.btnReset)).bind("click", function() {
					j.util.resetForm.call(e)
				})
			}), void ((1 == d.tiptype || (2 == d.tiptype || 3 == d.tiptype) && d.ajaxPost) && e()))
	};
	j.defaults = {
		tiptype : 1,
		tipSweep : !1,
		showAllError : !1,
		postonce : !1,
		ajaxPost : !1
	}, j.util = {
		dataType : {
			"*" : /[\w\W]+/,
			"*6-16" : /^[\w\W]{6,16}$/,
			n : /^\d+$/,
			"n6-16" : /^\d{6,16}$/,
			s : /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,
			"s6-18" : /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,
			p : /^[0-9]{6}$/,
			m : /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,
			e : /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
			url : /^(\w+:\/\/)?\w+(\.\w+)+.*$/
		},
		toString : Object.prototype.toString,
		isEmpty : function(b) {
			return "" === b || b === a.trim(this.attr("tip"))
		},
		getValue : function(b) {
			var d,
				e = this;
			return b.is(":radio") ? (d = e.find(":radio[name='" + b.attr("name") + "']:checked").val(), d = d === c ? "" : d) : b.is(":checkbox") ? (d = "", e.find(":checkbox[name='" + b.attr("name") + "']:checked").each(function() {
					d += a(this).val() + ","
				}), d = d === c ? "" : d) : d = b.val(), d = a.trim(d), j.util.isEmpty.call(b, d) ? "" : d
		},
		enhance : function(b, c, d, e) {
			var f = this;
			f.find("[datatype]").each(function() {
				2 == b ? 0 == a(this).parent().next().find(".Validform_checktip").length && (a(this).parent().next().append("<span class='Validform_checktip' />"), a(this).siblings(".Validform_checktip").remove()) : (3 == b || 4 == b) && 0 == a(this).siblings(".Validform_checktip").length && (a(this).parent().append("<span class='Validform_checktip' />"), a(this).parent().next().find(".Validform_checktip").remove())
			}), f.find("input[recheck]").each(function() {
				if ("inited" == this.validform_inited) return !0;
				this.validform_inited = "inited";
				var b = a(this),
					c = f.find("input[name='" + a(this).attr("recheck") + "']");
				c.bind("keyup", function() {
					if (c.val() == b.val() && "" != c.val()) {
						if (c.attr("tip") && c.attr("tip") == c.val()) return !1;
						b.trigger("blur")
					}
				}).bind("blur", function() {
					if (c.val() != b.val() && "" != b.val()) {
						if (b.attr("tip") && b.attr("tip") == b.val()) return !1;
						b.trigger("blur")
					}
				})
			}), f.find("[tip]").each(function() {
				if ("inited" == this.validform_inited) return !0;
				this.validform_inited = "inited";
				var b = a(this).attr("tip"),
					c = a(this).attr("altercss");
				a(this).focus(function() {
					a(this).val() == b && (a(this).val(""), c && a(this).removeClass(c))
				}).blur(function() {
					"" === a.trim(a(this).val()) && (a(this).val(b), c && a(this).addClass(c))
				})
			}), f.find(":checkbox[datatype],:radio[datatype]").each(function() {
				if ("inited" == this.validform_inited) return !0;
				this.validform_inited = "inited";
				var b = a(this),
					c = b.attr("name");
				f.find("[name='" + c + "']").filter(":checkbox,:radio").bind("click", function() {
					setTimeout(function() {
						b.trigger("blur")
					}, 0)
				})
			}), f.find("select[datatype][multiple]").bind("click", function() {
				var b = a(this);
				setTimeout(function() {
					b.trigger("blur")
				}, 0)
			}), j.util.usePlugin.call(f, c, b, d, e)
		},
		usePlugin : function(b, c, d, e) {
			var f = this,
				b = b || {};
			if (f.find("input[plugin='swfupload']").length && "undefined" != typeof swfuploadhandler) {
				var g = {
					custom_settings : {
						form : f,
						showmsg : function(a, b, e) {
							j.util.showmsg.call(f, a, c, {
								obj : f.find("input[plugin='swfupload']"),
								type : b,
								sweep : d
							})
						}
					}
				};
				g = a.extend(!0, {}, b.swfupload, g), f.find("input[plugin='swfupload']").each(function(b) {
					return "inited" == this.validform_inited ? !0 : (this.validform_inited = "inited", a(this).val(""), void swfuploadhandler.init(g, b))
				})
			}
			if (f.find("input[plugin='datepicker']").length && a.fn.datePicker && (b.datepicker = b.datepicker || {}, b.datepicker.format && (Date.format = b.datepicker.format,
				delete b.datepicker.format
				), b.datepicker.firstDayOfWeek && (Date.firstDayOfWeek = b.datepicker.firstDayOfWeek,
				delete b.datepicker.firstDayOfWeek
				), f.find("input[plugin='datepicker']").each(function(c) {
					return "inited" == this.validform_inited ? !0 : (this.validform_inited = "inited", b.datepicker.callback && a(this).bind("dateSelected", function() {
						var c = new Date(a.event._dpCache[this._dpId].getSelected()[0]).asString(Date.format);
						b.datepicker.callback(c, this)
					}), void a(this).datePicker(b.datepicker))
				})), f.find("input[plugin*='passwordStrength']").length && a.fn.passwordStrength && (b.passwordstrength = b.passwordstrength || {}, b.passwordstrength.showmsg = function(a, b, e) {
					j.util.showmsg.call(f, b, c, {
						obj : a,
						type : e,
						sweep : d
					})
				}, f.find("input[plugin='passwordStrength']").each(function(c) {
					return "inited" == this.validform_inited ? !0 : (this.validform_inited = "inited", void a(this).passwordStrength(b.passwordstrength))
				})), "addRule" != e && b.jqtransform && a.fn.jqTransSelect) {
				if ("true" == f[0].jqTransSelected) return;
				f[0].jqTransSelected = "true";
				var h = function(b) {
						var c = a(".jqTransformSelectWrapper ul:visible");
						c.each(function() {
							var c = a(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);
							b && c.oLabel && c.oLabel.get(0) == b.get(0) || a(this).hide()
						})
					},
					i = function(b) {
						0 === a(b.target).parents(".jqTransformSelectWrapper").length && h(a(b.target))
					},
					k = function() {
						a(document).mousedown(i)
					};
				b.jqtransform.selector ? (f.find(b.jqtransform.selector).filter('input:submit, input:reset, input[type="button"]').jqTransInputButton(), f.find(b.jqtransform.selector).filter("input:text, input:password").jqTransInputText(), f.find(b.jqtransform.selector).filter("input:checkbox").jqTransCheckBox(), f.find(b.jqtransform.selector).filter("input:radio").jqTransRadio(), f.find(b.jqtransform.selector).filter("textarea").jqTransTextarea(), f.find(b.jqtransform.selector).filter("select").length > 0 && (f.find(b.jqtransform.selector).filter("select").jqTransSelect(), k())) : f.jqTransform(), f.find(".jqTransformSelectWrapper").find("li a").click(function() {
					a(this).parents(".jqTransformSelectWrapper").find("select").trigger("blur")
				})
			}
		},
		getNullmsg : function(a) {
			var b,
				c = this,
				d = /[\u4E00-\u9FA5\uf900-\ufa2da-zA-Z\s]+/g,
				e = a[0].settings.label || ".Validform_label";
			if (e = c.siblings(e).eq(0).text() || c.siblings().find(e).eq(0).text() || c.parent().siblings(e).eq(0).text() || c.parent().siblings().find(e).eq(0).text(), e = e.replace(/\s(?![a-zA-Z])/g, "").match(d), e = e ? e.join("") : [ "" ], d = /\{(.+)\|(.+)\}/, b = a.data("tipmsg").s || i.s, "" != e) {
				if (b = b.replace(/\{0\|(.+)\}/, e), c.attr("recheck")) return b = b.replace(/\{(.+)\}/, ""), c.attr("nullmsg", b), b
			} else
				b = c.is(":checkbox,:radio,select") ? b.replace(/\{0\|(.+)\}/, "") : b.replace(/\{0\|(.+)\}/, "$1");
			return b = c.is(":checkbox,:radio,select") ? b.replace(d, "$2") : b.replace(d, "$1"), c.attr("nullmsg", b), b
		},
		getErrormsg : function(b, c, d) {
			var e,
				f = /^(.+?)((\d+)-(\d+))?$/,
				g = /^(.+?)(\d+)-(\d+)$/,
				h = /(.*?)\d+(.+?)\d+(.*)/,
				j = c.match(f);
			if ("recheck" == d) return e = b.data("tipmsg").reck || i.reck;
			var k = a.extend({}, i.w, b.data("tipmsg").w);
			if (j[0] in k) return b.data("tipmsg").w[j[0]] || i.w[j[0]];
			for (var l in k)
				if (-1 != l.indexOf(j[1]) && g.test(l)) return e = (b.data("tipmsg").w[l] || i.w[l]).replace(h, "$1" + j[3] + "$2" + j[4] + "$3"), b.data("tipmsg").w[j[0]] = e, e;
			return b.data("tipmsg").def || i.def
		},
		_regcheck : function(a, b, d, e) {
			var e = e,
				f = null,
				g = !1,
				h = /\/.+\//g,
				k = /^(.+?)(\d+)-(\d+)$/,
				l = 3;
			if (h.test(a)) {
				var m = a.match(h)[0].slice(1, -1),
					n = a.replace(h, ""),
					o = RegExp(m, n);
				g = o.test(b)
			} else if ("[object Function]" == j.util.toString.call(j.util.dataType[a])) g = j.util.dataType[a](b, d, e, j.util.dataType), g === !0 || g === c ? g = !0 : (f = g, g = !1);else {
				if (!(a in j.util.dataType)) {
					var p,
						q = a.match(k);
					if (q) {
						for (var r in j.util.dataType)
							if (p = r.match(k), p && q[1] === p[1]) {
								var s = j.util.dataType[r].toString(),
									n = s.match(/\/[mgi]*/g)[1].replace("/", ""),
									t = new RegExp("\\{" + p[2] + "," + p[3] + "\\}", "g");
								s = s.replace(/\/[mgi]*/g, "/").replace(t, "{" + q[2] + "," + q[3] + "}").replace(/^\//, "").replace(/\/$/, ""), j.util.dataType[a] = new RegExp(s, n);break
						}
					} else g = !1, f = e.data("tipmsg").undef || i.undef
				}
				"[object RegExp]" == j.util.toString.call(j.util.dataType[a]) && (g = j.util.dataType[a].test(b))
			}
			if (g) {
				if (l = 2, f = d.attr("sucmsg") || e.data("tipmsg").r || i.r, d.attr("recheck")) {
					var u = e.find("input[name='" + d.attr("recheck") + "']:first");
					b != u.val() && (g = !1, l = 3, f = d.attr("errormsg") || j.util.getErrormsg.call(d, e, a, "recheck"))
				}
			} else f = f || d.attr("errormsg") || j.util.getErrormsg.call(d, e, a), j.util.isEmpty.call(d, b) && (f = d.attr("nullmsg") || j.util.getNullmsg.call(d, e));
			return {
				passed : g,
				type : l,
				info : f
			}
		},
		regcheck : function(a, b, c) {
			var d = this,
				e = null;
			if ("ignore" === c.attr("ignore") && j.util.isEmpty.call(c, b)) return c.data("cked") && (e = ""), {
						passed : !0,
						type : 4,
						info : e
					};
			c.data("cked", "cked");
			for (var f, g = j.util.parseDatatype(a), h = 0; h < g.length; h++) {
				for (var i = 0; i < g[h].length && (f = j.util._regcheck(g[h][i], b, c, d), f.passed); i++)
					;
				if (f.passed) break
			}
			return f
		},
		parseDatatype : function(a) {
			var b = /\/.+?\/[mgi]*(?=(,|$|\||\s))|[\w\*-]+/g,
				c = a.match(b),
				d = a.replace(b, "").replace(/\s*/g, "").split(""),
				e = [],
				f = 0;
			e[0] = [], e[0].push(c[0]);
			for (var g = 0; g < d.length; g++) "|" == d[g] && (f++, e[f] = []), e[f].push(c[g + 1]);
			return e
		},
		showmsg : function(b, e, f, i) {
			if (b != c && ("bycheck" != i || !f.sweep || (!f.obj || f.obj.is(".Validform_error")) && "function" != typeof e)) {
				if (a.extend(f, {
						curform : this
					}), "function" == typeof e) return void e(b, f, j.util.cssctl);
				(1 == e || "byajax" == i && 4 != e) && g.find(".Validform_info").html(b), (1 == e && "bycheck" != i && 2 != f.type || "byajax" == i && 4 != e) && (h = !1, g.find(".iframe").css("height", g.outerHeight()), g.show(), d(g, 100)), 2 == e && f.obj && (f.obj.parent().next().find(".Validform_checktip").html(b), j.util.cssctl(f.obj.parent().next().find(".Validform_checktip"), f.type)), 3 != e && 4 != e || !f.obj || (f.obj.siblings(".Validform_checktip").html(b), j.util.cssctl(f.obj.siblings(".Validform_checktip"), f.type))
			}
		},
		cssctl : function(a, b) {
			switch (b) {
			case 1:
				a.removeClass("Validform_right Validform_wrong").addClass("Validform_checktip Validform_loading");
				break;case 2:
				a.removeClass("Validform_wrong Validform_loading").addClass("Validform_checktip Validform_right");
				break;case 4:
				a.removeClass("Validform_right Validform_wrong Validform_loading").addClass("Validform_checktip");
				break;default:
				a.removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong")
			}
		},
		check : function(b, c, d) {
			var e = b[0].settings,
				c = c || "",
				g = j.util.getValue.call(b, a(this));
			if (e.ignoreHidden && a(this).is(":hidden") || "dataIgnore" === a(this).data("dataIgnore")) return !0;
			if (e.dragonfly && !a(this).data("cked") && j.util.isEmpty.call(a(this), g) && "ignore" != a(this).attr("ignore")) return !1;
			var h = j.util.regcheck.call(b, a(this).attr("datatype"), g, a(this));
			if (g == this.validform_lastval && !a(this).attr("recheck") && "" == c) return h.passed ? !0 : !1;
			this.validform_lastval = g;
			var k;
			if (f = k = a(this), !h.passed) return j.util.abort.call(k[0]), d || (j.util.showmsg.call(b, h.info, e.tiptype, {
						obj : a(this),
						type : h.type,
						sweep : e.tipSweep
					}, "bycheck"), !e.tipSweep && k.addClass("Validform_error")), !1;
			var l = a(this).attr("ajaxurl");
			if (l && !j.util.isEmpty.call(a(this), g) && !d) {
				var m = a(this);
				if ("postform" == c ? m[0].validform_subpost = "postform" : m[0].validform_subpost = "", "posting" === m[0].validform_valid && g == m[0].validform_ckvalue) return "ajax";
				m[0].validform_valid = "posting", m[0].validform_ckvalue = g, j.util.showmsg.call(b, b.data("tipmsg").c || i.c, e.tiptype, {
					obj : m,
					type : 1,
					sweep : e.tipSweep
				}, "bycheck"), j.util.abort.call(k[0]);
				var n = a.extend(!0, {}, e.ajaxurl || {}),
					o = {
						type : "POST",
						cache : !1,
						url : l,
						data : "param=" + encodeURIComponent(g) + "&name=" + encodeURIComponent(a(this).attr("name")),
						success : function(c) {
							"y" === a.trim(c.status) ? (m[0].validform_valid = "true", c.info && m.attr("sucmsg", c.info), j.util.showmsg.call(b, m.attr("sucmsg") || b.data("tipmsg").r || i.r, e.tiptype, {
								obj : m,
								type : 2,
								sweep : e.tipSweep
							}, "bycheck"), k.removeClass("Validform_error"), f = null, "postform" == m[0].validform_subpost && b.trigger("submit")) : (m[0].validform_valid = c.info, j.util.showmsg.call(b, c.info, e.tiptype, {
								obj : m,
								type : 3,
								sweep : e.tipSweep
							}), k.addClass("Validform_error")), k[0].validform_ajax = null
						},
						error : function(a) {
							if ("200" == a.status) return "y" == a.responseText ? n.success({
										status : "y"
									}) : n.success({
										status : "n",
										info : a.responseText
									}), !1;
							if ("abort" !== a.statusText) {
								var c = "status: " + a.status + "; statusText: " + a.statusText;
								j.util.showmsg.call(b, c, e.tiptype, {
									obj : m,
									type : 3,
									sweep : e.tipSweep
								}), k.addClass("Validform_error")
							}
							return m[0].validform_valid = a.statusText, k[0].validform_ajax = null, !0
						}
					};
				if (n.success) {
					var p = n.success;
					n.success = function(a) {
						o.success(a), p(a, m)
					}
				}
				if (n.error) {
					var q = n.error;
					n.error = function(a) {
						o.error(a) && q(a, m)
					}
				}
				return n = a.extend({}, o, n, {
						dataType : "json"
					}), k[0].validform_ajax = a.ajax(n), "ajax"
			}
			return l && j.util.isEmpty.call(a(this), g) && (j.util.abort.call(k[0]), k[0].validform_valid = "true"), d || (j.util.showmsg.call(b, h.info, e.tiptype, {
					obj : a(this),
					type : h.type,
					sweep : e.tipSweep
				}, "bycheck"), k.removeClass("Validform_error")), f = null, !0
		},
		submitForm : function(b, c, d, e, g) {
			var h = this;
			if ("posting" === h[0].validform_status) return !1;
			if (b.postonce && "posted" === h[0].validform_status) return !1;
			var k = b.beforeCheck && b.beforeCheck(h);
			if (k === !1) return !1;
			var l,
				m = !0;
			if (h.find("[datatype]").each(function() {
					if (c) return !1;
					if (b.ignoreHidden && a(this).is(":hidden") || "dataIgnore" === a(this).data("dataIgnore")) return !0;
					var d,
						e = j.util.getValue.call(h, a(this));
					if (f = d = a(this), l = j.util.regcheck.call(h, a(this).attr("datatype"), e, a(this)), !l.passed) return j.util.showmsg.call(h, l.info, b.tiptype, {
								obj : a(this),
								type : l.type,
								sweep : b.tipSweep
							}), d.addClass("Validform_error"), b.showAllError ? (m && (m = !1), !0) : (d.focus(), m = !1, !1);
					if (a(this).attr("ajaxurl") && !j.util.isEmpty.call(a(this), e)) {
						if ("true" !== this.validform_valid) {
							var g = a(this);
							return j.util.showmsg.call(h, h.data("tipmsg").v || i.v, b.tiptype, {
									obj : g,
									type : 3,
									sweep : b.tipSweep
								}), d.addClass("Validform_error"), g.trigger("blur", [ "postform" ]), b.showAllError ? (m && (m = !1), !0) : (m = !1, !1)
						}
					} else a(this).attr("ajaxurl") && j.util.isEmpty.call(a(this), e) && (j.util.abort.call(this), this.validform_valid = "true");
					j.util.showmsg.call(h, l.info, b.tiptype, {
						obj : a(this),
						type : l.type,
						sweep : b.tipSweep
					}), d.removeClass("Validform_error"), f = null
				}), b.showAllError && h.find(".Validform_error:first").focus(), m) {
				var n = b.beforeSubmit && b.beforeSubmit(h);
				if (n === !1) return !1;
				if (h[0].validform_status = "posting", !b.ajaxPost && "ajaxPost" !== e) {
					b.postonce || (h[0].validform_status = "normal");
					var d = d || b.url;
					return d && h.attr("action", d), b.callback && b.callback(h)
				}
				var o = a.extend(!0, {}, b.ajaxpost || {});
				if (o.url = d || o.url || b.url || h.attr("action"), j.util.showmsg.call(h, h.data("tipmsg").p || i.p, b.tiptype, {
						obj : h,
						type : 1,
						sweep : b.tipSweep
					}, "byajax"), g ? o.async = !1 : g === !1 && (o.async = !0), o.success) {
					var p = o.success;
					o.success = function(c) {
						b.callback && b.callback(c), h[0].validform_ajax = null, "y" === a.trim(c.status) ? h[0].validform_status = "posted" : h[0].validform_status = "normal", p(c, h)
					}
				}
				if (o.error) {
					var q = o.error;
					o.error = function(a) {
						b.callback && b.callback(a), h[0].validform_status = "normal", h[0].validform_ajax = null, q(a, h)
					}
				}
				var r = {
					type : "POST",
					async : !0,
					data : h.serializeArray(),
					success : function(c) {
						"y" === a.trim(c.status) ? (h[0].validform_status = "posted", j.util.showmsg.call(h, c.info, b.tiptype, {
							obj : h,
							type : 2,
							sweep : b.tipSweep
						}, "byajax")) : (h[0].validform_status = "normal", j.util.showmsg.call(h, c.info, b.tiptype, {
							obj : h,
							type : 3,
							sweep : b.tipSweep
						}, "byajax")), b.callback && b.callback(c), h[0].validform_ajax = null
					},
					error : function(a) {
						var c = "status: " + a.status + "; statusText: " + a.statusText;
						j.util.showmsg.call(h, c, b.tiptype, {
							obj : h,
							type : 3,
							sweep : b.tipSweep
						}, "byajax"), b.callback && b.callback(a), h[0].validform_status = "normal", h[0].validform_ajax = null
					}
				};
				o = a.extend({}, r, o, {
					dataType : "json"
				}), h[0].validform_ajax = a.ajax(o)
			}
			return !1
		},
		resetForm : function() {
			var a = this;
			a.each(function() {
				this.reset && this.reset(), this.validform_status = "normal"
			}), a.find(".Validform_right").text(""), a.find(".passwordStrength").children().removeClass("bgStrength"), a.find(".Validform_checktip").removeClass("Validform_wrong Validform_right Validform_loading"), a.find(".Validform_error").removeClass("Validform_error"), a.find("[datatype]").removeData("cked").removeData("dataIgnore").each(function() {
				this.validform_lastval = null
			}), a.eq(0).find("input:first").focus()
		},
		abort : function() {
			this.validform_ajax && this.validform_ajax.abort()
		}
	}, a.Datatype = j.util.dataType, j.prototype = {
		dataType : j.util.dataType,
		eq : function(b) {
			var c = this;
			return b >= c.forms.length ? null : (b in c.objects || (c.objects[b] = new j(a(c.forms[b]).get(), {}, !0)), c.objects[b])
		},
		resetStatus : function() {
			var b = this;
			return a(b.forms).each(function() {
					this.validform_status = "normal"
				}), this
		},
		setStatus : function(b) {
			var c = this;
			return a(c.forms).each(function() {
					this.validform_status = b || "posting"
				}), this
		},
		getStatus : function() {
			var b = this,
				c = a(b.forms)[0].validform_status;
			return c
		},
		ignore : function(b) {
			var c = this,
				b = b || "[datatype]";
			return a(c.forms).find(b).each(function() {
					a(this).data("dataIgnore", "dataIgnore").removeClass("Validform_error")
				}), this
		},
		unignore : function(b) {
			var c = this,
				b = b || "[datatype]";
			return a(c.forms).find(b).each(function() {
					a(this).removeData("dataIgnore")
				}), this
		},
		addRule : function(b) {
			for (var c = this, b = b || [], d = 0; d < b.length; d++) {
				var e = a(c.forms).find(b[d].ele);
				for (var f in b[d]) "ele" !== f && e.attr(f, b[d][f])
			}
			return a(c.forms).each(function() {
					var b = a(this);
					j.util.enhance.call(b, this.settings.tiptype, this.settings.usePlugin, this.settings.tipSweep, "addRule")
				}), this
		},
		ajaxPost : function(b, c, d) {
			var f = this;
			return a(f.forms).each(function() {
					(1 == this.settings.tiptype || 2 == this.settings.tiptype || 3 == this.settings.tiptype) && e(), j.util.submitForm.call(a(f.forms[0]), this.settings, b, d, "ajaxPost", c)
				}), this
		},
		submitForm : function(b, d) {
			var e = this;
			return a(e.forms).each(function() {
					var e = j.util.submitForm.call(a(this), this.settings, b, d);
					e === c && (e = !0), e === !0 && this.submit()
				}), this
		},
		resetForm : function() {
			var b = this;
			return j.util.resetForm.call(a(b.forms)), this
		},
		abort : function() {
			var b = this;
			return a(b.forms).each(function() {
					j.util.abort.call(this)
				}), this
		},
		check : function(b, c) {
			var c = c || "[datatype]",
				d = this,
				e = a(d.forms),
				f = !0;
			return e.find(c).each(function() {
					j.util.check.call(this, e, "", b) || (f = !1)
				}), f
		},
		config : function(b) {
			var c = this;
			return b = b || {}, a(c.forms).each(function() {
					var c = a(this);
					this.settings = a.extend(!0, this.settings, b), j.util.enhance.call(c, this.settings.tiptype, this.settings.usePlugin, this.settings.tipSweep)
				}), this
		}
	}, a.fn.Validform = function(a) {
		return new j(this, a)
	}, a.Showmsg = function(a) {
		e(), j.util.showmsg.call(b, a, 1, {})
	}, a.Hidemsg = function() {
		g.hide(), h = !0
	}
}(jQuery, window), function(a) {
	a.fn.uValidform = function(b) {
		b = a.extend({
			tiptype : function(a, b, c) {
				if (b.obj.is("form")) {
					var d = b.obj.find("#msgdemo");
					c(d, b.type), d.text(a)
				} else {
					var d = b.obj.siblings(".Validform_checktip");
					0 == d.length && (0 != b.obj.parent("div").length ? d = b.obj.parents("div").siblings(".Validform_checktip") : 0 != b.obj.parent("label").length && (d = b.obj.parent("label").siblings(".Validform_checktip"))), c(d, b.type), d.text(a)
				}
			}
		}, b);
		var c = a(this).Validform(b);
		return c
	}
}(jQuery), function(a) {
	a.fn.search = function(b) {
		var c = a(this),
			d = c.parent(".ue-search");
		d.length || (d = a('<div class="input-group" style="display: none"><input class="form-control ue-form" type="text" placeholder="请输入查询条件"/><div class="input-group-addon ue-form-btn"><span class="fa fa-arrow-circle-right"></span></div></div>'), c.wrap('<div class="ue-search"></div>'), c.after(d)), c.click(function() {
			d.is(":visible") ? d.css("display", "none") : d.css("display", "table")
		});
		var e = d.find(".ue-form");
		e.keydown(function(c) {
			"13" == c.which && b(a(this).val())
		});
		var f = d.find(".ue-form-btn");
		f.click(function() {
			b(e.val())
		})
	}
}(jQuery), function(a, b, c, d) {
	function e(b, c) {
		this.element = a(b), this.settings = a.extend({}, v, c), this._defaults = v, this._name = u, this.init()
	}
	function f(a) {
		a.element.trigger("change")
	}
	function g(b) {
		b.element.find("option").each(function(c, d) {
			var e = a(d);
			"undefined" == typeof e.data("original-index") && e.data("original-index", b.elementCount++), "undefined" == typeof e.data("_selected") && e.data("_selected", !1)
		})
	}
	function h(b, c, d) {
		b.element.find("option").each(function(b, e) {
			var f = a(e);
			f.data("original-index") === c && f.prop("selected", d)
		})
	}
	function i(a, b) {
		return a.replace(/\{(\d+)\}/g, function(a, c) {
			return "undefined" != typeof b[c] ? b[c] : a
		})
	}
	function j(a) {
		if (a.settings.infoText) {
			var b = a.elements.select1.find("option").length,
				c = a.elements.select2.find("option").length,
				d = a.element.find("option").length - a.selectedElements,
				e = a.selectedElements,
				f = "";
			f = 0 === d ? a.settings.infoTextEmpty : b === d ? i(a.settings.infoText, [ b, d ]) : i(a.settings.infoTextFiltered, [ b, d ]), a.elements.info1.html(f), a.elements.box1.toggleClass("filtered", !(b === d || 0 === d)), f = 0 === e ? a.settings.infoTextEmpty : c === e ? i(a.settings.infoText, [ c, e ]) : i(a.settings.infoTextFiltered, [ c, e ]), a.elements.info2.html(f), a.elements.box2.toggleClass("filtered", !(c === e || 0 === e))
		}
	}
	function k(b) {
		b.selectedElements = 0, b.elements.select1.empty(), b.elements.select2.empty(), b.element.find("option").each(function(c, d) {
			var e = a(d);
			e.prop("selected") ? (b.selectedElements++, b.elements.select2.append(e.clone(!0).prop("selected", e.data("_selected")))) : b.elements.select1.append(e.clone(!0).prop("selected", e.data("_selected")))
		}), b.settings.showFilterInputs && (l(b, 1), l(b, 2)), j(b)
	}
	function l(b, c) {
		if (b.settings.showFilterInputs) {
			m(b, c), b.elements["select" + c].empty().scrollTop(0);
			var d = new RegExp(a.trim(b.elements["filterInput" + c].val()), "gi"),
				e = b.element;
			e = 1 === c ? e.find("option").not(":selected") : e.find("option:selected"), e.each(function(e, f) {
				var g = a(f),
					h = !0;
				(f.text.match(d) || b.settings.filterOnValues && g.attr("value").match(d)) && (h = !1, b.elements["select" + c].append(g.clone(!0).prop("selected", g.data("_selected")))), b.element.find("option").eq(g.data("original-index")).data("filtered" + c, h)
			}), j(b)
		}
	}
	function m(b, c) {
		b.elements["select" + c].find("option").each(function(c, d) {
			var e = a(d);
			b.element.find("option").eq(e.data("original-index")).data("_selected", e.prop("selected"))
		})
	}
	function n(b) {
		b.find("option").sort(function(b, c) {
			return a(b).data("original-index") > a(c).data("original-index") ? 1 : -1
		}).appendTo(b)
	}
	function o(a) {
		a.elements.select1.find("option").each(function() {
			a.element.find("option").data("_selected", !1)
		})
	}
	function p(b) {
		"all" !== b.settings.preserveSelectionOnMove || b.settings.moveOnSelect ? "moved" !== b.settings.preserveSelectionOnMove || b.settings.moveOnSelect || m(b, 1) : (m(b, 1), m(b, 2)), b.elements.select1.find("option:selected").each(function(c, d) {
			var e = a(d);
			e.data("filtered1") || h(b, e.data("original-index"), !0)
		}), k(b), f(b), n(b.elements.select2)
	}
	function q(b) {
		"all" !== b.settings.preserveSelectionOnMove || b.settings.moveOnSelect ? "moved" !== b.settings.preserveSelectionOnMove || b.settings.moveOnSelect || m(b, 2) : (m(b, 1), m(b, 2)), b.elements.select2.find("option:selected").each(function(c, d) {
			var e = a(d);
			e.data("filtered2") || h(b, e.data("original-index"), !1)
		}), k(b), f(b), n(b.elements.select1)
	}
	function r(b) {
		"all" !== b.settings.preserveSelectionOnMove || b.settings.moveOnSelect ? "moved" !== b.settings.preserveSelectionOnMove || b.settings.moveOnSelect || m(b, 1) : (m(b, 1), m(b, 2)), b.element.find("option").each(function(b, c) {
			var d = a(c);
			d.data("filtered1") || d.prop("selected", !0)
		}), k(b), f(b)
	}
	function s(b) {
		"all" !== b.settings.preserveSelectionOnMove || b.settings.moveOnSelect ? "moved" !== b.settings.preserveSelectionOnMove || b.settings.moveOnSelect || m(b, 2) : (m(b, 1), m(b, 2)), b.element.find("option").each(function(b, c) {
			var d = a(c);
			d.data("filtered2") || d.prop("selected", !1)
		}), k(b), f(b)
	}
	function t(a) {
		a.elements.form.submit(function(b) {
			a.elements.filterInput1.is(":focus") ? (b.preventDefault(), a.elements.filterInput1.focusout()) : a.elements.filterInput2.is(":focus") && (b.preventDefault(), a.elements.filterInput2.focusout())
		}), a.element.on("bootstrapDualListbox.refresh", function(b, c) {
			a.refresh(c)
		}), a.elements.filterClear1.on("click", function() {
			a.setNonSelectedFilter("", !0)
		}), a.elements.filterClear2.on("click", function() {
			a.setSelectedFilter("", !0)
		}), a.elements.moveButton.on("click", function() {
			p(a)
		}), a.elements.moveAllButton.on("click", function() {
			r(a)
		}), a.elements.removeButton.on("click", function() {
			q(a)
		}), a.elements.removeAllButton.on("click", function() {
			s(a)
		}), a.elements.filterInput1.on("change keyup", function() {
			l(a, 1)
		}), a.elements.filterInput2.on("change keyup", function() {
			l(a, 2)
		}), a.elements.filterInput2.on("change keyup", function() {
			l(a, 2)
		})
	}
	var u = "bootstrapDualListbox",
		v = {
			bootstrap2Compatible : !1,
			filterTextClear : "show all",
			filterPlaceHolder : "Filter",
			moveSelectedLabel : "Move selected",
			moveAllLabel : "Move all",
			removeSelectedLabel : "Remove selected",
			removeAllLabel : "Remove all",
			moveOnSelect : !0,
			preserveSelectionOnMove : !1,
			selectedListLabel : !1,
			nonSelectedListLabel : !1,
			helperSelectNamePostfix : "_helper",
			selectorMinimalHeight : 100,
			showFilterInputs : !0,
			nonSelectedFilter : "",
			selectedFilter : "",
			filterOnValues : !1,
			doubleMove : !1
		},
		w = /android/i.test(navigator.userAgent.toLowerCase());
	e.prototype = {
		init : function() {
			this.container = a('<div class="bootstrap-duallistbox-container"> <div class="box1">   <label></label>   <span class="info-container">     <span class="info"></span>     <button type="button" class="btn clear1 pull-right"></button>   </span>   <input class="filter form-control ue-form" type="text">   <select multiple="multiple"></select> </div> <div class="btn-box">     <button type="button" class="btn ue-btn move">       <i></i>     </button>     <button type="button" class="btn ue-btn moveall">       <i></i>       <i></i>     </button>     <p class="clearfix" style="margin-bottom:20px"></p>     <button type="button" class="btn ue-btn remove">       <i></i>     </button>     <button type="button" class="btn ue-btn removeall">       <i></i>       <i></i>     </button> </div> <div class="box2">   <label></label>   <span class="info-container">     <span class="info"></span>     <button type="button" class="btn clear2 pull-right"></button>   </span>   <input class="filter form-control ue-form" type="text">   <select multiple="multiple"></select> </div></div>').insertBefore(this.element), this.elements = {
				originalSelect : this.element,
				box1 : a(".box1", this.container),
				box2 : a(".box2", this.container),
				filterInput1 : a(".box1 .filter", this.container),
				filterInput2 : a(".box2 .filter", this.container),
				filterClear1 : a(".box1 .clear1", this.container),
				filterClear2 : a(".box2 .clear2", this.container),
				label1 : a(".box1 > label", this.container),
				label2 : a(".box2 > label", this.container),
				info1 : a(".box1 .info", this.container),
				info2 : a(".box2 .info", this.container),
				select1 : a(".box1 select", this.container),
				select2 : a(".box2 select", this.container),
				moveButton : a(".btn-box .move", this.container),
				removeButton : a(".btn-box .remove", this.container),
				moveAllButton : a(".btn-box .moveall", this.container),
				removeAllButton : a(".btn-box .removeall", this.container),
				form : a(a(".box1 .filter", this.container)[0].form)
			}, this.originalSelectName = this.element.attr("name") || "";
			var b = "bootstrap-duallistbox-nonselected-list_" + this.originalSelectName,
				c = "bootstrap-duallistbox-selected-list_" + this.originalSelectName;
			return this.elements.select1.attr("id", b), this.elements.select2.attr("id", c), this.elements.label1.attr("for", b), this.elements.label2.attr("for", c), this.selectedElements = 0, this.elementCount = 0, this.setBootstrap2Compatible(this.settings.bootstrap2Compatible), this.setFilterTextClear(this.settings.filterTextClear), this.setFilterPlaceHolder(this.settings.filterPlaceHolder), this.setMoveSelectedLabel(this.settings.moveSelectedLabel), this.setMoveAllLabel(this.settings.moveAllLabel), this.setRemoveSelectedLabel(this.settings.removeSelectedLabel), this.setRemoveAllLabel(this.settings.removeAllLabel), this.setMoveOnSelect(this.settings.moveOnSelect), this.setPreserveSelectionOnMove(this.settings.preserveSelectionOnMove), this.setSelectedListLabel(this.settings.selectedListLabel), this.setNonSelectedListLabel(this.settings.nonSelectedListLabel), this.setHelperSelectNamePostfix(this.settings.helperSelectNamePostfix), this.setSelectOrMinimalHeight(this.settings.selectorMinimalHeight), this.setDoubleMove(this.settings.doubleMove), g(this), this.setShowFilterInputs(this.settings.showFilterInputs), this.setNonSelectedFilter(this.settings.nonSelectedFilter), this.setSelectedFilter(this.settings.selectedFilter), this.setInfoText(this.settings.infoText), this.setInfoTextFiltered(this.settings.infoTextFiltered), this.setInfoTextEmpty(this.settings.infoTextEmpty), this.setFilterOnValues(this.settings.filterOnValues), this.element.hide(), t(this), k(this), this.element
		},
		setBootstrap2Compatible : function(a, b) {
			return this.settings.bootstrap2Compatible = a, a ? (this.container.removeClass("row").addClass("row-fluid bs2compatible"), this.container.find(".box1, .box2").removeClass("col-md-5"), this.container.find(".btn-box").removeClass("col-md-1"), this.container.find(".clear1, .clear2").removeClass("btn-default btn-xs").addClass("btn-mini"), this.container.find("input, select").removeClass("form-control"), this.container.find(".btn").removeClass("btn-default"), this.container.find(".moveall > i, .move > i").removeClass("glyphicon glyphicon-arrow-right").addClass("icon-arrow-right"), this.container.find(".removeall > i, .remove > i").removeClass("glyphicon glyphicon-arrow-left").addClass("icon-arrow-left")) : (this.container.removeClass("row-fluid bs2compatible").addClass("row"), this.container.find(".box1, .box2").addClass("col-md-5"), this.container.find(".btn-box").addClass("col-md-1"), this.container.find(".clear1, .clear2").removeClass("btn-mini").addClass("btn-default btn-xs"), this.container.find("input, select").addClass("form-control"), this.container.find(".btn").addClass("btn-default"), this.container.find(".moveall > i, .move > i").removeClass("icon-arrow-right").addClass("glyphicon glyphicon-arrow-right"), this.container.find(".removeall > i, .remove > i").removeClass("icon-arrow-left").addClass("glyphicon glyphicon-arrow-left")), b && k(this), this.element
		},
		setFilterTextClear : function(a, b) {
			return this.settings.filterTextClear = a, this.elements.filterClear1.html(a), this.elements.filterClear2.html(a), b && k(this), this.element
		},
		setFilterPlaceHolder : function(a, b) {
			return this.settings.filterPlaceHolder = a, this.elements.filterInput1.attr("placeholder", a), this.elements.filterInput2.attr("placeholder", a), b && k(this), this.element
		},
		setMoveSelectedLabel : function(a, b) {
			return this.settings.moveSelectedLabel = a, this.elements.moveButton.attr("title", a), b && k(this), this.element
		},
		setMoveAllLabel : function(a, b) {
			return this.settings.moveAllLabel = a, this.elements.moveAllButton.attr("title", a), b && k(this), this.element
		},
		setRemoveSelectedLabel : function(a, b) {
			return this.settings.removeSelectedLabel = a, this.elements.removeButton.attr("title", a), b && k(this), this.element
		},
		setRemoveAllLabel : function(a, b) {
			return this.settings.removeAllLabel = a, this.elements.removeAllButton.attr("title", a), b && k(this), this.element
		},
		setMoveOnSelect : function(a, b) {
			if (w && (a = !0), this.settings.moveOnSelect = a, this.settings.moveOnSelect) {
				this.container.addClass("moveonselect");
				var c = this;
				this.elements.select1.on("change", function() {
					p(c)
				}), this.elements.select2.on("change", function() {
					q(c)
				})
			} else this.container.removeClass("moveonselect"), this.elements.select1.off("change"), this.elements.select2.off("change");
			return b && k(this), this.element
		},
		setDoubleMove : function(a, b) {
			if (w && (a = !1), this.settings.doubleMove = a, this.settings.doubleMove) {
				var c = this;
				this.elements.select1.on("dblclick", function() {
					p(c)
				}), this.elements.select2.on("dblclick", function() {
					q(c)
				})
			} else this.elements.select1.off("dblclick"), this.elements.select2.off("dblclick");
			return b && k(this), this.element
		},
		setPreserveSelectionOnMove : function(a, b) {
			return w && (a = !1), this.settings.preserveSelectionOnMove = a, b && k(this), this.element
		},
		setSelectedListLabel : function(a, b) {
			return this.settings.selectedListLabel = a, a ? this.elements.label2.show().html(a) : this.elements.label2.hide().html(a), b && k(this), this.element
		},
		setNonSelectedListLabel : function(a, b) {
			return this.settings.nonSelectedListLabel = a, a ? this.elements.label1.show().html(a) : this.elements.label1.hide().html(a), b && k(this), this.element
		},
		setHelperSelectNamePostfix : function(a, b) {
			return this.settings.helperSelectNamePostfix = a, a ? (this.elements.select1.attr("name", this.originalSelectName + a + "1"), this.elements.select2.attr("name", this.originalSelectName + a + "2")) : (this.elements.select1.removeAttr("name"), this.elements.select2.removeAttr("name")), b && k(this), this.element
		},
		setSelectOrMinimalHeight : function(a, b) {
			this.settings.selectorMinimalHeight = a;
			var c = this.element.height();
			return this.element.height() < a && (c = a), this.elements.select1.height(c), this.elements.select2.height(c), b && k(this), this.element
		},
		setShowFilterInputs : function(a, b) {
			return a ? (this.elements.filterInput1.show(), this.elements.filterInput2.show()) : (this.setNonSelectedFilter(""), this.setSelectedFilter(""), k(this), this.elements.filterInput1.hide(), this.elements.filterInput2.hide()), this.settings.showFilterInputs = a, b && k(this), this.element
		},
		setNonSelectedFilter : function(a, b) {
			return this.settings.showFilterInputs ? (this.settings.nonSelectedFilter = a, this.elements.filterInput1.val(a), b && k(this), this.element) : void 0
		},
		setSelectedFilter : function(a, b) {
			return this.settings.showFilterInputs ? (this.settings.selectedFilter = a, this.elements.filterInput2.val(a), b && k(this), this.element) : void 0
		},
		setInfoText : function(a, b) {
			return this.settings.infoText = a, b && k(this), this.element
		},
		setInfoTextFiltered : function(a, b) {
			return this.settings.infoTextFiltered = a, b && k(this), this.element
		},
		setInfoTextEmpty : function(a, b) {
			return this.settings.infoTextEmpty = a, b && k(this), this.element
		},
		setFilterOnValues : function(a, b) {
			return this.settings.filterOnValues = a, b && k(this), this.element
		},
		getContainer : function() {
			return this.container
		},
		refresh : function(a) {
			g(this), a ? o(this) : (m(this, 1), m(this, 2)), k(this)
		},
		destroy : function() {
			return this.container.remove(), this.element.show(), a.data(this, "plugin_" + u, null), this.element
		}
	}, a.fn[u] = function(b) {
		var c = arguments;
		if (b === d || "object" == typeof b) return this.each(function() {
				a(this).is("select") ? a.data(this, "plugin_" + u) || a.data(this, "plugin_" + u, new e(this, b)) : a(this).find("select").each(function(c, d) {
					a(d).bootstrapDualListbox(b)
				})
			});
		if ("string" == typeof b && "_" !== b[0] && "init" !== b) {
			var f;
			return this.each(function() {
					var d = a.data(this, "plugin_" + u);
					d instanceof e && "function" == typeof d[b] && (f = d[b].apply(d, Array.prototype.slice.call(c, 1)))
				}), f !== d ? f : this
		}
	}
}(jQuery, window, document), function(a) {
	a.fn.doublebox = function(b) {
		var c = this.bootstrapDualListbox(b),
			d = "";
		return c.selectElement = function() {
				if (null != b.nonSelectedList)
					for (var a in b.nonSelectedList) b.nonSelectedList.hasOwnProperty(a) && (d += "<option value='" + b.nonSelectedList[a][b.optionValue] + "'>" + b.nonSelectedList[a][b.optionText] + "</option>");
				if (null != b.selectedList)
					for (var a in b.selectedList) b.selectedList.hasOwnProperty(a) && (d += "<option value='" + b.selectedList[a][b.optionValue] + "' selected>" + b.selectedList[a][b.optionText] + "</option>");
				c.append(d), c.bootstrapDualListbox("refresh")
			}, c.getSelectedOptions = function() {
				var b = a("#bootstrap-duallistbox-selected-list_doublebox>option").map(function() {
					return a(this).val()
				}).get().join(",");
				return b
			}, c.selectElement(), c
	}
}(jQuery), function(a) {
	a.fn.morequery = function(b) {
		b = a.extend(!0, {
			trigger : "click",
			placement : "bottom",
			title : "更多搜索条件",
			html : !0,
			closeable : !0
		}, b);
		var c = a(this).popover(b);
		return a(this).bind("show.bs.popover", function() {
				a(this).text("精简搜索"), a(this).append(a("<i class='fa fa-angle-up'></i>"))
			}), a(this).bind("hide.bs.popover", function() {
				a(this).text("更多搜索"), a(this).append(a("<i class='fa fa-angle-down'></i>"))
			}), a(this).bind("click", function() {
				JPlaceHolder.init()
			}), c
	}
}(jQuery);