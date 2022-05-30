const Qo = function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) t(i);
    new MutationObserver(i => {
        for (const n of i) if (n.type === "childList") for (const u of n.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && t(u)
    }).observe(document, {childList: !0, subtree: !0});

    function r(i) {
        const n = {};
        return i.integrity && (n.integrity = i.integrity), i.referrerpolicy && (n.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? n.credentials = "include" : i.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function t(i) {
        if (i.ep) return;
        i.ep = !0;
        const n = r(i);
        fetch(i.href, n)
    }
};
Qo();

function zt(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}

function ws(o, e) {
    o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.__proto__ = e
}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var st = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
    ti = {duration: .5, overwrite: !1, delay: 0}, yu, _t = 1e8, Q = 1 / _t, Jn = Math.PI * 2, Jo = Jn / 4, ea = 0,
    Ts = Math.sqrt, ta = Math.cos, ra = Math.sin, Fe = function (e) {
        return typeof e == "string"
    }, ye = function (e) {
        return typeof e == "function"
    }, Vt = function (e) {
        return typeof e == "number"
    }, Fu = function (e) {
        return typeof e == "undefined"
    }, Ut = function (e) {
        return typeof e == "object"
    }, qe = function (e) {
        return e !== !1
    }, vs = function () {
        return typeof window != "undefined"
    }, qi = function (e) {
        return ye(e) || Fe(e)
    }, Ss = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {
    }, Me = Array.isArray, eu = /(?:-?\.?\d|\.)+/gi, Ps = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Wr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ln = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, As = /[+-]=-?[.\d]+/,
    ks = /[^,'"\[\]\s]+/gi, ia = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, te, vt, tu, xu, ot = {}, Cn = {}, Os,
    Ms = function (e) {
        return (Cn = Or(e, ot)) && Et
    }, Eu = function (e, r) {
        return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()")
    }, yn = function (e, r) {
        return !r && console.warn(e)
    }, Bs = function (e, r) {
        return e && (ot[e] = r) && Cn && (Cn[e] = r) || ot
    }, Bi = function () {
        return 0
    }, bu = {}, nr = [], ru = {}, Rs, rt = {}, In = {}, Yu = 30, ln = [], wu = "", Tu = function (e) {
        var r = e[0], t, i;
        if (Ut(r) || ye(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
            for (i = ln.length; i-- && !ln[i].targetTest(r);) ;
            t = ln[i]
        }
        for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new io(e[i], t))) || e.splice(i, 1);
        return e
    }, vr = function (e) {
        return e._gsap || Tu(dt(e))[0]._gsap
    }, zs = function (e, r, t) {
        return (t = e[r]) && ye(t) ? e[r]() : Fu(t) && e.getAttribute && e.getAttribute(r) || t
    }, je = function (e, r) {
        return (e = e.split(",")).forEach(r) || e
    }, fe = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, ke = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0
    }, jr = function (e, r) {
        var t = r.charAt(0), i = parseFloat(r.substr(2));
        return e = parseFloat(e), t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i
    }, na = function (e, r) {
        for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t;) ;
        return i < t
    }, Fn = function () {
        var e = nr.length, r = nr.slice(0), t, i;
        for (ru = {}, nr.length = 0, t = 0; t < e; t++) i = r[t], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    }, Ls = function (e, r, t, i) {
        nr.length && Fn(), e.render(r, t, i), nr.length && Fn()
    }, Is = function (e) {
        var r = parseFloat(e);
        return (r || r === 0) && (e + "").match(ks).length < 2 ? r : Fe(e) ? e.trim() : e
    }, Ns = function (e) {
        return e
    }, mt = function (e, r) {
        for (var t in r) t in e || (e[t] = r[t]);
        return e
    }, ua = function (e) {
        return function (r, t) {
            for (var i in t) i in r || i === "duration" && e || i === "ease" || (r[i] = t[i])
        }
    }, Or = function (e, r) {
        for (var t in r) e[t] = r[t];
        return e
    }, Xu = function o(e, r) {
        for (var t in r) t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = Ut(r[t]) ? o(e[t] || (e[t] = {}), r[t]) : r[t]);
        return e
    }, xn = function (e, r) {
        var t = {}, i;
        for (i in e) i in r || (t[i] = e[i]);
        return t
    }, bi = function (e) {
        var r = e.parent || te, t = e.keyframes ? ua(Me(e.keyframes)) : mt;
        if (qe(e.inherit)) for (; r;) t(e, r.vars.defaults), r = r.parent || r._dp;
        return e
    }, sa = function (e, r) {
        for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t];) ;
        return t < 0
    }, Ys = function (e, r, t, i, n) {
        t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
        var u = e[i], s;
        if (n) for (s = r[n]; u && u[n] > s;) u = u._prev;
        return u ? (r._next = u._next, u._next = r) : (r._next = e[t], e[t] = r), r._next ? r._next._prev = r : e[i] = r, r._prev = u, r.parent = r._dp = e, r
    }, On = function (e, r, t, i) {
        t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
        var n = r._prev, u = r._next;
        n ? n._next = u : e[t] === r && (e[t] = u), u ? u._prev = n : e[i] === r && (e[i] = n), r._next = r._prev = r.parent = null
    }, Yt = function (e, r) {
        e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0
    }, Sr = function (e, r) {
        if (e && (!r || r._end > e._dur || r._start < 0)) for (var t = e; t;) t._dirty = 1, t = t.parent;
        return e
    }, oa = function (e) {
        for (var r = e.parent; r && r.parent;) r._dirty = 1, r.totalDuration(), r = r.parent;
        return e
    }, aa = function o(e) {
        return !e || e._ts && o(e.parent)
    }, Vu = function (e) {
        return e._repeat ? ri(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, ri = function (e, r) {
        var t = Math.floor(e /= r);
        return e && t === e ? t - 1 : t
    }, En = function (e, r) {
        return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    }, Mn = function (e) {
        return e._end = ke(e._start + (e._tDur / Math.abs(e._ts || e._rts || Q) || 0))
    }, vu = function (e, r) {
        var t = e._dp;
        return t && t.smoothChildTiming && e._ts && (e._start = ke(t._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)), Mn(e), t._dirty || Sr(t, e)), e
    }, Xs = function (e, r) {
        var t;
        if ((r._time || r._initted && !r._dur) && (t = En(e.rawTime(), r), (!r._dur || Gi(0, r.totalDuration(), t) - r._tTime > Q) && r.render(t, !0)), Sr(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration()) for (t = e; t._dp;) t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
            e._zTime = -Q
        }
    }, Pt = function (e, r, t, i) {
        return r.parent && Yt(r), r._start = ke((Vt(t) ? t : t || e !== te ? ft(e, t, r) : e._time) + r._delay), r._end = ke(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), Ys(e, r, "_first", "_last", e._sort ? "_start" : 0), iu(r) || (e._recent = r), i || Xs(e, r), e
    }, Vs = function (e, r) {
        return (ot.ScrollTrigger || Eu("scrollTrigger", r)) && ot.ScrollTrigger.create(r, e)
    }, Us = function (e, r, t, i) {
        if (Pu(e, r), !e._initted) return 1;
        if (!t && e._pt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Rs !== it.frame) return nr.push(e), e._lazy = [r, i], 1
    }, la = function o(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || o(r))
    }, iu = function (e) {
        var r = e.data;
        return r === "isFromStart" || r === "isStart"
    }, fa = function (e, r, t, i) {
        var n = e.ratio,
            u = r < 0 || !r && (!e._start && la(e) && !(!e._initted && iu(e)) || (e._ts < 0 || e._dp._ts < 0) && !iu(e)) ? 0 : 1,
            s = e._rDelay, a = 0, l, f, h;
        if (s && e._repeat && (a = Gi(0, e._tDur, r), f = ri(a, s), e._yoyo && f & 1 && (u = 1 - u), f !== ri(e._tTime, s) && (n = 1 - u, e.vars.repeatRefresh && e._initted && e.invalidate())), u !== n || i || e._zTime === Q || !r && e._zTime) {
            if (!e._initted && Us(e, r, i, t)) return;
            for (h = e._zTime, e._zTime = r || (t ? Q : 0), t || (t = r && !h), e.ratio = u, e._from && (u = 1 - u), e._time = 0, e._tTime = a, l = e._pt; l;) l.r(u, l.d), l = l._next;
            e._startAt && r < 0 && e._startAt.render(r, !0, !0), e._onUpdate && !t && pt(e, "onUpdate"), a && e._repeat && !t && e.parent && pt(e, "onRepeat"), (r >= e._tDur || r < 0) && e.ratio === u && (u && Yt(e, 1), t || (pt(e, u ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = r)
    }, ca = function (e, r, t) {
        var i;
        if (t > r) for (i = e._first; i && i._start <= t;) {
            if (i.data === "isPause" && i._start > r) return i;
            i = i._next
        } else for (i = e._last; i && i._start >= t;) {
            if (i.data === "isPause" && i._start < r) return i;
            i = i._prev
        }
    }, ii = function (e, r, t, i) {
        var n = e._repeat, u = ke(r) || 0, s = e._tTime / e._tDur;
        return s && !i && (e._time *= u / e._dur), e._dur = u, e._tDur = n ? n < 0 ? 1e10 : ke(u * (n + 1) + e._rDelay * n) : u, s > 0 && !i ? vu(e, e._tTime = e._tDur * s) : e.parent && Mn(e), t || Sr(e.parent, e), e
    }, Uu = function (e) {
        return e instanceof He ? Sr(e) : ii(e, e._dur)
    }, ha = {_start: 0, endTime: Bi, totalDuration: Bi}, ft = function o(e, r, t) {
        var i = e.labels, n = e._recent || ha, u = e.duration() >= _t ? n.endTime(!1) : e._dur, s, a, l;
        return Fe(r) && (isNaN(r) || r in i) ? (a = r.charAt(0), l = r.substr(-1) === "%", s = r.indexOf("="), a === "<" || a === ">" ? (s >= 0 && (r = r.replace(/=/, "")), (a === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (l ? (s < 0 ? n : t).totalDuration() / 100 : 1)) : s < 0 ? (r in i || (i[r] = u), i[r]) : (a = parseFloat(r.charAt(s - 1) + r.substr(s + 1)), l && t && (a = a / 100 * (Me(t) ? t[0] : t).totalDuration()), s > 1 ? o(e, r.substr(0, s - 1), t) + a : u + a)) : r == null ? u : +r
    }, wi = function (e, r, t) {
        var i = Vt(r[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), u = r[n], s, a;
        if (i && (u.duration = r[1]), u.parent = t, e) {
            for (s = u, a = t; a && !("immediateRender" in s);) s = a.vars.defaults || {}, a = qe(a.vars.inherit) && a.parent;
            u.immediateRender = qe(s.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[n - 1]
        }
        return new Ce(r[0], u, r[n + 1])
    }, cr = function (e, r) {
        return e || e === 0 ? r(e) : r
    }, Gi = function (e, r, t) {
        return t < e ? e : t > r ? r : t
    }, Oe = function (e, r) {
        return !Fe(e) || !(r = ia.exec(e)) ? "" : r[1]
    }, Da = function (e, r, t) {
        return cr(t, function (i) {
            return Gi(e, r, i)
        })
    }, nu = [].slice, $s = function (e, r) {
        return e && Ut(e) && "length" in e && (!r && !e.length || e.length - 1 in e && Ut(e[0])) && !e.nodeType && e !== vt
    }, _a = function (e, r, t) {
        return t === void 0 && (t = []), e.forEach(function (i) {
            var n;
            return Fe(i) && !r || $s(i, 1) ? (n = t).push.apply(n, dt(i)) : t.push(i)
        }) || t
    }, dt = function (e, r, t) {
        return Fe(e) && !t && (tu || !ni()) ? nu.call((r || xu).querySelectorAll(e), 0) : Me(e) ? _a(e, t) : $s(e) ? nu.call(e, 0) : e ? [e] : []
    }, da = function (e) {
        return e = dt(e)[0] || yn("Invalid scope") || {}, function (r) {
            var t = e.current || e.nativeElement || e;
            return dt(r, t.querySelectorAll ? t : t === e ? yn("Invalid scope") || xu.createElement("div") : e)
        }
    }, Ws = function (e) {
        return e.sort(function () {
            return .5 - Math.random()
        })
    }, Gs = function (e) {
        if (ye(e)) return e;
        var r = Ut(e) ? e : {each: e}, t = Pr(r.ease), i = r.from || 0, n = parseFloat(r.base) || 0, u = {},
            s = i > 0 && i < 1, a = isNaN(i) || s, l = r.axis, f = i, h = i;
        return Fe(i) ? f = h = {
            center: .5,
            edges: .5,
            end: 1
        }[i] || 0 : !s && a && (f = i[0], h = i[1]), function (_, c, d) {
            var D = (d || r).length, p = u[D], g, x, C, F, E, b, w, S, v;
            if (!p) {
                if (v = r.grid === "auto" ? 0 : (r.grid || [1, _t])[1], !v) {
                    for (w = -_t; w < (w = d[v++].getBoundingClientRect().left) && v < D;) ;
                    v--
                }
                for (p = u[D] = [], g = a ? Math.min(v, D) * f - .5 : i % v, x = v === _t ? 0 : a ? D * h / v - .5 : i / v | 0, w = 0, S = _t, b = 0; b < D; b++) C = b % v - g, F = x - (b / v | 0), p[b] = E = l ? Math.abs(l === "y" ? F : C) : Ts(C * C + F * F), E > w && (w = E), E < S && (S = E);
                i === "random" && Ws(p), p.max = w - S, p.min = S, p.v = D = (parseFloat(r.amount) || parseFloat(r.each) * (v > D ? D - 1 : l ? l === "y" ? D / v : v : Math.max(v, D / v)) || 0) * (i === "edges" ? -1 : 1), p.b = D < 0 ? n - D : n, p.u = Oe(r.amount || r.each) || 0, t = t && D < 0 ? eo(t) : t
            }
            return D = (p[_] - p.min) / p.max || 0, ke(p.b + (t ? t(D) : D) * p.v) + p.u
        }
    }, uu = function (e) {
        var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (t) {
            var i = Math.round(parseFloat(t) / e) * e * r;
            return (i - i % 1) / r + (Vt(t) ? 0 : Oe(t))
        }
    }, Hs = function (e, r) {
        var t = Me(e), i, n;
        return !t && Ut(e) && (i = t = e.radius || _t, e.values ? (e = dt(e.values), (n = !Vt(e[0])) && (i *= i)) : e = uu(e.increment)), cr(r, t ? ye(e) ? function (u) {
            return n = e(u), Math.abs(n - u) <= i ? n : u
        } : function (u) {
            for (var s = parseFloat(n ? u.x : u), a = parseFloat(n ? u.y : 0), l = _t, f = 0, h = e.length, _, c; h--;) n ? (_ = e[h].x - s, c = e[h].y - a, _ = _ * _ + c * c) : _ = Math.abs(e[h] - s), _ < l && (l = _, f = h);
            return f = !i || l <= i ? e[f] : u, n || f === u || Vt(u) ? f : f + Oe(u)
        } : uu(e))
    }, qs = function (e, r, t, i) {
        return cr(Me(e) ? !r : t === !0 ? !!(t = 0) : !i, function () {
            return Me(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (r - e + t * .99)) / t) * t * i) / i
        })
    }, pa = function () {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return function (i) {
            return r.reduce(function (n, u) {
                return u(n)
            }, i)
        }
    }, ga = function (e, r) {
        return function (t) {
            return e(parseFloat(t)) + (r || Oe(t))
        }
    }, ma = function (e, r, t) {
        return Ks(e, r, 0, 1, t)
    }, js = function (e, r, t) {
        return cr(t, function (i) {
            return e[~~r(i)]
        })
    }, Ca = function o(e, r, t) {
        var i = r - e;
        return Me(e) ? js(e, o(0, e.length), r) : cr(t, function (n) {
            return (i + (n - e) % i) % i + e
        })
    }, ya = function o(e, r, t) {
        var i = r - e, n = i * 2;
        return Me(e) ? js(e, o(0, e.length - 1), r) : cr(t, function (u) {
            return u = (n + (u - e) % n) % n || 0, e + (u > i ? n - u : u)
        })
    }, Ri = function (e) {
        for (var r = 0, t = "", i, n, u, s; ~(i = e.indexOf("random(", r));) u = e.indexOf(")", i), s = e.charAt(i + 7) === "[", n = e.substr(i + 7, u - i - 7).match(s ? ks : eu), t += e.substr(r, i - r) + qs(s ? n : +n[0], s ? 0 : +n[1], +n[2] || 1e-5), r = u + 1;
        return t + e.substr(r, e.length - r)
    }, Ks = function (e, r, t, i, n) {
        var u = r - e, s = i - t;
        return cr(n, function (a) {
            return t + ((a - e) / u * s || 0)
        })
    }, Fa = function o(e, r, t, i) {
        var n = isNaN(e + r) ? 0 : function (c) {
            return (1 - c) * e + c * r
        };
        if (!n) {
            var u = Fe(e), s = {}, a, l, f, h, _;
            if (t === !0 && (i = 1) && (t = null), u) e = {p: e}, r = {p: r}; else if (Me(e) && !Me(r)) {
                for (f = [], h = e.length, _ = h - 2, l = 1; l < h; l++) f.push(o(e[l - 1], e[l]));
                h--, n = function (d) {
                    d *= h;
                    var D = Math.min(_, ~~d);
                    return f[D](d - D)
                }, t = r
            } else i || (e = Or(Me(e) ? [] : {}, e));
            if (!f) {
                for (a in r) Su.call(s, e, a, "get", r[a]);
                n = function (d) {
                    return Ou(d, s) || (u ? e.p : e)
                }
            }
        }
        return cr(t, n)
    }, $u = function (e, r, t) {
        var i = e.labels, n = _t, u, s, a;
        for (u in i) s = i[u] - r, s < 0 == !!t && s && n > (s = Math.abs(s)) && (a = u, n = s);
        return a
    }, pt = function (e, r, t) {
        var i = e.vars, n = i[r], u, s;
        if (!!n) return u = i[r + "Params"], s = i.callbackScope || e, t && nr.length && Fn(), u ? n.apply(s, u) : n.call(s)
    }, mi = function (e) {
        return Yt(e), e.scrollTrigger && e.scrollTrigger.kill(!1), e.progress() < 1 && pt(e, "onInterrupt"), e
    }, Gr, xa = function (e) {
        e = !e.name && e.default || e;
        var r = e.name, t = ye(e), i = r && !t && e.init ? function () {
                this._props = []
            } : e, n = {init: Bi, render: Ou, add: Su, kill: Ia, modifier: La, rawVars: 0},
            u = {targetTest: 0, get: 0, getSetter: ku, aliases: {}, register: 0};
        if (ni(), e !== i) {
            if (rt[r]) return;
            mt(i, mt(xn(e, n), u)), Or(i.prototype, Or(n, xn(e, u))), rt[i.prop = r] = i, e.targetTest && (ln.push(i), bu[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
        }
        Bs(r, i), e.register && e.register(Et, i, Ke)
    }, Z = 255, Ci = {
        aqua: [0, Z, Z],
        lime: [0, Z, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Z],
        navy: [0, 0, 128],
        white: [Z, Z, Z],
        olive: [128, 128, 0],
        yellow: [Z, Z, 0],
        orange: [Z, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Z, 0, 0],
        pink: [Z, 192, 203],
        cyan: [0, Z, Z],
        transparent: [Z, Z, Z, 0]
    }, Nn = function (e, r, t) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? r + (t - r) * e * 6 : e < .5 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r) * Z + .5 | 0
    }, Zs = function (e, r, t) {
        var i = e ? Vt(e) ? [e >> 16, e >> 8 & Z, e & Z] : 0 : Ci.black, n, u, s, a, l, f, h, _, c, d;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ci[e]) i = Ci[e]; else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1), u = e.charAt(2), s = e.charAt(3), e = "#" + n + n + u + u + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Z, i & Z, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Z, e & Z]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = d = e.match(eu), !r) a = +i[0] % 360 / 360, l = +i[1] / 100, f = +i[2] / 100, u = f <= .5 ? f * (l + 1) : f + l - f * l, n = f * 2 - u, i.length > 3 && (i[3] *= 1), i[0] = Nn(a + 1 / 3, n, u), i[1] = Nn(a, n, u), i[2] = Nn(a - 1 / 3, n, u); else if (~e.indexOf("=")) return i = e.match(Ps), t && i.length < 4 && (i[3] = 1), i
            } else i = e.match(eu) || Ci.transparent;
            i = i.map(Number)
        }
        return r && !d && (n = i[0] / Z, u = i[1] / Z, s = i[2] / Z, h = Math.max(n, u, s), _ = Math.min(n, u, s), f = (h + _) / 2, h === _ ? a = l = 0 : (c = h - _, l = f > .5 ? c / (2 - h - _) : c / (h + _), a = h === n ? (u - s) / c + (u < s ? 6 : 0) : h === u ? (s - n) / c + 2 : (n - u) / c + 4, a *= 60), i[0] = ~~(a + .5), i[1] = ~~(l * 100 + .5), i[2] = ~~(f * 100 + .5)), t && i.length < 4 && (i[3] = 1), i
    }, Qs = function (e) {
        var r = [], t = [], i = -1;
        return e.split(ur).forEach(function (n) {
            var u = n.match(Wr) || [];
            r.push.apply(r, u), t.push(i += u.length + 1)
        }), r.c = t, r
    }, Wu = function (e, r, t) {
        var i = "", n = (e + i).match(ur), u = r ? "hsla(" : "rgba(", s = 0, a, l, f, h;
        if (!n) return e;
        if (n = n.map(function (_) {
            return (_ = Zs(_, r, 1)) && u + (r ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")"
        }), t && (f = Qs(e), a = t.c, a.join(i) !== f.c.join(i))) for (l = e.replace(ur, "1").split(Wr), h = l.length - 1; s < h; s++) i += l[s] + (~a.indexOf(s) ? n.shift() || u + "0,0,0,0)" : (f.length ? f : n.length ? n : t).shift());
        if (!l) for (l = e.split(ur), h = l.length - 1; s < h; s++) i += l[s] + n[s];
        return i + l[h]
    }, ur = function () {
        var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
        for (e in Ci) o += "|" + e + "\\b";
        return new RegExp(o + ")", "gi")
    }(), Ea = /hsl[a]?\(/, Js = function (e) {
        var r = e.join(" "), t;
        if (ur.lastIndex = 0, ur.test(r)) return t = Ea.test(r), e[1] = Wu(e[1], t), e[0] = Wu(e[0], t, Qs(e[1])), !0
    }, zi, it = function () {
        var o = Date.now, e = 500, r = 33, t = o(), i = t, n = 1e3 / 240, u = n, s = [], a, l, f, h, _, c,
            d = function D(p) {
                var g = o() - i, x = p === !0, C, F, E, b;
                if (g > e && (t += g - r), i += g, E = i - t, C = E - u, (C > 0 || x) && (b = ++h.frame, _ = E - h.time * 1e3, h.time = E = E / 1e3, u += C + (C >= n ? 4 : n - C), F = 1), x || (a = l(D)), F) for (c = 0; c < s.length; c++) s[c](E, _, b, p)
            };
        return h = {
            time: 0, frame: 0, tick: function () {
                d(!0)
            }, deltaRatio: function (p) {
                return _ / (1e3 / (p || 60))
            }, wake: function () {
                Os && (!tu && vs() && (vt = tu = window, xu = vt.document || {}, ot.gsap = Et, (vt.gsapVersions || (vt.gsapVersions = [])).push(Et.version), Ms(Cn || vt.GreenSockGlobals || !vt.gsap && vt || {}), f = vt.requestAnimationFrame), a && h.sleep(), l = f || function (p) {
                    return setTimeout(p, u - h.time * 1e3 + 1 | 0)
                }, zi = 1, d(2))
            }, sleep: function () {
                (f ? vt.cancelAnimationFrame : clearTimeout)(a), zi = 0, l = Bi
            }, lagSmoothing: function (p, g) {
                e = p || 1 / Q, r = Math.min(g, e, 0)
            }, fps: function (p) {
                n = 1e3 / (p || 240), u = h.time * 1e3 + n
            }, add: function (p, g, x) {
                var C = g ? function (F, E, b, w) {
                    p(F, E, b, w), h.remove(C)
                } : p;
                return h.remove(p), s[x ? "unshift" : "push"](C), ni(), C
            }, remove: function (p, g) {
                ~(g = s.indexOf(p)) && s.splice(g, 1) && c >= g && c--
            }, _listeners: s
        }, h
    }(), ni = function () {
        return !zi && it.wake()
    }, X = {}, ba = /^[\d.\-M][\d.\-,\s]/, wa = /["']/g, Ta = function (e) {
        for (var r = {}, t = e.substr(1, e.length - 3).split(":"), i = t[0], n = 1, u = t.length, s, a, l; n < u; n++) a = t[n], s = n !== u - 1 ? a.lastIndexOf(",") : a.length, l = a.substr(0, s), r[i] = isNaN(l) ? l.replace(wa, "").trim() : +l, i = a.substr(s + 1).trim();
        return r
    }, va = function (e) {
        var r = e.indexOf("(") + 1, t = e.indexOf(")"), i = e.indexOf("(", r);
        return e.substring(r, ~i && i < t ? e.indexOf(")", t + 1) : t)
    }, Sa = function (e) {
        var r = (e + "").split("("), t = X[r[0]];
        return t && r.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [Ta(r[1])] : va(e).split(",").map(Is)) : X._CE && ba.test(e) ? X._CE("", e) : t
    }, eo = function (e) {
        return function (r) {
            return 1 - e(1 - r)
        }
    }, to = function o(e, r) {
        for (var t = e._first, i; t;) t instanceof He ? o(t, r) : t.vars.yoyoEase && (!t._yoyo || !t._repeat) && t._yoyo !== r && (t.timeline ? o(t.timeline, r) : (i = t._ease, t._ease = t._yEase, t._yEase = i, t._yoyo = r)), t = t._next
    }, Pr = function (e, r) {
        return e && (ye(e) ? e : X[e] || Sa(e)) || r
    }, zr = function (e, r, t, i) {
        t === void 0 && (t = function (a) {
            return 1 - r(1 - a)
        }), i === void 0 && (i = function (a) {
            return a < .5 ? r(a * 2) / 2 : 1 - r((1 - a) * 2) / 2
        });
        var n = {easeIn: r, easeOut: t, easeInOut: i}, u;
        return je(e, function (s) {
            X[s] = ot[s] = n, X[u = s.toLowerCase()] = t;
            for (var a in n) X[u + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = X[s + "." + a] = n[a]
        }), n
    }, ro = function (e) {
        return function (r) {
            return r < .5 ? (1 - e(1 - r * 2)) / 2 : .5 + e((r - .5) * 2) / 2
        }
    }, Yn = function o(e, r, t) {
        var i = r >= 1 ? r : 1, n = (t || (e ? .3 : .45)) / (r < 1 ? r : 1), u = n / Jn * (Math.asin(1 / i) || 0),
            s = function (f) {
                return f === 1 ? 1 : i * Math.pow(2, -10 * f) * ra((f - u) * n) + 1
            }, a = e === "out" ? s : e === "in" ? function (l) {
                return 1 - s(1 - l)
            } : ro(s);
        return n = Jn / n, a.config = function (l, f) {
            return o(e, l, f)
        }, a
    }, Xn = function o(e, r) {
        r === void 0 && (r = 1.70158);
        var t = function (u) {
            return u ? --u * u * ((r + 1) * u + r) + 1 : 0
        }, i = e === "out" ? t : e === "in" ? function (n) {
            return 1 - t(1 - n)
        } : ro(t);
        return i.config = function (n) {
            return o(e, n)
        }, i
    };
je("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, e) {
    var r = e < 5 ? e + 1 : e;
    zr(o + ",Power" + (r - 1), e ? function (t) {
        return Math.pow(t, r)
    } : function (t) {
        return t
    }, function (t) {
        return 1 - Math.pow(1 - t, r)
    }, function (t) {
        return t < .5 ? Math.pow(t * 2, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
    })
});
X.Linear.easeNone = X.none = X.Linear.easeIn;
zr("Elastic", Yn("in"), Yn("out"), Yn());
(function (o, e) {
    var r = 1 / e, t = 2 * r, i = 2.5 * r, n = function (s) {
        return s < r ? o * s * s : s < t ? o * Math.pow(s - 1.5 / e, 2) + .75 : s < i ? o * (s -= 2.25 / e) * s + .9375 : o * Math.pow(s - 2.625 / e, 2) + .984375
    };
    zr("Bounce", function (u) {
        return 1 - n(1 - u)
    }, n)
})(7.5625, 2.75);
zr("Expo", function (o) {
    return o ? Math.pow(2, 10 * (o - 1)) : 0
});
zr("Circ", function (o) {
    return -(Ts(1 - o * o) - 1)
});
zr("Sine", function (o) {
    return o === 1 ? 1 : -ta(o * Jo) + 1
});
zr("Back", Xn("in"), Xn("out"), Xn());
X.SteppedEase = X.steps = ot.SteppedEase = {
    config: function (e, r) {
        e === void 0 && (e = 1);
        var t = 1 / e, i = e + (r ? 0 : 1), n = r ? 1 : 0, u = 1 - Q;
        return function (s) {
            return ((i * Gi(0, u, s) | 0) + n) * t
        }
    }
};
ti.ease = X["quad.out"];
je("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (o) {
    return wu += o + "," + o + "Params,"
});
var io = function (e, r) {
    this.id = ea++, e._gsap = this, this.target = e, this.harness = r, this.get = r ? r.get : zs, this.set = r ? r.getSetter : ku
}, Li = function () {
    function o(r) {
        this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, ii(this, +r.duration, 1, 1), this.data = r.data, zi || it.wake()
    }

    var e = o.prototype;
    return e.delay = function (t) {
        return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
    }, e.duration = function (t) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }, e.totalDuration = function (t) {
        return arguments.length ? (this._dirty = 0, ii(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, e.totalTime = function (t, i) {
        if (ni(), !arguments.length) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (vu(this, t), !n._dp || n.parent || Xs(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Pt(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !i || this._initted && Math.abs(this._zTime) === Q || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Ls(this, t, i)), this
    }, e.time = function (t, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Vu(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), i) : this._time
    }, e.totalProgress = function (t, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, e.progress = function (t, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + Vu(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, e.iteration = function (t, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * n, i) : this._repeat ? ri(this._tTime, n) + 1 : 1
    }, e.timeScale = function (t) {
        if (!arguments.length) return this._rts === -Q ? 0 : this._rts;
        if (this._rts === t) return this;
        var i = this.parent && this._ts ? En(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0, this._ts = this._ps || t === -Q ? 0 : this._rts, this.totalTime(Gi(-this._delay, this._tDur, i), !0), Mn(this), oa(this)
    }, e.paused = function (t) {
        return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ni(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Q && (this._tTime -= Q)))), this) : this._ps
    }, e.startTime = function (t) {
        if (arguments.length) {
            this._start = t;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && Pt(i, this, t - this._delay), this
        }
        return this._start
    }, e.endTime = function (t) {
        return this._start + (qe(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, e.rawTime = function (t) {
        var i = this.parent || this._dp;
        return i ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? En(i.rawTime(t), this) : this._tTime : this._tTime
    }, e.globalTime = function (t) {
        for (var i = this, n = arguments.length ? t : i.rawTime(); i;) n = i._start + n / (i._ts || 1), i = i._dp;
        return n
    }, e.repeat = function (t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Uu(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, e.repeatDelay = function (t) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = t, Uu(this), i ? this.time(i) : this
        }
        return this._rDelay
    }, e.yoyo = function (t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo
    }, e.seek = function (t, i) {
        return this.totalTime(ft(this, t), qe(i))
    }, e.restart = function (t, i) {
        return this.play().totalTime(t ? -this._delay : 0, qe(i))
    }, e.play = function (t, i) {
        return t != null && this.seek(t, i), this.reversed(!1).paused(!1)
    }, e.reverse = function (t, i) {
        return t != null && this.seek(t || this.totalDuration(), i), this.reversed(!0).paused(!1)
    }, e.pause = function (t, i) {
        return t != null && this.seek(t, i), this.paused(!0)
    }, e.resume = function () {
        return this.paused(!1)
    }, e.reversed = function (t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Q : 0)), this) : this._rts < 0
    }, e.invalidate = function () {
        return this._initted = this._act = 0, this._zTime = -Q, this
    }, e.isActive = function () {
        var t = this.parent || this._dp, i = this._start, n;
        return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= i && n < this.endTime(!0) - Q)
    }, e.eventCallback = function (t, i, n) {
        var u = this.vars;
        return arguments.length > 1 ? (i ? (u[t] = i, n && (u[t + "Params"] = n), t === "onUpdate" && (this._onUpdate = i)) : delete u[t], this) : u[t]
    }, e.then = function (t) {
        var i = this;
        return new Promise(function (n) {
            var u = ye(t) ? t : Ns, s = function () {
                var l = i.then;
                i.then = null, ye(u) && (u = u(i)) && (u.then || u === i) && (i.then = l), n(u), i.then = l
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? s() : i._prom = s
        })
    }, e.kill = function () {
        mi(this)
    }, o
}();
mt(Li.prototype, {
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
    _zTime: -Q,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var He = function (o) {
    ws(e, o);

    function e(t, i) {
        var n;
        return t === void 0 && (t = {}), n = o.call(this, t) || this, n.labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = qe(t.sortChildren), te && Pt(t.parent || te, zt(n), i), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && Vs(zt(n), t.scrollTrigger), n
    }

    var r = e.prototype;
    return r.to = function (i, n, u) {
        return wi(0, arguments, this), this
    }, r.from = function (i, n, u) {
        return wi(1, arguments, this), this
    }, r.fromTo = function (i, n, u, s) {
        return wi(2, arguments, this), this
    }, r.set = function (i, n, u) {
        return n.duration = 0, n.parent = this, bi(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Ce(i, n, ft(this, u), 1), this
    }, r.call = function (i, n, u) {
        return Pt(this, Ce.delayedCall(0, i, n), u)
    }, r.staggerTo = function (i, n, u, s, a, l, f) {
        return u.duration = n, u.stagger = u.stagger || s, u.onComplete = l, u.onCompleteParams = f, u.parent = this, new Ce(i, u, ft(this, a)), this
    }, r.staggerFrom = function (i, n, u, s, a, l, f) {
        return u.runBackwards = 1, bi(u).immediateRender = qe(u.immediateRender), this.staggerTo(i, n, u, s, a, l, f)
    }, r.staggerFromTo = function (i, n, u, s, a, l, f, h) {
        return s.startAt = u, bi(s).immediateRender = qe(s.immediateRender), this.staggerTo(i, n, s, a, l, f, h)
    }, r.render = function (i, n, u) {
        var s = this._time, a = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, f = i <= 0 ? 0 : ke(i),
            h = this._zTime < 0 != i < 0 && (this._initted || !l), _, c, d, D, p, g, x, C, F, E, b, w;
        if (this !== te && f > a && i >= 0 && (f = a), f !== this._tTime || u || h) {
            if (s !== this._time && l && (f += this._time - s, i += this._time - s), _ = f, F = this._start, C = this._ts, g = !C, h && (l || (s = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
                if (b = this._yoyo, p = l + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(p * 100 + i, n, u);
                if (_ = ke(f % p), f === a ? (D = this._repeat, _ = l) : (D = ~~(f / p), D && D === f / p && (_ = l, D--), _ > l && (_ = l)), E = ri(this._tTime, p), !s && this._tTime && E !== D && (E = D), b && D & 1 && (_ = l - _, w = 1), D !== E && !this._lock) {
                    var S = b && E & 1, v = S === (b && D & 1);
                    if (D < E && (S = !S), s = S ? 0 : l, this._lock = 1, this.render(s || (w ? 0 : ke(D * p)), n, !l)._lock = 0, this._tTime = f, !n && this.parent && pt(this, "onRepeat"), this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1), s && s !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (l = this._dur, a = this._tDur, v && (this._lock = 2, s = S ? l : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !w && this.invalidate()), this._lock = 0, !this._ts && !g) return this;
                    to(this, w)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (x = ca(this, ke(s), ke(_)), x && (f -= _ - (_ = x._start))), this._tTime = f, this._time = _, this._act = !C, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && _ && !n && (pt(this, "onStart"), this._tTime !== f)) return this;
            if (_ >= s && i >= 0) for (c = this._first; c;) {
                if (d = c._next, (c._act || _ >= c._start) && c._ts && x !== c) {
                    if (c.parent !== this) return this.render(i, n, u);
                    if (c.render(c._ts > 0 ? (_ - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (_ - c._start) * c._ts, n, u), _ !== this._time || !this._ts && !g) {
                        x = 0, d && (f += this._zTime = -Q);
                        break
                    }
                }
                c = d
            } else {
                c = this._last;
                for (var P = i < 0 ? i : _; c;) {
                    if (d = c._prev, (c._act || P <= c._end) && c._ts && x !== c) {
                        if (c.parent !== this) return this.render(i, n, u);
                        if (c.render(c._ts > 0 ? (P - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (P - c._start) * c._ts, n, u), _ !== this._time || !this._ts && !g) {
                            x = 0, d && (f += this._zTime = P ? -Q : Q);
                            break
                        }
                    }
                    c = d
                }
            }
            if (x && !n && (this.pause(), x.render(_ >= s ? 0 : -Q)._zTime = _ >= s ? 1 : -1, this._ts)) return this._start = F, Mn(this), this.render(i, n, u);
            this._onUpdate && !n && pt(this, "onUpdate", !0), (f === a && this._tTime >= this.totalDuration() || !f && s) && (F === this._start || Math.abs(C) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (f === a && this._ts > 0 || !f && this._ts < 0) && Yt(this, 1), !n && !(i < 0 && !s) && (f || s || !a) && (pt(this, f === a && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < a && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, r.add = function (i, n) {
        var u = this;
        if (Vt(n) || (n = ft(this, n, i)), !(i instanceof Li)) {
            if (Me(i)) return i.forEach(function (s) {
                return u.add(s, n)
            }), this;
            if (Fe(i)) return this.addLabel(i, n);
            if (ye(i)) i = Ce.delayedCall(0, i); else return this
        }
        return this !== i ? Pt(this, i, n) : this
    }, r.getChildren = function (i, n, u, s) {
        i === void 0 && (i = !0), n === void 0 && (n = !0), u === void 0 && (u = !0), s === void 0 && (s = -_t);
        for (var a = [], l = this._first; l;) l._start >= s && (l instanceof Ce ? n && a.push(l) : (u && a.push(l), i && a.push.apply(a, l.getChildren(!0, n, u)))), l = l._next;
        return a
    }, r.getById = function (i) {
        for (var n = this.getChildren(1, 1, 1), u = n.length; u--;) if (n[u].vars.id === i) return n[u]
    }, r.remove = function (i) {
        return Fe(i) ? this.removeLabel(i) : ye(i) ? this.killTweensOf(i) : (On(this, i), i === this._recent && (this._recent = this._last), Sr(this))
    }, r.totalTime = function (i, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ke(it.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), o.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime
    }, r.addLabel = function (i, n) {
        return this.labels[i] = ft(this, n), this
    }, r.removeLabel = function (i) {
        return delete this.labels[i], this
    }, r.addPause = function (i, n, u) {
        var s = Ce.delayedCall(0, n || Bi, u);
        return s.data = "isPause", this._hasPause = 1, Pt(this, s, ft(this, i))
    }, r.removePause = function (i) {
        var n = this._first;
        for (i = ft(this, i); n;) n._start === i && n.data === "isPause" && Yt(n), n = n._next
    }, r.killTweensOf = function (i, n, u) {
        for (var s = this.getTweensOf(i, u), a = s.length; a--;) Jt !== s[a] && s[a].kill(i, n);
        return this
    }, r.getTweensOf = function (i, n) {
        for (var u = [], s = dt(i), a = this._first, l = Vt(n), f; a;) a instanceof Ce ? na(a._targets, s) && (l ? (!Jt || a._initted && a._ts) && a.globalTime(0) <= n && a.globalTime(a.totalDuration()) > n : !n || a.isActive()) && u.push(a) : (f = a.getTweensOf(s, n)).length && u.push.apply(u, f), a = a._next;
        return u
    }, r.tweenTo = function (i, n) {
        n = n || {};
        var u = this, s = ft(u, i), a = n, l = a.startAt, f = a.onStart, h = a.onStartParams, _ = a.immediateRender, c,
            d = Ce.to(u, mt({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: s,
                overwrite: "auto",
                duration: n.duration || Math.abs((s - (l && "time" in l ? l.time : u._time)) / u.timeScale()) || Q,
                onStart: function () {
                    if (u.pause(), !c) {
                        var p = n.duration || Math.abs((s - (l && "time" in l ? l.time : u._time)) / u.timeScale());
                        d._dur !== p && ii(d, p, 0, 1).render(d._time, !0, !0), c = 1
                    }
                    f && f.apply(d, h || [])
                }
            }, n));
        return _ ? d.render(0) : d
    }, r.tweenFromTo = function (i, n, u) {
        return this.tweenTo(n, mt({startAt: {time: ft(this, i)}}, u))
    }, r.recent = function () {
        return this._recent
    }, r.nextLabel = function (i) {
        return i === void 0 && (i = this._time), $u(this, ft(this, i))
    }, r.previousLabel = function (i) {
        return i === void 0 && (i = this._time), $u(this, ft(this, i), 1)
    }, r.currentLabel = function (i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Q)
    }, r.shiftChildren = function (i, n, u) {
        u === void 0 && (u = 0);
        for (var s = this._first, a = this.labels, l; s;) s._start >= u && (s._start += i, s._end += i), s = s._next;
        if (n) for (l in a) a[l] >= u && (a[l] += i);
        return Sr(this)
    }, r.invalidate = function () {
        var i = this._first;
        for (this._lock = 0; i;) i.invalidate(), i = i._next;
        return o.prototype.invalidate.call(this)
    }, r.clear = function (i) {
        i === void 0 && (i = !0);
        for (var n = this._first, u; n;) u = n._next, this.remove(n), n = u;
        return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Sr(this)
    }, r.totalDuration = function (i) {
        var n = 0, u = this, s = u._last, a = _t, l, f, h;
        if (arguments.length) return u.timeScale((u._repeat < 0 ? u.duration() : u.totalDuration()) / (u.reversed() ? -i : i));
        if (u._dirty) {
            for (h = u.parent; s;) l = s._prev, s._dirty && s.totalDuration(), f = s._start, f > a && u._sort && s._ts && !u._lock ? (u._lock = 1, Pt(u, s, f - s._delay, 1)._lock = 0) : a = f, f < 0 && s._ts && (n -= f, (!h && !u._dp || h && h.smoothChildTiming) && (u._start += f / u._ts, u._time -= f, u._tTime -= f), u.shiftChildren(-f, !1, -1 / 0), a = 0), s._end > n && s._ts && (n = s._end), s = l;
            ii(u, u === te && u._time > n ? u._time : n, 1, 1), u._dirty = 0
        }
        return u._tDur
    }, e.updateRoot = function (i) {
        if (te._ts && (Ls(te, En(i, te)), Rs = it.frame), it.frame >= Yu) {
            Yu += st.autoSleep || 120;
            var n = te._first;
            if ((!n || !n._ts) && st.autoSleep && it._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || it.sleep()
            }
        }
    }, e
}(Li);
mt(He.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
var Pa = function (e, r, t, i, n, u, s) {
    var a = new Ke(this._pt, e, r, 0, 1, lo, null, n), l = 0, f = 0, h, _, c, d, D, p, g, x;
    for (a.b = t, a.e = i, t += "", i += "", (g = ~i.indexOf("random(")) && (i = Ri(i)), u && (x = [t, i], u(x, e, r), t = x[0], i = x[1]), _ = t.match(Ln) || []; h = Ln.exec(i);) d = h[0], D = i.substring(l, h.index), c ? c = (c + 1) % 5 : D.substr(-5) === "rgba(" && (c = 1), d !== _[f++] && (p = parseFloat(_[f - 1]) || 0, a._pt = {
        _next: a._pt,
        p: D || f === 1 ? D : ",",
        s: p,
        c: d.charAt(1) === "=" ? jr(p, d) - p : parseFloat(d) - p,
        m: c && c < 4 ? Math.round : 0
    }, l = Ln.lastIndex);
    return a.c = l < i.length ? i.substring(l, i.length) : "", a.fp = s, (As.test(i) || g) && (a.e = 0), this._pt = a, a
}, Su = function (e, r, t, i, n, u, s, a, l) {
    ye(i) && (i = i(n || 0, e, u));
    var f = e[r],
        h = t !== "get" ? t : ye(f) ? l ? e[r.indexOf("set") || !ye(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](l) : e[r]() : f,
        _ = ye(f) ? l ? Ba : oo : Au, c;
    if (Fe(i) && (~i.indexOf("random(") && (i = Ri(i)), i.charAt(1) === "=" && (c = jr(h, i) + (Oe(h) || 0), (c || c === 0) && (i = c))), h !== i || su) return !isNaN(h * i) && i !== "" ? (c = new Ke(this._pt, e, r, +h || 0, i - (h || 0), typeof f == "boolean" ? za : ao, 0, _), l && (c.fp = l), s && c.modifier(s, this, e), this._pt = c) : (!f && !(r in e) && Eu(r, i), Pa.call(this, e, r, h, i, _, a || st.stringFilter, l))
}, Aa = function (e, r, t, i, n) {
    if (ye(e) && (e = Ti(e, n, r, t, i)), !Ut(e) || e.style && e.nodeType || Me(e) || Ss(e)) return Fe(e) ? Ti(e, n, r, t, i) : e;
    var u = {}, s;
    for (s in e) u[s] = Ti(e[s], n, r, t, i);
    return u
}, no = function (e, r, t, i, n, u) {
    var s, a, l, f;
    if (rt[e] && (s = new rt[e]).init(n, s.rawVars ? r[e] : Aa(r[e], i, n, u, t), t, i, u) !== !1 && (t._pt = a = new Ke(t._pt, n, e, 0, 1, s.render, s, 0, s.priority), t !== Gr)) for (l = t._ptLookup[t._targets.indexOf(n)], f = s._props.length; f--;) l[s._props[f]] = a;
    return s
}, Jt, su, Pu = function o(e, r) {
    var t = e.vars, i = t.ease, n = t.startAt, u = t.immediateRender, s = t.lazy, a = t.onUpdate, l = t.onUpdateParams,
        f = t.callbackScope, h = t.runBackwards, _ = t.yoyoEase, c = t.keyframes, d = t.autoRevert, D = e._dur,
        p = e._startAt, g = e._targets, x = e.parent, C = x && x.data === "nested" ? x.parent._targets : g,
        F = e._overwrite === "auto" && !yu, E = e.timeline, b, w, S, v, P, L, O, G, k, N, R, $, K;
    if (E && (!c || !i) && (i = "none"), e._ease = Pr(i, ti.ease), e._yEase = _ ? eo(Pr(_ === !0 ? i : _, ti.ease)) : 0, _ && e._yoyo && !e._repeat && (_ = e._yEase, e._yEase = e._ease, e._ease = _), e._from = !E && !!t.runBackwards, !E || c && !t.stagger) {
        if (G = g[0] ? vr(g[0]).harness : 0, $ = G && t[G.prop], b = xn(t, bu), p && (Yt(p.render(-1, !0)), p._lazy = 0), n) if (Yt(e._startAt = Ce.set(g, mt({
            data: "isStart",
            overwrite: !1,
            parent: x,
            immediateRender: !0,
            lazy: qe(s),
            startAt: null,
            delay: 0,
            onUpdate: a,
            onUpdateParams: l,
            callbackScope: f,
            stagger: 0
        }, n))), r < 0 && !u && !d && e._startAt.render(-1, !0), u) {
            if (r > 0 && !d && (e._startAt = 0), D && r <= 0) {
                r && (e._zTime = r);
                return
            }
        } else d === !1 && (e._startAt = 0); else if (h && D) {
            if (p) !d && (e._startAt = 0); else if (r && (u = !1), S = mt({
                overwrite: !1,
                data: "isFromStart",
                lazy: u && qe(s),
                immediateRender: u,
                stagger: 0,
                parent: x
            }, b), $ && (S[G.prop] = $), Yt(e._startAt = Ce.set(g, S)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, !u) o(e._startAt, Q); else if (!r) return
        }
        for (e._pt = e._ptCache = 0, s = D && qe(s) || s && !D, w = 0; w < g.length; w++) {
            if (P = g[w], O = P._gsap || Tu(g)[w]._gsap, e._ptLookup[w] = N = {}, ru[O.id] && nr.length && Fn(), R = C === g ? w : C.indexOf(P), G && (k = new G).init(P, $ || b, e, R, C) !== !1 && (e._pt = v = new Ke(e._pt, P, k.name, 0, 1, k.render, k, 0, k.priority), k._props.forEach(function (Qe) {
                N[Qe] = v
            }), k.priority && (L = 1)), !G || $) for (S in b) rt[S] && (k = no(S, b, e, R, P, C)) ? k.priority && (L = 1) : N[S] = v = Su.call(e, P, S, "get", b[S], R, C, 0, t.stringFilter);
            e._op && e._op[w] && e.kill(P, e._op[w]), F && e._pt && (Jt = e, te.killTweensOf(P, N, e.globalTime(r)), K = !e.parent, Jt = 0), e._pt && s && (ru[O.id] = 1)
        }
        L && fo(e), e._onInit && e._onInit(e)
    }
    e._onUpdate = a, e._initted = (!e._op || e._pt) && !K, c && r <= 0 && E.render(_t, !0, !0)
}, ka = function (e, r, t, i, n, u, s) {
    var a = (e._pt && e._ptCache || (e._ptCache = {}))[r], l, f, h;
    if (!a) for (a = e._ptCache[r] = [], f = e._ptLookup, h = e._targets.length; h--;) {
        if (l = f[h][r], l && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== r;) l = l._next;
        if (!l) return su = 1, e.vars[r] = "+=0", Pu(e, s), su = 0, 1;
        a.push(l)
    }
    for (h = a.length; h--;) l = a[h], l.s = (i || i === 0) && !n ? i : l.s + (i || 0) + u * l.c, l.c = t - l.s, l.e && (l.e = fe(t) + Oe(l.e)), l.b && (l.b = l.s + Oe(l.b))
}, Oa = function (e, r) {
    var t = e[0] ? vr(e[0]).harness : 0, i = t && t.aliases, n, u, s, a;
    if (!i) return r;
    n = Or({}, r);
    for (u in i) if (u in n) for (a = i[u].split(","), s = a.length; s--;) n[a[s]] = n[u];
    return n
}, Ma = function (e, r, t, i) {
    var n = r.ease || i || "power1.inOut", u, s;
    if (Me(r)) s = t[e] || (t[e] = []), r.forEach(function (a, l) {
        return s.push({t: l / (r.length - 1) * 100, v: a, e: n})
    }); else for (u in r) s = t[u] || (t[u] = []), u === "ease" || s.push({t: parseFloat(e), v: r[u], e: n})
}, Ti = function (e, r, t, i, n) {
    return ye(e) ? e.call(r, t, i, n) : Fe(e) && ~e.indexOf("random(") ? Ri(e) : e
}, uo = wu + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", so = {};
je(uo + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
    return so[o] = 1
});
var Ce = function (o) {
    ws(e, o);

    function e(t, i, n, u) {
        var s;
        typeof i == "number" && (n.duration = i, i = n, n = null), s = o.call(this, u ? i : bi(i)) || this;
        var a = s.vars, l = a.duration, f = a.delay, h = a.immediateRender, _ = a.stagger, c = a.overwrite,
            d = a.keyframes, D = a.defaults, p = a.scrollTrigger, g = a.yoyoEase, x = i.parent || te,
            C = (Me(t) || Ss(t) ? Vt(t[0]) : "length" in i) ? [t] : dt(t), F, E, b, w, S, v, P, L;
        if (s._targets = C.length ? Tu(C) : yn("GSAP target " + t + " not found. https://greensock.com", !st.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = c, d || _ || qi(l) || qi(f)) {
            if (i = s.vars, F = s.timeline = new He({
                data: "nested",
                defaults: D || {}
            }), F.kill(), F.parent = F._dp = zt(s), F._start = 0, _ || qi(l) || qi(f)) {
                if (w = C.length, P = _ && Gs(_), Ut(_)) for (S in _) ~uo.indexOf(S) && (L || (L = {}), L[S] = _[S]);
                for (E = 0; E < w; E++) b = xn(i, so), b.stagger = 0, g && (b.yoyoEase = g), L && Or(b, L), v = C[E], b.duration = +Ti(l, zt(s), E, v, C), b.delay = (+Ti(f, zt(s), E, v, C) || 0) - s._delay, !_ && w === 1 && b.delay && (s._delay = f = b.delay, s._start += f, b.delay = 0), F.to(v, b, P ? P(E, v, C) : 0), F._ease = X.none;
                F.duration() ? l = f = 0 : s.timeline = 0
            } else if (d) {
                bi(mt(F.vars.defaults, {ease: "none"})), F._ease = Pr(d.ease || i.ease || "none");
                var O = 0, G, k, N;
                if (Me(d)) d.forEach(function (R) {
                    return F.to(C, R, ">")
                }); else {
                    b = {};
                    for (S in d) S === "ease" || S === "easeEach" || Ma(S, d[S], b, d.easeEach);
                    for (S in b) for (G = b[S].sort(function (R, $) {
                        return R.t - $.t
                    }), O = 0, E = 0; E < G.length; E++) k = G[E], N = {
                        ease: k.e,
                        duration: (k.t - (E ? G[E - 1].t : 0)) / 100 * l
                    }, N[S] = k.v, F.to(C, N, O), O += N.duration;
                    F.duration() < l && F.to({}, {duration: l - F.duration()})
                }
            }
            l || s.duration(l = F.duration())
        } else s.timeline = 0;
        return c === !0 && !yu && (Jt = zt(s), te.killTweensOf(C), Jt = 0), Pt(x, zt(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), (h || !l && !d && s._start === ke(x._time) && qe(h) && aa(zt(s)) && x.data !== "nested") && (s._tTime = -Q, s.render(Math.max(0, -f))), p && Vs(zt(s), p), s
    }

    var r = e.prototype;
    return r.render = function (i, n, u) {
        var s = this._time, a = this._tDur, l = this._dur, f = i > a - Q && i >= 0 ? a : i < Q ? 0 : i, h, _, c, d, D,
            p, g, x, C;
        if (!l) fa(this, i, n, u); else if (f !== this._tTime || !i || u || !this._initted && this._tTime || this._startAt && this._zTime < 0 != i < 0) {
            if (h = f, x = this.timeline, this._repeat) {
                if (d = l + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(d * 100 + i, n, u);
                if (h = ke(f % d), f === a ? (c = this._repeat, h = l) : (c = ~~(f / d), c && c === f / d && (h = l, c--), h > l && (h = l)), p = this._yoyo && c & 1, p && (C = this._yEase, h = l - h), D = ri(this._tTime, d), h === s && !u && this._initted) return this._tTime = f, this;
                c !== D && (x && this._yEase && to(x, p), this.vars.repeatRefresh && !p && !this._lock && (this._lock = u = 1, this.render(ke(d * c), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Us(this, i < 0 ? i : h, u, n)) return this._tTime = 0, this;
                if (s !== this._time) return this;
                if (l !== this._dur) return this.render(i, n, u)
            }
            if (this._tTime = f, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = g = (C || this._ease)(h / l), this._from && (this.ratio = g = 1 - g), h && !s && !n && (pt(this, "onStart"), this._tTime !== f)) return this;
            for (_ = this._pt; _;) _.r(g, _.d), _ = _._next;
            x && x.render(i < 0 ? i : !h && p ? -Q : x._dur * x._ease(h / this._dur), n, u) || this._startAt && (this._zTime = i), this._onUpdate && !n && (i < 0 && this._startAt && this._startAt.render(i, !0, u), pt(this, "onUpdate")), this._repeat && c !== D && this.vars.onRepeat && !n && this.parent && pt(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (i < 0 && this._startAt && !this._onUpdate && this._startAt.render(i, !0, !0), (i || !l) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Yt(this, 1), !n && !(i < 0 && !s) && (f || s) && (pt(this, f === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < a && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, r.targets = function () {
        return this._targets
    }, r.invalidate = function () {
        return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), o.prototype.invalidate.call(this)
    }, r.resetTo = function (i, n, u, s) {
        zi || it.wake(), this._ts || this.play();
        var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
        return this._initted || Pu(this, a), l = this._ease(a / this._dur), ka(this, i, n, u, s, l, a) ? this.resetTo(i, n, u, s) : (vu(this, 0), this.parent || Ys(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, r.kill = function (i, n) {
        if (n === void 0 && (n = "all"), !i && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? mi(this) : this;
        if (this.timeline) {
            var u = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, n, Jt && Jt.vars.overwrite !== !0)._first || mi(this), this.parent && u !== this.timeline.totalDuration() && ii(this, this._dur * this.timeline._tDur / u, 0, 1), this
        }
        var s = this._targets, a = i ? dt(i) : s, l = this._ptLookup, f = this._pt, h, _, c, d, D, p, g;
        if ((!n || n === "all") && sa(s, a)) return n === "all" && (this._pt = 0), mi(this);
        for (h = this._op = this._op || [], n !== "all" && (Fe(n) && (D = {}, je(n, function (x) {
            return D[x] = 1
        }), n = D), n = Oa(s, n)), g = s.length; g--;) if (~a.indexOf(s[g])) {
            _ = l[g], n === "all" ? (h[g] = n, d = _, c = {}) : (c = h[g] = h[g] || {}, d = n);
            for (D in d) p = _ && _[D], p && ((!("kill" in p.d) || p.d.kill(D) === !0) && On(this, p, "_pt"), delete _[D]), c !== "all" && (c[D] = 1)
        }
        return this._initted && !this._pt && f && mi(this), this
    }, e.to = function (i, n) {
        return new e(i, n, arguments[2])
    }, e.from = function (i, n) {
        return wi(1, arguments)
    }, e.delayedCall = function (i, n, u, s) {
        return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: u,
            onReverseCompleteParams: u,
            callbackScope: s
        })
    }, e.fromTo = function (i, n, u) {
        return wi(2, arguments)
    }, e.set = function (i, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n)
    }, e.killTweensOf = function (i, n, u) {
        return te.killTweensOf(i, n, u)
    }, e
}(Li);
mt(Ce.prototype, {_targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0});
je("staggerTo,staggerFrom,staggerFromTo", function (o) {
    Ce[o] = function () {
        var e = new He, r = nu.call(arguments, 0);
        return r.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, r)
    }
});
var Au = function (e, r, t) {
    return e[r] = t
}, oo = function (e, r, t) {
    return e[r](t)
}, Ba = function (e, r, t, i) {
    return e[r](i.fp, t)
}, Ra = function (e, r, t) {
    return e.setAttribute(r, t)
}, ku = function (e, r) {
    return ye(e[r]) ? oo : Fu(e[r]) && e.setAttribute ? Ra : Au
}, ao = function (e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
}, za = function (e, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * e), r)
}, lo = function (e, r) {
    var t = r._pt, i = "";
    if (!e && r.b) i = r.b; else if (e === 1 && r.e) i = r.e; else {
        for (; t;) i = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + i, t = t._next;
        i += r.c
    }
    r.set(r.t, r.p, i, r)
}, Ou = function (e, r) {
    for (var t = r._pt; t;) t.r(e, t.d), t = t._next
}, La = function (e, r, t, i) {
    for (var n = this._pt, u; n;) u = n._next, n.p === i && n.modifier(e, r, t), n = u
}, Ia = function (e) {
    for (var r = this._pt, t, i; r;) i = r._next, r.p === e && !r.op || r.op === e ? On(this, r, "_pt") : r.dep || (t = 1), r = i;
    return !t
}, Na = function (e, r, t, i) {
    i.mSet(e, r, i.m.call(i.tween, t, i.mt), i)
}, fo = function (e) {
    for (var r = e._pt, t, i, n, u; r;) {
        for (t = r._next, i = n; i && i.pr > r.pr;) i = i._next;
        (r._prev = i ? i._prev : u) ? r._prev._next = r : n = r, (r._next = i) ? i._prev = r : u = r, r = t
    }
    e._pt = n
}, Ke = function () {
    function o(r, t, i, n, u, s, a, l, f) {
        this.t = t, this.s = n, this.c = u, this.p = i, this.r = s || ao, this.d = a || this, this.set = l || Au, this.pr = f || 0, this._next = r, r && (r._prev = this)
    }

    var e = o.prototype;
    return e.modifier = function (t, i, n) {
        this.mSet = this.mSet || this.set, this.set = Na, this.m = t, this.mt = n, this.tween = i
    }, o
}();
je(wu + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (o) {
    return bu[o] = 1
});
ot.TweenMax = ot.TweenLite = Ce;
ot.TimelineLite = ot.TimelineMax = He;
te = new He({sortChildren: !1, defaults: ti, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0});
st.stringFilter = Js;
var bn = {
    registerPlugin: function () {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        r.forEach(function (i) {
            return xa(i)
        })
    },
    timeline: function (e) {
        return new He(e)
    },
    getTweensOf: function (e, r) {
        return te.getTweensOf(e, r)
    },
    getProperty: function (e, r, t, i) {
        Fe(e) && (e = dt(e)[0]);
        var n = vr(e || {}).get, u = t ? Ns : Is;
        return t === "native" && (t = ""), e && (r ? u((rt[r] && rt[r].get || n)(e, r, t, i)) : function (s, a, l) {
            return u((rt[s] && rt[s].get || n)(e, s, a, l))
        })
    },
    quickSetter: function (e, r, t) {
        if (e = dt(e), e.length > 1) {
            var i = e.map(function (f) {
                return Et.quickSetter(f, r, t)
            }), n = i.length;
            return function (f) {
                for (var h = n; h--;) i[h](f)
            }
        }
        e = e[0] || {};
        var u = rt[r], s = vr(e), a = s.harness && (s.harness.aliases || {})[r] || r, l = u ? function (f) {
            var h = new u;
            Gr._pt = 0, h.init(e, t ? f + t : f, Gr, 0, [e]), h.render(1, h), Gr._pt && Ou(1, Gr)
        } : s.set(e, a);
        return u ? l : function (f) {
            return l(e, a, t ? f + t : f, s, 1)
        }
    },
    quickTo: function (e, r, t) {
        var i, n = Et.to(e, Or((i = {}, i[r] = "+=0.1", i.paused = !0, i), t || {})), u = function (a, l, f) {
            return n.resetTo(r, a, l, f)
        };
        return u.tween = n, u
    },
    isTweening: function (e) {
        return te.getTweensOf(e, !0).length > 0
    },
    defaults: function (e) {
        return e && e.ease && (e.ease = Pr(e.ease, ti.ease)), Xu(ti, e || {})
    },
    config: function (e) {
        return Xu(st, e || {})
    },
    registerEffect: function (e) {
        var r = e.name, t = e.effect, i = e.plugins, n = e.defaults, u = e.extendTimeline;
        (i || "").split(",").forEach(function (s) {
            return s && !rt[s] && !ot[s] && yn(r + " effect requires " + s + " plugin.")
        }), In[r] = function (s, a, l) {
            return t(dt(s), mt(a || {}, n), l)
        }, u && (He.prototype[r] = function (s, a, l) {
            return this.add(In[r](s, Ut(a) ? a : (l = a) && {}, this), l)
        })
    },
    registerEase: function (e, r) {
        X[e] = Pr(r)
    },
    parseEase: function (e, r) {
        return arguments.length ? Pr(e, r) : X
    },
    getById: function (e) {
        return te.getById(e)
    },
    exportRoot: function (e, r) {
        e === void 0 && (e = {});
        var t = new He(e), i, n;
        for (t.smoothChildTiming = qe(e.smoothChildTiming), te.remove(t), t._dp = 0, t._time = t._tTime = te._time, i = te._first; i;) n = i._next, (r || !(!i._dur && i instanceof Ce && i.vars.onComplete === i._targets[0])) && Pt(t, i, i._start - i._delay), i = n;
        return Pt(te, t, 0), t
    },
    utils: {
        wrap: Ca,
        wrapYoyo: ya,
        distribute: Gs,
        random: qs,
        snap: Hs,
        normalize: ma,
        getUnit: Oe,
        clamp: Da,
        splitColor: Zs,
        toArray: dt,
        selector: da,
        mapRange: Ks,
        pipe: pa,
        unitize: ga,
        interpolate: Fa,
        shuffle: Ws
    },
    install: Ms,
    effects: In,
    ticker: it,
    updateRoot: He.updateRoot,
    plugins: rt,
    globalTimeline: te,
    core: {
        PropTween: Ke,
        globals: Bs,
        Tween: Ce,
        Timeline: He,
        Animation: Li,
        getCache: vr,
        _removeLinkedListItem: On,
        suppressOverwrites: function (e) {
            return yu = e
        }
    }
};
je("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
    return bn[o] = Ce[o]
});
it.add(He.updateRoot);
Gr = bn.to({}, {duration: 0});
var Ya = function (e, r) {
    for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r;) t = t._next;
    return t
}, Xa = function (e, r) {
    var t = e._targets, i, n, u;
    for (i in r) for (n = t.length; n--;) u = e._ptLookup[n][i], u && (u = u.d) && (u._pt && (u = Ya(u, i)), u && u.modifier && u.modifier(r[i], e, t[n], i))
}, Vn = function (e, r) {
    return {
        name: e, rawVars: 1, init: function (i, n, u) {
            u._onInit = function (s) {
                var a, l;
                if (Fe(n) && (a = {}, je(n, function (f) {
                    return a[f] = 1
                }), n = a), r) {
                    a = {};
                    for (l in n) a[l] = r(n[l]);
                    n = a
                }
                Xa(s, n)
            }
        }
    }
}, Et = bn.registerPlugin({
    name: "attr", init: function (e, r, t, i, n) {
        var u, s;
        for (u in r) s = this.add(e, "setAttribute", (e.getAttribute(u) || 0) + "", r[u], i, n, 0, 0, u), s && (s.op = u), this._props.push(u)
    }
}, {
    name: "endArray", init: function (e, r) {
        for (var t = r.length; t--;) this.add(e, t, e[t] || 0, r[t])
    }
}, Vn("roundProps", uu), Vn("modifiers"), Vn("snap", Hs)) || bn;
Ce.version = He.version = Et.version = "3.10.4";
Os = 1;
vs() && ni();
X.Power0;
X.Power1;
X.Power2;
X.Power3;
X.Power4;
X.Linear;
X.Quad;
X.Cubic;
X.Quart;
X.Quint;
X.Strong;
X.Elastic;
X.Back;
X.SteppedEase;
X.Bounce;
X.Sine;
X.Expo;
X.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Gu, er, Kr, Mu, br, Hu, Va = function () {
        return typeof window != "undefined"
    }, or = {}, mr = 180 / Math.PI, Zr = Math.PI / 180, Xr = Math.atan2, qu = 1e8, co = /([A-Z])/g,
    Ua = /(left|right|width|margin|padding|x)/i, $a = /[\s,\(]\S/,
    tr = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, ho = function (e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    }, Wa = function (e, r) {
        return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    }, Ga = function (e, r) {
        return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r)
    }, Ha = function (e, r) {
        var t = r.s + r.c * e;
        r.set(r.t, r.p, ~~(t + (t < 0 ? -.5 : .5)) + r.u, r)
    }, Do = function (e, r) {
        return r.set(r.t, r.p, e ? r.e : r.b, r)
    }, _o = function (e, r) {
        return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
    }, qa = function (e, r, t) {
        return e.style[r] = t
    }, ja = function (e, r, t) {
        return e.style.setProperty(r, t)
    }, Ka = function (e, r, t) {
        return e._gsap[r] = t
    }, Za = function (e, r, t) {
        return e._gsap.scaleX = e._gsap.scaleY = t
    }, Qa = function (e, r, t, i, n) {
        var u = e._gsap;
        u.scaleX = u.scaleY = t, u.renderTransform(n, u)
    }, Ja = function (e, r, t, i, n) {
        var u = e._gsap;
        u[r] = t, u.renderTransform(n, u)
    }, Te = "transform", ar = Te + "Origin", po, ou = function (e, r) {
        var t = er.createElementNS ? er.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : er.createElement(e);
        return t.style ? t : er.createElement(e)
    }, Xt = function o(e, r, t) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(co, "-$1").toLowerCase()) || i.getPropertyValue(r) || !t && o(e, ui(r) || r, 1) || ""
    }, ju = "O,Moz,ms,Ms,Webkit".split(","), ui = function (e, r, t) {
        var i = r || br, n = i.style, u = 5;
        if (e in n && !t) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); u-- && !(ju[u] + e in n);) ;
        return u < 0 ? null : (u === 3 ? "ms" : u >= 0 ? ju[u] : "") + e
    }, au = function () {
        Va() && window.document && (Gu = window, er = Gu.document, Kr = er.documentElement, br = ou("div") || {style: {}}, ou("div"), Te = ui(Te), ar = Te + "Origin", br.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", po = !!ui("perspective"), Mu = 1)
    }, Un = function o(e) {
        var r = ou("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            t = this.parentNode, i = this.nextSibling, n = this.style.cssText, u;
        if (Kr.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
            u = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = o
        } catch {
        } else this._gsapBBox && (u = this._gsapBBox());
        return t && (i ? t.insertBefore(this, i) : t.appendChild(this)), Kr.removeChild(r), this.style.cssText = n, u
    }, Ku = function (e, r) {
        for (var t = r.length; t--;) if (e.hasAttribute(r[t])) return e.getAttribute(r[t])
    }, go = function (e) {
        var r;
        try {
            r = e.getBBox()
        } catch {
            r = Un.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Un || (r = Un.call(e, !0)), r && !r.width && !r.x && !r.y ? {
            x: +Ku(e, ["x", "cx", "x1"]) || 0,
            y: +Ku(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : r
    }, mo = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && go(e))
    }, Ii = function (e, r) {
        if (r) {
            var t = e.style;
            r in or && r !== ar && (r = Te), t.removeProperty ? ((r.substr(0, 2) === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), t.removeProperty(r.replace(co, "-$1").toLowerCase())) : t.removeAttribute(r)
        }
    }, rr = function (e, r, t, i, n, u) {
        var s = new Ke(e._pt, r, t, 0, 1, u ? _o : Do);
        return e._pt = s, s.b = i, s.e = n, e._props.push(t), s
    }, Zu = {deg: 1, rad: 1, turn: 1}, lr = function o(e, r, t, i) {
        var n = parseFloat(t) || 0, u = (t + "").trim().substr((n + "").length) || "px", s = br.style, a = Ua.test(r),
            l = e.tagName.toLowerCase() === "svg", f = (l ? "client" : "offset") + (a ? "Width" : "Height"), h = 100,
            _ = i === "px", c = i === "%", d, D, p, g;
        return i === u || !n || Zu[i] || Zu[u] ? n : (u !== "px" && !_ && (n = o(e, r, t, "px")), g = e.getCTM && mo(e), (c || u === "%") && (or[r] || ~r.indexOf("adius")) ? (d = g ? e.getBBox()[a ? "width" : "height"] : e[f], fe(c ? n / d * h : n / 100 * d)) : (s[a ? "width" : "height"] = h + (_ ? u : i), D = ~r.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode, g && (D = (e.ownerSVGElement || {}).parentNode), (!D || D === er || !D.appendChild) && (D = er.body), p = D._gsap, p && c && p.width && a && p.time === it.time ? fe(n / p.width * h) : ((c || u === "%") && (s.position = Xt(e, "position")), D === e && (s.position = "static"), D.appendChild(br), d = br[f], D.removeChild(br), s.position = "absolute", a && c && (p = vr(D), p.time = it.time, p.width = D[f]), fe(_ ? d * n / h : d && n ? h / d * n : 0))))
    }, Cr = function (e, r, t, i) {
        var n;
        return Mu || au(), r in tr && r !== "transform" && (r = tr[r], ~r.indexOf(",") && (r = r.split(",")[0])), or[r] && r !== "transform" ? (n = Yi(e, i), n = r !== "transformOrigin" ? n[r] : n.svg ? n.origin : Tn(Xt(e, ar)) + " " + n.zOrigin + "px") : (n = e.style[r], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = wn[r] && wn[r](e, r, t) || Xt(e, r) || zs(e, r) || (r === "opacity" ? 1 : 0))), t && !~(n + "").trim().indexOf(" ") ? lr(e, r, n, t) + t : n
    }, el = function (e, r, t, i) {
        if (!t || t === "none") {
            var n = ui(r, e, 1), u = n && Xt(e, n, 1);
            u && u !== t ? (r = n, t = u) : r === "borderColor" && (t = Xt(e, "borderTopColor"))
        }
        var s = new Ke(this._pt, e.style, r, 0, 1, lo), a = 0, l = 0, f, h, _, c, d, D, p, g, x, C, F, E;
        if (s.b = t, s.e = i, t += "", i += "", i === "auto" && (e.style[r] = i, i = Xt(e, r) || i, e.style[r] = t), f = [t, i], Js(f), t = f[0], i = f[1], _ = t.match(Wr) || [], E = i.match(Wr) || [], E.length) {
            for (; h = Wr.exec(i);) p = h[0], x = i.substring(a, h.index), d ? d = (d + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (d = 1), p !== (D = _[l++] || "") && (c = parseFloat(D) || 0, F = D.substr((c + "").length), p.charAt(1) === "=" && (p = jr(c, p) + F), g = parseFloat(p), C = p.substr((g + "").length), a = Wr.lastIndex - C.length, C || (C = C || st.units[r] || F, a === i.length && (i += C, s.e += C)), F !== C && (c = lr(e, r, D, C) || 0), s._pt = {
                _next: s._pt,
                p: x || l === 1 ? x : ",",
                s: c,
                c: g - c,
                m: d && d < 4 || r === "zIndex" ? Math.round : 0
            });
            s.c = a < i.length ? i.substring(a, i.length) : ""
        } else s.r = r === "display" && i === "none" ? _o : Do;
        return As.test(i) && (s.e = 0), this._pt = s, s
    }, Qu = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, tl = function (e) {
        var r = e.split(" "), t = r[0], i = r[1] || "50%";
        return (t === "top" || t === "bottom" || i === "left" || i === "right") && (e = t, t = i, i = e), r[0] = Qu[t] || t, r[1] = Qu[i] || i, r.join(" ")
    }, rl = function (e, r) {
        if (r.tween && r.tween._time === r.tween._dur) {
            var t = r.t, i = t.style, n = r.u, u = t._gsap, s, a, l;
            if (n === "all" || n === !0) i.cssText = "", a = 1; else for (n = n.split(","), l = n.length; --l > -1;) s = n[l], or[s] && (a = 1, s = s === "transformOrigin" ? ar : Te), Ii(t, s);
            a && (Ii(t, Te), u && (u.svg && t.removeAttribute("transform"), Yi(t, 1), u.uncache = 1))
        }
    }, wn = {
        clearProps: function (e, r, t, i, n) {
            if (n.data !== "isFromStart") {
                var u = e._pt = new Ke(e._pt, r, t, 0, 0, rl);
                return u.u = i, u.pr = -10, u.tween = n, e._props.push(t), 1
            }
        }
    }, Ni = [1, 0, 0, 1, 0, 0], Co = {}, yo = function (e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    }, Ju = function (e) {
        var r = Xt(e, Te);
        return yo(r) ? Ni : r.substr(7).match(Ps).map(fe)
    }, Bu = function (e, r) {
        var t = e._gsap || vr(e), i = e.style, n = Ju(e), u, s, a, l;
        return t.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, n = [a.a, a.b, a.c, a.d, a.e, a.f], n.join(",") === "1,0,0,1,0,0" ? Ni : n) : (n === Ni && !e.offsetParent && e !== Kr && !t.svg && (a = i.display, i.display = "block", u = e.parentNode, (!u || !e.offsetParent) && (l = 1, s = e.nextSibling, Kr.appendChild(e)), n = Ju(e), a ? i.display = a : Ii(e, "display"), l && (s ? u.insertBefore(e, s) : u ? u.appendChild(e) : Kr.removeChild(e))), r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    }, lu = function (e, r, t, i, n, u) {
        var s = e._gsap, a = n || Bu(e, !0), l = s.xOrigin || 0, f = s.yOrigin || 0, h = s.xOffset || 0, _ = s.yOffset || 0,
            c = a[0], d = a[1], D = a[2], p = a[3], g = a[4], x = a[5], C = r.split(" "), F = parseFloat(C[0]) || 0,
            E = parseFloat(C[1]) || 0, b, w, S, v;
        t ? a !== Ni && (w = c * p - d * D) && (S = F * (p / w) + E * (-D / w) + (D * x - p * g) / w, v = F * (-d / w) + E * (c / w) - (c * x - d * g) / w, F = S, E = v) : (b = go(e), F = b.x + (~C[0].indexOf("%") ? F / 100 * b.width : F), E = b.y + (~(C[1] || C[0]).indexOf("%") ? E / 100 * b.height : E)), i || i !== !1 && s.smooth ? (g = F - l, x = E - f, s.xOffset = h + (g * c + x * D) - g, s.yOffset = _ + (g * d + x * p) - x) : s.xOffset = s.yOffset = 0, s.xOrigin = F, s.yOrigin = E, s.smooth = !!i, s.origin = r, s.originIsAbsolute = !!t, e.style[ar] = "0px 0px", u && (rr(u, s, "xOrigin", l, F), rr(u, s, "yOrigin", f, E), rr(u, s, "xOffset", h, s.xOffset), rr(u, s, "yOffset", _, s.yOffset)), e.setAttribute("data-svg-origin", F + " " + E)
    }, Yi = function (e, r) {
        var t = e._gsap || new io(e);
        if ("x" in t && !r && !t.uncache) return t;
        var i = e.style, n = t.scaleX < 0, u = "px", s = "deg", a = Xt(e, ar) || "0", l, f, h, _, c, d, D, p, g, x, C, F, E,
            b, w, S, v, P, L, O, G, k, N, R, $, K, Qe, m, xe, hr, $e, ve;
        return l = f = h = d = D = p = g = x = C = 0, _ = c = 1, t.svg = !!(e.getCTM && mo(e)), b = Bu(e, t.svg), t.svg && (R = (!t.uncache || a === "0px 0px") && !r && e.getAttribute("data-svg-origin"), lu(e, R || a, !!R || t.originIsAbsolute, t.smooth !== !1, b)), F = t.xOrigin || 0, E = t.yOrigin || 0, b !== Ni && (P = b[0], L = b[1], O = b[2], G = b[3], l = k = b[4], f = N = b[5], b.length === 6 ? (_ = Math.sqrt(P * P + L * L), c = Math.sqrt(G * G + O * O), d = P || L ? Xr(L, P) * mr : 0, g = O || G ? Xr(O, G) * mr + d : 0, g && (c *= Math.abs(Math.cos(g * Zr))), t.svg && (l -= F - (F * P + E * O), f -= E - (F * L + E * G))) : (ve = b[6], hr = b[7], Qe = b[8], m = b[9], xe = b[10], $e = b[11], l = b[12], f = b[13], h = b[14], w = Xr(ve, xe), D = w * mr, w && (S = Math.cos(-w), v = Math.sin(-w), R = k * S + Qe * v, $ = N * S + m * v, K = ve * S + xe * v, Qe = k * -v + Qe * S, m = N * -v + m * S, xe = ve * -v + xe * S, $e = hr * -v + $e * S, k = R, N = $, ve = K), w = Xr(-O, xe), p = w * mr, w && (S = Math.cos(-w), v = Math.sin(-w), R = P * S - Qe * v, $ = L * S - m * v, K = O * S - xe * v, $e = G * v + $e * S, P = R, L = $, O = K), w = Xr(L, P), d = w * mr, w && (S = Math.cos(w), v = Math.sin(w), R = P * S + L * v, $ = k * S + N * v, L = L * S - P * v, N = N * S - k * v, P = R, k = $), D && Math.abs(D) + Math.abs(d) > 359.9 && (D = d = 0, p = 180 - p), _ = fe(Math.sqrt(P * P + L * L + O * O)), c = fe(Math.sqrt(N * N + ve * ve)), w = Xr(k, N), g = Math.abs(w) > 2e-4 ? w * mr : 0, C = $e ? 1 / ($e < 0 ? -$e : $e) : 0), t.svg && (R = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !yo(Xt(e, Te)), R && e.setAttribute("transform", R))), Math.abs(g) > 90 && Math.abs(g) < 270 && (n ? (_ *= -1, g += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (c *= -1, g += g <= 0 ? 180 : -180)), r = r || t.uncache, t.x = l - ((t.xPercent = l && (!r && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + u, t.y = f - ((t.yPercent = f && (!r && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + u, t.z = h + u, t.scaleX = fe(_), t.scaleY = fe(c), t.rotation = fe(d) + s, t.rotationX = fe(D) + s, t.rotationY = fe(p) + s, t.skewX = g + s, t.skewY = x + s, t.transformPerspective = C + u, (t.zOrigin = parseFloat(a.split(" ")[2]) || 0) && (i[ar] = Tn(a)), t.xOffset = t.yOffset = 0, t.force3D = st.force3D, t.renderTransform = t.svg ? nl : po ? Fo : il, t.uncache = 0, t
    }, Tn = function (e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, $n = function (e, r, t) {
        var i = Oe(r);
        return fe(parseFloat(r) + parseFloat(lr(e, "x", t + "px", i))) + i
    }, il = function (e, r) {
        r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, Fo(e, r)
    }, pr = "0deg", di = "0px", gr = ") ", Fo = function (e, r) {
        var t = r || this, i = t.xPercent, n = t.yPercent, u = t.x, s = t.y, a = t.z, l = t.rotation, f = t.rotationY,
            h = t.rotationX, _ = t.skewX, c = t.skewY, d = t.scaleX, D = t.scaleY, p = t.transformPerspective,
            g = t.force3D, x = t.target, C = t.zOrigin, F = "", E = g === "auto" && e && e !== 1 || g === !0;
        if (C && (h !== pr || f !== pr)) {
            var b = parseFloat(f) * Zr, w = Math.sin(b), S = Math.cos(b), v;
            b = parseFloat(h) * Zr, v = Math.cos(b), u = $n(x, u, w * v * -C), s = $n(x, s, -Math.sin(b) * -C), a = $n(x, a, S * v * -C + C)
        }
        p !== di && (F += "perspective(" + p + gr), (i || n) && (F += "translate(" + i + "%, " + n + "%) "), (E || u !== di || s !== di || a !== di) && (F += a !== di || E ? "translate3d(" + u + ", " + s + ", " + a + ") " : "translate(" + u + ", " + s + gr), l !== pr && (F += "rotate(" + l + gr), f !== pr && (F += "rotateY(" + f + gr), h !== pr && (F += "rotateX(" + h + gr), (_ !== pr || c !== pr) && (F += "skew(" + _ + ", " + c + gr), (d !== 1 || D !== 1) && (F += "scale(" + d + ", " + D + gr), x.style[Te] = F || "translate(0, 0)"
    }, nl = function (e, r) {
        var t = r || this, i = t.xPercent, n = t.yPercent, u = t.x, s = t.y, a = t.rotation, l = t.skewX, f = t.skewY,
            h = t.scaleX, _ = t.scaleY, c = t.target, d = t.xOrigin, D = t.yOrigin, p = t.xOffset, g = t.yOffset,
            x = t.forceCSS, C = parseFloat(u), F = parseFloat(s), E, b, w, S, v;
        a = parseFloat(a), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, a += f), a || l ? (a *= Zr, l *= Zr, E = Math.cos(a) * h, b = Math.sin(a) * h, w = Math.sin(a - l) * -_, S = Math.cos(a - l) * _, l && (f *= Zr, v = Math.tan(l - f), v = Math.sqrt(1 + v * v), w *= v, S *= v, f && (v = Math.tan(f), v = Math.sqrt(1 + v * v), E *= v, b *= v)), E = fe(E), b = fe(b), w = fe(w), S = fe(S)) : (E = h, S = _, b = w = 0), (C && !~(u + "").indexOf("px") || F && !~(s + "").indexOf("px")) && (C = lr(c, "x", u, "px"), F = lr(c, "y", s, "px")), (d || D || p || g) && (C = fe(C + d - (d * E + D * w) + p), F = fe(F + D - (d * b + D * S) + g)), (i || n) && (v = c.getBBox(), C = fe(C + i / 100 * v.width), F = fe(F + n / 100 * v.height)), v = "matrix(" + E + "," + b + "," + w + "," + S + "," + C + "," + F + ")", c.setAttribute("transform", v), x && (c.style[Te] = v)
    }, ul = function (e, r, t, i, n) {
        var u = 360, s = Fe(n), a = parseFloat(n) * (s && ~n.indexOf("rad") ? mr : 1), l = a - i, f = i + l + "deg", h, _;
        return s && (h = n.split("_")[1], h === "short" && (l %= u, l !== l % (u / 2) && (l += l < 0 ? u : -u)), h === "cw" && l < 0 ? l = (l + u * qu) % u - ~~(l / u) * u : h === "ccw" && l > 0 && (l = (l - u * qu) % u - ~~(l / u) * u)), e._pt = _ = new Ke(e._pt, r, t, i, l, Wa), _.e = f, _.u = "deg", e._props.push(t), _
    }, es = function (e, r) {
        for (var t in r) e[t] = r[t];
        return e
    }, sl = function (e, r, t) {
        var i = es({}, t._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", u = t.style, s, a, l, f, h, _, c, d;
        i.svg ? (l = t.getAttribute("transform"), t.setAttribute("transform", ""), u[Te] = r, s = Yi(t, 1), Ii(t, Te), t.setAttribute("transform", l)) : (l = getComputedStyle(t)[Te], u[Te] = r, s = Yi(t, 1), u[Te] = l);
        for (a in or) l = i[a], f = s[a], l !== f && n.indexOf(a) < 0 && (c = Oe(l), d = Oe(f), h = c !== d ? lr(t, a, l, d) : parseFloat(l), _ = parseFloat(f), e._pt = new Ke(e._pt, s, a, h, _ - h, ho), e._pt.u = d || 0, e._props.push(a));
        es(s, i)
    };
je("padding,margin,Width,Radius", function (o, e) {
    var r = "Top", t = "Right", i = "Bottom", n = "Left",
        u = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function (s) {
            return e < 2 ? o + s : "border" + s + o
        });
    wn[e > 1 ? "border" + o : o] = function (s, a, l, f, h) {
        var _, c;
        if (arguments.length < 4) return _ = u.map(function (d) {
            return Cr(s, d, l)
        }), c = _.join(" "), c.split(_[0]).length === 5 ? _[0] : c;
        _ = (f + "").split(" "), c = {}, u.forEach(function (d, D) {
            return c[d] = _[D] = _[D] || _[(D - 1) / 2 | 0]
        }), s.init(a, c, h)
    }
});
var xo = {
    name: "css", register: au, targetTest: function (e) {
        return e.style && e.nodeType
    }, init: function (e, r, t, i, n) {
        var u = this._props, s = e.style, a = t.vars.startAt, l, f, h, _, c, d, D, p, g, x, C, F, E, b, w;
        Mu || au();
        for (D in r) if (D !== "autoRound" && (f = r[D], !(rt[D] && no(D, r, t, i, e, n)))) {
            if (c = typeof f, d = wn[D], c === "function" && (f = f.call(t, i, e, n), c = typeof f), c === "string" && ~f.indexOf("random(") && (f = Ri(f)), d) d(this, e, D, f, t) && (w = 1); else if (D.substr(0, 2) === "--") l = (getComputedStyle(e).getPropertyValue(D) + "").trim(), f += "", ur.lastIndex = 0, ur.test(l) || (p = Oe(l), g = Oe(f)), g ? p !== g && (l = lr(e, D, l, g) + g) : p && (f += p), this.add(s, "setProperty", l, f, i, n, 0, 0, D), u.push(D); else if (c !== "undefined") {
                if (a && D in a ? (l = typeof a[D] == "function" ? a[D].call(t, i, e, n) : a[D], Fe(l) && ~l.indexOf("random(") && (l = Ri(l)), Oe(l + "") || (l += st.units[D] || Oe(Cr(e, D)) || ""), (l + "").charAt(1) === "=" && (l = Cr(e, D))) : l = Cr(e, D), _ = parseFloat(l), x = c === "string" && f.charAt(1) === "=" && f.substr(0, 2), x && (f = f.substr(2)), h = parseFloat(f), D in tr && (D === "autoAlpha" && (_ === 1 && Cr(e, "visibility") === "hidden" && h && (_ = 0), rr(this, s, "visibility", _ ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), D !== "scale" && D !== "transform" && (D = tr[D], ~D.indexOf(",") && (D = D.split(",")[0]))), C = D in or, C) {
                    if (F || (E = e._gsap, E.renderTransform && !r.parseTransform || Yi(e, r.parseTransform), b = r.smoothOrigin !== !1 && E.smooth, F = this._pt = new Ke(this._pt, s, Te, 0, 1, E.renderTransform, E, 0, -1), F.dep = 1), D === "scale") this._pt = new Ke(this._pt, E, "scaleY", E.scaleY, (x ? jr(E.scaleY, x + h) : h) - E.scaleY || 0), u.push("scaleY", D), D += "X"; else if (D === "transformOrigin") {
                        f = tl(f), E.svg ? lu(e, f, 0, b, 0, this) : (g = parseFloat(f.split(" ")[2]) || 0, g !== E.zOrigin && rr(this, E, "zOrigin", E.zOrigin, g), rr(this, s, D, Tn(l), Tn(f)));
                        continue
                    } else if (D === "svgOrigin") {
                        lu(e, f, 1, b, 0, this);
                        continue
                    } else if (D in Co) {
                        ul(this, E, D, _, x ? jr(_, x + f) : f);
                        continue
                    } else if (D === "smoothOrigin") {
                        rr(this, E, "smooth", E.smooth, f);
                        continue
                    } else if (D === "force3D") {
                        E[D] = f;
                        continue
                    } else if (D === "transform") {
                        sl(this, f, e);
                        continue
                    }
                } else D in s || (D = ui(D) || D);
                if (C || (h || h === 0) && (_ || _ === 0) && !$a.test(f) && D in s) p = (l + "").substr((_ + "").length), h || (h = 0), g = Oe(f) || (D in st.units ? st.units[D] : p), p !== g && (_ = lr(e, D, l, g)), this._pt = new Ke(this._pt, C ? E : s, D, _, (x ? jr(_, x + h) : h) - _, !C && (g === "px" || D === "zIndex") && r.autoRound !== !1 ? Ha : ho), this._pt.u = g || 0, p !== g && g !== "%" && (this._pt.b = l, this._pt.r = Ga); else if (D in s) el.call(this, e, D, l, x ? x + f : f); else if (D in e) this.add(e, D, l || e[D], x ? x + f : f, i, n); else {
                    Eu(D, f);
                    continue
                }
                u.push(D)
            }
        }
        w && fo(this)
    }, get: Cr, aliases: tr, getSetter: function (e, r, t) {
        var i = tr[r];
        return i && i.indexOf(",") < 0 && (r = i), r in or && r !== ar && (e._gsap.x || Cr(e, "x")) ? t && Hu === t ? r === "scale" ? Za : Ka : (Hu = t || {}) && (r === "scale" ? Qa : Ja) : e.style && !Fu(e.style[r]) ? qa : ~r.indexOf("-") ? ja : ku(e, r)
    }, core: {_removeProperty: Ii, _getMatrix: Bu}
};
Et.utils.checkPrefix = ui;
(function (o, e, r, t) {
    var i = je(o + "," + e + "," + r, function (n) {
        or[n] = 1
    });
    je(e, function (n) {
        st.units[n] = "deg", Co[n] = 1
    }), tr[i[13]] = o + "," + e, je(t, function (n) {
        var u = n.split(":");
        tr[u[1]] = i[u[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
je("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (o) {
    st.units[o] = "px"
});
Et.registerPlugin(xo);
var Ze = Et.registerPlugin(xo) || Et;
Ze.core.Tween;

function ts(o, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(o, t.key, t)
    }
}

function ol(o, e, r) {
    return e && ts(o.prototype, e), r && ts(o, r), o
}/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ue, fu, nt, wr, Tr, Qr, Eo, yr, vi, bo, It, Ft, wo = function () {
    return Ue || typeof window != "undefined" && (Ue = window.gsap) && Ue.registerPlugin && Ue
}, To = 1, Hr = [], q = [], kt = [], Si = Date.now, cu = function (e, r) {
    return r
}, al = function () {
    var e = vi.core, r = e.bridge || {}, t = e._scrollers, i = e._proxies;
    t.push.apply(t, q), i.push.apply(i, kt), q = t, kt = i, cu = function (u, s) {
        return r[u](s)
    }
}, sr = function (e, r) {
    return ~kt.indexOf(e) && kt[kt.indexOf(e) + 1][r]
}, fn = function (e) {
    return !!~bo.indexOf(e)
}, We = function (e, r, t, i, n) {
    return e.addEventListener(r, t, {passive: !i, capture: !!n})
}, Ie = function (e, r, t, i) {
    return e.removeEventListener(r, t, !!i)
}, ji = "scrollLeft", Ki = "scrollTop", rs = function () {
    return It && It.isPressed || q.cache++
}, vn = function (e, r) {
    var t = function i(n) {
        if (n || n === 0) {
            To && (nt.history.scrollRestoration = "manual");
            var u = It && It.isPressed;
            n = i.v = Math.round(n) || (It && It.iOS ? 1 : 0), e(n), i.cacheID = q.cache, u && cu("ss", n)
        } else (r || q.cache !== i.cacheID || cu("ref")) && (i.cacheID = q.cache, i.v = e());
        return i.v + i.offset
    };
    return t.offset = 0, e && t
}, Ve = {
    s: ji, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: vn(function (o) {
        return arguments.length ? nt.scrollTo(o, ge.sc()) : nt.pageXOffset || wr[ji] || Tr[ji] || Qr[ji] || 0
    })
}, ge = {
    s: Ki,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Ve,
    sc: vn(function (o) {
        return arguments.length ? nt.scrollTo(Ve.sc(), o) : nt.pageYOffset || wr[Ki] || Tr[Ki] || Qr[Ki] || 0
    })
}, Ge = function (e) {
    return Ue.utils.toArray(e)[0] || (typeof e == "string" && Ue.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, fr = function (e, r) {
    var t = r.s, i = r.sc, n = q.indexOf(e), u = i === ge.sc ? 1 : 2;
    return !~n && (n = q.push(e) - 1), q[n + u] || (q[n + u] = vn(sr(e, t), !0) || (fn(e) ? i : vn(function (s) {
        return arguments.length ? e[t] = s : e[t]
    })))
}, hu = function (e, r, t) {
    var i = e, n = e, u = Si(), s = u, a = r || 50, l = Math.max(500, a * 3), f = function (d, D) {
        var p = Si();
        D || p - u > a ? (n = i, i = d, s = u, u = p) : t ? i += d : i = n + (d - n) / (p - s) * (u - s)
    }, h = function () {
        n = i = t ? 0 : i, s = u = 0
    }, _ = function (d) {
        var D = s, p = n, g = Si();
        return (d || d === 0) && d !== i && f(d), u === s || g - s > l ? 0 : (i + (t ? p : -p)) / ((t ? g : u) - D) * 1e3
    };
    return {update: f, reset: h, getVelocity: _}
}, pi = function (e, r) {
    return r && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
}, is = function (e) {
    var r = Math.max.apply(Math, e), t = Math.min.apply(Math, e);
    return Math.abs(r) >= Math.abs(t) ? r : t
}, vo = function () {
    vi = Ue.core.globals().ScrollTrigger, vi && vi.core && al()
}, So = function (e) {
    return Ue = e || wo(), Ue && typeof document != "undefined" && document.body && (nt = window, wr = document, Tr = wr.documentElement, Qr = wr.body, bo = [nt, wr, Tr, Qr], Ue.utils.clamp, yr = "onpointerenter" in Qr ? "pointer" : "mouse", Eo = de.isTouch = nt.matchMedia && nt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in nt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ft = de.eventTypes = ("ontouchstart" in Tr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Tr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
        return To = 0
    }, 500), vo(), fu = 1), fu
};
Ve.op = ge;
q.cache = 0;
var de = function () {
    function o(r) {
        this.init(r)
    }

    var e = o.prototype;
    return e.init = function (t) {
        fu || So(Ue) || console.warn("Please gsap.registerPlugin(Observer)"), vi || vo();
        var i = t.tolerance, n = t.dragMinimum, u = t.type, s = t.target, a = t.lineHeight, l = t.debounce,
            f = t.preventDefault, h = t.onStop, _ = t.onStopDelay, c = t.ignore, d = t.wheelSpeed, D = t.event,
            p = t.onDragStart, g = t.onDragEnd, x = t.onDrag, C = t.onPress, F = t.onRelease, E = t.onRight,
            b = t.onLeft, w = t.onUp, S = t.onDown, v = t.onChangeX, P = t.onChangeY, L = t.onChange, O = t.onToggleX,
            G = t.onToggleY, k = t.onHover, N = t.onHoverEnd, R = t.onMove, $ = t.ignoreCheck, K = t.isNormalizer,
            Qe = t.onGestureStart, m = t.onGestureEnd, xe = t.onWheel, hr = t.onEnable, $e = t.onDisable,
            ve = t.onClick, $t = t.scrollSpeed, ee = t.capture, Se = t.allowClicks, Be = t.lockAxis, ai = t.onLockAxis;
        this.target = s = Ge(s) || Tr, this.vars = t, c && (c = Ue.utils.toArray(c)), i = i || 0, n = n || 0, d = d || 1, $t = $t || 1, u = u || "wheel,touch,pointer", l = l !== !1, a || (a = parseFloat(nt.getComputedStyle(Qr).lineHeight) || 22);
        var at, lt, H, Pe, Je, bt, Re, y = this, Ot = 0, re = 0, Wt = fr(s, Ve), Gt = fr(s, ge), Lr = Wt(), ze = Gt(),
            li = ~u.indexOf("touch") && !~u.indexOf("pointer") && Ft[0] === "pointerdown", Ht = fn(s),
            le = s.ownerDocument || wr, et = [0, 0, 0], Ae = [0, 0, 0], fi = 0, qt = function () {
                return fi = Si()
            }, wt = function (T, A) {
                return (y.event = T) && c && ~c.indexOf(T.target) || A && li && T.pointerType !== "touch" || $ && $(T, A)
            }, ci = function () {
                y._vx.reset(), y._vy.reset(), lt.pause(), h && h(y)
            }, jt = function () {
                var T = y.deltaX = is(et), A = y.deltaY = is(Ae), M = Math.abs(T) >= i, z = Math.abs(A) >= i;
                L && (M || z) && L(y, T, A, et, Ae), M && (E && y.deltaX > 0 && E(y), b && y.deltaX < 0 && b(y), v && v(y), O && y.deltaX < 0 != Ot < 0 && O(y), Ot = y.deltaX, et[0] = et[1] = et[2] = 0), z && (S && y.deltaY > 0 && S(y), w && y.deltaY < 0 && w(y), P && P(y), G && y.deltaY < 0 != re < 0 && G(y), re = y.deltaY, Ae[0] = Ae[1] = Ae[2] = 0), (Pe || H) && (R && R(y), ai && bt && ai(y), H && (x(y), H = !1), Pe = bt = !1), Je && (xe(y), Je = !1), at = 0
            }, Dr = function (T, A, M) {
                et[M] += T, Ae[M] += A, y._vx.update(T), y._vy.update(A), l ? at || (at = requestAnimationFrame(jt)) : jt()
            }, Ir = function (T, A) {
                Re !== "y" && (et[2] += T, y._vx.update(T, !0)), Re !== "x" && (Ae[2] += A, y._vy.update(A, !0)), Be && !Re && (y.axis = Re = Math.abs(T) > Math.abs(A) ? "x" : "y", bt = !0), l ? at || (at = requestAnimationFrame(jt)) : jt()
            }, j = function (T) {
                if (!wt(T, 1)) {
                    T = pi(T, f);
                    var A = T.clientX, M = T.clientY, z = A - y.x, Ee = M - y.y, I = y.isDragging;
                    y.x = A, y.y = M, (I || Math.abs(y.startX - A) >= n || Math.abs(y.startY - M) >= n) && (x && (H = !0), I || (y.isDragging = !0), Ir(z, Ee), I || p && p(y))
                }
            }, Kt = y.onPress = function (V) {
                wt(V, 1) || (y.axis = Re = null, lt.pause(), y.isPressed = !0, V = pi(V), Ot = re = 0, y.startX = y.x = V.clientX, y.startY = y.y = V.clientY, y._vx.reset(), y._vy.reset(), We(K ? s : le, Ft[1], j, f, !0), y.deltaX = y.deltaY = 0, C && C(y))
            }, tt = function (T) {
                if (!wt(T, 1)) {
                    Ie(K ? s : le, Ft[1], j, !0);
                    var A = y.isDragging && (Math.abs(y.x - y.startX) > 3 || Math.abs(y.y - y.startY) > 3), M = pi(T);
                    A || (y._vx.reset(), y._vy.reset(), f && Se && Ue.delayedCall(.08, function () {
                        if (Si() - fi > 300 && !T.defaultPrevented) {
                            if (T.target.click) T.target.click(); else if (le.createEvent) {
                                var z = le.createEvent("MouseEvents");
                                z.initMouseEvent("click", !0, !0, nt, 1, M.screenX, M.screenY, M.clientX, M.clientY, !1, !1, !1, !1, 0, null), T.target.dispatchEvent(z)
                            }
                        }
                    })), y.isDragging = y.isGesturing = y.isPressed = !1, h && !K && lt.restart(!0), g && A && g(y), F && F(y, A)
                }
            }, Ct = function (T) {
                return T.touches && T.touches.length > 1 && (y.isGesturing = !0) && Qe(T, y.isDragging)
            }, Mt = function () {
                return (y.isGesturing = !1) || m(y)
            }, Zt = function (T) {
                if (!wt(T)) {
                    var A = Wt(), M = Gt();
                    Dr((A - Lr) * $t, (M - ze) * $t, 1), Lr = A, ze = M, h && lt.restart(!0)
                }
            }, _r = function (T) {
                if (!wt(T)) {
                    T = pi(T, f), xe && (Je = !0);
                    var A = (T.deltaMode === 1 ? a : T.deltaMode === 2 ? nt.innerHeight : 1) * d;
                    Dr(T.deltaX * A, T.deltaY * A, 0), h && !K && lt.restart(!0)
                }
            }, Nr = function (T) {
                if (!wt(T)) {
                    var A = T.clientX, M = T.clientY, z = A - y.x, Ee = M - y.y;
                    y.x = A, y.y = M, Pe = !0, (z || Ee) && Ir(z, Ee)
                }
            }, Bt = function (T) {
                y.event = T, k(y)
            }, hi = function (T) {
                y.event = T, N(y)
            }, Di = function (T) {
                return wt(T) || pi(T, f) && ve(y)
            };
        lt = y._dc = Ue.delayedCall(_ || .25, ci).pause(), y.deltaX = y.deltaY = 0, y._vx = hu(0, 50, !0), y._vy = hu(0, 50, !0), y.scrollX = Wt, y.scrollY = Gt, y.isDragging = y.isGesturing = y.isPressed = !1, y.enable = function (V) {
            return y.isEnabled || (We(Ht ? le : s, "scroll", rs), u.indexOf("scroll") >= 0 && We(Ht ? le : s, "scroll", Zt, f, ee), u.indexOf("wheel") >= 0 && We(s, "wheel", _r, f, ee), (u.indexOf("touch") >= 0 && Eo || u.indexOf("pointer") >= 0) && (We(s, Ft[0], Kt, f, ee), We(le, Ft[2], tt), We(le, Ft[3], tt), Se && We(s, "click", qt, !1, !0), ve && We(s, "click", Di), Qe && We(le, "gesturestart", Ct), m && We(le, "gestureend", Mt), k && We(s, yr + "enter", Bt), N && We(s, yr + "leave", hi), R && We(s, yr + "move", Nr)), y.isEnabled = !0, V && V.type && Kt(V), hr && hr(y)), y
        }, y.disable = function () {
            y.isEnabled && (Hr.filter(function (V) {
                return V !== y && fn(V.target)
            }).length || Ie(Ht ? le : s, "scroll", rs), y.isPressed && (y._vx.reset(), y._vy.reset(), Ie(K ? s : le, Ft[1], j, !0)), Ie(Ht ? le : s, "scroll", Zt, ee), Ie(s, "wheel", _r, ee), Ie(s, Ft[0], Kt, ee), Ie(le, Ft[2], tt), Ie(le, Ft[3], tt), Ie(s, "click", qt, !0), Ie(s, "click", Di), Ie(le, "gesturestart", Ct), Ie(le, "gestureend", Mt), Ie(s, yr + "enter", Bt), Ie(s, yr + "leave", hi), Ie(s, yr + "move", Nr), y.isEnabled = y.isPressed = y.isDragging = !1, $e && $e(y))
        }, y.kill = function () {
            y.disable();
            var V = Hr.indexOf(y);
            V >= 0 && Hr.splice(V, 1), It === y && (It = 0)
        }, Hr.push(y), K && fn(s) && (It = y), y.enable(D)
    }, ol(o, [{
        key: "velocityX", get: function () {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY", get: function () {
            return this._vy.getVelocity()
        }
    }]), o
}();
de.version = "3.10.4";
de.create = function (o) {
    return new de(o)
};
de.register = So;
de.getAll = function () {
    return Hr.slice()
};
de.getById = function (o) {
    return Hr.filter(function (e) {
        return e.vars.id === o
    })[0]
};
wo() && Ue.registerPlugin(de);/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var B, xr, Y, se, Nt, oe, Po, Sn, Pn, qr, cn, Zi, be, Bn, Du, Ye, ns, us, $r, Ao, Wn, ko, ct, Oo, Mo, Bo, Fr, Gn,
    yi = 1, Xe = Date.now, Hn = Xe(), gt = 0, Qi = 0, ss = function () {
        return Bn = 1
    }, os = function () {
        return Bn = 0
    }, Qt = function (e) {
        return e
    }, Xi = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, Ro = function () {
        return typeof window != "undefined"
    }, zo = function () {
        return B || Ro() && (B = window.gsap) && B.registerPlugin && B
    }, Mr = function (e) {
        return !!~Po.indexOf(e)
    }, Lo = function (e) {
        return sr(e, "getBoundingClientRect") || (Mr(e) ? function () {
            return mn.width = Y.innerWidth, mn.height = Y.innerHeight, mn
        } : function () {
            return Lt(e)
        })
    }, ll = function (e, r, t) {
        var i = t.d, n = t.d2, u = t.a;
        return (u = sr(e, "getBoundingClientRect")) ? function () {
            return u()[i]
        } : function () {
            return (r ? Y["inner" + n] : e["client" + n]) || 0
        }
    }, fl = function (e, r) {
        return !r || ~kt.indexOf(e) ? Lo(e) : function () {
            return mn
        }
    }, ir = function (e, r) {
        var t = r.s, i = r.d2, n = r.d, u = r.a;
        return (t = "scroll" + i) && (u = sr(e, t)) ? u() - Lo(e)()[n] : Mr(e) ? (Nt[t] || oe[t]) - (Y["inner" + i] || Nt["client" + i] || oe["client" + i]) : e[t] - e["offset" + i]
    }, Ji = function (e, r) {
        for (var t = 0; t < $r.length; t += 3) (!r || ~r.indexOf($r[t + 1])) && e($r[t], $r[t + 1], $r[t + 2])
    }, St = function (e) {
        return typeof e == "string"
    }, xt = function (e) {
        return typeof e == "function"
    }, Fi = function (e) {
        return typeof e == "number"
    }, hn = function (e) {
        return typeof e == "object"
    }, en = function (e) {
        return xt(e) && e()
    }, as = function (e, r) {
        return function () {
            var t = en(e), i = en(r);
            return function () {
                en(t), en(i)
            }
        }
    }, gi = function (e, r, t) {
        return e && e.progress(r ? 0 : 1) && t && e.pause()
    }, qn = function (e, r) {
        if (e.enabled) {
            var t = r(e);
            t && t.totalTime && (e.callbackAnimation = t)
        }
    }, Vr = Math.abs, Io = "left", No = "top", Ru = "right", zu = "bottom", Ar = "width", kr = "height", Pi = "Right",
    Ai = "Left", ki = "Top", Oi = "Bottom", _e = "padding", Dt = "margin", si = "Width", Lu = "Height", Ne = "px",
    At = function (e) {
        return Y.getComputedStyle(e)
    }, cl = function (e) {
        var r = At(e).position;
        e.style.position = r === "absolute" || r === "fixed" ? r : "relative"
    }, ls = function (e, r) {
        for (var t in r) t in e || (e[t] = r[t]);
        return e
    }, Lt = function (e, r) {
        var t = r && At(e)[Du] !== "matrix(1, 0, 0, 1, 0, 0)" && B.to(e, {
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
        return t && t.progress(0).kill(), i
    }, _u = function (e, r) {
        var t = r.d2;
        return e["offset" + t] || e["client" + t] || 0
    }, Yo = function (e) {
        var r = [], t = e.labels, i = e.duration(), n;
        for (n in t) r.push(t[n] / i);
        return r
    }, hl = function (e) {
        return function (r) {
            return B.utils.snap(Yo(e), r)
        }
    }, Iu = function (e) {
        var r = B.utils.snap(e), t = Array.isArray(e) && e.slice(0).sort(function (i, n) {
            return i - n
        });
        return t ? function (i, n, u) {
            u === void 0 && (u = .001);
            var s;
            if (!n) return r(i);
            if (n > 0) {
                for (i -= u, s = 0; s < t.length; s++) if (t[s] >= i) return t[s];
                return t[s - 1]
            } else for (s = t.length, i += u; s--;) if (t[s] <= i) return t[s];
            return t[0]
        } : function (i, n, u) {
            u === void 0 && (u = .001);
            var s = r(i);
            return !n || Math.abs(s - i) < u || s - i < 0 == n < 0 ? s : r(n < 0 ? i - e : i + e)
        }
    }, Dl = function (e) {
        return function (r, t) {
            return Iu(Yo(e))(r, t.direction)
        }
    }, tn = function (e, r, t, i) {
        return t.split(",").forEach(function (n) {
            return e(r, n, i)
        })
    }, we = function (e, r, t, i, n) {
        return e.addEventListener(r, t, {passive: !i, capture: !!n})
    }, me = function (e, r, t, i) {
        return e.removeEventListener(r, t, !!i)
    }, rn = function (e, r, t) {
        return t && t.wheelHandler && e(r, "wheel", t)
    }, fs = {startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal"},
    nn = {toggleActions: "play", anticipatePin: 0}, An = {top: 0, left: 0, center: .5, bottom: 1, right: 1},
    Dn = function (e, r) {
        if (St(e)) {
            var t = e.indexOf("="), i = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (i *= r / 100), e = e.substr(0, t - 1)), e = i + (e in An ? An[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0)
        }
        return e
    }, un = function (e, r, t, i, n, u, s, a) {
        var l = n.startColor, f = n.endColor, h = n.fontSize, _ = n.indent, c = n.fontWeight, d = se.createElement("div"),
            D = Mr(t) || sr(t, "pinType") === "fixed", p = e.indexOf("scroller") !== -1, g = D ? oe : t,
            x = e.indexOf("start") !== -1, C = x ? l : f,
            F = "border-color:" + C + ";font-size:" + h + ";color:" + C + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return F += "position:" + ((p || a) && D ? "fixed;" : "absolute;"), (p || a || !D) && (F += (i === ge ? Ru : zu) + ":" + (u + parseFloat(_)) + "px;"), s && (F += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), d._isStart = x, d.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")), d.style.cssText = F, d.innerText = r || r === 0 ? e + "-" + r : e, g.children[0] ? g.insertBefore(d, g.children[0]) : g.appendChild(d), d._offset = d["offset" + i.op.d2], _n(d, 0, i, x), d
    }, _n = function (e, r, t, i) {
        var n = {display: "block"}, u = t[i ? "os2" : "p2"], s = t[i ? "p2" : "os2"];
        e._isFlipped = i, n[t.a + "Percent"] = i ? -100 : 0, n[t.a] = i ? "1px" : 0, n["border" + u + si] = 1, n["border" + s + si] = 0, n[t.p] = r + "px", B.set(e, n)
    }, U = [], du = {}, pu, cs = function () {
        return Xe() - gt > 34 && $i()
    }, Ur = function () {
        (!ct || !ct.isPressed || ct.startX > oe.clientWidth) && (q.cache++, pu || (pu = requestAnimationFrame($i)), gt || Br("scrollStart"), gt = Xe())
    }, hs = function () {
        Bo = Y.innerWidth, Mo = Y.innerHeight
    }, xi = function () {
        q.cache++, !be && !ko && !se.fullscreenElement && !se.webkitFullscreenElement && (!Oo || Bo !== Y.innerWidth || Math.abs(Y.innerHeight - Mo) > Y.innerHeight * .25) && Sn.restart(!0)
    }, Vi = {}, _l = [], ae = [], Jr, Ds, _s = function (e) {
        var r = B.ticker.frame, t = [], i = 0, n;
        if (Ds !== r || yi) {
            for (kn(); i < ae.length; i += 4) n = Y.matchMedia(ae[i]).matches, n !== ae[i + 3] && (ae[i + 3] = n, n ? t.push(i) : kn(1, ae[i]) || xt(ae[i + 2]) && ae[i + 2]());
            for (Vo(), i = 0; i < t.length; i++) n = t[i], Jr = ae[n], ae[n + 2] = ae[n + 1](e);
            Jr = 0, xr && ei(0, 1), Ds = r, Br("matchMedia")
        }
    }, Xo = function o() {
        return me(W, "scrollEnd", o) || ei(!0)
    }, Br = function (e) {
        return Vi[e] && Vi[e].map(function (r) {
            return r()
        }) || _l
    }, ht = [], Vo = function (e) {
        for (var r = 0; r < ht.length; r += 5) (!e || ht[r + 4] === e) && (ht[r].style.cssText = ht[r + 1], ht[r].getBBox && ht[r].setAttribute("transform", ht[r + 2] || ""), ht[r + 3].uncache = 1)
    }, kn = function (e, r) {
        var t;
        for (Ye = 0; Ye < U.length; Ye++) t = U[Ye], (!r || t.media === r) && (e ? t.kill(1) : t.revert());
        r && Vo(r), r || Br("revert")
    }, Uo = function () {
        return q.cache++ && q.forEach(function (e) {
            return typeof e == "function" && (e.rec = 0)
        })
    }, Ui, dn = 0, ei = function (e, r) {
        if (gt && !e) {
            we(W, "scrollEnd", Xo);
            return
        }
        Ui = !0;
        var t = Br("refreshInit");
        Ao && W.sort(), r || kn(), U.slice(0).forEach(function (i) {
            return i.refresh()
        }), U.forEach(function (i) {
            return i.vars.end === "max" && i.setPositions(i.start, ir(i.scroller, i._dir))
        }), t.forEach(function (i) {
            return i && i.render && i.render(-1)
        }), Uo(), Sn.pause(), dn++, Ui = !1, Br("refresh")
    }, ds = 0, pn = 1, Er, $i = function () {
        if (!Ui) {
            W.isUpdating = !0, Er && Er.update(0);
            var e = U.length, r = Xe(), t = r - Hn >= 50, i = e && U[0].scroll();
            if (pn = ds > i ? -1 : 1, ds = i, t && (gt && !Bn && r - gt > 200 && (gt = 0, Br("scrollEnd")), cn = Hn, Hn = r), pn < 0) {
                for (Ye = e; Ye-- > 0;) U[Ye] && U[Ye].update(0, t);
                pn = 1
            } else for (Ye = 0; Ye < e; Ye++) U[Ye] && U[Ye].update(0, t);
            W.isUpdating = !1
        }
        pu = 0
    },
    gu = [Io, No, zu, Ru, Dt + Oi, Dt + Pi, Dt + ki, Dt + Ai, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    gn = gu.concat([Ar, kr, "boxSizing", "max" + si, "max" + Lu, "position", Dt, _e, _e + ki, _e + Pi, _e + Oi, _e + Ai]),
    dl = function (e, r, t) {
        Wi(t);
        var i = e._gsap;
        if (i.spacerIsNative) Wi(i.spacerState); else if (e.parentNode === r) {
            var n = r.parentNode;
            n && (n.insertBefore(e, r), n.removeChild(r))
        }
    }, jn = function (e, r, t, i) {
        if (e.parentNode !== r) {
            for (var n = gu.length, u = r.style, s = e.style, a; n--;) a = gu[n], u[a] = t[a];
            u.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (u.display = "inline-block"), s[zu] = s[Ru] = u.flexBasis = "auto", u.overflow = "visible", u.boxSizing = "border-box", u[Ar] = _u(e, Ve) + Ne, u[kr] = _u(e, ge) + Ne, u[_e] = s[Dt] = s[No] = s[Io] = "0", Wi(i), s[Ar] = s["max" + si] = t[Ar], s[kr] = s["max" + Lu] = t[kr], s[_e] = t[_e], e.parentNode.insertBefore(r, e), r.appendChild(e)
        }
    }, pl = /([A-Z])/g, Wi = function (e) {
        if (e) {
            var r = e.t.style, t = e.length, i = 0, n, u;
            for ((e.t._gsap || B.core.getCache(e.t)).uncache = 1; i < t; i += 2) u = e[i + 1], n = e[i], u ? r[n] = u : r[n] && r.removeProperty(n.replace(pl, "-$1").toLowerCase())
        }
    }, sn = function (e) {
        for (var r = gn.length, t = e.style, i = [], n = 0; n < r; n++) i.push(gn[n], t[gn[n]]);
        return i.t = e, i
    }, gl = function (e, r, t) {
        for (var i = [], n = e.length, u = t ? 8 : 0, s; u < n; u += 2) s = e[u], i.push(s, s in r ? r[s] : e[u + 1]);
        return i.t = e.t, i
    }, mn = {left: 0, top: 0}, ps = function (e, r, t, i, n, u, s, a, l, f, h, _, c) {
        xt(e) && (e = e(a)), St(e) && e.substr(0, 3) === "max" && (e = _ + (e.charAt(4) === "=" ? Dn("0" + e.substr(3), t) : 0));
        var d = c ? c.time() : 0, D, p, g;
        if (c && c.seek(0), Fi(e)) s && _n(s, t, i, !0); else {
            xt(r) && (r = r(a));
            var x = e.split(" "), C, F, E, b;
            g = Ge(r) || oe, C = Lt(g) || {}, (!C || !C.left && !C.top) && At(g).display === "none" && (b = g.style.display, g.style.display = "block", C = Lt(g), b ? g.style.display = b : g.style.removeProperty("display")), F = Dn(x[0], C[i.d]), E = Dn(x[1] || "0", t), e = C[i.p] - l[i.p] - f + F + n - E, s && _n(s, E, i, t - E < 20 || s._isStart && E > 20), t -= t - E
        }
        if (u) {
            var w = e + t, S = u._isStart;
            D = "scroll" + i.d2, _n(u, w, i, S && w > 20 || !S && (h ? Math.max(oe[D], Nt[D]) : u.parentNode[D]) <= w + 1), h && (l = Lt(s), h && (u.style[i.op.p] = l[i.op.p] - i.op.m - u._offset + Ne))
        }
        return c && g && (D = Lt(g), c.seek(_), p = Lt(g), c._caScrollDist = D[i.p] - p[i.p], e = e / c._caScrollDist * _), c && c.seek(d), c ? e : Math.round(e)
    }, ml = /(webkit|moz|length|cssText|inset)/i, gs = function (e, r, t, i) {
        if (e.parentNode !== r) {
            var n = e.style, u, s;
            if (r === oe) {
                e._stOrig = n.cssText, s = At(e);
                for (u in s) !+u && !ml.test(u) && s[u] && typeof n[u] == "string" && u !== "0" && (n[u] = s[u]);
                n.top = t, n.left = i
            } else n.cssText = e._stOrig;
            B.core.getCache(e).uncache = 1, r.appendChild(e)
        }
    }, ms = function (e, r) {
        var t = fr(e, r), i = "_scroll" + r.p2, n, u, s = function a(l, f, h, _, c) {
            var d = a.tween, D = f.onComplete, p = {};
            return h = h || t(), c = _ && c || 0, _ = _ || l - h, d && d.kill(), n = Math.round(h), f[i] = l, f.modifiers = p, p[i] = function (g) {
                return g = Xi(t()), g !== n && g !== u && Math.abs(g - n) > 2 && Math.abs(g - u) > 2 ? (d.kill(), a.tween = 0) : g = h + _ * d.ratio + c * d.ratio * d.ratio, u = n, n = Xi(g)
            }, f.onComplete = function () {
                a.tween = 0, D && D.call(d)
            }, d = a.tween = B.to(e, f), d
        };
        return e[i] = t, t.wheelHandler = function () {
            return s.tween && s.tween.kill() && (s.tween = 0)
        }, we(e, "wheel", t.wheelHandler), s
    }, W = function () {
        function o(r, t) {
            xr || o.register(B) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(r, t)
        }

        var e = o.prototype;
        return e.init = function (t, i) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Qi) {
                this.update = this.refresh = this.kill = Qt;
                return
            }
            t = ls(St(t) || Fi(t) || t.nodeType ? {trigger: t} : t, nn);
            var n = t, u = n.onUpdate, s = n.toggleClass, a = n.id, l = n.onToggle, f = n.onRefresh, h = n.scrub,
                _ = n.trigger, c = n.pin, d = n.pinSpacing, D = n.invalidateOnRefresh, p = n.anticipatePin,
                g = n.onScrubComplete, x = n.onSnapComplete, C = n.once, F = n.snap, E = n.pinReparent, b = n.pinSpacer,
                w = n.containerAnimation, S = n.fastScrollEnd, v = n.preventOverlaps,
                P = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Ve : ge, L = !h && h !== 0,
                O = Ge(t.scroller || Y), G = B.core.getCache(O), k = Mr(O),
                N = ("pinType" in t ? t.pinType : sr(O, "pinType") || k && "fixed") === "fixed",
                R = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], $ = L && t.toggleActions.split(" "),
                K = "markers" in t ? t.markers : nn.markers, Qe = k ? 0 : parseFloat(At(O)["border" + P.p2 + si]) || 0,
                m = this, xe = t.onRefreshInit && function () {
                    return t.onRefreshInit(m)
                }, hr = ll(O, k, P), $e = fl(O, k), ve = 0, $t = 0, ee = fr(O, P), Se, Be, ai, at, lt, H, Pe, Je, bt, Re, y, Ot,
                re, Wt, Gt, Lr, ze, li, Ht, le, et, Ae, fi, qt, wt, ci, jt, Dr, Ir, j, Kt, tt, Ct, Mt, Zt, _r, Nr, Bt;
            if (m.media = Jr, m._dir = P, p *= 45, m.scroller = O, m.scroll = w ? w.time.bind(w) : ee, at = ee(), m.vars = t, i = i || t.animation, "refreshPriority" in t && (Ao = 1, t.refreshPriority === -9999 && (Er = m)), G.tweenScroll = G.tweenScroll || {
                top: ms(O, ge),
                left: ms(O, Ve)
            }, m.tweenTo = Se = G.tweenScroll[P.p], m.scrubDuration = function (T) {
                Kt = Fi(T) && T, Kt ? j ? j.duration(T) : j = B.to(i, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: Kt,
                    paused: !0,
                    onComplete: function () {
                        return g && g(m)
                    }
                }) : (j && j.progress(1).kill(), j = 0)
            }, i && (i.vars.lazy = !1, i._initted || i.vars.immediateRender !== !1 && t.immediateRender !== !1 && i.render(0, !0, !0), m.animation = i.pause(), i.scrollTrigger = m, m.scrubDuration(h), Dr = 0, a || (a = i.vars.id)), U.push(m), F && ((!hn(F) || F.push) && (F = {snapTo: F}), "scrollBehavior" in oe.style && B.set(k ? [oe, Nt] : O, {scrollBehavior: "auto"}), ai = xt(F.snapTo) ? F.snapTo : F.snapTo === "labels" ? hl(i) : F.snapTo === "labelsDirectional" ? Dl(i) : F.directional !== !1 ? function (T, A) {
                return Iu(F.snapTo)(T, Xe() - $t < 500 ? 0 : A.direction)
            } : B.utils.snap(F.snapTo), tt = F.duration || {
                min: .1,
                max: 2
            }, tt = hn(tt) ? qr(tt.min, tt.max) : qr(tt, tt), Ct = B.delayedCall(F.delay || Kt / 2 || .1, function () {
                var T = ee(), A = Xe() - $t < 500, M = Se.tween;
                if ((A || Math.abs(m.getVelocity()) < 10) && !M && !Bn && ve !== T) {
                    var z = (T - H) / re, Ee = i && !L ? i.totalProgress() : z,
                        I = A ? 0 : (Ee - Ir) / (Xe() - cn) * 1e3 || 0, ce = B.utils.clamp(-z, 1 - z, Vr(I / 2) * I / .185),
                        ie = z + (F.inertia === !1 ? 0 : ce), Tt = qr(0, 1, ai(ie, m)), J = Math.round(H + Tt * re), Le = F,
                        yt = Le.onStart, ne = Le.onInterrupt, ue = Le.onComplete;
                    if (T <= Pe && T >= H && J !== T) {
                        if (M && !M._initted && M.data <= Vr(J - T)) return;
                        F.inertia === !1 && (ce = Tt - z), Se(J, {
                            duration: tt(Vr(Math.max(Vr(ie - Ee), Vr(Tt - Ee)) * .185 / I / .05 || 0)),
                            ease: F.ease || "power3",
                            data: Vr(J - T),
                            onInterrupt: function () {
                                return Ct.restart(!0) && ne && ne(m)
                            },
                            onComplete: function () {
                                m.update(), ve = ee(), Dr = Ir = i && !L ? i.totalProgress() : m.progress, x && x(m), ue && ue(m)
                            }
                        }, T, ce * re, J - T - ce * re), yt && yt(m, Se.tween)
                    }
                } else m.isActive && ve !== T && Ct.restart(!0)
            }).pause()), a && (du[a] = m), _ = m.trigger = Ge(_ || c), Bt = _ && _._gsap && _._gsap.stRevert, Bt && (Bt = Bt(m)), c = c === !0 ? _ : Ge(c), St(s) && (s = {
                targets: _,
                className: s
            }), c && (d === !1 || d === Dt || (d = !d && At(c.parentNode).display === "flex" ? !1 : _e), m.pin = c, t.force3D !== !1 && B.set(c, {force3D: !0}), Be = B.core.getCache(c), Be.spacer ? Wt = Be.pinState : (b && (b = Ge(b), b && !b.nodeType && (b = b.current || b.nativeElement), Be.spacerIsNative = !!b, b && (Be.spacerState = sn(b))), Be.spacer = ze = b || se.createElement("div"), ze.classList.add("pin-spacer"), a && ze.classList.add("pin-spacer-" + a), Be.pinState = Wt = sn(c)), m.spacer = ze = Be.spacer, jt = At(c), fi = jt[d + P.os2], Ht = B.getProperty(c), le = B.quickSetter(c, P.a, Ne), jn(c, ze, jt), Lr = sn(c)), K) {
                Ot = hn(K) ? ls(K, fs) : fs, Re = un("scroller-start", a, O, P, Ot, 0), y = un("scroller-end", a, O, P, Ot, 0, Re), li = Re["offset" + P.op.d2];
                var hi = Ge(sr(O, "content") || O);
                Je = this.markerStart = un("start", a, hi, P, Ot, li, 0, w), bt = this.markerEnd = un("end", a, hi, P, Ot, li, 0, w), w && (Nr = B.quickSetter([Je, bt], P.a, Ne)), !N && !(kt.length && sr(O, "fixedMarkers") === !0) && (cl(k ? oe : O), B.set([Re, y], {force3D: !0}), wt = B.quickSetter(Re, P.a, Ne), ci = B.quickSetter(y, P.a, Ne))
            }
            if (w) {
                var Di = w.vars.onUpdate, V = w.vars.onUpdateParams;
                w.eventCallback("onUpdate", function () {
                    m.update(0, 0, 1), Di && Di.apply(V || [])
                })
            }
            m.previous = function () {
                return U[U.indexOf(m) - 1]
            }, m.next = function () {
                return U[U.indexOf(m) + 1]
            }, m.revert = function (T) {
                var A = T !== !1 || !m.enabled, M = be;
                A !== m.isReverted && (A && (m.scroll.rec || !be || !Ui || (m.scroll.rec = ee()), Zt = Math.max(ee(), m.scroll.rec || 0), Mt = m.progress, _r = i && i.progress()), Je && [Je, bt, Re, y].forEach(function (z) {
                    return z.style.display = A ? "none" : "block"
                }), A && (be = 1), m.update(A), be = M, c && (A ? dl(c, ze, Wt) : (!E || !m.isActive) && jn(c, ze, At(c), qt)), m.isReverted = A)
            }, m.refresh = function (T, A) {
                if (!((be || !m.enabled) && !A)) {
                    if (c && T && gt) {
                        we(o, "scrollEnd", Xo);
                        return
                    }
                    !Ui && xe && xe(m), be = 1, $t = Xe(), Se.tween && (Se.tween.kill(), Se.tween = 0), j && j.pause(), D && i && i.time(-.01, !0).invalidate(), m.isReverted || m.revert();
                    for (var M = hr(), z = $e(), Ee = w ? w.duration() : ir(O, P), I = 0, ce = 0, ie = t.end, Tt = t.endTrigger || _, J = t.start || (t.start === 0 || !_ ? 0 : c ? "0 0" : "0 100%"), Le = m.pinnedContainer = t.pinnedContainer && Ge(t.pinnedContainer), yt = _ && Math.max(0, U.indexOf(m)) || 0, ne = yt, ue, he, Yr, dr, pe, De, Rt, zn, Nu, _i; ne--;) De = U[ne], De.end || De.refresh(0, 1) || (be = 1), Rt = De.pin, Rt && (Rt === _ || Rt === c) && !De.isReverted && (_i || (_i = []), _i.unshift(De), De.revert()), De !== U[ne] && (yt--, ne--);
                    for (xt(J) && (J = J(m)), H = ps(J, _, M, P, ee(), Je, Re, m, z, Qe, N, Ee, w) || (c ? -.001 : 0), xt(ie) && (ie = ie(m)), St(ie) && !ie.indexOf("+=") && (~ie.indexOf(" ") ? ie = (St(J) ? J.split(" ")[0] : "") + ie : (I = Dn(ie.substr(2), M), ie = St(J) ? J : H + I, Tt = _)), Pe = Math.max(H, ps(ie || (Tt ? "100% 0" : Ee), Tt, M, P, ee() + I, bt, y, m, z, Qe, N, Ee, w)) || -.001, re = Pe - H || (H -= .01) && .001, I = 0, ne = yt; ne--;) De = U[ne], Rt = De.pin, Rt && De.start - De._pinPush < H && !w && De.end > 0 && (ue = De.end - De.start, (Rt === _ || Rt === Le) && !Fi(J) && (I += ue * (1 - De.progress)), Rt === c && (ce += ue));
                    if (H += I, Pe += I, m._pinPush = ce, Je && I && (ue = {}, ue[P.a] = "+=" + I, Le && (ue[P.p] = "-=" + ee()), B.set([Je, bt], ue)), c) ue = At(c), dr = P === ge, Yr = ee(), et = parseFloat(Ht(P.a)) + ce, !Ee && Pe > 1 && ((k ? oe : O).style["overflow-" + P.a] = "scroll"), jn(c, ze, ue), Lr = sn(c), he = Lt(c, !0), zn = N && fr(O, dr ? Ve : ge)(), d && (qt = [d + P.os2, re + ce + Ne], qt.t = ze, ne = d === _e ? _u(c, P) + re + ce : 0, ne && qt.push(P.d, ne + Ne), Wi(qt), N && ee(Zt)), N && (pe = {
                        top: he.top + (dr ? Yr - H : zn) + Ne,
                        left: he.left + (dr ? zn : Yr - H) + Ne,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, pe[Ar] = pe["max" + si] = Math.ceil(he.width) + Ne, pe[kr] = pe["max" + Lu] = Math.ceil(he.height) + Ne, pe[Dt] = pe[Dt + ki] = pe[Dt + Pi] = pe[Dt + Oi] = pe[Dt + Ai] = "0", pe[_e] = ue[_e], pe[_e + ki] = ue[_e + ki], pe[_e + Pi] = ue[_e + Pi], pe[_e + Oi] = ue[_e + Oi], pe[_e + Ai] = ue[_e + Ai], Gt = gl(Wt, pe, E)), i ? (Nu = i._initted, Wn(1), i.render(i.duration(), !0, !0), Ae = Ht(P.a) - et + re + ce, re !== Ae && N && Gt.splice(Gt.length - 2, 2), i.render(0, !0, !0), Nu || i.invalidate(), Wn(0)) : Ae = re; else if (_ && ee() && !w) for (he = _.parentNode; he && he !== oe;) he._pinOffset && (H -= he._pinOffset, Pe -= he._pinOffset), he = he.parentNode;
                    _i && _i.forEach(function (Zo) {
                        return Zo.revert(!1)
                    }), m.start = H, m.end = Pe, at = lt = ee(), w || (at < Zt && ee(Zt), m.scroll.rec = 0), m.revert(!1), Ct && (ve = -1, m.isActive && ee(H + re * Mt), Ct.restart(!0)), be = 0, i && L && (i._initted || _r) && i.progress() !== _r && i.progress(_r, !0).render(i.time(), !0, !0), (Mt !== m.progress || w) && (i && !L && i.totalProgress(Mt, !0), m.progress = Mt, m.update(0, 0, 1)), c && d && (ze._pinOffset = Math.round(m.progress * Ae)), f && f(m)
                }
            }, m.getVelocity = function () {
                return (ee() - lt) / (Xe() - cn) * 1e3 || 0
            }, m.endAnimation = function () {
                gi(m.callbackAnimation), i && (j ? j.progress(1) : i.paused() ? L || gi(i, m.direction < 0, 1) : gi(i, i.reversed()))
            }, m.labelToScroll = function (T) {
                return i && i.labels && (H || m.refresh() || H) + i.labels[T] / i.duration() * re || 0
            }, m.getTrailing = function (T) {
                var A = U.indexOf(m), M = m.direction > 0 ? U.slice(0, A).reverse() : U.slice(A + 1);
                return (St(T) ? M.filter(function (z) {
                    return z.vars.preventOverlaps === T
                }) : M).filter(function (z) {
                    return m.direction > 0 ? z.end <= H : z.start >= Pe
                })
            }, m.update = function (T, A, M) {
                if (!(w && !M && !T)) {
                    var z = m.scroll(), Ee = T ? 0 : (z - H) / re, I = Ee < 0 ? 0 : Ee > 1 ? 1 : Ee || 0, ce = m.progress,
                        ie, Tt, J, Le, yt, ne, ue, he;
                    if (A && (lt = at, at = w ? ee() : z, F && (Ir = Dr, Dr = i && !L ? i.totalProgress() : I)), p && !I && c && !be && !yi && gt && H < z + (z - lt) / (Xe() - cn) * p && (I = 1e-4), I !== ce && m.enabled) {
                        if (ie = m.isActive = !!I && I < 1, Tt = !!ce && ce < 1, ne = ie !== Tt, yt = ne || !!I != !!ce, m.direction = I > ce ? 1 : -1, m.progress = I, yt && !be && (J = I && !ce ? 0 : I === 1 ? 1 : ce === 1 ? 2 : 3, L && (Le = !ne && $[J + 1] !== "none" && $[J + 1] || $[J], he = i && (Le === "complete" || Le === "reset" || Le in i))), v && (ne || he) && (he || h || !i) && (xt(v) ? v(m) : m.getTrailing(v).forEach(function (De) {
                            return De.endAnimation()
                        })), L || (j && !be && !yi ? ((w || Er && Er !== m) && j.render(j._dp._time - j._start), j.resetTo ? j.resetTo("totalProgress", I, i._tTime / i._tDur) : (j.vars.totalProgress = I, j.invalidate().restart())) : i && i.totalProgress(I, !!be)), c) {
                            if (T && d && (ze.style[d + P.os2] = fi), !N) le(Xi(et + Ae * I)); else if (yt) {
                                if (ue = !T && I > ce && Pe + 1 > z && z + 1 >= ir(O, P), E) if (!T && (ie || ue)) {
                                    var Yr = Lt(c, !0), dr = z - H;
                                    gs(c, oe, Yr.top + (P === ge ? dr : 0) + Ne, Yr.left + (P === ge ? 0 : dr) + Ne)
                                } else gs(c, ze);
                                Wi(ie || ue ? Gt : Lr), Ae !== re && I < 1 && ie || le(et + (I === 1 && !ue ? Ae : 0))
                            }
                        }
                        F && !Se.tween && !be && !yi && Ct.restart(!0), s && (ne || C && I && (I < 1 || !Gn)) && Pn(s.targets).forEach(function (De) {
                            return De.classList[ie || C ? "add" : "remove"](s.className)
                        }), u && !L && !T && u(m), yt && !be ? (L && (he && (Le === "complete" ? i.pause().totalProgress(1) : Le === "reset" ? i.restart(!0).pause() : Le === "restart" ? i.restart(!0) : i[Le]()), u && u(m)), (ne || !Gn) && (l && ne && qn(m, l), R[J] && qn(m, R[J]), C && (I === 1 ? m.kill(!1, 1) : R[J] = 0), ne || (J = I === 1 ? 1 : 3, R[J] && qn(m, R[J]))), S && !ie && Math.abs(m.getVelocity()) > (Fi(S) ? S : 2500) && (gi(m.callbackAnimation), j ? j.progress(1) : gi(i, !I, 1))) : L && u && !be && u(m)
                    }
                    if (ci) {
                        var pe = w ? z / w.duration() * (w._caScrollDist || 0) : z;
                        wt(pe + (Re._isFlipped ? 1 : 0)), ci(pe)
                    }
                    Nr && Nr(-z / w.duration() * (w._caScrollDist || 0))
                }
            }, m.enable = function (T, A) {
                m.enabled || (m.enabled = !0, we(O, "resize", xi), we(k ? se : O, "scroll", Ur), xe && we(o, "refreshInit", xe), T !== !1 && (m.progress = Mt = 0, at = lt = ve = ee()), A !== !1 && m.refresh())
            }, m.getTween = function (T) {
                return T && Se ? Se.tween : j
            }, m.setPositions = function (T, A) {
                c && (et += T - H, Ae += A - T - re), m.start = H = T, m.end = Pe = A, re = A - T, m.update()
            }, m.disable = function (T, A) {
                if (m.enabled && (T !== !1 && m.revert(), m.enabled = m.isActive = !1, A || j && j.pause(), Zt = 0, Be && (Be.uncache = 1), xe && me(o, "refreshInit", xe), Ct && (Ct.pause(), Se.tween && Se.tween.kill() && (Se.tween = 0)), !k)) {
                    for (var M = U.length; M--;) if (U[M].scroller === O && U[M] !== m) return;
                    me(O, "resize", xi), me(O, "scroll", Ur)
                }
            }, m.kill = function (T, A) {
                m.disable(T, A), j && !A && j.kill(), a && delete du[a];
                var M = U.indexOf(m);
                M >= 0 && U.splice(M, 1), M === Ye && pn > 0 && Ye--, M = 0, U.forEach(function (z) {
                    return z.scroller === m.scroller && (M = 1)
                }), M || (m.scroll.rec = 0), i && (i.scrollTrigger = null, T && i.render(-1), A || i.kill()), Je && [Je, bt, Re, y].forEach(function (z) {
                    return z.parentNode && z.parentNode.removeChild(z)
                }), Er === m && (Er = 0), c && (Be && (Be.uncache = 1), M = 0, U.forEach(function (z) {
                    return z.pin === c && M++
                }), M || (Be.spacer = 0)), t.onKill && t.onKill(m)
            }, m.enable(!1, !1), Bt && Bt(m), !i || !i.add || re ? m.refresh() : B.delayedCall(.01, function () {
                return H || Pe || m.refresh()
            }) && (re = .01) && (H = Pe = 0)
        }, o.register = function (t) {
            return xr || (B = t || zo(), Ro() && window.document && o.enable(), xr = Qi), xr
        }, o.defaults = function (t) {
            if (t) for (var i in t) nn[i] = t[i];
            return nn
        }, o.disable = function (t, i) {
            Qi = 0, U.forEach(function (u) {
                return u[i ? "kill" : "disable"](t)
            }), me(Y, "wheel", Ur), me(se, "scroll", Ur), clearInterval(Zi), me(se, "touchcancel", Qt), me(oe, "touchstart", Qt), tn(me, se, "pointerdown,touchstart,mousedown", ss), tn(me, se, "pointerup,touchend,mouseup", os), Sn.kill(), Ji(me);
            for (var n = 0; n < q.length; n += 3) rn(me, q[n], q[n + 1]), rn(me, q[n], q[n + 2])
        }, o.enable = function () {
            if (Y = window, se = document, Nt = se.documentElement, oe = se.body, B && (Pn = B.utils.toArray, qr = B.utils.clamp, Wn = B.core.suppressOverwrites || Qt, B.core.globals("ScrollTrigger", o), oe)) {
                Qi = 1, de.register(B), o.isTouch = de.isTouch, Fr = de.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), we(Y, "wheel", Ur), Po = [Y, se, Nt, oe], o.matchMedia({
                    "(orientation: portrait)": function () {
                        return hs(), hs
                    }
                }), we(se, "scroll", Ur);
                var t = oe.style, i = t.borderTopStyle, n, u;
                for (t.borderTopStyle = "solid", n = Lt(oe), ge.m = Math.round(n.top + ge.sc()) || 0, Ve.m = Math.round(n.left + Ve.sc()) || 0, i ? t.borderTopStyle = i : t.removeProperty("border-top-style"), Zi = setInterval(cs, 250), B.delayedCall(.5, function () {
                    return yi = 0
                }), we(se, "touchcancel", Qt), we(oe, "touchstart", Qt), tn(we, se, "pointerdown,touchstart,mousedown", ss), tn(we, se, "pointerup,touchend,mouseup", os), Du = B.utils.checkPrefix("transform"), gn.push(Du), xr = Xe(), Sn = B.delayedCall(.2, ei).pause(), $r = [se, "visibilitychange", function () {
                    var s = Y.innerWidth, a = Y.innerHeight;
                    se.hidden ? (ns = s, us = a) : (ns !== s || us !== a) && xi()
                }, se, "DOMContentLoaded", ei, Y, "load", ei, Y, "resize", xi], Ji(we), U.forEach(function (s) {
                    return s.enable(0, 1)
                }), u = 0; u < q.length; u += 3) rn(me, q[u], q[u + 1]), rn(me, q[u], q[u + 2])
            }
        }, o.config = function (t) {
            "limitCallbacks" in t && (Gn = !!t.limitCallbacks);
            var i = t.syncInterval;
            i && clearInterval(Zi) || (Zi = i) && setInterval(cs, i), "ignoreMobileResize" in t && (Oo = o.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Ji(me) || Ji(we, t.autoRefreshEvents || "none"), ko = (t.autoRefreshEvents + "").indexOf("resize") === -1)
        }, o.scrollerProxy = function (t, i) {
            var n = Ge(t), u = q.indexOf(n), s = Mr(n);
            ~u && q.splice(u, s ? 6 : 2), i && (s ? kt.unshift(Y, i, oe, i, Nt, i) : kt.unshift(n, i))
        }, o.matchMedia = function (t) {
            var i, n, u, s, a;
            for (n in t) u = ae.indexOf(n), s = t[n], Jr = n, n === "all" ? s() : (i = Y.matchMedia(n), i && (i.matches && (a = s()), ~u ? (ae[u + 1] = as(ae[u + 1], s), ae[u + 2] = as(ae[u + 2], a)) : (u = ae.length, ae.push(n, s, a), i.addListener ? i.addListener(_s) : i.addEventListener("change", _s)), ae[u + 3] = i.matches)), Jr = 0;
            return ae
        }, o.clearMatchMedia = function (t) {
            t || (ae.length = 0), t = ae.indexOf(t), t >= 0 && ae.splice(t, 4)
        }, o.isInViewport = function (t, i, n) {
            var u = (St(t) ? Ge(t) : t).getBoundingClientRect(), s = u[n ? Ar : kr] * i || 0;
            return n ? u.right - s > 0 && u.left + s < Y.innerWidth : u.bottom - s > 0 && u.top + s < Y.innerHeight
        }, o.positionInViewport = function (t, i, n) {
            St(t) && (t = Ge(t));
            var u = t.getBoundingClientRect(), s = u[n ? Ar : kr],
                a = i == null ? s / 2 : i in An ? An[i] * s : ~i.indexOf("%") ? parseFloat(i) * s / 100 : parseFloat(i) || 0;
            return n ? (u.left + a) / Y.innerWidth : (u.top + a) / Y.innerHeight
        }, o
    }();
W.version = "3.10.4";
W.saveStyles = function (o) {
    return o ? Pn(o).forEach(function (e) {
        if (e && e.style) {
            var r = ht.indexOf(e);
            r >= 0 && ht.splice(r, 5), ht.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), B.core.getCache(e), Jr)
        }
    }) : ht
};
W.revert = function (o, e) {
    return kn(!o, e)
};
W.create = function (o, e) {
    return new W(o, e)
};
W.refresh = function (o) {
    return o ? xi() : (xr || W.register()) && ei(!0)
};
W.update = $i;
W.clearScrollMemory = Uo;
W.maxScroll = function (o, e) {
    return ir(o, e ? Ve : ge)
};
W.getScrollFunc = function (o, e) {
    return fr(Ge(o), e ? Ve : ge)
};
W.getById = function (o) {
    return du[o]
};
W.getAll = function () {
    return U.filter(function (o) {
        return o.vars.id !== "ScrollSmoother"
    })
};
W.isScrolling = function () {
    return !!gt
};
W.snapDirectional = Iu;
W.addEventListener = function (o, e) {
    var r = Vi[o] || (Vi[o] = []);
    ~r.indexOf(e) || r.push(e)
};
W.removeEventListener = function (o, e) {
    var r = Vi[o], t = r && r.indexOf(e);
    t >= 0 && r.splice(t, 1)
};
W.batch = function (o, e) {
    var r = [], t = {}, i = e.interval || .016, n = e.batchMax || 1e9, u = function (l, f) {
        var h = [], _ = [], c = B.delayedCall(i, function () {
            f(h, _), h = [], _ = []
        }).pause();
        return function (d) {
            h.length || c.restart(!0), h.push(d.trigger), _.push(d), n <= h.length && c.progress(1)
        }
    }, s;
    for (s in e) t[s] = s.substr(0, 2) === "on" && xt(e[s]) && s !== "onRefreshInit" ? u(s, e[s]) : e[s];
    return xt(n) && (n = n(), we(W, "refresh", function () {
        return n = e.batchMax()
    })), Pn(o).forEach(function (a) {
        var l = {};
        for (s in t) l[s] = t[s];
        l.trigger = a, r.push(W.create(l))
    }), r
};
var Cs = function (e, r, t, i) {
    return r > i ? e(i) : r < 0 && e(0), t > i ? (i - r) / (t - r) : t < 0 ? r / (r - t) : 1
}, Kn = function o(e, r) {
    r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (de.isTouch ? " pinch-zoom" : "") : "none", e === Nt && o(oe, r)
}, ys = {auto: 1, scroll: 1}, Cl = function (e) {
    var r = e.event, t = e.target, i = e.axis, n = (r.changedTouches ? r.changedTouches[0] : r).target,
        u = n._gsap || B.core.getCache(n), s = Xe(), a;
    if (!u._isScrollT || s - u._isScrollT > 2e3) {
        for (; n && n.scrollHeight <= n.clientHeight;) n = n.parentNode;
        u._isScroll = n && !Mr(n) && n !== t && (ys[(a = At(n)).overflowY] || ys[a.overflowX]), u._isScrollT = s
    }
    (u._isScroll || i === "x") && (r._gsapAllow = !0)
}, $o = function (e, r, t, i) {
    return de.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: r,
        onWheel: i = i && Cl,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
            return t && we(se, de.eventTypes[0], xs, !1, !0)
        },
        onDisable: function () {
            return me(se, de.eventTypes[0], xs, !0)
        }
    })
}, yl = /(input|label|select|textarea)/i, Fs, xs = function (e) {
    var r = yl.test(e.target.tagName);
    (r || Fs) && (e._gsapAllow = !0, Fs = r)
}, Fl = function (e) {
    hn(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var r = e, t = r.normalizeScrollX, i = r.momentum, n = r.allowNestedScroll, u, s, a = Ge(e.target) || Nt,
        l = B.core.globals().ScrollSmoother,
        f = Fr && (e.content && Ge(e.content) || l && l.get() && l.get().content()), h = fr(a, ge), _ = fr(a, Ve),
        c = 1,
        d = (de.isTouch && Y.visualViewport ? Y.visualViewport.scale * Y.visualViewport.width : Y.outerWidth) / Y.innerWidth,
        D = 0, p = xt(i) ? function () {
            return i(u)
        } : function () {
            return i || 2.8
        }, g, x, C = $o(a, e.type, !0, n), F = function () {
            return g = !1
        }, E = Qt, b = Qt, w = function () {
            s = ir(a, ge), b = qr(Fr ? 1 : 0, s), t && (E = qr(0, ir(a, Ve))), x = dn
        }, S = function () {
            if (g) {
                requestAnimationFrame(F);
                var N = Xi(u.deltaY / 2), R = b(h.v - N);
                return f && R !== h.v + h.offset && (h.offset = R - h.v, f.style.transform = "translateY(" + -h.offset + "px)", f._gsap && (f._gsap.y = -h.offset + "px"), h.cacheID = q.cache, $i()), !0
            }
            f && (f.style.transform = "translateY(0px)", h.offset = h.cacheID = 0, f._gsap && (f._gsap.y = "0px")), g = !0
        }, v, P, L, O, G = function () {
            w(), v.isActive() && v.vars.scrollY > s && (h() > s ? v.progress(1) && h(s) : v.resetTo("scrollY", s))
        };
    return e.ignoreCheck = function (k) {
        return Fr && k.type === "touchmove" && S() || c > 1.05 && k.type !== "touchstart" || u.isGesturing || k.touches && k.touches.length > 1
    }, e.onPress = function () {
        var k = c;
        c = Xi((Y.visualViewport && Y.visualViewport.scale || 1) / d), v.pause(), k !== c && Kn(a, c > 1.01 ? !0 : t ? !1 : "x"), g = !1, P = _(), L = h(), w(), x = dn
    }, e.onRelease = e.onGestureStart = function (k, N) {
        if (f && (f.style.transform = "translateY(0px)", h.offset = h.cacheID = 0, f._gsap && (f._gsap.y = "0px")), !N) O.restart(!0); else {
            q.cache++;
            var R = p(), $, K;
            t && ($ = _(), K = $ + R * .05 * -k.velocityX / .227, R *= Cs(_, $, K, ir(a, Ve)), v.vars.scrollX = E(K)), $ = h(), K = $ + R * .05 * -k.velocityY / .227, R *= Cs(h, $, K, ir(a, ge)), v.vars.scrollY = b(K), v.invalidate().duration(R).play(.01), (Fr && v.vars.scrollY >= s || $ >= s - 1) && B.to({}, {
                onUpdate: G,
                duration: R
            })
        }
    }, e.onWheel = function () {
        v._ts && v.pause(), Xe() - D > 1e3 && (x = 0, D = Xe())
    }, e.onChange = function (k, N, R, $, K) {
        dn !== x && w(), N && t && _(E($[2] === N ? P + (k.startX - k.x) : _() + N - $[1])), R && h(b(K[2] === R ? L + (k.startY - k.y) : h() + R - K[1])), $i()
    }, e.onEnable = function () {
        Kn(a, t ? !1 : "x"), we(Y, "resize", G), C.enable()
    }, e.onDisable = function () {
        Kn(a, !0), me(Y, "resize", G), C.kill()
    }, u = new de(e), u.iOS = Fr, Fr && !h() && h(1), O = u._dc, v = B.to(u, {
        ease: "power4",
        paused: !0,
        scrollX: t ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: O.vars.onComplete
    }), u
};
W.sort = function (o) {
    return U.sort(o || function (e, r) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (r.start + (r.vars.refreshPriority || 0) * -1e6)
    })
};
W.observe = function (o) {
    return new de(o)
};
W.normalizeScroll = function (o) {
    if (typeof o == "undefined") return ct;
    if (o === !0 && ct) return ct.enable();
    if (o === !1) return ct && ct.kill();
    var e = o instanceof de ? o : Fl(o);
    return ct && ct.target === e.target && ct.kill(), Mr(e.target) && (ct = e), e
};
W.core = {
    _getVelocityProp: hu, _inputObserver: $o, _scrollers: q, _proxies: kt, bridge: {
        ss: function () {
            gt || Br("scrollStart"), gt = Xe()
        }, ref: function () {
            return be
        }
    }
};
zo() && B.registerPlugin(W);/*!
 * strings: 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var xl = /(^\s+|\s+$)/g,
    El = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function Wo(o) {
    var e = o.nodeType, r = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof o.textContent == "string") return o.textContent;
        for (o = o.firstChild; o; o = o.nextSibling) r += Wo(o)
    } else if (e === 3 || e === 4) return o.nodeValue;
    return r
}

function mu(o, e, r, t) {
    for (var i = o.firstChild, n = [], u; i;) i.nodeType === 3 ? (u = (i.nodeValue + "").replace(/^\n+/g, ""), t || (u = u.replace(/\s+/g, " ")), n.push.apply(n, Go(u, e, r, t))) : (i.nodeName + "").toLowerCase() === "br" ? n[n.length - 1] += "<br>" : n.push(i.outerHTML), i = i.nextSibling;
    for (u = n.length; u--;) n[u] === "&" && n.splice(u, 1, "&amp;");
    return n
}

function Go(o, e, r, t) {
    if (o += "", r && (o = o.replace(xl, "")), e && e !== "") return o.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var i = [], n = o.length, u = 0, s, a; u < n; u++) a = o.charAt(u), (a.charCodeAt(0) >= 55296 && a.charCodeAt(0) <= 56319 || o.charCodeAt(u + 1) >= 65024 && o.charCodeAt(u + 1) <= 65039) && (s = ((o.substr(u, 12).split(El) || [])[1] || "").length || 2, a = o.substr(u, s), i.emoji = 1, u += s - 1), i.push(a === ">" ? "&gt;" : a === "<" ? "&lt;" : t && a === " " && (o.charAt(u - 1) === " " || o.charAt(u + 1) === " ") ? "&nbsp;" : a);
    return i
}/*!
 * TextPlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ei, on, bl = function () {
    return Ei || typeof window != "undefined" && (Ei = window.gsap) && Ei.registerPlugin && Ei
}, Hi = {
    version: "3.10.4", name: "text", init: function (e, r, t) {
        typeof r != "object" && (r = {value: r});
        var i = e.nodeName.toUpperCase(), n = this, u = r, s = u.newClass, a = u.oldClass, l = u.preserveSpaces,
            f = u.rtl, h = n.delimiter = r.delimiter || "", _ = n.fillChar = r.fillChar || (r.padSpace ? "&nbsp;" : ""),
            c, d, D, p, g, x, C, F;
        if (n.svg = e.getBBox && (i === "TEXT" || i === "TSPAN"), !("innerHTML" in e) && !n.svg) return !1;
        if (n.target = e, !("value" in r)) {
            n.text = n.original = [""];
            return
        }
        for (D = mu(e, h, !1, l), on || (on = document.createElement("div")), on.innerHTML = r.value, d = mu(on, h), n.from = t._from, (n.from || f) && !(f && n.from) && (i = D, D = d, d = i), n.hasClass = !!(s || a), n.newClass = f ? a : s, n.oldClass = f ? s : a, i = D.length - d.length, c = i < 0 ? D : d, i < 0 && (i = -i); --i > -1;) c.push(_);
        if (r.type === "diff") {
            for (p = 0, g = [], x = [], C = "", i = 0; i < d.length; i++) F = d[i], F === D[i] ? C += F : (g[p] = C + F, x[p++] = C + D[i], C = "");
            d = g, D = x, C && (d.push(C), D.push(C))
        }
        r.speed && t.duration(Math.min(.05 / r.speed * c.length, r.maxDuration || 9999)), n.rtl = f, n.original = D, n.text = d, n._props.push("text")
    }, render: function (e, r) {
        e > 1 ? e = 1 : e < 0 && (e = 0), r.from && (e = 1 - e);
        var t = r.text, i = r.hasClass, n = r.newClass, u = r.oldClass, s = r.delimiter, a = r.target, l = r.fillChar,
            f = r.original, h = r.rtl, _ = t.length, c = (h ? 1 - e : e) * _ + .5 | 0, d, D, p;
        i && e ? (d = n && c, D = u && c !== _, p = (d ? "<span class='" + n + "'>" : "") + t.slice(0, c).join(s) + (d ? "</span>" : "") + (D ? "<span class='" + u + "'>" : "") + s + f.slice(c).join(s) + (D ? "</span>" : "")) : p = t.slice(0, c).join(s) + s + f.slice(c).join(s), r.svg ? a.textContent = p : a.innerHTML = l === "&nbsp;" && ~p.indexOf("  ") ? p.split("  ").join("&nbsp;&nbsp;") : p
    }
};
Hi.splitInnerHTML = mu;
Hi.emojiSafeSplit = Go;
Hi.getText = Wo;
bl() && Ei.registerPlugin(Hi);/*!
 * EasePack 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ut, an, Ho = function () {
    return ut || typeof window != "undefined" && (ut = window.gsap) && ut.registerPlugin && ut
}, Cu = function (e, r) {
    return !!(typeof e == "undefined" ? r : e && !~(e + "").indexOf("false"))
}, wl = function (e) {
    if (ut = e || Ho(), ut) {
        an = ut.registerEase;
        var r = ut.parseEase(), t = function (u) {
            return function (s) {
                var a = .5 + s / 2;
                u.config = function (l) {
                    return u(2 * (1 - l) * l * a + l * l)
                }
            }
        }, i;
        for (i in r) r[i].config || t(r[i]);
        an("slow", Rr), an("expoScale", Rn), an("rough", oi);
        for (i in Mi) i !== "version" && ut.core.globals(i, Mi[i])
    }
}, qo = function (e, r, t) {
    e = Math.min(1, e || .7);
    var i = e < 1 ? r || r === 0 ? r : .7 : 0, n = (1 - e) / 2, u = n + e, s = Cu(t);
    return function (a) {
        var l = a + (.5 - a) * i;
        return a < n ? s ? 1 - (a = 1 - a / n) * a : l - (a = 1 - a / n) * a * a * a * l : a > u ? s ? a === 1 ? 0 : 1 - (a = (a - u) / n) * a : l + (a - l) * (a = (a - u) / n) * a * a * a : s ? 1 : l
    }
}, jo = function (e, r, t) {
    var i = Math.log(r / e), n = r - e;
    return t && (t = ut.parseEase(t)), function (u) {
        return (e * Math.exp(i * (t ? t(u) : u)) - e) / n
    }
}, Zn = function (e, r, t) {
    this.t = e, this.v = r, t && (this.next = t, t.prev = this, this.c = t.v - r, this.gap = t.t - e)
}, Ko = function (e) {
    typeof e != "object" && (e = {points: +e || 20});
    for (var r = e.taper || "none", t = [], i = 0, n = (+e.points || 20) | 0, u = n, s = Cu(e.randomize, !0), a = Cu(e.clamp), l = ut ? ut.parseEase(e.template) : 0, f = (+e.strength || 1) * .4, h, _, c, d, D, p, g; --u > -1;) h = s ? Math.random() : 1 / n * u, _ = l ? l(h) : h, r === "none" ? c = f : r === "out" ? (d = 1 - h, c = d * d * f) : r === "in" ? c = h * h * f : h < .5 ? (d = h * 2, c = d * d * .5 * f) : (d = (1 - h) * 2, c = d * d * .5 * f), s ? _ += Math.random() * c - c * .5 : u % 2 ? _ += c * .5 : _ -= c * .5, a && (_ > 1 ? _ = 1 : _ < 0 && (_ = 0)), t[i++] = {
        x: h,
        y: _
    };
    for (t.sort(function (x, C) {
        return x.x - C.x
    }), p = new Zn(1, 1, null), u = n; u--;) D = t[u], p = new Zn(D.x, D.y, p);
    return g = new Zn(0, 0, p.t ? p : p.next), function (x) {
        var C = g;
        if (x > C.t) {
            for (; C.next && x >= C.t;) C = C.next;
            C = C.prev
        } else for (; C.prev && x <= C.t;) C = C.prev;
        return g = C, C.v + (x - C.t) / C.gap * C.c
    }
}, Rr = qo(.7);
Rr.ease = Rr;
Rr.config = qo;
var Rn = jo(1, 2);
Rn.config = jo;
var oi = Ko();
oi.ease = oi;
oi.config = Ko;
var Mi = {SlowMo: Rr, RoughEase: oi, ExpoScaleEase: Rn};
for (var Es in Mi) Mi[Es].register = wl, Mi[Es].version = "3.10.4";
Ho() && ut.registerPlugin(Rr);
Ze.registerPlugin(Rn, oi, Rr);
Ze.registerPlugin(Hi);
Ze.registerPlugin(W);
let Tl = window.innerWidth / 2, vl = window.innerHeight / 2;
Ze.set(".opener-circle", {scale: 0});
Ze.set(".opener-logo", {x: window.innerWidth / 2, xPercent: -50, y: window.innerHeight / 2, yPercent: -50, scale: 0});
Ze.set(".opener-bar", {scaleX: 1, scaleY: 1, xPercent: -150});
Ze.set(".hero", {display: "none", opacity: 0});
Math.getDistance = function (o, e, r, t) {
    let i = r - o, n = t - e;
    return i *= i, n *= n, Math.sqrt(i + n)
};
let Sl = Math.getDistance(0, 0, Tl, vl), Pl = Sl * 2, Al = Pl / 100, kl = Ze.timeline({onComplete: Ml});
kl.to(".opener-logo", {scale: 1.2, ease: "bounce", duration: 2}).to(".opener-logo", {
    duration: 1,
    rotation: 180
}).to(".opener-logo", {duration: .5, yPercent: -100, ease: "back"}, "<").to(".opener-logo", {
    duration: .5,
    yPercent: -50,
    ease: "bounce"
}, "<0.5").to(".opener-logo", {duration: 1, rotation: 360}, "+=0.5").to(".opener-logo", {
    duration: .5,
    yPercent: -100,
    ease: "back"
}, "<").to(".opener-logo", {duration: .5, yPercent: -50, ease: "bounce"}, "<0.5").to(".opener-logo", {
    duration: 1,
    rotation: 540
}, "+=0.5").to(".opener-logo", {duration: .5, yPercent: -100, ease: "back"}, "<").to(".opener-logo", {
    duration: .5,
    yPercent: -50,
    ease: "bounce"
}, "<0.5").to(".opener-logo", {
    duration: .5,
    scale: 0
}, "+=0.5").fromTo(".opener-title", {top: 0}, {
    x: window.innerWidth / 2,
    xPercent: -50,
    y: window.innerHeight / 2,
    yPercent: -50,
    autoAlpha: 1
}).to(".opener-bar", {xPercent: 0, duration: 3, stagger: .3}).to(".opener-title", {
    duration: 2,
    color: "black"
}, "<").to(".opener-title", {scale: 1.5, duration: .6, opacity: 0}).to(".opener-title", {
    text: "Hi",
    duration: 0,
    opacity: 0,
    scale: 0
}).to(".opener-title", {duration: .6, scale: 1, opacity: 1}).to(".opener-title", {
    scale: 1.5,
    duration: .6,
    opacity: 0
}, "+=1").to(".opener-title", {
    text: "I'm G7M7T1",
    duration: 0,
    opacity: 0,
    scale: 0
}).to(".opener-title", {duration: .6, scale: 1, opacity: 1}).to(".opener-title", {
    scale: 1.5,
    duration: .6,
    opacity: 0
}, "+=1").to(".opener-title", {
    text: "I'm Web Developer",
    duration: 0,
    opacity: 0,
    scale: 0
}).to(".opener-title", {duration: .6, scale: 1, opacity: 1}).to(".opener-title", {
    scale: 1.5,
    duration: .6,
    opacity: 0
}, "+=1").to(".opener-title", {text: "Also!!!", duration: 0, opacity: 0, scale: 0}).to(".opener-title", {
    duration: .6,
    scale: 1,
    opacity: 1
}).to(".opener-title", {
    scale: 1.5,
    duration: .6,
    opacity: 0
}, "+=0.5").to(".opener-title", {
    text: "I'm Graphic Designer",
    duration: 0,
    opacity: 0,
    scale: 0
}).to(".opener-title", {duration: .6, scale: 1, opacity: 1}).to(".opener-title", {
    scale: 1.5,
    duration: .6,
    opacity: 0
}, "+=1").to(".opener-title", {
    text: "Let's Start",
    duration: 0,
    opacity: 0,
    scale: 0
}).to(".opener-title", {duration: .6, scale: 1, opacity: 1}).to(".opener-title", {
    scale: 1.5,
    duration: .6,
    opacity: 0
}, "+=2").to(".opener-title", {
    text: "First, I like Darker",
    duration: 0,
    opacity: 0,
    scale: 0
}).to(".opener-title", {duration: .6, scale: 1, opacity: 1}).to(".opener-title", {
    scale: 1.5,
    duration: .6,
    opacity: 0
}, "+=2").to(".opener-bar", {xPercent: 150, duration: 3}).to(".opener-circle", {
    duration: 2,
    scale: 1.2,
    rotation: 360
}, "<2").to(".opener-circle", {scale: Al, duration: 1.5}).to(".opener-circle", {
    rotation: 360,
    duration: 1.5
}, "<").to(".opener", {display: "none"}).to(".hero", {
    display: "flex",
    opacity: 0,
    duration: 0
}, "<").to(".hero", {opacity: 1}, "<").set(".animationWrapper", {
    opacity: 1,
    duration: 0
}, "<").from(".headings h1", {xPercent: -100, opacity: 0, duration: 1}, "<").from(".headings h2", {
    xPercent: 100,
    opacity: 0,
    duration: 1
}, "<+0.25").from(".logo", {scale: .3, opacity: 0, duration: .5}, "<+0.5");
let Ol = Ze.timeline({paused: !0}).to(".headings h1", {y: -100, opacity: 0}).to(".headings h2", {
    y: 100,
    opacity: 0
}, "<").set(".rotator", {opacity: 1}, "<").from(".rotator h1", {
    opacity: 0,
    scale: 0,
    stagger: 1
}, "<").to(".rotator h1", {opacity: 0, scale: 2, stagger: 1}, "<+1").to(".headings h1", {
    y: 0,
    opacity: 1
}).to(".headings h2", {y: 0, opacity: 1}, "<").set("nav", {display: "flex", y: -100}).to("nav", {opacity: 1, y: 0});

function Ml() {
    Ze.set(".main", {display: "block", position: "relative"}), W.create({
        trigger: ".hero",
        start: "top top",
        pin: !0,
        end: "+=" + window.innerHeight * 3,
        animation: Ol,
        scrub: .8
    })
}

let bs = 0, Qn = !0,
    Bl = Ze.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 20, ease: "linear"}).totalProgress(.5);
Ze.set(".marquee__inner", {xPercent: -50});
window.addEventListener("scroll", function () {
    window.pageYOffset > bs ? Qn = !0 : Qn = !1, Ze.to(Bl, {timeScale: Qn ? 1 : -1}), bs = window.pageYOffset
});
