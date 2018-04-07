!function(a) {
	function b(b, c) {
		var d = "#4848fe";
		c.lineColor && (d = c.lineColor), a.each(b, function(a, b) {
			var c = b.fromStateId,
				e = b.toStateID;
			connections.push(r.connection(graphs[maps[c]], graphs[maps[e]], d))
		})
	}
	function c() {
		a.each(connections, function(a, b) {
			r.connection(b)
		})
	}
	function d(b) {
		var d = parseInt(b.style.left, 10),
			e = parseInt(b.style.top, 10);
		if (!(Math.abs(d - a(this).ox) < 5 && Math.abs(e - a(this).oy) < 5)) {
			var f = {
					x : d,
					y : e
				},
				g = a(b).attr("data-id"),
				h = r.getById(g);
			h.attr(f), c()
		}
	}
	function e(b, c, e, f, g, h) {
		c.index = b;var i,
			j;
		i = 0 != e ? w / e * (f - 1) + 30 : 180 * (f - 1) + 20;var k = h.styleKey,
			l = c[k],
			m = h.styleRef[l];
		c.className = m;var n = h.rows,
			o = h.rowHeight;
		c.rowsHeight = n * o, j = g * (c.rowsHeight + 50), c.widthNum = w / e - 30;var p = c.content;
		c.x = i, c.y = j;var q = template("T-graph", {
			data : c
		});
		flowGraph.append(q);var s = a(".ue-flowchart-graph").eq(b);
		for (var f in p) {
			var t = {};
			t.content = p[f], t.height = n * o / p.length;var u = template("row", {
				data : t
			});
			s.find(".ue-flowchart-content").append(u)
		}
		var v = s.height(),
			x = s.width(),
			y = r.rect(0, 0, x, v);
		y.id = c.id, y.attr({
			x : i,
			y : j
		}), y.attr({
			fill : "#fff",
			"fill-opacity" : 0,
			"stroke-width" : 1,
			"stroke-opacity" : 0,
			cursor : "move"
		}), s.width(x), y.attr({
			width : x
		}), graphs.push(y), maps[c.id] = b, s.draggable({
			cursor : "move",
			start : function() {
				d(s[0])
			},
			drag : function() {
				d(s[0])
			}
		})
	}
	function f(c, d) {
		var f = c.states,
			g = c.relations,
			h = -1,
			i = {};
		d && a.extend(i, d);
		for (var j = 0; j < f.length; j++) f[j].order > h && (h = f[j].order);
		for (var k = new Array(h), j = 0; h > j; j++) {
			k[j] = new Array;
			for (var l = 0, m = 0; m < f.length; m++) f[m].order == j + 1 && (k[j][l++] = f[m])
		}
		for (var n = 0, o = 0; h > o; o++)
			for (var j = 0; j < k[o].length; j++) e(n++, k[o][j], h, o + 1, j, i);
		b(g, i)
	}
	Raphael.fn.connection = function(a, b, c, d) {
		a.line && a.from && a.to && (c = a, a = c.from, b = c.to, d = c.text);
		for (var e = a.getBBox(), f = b.getBBox(), g = [ {
					x : e.x + e.width / 2,
					y : e.y - 1
				}, {
					x : e.x + e.width / 2,
					y : e.y + e.height + 1
				}, {
					x : e.x - 1,
					y : e.y + e.height / 2
				}, {
					x : e.x + e.width + 1,
					y : e.y + e.height / 2
				}, {
					x : f.x + f.width / 2,
					y : f.y - 1
				}, {
					x : f.x + f.width / 2,
					y : f.y + f.height + 1
				}, {
					x : f.x - 1,
					y : f.y + f.height / 2
				}, {
					x : f.x + f.width + 1,
					y : f.y + f.height / 2
				} ], h = {}, i = [], j = 0; 4 > j; j++)
			for (var k = 4; 8 > k; k++) {
				var l = Math.abs(g[j].x - g[k].x),
					m = Math.abs(g[j].y - g[k].y);
				(j == k - 4 || (3 != j && 6 != k || g[j].x < g[k].x) && (2 != j && 7 != k || g[j].x > g[k].x) && (0 != j && 5 != k || g[j].y > g[k].y) && (1 != j && 4 != k || g[j].y < g[k].y)) && (i.push(l + m), h[i[i.length - 1]] = [ j, k ])
		}
		if (0 == i.length) var n = [ 0, 4 ];
		else
			n = h[Math.min.apply(Math, i)];
		var o = g[n[0]].x,
			p = g[n[0]].y,
			q = g[n[1]].x,
			r = g[n[1]].y;
		l = Math.max(Math.abs(o - q) / 2, 10), m = Math.max(Math.abs(p - r) / 2, 10);
		var s = [ o, o, o - l, o + l ][n[0]].toFixed(3),
			t = [ p - m, p + m, p, p ][n[0]].toFixed(3),
			u = [ 0, 0, 0, 0, q, q, q - l, q + l ][n[1]].toFixed(3),
			v = [ 0, 0, 0, 0, p + m, p - m, r, r ][n[1]].toFixed(3);
		o = o.toFixed(3), p = p.toFixed(3), q = q.toFixed(3), r = r.toFixed(3);
		var w = [ "M", o, p, "L", s, t, "L", u, v, "L", q, r, "L", "M", q, r, "L" ].join(",");
		if (!c || !c.line) {
			return {
				text : d,
				line : c && c.split && this.path(w).attr({
						stroke : c.split("|")[0],
						fill : "none",
						"stroke-width" : c.split("|")[1] || 1
					}),
				from : a,
				to : b
			}
		}
		c.line.attr({
			path : w
		})
	}, a.fn.showGraph = function(b, c) {
		w = a(this).width(), h = a(this).height(), connections = [], graphs = null, maps = [], config = null, flowCanvas = a("#flowCanvas"), flowCanvas.length || (flowCanvas = a('<div id="flowCanvas"></div>'), this.append(flowCanvas)), r = Raphael("flowCanvas", w, h), flowGraph = a(".flowGraph"), flowGraph.length || (flowGraph = a('<div class="flowGraph"></div>'), flowCanvas.append(flowGraph)), graphs = r.set(), f(b, c)
	}
}(jQuery);