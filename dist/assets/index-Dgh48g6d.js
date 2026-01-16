function On(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function ul(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
}
var Ut = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Kr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, zo, lt, Ce, rn = 1e8, be = 1 / rn, ao = Math.PI * 2, Ku = ao / 4, Qu = 0, cl = Math.sqrt, Zu = Math.cos, Ju = Math.sin, rt = function(e) {
  return typeof e == "string";
}, Ie = function(e) {
  return typeof e == "function";
}, $n = function(e) {
  return typeof e == "number";
}, No = function(e) {
  return typeof e > "u";
}, Pn = function(e) {
  return typeof e == "object";
}, At = function(e) {
  return e !== !1;
}, Fo = function() {
  return typeof window < "u";
}, ji = function(e) {
  return Ie(e) || rt(e);
}, fl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, vt = Array.isArray, ec = /random\([^)]+\)/g, tc = /,\s*/g, da = /(?:-?\.?\d|\.)+/gi, dl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Fr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ns = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, hl = /[+-]=-?[.\d]+/, nc = /[^,'"\[\]\s]+/gi, rc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Oe, vn, lo, Bo, Kt = {}, bs = {}, pl, gl = function(e) {
  return (bs = Qr(e, Kt)) && It;
}, Ho = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Ai = function(e, t) {
  return !t && console.warn(e);
}, ml = function(e, t) {
  return e && (Kt[e] = t) && bs && (bs[e] = t) || Kt;
}, Di = function() {
  return 0;
}, ic = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, fs = {
  suppressEvents: !0,
  kill: !1
}, sc = {
  suppressEvents: !0
}, Go = {}, nr = [], uo = {}, _l, Ht = {}, Fs = {}, ha = 30, ds = [], Vo = "", qo = function(e) {
  var t = e[0], n, i;
  if (Pn(t) || Ie(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
    for (i = ds.length; i-- && !ds[i].targetTest(t); )
      ;
    n = ds[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new Hl(e[i], n))) || e.splice(i, 1);
  return e;
}, xr = function(e) {
  return e._gsap || qo(sn(e))[0]._gsap;
}, vl = function(e, t, n) {
  return (n = e[t]) && Ie(n) ? e[t]() : No(n) && e.getAttribute && e.getAttribute(t) || n;
}, Dt = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, Ne = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, Me = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, qr = function(e, t) {
  var n = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i;
}, oc = function(e, t) {
  for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; )
    ;
  return i < n;
}, xs = function() {
  var e = nr.length, t = nr.slice(0), n, i;
  for (uo = {}, nr.length = 0, n = 0; n < e; n++)
    i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Yo = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, yl = function(e, t, n, i) {
  nr.length && !lt && xs(), e.render(t, n, !!(lt && t < 0 && Yo(e))), nr.length && !lt && xs();
}, bl = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(nc).length < 2 ? t : rt(e) ? e.trim() : e;
}, xl = function(e) {
  return e;
}, Qt = function(e, t) {
  for (var n in t)
    n in e || (e[n] = t[n]);
  return e;
}, ac = function(e) {
  return function(t, n) {
    for (var i in n)
      i in t || i === "duration" && e || i === "ease" || (t[i] = n[i]);
  };
}, Qr = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, pa = function r(e, t) {
  for (var n in t)
    n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = Pn(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
  return e;
}, Ts = function(e, t) {
  var n = {}, i;
  for (i in e)
    i in t || (n[i] = e[i]);
  return n;
}, vi = function(e) {
  var t = e.parent || Oe, n = e.keyframes ? ac(vt(e.keyframes)) : Qt;
  if (At(e.inherit))
    for (; t; )
      n(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, lc = function(e, t) {
  for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; )
    ;
  return n < 0;
}, Tl = function(e, t, n, i, s) {
  var o = e[i], a;
  if (s)
    for (a = t[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t;
}, Ds = function(e, t, n, i) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var s = t._prev, o = t._next;
  s ? s._next = o : e[n] === t && (e[n] = o), o ? o._prev = s : e[i] === t && (e[i] = s), t._next = t._prev = t.parent = null;
}, sr = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Tr = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var n = e; n; )
      n._dirty = 1, n = n.parent;
  return e;
}, uc = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, co = function(e, t, n, i) {
  return e._startAt && (lt ? e._startAt.revert(fs) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, cc = function r(e) {
  return !e || e._ts && r(e.parent);
}, ga = function(e) {
  return e._repeat ? Zr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Zr = function(e, t) {
  var n = Math.floor(e = Me(e / t));
  return e && n === e ? n - 1 : n;
}, Ss = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, Ls = function(e) {
  return e._end = Me(e._start + (e._tDur / Math.abs(e._ts || e._rts || be) || 0));
}, Rs = function(e, t) {
  var n = e._dp;
  return n && n.smoothChildTiming && e._ts && (e._start = Me(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Ls(e), n._dirty || Tr(n, e)), e;
}, Sl = function(e, t) {
  var n;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Ss(e.rawTime(), t), (!t._dur || qi(0, t.totalDuration(), n) - t._tTime > be) && t.render(n, !0)), Tr(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (n = e; n._dp; )
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    e._zTime = -be;
  }
}, xn = function(e, t, n, i) {
  return t.parent && sr(t), t._start = Me(($n(n) ? n : n || e !== Oe ? Jt(e, n, t) : e._time) + t._delay), t._end = Me(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Tl(e, t, "_first", "_last", e._sort ? "_start" : 0), fo(t) || (e._recent = t), i || Sl(e, t), e._ts < 0 && Rs(e, e._tTime), e;
}, wl = function(e, t) {
  return (Kt.ScrollTrigger || Ho("scrollTrigger", t)) && Kt.ScrollTrigger.create(t, e);
}, Cl = function(e, t, n, i, s) {
  if (Xo(e, t, s), !e._initted)
    return 1;
  if (!n && e._pt && !lt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && _l !== qt.frame)
    return nr.push(e), e._lazy = [s, i], 1;
}, fc = function r(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
}, fo = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, dc = function(e, t, n, i) {
  var s = e.ratio, o = t < 0 || !t && (!e._start && fc(e) && !(!e._initted && fo(e)) || (e._ts < 0 || e._dp._ts < 0) && !fo(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, h;
  if (a && e._repeat && (l = qi(0, e._tDur, t), c = Zr(l, a), e._yoyo && c & 1 && (o = 1 - o), c !== Zr(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || lt || i || e._zTime === be || !t && e._zTime) {
    if (!e._initted && Cl(e, t, i, n, l))
      return;
    for (h = e._zTime, e._zTime = t || (n ? be : 0), n || (n = t && !h), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u; )
      u.r(o, u.d), u = u._next;
    t < 0 && co(e, t, n, !0), e._onUpdate && !n && Xt(e, "onUpdate"), l && e._repeat && !n && e.parent && Xt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && sr(e, 1), !n && !lt && (Xt(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, hc = function(e, t, n) {
  var i;
  if (n > t)
    for (i = e._first; i && i._start <= n; ) {
      if (i.data === "isPause" && i._start > t)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= n; ) {
      if (i.data === "isPause" && i._start < t)
        return i;
      i = i._prev;
    }
}, Jr = function(e, t, n, i) {
  var s = e._repeat, o = Me(t) || 0, a = e._tTime / e._tDur;
  return a && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : Me(o * (s + 1) + e._rDelay * s) : o, a > 0 && !i && Rs(e, e._tTime = e._tDur * a), e.parent && Ls(e), n || Tr(e.parent, e), e;
}, ma = function(e) {
  return e instanceof Et ? Tr(e) : Jr(e, e._dur);
}, pc = {
  _start: 0,
  endTime: Di,
  totalDuration: Di
}, Jt = function r(e, t, n) {
  var i = e.labels, s = e._recent || pc, o = e.duration() >= rn ? s.endTime(!1) : e._dur, a, l, u;
  return rt(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), u = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? s : n).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = o), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), u && n && (l = l / 100 * (vt(n) ? n[0] : n).totalDuration()), a > 1 ? r(e, t.substr(0, a - 1), n) + l : o + l)) : t == null ? o : +t;
}, yi = function(e, t, n) {
  var i = $n(t[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a, l;
  if (i && (o.duration = t[1]), o.parent = n, e) {
    for (a = o, l = n; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = At(l.vars.inherit) && l.parent;
    o.immediateRender = At(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1];
  }
  return new Ge(t[0], o, t[s + 1]);
}, ur = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, qi = function(e, t, n) {
  return n < e ? e : n > t ? t : n;
}, mt = function(e, t) {
  return !rt(e) || !(t = rc.exec(e)) ? "" : t[1];
}, gc = function(e, t, n) {
  return ur(n, function(i) {
    return qi(e, t, i);
  });
}, ho = [].slice, El = function(e, t) {
  return e && Pn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Pn(e[0])) && !e.nodeType && e !== vn;
}, mc = function(e, t, n) {
  return n === void 0 && (n = []), e.forEach(function(i) {
    var s;
    return rt(i) && !t || El(i, 1) ? (s = n).push.apply(s, sn(i)) : n.push(i);
  }) || n;
}, sn = function(e, t, n) {
  return Ce && !t && Ce.selector ? Ce.selector(e) : rt(e) && !n && (lo || !ei()) ? ho.call((t || Bo).querySelectorAll(e), 0) : vt(e) ? mc(e, n) : El(e) ? ho.call(e, 0) : e ? [e] : [];
}, po = function(e) {
  return e = sn(e)[0] || Ai("Invalid scope") || {}, function(t) {
    var n = e.current || e.nativeElement || e;
    return sn(t, n.querySelectorAll ? n : n === e ? Ai("Invalid scope") || Bo.createElement("div") : e);
  };
}, Pl = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, kl = function(e) {
  if (Ie(e))
    return e;
  var t = Pn(e) ? e : {
    each: e
  }, n = Sr(t.ease), i = t.from || 0, s = parseFloat(t.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, u = t.axis, c = i, h = i;
  return rt(i) ? c = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (c = i[0], h = i[1]), function(f, p, g) {
    var d = (g || t).length, m = o[d], v, _, y, b, w, E, T, M, k;
    if (!m) {
      if (k = t.grid === "auto" ? 0 : (t.grid || [1, rn])[1], !k) {
        for (T = -rn; T < (T = g[k++].getBoundingClientRect().left) && k < d; )
          ;
        k < d && k--;
      }
      for (m = o[d] = [], v = l ? Math.min(k, d) * c - 0.5 : i % k, _ = k === rn ? 0 : l ? d * h / k - 0.5 : i / k | 0, T = 0, M = rn, E = 0; E < d; E++)
        y = E % k - v, b = _ - (E / k | 0), m[E] = w = u ? Math.abs(u === "y" ? b : y) : cl(y * y + b * b), w > T && (T = w), w < M && (M = w);
      i === "random" && Pl(m), m.max = T - M, m.min = M, m.v = d = (parseFloat(t.amount) || parseFloat(t.each) * (k > d ? d - 1 : u ? u === "y" ? d / k : k : Math.max(k, d / k)) || 0) * (i === "edges" ? -1 : 1), m.b = d < 0 ? s - d : s, m.u = mt(t.amount || t.each) || 0, n = n && d < 0 ? Nl(n) : n;
    }
    return d = (m[f] - m.min) / m.max || 0, Me(m.b + (n ? n(d) : d) * m.v) + m.u;
  };
}, go = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(n) {
    var i = Me(Math.round(parseFloat(n) / e) * e * t);
    return (i - i % 1) / t + ($n(n) ? 0 : mt(n));
  };
}, Ml = function(e, t) {
  var n = vt(e), i, s;
  return !n && Pn(e) && (i = n = e.radius || rn, e.values ? (e = sn(e.values), (s = !$n(e[0])) && (i *= i)) : e = go(e.increment)), ur(t, n ? Ie(e) ? function(o) {
    return s = e(o), Math.abs(s - o) <= i ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = rn, c = 0, h = e.length, f, p; h--; )
      s ? (f = e[h].x - a, p = e[h].y - l, f = f * f + p * p) : f = Math.abs(e[h] - a), f < u && (u = f, c = h);
    return c = !i || u <= i ? e[c] : o, s || c === o || $n(o) ? c : c + mt(o);
  } : go(e));
}, Ol = function(e, t, n, i) {
  return ur(vt(e) ? !t : n === !0 ? !!(n = 0) : !i, function() {
    return vt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * i) / i;
  });
}, _c = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    return t.reduce(function(s, o) {
      return o(s);
    }, i);
  };
}, vc = function(e, t) {
  return function(n) {
    return e(parseFloat(n)) + (t || mt(n));
  };
}, yc = function(e, t, n) {
  return Dl(e, t, 0, 1, n);
}, Al = function(e, t, n) {
  return ur(n, function(i) {
    return e[~~t(i)];
  });
}, bc = function r(e, t, n) {
  var i = t - e;
  return vt(e) ? Al(e, r(0, e.length), t) : ur(n, function(s) {
    return (i + (s - e) % i) % i + e;
  });
}, xc = function r(e, t, n) {
  var i = t - e, s = i * 2;
  return vt(e) ? Al(e, r(0, e.length - 1), t) : ur(n, function(o) {
    return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o);
  });
}, Li = function(e) {
  return e.replace(ec, function(t) {
    var n = t.indexOf("[") + 1, i = t.substring(n || 7, n ? t.indexOf("]") : t.length - 1).split(tc);
    return Ol(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5);
  });
}, Dl = function(e, t, n, i, s) {
  var o = t - e, a = i - n;
  return ur(s, function(l) {
    return n + ((l - e) / o * a || 0);
  });
}, Tc = function r(e, t, n, i) {
  var s = isNaN(e + t) ? 0 : function(p) {
    return (1 - p) * e + p * t;
  };
  if (!s) {
    var o = rt(e), a = {}, l, u, c, h, f;
    if (n === !0 && (i = 1) && (n = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (vt(e) && !vt(t)) {
      for (c = [], h = e.length, f = h - 2, u = 1; u < h; u++)
        c.push(r(e[u - 1], e[u]));
      h--, s = function(g) {
        g *= h;
        var d = Math.min(f, ~~g);
        return c[d](g - d);
      }, n = t;
    } else i || (e = Qr(vt(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        Wo.call(a, e, l, "get", t[l]);
      s = function(g) {
        return Ko(g, a) || (o ? e.p : e);
      };
    }
  }
  return ur(n, s);
}, _a = function(e, t, n) {
  var i = e.labels, s = rn, o, a, l;
  for (o in i)
    a = i[o] - t, a < 0 == !!n && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, Xt = function(e, t, n) {
  var i = e.vars, s = i[t], o = Ce, a = e._ctx, l, u, c;
  if (s)
    return l = i[t + "Params"], u = i.callbackScope || e, n && nr.length && xs(), a && (Ce = a), c = l ? s.apply(u, l) : s.call(u), Ce = o, c;
}, ci = function(e) {
  return sr(e), e.scrollTrigger && e.scrollTrigger.kill(!!lt), e.progress() < 1 && Xt(e, "onInterrupt"), e;
}, Br, Ll = [], Rl = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Fo() || e.headless) {
      var t = e.name, n = Ie(e), i = t && !n && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: Di,
        render: Ko,
        add: Wo,
        kill: Nc,
        modifier: zc,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Uo,
        aliases: {},
        register: 0
      };
      if (ei(), e !== i) {
        if (Ht[t])
          return;
        Qt(i, Qt(Ts(e, s), o)), Qr(i.prototype, Qr(s, Ts(e, o))), Ht[i.prop = t] = i, e.targetTest && (ds.push(i), Go[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      ml(t, i), e.register && e.register(It, i, Lt);
    } else
      Ll.push(e);
}, ye = 255, fi = {
  aqua: [0, ye, ye],
  lime: [0, ye, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ye],
  navy: [0, 0, 128],
  white: [ye, ye, ye],
  olive: [128, 128, 0],
  yellow: [ye, ye, 0],
  orange: [ye, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ye, 0, 0],
  pink: [ye, 192, 203],
  cyan: [0, ye, ye],
  transparent: [ye, ye, ye, 0]
}, Bs = function(e, t, n) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * ye + 0.5 | 0;
}, Il = function(e, t, n) {
  var i = e ? $n(e) ? [e >> 16, e >> 8 & ye, e & ye] : 0 : fi.black, s, o, a, l, u, c, h, f, p, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), fi[e])
      i = fi[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & ye, i & ye, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & ye, e & ye];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(da), !t)
        l = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, s = c * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Bs(l + 1 / 3, s, o), i[1] = Bs(l, s, o), i[2] = Bs(l - 1 / 3, s, o);
      else if (~e.indexOf("="))
        return i = e.match(dl), n && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(da) || fi.transparent;
    i = i.map(Number);
  }
  return t && !g && (s = i[0] / ye, o = i[1] / ye, a = i[2] / ye, h = Math.max(s, o, a), f = Math.min(s, o, a), c = (h + f) / 2, h === f ? l = u = 0 : (p = h - f, u = c > 0.5 ? p / (2 - h - f) : p / (h + f), l = h === s ? (o - a) / p + (o < a ? 6 : 0) : h === o ? (a - s) / p + 2 : (s - o) / p + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
}, $l = function(e) {
  var t = [], n = [], i = -1;
  return e.split(rr).forEach(function(s) {
    var o = s.match(Fr) || [];
    t.push.apply(t, o), n.push(i += o.length + 1);
  }), t.c = n, t;
}, va = function(e, t, n) {
  var i = "", s = (e + i).match(rr), o = t ? "hsla(" : "rgba(", a = 0, l, u, c, h;
  if (!s)
    return e;
  if (s = s.map(function(f) {
    return (f = Il(f, t, 1)) && o + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), n && (c = $l(e), l = n.c, l.join(i) !== c.c.join(i)))
    for (u = e.replace(rr, "1").split(Fr), h = u.length - 1; a < h; a++)
      i += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : n).shift());
  if (!u)
    for (u = e.split(rr), h = u.length - 1; a < h; a++)
      i += u[a] + s[a];
  return i + u[h];
}, rr = (function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in fi)
    r += "|" + e + "\\b";
  return new RegExp(r + ")", "gi");
})(), Sc = /hsl[a]?\(/, zl = function(e) {
  var t = e.join(" "), n;
  if (rr.lastIndex = 0, rr.test(t))
    return n = Sc.test(t), e[1] = va(e[1], n), e[0] = va(e[0], n, $l(e[1])), !0;
}, Ri, qt = (function() {
  var r = Date.now, e = 500, t = 33, n = r(), i = n, s = 1e3 / 240, o = s, a = [], l, u, c, h, f, p, g = function d(m) {
    var v = r() - i, _ = m === !0, y, b, w, E;
    if ((v > e || v < 0) && (n += v - t), i += v, w = i - n, y = w - o, (y > 0 || _) && (E = ++h.frame, f = w - h.time * 1e3, h.time = w = w / 1e3, o += y + (y >= s ? 4 : s - y), b = 1), _ || (l = u(d)), b)
      for (p = 0; p < a.length; p++)
        a[p](w, f, E, m);
  };
  return h = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(m) {
      return f / (1e3 / (m || 60));
    },
    wake: function() {
      pl && (!lo && Fo() && (vn = lo = window, Bo = vn.document || {}, Kt.gsap = It, (vn.gsapVersions || (vn.gsapVersions = [])).push(It.version), gl(bs || vn.GreenSockGlobals || !vn.gsap && vn || {}), Ll.forEach(Rl)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && h.sleep(), u = c || function(m) {
        return setTimeout(m, o - h.time * 1e3 + 1 | 0);
      }, Ri = 1, g(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), Ri = 0, u = Di;
    },
    lagSmoothing: function(m, v) {
      e = m || 1 / 0, t = Math.min(v || 33, e);
    },
    fps: function(m) {
      s = 1e3 / (m || 240), o = h.time * 1e3 + s;
    },
    add: function(m, v, _) {
      var y = v ? function(b, w, E, T) {
        m(b, w, E, T), h.remove(y);
      } : m;
      return h.remove(m), a[_ ? "unshift" : "push"](y), ei(), y;
    },
    remove: function(m, v) {
      ~(v = a.indexOf(m)) && a.splice(v, 1) && p >= v && p--;
    },
    _listeners: a
  }, h;
})(), ei = function() {
  return !Ri && qt.wake();
}, ce = {}, wc = /^[\d.\-M][\d.\-,\s]/, Cc = /["']/g, Ec = function(e) {
  for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], s = 1, o = n.length, a, l, u; s < o; s++)
    l = n[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), t[i] = isNaN(u) ? u.replace(Cc, "").trim() : +u, i = l.substr(a + 1).trim();
  return t;
}, Pc = function(e) {
  var t = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
}, kc = function(e) {
  var t = (e + "").split("("), n = ce[t[0]];
  return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Ec(t[1])] : Pc(e).split(",").map(bl)) : ce._CE && wc.test(e) ? ce._CE("", e) : n;
}, Nl = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Fl = function r(e, t) {
  for (var n = e._first, i; n; )
    n instanceof Et ? r(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? r(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next;
}, Sr = function(e, t) {
  return e && (Ie(e) ? e : ce[e] || kc(e)) || t;
}, Ar = function(e, t, n, i) {
  n === void 0 && (n = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: t,
    easeOut: n,
    easeInOut: i
  }, o;
  return Dt(e, function(a) {
    ce[a] = Kt[a] = s, ce[o = a.toLowerCase()] = n;
    for (var l in s)
      ce[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = ce[a + "." + l] = s[l];
  }), s;
}, Bl = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Hs = function r(e, t, n) {
  var i = t >= 1 ? t : 1, s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = s / ao * (Math.asin(1 / i) || 0), a = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Ju((c - o) * s) + 1;
  }, l = e === "out" ? a : e === "in" ? function(u) {
    return 1 - a(1 - u);
  } : Bl(a);
  return s = ao / s, l.config = function(u, c) {
    return r(e, u, c);
  }, l;
}, Gs = function r(e, t) {
  t === void 0 && (t = 1.70158);
  var n = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, i = e === "out" ? n : e === "in" ? function(s) {
    return 1 - n(1 - s);
  } : Bl(n);
  return i.config = function(s) {
    return r(e, s);
  }, i;
};
Dt("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
  var t = e < 5 ? e + 1 : e;
  Ar(r + ",Power" + (t - 1), e ? function(n) {
    return Math.pow(n, t);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, t);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
  });
});
ce.Linear.easeNone = ce.none = ce.Linear.easeIn;
Ar("Elastic", Hs("in"), Hs("out"), Hs());
(function(r, e) {
  var t = 1 / e, n = 2 * t, i = 2.5 * t, s = function(a) {
    return a < t ? r * a * a : a < n ? r * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? r * (a -= 2.25 / e) * a + 0.9375 : r * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  Ar("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
Ar("Expo", function(r) {
  return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
});
Ar("Circ", function(r) {
  return -(cl(1 - r * r) - 1);
});
Ar("Sine", function(r) {
  return r === 1 ? 1 : -Zu(r * Ku) + 1;
});
Ar("Back", Gs("in"), Gs("out"), Gs());
ce.SteppedEase = ce.steps = Kt.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var n = 1 / e, i = e + (t ? 0 : 1), s = t ? 1 : 0, o = 1 - be;
    return function(a) {
      return ((i * qi(0, o, a) | 0) + s) * n;
    };
  }
};
Kr.ease = ce["quad.out"];
Dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return Vo += r + "," + r + "Params,";
});
var Hl = function(e, t) {
  this.id = Qu++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : vl, this.set = t ? t.getSetter : Uo;
}, Ii = /* @__PURE__ */ (function() {
  function r(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Jr(this, +t.duration, 1, 1), this.data = t.data, Ce && (this._ctx = Ce, Ce.data.push(this)), Ri || qt.wake();
  }
  var e = r.prototype;
  return e.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, e.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, Jr(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(n, i) {
    if (ei(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Rs(this, n), !s._dp || s.parent || Sl(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && xn(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === be || !this._initted && this._dur && n || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), yl(this, n, i)), this;
  }, e.time = function(n, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + ga(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(n, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(n, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + ga(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(n, i) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * s, i) : this._repeat ? Zr(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(n, i) {
    if (!arguments.length)
      return this._rts === -be ? 0 : this._rts;
    if (this._rts === n)
      return this;
    var s = this.parent && this._ts ? Ss(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -be ? 0 : this._rts, this.totalTime(qi(-Math.abs(this._delay), this.totalDuration(), s), i !== !1), Ls(this), uc(this);
  }, e.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ei(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== be && (this._tTime -= be)))), this) : this._ps;
  }, e.startTime = function(n) {
    if (arguments.length) {
      this._start = Me(n);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && xn(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(n) {
    return this._start + (At(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(n) {
    var i = this.parent || this._dp;
    return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ss(i.rawTime(n), this) : this._tTime : this._tTime;
  }, e.revert = function(n) {
    n === void 0 && (n = sc);
    var i = lt;
    return lt = n, Yo(this) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), lt = i, this;
  }, e.globalTime = function(n) {
    for (var i = this, s = arguments.length ? n : i.rawTime(); i; )
      s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(n) : s;
  }, e.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, ma(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(n) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = n, ma(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, e.seek = function(n, i) {
    return this.totalTime(Jt(this, n), At(i));
  }, e.restart = function(n, i) {
    return this.play().totalTime(n ? -this._delay : 0, At(i)), this._dur || (this._zTime = -be), this;
  }, e.play = function(n, i) {
    return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(n, i) {
    return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(n, i) {
    return n != null && this.seek(n, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -be : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -be, this;
  }, e.isActive = function() {
    var n = this.parent || this._dp, i = this._start, s;
    return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(!0)) >= i && s < this.endTime(!0) - be);
  }, e.eventCallback = function(n, i, s) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[n] = i, s && (o[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete o[n], this) : o[n];
  }, e.then = function(n) {
    var i = this, s = i._prom;
    return new Promise(function(o) {
      var a = Ie(n) ? n : xl, l = function() {
        var c = i.then;
        i.then = null, s && s(), Ie(a) && (a = a(i)) && (a.then || a === i) && (i.then = c), o(a), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, e.kill = function() {
    ci(this);
  }, r;
})();
Qt(Ii.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -be,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Et = /* @__PURE__ */ (function(r) {
  ul(e, r);
  function e(n, i) {
    var s;
    return n === void 0 && (n = {}), s = r.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = At(n.sortChildren), Oe && xn(n.parent || Oe, On(s), i), n.reversed && s.reverse(), n.paused && s.paused(!0), n.scrollTrigger && wl(On(s), n.scrollTrigger), s;
  }
  var t = e.prototype;
  return t.to = function(i, s, o) {
    return yi(0, arguments, this), this;
  }, t.from = function(i, s, o) {
    return yi(1, arguments, this), this;
  }, t.fromTo = function(i, s, o, a) {
    return yi(2, arguments, this), this;
  }, t.set = function(i, s, o) {
    return s.duration = 0, s.parent = this, vi(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new Ge(i, s, Jt(this, o), 1), this;
  }, t.call = function(i, s, o) {
    return xn(this, Ge.delayedCall(0, i, s), o);
  }, t.staggerTo = function(i, s, o, a, l, u, c) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new Ge(i, o, Jt(this, l)), this;
  }, t.staggerFrom = function(i, s, o, a, l, u, c) {
    return o.runBackwards = 1, vi(o).immediateRender = At(o.immediateRender), this.staggerTo(i, s, o, a, l, u, c);
  }, t.staggerFromTo = function(i, s, o, a, l, u, c, h) {
    return a.startAt = o, vi(a).immediateRender = At(a.immediateRender), this.staggerTo(i, s, a, l, u, c, h);
  }, t.render = function(i, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : Me(i), h = this._zTime < 0 != i < 0 && (this._initted || !u), f, p, g, d, m, v, _, y, b, w, E, T;
    if (this !== Oe && c > l && i >= 0 && (c = l), c !== this._tTime || o || h) {
      if (a !== this._time && u && (c += this._time - a, i += this._time - a), f = c, b = this._start, y = this._ts, v = !y, h && (u || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (E = this._yoyo, m = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, s, o);
        if (f = Me(c % m), c === l ? (d = this._repeat, f = u) : (w = Me(c / m), d = ~~w, d && d === w && (f = u, d--), f > u && (f = u)), w = Zr(this._tTime, m), !a && this._tTime && w !== d && this._tTime - w * m - this._dur <= 0 && (w = d), E && d & 1 && (f = u - f, T = 1), d !== w && !this._lock) {
          var M = E && w & 1, k = M === (E && d & 1);
          if (d < w && (M = !M), a = M ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (T ? 0 : Me(d * m)), s, !u)._lock = 0, this._tTime = c, !s && this.parent && Xt(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1, w = d), a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, k && (this._lock = 2, a = M ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          Fl(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (_ = hc(this, Me(a), Me(f)), _ && (c -= f - (f = _._start))), this._tTime = c, this._time = f, this._act = !y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && c && u && !s && !w && (Xt(this, "onStart"), this._tTime !== c))
        return this;
      if (f >= a && i >= 0)
        for (p = this._first; p; ) {
          if (g = p._next, (p._act || f >= p._start) && p._ts && _ !== p) {
            if (p.parent !== this)
              return this.render(i, s, o);
            if (p.render(p._ts > 0 ? (f - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (f - p._start) * p._ts, s, o), f !== this._time || !this._ts && !v) {
              _ = 0, g && (c += this._zTime = -be);
              break;
            }
          }
          p = g;
        }
      else {
        p = this._last;
        for (var x = i < 0 ? i : f; p; ) {
          if (g = p._prev, (p._act || x <= p._end) && p._ts && _ !== p) {
            if (p.parent !== this)
              return this.render(i, s, o);
            if (p.render(p._ts > 0 ? (x - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (x - p._start) * p._ts, s, o || lt && Yo(p)), f !== this._time || !this._ts && !v) {
              _ = 0, g && (c += this._zTime = x ? -be : be);
              break;
            }
          }
          p = g;
        }
      }
      if (_ && !s && (this.pause(), _.render(f >= a ? 0 : -be)._zTime = f >= a ? 1 : -1, this._ts))
        return this._start = b, Ls(this), this.render(i, s, o);
      this._onUpdate && !s && Xt(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (b === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && sr(this, 1), !s && !(i < 0 && !a) && (c || a || !l) && (Xt(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, s) {
    var o = this;
    if ($n(s) || (s = Jt(this, s, i)), !(i instanceof Ii)) {
      if (vt(i))
        return i.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (rt(i))
        return this.addLabel(i, s);
      if (Ie(i))
        i = Ge.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? xn(this, i, s) : this;
  }, t.getChildren = function(i, s, o, a) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -rn);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof Ge ? s && l.push(u) : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
    return l;
  }, t.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === i)
        return s[o];
  }, t.remove = function(i) {
    return rt(i) ? this.removeLabel(i) : Ie(i) ? this.killTweensOf(i) : (i.parent === this && Ds(this, i), i === this._recent && (this._recent = this._last), Tr(this));
  }, t.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Me(qt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, s) {
    return this.labels[i] = Jt(this, s), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, s, o) {
    var a = Ge.delayedCall(0, s || Di, o);
    return a.data = "isPause", this._hasPause = 1, xn(this, a, Jt(this, i));
  }, t.removePause = function(i) {
    var s = this._first;
    for (i = Jt(this, i); s; )
      s._start === i && s.data === "isPause" && sr(s), s = s._next;
  }, t.killTweensOf = function(i, s, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--; )
      Kn !== a[l] && a[l].kill(i, s);
    return this;
  }, t.getTweensOf = function(i, s) {
    for (var o = [], a = sn(i), l = this._first, u = $n(s), c; l; )
      l instanceof Ge ? oc(l._targets, a) && (u ? (!Kn || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, t.tweenTo = function(i, s) {
    s = s || {};
    var o = this, a = Jt(o, i), l = s, u = l.startAt, c = l.onStart, h = l.onStartParams, f = l.immediateRender, p, g = Ge.to(o, Qt({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || be,
      onStart: function() {
        if (o.pause(), !p) {
          var m = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          g._dur !== m && Jr(g, m, 0, 1).render(g._time, !0, !0), p = 1;
        }
        c && c.apply(g, h || []);
      }
    }, s));
    return f ? g.render(0) : g;
  }, t.tweenFromTo = function(i, s, o) {
    return this.tweenTo(s, Qt({
      startAt: {
        time: Jt(this, i)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), _a(this, Jt(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), _a(this, Jt(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + be);
  }, t.shiftChildren = function(i, s, o) {
    o === void 0 && (o = 0);
    var a = this._first, l = this.labels, u;
    for (i = Me(i); a; )
      a._start >= o && (a._start += i, a._end += i), a = a._next;
    if (s)
      for (u in l)
        l[u] >= o && (l[u] += i);
    return Tr(this);
  }, t.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(i), s = s._next;
    return r.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Tr(this);
  }, t.totalDuration = function(i) {
    var s = 0, o = this, a = o._last, l = rn, u, c, h;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (h = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, xn(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (s -= c, (!h && !o._dp || h && h.smoothChildTiming) && (o._start += Me(c / o._ts), o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
      Jr(o, o === Oe && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(i) {
    if (Oe._ts && (yl(Oe, Ss(i, Oe)), _l = qt.frame), qt.frame >= ha) {
      ha += Ut.autoSleep || 120;
      var s = Oe._first;
      if ((!s || !s._ts) && Ut.autoSleep && qt._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || qt.sleep();
      }
    }
  }, e;
})(Ii);
Qt(Et.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Mc = function(e, t, n, i, s, o, a) {
  var l = new Lt(this._pt, e, t, 0, 1, Xl, null, s), u = 0, c = 0, h, f, p, g, d, m, v, _;
  for (l.b = n, l.e = i, n += "", i += "", (v = ~i.indexOf("random(")) && (i = Li(i)), o && (_ = [n, i], o(_, e, t), n = _[0], i = _[1]), f = n.match(Ns) || []; h = Ns.exec(i); )
    g = h[0], d = i.substring(u, h.index), p ? p = (p + 1) % 5 : d.substr(-5) === "rgba(" && (p = 1), g !== f[c++] && (m = parseFloat(f[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: d || c === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: g.charAt(1) === "=" ? qr(m, g) - m : parseFloat(g) - m,
      m: p && p < 4 ? Math.round : 0
    }, u = Ns.lastIndex);
  return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = a, (hl.test(i) || v) && (l.e = 0), this._pt = l, l;
}, Wo = function(e, t, n, i, s, o, a, l, u, c) {
  Ie(i) && (i = i(s || 0, e, o));
  var h = e[t], f = n !== "get" ? n : Ie(h) ? u ? e[t.indexOf("set") || !Ie(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : h, p = Ie(h) ? u ? Rc : Yl : jo, g;
  if (rt(i) && (~i.indexOf("random(") && (i = Li(i)), i.charAt(1) === "=" && (g = qr(f, i) + (mt(f) || 0), (g || g === 0) && (i = g))), !c || f !== i || mo)
    return !isNaN(f * i) && i !== "" ? (g = new Lt(this._pt, e, t, +f || 0, i - (f || 0), typeof h == "boolean" ? $c : Wl, 0, p), u && (g.fp = u), a && g.modifier(a, this, e), this._pt = g) : (!h && !(t in e) && Ho(t, i), Mc.call(this, e, t, f, i, p, l || Ut.stringFilter, u));
}, Oc = function(e, t, n, i, s) {
  if (Ie(e) && (e = bi(e, s, t, n, i)), !Pn(e) || e.style && e.nodeType || vt(e) || fl(e))
    return rt(e) ? bi(e, s, t, n, i) : e;
  var o = {}, a;
  for (a in e)
    o[a] = bi(e[a], s, t, n, i);
  return o;
}, Gl = function(e, t, n, i, s, o) {
  var a, l, u, c;
  if (Ht[e] && (a = new Ht[e]()).init(s, a.rawVars ? t[e] : Oc(t[e], i, s, o, n), n, i, o) !== !1 && (n._pt = l = new Lt(n._pt, s, e, 0, 1, a.render, a, 0, a.priority), n !== Br))
    for (u = n._ptLookup[n._targets.indexOf(s)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, Kn, mo, Xo = function r(e, t, n) {
  var i = e.vars, s = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, c = i.runBackwards, h = i.yoyoEase, f = i.keyframes, p = i.autoRevert, g = e._dur, d = e._startAt, m = e._targets, v = e.parent, _ = v && v.data === "nested" ? v.vars.targets : m, y = e._overwrite === "auto" && !zo, b = e.timeline, w, E, T, M, k, x, A, C, D, R, H, q, B;
  if (b && (!f || !s) && (s = "none"), e._ease = Sr(s, Kr.ease), e._yEase = h ? Nl(Sr(h === !0 ? s : h, Kr.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !b && !!i.runBackwards, !b || f && !i.stagger) {
    if (C = m[0] ? xr(m[0]).harness : 0, q = C && i[C.prop], w = Ts(i, Go), d && (d._zTime < 0 && d.progress(1), t < 0 && c && a && !p ? d.render(-1, !0) : d.revert(c && g ? fs : ic), d._lazy = 0), o) {
      if (sr(e._startAt = Ge.set(m, Qt({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !d && At(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Xt(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (lt || !a && !p) && e._startAt.revert(fs), a && g && t <= 0 && n <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && g && !d) {
      if (t && (a = !1), T = Qt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !d && At(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), q && (T[C.prop] = q), sr(e._startAt = Ge.set(m, T)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (lt ? e._startAt.revert(fs) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        r(e._startAt, be, be);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = g && At(l) || l && !g, E = 0; E < m.length; E++) {
      if (k = m[E], A = k._gsap || qo(m)[E]._gsap, e._ptLookup[E] = R = {}, uo[A.id] && nr.length && xs(), H = _ === m ? E : _.indexOf(k), C && (D = new C()).init(k, q || w, e, H, _) !== !1 && (e._pt = M = new Lt(e._pt, k, D.name, 0, 1, D.render, D, 0, D.priority), D._props.forEach(function(U) {
        R[U] = M;
      }), D.priority && (x = 1)), !C || q)
        for (T in w)
          Ht[T] && (D = Gl(T, w, e, H, k, _)) ? D.priority && (x = 1) : R[T] = M = Wo.call(e, k, T, "get", w[T], H, _, 0, i.stringFilter);
      e._op && e._op[E] && e.kill(k, e._op[E]), y && e._pt && (Kn = e, Oe.killTweensOf(k, R, e.globalTime(t)), B = !e.parent, Kn = 0), e._pt && l && (uo[A.id] = 1);
    }
    x && jl(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !B, f && t <= 0 && b.render(rn, !0, !0);
}, Ac = function(e, t, n, i, s, o, a, l) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, h, f, p;
  if (!u)
    for (u = e._ptCache[t] = [], f = e._ptLookup, p = e._targets.length; p--; ) {
      if (c = f[p][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return mo = 1, e.vars[t] = "+=0", Xo(e, a), mo = 0, l ? Ai(t + " not eligible for reset") : 1;
      u.push(c);
    }
  for (p = u.length; p--; )
    h = u[p], c = h._pt || h, c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c, c.c = n - c.s, h.e && (h.e = Ne(n) + mt(h.e)), h.b && (h.b = c.s + mt(h.b));
}, Dc = function(e, t) {
  var n = e[0] ? xr(e[0]).harness : 0, i = n && n.aliases, s, o, a, l;
  if (!i)
    return t;
  s = Qr({}, t);
  for (o in i)
    if (o in s)
      for (l = i[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, Lc = function(e, t, n, i) {
  var s = t.ease || i || "power1.inOut", o, a;
  if (vt(t))
    a = n[e] || (n[e] = []), t.forEach(function(l, u) {
      return a.push({
        t: u / (t.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (o in t)
      a = n[o] || (n[o] = []), o === "ease" || a.push({
        t: parseFloat(e),
        v: t[o],
        e: s
      });
}, bi = function(e, t, n, i, s) {
  return Ie(e) ? e.call(t, n, i, s) : rt(e) && ~e.indexOf("random(") ? Li(e) : e;
}, Vl = Vo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ql = {};
Dt(Vl + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return ql[r] = 1;
});
var Ge = /* @__PURE__ */ (function(r) {
  ul(e, r);
  function e(n, i, s, o) {
    var a;
    typeof i == "number" && (s.duration = i, i = s, s = null), a = r.call(this, o ? i : vi(i)) || this;
    var l = a.vars, u = l.duration, c = l.delay, h = l.immediateRender, f = l.stagger, p = l.overwrite, g = l.keyframes, d = l.defaults, m = l.scrollTrigger, v = l.yoyoEase, _ = i.parent || Oe, y = (vt(n) || fl(n) ? $n(n[0]) : "length" in i) ? [n] : sn(n), b, w, E, T, M, k, x, A;
    if (a._targets = y.length ? qo(y) : Ai("GSAP target " + n + " not found. https://gsap.com", !Ut.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = p, g || f || ji(u) || ji(c)) {
      if (i = a.vars, b = a.timeline = new Et({
        data: "nested",
        defaults: d || {},
        targets: _ && _.data === "nested" ? _.vars.targets : y
      }), b.kill(), b.parent = b._dp = On(a), b._start = 0, f || ji(u) || ji(c)) {
        if (T = y.length, x = f && kl(f), Pn(f))
          for (M in f)
            ~Vl.indexOf(M) && (A || (A = {}), A[M] = f[M]);
        for (w = 0; w < T; w++)
          E = Ts(i, ql), E.stagger = 0, v && (E.yoyoEase = v), A && Qr(E, A), k = y[w], E.duration = +bi(u, On(a), w, k, y), E.delay = (+bi(c, On(a), w, k, y) || 0) - a._delay, !f && T === 1 && E.delay && (a._delay = c = E.delay, a._start += c, E.delay = 0), b.to(k, E, x ? x(w, k, y) : 0), b._ease = ce.none;
        b.duration() ? u = c = 0 : a.timeline = 0;
      } else if (g) {
        vi(Qt(b.vars.defaults, {
          ease: "none"
        })), b._ease = Sr(g.ease || i.ease || "none");
        var C = 0, D, R, H;
        if (vt(g))
          g.forEach(function(q) {
            return b.to(y, q, ">");
          }), b.duration();
        else {
          E = {};
          for (M in g)
            M === "ease" || M === "easeEach" || Lc(M, g[M], E, g.easeEach);
          for (M in E)
            for (D = E[M].sort(function(q, B) {
              return q.t - B.t;
            }), C = 0, w = 0; w < D.length; w++)
              R = D[w], H = {
                ease: R.e,
                duration: (R.t - (w ? D[w - 1].t : 0)) / 100 * u
              }, H[M] = R.v, b.to(y, H, C), C += H.duration;
          b.duration() < u && b.to({}, {
            duration: u - b.duration()
          });
        }
      }
      u || a.duration(u = b.duration());
    } else
      a.timeline = 0;
    return p === !0 && !zo && (Kn = On(a), Oe.killTweensOf(y), Kn = 0), xn(_, On(a), s), i.reversed && a.reverse(), i.paused && a.paused(!0), (h || !u && !g && a._start === Me(_._time) && At(h) && cc(On(a)) && _.data !== "nested") && (a._tTime = -be, a.render(Math.max(0, -c) || 0)), m && wl(On(a), m), a;
  }
  var t = e.prototype;
  return t.render = function(i, s, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = i < 0, h = i > l - be && !c ? l : i < be ? 0 : i, f, p, g, d, m, v, _, y, b;
    if (!u)
      dc(this, i, s, o);
    else if (h !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (f = h, y = this.timeline, this._repeat) {
        if (d = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(d * 100 + i, s, o);
        if (f = Me(h % d), h === l ? (g = this._repeat, f = u) : (m = Me(h / d), g = ~~m, g && g === m ? (f = u, g--) : f > u && (f = u)), v = this._yoyo && g & 1, v && (b = this._yEase, f = u - f), m = Zr(this._tTime, d), f === a && !o && this._initted && g === m)
          return this._tTime = h, this;
        g !== m && (y && this._yEase && Fl(y, v), this.vars.repeatRefresh && !v && !this._lock && f !== d && this._initted && (this._lock = o = 1, this.render(Me(d * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Cl(this, c ? i : f, o, s, h))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && g !== m))
          return this;
        if (u !== this._dur)
          return this.render(i, s, o);
      }
      if (this._tTime = h, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = _ = (b || this._ease)(f / u), this._from && (this.ratio = _ = 1 - _), !a && h && !s && !m && (Xt(this, "onStart"), this._tTime !== h))
        return this;
      for (p = this._pt; p; )
        p.r(_, p.d), p = p._next;
      y && y.render(i < 0 ? i : y._dur * y._ease(f / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (c && co(this, i, s, o), Xt(this, "onUpdate")), this._repeat && g !== m && this.vars.onRepeat && !s && this.parent && Xt(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (c && !this._onUpdate && co(this, i, !0, !0), (i || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && sr(this, 1), !s && !(c && !a) && (h || a || v) && (Xt(this, h === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, s, o, a, l) {
    Ri || qt.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Xo(this, u), c = this._ease(u / this._dur), Ac(this, i, s, o, a, c, u, l) ? this.resetTo(i, s, o, a, 1) : (Rs(this, 0), this.parent || Tl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? ci(this) : this.scrollTrigger && this.scrollTrigger.kill(!!lt), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, Kn && Kn.vars.overwrite !== !0)._first || ci(this), this.parent && o !== this.timeline.totalDuration() && Jr(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = i ? sn(i) : a, u = this._ptLookup, c = this._pt, h, f, p, g, d, m, v;
    if ((!s || s === "all") && lc(a, l))
      return s === "all" && (this._pt = 0), ci(this);
    for (h = this._op = this._op || [], s !== "all" && (rt(s) && (d = {}, Dt(s, function(_) {
      return d[_] = 1;
    }), s = d), s = Dc(a, s)), v = a.length; v--; )
      if (~l.indexOf(a[v])) {
        f = u[v], s === "all" ? (h[v] = s, g = f, p = {}) : (p = h[v] = h[v] || {}, g = s);
        for (d in g)
          m = f && f[d], m && ((!("kill" in m.d) || m.d.kill(d) === !0) && Ds(this, m, "_pt"), delete f[d]), p !== "all" && (p[d] = 1);
      }
    return this._initted && !this._pt && c && ci(this), this;
  }, e.to = function(i, s) {
    return new e(i, s, arguments[2]);
  }, e.from = function(i, s) {
    return yi(1, arguments);
  }, e.delayedCall = function(i, s, o, a) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, e.fromTo = function(i, s, o) {
    return yi(2, arguments);
  }, e.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s);
  }, e.killTweensOf = function(i, s, o) {
    return Oe.killTweensOf(i, s, o);
  }, e;
})(Ii);
Qt(Ge.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Dt("staggerTo,staggerFrom,staggerFromTo", function(r) {
  Ge[r] = function() {
    var e = new Et(), t = ho.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var jo = function(e, t, n) {
  return e[t] = n;
}, Yl = function(e, t, n) {
  return e[t](n);
}, Rc = function(e, t, n, i) {
  return e[t](i.fp, n);
}, Ic = function(e, t, n) {
  return e.setAttribute(t, n);
}, Uo = function(e, t) {
  return Ie(e[t]) ? Yl : No(e[t]) && e.setAttribute ? Ic : jo;
}, Wl = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, $c = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Xl = function(e, t) {
  var n = t._pt, i = "";
  if (!e && t.b)
    i = t.b;
  else if (e === 1 && t.e)
    i = t.e;
  else {
    for (; n; )
      i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
    i += t.c;
  }
  t.set(t.t, t.p, i, t);
}, Ko = function(e, t) {
  for (var n = t._pt; n; )
    n.r(e, n.d), n = n._next;
}, zc = function(e, t, n, i) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === i && s.modifier(e, t, n), s = o;
}, Nc = function(e) {
  for (var t = this._pt, n, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? Ds(this, t, "_pt") : t.dep || (n = 1), t = i;
  return !n;
}, Fc = function(e, t, n, i) {
  i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
}, jl = function(e) {
  for (var t = e._pt, n, i, s, o; t; ) {
    for (n = t._next, i = s; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : o) ? t._prev._next = t : s = t, (t._next = i) ? i._prev = t : o = t, t = n;
  }
  e._pt = s;
}, Lt = /* @__PURE__ */ (function() {
  function r(t, n, i, s, o, a, l, u, c) {
    this.t = n, this.s = s, this.c = o, this.p = i, this.r = a || Wl, this.d = l || this, this.set = u || jo, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = r.prototype;
  return e.modifier = function(n, i, s) {
    this.mSet = this.mSet || this.set, this.set = Fc, this.m = n, this.mt = s, this.tween = i;
  }, r;
})();
Dt(Vo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
  return Go[r] = 1;
});
Kt.TweenMax = Kt.TweenLite = Ge;
Kt.TimelineLite = Kt.TimelineMax = Et;
Oe = new Et({
  sortChildren: !1,
  defaults: Kr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Ut.stringFilter = zl;
var wr = [], hs = {}, Bc = [], ya = 0, Hc = 0, Vs = function(e) {
  return (hs[e] || Bc).map(function(t) {
    return t();
  });
}, _o = function() {
  var e = Date.now(), t = [];
  e - ya > 2 && (Vs("matchMediaInit"), wr.forEach(function(n) {
    var i = n.queries, s = n.conditions, o, a, l, u;
    for (a in i)
      o = vn.matchMedia(i[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, u = 1);
    u && (n.revert(), l && t.push(n));
  }), Vs("matchMediaRevert"), t.forEach(function(n) {
    return n.onMatch(n, function(i) {
      return n.add(null, i);
    });
  }), ya = e, Vs("matchMedia"));
}, Ul = /* @__PURE__ */ (function() {
  function r(t, n) {
    this.selector = n && po(n), this.data = [], this._r = [], this.isReverted = !1, this.id = Hc++, t && this.add(t);
  }
  var e = r.prototype;
  return e.add = function(n, i, s) {
    Ie(n) && (s = i, i = n, n = Ie);
    var o = this, a = function() {
      var u = Ce, c = o.selector, h;
      return u && u !== o && u.data.push(o), s && (o.selector = po(s)), Ce = o, h = i.apply(o, arguments), Ie(h) && o._r.push(h), Ce = u, o.selector = c, o.isReverted = !1, h;
    };
    return o.last = a, n === Ie ? a(o, function(l) {
      return o.add(null, l);
    }) : n ? o[n] = a : a;
  }, e.ignore = function(n) {
    var i = Ce;
    Ce = null, n(this), Ce = i;
  }, e.getTweens = function() {
    var n = [];
    return this.data.forEach(function(i) {
      return i instanceof r ? n.push.apply(n, i.getTweens()) : i instanceof Ge && !(i.parent && i.parent.data === "nested") && n.push(i);
    }), n;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(n, i) {
    var s = this;
    if (n ? (function() {
      for (var a = s.getTweens(), l = s.data.length, u; l--; )
        u = s.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(c) {
          return a.splice(a.indexOf(c), 1);
        }));
      for (a.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, h) {
        return h.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(n);
      }), l = s.data.length; l--; )
        u = s.data[l], u instanceof Et ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof Ge) && u.revert && u.revert(n);
      s._r.forEach(function(c) {
        return c(n, s);
      }), s.isReverted = !0;
    })() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var o = wr.length; o--; )
        wr[o].id === this.id && wr.splice(o, 1);
  }, e.revert = function(n) {
    this.kill(n || {});
  }, r;
})(), Gc = /* @__PURE__ */ (function() {
  function r(t) {
    this.contexts = [], this.scope = t, Ce && Ce.data.push(this);
  }
  var e = r.prototype;
  return e.add = function(n, i, s) {
    Pn(n) || (n = {
      matches: n
    });
    var o = new Ul(0, s || this.scope), a = o.conditions = {}, l, u, c;
    Ce && !o.selector && (o.selector = Ce.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = n;
    for (u in n)
      u === "all" ? c = 1 : (l = vn.matchMedia(n[u]), l && (wr.indexOf(o) < 0 && wr.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(_o) : l.addEventListener("change", _o)));
    return c && i(o, function(h) {
      return o.add(null, h);
    }), this;
  }, e.revert = function(n) {
    this.kill(n || {});
  }, e.kill = function(n) {
    this.contexts.forEach(function(i) {
      return i.kill(n, !0);
    });
  }, r;
})(), ws = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    t.forEach(function(i) {
      return Rl(i);
    });
  },
  timeline: function(e) {
    return new Et(e);
  },
  getTweensOf: function(e, t) {
    return Oe.getTweensOf(e, t);
  },
  getProperty: function(e, t, n, i) {
    rt(e) && (e = sn(e)[0]);
    var s = xr(e || {}).get, o = n ? xl : bl;
    return n === "native" && (n = ""), e && (t ? o((Ht[t] && Ht[t].get || s)(e, t, n, i)) : function(a, l, u) {
      return o((Ht[a] && Ht[a].get || s)(e, a, l, u));
    });
  },
  quickSetter: function(e, t, n) {
    if (e = sn(e), e.length > 1) {
      var i = e.map(function(c) {
        return It.quickSetter(c, t, n);
      }), s = i.length;
      return function(c) {
        for (var h = s; h--; )
          i[h](c);
      };
    }
    e = e[0] || {};
    var o = Ht[t], a = xr(e), l = a.harness && (a.harness.aliases || {})[t] || t, u = o ? function(c) {
      var h = new o();
      Br._pt = 0, h.init(e, n ? c + n : c, Br, 0, [e]), h.render(1, h), Br._pt && Ko(1, Br);
    } : a.set(e, l);
    return o ? u : function(c) {
      return u(e, l, n ? c + n : c, a, 1);
    };
  },
  quickTo: function(e, t, n) {
    var i, s = It.to(e, Qt((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), n || {})), o = function(l, u, c) {
      return s.resetTo(t, l, u, c);
    };
    return o.tween = s, o;
  },
  isTweening: function(e) {
    return Oe.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Sr(e.ease, Kr.ease)), pa(Kr, e || {});
  },
  config: function(e) {
    return pa(Ut, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, n = e.effect, i = e.plugins, s = e.defaults, o = e.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !Ht[a] && !Kt[a] && Ai(t + " effect requires " + a + " plugin.");
    }), Fs[t] = function(a, l, u) {
      return n(sn(a), Qt(l || {}, s), u);
    }, o && (Et.prototype[t] = function(a, l, u) {
      return this.add(Fs[t](a, Pn(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(e, t) {
    ce[e] = Sr(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Sr(e, t) : ce;
  },
  getById: function(e) {
    return Oe.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var n = new Et(e), i, s;
    for (n.smoothChildTiming = At(e.smoothChildTiming), Oe.remove(n), n._dp = 0, n._time = n._tTime = Oe._time, i = Oe._first; i; )
      s = i._next, (t || !(!i._dur && i instanceof Ge && i.vars.onComplete === i._targets[0])) && xn(n, i, i._start - i._delay), i = s;
    return xn(Oe, n, 0), n;
  },
  context: function(e, t) {
    return e ? new Ul(e, t) : Ce;
  },
  matchMedia: function(e) {
    return new Gc(e);
  },
  matchMediaRefresh: function() {
    return wr.forEach(function(e) {
      var t = e.conditions, n, i;
      for (i in t)
        t[i] && (t[i] = !1, n = 1);
      n && e.revert();
    }) || _o();
  },
  addEventListener: function(e, t) {
    var n = hs[e] || (hs[e] = []);
    ~n.indexOf(t) || n.push(t);
  },
  removeEventListener: function(e, t) {
    var n = hs[e], i = n && n.indexOf(t);
    i >= 0 && n.splice(i, 1);
  },
  utils: {
    wrap: bc,
    wrapYoyo: xc,
    distribute: kl,
    random: Ol,
    snap: Ml,
    normalize: yc,
    getUnit: mt,
    clamp: gc,
    splitColor: Il,
    toArray: sn,
    selector: po,
    mapRange: Dl,
    pipe: _c,
    unitize: vc,
    interpolate: Tc,
    shuffle: Pl
  },
  install: gl,
  effects: Fs,
  ticker: qt,
  updateRoot: Et.updateRoot,
  plugins: Ht,
  globalTimeline: Oe,
  core: {
    PropTween: Lt,
    globals: ml,
    Tween: Ge,
    Timeline: Et,
    Animation: Ii,
    getCache: xr,
    _removeLinkedListItem: Ds,
    reverting: function() {
      return lt;
    },
    context: function(e) {
      return e && Ce && (Ce.data.push(e), e._ctx = Ce), Ce;
    },
    suppressOverwrites: function(e) {
      return zo = e;
    }
  }
};
Dt("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return ws[r] = Ge[r];
});
qt.add(Et.updateRoot);
Br = ws.to({}, {
  duration: 0
});
var Vc = function(e, t) {
  for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
    n = n._next;
  return n;
}, qc = function(e, t) {
  var n = e._targets, i, s, o;
  for (i in t)
    for (s = n.length; s--; )
      o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = Vc(o, i)), o && o.modifier && o.modifier(t[i], e, n[s], i));
}, qs = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, s, o) {
      o._onInit = function(a) {
        var l, u;
        if (rt(s) && (l = {}, Dt(s, function(c) {
          return l[c] = 1;
        }), s = l), t) {
          l = {};
          for (u in s)
            l[u] = t(s[u]);
          s = l;
        }
        qc(a, s);
      };
    }
  };
}, It = ws.registerPlugin({
  name: "attr",
  init: function(e, t, n, i, s) {
    var o, a, l;
    this.tween = n;
    for (o in t)
      l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], i, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var n = t._pt; n; )
      lt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var n = t.length; n--; )
      this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
  }
}, qs("roundProps", go), qs("modifiers"), qs("snap", Ml)) || ws;
Ge.version = Et.version = It.version = "3.14.2";
pl = 1;
Fo() && ei();
ce.Power0;
ce.Power1;
ce.Power2;
ce.Power3;
ce.Power4;
ce.Linear;
ce.Quad;
ce.Cubic;
ce.Quart;
ce.Quint;
ce.Strong;
ce.Elastic;
ce.Back;
ce.SteppedEase;
ce.Bounce;
ce.Sine;
ce.Expo;
ce.Circ;
var ba, Qn, Yr, Qo, _r, xa, Zo, Yc = function() {
  return typeof window < "u";
}, zn = {}, hr = 180 / Math.PI, Wr = Math.PI / 180, Dr = Math.atan2, Ta = 1e8, Jo = /([A-Z])/g, Wc = /(left|right|width|margin|padding|x)/i, Xc = /[\s,\(]\S/, Tn = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, vo = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, jc = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Uc = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Kc = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Qc = function(e, t) {
  var n = t.s + t.c * e;
  t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
}, Kl = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Ql = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Zc = function(e, t, n) {
  return e.style[t] = n;
}, Jc = function(e, t, n) {
  return e.style.setProperty(t, n);
}, ef = function(e, t, n) {
  return e._gsap[t] = n;
}, tf = function(e, t, n) {
  return e._gsap.scaleX = e._gsap.scaleY = n;
}, nf = function(e, t, n, i, s) {
  var o = e._gsap;
  o.scaleX = o.scaleY = n, o.renderTransform(s, o);
}, rf = function(e, t, n, i, s) {
  var o = e._gsap;
  o[t] = n, o.renderTransform(s, o);
}, Ae = "transform", Rt = Ae + "Origin", sf = function r(e, t) {
  var n = this, i = this.target, s = i.style, o = i._gsap;
  if (e in zn && s) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Tn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return n.tfm[a] = An(i, a);
      }) : this.tfm[e] = o.x ? o[e] : An(i, e), e === Rt && (this.tfm.zOrigin = o.zOrigin);
    else
      return Tn.transform.split(",").forEach(function(a) {
        return r.call(n, a, t);
      });
    if (this.props.indexOf(Ae) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Rt, t, "")), e = Ae;
  }
  (s || t) && this.props.push(e, t, s[e]);
}, Zl = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, of = function() {
  var e = this.props, t = this.target, n = t.style, i = t._gsap, s, o;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? e[s + 1] === 2 ? t[e[s]](e[s + 2]) : t[e[s]] = e[s + 2] : e[s + 2] ? n[e[s]] = e[s + 2] : n.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Jo, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = Zo(), (!s || !s.isStart) && !n[Ae] && (Zl(n), i.zOrigin && n[Rt] && (n[Rt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Jl = function(e, t) {
  var n = {
    target: e,
    props: [],
    revert: of,
    save: sf
  };
  return e._gsap || It.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return n.save(i);
  }), n;
}, eu, yo = function(e, t) {
  var n = Qn.createElementNS ? Qn.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Qn.createElement(e);
  return n && n.style ? n : Qn.createElement(e);
}, jt = function r(e, t, n) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(Jo, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && r(e, ti(t) || t, 1) || "";
}, Sa = "O,Moz,ms,Ms,Webkit".split(","), ti = function(e, t, n) {
  var i = t || _r, s = i.style, o = 5;
  if (e in s && !n)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Sa[o] + e in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Sa[o] : "") + e;
}, bo = function() {
  Yc() && window.document && (ba = window, Qn = ba.document, Yr = Qn.documentElement, _r = yo("div") || {
    style: {}
  }, yo("div"), Ae = ti(Ae), Rt = Ae + "Origin", _r.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", eu = !!ti("perspective"), Zo = It.core.reverting, Qo = 1);
}, wa = function(e) {
  var t = e.ownerSVGElement, n = yo("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), s;
  i.style.display = "block", n.appendChild(i), Yr.appendChild(n);
  try {
    s = i.getBBox();
  } catch {
  }
  return n.removeChild(i), Yr.removeChild(n), s;
}, Ca = function(e, t) {
  for (var n = t.length; n--; )
    if (e.hasAttribute(t[n]))
      return e.getAttribute(t[n]);
}, tu = function(e) {
  var t, n;
  try {
    t = e.getBBox();
  } catch {
    t = wa(e), n = 1;
  }
  return t && (t.width || t.height) || n || (t = wa(e)), t && !t.width && !t.x && !t.y ? {
    x: +Ca(e, ["x", "cx", "x1"]) || 0,
    y: +Ca(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, nu = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && tu(e));
}, or = function(e, t) {
  if (t) {
    var n = e.style, i;
    t in zn && t !== Rt && (t = Ae), n.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(i === "--" ? t : t.replace(Jo, "-$1").toLowerCase())) : n.removeAttribute(t);
  }
}, Zn = function(e, t, n, i, s, o) {
  var a = new Lt(e._pt, t, n, 0, 1, o ? Ql : Kl);
  return e._pt = a, a.b = i, a.e = s, e._props.push(n), a;
}, Ea = {
  deg: 1,
  rad: 1,
  turn: 1
}, af = {
  grid: 1,
  flex: 1
}, ar = function r(e, t, n, i) {
  var s = parseFloat(n) || 0, o = (n + "").trim().substr((s + "").length) || "px", a = _r.style, l = Wc.test(t), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), h = 100, f = i === "px", p = i === "%", g, d, m, v;
  if (i === o || !s || Ea[i] || Ea[o])
    return s;
  if (o !== "px" && !f && (s = r(e, t, n, "px")), v = e.getCTM && nu(e), (p || o === "%") && (zn[t] || ~t.indexOf("adius")))
    return g = v ? e.getBBox()[l ? "width" : "height"] : e[c], Ne(p ? s / g * h : s / 100 * g);
  if (a[l ? "width" : "height"] = h + (f ? o : i), d = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, v && (d = (e.ownerSVGElement || {}).parentNode), (!d || d === Qn || !d.appendChild) && (d = Qn.body), m = d._gsap, m && p && m.width && l && m.time === qt.time && !m.uncache)
    return Ne(s / m.width * h);
  if (p && (t === "height" || t === "width")) {
    var _ = e.style[t];
    e.style[t] = h + i, g = e[c], _ ? e.style[t] = _ : or(e, t);
  } else
    (p || o === "%") && !af[jt(d, "display")] && (a.position = jt(e, "position")), d === e && (a.position = "static"), d.appendChild(_r), g = _r[c], d.removeChild(_r), a.position = "absolute";
  return l && p && (m = xr(d), m.time = qt.time, m.width = d[c]), Ne(f ? g * s / h : g && s ? h / g * s : 0);
}, An = function(e, t, n, i) {
  var s;
  return Qo || bo(), t in Tn && t !== "transform" && (t = Tn[t], ~t.indexOf(",") && (t = t.split(",")[0])), zn[t] && t !== "transform" ? (s = zi(e, i), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : Es(jt(e, Rt)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = Cs[t] && Cs[t](e, t, n) || jt(e, t) || vl(e, t) || (t === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? ar(e, t, s, n) + n : s;
}, lf = function(e, t, n, i) {
  if (!n || n === "none") {
    var s = ti(t, e, 1), o = s && jt(e, s, 1);
    o && o !== n ? (t = s, n = o) : t === "borderColor" && (n = jt(e, "borderTopColor"));
  }
  var a = new Lt(this._pt, e.style, t, 0, 1, Xl), l = 0, u = 0, c, h, f, p, g, d, m, v, _, y, b, w;
  if (a.b = n, a.e = i, n += "", i += "", i.substring(0, 6) === "var(--" && (i = jt(e, i.substring(4, i.indexOf(")")))), i === "auto" && (d = e.style[t], e.style[t] = i, i = jt(e, t) || i, d ? e.style[t] = d : or(e, t)), c = [n, i], zl(c), n = c[0], i = c[1], f = n.match(Fr) || [], w = i.match(Fr) || [], w.length) {
    for (; h = Fr.exec(i); )
      m = h[0], _ = i.substring(l, h.index), g ? g = (g + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (g = 1), m !== (d = f[u++] || "") && (p = parseFloat(d) || 0, b = d.substr((p + "").length), m.charAt(1) === "=" && (m = qr(p, m) + b), v = parseFloat(m), y = m.substr((v + "").length), l = Fr.lastIndex - y.length, y || (y = y || Ut.units[t] || b, l === i.length && (i += y, a.e += y)), b !== y && (p = ar(e, t, d, y) || 0), a._pt = {
        _next: a._pt,
        p: _ || u === 1 ? _ : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: v - p,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = t === "display" && i === "none" ? Ql : Kl;
  return hl.test(i) && (a.e = 0), this._pt = a, a;
}, Pa = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, uf = function(e) {
  var t = e.split(" "), n = t[0], i = t[1] || "50%";
  return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = Pa[n] || n, t[1] = Pa[i] || i, t.join(" ");
}, cf = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var n = t.t, i = n.style, s = t.u, o = n._gsap, a, l, u;
    if (s === "all" || s === !0)
      i.cssText = "", l = 1;
    else
      for (s = s.split(","), u = s.length; --u > -1; )
        a = s[u], zn[a] && (l = 1, a = a === "transformOrigin" ? Rt : Ae), or(n, a);
    l && (or(n, Ae), o && (o.svg && n.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", zi(n, 1), o.uncache = 1, Zl(i)));
  }
}, Cs = {
  clearProps: function(e, t, n, i, s) {
    if (s.data !== "isFromStart") {
      var o = e._pt = new Lt(e._pt, t, n, 0, 0, cf);
      return o.u = i, o.pr = -10, o.tween = s, e._props.push(n), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, $i = [1, 0, 0, 1, 0, 0], ru = {}, iu = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, ka = function(e) {
  var t = jt(e, Ae);
  return iu(t) ? $i : t.substr(7).match(dl).map(Ne);
}, ea = function(e, t) {
  var n = e._gsap || xr(e), i = e.style, s = ka(e), o, a, l, u;
  return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? $i : s) : (s === $i && !e.offsetParent && e !== Yr && !n.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, a = e.nextElementSibling, Yr.appendChild(e)), s = ka(e), l ? i.display = l : or(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Yr.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, xo = function(e, t, n, i, s, o) {
  var a = e._gsap, l = s || ea(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, h = a.xOffset || 0, f = a.yOffset || 0, p = l[0], g = l[1], d = l[2], m = l[3], v = l[4], _ = l[5], y = t.split(" "), b = parseFloat(y[0]) || 0, w = parseFloat(y[1]) || 0, E, T, M, k;
  n ? l !== $i && (T = p * m - g * d) && (M = b * (m / T) + w * (-d / T) + (d * _ - m * v) / T, k = b * (-g / T) + w * (p / T) - (p * _ - g * v) / T, b = M, w = k) : (E = tu(e), b = E.x + (~y[0].indexOf("%") ? b / 100 * E.width : b), w = E.y + (~(y[1] || y[0]).indexOf("%") ? w / 100 * E.height : w)), i || i !== !1 && a.smooth ? (v = b - u, _ = w - c, a.xOffset = h + (v * p + _ * d) - v, a.yOffset = f + (v * g + _ * m) - _) : a.xOffset = a.yOffset = 0, a.xOrigin = b, a.yOrigin = w, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!n, e.style[Rt] = "0px 0px", o && (Zn(o, a, "xOrigin", u, b), Zn(o, a, "yOrigin", c, w), Zn(o, a, "xOffset", h, a.xOffset), Zn(o, a, "yOffset", f, a.yOffset)), e.setAttribute("data-svg-origin", b + " " + w);
}, zi = function(e, t) {
  var n = e._gsap || new Hl(e);
  if ("x" in n && !t && !n.uncache)
    return n;
  var i = e.style, s = n.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = jt(e, Rt) || "0", c, h, f, p, g, d, m, v, _, y, b, w, E, T, M, k, x, A, C, D, R, H, q, B, U, V, S, fe, De, ut, _e, Le;
  return c = h = f = d = m = v = _ = y = b = 0, p = g = 1, n.svg = !!(e.getCTM && nu(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Ae] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Ae] !== "none" ? l[Ae] : "")), i.scale = i.rotate = i.translate = "none"), T = ea(e, n.svg), n.svg && (n.uncache ? (U = e.getBBox(), u = n.xOrigin - U.x + "px " + (n.yOrigin - U.y) + "px", B = "") : B = !t && e.getAttribute("data-svg-origin"), xo(e, B || u, !!B || n.originIsAbsolute, n.smooth !== !1, T)), w = n.xOrigin || 0, E = n.yOrigin || 0, T !== $i && (A = T[0], C = T[1], D = T[2], R = T[3], c = H = T[4], h = q = T[5], T.length === 6 ? (p = Math.sqrt(A * A + C * C), g = Math.sqrt(R * R + D * D), d = A || C ? Dr(C, A) * hr : 0, _ = D || R ? Dr(D, R) * hr + d : 0, _ && (g *= Math.abs(Math.cos(_ * Wr))), n.svg && (c -= w - (w * A + E * D), h -= E - (w * C + E * R))) : (Le = T[6], ut = T[7], S = T[8], fe = T[9], De = T[10], _e = T[11], c = T[12], h = T[13], f = T[14], M = Dr(Le, De), m = M * hr, M && (k = Math.cos(-M), x = Math.sin(-M), B = H * k + S * x, U = q * k + fe * x, V = Le * k + De * x, S = H * -x + S * k, fe = q * -x + fe * k, De = Le * -x + De * k, _e = ut * -x + _e * k, H = B, q = U, Le = V), M = Dr(-D, De), v = M * hr, M && (k = Math.cos(-M), x = Math.sin(-M), B = A * k - S * x, U = C * k - fe * x, V = D * k - De * x, _e = R * x + _e * k, A = B, C = U, D = V), M = Dr(C, A), d = M * hr, M && (k = Math.cos(M), x = Math.sin(M), B = A * k + C * x, U = H * k + q * x, C = C * k - A * x, q = q * k - H * x, A = B, H = U), m && Math.abs(m) + Math.abs(d) > 359.9 && (m = d = 0, v = 180 - v), p = Ne(Math.sqrt(A * A + C * C + D * D)), g = Ne(Math.sqrt(q * q + Le * Le)), M = Dr(H, q), _ = Math.abs(M) > 2e-4 ? M * hr : 0, b = _e ? 1 / (_e < 0 ? -_e : _e) : 0), n.svg && (B = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !iu(jt(e, Ae)), B && e.setAttribute("transform", B))), Math.abs(_) > 90 && Math.abs(_) < 270 && (s ? (p *= -1, _ += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (g *= -1, _ += _ <= 0 ? 180 : -180)), t = t || n.uncache, n.x = c - ((n.xPercent = c && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + o, n.y = h - ((n.yPercent = h && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + o, n.z = f + o, n.scaleX = Ne(p), n.scaleY = Ne(g), n.rotation = Ne(d) + a, n.rotationX = Ne(m) + a, n.rotationY = Ne(v) + a, n.skewX = _ + a, n.skewY = y + a, n.transformPerspective = b + o, (n.zOrigin = parseFloat(u.split(" ")[2]) || !t && n.zOrigin || 0) && (i[Rt] = Es(u)), n.xOffset = n.yOffset = 0, n.force3D = Ut.force3D, n.renderTransform = n.svg ? df : eu ? su : ff, n.uncache = 0, n;
}, Es = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Ys = function(e, t, n) {
  var i = mt(t);
  return Ne(parseFloat(t) + parseFloat(ar(e, "x", n + "px", i))) + i;
}, ff = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, su(e, t);
}, fr = "0deg", oi = "0px", dr = ") ", su = function(e, t) {
  var n = t || this, i = n.xPercent, s = n.yPercent, o = n.x, a = n.y, l = n.z, u = n.rotation, c = n.rotationY, h = n.rotationX, f = n.skewX, p = n.skewY, g = n.scaleX, d = n.scaleY, m = n.transformPerspective, v = n.force3D, _ = n.target, y = n.zOrigin, b = "", w = v === "auto" && e && e !== 1 || v === !0;
  if (y && (h !== fr || c !== fr)) {
    var E = parseFloat(c) * Wr, T = Math.sin(E), M = Math.cos(E), k;
    E = parseFloat(h) * Wr, k = Math.cos(E), o = Ys(_, o, T * k * -y), a = Ys(_, a, -Math.sin(E) * -y), l = Ys(_, l, M * k * -y + y);
  }
  m !== oi && (b += "perspective(" + m + dr), (i || s) && (b += "translate(" + i + "%, " + s + "%) "), (w || o !== oi || a !== oi || l !== oi) && (b += l !== oi || w ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + dr), u !== fr && (b += "rotate(" + u + dr), c !== fr && (b += "rotateY(" + c + dr), h !== fr && (b += "rotateX(" + h + dr), (f !== fr || p !== fr) && (b += "skew(" + f + ", " + p + dr), (g !== 1 || d !== 1) && (b += "scale(" + g + ", " + d + dr), _.style[Ae] = b || "translate(0, 0)";
}, df = function(e, t) {
  var n = t || this, i = n.xPercent, s = n.yPercent, o = n.x, a = n.y, l = n.rotation, u = n.skewX, c = n.skewY, h = n.scaleX, f = n.scaleY, p = n.target, g = n.xOrigin, d = n.yOrigin, m = n.xOffset, v = n.yOffset, _ = n.forceCSS, y = parseFloat(o), b = parseFloat(a), w, E, T, M, k;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= Wr, u *= Wr, w = Math.cos(l) * h, E = Math.sin(l) * h, T = Math.sin(l - u) * -f, M = Math.cos(l - u) * f, u && (c *= Wr, k = Math.tan(u - c), k = Math.sqrt(1 + k * k), T *= k, M *= k, c && (k = Math.tan(c), k = Math.sqrt(1 + k * k), w *= k, E *= k)), w = Ne(w), E = Ne(E), T = Ne(T), M = Ne(M)) : (w = h, M = f, E = T = 0), (y && !~(o + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (y = ar(p, "x", o, "px"), b = ar(p, "y", a, "px")), (g || d || m || v) && (y = Ne(y + g - (g * w + d * T) + m), b = Ne(b + d - (g * E + d * M) + v)), (i || s) && (k = p.getBBox(), y = Ne(y + i / 100 * k.width), b = Ne(b + s / 100 * k.height)), k = "matrix(" + w + "," + E + "," + T + "," + M + "," + y + "," + b + ")", p.setAttribute("transform", k), _ && (p.style[Ae] = k);
}, hf = function(e, t, n, i, s) {
  var o = 360, a = rt(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? hr : 1), u = l - i, c = i + u + "deg", h, f;
  return a && (h = s.split("_")[1], h === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), h === "cw" && u < 0 ? u = (u + o * Ta) % o - ~~(u / o) * o : h === "ccw" && u > 0 && (u = (u - o * Ta) % o - ~~(u / o) * o)), e._pt = f = new Lt(e._pt, t, n, i, u, jc), f.e = c, f.u = "deg", e._props.push(n), f;
}, Ma = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, pf = function(e, t, n) {
  var i = Ma({}, n._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = n.style, a, l, u, c, h, f, p, g;
  i.svg ? (u = n.getAttribute("transform"), n.setAttribute("transform", ""), o[Ae] = t, a = zi(n, 1), or(n, Ae), n.setAttribute("transform", u)) : (u = getComputedStyle(n)[Ae], o[Ae] = t, a = zi(n, 1), o[Ae] = u);
  for (l in zn)
    u = i[l], c = a[l], u !== c && s.indexOf(l) < 0 && (p = mt(u), g = mt(c), h = p !== g ? ar(n, l, u, g) : parseFloat(u), f = parseFloat(c), e._pt = new Lt(e._pt, a, l, h, f - h, vo), e._pt.u = g || 0, e._props.push(l));
  Ma(a, i);
};
Dt("padding,margin,Width,Radius", function(r, e) {
  var t = "Top", n = "Right", i = "Bottom", s = "Left", o = (e < 3 ? [t, n, i, s] : [t + s, t + n, i + n, i + s]).map(function(a) {
    return e < 2 ? r + a : "border" + a + r;
  });
  Cs[e > 1 ? "border" + r : r] = function(a, l, u, c, h) {
    var f, p;
    if (arguments.length < 4)
      return f = o.map(function(g) {
        return An(a, g, u);
      }), p = f.join(" "), p.split(f[0]).length === 5 ? f[0] : p;
    f = (c + "").split(" "), p = {}, o.forEach(function(g, d) {
      return p[g] = f[d] = f[d] || f[(d - 1) / 2 | 0];
    }), a.init(l, p, h);
  };
});
var ou = {
  name: "css",
  register: bo,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, n, i, s) {
    var o = this._props, a = e.style, l = n.vars.startAt, u, c, h, f, p, g, d, m, v, _, y, b, w, E, T, M, k;
    Qo || bo(), this.styles = this.styles || Jl(e), M = this.styles.props, this.tween = n;
    for (d in t)
      if (d !== "autoRound" && (c = t[d], !(Ht[d] && Gl(d, t, n, i, e, s)))) {
        if (p = typeof c, g = Cs[d], p === "function" && (c = c.call(n, i, e, s), p = typeof c), p === "string" && ~c.indexOf("random(") && (c = Li(c)), g)
          g(this, e, d, c, n) && (T = 1);
        else if (d.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(d) + "").trim(), c += "", rr.lastIndex = 0, rr.test(u) || (m = mt(u), v = mt(c), v ? m !== v && (u = ar(e, d, u, v) + v) : m && (c += m)), this.add(a, "setProperty", u, c, i, s, 0, 0, d), o.push(d), M.push(d, 0, a[d]);
        else if (p !== "undefined") {
          if (l && d in l ? (u = typeof l[d] == "function" ? l[d].call(n, i, e, s) : l[d], rt(u) && ~u.indexOf("random(") && (u = Li(u)), mt(u + "") || u === "auto" || (u += Ut.units[d] || mt(An(e, d)) || ""), (u + "").charAt(1) === "=" && (u = An(e, d))) : u = An(e, d), f = parseFloat(u), _ = p === "string" && c.charAt(1) === "=" && c.substr(0, 2), _ && (c = c.substr(2)), h = parseFloat(c), d in Tn && (d === "autoAlpha" && (f === 1 && An(e, "visibility") === "hidden" && h && (f = 0), M.push("visibility", 0, a.visibility), Zn(this, a, "visibility", f ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), d !== "scale" && d !== "transform" && (d = Tn[d], ~d.indexOf(",") && (d = d.split(",")[0]))), y = d in zn, y) {
            if (this.styles.save(d), k = c, p === "string" && c.substring(0, 6) === "var(--") {
              if (c = jt(e, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var x = e.style.perspective;
                e.style.perspective = c, c = jt(e, "perspective"), x ? e.style.perspective = x : or(e, "perspective");
              }
              h = parseFloat(c);
            }
            if (b || (w = e._gsap, w.renderTransform && !t.parseTransform || zi(e, t.parseTransform), E = t.smoothOrigin !== !1 && w.smooth, b = this._pt = new Lt(this._pt, a, Ae, 0, 1, w.renderTransform, w, 0, -1), b.dep = 1), d === "scale")
              this._pt = new Lt(this._pt, w, "scaleY", w.scaleY, (_ ? qr(w.scaleY, _ + h) : h) - w.scaleY || 0, vo), this._pt.u = 0, o.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              M.push(Rt, 0, a[Rt]), c = uf(c), w.svg ? xo(e, c, 0, E, 0, this) : (v = parseFloat(c.split(" ")[2]) || 0, v !== w.zOrigin && Zn(this, w, "zOrigin", w.zOrigin, v), Zn(this, a, d, Es(u), Es(c)));
              continue;
            } else if (d === "svgOrigin") {
              xo(e, c, 1, E, 0, this);
              continue;
            } else if (d in ru) {
              hf(this, w, d, f, _ ? qr(f, _ + c) : c);
              continue;
            } else if (d === "smoothOrigin") {
              Zn(this, w, "smooth", w.smooth, c);
              continue;
            } else if (d === "force3D") {
              w[d] = c;
              continue;
            } else if (d === "transform") {
              pf(this, c, e);
              continue;
            }
          } else d in a || (d = ti(d) || d);
          if (y || (h || h === 0) && (f || f === 0) && !Xc.test(c) && d in a)
            m = (u + "").substr((f + "").length), h || (h = 0), v = mt(c) || (d in Ut.units ? Ut.units[d] : m), m !== v && (f = ar(e, d, u, v)), this._pt = new Lt(this._pt, y ? w : a, d, f, (_ ? qr(f, _ + h) : h) - f, !y && (v === "px" || d === "zIndex") && t.autoRound !== !1 ? Qc : vo), this._pt.u = v || 0, y && k !== c ? (this._pt.b = u, this._pt.e = k, this._pt.r = Kc) : m !== v && v !== "%" && (this._pt.b = u, this._pt.r = Uc);
          else if (d in a)
            lf.call(this, e, d, u, _ ? _ + c : c);
          else if (d in e)
            this.add(e, d, u || e[d], _ ? _ + c : c, i, s);
          else if (d !== "parseTransform") {
            Ho(d, c);
            continue;
          }
          y || (d in a ? M.push(d, 0, a[d]) : typeof e[d] == "function" ? M.push(d, 2, e[d]()) : M.push(d, 1, u || e[d])), o.push(d);
        }
      }
    T && jl(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Zo())
      for (var n = t._pt; n; )
        n.r(e, n.d), n = n._next;
    else
      t.styles.revert();
  },
  get: An,
  aliases: Tn,
  getSetter: function(e, t, n) {
    var i = Tn[t];
    return i && i.indexOf(",") < 0 && (t = i), t in zn && t !== Rt && (e._gsap.x || An(e, "x")) ? n && xa === n ? t === "scale" ? tf : ef : (xa = n || {}) && (t === "scale" ? nf : rf) : e.style && !No(e.style[t]) ? Zc : ~t.indexOf("-") ? Jc : Uo(e, t);
  },
  core: {
    _removeProperty: or,
    _getMatrix: ea
  }
};
It.utils.checkPrefix = ti;
It.core.getStyleSaver = Jl;
(function(r, e, t, n) {
  var i = Dt(r + "," + e + "," + t, function(s) {
    zn[s] = 1;
  });
  Dt(e, function(s) {
    Ut.units[s] = "deg", ru[s] = 1;
  }), Tn[i[13]] = r + "," + e, Dt(n, function(s) {
    var o = s.split(":");
    Tn[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  Ut.units[r] = "px";
});
It.registerPlugin(ou);
var on = It.registerPlugin(ou) || It;
on.core.Tween;
on.config({
  nullTargetWarn: !1
});
function gf(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function mf(r, e, t) {
  return e && gf(r.prototype, e), r;
}
var at, ps, Yt, Jn, er, Xr, au, pr, xi, lu, Ln, hn, uu, cu = function() {
  return at || typeof window < "u" && (at = window.gsap) && at.registerPlugin && at;
}, fu = 1, Hr = [], oe = [], Cn = [], Ti = Date.now, To = function(e, t) {
  return t;
}, _f = function() {
  var e = xi.core, t = e.bridge || {}, n = e._scrollers, i = e._proxies;
  n.push.apply(n, oe), i.push.apply(i, Cn), oe = n, Cn = i, To = function(o, a) {
    return t[o](a);
  };
}, ir = function(e, t) {
  return ~Cn.indexOf(e) && Cn[Cn.indexOf(e) + 1][t];
}, Si = function(e) {
  return !!~lu.indexOf(e);
}, xt = function(e, t, n, i, s) {
  return e.addEventListener(t, n, {
    passive: i !== !1,
    capture: !!s
  });
}, bt = function(e, t, n, i) {
  return e.removeEventListener(t, n, !!i);
}, Ui = "scrollLeft", Ki = "scrollTop", So = function() {
  return Ln && Ln.isPressed || oe.cache++;
}, Ps = function(e, t) {
  var n = function i(s) {
    if (s || s === 0) {
      fu && (Yt.history.scrollRestoration = "manual");
      var o = Ln && Ln.isPressed;
      s = i.v = Math.round(s) || (Ln && Ln.iOS ? 1 : 0), e(s), i.cacheID = oe.cache, o && To("ss", s);
    } else (t || oe.cache !== i.cacheID || To("ref")) && (i.cacheID = oe.cache, i.v = e());
    return i.v + i.offset;
  };
  return n.offset = 0, e && n;
}, Pt = {
  s: Ui,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Ps(function(r) {
    return arguments.length ? Yt.scrollTo(r, Ue.sc()) : Yt.pageXOffset || Jn[Ui] || er[Ui] || Xr[Ui] || 0;
  })
}, Ue = {
  s: Ki,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: Pt,
  sc: Ps(function(r) {
    return arguments.length ? Yt.scrollTo(Pt.sc(), r) : Yt.pageYOffset || Jn[Ki] || er[Ki] || Xr[Ki] || 0;
  })
}, Ot = function(e, t) {
  return (t && t._ctx && t._ctx.selector || at.utils.toArray)(e)[0] || (typeof e == "string" && at.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, vf = function(e, t) {
  for (var n = t.length; n--; )
    if (t[n] === e || t[n].contains(e))
      return !0;
  return !1;
}, lr = function(e, t) {
  var n = t.s, i = t.sc;
  Si(e) && (e = Jn.scrollingElement || er);
  var s = oe.indexOf(e), o = i === Ue.sc ? 1 : 2;
  !~s && (s = oe.push(e) - 1), oe[s + o] || xt(e, "scroll", So);
  var a = oe[s + o], l = a || (oe[s + o] = Ps(ir(e, n), !0) || (Si(e) ? i : Ps(function(u) {
    return arguments.length ? e[n] = u : e[n];
  })));
  return l.target = e, a || (l.smooth = at.getProperty(e, "scrollBehavior") === "smooth"), l;
}, wo = function(e, t, n) {
  var i = e, s = e, o = Ti(), a = o, l = t || 50, u = Math.max(500, l * 3), c = function(g, d) {
    var m = Ti();
    d || m - o > l ? (s = i, i = g, a = o, o = m) : n ? i += g : i = s + (g - s) / (m - a) * (o - a);
  }, h = function() {
    s = i = n ? 0 : i, a = o = 0;
  }, f = function(g) {
    var d = a, m = s, v = Ti();
    return (g || g === 0) && g !== i && c(g), o === a || v - a > u ? 0 : (i + (n ? m : -m)) / ((n ? v : o) - d) * 1e3;
  };
  return {
    update: c,
    reset: h,
    getVelocity: f
  };
}, ai = function(e, t) {
  return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Oa = function(e) {
  var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
  return Math.abs(t) >= Math.abs(n) ? t : n;
}, du = function() {
  xi = at.core.globals().ScrollTrigger, xi && xi.core && _f();
}, hu = function(e) {
  return at = e || cu(), !ps && at && typeof document < "u" && document.body && (Yt = window, Jn = document, er = Jn.documentElement, Xr = Jn.body, lu = [Yt, Jn, er, Xr], at.utils.clamp, uu = at.core.context || function() {
  }, pr = "onpointerenter" in Xr ? "pointer" : "mouse", au = Fe.isTouch = Yt.matchMedia && Yt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Yt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, hn = Fe.eventTypes = ("ontouchstart" in er ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in er ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return fu = 0;
  }, 500), du(), ps = 1), ps;
};
Pt.op = Ue;
oe.cache = 0;
var Fe = /* @__PURE__ */ (function() {
  function r(t) {
    this.init(t);
  }
  var e = r.prototype;
  return e.init = function(n) {
    ps || hu(at) || console.warn("Please gsap.registerPlugin(Observer)"), xi || du();
    var i = n.tolerance, s = n.dragMinimum, o = n.type, a = n.target, l = n.lineHeight, u = n.debounce, c = n.preventDefault, h = n.onStop, f = n.onStopDelay, p = n.ignore, g = n.wheelSpeed, d = n.event, m = n.onDragStart, v = n.onDragEnd, _ = n.onDrag, y = n.onPress, b = n.onRelease, w = n.onRight, E = n.onLeft, T = n.onUp, M = n.onDown, k = n.onChangeX, x = n.onChangeY, A = n.onChange, C = n.onToggleX, D = n.onToggleY, R = n.onHover, H = n.onHoverEnd, q = n.onMove, B = n.ignoreCheck, U = n.isNormalizer, V = n.onGestureStart, S = n.onGestureEnd, fe = n.onWheel, De = n.onEnable, ut = n.onDisable, _e = n.onClick, Le = n.scrollSpeed, qe = n.capture, Ee = n.allowClicks, Ke = n.lockAxis, Qe = n.onLockAxis;
    this.target = a = Ot(a) || er, this.vars = n, p && (p = at.utils.toArray(p)), i = i || 1e-9, s = s || 0, g = g || 1, Le = Le || 1, o = o || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(Yt.getComputedStyle(Xr).lineHeight) || 22);
    var ln, Ze, Ye, le, Pe, it, yt, O = this, ct = 0, I = 0, P = n.passive || !c && n.passive !== !1, L = lr(a, Pt), G = lr(a, Ue), X = L(), Q = G(), ie = ~o.indexOf("touch") && !~o.indexOf("pointer") && hn[0] === "pointerdown", $e = Si(a), ee = a.ownerDocument || Jn, xe = [0, 0, 0], de = [0, 0, 0], ae = 0, We = function() {
      return ae = Ti();
    }, F = function(W, he) {
      return (O.event = W) && p && vf(W.target, p) || he && ie && W.pointerType !== "touch" || B && B(W, he);
    }, Fn = function() {
      O._vx.reset(), O._vy.reset(), Ze.pause(), h && h(O);
    }, Mt = function() {
      var W = O.deltaX = Oa(xe), he = O.deltaY = Oa(de), $ = Math.abs(W) >= i, Z = Math.abs(he) >= i;
      A && ($ || Z) && A(O, W, he, xe, de), $ && (w && O.deltaX > 0 && w(O), E && O.deltaX < 0 && E(O), k && k(O), C && O.deltaX < 0 != ct < 0 && C(O), ct = O.deltaX, xe[0] = xe[1] = xe[2] = 0), Z && (M && O.deltaY > 0 && M(O), T && O.deltaY < 0 && T(O), x && x(O), D && O.deltaY < 0 != I < 0 && D(O), I = O.deltaY, de[0] = de[1] = de[2] = 0), (le || Ye) && (q && q(O), Ye && (m && Ye === 1 && m(O), _ && _(O), Ye = 0), le = !1), it && !(it = !1) && Qe && Qe(O), Pe && (fe(O), Pe = !1), ln = 0;
    }, $t = function(W, he, $) {
      xe[$] += W, de[$] += he, O._vx.update(W), O._vy.update(he), u ? ln || (ln = requestAnimationFrame(Mt)) : Mt();
    }, kn = function(W, he) {
      Ke && !yt && (O.axis = yt = Math.abs(W) > Math.abs(he) ? "x" : "y", it = !0), yt !== "y" && (xe[2] += W, O._vx.update(W, !0)), yt !== "x" && (de[2] += he, O._vy.update(he, !0)), u ? ln || (ln = requestAnimationFrame(Mt)) : Mt();
    }, Zt = function(W) {
      if (!F(W, 1)) {
        W = ai(W, c);
        var he = W.clientX, $ = W.clientY, Z = he - O.x, Y = $ - O.y, J = O.isDragging;
        O.x = he, O.y = $, (J || (Z || Y) && (Math.abs(O.startX - he) >= s || Math.abs(O.startY - $) >= s)) && (Ye || (Ye = J ? 2 : 1), J || (O.isDragging = !0), kn(Z, Y));
      }
    }, un = O.onPress = function(j) {
      F(j, 1) || j && j.button || (O.axis = yt = null, Ze.pause(), O.isPressed = !0, j = ai(j), ct = I = 0, O.startX = O.x = j.clientX, O.startY = O.y = j.clientY, O._vx.reset(), O._vy.reset(), xt(U ? a : ee, hn[1], Zt, P, !0), O.deltaX = O.deltaY = 0, y && y(O));
    }, K = O.onRelease = function(j) {
      if (!F(j, 1)) {
        bt(U ? a : ee, hn[1], Zt, !0);
        var W = !isNaN(O.y - O.startY), he = O.isDragging, $ = he && (Math.abs(O.x - O.startX) > 3 || Math.abs(O.y - O.startY) > 3), Z = ai(j);
        !$ && W && (O._vx.reset(), O._vy.reset(), c && Ee && at.delayedCall(0.08, function() {
          if (Ti() - ae > 300 && !j.defaultPrevented) {
            if (j.target.click)
              j.target.click();
            else if (ee.createEvent) {
              var Y = ee.createEvent("MouseEvents");
              Y.initMouseEvent("click", !0, !0, Yt, 1, Z.screenX, Z.screenY, Z.clientX, Z.clientY, !1, !1, !1, !1, 0, null), j.target.dispatchEvent(Y);
            }
          }
        })), O.isDragging = O.isGesturing = O.isPressed = !1, h && he && !U && Ze.restart(!0), Ye && Mt(), v && he && v(O), b && b(O, $);
      }
    }, pn = function(W) {
      return W.touches && W.touches.length > 1 && (O.isGesturing = !0) && V(W, O.isDragging);
    }, Je = function() {
      return (O.isGesturing = !1) || S(O);
    }, pe = function(W) {
      if (!F(W)) {
        var he = L(), $ = G();
        $t((he - X) * Le, ($ - Q) * Le, 1), X = he, Q = $, h && Ze.restart(!0);
      }
    }, Se = function(W) {
      if (!F(W)) {
        W = ai(W, c), fe && (Pe = !0);
        var he = (W.deltaMode === 1 ? l : W.deltaMode === 2 ? Yt.innerHeight : 1) * g;
        $t(W.deltaX * he, W.deltaY * he, 0), h && !U && Ze.restart(!0);
      }
    }, zt = function(W) {
      if (!F(W)) {
        var he = W.clientX, $ = W.clientY, Z = he - O.x, Y = $ - O.y;
        O.x = he, O.y = $, le = !0, h && Ze.restart(!0), (Z || Y) && kn(Z, Y);
      }
    }, cn = function(W) {
      O.event = W, R(O);
    }, Be = function(W) {
      O.event = W, H(O);
    }, fn = function(W) {
      return F(W) || ai(W, c) && _e(O);
    };
    Ze = O._dc = at.delayedCall(f || 0.25, Fn).pause(), O.deltaX = O.deltaY = 0, O._vx = wo(0, 50, !0), O._vy = wo(0, 50, !0), O.scrollX = L, O.scrollY = G, O.isDragging = O.isGesturing = O.isPressed = !1, uu(this), O.enable = function(j) {
      return O.isEnabled || (xt($e ? ee : a, "scroll", So), o.indexOf("scroll") >= 0 && xt($e ? ee : a, "scroll", pe, P, qe), o.indexOf("wheel") >= 0 && xt(a, "wheel", Se, P, qe), (o.indexOf("touch") >= 0 && au || o.indexOf("pointer") >= 0) && (xt(a, hn[0], un, P, qe), xt(ee, hn[2], K), xt(ee, hn[3], K), Ee && xt(a, "click", We, !0, !0), _e && xt(a, "click", fn), V && xt(ee, "gesturestart", pn), S && xt(ee, "gestureend", Je), R && xt(a, pr + "enter", cn), H && xt(a, pr + "leave", Be), q && xt(a, pr + "move", zt)), O.isEnabled = !0, O.isDragging = O.isGesturing = O.isPressed = le = Ye = !1, O._vx.reset(), O._vy.reset(), X = L(), Q = G(), j && j.type && un(j), De && De(O)), O;
    }, O.disable = function() {
      O.isEnabled && (Hr.filter(function(j) {
        return j !== O && Si(j.target);
      }).length || bt($e ? ee : a, "scroll", So), O.isPressed && (O._vx.reset(), O._vy.reset(), bt(U ? a : ee, hn[1], Zt, !0)), bt($e ? ee : a, "scroll", pe, qe), bt(a, "wheel", Se, qe), bt(a, hn[0], un, qe), bt(ee, hn[2], K), bt(ee, hn[3], K), bt(a, "click", We, !0), bt(a, "click", fn), bt(ee, "gesturestart", pn), bt(ee, "gestureend", Je), bt(a, pr + "enter", cn), bt(a, pr + "leave", Be), bt(a, pr + "move", zt), O.isEnabled = O.isPressed = O.isDragging = !1, ut && ut(O));
    }, O.kill = O.revert = function() {
      O.disable();
      var j = Hr.indexOf(O);
      j >= 0 && Hr.splice(j, 1), Ln === O && (Ln = 0);
    }, Hr.push(O), U && Si(a) && (Ln = O), O.enable(d);
  }, mf(r, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), r;
})();
Fe.version = "3.14.2";
Fe.create = function(r) {
  return new Fe(r);
};
Fe.register = hu;
Fe.getAll = function() {
  return Hr.slice();
};
Fe.getById = function(r) {
  return Hr.filter(function(e) {
    return e.vars.id === r;
  })[0];
};
cu() && at.registerPlugin(Fe);
var N, zr, se, Te, Vt, me, ta, ks, Ni, wi, di, Qi, pt, Is, Co, wt, Aa, Da, Nr, pu, Ws, gu, St, Eo, mu, _u, Yn, Po, na, jr, ra, Ci, ko, Xs, Zi = 1, gt = Date.now, js = gt(), an = 0, hi = 0, La = function(e, t, n) {
  var i = Bt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return n["_" + t + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e;
}, Ra = function(e, t) {
  return t && (!Bt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, yf = function r() {
  return hi && requestAnimationFrame(r);
}, Ia = function() {
  return Is = 1;
}, $a = function() {
  return Is = 0;
}, yn = function(e) {
  return e;
}, pi = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, vu = function() {
  return typeof window < "u";
}, yu = function() {
  return N || vu() && (N = window.gsap) && N.registerPlugin && N;
}, kr = function(e) {
  return !!~ta.indexOf(e);
}, bu = function(e) {
  return (e === "Height" ? ra : se["inner" + e]) || Vt["client" + e] || me["client" + e];
}, xu = function(e) {
  return ir(e, "getBoundingClientRect") || (kr(e) ? function() {
    return ys.width = se.innerWidth, ys.height = ra, ys;
  } : function() {
    return Dn(e);
  });
}, bf = function(e, t, n) {
  var i = n.d, s = n.d2, o = n.a;
  return (o = ir(e, "getBoundingClientRect")) ? function() {
    return o()[i];
  } : function() {
    return (t ? bu(s) : e["client" + s]) || 0;
  };
}, xf = function(e, t) {
  return !t || ~Cn.indexOf(e) ? xu(e) : function() {
    return ys;
  };
}, Sn = function(e, t) {
  var n = t.s, i = t.d2, s = t.d, o = t.a;
  return Math.max(0, (n = "scroll" + i) && (o = ir(e, n)) ? o() - xu(e)()[s] : kr(e) ? (Vt[n] || me[n]) - bu(i) : e[n] - e["offset" + i]);
}, Ji = function(e, t) {
  for (var n = 0; n < Nr.length; n += 3)
    (!t || ~t.indexOf(Nr[n + 1])) && e(Nr[n], Nr[n + 1], Nr[n + 2]);
}, Bt = function(e) {
  return typeof e == "string";
}, _t = function(e) {
  return typeof e == "function";
}, gi = function(e) {
  return typeof e == "number";
}, gr = function(e) {
  return typeof e == "object";
}, li = function(e, t, n) {
  return e && e.progress(t ? 0 : 1) && n && e.pause();
}, Us = function(e, t) {
  if (e.enabled) {
    var n = e._ctx ? e._ctx.add(function() {
      return t(e);
    }) : t(e);
    n && n.totalTime && (e.callbackAnimation = n);
  }
}, Lr = Math.abs, Tu = "left", Su = "top", ia = "right", sa = "bottom", Cr = "width", Er = "height", Ei = "Right", Pi = "Left", ki = "Top", Mi = "Bottom", He = "padding", tn = "margin", ni = "Width", oa = "Height", je = "px", nn = function(e) {
  return se.getComputedStyle(e);
}, Tf = function(e) {
  var t = nn(e).position;
  e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, za = function(e, t) {
  for (var n in t)
    n in e || (e[n] = t[n]);
  return e;
}, Dn = function(e, t) {
  var n = t && nn(e)[Co] !== "matrix(1, 0, 0, 1, 0, 0)" && N.to(e, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), i = e.getBoundingClientRect();
  return n && n.progress(0).kill(), i;
}, Ms = function(e, t) {
  var n = t.d2;
  return e["offset" + n] || e["client" + n] || 0;
}, wu = function(e) {
  var t = [], n = e.labels, i = e.duration(), s;
  for (s in n)
    t.push(n[s] / i);
  return t;
}, Sf = function(e) {
  return function(t) {
    return N.utils.snap(wu(e), t);
  };
}, aa = function(e) {
  var t = N.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function(i, s) {
    return i - s;
  });
  return n ? function(i, s, o) {
    o === void 0 && (o = 1e-3);
    var a;
    if (!s)
      return t(i);
    if (s > 0) {
      for (i -= o, a = 0; a < n.length; a++)
        if (n[a] >= i)
          return n[a];
      return n[a - 1];
    } else
      for (a = n.length, i += o; a--; )
        if (n[a] <= i)
          return n[a];
    return n[0];
  } : function(i, s, o) {
    o === void 0 && (o = 1e-3);
    var a = t(i);
    return !s || Math.abs(a - i) < o || a - i < 0 == s < 0 ? a : t(s < 0 ? i - e : i + e);
  };
}, wf = function(e) {
  return function(t, n) {
    return aa(wu(e))(t, n.direction);
  };
}, es = function(e, t, n, i) {
  return n.split(",").forEach(function(s) {
    return e(t, s, i);
  });
}, nt = function(e, t, n, i, s) {
  return e.addEventListener(t, n, {
    passive: !i,
    capture: !!s
  });
}, tt = function(e, t, n, i) {
  return e.removeEventListener(t, n, !!i);
}, ts = function(e, t, n) {
  n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, Na = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, ns = {
  toggleActions: "play",
  anticipatePin: 0
}, Os = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, gs = function(e, t) {
  if (Bt(e)) {
    var n = e.indexOf("="), i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
    ~n && (e.indexOf("%") > n && (i *= t / 100), e = e.substr(0, n - 1)), e = i + (e in Os ? Os[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
  }
  return e;
}, rs = function(e, t, n, i, s, o, a, l) {
  var u = s.startColor, c = s.endColor, h = s.fontSize, f = s.indent, p = s.fontWeight, g = Te.createElement("div"), d = kr(n) || ir(n, "pinType") === "fixed", m = e.indexOf("scroller") !== -1, v = d ? me : n, _ = e.indexOf("start") !== -1, y = _ ? u : c, b = "border-color:" + y + ";font-size:" + h + ";color:" + y + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return b += "position:" + ((m || l) && d ? "fixed;" : "absolute;"), (m || l || !d) && (b += (i === Ue ? ia : sa) + ":" + (o + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), g._isStart = _, g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), g.style.cssText = b, g.innerText = t || t === 0 ? e + "-" + t : e, v.children[0] ? v.insertBefore(g, v.children[0]) : v.appendChild(g), g._offset = g["offset" + i.op.d2], ms(g, 0, i, _), g;
}, ms = function(e, t, n, i) {
  var s = {
    display: "block"
  }, o = n[i ? "os2" : "p2"], a = n[i ? "p2" : "os2"];
  e._isFlipped = i, s[n.a + "Percent"] = i ? -100 : 0, s[n.a] = i ? "1px" : 0, s["border" + o + ni] = 1, s["border" + a + ni] = 0, s[n.p] = t + "px", N.set(e, s);
}, re = [], Mo = {}, Fi, Fa = function() {
  return gt() - an > 34 && (Fi || (Fi = requestAnimationFrame(In)));
}, Rr = function() {
  (!St || !St.isPressed || St.startX > me.clientWidth) && (oe.cache++, St ? Fi || (Fi = requestAnimationFrame(In)) : In(), an || Or("scrollStart"), an = gt());
}, Ks = function() {
  _u = se.innerWidth, mu = se.innerHeight;
}, mi = function(e) {
  oe.cache++, (e === !0 || !pt && !gu && !Te.fullscreenElement && !Te.webkitFullscreenElement && (!Eo || _u !== se.innerWidth || Math.abs(se.innerHeight - mu) > se.innerHeight * 0.25)) && ks.restart(!0);
}, Mr = {}, Cf = [], Cu = function r() {
  return tt(ne, "scrollEnd", r) || vr(!0);
}, Or = function(e) {
  return Mr[e] && Mr[e].map(function(t) {
    return t();
  }) || Cf;
}, Ft = [], Eu = function(e) {
  for (var t = 0; t < Ft.length; t += 5)
    (!e || Ft[t + 4] && Ft[t + 4].query === e) && (Ft[t].style.cssText = Ft[t + 1], Ft[t].getBBox && Ft[t].setAttribute("transform", Ft[t + 2] || ""), Ft[t + 3].uncache = 1);
}, Pu = function() {
  return oe.forEach(function(e) {
    return _t(e) && ++e.cacheID && (e.rec = e());
  });
}, la = function(e, t) {
  var n;
  for (wt = 0; wt < re.length; wt++)
    n = re[wt], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
  Ci = !0, t && Eu(t), t || Or("revert");
}, ku = function(e, t) {
  oe.cache++, (t || !Ct) && oe.forEach(function(n) {
    return _t(n) && n.cacheID++ && (n.rec = 0);
  }), Bt(e) && (se.history.scrollRestoration = na = e);
}, Ct, Pr = 0, Ba, Ef = function() {
  if (Ba !== Pr) {
    var e = Ba = Pr;
    requestAnimationFrame(function() {
      return e === Pr && vr(!0);
    });
  }
}, Mu = function() {
  me.appendChild(jr), ra = !St && jr.offsetHeight || se.innerHeight, me.removeChild(jr);
}, Ha = function(e) {
  return Ni(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
    return t.style.display = e ? "none" : "block";
  });
}, vr = function(e, t) {
  if (Vt = Te.documentElement, me = Te.body, ta = [se, Te, Vt, me], an && !e && !Ci) {
    nt(ne, "scrollEnd", Cu);
    return;
  }
  Mu(), Ct = ne.isRefreshing = !0, Ci || Pu();
  var n = Or("refreshInit");
  pu && ne.sort(), t || la(), oe.forEach(function(i) {
    _t(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), re.slice(0).forEach(function(i) {
    return i.refresh();
  }), Ci = !1, re.forEach(function(i) {
    if (i._subPinOffset && i.pin) {
      var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight", o = i.pin[s];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh();
    }
  }), ko = 1, Ha(!0), re.forEach(function(i) {
    var s = Sn(i.scroller, i._dir), o = i.vars.end === "max" || i._endClamp && i.end > s, a = i._startClamp && i.start >= s;
    (o || a) && i.setPositions(a ? s - 1 : i.start, o ? Math.max(a ? s : i.start + 1, s) : i.end, !0);
  }), Ha(!1), ko = 0, n.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), oe.forEach(function(i) {
    _t(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), ku(na, 1), ks.pause(), Pr++, Ct = 2, In(2), re.forEach(function(i) {
    return _t(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), Ct = ne.isRefreshing = !1, Or("refresh");
}, Oo = 0, _s = 1, Oi, In = function(e) {
  if (e === 2 || !Ct && !Ci) {
    ne.isUpdating = !0, Oi && Oi.update(0);
    var t = re.length, n = gt(), i = n - js >= 50, s = t && re[0].scroll();
    if (_s = Oo > s ? -1 : 1, Ct || (Oo = s), i && (an && !Is && n - an > 200 && (an = 0, Or("scrollEnd")), di = js, js = n), _s < 0) {
      for (wt = t; wt-- > 0; )
        re[wt] && re[wt].update(0, i);
      _s = 1;
    } else
      for (wt = 0; wt < t; wt++)
        re[wt] && re[wt].update(0, i);
    ne.isUpdating = !1;
  }
  Fi = 0;
}, Ao = [Tu, Su, sa, ia, tn + Mi, tn + Ei, tn + ki, tn + Pi, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], vs = Ao.concat([Cr, Er, "boxSizing", "max" + ni, "max" + oa, "position", tn, He, He + ki, He + Ei, He + Mi, He + Pi]), Pf = function(e, t, n) {
  Ur(n);
  var i = e._gsap;
  if (i.spacerIsNative)
    Ur(i.spacerState);
  else if (e._gsap.swappedIn) {
    var s = t.parentNode;
    s && (s.insertBefore(e, t), s.removeChild(t));
  }
  e._gsap.swappedIn = !1;
}, Qs = function(e, t, n, i) {
  if (!e._gsap.swappedIn) {
    for (var s = Ao.length, o = t.style, a = e.style, l; s--; )
      l = Ao[s], o[l] = n[l];
    o.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (o.display = "inline-block"), a[sa] = a[ia] = "auto", o.flexBasis = n.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Cr] = Ms(e, Pt) + je, o[Er] = Ms(e, Ue) + je, o[He] = a[tn] = a[Su] = a[Tu] = "0", Ur(i), a[Cr] = a["max" + ni] = n[Cr], a[Er] = a["max" + oa] = n[Er], a[He] = n[He], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
  }
}, kf = /([A-Z])/g, Ur = function(e) {
  if (e) {
    var t = e.t.style, n = e.length, i = 0, s, o;
    for ((e.t._gsap || N.core.getCache(e.t)).uncache = 1; i < n; i += 2)
      o = e[i + 1], s = e[i], o ? t[s] = o : t[s] && t.removeProperty(s.replace(kf, "-$1").toLowerCase());
  }
}, is = function(e) {
  for (var t = vs.length, n = e.style, i = [], s = 0; s < t; s++)
    i.push(vs[s], n[vs[s]]);
  return i.t = e, i;
}, Mf = function(e, t, n) {
  for (var i = [], s = e.length, o = n ? 8 : 0, a; o < s; o += 2)
    a = e[o], i.push(a, a in t ? t[a] : e[o + 1]);
  return i.t = e.t, i;
}, ys = {
  left: 0,
  top: 0
}, Ga = function(e, t, n, i, s, o, a, l, u, c, h, f, p, g) {
  _t(e) && (e = e(l)), Bt(e) && e.substr(0, 3) === "max" && (e = f + (e.charAt(4) === "=" ? gs("0" + e.substr(3), n) : 0));
  var d = p ? p.time() : 0, m, v, _;
  if (p && p.seek(0), isNaN(e) || (e = +e), gi(e))
    p && (e = N.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, f, e)), a && ms(a, n, i, !0);
  else {
    _t(t) && (t = t(l));
    var y = (e || "0").split(" "), b, w, E, T;
    _ = Ot(t, l) || me, b = Dn(_) || {}, (!b || !b.left && !b.top) && nn(_).display === "none" && (T = _.style.display, _.style.display = "block", b = Dn(_), T ? _.style.display = T : _.style.removeProperty("display")), w = gs(y[0], b[i.d]), E = gs(y[1] || "0", n), e = b[i.p] - u[i.p] - c + w + s - E, a && ms(a, E, i, n - E < 20 || a._isStart && E > 20), n -= n - E;
  }
  if (g && (l[g] = e || -1e-3, e < 0 && (e = 0)), o) {
    var M = e + n, k = o._isStart;
    m = "scroll" + i.d2, ms(o, M, i, k && M > 20 || !k && (h ? Math.max(me[m], Vt[m]) : o.parentNode[m]) <= M + 1), h && (u = Dn(a), h && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + je));
  }
  return p && _ && (m = Dn(_), p.seek(f), v = Dn(_), p._caScrollDist = m[i.p] - v[i.p], e = e / p._caScrollDist * f), p && p.seek(d), p ? e : Math.round(e);
}, Of = /(webkit|moz|length|cssText|inset)/i, Va = function(e, t, n, i) {
  if (e.parentNode !== t) {
    var s = e.style, o, a;
    if (t === me) {
      e._stOrig = s.cssText, a = nn(e);
      for (o in a)
        !+o && !Of.test(o) && a[o] && typeof s[o] == "string" && o !== "0" && (s[o] = a[o]);
      s.top = n, s.left = i;
    } else
      s.cssText = e._stOrig;
    N.core.getCache(e).uncache = 1, t.appendChild(e);
  }
}, Ou = function(e, t, n) {
  var i = t, s = i;
  return function(o) {
    var a = Math.round(e());
    return a !== i && a !== s && Math.abs(a - i) > 3 && Math.abs(a - s) > 3 && (o = a, n && n()), s = i, i = Math.round(o), i;
  };
}, ss = function(e, t, n) {
  var i = {};
  i[t.p] = "+=" + n, N.set(e, i);
}, qa = function(e, t) {
  var n = lr(e, t), i = "_scroll" + t.p2, s = function o(a, l, u, c, h) {
    var f = o.tween, p = l.onComplete, g = {};
    u = u || n();
    var d = Ou(n, u, function() {
      f.kill(), o.tween = 0;
    });
    return h = c && h || 0, c = c || a - u, f && f.kill(), l[i] = a, l.inherit = !1, l.modifiers = g, g[i] = function() {
      return d(u + c * f.ratio + h * f.ratio * f.ratio);
    }, l.onUpdate = function() {
      oe.cache++, o.tween && In();
    }, l.onComplete = function() {
      o.tween = 0, p && p.call(f);
    }, f = o.tween = N.to(e, l), f;
  };
  return e[i] = n, n.wheelHandler = function() {
    return s.tween && s.tween.kill() && (s.tween = 0);
  }, nt(e, "wheel", n.wheelHandler), ne.isTouch && nt(e, "touchmove", n.wheelHandler), s;
}, ne = /* @__PURE__ */ (function() {
  function r(t, n) {
    zr || r.register(N) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Po(this), this.init(t, n);
  }
  var e = r.prototype;
  return e.init = function(n, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !hi) {
      this.update = this.refresh = this.kill = yn;
      return;
    }
    n = za(Bt(n) || gi(n) || n.nodeType ? {
      trigger: n
    } : n, ns);
    var s = n, o = s.onUpdate, a = s.toggleClass, l = s.id, u = s.onToggle, c = s.onRefresh, h = s.scrub, f = s.trigger, p = s.pin, g = s.pinSpacing, d = s.invalidateOnRefresh, m = s.anticipatePin, v = s.onScrubComplete, _ = s.onSnapComplete, y = s.once, b = s.snap, w = s.pinReparent, E = s.pinSpacer, T = s.containerAnimation, M = s.fastScrollEnd, k = s.preventOverlaps, x = n.horizontal || n.containerAnimation && n.horizontal !== !1 ? Pt : Ue, A = !h && h !== 0, C = Ot(n.scroller || se), D = N.core.getCache(C), R = kr(C), H = ("pinType" in n ? n.pinType : ir(C, "pinType") || R && "fixed") === "fixed", q = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack], B = A && n.toggleActions.split(" "), U = "markers" in n ? n.markers : ns.markers, V = R ? 0 : parseFloat(nn(C)["border" + x.p2 + ni]) || 0, S = this, fe = n.onRefreshInit && function() {
      return n.onRefreshInit(S);
    }, De = bf(C, R, x), ut = xf(C, R), _e = 0, Le = 0, qe = 0, Ee = lr(C, x), Ke, Qe, ln, Ze, Ye, le, Pe, it, yt, O, ct, I, P, L, G, X, Q, ie, $e, ee, xe, de, ae, We, F, Fn, Mt, $t, kn, Zt, un, K, pn, Je, pe, Se, zt, cn, Be;
    if (S._startClamp = S._endClamp = !1, S._dir = x, m *= 45, S.scroller = C, S.scroll = T ? T.time.bind(T) : Ee, Ze = Ee(), S.vars = n, i = i || n.animation, "refreshPriority" in n && (pu = 1, n.refreshPriority === -9999 && (Oi = S)), D.tweenScroll = D.tweenScroll || {
      top: qa(C, Ue),
      left: qa(C, Pt)
    }, S.tweenTo = Ke = D.tweenScroll[x.p], S.scrubDuration = function($) {
      pn = gi($) && $, pn ? K ? K.duration($) : K = N.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: pn,
        paused: !0,
        onComplete: function() {
          return v && v(S);
        }
      }) : (K && K.progress(1).kill(), K = 0);
    }, i && (i.vars.lazy = !1, i._initted && !S.isReverted || i.vars.immediateRender !== !1 && n.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), S.animation = i.pause(), i.scrollTrigger = S, S.scrubDuration(h), Zt = 0, l || (l = i.vars.id)), b && ((!gr(b) || b.push) && (b = {
      snapTo: b
    }), "scrollBehavior" in me.style && N.set(R ? [me, Vt] : C, {
      scrollBehavior: "auto"
    }), oe.forEach(function($) {
      return _t($) && $.target === (R ? Te.scrollingElement || Vt : C) && ($.smooth = !1);
    }), ln = _t(b.snapTo) ? b.snapTo : b.snapTo === "labels" ? Sf(i) : b.snapTo === "labelsDirectional" ? wf(i) : b.directional !== !1 ? function($, Z) {
      return aa(b.snapTo)($, gt() - Le < 500 ? 0 : Z.direction);
    } : N.utils.snap(b.snapTo), Je = b.duration || {
      min: 0.1,
      max: 2
    }, Je = gr(Je) ? wi(Je.min, Je.max) : wi(Je, Je), pe = N.delayedCall(b.delay || pn / 2 || 0.1, function() {
      var $ = Ee(), Z = gt() - Le < 500, Y = Ke.tween;
      if ((Z || Math.abs(S.getVelocity()) < 10) && !Y && !Is && _e !== $) {
        var J = ($ - le) / L, et = i && !A ? i.totalProgress() : J, ue = Z ? 0 : (et - un) / (gt() - di) * 1e3 || 0, ze = N.utils.clamp(-J, 1 - J, Lr(ue / 2) * ue / 0.185), ft = J + (b.inertia === !1 ? 0 : ze), Re, we, ve = b, dn = ve.onStart, ke = ve.onInterrupt, Nt = ve.onComplete;
        if (Re = ln(ft, S), gi(Re) || (Re = ft), we = Math.max(0, Math.round(le + Re * L)), $ <= Pe && $ >= le && we !== $) {
          if (Y && !Y._initted && Y.data <= Lr(we - $))
            return;
          b.inertia === !1 && (ze = Re - J), Ke(we, {
            duration: Je(Lr(Math.max(Lr(ft - et), Lr(Re - et)) * 0.185 / ue / 0.05 || 0)),
            ease: b.ease || "power3",
            data: Lr(we - $),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return pe.restart(!0) && ke && ke(S);
            },
            onComplete: function() {
              S.update(), _e = Ee(), i && !A && (K ? K.resetTo("totalProgress", Re, i._tTime / i._tDur) : i.progress(Re)), Zt = un = i && !A ? i.totalProgress() : S.progress, _ && _(S), Nt && Nt(S);
            }
          }, $, ze * L, we - $ - ze * L), dn && dn(S, Ke.tween);
        }
      } else S.isActive && _e !== $ && pe.restart(!0);
    }).pause()), l && (Mo[l] = S), f = S.trigger = Ot(f || p !== !0 && p), Be = f && f._gsap && f._gsap.stRevert, Be && (Be = Be(S)), p = p === !0 ? f : Ot(p), Bt(a) && (a = {
      targets: f,
      className: a
    }), p && (g === !1 || g === tn || (g = !g && p.parentNode && p.parentNode.style && nn(p.parentNode).display === "flex" ? !1 : He), S.pin = p, Qe = N.core.getCache(p), Qe.spacer ? G = Qe.pinState : (E && (E = Ot(E), E && !E.nodeType && (E = E.current || E.nativeElement), Qe.spacerIsNative = !!E, E && (Qe.spacerState = is(E))), Qe.spacer = ie = E || Te.createElement("div"), ie.classList.add("pin-spacer"), l && ie.classList.add("pin-spacer-" + l), Qe.pinState = G = is(p)), n.force3D !== !1 && N.set(p, {
      force3D: !0
    }), S.spacer = ie = Qe.spacer, kn = nn(p), We = kn[g + x.os2], ee = N.getProperty(p), xe = N.quickSetter(p, x.a, je), Qs(p, ie, kn), Q = is(p)), U) {
      I = gr(U) ? za(U, Na) : Na, O = rs("scroller-start", l, C, x, I, 0), ct = rs("scroller-end", l, C, x, I, 0, O), $e = O["offset" + x.op.d2];
      var fn = Ot(ir(C, "content") || C);
      it = this.markerStart = rs("start", l, fn, x, I, $e, 0, T), yt = this.markerEnd = rs("end", l, fn, x, I, $e, 0, T), T && (cn = N.quickSetter([it, yt], x.a, je)), !H && !(Cn.length && ir(C, "fixedMarkers") === !0) && (Tf(R ? me : C), N.set([O, ct], {
        force3D: !0
      }), Fn = N.quickSetter(O, x.a, je), $t = N.quickSetter(ct, x.a, je));
    }
    if (T) {
      var j = T.vars.onUpdate, W = T.vars.onUpdateParams;
      T.eventCallback("onUpdate", function() {
        S.update(0, 0, 1), j && j.apply(T, W || []);
      });
    }
    if (S.previous = function() {
      return re[re.indexOf(S) - 1];
    }, S.next = function() {
      return re[re.indexOf(S) + 1];
    }, S.revert = function($, Z) {
      if (!Z)
        return S.kill(!0);
      var Y = $ !== !1 || !S.enabled, J = pt;
      Y !== S.isReverted && (Y && (Se = Math.max(Ee(), S.scroll.rec || 0), qe = S.progress, zt = i && i.progress()), it && [it, yt, O, ct].forEach(function(et) {
        return et.style.display = Y ? "none" : "block";
      }), Y && (pt = S, S.update(Y)), p && (!w || !S.isActive) && (Y ? Pf(p, ie, G) : Qs(p, ie, nn(p), F)), Y || S.update(Y), pt = J, S.isReverted = Y);
    }, S.refresh = function($, Z, Y, J) {
      if (!((pt || !S.enabled) && !Z)) {
        if (p && $ && an) {
          nt(r, "scrollEnd", Cu);
          return;
        }
        !Ct && fe && fe(S), pt = S, Ke.tween && !Y && (Ke.tween.kill(), Ke.tween = 0), K && K.pause(), d && i && (i.revert({
          kill: !1
        }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(Bn) {
          return Bn.vars.immediateRender && Bn.render(0, !0, !0);
        }) : i.vars.immediateRender && i.render(0, !0, !0)), S.isReverted || S.revert(!0, !0), S._subPinOffset = !1;
        var et = De(), ue = ut(), ze = T ? T.duration() : Sn(C, x), ft = L <= 0.01 || !L, Re = 0, we = J || 0, ve = gr(Y) ? Y.end : n.end, dn = n.endTrigger || f, ke = gr(Y) ? Y.start : n.start || (n.start === 0 || !f ? 0 : p ? "0 0" : "0 100%"), Nt = S.pinnedContainer = n.pinnedContainer && Ot(n.pinnedContainer, S), gn = f && Math.max(0, re.indexOf(S)) || 0, st = gn, ot, dt, cr, Wi, ht, Xe, mn, zs, fa, ii, _n, si, Xi;
        for (U && gr(Y) && (si = N.getProperty(O, x.p), Xi = N.getProperty(ct, x.p)); st-- > 0; )
          Xe = re[st], Xe.end || Xe.refresh(0, 1) || (pt = S), mn = Xe.pin, mn && (mn === f || mn === p || mn === Nt) && !Xe.isReverted && (ii || (ii = []), ii.unshift(Xe), Xe.revert(!0, !0)), Xe !== re[st] && (gn--, st--);
        for (_t(ke) && (ke = ke(S)), ke = La(ke, "start", S), le = Ga(ke, f, et, x, Ee(), it, O, S, ue, V, H, ze, T, S._startClamp && "_startClamp") || (p ? -1e-3 : 0), _t(ve) && (ve = ve(S)), Bt(ve) && !ve.indexOf("+=") && (~ve.indexOf(" ") ? ve = (Bt(ke) ? ke.split(" ")[0] : "") + ve : (Re = gs(ve.substr(2), et), ve = Bt(ke) ? ke : (T ? N.utils.mapRange(0, T.duration(), T.scrollTrigger.start, T.scrollTrigger.end, le) : le) + Re, dn = f)), ve = La(ve, "end", S), Pe = Math.max(le, Ga(ve || (dn ? "100% 0" : ze), dn, et, x, Ee() + Re, yt, ct, S, ue, V, H, ze, T, S._endClamp && "_endClamp")) || -1e-3, Re = 0, st = gn; st--; )
          Xe = re[st] || {}, mn = Xe.pin, mn && Xe.start - Xe._pinPush <= le && !T && Xe.end > 0 && (ot = Xe.end - (S._startClamp ? Math.max(0, Xe.start) : Xe.start), (mn === f && Xe.start - Xe._pinPush < le || mn === Nt) && isNaN(ke) && (Re += ot * (1 - Xe.progress)), mn === p && (we += ot));
        if (le += Re, Pe += Re, S._startClamp && (S._startClamp += Re), S._endClamp && !Ct && (S._endClamp = Pe || -1e-3, Pe = Math.min(Pe, Sn(C, x))), L = Pe - le || (le -= 0.01) && 1e-3, ft && (qe = N.utils.clamp(0, 1, N.utils.normalize(le, Pe, Se))), S._pinPush = we, it && Re && (ot = {}, ot[x.a] = "+=" + Re, Nt && (ot[x.p] = "-=" + Ee()), N.set([it, yt], ot)), p && !(ko && S.end >= Sn(C, x)))
          ot = nn(p), Wi = x === Ue, cr = Ee(), de = parseFloat(ee(x.a)) + we, !ze && Pe > 1 && (_n = (R ? Te.scrollingElement || Vt : C).style, _n = {
            style: _n,
            value: _n["overflow" + x.a.toUpperCase()]
          }, R && nn(me)["overflow" + x.a.toUpperCase()] !== "scroll" && (_n.style["overflow" + x.a.toUpperCase()] = "scroll")), Qs(p, ie, ot), Q = is(p), dt = Dn(p, !0), zs = H && lr(C, Wi ? Pt : Ue)(), g ? (F = [g + x.os2, L + we + je], F.t = ie, st = g === He ? Ms(p, x) + L + we : 0, st && (F.push(x.d, st + je), ie.style.flexBasis !== "auto" && (ie.style.flexBasis = st + je)), Ur(F), Nt && re.forEach(function(Bn) {
            Bn.pin === Nt && Bn.vars.pinSpacing !== !1 && (Bn._subPinOffset = !0);
          }), H && Ee(Se)) : (st = Ms(p, x), st && ie.style.flexBasis !== "auto" && (ie.style.flexBasis = st + je)), H && (ht = {
            top: dt.top + (Wi ? cr - le : zs) + je,
            left: dt.left + (Wi ? zs : cr - le) + je,
            boxSizing: "border-box",
            position: "fixed"
          }, ht[Cr] = ht["max" + ni] = Math.ceil(dt.width) + je, ht[Er] = ht["max" + oa] = Math.ceil(dt.height) + je, ht[tn] = ht[tn + ki] = ht[tn + Ei] = ht[tn + Mi] = ht[tn + Pi] = "0", ht[He] = ot[He], ht[He + ki] = ot[He + ki], ht[He + Ei] = ot[He + Ei], ht[He + Mi] = ot[He + Mi], ht[He + Pi] = ot[He + Pi], X = Mf(G, ht, w), Ct && Ee(0)), i ? (fa = i._initted, Ws(1), i.render(i.duration(), !0, !0), ae = ee(x.a) - de + L + we, Mt = Math.abs(L - ae) > 1, H && Mt && X.splice(X.length - 2, 2), i.render(0, !0, !0), fa || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), Ws(0)) : ae = L, _n && (_n.value ? _n.style["overflow" + x.a.toUpperCase()] = _n.value : _n.style.removeProperty("overflow-" + x.a));
        else if (f && Ee() && !T)
          for (dt = f.parentNode; dt && dt !== me; )
            dt._pinOffset && (le -= dt._pinOffset, Pe -= dt._pinOffset), dt = dt.parentNode;
        ii && ii.forEach(function(Bn) {
          return Bn.revert(!1, !0);
        }), S.start = le, S.end = Pe, Ze = Ye = Ct ? Se : Ee(), !T && !Ct && (Ze < Se && Ee(Se), S.scroll.rec = 0), S.revert(!1, !0), Le = gt(), pe && (_e = -1, pe.restart(!0)), pt = 0, i && A && (i._initted || zt) && i.progress() !== zt && i.progress(zt || 0, !0).render(i.time(), !0, !0), (ft || qe !== S.progress || T || d || i && !i._initted) && (i && !A && (i._initted || qe || i.vars.immediateRender !== !1) && i.totalProgress(T && le < -1e-3 && !qe ? N.utils.normalize(le, Pe, 0) : qe, !0), S.progress = ft || (Ze - le) / L === qe ? 0 : qe), p && g && (ie._pinOffset = Math.round(S.progress * ae)), K && K.invalidate(), isNaN(si) || (si -= N.getProperty(O, x.p), Xi -= N.getProperty(ct, x.p), ss(O, x, si), ss(it, x, si - (J || 0)), ss(ct, x, Xi), ss(yt, x, Xi - (J || 0))), ft && !Ct && S.update(), c && !Ct && !P && (P = !0, c(S), P = !1);
      }
    }, S.getVelocity = function() {
      return (Ee() - Ye) / (gt() - di) * 1e3 || 0;
    }, S.endAnimation = function() {
      li(S.callbackAnimation), i && (K ? K.progress(1) : i.paused() ? A || li(i, S.direction < 0, 1) : li(i, i.reversed()));
    }, S.labelToScroll = function($) {
      return i && i.labels && (le || S.refresh() || le) + i.labels[$] / i.duration() * L || 0;
    }, S.getTrailing = function($) {
      var Z = re.indexOf(S), Y = S.direction > 0 ? re.slice(0, Z).reverse() : re.slice(Z + 1);
      return (Bt($) ? Y.filter(function(J) {
        return J.vars.preventOverlaps === $;
      }) : Y).filter(function(J) {
        return S.direction > 0 ? J.end <= le : J.start >= Pe;
      });
    }, S.update = function($, Z, Y) {
      if (!(T && !Y && !$)) {
        var J = Ct === !0 ? Se : S.scroll(), et = $ ? 0 : (J - le) / L, ue = et < 0 ? 0 : et > 1 ? 1 : et || 0, ze = S.progress, ft, Re, we, ve, dn, ke, Nt, gn;
        if (Z && (Ye = Ze, Ze = T ? Ee() : J, b && (un = Zt, Zt = i && !A ? i.totalProgress() : ue)), m && p && !pt && !Zi && an && (!ue && le < J + (J - Ye) / (gt() - di) * m ? ue = 1e-4 : ue === 1 && Pe > J + (J - Ye) / (gt() - di) * m && (ue = 0.9999)), ue !== ze && S.enabled) {
          if (ft = S.isActive = !!ue && ue < 1, Re = !!ze && ze < 1, ke = ft !== Re, dn = ke || !!ue != !!ze, S.direction = ue > ze ? 1 : -1, S.progress = ue, dn && !pt && (we = ue && !ze ? 0 : ue === 1 ? 1 : ze === 1 ? 2 : 3, A && (ve = !ke && B[we + 1] !== "none" && B[we + 1] || B[we], gn = i && (ve === "complete" || ve === "reset" || ve in i))), k && (ke || gn) && (gn || h || !i) && (_t(k) ? k(S) : S.getTrailing(k).forEach(function(cr) {
            return cr.endAnimation();
          })), A || (K && !pt && !Zi ? (K._dp._time - K._start !== K._time && K.render(K._dp._time - K._start), K.resetTo ? K.resetTo("totalProgress", ue, i._tTime / i._tDur) : (K.vars.totalProgress = ue, K.invalidate().restart())) : i && i.totalProgress(ue, !!(pt && (Le || $)))), p) {
            if ($ && g && (ie.style[g + x.os2] = We), !H)
              xe(pi(de + ae * ue));
            else if (dn) {
              if (Nt = !$ && ue > ze && Pe + 1 > J && J + 1 >= Sn(C, x), w)
                if (!$ && (ft || Nt)) {
                  var st = Dn(p, !0), ot = J - le;
                  Va(p, me, st.top + (x === Ue ? ot : 0) + je, st.left + (x === Ue ? 0 : ot) + je);
                } else
                  Va(p, ie);
              Ur(ft || Nt ? X : Q), Mt && ue < 1 && ft || xe(de + (ue === 1 && !Nt ? ae : 0));
            }
          }
          b && !Ke.tween && !pt && !Zi && pe.restart(!0), a && (ke || y && ue && (ue < 1 || !Xs)) && Ni(a.targets).forEach(function(cr) {
            return cr.classList[ft || y ? "add" : "remove"](a.className);
          }), o && !A && !$ && o(S), dn && !pt ? (A && (gn && (ve === "complete" ? i.pause().totalProgress(1) : ve === "reset" ? i.restart(!0).pause() : ve === "restart" ? i.restart(!0) : i[ve]()), o && o(S)), (ke || !Xs) && (u && ke && Us(S, u), q[we] && Us(S, q[we]), y && (ue === 1 ? S.kill(!1, 1) : q[we] = 0), ke || (we = ue === 1 ? 1 : 3, q[we] && Us(S, q[we]))), M && !ft && Math.abs(S.getVelocity()) > (gi(M) ? M : 2500) && (li(S.callbackAnimation), K ? K.progress(1) : li(i, ve === "reverse" ? 1 : !ue, 1))) : A && o && !pt && o(S);
        }
        if ($t) {
          var dt = T ? J / T.duration() * (T._caScrollDist || 0) : J;
          Fn(dt + (O._isFlipped ? 1 : 0)), $t(dt);
        }
        cn && cn(-J / T.duration() * (T._caScrollDist || 0));
      }
    }, S.enable = function($, Z) {
      S.enabled || (S.enabled = !0, nt(C, "resize", mi), R || nt(C, "scroll", Rr), fe && nt(r, "refreshInit", fe), $ !== !1 && (S.progress = qe = 0, Ze = Ye = _e = Ee()), Z !== !1 && S.refresh());
    }, S.getTween = function($) {
      return $ && Ke ? Ke.tween : K;
    }, S.setPositions = function($, Z, Y, J) {
      if (T) {
        var et = T.scrollTrigger, ue = T.duration(), ze = et.end - et.start;
        $ = et.start + ze * $ / ue, Z = et.start + ze * Z / ue;
      }
      S.refresh(!1, !1, {
        start: Ra($, Y && !!S._startClamp),
        end: Ra(Z, Y && !!S._endClamp)
      }, J), S.update();
    }, S.adjustPinSpacing = function($) {
      if (F && $) {
        var Z = F.indexOf(x.d) + 1;
        F[Z] = parseFloat(F[Z]) + $ + je, F[1] = parseFloat(F[1]) + $ + je, Ur(F);
      }
    }, S.disable = function($, Z) {
      if ($ !== !1 && S.revert(!0, !0), S.enabled && (S.enabled = S.isActive = !1, Z || K && K.pause(), Se = 0, Qe && (Qe.uncache = 1), fe && tt(r, "refreshInit", fe), pe && (pe.pause(), Ke.tween && Ke.tween.kill() && (Ke.tween = 0)), !R)) {
        for (var Y = re.length; Y--; )
          if (re[Y].scroller === C && re[Y] !== S)
            return;
        tt(C, "resize", mi), R || tt(C, "scroll", Rr);
      }
    }, S.kill = function($, Z) {
      S.disable($, Z), K && !Z && K.kill(), l && delete Mo[l];
      var Y = re.indexOf(S);
      Y >= 0 && re.splice(Y, 1), Y === wt && _s > 0 && wt--, Y = 0, re.forEach(function(J) {
        return J.scroller === S.scroller && (Y = 1);
      }), Y || Ct || (S.scroll.rec = 0), i && (i.scrollTrigger = null, $ && i.revert({
        kill: !1
      }), Z || i.kill()), it && [it, yt, O, ct].forEach(function(J) {
        return J.parentNode && J.parentNode.removeChild(J);
      }), Oi === S && (Oi = 0), p && (Qe && (Qe.uncache = 1), Y = 0, re.forEach(function(J) {
        return J.pin === p && Y++;
      }), Y || (Qe.spacer = 0)), n.onKill && n.onKill(S);
    }, re.push(S), S.enable(!1, !1), Be && Be(S), i && i.add && !L) {
      var he = S.update;
      S.update = function() {
        S.update = he, oe.cache++, le || Pe || S.refresh();
      }, N.delayedCall(0.01, S.update), L = 0.01, le = Pe = 0;
    } else
      S.refresh();
    p && Ef();
  }, r.register = function(n) {
    return zr || (N = n || yu(), vu() && window.document && r.enable(), zr = hi), zr;
  }, r.defaults = function(n) {
    if (n)
      for (var i in n)
        ns[i] = n[i];
    return ns;
  }, r.disable = function(n, i) {
    hi = 0, re.forEach(function(o) {
      return o[i ? "kill" : "disable"](n);
    }), tt(se, "wheel", Rr), tt(Te, "scroll", Rr), clearInterval(Qi), tt(Te, "touchcancel", yn), tt(me, "touchstart", yn), es(tt, Te, "pointerdown,touchstart,mousedown", Ia), es(tt, Te, "pointerup,touchend,mouseup", $a), ks.kill(), Ji(tt);
    for (var s = 0; s < oe.length; s += 3)
      ts(tt, oe[s], oe[s + 1]), ts(tt, oe[s], oe[s + 2]);
  }, r.enable = function() {
    if (se = window, Te = document, Vt = Te.documentElement, me = Te.body, N && (Ni = N.utils.toArray, wi = N.utils.clamp, Po = N.core.context || yn, Ws = N.core.suppressOverwrites || yn, na = se.history.scrollRestoration || "auto", Oo = se.pageYOffset || 0, N.core.globals("ScrollTrigger", r), me)) {
      hi = 1, jr = document.createElement("div"), jr.style.height = "100vh", jr.style.position = "absolute", Mu(), yf(), Fe.register(N), r.isTouch = Fe.isTouch, Yn = Fe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Eo = Fe.isTouch === 1, nt(se, "wheel", Rr), ta = [se, Te, Vt, me], N.matchMedia ? (r.matchMedia = function(u) {
        var c = N.matchMedia(), h;
        for (h in u)
          c.add(h, u[h]);
        return c;
      }, N.addEventListener("matchMediaInit", function() {
        Pu(), la();
      }), N.addEventListener("matchMediaRevert", function() {
        return Eu();
      }), N.addEventListener("matchMedia", function() {
        vr(0, 1), Or("matchMedia");
      }), N.matchMedia().add("(orientation: portrait)", function() {
        return Ks(), Ks;
      })) : console.warn("Requires GSAP 3.11.0 or later"), Ks(), nt(Te, "scroll", Rr);
      var n = me.hasAttribute("style"), i = me.style, s = i.borderTopStyle, o = N.core.Animation.prototype, a, l;
      for (o.revert || Object.defineProperty(o, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), i.borderTopStyle = "solid", a = Dn(me), Ue.m = Math.round(a.top + Ue.sc()) || 0, Pt.m = Math.round(a.left + Pt.sc()) || 0, s ? i.borderTopStyle = s : i.removeProperty("border-top-style"), n || (me.setAttribute("style", ""), me.removeAttribute("style")), Qi = setInterval(Fa, 250), N.delayedCall(0.5, function() {
        return Zi = 0;
      }), nt(Te, "touchcancel", yn), nt(me, "touchstart", yn), es(nt, Te, "pointerdown,touchstart,mousedown", Ia), es(nt, Te, "pointerup,touchend,mouseup", $a), Co = N.utils.checkPrefix("transform"), vs.push(Co), zr = gt(), ks = N.delayedCall(0.2, vr).pause(), Nr = [Te, "visibilitychange", function() {
        var u = se.innerWidth, c = se.innerHeight;
        Te.hidden ? (Aa = u, Da = c) : (Aa !== u || Da !== c) && mi();
      }, Te, "DOMContentLoaded", vr, se, "load", vr, se, "resize", mi], Ji(nt), re.forEach(function(u) {
        return u.enable(0, 1);
      }), l = 0; l < oe.length; l += 3)
        ts(tt, oe[l], oe[l + 1]), ts(tt, oe[l], oe[l + 2]);
    }
  }, r.config = function(n) {
    "limitCallbacks" in n && (Xs = !!n.limitCallbacks);
    var i = n.syncInterval;
    i && clearInterval(Qi) || (Qi = i) && setInterval(Fa, i), "ignoreMobileResize" in n && (Eo = r.isTouch === 1 && n.ignoreMobileResize), "autoRefreshEvents" in n && (Ji(tt) || Ji(nt, n.autoRefreshEvents || "none"), gu = (n.autoRefreshEvents + "").indexOf("resize") === -1);
  }, r.scrollerProxy = function(n, i) {
    var s = Ot(n), o = oe.indexOf(s), a = kr(s);
    ~o && oe.splice(o, a ? 6 : 2), i && (a ? Cn.unshift(se, i, me, i, Vt, i) : Cn.unshift(s, i));
  }, r.clearMatchMedia = function(n) {
    re.forEach(function(i) {
      return i._ctx && i._ctx.query === n && i._ctx.kill(!0, !0);
    });
  }, r.isInViewport = function(n, i, s) {
    var o = (Bt(n) ? Ot(n) : n).getBoundingClientRect(), a = o[s ? Cr : Er] * i || 0;
    return s ? o.right - a > 0 && o.left + a < se.innerWidth : o.bottom - a > 0 && o.top + a < se.innerHeight;
  }, r.positionInViewport = function(n, i, s) {
    Bt(n) && (n = Ot(n));
    var o = n.getBoundingClientRect(), a = o[s ? Cr : Er], l = i == null ? a / 2 : i in Os ? Os[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
    return s ? (o.left + l) / se.innerWidth : (o.top + l) / se.innerHeight;
  }, r.killAll = function(n) {
    if (re.slice(0).forEach(function(s) {
      return s.vars.id !== "ScrollSmoother" && s.kill();
    }), n !== !0) {
      var i = Mr.killAll || [];
      Mr = {}, i.forEach(function(s) {
        return s();
      });
    }
  }, r;
})();
ne.version = "3.14.2";
ne.saveStyles = function(r) {
  return r ? Ni(r).forEach(function(e) {
    if (e && e.style) {
      var t = Ft.indexOf(e);
      t >= 0 && Ft.splice(t, 5), Ft.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), N.core.getCache(e), Po());
    }
  }) : Ft;
};
ne.revert = function(r, e) {
  return la(!r, e);
};
ne.create = function(r, e) {
  return new ne(r, e);
};
ne.refresh = function(r) {
  return r ? mi(!0) : (zr || ne.register()) && vr(!0);
};
ne.update = function(r) {
  return ++oe.cache && In(r === !0 ? 2 : 0);
};
ne.clearScrollMemory = ku;
ne.maxScroll = function(r, e) {
  return Sn(r, e ? Pt : Ue);
};
ne.getScrollFunc = function(r, e) {
  return lr(Ot(r), e ? Pt : Ue);
};
ne.getById = function(r) {
  return Mo[r];
};
ne.getAll = function() {
  return re.filter(function(r) {
    return r.vars.id !== "ScrollSmoother";
  });
};
ne.isScrolling = function() {
  return !!an;
};
ne.snapDirectional = aa;
ne.addEventListener = function(r, e) {
  var t = Mr[r] || (Mr[r] = []);
  ~t.indexOf(e) || t.push(e);
};
ne.removeEventListener = function(r, e) {
  var t = Mr[r], n = t && t.indexOf(e);
  n >= 0 && t.splice(n, 1);
};
ne.batch = function(r, e) {
  var t = [], n = {}, i = e.interval || 0.016, s = e.batchMax || 1e9, o = function(u, c) {
    var h = [], f = [], p = N.delayedCall(i, function() {
      c(h, f), h = [], f = [];
    }).pause();
    return function(g) {
      h.length || p.restart(!0), h.push(g.trigger), f.push(g), s <= h.length && p.progress(1);
    };
  }, a;
  for (a in e)
    n[a] = a.substr(0, 2) === "on" && _t(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
  return _t(s) && (s = s(), nt(ne, "refresh", function() {
    return s = e.batchMax();
  })), Ni(r).forEach(function(l) {
    var u = {};
    for (a in n)
      u[a] = n[a];
    u.trigger = l, t.push(ne.create(u));
  }), t;
};
var Ya = function(e, t, n, i) {
  return t > i ? e(i) : t < 0 && e(0), n > i ? (i - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, Zs = function r(e, t) {
  t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Fe.isTouch ? " pinch-zoom" : "") : "none", e === Vt && r(me, t);
}, os = {
  auto: 1,
  scroll: 1
}, Af = function(e) {
  var t = e.event, n = e.target, i = e.axis, s = (t.changedTouches ? t.changedTouches[0] : t).target, o = s._gsap || N.core.getCache(s), a = gt(), l;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; s && s !== me && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(os[(l = nn(s)).overflowY] || os[l.overflowX])); )
      s = s.parentNode;
    o._isScroll = s && s !== n && !kr(s) && (os[(l = nn(s)).overflowY] || os[l.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || i === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, Au = function(e, t, n, i) {
  return Fe.create({
    target: e,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: t,
    onWheel: i = i && Af,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return n && nt(Te, Fe.eventTypes[0], Xa, !1, !0);
    },
    onDisable: function() {
      return tt(Te, Fe.eventTypes[0], Xa, !0);
    }
  });
}, Df = /(input|label|select|textarea)/i, Wa, Xa = function(e) {
  var t = Df.test(e.target.tagName);
  (t || Wa) && (e._gsapAllow = !0, Wa = t);
}, Lf = function(e) {
  gr(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var t = e, n = t.normalizeScrollX, i = t.momentum, s = t.allowNestedScroll, o = t.onRelease, a, l, u = Ot(e.target) || Vt, c = N.core.globals().ScrollSmoother, h = c && c.get(), f = Yn && (e.content && Ot(e.content) || h && e.content !== !1 && !h.smooth() && h.content()), p = lr(u, Ue), g = lr(u, Pt), d = 1, m = (Fe.isTouch && se.visualViewport ? se.visualViewport.scale * se.visualViewport.width : se.outerWidth) / se.innerWidth, v = 0, _ = _t(i) ? function() {
    return i(a);
  } : function() {
    return i || 2.8;
  }, y, b, w = Au(u, e.type, !0, s), E = function() {
    return b = !1;
  }, T = yn, M = yn, k = function() {
    l = Sn(u, Ue), M = wi(Yn ? 1 : 0, l), n && (T = wi(0, Sn(u, Pt))), y = Pr;
  }, x = function() {
    f._gsap.y = pi(parseFloat(f._gsap.y) + p.offset) + "px", f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)", p.offset = p.cacheID = 0;
  }, A = function() {
    if (b) {
      requestAnimationFrame(E);
      var U = pi(a.deltaY / 2), V = M(p.v - U);
      if (f && V !== p.v + p.offset) {
        p.offset = V - p.v;
        var S = pi((parseFloat(f && f._gsap.y) || 0) - p.offset);
        f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + S + ", 0, 1)", f._gsap.y = S + "px", p.cacheID = oe.cache, In();
      }
      return !0;
    }
    p.offset && x(), b = !0;
  }, C, D, R, H, q = function() {
    k(), C.isActive() && C.vars.scrollY > l && (p() > l ? C.progress(1) && p(l) : C.resetTo("scrollY", l));
  };
  return f && N.set(f, {
    y: "+=0"
  }), e.ignoreCheck = function(B) {
    return Yn && B.type === "touchmove" && A() || d > 1.05 && B.type !== "touchstart" || a.isGesturing || B.touches && B.touches.length > 1;
  }, e.onPress = function() {
    b = !1;
    var B = d;
    d = pi((se.visualViewport && se.visualViewport.scale || 1) / m), C.pause(), B !== d && Zs(u, d > 1.01 ? !0 : n ? !1 : "x"), D = g(), R = p(), k(), y = Pr;
  }, e.onRelease = e.onGestureStart = function(B, U) {
    if (p.offset && x(), !U)
      H.restart(!0);
    else {
      oe.cache++;
      var V = _(), S, fe;
      n && (S = g(), fe = S + V * 0.05 * -B.velocityX / 0.227, V *= Ya(g, S, fe, Sn(u, Pt)), C.vars.scrollX = T(fe)), S = p(), fe = S + V * 0.05 * -B.velocityY / 0.227, V *= Ya(p, S, fe, Sn(u, Ue)), C.vars.scrollY = M(fe), C.invalidate().duration(V).play(0.01), (Yn && C.vars.scrollY >= l || S >= l - 1) && N.to({}, {
        onUpdate: q,
        duration: V
      });
    }
    o && o(B);
  }, e.onWheel = function() {
    C._ts && C.pause(), gt() - v > 1e3 && (y = 0, v = gt());
  }, e.onChange = function(B, U, V, S, fe) {
    if (Pr !== y && k(), U && n && g(T(S[2] === U ? D + (B.startX - B.x) : g() + U - S[1])), V) {
      p.offset && x();
      var De = fe[2] === V, ut = De ? R + B.startY - B.y : p() + V - fe[1], _e = M(ut);
      De && ut !== _e && (R += _e - ut), p(_e);
    }
    (V || U) && In();
  }, e.onEnable = function() {
    Zs(u, n ? !1 : "x"), ne.addEventListener("refresh", q), nt(se, "resize", q), p.smooth && (p.target.style.scrollBehavior = "auto", p.smooth = g.smooth = !1), w.enable();
  }, e.onDisable = function() {
    Zs(u, !0), tt(se, "resize", q), ne.removeEventListener("refresh", q), w.kill();
  }, e.lockAxis = e.lockAxis !== !1, a = new Fe(e), a.iOS = Yn, Yn && !p() && p(1), Yn && N.ticker.add(yn), H = a._dc, C = N.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: n ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: Ou(p, p(), function() {
        return C.pause();
      })
    },
    onUpdate: In,
    onComplete: H.vars.onComplete
  }), a;
};
ne.sort = function(r) {
  if (_t(r))
    return re.sort(r);
  var e = se.pageYOffset || 0;
  return ne.getAll().forEach(function(t) {
    return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + se.innerHeight;
  }), re.sort(r || function(t, n) {
    return (t.vars.refreshPriority || 0) * -1e6 + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((n.vars.containerAnimation ? 1e6 : n._sortY) + (n.vars.refreshPriority || 0) * -1e6);
  });
};
ne.observe = function(r) {
  return new Fe(r);
};
ne.normalizeScroll = function(r) {
  if (typeof r > "u")
    return St;
  if (r === !0 && St)
    return St.enable();
  if (r === !1) {
    St && St.kill(), St = r;
    return;
  }
  var e = r instanceof Fe ? r : Lf(r);
  return St && St.target === e.target && St.kill(), kr(e.target) && (St = e), e;
};
ne.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: wo,
  _inputObserver: Au,
  _scrollers: oe,
  _proxies: Cn,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      an || Or("scrollStart"), an = gt();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return pt;
    }
  }
};
yu() && N.registerPlugin(ne);
function Rf(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function If(r, e, t) {
  return e && Rf(r.prototype, e), r;
}
var ge, as, Tt, Wn, _i, Mn, mr, ja, te, bn, ls, Ua, Ka, Qa, Za, Du = function() {
  return typeof window < "u";
}, Lu = function() {
  return ge || Du() && (ge = window.gsap) && ge.registerPlugin && ge;
}, $f = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, Hn = function(e) {
  return te.maxScroll(e || Tt);
}, zf = function(e, t) {
  var n = e.parentNode || _i, i = e.getBoundingClientRect(), s = n.getBoundingClientRect(), o = s.top - i.top, a = s.bottom - i.bottom, l = (Math.abs(o) > Math.abs(a) ? o : a) / (1 - t), u = -l * t, c, h;
  return l > 0 && (c = s.height / (Tt.innerHeight + s.height), h = c === 0.5 ? s.height * 2 : Math.min(s.height, Math.abs(-l * c / (2 * c - 1))) * 2 * (t || 1), u += t ? -h * t : -h / 2, l += h), {
    change: l,
    offset: u
  };
}, Nf = function(e) {
  var t = Wn.querySelector(".ScrollSmoother-wrapper");
  return t || (t = Wn.createElement("div"), t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t;
}, Nn = /* @__PURE__ */ (function() {
  function r(e) {
    var t = this;
    as || r.register(ge) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, bn && bn.kill(), bn = this, Qa(this);
    var n = e, i = n.smoothTouch, s = n.onUpdate, o = n.onStop, a = n.smooth, l = n.onFocusIn, u = n.normalizeScroll, c = n.wholePixels, h, f, p, g, d, m, v, _, y, b, w, E, T, M, k = this, x = e.effectsPrefix || "", A = te.getScrollFunc(Tt), C = te.isTouch === 1 ? i === !0 ? 0.8 : parseFloat(i) || 0 : a === 0 || a === !1 ? 0 : parseFloat(a) || 0.8, D = C && +e.speed || 1, R = 0, H = 0, q = 1, B = Ua(0), U = function() {
      return B.update(-R);
    }, V = {
      y: 0
    }, S = function() {
      return h.style.overflow = "visible";
    }, fe, De = function(P) {
      P.update();
      var L = P.getTween();
      L && (L.pause(), L._time = L._dur, L._tTime = L._tDur), fe = !1, P.animation.progress(P.progress, !0);
    }, ut = function(P, L) {
      (P !== R && !b || L) && (c && (P = Math.round(P)), C && (h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + P + ", 0, 1)", h._gsap.y = P + "px"), H = P - R, R = P, te.isUpdating || r.isRefreshing || te.update());
    }, _e = function(P) {
      return arguments.length ? (P < 0 && (P = 0), V.y = -P, fe = !0, b ? R = -P : ut(-P), te.isRefreshing ? g.update() : A(P / D), this) : -R;
    }, Le = typeof ResizeObserver < "u" && e.autoResize !== !1 && new ResizeObserver(function() {
      if (!te.isRefreshing) {
        var I = Hn(f) * D;
        I < -R && _e(I), Za.restart(!0);
      }
    }), qe, Ee = function(P) {
      f.scrollTop = 0, !(P.target.contains && P.target.contains(f) || l && l(t, P) === !1) && (te.isInViewport(P.target) || P.target === qe || t.scrollTo(P.target, !1, "center center"), qe = P.target);
    }, Ke = function(P, L) {
      if (P < L.start)
        return P;
      var G = isNaN(L.ratio) ? 1 : L.ratio, X = L.end - L.start, Q = P - L.start, ie = L.offset || 0, $e = L.pins || [], ee = $e.offset || 0, xe = L._startClamp && L.start <= 0 || L.pins && L.pins.offset ? 0 : L._endClamp && L.end === Hn() ? 1 : 0.5;
      return $e.forEach(function(de) {
        X -= de.distance, de.nativeStart <= P && (Q -= de.distance);
      }), ee && (Q *= (X - ee / G) / X), P + (Q - ie * xe) / G - Q;
    }, Qe = function I(P, L, G) {
      G || (P.pins.length = P.pins.offset = 0);
      var X = P.pins, Q = P.markers, ie, $e, ee, xe, de, ae, We, F;
      for (We = 0; We < L.length; We++)
        if (F = L[We], P.trigger && F.trigger && P !== F && (F.trigger === P.trigger || F.pinnedContainer === P.trigger || P.trigger.contains(F.trigger)) && (de = F._startNative || F._startClamp || F.start, ae = F._endNative || F._endClamp || F.end, ee = Ke(de, P), xe = F.pin && ae > 0 ? ee + (ae - de) : Ke(ae, P), F.setPositions(ee, xe, !0, (F._startClamp ? Math.max(0, ee) : ee) - de), F.markerStart && Q.push(ge.quickSetter([F.markerStart, F.markerEnd], "y", "px")), F.pin && F.end > 0 && !G)) {
          if (ie = F.end - F.start, $e = P._startClamp && F.start < 0, $e) {
            if (P.start > 0) {
              P.setPositions(0, P.end + (P._startNative - P.start), !0), I(P, L);
              return;
            }
            ie += F.start, X.offset = -F.start;
          }
          X.push({
            start: F.start,
            nativeStart: de,
            end: F.end,
            distance: ie,
            trig: F
          }), P.setPositions(P.start, P.end + ($e ? -F.start : ie), !0);
        }
    }, ln = function(P, L) {
      d.forEach(function(G) {
        return Qe(G, P, L);
      });
    }, Ze = function() {
      _i = Wn.documentElement, Mn = Wn.body, S(), requestAnimationFrame(S), d && (te.getAll().forEach(function(P) {
        P._startNative = P.start, P._endNative = P.end;
      }), d.forEach(function(P) {
        var L = P._startClamp || P.start, G = P.autoSpeed ? Math.min(Hn(), P.end) : L + Math.abs((P.end - L) / P.ratio), X = G - P.end;
        if (L -= X / 2, G -= X / 2, L > G) {
          var Q = L;
          L = G, G = Q;
        }
        P._startClamp && L < 0 ? (G = P.ratio < 0 ? Hn() : P.end / P.ratio, X = G - P.end, L = 0) : (P.ratio < 0 || P._endClamp && G >= Hn()) && (G = Hn(), L = P.ratio < 0 || P.ratio > 1 ? 0 : G - (G - P.start) / P.ratio, X = (G - L) * P.ratio - (P.end - P.start)), P.offset = X || 1e-4, P.pins.length = P.pins.offset = 0, P.setPositions(L, G, !0);
      }), ln(te.sort())), B.reset();
    }, Ye = function() {
      return te.addEventListener("refresh", Ze);
    }, le = function() {
      return d && d.forEach(function(P) {
        return P.vars.onRefresh(P);
      });
    }, Pe = function() {
      return d && d.forEach(function(P) {
        return P.vars.onRefreshInit(P);
      }), le;
    }, it = function(P, L, G, X) {
      return function() {
        var Q = typeof L == "function" ? L(G, X) : L;
        Q || Q === 0 || (Q = X.getAttribute("data-" + x + P) || (P === "speed" ? 1 : 0)), X.setAttribute("data-" + x + P, Q);
        var ie = (Q + "").substr(0, 6) === "clamp(";
        return {
          clamp: ie,
          value: ie ? Q.substr(6, Q.length - 7) : Q
        };
      };
    }, yt = function(P, L, G, X, Q) {
      Q = (typeof Q == "function" ? Q(X, P) : Q) || 0;
      var ie = it("speed", L, X, P), $e = it("lag", G, X, P), ee = ge.getProperty(P, "y"), xe = P._gsap, de, ae, We, F, Fn, Mt, $t = [], kn = function() {
        L = ie(), G = parseFloat($e().value), de = parseFloat(L.value) || 1, We = L.value === "auto", Fn = We || ae && ae._startClamp && ae.start <= 0 || $t.offset ? 0 : ae && ae._endClamp && ae.end === Hn() ? 1 : 0.5, F && F.kill(), F = G && ge.to(P, {
          ease: ls,
          overwrite: !1,
          y: "+=0",
          duration: G
        }), ae && (ae.ratio = de, ae.autoSpeed = We);
      }, Zt = function() {
        xe.y = ee + "px", xe.renderTransform(1), kn();
      }, un = [], K = 0, pn = function(pe) {
        if (We) {
          Zt();
          var Se = zf(P, ja(0, 1, -pe.start / (pe.end - pe.start)));
          K = Se.change, Mt = Se.offset;
        } else
          Mt = $t.offset || 0, K = (pe.end - pe.start - Mt) * (1 - de);
        $t.forEach(function(zt) {
          return K -= zt.distance * (1 - de);
        }), pe.offset = K || 1e-3, pe.vars.onUpdate(pe), F && F.progress(1);
      };
      return kn(), (de !== 1 || We || F) && (ae = te.create({
        trigger: We ? P.parentNode : P,
        start: function() {
          return L.clamp ? "clamp(top bottom+=" + Q + ")" : "top bottom+=" + Q;
        },
        end: function() {
          return L.value < 0 ? "max" : L.clamp ? "clamp(bottom top-=" + Q + ")" : "bottom top-=" + Q;
        },
        scroller: f,
        scrub: !0,
        refreshPriority: -999,
        // must update AFTER any other ScrollTrigger pins
        onRefreshInit: Zt,
        onRefresh: pn,
        onKill: function(pe) {
          var Se = d.indexOf(pe);
          Se >= 0 && d.splice(Se, 1), Zt();
        },
        onUpdate: function(pe) {
          var Se = ee + K * (pe.progress - Fn), zt = $t.length, cn = 0, Be, fn, j;
          if (pe.offset) {
            if (zt) {
              for (fn = -R, j = pe.end; zt--; ) {
                if (Be = $t[zt], Be.trig.isActive || fn >= Be.start && fn <= Be.end) {
                  F && (Be.trig.progress += Be.trig.direction < 0 ? 1e-3 : -1e-3, Be.trig.update(0, 0, 1), F.resetTo("y", parseFloat(xe.y), -H, !0), q && F.progress(1));
                  return;
                }
                fn > Be.end && (cn += Be.distance), j -= Be.distance;
              }
              Se = ee + cn + K * ((ge.utils.clamp(pe.start, pe.end, fn) - pe.start - cn) / (j - pe.start) - Fn);
            }
            un.length && !We && un.forEach(function(W) {
              return W(Se - cn);
            }), Se = $f(Se + Mt), F ? (F.resetTo("y", Se, -H, !0), q && F.progress(1)) : (xe.y = Se + "px", xe.renderTransform(1));
          }
        }
      }), pn(ae), ge.core.getCache(ae.trigger).stRevert = Pe, ae.startY = ee, ae.pins = $t, ae.markers = un, ae.ratio = de, ae.autoSpeed = We, P.style.willChange = "transform"), ae;
    };
    Ye(), te.addEventListener("killAll", Ye), ge.delayedCall(0.5, function() {
      return q = 0;
    }), this.scrollTop = _e, this.scrollTo = function(I, P, L) {
      var G = ge.utils.clamp(0, Hn(), isNaN(I) ? t.offset(I, L, !!P && !b) : +I);
      P ? b ? ge.to(t, {
        duration: C,
        scrollTop: G,
        overwrite: "auto",
        ease: ls
      }) : A(G) : _e(G);
    }, this.offset = function(I, P, L) {
      I = mr(I)[0];
      var G = I.style.cssText, X = te.create({
        trigger: I,
        start: P || "top top"
      }), Q;
      return d && (q ? te.refresh() : ln([X], !0)), Q = X.start / (L ? D : 1), X.kill(!1), I.style.cssText = G, ge.core.getCache(I).uncache = 1, Q;
    };
    function O() {
      return p = h.clientHeight, h.style.overflow = "visible", Mn.style.height = Tt.innerHeight + (p - Tt.innerHeight) / D + "px", p - Tt.innerHeight;
    }
    this.content = function(I) {
      if (arguments.length) {
        var P = mr(I || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Mn.children[0];
        return P !== h && (h = P, y = h.getAttribute("style") || "", Le && Le.observe(h), ge.set(h, {
          overflow: "visible",
          width: "100%",
          boxSizing: "border-box",
          y: "+=0"
        }), C || ge.set(h, {
          clearProps: "transform"
        })), this;
      }
      return h;
    }, this.wrapper = function(I) {
      return arguments.length ? (f = mr(I || "#smooth-wrapper")[0] || Nf(h), _ = f.getAttribute("style") || "", O(), ge.set(f, C ? {
        overflow: "hidden",
        position: "fixed",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      } : {
        overflow: "visible",
        position: "relative",
        width: "100%",
        height: "auto",
        top: "auto",
        bottom: "auto",
        left: "auto",
        right: "auto"
      }), this) : f;
    }, this.effects = function(I, P) {
      var L;
      if (d || (d = []), !I)
        return d.slice(0);
      I = mr(I), I.forEach(function(de) {
        for (var ae = d.length; ae--; )
          d[ae].trigger === de && d[ae].kill();
      }), P = P || {};
      var G = P, X = G.speed, Q = G.lag, ie = G.effectsPadding, $e = [], ee, xe;
      for (ee = 0; ee < I.length; ee++)
        xe = yt(I[ee], X, Q, ee, ie), xe && $e.push(xe);
      return (L = d).push.apply(L, $e), P.refresh !== !1 && te.refresh(), $e;
    }, this.sections = function(I, P) {
      var L;
      if (m || (m = []), !I)
        return m.slice(0);
      var G = mr(I).map(function(X) {
        return te.create({
          trigger: X,
          start: "top 120%",
          end: "bottom -20%",
          onToggle: function(ie) {
            X.style.opacity = ie.isActive ? "1" : "0", X.style.pointerEvents = ie.isActive ? "all" : "none";
          }
        });
      });
      return P && P.add ? (L = m).push.apply(L, G) : m = G.slice(0), G;
    }, this.content(e.content), this.wrapper(e.wrapper), this.render = function(I) {
      return ut(I || I === 0 ? I : R);
    }, this.getVelocity = function() {
      return B.getVelocity(-R);
    }, te.scrollerProxy(f, {
      scrollTop: _e,
      scrollHeight: function() {
        return O() && Mn.scrollHeight;
      },
      fixedMarkers: e.fixedMarkers !== !1 && !!C,
      content: h,
      getBoundingClientRect: function() {
        return {
          top: 0,
          left: 0,
          width: Tt.innerWidth,
          height: Tt.innerHeight
        };
      }
    }), te.defaults({
      scroller: f
    });
    var ct = te.getAll().filter(function(I) {
      return I.scroller === Tt || I.scroller === f;
    });
    ct.forEach(function(I) {
      return I.revert(!0, !0);
    }), g = te.create({
      animation: ge.fromTo(V, {
        y: function() {
          return M = 0, 0;
        }
      }, {
        y: function() {
          return M = 1, -O();
        },
        immediateRender: !1,
        ease: "none",
        data: "ScrollSmoother",
        duration: 100,
        // for added precision
        onUpdate: function() {
          if (M) {
            var P = fe;
            P && (De(g), V.y = R), ut(V.y, P), U(), s && !b && s(k);
          }
        }
      }),
      onRefreshInit: function(P) {
        if (!r.isRefreshing) {
          if (r.isRefreshing = !0, d) {
            var L = te.getAll().filter(function(X) {
              return !!X.pin;
            });
            d.forEach(function(X) {
              X.vars.pinnedContainer || L.forEach(function(Q) {
                if (Q.pin.contains(X.trigger)) {
                  var ie = X.vars;
                  ie.pinnedContainer = Q.pin, X.vars = null, X.init(ie, X.animation);
                }
              });
            });
          }
          var G = P.getTween();
          T = G && G._end > G._dp._time, E = R, V.y = 0, C && (te.isTouch === 1 && (f.style.position = "absolute"), f.scrollTop = 0, te.isTouch === 1 && (f.style.position = "fixed"));
        }
      },
      onRefresh: function(P) {
        P.animation.invalidate(), V.y = 0, P.setPositions(P.start, O() / D), T || De(P), V.y = -A() * D, ut(V.y), q || (T && (fe = !1), P.animation.progress(ge.utils.clamp(0, 1, E / D / -P.end))), T && (P.progress -= 1e-3, P.update()), r.isRefreshing = !1;
      },
      id: "ScrollSmoother",
      scroller: Tt,
      invalidateOnRefresh: !0,
      start: 0,
      refreshPriority: -9999,
      // because all other pins, etc. should be calculated first before this figures out the height of the body. BUT this should also update FIRST so that the scroll position on the proxy is up-to-date when all the ScrollTriggers calculate their progress! -9999 is a special number that ScrollTrigger looks for to handle in this way.
      end: function() {
        return O() / D;
      },
      onScrubComplete: function() {
        B.reset(), o && o(t);
      },
      scrub: C || !0
    }), this.smooth = function(I) {
      return arguments.length && (C = I || 0, D = C && +e.speed || 1, g.scrubDuration(I)), g.getTween() ? g.getTween().duration() : 0;
    }, g.getTween() && (g.getTween().vars.ease = e.ease || ls), this.scrollTrigger = g, e.effects && this.effects(e.effects === !0 ? "[data-" + x + "speed], [data-" + x + "lag]" : e.effects, {
      effectsPadding: e.effectsPadding,
      refresh: !1
    }), e.sections && this.sections(e.sections === !0 ? "[data-section]" : e.sections), ct.forEach(function(I) {
      I.vars.scroller = f, I.revert(!1, !0), I.init(I.vars, I.animation);
    }), this.paused = function(I, P) {
      return arguments.length ? (!!b !== I && (I ? (g.getTween() && g.getTween().pause(), A(-R / D), B.reset(), w = te.normalizeScroll(), w && w.disable(), b = te.observe({
        preventDefault: !0,
        type: "wheel,touch,scroll",
        debounce: !1,
        allowClicks: !0,
        onChangeY: function() {
          return _e(-R);
        }
        // refuse to scroll
      }), b.nested = Ka(_i, "wheel,touch,scroll", !0, P !== !1)) : (b.nested.kill(), b.kill(), b = 0, w && w.enable(), g.progress = (-R / D - g.start) / (g.end - g.start), De(g))), this) : !!b;
    }, this.kill = this.revert = function() {
      t.paused(!1), De(g), g.kill();
      for (var I = (d || []).concat(m || []), P = I.length; P--; )
        I[P].kill();
      te.scrollerProxy(f), te.removeEventListener("killAll", Ye), te.removeEventListener("refresh", Ze), f.style.cssText = _, h.style.cssText = y;
      var L = te.defaults({});
      L && L.scroller === f && te.defaults({
        scroller: Tt
      }), t.normalizer && te.normalizeScroll(!1), clearInterval(v), bn = null, Le && Le.disconnect(), Mn.style.removeProperty("height"), Tt.removeEventListener("focusin", Ee);
    }, this.refresh = function(I, P) {
      return g.refresh(I, P);
    }, u && (this.normalizer = te.normalizeScroll(u === !0 ? {
      debounce: !0,
      content: !C && h
    } : u)), te.config(e), "scrollBehavior" in Tt.getComputedStyle(Mn) && ge.set([Mn, _i], {
      scrollBehavior: "auto"
    }), Tt.addEventListener("focusin", Ee), v = setInterval(U, 250), Wn.readyState === "loading" || requestAnimationFrame(function() {
      return te.refresh();
    });
  }
  return r.register = function(t) {
    return as || (ge = t || Lu(), Du() && window.document && (Tt = window, Wn = document, _i = Wn.documentElement, Mn = Wn.body), ge && (mr = ge.utils.toArray, ja = ge.utils.clamp, ls = ge.parseEase("expo"), Qa = ge.core.context || function() {
    }, te = ge.core.globals().ScrollTrigger, ge.core.globals("ScrollSmoother", r), Mn && te && (Za = ge.delayedCall(0.2, function() {
      return te.isRefreshing || bn && bn.refresh();
    }).pause(), Ua = te.core._getVelocityProp, Ka = te.core._inputObserver, r.refresh = te.refresh, as = 1))), as;
  }, If(r, [{
    key: "progress",
    get: function() {
      return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
    }
  }]), r;
})();
Nn.version = "3.14.2";
Nn.create = function(r) {
  return bn && r && bn.content() === mr(r.content)[0] ? bn : new Nn(r);
};
Nn.get = function() {
  return bn;
};
Lu() && ge.registerPlugin(Nn);
var Ru = /* @__PURE__ */ ((r) => (r[r.ERROR = 0] = "ERROR", r[r.WARN = 1] = "WARN", r[r.INFO = 2] = "INFO", r[r.LOG = 3] = "LOG", r[r.DEBUG = 4] = "DEBUG", r))(Ru || {});
function Ff(r) {
  return 4;
}
const Ja = Ff();
class Iu {
  shouldLog(e) {
    return !1;
  }
  /**
   * Log een informatieve boodschap (console.log)
   */
  log(...e) {
    this.shouldLog(
      3
      /* LOG */
    ) && console.log(...e);
  }
  /**
   * Log een waarschuwing (console.warn)
   */
  warn(...e) {
    this.shouldLog(
      1
      /* WARN */
    ) && console.warn(...e);
  }
  /**
   * Log een foutmelding (console.error)
   */
  error(...e) {
    this.shouldLog(
      0
      /* ERROR */
    ) && console.error(...e);
  }
  /**
   * Log informatie (console.info)
   */
  info(...e) {
    this.shouldLog(
      2
      /* INFO */
    ) && console.info(...e);
  }
  /**
   * Log debug informatie (console.debug)
   */
  debug(...e) {
    this.shouldLog(
      4
      /* DEBUG */
    ) && console.debug(...e);
  }
  /**
   * Maak een logger instance met een prefix voor alle logs
   * Handig voor component-specifieke logging
   */
  create(e) {
    return new Bf(e);
  }
  /**
   * Haal het huidige log level op
   */
  getLevel() {
    return Ja;
  }
  /**
   * Haal de naam van het huidige log level op
   */
  getLevelName() {
    return Ru[Ja];
  }
  /**
   * Check of een bepaald log level actief is
   * @param level Het log level om te checken
   * @returns true als het level actief is (of hoger)
   */
  isLevelActive(e) {
    return !1;
  }
}
class Bf extends Iu {
  constructor(e) {
    super(), this.prefix = e;
  }
  log(...e) {
    this.shouldLog(
      3
      /* LOG */
    ) && console.log(`[${this.prefix}]`, ...e);
  }
  warn(...e) {
    this.shouldLog(
      1
      /* WARN */
    ) && console.warn(`[${this.prefix}]`, ...e);
  }
  error(...e) {
    this.shouldLog(
      0
      /* ERROR */
    ) && console.error(`[${this.prefix}]`, ...e);
  }
  info(...e) {
    this.shouldLog(
      2
      /* INFO */
    ) && console.info(`[${this.prefix}]`, ...e);
  }
  debug(...e) {
    this.shouldLog(
      4
      /* DEBUG */
    ) && console.debug(`[${this.prefix}]`, ...e);
  }
}
const ri = new Iu(), Js = ri.create("ScrollSmoother");
on.registerPlugin(ne);
on.registerPlugin(Nn);
let Rn = null;
function $u() {
  const r = Nn.get();
  r && r.kill();
  const e = document.querySelector("#smooth-wrapper"), t = document.querySelector("#main");
  if (!e || !t)
    return Js.warn("#smooth-wrapper of #main niet gevonden in DOM"), null;
  try {
    return Rn = Nn.create({
      wrapper: "#smooth-wrapper",
      content: "#main",
      smooth: 1,
      smoothTouch: !1,
      effects: !1,
      normalizeScroll: !0
    }), Js.log("ScrollSmoother geïnitialiseerd"), Rn;
  } catch (n) {
    return Js.error("ScrollSmoother initialisatie fout:", n), null;
  }
}
function Hf() {
  return Rn = $u(), Rn;
}
function Gf() {
  return Rn = $u(), Rn && requestAnimationFrame(() => {
    Rn?.refresh();
  }), Rn;
}
function Bi() {
  return Nn.get() || Rn;
}
function Vf(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, typeof (i = (function(s, o) {
      if (typeof s != "object" || s === null) return s;
      var a = s[Symbol.toPrimitive];
      if (a !== void 0) {
        var l = a.call(s, "string");
        if (typeof l != "object") return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(s);
    })(n.key)) == "symbol" ? i : String(i), n);
  }
  var i;
}
function ua(r, e, t) {
  return e && Vf(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function wn() {
  return wn = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, wn.apply(this, arguments);
}
function $s(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Hi(r, e);
}
function Do(r) {
  return Do = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, Do(r);
}
function Hi(r, e) {
  return Hi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Hi(r, e);
}
function qf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Lo(r, e, t) {
  return Lo = qf() ? Reflect.construct.bind() : function(n, i, s) {
    var o = [null];
    o.push.apply(o, i);
    var a = new (Function.bind.apply(n, o))();
    return s && Hi(a, s.prototype), a;
  }, Lo.apply(null, arguments);
}
function Ro(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ro = function(t) {
    if (t === null || Function.toString.call(t).indexOf("[native code]") === -1) return t;
    if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
    if (e !== void 0) {
      if (e.has(t)) return e.get(t);
      e.set(t, n);
    }
    function n() {
      return Lo(t, arguments, Do(this).constructor);
    }
    return n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), Hi(n, t);
  }, Ro(r);
}
function Yf(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
var jn, Wf = function() {
  this.before = void 0, this.beforeLeave = void 0, this.leave = void 0, this.afterLeave = void 0, this.beforeEnter = void 0, this.enter = void 0, this.afterEnter = void 0, this.after = void 0;
};
(function(r) {
  r[r.off = 0] = "off", r[r.error = 1] = "error", r[r.warning = 2] = "warning", r[r.info = 3] = "info", r[r.debug = 4] = "debug";
})(jn || (jn = {}));
var el = jn.off, yr = /* @__PURE__ */ (function() {
  function r(t) {
    this.t = void 0, this.t = t;
  }
  r.getLevel = function() {
    return el;
  }, r.setLevel = function(t) {
    return el = jn[t];
  };
  var e = r.prototype;
  return e.error = function() {
    this.i(console.error, jn.error, [].slice.call(arguments));
  }, e.warn = function() {
    this.i(console.warn, jn.warning, [].slice.call(arguments));
  }, e.info = function() {
    this.i(console.info, jn.info, [].slice.call(arguments));
  }, e.debug = function() {
    this.i(console.log, jn.debug, [].slice.call(arguments));
  }, e.i = function(t, n, i) {
    n <= r.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(i));
  }, r;
})();
function Ir(r) {
  return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function tl(r) {
  return r && r.sensitive ? "" : "i";
}
var En = { container: "container", history: "history", namespace: "namespace", prefix: "data-barba", prevent: "prevent", wrapper: "wrapper" }, br = new (/* @__PURE__ */ (function() {
  function r() {
    this.o = En, this.u = void 0, this.h = { after: null, before: null, parent: null };
  }
  var e = r.prototype;
  return e.toString = function(t) {
    return t.outerHTML;
  }, e.toDocument = function(t) {
    return this.u || (this.u = new DOMParser()), this.u.parseFromString(t, "text/html");
  }, e.toElement = function(t) {
    var n = document.createElement("div");
    return n.innerHTML = t, n;
  }, e.getHtml = function(t) {
    return t === void 0 && (t = document), this.toString(t.documentElement);
  }, e.getWrapper = function(t) {
    return t === void 0 && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
  }, e.getContainer = function(t) {
    return t === void 0 && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
  }, e.removeContainer = function(t) {
    document.body.contains(t) && (this.v(t), t.parentNode.removeChild(t));
  }, e.addContainer = function(t, n) {
    var i = this.getContainer() || this.h.before;
    i ? this.l(t, i) : this.h.after ? this.h.after.parentNode.insertBefore(t, this.h.after) : this.h.parent ? this.h.parent.appendChild(t) : n.appendChild(t);
  }, e.getSibling = function() {
    return this.h;
  }, e.getNamespace = function(t) {
    t === void 0 && (t = document);
    var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
    return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
  }, e.getHref = function(t) {
    if (t.tagName && t.tagName.toLowerCase() === "a") {
      if (typeof t.href == "string") return t.href;
      var n = t.getAttribute("href") || t.getAttribute("xlink:href");
      if (n) return this.resolveUrl(n.baseVal || n);
    }
    return null;
  }, e.resolveUrl = function() {
    var t = [].slice.call(arguments).length;
    if (t === 0) throw new Error("resolveUrl requires at least one argument; got none.");
    var n = document.createElement("base");
    if (n.href = arguments[0], t === 1) return n.href;
    var i = document.getElementsByTagName("head")[0];
    i.insertBefore(n, i.firstChild);
    for (var s, o = document.createElement("a"), a = 1; a < t; a++) o.href = arguments[a], n.href = s = o.href;
    return i.removeChild(n), s;
  }, e.l = function(t, n) {
    n.parentNode.insertBefore(t, n.nextSibling);
  }, e.v = function(t) {
    return this.h = { after: t.nextElementSibling, before: t.previousElementSibling, parent: t.parentElement }, this.h;
  }, r;
})())(), Xf = /* @__PURE__ */ (function() {
  function r() {
    this.p = void 0, this.m = [], this.P = -1;
  }
  var e = r.prototype;
  return e.init = function(t, n) {
    this.p = "barba";
    var i = { data: {}, ns: n, scroll: { x: window.scrollX, y: window.scrollY }, url: t };
    this.P = 0, this.m.push(i);
    var s = { from: this.p, index: this.P, states: [].concat(this.m) };
    window.history && window.history.replaceState(s, "", t);
  }, e.change = function(t, n, i) {
    if (i && i.state) {
      var s = i.state, o = s.index;
      n = this.g(this.P - o), this.replace(s.states), this.P = o;
    } else this.add(t, n);
    return n;
  }, e.add = function(t, n, i, s) {
    var o = i ?? this.R(n), a = { data: s ?? {}, ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: t };
    switch (o) {
      case "push":
        this.P = this.size, this.m.push(a);
        break;
      case "replace":
        this.set(this.P, a);
    }
    var l = { from: this.p, index: this.P, states: [].concat(this.m) };
    switch (o) {
      case "push":
        window.history && window.history.pushState(l, "", t);
        break;
      case "replace":
        window.history && window.history.replaceState(l, "", t);
    }
  }, e.store = function(t, n) {
    var i = n || this.P, s = this.get(i);
    s.data = wn({}, s.data, t), this.set(i, s);
    var o = { from: this.p, index: this.P, states: [].concat(this.m) };
    window.history.replaceState(o, "");
  }, e.update = function(t, n) {
    var i = n || this.P, s = wn({}, this.get(i), t);
    this.set(i, s);
  }, e.remove = function(t) {
    t ? this.m.splice(t, 1) : this.m.pop(), this.P--;
  }, e.clear = function() {
    this.m = [], this.P = -1;
  }, e.replace = function(t) {
    this.m = t;
  }, e.get = function(t) {
    return this.m[t];
  }, e.set = function(t, n) {
    return this.m[t] = n;
  }, e.R = function(t) {
    var n = "push", i = t, s = En.prefix + "-" + En.history;
    return i.hasAttribute && i.hasAttribute(s) && (n = i.getAttribute(s)), n;
  }, e.g = function(t) {
    return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : t === 0 ? "popstate" : t > 0 ? "back" : "forward";
  }, ua(r, [{ key: "current", get: function() {
    return this.m[this.P];
  } }, { key: "previous", get: function() {
    return this.P < 1 ? null : this.m[this.P - 1];
  } }, { key: "size", get: function() {
    return this.m.length;
  } }]), r;
})(), zu = new Xf(), As = function(r, e) {
  try {
    var t = (function() {
      if (!e.next.html) return Promise.resolve(r).then(function(n) {
        var i = e.next;
        if (n) {
          var s = br.toElement(n.html);
          i.namespace = br.getNamespace(s), i.container = br.getContainer(s), i.url = n.url, i.html = n.html, zu.update({ ns: i.namespace });
          var o = br.toDocument(n.html);
          document.title = o.title;
        }
      });
    })();
    return Promise.resolve(t && t.then ? t.then(function() {
    }) : void 0);
  } catch (n) {
    return Promise.reject(n);
  }
}, Nu = function r(e, t, n) {
  return e instanceof RegExp ? (function(i, s) {
    if (!s) return i;
    for (var o = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, l = o.exec(i.source); l; ) s.push({ name: l[1] || a++, prefix: "", suffix: "", modifier: "", pattern: "" }), l = o.exec(i.source);
    return i;
  })(e, t) : Array.isArray(e) ? (function(i, s, o) {
    var a = i.map(function(l) {
      return r(l, s, o).source;
    });
    return new RegExp("(?:".concat(a.join("|"), ")"), tl(o));
  })(e, t, n) : (function(i, s, o) {
    return (function(a, l, u) {
      u === void 0 && (u = {});
      for (var c = u.strict, h = c !== void 0 && c, f = u.start, p = f === void 0 || f, g = u.end, d = g === void 0 || g, m = u.encode, v = m === void 0 ? function(q) {
        return q;
      } : m, _ = u.delimiter, y = _ === void 0 ? "/#?" : _, b = u.endsWith, w = "[".concat(Ir(b === void 0 ? "" : b), "]|$"), E = "[".concat(Ir(y), "]"), T = p ? "^" : "", M = 0, k = a; M < k.length; M++) {
        var x = k[M];
        if (typeof x == "string") T += Ir(v(x));
        else {
          var A = Ir(v(x.prefix)), C = Ir(v(x.suffix));
          if (x.pattern) if (l && l.push(x), A || C) if (x.modifier === "+" || x.modifier === "*") {
            var D = x.modifier === "*" ? "?" : "";
            T += "(?:".concat(A, "((?:").concat(x.pattern, ")(?:").concat(C).concat(A, "(?:").concat(x.pattern, "))*)").concat(C, ")").concat(D);
          } else T += "(?:".concat(A, "(").concat(x.pattern, ")").concat(C, ")").concat(x.modifier);
          else T += x.modifier === "+" || x.modifier === "*" ? "((?:".concat(x.pattern, ")").concat(x.modifier, ")") : "(".concat(x.pattern, ")").concat(x.modifier);
          else T += "(?:".concat(A).concat(C, ")").concat(x.modifier);
        }
      }
      if (d) h || (T += "".concat(E, "?")), T += u.endsWith ? "(?=".concat(w, ")") : "$";
      else {
        var R = a[a.length - 1], H = typeof R == "string" ? E.indexOf(R[R.length - 1]) > -1 : R === void 0;
        h || (T += "(?:".concat(E, "(?=").concat(w, "))?")), H || (T += "(?=".concat(E, "|").concat(w, ")"));
      }
      return new RegExp(T, tl(u));
    })((function(a, l) {
      l === void 0 && (l = {});
      for (var u = (function(C) {
        for (var D = [], R = 0; R < C.length; ) {
          var H = C[R];
          if (H !== "*" && H !== "+" && H !== "?") if (H !== "\\") if (H !== "{") if (H !== "}") if (H !== ":") if (H !== "(") D.push({ type: "CHAR", index: R, value: C[R++] });
          else {
            var q = 1, B = "";
            if (C[V = R + 1] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(V));
            for (; V < C.length; ) if (C[V] !== "\\") {
              if (C[V] === ")") {
                if (--q == 0) {
                  V++;
                  break;
                }
              } else if (C[V] === "(" && (q++, C[V + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at ".concat(V));
              B += C[V++];
            } else B += C[V++] + C[V++];
            if (q) throw new TypeError("Unbalanced pattern at ".concat(R));
            if (!B) throw new TypeError("Missing pattern at ".concat(R));
            D.push({ type: "PATTERN", index: R, value: B }), R = V;
          }
          else {
            for (var U = "", V = R + 1; V < C.length; ) {
              var S = C.charCodeAt(V);
              if (!(S >= 48 && S <= 57 || S >= 65 && S <= 90 || S >= 97 && S <= 122 || S === 95)) break;
              U += C[V++];
            }
            if (!U) throw new TypeError("Missing parameter name at ".concat(R));
            D.push({ type: "NAME", index: R, value: U }), R = V;
          }
          else D.push({ type: "CLOSE", index: R, value: C[R++] });
          else D.push({ type: "OPEN", index: R, value: C[R++] });
          else D.push({ type: "ESCAPED_CHAR", index: R++, value: C[R++] });
          else D.push({ type: "MODIFIER", index: R, value: C[R++] });
        }
        return D.push({ type: "END", index: R, value: "" }), D;
      })(a), c = l.prefixes, h = c === void 0 ? "./" : c, f = "[^".concat(Ir(l.delimiter || "/#?"), "]+?"), p = [], g = 0, d = 0, m = "", v = function(C) {
        if (d < u.length && u[d].type === C) return u[d++].value;
      }, _ = function(C) {
        var D = v(C);
        if (D !== void 0) return D;
        var R = u[d], H = R.index;
        throw new TypeError("Unexpected ".concat(R.type, " at ").concat(H, ", expected ").concat(C));
      }, y = function() {
        for (var C, D = ""; C = v("CHAR") || v("ESCAPED_CHAR"); ) D += C;
        return D;
      }; d < u.length; ) {
        var b = v("CHAR"), w = v("NAME"), E = v("PATTERN");
        if (w || E) h.indexOf(M = b || "") === -1 && (m += M, M = ""), m && (p.push(m), m = ""), p.push({ name: w || g++, prefix: M, suffix: "", pattern: E || f, modifier: v("MODIFIER") || "" });
        else {
          var T = b || v("ESCAPED_CHAR");
          if (T) m += T;
          else if (m && (p.push(m), m = ""), v("OPEN")) {
            var M = y(), k = v("NAME") || "", x = v("PATTERN") || "", A = y();
            _("CLOSE"), p.push({ name: k || (x ? g++ : ""), pattern: k && !x ? f : x, prefix: M, suffix: A, modifier: v("MODIFIER") || "" });
          } else _("END");
        }
      }
      return p;
    })(i, o), s, o);
  })(e, t, n);
}, jf = { __proto__: null, update: As, nextTick: function() {
  return new Promise(function(r) {
    window.requestAnimationFrame(r);
  });
}, pathToRegexp: Nu }, Fu = function() {
  return window.location.origin;
}, Gi = function(r) {
  return r === void 0 && (r = window.location.href), Un(r).port;
}, Un = function(r) {
  var e, t = r.match(/:\d+/);
  if (t === null) /^http/.test(r) && (e = 80), /^https/.test(r) && (e = 443);
  else {
    var n = t[0].substring(1);
    e = parseInt(n, 10);
  }
  var i, s = r.replace(Fu(), ""), o = {}, a = s.indexOf("#");
  a >= 0 && (i = s.slice(a + 1), s = s.slice(0, a));
  var l = s.indexOf("?");
  return l >= 0 && (o = Bu(s.slice(l + 1)), s = s.slice(0, l)), { hash: i, path: s, port: e, query: o };
}, Bu = function(r) {
  return r.split("&").reduce(function(e, t) {
    var n = t.split("=");
    return e[n[0]] = n[1], e;
  }, {});
}, Io = function(r) {
  return r === void 0 && (r = window.location.href), r.replace(/(\/#.*|\/|#.*)$/, "");
}, Uf = { __proto__: null, getHref: function() {
  return window.location.href;
}, getAbsoluteHref: function(r, e) {
  return e === void 0 && (e = document.baseURI), new URL(r, e).href;
}, getOrigin: Fu, getPort: Gi, getPath: function(r) {
  return r === void 0 && (r = window.location.href), Un(r).path;
}, getQuery: function(r, e) {
  return e === void 0 && (e = !1), e ? JSON.stringify(Un(r).query) : Un(r).query;
}, getHash: function(r) {
  return Un(r).hash;
}, parse: Un, parseQuery: Bu, clean: Io };
function Kf(r, e, t, n, i) {
  return e === void 0 && (e = 2e3), new Promise(function(s, o) {
    var a = new XMLHttpRequest();
    a.onreadystatechange = function() {
      if (a.readyState === XMLHttpRequest.DONE) {
        if (a.status === 200) {
          var l = a.responseURL !== "" && a.responseURL !== r ? a.responseURL : r;
          s({ html: a.responseText, url: wn({ href: l }, Un(l)) }), n.update(r, { status: "fulfilled", target: l });
        } else if (a.status) {
          var u = { status: a.status, statusText: a.statusText };
          t(r, u), o(u), n.update(r, { status: "rejected" });
        }
      }
    }, a.ontimeout = function() {
      var l = new Error("Timeout error [" + e + "]");
      t(r, l), o(l), n.update(r, { status: "rejected" });
    }, a.onerror = function() {
      var l = new Error("Fetch error");
      t(r, l), o(l), n.update(r, { status: "rejected" });
    }, a.open("GET", r), a.timeout = e, a.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), a.setRequestHeader("x-barba", "yes"), i.all().forEach(function(l, u) {
      a.setRequestHeader(u, l);
    }), a.send();
  });
}
function Qf(r) {
  return !!r && (typeof r == "object" || typeof r == "function") && typeof r.then == "function";
}
function Gr(r, e) {
  return e === void 0 && (e = {}), function() {
    var t = arguments, n = !1, i = new Promise(function(s, o) {
      e.async = function() {
        return n = !0, function(l, u) {
          l ? o(l) : s(u);
        };
      };
      var a = r.apply(e, [].slice.call(t));
      n || (Qf(a) ? a.then(s, o) : s(a));
    });
    return i;
  };
}
var Xn = new (/* @__PURE__ */ (function(r) {
  function e() {
    var n;
    return (n = r.call(this) || this).logger = new yr("@barba/core"), n.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n.registered = /* @__PURE__ */ new Map(), n.init(), n;
  }
  $s(e, r);
  var t = e.prototype;
  return t.init = function() {
    var n = this;
    this.registered.clear(), this.all.forEach(function(i) {
      n[i] || (n[i] = function(s, o) {
        n.registered.has(i) || n.registered.set(i, /* @__PURE__ */ new Set()), n.registered.get(i).add({ ctx: o || {}, fn: s });
      });
    });
  }, t.do = function(n) {
    var i = arguments, s = this;
    if (this.registered.has(n)) {
      var o = Promise.resolve();
      return this.registered.get(n).forEach(function(a) {
        o = o.then(function() {
          return Gr(a.fn, a.ctx).apply(void 0, [].slice.call(i, 1));
        });
      }), o.catch(function(a) {
        s.logger.debug("Hook error [" + n + "]"), s.logger.error(a);
      });
    }
    return Promise.resolve();
  }, t.clear = function() {
    var n = this;
    this.all.forEach(function(i) {
      delete n[i];
    }), this.init();
  }, t.help = function() {
    this.logger.info("Available hooks: " + this.all.join(","));
    var n = [];
    this.registered.forEach(function(i, s) {
      return n.push(s);
    }), this.logger.info("Registered hooks: " + n.join(","));
  }, e;
})(Wf))(), Hu = /* @__PURE__ */ (function() {
  function r(e) {
    if (this.k = void 0, this.O = [], typeof e == "boolean") this.k = e;
    else {
      var t = Array.isArray(e) ? e : [e];
      this.O = t.map(function(n) {
        return Nu(n);
      });
    }
  }
  return r.prototype.checkHref = function(e) {
    if (typeof this.k == "boolean") return this.k;
    var t = Un(e).path;
    return this.O.some(function(n) {
      return n.exec(t) !== null;
    });
  }, r;
})(), Zf = /* @__PURE__ */ (function(r) {
  function e(n) {
    var i;
    return (i = r.call(this, n) || this).T = /* @__PURE__ */ new Map(), i;
  }
  $s(e, r);
  var t = e.prototype;
  return t.set = function(n, i, s, o, a) {
    return this.T.set(n, { action: s, request: i, status: o, target: a ?? n }), { action: s, request: i, status: o, target: a };
  }, t.get = function(n) {
    return this.T.get(n);
  }, t.getRequest = function(n) {
    return this.T.get(n).request;
  }, t.getAction = function(n) {
    return this.T.get(n).action;
  }, t.getStatus = function(n) {
    return this.T.get(n).status;
  }, t.getTarget = function(n) {
    return this.T.get(n).target;
  }, t.has = function(n) {
    return !this.checkHref(n) && this.T.has(n);
  }, t.delete = function(n) {
    return this.T.delete(n);
  }, t.update = function(n, i) {
    var s = wn({}, this.T.get(n), i);
    return this.T.set(n, s), s;
  }, e;
})(Hu), Jf = /* @__PURE__ */ (function() {
  function r() {
    this.A = /* @__PURE__ */ new Map();
  }
  var e = r.prototype;
  return e.set = function(t, n) {
    return this.A.set(t, n), { name: n };
  }, e.get = function(t) {
    return this.A.get(t);
  }, e.all = function() {
    return this.A;
  }, e.has = function(t) {
    return this.A.has(t);
  }, e.delete = function(t) {
    return this.A.delete(t);
  }, e.clear = function() {
    return this.A.clear();
  }, r;
})(), ed = function() {
  return !window.history.pushState;
}, td = function(r) {
  return !r.el || !r.href;
}, nd = function(r) {
  var e = r.event;
  return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
}, rd = function(r) {
  var e = r.el;
  return e.hasAttribute("target") && e.target === "_blank";
}, id = function(r) {
  var e = r.el;
  return e.protocol !== void 0 && window.location.protocol !== e.protocol || e.hostname !== void 0 && window.location.hostname !== e.hostname;
}, sd = function(r) {
  var e = r.el;
  return e.port !== void 0 && Gi() !== Gi(e.href);
}, od = function(r) {
  var e = r.el;
  return e.getAttribute && typeof e.getAttribute("download") == "string";
}, ad = function(r) {
  return r.el.hasAttribute(En.prefix + "-" + En.prevent);
}, ld = function(r) {
  return !!r.el.closest("[" + En.prefix + "-" + En.prevent + '="all"]');
}, ud = function(r) {
  var e = r.href;
  return Io(e) === Io() && Gi(e) === Gi();
}, cd = /* @__PURE__ */ (function(r) {
  function e(n) {
    var i;
    return (i = r.call(this, n) || this).suite = [], i.tests = /* @__PURE__ */ new Map(), i.init(), i;
  }
  $s(e, r);
  var t = e.prototype;
  return t.init = function() {
    this.add("pushState", ed), this.add("exists", td), this.add("newTab", nd), this.add("blank", rd), this.add("corsDomain", id), this.add("corsPort", sd), this.add("download", od), this.add("preventSelf", ad), this.add("preventAll", ld), this.add("sameUrl", ud, !1);
  }, t.add = function(n, i, s) {
    s === void 0 && (s = !0), this.tests.set(n, i), s && this.suite.push(n);
  }, t.run = function(n, i, s, o) {
    return this.tests.get(n)({ el: i, event: s, href: o });
  }, t.checkLink = function(n, i, s) {
    var o = this;
    return this.suite.some(function(a) {
      return o.run(a, n, i, s);
    });
  }, e;
})(Hu), eo = /* @__PURE__ */ (function(r) {
  function e(t, n) {
    var i;
    return n === void 0 && (n = "Barba error"), (i = r.call.apply(r, [this].concat([].slice.call(arguments, 2))) || this).error = void 0, i.label = void 0, i.error = t, i.label = n, Error.captureStackTrace && Error.captureStackTrace(Yf(i), e), i.name = "BarbaError", i;
  }
  return $s(e, r), e;
})(/* @__PURE__ */ Ro(Error)), fd = /* @__PURE__ */ (function() {
  function r(t) {
    t === void 0 && (t = []), this.logger = new yr("@barba/core"), this.all = [], this.page = [], this.once = [], this.j = [{ name: "namespace", type: "strings" }, { name: "custom", type: "function" }], t && (this.all = this.all.concat(t)), this.update();
  }
  var e = r.prototype;
  return e.add = function(t, n) {
    t === "rule" ? this.j.splice(n.position || 0, 0, n.value) : this.all.push(n), this.update();
  }, e.resolve = function(t, n) {
    var i = this;
    n === void 0 && (n = {});
    var s = n.once ? this.once : this.page;
    s = s.filter(n.self ? function(f) {
      return f.name && f.name === "self";
    } : function(f) {
      return !f.name || f.name !== "self";
    });
    var o = /* @__PURE__ */ new Map(), a = s.find(function(f) {
      var p = !0, g = {};
      return n.self && f.name === "self" ? (o.set(f, g), !0) : (i.j.reverse().forEach(function(d) {
        p && (p = i.M(f, d, t, g), f.from && f.to && (p = i.M(f, d, t, g, "from") && i.M(f, d, t, g, "to")), f.from && !f.to && (p = i.M(f, d, t, g, "from")), !f.from && f.to && (p = i.M(f, d, t, g, "to")));
      }), o.set(f, g), p);
    }), l = o.get(a), u = [];
    if (u.push(n.once ? "once" : "page"), n.self && u.push("self"), l) {
      var c, h = [a];
      Object.keys(l).length > 0 && h.push(l), (c = this.logger).info.apply(c, ["Transition found [" + u.join(",") + "]"].concat(h));
    } else this.logger.info("No transition found [" + u.join(",") + "]");
    return a;
  }, e.update = function() {
    var t = this;
    this.all = this.all.map(function(n) {
      return t.N(n);
    }).sort(function(n, i) {
      return n.priority - i.priority;
    }).reverse().map(function(n) {
      return delete n.priority, n;
    }), this.page = this.all.filter(function(n) {
      return n.leave !== void 0 || n.enter !== void 0;
    }), this.once = this.all.filter(function(n) {
      return n.once !== void 0;
    });
  }, e.M = function(t, n, i, s, o) {
    var a = !0, l = !1, u = t, c = n.name, h = c, f = c, p = c, g = o ? u[o] : u, d = o === "to" ? i.next : i.current;
    if (o ? g && g[c] : g[c]) {
      switch (n.type) {
        case "strings":
        default:
          var m = Array.isArray(g[h]) ? g[h] : [g[h]];
          d[h] && m.indexOf(d[h]) !== -1 && (l = !0), m.indexOf(d[h]) === -1 && (a = !1);
          break;
        case "object":
          var v = Array.isArray(g[f]) ? g[f] : [g[f]];
          d[f] ? (d[f].name && v.indexOf(d[f].name) !== -1 && (l = !0), v.indexOf(d[f].name) === -1 && (a = !1)) : a = !1;
          break;
        case "function":
          g[p](i) ? l = !0 : a = !1;
      }
      l && (o ? (s[o] = s[o] || {}, s[o][c] = u[o][c]) : s[c] = u[c]);
    }
    return a;
  }, e.S = function(t, n, i) {
    var s = 0;
    return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (s += Math.pow(10, i), t.from && t.from[n] && (s += 1), t.to && t.to[n] && (s += 2)), s;
  }, e.N = function(t) {
    var n = this;
    t.priority = 0;
    var i = 0;
    return this.j.forEach(function(s, o) {
      i += n.S(t, s.name, o + 1);
    }), t.priority = i, t;
  }, r;
})();
function ui(r, e) {
  try {
    var t = r();
  } catch (n) {
    return e(n);
  }
  return t && t.then ? t.then(void 0, e) : t;
}
var dd = /* @__PURE__ */ (function() {
  function r(t) {
    t === void 0 && (t = []), this.logger = new yr("@barba/core"), this.store = void 0, this.C = !1, this.store = new fd(t);
  }
  var e = r.prototype;
  return e.get = function(t, n) {
    return this.store.resolve(t, n);
  }, e.doOnce = function(t) {
    var n = t.data, i = t.transition;
    try {
      var s = function() {
        o.C = !1;
      }, o = this, a = i || {};
      o.C = !0;
      var l = ui(function() {
        return Promise.resolve(o.L("beforeOnce", n, a)).then(function() {
          return Promise.resolve(o.once(n, a)).then(function() {
            return Promise.resolve(o.L("afterOnce", n, a)).then(function() {
            });
          });
        });
      }, function(u) {
        o.C = !1, o.logger.debug("Transition error [before/after/once]"), o.logger.error(u);
      });
      return Promise.resolve(l && l.then ? l.then(s) : s());
    } catch (u) {
      return Promise.reject(u);
    }
  }, e.doPage = function(t) {
    var n = t.data, i = t.transition, s = t.page, o = t.wrapper;
    try {
      var a = function(f) {
        l.C = !1;
      }, l = this, u = i || {}, c = u.sync === !0 || !1;
      l.C = !0;
      var h = ui(function() {
        function f() {
          return Promise.resolve(l.L("before", n, u)).then(function() {
            function g(m) {
              return Promise.resolve(l.remove(n)).then(function() {
                return Promise.resolve(l.L("after", n, u)).then(function() {
                });
              });
            }
            var d = (function() {
              if (c) return ui(function() {
                return Promise.resolve(l.add(n, o)).then(function() {
                  return Promise.resolve(l.L("beforeLeave", n, u)).then(function() {
                    return Promise.resolve(l.L("beforeEnter", n, u)).then(function() {
                      return Promise.resolve(Promise.all([l.leave(n, u), l.enter(n, u)])).then(function() {
                        return Promise.resolve(l.L("afterLeave", n, u)).then(function() {
                          return Promise.resolve(l.L("afterEnter", n, u)).then(function() {
                          });
                        });
                      });
                    });
                  });
                });
              }, function(y) {
                if (l.H(y)) throw new eo(y, "Transition error [sync]");
              });
              var m = function(y) {
                return ui(function() {
                  var b = (function() {
                    if (v !== !1) return Promise.resolve(l.add(n, o)).then(function() {
                      return Promise.resolve(l.L("beforeEnter", n, u)).then(function() {
                        return Promise.resolve(l.enter(n, u, v)).then(function() {
                          return Promise.resolve(l.L("afterEnter", n, u)).then(function() {
                          });
                        });
                      });
                    });
                  })();
                  if (b && b.then) return b.then(function() {
                  });
                }, function(b) {
                  if (l.H(b)) throw new eo(b, "Transition error [before/after/enter]");
                });
              }, v = !1, _ = ui(function() {
                return Promise.resolve(l.L("beforeLeave", n, u)).then(function() {
                  return Promise.resolve(Promise.all([l.leave(n, u), As(s, n)]).then(function(y) {
                    return y[0];
                  })).then(function(y) {
                    return v = y, Promise.resolve(l.L("afterLeave", n, u)).then(function() {
                    });
                  });
                });
              }, function(y) {
                if (l.H(y)) throw new eo(y, "Transition error [before/after/leave]");
              });
              return _ && _.then ? _.then(m) : m();
            })();
            return d && d.then ? d.then(g) : g();
          });
        }
        var p = (function() {
          if (c) return Promise.resolve(As(s, n)).then(function() {
          });
        })();
        return p && p.then ? p.then(f) : f();
      }, function(f) {
        throw l.C = !1, f.name && f.name === "BarbaError" ? (l.logger.debug(f.label), l.logger.error(f.error), f) : (l.logger.debug("Transition error [page]"), l.logger.error(f), f);
      });
      return Promise.resolve(h && h.then ? h.then(a) : a());
    } catch (f) {
      return Promise.reject(f);
    }
  }, e.once = function(t, n) {
    try {
      return Promise.resolve(Xn.do("once", t, n)).then(function() {
        return n.once ? Gr(n.once, n)(t) : Promise.resolve();
      });
    } catch (i) {
      return Promise.reject(i);
    }
  }, e.leave = function(t, n) {
    try {
      return Promise.resolve(Xn.do("leave", t, n)).then(function() {
        return n.leave ? Gr(n.leave, n)(t) : Promise.resolve();
      });
    } catch (i) {
      return Promise.reject(i);
    }
  }, e.enter = function(t, n, i) {
    try {
      return Promise.resolve(Xn.do("enter", t, n)).then(function() {
        return n.enter ? Gr(n.enter, n)(t, i) : Promise.resolve();
      });
    } catch (s) {
      return Promise.reject(s);
    }
  }, e.add = function(t, n) {
    try {
      return br.addContainer(t.next.container, n), Xn.do("nextAdded", t), Promise.resolve();
    } catch (i) {
      return Promise.reject(i);
    }
  }, e.remove = function(t) {
    try {
      return br.removeContainer(t.current.container), Xn.do("currentRemoved", t), Promise.resolve();
    } catch (n) {
      return Promise.reject(n);
    }
  }, e.H = function(t) {
    return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status;
  }, e.L = function(t, n, i) {
    try {
      return Promise.resolve(Xn.do(t, n, i)).then(function() {
        return i[t] ? Gr(i[t], i)(n) : Promise.resolve();
      });
    } catch (s) {
      return Promise.reject(s);
    }
  }, ua(r, [{ key: "isRunning", get: function() {
    return this.C;
  }, set: function(t) {
    this.C = t;
  } }, { key: "hasOnce", get: function() {
    return this.store.once.length > 0;
  } }, { key: "hasSelf", get: function() {
    return this.store.all.some(function(t) {
      return t.name === "self";
    });
  } }, { key: "shouldWait", get: function() {
    return this.store.all.some(function(t) {
      return t.to && !t.to.route || t.sync;
    });
  } }]), r;
})(), hd = /* @__PURE__ */ (function() {
  function r(e) {
    var t = this;
    this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = /* @__PURE__ */ new Map(), e.length !== 0 && (e.forEach(function(n) {
      t.byNamespace.set(n.namespace, n);
    }), this.names.forEach(function(n) {
      Xn[n](t._(n));
    }));
  }
  return r.prototype._ = function(e) {
    var t = this;
    return function(n) {
      var i = e.match(/enter/i) ? n.next : n.current, s = t.byNamespace.get(i.namespace);
      return s && s[e] ? Gr(s[e], s)(n) : Promise.resolve();
    };
  }, r;
})();
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(r) {
  var e = this;
  do {
    if (e.matches(r)) return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null && e.nodeType === 1);
  return null;
});
var pd = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } }, gd = new (/* @__PURE__ */ (function() {
  function r() {
    this.version = "2.10.3", this.schemaPage = pd, this.Logger = yr, this.logger = new yr("@barba/core"), this.plugins = [], this.timeout = void 0, this.cacheIgnore = void 0, this.cacheFirstPage = void 0, this.prefetchIgnore = void 0, this.preventRunning = void 0, this.hooks = Xn, this.cache = void 0, this.headers = void 0, this.prevent = void 0, this.transitions = void 0, this.views = void 0, this.dom = br, this.helpers = jf, this.history = zu, this.request = Kf, this.url = Uf, this.D = void 0, this.B = void 0, this.q = void 0, this.F = void 0;
  }
  var e = r.prototype;
  return e.use = function(t, n) {
    var i = this.plugins;
    i.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : typeof t.install == "function" ? (t.install(this, n), i.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
  }, e.init = function(t) {
    var n = t === void 0 ? {} : t, i = n.transitions, s = i === void 0 ? [] : i, o = n.views, a = o === void 0 ? [] : o, l = n.schema, u = l === void 0 ? En : l, c = n.requestError, h = n.timeout, f = h === void 0 ? 2e3 : h, p = n.cacheIgnore, g = p !== void 0 && p, d = n.cacheFirstPage, m = d !== void 0 && d, v = n.prefetchIgnore, _ = v !== void 0 && v, y = n.preventRunning, b = y !== void 0 && y, w = n.prevent, E = w === void 0 ? null : w, T = n.debug, M = n.logLevel;
    if (yr.setLevel((T !== void 0 && T) === !0 ? "debug" : M === void 0 ? "off" : M), this.logger.info(this.version), Object.keys(u).forEach(function(A) {
      En[A] && (En[A] = u[A]);
    }), this.B = c, this.timeout = f, this.cacheIgnore = g, this.cacheFirstPage = m, this.prefetchIgnore = _, this.preventRunning = b, this.q = this.dom.getWrapper(), !this.q) throw new Error("[@barba/core] No Barba wrapper found");
    this.I();
    var k = this.data.current;
    if (!k.container) throw new Error("[@barba/core] No Barba container found");
    if (this.cache = new Zf(g), this.headers = new Jf(), this.prevent = new cd(_), this.transitions = new dd(s), this.views = new hd(a), E !== null) {
      if (typeof E != "function") throw new Error("[@barba/core] Prevent should be a function");
      this.prevent.add("preventCustom", E);
    }
    this.history.init(k.url.href, k.namespace), m && this.cache.set(k.url.href, Promise.resolve({ html: k.html, url: k.url }), "init", "fulfilled"), this.U = this.U.bind(this), this.$ = this.$.bind(this), this.X = this.X.bind(this), this.G(), this.plugins.forEach(function(A) {
      return A.init();
    });
    var x = this.data;
    x.trigger = "barba", x.next = x.current, x.current = wn({}, this.schemaPage), this.hooks.do("ready", x), this.once(x), this.I();
  }, e.destroy = function() {
    this.I(), this.J(), this.history.clear(), this.hooks.clear(), this.plugins = [];
  }, e.force = function(t) {
    window.location.assign(t);
  }, e.go = function(t, n, i) {
    var s;
    if (n === void 0 && (n = "barba"), this.F = null, this.transitions.isRunning) this.force(t);
    else if (!(s = n === "popstate" ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) && this.url.getQuery(this.history.current.url, !0) === this.url.getQuery(t, !0) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(this.cache.has(t) ? this.cache.get(t).target : t, n, i), i && (i.stopPropagation(), i.preventDefault()), this.page(t, n, i ?? void 0, s);
  }, e.once = function(t) {
    try {
      var n = this;
      return Promise.resolve(n.hooks.do("beforeEnter", t)).then(function() {
        function i() {
          return Promise.resolve(n.hooks.do("afterEnter", t)).then(function() {
          });
        }
        var s = (function() {
          if (n.transitions.hasOnce) {
            var o = n.transitions.get(t, { once: !0 });
            return Promise.resolve(n.transitions.doOnce({ transition: o, data: t })).then(function() {
            });
          }
        })();
        return s && s.then ? s.then(i) : i();
      });
    } catch (i) {
      return Promise.reject(i);
    }
  }, e.page = function(t, n, i, s) {
    try {
      var o, a = function() {
        var h = l.data;
        return Promise.resolve(l.hooks.do("page", h)).then(function() {
          var f = (function(p, g) {
            try {
              var d = (m = l.transitions.get(h, { once: !1, self: s }), Promise.resolve(l.transitions.doPage({ data: h, page: o, transition: m, wrapper: l.q })).then(function() {
                l.I();
              }));
            } catch {
              return g();
            }
            var m;
            return d && d.then ? d.then(void 0, g) : d;
          })(0, function() {
            yr.getLevel() === 0 && l.force(h.next.url.href);
          });
          if (f && f.then) return f.then(function() {
          });
        });
      }, l = this;
      if (l.data.next.url = wn({ href: t }, l.url.parse(t)), l.data.trigger = n, l.data.event = i, l.cache.has(t)) o = l.cache.update(t, { action: "click" }).request;
      else {
        var u = l.request(t, l.timeout, l.onRequestError.bind(l, n), l.cache, l.headers);
        u.then(function(h) {
          h.url.href !== t && l.history.add(h.url.href, n, "replace");
        }), o = l.cache.set(t, u, "click", "pending").request;
      }
      var c = (function() {
        if (l.transitions.shouldWait) return Promise.resolve(As(o, l.data)).then(function() {
        });
      })();
      return Promise.resolve(c && c.then ? c.then(a) : a());
    } catch (h) {
      return Promise.reject(h);
    }
  }, e.onRequestError = function(t) {
    this.transitions.isRunning = !1;
    var n = [].slice.call(arguments, 1), i = n[0], s = n[1], o = this.cache.getAction(i);
    return this.cache.delete(i), this.B && this.B(t, o, i, s) === !1 || o === "click" && this.force(i), !1;
  }, e.prefetch = function(t) {
    var n = this;
    t = this.url.getAbsoluteHref(t), this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba"), this.cache, this.headers).catch(function(i) {
      n.logger.error(i);
    }), "prefetch", "pending");
  }, e.G = function() {
    this.prefetchIgnore !== !0 && (document.addEventListener("mouseover", this.U), document.addEventListener("touchstart", this.U)), document.addEventListener("click", this.$), window.addEventListener("popstate", this.X);
  }, e.J = function() {
    this.prefetchIgnore !== !0 && (document.removeEventListener("mouseover", this.U), document.removeEventListener("touchstart", this.U)), document.removeEventListener("click", this.$), window.removeEventListener("popstate", this.X);
  }, e.U = function(t) {
    var n = this, i = this.W(t);
    if (i) {
      var s = this.url.getAbsoluteHref(this.dom.getHref(i));
      this.prevent.checkHref(s) || this.cache.has(s) || this.cache.set(s, this.request(s, this.timeout, this.onRequestError.bind(this, i), this.cache, this.headers).catch(function(o) {
        n.logger.error(o);
      }), "enter", "pending");
    }
  }, e.$ = function(t) {
    var n = this.W(t);
    if (n) {
      if (this.transitions.isRunning && this.preventRunning) return t.preventDefault(), void t.stopPropagation();
      this.F = t, this.go(this.dom.getHref(n), n, t);
    }
  }, e.X = function(t) {
    this.go(this.url.getHref(), "popstate", t);
  }, e.W = function(t) {
    for (var n = t.target; n && !this.dom.getHref(n); ) n = n.parentNode;
    if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n;
  }, e.I = function() {
    var t = this.url.getHref(), n = { container: this.dom.getContainer(), html: this.dom.getHtml(), namespace: this.dom.getNamespace(), url: wn({ href: t }, this.url.parse(t)) };
    this.D = { current: n, event: void 0, next: wn({}, this.schemaPage), trigger: void 0 }, this.hooks.do("reset", this.data);
  }, ua(r, [{ key: "data", get: function() {
    return this.D;
  } }, { key: "wrapper", get: function() {
    return this.q;
  } }]), r;
})())();
const Gn = ri.create("TeaserCompass");
on.registerPlugin(ne);
class md {
  element;
  images;
  compass = null;
  compassOuter = null;
  compassInner = null;
  animations = [];
  effectElements = [];
  constructor(e) {
    this.element = e, this.images = this.element.querySelectorAll("[data-teaser-compass-image]"), this.compass = this.element.querySelector(".teaser_compass_compass"), this.compass && (this.compassOuter = this.compass.querySelector("#compass_outer"), this.compassInner = this.compass.querySelector("#compass_inner"));
  }
  init() {
    Gn.log("Initialiseren", this.element), this.initCompassRotation(), this.initImagesParallax();
  }
  initCompassRotation() {
    if (!this.compassOuter || !this.compassInner) {
      Gn.warn("Compass groepen niet gevonden");
      return;
    }
    on.set([this.compassOuter, this.compassInner], {
      transformOrigin: "50%"
    });
    const e = on.to(this.compassOuter, {
      rotation: 180,
      ease: "none",
      scrollTrigger: {
        trigger: this.element,
        start: "top bottom",
        end: "bottom top",
        scrub: !0
      }
    }), t = on.to(this.compassInner, {
      rotation: -45,
      ease: "none",
      scrollTrigger: {
        trigger: this.element,
        start: "top bottom",
        end: "bottom top",
        scrub: !0
      }
    });
    e.scrollTrigger && this.animations.push(e.scrollTrigger), t.scrollTrigger && this.animations.push(t.scrollTrigger), Gn.log("Compass rotatie animaties geïnitialiseerd");
  }
  initImagesParallax() {
    if (this.images.length === 0) {
      Gn.warn("Geen image elementen gevonden");
      return;
    }
    const e = Bi();
    if (!e) {
      Gn.warn("ScrollSmoother niet beschikbaar voor parallax effecten");
      return;
    }
    this.images.forEach((t, n) => {
      const i = n === 0 || n === 2 ? 1.4 : 1.1;
      e.effects(t, {
        speed: i
      }), this.effectElements.push(t), Gn.log(`Parallax effect toegevoegd voor image ${n + 1} met speed ${i}`);
    });
  }
  destroy() {
    Gn.log("Destroyen", this.element);
    const e = Bi();
    e && this.effectElements.length > 0 && this.effectElements.forEach((t) => {
      try {
        e.effects(t, { speed: 1 });
      } catch (n) {
        Gn.warn("Kon effect niet verwijderen", n);
      }
    }), this.animations.forEach((t) => {
      (t instanceof on.core.Timeline || t instanceof ne) && t.kill();
    }), ne.getAll().forEach((t) => {
      (t.trigger === this.element || this.compass && t.trigger === this.compass || this.compassOuter && t.trigger === this.compassOuter || this.compassInner && t.trigger === this.compassInner) && t.kill();
    }), this.animations = [], this.effectElements = [];
  }
}
const Vn = ri.create("HeroMain");
class _d {
  element;
  video = null;
  effectElements = [];
  constructor(e) {
    this.element = e;
    const t = this.element.querySelector(".hero_main_bg");
    t && (this.video = t.querySelector("video"));
  }
  init() {
    Vn.log("Initialiseren", this.element), this.initVideoParallax(), this.initVideoAutoplay();
  }
  initVideoParallax() {
    if (!this.video) {
      Vn.warn("Geen video element gevonden");
      return;
    }
    const e = Bi();
    if (!e) {
      Vn.warn("ScrollSmoother niet beschikbaar voor parallax effect");
      return;
    }
    e.effects(this.video, {
      speed: "clamp(0.8)"
    }), this.effectElements.push(this.video), Vn.log("Parallax effect toegevoegd aan video element");
  }
  initVideoAutoplay() {
    if (!this.video || !(this.video.hasAttribute("autoplay") || this.video.autoplay))
      return;
    this.video.muted || (this.video.muted = !0);
    const t = this.video.play();
    t !== void 0 && t.then(() => {
      Vn.log("Video wordt automatisch afgespeeld");
    }).catch((n) => {
      Vn.warn("Kon video niet automatisch afspelen", n), this.setupAutoplayFallback();
    });
  }
  setupAutoplayFallback() {
    if (!this.video)
      return;
    const e = () => {
      this.video && this.video.paused && this.video.play().catch(() => {
      });
    };
    document.addEventListener("click", e, { once: !0 }), document.addEventListener("touchstart", e, { once: !0 });
  }
  destroy() {
    Vn.log("Destroyen", this.element);
    const e = Bi();
    e && this.effectElements.length > 0 && this.effectElements.forEach((t) => {
      try {
        e.effects(t, { speed: 1 });
      } catch (n) {
        Vn.warn("Kon effect niet verwijderen", n);
      }
    }), this.effectElements = [];
  }
}
function nl(r) {
  return r !== null && typeof r == "object" && "constructor" in r && r.constructor === Object;
}
function ca(r = {}, e = {}) {
  Object.keys(e).forEach((t) => {
    typeof r[t] > "u" ? r[t] = e[t] : nl(e[t]) && nl(r[t]) && Object.keys(e[t]).length > 0 && ca(r[t], e[t]);
  });
}
const Gu = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function kt() {
  const r = typeof document < "u" ? document : {};
  return ca(r, Gu), r;
}
const vd = {
  document: Gu,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(r) {
    return typeof setTimeout > "u" ? (r(), null) : setTimeout(r, 0);
  },
  cancelAnimationFrame(r) {
    typeof setTimeout > "u" || clearTimeout(r);
  }
};
function Ve() {
  const r = typeof window < "u" ? window : {};
  return ca(r, vd), r;
}
function yd(r) {
  const e = r.__proto__;
  Object.defineProperty(r, "__proto__", {
    get() {
      return e;
    },
    set(t) {
      e.__proto__ = t;
    }
  });
}
class tr extends Array {
  constructor(e) {
    typeof e == "number" ? super(e) : (super(...e || []), yd(this));
  }
}
function Yi(r = []) {
  const e = [];
  return r.forEach((t) => {
    Array.isArray(t) ? e.push(...Yi(t)) : e.push(t);
  }), e;
}
function Vu(r, e) {
  return Array.prototype.filter.call(r, e);
}
function bd(r) {
  const e = [];
  for (let t = 0; t < r.length; t += 1)
    e.indexOf(r[t]) === -1 && e.push(r[t]);
  return e;
}
function xd(r, e) {
  if (typeof r != "string")
    return [r];
  const t = [], n = e.querySelectorAll(r);
  for (let i = 0; i < n.length; i += 1)
    t.push(n[i]);
  return t;
}
function z(r, e) {
  const t = Ve(), n = kt();
  let i = [];
  if (!e && r instanceof tr)
    return r;
  if (!r)
    return new tr(i);
  if (typeof r == "string") {
    const s = r.trim();
    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
      let o = "div";
      s.indexOf("<li") === 0 && (o = "ul"), s.indexOf("<tr") === 0 && (o = "tbody"), (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (o = "tr"), s.indexOf("<tbody") === 0 && (o = "table"), s.indexOf("<option") === 0 && (o = "select");
      const a = n.createElement(o);
      a.innerHTML = s;
      for (let l = 0; l < a.childNodes.length; l += 1)
        i.push(a.childNodes[l]);
    } else
      i = xd(r.trim(), e || n);
  } else if (r.nodeType || r === t || r === n)
    i.push(r);
  else if (Array.isArray(r)) {
    if (r instanceof tr) return r;
    i = r;
  }
  return new tr(bd(i));
}
z.fn = tr.prototype;
function Td(...r) {
  const e = Yi(r.map((t) => t.split(" ")));
  return this.forEach((t) => {
    t.classList.add(...e);
  }), this;
}
function Sd(...r) {
  const e = Yi(r.map((t) => t.split(" ")));
  return this.forEach((t) => {
    t.classList.remove(...e);
  }), this;
}
function wd(...r) {
  const e = Yi(r.map((t) => t.split(" ")));
  this.forEach((t) => {
    e.forEach((n) => {
      t.classList.toggle(n);
    });
  });
}
function Cd(...r) {
  const e = Yi(r.map((t) => t.split(" ")));
  return Vu(this, (t) => e.filter((n) => t.classList.contains(n)).length > 0).length > 0;
}
function Ed(r, e) {
  if (arguments.length === 1 && typeof r == "string")
    return this[0] ? this[0].getAttribute(r) : void 0;
  for (let t = 0; t < this.length; t += 1)
    if (arguments.length === 2)
      this[t].setAttribute(r, e);
    else
      for (const n in r)
        this[t][n] = r[n], this[t].setAttribute(n, r[n]);
  return this;
}
function Pd(r) {
  for (let e = 0; e < this.length; e += 1)
    this[e].removeAttribute(r);
  return this;
}
function kd(r) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transform = r;
  return this;
}
function Md(r) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof r != "string" ? `${r}ms` : r;
  return this;
}
function Od(...r) {
  let [e, t, n, i] = r;
  typeof r[1] == "function" && ([e, n, i] = r, t = void 0), i || (i = !1);
  function s(u) {
    const c = u.target;
    if (!c) return;
    const h = u.target.dom7EventData || [];
    if (h.indexOf(u) < 0 && h.unshift(u), z(c).is(t)) n.apply(c, h);
    else {
      const f = z(c).parents();
      for (let p = 0; p < f.length; p += 1)
        z(f[p]).is(t) && n.apply(f[p], h);
    }
  }
  function o(u) {
    const c = u && u.target ? u.target.dom7EventData || [] : [];
    c.indexOf(u) < 0 && c.unshift(u), n.apply(this, c);
  }
  const a = e.split(" ");
  let l;
  for (let u = 0; u < this.length; u += 1) {
    const c = this[u];
    if (t)
      for (l = 0; l < a.length; l += 1) {
        const h = a[l];
        c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
          listener: n,
          proxyListener: s
        }), c.addEventListener(h, s, i);
      }
    else
      for (l = 0; l < a.length; l += 1) {
        const h = a[l];
        c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[h] || (c.dom7Listeners[h] = []), c.dom7Listeners[h].push({
          listener: n,
          proxyListener: o
        }), c.addEventListener(h, o, i);
      }
  }
  return this;
}
function Ad(...r) {
  let [e, t, n, i] = r;
  typeof r[1] == "function" && ([e, n, i] = r, t = void 0), i || (i = !1);
  const s = e.split(" ");
  for (let o = 0; o < s.length; o += 1) {
    const a = s[o];
    for (let l = 0; l < this.length; l += 1) {
      const u = this[l];
      let c;
      if (!t && u.dom7Listeners ? c = u.dom7Listeners[a] : t && u.dom7LiveListeners && (c = u.dom7LiveListeners[a]), c && c.length)
        for (let h = c.length - 1; h >= 0; h -= 1) {
          const f = c[h];
          n && f.listener === n || n && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === n ? (u.removeEventListener(a, f.proxyListener, i), c.splice(h, 1)) : n || (u.removeEventListener(a, f.proxyListener, i), c.splice(h, 1));
        }
    }
  }
  return this;
}
function Dd(...r) {
  const e = Ve(), t = r[0].split(" "), n = r[1];
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    for (let o = 0; o < this.length; o += 1) {
      const a = this[o];
      if (e.CustomEvent) {
        const l = new e.CustomEvent(s, {
          detail: n,
          bubbles: !0,
          cancelable: !0
        });
        a.dom7EventData = r.filter((u, c) => c > 0), a.dispatchEvent(l), a.dom7EventData = [], delete a.dom7EventData;
      }
    }
  }
  return this;
}
function Ld(r) {
  const e = this;
  function t(n) {
    n.target === this && (r.call(this, n), e.off("transitionend", t));
  }
  return r && e.on("transitionend", t), this;
}
function Rd(r) {
  if (this.length > 0) {
    if (r) {
      const e = this.styles();
      return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function Id(r) {
  if (this.length > 0) {
    if (r) {
      const e = this.styles();
      return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function $d() {
  if (this.length > 0) {
    const r = Ve(), e = kt(), t = this[0], n = t.getBoundingClientRect(), i = e.body, s = t.clientTop || i.clientTop || 0, o = t.clientLeft || i.clientLeft || 0, a = t === r ? r.scrollY : t.scrollTop, l = t === r ? r.scrollX : t.scrollLeft;
    return {
      top: n.top + a - s,
      left: n.left + l - o
    };
  }
  return null;
}
function zd() {
  const r = Ve();
  return this[0] ? r.getComputedStyle(this[0], null) : {};
}
function Nd(r, e) {
  const t = Ve();
  let n;
  if (arguments.length === 1)
    if (typeof r == "string") {
      if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(r);
    } else {
      for (n = 0; n < this.length; n += 1)
        for (const i in r)
          this[n].style[i] = r[i];
      return this;
    }
  if (arguments.length === 2 && typeof r == "string") {
    for (n = 0; n < this.length; n += 1)
      this[n].style[r] = e;
    return this;
  }
  return this;
}
function Fd(r) {
  return r ? (this.forEach((e, t) => {
    r.apply(e, [e, t]);
  }), this) : this;
}
function Bd(r) {
  const e = Vu(this, r);
  return z(e);
}
function Hd(r) {
  if (typeof r > "u")
    return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1)
    this[e].innerHTML = r;
  return this;
}
function Gd(r) {
  if (typeof r > "u")
    return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1)
    this[e].textContent = r;
  return this;
}
function Vd(r) {
  const e = Ve(), t = kt(), n = this[0];
  let i, s;
  if (!n || typeof r > "u") return !1;
  if (typeof r == "string") {
    if (n.matches) return n.matches(r);
    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(r);
    if (n.msMatchesSelector) return n.msMatchesSelector(r);
    for (i = z(r), s = 0; s < i.length; s += 1)
      if (i[s] === n) return !0;
    return !1;
  }
  if (r === t)
    return n === t;
  if (r === e)
    return n === e;
  if (r.nodeType || r instanceof tr) {
    for (i = r.nodeType ? [r] : r, s = 0; s < i.length; s += 1)
      if (i[s] === n) return !0;
    return !1;
  }
  return !1;
}
function qd() {
  let r = this[0], e;
  if (r) {
    for (e = 0; (r = r.previousSibling) !== null; )
      r.nodeType === 1 && (e += 1);
    return e;
  }
}
function Yd(r) {
  if (typeof r > "u") return this;
  const e = this.length;
  if (r > e - 1)
    return z([]);
  if (r < 0) {
    const t = e + r;
    return t < 0 ? z([]) : z([this[t]]);
  }
  return z([this[r]]);
}
function Wd(...r) {
  let e;
  const t = kt();
  for (let n = 0; n < r.length; n += 1) {
    e = r[n];
    for (let i = 0; i < this.length; i += 1)
      if (typeof e == "string") {
        const s = t.createElement("div");
        for (s.innerHTML = e; s.firstChild; )
          this[i].appendChild(s.firstChild);
      } else if (e instanceof tr)
        for (let s = 0; s < e.length; s += 1)
          this[i].appendChild(e[s]);
      else
        this[i].appendChild(e);
  }
  return this;
}
function Xd(r) {
  const e = kt();
  let t, n;
  for (t = 0; t < this.length; t += 1)
    if (typeof r == "string") {
      const i = e.createElement("div");
      for (i.innerHTML = r, n = i.childNodes.length - 1; n >= 0; n -= 1)
        this[t].insertBefore(i.childNodes[n], this[t].childNodes[0]);
    } else if (r instanceof tr)
      for (n = 0; n < r.length; n += 1)
        this[t].insertBefore(r[n], this[t].childNodes[0]);
    else
      this[t].insertBefore(r, this[t].childNodes[0]);
  return this;
}
function jd(r) {
  return this.length > 0 ? r ? this[0].nextElementSibling && z(this[0].nextElementSibling).is(r) ? z([this[0].nextElementSibling]) : z([]) : this[0].nextElementSibling ? z([this[0].nextElementSibling]) : z([]) : z([]);
}
function Ud(r) {
  const e = [];
  let t = this[0];
  if (!t) return z([]);
  for (; t.nextElementSibling; ) {
    const n = t.nextElementSibling;
    r ? z(n).is(r) && e.push(n) : e.push(n), t = n;
  }
  return z(e);
}
function Kd(r) {
  if (this.length > 0) {
    const e = this[0];
    return r ? e.previousElementSibling && z(e.previousElementSibling).is(r) ? z([e.previousElementSibling]) : z([]) : e.previousElementSibling ? z([e.previousElementSibling]) : z([]);
  }
  return z([]);
}
function Qd(r) {
  const e = [];
  let t = this[0];
  if (!t) return z([]);
  for (; t.previousElementSibling; ) {
    const n = t.previousElementSibling;
    r ? z(n).is(r) && e.push(n) : e.push(n), t = n;
  }
  return z(e);
}
function Zd(r) {
  const e = [];
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode !== null && (r ? z(this[t].parentNode).is(r) && e.push(this[t].parentNode) : e.push(this[t].parentNode));
  return z(e);
}
function Jd(r) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    let n = this[t].parentNode;
    for (; n; )
      r ? z(n).is(r) && e.push(n) : e.push(n), n = n.parentNode;
  }
  return z(e);
}
function eh(r) {
  let e = this;
  return typeof r > "u" ? z([]) : (e.is(r) || (e = e.parents(r).eq(0)), e);
}
function th(r) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const n = this[t].querySelectorAll(r);
    for (let i = 0; i < n.length; i += 1)
      e.push(n[i]);
  }
  return z(e);
}
function nh(r) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const n = this[t].children;
    for (let i = 0; i < n.length; i += 1)
      (!r || z(n[i]).is(r)) && e.push(n[i]);
  }
  return z(e);
}
function rh() {
  for (let r = 0; r < this.length; r += 1)
    this[r].parentNode && this[r].parentNode.removeChild(this[r]);
  return this;
}
const rl = {
  addClass: Td,
  removeClass: Sd,
  hasClass: Cd,
  toggleClass: wd,
  attr: Ed,
  removeAttr: Pd,
  transform: kd,
  transition: Md,
  on: Od,
  off: Ad,
  trigger: Dd,
  transitionEnd: Ld,
  outerWidth: Rd,
  outerHeight: Id,
  styles: zd,
  offset: $d,
  css: Nd,
  each: Fd,
  html: Hd,
  text: Gd,
  is: Vd,
  index: qd,
  eq: Yd,
  append: Wd,
  prepend: Xd,
  next: jd,
  nextAll: Ud,
  prev: Kd,
  prevAll: Qd,
  parent: Zd,
  parents: Jd,
  closest: eh,
  find: th,
  children: nh,
  filter: Bd,
  remove: rh
};
Object.keys(rl).forEach((r) => {
  Object.defineProperty(z.fn, r, {
    value: rl[r],
    writable: !0
  });
});
function ih(r) {
  const e = r;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {
    }
    try {
      delete e[t];
    } catch {
    }
  });
}
function Vi(r, e = 0) {
  return setTimeout(r, e);
}
function Wt() {
  return Date.now();
}
function sh(r) {
  const e = Ve();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(r, null)), !t && r.currentStyle && (t = r.currentStyle), t || (t = r.style), t;
}
function oh(r, e = "x") {
  const t = Ve();
  let n, i, s;
  const o = sh(r);
  return t.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((a) => a.replace(",", ".")).join(", ")), s = new t.WebKitCSSMatrix(i === "none" ? "" : i)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? i = s.m41 : n.length === 16 ? i = parseFloat(n[12]) : i = parseFloat(n[4])), e === "y" && (t.WebKitCSSMatrix ? i = s.m42 : n.length === 16 ? i = parseFloat(n[13]) : i = parseFloat(n[5])), i || 0;
}
function us(r) {
  return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object";
}
function ah(r) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? r instanceof HTMLElement : r && (r.nodeType === 1 || r.nodeType === 11);
}
function Gt(...r) {
  const e = Object(r[0]), t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < r.length; n += 1) {
    const i = r[n];
    if (i != null && !ah(i)) {
      const s = Object.keys(Object(i)).filter((o) => t.indexOf(o) < 0);
      for (let o = 0, a = s.length; o < a; o += 1) {
        const l = s[o], u = Object.getOwnPropertyDescriptor(i, l);
        u !== void 0 && u.enumerable && (us(e[l]) && us(i[l]) ? i[l].__swiper__ ? e[l] = i[l] : Gt(e[l], i[l]) : !us(e[l]) && us(i[l]) ? (e[l] = {}, i[l].__swiper__ ? e[l] = i[l] : Gt(e[l], i[l])) : e[l] = i[l]);
      }
    }
  }
  return e;
}
function cs(r, e, t) {
  r.style.setProperty(e, t);
}
function qu({
  swiper: r,
  targetPosition: e,
  side: t
}) {
  const n = Ve(), i = -r.translate;
  let s = null, o;
  const a = r.params.speed;
  r.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(r.cssModeFrameID);
  const l = e > i ? "next" : "prev", u = (h, f) => l === "next" && h >= f || l === "prev" && h <= f, c = () => {
    o = (/* @__PURE__ */ new Date()).getTime(), s === null && (s = o);
    const h = Math.max(Math.min((o - s) / a, 1), 0), f = 0.5 - Math.cos(h * Math.PI) / 2;
    let p = i + f * (e - i);
    if (u(p, e) && (p = e), r.wrapperEl.scrollTo({
      [t]: p
    }), u(p, e)) {
      r.wrapperEl.style.overflow = "hidden", r.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        r.wrapperEl.style.overflow = "", r.wrapperEl.scrollTo({
          [t]: p
        });
      }), n.cancelAnimationFrame(r.cssModeFrameID);
      return;
    }
    r.cssModeFrameID = n.requestAnimationFrame(c);
  };
  c();
}
let to;
function lh() {
  const r = Ve(), e = kt();
  return {
    smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in r || r.DocumentTouch && e instanceof r.DocumentTouch),
    passiveListener: (function() {
      let n = !1;
      try {
        const i = Object.defineProperty({}, "passive", {
          // eslint-disable-next-line
          get() {
            n = !0;
          }
        });
        r.addEventListener("testPassiveListener", null, i);
      } catch {
      }
      return n;
    })(),
    gestures: (function() {
      return "ongesturestart" in r;
    })()
  };
}
function Yu() {
  return to || (to = lh()), to;
}
let no;
function uh({
  userAgent: r
} = {}) {
  const e = Yu(), t = Ve(), n = t.navigator.platform, i = r || t.navigator.userAgent, s = {
    ios: !1,
    android: !1
  }, o = t.screen.width, a = t.screen.height, l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = i.match(/(iPad).*OS\s([\d_]+)/);
  const c = i.match(/(iPod)(.*OS\s([\d_]+))?/), h = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/), f = n === "Win32";
  let p = n === "MacIntel";
  const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !u && p && e.touch && g.indexOf(`${o}x${a}`) >= 0 && (u = i.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), p = !1), l && !f && (s.os = "android", s.android = !0), (u || h || c) && (s.os = "ios", s.ios = !0), s;
}
function ch(r = {}) {
  return no || (no = uh(r)), no;
}
let ro;
function fh() {
  const r = Ve();
  function e() {
    const t = r.navigator.userAgent.toLowerCase();
    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
  }
  return {
    isSafari: e(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)
  };
}
function dh() {
  return ro || (ro = fh()), ro;
}
function hh({
  swiper: r,
  on: e,
  emit: t
}) {
  const n = Ve();
  let i = null, s = null;
  const o = () => {
    !r || r.destroyed || !r.initialized || (t("beforeResize"), t("resize"));
  }, a = () => {
    !r || r.destroyed || !r.initialized || (i = new ResizeObserver((c) => {
      s = n.requestAnimationFrame(() => {
        const {
          width: h,
          height: f
        } = r;
        let p = h, g = f;
        c.forEach(({
          contentBoxSize: d,
          contentRect: m,
          target: v
        }) => {
          v && v !== r.el || (p = m ? m.width : (d[0] || d).inlineSize, g = m ? m.height : (d[0] || d).blockSize);
        }), (p !== h || g !== f) && o();
      });
    }), i.observe(r.el));
  }, l = () => {
    s && n.cancelAnimationFrame(s), i && i.unobserve && r.el && (i.unobserve(r.el), i = null);
  }, u = () => {
    !r || r.destroyed || !r.initialized || t("orientationchange");
  };
  e("init", () => {
    if (r.params.resizeObserver && typeof n.ResizeObserver < "u") {
      a();
      return;
    }
    n.addEventListener("resize", o), n.addEventListener("orientationchange", u);
  }), e("destroy", () => {
    l(), n.removeEventListener("resize", o), n.removeEventListener("orientationchange", u);
  });
}
function ph({
  swiper: r,
  extendParams: e,
  on: t,
  emit: n
}) {
  const i = [], s = Ve(), o = (u, c = {}) => {
    const h = s.MutationObserver || s.WebkitMutationObserver, f = new h((p) => {
      if (p.length === 1) {
        n("observerUpdate", p[0]);
        return;
      }
      const g = function() {
        n("observerUpdate", p[0]);
      };
      s.requestAnimationFrame ? s.requestAnimationFrame(g) : s.setTimeout(g, 0);
    });
    f.observe(u, {
      attributes: typeof c.attributes > "u" ? !0 : c.attributes,
      childList: typeof c.childList > "u" ? !0 : c.childList,
      characterData: typeof c.characterData > "u" ? !0 : c.characterData
    }), i.push(f);
  }, a = () => {
    if (r.params.observer) {
      if (r.params.observeParents) {
        const u = r.$el.parents();
        for (let c = 0; c < u.length; c += 1)
          o(u[c]);
      }
      o(r.$el[0], {
        childList: r.params.observeSlideChildren
      }), o(r.$wrapperEl[0], {
        attributes: !1
      });
    }
  }, l = () => {
    i.forEach((u) => {
      u.disconnect();
    }), i.splice(0, i.length);
  };
  e({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), t("init", a), t("destroy", l);
}
const gh = {
  on(r, e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const i = t ? "unshift" : "push";
    return r.split(" ").forEach((s) => {
      n.eventsListeners[s] || (n.eventsListeners[s] = []), n.eventsListeners[s][i](e);
    }), n;
  },
  once(r, e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    function i(...s) {
      n.off(r, i), i.__emitterProxy && delete i.__emitterProxy, e.apply(n, s);
    }
    return i.__emitterProxy = e, n.on(r, i, t);
  },
  onAny(r, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof r != "function") return t;
    const n = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(r) < 0 && t.eventsAnyListeners[n](r), t;
  },
  offAny(r) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(r);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(r, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || r.split(" ").forEach((n) => {
      typeof e > "u" ? t.eventsListeners[n] = [] : t.eventsListeners[n] && t.eventsListeners[n].forEach((i, s) => {
        (i === e || i.__emitterProxy && i.__emitterProxy === e) && t.eventsListeners[n].splice(s, 1);
      });
    }), t;
  },
  emit(...r) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, i;
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (t = r[0], n = r.slice(1, r.length), i = e) : (t = r[0].events, n = r[0].data, i = r[0].context || e), n.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
      e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((a) => {
        a.apply(i, [o, ...n]);
      }), e.eventsListeners && e.eventsListeners[o] && e.eventsListeners[o].forEach((a) => {
        a.apply(i, n);
      });
    }), e;
  }
};
function mh() {
  const r = this;
  let e, t;
  const n = r.$el;
  typeof r.params.width < "u" && r.params.width !== null ? e = r.params.width : e = n[0].clientWidth, typeof r.params.height < "u" && r.params.height !== null ? t = r.params.height : t = n[0].clientHeight, !(e === 0 && r.isHorizontal() || t === 0 && r.isVertical()) && (e = e - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), t = t - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(r, {
    width: e,
    height: t,
    size: r.isHorizontal() ? e : t
  }));
}
function _h() {
  const r = this;
  function e(x) {
    return r.isHorizontal() ? x : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[x];
  }
  function t(x, A) {
    return parseFloat(x.getPropertyValue(e(A)) || 0);
  }
  const n = r.params, {
    $wrapperEl: i,
    size: s,
    rtlTranslate: o,
    wrongRTL: a
  } = r, l = r.virtual && n.virtual.enabled, u = l ? r.virtual.slides.length : r.slides.length, c = i.children(`.${r.params.slideClass}`), h = l ? r.virtual.slides.length : c.length;
  let f = [];
  const p = [], g = [];
  let d = n.slidesOffsetBefore;
  typeof d == "function" && (d = n.slidesOffsetBefore.call(r));
  let m = n.slidesOffsetAfter;
  typeof m == "function" && (m = n.slidesOffsetAfter.call(r));
  const v = r.snapGrid.length, _ = r.slidesGrid.length;
  let y = n.spaceBetween, b = -d, w = 0, E = 0;
  if (typeof s > "u")
    return;
  typeof y == "string" && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s), r.virtualSize = -y, o ? c.css({
    marginLeft: "",
    marginBottom: "",
    marginTop: ""
  }) : c.css({
    marginRight: "",
    marginBottom: "",
    marginTop: ""
  }), n.centeredSlides && n.cssMode && (cs(r.wrapperEl, "--swiper-centered-offset-before", ""), cs(r.wrapperEl, "--swiper-centered-offset-after", ""));
  const T = n.grid && n.grid.rows > 1 && r.grid;
  T && r.grid.initSlides(h);
  let M;
  const k = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter((x) => typeof n.breakpoints[x].slidesPerView < "u").length > 0;
  for (let x = 0; x < h; x += 1) {
    M = 0;
    const A = c.eq(x);
    if (T && r.grid.updateSlide(x, A, h, e), A.css("display") !== "none") {
      if (n.slidesPerView === "auto") {
        k && (c[x].style[e("width")] = "");
        const C = getComputedStyle(A[0]), D = A[0].style.transform, R = A[0].style.webkitTransform;
        if (D && (A[0].style.transform = "none"), R && (A[0].style.webkitTransform = "none"), n.roundLengths)
          M = r.isHorizontal() ? A.outerWidth(!0) : A.outerHeight(!0);
        else {
          const H = t(C, "width"), q = t(C, "padding-left"), B = t(C, "padding-right"), U = t(C, "margin-left"), V = t(C, "margin-right"), S = C.getPropertyValue("box-sizing");
          if (S && S === "border-box")
            M = H + U + V;
          else {
            const {
              clientWidth: fe,
              offsetWidth: De
            } = A[0];
            M = H + q + B + U + V + (De - fe);
          }
        }
        D && (A[0].style.transform = D), R && (A[0].style.webkitTransform = R), n.roundLengths && (M = Math.floor(M));
      } else
        M = (s - (n.slidesPerView - 1) * y) / n.slidesPerView, n.roundLengths && (M = Math.floor(M)), c[x] && (c[x].style[e("width")] = `${M}px`);
      c[x] && (c[x].swiperSlideSize = M), g.push(M), n.centeredSlides ? (b = b + M / 2 + w / 2 + y, w === 0 && x !== 0 && (b = b - s / 2 - y), x === 0 && (b = b - s / 2 - y), Math.abs(b) < 1 / 1e3 && (b = 0), n.roundLengths && (b = Math.floor(b)), E % n.slidesPerGroup === 0 && f.push(b), p.push(b)) : (n.roundLengths && (b = Math.floor(b)), (E - Math.min(r.params.slidesPerGroupSkip, E)) % r.params.slidesPerGroup === 0 && f.push(b), p.push(b), b = b + M + y), r.virtualSize += M + y, w = M, E += 1;
    }
  }
  if (r.virtualSize = Math.max(r.virtualSize, s) + m, o && a && (n.effect === "slide" || n.effect === "coverflow") && i.css({
    width: `${r.virtualSize + n.spaceBetween}px`
  }), n.setWrapperSize && i.css({
    [e("width")]: `${r.virtualSize + n.spaceBetween}px`
  }), T && r.grid.updateWrapperSize(M, f, e), !n.centeredSlides) {
    const x = [];
    for (let A = 0; A < f.length; A += 1) {
      let C = f[A];
      n.roundLengths && (C = Math.floor(C)), f[A] <= r.virtualSize - s && x.push(C);
    }
    f = x, Math.floor(r.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 && f.push(r.virtualSize - s);
  }
  if (f.length === 0 && (f = [0]), n.spaceBetween !== 0) {
    const x = r.isHorizontal() && o ? "marginLeft" : e("marginRight");
    c.filter((A, C) => n.cssMode ? C !== c.length - 1 : !0).css({
      [x]: `${y}px`
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let x = 0;
    g.forEach((C) => {
      x += C + (n.spaceBetween ? n.spaceBetween : 0);
    }), x -= n.spaceBetween;
    const A = x - s;
    f = f.map((C) => C < 0 ? -d : C > A ? A + m : C);
  }
  if (n.centerInsufficientSlides) {
    let x = 0;
    if (g.forEach((A) => {
      x += A + (n.spaceBetween ? n.spaceBetween : 0);
    }), x -= n.spaceBetween, x < s) {
      const A = (s - x) / 2;
      f.forEach((C, D) => {
        f[D] = C - A;
      }), p.forEach((C, D) => {
        p[D] = C + A;
      });
    }
  }
  if (Object.assign(r, {
    slides: c,
    snapGrid: f,
    slidesGrid: p,
    slidesSizesGrid: g
  }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
    cs(r.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`), cs(r.wrapperEl, "--swiper-centered-offset-after", `${r.size / 2 - g[g.length - 1] / 2}px`);
    const x = -r.snapGrid[0], A = -r.slidesGrid[0];
    r.snapGrid = r.snapGrid.map((C) => C + x), r.slidesGrid = r.slidesGrid.map((C) => C + A);
  }
  if (h !== u && r.emit("slidesLengthChange"), f.length !== v && (r.params.watchOverflow && r.checkOverflow(), r.emit("snapGridLengthChange")), p.length !== _ && r.emit("slidesGridLengthChange"), n.watchSlidesProgress && r.updateSlidesOffset(), !l && !n.cssMode && (n.effect === "slide" || n.effect === "fade")) {
    const x = `${n.containerModifierClass}backface-hidden`, A = r.$el.hasClass(x);
    h <= n.maxBackfaceHiddenSlides ? A || r.$el.addClass(x) : A && r.$el.removeClass(x);
  }
}
function vh(r) {
  const e = this, t = [], n = e.virtual && e.params.virtual.enabled;
  let i = 0, s;
  typeof r == "number" ? e.setTransition(r) : r === !0 && e.setTransition(e.params.speed);
  const o = (a) => n ? e.slides.filter((l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === a)[0] : e.slides.eq(a)[0];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || z([])).each((a) => {
        t.push(a);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const a = e.activeIndex + s;
        if (a > e.slides.length && !n) break;
        t.push(o(a));
      }
  else
    t.push(o(e.activeIndex));
  for (s = 0; s < t.length; s += 1)
    if (typeof t[s] < "u") {
      const a = t[s].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && e.$wrapperEl.css("height", `${i}px`);
}
function yh() {
  const r = this, e = r.slides;
  for (let t = 0; t < e.length; t += 1)
    e[t].swiperSlideOffset = r.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
}
function bh(r = this && this.translate || 0) {
  const e = this, t = e.params, {
    slides: n,
    rtlTranslate: i,
    snapGrid: s
  } = e;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -r;
  i && (o = r), n.removeClass(t.slideVisibleClass), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  for (let a = 0; a < n.length; a += 1) {
    const l = n[a];
    let u = l.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (u -= n[0].swiperSlideOffset);
    const c = (o + (t.centeredSlides ? e.minTranslate() : 0) - u) / (l.swiperSlideSize + t.spaceBetween), h = (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) / (l.swiperSlideSize + t.spaceBetween), f = -(o - u), p = f + e.slidesSizesGrid[a];
    (f >= 0 && f < e.size - 1 || p > 1 && p <= e.size || f <= 0 && p >= e.size) && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(a), n.eq(a).addClass(t.slideVisibleClass)), l.progress = i ? -c : c, l.originalProgress = i ? -h : h;
  }
  e.visibleSlides = z(e.visibleSlides);
}
function xh(r) {
  const e = this;
  if (typeof r > "u") {
    const u = e.rtlTranslate ? -1 : 1;
    r = e && e.translate && e.translate * u || 0;
  }
  const t = e.params, n = e.maxTranslate() - e.minTranslate();
  let {
    progress: i,
    isBeginning: s,
    isEnd: o
  } = e;
  const a = s, l = o;
  n === 0 ? (i = 0, s = !0, o = !0) : (i = (r - e.minTranslate()) / n, s = i <= 0, o = i >= 1), Object.assign(e, {
    progress: i,
    isBeginning: s,
    isEnd: o
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(r), s && !a && e.emit("reachBeginning toEdge"), o && !l && e.emit("reachEnd toEdge"), (a && !s || l && !o) && e.emit("fromEdge"), e.emit("progress", i);
}
function Th() {
  const r = this, {
    slides: e,
    params: t,
    $wrapperEl: n,
    activeIndex: i,
    realIndex: s
  } = r, o = r.virtual && t.virtual.enabled;
  e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`);
  let a;
  o ? a = r.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${i}"]`) : a = e.eq(i), a.addClass(t.slideActiveClass), t.loop && (a.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(t.slideDuplicateActiveClass) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(t.slideDuplicateActiveClass));
  let l = a.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
  t.loop && l.length === 0 && (l = e.eq(0), l.addClass(t.slideNextClass));
  let u = a.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
  t.loop && u.length === 0 && (u = e.eq(-1), u.addClass(t.slidePrevClass)), t.loop && (l.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass), u.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)), r.emitSlidesClasses();
}
function Sh(r) {
  const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
    slidesGrid: n,
    snapGrid: i,
    params: s,
    activeIndex: o,
    realIndex: a,
    snapIndex: l
  } = e;
  let u = r, c;
  if (typeof u > "u") {
    for (let f = 0; f < n.length; f += 1)
      typeof n[f + 1] < "u" ? t >= n[f] && t < n[f + 1] - (n[f + 1] - n[f]) / 2 ? u = f : t >= n[f] && t < n[f + 1] && (u = f + 1) : t >= n[f] && (u = f);
    s.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
  }
  if (i.indexOf(t) >= 0)
    c = i.indexOf(t);
  else {
    const f = Math.min(s.slidesPerGroupSkip, u);
    c = f + Math.floor((u - f) / s.slidesPerGroup);
  }
  if (c >= i.length && (c = i.length - 1), u === o) {
    c !== l && (e.snapIndex = c, e.emit("snapIndexChange"));
    return;
  }
  const h = parseInt(e.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
  Object.assign(e, {
    snapIndex: c,
    realIndex: h,
    previousIndex: o,
    activeIndex: u
  }), e.emit("activeIndexChange"), e.emit("snapIndexChange"), a !== h && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function wh(r) {
  const e = this, t = e.params, n = z(r).closest(`.${t.slideClass}`)[0];
  let i = !1, s;
  if (n) {
    for (let o = 0; o < e.slides.length; o += 1)
      if (e.slides[o] === n) {
        i = !0, s = o;
        break;
      }
  }
  if (n && i)
    e.clickedSlide = n, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(z(n).attr("data-swiper-slide-index"), 10) : e.clickedIndex = s;
  else {
    e.clickedSlide = void 0, e.clickedIndex = void 0;
    return;
  }
  t.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide();
}
const Ch = {
  updateSize: mh,
  updateSlides: _h,
  updateAutoHeight: vh,
  updateSlidesOffset: yh,
  updateSlidesProgress: bh,
  updateProgress: xh,
  updateSlidesClasses: Th,
  updateActiveIndex: Sh,
  updateClickedSlide: wh
};
function Eh(r = this.isHorizontal() ? "x" : "y") {
  const e = this, {
    params: t,
    rtlTranslate: n,
    translate: i,
    $wrapperEl: s
  } = e;
  if (t.virtualTranslate)
    return n ? -i : i;
  if (t.cssMode)
    return i;
  let o = oh(s[0], r);
  return n && (o = -o), o || 0;
}
function Ph(r, e) {
  const t = this, {
    rtlTranslate: n,
    params: i,
    $wrapperEl: s,
    wrapperEl: o,
    progress: a
  } = t;
  let l = 0, u = 0;
  const c = 0;
  t.isHorizontal() ? l = n ? -r : r : u = r, i.roundLengths && (l = Math.floor(l), u = Math.floor(u)), i.cssMode ? o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -u : i.virtualTranslate || s.transform(`translate3d(${l}px, ${u}px, ${c}px)`), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : u;
  let h;
  const f = t.maxTranslate() - t.minTranslate();
  f === 0 ? h = 0 : h = (r - t.minTranslate()) / f, h !== a && t.updateProgress(r), t.emit("setTranslate", t.translate, e);
}
function kh() {
  return -this.snapGrid[0];
}
function Mh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Oh(r = 0, e = this.params.speed, t = !0, n = !0, i) {
  const s = this, {
    params: o,
    wrapperEl: a
  } = s;
  if (s.animating && o.preventInteractionOnTransition)
    return !1;
  const l = s.minTranslate(), u = s.maxTranslate();
  let c;
  if (n && r > l ? c = l : n && r < u ? c = u : c = r, s.updateProgress(c), o.cssMode) {
    const h = s.isHorizontal();
    if (e === 0)
      a[h ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return qu({
          swiper: s,
          targetPosition: -c,
          side: h ? "left" : "top"
        }), !0;
      a.scrollTo({
        [h ? "left" : "top"]: -c,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return e === 0 ? (s.setTransition(0), s.setTranslate(c), t && (s.emit("beforeTransitionStart", e, i), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(c), t && (s.emit("beforeTransitionStart", e, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(f) {
    !s || s.destroyed || f.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, t && s.emit("transitionEnd"));
  }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0;
}
const Ah = {
  getTranslate: Eh,
  setTranslate: Ph,
  minTranslate: kh,
  maxTranslate: Mh,
  translateTo: Oh
};
function Dh(r, e) {
  const t = this;
  t.params.cssMode || t.$wrapperEl.transition(r), t.emit("setTransition", r, e);
}
function Wu({
  swiper: r,
  runCallbacks: e,
  direction: t,
  step: n
}) {
  const {
    activeIndex: i,
    previousIndex: s
  } = r;
  let o = t;
  if (o || (i > s ? o = "next" : i < s ? o = "prev" : o = "reset"), r.emit(`transition${n}`), e && i !== s) {
    if (o === "reset") {
      r.emit(`slideResetTransition${n}`);
      return;
    }
    r.emit(`slideChangeTransition${n}`), o === "next" ? r.emit(`slideNextTransition${n}`) : r.emit(`slidePrevTransition${n}`);
  }
}
function Lh(r = !0, e) {
  const t = this, {
    params: n
  } = t;
  n.cssMode || (n.autoHeight && t.updateAutoHeight(), Wu({
    swiper: t,
    runCallbacks: r,
    direction: e,
    step: "Start"
  }));
}
function Rh(r = !0, e) {
  const t = this, {
    params: n
  } = t;
  t.animating = !1, !n.cssMode && (t.setTransition(0), Wu({
    swiper: t,
    runCallbacks: r,
    direction: e,
    step: "End"
  }));
}
const Ih = {
  setTransition: Dh,
  transitionStart: Lh,
  transitionEnd: Rh
};
function $h(r = 0, e = this.params.speed, t = !0, n, i) {
  if (typeof r != "number" && typeof r != "string")
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof r}] given.`);
  if (typeof r == "string") {
    const y = parseInt(r, 10);
    if (!isFinite(y))
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${r}] given.`);
    r = y;
  }
  const s = this;
  let o = r;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: h,
    rtlTranslate: f,
    wrapperEl: p,
    enabled: g
  } = s;
  if (s.animating && a.preventInteractionOnTransition || !g && !n && !i)
    return !1;
  const d = Math.min(s.params.slidesPerGroupSkip, o);
  let m = d + Math.floor((o - d) / s.params.slidesPerGroup);
  m >= l.length && (m = l.length - 1);
  const v = -l[m];
  if (a.normalizeSlideIndex)
    for (let y = 0; y < u.length; y += 1) {
      const b = -Math.floor(v * 100), w = Math.floor(u[y] * 100), E = Math.floor(u[y + 1] * 100);
      typeof u[y + 1] < "u" ? b >= w && b < E - (E - w) / 2 ? o = y : b >= w && b < E && (o = y + 1) : b >= w && (o = y);
    }
  if (s.initialized && o !== h && (!s.allowSlideNext && v < s.translate && v < s.minTranslate() || !s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (h || 0) !== o))
    return !1;
  o !== (c || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(v);
  let _;
  if (o > h ? _ = "next" : o < h ? _ = "prev" : _ = "reset", f && -v === s.translate || !f && v === s.translate)
    return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), a.effect !== "slide" && s.setTranslate(v), _ !== "reset" && (s.transitionStart(t, _), s.transitionEnd(t, _)), !1;
  if (a.cssMode) {
    const y = s.isHorizontal(), b = f ? v : -v;
    if (e === 0) {
      const w = s.virtual && s.params.virtual.enabled;
      w && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), p[y ? "scrollLeft" : "scrollTop"] = b, w && requestAnimationFrame(() => {
        s.wrapperEl.style.scrollSnapType = "", s._swiperImmediateVirtual = !1;
      });
    } else {
      if (!s.support.smoothScroll)
        return qu({
          swiper: s,
          targetPosition: b,
          side: y ? "left" : "top"
        }), !0;
      p.scrollTo({
        [y ? "left" : "top"]: b,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return s.setTransition(e), s.setTranslate(v), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(t, _), e === 0 ? s.transitionEnd(t, _) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(b) {
    !s || s.destroyed || b.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(t, _));
  }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)), !0;
}
function zh(r = 0, e = this.params.speed, t = !0, n) {
  if (typeof r == "string") {
    const o = parseInt(r, 10);
    if (!isFinite(o))
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${r}] given.`);
    r = o;
  }
  const i = this;
  let s = r;
  return i.params.loop && (s += i.loopedSlides), i.slideTo(s, e, t, n);
}
function Nh(r = this.params.speed, e = !0, t) {
  const n = this, {
    animating: i,
    enabled: s,
    params: o
  } = n;
  if (!s) return n;
  let a = o.slidesPerGroup;
  o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const l = n.activeIndex < o.slidesPerGroupSkip ? 1 : a;
  if (o.loop) {
    if (i && o.loopPreventsSlide) return !1;
    n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft;
  }
  return o.rewind && n.isEnd ? n.slideTo(0, r, e, t) : n.slideTo(n.activeIndex + l, r, e, t);
}
function Fh(r = this.params.speed, e = !0, t) {
  const n = this, {
    params: i,
    animating: s,
    snapGrid: o,
    slidesGrid: a,
    rtlTranslate: l,
    enabled: u
  } = n;
  if (!u) return n;
  if (i.loop) {
    if (s && i.loopPreventsSlide) return !1;
    n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft;
  }
  const c = l ? n.translate : -n.translate;
  function h(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const f = h(c), p = o.map((m) => h(m));
  let g = o[p.indexOf(f) - 1];
  if (typeof g > "u" && i.cssMode) {
    let m;
    o.forEach((v, _) => {
      f >= v && (m = _);
    }), typeof m < "u" && (g = o[m > 0 ? m - 1 : m]);
  }
  let d = 0;
  if (typeof g < "u" && (d = a.indexOf(g), d < 0 && (d = n.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (d = d - n.slidesPerViewDynamic("previous", !0) + 1, d = Math.max(d, 0))), i.rewind && n.isBeginning) {
    const m = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
    return n.slideTo(m, r, e, t);
  }
  return n.slideTo(d, r, e, t);
}
function Bh(r = this.params.speed, e = !0, t) {
  const n = this;
  return n.slideTo(n.activeIndex, r, e, t);
}
function Hh(r = this.params.speed, e = !0, t, n = 0.5) {
  const i = this;
  let s = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, s), a = o + Math.floor((s - o) / i.params.slidesPerGroup), l = i.rtlTranslate ? i.translate : -i.translate;
  if (l >= i.snapGrid[a]) {
    const u = i.snapGrid[a], c = i.snapGrid[a + 1];
    l - u > (c - u) * n && (s += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1], c = i.snapGrid[a];
    l - u <= (c - u) * n && (s -= i.params.slidesPerGroup);
  }
  return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, r, e, t);
}
function Gh() {
  const r = this, {
    params: e,
    $wrapperEl: t
  } = r, n = e.slidesPerView === "auto" ? r.slidesPerViewDynamic() : e.slidesPerView;
  let i = r.clickedIndex, s;
  if (e.loop) {
    if (r.animating) return;
    s = parseInt(z(r.clickedSlide).attr("data-swiper-slide-index"), 10), e.centeredSlides ? i < r.loopedSlides - n / 2 || i > r.slides.length - r.loopedSlides + n / 2 ? (r.loopFix(), i = t.children(`.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), Vi(() => {
      r.slideTo(i);
    })) : r.slideTo(i) : i > r.slides.length - n ? (r.loopFix(), i = t.children(`.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), Vi(() => {
      r.slideTo(i);
    })) : r.slideTo(i);
  } else
    r.slideTo(i);
}
const Vh = {
  slideTo: $h,
  slideToLoop: zh,
  slideNext: Nh,
  slidePrev: Fh,
  slideReset: Bh,
  slideToClosest: Hh,
  slideToClickedSlide: Gh
};
function qh() {
  const r = this, e = kt(), {
    params: t,
    $wrapperEl: n
  } = r, i = n.children().length > 0 ? z(n.children()[0].parentNode) : n;
  i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
  let s = i.children(`.${t.slideClass}`);
  if (t.loopFillGroupWithBlank) {
    const l = t.slidesPerGroup - s.length % t.slidesPerGroup;
    if (l !== t.slidesPerGroup) {
      for (let u = 0; u < l; u += 1) {
        const c = z(e.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
        i.append(c);
      }
      s = i.children(`.${t.slideClass}`);
    }
  }
  t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = s.length), r.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), r.loopedSlides += t.loopAdditionalSlides, r.loopedSlides > s.length && r.params.loopedSlidesLimit && (r.loopedSlides = s.length);
  const o = [], a = [];
  s.each((l, u) => {
    z(l).attr("data-swiper-slide-index", u);
  });
  for (let l = 0; l < r.loopedSlides; l += 1) {
    const u = l - Math.floor(l / s.length) * s.length;
    a.push(s.eq(u)[0]), o.unshift(s.eq(s.length - u - 1)[0]);
  }
  for (let l = 0; l < a.length; l += 1)
    i.append(z(a[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
  for (let l = o.length - 1; l >= 0; l -= 1)
    i.prepend(z(o[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
}
function Yh() {
  const r = this;
  r.emit("beforeLoopFix");
  const {
    activeIndex: e,
    slides: t,
    loopedSlides: n,
    allowSlidePrev: i,
    allowSlideNext: s,
    snapGrid: o,
    rtlTranslate: a
  } = r;
  let l;
  r.allowSlidePrev = !0, r.allowSlideNext = !0;
  const c = -o[e] - r.getTranslate();
  e < n ? (l = t.length - n * 3 + e, l += n, r.slideTo(l, 0, !1, !0) && c !== 0 && r.setTranslate((a ? -r.translate : r.translate) - c)) : e >= t.length - n && (l = -t.length + e + n, l += n, r.slideTo(l, 0, !1, !0) && c !== 0 && r.setTranslate((a ? -r.translate : r.translate) - c)), r.allowSlidePrev = i, r.allowSlideNext = s, r.emit("loopFix");
}
function Wh() {
  const r = this, {
    $wrapperEl: e,
    params: t,
    slides: n
  } = r;
  e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index");
}
const Xh = {
  loopCreate: qh,
  loopFix: Yh,
  loopDestroy: Wh
};
function jh(r) {
  const e = this;
  if (e.support.touch || !e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  t.style.cursor = "move", t.style.cursor = r ? "grabbing" : "grab";
}
function Uh() {
  const r = this;
  r.support.touch || r.params.watchOverflow && r.isLocked || r.params.cssMode || (r[r.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "");
}
const Kh = {
  setGrabCursor: jh,
  unsetGrabCursor: Uh
};
function Qh(r, e = this) {
  function t(n) {
    if (!n || n === kt() || n === Ve()) return null;
    n.assignedSlot && (n = n.assignedSlot);
    const i = n.closest(r);
    return !i && !n.getRootNode ? null : i || t(n.getRootNode().host);
  }
  return t(e);
}
function Zh(r) {
  const e = this, t = kt(), n = Ve(), i = e.touchEventsData, {
    params: s,
    touches: o,
    enabled: a
  } = e;
  if (!a || e.animating && s.preventInteractionOnTransition)
    return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let l = r;
  l.originalEvent && (l = l.originalEvent);
  let u = z(l.target);
  if (s.touchEventsTarget === "wrapper" && !u.closest(e.wrapperEl).length || (i.isTouchEvent = l.type === "touchstart", !i.isTouchEvent && "which" in l && l.which === 3) || !i.isTouchEvent && "button" in l && l.button > 0 || i.isTouched && i.isMoved) return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== "", h = r.composedPath ? r.composedPath() : r.path;
  c && l.target && l.target.shadowRoot && h && (u = z(h[0]));
  const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`, p = !!(l.target && l.target.shadowRoot);
  if (s.noSwiping && (p ? Qh(f, u[0]) : u.closest(f)[0])) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !u.closest(s.swipeHandler)[0])
    return;
  o.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX, o.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY;
  const g = o.currentX, d = o.currentY, m = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection, v = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (m && (g <= v || g >= n.innerWidth - v))
    if (m === "prevent")
      r.preventDefault();
    else
      return;
  if (Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = g, o.startY = d, i.touchStartTime = Wt(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), l.type !== "touchstart") {
    let _ = !0;
    u.is(i.focusableElements) && (_ = !1, u[0].nodeName === "SELECT" && (i.isTouched = !1)), t.activeElement && z(t.activeElement).is(i.focusableElements) && t.activeElement !== u[0] && t.activeElement.blur();
    const y = _ && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || y) && !u[0].isContentEditable && l.preventDefault();
  }
  e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", l);
}
function Jh(r) {
  const e = kt(), t = this, n = t.touchEventsData, {
    params: i,
    touches: s,
    rtlTranslate: o,
    enabled: a
  } = t;
  if (!a) return;
  let l = r;
  if (l.originalEvent && (l = l.originalEvent), !n.isTouched) {
    n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  if (n.isTouchEvent && l.type !== "touchmove") return;
  const u = l.type === "touchmove" && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]), c = l.type === "touchmove" ? u.pageX : l.pageX, h = l.type === "touchmove" ? u.pageY : l.pageY;
  if (l.preventedByNestedSwiper) {
    s.startX = c, s.startY = h;
    return;
  }
  if (!t.allowTouchMove) {
    z(l.target).is(n.focusableElements) || (t.allowClick = !1), n.isTouched && (Object.assign(s, {
      startX: c,
      startY: h,
      currentX: c,
      currentY: h
    }), n.touchStartTime = Wt());
    return;
  }
  if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
    if (t.isVertical()) {
      if (h < s.startY && t.translate <= t.maxTranslate() || h > s.startY && t.translate >= t.minTranslate()) {
        n.isTouched = !1, n.isMoved = !1;
        return;
      }
    } else if (c < s.startX && t.translate <= t.maxTranslate() || c > s.startX && t.translate >= t.minTranslate())
      return;
  }
  if (n.isTouchEvent && e.activeElement && l.target === e.activeElement && z(l.target).is(n.focusableElements)) {
    n.isMoved = !0, t.allowClick = !1;
    return;
  }
  if (n.allowTouchCallbacks && t.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
  s.currentX = c, s.currentY = h;
  const f = s.currentX - s.startX, p = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(f ** 2 + p ** 2) < t.params.threshold) return;
  if (typeof n.isScrolling > "u") {
    let v;
    t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : f * f + p * p >= 25 && (v = Math.atan2(Math.abs(p), Math.abs(f)) * 180 / Math.PI, n.isScrolling = t.isHorizontal() ? v > i.touchAngle : 90 - v > i.touchAngle);
  }
  if (n.isScrolling && t.emit("touchMoveOpposite", l), typeof n.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (n.startMoving = !0), n.isScrolling) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving)
    return;
  t.allowClick = !1, !i.cssMode && l.cancelable && l.preventDefault(), i.touchMoveStopPropagation && !i.nested && l.stopPropagation(), n.isMoved || (i.loop && !i.cssMode && t.loopFix(), n.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, i.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", l)), t.emit("sliderMove", l), n.isMoved = !0;
  let g = t.isHorizontal() ? f : p;
  s.diff = g, g *= i.touchRatio, o && (g = -g), t.swipeDirection = g > 0 ? "prev" : "next", n.currentTranslate = g + n.startTranslate;
  let d = !0, m = i.resistanceRatio;
  if (i.touchReleaseOnEdges && (m = 0), g > 0 && n.currentTranslate > t.minTranslate() ? (d = !1, i.resistance && (n.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + n.startTranslate + g) ** m)) : g < 0 && n.currentTranslate < t.maxTranslate() && (d = !1, i.resistance && (n.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - n.startTranslate - g) ** m)), d && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (n.currentTranslate = n.startTranslate), i.threshold > 0)
    if (Math.abs(g) > i.threshold || n.allowThresholdMove) {
      if (!n.allowThresholdMove) {
        n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
        return;
      }
    } else {
      n.currentTranslate = n.startTranslate;
      return;
    }
  !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && t.freeMode || i.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), t.params.freeMode && i.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(n.currentTranslate), t.setTranslate(n.currentTranslate));
}
function ep(r) {
  const e = this, t = e.touchEventsData, {
    params: n,
    touches: i,
    rtlTranslate: s,
    slidesGrid: o,
    enabled: a
  } = e;
  if (!a) return;
  let l = r;
  if (l.originalEvent && (l = l.originalEvent), t.allowTouchCallbacks && e.emit("touchEnd", l), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && n.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return;
  }
  n.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const u = Wt(), c = u - t.touchStartTime;
  if (e.allowClick) {
    const _ = l.path || l.composedPath && l.composedPath();
    e.updateClickedSlide(_ && _[0] || l.target), e.emit("tap click", l), c < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", l);
  }
  if (t.lastClickTime = Wt(), Vi(() => {
    e.destroyed || (e.allowClick = !0);
  }), !t.isTouched || !t.isMoved || !e.swipeDirection || i.diff === 0 || t.currentTranslate === t.startTranslate) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return;
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let h;
  if (n.followFinger ? h = s ? e.translate : -e.translate : h = -t.currentTranslate, n.cssMode)
    return;
  if (e.params.freeMode && n.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: h
    });
    return;
  }
  let f = 0, p = e.slidesSizesGrid[0];
  for (let _ = 0; _ < o.length; _ += _ < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
    const y = _ < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof o[_ + y] < "u" ? h >= o[_] && h < o[_ + y] && (f = _, p = o[_ + y] - o[_]) : h >= o[_] && (f = _, p = o[o.length - 1] - o[o.length - 2]);
  }
  let g = null, d = null;
  n.rewind && (e.isBeginning ? d = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
  const m = (h - o[f]) / p, v = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (c > n.longSwipesMs) {
    if (!n.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (m >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? g : f + v) : e.slideTo(f)), e.swipeDirection === "prev" && (m > 1 - n.longSwipesRatio ? e.slideTo(f + v) : d !== null && m < 0 && Math.abs(m) > n.longSwipesRatio ? e.slideTo(d) : e.slideTo(f));
  } else {
    if (!n.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl) ? l.target === e.navigation.nextEl ? e.slideTo(f + v) : e.slideTo(f) : (e.swipeDirection === "next" && e.slideTo(g !== null ? g : f + v), e.swipeDirection === "prev" && e.slideTo(d !== null ? d : f));
  }
}
function il() {
  const r = this, {
    params: e,
    el: t
  } = r;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && r.setBreakpoint();
  const {
    allowSlideNext: n,
    allowSlidePrev: i,
    snapGrid: s
  } = r;
  r.allowSlideNext = !0, r.allowSlidePrev = !0, r.updateSize(), r.updateSlides(), r.updateSlidesClasses(), (e.slidesPerView === "auto" || e.slidesPerView > 1) && r.isEnd && !r.isBeginning && !r.params.centeredSlides ? r.slideTo(r.slides.length - 1, 0, !1, !0) : r.slideTo(r.activeIndex, 0, !1, !0), r.autoplay && r.autoplay.running && r.autoplay.paused && r.autoplay.run(), r.allowSlidePrev = i, r.allowSlideNext = n, r.params.watchOverflow && s !== r.snapGrid && r.checkOverflow();
}
function tp(r) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && r.preventDefault(), e.params.preventClicksPropagation && e.animating && (r.stopPropagation(), r.stopImmediatePropagation())));
}
function np() {
  const r = this, {
    wrapperEl: e,
    rtlTranslate: t,
    enabled: n
  } = r;
  if (!n) return;
  r.previousTranslate = r.translate, r.isHorizontal() ? r.translate = -e.scrollLeft : r.translate = -e.scrollTop, r.translate === 0 && (r.translate = 0), r.updateActiveIndex(), r.updateSlidesClasses();
  let i;
  const s = r.maxTranslate() - r.minTranslate();
  s === 0 ? i = 0 : i = (r.translate - r.minTranslate()) / s, i !== r.progress && r.updateProgress(t ? -r.translate : r.translate), r.emit("setTranslate", r.translate, !1);
}
let sl = !1;
function rp() {
}
const Xu = (r, e) => {
  const t = kt(), {
    params: n,
    touchEvents: i,
    el: s,
    wrapperEl: o,
    device: a,
    support: l
  } = r, u = !!n.nested, c = e === "on" ? "addEventListener" : "removeEventListener", h = e;
  if (!l.touch)
    s[c](i.start, r.onTouchStart, !1), t[c](i.move, r.onTouchMove, u), t[c](i.end, r.onTouchEnd, !1);
  else {
    const f = i.start === "touchstart" && l.passiveListener && n.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1;
    s[c](i.start, r.onTouchStart, f), s[c](i.move, r.onTouchMove, l.passiveListener ? {
      passive: !1,
      capture: u
    } : u), s[c](i.end, r.onTouchEnd, f), i.cancel && s[c](i.cancel, r.onTouchEnd, f);
  }
  (n.preventClicks || n.preventClicksPropagation) && s[c]("click", r.onClick, !0), n.cssMode && o[c]("scroll", r.onScroll), n.updateOnWindowResize ? r[h](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", il, !0) : r[h]("observerUpdate", il, !0);
};
function ip() {
  const r = this, e = kt(), {
    params: t,
    support: n
  } = r;
  r.onTouchStart = Zh.bind(r), r.onTouchMove = Jh.bind(r), r.onTouchEnd = ep.bind(r), t.cssMode && (r.onScroll = np.bind(r)), r.onClick = tp.bind(r), n.touch && !sl && (e.addEventListener("touchstart", rp), sl = !0), Xu(r, "on");
}
function sp() {
  Xu(this, "off");
}
const op = {
  attachEvents: ip,
  detachEvents: sp
}, ol = (r, e) => r.grid && e.grid && e.grid.rows > 1;
function ap() {
  const r = this, {
    activeIndex: e,
    initialized: t,
    loopedSlides: n = 0,
    params: i,
    $el: s
  } = r, o = i.breakpoints;
  if (!o || o && Object.keys(o).length === 0) return;
  const a = r.getBreakpoint(o, r.params.breakpointsBase, r.el);
  if (!a || r.currentBreakpoint === a) return;
  const u = (a in o ? o[a] : void 0) || r.originalParams, c = ol(r, i), h = ol(r, u), f = i.enabled;
  c && !h ? (s.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), r.emitContainerClasses()) : !c && h && (s.addClass(`${i.containerModifierClass}grid`), (u.grid.fill && u.grid.fill === "column" || !u.grid.fill && i.grid.fill === "column") && s.addClass(`${i.containerModifierClass}grid-column`), r.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((m) => {
    const v = i[m] && i[m].enabled, _ = u[m] && u[m].enabled;
    v && !_ && r[m].disable(), !v && _ && r[m].enable();
  });
  const p = u.direction && u.direction !== i.direction, g = i.loop && (u.slidesPerView !== i.slidesPerView || p);
  p && t && r.changeDirection(), Gt(r.params, u);
  const d = r.params.enabled;
  Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev
  }), f && !d ? r.disable() : !f && d && r.enable(), r.currentBreakpoint = a, r.emit("_beforeBreakpoint", u), g && t && (r.loopDestroy(), r.loopCreate(), r.updateSlides(), r.slideTo(e - n + r.loopedSlides, 0, !1)), r.emit("breakpoint", u);
}
function lp(r, e = "window", t) {
  if (!r || e === "container" && !t) return;
  let n = !1;
  const i = Ve(), s = e === "window" ? i.innerHeight : t.clientHeight, o = Object.keys(r).map((a) => {
    if (typeof a == "string" && a.indexOf("@") === 0) {
      const l = parseFloat(a.substr(1));
      return {
        value: s * l,
        point: a
      };
    }
    return {
      value: a,
      point: a
    };
  });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const {
      point: l,
      value: u
    } = o[a];
    e === "window" ? i.matchMedia(`(min-width: ${u}px)`).matches && (n = l) : u <= t.clientWidth && (n = l);
  }
  return n || "max";
}
const up = {
  setBreakpoint: ap,
  getBreakpoint: lp
};
function cp(r, e) {
  const t = [];
  return r.forEach((n) => {
    typeof n == "object" ? Object.keys(n).forEach((i) => {
      n[i] && t.push(e + i);
    }) : typeof n == "string" && t.push(e + n);
  }), t;
}
function fp() {
  const r = this, {
    classNames: e,
    params: t,
    rtl: n,
    $el: i,
    device: s,
    support: o
  } = r, a = cp(["initialized", t.direction, {
    "pointer-events": !o.touch
  }, {
    "free-mode": r.params.freeMode && t.freeMode.enabled
  }, {
    autoheight: t.autoHeight
  }, {
    rtl: n
  }, {
    grid: t.grid && t.grid.rows > 1
  }, {
    "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
  }, {
    android: s.android
  }, {
    ios: s.ios
  }, {
    "css-mode": t.cssMode
  }, {
    centered: t.cssMode && t.centeredSlides
  }, {
    "watch-progress": t.watchSlidesProgress
  }], t.containerModifierClass);
  e.push(...a), i.addClass([...e].join(" ")), r.emitContainerClasses();
}
function dp() {
  const r = this, {
    $el: e,
    classNames: t
  } = r;
  e.removeClass(t.join(" ")), r.emitContainerClasses();
}
const hp = {
  addClasses: fp,
  removeClasses: dp
};
function pp(r, e, t, n, i, s) {
  const o = Ve();
  let a;
  function l() {
    s && s();
  }
  !z(r).parent("picture")[0] && (!r.complete || !i) && e ? (a = new o.Image(), a.onload = l, a.onerror = l, n && (a.sizes = n), t && (a.srcset = t), e && (a.src = e)) : l();
}
function gp() {
  const r = this;
  r.imagesToLoad = r.$el.find("img");
  function e() {
    typeof r > "u" || r === null || !r || r.destroyed || (r.imagesLoaded !== void 0 && (r.imagesLoaded += 1), r.imagesLoaded === r.imagesToLoad.length && (r.params.updateOnImagesReady && r.update(), r.emit("imagesReady")));
  }
  for (let t = 0; t < r.imagesToLoad.length; t += 1) {
    const n = r.imagesToLoad[t];
    r.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e);
  }
}
const mp = {
  loadImage: pp,
  preloadImages: gp
};
function _p() {
  const r = this, {
    isLocked: e,
    params: t
  } = r, {
    slidesOffsetBefore: n
  } = t;
  if (n) {
    const i = r.slides.length - 1, s = r.slidesGrid[i] + r.slidesSizesGrid[i] + n * 2;
    r.isLocked = r.size > s;
  } else
    r.isLocked = r.snapGrid.length === 1;
  t.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked), t.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked), e && e !== r.isLocked && (r.isEnd = !1), e !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock");
}
const vp = {
  checkOverflow: _p
}, al = {
  init: !0,
  direction: "horizontal",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 0,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // Images
  preloadImages: !0,
  updateOnImagesReady: !0,
  // loop
  loop: !1,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopedSlidesLimit: !0,
  loopFillGroupWithBlank: !1,
  loopPreventsSlide: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-invisible-blank",
  slideActiveClass: "swiper-slide-active",
  slideDuplicateActiveClass: "swiper-slide-duplicate-active",
  slideVisibleClass: "swiper-slide-visible",
  slideDuplicateClass: "swiper-slide-duplicate",
  slideNextClass: "swiper-slide-next",
  slideDuplicateNextClass: "swiper-slide-duplicate-next",
  slidePrevClass: "swiper-slide-prev",
  slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
  wrapperClass: "swiper-wrapper",
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function yp(r, e) {
  return function(n = {}) {
    const i = Object.keys(n)[0], s = n[i];
    if (typeof s != "object" || s === null) {
      Gt(e, n);
      return;
    }
    if (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && r[i] === !0 && (r[i] = {
      auto: !0
    }), !(i in r && "enabled" in s)) {
      Gt(e, n);
      return;
    }
    r[i] === !0 && (r[i] = {
      enabled: !0
    }), typeof r[i] == "object" && !("enabled" in r[i]) && (r[i].enabled = !0), r[i] || (r[i] = {
      enabled: !1
    }), Gt(e, n);
  };
}
const io = {
  eventsEmitter: gh,
  update: Ch,
  translate: Ah,
  transition: Ih,
  slide: Vh,
  loop: Xh,
  grabCursor: Kh,
  events: op,
  breakpoints: up,
  checkOverflow: vp,
  classes: hp,
  images: mp
}, so = {};
class en {
  constructor(...e) {
    let t, n;
    if (e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? n = e[0] : [t, n] = e, n || (n = {}), n = Gt({}, n), t && !n.el && (n.el = t), n.el && z(n.el).length > 1) {
      const a = [];
      return z(n.el).each((l) => {
        const u = Gt({}, n, {
          el: l
        });
        a.push(new en(u));
      }), a;
    }
    const i = this;
    i.__swiper__ = !0, i.support = Yu(), i.device = ch({
      userAgent: n.userAgent
    }), i.browser = dh(), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = [...i.__modules__], n.modules && Array.isArray(n.modules) && i.modules.push(...n.modules);
    const s = {};
    i.modules.forEach((a) => {
      a({
        swiper: i,
        extendParams: yp(n, s),
        on: i.on.bind(i),
        once: i.once.bind(i),
        off: i.off.bind(i),
        emit: i.emit.bind(i)
      });
    });
    const o = Gt({}, al, s);
    return i.params = Gt({}, o, so, n), i.originalParams = Gt({}, i.params), i.passedParams = Gt({}, n), i.params && i.params.on && Object.keys(i.params.on).forEach((a) => {
      i.on(a, i.params.on[a]);
    }), i.params && i.params.onAny && i.onAny(i.params.onAny), i.$ = z, Object.assign(i, {
      enabled: i.params.enabled,
      el: t,
      // Classes
      classNames: [],
      // Slides
      slides: z(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return i.params.direction === "horizontal";
      },
      isVertical() {
        return i.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      // Locks
      allowSlideNext: i.params.allowSlideNext,
      allowSlidePrev: i.params.allowSlidePrev,
      // Touch Events
      touchEvents: (function() {
        const l = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["pointerdown", "pointermove", "pointerup"];
        return i.touchEventsTouch = {
          start: l[0],
          move: l[1],
          end: l[2],
          cancel: l[3]
        }, i.touchEventsDesktop = {
          start: u[0],
          move: u[1],
          end: u[2]
        }, i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop;
      })(),
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: i.params.focusableElements,
        // Last click time
        lastClickTime: Wt(),
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        isTouchEvent: void 0,
        startMoving: void 0
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: i.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), i.emit("_swiper"), i.params.init && i.init(), i;
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
  }
  setProgress(e, t) {
    const n = this;
    e = Math.min(Math.max(e, 0), 1);
    const i = n.minTranslate(), o = (n.maxTranslate() - i) * e + i;
    n.translateTo(o, typeof t > "u" ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className.split(" ").filter((n) => n.indexOf("swiper") === 0 || n.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed ? "" : e.className.split(" ").filter((n) => n.indexOf("swiper-slide") === 0 || n.indexOf(t.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.each((n) => {
      const i = e.getSlideClasses(n);
      t.push({
        slideEl: n,
        classNames: i
      }), e.emit("_slideClass", n, i);
    }), e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e = "current", t = !1) {
    const n = this, {
      params: i,
      slides: s,
      slidesGrid: o,
      slidesSizesGrid: a,
      size: l,
      activeIndex: u
    } = n;
    let c = 1;
    if (i.centeredSlides) {
      let h = s[u].swiperSlideSize, f;
      for (let p = u + 1; p < s.length; p += 1)
        s[p] && !f && (h += s[p].swiperSlideSize, c += 1, h > l && (f = !0));
      for (let p = u - 1; p >= 0; p -= 1)
        s[p] && !f && (h += s[p].swiperSlideSize, c += 1, h > l && (f = !0));
    } else if (e === "current")
      for (let h = u + 1; h < s.length; h += 1)
        (t ? o[h] + a[h] - o[u] < l : o[h] - o[u] < l) && (c += 1);
    else
      for (let h = u - 1; h >= 0; h -= 1)
        o[u] - o[h] < l && (c += 1);
    return c;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: t,
      params: n
    } = e;
    n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function i() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate, a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let s;
    e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? s = e.slideTo(e.slides.length - 1, 0, !1, !0) : s = e.slideTo(e.activeIndex, 0, !1, !0), s || i()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t = !0) {
    const n = this, i = n.params.direction;
    return e || (e = i === "horizontal" ? "vertical" : "horizontal"), e === i || e !== "horizontal" && e !== "vertical" || (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((s) => {
      e === "vertical" ? s.style.width = "" : s.style.height = "";
    }), n.emit("changeDirection"), t && n.update()), n;
  }
  changeLanguageDirection(e) {
    const t = this;
    t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    const n = z(e || t.params.el);
    if (e = n[0], !e)
      return !1;
    e.swiper = t;
    const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() => {
      if (e && e.shadowRoot && e.shadowRoot.querySelector) {
        const a = z(e.shadowRoot.querySelector(i()));
        return a.children = (l) => n.children(l), a;
      }
      return n.children ? n.children(i()) : z(n).children(i());
    })();
    if (o.length === 0 && t.params.createElements) {
      const l = kt().createElement("div");
      o = z(l), l.className = t.params.wrapperClass, n.append(l), n.children(`.${t.params.slideClass}`).each((u) => {
        o.append(u);
      });
    }
    return Object.assign(t, {
      $el: n,
      el: e,
      $wrapperEl: o,
      wrapperEl: o[0],
      mounted: !0,
      // RTL
      rtl: e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl"),
      wrongRTL: o.css("display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const t = this;
    return t.initialized || t.mount(e) === !1 || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
  }
  destroy(e = !0, t = !0) {
    const n = this, {
      params: i,
      $el: s,
      $wrapperEl: o,
      slides: a
    } = n;
    return typeof n.params > "u" || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), s.removeAttr("style"), o.removeAttr("style"), a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((l) => {
      n.off(l);
    }), e !== !1 && (n.$el[0].swiper = null, ih(n)), n.destroyed = !0), null;
  }
  static extendDefaults(e) {
    Gt(so, e);
  }
  static get extendedDefaults() {
    return so;
  }
  static get defaults() {
    return al;
  }
  static installModule(e) {
    en.prototype.__modules__ || (en.prototype.__modules__ = []);
    const t = en.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((t) => en.installModule(t)), en) : (en.installModule(e), en);
  }
}
Object.keys(io).forEach((r) => {
  Object.keys(io[r]).forEach((e) => {
    en.prototype[e] = io[r][e];
  });
});
en.use([hh, ph]);
function bp({
  swiper: r,
  extendParams: e,
  on: t,
  emit: n
}) {
  const i = kt(), s = Ve();
  r.keyboard = {
    enabled: !1
  }, e({
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0
    }
  });
  function o(u) {
    if (!r.enabled) return;
    const {
      rtlTranslate: c
    } = r;
    let h = u;
    h.originalEvent && (h = h.originalEvent);
    const f = h.keyCode || h.charCode, p = r.params.keyboard.pageUpDown, g = p && f === 33, d = p && f === 34, m = f === 37, v = f === 39, _ = f === 38, y = f === 40;
    if (!r.allowSlideNext && (r.isHorizontal() && v || r.isVertical() && y || d) || !r.allowSlidePrev && (r.isHorizontal() && m || r.isVertical() && _ || g))
      return !1;
    if (!(h.shiftKey || h.altKey || h.ctrlKey || h.metaKey) && !(i.activeElement && i.activeElement.nodeName && (i.activeElement.nodeName.toLowerCase() === "input" || i.activeElement.nodeName.toLowerCase() === "textarea"))) {
      if (r.params.keyboard.onlyInViewport && (g || d || m || v || _ || y)) {
        let b = !1;
        if (r.$el.parents(`.${r.params.slideClass}`).length > 0 && r.$el.parents(`.${r.params.slideActiveClass}`).length === 0)
          return;
        const w = r.$el, E = w[0].clientWidth, T = w[0].clientHeight, M = s.innerWidth, k = s.innerHeight, x = r.$el.offset();
        c && (x.left -= r.$el[0].scrollLeft);
        const A = [[x.left, x.top], [x.left + E, x.top], [x.left, x.top + T], [x.left + E, x.top + T]];
        for (let C = 0; C < A.length; C += 1) {
          const D = A[C];
          if (D[0] >= 0 && D[0] <= M && D[1] >= 0 && D[1] <= k) {
            if (D[0] === 0 && D[1] === 0) continue;
            b = !0;
          }
        }
        if (!b) return;
      }
      r.isHorizontal() ? ((g || d || m || v) && (h.preventDefault ? h.preventDefault() : h.returnValue = !1), ((d || v) && !c || (g || m) && c) && r.slideNext(), ((g || m) && !c || (d || v) && c) && r.slidePrev()) : ((g || d || _ || y) && (h.preventDefault ? h.preventDefault() : h.returnValue = !1), (d || y) && r.slideNext(), (g || _) && r.slidePrev()), n("keyPress", f);
    }
  }
  function a() {
    r.keyboard.enabled || (z(i).on("keydown", o), r.keyboard.enabled = !0);
  }
  function l() {
    r.keyboard.enabled && (z(i).off("keydown", o), r.keyboard.enabled = !1);
  }
  t("init", () => {
    r.params.keyboard.enabled && a();
  }), t("destroy", () => {
    r.keyboard.enabled && l();
  }), Object.assign(r.keyboard, {
    enable: a,
    disable: l
  });
}
function xp({
  swiper: r,
  extendParams: e,
  on: t,
  emit: n
}) {
  const i = Ve();
  e({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null
    }
  }), r.mousewheel = {
    enabled: !1
  };
  let s, o = Wt(), a;
  const l = [];
  function u(_) {
    let E = 0, T = 0, M = 0, k = 0;
    return "detail" in _ && (T = _.detail), "wheelDelta" in _ && (T = -_.wheelDelta / 120), "wheelDeltaY" in _ && (T = -_.wheelDeltaY / 120), "wheelDeltaX" in _ && (E = -_.wheelDeltaX / 120), "axis" in _ && _.axis === _.HORIZONTAL_AXIS && (E = T, T = 0), M = E * 10, k = T * 10, "deltaY" in _ && (k = _.deltaY), "deltaX" in _ && (M = _.deltaX), _.shiftKey && !M && (M = k, k = 0), (M || k) && _.deltaMode && (_.deltaMode === 1 ? (M *= 40, k *= 40) : (M *= 800, k *= 800)), M && !E && (E = M < 1 ? -1 : 1), k && !T && (T = k < 1 ? -1 : 1), {
      spinX: E,
      spinY: T,
      pixelX: M,
      pixelY: k
    };
  }
  function c() {
    r.enabled && (r.mouseEntered = !0);
  }
  function h() {
    r.enabled && (r.mouseEntered = !1);
  }
  function f(_) {
    return r.params.mousewheel.thresholdDelta && _.delta < r.params.mousewheel.thresholdDelta || r.params.mousewheel.thresholdTime && Wt() - o < r.params.mousewheel.thresholdTime ? !1 : _.delta >= 6 && Wt() - o < 60 ? !0 : (_.direction < 0 ? (!r.isEnd || r.params.loop) && !r.animating && (r.slideNext(), n("scroll", _.raw)) : (!r.isBeginning || r.params.loop) && !r.animating && (r.slidePrev(), n("scroll", _.raw)), o = new i.Date().getTime(), !1);
  }
  function p(_) {
    const y = r.params.mousewheel;
    if (_.direction < 0) {
      if (r.isEnd && !r.params.loop && y.releaseOnEdges)
        return !0;
    } else if (r.isBeginning && !r.params.loop && y.releaseOnEdges)
      return !0;
    return !1;
  }
  function g(_) {
    let y = _, b = !0;
    if (!r.enabled) return;
    const w = r.params.mousewheel;
    r.params.cssMode && y.preventDefault();
    let E = r.$el;
    if (r.params.mousewheel.eventsTarget !== "container" && (E = z(r.params.mousewheel.eventsTarget)), !r.mouseEntered && !E[0].contains(y.target) && !w.releaseOnEdges) return !0;
    y.originalEvent && (y = y.originalEvent);
    let T = 0;
    const M = r.rtlTranslate ? -1 : 1, k = u(y);
    if (w.forceToAxis)
      if (r.isHorizontal())
        if (Math.abs(k.pixelX) > Math.abs(k.pixelY)) T = -k.pixelX * M;
        else return !0;
      else if (Math.abs(k.pixelY) > Math.abs(k.pixelX)) T = -k.pixelY;
      else return !0;
    else
      T = Math.abs(k.pixelX) > Math.abs(k.pixelY) ? -k.pixelX * M : -k.pixelY;
    if (T === 0) return !0;
    w.invert && (T = -T);
    let x = r.getTranslate() + T * w.sensitivity;
    if (x >= r.minTranslate() && (x = r.minTranslate()), x <= r.maxTranslate() && (x = r.maxTranslate()), b = r.params.loop ? !0 : !(x === r.minTranslate() || x === r.maxTranslate()), b && r.params.nested && y.stopPropagation(), !r.params.freeMode || !r.params.freeMode.enabled) {
      const A = {
        time: Wt(),
        delta: Math.abs(T),
        direction: Math.sign(T),
        raw: _
      };
      l.length >= 2 && l.shift();
      const C = l.length ? l[l.length - 1] : void 0;
      if (l.push(A), C ? (A.direction !== C.direction || A.delta > C.delta || A.time > C.time + 150) && f(A) : f(A), p(A))
        return !0;
    } else {
      const A = {
        time: Wt(),
        delta: Math.abs(T),
        direction: Math.sign(T)
      }, C = a && A.time < a.time + 500 && A.delta <= a.delta && A.direction === a.direction;
      if (!C) {
        a = void 0, r.params.loop && r.loopFix();
        let D = r.getTranslate() + T * w.sensitivity;
        const R = r.isBeginning, H = r.isEnd;
        if (D >= r.minTranslate() && (D = r.minTranslate()), D <= r.maxTranslate() && (D = r.maxTranslate()), r.setTransition(0), r.setTranslate(D), r.updateProgress(), r.updateActiveIndex(), r.updateSlidesClasses(), (!R && r.isBeginning || !H && r.isEnd) && r.updateSlidesClasses(), r.params.freeMode.sticky) {
          clearTimeout(s), s = void 0, l.length >= 15 && l.shift();
          const q = l.length ? l[l.length - 1] : void 0, B = l[0];
          if (l.push(A), q && (A.delta > q.delta || A.direction !== q.direction))
            l.splice(0);
          else if (l.length >= 15 && A.time - B.time < 500 && B.delta - A.delta >= 1 && A.delta <= 6) {
            const U = T > 0 ? 0.8 : 0.2;
            a = A, l.splice(0), s = Vi(() => {
              r.slideToClosest(r.params.speed, !0, void 0, U);
            }, 0);
          }
          s || (s = Vi(() => {
            a = A, l.splice(0), r.slideToClosest(r.params.speed, !0, void 0, 0.5);
          }, 500));
        }
        if (C || n("scroll", y), r.params.autoplay && r.params.autoplayDisableOnInteraction && r.autoplay.stop(), D === r.minTranslate() || D === r.maxTranslate()) return !0;
      }
    }
    return y.preventDefault ? y.preventDefault() : y.returnValue = !1, !1;
  }
  function d(_) {
    let y = r.$el;
    r.params.mousewheel.eventsTarget !== "container" && (y = z(r.params.mousewheel.eventsTarget)), y[_]("mouseenter", c), y[_]("mouseleave", h), y[_]("wheel", g);
  }
  function m() {
    return r.params.cssMode ? (r.wrapperEl.removeEventListener("wheel", g), !0) : r.mousewheel.enabled ? !1 : (d("on"), r.mousewheel.enabled = !0, !0);
  }
  function v() {
    return r.params.cssMode ? (r.wrapperEl.addEventListener(event, g), !0) : r.mousewheel.enabled ? (d("off"), r.mousewheel.enabled = !1, !0) : !1;
  }
  t("init", () => {
    !r.params.mousewheel.enabled && r.params.cssMode && v(), r.params.mousewheel.enabled && m();
  }), t("destroy", () => {
    r.params.cssMode && m(), r.mousewheel.enabled && v();
  }), Object.assign(r.mousewheel, {
    enable: m,
    disable: v
  });
}
function ju(r, e, t, n) {
  const i = kt();
  return r.params.createElements && Object.keys(n).forEach((s) => {
    if (!t[s] && t.auto === !0) {
      let o = r.$el.children(`.${n[s]}`)[0];
      o || (o = i.createElement("div"), o.className = n[s], r.$el.append(o)), t[s] = o, e[s] = o;
    }
  }), t;
}
function Tp({
  swiper: r,
  extendParams: e,
  on: t,
  emit: n
}) {
  e({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), r.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };
  function i(p) {
    let g;
    return p && (g = z(p), r.params.uniqueNavElements && typeof p == "string" && g.length > 1 && r.$el.find(p).length === 1 && (g = r.$el.find(p))), g;
  }
  function s(p, g) {
    const d = r.params.navigation;
    p && p.length > 0 && (p[g ? "addClass" : "removeClass"](d.disabledClass), p[0] && p[0].tagName === "BUTTON" && (p[0].disabled = g), r.params.watchOverflow && r.enabled && p[r.isLocked ? "addClass" : "removeClass"](d.lockClass));
  }
  function o() {
    if (r.params.loop) return;
    const {
      $nextEl: p,
      $prevEl: g
    } = r.navigation;
    s(g, r.isBeginning && !r.params.rewind), s(p, r.isEnd && !r.params.rewind);
  }
  function a(p) {
    p.preventDefault(), !(r.isBeginning && !r.params.loop && !r.params.rewind) && (r.slidePrev(), n("navigationPrev"));
  }
  function l(p) {
    p.preventDefault(), !(r.isEnd && !r.params.loop && !r.params.rewind) && (r.slideNext(), n("navigationNext"));
  }
  function u() {
    const p = r.params.navigation;
    if (r.params.navigation = ju(r, r.originalParams.navigation, r.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(p.nextEl || p.prevEl)) return;
    const g = i(p.nextEl), d = i(p.prevEl);
    g && g.length > 0 && g.on("click", l), d && d.length > 0 && d.on("click", a), Object.assign(r.navigation, {
      $nextEl: g,
      nextEl: g && g[0],
      $prevEl: d,
      prevEl: d && d[0]
    }), r.enabled || (g && g.addClass(p.lockClass), d && d.addClass(p.lockClass));
  }
  function c() {
    const {
      $nextEl: p,
      $prevEl: g
    } = r.navigation;
    p && p.length && (p.off("click", l), p.removeClass(r.params.navigation.disabledClass)), g && g.length && (g.off("click", a), g.removeClass(r.params.navigation.disabledClass));
  }
  t("init", () => {
    r.params.navigation.enabled === !1 ? f() : (u(), o());
  }), t("toEdge fromEdge lock unlock", () => {
    o();
  }), t("destroy", () => {
    c();
  }), t("enable disable", () => {
    const {
      $nextEl: p,
      $prevEl: g
    } = r.navigation;
    p && p[r.enabled ? "removeClass" : "addClass"](r.params.navigation.lockClass), g && g[r.enabled ? "removeClass" : "addClass"](r.params.navigation.lockClass);
  }), t("click", (p, g) => {
    const {
      $nextEl: d,
      $prevEl: m
    } = r.navigation, v = g.target;
    if (r.params.navigation.hideOnClick && !z(v).is(m) && !z(v).is(d)) {
      if (r.pagination && r.params.pagination && r.params.pagination.clickable && (r.pagination.el === v || r.pagination.el.contains(v))) return;
      let _;
      d ? _ = d.hasClass(r.params.navigation.hiddenClass) : m && (_ = m.hasClass(r.params.navigation.hiddenClass)), n(_ === !0 ? "navigationShow" : "navigationHide"), d && d.toggleClass(r.params.navigation.hiddenClass), m && m.toggleClass(r.params.navigation.hiddenClass);
    }
  });
  const h = () => {
    r.$el.removeClass(r.params.navigation.navigationDisabledClass), u(), o();
  }, f = () => {
    r.$el.addClass(r.params.navigation.navigationDisabledClass), c();
  };
  Object.assign(r.navigation, {
    enable: h,
    disable: f,
    update: o,
    init: u,
    destroy: c
  });
}
function $r(r = "") {
  return `.${r.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Sp({
  swiper: r,
  extendParams: e,
  on: t,
  emit: n
}) {
  const i = "swiper-pagination";
  e({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (d) => d,
      formatFractionTotal: (d) => d,
      bulletClass: `${i}-bullet`,
      bulletActiveClass: `${i}-bullet-active`,
      modifierClass: `${i}-`,
      currentClass: `${i}-current`,
      totalClass: `${i}-total`,
      hiddenClass: `${i}-hidden`,
      progressbarFillClass: `${i}-progressbar-fill`,
      progressbarOppositeClass: `${i}-progressbar-opposite`,
      clickableClass: `${i}-clickable`,
      lockClass: `${i}-lock`,
      horizontalClass: `${i}-horizontal`,
      verticalClass: `${i}-vertical`,
      paginationDisabledClass: `${i}-disabled`
    }
  }), r.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let s, o = 0;
  function a() {
    return !r.params.pagination.el || !r.pagination.el || !r.pagination.$el || r.pagination.$el.length === 0;
  }
  function l(d, m) {
    const {
      bulletActiveClass: v
    } = r.params.pagination;
    d[m]().addClass(`${v}-${m}`)[m]().addClass(`${v}-${m}-${m}`);
  }
  function u() {
    const d = r.rtl, m = r.params.pagination;
    if (a()) return;
    const v = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : r.slides.length, _ = r.pagination.$el;
    let y;
    const b = r.params.loop ? Math.ceil((v - r.loopedSlides * 2) / r.params.slidesPerGroup) : r.snapGrid.length;
    if (r.params.loop ? (y = Math.ceil((r.activeIndex - r.loopedSlides) / r.params.slidesPerGroup), y > v - 1 - r.loopedSlides * 2 && (y -= v - r.loopedSlides * 2), y > b - 1 && (y -= b), y < 0 && r.params.paginationType !== "bullets" && (y = b + y)) : typeof r.snapIndex < "u" ? y = r.snapIndex : y = r.activeIndex || 0, m.type === "bullets" && r.pagination.bullets && r.pagination.bullets.length > 0) {
      const w = r.pagination.bullets;
      let E, T, M;
      if (m.dynamicBullets && (s = w.eq(0)[r.isHorizontal() ? "outerWidth" : "outerHeight"](!0), _.css(r.isHorizontal() ? "width" : "height", `${s * (m.dynamicMainBullets + 4)}px`), m.dynamicMainBullets > 1 && r.previousIndex !== void 0 && (o += y - (r.previousIndex - r.loopedSlides || 0), o > m.dynamicMainBullets - 1 ? o = m.dynamicMainBullets - 1 : o < 0 && (o = 0)), E = Math.max(y - o, 0), T = E + (Math.min(w.length, m.dynamicMainBullets) - 1), M = (T + E) / 2), w.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((k) => `${m.bulletActiveClass}${k}`).join(" ")), _.length > 1)
        w.each((k) => {
          const x = z(k), A = x.index();
          A === y && x.addClass(m.bulletActiveClass), m.dynamicBullets && (A >= E && A <= T && x.addClass(`${m.bulletActiveClass}-main`), A === E && l(x, "prev"), A === T && l(x, "next"));
        });
      else {
        const k = w.eq(y), x = k.index();
        if (k.addClass(m.bulletActiveClass), m.dynamicBullets) {
          const A = w.eq(E), C = w.eq(T);
          for (let D = E; D <= T; D += 1)
            w.eq(D).addClass(`${m.bulletActiveClass}-main`);
          if (r.params.loop)
            if (x >= w.length) {
              for (let D = m.dynamicMainBullets; D >= 0; D -= 1)
                w.eq(w.length - D).addClass(`${m.bulletActiveClass}-main`);
              w.eq(w.length - m.dynamicMainBullets - 1).addClass(`${m.bulletActiveClass}-prev`);
            } else
              l(A, "prev"), l(C, "next");
          else
            l(A, "prev"), l(C, "next");
        }
      }
      if (m.dynamicBullets) {
        const k = Math.min(w.length, m.dynamicMainBullets + 4), x = (s * k - s) / 2 - M * s, A = d ? "right" : "left";
        w.css(r.isHorizontal() ? A : "top", `${x}px`);
      }
    }
    if (m.type === "fraction" && (_.find($r(m.currentClass)).text(m.formatFractionCurrent(y + 1)), _.find($r(m.totalClass)).text(m.formatFractionTotal(b))), m.type === "progressbar") {
      let w;
      m.progressbarOpposite ? w = r.isHorizontal() ? "vertical" : "horizontal" : w = r.isHorizontal() ? "horizontal" : "vertical";
      const E = (y + 1) / b;
      let T = 1, M = 1;
      w === "horizontal" ? T = E : M = E, _.find($r(m.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${T}) scaleY(${M})`).transition(r.params.speed);
    }
    m.type === "custom" && m.renderCustom ? (_.html(m.renderCustom(r, y + 1, b)), n("paginationRender", _[0])) : n("paginationUpdate", _[0]), r.params.watchOverflow && r.enabled && _[r.isLocked ? "addClass" : "removeClass"](m.lockClass);
  }
  function c() {
    const d = r.params.pagination;
    if (a()) return;
    const m = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : r.slides.length, v = r.pagination.$el;
    let _ = "";
    if (d.type === "bullets") {
      let y = r.params.loop ? Math.ceil((m - r.loopedSlides * 2) / r.params.slidesPerGroup) : r.snapGrid.length;
      r.params.freeMode && r.params.freeMode.enabled && !r.params.loop && y > m && (y = m);
      for (let b = 0; b < y; b += 1)
        d.renderBullet ? _ += d.renderBullet.call(r, b, d.bulletClass) : _ += `<${d.bulletElement} class="${d.bulletClass}"></${d.bulletElement}>`;
      v.html(_), r.pagination.bullets = v.find($r(d.bulletClass));
    }
    d.type === "fraction" && (d.renderFraction ? _ = d.renderFraction.call(r, d.currentClass, d.totalClass) : _ = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`, v.html(_)), d.type === "progressbar" && (d.renderProgressbar ? _ = d.renderProgressbar.call(r, d.progressbarFillClass) : _ = `<span class="${d.progressbarFillClass}"></span>`, v.html(_)), d.type !== "custom" && n("paginationRender", r.pagination.$el[0]);
  }
  function h() {
    r.params.pagination = ju(r, r.originalParams.pagination, r.params.pagination, {
      el: "swiper-pagination"
    });
    const d = r.params.pagination;
    if (!d.el) return;
    let m = z(d.el);
    m.length !== 0 && (r.params.uniqueNavElements && typeof d.el == "string" && m.length > 1 && (m = r.$el.find(d.el), m.length > 1 && (m = m.filter((v) => z(v).parents(".swiper")[0] === r.el))), d.type === "bullets" && d.clickable && m.addClass(d.clickableClass), m.addClass(d.modifierClass + d.type), m.addClass(r.isHorizontal() ? d.horizontalClass : d.verticalClass), d.type === "bullets" && d.dynamicBullets && (m.addClass(`${d.modifierClass}${d.type}-dynamic`), o = 0, d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)), d.type === "progressbar" && d.progressbarOpposite && m.addClass(d.progressbarOppositeClass), d.clickable && m.on("click", $r(d.bulletClass), function(_) {
      _.preventDefault();
      let y = z(this).index() * r.params.slidesPerGroup;
      r.params.loop && (y += r.loopedSlides), r.slideTo(y);
    }), Object.assign(r.pagination, {
      $el: m,
      el: m[0]
    }), r.enabled || m.addClass(d.lockClass));
  }
  function f() {
    const d = r.params.pagination;
    if (a()) return;
    const m = r.pagination.$el;
    m.removeClass(d.hiddenClass), m.removeClass(d.modifierClass + d.type), m.removeClass(r.isHorizontal() ? d.horizontalClass : d.verticalClass), r.pagination.bullets && r.pagination.bullets.removeClass && r.pagination.bullets.removeClass(d.bulletActiveClass), d.clickable && m.off("click", $r(d.bulletClass));
  }
  t("init", () => {
    r.params.pagination.enabled === !1 ? g() : (h(), c(), u());
  }), t("activeIndexChange", () => {
    (r.params.loop || typeof r.snapIndex > "u") && u();
  }), t("snapIndexChange", () => {
    r.params.loop || u();
  }), t("slidesLengthChange", () => {
    r.params.loop && (c(), u());
  }), t("snapGridLengthChange", () => {
    r.params.loop || (c(), u());
  }), t("destroy", () => {
    f();
  }), t("enable disable", () => {
    const {
      $el: d
    } = r.pagination;
    d && d[r.enabled ? "removeClass" : "addClass"](r.params.pagination.lockClass);
  }), t("lock unlock", () => {
    u();
  }), t("click", (d, m) => {
    const v = m.target, {
      $el: _
    } = r.pagination;
    if (r.params.pagination.el && r.params.pagination.hideOnClick && _ && _.length > 0 && !z(v).hasClass(r.params.pagination.bulletClass)) {
      if (r.navigation && (r.navigation.nextEl && v === r.navigation.nextEl || r.navigation.prevEl && v === r.navigation.prevEl)) return;
      const y = _.hasClass(r.params.pagination.hiddenClass);
      n(y === !0 ? "paginationShow" : "paginationHide"), _.toggleClass(r.params.pagination.hiddenClass);
    }
  });
  const p = () => {
    r.$el.removeClass(r.params.pagination.paginationDisabledClass), r.pagination.$el && r.pagination.$el.removeClass(r.params.pagination.paginationDisabledClass), h(), c(), u();
  }, g = () => {
    r.$el.addClass(r.params.pagination.paginationDisabledClass), r.pagination.$el && r.pagination.$el.addClass(r.params.pagination.paginationDisabledClass), f();
  };
  Object.assign(r.pagination, {
    enable: p,
    disable: g,
    render: c,
    update: u,
    init: h,
    destroy: f
  });
}
function wp({
  swiper: r,
  extendParams: e,
  emit: t,
  once: n
}) {
  e({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02
    }
  });
  function i() {
    const a = r.getTranslate();
    r.setTranslate(a), r.setTransition(0), r.touchEventsData.velocities.length = 0, r.freeMode.onTouchEnd({
      currentPos: r.rtl ? r.translate : -r.translate
    });
  }
  function s() {
    const {
      touchEventsData: a,
      touches: l
    } = r;
    a.velocities.length === 0 && a.velocities.push({
      position: l[r.isHorizontal() ? "startX" : "startY"],
      time: a.touchStartTime
    }), a.velocities.push({
      position: l[r.isHorizontal() ? "currentX" : "currentY"],
      time: Wt()
    });
  }
  function o({
    currentPos: a
  }) {
    const {
      params: l,
      $wrapperEl: u,
      rtlTranslate: c,
      snapGrid: h,
      touchEventsData: f
    } = r, g = Wt() - f.touchStartTime;
    if (a < -r.minTranslate()) {
      r.slideTo(r.activeIndex);
      return;
    }
    if (a > -r.maxTranslate()) {
      r.slides.length < h.length ? r.slideTo(h.length - 1) : r.slideTo(r.slides.length - 1);
      return;
    }
    if (l.freeMode.momentum) {
      if (f.velocities.length > 1) {
        const E = f.velocities.pop(), T = f.velocities.pop(), M = E.position - T.position, k = E.time - T.time;
        r.velocity = M / k, r.velocity /= 2, Math.abs(r.velocity) < l.freeMode.minimumVelocity && (r.velocity = 0), (k > 150 || Wt() - E.time > 300) && (r.velocity = 0);
      } else
        r.velocity = 0;
      r.velocity *= l.freeMode.momentumVelocityRatio, f.velocities.length = 0;
      let d = 1e3 * l.freeMode.momentumRatio;
      const m = r.velocity * d;
      let v = r.translate + m;
      c && (v = -v);
      let _ = !1, y;
      const b = Math.abs(r.velocity) * 20 * l.freeMode.momentumBounceRatio;
      let w;
      if (v < r.maxTranslate())
        l.freeMode.momentumBounce ? (v + r.maxTranslate() < -b && (v = r.maxTranslate() - b), y = r.maxTranslate(), _ = !0, f.allowMomentumBounce = !0) : v = r.maxTranslate(), l.loop && l.centeredSlides && (w = !0);
      else if (v > r.minTranslate())
        l.freeMode.momentumBounce ? (v - r.minTranslate() > b && (v = r.minTranslate() + b), y = r.minTranslate(), _ = !0, f.allowMomentumBounce = !0) : v = r.minTranslate(), l.loop && l.centeredSlides && (w = !0);
      else if (l.freeMode.sticky) {
        let E;
        for (let T = 0; T < h.length; T += 1)
          if (h[T] > -v) {
            E = T;
            break;
          }
        Math.abs(h[E] - v) < Math.abs(h[E - 1] - v) || r.swipeDirection === "next" ? v = h[E] : v = h[E - 1], v = -v;
      }
      if (w && n("transitionEnd", () => {
        r.loopFix();
      }), r.velocity !== 0) {
        if (c ? d = Math.abs((-v - r.translate) / r.velocity) : d = Math.abs((v - r.translate) / r.velocity), l.freeMode.sticky) {
          const E = Math.abs((c ? -v : v) - r.translate), T = r.slidesSizesGrid[r.activeIndex];
          E < T ? d = l.speed : E < 2 * T ? d = l.speed * 1.5 : d = l.speed * 2.5;
        }
      } else if (l.freeMode.sticky) {
        r.slideToClosest();
        return;
      }
      l.freeMode.momentumBounce && _ ? (r.updateProgress(y), r.setTransition(d), r.setTranslate(v), r.transitionStart(!0, r.swipeDirection), r.animating = !0, u.transitionEnd(() => {
        !r || r.destroyed || !f.allowMomentumBounce || (t("momentumBounce"), r.setTransition(l.speed), setTimeout(() => {
          r.setTranslate(y), u.transitionEnd(() => {
            !r || r.destroyed || r.transitionEnd();
          });
        }, 0));
      })) : r.velocity ? (t("_freeModeNoMomentumRelease"), r.updateProgress(v), r.setTransition(d), r.setTranslate(v), r.transitionStart(!0, r.swipeDirection), r.animating || (r.animating = !0, u.transitionEnd(() => {
        !r || r.destroyed || r.transitionEnd();
      }))) : r.updateProgress(v), r.updateActiveIndex(), r.updateSlidesClasses();
    } else if (l.freeMode.sticky) {
      r.slideToClosest();
      return;
    } else l.freeMode && t("_freeModeNoMomentumRelease");
    (!l.freeMode.momentum || g >= l.longSwipesMs) && (r.updateProgress(), r.updateActiveIndex(), r.updateSlidesClasses());
  }
  Object.assign(r, {
    freeMode: {
      onTouchStart: i,
      onTouchMove: s,
      onTouchEnd: o
    }
  });
}
const qn = ri.create("Slider");
class Cp {
  element;
  swiperInstance = null;
  constructor(e) {
    this.element = e;
  }
  init() {
    if (qn.log("Initialiseren", this.element), this.element.dataset.scriptInitialized) {
      qn.warn("Slider is al geïnitialiseerd");
      return;
    }
    this.element.dataset.scriptInitialized = "true";
    const e = this.element.querySelector(".slider_element"), t = this.element.querySelector(".slider_list");
    if (!e || !t) {
      qn.warn("Swiper elementen niet gevonden");
      return;
    }
    this.flattenDisplayContents(t), this.removeCMSList(t), [...t.children].forEach((h) => h.classList.add("swiper-slide"));
    const n = e.getAttribute("data-follow-finger") === "true", i = e.getAttribute("data-free-mode") === "true", s = e.getAttribute("data-mousewheel") === "true", o = e.getAttribute("data-slide-to-clicked") === "true", a = +(e.getAttribute("data-speed") || 600), l = this.element.querySelector("[data-slider='next'] button") || this.element.querySelector("[data-slider='next'] .clickable_wrap") || this.element.querySelector("[data-slider='next']"), u = this.element.querySelector("[data-slider='previous'] button") || this.element.querySelector("[data-slider='previous'] .clickable_wrap") || this.element.querySelector("[data-slider='previous']"), c = this.element.querySelector(".slider_bullet_list");
    l || qn.warn("Next button niet gevonden"), u || qn.warn("Previous button niet gevonden"), c || qn.warn("Pagination element niet gevonden"), this.swiperInstance = new en(e, {
      modules: [Tp, Sp, xp, bp, wp],
      slidesPerView: "auto",
      followFinger: n,
      loopAdditionalSlides: 10,
      freeMode: i,
      slideToClickedSlide: o,
      centeredSlides: !1,
      autoHeight: !1,
      speed: a,
      mousewheel: {
        enabled: s,
        forceToAxis: !0
      },
      keyboard: {
        enabled: !0,
        onlyInViewport: !0
      },
      navigation: {
        nextEl: l,
        prevEl: u
      },
      pagination: {
        el: c,
        bulletActiveClass: "is-active",
        bulletClass: "slider_bullet_item",
        bulletElement: "button",
        clickable: !0
      },
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
      observer: !0,
      observeParents: !0
    }), qn.log("Swiper geïnitialiseerd", {
      nextButton: !!l,
      prevButton: !!u,
      pagination: !!c
    });
  }
  flattenDisplayContents(e) {
    if (!e) return;
    let t = e.firstElementChild;
    for (; t && t.classList.contains("u-display-contents"); ) {
      for (; t.firstChild; )
        e.insertBefore(t.firstChild, t);
      e.removeChild(t), t = e.firstElementChild;
    }
  }
  removeCMSList(e) {
    const t = Array.from(e.children).find(
      (s) => s.classList.contains("w-dyn-list")
    );
    if (!t) return;
    const n = t?.querySelector(".w-dyn-items")?.children;
    if (!n) return;
    const i = [...e.children];
    [...n].forEach((s) => {
      const o = [...s.children].find((a) => !a.classList.contains("w-condition-invisible"));
      o && e.appendChild(o);
    }), i.forEach((s) => s.remove());
  }
  destroy() {
    qn.log("Destroyen", this.element), this.swiperInstance && (this.swiperInstance.destroy(!0, !0), this.swiperInstance = null), this.element.dataset.scriptInitialized && delete this.element.dataset.scriptInitialized;
  }
}
const $o = ri.create("Components"), Vr = [];
function Uu() {
  $o.log("Initialiseren..."), document.querySelectorAll("[data-teaser-compass]").forEach((n) => {
    const i = new md(n);
    i.init(), Vr.push(i);
  }), document.querySelectorAll("[data-hero-main]").forEach((n) => {
    const i = new _d(n);
    i.init(), Vr.push(i);
  }), document.querySelectorAll(
    "[data-slider='component']:not([data-slider='component'] [data-slider='component'])"
  ).forEach((n) => {
    const i = new Cp(n);
    i.init(), Vr.push(i);
  }), $o.log(`${Vr.length} component(s) geïnitialiseerd`);
}
function Ep() {
  $o.log("Herinitialiseren..."), Vr.forEach((r) => {
    r.destroy();
  }), Vr.length = 0, requestAnimationFrame(() => {
    Uu();
  });
}
const oo = ri.create("Webflow JS");
function Pp() {
  if (typeof window > "u" || !window.Webflow) {
    oo.warn("Webflow object niet gevonden. Zorg ervoor dat webflow.js geladen is.");
    return;
  }
  try {
    window.Webflow.ready(), oo.log("Herinitialisatie voltooid");
  } catch (r) {
    oo.error("Fout bij herinitialisatie:", r);
  }
}
class kp {
  name;
  constructor(e = {}) {
    this.name = e.name || "default-transition";
  }
  getTransition() {
    return {
      name: this.name,
      leave: (e) => this.leave(e),
      enter: (e) => this.enter(e),
      afterEnter: () => this.afterEnter()
    };
  }
  leave(e) {
    return new Promise((t) => {
      const n = Bi();
      n && n.paused(!0), on.set(e.current.container, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1
      }), on.to(e.current.container, {
        opacity: 0,
        duration: 0.5,
        onComplete: t
      });
    });
  }
  enter(e) {
    return new Promise((t) => {
      if (!e.next.container) {
        t();
        return;
      }
      window.scrollTo(0, 0), on.fromTo(
        e.next.container,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          onComplete: t
        }
      );
    });
  }
  afterEnter() {
    requestAnimationFrame(() => {
      const e = Gf();
      requestAnimationFrame(() => {
        e && (e.refresh(), e.scrollTo(0, !1), e.paused(!1)), requestAnimationFrame(() => {
          Ep(), requestAnimationFrame(() => {
            Pp();
          });
        });
      });
    });
  }
}
function Mp() {
  return !1;
}
function Op() {
  gd.init({
    debug: Mp(),
    transitions: [
      new kp().getTransition()
    ]
  });
}
function ll() {
  Hf(), Op(), Uu();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ll) : ll();
