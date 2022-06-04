const eh = function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
    new MutationObserver(r => {
        for (const u of r) if (u.type === "childList") for (const s of u.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s)
    }).observe(document, {childList: !0, subtree: !0});

    function t(r) {
        const u = {};
        return r.integrity && (u.integrity = r.integrity), r.referrerpolicy && (u.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? u.credentials = "include" : r.crossorigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u
    }

    function n(r) {
        if (r.ep) return;
        r.ep = !0;
        const u = t(r);
        fetch(r.href, u)
    }
};
eh();

function fr(f) {
    if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f
}

function Of(f, e) {
    f.prototype = Object.create(e.prototype), f.prototype.constructor = f, f.__proto__ = e
}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var yn = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
    Ni = {duration: .5, overwrite: !1, delay: 0}, Vs, An = 1e8, Xe = 1 / An, vs = Math.PI * 2, th = vs / 4, nh = 0,
    Mf = Math.sqrt, rh = Math.cos, ih = Math.sin, wt = function (e) {
        return typeof e == "string"
    }, Tt = function (e) {
        return typeof e == "function"
    }, _r = function (e) {
        return typeof e == "number"
    }, Us = function (e) {
        return typeof e == "undefined"
    }, yr = function (e) {
        return typeof e == "object"
    }, un = function (e) {
        return e !== !1
    }, Nf = function () {
        return typeof window != "undefined"
    }, Hu = function (e) {
        return Tt(e) || wt(e)
    }, Lf = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {
    }, jt = Array.isArray, xs = /(?:-?\.?\d|\.)+/gi, Bf = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    vi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ns = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Rf = /[+-]=-?[.\d]+/,
    If = /[^,'"\[\]\s]+/gi, uh = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, nt, Zn, Cs, Gs, mn = {}, _o = {}, jf,
    zf = function (e) {
        return (_o = fi(e, mn)) && Vn
    }, Qs = function (e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }, yo = function (e, t) {
        return !t && console.warn(e)
    }, qf = function (e, t) {
        return e && (mn[e] = t) && _o && (_o[e] = t) || mn
    }, _u = function () {
        return 0
    }, Zs = {}, Ar = [], bs = {}, Hf, pn = {}, rs = {}, Ia = 30, io = [], Ks = "", Js = function (e) {
        var t = e[0], n, r;
        if (yr(t) || Tt(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
            for (r = io.length; r-- && !io[r].targetTest(t);) ;
            n = io[r]
        }
        for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new ll(e[r], n))) || e.splice(r, 1);
        return e
    }, ri = function (e) {
        return e._gsap || Js(Pn(e))[0]._gsap
    }, $f = function (e, t, n) {
        return (n = e[t]) && Tt(n) ? e[t]() : Us(n) && e.getAttribute && e.getAttribute(t) || n
    }, on = function (e, t) {
        return (e = e.split(",")).forEach(t) || e
    }, ct = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, Rt = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0
    }, wi = function (e, t) {
        var n = t.charAt(0), r = parseFloat(t.substr(2));
        return e = parseFloat(e), n === "+" ? e + r : n === "-" ? e - r : n === "*" ? e * r : e / r
    }, oh = function (e, t) {
        for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;) ;
        return r < n
    }, mo = function () {
        var e = Ar.length, t = Ar.slice(0), n, r;
        for (bs = {}, Ar.length = 0, n = 0; n < e; n++) r = t[n], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    }, Xf = function (e, t, n, r) {
        Ar.length && mo(), e.render(t, n, r), Ar.length && mo()
    }, Wf = function (e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(If).length < 2 ? t : wt(e) ? e.trim() : e
    }, Yf = function (e) {
        return e
    }, Ln = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e
    }, sh = function (e) {
        return function (t, n) {
            for (var r in n) r in t || r === "duration" && e || r === "ease" || (t[r] = n[r])
        }
    }, fi = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }, ja = function f(e, t) {
        for (var n in t) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = yr(t[n]) ? f(e[n] || (e[n] = {}), t[n]) : t[n]);
        return e
    }, vo = function (e, t) {
        var n = {}, r;
        for (r in e) r in t || (n[r] = e[r]);
        return n
    }, ou = function (e) {
        var t = e.parent || nt, n = e.keyframes ? sh(jt(e.keyframes)) : Ln;
        if (un(e.inherit)) for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    }, ah = function (e, t) {
        for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];) ;
        return n < 0
    }, Vf = function (e, t, n, r, u) {
        n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
        var s = e[r], a;
        if (u) for (a = t[u]; s && s[u] > a;) s = s._prev;
        return s ? (t._next = s._next, s._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = s, t.parent = t._dp = e, t
    }, No = function (e, t, n, r) {
        n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
        var u = t._prev, s = t._next;
        u ? u._next = s : e[n] === t && (e[n] = s), s ? s._prev = u : e[r] === t && (e[r] = u), t._next = t._prev = t.parent = null
    }, gr = function (e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0
    }, ii = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n;) n._dirty = 1, n = n.parent;
        return e
    }, fh = function (e) {
        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
        return e
    }, lh = function f(e) {
        return !e || e._ts && f(e.parent)
    }, za = function (e) {
        return e._repeat ? Li(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, Li = function (e, t) {
        var n = Math.floor(e /= t);
        return e && n === e ? n - 1 : n
    }, xo = function (e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }, Lo = function (e) {
        return e._end = Rt(e._start + (e._tDur / Math.abs(e._ts || e._rts || Xe) || 0))
    }, ea = function (e, t) {
        var n = e._dp;
        return n && n.smoothChildTiming && e._ts && (e._start = Rt(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Lo(e), n._dirty || ii(n, e)), e
    }, Uf = function (e, t) {
        var n;
        if ((t._time || t._initted && !t._dur) && (n = xo(e.rawTime(), t), (!t._dur || Pu(0, t.totalDuration(), n) - t._tTime > Xe) && t.render(n, !0)), ii(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration()) for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
            e._zTime = -Xe
        }
    }, Jn = function (e, t, n, r) {
        return t.parent && gr(t), t._start = Rt((_r(n) ? n : n || e !== nt ? wn(e, n, t) : e._time) + t._delay), t._end = Rt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Vf(e, t, "_first", "_last", e._sort ? "_start" : 0), Ts(t) || (e._recent = t), r || Uf(e, t), e
    }, Gf = function (e, t) {
        return (mn.ScrollTrigger || Qs("scrollTrigger", t)) && mn.ScrollTrigger.create(t, e)
    }, Qf = function (e, t, n, r) {
        if (na(e, t), !e._initted) return 1;
        if (!n && e._pt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Hf !== gn.frame) return Ar.push(e), e._lazy = [t, r], 1
    }, ch = function f(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || f(t))
    }, Ts = function (e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    }, hh = function (e, t, n, r) {
        var u = e.ratio,
            s = t < 0 || !t && (!e._start && ch(e) && !(!e._initted && Ts(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ts(e)) ? 0 : 1,
            a = e._rDelay, d = 0, p, _, y;
        if (a && e._repeat && (d = Pu(0, e._tDur, t), _ = Li(d, a), e._yoyo && _ & 1 && (s = 1 - s), _ !== Li(e._tTime, a) && (u = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== u || r || e._zTime === Xe || !t && e._zTime) {
            if (!e._initted && Qf(e, t, r, n)) return;
            for (y = e._zTime, e._zTime = t || (n ? Xe : 0), n || (n = t && !y), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = d, p = e._pt; p;) p.r(s, p.d), p = p._next;
            e._startAt && t < 0 && e._startAt.render(t, !0, !0), e._onUpdate && !n && kn(e, "onUpdate"), d && e._repeat && !n && e.parent && kn(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && gr(e, 1), n || (kn(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = t)
    }, dh = function (e, t, n) {
        var r;
        if (n > t) for (r = e._first; r && r._start <= n;) {
            if (r.data === "isPause" && r._start > t) return r;
            r = r._next
        } else for (r = e._last; r && r._start >= n;) {
            if (r.data === "isPause" && r._start < t) return r;
            r = r._prev
        }
    }, Bi = function (e, t, n, r) {
        var u = e._repeat, s = Rt(t) || 0, a = e._tTime / e._tDur;
        return a && !r && (e._time *= s / e._dur), e._dur = s, e._tDur = u ? u < 0 ? 1e10 : Rt(s * (u + 1) + e._rDelay * u) : s, a > 0 && !r ? ea(e, e._tTime = e._tDur * a) : e.parent && Lo(e), n || ii(e.parent, e), e
    }, qa = function (e) {
        return e instanceof rn ? ii(e) : Bi(e, e._dur)
    }, ph = {_start: 0, endTime: _u, totalDuration: _u}, wn = function f(e, t, n) {
        var r = e.labels, u = e._recent || ph, s = e.duration() >= An ? u.endTime(!1) : e._dur, a, d, p;
        return wt(t) && (isNaN(t) || t in r) ? (d = t.charAt(0), p = t.substr(-1) === "%", a = t.indexOf("="), d === "<" || d === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (d === "<" ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (p ? (a < 0 ? u : n).totalDuration() / 100 : 1)) : a < 0 ? (t in r || (r[t] = s), r[t]) : (d = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), p && n && (d = d / 100 * (jt(n) ? n[0] : n).totalDuration()), a > 1 ? f(e, t.substr(0, a - 1), n) + d : s + d)) : t == null ? s : +t
    }, su = function (e, t, n) {
        var r = _r(t[1]), u = (r ? 2 : 1) + (e < 2 ? 0 : 1), s = t[u], a, d;
        if (r && (s.duration = t[1]), s.parent = n, e) {
            for (a = s, d = n; d && !("immediateRender" in a);) a = d.vars.defaults || {}, d = un(d.vars.inherit) && d.parent;
            s.immediateRender = un(a.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[u - 1]
        }
        return new bt(t[0], s, t[u + 1])
    }, Br = function (e, t) {
        return e || e === 0 ? t(e) : t
    }, Pu = function (e, t, n) {
        return n < e ? e : n > t ? t : n
    }, It = function (e, t) {
        return !wt(e) || !(t = uh.exec(e)) ? "" : t[1]
    }, gh = function (e, t, n) {
        return Br(n, function (r) {
            return Pu(e, t, r)
        })
    }, ws = [].slice, Zf = function (e, t) {
        return e && yr(e) && "length" in e && (!t && !e.length || e.length - 1 in e && yr(e[0])) && !e.nodeType && e !== Zn
    }, Dh = function (e, t, n) {
        return n === void 0 && (n = []), e.forEach(function (r) {
            var u;
            return wt(r) && !t || Zf(r, 1) ? (u = n).push.apply(u, Pn(r)) : n.push(r)
        }) || n
    }, Pn = function (e, t, n) {
        return wt(e) && !n && (Cs || !Ri()) ? ws.call((t || Gs).querySelectorAll(e), 0) : jt(e) ? Dh(e, n) : Zf(e) ? ws.call(e, 0) : e ? [e] : []
    }, _h = function (e) {
        return e = Pn(e)[0] || yo("Invalid scope") || {}, function (t) {
            var n = e.current || e.nativeElement || e;
            return Pn(t, n.querySelectorAll ? n : n === e ? yo("Invalid scope") || Gs.createElement("div") : e)
        }
    }, Kf = function (e) {
        return e.sort(function () {
            return .5 - Math.random()
        })
    }, Jf = function (e) {
        if (Tt(e)) return e;
        var t = yr(e) ? e : {each: e}, n = ui(t.ease), r = t.from || 0, u = parseFloat(t.base) || 0, s = {},
            a = r > 0 && r < 1, d = isNaN(r) || a, p = t.axis, _ = r, y = r;
        return wt(r) ? _ = y = {
            center: .5,
            edges: .5,
            end: 1
        }[r] || 0 : !a && d && (_ = r[0], y = r[1]), function (b, v, T) {
            var x = (T || t).length, A = s[x], S, B, O, N, R, c, j, Y, q;
            if (!A) {
                if (q = t.grid === "auto" ? 0 : (t.grid || [1, An])[1], !q) {
                    for (j = -An; j < (j = T[q++].getBoundingClientRect().left) && q < x;) ;
                    q--
                }
                for (A = s[x] = [], S = d ? Math.min(q, x) * _ - .5 : r % q, B = q === An ? 0 : d ? x * y / q - .5 : r / q | 0, j = 0, Y = An, c = 0; c < x; c++) O = c % q - S, N = B - (c / q | 0), A[c] = R = p ? Math.abs(p === "y" ? N : O) : Mf(O * O + N * N), R > j && (j = R), R < Y && (Y = R);
                r === "random" && Kf(A), A.max = j - Y, A.min = Y, A.v = x = (parseFloat(t.amount) || parseFloat(t.each) * (q > x ? x - 1 : p ? p === "y" ? x / q : q : Math.max(q, x / q)) || 0) * (r === "edges" ? -1 : 1), A.b = x < 0 ? u - x : u, A.u = It(t.amount || t.each) || 0, n = n && x < 0 ? sl(n) : n
            }
            return x = (A[b] - A.min) / A.max || 0, Rt(A.b + (n ? n(x) : x) * A.v) + A.u
        }
    }, Es = function (e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (n) {
            var r = Math.round(parseFloat(n) / e) * e * t;
            return (r - r % 1) / t + (_r(n) ? 0 : It(n))
        }
    }, el = function (e, t) {
        var n = jt(e), r, u;
        return !n && yr(e) && (r = n = e.radius || An, e.values ? (e = Pn(e.values), (u = !_r(e[0])) && (r *= r)) : e = Es(e.increment)), Br(t, n ? Tt(e) ? function (s) {
            return u = e(s), Math.abs(u - s) <= r ? u : s
        } : function (s) {
            for (var a = parseFloat(u ? s.x : s), d = parseFloat(u ? s.y : 0), p = An, _ = 0, y = e.length, b, v; y--;) u ? (b = e[y].x - a, v = e[y].y - d, b = b * b + v * v) : b = Math.abs(e[y] - a), b < p && (p = b, _ = y);
            return _ = !r || p <= r ? e[_] : s, u || _ === s || _r(s) ? _ : _ + It(s)
        } : Es(e))
    }, tl = function (e, t, n, r) {
        return Br(jt(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
            return jt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * r) / r
        })
    }, yh = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function (r) {
            return t.reduce(function (u, s) {
                return s(u)
            }, r)
        }
    }, mh = function (e, t) {
        return function (n) {
            return e(parseFloat(n)) + (t || It(n))
        }
    }, vh = function (e, t, n) {
        return rl(e, t, 0, 1, n)
    }, nl = function (e, t, n) {
        return Br(n, function (r) {
            return e[~~t(r)]
        })
    }, xh = function f(e, t, n) {
        var r = t - e;
        return jt(e) ? nl(e, f(0, e.length), t) : Br(n, function (u) {
            return (r + (u - e) % r) % r + e
        })
    }, Ch = function f(e, t, n) {
        var r = t - e, u = r * 2;
        return jt(e) ? nl(e, f(0, e.length - 1), t) : Br(n, function (s) {
            return s = (u + (s - e) % u) % u || 0, e + (s > r ? u - s : s)
        })
    }, yu = function (e) {
        for (var t = 0, n = "", r, u, s, a; ~(r = e.indexOf("random(", t));) s = e.indexOf(")", r), a = e.charAt(r + 7) === "[", u = e.substr(r + 7, s - r - 7).match(a ? If : xs), n += e.substr(t, r - t) + tl(a ? u : +u[0], a ? 0 : +u[1], +u[2] || 1e-5), t = s + 1;
        return n + e.substr(t, e.length - t)
    }, rl = function (e, t, n, r, u) {
        var s = t - e, a = r - n;
        return Br(u, function (d) {
            return n + ((d - e) / s * a || 0)
        })
    }, bh = function f(e, t, n, r) {
        var u = isNaN(e + t) ? 0 : function (v) {
            return (1 - v) * e + v * t
        };
        if (!u) {
            var s = wt(e), a = {}, d, p, _, y, b;
            if (n === !0 && (r = 1) && (n = null), s) e = {p: e}, t = {p: t}; else if (jt(e) && !jt(t)) {
                for (_ = [], y = e.length, b = y - 2, p = 1; p < y; p++) _.push(f(e[p - 1], e[p]));
                y--, u = function (T) {
                    T *= y;
                    var x = Math.min(b, ~~T);
                    return _[x](T - x)
                }, n = t
            } else r || (e = fi(jt(e) ? [] : {}, e));
            if (!_) {
                for (d in t) ta.call(a, e, d, "get", t[d]);
                u = function (T) {
                    return ua(T, a) || (s ? e.p : e)
                }
            }
        }
        return Br(n, u)
    }, Ha = function (e, t, n) {
        var r = e.labels, u = An, s, a, d;
        for (s in r) a = r[s] - t, a < 0 == !!n && a && u > (a = Math.abs(a)) && (d = s, u = a);
        return d
    }, kn = function (e, t, n) {
        var r = e.vars, u = r[t], s, a;
        if (!!u) return s = r[t + "Params"], a = r.callbackScope || e, n && Ar.length && mo(), s ? u.apply(a, s) : u.call(a)
    }, Ki = function (e) {
        return gr(e), e.scrollTrigger && e.scrollTrigger.kill(!1), e.progress() < 1 && kn(e, "onInterrupt"), e
    }, xi, Th = function (e) {
        e = !e.name && e.default || e;
        var t = e.name, n = Tt(e), r = t && !n && e.init ? function () {
                this._props = []
            } : e, u = {init: _u, render: ua, add: ta, kill: zh, modifier: jh, rawVars: 0},
            s = {targetTest: 0, get: 0, getSetter: ia, aliases: {}, register: 0};
        if (Ri(), e !== r) {
            if (pn[t]) return;
            Ln(r, Ln(vo(e, u), s)), fi(r.prototype, fi(u, vo(e, s))), pn[r.prop = t] = r, e.targetTest && (io.push(r), Zs[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
        }
        qf(t, r), e.register && e.register(Vn, r, sn)
    }, $e = 255, Ji = {
        aqua: [0, $e, $e],
        lime: [0, $e, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, $e],
        navy: [0, 0, 128],
        white: [$e, $e, $e],
        olive: [128, 128, 0],
        yellow: [$e, $e, 0],
        orange: [$e, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [$e, 0, 0],
        pink: [$e, 192, 203],
        cyan: [0, $e, $e],
        transparent: [$e, $e, $e, 0]
    }, is = function (e, t, n) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * $e + .5 | 0
    }, il = function (e, t, n) {
        var r = e ? _r(e) ? [e >> 16, e >> 8 & $e, e & $e] : 0 : Ji.black, u, s, a, d, p, _, y, b, v, T;
        if (!r) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ji[e]) r = Ji[e]; else if (e.charAt(0) === "#") {
                if (e.length < 6 && (u = e.charAt(1), s = e.charAt(2), a = e.charAt(3), e = "#" + u + u + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [r >> 16, r >> 8 & $e, r & $e, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), r = [e >> 16, e >> 8 & $e, e & $e]
            } else if (e.substr(0, 3) === "hsl") {
                if (r = T = e.match(xs), !t) d = +r[0] % 360 / 360, p = +r[1] / 100, _ = +r[2] / 100, s = _ <= .5 ? _ * (p + 1) : _ + p - _ * p, u = _ * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = is(d + 1 / 3, u, s), r[1] = is(d, u, s), r[2] = is(d - 1 / 3, u, s); else if (~e.indexOf("=")) return r = e.match(Bf), n && r.length < 4 && (r[3] = 1), r
            } else r = e.match(xs) || Ji.transparent;
            r = r.map(Number)
        }
        return t && !T && (u = r[0] / $e, s = r[1] / $e, a = r[2] / $e, y = Math.max(u, s, a), b = Math.min(u, s, a), _ = (y + b) / 2, y === b ? d = p = 0 : (v = y - b, p = _ > .5 ? v / (2 - y - b) : v / (y + b), d = y === u ? (s - a) / v + (s < a ? 6 : 0) : y === s ? (a - u) / v + 2 : (u - s) / v + 4, d *= 60), r[0] = ~~(d + .5), r[1] = ~~(p * 100 + .5), r[2] = ~~(_ * 100 + .5)), n && r.length < 4 && (r[3] = 1), r
    }, ul = function (e) {
        var t = [], n = [], r = -1;
        return e.split(Pr).forEach(function (u) {
            var s = u.match(vi) || [];
            t.push.apply(t, s), n.push(r += s.length + 1)
        }), t.c = n, t
    }, $a = function (e, t, n) {
        var r = "", u = (e + r).match(Pr), s = t ? "hsla(" : "rgba(", a = 0, d, p, _, y;
        if (!u) return e;
        if (u = u.map(function (b) {
            return (b = il(b, t, 1)) && s + (t ? b[0] + "," + b[1] + "%," + b[2] + "%," + b[3] : b.join(",")) + ")"
        }), n && (_ = ul(e), d = n.c, d.join(r) !== _.c.join(r))) for (p = e.replace(Pr, "1").split(vi), y = p.length - 1; a < y; a++) r += p[a] + (~d.indexOf(a) ? u.shift() || s + "0,0,0,0)" : (_.length ? _ : u.length ? u : n).shift());
        if (!p) for (p = e.split(Pr), y = p.length - 1; a < y; a++) r += p[a] + u[a];
        return r + p[y]
    }, Pr = function () {
        var f = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
        for (e in Ji) f += "|" + e + "\\b";
        return new RegExp(f + ")", "gi")
    }(), wh = /hsl[a]?\(/, ol = function (e) {
        var t = e.join(" "), n;
        if (Pr.lastIndex = 0, Pr.test(t)) return n = wh.test(t), e[1] = $a(e[1], n), e[0] = $a(e[0], n, ul(e[1])), !0
    }, mu, gn = function () {
        var f = Date.now, e = 500, t = 33, n = f(), r = n, u = 1e3 / 240, s = u, a = [], d, p, _, y, b, v,
            T = function x(A) {
                var S = f() - r, B = A === !0, O, N, R, c;
                if (S > e && (n += S - t), r += S, R = r - n, O = R - s, (O > 0 || B) && (c = ++y.frame, b = R - y.time * 1e3, y.time = R = R / 1e3, s += O + (O >= u ? 4 : u - O), N = 1), B || (d = p(x)), N) for (v = 0; v < a.length; v++) a[v](R, b, c, A)
            };
        return y = {
            time: 0, frame: 0, tick: function () {
                T(!0)
            }, deltaRatio: function (A) {
                return b / (1e3 / (A || 60))
            }, wake: function () {
                jf && (!Cs && Nf() && (Zn = Cs = window, Gs = Zn.document || {}, mn.gsap = Vn, (Zn.gsapVersions || (Zn.gsapVersions = [])).push(Vn.version), zf(_o || Zn.GreenSockGlobals || !Zn.gsap && Zn || {}), _ = Zn.requestAnimationFrame), d && y.sleep(), p = _ || function (A) {
                    return setTimeout(A, s - y.time * 1e3 + 1 | 0)
                }, mu = 1, T(2))
            }, sleep: function () {
                (_ ? Zn.cancelAnimationFrame : clearTimeout)(d), mu = 0, p = _u
            }, lagSmoothing: function (A, S) {
                e = A || 1 / Xe, t = Math.min(S, e, 0)
            }, fps: function (A) {
                u = 1e3 / (A || 240), s = y.time * 1e3 + u
            }, add: function (A, S, B) {
                var O = S ? function (N, R, c, j) {
                    A(N, R, c, j), y.remove(O)
                } : A;
                return y.remove(A), a[B ? "unshift" : "push"](O), Ri(), O
            }, remove: function (A, S) {
                ~(S = a.indexOf(A)) && a.splice(S, 1) && v >= S && v--
            }, _listeners: a
        }, y
    }(), Ri = function () {
        return !mu && gn.wake()
    }, Ee = {}, Eh = /^[\d.\-M][\d.\-,\s]/, Sh = /["']/g, Fh = function (e) {
        for (var t = {}, n = e.substr(1, e.length - 3).split(":"), r = n[0], u = 1, s = n.length, a, d, p; u < s; u++) d = n[u], a = u !== s - 1 ? d.lastIndexOf(",") : d.length, p = d.substr(0, a), t[r] = isNaN(p) ? p.replace(Sh, "").trim() : +p, r = d.substr(a + 1).trim();
        return t
    }, Ah = function (e) {
        var t = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", t);
        return e.substring(t, ~r && r < n ? e.indexOf(")", n + 1) : n)
    }, Ph = function (e) {
        var t = (e + "").split("("), n = Ee[t[0]];
        return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Fh(t[1])] : Ah(e).split(",").map(Wf)) : Ee._CE && Eh.test(e) ? Ee._CE("", e) : n
    }, sl = function (e) {
        return function (t) {
            return 1 - e(1 - t)
        }
    }, al = function f(e, t) {
        for (var n = e._first, r; n;) n instanceof rn ? f(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? f(n.timeline, t) : (r = n._ease, n._ease = n._yEase, n._yEase = r, n._yoyo = t)), n = n._next
    }, ui = function (e, t) {
        return e && (Tt(e) ? e : Ee[e] || Ph(e)) || t
    }, di = function (e, t, n, r) {
        n === void 0 && (n = function (d) {
            return 1 - t(1 - d)
        }), r === void 0 && (r = function (d) {
            return d < .5 ? t(d * 2) / 2 : 1 - t((1 - d) * 2) / 2
        });
        var u = {easeIn: t, easeOut: n, easeInOut: r}, s;
        return on(e, function (a) {
            Ee[a] = mn[a] = u, Ee[s = a.toLowerCase()] = n;
            for (var d in u) Ee[s + (d === "easeIn" ? ".in" : d === "easeOut" ? ".out" : ".inOut")] = Ee[a + "." + d] = u[d]
        }), u
    }, fl = function (e) {
        return function (t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    }, us = function f(e, t, n) {
        var r = t >= 1 ? t : 1, u = (n || (e ? .3 : .45)) / (t < 1 ? t : 1), s = u / vs * (Math.asin(1 / r) || 0),
            a = function (_) {
                return _ === 1 ? 1 : r * Math.pow(2, -10 * _) * ih((_ - s) * u) + 1
            }, d = e === "out" ? a : e === "in" ? function (p) {
                return 1 - a(1 - p)
            } : fl(a);
        return u = vs / u, d.config = function (p, _) {
            return f(e, p, _)
        }, d
    }, os = function f(e, t) {
        t === void 0 && (t = 1.70158);
        var n = function (s) {
            return s ? --s * s * ((t + 1) * s + t) + 1 : 0
        }, r = e === "out" ? n : e === "in" ? function (u) {
            return 1 - n(1 - u)
        } : fl(n);
        return r.config = function (u) {
            return f(e, u)
        }, r
    };
on("Linear,Quad,Cubic,Quart,Quint,Strong", function (f, e) {
    var t = e < 5 ? e + 1 : e;
    di(f + ",Power" + (t - 1), e ? function (n) {
        return Math.pow(n, t)
    } : function (n) {
        return n
    }, function (n) {
        return 1 - Math.pow(1 - n, t)
    }, function (n) {
        return n < .5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2
    })
});
Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn;
di("Elastic", us("in"), us("out"), us());
(function (f, e) {
    var t = 1 / e, n = 2 * t, r = 2.5 * t, u = function (a) {
        return a < t ? f * a * a : a < n ? f * Math.pow(a - 1.5 / e, 2) + .75 : a < r ? f * (a -= 2.25 / e) * a + .9375 : f * Math.pow(a - 2.625 / e, 2) + .984375
    };
    di("Bounce", function (s) {
        return 1 - u(1 - s)
    }, u)
})(7.5625, 2.75);
di("Expo", function (f) {
    return f ? Math.pow(2, 10 * (f - 1)) : 0
});
di("Circ", function (f) {
    return -(Mf(1 - f * f) - 1)
});
di("Sine", function (f) {
    return f === 1 ? 1 : -rh(f * th) + 1
});
di("Back", os("in"), os("out"), os());
Ee.SteppedEase = Ee.steps = mn.SteppedEase = {
    config: function (e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e, r = e + (t ? 0 : 1), u = t ? 1 : 0, s = 1 - Xe;
        return function (a) {
            return ((r * Pu(0, s, a) | 0) + u) * n
        }
    }
};
Ni.ease = Ee["quad.out"];
on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (f) {
    return Ks += f + "," + f + "Params,"
});
var ll = function (e, t) {
    this.id = nh++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : $f, this.set = t ? t.getSetter : ia
}, vu = function () {
    function f(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Bi(this, +t.duration, 1, 1), this.data = t.data, mu || gn.wake()
    }

    var e = f.prototype;
    return e.delay = function (n) {
        return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay
    }, e.duration = function (n) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur
    }, e.totalDuration = function (n) {
        return arguments.length ? (this._dirty = 0, Bi(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, e.totalTime = function (n, r) {
        if (Ri(), !arguments.length) return this._tTime;
        var u = this._dp;
        if (u && u.smoothChildTiming && this._ts) {
            for (ea(this, n), !u._dp || u.parent || Uf(u, this); u && u.parent;) u.parent._time !== u._start + (u._ts >= 0 ? u._tTime / u._ts : (u.totalDuration() - u._tTime) / -u._ts) && u.totalTime(u._tTime, !0), u = u.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Jn(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== n || !this._dur && !r || this._initted && Math.abs(this._zTime) === Xe || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Xf(this, n, r)), this
    }, e.time = function (n, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + za(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), r) : this._time
    }, e.totalProgress = function (n, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * n, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, e.progress = function (n, r) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + za(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, e.iteration = function (n, r) {
        var u = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (n - 1) * u, r) : this._repeat ? Li(this._tTime, u) + 1 : 1
    }, e.timeScale = function (n) {
        if (!arguments.length) return this._rts === -Xe ? 0 : this._rts;
        if (this._rts === n) return this;
        var r = this.parent && this._ts ? xo(this.parent._time, this) : this._tTime;
        return this._rts = +n || 0, this._ts = this._ps || n === -Xe ? 0 : this._rts, this.totalTime(Pu(-this._delay, this._tDur, r), !0), Lo(this), fh(this)
    }, e.paused = function (n) {
        return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ri(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Xe && (this._tTime -= Xe)))), this) : this._ps
    }, e.startTime = function (n) {
        if (arguments.length) {
            this._start = n;
            var r = this.parent || this._dp;
            return r && (r._sort || !this.parent) && Jn(r, this, n - this._delay), this
        }
        return this._start
    }, e.endTime = function (n) {
        return this._start + (un(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, e.rawTime = function (n) {
        var r = this.parent || this._dp;
        return r ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? xo(r.rawTime(n), this) : this._tTime : this._tTime
    }, e.globalTime = function (n) {
        for (var r = this, u = arguments.length ? n : r.rawTime(); r;) u = r._start + u / (r._ts || 1), r = r._dp;
        return u
    }, e.repeat = function (n) {
        return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, qa(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, e.repeatDelay = function (n) {
        if (arguments.length) {
            var r = this._time;
            return this._rDelay = n, qa(this), r ? this.time(r) : this
        }
        return this._rDelay
    }, e.yoyo = function (n) {
        return arguments.length ? (this._yoyo = n, this) : this._yoyo
    }, e.seek = function (n, r) {
        return this.totalTime(wn(this, n), un(r))
    }, e.restart = function (n, r) {
        return this.play().totalTime(n ? -this._delay : 0, un(r))
    }, e.play = function (n, r) {
        return n != null && this.seek(n, r), this.reversed(!1).paused(!1)
    }, e.reverse = function (n, r) {
        return n != null && this.seek(n || this.totalDuration(), r), this.reversed(!0).paused(!1)
    }, e.pause = function (n, r) {
        return n != null && this.seek(n, r), this.paused(!0)
    }, e.resume = function () {
        return this.paused(!1)
    }, e.reversed = function (n) {
        return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -Xe : 0)), this) : this._rts < 0
    }, e.invalidate = function () {
        return this._initted = this._act = 0, this._zTime = -Xe, this
    }, e.isActive = function () {
        var n = this.parent || this._dp, r = this._start, u;
        return !!(!n || this._ts && this._initted && n.isActive() && (u = n.rawTime(!0)) >= r && u < this.endTime(!0) - Xe)
    }, e.eventCallback = function (n, r, u) {
        var s = this.vars;
        return arguments.length > 1 ? (r ? (s[n] = r, u && (s[n + "Params"] = u), n === "onUpdate" && (this._onUpdate = r)) : delete s[n], this) : s[n]
    }, e.then = function (n) {
        var r = this;
        return new Promise(function (u) {
            var s = Tt(n) ? n : Yf, a = function () {
                var p = r.then;
                r.then = null, Tt(s) && (s = s(r)) && (s.then || s === r) && (r.then = p), u(s), r.then = p
            };
            r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
        })
    }, e.kill = function () {
        Ki(this)
    }, f
}();
Ln(vu.prototype, {
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
    _zTime: -Xe,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var rn = function (f) {
    Of(e, f);

    function e(n, r) {
        var u;
        return n === void 0 && (n = {}), u = f.call(this, n) || this, u.labels = {}, u.smoothChildTiming = !!n.smoothChildTiming, u.autoRemoveChildren = !!n.autoRemoveChildren, u._sort = un(n.sortChildren), nt && Jn(n.parent || nt, fr(u), r), n.reversed && u.reverse(), n.paused && u.paused(!0), n.scrollTrigger && Gf(fr(u), n.scrollTrigger), u
    }

    var t = e.prototype;
    return t.to = function (r, u, s) {
        return su(0, arguments, this), this
    }, t.from = function (r, u, s) {
        return su(1, arguments, this), this
    }, t.fromTo = function (r, u, s, a) {
        return su(2, arguments, this), this
    }, t.set = function (r, u, s) {
        return u.duration = 0, u.parent = this, ou(u).repeatDelay || (u.repeat = 0), u.immediateRender = !!u.immediateRender, new bt(r, u, wn(this, s), 1), this
    }, t.call = function (r, u, s) {
        return Jn(this, bt.delayedCall(0, r, u), s)
    }, t.staggerTo = function (r, u, s, a, d, p, _) {
        return s.duration = u, s.stagger = s.stagger || a, s.onComplete = p, s.onCompleteParams = _, s.parent = this, new bt(r, s, wn(this, d)), this
    }, t.staggerFrom = function (r, u, s, a, d, p, _) {
        return s.runBackwards = 1, ou(s).immediateRender = un(s.immediateRender), this.staggerTo(r, u, s, a, d, p, _)
    }, t.staggerFromTo = function (r, u, s, a, d, p, _, y) {
        return a.startAt = s, ou(a).immediateRender = un(a.immediateRender), this.staggerTo(r, u, a, d, p, _, y)
    }, t.render = function (r, u, s) {
        var a = this._time, d = this._dirty ? this.totalDuration() : this._tDur, p = this._dur, _ = r <= 0 ? 0 : Rt(r),
            y = this._zTime < 0 != r < 0 && (this._initted || !p), b, v, T, x, A, S, B, O, N, R, c, j;
        if (this !== nt && _ > d && r >= 0 && (_ = d), _ !== this._tTime || s || y) {
            if (a !== this._time && p && (_ += this._time - a, r += this._time - a), b = _, N = this._start, O = this._ts, S = !O, y && (p || (a = this._zTime), (r || !u) && (this._zTime = r)), this._repeat) {
                if (c = this._yoyo, A = p + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(A * 100 + r, u, s);
                if (b = Rt(_ % A), _ === d ? (x = this._repeat, b = p) : (x = ~~(_ / A), x && x === _ / A && (b = p, x--), b > p && (b = p)), R = Li(this._tTime, A), !a && this._tTime && R !== x && (R = x), c && x & 1 && (b = p - b, j = 1), x !== R && !this._lock) {
                    var Y = c && R & 1, q = Y === (c && x & 1);
                    if (x < R && (Y = !Y), a = Y ? 0 : p, this._lock = 1, this.render(a || (j ? 0 : Rt(x * A)), u, !p)._lock = 0, this._tTime = _, !u && this.parent && kn(this, "onRepeat"), this.vars.repeatRefresh && !j && (this.invalidate()._lock = 1), a && a !== this._time || S !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (p = this._dur, d = this._tDur, q && (this._lock = 2, a = Y ? p : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !j && this.invalidate()), this._lock = 0, !this._ts && !S) return this;
                    al(this, j)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (B = dh(this, Rt(a), Rt(b)), B && (_ -= b - (b = B._start))), this._tTime = _, this._time = b, this._act = !O, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && b && !u && (kn(this, "onStart"), this._tTime !== _)) return this;
            if (b >= a && r >= 0) for (v = this._first; v;) {
                if (T = v._next, (v._act || b >= v._start) && v._ts && B !== v) {
                    if (v.parent !== this) return this.render(r, u, s);
                    if (v.render(v._ts > 0 ? (b - v._start) * v._ts : (v._dirty ? v.totalDuration() : v._tDur) + (b - v._start) * v._ts, u, s), b !== this._time || !this._ts && !S) {
                        B = 0, T && (_ += this._zTime = -Xe);
                        break
                    }
                }
                v = T
            } else {
                v = this._last;
                for (var Q = r < 0 ? r : b; v;) {
                    if (T = v._prev, (v._act || Q <= v._end) && v._ts && B !== v) {
                        if (v.parent !== this) return this.render(r, u, s);
                        if (v.render(v._ts > 0 ? (Q - v._start) * v._ts : (v._dirty ? v.totalDuration() : v._tDur) + (Q - v._start) * v._ts, u, s), b !== this._time || !this._ts && !S) {
                            B = 0, T && (_ += this._zTime = Q ? -Xe : Xe);
                            break
                        }
                    }
                    v = T
                }
            }
            if (B && !u && (this.pause(), B.render(b >= a ? 0 : -Xe)._zTime = b >= a ? 1 : -1, this._ts)) return this._start = N, Lo(this), this.render(r, u, s);
            this._onUpdate && !u && kn(this, "onUpdate", !0), (_ === d && this._tTime >= this.totalDuration() || !_ && a) && (N === this._start || Math.abs(O) !== Math.abs(this._ts)) && (this._lock || ((r || !p) && (_ === d && this._ts > 0 || !_ && this._ts < 0) && gr(this, 1), !u && !(r < 0 && !a) && (_ || a || !d) && (kn(this, _ === d && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < d && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, t.add = function (r, u) {
        var s = this;
        if (_r(u) || (u = wn(this, u, r)), !(r instanceof vu)) {
            if (jt(r)) return r.forEach(function (a) {
                return s.add(a, u)
            }), this;
            if (wt(r)) return this.addLabel(r, u);
            if (Tt(r)) r = bt.delayedCall(0, r); else return this
        }
        return this !== r ? Jn(this, r, u) : this
    }, t.getChildren = function (r, u, s, a) {
        r === void 0 && (r = !0), u === void 0 && (u = !0), s === void 0 && (s = !0), a === void 0 && (a = -An);
        for (var d = [], p = this._first; p;) p._start >= a && (p instanceof bt ? u && d.push(p) : (s && d.push(p), r && d.push.apply(d, p.getChildren(!0, u, s)))), p = p._next;
        return d
    }, t.getById = function (r) {
        for (var u = this.getChildren(1, 1, 1), s = u.length; s--;) if (u[s].vars.id === r) return u[s]
    }, t.remove = function (r) {
        return wt(r) ? this.removeLabel(r) : Tt(r) ? this.killTweensOf(r) : (No(this, r), r === this._recent && (this._recent = this._last), ii(this))
    }, t.totalTime = function (r, u) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Rt(gn.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), f.prototype.totalTime.call(this, r, u), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function (r, u) {
        return this.labels[r] = wn(this, u), this
    }, t.removeLabel = function (r) {
        return delete this.labels[r], this
    }, t.addPause = function (r, u, s) {
        var a = bt.delayedCall(0, u || _u, s);
        return a.data = "isPause", this._hasPause = 1, Jn(this, a, wn(this, r))
    }, t.removePause = function (r) {
        var u = this._first;
        for (r = wn(this, r); u;) u._start === r && u.data === "isPause" && gr(u), u = u._next
    }, t.killTweensOf = function (r, u, s) {
        for (var a = this.getTweensOf(r, s), d = a.length; d--;) Tr !== a[d] && a[d].kill(r, u);
        return this
    }, t.getTweensOf = function (r, u) {
        for (var s = [], a = Pn(r), d = this._first, p = _r(u), _; d;) d instanceof bt ? oh(d._targets, a) && (p ? (!Tr || d._initted && d._ts) && d.globalTime(0) <= u && d.globalTime(d.totalDuration()) > u : !u || d.isActive()) && s.push(d) : (_ = d.getTweensOf(a, u)).length && s.push.apply(s, _), d = d._next;
        return s
    }, t.tweenTo = function (r, u) {
        u = u || {};
        var s = this, a = wn(s, r), d = u, p = d.startAt, _ = d.onStart, y = d.onStartParams, b = d.immediateRender, v,
            T = bt.to(s, Ln({
                ease: u.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: u.duration || Math.abs((a - (p && "time" in p ? p.time : s._time)) / s.timeScale()) || Xe,
                onStart: function () {
                    if (s.pause(), !v) {
                        var A = u.duration || Math.abs((a - (p && "time" in p ? p.time : s._time)) / s.timeScale());
                        T._dur !== A && Bi(T, A, 0, 1).render(T._time, !0, !0), v = 1
                    }
                    _ && _.apply(T, y || [])
                }
            }, u));
        return b ? T.render(0) : T
    }, t.tweenFromTo = function (r, u, s) {
        return this.tweenTo(u, Ln({startAt: {time: wn(this, r)}}, s))
    }, t.recent = function () {
        return this._recent
    }, t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Ha(this, wn(this, r))
    }, t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Ha(this, wn(this, r), 1)
    }, t.currentLabel = function (r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + Xe)
    }, t.shiftChildren = function (r, u, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, d = this.labels, p; a;) a._start >= s && (a._start += r, a._end += r), a = a._next;
        if (u) for (p in d) d[p] >= s && (d[p] += r);
        return ii(this)
    }, t.invalidate = function () {
        var r = this._first;
        for (this._lock = 0; r;) r.invalidate(), r = r._next;
        return f.prototype.invalidate.call(this)
    }, t.clear = function (r) {
        r === void 0 && (r = !0);
        for (var u = this._first, s; u;) s = u._next, this.remove(u), u = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), ii(this)
    }, t.totalDuration = function (r) {
        var u = 0, s = this, a = s._last, d = An, p, _, y;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
        if (s._dirty) {
            for (y = s.parent; a;) p = a._prev, a._dirty && a.totalDuration(), _ = a._start, _ > d && s._sort && a._ts && !s._lock ? (s._lock = 1, Jn(s, a, _ - a._delay, 1)._lock = 0) : d = _, _ < 0 && a._ts && (u -= _, (!y && !s._dp || y && y.smoothChildTiming) && (s._start += _ / s._ts, s._time -= _, s._tTime -= _), s.shiftChildren(-_, !1, -1 / 0), d = 0), a._end > u && a._ts && (u = a._end), a = p;
            Bi(s, s === nt && s._time > u ? s._time : u, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, e.updateRoot = function (r) {
        if (nt._ts && (Xf(nt, xo(r, nt)), Hf = gn.frame), gn.frame >= Ia) {
            Ia += yn.autoSleep || 120;
            var u = nt._first;
            if ((!u || !u._ts) && yn.autoSleep && gn._listeners.length < 2) {
                for (; u && !u._ts;) u = u._next;
                u || gn.sleep()
            }
        }
    }, e
}(vu);
Ln(rn.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
var kh = function (e, t, n, r, u, s, a) {
    var d = new sn(this._pt, e, t, 0, 1, Dl, null, u), p = 0, _ = 0, y, b, v, T, x, A, S, B;
    for (d.b = n, d.e = r, n += "", r += "", (S = ~r.indexOf("random(")) && (r = yu(r)), s && (B = [n, r], s(B, e, t), n = B[0], r = B[1]), b = n.match(ns) || []; y = ns.exec(r);) T = y[0], x = r.substring(p, y.index), v ? v = (v + 1) % 5 : x.substr(-5) === "rgba(" && (v = 1), T !== b[_++] && (A = parseFloat(b[_ - 1]) || 0, d._pt = {
        _next: d._pt,
        p: x || _ === 1 ? x : ",",
        s: A,
        c: T.charAt(1) === "=" ? wi(A, T) - A : parseFloat(T) - A,
        m: v && v < 4 ? Math.round : 0
    }, p = ns.lastIndex);
    return d.c = p < r.length ? r.substring(p, r.length) : "", d.fp = a, (Rf.test(r) || S) && (d.e = 0), this._pt = d, d
}, ta = function (e, t, n, r, u, s, a, d, p) {
    Tt(r) && (r = r(u || 0, e, s));
    var _ = e[t],
        y = n !== "get" ? n : Tt(_) ? p ? e[t.indexOf("set") || !Tt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](p) : e[t]() : _,
        b = Tt(_) ? p ? Bh : pl : ra, v;
    if (wt(r) && (~r.indexOf("random(") && (r = yu(r)), r.charAt(1) === "=" && (v = wi(y, r) + (It(y) || 0), (v || v === 0) && (r = v))), y !== r || Ss) return !isNaN(y * r) && r !== "" ? (v = new sn(this._pt, e, t, +y || 0, r - (y || 0), typeof _ == "boolean" ? Ih : gl, 0, b), p && (v.fp = p), a && v.modifier(a, this, e), this._pt = v) : (!_ && !(t in e) && Qs(t, r), kh.call(this, e, t, y, r, b, d || yn.stringFilter, p))
}, Oh = function (e, t, n, r, u) {
    if (Tt(e) && (e = au(e, u, t, n, r)), !yr(e) || e.style && e.nodeType || jt(e) || Lf(e)) return wt(e) ? au(e, u, t, n, r) : e;
    var s = {}, a;
    for (a in e) s[a] = au(e[a], u, t, n, r);
    return s
}, cl = function (e, t, n, r, u, s) {
    var a, d, p, _;
    if (pn[e] && (a = new pn[e]).init(u, a.rawVars ? t[e] : Oh(t[e], r, u, s, n), n, r, s) !== !1 && (n._pt = d = new sn(n._pt, u, e, 0, 1, a.render, a, 0, a.priority), n !== xi)) for (p = n._ptLookup[n._targets.indexOf(u)], _ = a._props.length; _--;) p[a._props[_]] = d;
    return a
}, Tr, Ss, na = function f(e, t) {
    var n = e.vars, r = n.ease, u = n.startAt, s = n.immediateRender, a = n.lazy, d = n.onUpdate, p = n.onUpdateParams,
        _ = n.callbackScope, y = n.runBackwards, b = n.yoyoEase, v = n.keyframes, T = n.autoRevert, x = e._dur,
        A = e._startAt, S = e._targets, B = e.parent, O = B && B.data === "nested" ? B.parent._targets : S,
        N = e._overwrite === "auto" && !Vs, R = e.timeline, c, j, Y, q, Q, re, K, pe, te, se, ie, ve, Te;
    if (R && (!v || !r) && (r = "none"), e._ease = ui(r, Ni.ease), e._yEase = b ? sl(ui(b === !0 ? r : b, Ni.ease)) : 0, b && e._yoyo && !e._repeat && (b = e._yEase, e._yEase = e._ease, e._ease = b), e._from = !R && !!n.runBackwards, !R || v && !n.stagger) {
        if (pe = S[0] ? ri(S[0]).harness : 0, ve = pe && n[pe.prop], c = vo(n, Zs), A && (gr(A.render(-1, !0)), A._lazy = 0), u) if (gr(e._startAt = bt.set(S, Ln({
            data: "isStart",
            overwrite: !1,
            parent: B,
            immediateRender: !0,
            lazy: un(a),
            startAt: null,
            delay: 0,
            onUpdate: d,
            onUpdateParams: p,
            callbackScope: _,
            stagger: 0
        }, u))), t < 0 && !s && !T && e._startAt.render(-1, !0), s) {
            if (t > 0 && !T && (e._startAt = 0), x && t <= 0) {
                t && (e._zTime = t);
                return
            }
        } else T === !1 && (e._startAt = 0); else if (y && x) {
            if (A) !T && (e._startAt = 0); else if (t && (s = !1), Y = Ln({
                overwrite: !1,
                data: "isFromStart",
                lazy: s && un(a),
                immediateRender: s,
                stagger: 0,
                parent: B
            }, c), ve && (Y[pe.prop] = ve), gr(e._startAt = bt.set(S, Y)), t < 0 && e._startAt.render(-1, !0), e._zTime = t, !s) f(e._startAt, Xe); else if (!t) return
        }
        for (e._pt = e._ptCache = 0, a = x && un(a) || a && !x, j = 0; j < S.length; j++) {
            if (Q = S[j], K = Q._gsap || Js(S)[j]._gsap, e._ptLookup[j] = se = {}, bs[K.id] && Ar.length && mo(), ie = O === S ? j : O.indexOf(Q), pe && (te = new pe).init(Q, ve || c, e, ie, O) !== !1 && (e._pt = q = new sn(e._pt, Q, te.name, 0, 1, te.render, te, 0, te.priority), te._props.forEach(function (xt) {
                se[xt] = q
            }), te.priority && (re = 1)), !pe || ve) for (Y in c) pn[Y] && (te = cl(Y, c, e, ie, Q, O)) ? te.priority && (re = 1) : se[Y] = q = ta.call(e, Q, Y, "get", c[Y], ie, O, 0, n.stringFilter);
            e._op && e._op[j] && e.kill(Q, e._op[j]), N && e._pt && (Tr = e, nt.killTweensOf(Q, se, e.globalTime(t)), Te = !e.parent, Tr = 0), e._pt && a && (bs[K.id] = 1)
        }
        re && _l(e), e._onInit && e._onInit(e)
    }
    e._onUpdate = d, e._initted = (!e._op || e._pt) && !Te, v && t <= 0 && R.render(An, !0, !0)
}, Mh = function (e, t, n, r, u, s, a) {
    var d = (e._pt && e._ptCache || (e._ptCache = {}))[t], p, _, y;
    if (!d) for (d = e._ptCache[t] = [], _ = e._ptLookup, y = e._targets.length; y--;) {
        if (p = _[y][t], p && p.d && p.d._pt) for (p = p.d._pt; p && p.p !== t;) p = p._next;
        if (!p) return Ss = 1, e.vars[t] = "+=0", na(e, a), Ss = 0, 1;
        d.push(p)
    }
    for (y = d.length; y--;) p = d[y], p.s = (r || r === 0) && !u ? r : p.s + (r || 0) + s * p.c, p.c = n - p.s, p.e && (p.e = ct(n) + It(p.e)), p.b && (p.b = p.s + It(p.b))
}, Nh = function (e, t) {
    var n = e[0] ? ri(e[0]).harness : 0, r = n && n.aliases, u, s, a, d;
    if (!r) return t;
    u = fi({}, t);
    for (s in r) if (s in u) for (d = r[s].split(","), a = d.length; a--;) u[d[a]] = u[s];
    return u
}, Lh = function (e, t, n, r) {
    var u = t.ease || r || "power1.inOut", s, a;
    if (jt(t)) a = n[e] || (n[e] = []), t.forEach(function (d, p) {
        return a.push({t: p / (t.length - 1) * 100, v: d, e: u})
    }); else for (s in t) a = n[s] || (n[s] = []), s === "ease" || a.push({t: parseFloat(e), v: t[s], e: u})
}, au = function (e, t, n, r, u) {
    return Tt(e) ? e.call(t, n, r, u) : wt(e) && ~e.indexOf("random(") ? yu(e) : e
}, hl = Ks + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", dl = {};
on(hl + ",id,stagger,delay,duration,paused,scrollTrigger", function (f) {
    return dl[f] = 1
});
var bt = function (f) {
    Of(e, f);

    function e(n, r, u, s) {
        var a;
        typeof r == "number" && (u.duration = r, r = u, u = null), a = f.call(this, s ? r : ou(r)) || this;
        var d = a.vars, p = d.duration, _ = d.delay, y = d.immediateRender, b = d.stagger, v = d.overwrite,
            T = d.keyframes, x = d.defaults, A = d.scrollTrigger, S = d.yoyoEase, B = r.parent || nt,
            O = (jt(n) || Lf(n) ? _r(n[0]) : "length" in r) ? [n] : Pn(n), N, R, c, j, Y, q, Q, re;
        if (a._targets = O.length ? Js(O) : yo("GSAP target " + n + " not found. https://greensock.com", !yn.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = v, T || b || Hu(p) || Hu(_)) {
            if (r = a.vars, N = a.timeline = new rn({
                data: "nested",
                defaults: x || {}
            }), N.kill(), N.parent = N._dp = fr(a), N._start = 0, b || Hu(p) || Hu(_)) {
                if (j = O.length, Q = b && Jf(b), yr(b)) for (Y in b) ~hl.indexOf(Y) && (re || (re = {}), re[Y] = b[Y]);
                for (R = 0; R < j; R++) c = vo(r, dl), c.stagger = 0, S && (c.yoyoEase = S), re && fi(c, re), q = O[R], c.duration = +au(p, fr(a), R, q, O), c.delay = (+au(_, fr(a), R, q, O) || 0) - a._delay, !b && j === 1 && c.delay && (a._delay = _ = c.delay, a._start += _, c.delay = 0), N.to(q, c, Q ? Q(R, q, O) : 0), N._ease = Ee.none;
                N.duration() ? p = _ = 0 : a.timeline = 0
            } else if (T) {
                ou(Ln(N.vars.defaults, {ease: "none"})), N._ease = ui(T.ease || r.ease || "none");
                var K = 0, pe, te, se;
                if (jt(T)) T.forEach(function (ie) {
                    return N.to(O, ie, ">")
                }); else {
                    c = {};
                    for (Y in T) Y === "ease" || Y === "easeEach" || Lh(Y, T[Y], c, T.easeEach);
                    for (Y in c) for (pe = c[Y].sort(function (ie, ve) {
                        return ie.t - ve.t
                    }), K = 0, R = 0; R < pe.length; R++) te = pe[R], se = {
                        ease: te.e,
                        duration: (te.t - (R ? pe[R - 1].t : 0)) / 100 * p
                    }, se[Y] = te.v, N.to(O, se, K), K += se.duration;
                    N.duration() < p && N.to({}, {duration: p - N.duration()})
                }
            }
            p || a.duration(p = N.duration())
        } else a.timeline = 0;
        return v === !0 && !Vs && (Tr = fr(a), nt.killTweensOf(O), Tr = 0), Jn(B, fr(a), u), r.reversed && a.reverse(), r.paused && a.paused(!0), (y || !p && !T && a._start === Rt(B._time) && un(y) && lh(fr(a)) && B.data !== "nested") && (a._tTime = -Xe, a.render(Math.max(0, -_))), A && Gf(fr(a), A), a
    }

    var t = e.prototype;
    return t.render = function (r, u, s) {
        var a = this._time, d = this._tDur, p = this._dur, _ = r > d - Xe && r >= 0 ? d : r < Xe ? 0 : r, y, b, v, T, x,
            A, S, B, O;
        if (!p) hh(this, r, u, s); else if (_ !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 != r < 0) {
            if (y = _, B = this.timeline, this._repeat) {
                if (T = p + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(T * 100 + r, u, s);
                if (y = Rt(_ % T), _ === d ? (v = this._repeat, y = p) : (v = ~~(_ / T), v && v === _ / T && (y = p, v--), y > p && (y = p)), A = this._yoyo && v & 1, A && (O = this._yEase, y = p - y), x = Li(this._tTime, T), y === a && !s && this._initted) return this._tTime = _, this;
                v !== x && (B && this._yEase && al(B, A), this.vars.repeatRefresh && !A && !this._lock && (this._lock = s = 1, this.render(Rt(T * v), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Qf(this, r < 0 ? r : y, s, u)) return this._tTime = 0, this;
                if (a !== this._time) return this;
                if (p !== this._dur) return this.render(r, u, s)
            }
            if (this._tTime = _, this._time = y, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = S = (O || this._ease)(y / p), this._from && (this.ratio = S = 1 - S), y && !a && !u && (kn(this, "onStart"), this._tTime !== _)) return this;
            for (b = this._pt; b;) b.r(S, b.d), b = b._next;
            B && B.render(r < 0 ? r : !y && A ? -Xe : B._dur * B._ease(y / this._dur), u, s) || this._startAt && (this._zTime = r), this._onUpdate && !u && (r < 0 && this._startAt && this._startAt.render(r, !0, s), kn(this, "onUpdate")), this._repeat && v !== x && this.vars.onRepeat && !u && this.parent && kn(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (r < 0 && this._startAt && !this._onUpdate && this._startAt.render(r, !0, !0), (r || !p) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && gr(this, 1), !u && !(r < 0 && !a) && (_ || a) && (kn(this, _ === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < d && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, t.targets = function () {
        return this._targets
    }, t.invalidate = function () {
        return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), f.prototype.invalidate.call(this)
    }, t.resetTo = function (r, u, s, a) {
        mu || gn.wake(), this._ts || this.play();
        var d = Math.min(this._dur, (this._dp._time - this._start) * this._ts), p;
        return this._initted || na(this, d), p = this._ease(d / this._dur), Mh(this, r, u, s, a, p, d) ? this.resetTo(r, u, s, a) : (ea(this, 0), this.parent || Vf(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, t.kill = function (r, u) {
        if (u === void 0 && (u = "all"), !r && (!u || u === "all")) return this._lazy = this._pt = 0, this.parent ? Ki(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, u, Tr && Tr.vars.overwrite !== !0)._first || Ki(this), this.parent && s !== this.timeline.totalDuration() && Bi(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var a = this._targets, d = r ? Pn(r) : a, p = this._ptLookup, _ = this._pt, y, b, v, T, x, A, S;
        if ((!u || u === "all") && ah(a, d)) return u === "all" && (this._pt = 0), Ki(this);
        for (y = this._op = this._op || [], u !== "all" && (wt(u) && (x = {}, on(u, function (B) {
            return x[B] = 1
        }), u = x), u = Nh(a, u)), S = a.length; S--;) if (~d.indexOf(a[S])) {
            b = p[S], u === "all" ? (y[S] = u, T = b, v = {}) : (v = y[S] = y[S] || {}, T = u);
            for (x in T) A = b && b[x], A && ((!("kill" in A.d) || A.d.kill(x) === !0) && No(this, A, "_pt"), delete b[x]), v !== "all" && (v[x] = 1)
        }
        return this._initted && !this._pt && _ && Ki(this), this
    }, e.to = function (r, u) {
        return new e(r, u, arguments[2])
    }, e.from = function (r, u) {
        return su(1, arguments)
    }, e.delayedCall = function (r, u, s, a) {
        return new e(u, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: u,
            onReverseComplete: u,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }, e.fromTo = function (r, u, s) {
        return su(2, arguments)
    }, e.set = function (r, u) {
        return u.duration = 0, u.repeatDelay || (u.repeat = 0), new e(r, u)
    }, e.killTweensOf = function (r, u, s) {
        return nt.killTweensOf(r, u, s)
    }, e
}(vu);
Ln(bt.prototype, {_targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0});
on("staggerTo,staggerFrom,staggerFromTo", function (f) {
    bt[f] = function () {
        var e = new rn, t = ws.call(arguments, 0);
        return t.splice(f === "staggerFromTo" ? 5 : 4, 0, 0), e[f].apply(e, t)
    }
});
var ra = function (e, t, n) {
    return e[t] = n
}, pl = function (e, t, n) {
    return e[t](n)
}, Bh = function (e, t, n, r) {
    return e[t](r.fp, n)
}, Rh = function (e, t, n) {
    return e.setAttribute(t, n)
}, ia = function (e, t) {
    return Tt(e[t]) ? pl : Us(e[t]) && e.setAttribute ? Rh : ra
}, gl = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
}, Ih = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
}, Dl = function (e, t) {
    var n = t._pt, r = "";
    if (!e && t.b) r = t.b; else if (e === 1 && t.e) r = t.e; else {
        for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r, n = n._next;
        r += t.c
    }
    t.set(t.t, t.p, r, t)
}, ua = function (e, t) {
    for (var n = t._pt; n;) n.r(e, n.d), n = n._next
}, jh = function (e, t, n, r) {
    for (var u = this._pt, s; u;) s = u._next, u.p === r && u.modifier(e, t, n), u = s
}, zh = function (e) {
    for (var t = this._pt, n, r; t;) r = t._next, t.p === e && !t.op || t.op === e ? No(this, t, "_pt") : t.dep || (n = 1), t = r;
    return !n
}, qh = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
}, _l = function (e) {
    for (var t = e._pt, n, r, u, s; t;) {
        for (n = t._next, r = u; r && r.pr > t.pr;) r = r._next;
        (t._prev = r ? r._prev : s) ? t._prev._next = t : u = t, (t._next = r) ? r._prev = t : s = t, t = n
    }
    e._pt = u
}, sn = function () {
    function f(t, n, r, u, s, a, d, p, _) {
        this.t = n, this.s = u, this.c = s, this.p = r, this.r = a || gl, this.d = d || this, this.set = p || ra, this.pr = _ || 0, this._next = t, t && (t._prev = this)
    }

    var e = f.prototype;
    return e.modifier = function (n, r, u) {
        this.mSet = this.mSet || this.set, this.set = qh, this.m = n, this.mt = u, this.tween = r
    }, f
}();
on(Ks + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (f) {
    return Zs[f] = 1
});
mn.TweenMax = mn.TweenLite = bt;
mn.TimelineLite = mn.TimelineMax = rn;
nt = new rn({sortChildren: !1, defaults: Ni, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0});
yn.stringFilter = ol;
var Co = {
    registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        t.forEach(function (r) {
            return Th(r)
        })
    },
    timeline: function (e) {
        return new rn(e)
    },
    getTweensOf: function (e, t) {
        return nt.getTweensOf(e, t)
    },
    getProperty: function (e, t, n, r) {
        wt(e) && (e = Pn(e)[0]);
        var u = ri(e || {}).get, s = n ? Yf : Wf;
        return n === "native" && (n = ""), e && (t ? s((pn[t] && pn[t].get || u)(e, t, n, r)) : function (a, d, p) {
            return s((pn[a] && pn[a].get || u)(e, a, d, p))
        })
    },
    quickSetter: function (e, t, n) {
        if (e = Pn(e), e.length > 1) {
            var r = e.map(function (_) {
                return Vn.quickSetter(_, t, n)
            }), u = r.length;
            return function (_) {
                for (var y = u; y--;) r[y](_)
            }
        }
        e = e[0] || {};
        var s = pn[t], a = ri(e), d = a.harness && (a.harness.aliases || {})[t] || t, p = s ? function (_) {
            var y = new s;
            xi._pt = 0, y.init(e, n ? _ + n : _, xi, 0, [e]), y.render(1, y), xi._pt && ua(1, xi)
        } : a.set(e, d);
        return s ? p : function (_) {
            return p(e, d, n ? _ + n : _, a, 1)
        }
    },
    quickTo: function (e, t, n) {
        var r, u = Vn.to(e, fi((r = {}, r[t] = "+=0.1", r.paused = !0, r), n || {})), s = function (d, p, _) {
            return u.resetTo(t, d, p, _)
        };
        return s.tween = u, s
    },
    isTweening: function (e) {
        return nt.getTweensOf(e, !0).length > 0
    },
    defaults: function (e) {
        return e && e.ease && (e.ease = ui(e.ease, Ni.ease)), ja(Ni, e || {})
    },
    config: function (e) {
        return ja(yn, e || {})
    },
    registerEffect: function (e) {
        var t = e.name, n = e.effect, r = e.plugins, u = e.defaults, s = e.extendTimeline;
        (r || "").split(",").forEach(function (a) {
            return a && !pn[a] && !mn[a] && yo(t + " effect requires " + a + " plugin.")
        }), rs[t] = function (a, d, p) {
            return n(Pn(a), Ln(d || {}, u), p)
        }, s && (rn.prototype[t] = function (a, d, p) {
            return this.add(rs[t](a, yr(d) ? d : (p = d) && {}, this), p)
        })
    },
    registerEase: function (e, t) {
        Ee[e] = ui(t)
    },
    parseEase: function (e, t) {
        return arguments.length ? ui(e, t) : Ee
    },
    getById: function (e) {
        return nt.getById(e)
    },
    exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var n = new rn(e), r, u;
        for (n.smoothChildTiming = un(e.smoothChildTiming), nt.remove(n), n._dp = 0, n._time = n._tTime = nt._time, r = nt._first; r;) u = r._next, (t || !(!r._dur && r instanceof bt && r.vars.onComplete === r._targets[0])) && Jn(n, r, r._start - r._delay), r = u;
        return Jn(nt, n, 0), n
    },
    utils: {
        wrap: xh,
        wrapYoyo: Ch,
        distribute: Jf,
        random: tl,
        snap: el,
        normalize: vh,
        getUnit: It,
        clamp: gh,
        splitColor: il,
        toArray: Pn,
        selector: _h,
        mapRange: rl,
        pipe: yh,
        unitize: mh,
        interpolate: bh,
        shuffle: Kf
    },
    install: zf,
    effects: rs,
    ticker: gn,
    updateRoot: rn.updateRoot,
    plugins: pn,
    globalTimeline: nt,
    core: {
        PropTween: sn,
        globals: qf,
        Tween: bt,
        Timeline: rn,
        Animation: vu,
        getCache: ri,
        _removeLinkedListItem: No,
        suppressOverwrites: function (e) {
            return Vs = e
        }
    }
};
on("to,from,fromTo,delayedCall,set,killTweensOf", function (f) {
    return Co[f] = bt[f]
});
gn.add(rn.updateRoot);
xi = Co.to({}, {duration: 0});
var Hh = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
    return n
}, $h = function (e, t) {
    var n = e._targets, r, u, s;
    for (r in t) for (u = n.length; u--;) s = e._ptLookup[u][r], s && (s = s.d) && (s._pt && (s = Hh(s, r)), s && s.modifier && s.modifier(t[r], e, n[u], r))
}, ss = function (e, t) {
    return {
        name: e, rawVars: 1, init: function (r, u, s) {
            s._onInit = function (a) {
                var d, p;
                if (wt(u) && (d = {}, on(u, function (_) {
                    return d[_] = 1
                }), u = d), t) {
                    d = {};
                    for (p in u) d[p] = t(u[p]);
                    u = d
                }
                $h(a, u)
            }
        }
    }
}, Vn = Co.registerPlugin({
    name: "attr", init: function (e, t, n, r, u) {
        var s, a;
        for (s in t) a = this.add(e, "setAttribute", (e.getAttribute(s) || 0) + "", t[s], r, u, 0, 0, s), a && (a.op = s), this._props.push(s)
    }
}, {
    name: "endArray", init: function (e, t) {
        for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n])
    }
}, ss("roundProps", Es), ss("modifiers"), ss("snap", el)) || Co;
bt.version = rn.version = Vn.version = "3.10.4";
jf = 1;
Nf() && Ri();
Ee.Power0;
Ee.Power1;
Ee.Power2;
Ee.Power3;
Ee.Power4;
Ee.Linear;
Ee.Quad;
Ee.Cubic;
Ee.Quart;
Ee.Quint;
Ee.Strong;
Ee.Elastic;
Ee.Back;
Ee.SteppedEase;
Ee.Bounce;
Ee.Sine;
Ee.Expo;
Ee.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Xa, wr, Ei, oa, ei, Wa, Xh = function () {
        return typeof window != "undefined"
    }, Or = {}, Ur = 180 / Math.PI, Si = Math.PI / 180, gi = Math.atan2, Ya = 1e8, yl = /([A-Z])/g,
    Wh = /(left|right|width|margin|padding|x)/i, Yh = /[\s,\(]\S/,
    Er = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, ml = function (e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    }, Vh = function (e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    }, Uh = function (e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    }, Gh = function (e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
    }, vl = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    }, xl = function (e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    }, Qh = function (e, t, n) {
        return e.style[t] = n
    }, Zh = function (e, t, n) {
        return e.style.setProperty(t, n)
    }, Kh = function (e, t, n) {
        return e._gsap[t] = n
    }, Jh = function (e, t, n) {
        return e._gsap.scaleX = e._gsap.scaleY = n
    }, ed = function (e, t, n, r, u) {
        var s = e._gsap;
        s.scaleX = s.scaleY = n, s.renderTransform(u, s)
    }, td = function (e, t, n, r, u) {
        var s = e._gsap;
        s[t] = n, s.renderTransform(u, s)
    }, kt = "transform", Mr = kt + "Origin", Cl, Fs = function (e, t) {
        var n = wr.createElementNS ? wr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : wr.createElement(e);
        return n.style ? n : wr.createElement(e)
    }, Dr = function f(e, t, n) {
        var r = getComputedStyle(e);
        return r[t] || r.getPropertyValue(t.replace(yl, "-$1").toLowerCase()) || r.getPropertyValue(t) || !n && f(e, Ii(t) || t, 1) || ""
    }, Va = "O,Moz,ms,Ms,Webkit".split(","), Ii = function (e, t, n) {
        var r = t || ei, u = r.style, s = 5;
        if (e in u && !n) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Va[s] + e in u);) ;
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Va[s] : "") + e
    }, As = function () {
        Xh() && window.document && (Xa = window, wr = Xa.document, Ei = wr.documentElement, ei = Fs("div") || {style: {}}, Fs("div"), kt = Ii(kt), Mr = kt + "Origin", ei.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Cl = !!Ii("perspective"), oa = 1)
    }, as = function f(e) {
        var t = Fs("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode, r = this.nextSibling, u = this.style.cssText, s;
        if (Ei.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
            s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = f
        } catch {
        } else this._gsapBBox && (s = this._gsapBBox());
        return n && (r ? n.insertBefore(this, r) : n.appendChild(this)), Ei.removeChild(t), this.style.cssText = u, s
    }, Ua = function (e, t) {
        for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
    }, bl = function (e) {
        var t;
        try {
            t = e.getBBox()
        } catch {
            t = as.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === as || (t = as.call(e, !0)), t && !t.width && !t.x && !t.y ? {
            x: +Ua(e, ["x", "cx", "x1"]) || 0,
            y: +Ua(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    }, Tl = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && bl(e))
    }, xu = function (e, t) {
        if (t) {
            var n = e.style;
            t in Or && t !== Mr && (t = kt), n.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(t.replace(yl, "-$1").toLowerCase())) : n.removeAttribute(t)
        }
    }, Sr = function (e, t, n, r, u, s) {
        var a = new sn(e._pt, t, n, 0, 1, s ? xl : vl);
        return e._pt = a, a.b = r, a.e = u, e._props.push(n), a
    }, Ga = {deg: 1, rad: 1, turn: 1}, Nr = function f(e, t, n, r) {
        var u = parseFloat(n) || 0, s = (n + "").trim().substr((u + "").length) || "px", a = ei.style, d = Wh.test(t),
            p = e.tagName.toLowerCase() === "svg", _ = (p ? "client" : "offset") + (d ? "Width" : "Height"), y = 100,
            b = r === "px", v = r === "%", T, x, A, S;
        return r === s || !u || Ga[r] || Ga[s] ? u : (s !== "px" && !b && (u = f(e, t, n, "px")), S = e.getCTM && Tl(e), (v || s === "%") && (Or[t] || ~t.indexOf("adius")) ? (T = S ? e.getBBox()[d ? "width" : "height"] : e[_], ct(v ? u / T * y : u / 100 * T)) : (a[d ? "width" : "height"] = y + (b ? s : r), x = ~t.indexOf("adius") || r === "em" && e.appendChild && !p ? e : e.parentNode, S && (x = (e.ownerSVGElement || {}).parentNode), (!x || x === wr || !x.appendChild) && (x = wr.body), A = x._gsap, A && v && A.width && d && A.time === gn.time ? ct(u / A.width * y) : ((v || s === "%") && (a.position = Dr(e, "position")), x === e && (a.position = "static"), x.appendChild(ei), T = ei[_], x.removeChild(ei), a.position = "absolute", d && v && (A = ri(x), A.time = gn.time, A.width = x[_]), ct(b ? T * u / y : T && u ? y / T * u : 0))))
    }, Gr = function (e, t, n, r) {
        var u;
        return oa || As(), t in Er && t !== "transform" && (t = Er[t], ~t.indexOf(",") && (t = t.split(",")[0])), Or[t] && t !== "transform" ? (u = bu(e, r), u = t !== "transformOrigin" ? u[t] : u.svg ? u.origin : To(Dr(e, Mr)) + " " + u.zOrigin + "px") : (u = e.style[t], (!u || u === "auto" || r || ~(u + "").indexOf("calc(")) && (u = bo[t] && bo[t](e, t, n) || Dr(e, t) || $f(e, t) || (t === "opacity" ? 1 : 0))), n && !~(u + "").trim().indexOf(" ") ? Nr(e, t, u, n) + n : u
    }, nd = function (e, t, n, r) {
        if (!n || n === "none") {
            var u = Ii(t, e, 1), s = u && Dr(e, u, 1);
            s && s !== n ? (t = u, n = s) : t === "borderColor" && (n = Dr(e, "borderTopColor"))
        }
        var a = new sn(this._pt, e.style, t, 0, 1, Dl), d = 0, p = 0, _, y, b, v, T, x, A, S, B, O, N, R;
        if (a.b = n, a.e = r, n += "", r += "", r === "auto" && (e.style[t] = r, r = Dr(e, t) || r, e.style[t] = n), _ = [n, r], ol(_), n = _[0], r = _[1], b = n.match(vi) || [], R = r.match(vi) || [], R.length) {
            for (; y = vi.exec(r);) A = y[0], B = r.substring(d, y.index), T ? T = (T + 1) % 5 : (B.substr(-5) === "rgba(" || B.substr(-5) === "hsla(") && (T = 1), A !== (x = b[p++] || "") && (v = parseFloat(x) || 0, N = x.substr((v + "").length), A.charAt(1) === "=" && (A = wi(v, A) + N), S = parseFloat(A), O = A.substr((S + "").length), d = vi.lastIndex - O.length, O || (O = O || yn.units[t] || N, d === r.length && (r += O, a.e += O)), N !== O && (v = Nr(e, t, x, O) || 0), a._pt = {
                _next: a._pt,
                p: B || p === 1 ? B : ",",
                s: v,
                c: S - v,
                m: T && T < 4 || t === "zIndex" ? Math.round : 0
            });
            a.c = d < r.length ? r.substring(d, r.length) : ""
        } else a.r = t === "display" && r === "none" ? xl : vl;
        return Rf.test(r) && (a.e = 0), this._pt = a, a
    }, Qa = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, rd = function (e) {
        var t = e.split(" "), n = t[0], r = t[1] || "50%";
        return (n === "top" || n === "bottom" || r === "left" || r === "right") && (e = n, n = r, r = e), t[0] = Qa[n] || n, t[1] = Qa[r] || r, t.join(" ")
    }, id = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var n = t.t, r = n.style, u = t.u, s = n._gsap, a, d, p;
            if (u === "all" || u === !0) r.cssText = "", d = 1; else for (u = u.split(","), p = u.length; --p > -1;) a = u[p], Or[a] && (d = 1, a = a === "transformOrigin" ? Mr : kt), xu(n, a);
            d && (xu(n, kt), s && (s.svg && n.removeAttribute("transform"), bu(n, 1), s.uncache = 1))
        }
    }, bo = {
        clearProps: function (e, t, n, r, u) {
            if (u.data !== "isFromStart") {
                var s = e._pt = new sn(e._pt, t, n, 0, 0, id);
                return s.u = r, s.pr = -10, s.tween = u, e._props.push(n), 1
            }
        }
    }, Cu = [1, 0, 0, 1, 0, 0], wl = {}, El = function (e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    }, Za = function (e) {
        var t = Dr(e, kt);
        return El(t) ? Cu : t.substr(7).match(Bf).map(ct)
    }, sa = function (e, t) {
        var n = e._gsap || ri(e), r = e.style, u = Za(e), s, a, d, p;
        return n.svg && e.getAttribute("transform") ? (d = e.transform.baseVal.consolidate().matrix, u = [d.a, d.b, d.c, d.d, d.e, d.f], u.join(",") === "1,0,0,1,0,0" ? Cu : u) : (u === Cu && !e.offsetParent && e !== Ei && !n.svg && (d = r.display, r.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (p = 1, a = e.nextSibling, Ei.appendChild(e)), u = Za(e), d ? r.display = d : xu(e, "display"), p && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : Ei.removeChild(e))), t && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }, Ps = function (e, t, n, r, u, s) {
        var a = e._gsap, d = u || sa(e, !0), p = a.xOrigin || 0, _ = a.yOrigin || 0, y = a.xOffset || 0, b = a.yOffset || 0,
            v = d[0], T = d[1], x = d[2], A = d[3], S = d[4], B = d[5], O = t.split(" "), N = parseFloat(O[0]) || 0,
            R = parseFloat(O[1]) || 0, c, j, Y, q;
        n ? d !== Cu && (j = v * A - T * x) && (Y = N * (A / j) + R * (-x / j) + (x * B - A * S) / j, q = N * (-T / j) + R * (v / j) - (v * B - T * S) / j, N = Y, R = q) : (c = bl(e), N = c.x + (~O[0].indexOf("%") ? N / 100 * c.width : N), R = c.y + (~(O[1] || O[0]).indexOf("%") ? R / 100 * c.height : R)), r || r !== !1 && a.smooth ? (S = N - p, B = R - _, a.xOffset = y + (S * v + B * x) - S, a.yOffset = b + (S * T + B * A) - B) : a.xOffset = a.yOffset = 0, a.xOrigin = N, a.yOrigin = R, a.smooth = !!r, a.origin = t, a.originIsAbsolute = !!n, e.style[Mr] = "0px 0px", s && (Sr(s, a, "xOrigin", p, N), Sr(s, a, "yOrigin", _, R), Sr(s, a, "xOffset", y, a.xOffset), Sr(s, a, "yOffset", b, a.yOffset)), e.setAttribute("data-svg-origin", N + " " + R)
    }, bu = function (e, t) {
        var n = e._gsap || new ll(e);
        if ("x" in n && !t && !n.uncache) return n;
        var r = e.style, u = n.scaleX < 0, s = "px", a = "deg", d = Dr(e, Mr) || "0", p, _, y, b, v, T, x, A, S, B, O, N, R,
            c, j, Y, q, Q, re, K, pe, te, se, ie, ve, Te, xt, z, xe, vn, ke, We;
        return p = _ = y = T = x = A = S = B = O = 0, b = v = 1, n.svg = !!(e.getCTM && Tl(e)), c = sa(e, n.svg), n.svg && (ie = (!n.uncache || d === "0px 0px") && !t && e.getAttribute("data-svg-origin"), Ps(e, ie || d, !!ie || n.originIsAbsolute, n.smooth !== !1, c)), N = n.xOrigin || 0, R = n.yOrigin || 0, c !== Cu && (Q = c[0], re = c[1], K = c[2], pe = c[3], p = te = c[4], _ = se = c[5], c.length === 6 ? (b = Math.sqrt(Q * Q + re * re), v = Math.sqrt(pe * pe + K * K), T = Q || re ? gi(re, Q) * Ur : 0, S = K || pe ? gi(K, pe) * Ur + T : 0, S && (v *= Math.abs(Math.cos(S * Si))), n.svg && (p -= N - (N * Q + R * K), _ -= R - (N * re + R * pe))) : (We = c[6], vn = c[7], xt = c[8], z = c[9], xe = c[10], ke = c[11], p = c[12], _ = c[13], y = c[14], j = gi(We, xe), x = j * Ur, j && (Y = Math.cos(-j), q = Math.sin(-j), ie = te * Y + xt * q, ve = se * Y + z * q, Te = We * Y + xe * q, xt = te * -q + xt * Y, z = se * -q + z * Y, xe = We * -q + xe * Y, ke = vn * -q + ke * Y, te = ie, se = ve, We = Te), j = gi(-K, xe), A = j * Ur, j && (Y = Math.cos(-j), q = Math.sin(-j), ie = Q * Y - xt * q, ve = re * Y - z * q, Te = K * Y - xe * q, ke = pe * q + ke * Y, Q = ie, re = ve, K = Te), j = gi(re, Q), T = j * Ur, j && (Y = Math.cos(j), q = Math.sin(j), ie = Q * Y + re * q, ve = te * Y + se * q, re = re * Y - Q * q, se = se * Y - te * q, Q = ie, te = ve), x && Math.abs(x) + Math.abs(T) > 359.9 && (x = T = 0, A = 180 - A), b = ct(Math.sqrt(Q * Q + re * re + K * K)), v = ct(Math.sqrt(se * se + We * We)), j = gi(te, se), S = Math.abs(j) > 2e-4 ? j * Ur : 0, O = ke ? 1 / (ke < 0 ? -ke : ke) : 0), n.svg && (ie = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !El(Dr(e, kt)), ie && e.setAttribute("transform", ie))), Math.abs(S) > 90 && Math.abs(S) < 270 && (u ? (b *= -1, S += T <= 0 ? 180 : -180, T += T <= 0 ? 180 : -180) : (v *= -1, S += S <= 0 ? 180 : -180)), t = t || n.uncache, n.x = p - ((n.xPercent = p && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-p) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + s, n.y = _ - ((n.yPercent = _ && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + s, n.z = y + s, n.scaleX = ct(b), n.scaleY = ct(v), n.rotation = ct(T) + a, n.rotationX = ct(x) + a, n.rotationY = ct(A) + a, n.skewX = S + a, n.skewY = B + a, n.transformPerspective = O + s, (n.zOrigin = parseFloat(d.split(" ")[2]) || 0) && (r[Mr] = To(d)), n.xOffset = n.yOffset = 0, n.force3D = yn.force3D, n.renderTransform = n.svg ? od : Cl ? Sl : ud, n.uncache = 0, n
    }, To = function (e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, fs = function (e, t, n) {
        var r = It(t);
        return ct(parseFloat(t) + parseFloat(Nr(e, "x", n + "px", r))) + r
    }, ud = function (e, t) {
        t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Sl(e, t)
    }, Yr = "0deg", Ui = "0px", Vr = ") ", Sl = function (e, t) {
        var n = t || this, r = n.xPercent, u = n.yPercent, s = n.x, a = n.y, d = n.z, p = n.rotation, _ = n.rotationY,
            y = n.rotationX, b = n.skewX, v = n.skewY, T = n.scaleX, x = n.scaleY, A = n.transformPerspective,
            S = n.force3D, B = n.target, O = n.zOrigin, N = "", R = S === "auto" && e && e !== 1 || S === !0;
        if (O && (y !== Yr || _ !== Yr)) {
            var c = parseFloat(_) * Si, j = Math.sin(c), Y = Math.cos(c), q;
            c = parseFloat(y) * Si, q = Math.cos(c), s = fs(B, s, j * q * -O), a = fs(B, a, -Math.sin(c) * -O), d = fs(B, d, Y * q * -O + O)
        }
        A !== Ui && (N += "perspective(" + A + Vr), (r || u) && (N += "translate(" + r + "%, " + u + "%) "), (R || s !== Ui || a !== Ui || d !== Ui) && (N += d !== Ui || R ? "translate3d(" + s + ", " + a + ", " + d + ") " : "translate(" + s + ", " + a + Vr), p !== Yr && (N += "rotate(" + p + Vr), _ !== Yr && (N += "rotateY(" + _ + Vr), y !== Yr && (N += "rotateX(" + y + Vr), (b !== Yr || v !== Yr) && (N += "skew(" + b + ", " + v + Vr), (T !== 1 || x !== 1) && (N += "scale(" + T + ", " + x + Vr), B.style[kt] = N || "translate(0, 0)"
    }, od = function (e, t) {
        var n = t || this, r = n.xPercent, u = n.yPercent, s = n.x, a = n.y, d = n.rotation, p = n.skewX, _ = n.skewY,
            y = n.scaleX, b = n.scaleY, v = n.target, T = n.xOrigin, x = n.yOrigin, A = n.xOffset, S = n.yOffset,
            B = n.forceCSS, O = parseFloat(s), N = parseFloat(a), R, c, j, Y, q;
        d = parseFloat(d), p = parseFloat(p), _ = parseFloat(_), _ && (_ = parseFloat(_), p += _, d += _), d || p ? (d *= Si, p *= Si, R = Math.cos(d) * y, c = Math.sin(d) * y, j = Math.sin(d - p) * -b, Y = Math.cos(d - p) * b, p && (_ *= Si, q = Math.tan(p - _), q = Math.sqrt(1 + q * q), j *= q, Y *= q, _ && (q = Math.tan(_), q = Math.sqrt(1 + q * q), R *= q, c *= q)), R = ct(R), c = ct(c), j = ct(j), Y = ct(Y)) : (R = y, Y = b, c = j = 0), (O && !~(s + "").indexOf("px") || N && !~(a + "").indexOf("px")) && (O = Nr(v, "x", s, "px"), N = Nr(v, "y", a, "px")), (T || x || A || S) && (O = ct(O + T - (T * R + x * j) + A), N = ct(N + x - (T * c + x * Y) + S)), (r || u) && (q = v.getBBox(), O = ct(O + r / 100 * q.width), N = ct(N + u / 100 * q.height)), q = "matrix(" + R + "," + c + "," + j + "," + Y + "," + O + "," + N + ")", v.setAttribute("transform", q), B && (v.style[kt] = q)
    }, sd = function (e, t, n, r, u) {
        var s = 360, a = wt(u), d = parseFloat(u) * (a && ~u.indexOf("rad") ? Ur : 1), p = d - r, _ = r + p + "deg", y, b;
        return a && (y = u.split("_")[1], y === "short" && (p %= s, p !== p % (s / 2) && (p += p < 0 ? s : -s)), y === "cw" && p < 0 ? p = (p + s * Ya) % s - ~~(p / s) * s : y === "ccw" && p > 0 && (p = (p - s * Ya) % s - ~~(p / s) * s)), e._pt = b = new sn(e._pt, t, n, r, p, Vh), b.e = _, b.u = "deg", e._props.push(n), b
    }, Ka = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }, ad = function (e, t, n) {
        var r = Ka({}, n._gsap), u = "perspective,force3D,transformOrigin,svgOrigin", s = n.style, a, d, p, _, y, b, v, T;
        r.svg ? (p = n.getAttribute("transform"), n.setAttribute("transform", ""), s[kt] = t, a = bu(n, 1), xu(n, kt), n.setAttribute("transform", p)) : (p = getComputedStyle(n)[kt], s[kt] = t, a = bu(n, 1), s[kt] = p);
        for (d in Or) p = r[d], _ = a[d], p !== _ && u.indexOf(d) < 0 && (v = It(p), T = It(_), y = v !== T ? Nr(n, d, p, T) : parseFloat(p), b = parseFloat(_), e._pt = new sn(e._pt, a, d, y, b - y, ml), e._pt.u = T || 0, e._props.push(d));
        Ka(a, r)
    };
on("padding,margin,Width,Radius", function (f, e) {
    var t = "Top", n = "Right", r = "Bottom", u = "Left",
        s = (e < 3 ? [t, n, r, u] : [t + u, t + n, r + n, r + u]).map(function (a) {
            return e < 2 ? f + a : "border" + a + f
        });
    bo[e > 1 ? "border" + f : f] = function (a, d, p, _, y) {
        var b, v;
        if (arguments.length < 4) return b = s.map(function (T) {
            return Gr(a, T, p)
        }), v = b.join(" "), v.split(b[0]).length === 5 ? b[0] : v;
        b = (_ + "").split(" "), v = {}, s.forEach(function (T, x) {
            return v[T] = b[x] = b[x] || b[(x - 1) / 2 | 0]
        }), a.init(d, v, y)
    }
});
var Fl = {
    name: "css", register: As, targetTest: function (e) {
        return e.style && e.nodeType
    }, init: function (e, t, n, r, u) {
        var s = this._props, a = e.style, d = n.vars.startAt, p, _, y, b, v, T, x, A, S, B, O, N, R, c, j;
        oa || As();
        for (x in t) if (x !== "autoRound" && (_ = t[x], !(pn[x] && cl(x, t, n, r, e, u)))) {
            if (v = typeof _, T = bo[x], v === "function" && (_ = _.call(n, r, e, u), v = typeof _), v === "string" && ~_.indexOf("random(") && (_ = yu(_)), T) T(this, e, x, _, n) && (j = 1); else if (x.substr(0, 2) === "--") p = (getComputedStyle(e).getPropertyValue(x) + "").trim(), _ += "", Pr.lastIndex = 0, Pr.test(p) || (A = It(p), S = It(_)), S ? A !== S && (p = Nr(e, x, p, S) + S) : A && (_ += A), this.add(a, "setProperty", p, _, r, u, 0, 0, x), s.push(x); else if (v !== "undefined") {
                if (d && x in d ? (p = typeof d[x] == "function" ? d[x].call(n, r, e, u) : d[x], wt(p) && ~p.indexOf("random(") && (p = yu(p)), It(p + "") || (p += yn.units[x] || It(Gr(e, x)) || ""), (p + "").charAt(1) === "=" && (p = Gr(e, x))) : p = Gr(e, x), b = parseFloat(p), B = v === "string" && _.charAt(1) === "=" && _.substr(0, 2), B && (_ = _.substr(2)), y = parseFloat(_), x in Er && (x === "autoAlpha" && (b === 1 && Gr(e, "visibility") === "hidden" && y && (b = 0), Sr(this, a, "visibility", b ? "inherit" : "hidden", y ? "inherit" : "hidden", !y)), x !== "scale" && x !== "transform" && (x = Er[x], ~x.indexOf(",") && (x = x.split(",")[0]))), O = x in Or, O) {
                    if (N || (R = e._gsap, R.renderTransform && !t.parseTransform || bu(e, t.parseTransform), c = t.smoothOrigin !== !1 && R.smooth, N = this._pt = new sn(this._pt, a, kt, 0, 1, R.renderTransform, R, 0, -1), N.dep = 1), x === "scale") this._pt = new sn(this._pt, R, "scaleY", R.scaleY, (B ? wi(R.scaleY, B + y) : y) - R.scaleY || 0), s.push("scaleY", x), x += "X"; else if (x === "transformOrigin") {
                        _ = rd(_), R.svg ? Ps(e, _, 0, c, 0, this) : (S = parseFloat(_.split(" ")[2]) || 0, S !== R.zOrigin && Sr(this, R, "zOrigin", R.zOrigin, S), Sr(this, a, x, To(p), To(_)));
                        continue
                    } else if (x === "svgOrigin") {
                        Ps(e, _, 1, c, 0, this);
                        continue
                    } else if (x in wl) {
                        sd(this, R, x, b, B ? wi(b, B + _) : _);
                        continue
                    } else if (x === "smoothOrigin") {
                        Sr(this, R, "smooth", R.smooth, _);
                        continue
                    } else if (x === "force3D") {
                        R[x] = _;
                        continue
                    } else if (x === "transform") {
                        ad(this, _, e);
                        continue
                    }
                } else x in a || (x = Ii(x) || x);
                if (O || (y || y === 0) && (b || b === 0) && !Yh.test(_) && x in a) A = (p + "").substr((b + "").length), y || (y = 0), S = It(_) || (x in yn.units ? yn.units[x] : A), A !== S && (b = Nr(e, x, p, S)), this._pt = new sn(this._pt, O ? R : a, x, b, (B ? wi(b, B + y) : y) - b, !O && (S === "px" || x === "zIndex") && t.autoRound !== !1 ? Gh : ml), this._pt.u = S || 0, A !== S && S !== "%" && (this._pt.b = p, this._pt.r = Uh); else if (x in a) nd.call(this, e, x, p, B ? B + _ : _); else if (x in e) this.add(e, x, p || e[x], B ? B + _ : _, r, u); else {
                    Qs(x, _);
                    continue
                }
                s.push(x)
            }
        }
        j && _l(this)
    }, get: Gr, aliases: Er, getSetter: function (e, t, n) {
        var r = Er[t];
        return r && r.indexOf(",") < 0 && (t = r), t in Or && t !== Mr && (e._gsap.x || Gr(e, "x")) ? n && Wa === n ? t === "scale" ? Jh : Kh : (Wa = n || {}) && (t === "scale" ? ed : td) : e.style && !Us(e.style[t]) ? Qh : ~t.indexOf("-") ? Zh : ia(e, t)
    }, core: {_removeProperty: xu, _getMatrix: sa}
};
Vn.utils.checkPrefix = Ii;
(function (f, e, t, n) {
    var r = on(f + "," + e + "," + t, function (u) {
        Or[u] = 1
    });
    on(e, function (u) {
        yn.units[u] = "deg", wl[u] = 1
    }), Er[r[13]] = f + "," + e, on(n, function (u) {
        var s = u.split(":");
        Er[s[1]] = r[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (f) {
    yn.units[f] = "px"
});
Vn.registerPlugin(Fl);
var Ut = Vn.registerPlugin(Fl) || Vn;
Ut.core.Tween;

function Ja(f, e) {
    for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(f, n.key, n)
    }
}

function fd(f, e, t) {
    return e && Ja(f.prototype, e), t && Ja(f, t), f
}/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Vt, ks, Dn, ti, ni, Fi, Al, Qr, fu, Pl, hr, Wn, kl = function () {
    return Vt || typeof window != "undefined" && (Vt = window.gsap) && Vt.registerPlugin && Vt
}, Ol = 1, Ci = [], Ne = [], nr = [], lu = Date.now, Os = function (e, t) {
    return t
}, ld = function () {
    var e = fu.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
    n.push.apply(n, Ne), r.push.apply(r, nr), Ne = n, nr = r, Os = function (s, a) {
        return t[s](a)
    }
}, kr = function (e, t) {
    return ~nr.indexOf(e) && nr[nr.indexOf(e) + 1][t]
}, uo = function (e) {
    return !!~Pl.indexOf(e)
}, tn = function (e, t, n, r, u) {
    return e.addEventListener(t, n, {passive: !r, capture: !!u})
}, Ht = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r)
}, $u = "scrollLeft", Xu = "scrollTop", ef = function () {
    return hr && hr.isPressed || Ne.cache++
}, wo = function (e, t) {
    var n = function r(u) {
        if (u || u === 0) {
            Ol && (Dn.history.scrollRestoration = "manual");
            var s = hr && hr.isPressed;
            u = r.v = Math.round(u) || (hr && hr.iOS ? 1 : 0), e(u), r.cacheID = Ne.cache, s && Os("ss", u)
        } else (t || Ne.cache !== r.cacheID || Os("ref")) && (r.cacheID = Ne.cache, r.v = e());
        return r.v + r.offset
    };
    return n.offset = 0, e && n
}, Yt = {
    s: $u, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: wo(function (f) {
        return arguments.length ? Dn.scrollTo(f, vt.sc()) : Dn.pageXOffset || ti[$u] || ni[$u] || Fi[$u] || 0
    })
}, vt = {
    s: Xu,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Yt,
    sc: wo(function (f) {
        return arguments.length ? Dn.scrollTo(Yt.sc(), f) : Dn.pageYOffset || ti[Xu] || ni[Xu] || Fi[Xu] || 0
    })
}, nn = function (e) {
    return Vt.utils.toArray(e)[0] || (typeof e == "string" && Vt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, Lr = function (e, t) {
    var n = t.s, r = t.sc, u = Ne.indexOf(e), s = r === vt.sc ? 1 : 2;
    return !~u && (u = Ne.push(e) - 1), Ne[u + s] || (Ne[u + s] = wo(kr(e, n), !0) || (uo(e) ? r : wo(function (a) {
        return arguments.length ? e[n] = a : e[n]
    })))
}, Ms = function (e, t, n) {
    var r = e, u = e, s = lu(), a = s, d = t || 50, p = Math.max(500, d * 3), _ = function (T, x) {
        var A = lu();
        x || A - s > d ? (u = r, r = T, a = s, s = A) : n ? r += T : r = u + (T - u) / (A - a) * (s - a)
    }, y = function () {
        u = r = n ? 0 : r, a = s = 0
    }, b = function (T) {
        var x = a, A = u, S = lu();
        return (T || T === 0) && T !== r && _(T), s === a || S - a > p ? 0 : (r + (n ? A : -A)) / ((n ? S : s) - x) * 1e3
    };
    return {update: _, reset: y, getVelocity: b}
}, Gi = function (e, t) {
    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
}, tf = function (e) {
    var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n
}, Ml = function () {
    fu = Vt.core.globals().ScrollTrigger, fu && fu.core && ld()
}, Nl = function (e) {
    return Vt = e || kl(), Vt && typeof document != "undefined" && document.body && (Dn = window, ti = document, ni = ti.documentElement, Fi = ti.body, Pl = [Dn, ti, ni, Fi], Vt.utils.clamp, Qr = "onpointerenter" in Fi ? "pointer" : "mouse", Al = pt.isTouch = Dn.matchMedia && Dn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Dn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Wn = pt.eventTypes = ("ontouchstart" in ni ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ni ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
        return Ol = 0
    }, 500), Ml(), ks = 1), ks
};
Yt.op = vt;
Ne.cache = 0;
var pt = function () {
    function f(t) {
        this.init(t)
    }

    var e = f.prototype;
    return e.init = function (n) {
        ks || Nl(Vt) || console.warn("Please gsap.registerPlugin(Observer)"), fu || Ml();
        var r = n.tolerance, u = n.dragMinimum, s = n.type, a = n.target, d = n.lineHeight, p = n.debounce,
            _ = n.preventDefault, y = n.onStop, b = n.onStopDelay, v = n.ignore, T = n.wheelSpeed, x = n.event,
            A = n.onDragStart, S = n.onDragEnd, B = n.onDrag, O = n.onPress, N = n.onRelease, R = n.onRight,
            c = n.onLeft, j = n.onUp, Y = n.onDown, q = n.onChangeX, Q = n.onChangeY, re = n.onChange, K = n.onToggleX,
            pe = n.onToggleY, te = n.onHover, se = n.onHoverEnd, ie = n.onMove, ve = n.ignoreCheck, Te = n.isNormalizer,
            xt = n.onGestureStart, z = n.onGestureEnd, xe = n.onWheel, vn = n.onEnable, ke = n.onDisable,
            We = n.onClick, Ot = n.scrollSpeed, Le = n.capture, rt = n.allowClicks, it = n.lockAxis, Et = n.onLockAxis;
        this.target = a = nn(a) || ni, this.vars = n, v && (v = Vt.utils.toArray(v)), r = r || 0, u = u || 0, T = T || 1, Ot = Ot || 1, s = s || "wheel,touch,pointer", p = p !== !1, d || (d = parseFloat(Dn.getComputedStyle(Fi).lineHeight) || 22);
        var Re, Gt, Pe, ze, gt, Mt, ee, H = this, Bn = 0, Ue = 0, Un = Lr(a, Yt), Rn = Lr(a, vt), rr = Un(), ft = Rn(),
            zt = ~s.indexOf("touch") && !~s.indexOf("pointer") && Wn[0] === "pointerdown", Nt = uo(a),
            Ie = a.ownerDocument || ti, qt = [0, 0, 0], lt = [0, 0, 0], mr = 0, In = function () {
                return mr = lu()
            }, xn = function (G, ne) {
                return (H.event = G) && v && ~v.indexOf(G.target) || ne && zt && G.pointerType !== "touch" || ve && ve(G, ne)
            }, Cn = function () {
                H._vx.reset(), H._vy.reset(), Gt.pause(), y && y(H)
            }, Qt = function () {
                var G = H.deltaX = tf(qt), ne = H.deltaY = tf(lt), fe = Math.abs(G) >= r, de = Math.abs(ne) >= r;
                re && (fe || de) && re(H, G, ne, qt, lt), fe && (R && H.deltaX > 0 && R(H), c && H.deltaX < 0 && c(H), q && q(H), K && H.deltaX < 0 != Bn < 0 && K(H), Bn = H.deltaX, qt[0] = qt[1] = qt[2] = 0), de && (Y && H.deltaY > 0 && Y(H), j && H.deltaY < 0 && j(H), Q && Q(H), pe && H.deltaY < 0 != Ue < 0 && pe(H), Ue = H.deltaY, lt[0] = lt[1] = lt[2] = 0), (ze || Pe) && (ie && ie(H), Et && Mt && Et(H), Pe && (B(H), Pe = !1), ze = Mt = !1), gt && (xe(H), gt = !1), Re = 0
            }, Gn = function (G, ne, fe) {
                qt[fe] += G, lt[fe] += ne, H._vx.update(G), H._vy.update(ne), p ? Re || (Re = requestAnimationFrame(Qt)) : Qt()
            }, ir = function (G, ne) {
                ee !== "y" && (qt[2] += G, H._vx.update(G, !0)), ee !== "x" && (lt[2] += ne, H._vy.update(ne, !0)), it && !ee && (H.axis = ee = Math.abs(G) > Math.abs(ne) ? "x" : "y", Mt = !0), p ? Re || (Re = requestAnimationFrame(Qt)) : Qt()
            }, me = function (G) {
                if (!xn(G, 1)) {
                    G = Gi(G, _);
                    var ne = G.clientX, fe = G.clientY, de = ne - H.x, Dt = fe - H.y, ye = H.isDragging;
                    H.x = ne, H.y = fe, (ye || Math.abs(H.startX - ne) >= u || Math.abs(H.startY - fe) >= u) && (B && (Pe = !0), ye || (H.isDragging = !0), ir(de, Dt), ye || A && A(H))
                }
            }, Ke = H.onPress = function (Ce) {
                xn(Ce, 1) || (H.axis = ee = null, Gt.pause(), H.isPressed = !0, Ce = Gi(Ce), Bn = Ue = 0, H.startX = H.x = Ce.clientX, H.startY = H.y = Ce.clientY, H._vx.reset(), H._vy.reset(), tn(Te ? a : Ie, Wn[1], me, _, !0), H.deltaX = H.deltaY = 0, O && O(H))
            }, St = function (G) {
                if (!xn(G, 1)) {
                    Ht(Te ? a : Ie, Wn[1], me, !0);
                    var ne = H.isDragging && (Math.abs(H.x - H.startX) > 3 || Math.abs(H.y - H.startY) > 3), fe = Gi(G);
                    ne || (H._vx.reset(), H._vy.reset(), _ && rt && Vt.delayedCall(.08, function () {
                        if (lu() - mr > 300 && !G.defaultPrevented) {
                            if (G.target.click) G.target.click(); else if (Ie.createEvent) {
                                var de = Ie.createEvent("MouseEvents");
                                de.initMouseEvent("click", !0, !0, Dn, 1, fe.screenX, fe.screenY, fe.clientX, fe.clientY, !1, !1, !1, !1, 0, null), G.target.dispatchEvent(de)
                            }
                        }
                    })), H.isDragging = H.isGesturing = H.isPressed = !1, y && !Te && Gt.restart(!0), S && ne && S(H), N && N(H, ne)
                }
            }, an = function (G) {
                return G.touches && G.touches.length > 1 && (H.isGesturing = !0) && xt(G, H.isDragging)
            }, bn = function () {
                return (H.isGesturing = !1) || z(H)
            }, jn = function (G) {
                if (!xn(G)) {
                    var ne = Un(), fe = Rn();
                    Gn((ne - rr) * Ot, (fe - ft) * Ot, 1), rr = ne, ft = fe, y && Gt.restart(!0)
                }
            }, Zt = function (G) {
                if (!xn(G)) {
                    G = Gi(G, _), xe && (gt = !0);
                    var ne = (G.deltaMode === 1 ? d : G.deltaMode === 2 ? Dn.innerHeight : 1) * T;
                    Gn(G.deltaX * ne, G.deltaY * ne, 0), y && !Te && Gt.restart(!0)
                }
            }, fn = function (G) {
                if (!xn(G)) {
                    var ne = G.clientX, fe = G.clientY, de = ne - H.x, Dt = fe - H.y;
                    H.x = ne, H.y = fe, ze = !0, (de || Dt) && ir(de, Dt)
                }
            }, zn = function (G) {
                H.event = G, te(H)
            }, Rr = function (G) {
                H.event = G, se(H)
            }, ur = function (G) {
                return xn(G) || Gi(G, _) && We(H)
            };
        Gt = H._dc = Vt.delayedCall(b || .25, Cn).pause(), H.deltaX = H.deltaY = 0, H._vx = Ms(0, 50, !0), H._vy = Ms(0, 50, !0), H.scrollX = Un, H.scrollY = Rn, H.isDragging = H.isGesturing = H.isPressed = !1, H.enable = function (Ce) {
            return H.isEnabled || (tn(Nt ? Ie : a, "scroll", ef), s.indexOf("scroll") >= 0 && tn(Nt ? Ie : a, "scroll", jn, _, Le), s.indexOf("wheel") >= 0 && tn(a, "wheel", Zt, _, Le), (s.indexOf("touch") >= 0 && Al || s.indexOf("pointer") >= 0) && (tn(a, Wn[0], Ke, _, Le), tn(Ie, Wn[2], St), tn(Ie, Wn[3], St), rt && tn(a, "click", In, !1, !0), We && tn(a, "click", ur), xt && tn(Ie, "gesturestart", an), z && tn(Ie, "gestureend", bn), te && tn(a, Qr + "enter", zn), se && tn(a, Qr + "leave", Rr), ie && tn(a, Qr + "move", fn)), H.isEnabled = !0, Ce && Ce.type && Ke(Ce), vn && vn(H)), H
        }, H.disable = function () {
            H.isEnabled && (Ci.filter(function (Ce) {
                return Ce !== H && uo(Ce.target)
            }).length || Ht(Nt ? Ie : a, "scroll", ef), H.isPressed && (H._vx.reset(), H._vy.reset(), Ht(Te ? a : Ie, Wn[1], me, !0)), Ht(Nt ? Ie : a, "scroll", jn, Le), Ht(a, "wheel", Zt, Le), Ht(a, Wn[0], Ke, Le), Ht(Ie, Wn[2], St), Ht(Ie, Wn[3], St), Ht(a, "click", In, !0), Ht(a, "click", ur), Ht(Ie, "gesturestart", an), Ht(Ie, "gestureend", bn), Ht(a, Qr + "enter", zn), Ht(a, Qr + "leave", Rr), Ht(a, Qr + "move", fn), H.isEnabled = H.isPressed = H.isDragging = !1, ke && ke(H))
        }, H.kill = function () {
            H.disable();
            var Ce = Ci.indexOf(H);
            Ce >= 0 && Ci.splice(Ce, 1), hr === H && (hr = 0)
        }, Ci.push(H), Te && uo(a) && (hr = H), H.enable(x)
    }, fd(f, [{
        key: "velocityX", get: function () {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY", get: function () {
            return this._vy.getVelocity()
        }
    }]), f
}();
pt.version = "3.10.4";
pt.create = function (f) {
    return new pt(f)
};
pt.register = Nl;
pt.getAll = function () {
    return Ci.slice()
};
pt.getById = function (f) {
    return Ci.filter(function (e) {
        return e.vars.id === f
    })[0]
};
kl() && Vt.registerPlugin(pt);/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ge, Kr, we, ot, dr, st, Ll, Eo, So, bi, oo, Wu, At, Bo, Ns, Xt, nf, rf, yi, Bl, ls, Rl, En, Il, jl, zl, Zr, cs,
    eu = 1, Wt = Date.now, hs = Wt(), Nn = 0, Yu = 0, uf = function () {
        return Bo = 1
    }, of = function () {
        return Bo = 0
    }, br = function (e) {
        return e
    }, Tu = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, ql = function () {
        return typeof window != "undefined"
    }, Hl = function () {
        return ge || ql() && (ge = window.gsap) && ge.registerPlugin && ge
    }, li = function (e) {
        return !!~Ll.indexOf(e)
    }, $l = function (e) {
        return kr(e, "getBoundingClientRect") || (li(e) ? function () {
            return po.width = we.innerWidth, po.height = we.innerHeight, po
        } : function () {
            return lr(e)
        })
    }, cd = function (e, t, n) {
        var r = n.d, u = n.d2, s = n.a;
        return (s = kr(e, "getBoundingClientRect")) ? function () {
            return s()[r]
        } : function () {
            return (t ? we["inner" + u] : e["client" + u]) || 0
        }
    }, hd = function (e, t) {
        return !t || ~nr.indexOf(e) ? $l(e) : function () {
            return po
        }
    }, Fr = function (e, t) {
        var n = t.s, r = t.d2, u = t.d, s = t.a;
        return (n = "scroll" + r) && (s = kr(e, n)) ? s() - $l(e)()[u] : li(e) ? (dr[n] || st[n]) - (we["inner" + r] || dr["client" + r] || st["client" + r]) : e[n] - e["offset" + r]
    }, Vu = function (e, t) {
        for (var n = 0; n < yi.length; n += 3) (!t || ~t.indexOf(yi[n + 1])) && e(yi[n], yi[n + 1], yi[n + 2])
    }, Kn = function (e) {
        return typeof e == "string"
    }, Yn = function (e) {
        return typeof e == "function"
    }, tu = function (e) {
        return typeof e == "number"
    }, so = function (e) {
        return typeof e == "object"
    }, Uu = function (e) {
        return Yn(e) && e()
    }, sf = function (e, t) {
        return function () {
            var n = Uu(e), r = Uu(t);
            return function () {
                Uu(n), Uu(r)
            }
        }
    }, Qi = function (e, t, n) {
        return e && e.progress(t ? 0 : 1) && n && e.pause()
    }, ds = function (e, t) {
        if (e.enabled) {
            var n = t(e);
            n && n.totalTime && (e.callbackAnimation = n)
        }
    }, Di = Math.abs, Xl = "left", Wl = "top", aa = "right", fa = "bottom", oi = "width", si = "height", cu = "Right",
    hu = "Left", du = "Top", pu = "Bottom", dt = "padding", Fn = "margin", ji = "Width", la = "Height", $t = "px",
    er = function (e) {
        return we.getComputedStyle(e)
    }, dd = function (e) {
        var t = er(e).position;
        e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
    }, af = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e
    }, lr = function (e, t) {
        var n = t && er(e)[Ns] !== "matrix(1, 0, 0, 1, 0, 0)" && ge.to(e, {
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
        }).progress(1), r = e.getBoundingClientRect();
        return n && n.progress(0).kill(), r
    }, Ls = function (e, t) {
        var n = t.d2;
        return e["offset" + n] || e["client" + n] || 0
    }, Yl = function (e) {
        var t = [], n = e.labels, r = e.duration(), u;
        for (u in n) t.push(n[u] / r);
        return t
    }, pd = function (e) {
        return function (t) {
            return ge.utils.snap(Yl(e), t)
        }
    }, ca = function (e) {
        var t = ge.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function (r, u) {
            return r - u
        });
        return n ? function (r, u, s) {
            s === void 0 && (s = .001);
            var a;
            if (!u) return t(r);
            if (u > 0) {
                for (r -= s, a = 0; a < n.length; a++) if (n[a] >= r) return n[a];
                return n[a - 1]
            } else for (a = n.length, r += s; a--;) if (n[a] <= r) return n[a];
            return n[0]
        } : function (r, u, s) {
            s === void 0 && (s = .001);
            var a = t(r);
            return !u || Math.abs(a - r) < s || a - r < 0 == u < 0 ? a : t(u < 0 ? r - e : r + e)
        }
    }, gd = function (e) {
        return function (t, n) {
            return ca(Yl(e))(t, n.direction)
        }
    }, Gu = function (e, t, n, r) {
        return n.split(",").forEach(function (u) {
            return e(t, u, r)
        })
    }, Pt = function (e, t, n, r, u) {
        return e.addEventListener(t, n, {passive: !r, capture: !!u})
    }, Ct = function (e, t, n, r) {
        return e.removeEventListener(t, n, !!r)
    }, Qu = function (e, t, n) {
        return n && n.wheelHandler && e(t, "wheel", n)
    }, ff = {startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal"},
    Zu = {toggleActions: "play", anticipatePin: 0}, Fo = {top: 0, left: 0, center: .5, bottom: 1, right: 1},
    ao = function (e, t) {
        if (Kn(e)) {
            var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in Fo ? Fo[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }, Ku = function (e, t, n, r, u, s, a, d) {
        var p = u.startColor, _ = u.endColor, y = u.fontSize, b = u.indent, v = u.fontWeight, T = ot.createElement("div"),
            x = li(n) || kr(n, "pinType") === "fixed", A = e.indexOf("scroller") !== -1, S = x ? st : n,
            B = e.indexOf("start") !== -1, O = B ? p : _,
            N = "border-color:" + O + ";font-size:" + y + ";color:" + O + ";font-weight:" + v + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return N += "position:" + ((A || d) && x ? "fixed;" : "absolute;"), (A || d || !x) && (N += (r === vt ? aa : fa) + ":" + (s + parseFloat(b)) + "px;"), a && (N += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), T._isStart = B, T.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), T.style.cssText = N, T.innerText = t || t === 0 ? e + "-" + t : e, S.children[0] ? S.insertBefore(T, S.children[0]) : S.appendChild(T), T._offset = T["offset" + r.op.d2], fo(T, 0, r, B), T
    }, fo = function (e, t, n, r) {
        var u = {display: "block"}, s = n[r ? "os2" : "p2"], a = n[r ? "p2" : "os2"];
        e._isFlipped = r, u[n.a + "Percent"] = r ? -100 : 0, u[n.a] = r ? "1px" : 0, u["border" + s + ji] = 1, u["border" + a + ji] = 0, u[n.p] = t + "px", ge.set(e, u)
    }, Ae = [], Bs = {}, Rs, lf = function () {
        return Wt() - Nn > 34 && Su()
    }, _i = function () {
        (!En || !En.isPressed || En.startX > st.clientWidth) && (Ne.cache++, Rs || (Rs = requestAnimationFrame(Su)), Nn || ci("scrollStart"), Nn = Wt())
    }, cf = function () {
        zl = we.innerWidth, jl = we.innerHeight
    }, nu = function () {
        Ne.cache++, !At && !Rl && !ot.fullscreenElement && !ot.webkitFullscreenElement && (!Il || zl !== we.innerWidth || Math.abs(we.innerHeight - jl) > we.innerHeight * .25) && Eo.restart(!0)
    }, wu = {}, Dd = [], at = [], Ai, hf, df = function (e) {
        var t = ge.ticker.frame, n = [], r = 0, u;
        if (hf !== t || eu) {
            for (Ao(); r < at.length; r += 4) u = we.matchMedia(at[r]).matches, u !== at[r + 3] && (at[r + 3] = u, u ? n.push(r) : Ao(1, at[r]) || Yn(at[r + 2]) && at[r + 2]());
            for (Ul(), r = 0; r < n.length; r++) u = n[r], Ai = at[u], at[u + 2] = at[u + 1](e);
            Ai = 0, Kr && Pi(0, 1), hf = t, ci("matchMedia")
        }
    }, Vl = function f() {
        return Ct(Se, "scrollEnd", f) || Pi(!0)
    }, ci = function (e) {
        return wu[e] && wu[e].map(function (t) {
            return t()
        }) || Dd
    }, Sn = [], Ul = function (e) {
        for (var t = 0; t < Sn.length; t += 5) (!e || Sn[t + 4] === e) && (Sn[t].style.cssText = Sn[t + 1], Sn[t].getBBox && Sn[t].setAttribute("transform", Sn[t + 2] || ""), Sn[t + 3].uncache = 1)
    }, Ao = function (e, t) {
        var n;
        for (Xt = 0; Xt < Ae.length; Xt++) n = Ae[Xt], (!t || n.media === t) && (e ? n.kill(1) : n.revert());
        t && Ul(t), t || ci("revert")
    }, Gl = function () {
        return Ne.cache++ && Ne.forEach(function (e) {
            return typeof e == "function" && (e.rec = 0)
        })
    }, Eu, lo = 0, Pi = function (e, t) {
        if (Nn && !e) {
            Pt(Se, "scrollEnd", Vl);
            return
        }
        Eu = !0;
        var n = ci("refreshInit");
        Bl && Se.sort(), t || Ao(), Ae.slice(0).forEach(function (r) {
            return r.refresh()
        }), Ae.forEach(function (r) {
            return r.vars.end === "max" && r.setPositions(r.start, Fr(r.scroller, r._dir))
        }), n.forEach(function (r) {
            return r && r.render && r.render(-1)
        }), Gl(), Eo.pause(), lo++, Eu = !1, ci("refresh")
    }, pf = 0, co = 1, Jr, Su = function () {
        if (!Eu) {
            Se.isUpdating = !0, Jr && Jr.update(0);
            var e = Ae.length, t = Wt(), n = t - hs >= 50, r = e && Ae[0].scroll();
            if (co = pf > r ? -1 : 1, pf = r, n && (Nn && !Bo && t - Nn > 200 && (Nn = 0, ci("scrollEnd")), oo = hs, hs = t), co < 0) {
                for (Xt = e; Xt-- > 0;) Ae[Xt] && Ae[Xt].update(0, n);
                co = 1
            } else for (Xt = 0; Xt < e; Xt++) Ae[Xt] && Ae[Xt].update(0, n);
            Se.isUpdating = !1
        }
        Rs = 0
    },
    Is = [Xl, Wl, fa, aa, Fn + pu, Fn + cu, Fn + du, Fn + hu, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    ho = Is.concat([oi, si, "boxSizing", "max" + ji, "max" + la, "position", Fn, dt, dt + du, dt + cu, dt + pu, dt + hu]),
    _d = function (e, t, n) {
        Fu(n);
        var r = e._gsap;
        if (r.spacerIsNative) Fu(r.spacerState); else if (e.parentNode === t) {
            var u = t.parentNode;
            u && (u.insertBefore(e, t), u.removeChild(t))
        }
    }, ps = function (e, t, n, r) {
        if (e.parentNode !== t) {
            for (var u = Is.length, s = t.style, a = e.style, d; u--;) d = Is[u], s[d] = n[d];
            s.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (s.display = "inline-block"), a[fa] = a[aa] = s.flexBasis = "auto", s.overflow = "visible", s.boxSizing = "border-box", s[oi] = Ls(e, Yt) + $t, s[si] = Ls(e, vt) + $t, s[dt] = a[Fn] = a[Wl] = a[Xl] = "0", Fu(r), a[oi] = a["max" + ji] = n[oi], a[si] = a["max" + la] = n[si], a[dt] = n[dt], e.parentNode.insertBefore(t, e), t.appendChild(e)
        }
    }, yd = /([A-Z])/g, Fu = function (e) {
        if (e) {
            var t = e.t.style, n = e.length, r = 0, u, s;
            for ((e.t._gsap || ge.core.getCache(e.t)).uncache = 1; r < n; r += 2) s = e[r + 1], u = e[r], s ? t[u] = s : t[u] && t.removeProperty(u.replace(yd, "-$1").toLowerCase())
        }
    }, Ju = function (e) {
        for (var t = ho.length, n = e.style, r = [], u = 0; u < t; u++) r.push(ho[u], n[ho[u]]);
        return r.t = e, r
    }, md = function (e, t, n) {
        for (var r = [], u = e.length, s = n ? 8 : 0, a; s < u; s += 2) a = e[s], r.push(a, a in t ? t[a] : e[s + 1]);
        return r.t = e.t, r
    }, po = {left: 0, top: 0}, gf = function (e, t, n, r, u, s, a, d, p, _, y, b, v) {
        Yn(e) && (e = e(d)), Kn(e) && e.substr(0, 3) === "max" && (e = b + (e.charAt(4) === "=" ? ao("0" + e.substr(3), n) : 0));
        var T = v ? v.time() : 0, x, A, S;
        if (v && v.seek(0), tu(e)) a && fo(a, n, r, !0); else {
            Yn(t) && (t = t(d));
            var B = e.split(" "), O, N, R, c;
            S = nn(t) || st, O = lr(S) || {}, (!O || !O.left && !O.top) && er(S).display === "none" && (c = S.style.display, S.style.display = "block", O = lr(S), c ? S.style.display = c : S.style.removeProperty("display")), N = ao(B[0], O[r.d]), R = ao(B[1] || "0", n), e = O[r.p] - p[r.p] - _ + N + u - R, a && fo(a, R, r, n - R < 20 || a._isStart && R > 20), n -= n - R
        }
        if (s) {
            var j = e + n, Y = s._isStart;
            x = "scroll" + r.d2, fo(s, j, r, Y && j > 20 || !Y && (y ? Math.max(st[x], dr[x]) : s.parentNode[x]) <= j + 1), y && (p = lr(a), y && (s.style[r.op.p] = p[r.op.p] - r.op.m - s._offset + $t))
        }
        return v && S && (x = lr(S), v.seek(b), A = lr(S), v._caScrollDist = x[r.p] - A[r.p], e = e / v._caScrollDist * b), v && v.seek(T), v ? e : Math.round(e)
    }, vd = /(webkit|moz|length|cssText|inset)/i, Df = function (e, t, n, r) {
        if (e.parentNode !== t) {
            var u = e.style, s, a;
            if (t === st) {
                e._stOrig = u.cssText, a = er(e);
                for (s in a) !+s && !vd.test(s) && a[s] && typeof u[s] == "string" && s !== "0" && (u[s] = a[s]);
                u.top = n, u.left = r
            } else u.cssText = e._stOrig;
            ge.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }, _f = function (e, t) {
        var n = Lr(e, t), r = "_scroll" + t.p2, u, s, a = function d(p, _, y, b, v) {
            var T = d.tween, x = _.onComplete, A = {};
            return y = y || n(), v = b && v || 0, b = b || p - y, T && T.kill(), u = Math.round(y), _[r] = p, _.modifiers = A, A[r] = function (S) {
                return S = Tu(n()), S !== u && S !== s && Math.abs(S - u) > 2 && Math.abs(S - s) > 2 ? (T.kill(), d.tween = 0) : S = y + b * T.ratio + v * T.ratio * T.ratio, s = u, u = Tu(S)
            }, _.onComplete = function () {
                d.tween = 0, x && x.call(T)
            }, T = d.tween = ge.to(e, _), T
        };
        return e[r] = n, n.wheelHandler = function () {
            return a.tween && a.tween.kill() && (a.tween = 0)
        }, Pt(e, "wheel", n.wheelHandler), a
    }, Se = function () {
        function f(t, n) {
            Kr || f.register(ge) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, n)
        }

        var e = f.prototype;
        return e.init = function (n, r) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Yu) {
                this.update = this.refresh = this.kill = br;
                return
            }
            n = af(Kn(n) || tu(n) || n.nodeType ? {trigger: n} : n, Zu);
            var u = n, s = u.onUpdate, a = u.toggleClass, d = u.id, p = u.onToggle, _ = u.onRefresh, y = u.scrub,
                b = u.trigger, v = u.pin, T = u.pinSpacing, x = u.invalidateOnRefresh, A = u.anticipatePin,
                S = u.onScrubComplete, B = u.onSnapComplete, O = u.once, N = u.snap, R = u.pinReparent, c = u.pinSpacer,
                j = u.containerAnimation, Y = u.fastScrollEnd, q = u.preventOverlaps,
                Q = n.horizontal || n.containerAnimation && n.horizontal !== !1 ? Yt : vt, re = !y && y !== 0,
                K = nn(n.scroller || we), pe = ge.core.getCache(K), te = li(K),
                se = ("pinType" in n ? n.pinType : kr(K, "pinType") || te && "fixed") === "fixed",
                ie = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack], ve = re && n.toggleActions.split(" "),
                Te = "markers" in n ? n.markers : Zu.markers, xt = te ? 0 : parseFloat(er(K)["border" + Q.p2 + ji]) || 0,
                z = this, xe = n.onRefreshInit && function () {
                    return n.onRefreshInit(z)
                }, vn = cd(K, te, Q), ke = hd(K, te), We = 0, Ot = 0, Le = Lr(K, Q), rt, it, Et, Re, Gt, Pe, ze, gt, Mt, ee, H,
                Bn, Ue, Un, Rn, rr, ft, zt, Nt, Ie, qt, lt, mr, In, xn, Cn, Qt, Gn, ir, me, Ke, St, an, bn, jn, Zt, fn, zn;
            if (z.media = Ai, z._dir = Q, A *= 45, z.scroller = K, z.scroll = j ? j.time.bind(j) : Le, Re = Le(), z.vars = n, r = r || n.animation, "refreshPriority" in n && (Bl = 1, n.refreshPriority === -9999 && (Jr = z)), pe.tweenScroll = pe.tweenScroll || {
                top: _f(K, vt),
                left: _f(K, Yt)
            }, z.tweenTo = rt = pe.tweenScroll[Q.p], z.scrubDuration = function (G) {
                Ke = tu(G) && G, Ke ? me ? me.duration(G) : me = ge.to(r, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: Ke,
                    paused: !0,
                    onComplete: function () {
                        return S && S(z)
                    }
                }) : (me && me.progress(1).kill(), me = 0)
            }, r && (r.vars.lazy = !1, r._initted || r.vars.immediateRender !== !1 && n.immediateRender !== !1 && r.render(0, !0, !0), z.animation = r.pause(), r.scrollTrigger = z, z.scrubDuration(y), Gn = 0, d || (d = r.vars.id)), Ae.push(z), N && ((!so(N) || N.push) && (N = {snapTo: N}), "scrollBehavior" in st.style && ge.set(te ? [st, dr] : K, {scrollBehavior: "auto"}), Et = Yn(N.snapTo) ? N.snapTo : N.snapTo === "labels" ? pd(r) : N.snapTo === "labelsDirectional" ? gd(r) : N.directional !== !1 ? function (G, ne) {
                return ca(N.snapTo)(G, Wt() - Ot < 500 ? 0 : ne.direction)
            } : ge.utils.snap(N.snapTo), St = N.duration || {
                min: .1,
                max: 2
            }, St = so(St) ? bi(St.min, St.max) : bi(St, St), an = ge.delayedCall(N.delay || Ke / 2 || .1, function () {
                var G = Le(), ne = Wt() - Ot < 500, fe = rt.tween;
                if ((ne || Math.abs(z.getVelocity()) < 10) && !fe && !Bo && We !== G) {
                    var de = (G - Pe) / Ue, Dt = r && !re ? r.totalProgress() : de,
                        ye = ne ? 0 : (Dt - ir) / (Wt() - oo) * 1e3 || 0,
                        Je = ge.utils.clamp(-de, 1 - de, Di(ye / 2) * ye / .185), Ge = de + (N.inertia === !1 ? 0 : Je),
                        Ft = bi(0, 1, Et(Ge, z)), Be = Math.round(Pe + Ft * Ue), _t = N, Lt = _t.onStart,
                        Ve = _t.onInterrupt, Qe = _t.onComplete;
                    if (G <= ze && G >= Pe && Be !== G) {
                        if (fe && !fe._initted && fe.data <= Di(Be - G)) return;
                        N.inertia === !1 && (Je = Ft - de), rt(Be, {
                            duration: St(Di(Math.max(Di(Ge - Dt), Di(Ft - Dt)) * .185 / ye / .05 || 0)),
                            ease: N.ease || "power3",
                            data: Di(Be - G),
                            onInterrupt: function () {
                                return an.restart(!0) && Ve && Ve(z)
                            },
                            onComplete: function () {
                                z.update(), We = Le(), Gn = ir = r && !re ? r.totalProgress() : z.progress, B && B(z), Qe && Qe(z)
                            }
                        }, G, Je * Ue, Be - G - Je * Ue), Lt && Lt(z, rt.tween)
                    }
                } else z.isActive && We !== G && an.restart(!0)
            }).pause()), d && (Bs[d] = z), b = z.trigger = nn(b || v), zn = b && b._gsap && b._gsap.stRevert, zn && (zn = zn(z)), v = v === !0 ? b : nn(v), Kn(a) && (a = {
                targets: b,
                className: a
            }), v && (T === !1 || T === Fn || (T = !T && er(v.parentNode).display === "flex" ? !1 : dt), z.pin = v, n.force3D !== !1 && ge.set(v, {force3D: !0}), it = ge.core.getCache(v), it.spacer ? Un = it.pinState : (c && (c = nn(c), c && !c.nodeType && (c = c.current || c.nativeElement), it.spacerIsNative = !!c, c && (it.spacerState = Ju(c))), it.spacer = ft = c || ot.createElement("div"), ft.classList.add("pin-spacer"), d && ft.classList.add("pin-spacer-" + d), it.pinState = Un = Ju(v)), z.spacer = ft = it.spacer, Qt = er(v), mr = Qt[T + Q.os2], Nt = ge.getProperty(v), Ie = ge.quickSetter(v, Q.a, $t), ps(v, ft, Qt), rr = Ju(v)), Te) {
                Bn = so(Te) ? af(Te, ff) : ff, ee = Ku("scroller-start", d, K, Q, Bn, 0), H = Ku("scroller-end", d, K, Q, Bn, 0, ee), zt = ee["offset" + Q.op.d2];
                var Rr = nn(kr(K, "content") || K);
                gt = this.markerStart = Ku("start", d, Rr, Q, Bn, zt, 0, j), Mt = this.markerEnd = Ku("end", d, Rr, Q, Bn, zt, 0, j), j && (fn = ge.quickSetter([gt, Mt], Q.a, $t)), !se && !(nr.length && kr(K, "fixedMarkers") === !0) && (dd(te ? st : K), ge.set([ee, H], {force3D: !0}), xn = ge.quickSetter(ee, Q.a, $t), Cn = ge.quickSetter(H, Q.a, $t))
            }
            if (j) {
                var ur = j.vars.onUpdate, Ce = j.vars.onUpdateParams;
                j.eventCallback("onUpdate", function () {
                    z.update(0, 0, 1), ur && ur.apply(Ce || [])
                })
            }
            z.previous = function () {
                return Ae[Ae.indexOf(z) - 1]
            }, z.next = function () {
                return Ae[Ae.indexOf(z) + 1]
            }, z.revert = function (G) {
                var ne = G !== !1 || !z.enabled, fe = At;
                ne !== z.isReverted && (ne && (z.scroll.rec || !At || !Eu || (z.scroll.rec = Le()), jn = Math.max(Le(), z.scroll.rec || 0), bn = z.progress, Zt = r && r.progress()), gt && [gt, Mt, ee, H].forEach(function (de) {
                    return de.style.display = ne ? "none" : "block"
                }), ne && (At = 1), z.update(ne), At = fe, v && (ne ? _d(v, ft, Un) : (!R || !z.isActive) && ps(v, ft, er(v), In)), z.isReverted = ne)
            }, z.refresh = function (G, ne) {
                if (!((At || !z.enabled) && !ne)) {
                    if (v && G && Nn) {
                        Pt(f, "scrollEnd", Vl);
                        return
                    }
                    !Eu && xe && xe(z), At = 1, Ot = Wt(), rt.tween && (rt.tween.kill(), rt.tween = 0), me && me.pause(), x && r && r.time(-.01, !0).invalidate(), z.isReverted || z.revert();
                    for (var fe = vn(), de = ke(), Dt = j ? j.duration() : Fr(K, Q), ye = 0, Je = 0, Ge = n.end, Ft = n.endTrigger || b, Be = n.start || (n.start === 0 || !b ? 0 : v ? "0 0" : "0 100%"), _t = z.pinnedContainer = n.pinnedContainer && nn(n.pinnedContainer), Lt = b && Math.max(0, Ae.indexOf(z)) || 0, Ve = Lt, Qe, Ye, or, Qn, ut, et, qn, Ir, Ou, vr; Ve--;) et = Ae[Ve], et.end || et.refresh(0, 1) || (At = 1), qn = et.pin, qn && (qn === b || qn === v) && !et.isReverted && (vr || (vr = []), vr.unshift(et), et.revert()), et !== Ae[Ve] && (Lt--, Ve--);
                    for (Yn(Be) && (Be = Be(z)), Pe = gf(Be, b, fe, Q, Le(), gt, ee, z, de, xt, se, Dt, j) || (v ? -.001 : 0), Yn(Ge) && (Ge = Ge(z)), Kn(Ge) && !Ge.indexOf("+=") && (~Ge.indexOf(" ") ? Ge = (Kn(Be) ? Be.split(" ")[0] : "") + Ge : (ye = ao(Ge.substr(2), fe), Ge = Kn(Be) ? Be : Pe + ye, Ft = b)), ze = Math.max(Pe, gf(Ge || (Ft ? "100% 0" : Dt), Ft, fe, Q, Le() + ye, Mt, H, z, de, xt, se, Dt, j)) || -.001, Ue = ze - Pe || (Pe -= .01) && .001, ye = 0, Ve = Lt; Ve--;) et = Ae[Ve], qn = et.pin, qn && et.start - et._pinPush < Pe && !j && et.end > 0 && (Qe = et.end - et.start, (qn === b || qn === _t) && !tu(Be) && (ye += Qe * (1 - et.progress)), qn === v && (Je += Qe));
                    if (Pe += ye, ze += ye, z._pinPush = Je, gt && ye && (Qe = {}, Qe[Q.a] = "+=" + ye, _t && (Qe[Q.p] = "-=" + Le()), ge.set([gt, Mt], Qe)), v) Qe = er(v), Qn = Q === vt, or = Le(), qt = parseFloat(Nt(Q.a)) + Je, !Dt && ze > 1 && ((te ? st : K).style["overflow-" + Q.a] = "scroll"), ps(v, ft, Qe), rr = Ju(v), Ye = lr(v, !0), Ir = se && Lr(K, Qn ? Yt : vt)(), T && (In = [T + Q.os2, Ue + Je + $t], In.t = ft, Ve = T === dt ? Ls(v, Q) + Ue + Je : 0, Ve && In.push(Q.d, Ve + $t), Fu(In), se && Le(jn)), se && (ut = {
                        top: Ye.top + (Qn ? or - Pe : Ir) + $t,
                        left: Ye.left + (Qn ? Ir : or - Pe) + $t,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, ut[oi] = ut["max" + ji] = Math.ceil(Ye.width) + $t, ut[si] = ut["max" + la] = Math.ceil(Ye.height) + $t, ut[Fn] = ut[Fn + du] = ut[Fn + cu] = ut[Fn + pu] = ut[Fn + hu] = "0", ut[dt] = Qe[dt], ut[dt + du] = Qe[dt + du], ut[dt + cu] = Qe[dt + cu], ut[dt + pu] = Qe[dt + pu], ut[dt + hu] = Qe[dt + hu], Rn = md(Un, ut, R)), r ? (Ou = r._initted, ls(1), r.render(r.duration(), !0, !0), lt = Nt(Q.a) - qt + Ue + Je, Ue !== lt && se && Rn.splice(Rn.length - 2, 2), r.render(0, !0, !0), Ou || r.invalidate(), ls(0)) : lt = Ue; else if (b && Le() && !j) for (Ye = b.parentNode; Ye && Ye !== st;) Ye._pinOffset && (Pe -= Ye._pinOffset, ze -= Ye._pinOffset), Ye = Ye.parentNode;
                    vr && vr.forEach(function (Io) {
                        return Io.revert(!1)
                    }), z.start = Pe, z.end = ze, Re = Gt = Le(), j || (Re < jn && Le(jn), z.scroll.rec = 0), z.revert(!1), an && (We = -1, z.isActive && Le(Pe + Ue * bn), an.restart(!0)), At = 0, r && re && (r._initted || Zt) && r.progress() !== Zt && r.progress(Zt, !0).render(r.time(), !0, !0), (bn !== z.progress || j) && (r && !re && r.totalProgress(bn, !0), z.progress = bn, z.update(0, 0, 1)), v && T && (ft._pinOffset = Math.round(z.progress * lt)), _ && _(z)
                }
            }, z.getVelocity = function () {
                return (Le() - Gt) / (Wt() - oo) * 1e3 || 0
            }, z.endAnimation = function () {
                Qi(z.callbackAnimation), r && (me ? me.progress(1) : r.paused() ? re || Qi(r, z.direction < 0, 1) : Qi(r, r.reversed()))
            }, z.labelToScroll = function (G) {
                return r && r.labels && (Pe || z.refresh() || Pe) + r.labels[G] / r.duration() * Ue || 0
            }, z.getTrailing = function (G) {
                var ne = Ae.indexOf(z), fe = z.direction > 0 ? Ae.slice(0, ne).reverse() : Ae.slice(ne + 1);
                return (Kn(G) ? fe.filter(function (de) {
                    return de.vars.preventOverlaps === G
                }) : fe).filter(function (de) {
                    return z.direction > 0 ? de.end <= Pe : de.start >= ze
                })
            }, z.update = function (G, ne, fe) {
                if (!(j && !fe && !G)) {
                    var de = z.scroll(), Dt = G ? 0 : (de - Pe) / Ue, ye = Dt < 0 ? 0 : Dt > 1 ? 1 : Dt || 0,
                        Je = z.progress, Ge, Ft, Be, _t, Lt, Ve, Qe, Ye;
                    if (ne && (Gt = Re, Re = j ? Le() : de, N && (ir = Gn, Gn = r && !re ? r.totalProgress() : ye)), A && !ye && v && !At && !eu && Nn && Pe < de + (de - Gt) / (Wt() - oo) * A && (ye = 1e-4), ye !== Je && z.enabled) {
                        if (Ge = z.isActive = !!ye && ye < 1, Ft = !!Je && Je < 1, Ve = Ge !== Ft, Lt = Ve || !!ye != !!Je, z.direction = ye > Je ? 1 : -1, z.progress = ye, Lt && !At && (Be = ye && !Je ? 0 : ye === 1 ? 1 : Je === 1 ? 2 : 3, re && (_t = !Ve && ve[Be + 1] !== "none" && ve[Be + 1] || ve[Be], Ye = r && (_t === "complete" || _t === "reset" || _t in r))), q && (Ve || Ye) && (Ye || y || !r) && (Yn(q) ? q(z) : z.getTrailing(q).forEach(function (et) {
                            return et.endAnimation()
                        })), re || (me && !At && !eu ? ((j || Jr && Jr !== z) && me.render(me._dp._time - me._start), me.resetTo ? me.resetTo("totalProgress", ye, r._tTime / r._tDur) : (me.vars.totalProgress = ye, me.invalidate().restart())) : r && r.totalProgress(ye, !!At)), v) {
                            if (G && T && (ft.style[T + Q.os2] = mr), !se) Ie(Tu(qt + lt * ye)); else if (Lt) {
                                if (Qe = !G && ye > Je && ze + 1 > de && de + 1 >= Fr(K, Q), R) if (!G && (Ge || Qe)) {
                                    var or = lr(v, !0), Qn = de - Pe;
                                    Df(v, st, or.top + (Q === vt ? Qn : 0) + $t, or.left + (Q === vt ? 0 : Qn) + $t)
                                } else Df(v, ft);
                                Fu(Ge || Qe ? Rn : rr), lt !== Ue && ye < 1 && Ge || Ie(qt + (ye === 1 && !Qe ? lt : 0))
                            }
                        }
                        N && !rt.tween && !At && !eu && an.restart(!0), a && (Ve || O && ye && (ye < 1 || !cs)) && So(a.targets).forEach(function (et) {
                            return et.classList[Ge || O ? "add" : "remove"](a.className)
                        }), s && !re && !G && s(z), Lt && !At ? (re && (Ye && (_t === "complete" ? r.pause().totalProgress(1) : _t === "reset" ? r.restart(!0).pause() : _t === "restart" ? r.restart(!0) : r[_t]()), s && s(z)), (Ve || !cs) && (p && Ve && ds(z, p), ie[Be] && ds(z, ie[Be]), O && (ye === 1 ? z.kill(!1, 1) : ie[Be] = 0), Ve || (Be = ye === 1 ? 1 : 3, ie[Be] && ds(z, ie[Be]))), Y && !Ge && Math.abs(z.getVelocity()) > (tu(Y) ? Y : 2500) && (Qi(z.callbackAnimation), me ? me.progress(1) : Qi(r, !ye, 1))) : re && s && !At && s(z)
                    }
                    if (Cn) {
                        var ut = j ? de / j.duration() * (j._caScrollDist || 0) : de;
                        xn(ut + (ee._isFlipped ? 1 : 0)), Cn(ut)
                    }
                    fn && fn(-de / j.duration() * (j._caScrollDist || 0))
                }
            }, z.enable = function (G, ne) {
                z.enabled || (z.enabled = !0, Pt(K, "resize", nu), Pt(te ? ot : K, "scroll", _i), xe && Pt(f, "refreshInit", xe), G !== !1 && (z.progress = bn = 0, Re = Gt = We = Le()), ne !== !1 && z.refresh())
            }, z.getTween = function (G) {
                return G && rt ? rt.tween : me
            }, z.setPositions = function (G, ne) {
                v && (qt += G - Pe, lt += ne - G - Ue), z.start = Pe = G, z.end = ze = ne, Ue = ne - G, z.update()
            }, z.disable = function (G, ne) {
                if (z.enabled && (G !== !1 && z.revert(), z.enabled = z.isActive = !1, ne || me && me.pause(), jn = 0, it && (it.uncache = 1), xe && Ct(f, "refreshInit", xe), an && (an.pause(), rt.tween && rt.tween.kill() && (rt.tween = 0)), !te)) {
                    for (var fe = Ae.length; fe--;) if (Ae[fe].scroller === K && Ae[fe] !== z) return;
                    Ct(K, "resize", nu), Ct(K, "scroll", _i)
                }
            }, z.kill = function (G, ne) {
                z.disable(G, ne), me && !ne && me.kill(), d && delete Bs[d];
                var fe = Ae.indexOf(z);
                fe >= 0 && Ae.splice(fe, 1), fe === Xt && co > 0 && Xt--, fe = 0, Ae.forEach(function (de) {
                    return de.scroller === z.scroller && (fe = 1)
                }), fe || (z.scroll.rec = 0), r && (r.scrollTrigger = null, G && r.render(-1), ne || r.kill()), gt && [gt, Mt, ee, H].forEach(function (de) {
                    return de.parentNode && de.parentNode.removeChild(de)
                }), Jr === z && (Jr = 0), v && (it && (it.uncache = 1), fe = 0, Ae.forEach(function (de) {
                    return de.pin === v && fe++
                }), fe || (it.spacer = 0)), n.onKill && n.onKill(z)
            }, z.enable(!1, !1), zn && zn(z), !r || !r.add || Ue ? z.refresh() : ge.delayedCall(.01, function () {
                return Pe || ze || z.refresh()
            }) && (Ue = .01) && (Pe = ze = 0)
        }, f.register = function (n) {
            return Kr || (ge = n || Hl(), ql() && window.document && f.enable(), Kr = Yu), Kr
        }, f.defaults = function (n) {
            if (n) for (var r in n) Zu[r] = n[r];
            return Zu
        }, f.disable = function (n, r) {
            Yu = 0, Ae.forEach(function (s) {
                return s[r ? "kill" : "disable"](n)
            }), Ct(we, "wheel", _i), Ct(ot, "scroll", _i), clearInterval(Wu), Ct(ot, "touchcancel", br), Ct(st, "touchstart", br), Gu(Ct, ot, "pointerdown,touchstart,mousedown", uf), Gu(Ct, ot, "pointerup,touchend,mouseup", of), Eo.kill(), Vu(Ct);
            for (var u = 0; u < Ne.length; u += 3) Qu(Ct, Ne[u], Ne[u + 1]), Qu(Ct, Ne[u], Ne[u + 2])
        }, f.enable = function () {
            if (we = window, ot = document, dr = ot.documentElement, st = ot.body, ge && (So = ge.utils.toArray, bi = ge.utils.clamp, ls = ge.core.suppressOverwrites || br, ge.core.globals("ScrollTrigger", f), st)) {
                Yu = 1, pt.register(ge), f.isTouch = pt.isTouch, Zr = pt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Pt(we, "wheel", _i), Ll = [we, ot, dr, st], f.matchMedia({
                    "(orientation: portrait)": function () {
                        return cf(), cf
                    }
                }), Pt(ot, "scroll", _i);
                var n = st.style, r = n.borderTopStyle, u, s;
                for (n.borderTopStyle = "solid", u = lr(st), vt.m = Math.round(u.top + vt.sc()) || 0, Yt.m = Math.round(u.left + Yt.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), Wu = setInterval(lf, 250), ge.delayedCall(.5, function () {
                    return eu = 0
                }), Pt(ot, "touchcancel", br), Pt(st, "touchstart", br), Gu(Pt, ot, "pointerdown,touchstart,mousedown", uf), Gu(Pt, ot, "pointerup,touchend,mouseup", of), Ns = ge.utils.checkPrefix("transform"), ho.push(Ns), Kr = Wt(), Eo = ge.delayedCall(.2, Pi).pause(), yi = [ot, "visibilitychange", function () {
                    var a = we.innerWidth, d = we.innerHeight;
                    ot.hidden ? (nf = a, rf = d) : (nf !== a || rf !== d) && nu()
                }, ot, "DOMContentLoaded", Pi, we, "load", Pi, we, "resize", nu], Vu(Pt), Ae.forEach(function (a) {
                    return a.enable(0, 1)
                }), s = 0; s < Ne.length; s += 3) Qu(Ct, Ne[s], Ne[s + 1]), Qu(Ct, Ne[s], Ne[s + 2])
            }
        }, f.config = function (n) {
            "limitCallbacks" in n && (cs = !!n.limitCallbacks);
            var r = n.syncInterval;
            r && clearInterval(Wu) || (Wu = r) && setInterval(lf, r), "ignoreMobileResize" in n && (Il = f.isTouch === 1 && n.ignoreMobileResize), "autoRefreshEvents" in n && (Vu(Ct) || Vu(Pt, n.autoRefreshEvents || "none"), Rl = (n.autoRefreshEvents + "").indexOf("resize") === -1)
        }, f.scrollerProxy = function (n, r) {
            var u = nn(n), s = Ne.indexOf(u), a = li(u);
            ~s && Ne.splice(s, a ? 6 : 2), r && (a ? nr.unshift(we, r, st, r, dr, r) : nr.unshift(u, r))
        }, f.matchMedia = function (n) {
            var r, u, s, a, d;
            for (u in n) s = at.indexOf(u), a = n[u], Ai = u, u === "all" ? a() : (r = we.matchMedia(u), r && (r.matches && (d = a()), ~s ? (at[s + 1] = sf(at[s + 1], a), at[s + 2] = sf(at[s + 2], d)) : (s = at.length, at.push(u, a, d), r.addListener ? r.addListener(df) : r.addEventListener("change", df)), at[s + 3] = r.matches)), Ai = 0;
            return at
        }, f.clearMatchMedia = function (n) {
            n || (at.length = 0), n = at.indexOf(n), n >= 0 && at.splice(n, 4)
        }, f.isInViewport = function (n, r, u) {
            var s = (Kn(n) ? nn(n) : n).getBoundingClientRect(), a = s[u ? oi : si] * r || 0;
            return u ? s.right - a > 0 && s.left + a < we.innerWidth : s.bottom - a > 0 && s.top + a < we.innerHeight
        }, f.positionInViewport = function (n, r, u) {
            Kn(n) && (n = nn(n));
            var s = n.getBoundingClientRect(), a = s[u ? oi : si],
                d = r == null ? a / 2 : r in Fo ? Fo[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
            return u ? (s.left + d) / we.innerWidth : (s.top + d) / we.innerHeight
        }, f
    }();
Se.version = "3.10.4";
Se.saveStyles = function (f) {
    return f ? So(f).forEach(function (e) {
        if (e && e.style) {
            var t = Sn.indexOf(e);
            t >= 0 && Sn.splice(t, 5), Sn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ge.core.getCache(e), Ai)
        }
    }) : Sn
};
Se.revert = function (f, e) {
    return Ao(!f, e)
};
Se.create = function (f, e) {
    return new Se(f, e)
};
Se.refresh = function (f) {
    return f ? nu() : (Kr || Se.register()) && Pi(!0)
};
Se.update = Su;
Se.clearScrollMemory = Gl;
Se.maxScroll = function (f, e) {
    return Fr(f, e ? Yt : vt)
};
Se.getScrollFunc = function (f, e) {
    return Lr(nn(f), e ? Yt : vt)
};
Se.getById = function (f) {
    return Bs[f]
};
Se.getAll = function () {
    return Ae.filter(function (f) {
        return f.vars.id !== "ScrollSmoother"
    })
};
Se.isScrolling = function () {
    return !!Nn
};
Se.snapDirectional = ca;
Se.addEventListener = function (f, e) {
    var t = wu[f] || (wu[f] = []);
    ~t.indexOf(e) || t.push(e)
};
Se.removeEventListener = function (f, e) {
    var t = wu[f], n = t && t.indexOf(e);
    n >= 0 && t.splice(n, 1)
};
Se.batch = function (f, e) {
    var t = [], n = {}, r = e.interval || .016, u = e.batchMax || 1e9, s = function (p, _) {
        var y = [], b = [], v = ge.delayedCall(r, function () {
            _(y, b), y = [], b = []
        }).pause();
        return function (T) {
            y.length || v.restart(!0), y.push(T.trigger), b.push(T), u <= y.length && v.progress(1)
        }
    }, a;
    for (a in e) n[a] = a.substr(0, 2) === "on" && Yn(e[a]) && a !== "onRefreshInit" ? s(a, e[a]) : e[a];
    return Yn(u) && (u = u(), Pt(Se, "refresh", function () {
        return u = e.batchMax()
    })), So(f).forEach(function (d) {
        var p = {};
        for (a in n) p[a] = n[a];
        p.trigger = d, t.push(Se.create(p))
    }), t
};
var yf = function (e, t, n, r) {
    return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
}, gs = function f(e, t) {
    t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (pt.isTouch ? " pinch-zoom" : "") : "none", e === dr && f(st, t)
}, mf = {auto: 1, scroll: 1}, xd = function (e) {
    var t = e.event, n = e.target, r = e.axis, u = (t.changedTouches ? t.changedTouches[0] : t).target,
        s = u._gsap || ge.core.getCache(u), a = Wt(), d;
    if (!s._isScrollT || a - s._isScrollT > 2e3) {
        for (; u && u.scrollHeight <= u.clientHeight;) u = u.parentNode;
        s._isScroll = u && !li(u) && u !== n && (mf[(d = er(u)).overflowY] || mf[d.overflowX]), s._isScrollT = a
    }
    (s._isScroll || r === "x") && (t._gsapAllow = !0)
}, Ql = function (e, t, n, r) {
    return pt.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: r = r && xd,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
            return n && Pt(ot, pt.eventTypes[0], xf, !1, !0)
        },
        onDisable: function () {
            return Ct(ot, pt.eventTypes[0], xf, !0)
        }
    })
}, Cd = /(input|label|select|textarea)/i, vf, xf = function (e) {
    var t = Cd.test(e.target.tagName);
    (t || vf) && (e._gsapAllow = !0, vf = t)
}, bd = function (e) {
    so(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var t = e, n = t.normalizeScrollX, r = t.momentum, u = t.allowNestedScroll, s, a, d = nn(e.target) || dr,
        p = ge.core.globals().ScrollSmoother,
        _ = Zr && (e.content && nn(e.content) || p && p.get() && p.get().content()), y = Lr(d, vt), b = Lr(d, Yt),
        v = 1,
        T = (pt.isTouch && we.visualViewport ? we.visualViewport.scale * we.visualViewport.width : we.outerWidth) / we.innerWidth,
        x = 0, A = Yn(r) ? function () {
            return r(s)
        } : function () {
            return r || 2.8
        }, S, B, O = Ql(d, e.type, !0, u), N = function () {
            return S = !1
        }, R = br, c = br, j = function () {
            a = Fr(d, vt), c = bi(Zr ? 1 : 0, a), n && (R = bi(0, Fr(d, Yt))), B = lo
        }, Y = function () {
            if (S) {
                requestAnimationFrame(N);
                var se = Tu(s.deltaY / 2), ie = c(y.v - se);
                return _ && ie !== y.v + y.offset && (y.offset = ie - y.v, _.style.transform = "translateY(" + -y.offset + "px)", _._gsap && (_._gsap.y = -y.offset + "px"), y.cacheID = Ne.cache, Su()), !0
            }
            _ && (_.style.transform = "translateY(0px)", y.offset = y.cacheID = 0, _._gsap && (_._gsap.y = "0px")), S = !0
        }, q, Q, re, K, pe = function () {
            j(), q.isActive() && q.vars.scrollY > a && (y() > a ? q.progress(1) && y(a) : q.resetTo("scrollY", a))
        };
    return e.ignoreCheck = function (te) {
        return Zr && te.type === "touchmove" && Y() || v > 1.05 && te.type !== "touchstart" || s.isGesturing || te.touches && te.touches.length > 1
    }, e.onPress = function () {
        var te = v;
        v = Tu((we.visualViewport && we.visualViewport.scale || 1) / T), q.pause(), te !== v && gs(d, v > 1.01 ? !0 : n ? !1 : "x"), S = !1, Q = b(), re = y(), j(), B = lo
    }, e.onRelease = e.onGestureStart = function (te, se) {
        if (_ && (_.style.transform = "translateY(0px)", y.offset = y.cacheID = 0, _._gsap && (_._gsap.y = "0px")), !se) K.restart(!0); else {
            Ne.cache++;
            var ie = A(), ve, Te;
            n && (ve = b(), Te = ve + ie * .05 * -te.velocityX / .227, ie *= yf(b, ve, Te, Fr(d, Yt)), q.vars.scrollX = R(Te)), ve = y(), Te = ve + ie * .05 * -te.velocityY / .227, ie *= yf(y, ve, Te, Fr(d, vt)), q.vars.scrollY = c(Te), q.invalidate().duration(ie).play(.01), (Zr && q.vars.scrollY >= a || ve >= a - 1) && ge.to({}, {
                onUpdate: pe,
                duration: ie
            })
        }
    }, e.onWheel = function () {
        q._ts && q.pause(), Wt() - x > 1e3 && (B = 0, x = Wt())
    }, e.onChange = function (te, se, ie, ve, Te) {
        lo !== B && j(), se && n && b(R(ve[2] === se ? Q + (te.startX - te.x) : b() + se - ve[1])), ie && y(c(Te[2] === ie ? re + (te.startY - te.y) : y() + ie - Te[1])), Su()
    }, e.onEnable = function () {
        gs(d, n ? !1 : "x"), Pt(we, "resize", pe), O.enable()
    }, e.onDisable = function () {
        gs(d, !0), Ct(we, "resize", pe), O.kill()
    }, s = new pt(e), s.iOS = Zr, Zr && !y() && y(1), K = s._dc, q = ge.to(s, {
        ease: "power4",
        paused: !0,
        scrollX: n ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: K.vars.onComplete
    }), s
};
Se.sort = function (f) {
    return Ae.sort(f || function (e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
    })
};
Se.observe = function (f) {
    return new pt(f)
};
Se.normalizeScroll = function (f) {
    if (typeof f == "undefined") return En;
    if (f === !0 && En) return En.enable();
    if (f === !1) return En && En.kill();
    var e = f instanceof pt ? f : bd(f);
    return En && En.target === e.target && En.kill(), li(e.target) && (En = e), e
};
Se.core = {
    _getVelocityProp: Ms, _inputObserver: Ql, _scrollers: Ne, _proxies: nr, bridge: {
        ss: function () {
            Nn || ci("scrollStart"), Nn = Wt()
        }, ref: function () {
            return At
        }
    }
};
Hl() && ge.registerPlugin(Se);/*!
 * strings: 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Td = /(^\s+|\s+$)/g,
    wd = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function Zl(f) {
    var e = f.nodeType, t = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof f.textContent == "string") return f.textContent;
        for (f = f.firstChild; f; f = f.nextSibling) t += Zl(f)
    } else if (e === 3 || e === 4) return f.nodeValue;
    return t
}

function js(f, e, t, n) {
    for (var r = f.firstChild, u = [], s; r;) r.nodeType === 3 ? (s = (r.nodeValue + "").replace(/^\n+/g, ""), n || (s = s.replace(/\s+/g, " ")), u.push.apply(u, Kl(s, e, t, n))) : (r.nodeName + "").toLowerCase() === "br" ? u[u.length - 1] += "<br>" : u.push(r.outerHTML), r = r.nextSibling;
    for (s = u.length; s--;) u[s] === "&" && u.splice(s, 1, "&amp;");
    return u
}

function Kl(f, e, t, n) {
    if (f += "", t && (f = f.replace(Td, "")), e && e !== "") return f.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var r = [], u = f.length, s = 0, a, d; s < u; s++) d = f.charAt(s), (d.charCodeAt(0) >= 55296 && d.charCodeAt(0) <= 56319 || f.charCodeAt(s + 1) >= 65024 && f.charCodeAt(s + 1) <= 65039) && (a = ((f.substr(s, 12).split(wd) || [])[1] || "").length || 2, d = f.substr(s, a), r.emoji = 1, s += a - 1), r.push(d === ">" ? "&gt;" : d === "<" ? "&lt;" : n && d === " " && (f.charAt(s - 1) === " " || f.charAt(s + 1) === " ") ? "&nbsp;" : d);
    return r
}/*!
 * TextPlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ru, eo, Ed = function () {
    return ru || typeof window != "undefined" && (ru = window.gsap) && ru.registerPlugin && ru
}, ku = {
    version: "3.10.4", name: "text", init: function (e, t, n) {
        typeof t != "object" && (t = {value: t});
        var r = e.nodeName.toUpperCase(), u = this, s = t, a = s.newClass, d = s.oldClass, p = s.preserveSpaces,
            _ = s.rtl, y = u.delimiter = t.delimiter || "", b = u.fillChar = t.fillChar || (t.padSpace ? "&nbsp;" : ""),
            v, T, x, A, S, B, O, N;
        if (u.svg = e.getBBox && (r === "TEXT" || r === "TSPAN"), !("innerHTML" in e) && !u.svg) return !1;
        if (u.target = e, !("value" in t)) {
            u.text = u.original = [""];
            return
        }
        for (x = js(e, y, !1, p), eo || (eo = document.createElement("div")), eo.innerHTML = t.value, T = js(eo, y), u.from = n._from, (u.from || _) && !(_ && u.from) && (r = x, x = T, T = r), u.hasClass = !!(a || d), u.newClass = _ ? d : a, u.oldClass = _ ? a : d, r = x.length - T.length, v = r < 0 ? x : T, r < 0 && (r = -r); --r > -1;) v.push(b);
        if (t.type === "diff") {
            for (A = 0, S = [], B = [], O = "", r = 0; r < T.length; r++) N = T[r], N === x[r] ? O += N : (S[A] = O + N, B[A++] = O + x[r], O = "");
            T = S, x = B, O && (T.push(O), x.push(O))
        }
        t.speed && n.duration(Math.min(.05 / t.speed * v.length, t.maxDuration || 9999)), u.rtl = _, u.original = x, u.text = T, u._props.push("text")
    }, render: function (e, t) {
        e > 1 ? e = 1 : e < 0 && (e = 0), t.from && (e = 1 - e);
        var n = t.text, r = t.hasClass, u = t.newClass, s = t.oldClass, a = t.delimiter, d = t.target, p = t.fillChar,
            _ = t.original, y = t.rtl, b = n.length, v = (y ? 1 - e : e) * b + .5 | 0, T, x, A;
        r && e ? (T = u && v, x = s && v !== b, A = (T ? "<span class='" + u + "'>" : "") + n.slice(0, v).join(a) + (T ? "</span>" : "") + (x ? "<span class='" + s + "'>" : "") + a + _.slice(v).join(a) + (x ? "</span>" : "")) : A = n.slice(0, v).join(a) + a + _.slice(v).join(a), t.svg ? d.textContent = A : d.innerHTML = p === "&nbsp;" && ~A.indexOf("  ") ? A.split("  ").join("&nbsp;&nbsp;") : A
    }
};
ku.splitInnerHTML = js;
ku.emojiSafeSplit = Kl;
ku.getText = Zl;
Ed() && ru.registerPlugin(ku);/*!
 * EasePack 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _n, to, Jl = function () {
    return _n || typeof window != "undefined" && (_n = window.gsap) && _n.registerPlugin && _n
}, zs = function (e, t) {
    return !!(typeof e == "undefined" ? t : e && !~(e + "").indexOf("false"))
}, Sd = function (e) {
    if (_n = e || Jl(), _n) {
        to = _n.registerEase;
        var t = _n.parseEase(), n = function (s) {
            return function (a) {
                var d = .5 + a / 2;
                s.config = function (p) {
                    return s(2 * (1 - p) * p * d + p * p)
                }
            }
        }, r;
        for (r in t) t[r].config || n(t[r]);
        to("slow", hi), to("expoScale", Ro), to("rough", zi);
        for (r in gu) r !== "version" && _n.core.globals(r, gu[r])
    }
}, ec = function (e, t, n) {
    e = Math.min(1, e || .7);
    var r = e < 1 ? t || t === 0 ? t : .7 : 0, u = (1 - e) / 2, s = u + e, a = zs(n);
    return function (d) {
        var p = d + (.5 - d) * r;
        return d < u ? a ? 1 - (d = 1 - d / u) * d : p - (d = 1 - d / u) * d * d * d * p : d > s ? a ? d === 1 ? 0 : 1 - (d = (d - s) / u) * d : p + (d - p) * (d = (d - s) / u) * d * d * d : a ? 1 : p
    }
}, tc = function (e, t, n) {
    var r = Math.log(t / e), u = t - e;
    return n && (n = _n.parseEase(n)), function (s) {
        return (e * Math.exp(r * (n ? n(s) : s)) - e) / u
    }
}, Ds = function (e, t, n) {
    this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
}, nc = function (e) {
    typeof e != "object" && (e = {points: +e || 20});
    for (var t = e.taper || "none", n = [], r = 0, u = (+e.points || 20) | 0, s = u, a = zs(e.randomize, !0), d = zs(e.clamp), p = _n ? _n.parseEase(e.template) : 0, _ = (+e.strength || 1) * .4, y, b, v, T, x, A, S; --s > -1;) y = a ? Math.random() : 1 / u * s, b = p ? p(y) : y, t === "none" ? v = _ : t === "out" ? (T = 1 - y, v = T * T * _) : t === "in" ? v = y * y * _ : y < .5 ? (T = y * 2, v = T * T * .5 * _) : (T = (1 - y) * 2, v = T * T * .5 * _), a ? b += Math.random() * v - v * .5 : s % 2 ? b += v * .5 : b -= v * .5, d && (b > 1 ? b = 1 : b < 0 && (b = 0)), n[r++] = {
        x: y,
        y: b
    };
    for (n.sort(function (B, O) {
        return B.x - O.x
    }), A = new Ds(1, 1, null), s = u; s--;) x = n[s], A = new Ds(x.x, x.y, A);
    return S = new Ds(0, 0, A.t ? A : A.next), function (B) {
        var O = S;
        if (B > O.t) {
            for (; O.next && B >= O.t;) O = O.next;
            O = O.prev
        } else for (; O.prev && B <= O.t;) O = O.prev;
        return S = O, O.v + (B - O.t) / O.gap * O.c
    }
}, hi = ec(.7);
hi.ease = hi;
hi.config = ec;
var Ro = tc(1, 2);
Ro.config = tc;
var zi = nc();
zi.ease = zi;
zi.config = nc;
var gu = {SlowMo: hi, RoughEase: zi, ExpoScaleEase: Ro};
for (var Cf in gu) gu[Cf].register = Sd, gu[Cf].version = "3.10.4";
Jl() && _n.registerPlugin(hi);/*!
 * paths 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Fd = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Ad = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    Pd = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, kd = /(^[#\.][a-z]|[a-y][a-z])/i, Od = Math.PI / 180, Md = 180 / Math.PI,
    no = Math.sin, ro = Math.cos, On = Math.abs, cr = Math.sqrt, Nd = Math.atan2, qs = 1e8, bf = function (e) {
        return typeof e == "string"
    }, rc = function (e) {
        return typeof e == "number"
    }, Ld = function (e) {
        return typeof e == "undefined"
    }, Bd = {}, Rd = {}, Po = 1e5, ic = function (e) {
        return Math.round((e + qs) % 1 * Po) / Po || (e < 0 ? 0 : 1)
    }, Oe = function (e) {
        return Math.round(e * Po) / Po || 0
    }, Tf = function (e) {
        return Math.round(e * 1e10) / 1e10 || 0
    }, wf = function (e, t, n, r) {
        var u = e[t], s = r === 1 ? 6 : Hs(u, n, r);
        if (s && s + n + 2 < u.length) return e.splice(t, 0, u.slice(0, n + s + 2)), u.splice(0, n + s), 1
    }, uc = function (e, t, n) {
        var r = e.length, u = ~~(n * r);
        if (e[u] > t) {
            for (; --u && e[u] > t;) ;
            u < 0 && (u = 0)
        } else for (; e[++u] < t && u < r;) ;
        return u < r ? u : r - 1
    }, Id = function (e, t) {
        var n = e.length;
        for (t || e.reverse(); n--;) e[n].reversed || qd(e[n])
    }, Ef = function (e, t) {
        return t.totalLength = e.totalLength, e.samples ? (t.samples = e.samples.slice(0), t.lookup = e.lookup.slice(0), t.minLength = e.minLength, t.resolution = e.resolution) : e.totalPoints && (t.totalPoints = e.totalPoints), t
    }, jd = function (e, t) {
        var n = e.length, r = e[n - 1] || [], u = r.length;
        n && t[0] === r[u - 2] && t[1] === r[u - 1] && (t = r.concat(t.slice(2)), n--), e[n] = t
    };

function go(f) {
    f = bf(f) && kd.test(f) && document.querySelector(f) || f;
    var e = f.getAttribute ? f : 0, t;
    return e && (f = f.getAttribute("d")) ? (e._gsPath || (e._gsPath = {}), t = e._gsPath[f], t && !t._dirty ? t : e._gsPath[f] = ko(f)) : f ? bf(f) ? ko(f) : rc(f[0]) ? [f] : f : console.warn("Expecting a <path> element or an SVG path data string")
}

function zd(f) {
    for (var e = [], t = 0; t < f.length; t++) e[t] = Ef(f[t], f[t].slice(0));
    return Ef(f, e)
}

function qd(f) {
    var e = 0, t;
    for (f.reverse(); e < f.length; e += 2) t = f[e], f[e] = f[e + 1], f[e + 1] = t;
    f.reversed = !f.reversed
}

var Hd = function (e, t) {
        var n = document.createElementNS("http://www.w3.org/2000/svg", "path"), r = [].slice.call(e.attributes),
            u = r.length, s;
        for (t = "," + t + ","; --u > -1;) s = r[u].nodeName.toLowerCase(), t.indexOf("," + s + ",") < 0 && n.setAttributeNS(null, s, r[u].nodeValue);
        return n
    }, $d = {rect: "rx,ry,x,y,width,height", circle: "r,cx,cy", ellipse: "rx,ry,cx,cy", line: "x1,x2,y1,y2"},
    Xd = function (e, t) {
        for (var n = t ? t.split(",") : [], r = {}, u = n.length; --u > -1;) r[n[u]] = +e.getAttribute(n[u]) || 0;
        return r
    };

function Wd(f, e) {
    var t = f.tagName.toLowerCase(), n = .552284749831, r, u, s, a, d, p, _, y, b, v, T, x, A, S, B, O, N, R, c, j, Y,
        q;
    return t === "path" || !f.getBBox ? f : (p = Hd(f, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), q = Xd(f, $d[t]), t === "rect" ? (a = q.rx, d = q.ry || a, u = q.x, s = q.y, v = q.width - a * 2, T = q.height - d * 2, a || d ? (x = u + a * (1 - n), A = u + a, S = A + v, B = S + a * n, O = S + a, N = s + d * (1 - n), R = s + d, c = R + T, j = c + d * n, Y = c + d, r = "M" + O + "," + R + " V" + c + " C" + [O, j, B, Y, S, Y, S - (S - A) / 3, Y, A + (S - A) / 3, Y, A, Y, x, Y, u, j, u, c, u, c - (c - R) / 3, u, R + (c - R) / 3, u, R, u, N, x, s, A, s, A + (S - A) / 3, s, S - (S - A) / 3, s, S, s, B, s, O, N, O, R].join(",") + "z") : r = "M" + (u + v) + "," + s + " v" + T + " h" + -v + " v" + -T + " h" + v + "z") : t === "circle" || t === "ellipse" ? (t === "circle" ? (a = d = q.r, y = a * n) : (a = q.rx, d = q.ry, y = d * n), u = q.cx, s = q.cy, _ = a * n, r = "M" + (u + a) + "," + s + " C" + [u + a, s + y, u + _, s + d, u, s + d, u - _, s + d, u - a, s + y, u - a, s, u - a, s - y, u - _, s - d, u, s - d, u + _, s - d, u + a, s - y, u + a, s].join(",") + "z") : t === "line" ? r = "M" + q.x1 + "," + q.y1 + " L" + q.x2 + "," + q.y2 : (t === "polyline" || t === "polygon") && (b = (f.getAttribute("points") + "").match(Ad) || [], u = b.shift(), s = b.shift(), r = "M" + u + "," + s + " L" + b.join(","), t === "polygon" && (r += "," + u + "," + s + "z")), p.setAttribute("d", ac(p._gsRawPath = ko(r))), e && f.parentNode && (f.parentNode.insertBefore(p, f), f.parentNode.removeChild(f)), p)
}

function oc(f, e, t) {
    var n = f[e], r = f[e + 2], u = f[e + 4], s;
    return n += (r - n) * t, r += (u - r) * t, n += (r - n) * t, s = r + (u + (f[e + 6] - u) * t - r) * t - n, n = f[e + 1], r = f[e + 3], u = f[e + 5], n += (r - n) * t, r += (u - r) * t, n += (r - n) * t, Oe(Nd(r + (u + (f[e + 7] - u) * t - r) * t - n, s) * Md)
}

function sc(f, e, t) {
    t = Ld(t) ? 1 : Tf(t) || 0, e = Tf(e) || 0;
    var n = Math.max(0, ~~(On(t - e) - 1e-8)), r = zd(f);
    if (e > t && (e = 1 - e, t = 1 - t, Id(r), r.totalLength = 0), e < 0 || t < 0) {
        var u = Math.abs(~~Math.min(e, t)) + 1;
        e += u, t += u
    }
    r.totalLength || ki(r);
    var s = t > 1, a = Sf(r, e, Bd, !0), d = Sf(r, t, Rd), p = d.segment, _ = a.segment, y = d.segIndex, b = a.segIndex,
        v = d.i, T = a.i, x = b === y, A = v === T && x, S, B, O, N, R, c, j, Y;
    if (s || n) {
        for (S = y < b || x && v < T || A && d.t < a.t, wf(r, b, T, a.t) && (b++, S || (y++, A ? (d.t = (d.t - a.t) / (1 - a.t), v = 0) : x && (v -= T))), Math.abs(1 - (t - e)) < 1e-5 ? y = b - 1 : !d.t && y ? y-- : wf(r, y, v, d.t) && S && b++, a.t === 1 && (b = (b + 1) % r.length), R = [], c = r.length, j = 1 + c * n, Y = b, j += (c - b + y) % c, N = 0; N < j; N++) jd(R, r[Y++ % c]);
        r = R
    } else if (O = d.t === 1 ? 6 : Hs(p, v, d.t), e !== t) for (B = Hs(_, T, A ? a.t / d.t : a.t), x && (O += B), p.splice(v + O + 2), (B || T) && _.splice(0, T + B), N = r.length; N--;) (N < b || N > y) && r.splice(N, 1); else p.angle = oc(p, v + O, 0), v += O, a = p[v], d = p[v + 1], p.length = p.totalLength = 0, p.totalPoints = r.totalPoints = 8, p.push(a, d, a, d, a, d, a, d);
    return r.totalLength = 0, r
}

function Yd(f, e, t) {
    e = e || 0, f.samples || (f.samples = [], f.lookup = []);
    var n = ~~f.resolution || 12, r = 1 / n, u = t ? e + t * 6 + 1 : f.length, s = f[e], a = f[e + 1],
        d = e ? e / 6 * n : 0, p = f.samples, _ = f.lookup, y = (e ? f.minLength : qs) || qs, b = p[d + t * n - 1],
        v = e ? p[d - 1] : 0, T, x, A, S, B, O, N, R, c, j, Y, q, Q, re, K, pe, te;
    for (p.length = _.length = 0, x = e + 2; x < u; x += 6) {
        if (A = f[x + 4] - s, S = f[x + 2] - s, B = f[x] - s, R = f[x + 5] - a, c = f[x + 3] - a, j = f[x + 1] - a, O = N = Y = q = 0, On(A) < .01 && On(R) < .01 && On(B) + On(j) < .01) f.length > 8 && (f.splice(x, 6), x -= 6, u -= 6); else for (T = 1; T <= n; T++) re = r * T, Q = 1 - re, O = N - (N = (re * re * A + 3 * Q * (re * S + Q * B)) * re), Y = q - (q = (re * re * R + 3 * Q * (re * c + Q * j)) * re), pe = cr(Y * Y + O * O), pe < y && (y = pe), v += pe, p[d++] = v;
        s += A, a += R
    }
    if (b) for (b -= v; d < p.length; d++) p[d] += b;
    if (p.length && y) {
        if (f.totalLength = te = p[p.length - 1] || 0, f.minLength = y, te / y < 9999) for (pe = K = 0, T = 0; T < te; T += y) _[pe++] = p[K] < T ? ++K : K
    } else f.totalLength = p[0] = 0;
    return e ? v - p[e / 2 - 1] : v
}

function ki(f, e) {
    var t, n, r;
    for (r = t = n = 0; r < f.length; r++) f[r].resolution = ~~e || 12, n += f[r].length, t += Yd(f[r]);
    return f.totalPoints = n, f.totalLength = t, f
}

function Hs(f, e, t) {
    if (t <= 0 || t >= 1) return 0;
    var n = f[e], r = f[e + 1], u = f[e + 2], s = f[e + 3], a = f[e + 4], d = f[e + 5], p = f[e + 6], _ = f[e + 7],
        y = n + (u - n) * t, b = u + (a - u) * t, v = r + (s - r) * t, T = s + (d - s) * t, x = y + (b - y) * t,
        A = v + (T - v) * t, S = a + (p - a) * t, B = d + (_ - d) * t;
    return b += (S - b) * t, T += (B - T) * t, f.splice(e + 2, 4, Oe(y), Oe(v), Oe(x), Oe(A), Oe(x + (b - x) * t), Oe(A + (T - A) * t), Oe(b), Oe(T), Oe(S), Oe(B)), f.samples && f.samples.splice(e / 6 * f.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
}

function Sf(f, e, t, n) {
    t = t || {}, f.totalLength || ki(f), (e < 0 || e > 1) && (e = ic(e));
    var r = 0, u = f[0], s, a, d, p, _, y, b;
    if (!e) b = y = r = 0, u = f[0]; else if (e === 1) b = 1, r = f.length - 1, u = f[r], y = u.length - 8; else {
        if (f.length > 1) {
            for (d = f.totalLength * e, _ = y = 0; (_ += f[y++].totalLength) < d;) r = y;
            u = f[r], p = _ - u.totalLength, e = (d - p) / (_ - p) || 0
        }
        s = u.samples, a = u.resolution, d = u.totalLength * e, y = u.lookup.length ? u.lookup[~~(d / u.minLength)] || 0 : uc(s, d, e), p = y ? s[y - 1] : 0, _ = s[y], _ < d && (p = _, _ = s[++y]), b = 1 / a * ((d - p) / (_ - p) + y % a), y = ~~(y / a) * 6, n && b === 1 && (y + 6 < u.length ? (y += 6, b = 0) : r + 1 < f.length && (y = b = 0, u = f[++r]))
    }
    return t.t = b, t.i = y, t.path = f, t.segment = u, t.segIndex = r, t
}

function Ff(f, e, t, n) {
    var r = f[0], u = n || {}, s, a, d, p, _, y, b, v, T;
    if ((e < 0 || e > 1) && (e = ic(e)), f.length > 1) {
        for (d = f.totalLength * e, _ = y = 0; (_ += f[y++].totalLength) < d;) r = f[y];
        p = _ - r.totalLength, e = (d - p) / (_ - p) || 0
    }
    return s = r.samples, a = r.resolution, d = r.totalLength * e, y = r.lookup.length ? r.lookup[e < 1 ? ~~(d / r.minLength) : r.lookup.length - 1] || 0 : uc(s, d, e), p = y ? s[y - 1] : 0, _ = s[y], _ < d && (p = _, _ = s[++y]), b = 1 / a * ((d - p) / (_ - p) + y % a) || 0, T = 1 - b, y = ~~(y / a) * 6, v = r[y], u.x = Oe((b * b * (r[y + 6] - v) + 3 * T * (b * (r[y + 4] - v) + T * (r[y + 2] - v))) * b + v), u.y = Oe((b * b * (r[y + 7] - (v = r[y + 1])) + 3 * T * (b * (r[y + 5] - v) + T * (r[y + 3] - v))) * b + v), t && (u.angle = r.totalLength ? oc(r, y, b >= 1 ? 1 - 1e-9 : b || 1e-9) : r.angle || 0), u
}

function iu(f, e, t, n, r, u, s) {
    for (var a = f.length, d, p, _, y, b; --a > -1;) for (d = f[a], p = d.length, _ = 0; _ < p; _ += 2) y = d[_], b = d[_ + 1], d[_] = y * e + b * n + u, d[_ + 1] = y * t + b * r + s;
    return f._dirty = 1, f
}

function Vd(f, e, t, n, r, u, s, a, d) {
    if (!(f === a && e === d)) {
        t = On(t), n = On(n);
        var p = r % 360 * Od, _ = ro(p), y = no(p), b = Math.PI, v = b * 2, T = (f - a) / 2, x = (e - d) / 2,
            A = _ * T + y * x, S = -y * T + _ * x, B = A * A, O = S * S, N = B / (t * t) + O / (n * n);
        N > 1 && (t = cr(N) * t, n = cr(N) * n);
        var R = t * t, c = n * n, j = (R * c - R * O - c * B) / (R * O + c * B);
        j < 0 && (j = 0);
        var Y = (u === s ? -1 : 1) * cr(j), q = Y * (t * S / n), Q = Y * -(n * A / t), re = (f + a) / 2,
            K = (e + d) / 2, pe = re + (_ * q - y * Q), te = K + (y * q + _ * Q), se = (A - q) / t, ie = (S - Q) / n,
            ve = (-A - q) / t, Te = (-S - Q) / n, xt = se * se + ie * ie,
            z = (ie < 0 ? -1 : 1) * Math.acos(se / cr(xt)),
            xe = (se * Te - ie * ve < 0 ? -1 : 1) * Math.acos((se * ve + ie * Te) / cr(xt * (ve * ve + Te * Te)));
        isNaN(xe) && (xe = b), !s && xe > 0 ? xe -= v : s && xe < 0 && (xe += v), z %= v, xe %= v;
        var vn = Math.ceil(On(xe) / (v / 4)), ke = [], We = xe / vn, Ot = 4 / 3 * no(We / 2) / (1 + ro(We / 2)),
            Le = _ * t, rt = y * t, it = y * -n, Et = _ * n, Re;
        for (Re = 0; Re < vn; Re++) r = z + Re * We, A = ro(r), S = no(r), se = ro(r += We), ie = no(r), ke.push(A - Ot * S, S + Ot * A, se + Ot * ie, ie - Ot * se, se, ie);
        for (Re = 0; Re < ke.length; Re += 2) A = ke[Re], S = ke[Re + 1], ke[Re] = A * Le + S * it + pe, ke[Re + 1] = A * rt + S * Et + te;
        return ke[Re - 2] = a, ke[Re - 1] = d, ke
    }
}

function ko(f) {
    var e = (f + "").replace(Pd, function (q) {
            var Q = +q;
            return Q < 1e-4 && Q > -1e-4 ? 0 : Q
        }).match(Fd) || [], t = [], n = 0, r = 0, u = 2 / 3, s = e.length, a = 0, d = "ERROR: malformed path: " + f, p, _,
        y, b, v, T, x, A, S, B, O, N, R, c, j, Y = function (Q, re, K, pe) {
            B = (K - Q) / 3, O = (pe - re) / 3, x.push(Q + B, re + O, K - B, pe - O, K, pe)
        };
    if (!f || !isNaN(e[0]) || isNaN(e[1])) return console.log(d), t;
    for (p = 0; p < s; p++) if (R = v, isNaN(e[p]) ? (v = e[p].toUpperCase(), T = v !== e[p]) : p--, y = +e[p + 1], b = +e[p + 2], T && (y += n, b += r), p || (A = y, S = b), v === "M") x && (x.length < 8 ? t.length -= 1 : a += x.length), n = A = y, r = S = b, x = [y, b], t.push(x), p += 2, v = "L"; else if (v === "C") x || (x = [0, 0]), T || (n = r = 0), x.push(y, b, n + e[p + 3] * 1, r + e[p + 4] * 1, n += e[p + 5] * 1, r += e[p + 6] * 1), p += 6; else if (v === "S") B = n, O = r, (R === "C" || R === "S") && (B += n - x[x.length - 4], O += r - x[x.length - 3]), T || (n = r = 0), x.push(B, O, y, b, n += e[p + 3] * 1, r += e[p + 4] * 1), p += 4; else if (v === "Q") B = n + (y - n) * u, O = r + (b - r) * u, T || (n = r = 0), n += e[p + 3] * 1, r += e[p + 4] * 1, x.push(B, O, n + (y - n) * u, r + (b - r) * u, n, r), p += 4; else if (v === "T") B = n - x[x.length - 4], O = r - x[x.length - 3], x.push(n + B, r + O, y + (n + B * 1.5 - y) * u, b + (r + O * 1.5 - b) * u, n = y, r = b), p += 2; else if (v === "H") Y(n, r, n = y, r), p += 1; else if (v === "V") Y(n, r, n, r = y + (T ? r - n : 0)), p += 1; else if (v === "L" || v === "Z") v === "Z" && (y = A, b = S, x.closed = !0), (v === "L" || On(n - y) > .5 || On(r - b) > .5) && (Y(n, r, y, b), v === "L" && (p += 2)), n = y, r = b; else if (v === "A") {
        if (c = e[p + 4], j = e[p + 5], B = e[p + 6], O = e[p + 7], _ = 7, c.length > 1 && (c.length < 3 ? (O = B, B = j, _--) : (O = j, B = c.substr(2), _ -= 2), j = c.charAt(1), c = c.charAt(0)), N = Vd(n, r, +e[p + 1], +e[p + 2], +e[p + 3], +c, +j, (T ? n : 0) + B * 1, (T ? r : 0) + O * 1), p += _, N) for (_ = 0; _ < N.length; _++) x.push(N[_]);
        n = x[x.length - 2], r = x[x.length - 1]
    } else console.log(d);
    return p = x.length, p < 6 ? (t.pop(), p = 0) : x[0] === x[p - 2] && x[1] === x[p - 1] && (x.closed = !0), t.totalPoints = a + p, t
}

function Ud(f, e) {
    e === void 0 && (e = 1);
    for (var t = f[0], n = 0, r = [t, n], u = 2; u < f.length; u += 2) r.push(t, n, f[u], n = (f[u] - t) * e / 2, t = f[u], -n);
    return r
}

function $s(f, e) {
    On(f[0] - f[2]) < 1e-4 && On(f[1] - f[3]) < 1e-4 && (f = f.slice(2));
    var t = f.length - 2, n = +f[0], r = +f[1], u = +f[2], s = +f[3], a = [n, r, n, r], d = u - n, p = s - r,
        _ = Math.abs(f[t] - n) < .001 && Math.abs(f[t + 1] - r) < .001, y, b, v, T, x, A, S, B, O, N, R, c, j, Y, q;
    for (_ && (f.push(u, s), u = n, s = r, n = f[t - 2], r = f[t - 1], f.unshift(n, r), t += 4), e = e || e === 0 ? +e : 1, v = 2; v < t; v += 2) y = n, b = r, n = u, r = s, u = +f[v + 2], s = +f[v + 3], !(n === u && r === s) && (T = d, x = p, d = u - n, p = s - r, A = cr(T * T + x * x), S = cr(d * d + p * p), B = cr(Math.pow(d / S + T / A, 2) + Math.pow(p / S + x / A, 2)), O = (A + S) * e * .25 / B, N = n - (n - y) * (A ? O / A : 0), R = n + (u - n) * (S ? O / S : 0), c = n - (N + ((R - N) * (A * 3 / (A + S) + .5) / 4 || 0)), j = r - (r - b) * (A ? O / A : 0), Y = r + (s - r) * (S ? O / S : 0), q = r - (j + ((Y - j) * (A * 3 / (A + S) + .5) / 4 || 0)), (n !== y || r !== b) && a.push(Oe(N + c), Oe(j + q), Oe(n), Oe(r), Oe(R + c), Oe(Y + q)));
    return n !== u || r !== s || a.length < 4 ? a.push(Oe(u), Oe(s), Oe(u), Oe(s)) : a.length -= 2, a.length === 2 ? a.push(n, r, n, r, n, r) : _ && (a.splice(0, 6), a.length = a.length - 6), a
}

function ac(f) {
    rc(f[0]) && (f = [f]);
    var e = "", t = f.length, n, r, u, s;
    for (r = 0; r < t; r++) {
        for (s = f[r], e += "M" + Oe(s[0]) + "," + Oe(s[1]) + " C", n = s.length, u = 2; u < n; u++) e += Oe(s[u++]) + "," + Oe(s[u++]) + " " + Oe(s[u++]) + "," + Oe(s[u++]) + " " + Oe(s[u++]) + "," + Oe(s[u]) + " ";
        s.closed && (e += "z")
    }
    return e
}/*!
 * matrix 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var pr, ai, ha, Oi, uu, Do, Oo, Du, Mn = "transform", Xs = Mn + "Origin", fc, lc = function (e) {
    var t = e.ownerDocument || e;
    for (!(Mn in e.style) && ("msTransform" in e.style) && (Mn = "msTransform", Xs = Mn + "Origin"); t.parentNode && (t = t.parentNode);) ;
    if (ai = window, Oo = new Au, t) {
        pr = t, ha = t.documentElement, Oi = t.body, Du = pr.createElementNS("http://www.w3.org/2000/svg", "g"), Du.style.transform = "none";
        var n = t.createElement("div"), r = t.createElement("div");
        Oi.appendChild(n), n.appendChild(r), n.style.position = "static", n.style[Mn] = "translate3d(0,0,1px)", fc = r.offsetParent !== n, Oi.removeChild(n)
    }
    return t
}, Gd = function (e) {
    for (var t, n; e && e !== Oi;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
    return t
}, cc = [], hc = [], Qd = function () {
    return ai.pageYOffset || pr.scrollTop || ha.scrollTop || Oi.scrollTop || 0
}, Zd = function () {
    return ai.pageXOffset || pr.scrollLeft || ha.scrollLeft || Oi.scrollLeft || 0
}, da = function (e) {
    return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
}, Kd = function f(e) {
    if (ai.getComputedStyle(e).position === "fixed") return !0;
    if (e = e.parentNode, e && e.nodeType === 1) return f(e)
}, _s = function f(e, t) {
    if (e.parentNode && (pr || lc(e))) {
        var n = da(e), r = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
            u = n ? t ? "rect" : "g" : "div", s = t !== 2 ? 0 : 100, a = t === 3 ? 100 : 0,
            d = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
            p = pr.createElementNS ? pr.createElementNS(r.replace(/^https/, "http"), u) : pr.createElement(u);
        return t && (n ? (Do || (Do = f(e)), p.setAttribute("width", .01), p.setAttribute("height", .01), p.setAttribute("transform", "translate(" + s + "," + a + ")"), Do.appendChild(p)) : (uu || (uu = f(e), uu.style.cssText = d), p.style.cssText = d + "width:0.1px;height:0.1px;top:" + a + "px;left:" + s + "px", uu.appendChild(p))), p
    }
    throw"Need document and parent."
}, Jd = function (e) {
    for (var t = new Au, n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
    return t
}, ep = function (e) {
    var t = e.getCTM(), n;
    return t || (n = e.style[Mn], e.style[Mn] = "none", e.appendChild(Du), t = Du.getCTM(), e.removeChild(Du), n ? e.style[Mn] = n : e.style.removeProperty(Mn.replace(/([A-Z])/g, "-$1").toLowerCase())), t || Oo.clone()
}, tp = function (e, t) {
    var n = da(e), r = e === n, u = n ? cc : hc, s = e.parentNode, a, d, p, _, y, b;
    if (e === ai) return e;
    if (u.length || u.push(_s(e, 1), _s(e, 2), _s(e, 3)), a = n ? Do : uu, n) r ? (p = ep(e), _ = -p.e / p.a, y = -p.f / p.d, d = Oo) : e.getBBox ? (p = e.getBBox(), d = e.transform ? e.transform.baseVal : {}, d = d.numberOfItems ? d.numberOfItems > 1 ? Jd(d) : d.getItem(0).matrix : Oo, _ = d.a * p.x + d.c * p.y, y = d.b * p.x + d.d * p.y) : (d = new Au, _ = y = 0), t && e.tagName.toLowerCase() === "g" && (_ = y = 0), (r ? n : s).appendChild(a), a.setAttribute("transform", "matrix(" + d.a + "," + d.b + "," + d.c + "," + d.d + "," + (d.e + _) + "," + (d.f + y) + ")"); else {
        if (_ = y = 0, fc) for (d = e.offsetParent, p = e; p && (p = p.parentNode) && p !== d && p.parentNode;) (ai.getComputedStyle(p)[Mn] + "").length > 4 && (_ = p.offsetLeft, y = p.offsetTop, p = 0);
        if (b = ai.getComputedStyle(e), b.position !== "absolute" && b.position !== "fixed") for (d = e.offsetParent; s && s !== d;) _ += s.scrollLeft || 0, y += s.scrollTop || 0, s = s.parentNode;
        p = a.style, p.top = e.offsetTop - y + "px", p.left = e.offsetLeft - _ + "px", p[Mn] = b[Mn], p[Xs] = b[Xs], p.position = b.position === "fixed" ? "fixed" : "absolute", e.parentNode.appendChild(a)
    }
    return a
}, ys = function (e, t, n, r, u, s, a) {
    return e.a = t, e.b = n, e.c = r, e.d = u, e.e = s, e.f = a, e
}, Au = function () {
    function f(t, n, r, u, s, a) {
        t === void 0 && (t = 1), n === void 0 && (n = 0), r === void 0 && (r = 0), u === void 0 && (u = 1), s === void 0 && (s = 0), a === void 0 && (a = 0), ys(this, t, n, r, u, s, a)
    }

    var e = f.prototype;
    return e.inverse = function () {
        var n = this.a, r = this.b, u = this.c, s = this.d, a = this.e, d = this.f, p = n * s - r * u || 1e-10;
        return ys(this, s / p, -r / p, -u / p, n / p, (u * d - s * a) / p, -(n * d - r * a) / p)
    }, e.multiply = function (n) {
        var r = this.a, u = this.b, s = this.c, a = this.d, d = this.e, p = this.f, _ = n.a, y = n.c, b = n.b, v = n.d,
            T = n.e, x = n.f;
        return ys(this, _ * r + b * s, _ * u + b * a, y * r + v * s, y * u + v * a, d + T * r + x * s, p + T * u + x * a)
    }, e.clone = function () {
        return new f(this.a, this.b, this.c, this.d, this.e, this.f)
    }, e.equals = function (n) {
        var r = this.a, u = this.b, s = this.c, a = this.d, d = this.e, p = this.f;
        return r === n.a && u === n.b && s === n.c && a === n.d && d === n.e && p === n.f
    }, e.apply = function (n, r) {
        r === void 0 && (r = {});
        var u = n.x, s = n.y, a = this.a, d = this.b, p = this.c, _ = this.d, y = this.e, b = this.f;
        return r.x = u * a + s * p + y || 0, r.y = u * d + s * _ + b || 0, r
    }, f
}();

function Mi(f, e, t, n) {
    if (!f || !f.parentNode || (pr || lc(f)).documentElement === f) return new Au;
    var r = Gd(f), u = da(f), s = u ? cc : hc, a = tp(f, t), d = s[0].getBoundingClientRect(),
        p = s[1].getBoundingClientRect(), _ = s[2].getBoundingClientRect(), y = a.parentNode, b = !n && Kd(f),
        v = new Au((p.left - d.left) / 100, (p.top - d.top) / 100, (_.left - d.left) / 100, (_.top - d.top) / 100, d.left + (b ? 0 : Zd()), d.top + (b ? 0 : Qd()));
    if (y.removeChild(a), r) for (d = r.length; d--;) p = r[d], p.scaleX = p.scaleY = 0, p.renderTransform(1, p);
    return e ? v.inverse() : v
}/*!
 * MotionPathPlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var np = "x,translateX,left,marginLeft,xPercent".split(","), rp = "y,translateY,top,marginTop,yPercent".split(","),
    ip = Math.PI / 180, tr, dc, mi, Ws, up = function () {
        return tr || typeof window != "undefined" && (tr = window.gsap) && tr.registerPlugin && tr
    }, Zi = function (e, t, n, r) {
        for (var u = t.length, s = r === 2 ? 0 : r, a = 0; a < u; a++) e[s] = parseFloat(t[a][n]), r === 2 && (e[s + 1] = 0), s += 2;
        return e
    }, Ti = function (e, t, n) {
        return parseFloat(e._gsap.get(e, t, n || "px")) || 0
    }, pc = function (e) {
        var t = e[0], n = e[1], r;
        for (r = 2; r < e.length; r += 2) t = e[r] += t, n = e[r + 1] += n
    }, Af = function (e, t, n, r, u, s, a, d, p) {
        if (a.type === "cubic") t = [t]; else {
            a.fromCurrent !== !1 && t.unshift(Ti(n, r, d), u ? Ti(n, u, p) : 0), a.relative && pc(t);
            var _ = u ? $s : Ud;
            t = [_(t, a.curviness)]
        }
        return t = s(gc(t, n, a)), Mo(e, n, r, t, "x", d), u && Mo(e, n, u, t, "y", p), ki(t, a.resolution || (a.curviness === 0 ? 20 : 12))
    }, op = function (e) {
        return e
    }, sp = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, Pf = function (e, t, n) {
        var r = Mi(e), u = 0, s = 0, a;
        return (e.tagName + "").toLowerCase() === "svg" ? (a = e.viewBox.baseVal, a.width || (a = {
            width: +e.getAttribute("width"),
            height: +e.getAttribute("height")
        })) : a = t && e.getBBox && e.getBBox(), t && t !== "auto" && (u = t.push ? t[0] * (a ? a.width : e.offsetWidth || 0) : t.x, s = t.push ? t[1] * (a ? a.height : e.offsetHeight || 0) : t.y), n.apply(u || s ? r.apply({
            x: u,
            y: s
        }) : {x: r.e, y: r.f})
    }, Ys = function (e, t, n, r) {
        var u = Mi(e.parentNode, !0, !0), s = u.clone().multiply(Mi(t)), a = Pf(e, n, u), d = Pf(t, r, u), p = d.x, _ = d.y,
            y;
        return s.e = s.f = 0, r === "auto" && t.getTotalLength && t.tagName.toLowerCase() === "path" && (y = t.getAttribute("d").match(sp) || [], y = s.apply({
            x: +y[0],
            y: +y[1]
        }), p += y.x, _ += y.y), (y || t.getBBox && e.getBBox && t.ownerSVGElement === e.ownerSVGElement) && (y = s.apply(t.getBBox()), p -= y.x, _ -= y.y), s.e = p - a.x, s.f = _ - a.y, s
    }, gc = function (e, t, n) {
        var r = n.align, u = n.matrix, s = n.offsetX, a = n.offsetY, d = n.alignOrigin, p = e[0][0], _ = e[0][1],
            y = Ti(t, "x"), b = Ti(t, "y"), v, T, x;
        return !e || !e.length ? go("M0,0L0,0") : (r && (r === "self" || (v = Ws(r)[0] || t) === t ? iu(e, 1, 0, 0, 1, y - p, b - _) : (d && d[2] !== !1 ? tr.set(t, {transformOrigin: d[0] * 100 + "% " + d[1] * 100 + "%"}) : d = [Ti(t, "xPercent") / -100, Ti(t, "yPercent") / -100], T = Ys(t, v, d, "auto"), x = T.apply({
            x: p,
            y: _
        }), iu(e, T.a, T.b, T.c, T.d, y + T.e - (x.x - T.e), b + T.f - (x.y - T.f)))), u ? iu(e, u.a, u.b, u.c, u.d, u.e, u.f) : (s || a) && iu(e, 1, 0, 0, 1, s || 0, a || 0), e)
    }, Mo = function (e, t, n, r, u, s) {
        var a = t._gsap, d = a.harness, p = d && d.aliases && d.aliases[n], _ = p && p.indexOf(",") < 0 ? p : n,
            y = e._pt = new dc(e._pt, t, _, 0, 0, op, 0, a.set(t, _, e));
        y.u = mi(a.get(t, _, s)) || 0, y.path = r, y.pp = u, e._props.push(_)
    }, ap = function (e, t) {
        return function (n) {
            return e || t !== 1 ? sc(n, e, t) : n
        }
    }, Dc = {
        version: "3.10.4",
        name: "motionPath",
        register: function (e, t, n) {
            tr = e, mi = tr.utils.getUnit, Ws = tr.utils.toArray, dc = n
        },
        init: function (e, t) {
            if (!tr) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
            (!(typeof t == "object" && !t.style) || !t.path) && (t = {path: t});
            var n = [], r = t, u = r.path, s = r.autoRotate, a = r.unitX, d = r.unitY, p = r.x, _ = r.y, y = u[0],
                b = ap(t.start, "end" in t ? t.end : 1), v, T;
            if (this.rawPaths = n, this.target = e, (this.rotate = s || s === 0) && (this.rOffset = parseFloat(s) || 0, this.radians = !!t.useRadians, this.rProp = t.rotation || "rotation", this.rSet = e._gsap.set(e, this.rProp, this), this.ru = mi(e._gsap.get(e, this.rProp)) || 0), Array.isArray(u) && !("closed" in u) && typeof y != "number") {
                for (T in y) !p && ~np.indexOf(T) ? p = T : !_ && ~rp.indexOf(T) && (_ = T);
                p && _ ? n.push(Af(this, Zi(Zi([], u, p, 0), u, _, 1), e, p, _, b, t, a || mi(u[0][p]), d || mi(u[0][_]))) : p = _ = 0;
                for (T in y) T !== p && T !== _ && n.push(Af(this, Zi([], u, T, 2), e, T, 0, b, t, mi(u[0][T])))
            } else v = b(gc(go(t.path), e, t)), ki(v, t.resolution), n.push(v), Mo(this, e, t.x || "x", v, "x", t.unitX || "px"), Mo(this, e, t.y || "y", v, "y", t.unitY || "px")
        },
        render: function (e, t) {
            var n = t.rawPaths, r = n.length, u = t._pt;
            for (e > 1 ? e = 1 : e < 0 && (e = 0); r--;) Ff(n[r], e, !r && t.rotate, n[r]);
            for (; u;) u.set(u.t, u.p, u.path[u.pp] + u.u, u.d, e), u = u._next;
            t.rotate && t.rSet(t.target, t.rProp, n[0].angle * (t.radians ? ip : 1) + t.rOffset + t.ru, t, e)
        },
        getLength: function (e) {
            return ki(go(e)).totalLength
        },
        sliceRawPath: sc,
        getRawPath: go,
        pointsToSegment: $s,
        stringToRawPath: ko,
        rawPathToString: ac,
        transformRawPath: iu,
        getGlobalMatrix: Mi,
        getPositionOnPath: Ff,
        cacheRawPathMeasurements: ki,
        convertToPath: function (e, t) {
            return Ws(e).map(function (n) {
                return Wd(n, t !== !1)
            })
        },
        convertCoordinates: function (e, t, n) {
            var r = Mi(t, !0, !0).multiply(Mi(e));
            return n ? r.apply(n) : r
        },
        getAlignMatrix: Ys,
        getRelativePosition: function (e, t, n, r) {
            var u = Ys(e, t, n, r);
            return {x: u.e, y: u.f}
        },
        arrayToRawPath: function (e, t) {
            t = t || {};
            var n = Zi(Zi([], e, t.x || "x", 0), e, t.y || "y", 1);
            return t.relative && pc(n), [t.type === "cubic" ? n : $s(n, t.curviness)]
        }
    };
up() && tr.registerPlugin(Dc);
var fp = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    lp = {exports: {}};/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function (f) {
    (function (e, t) {
        f.exports = e.document ? t(e, !0) : function (n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n)
        }
    })(typeof window != "undefined" ? window : fp, function (e, t) {
        var n = [], r = Object.getPrototypeOf, u = n.slice, s = n.flat ? function (i) {
                return n.flat.call(i)
            } : function (i) {
                return n.concat.apply([], i)
            }, a = n.push, d = n.indexOf, p = {}, _ = p.toString, y = p.hasOwnProperty, b = y.toString, v = b.call(Object),
            T = {}, x = function (o) {
                return typeof o == "function" && typeof o.nodeType != "number" && typeof o.item != "function"
            }, A = function (o) {
                return o != null && o === o.window
            }, S = e.document, B = {type: !0, src: !0, nonce: !0, noModule: !0};

        function O(i, o, l) {
            l = l || S;
            var h, g, D = l.createElement("script");
            if (D.text = i, o) for (h in B) g = o[h] || o.getAttribute && o.getAttribute(h), g && D.setAttribute(h, g);
            l.head.appendChild(D).parentNode.removeChild(D)
        }

        function N(i) {
            return i == null ? i + "" : typeof i == "object" || typeof i == "function" ? p[_.call(i)] || "object" : typeof i
        }

        var R = "3.6.0", c = function (i, o) {
            return new c.fn.init(i, o)
        };
        c.fn = c.prototype = {
            jquery: R, constructor: c, length: 0, toArray: function () {
                return u.call(this)
            }, get: function (i) {
                return i == null ? u.call(this) : i < 0 ? this[i + this.length] : this[i]
            }, pushStack: function (i) {
                var o = c.merge(this.constructor(), i);
                return o.prevObject = this, o
            }, each: function (i) {
                return c.each(this, i)
            }, map: function (i) {
                return this.pushStack(c.map(this, function (o, l) {
                    return i.call(o, l, o)
                }))
            }, slice: function () {
                return this.pushStack(u.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, even: function () {
                return this.pushStack(c.grep(this, function (i, o) {
                    return (o + 1) % 2
                }))
            }, odd: function () {
                return this.pushStack(c.grep(this, function (i, o) {
                    return o % 2
                }))
            }, eq: function (i) {
                var o = this.length, l = +i + (i < 0 ? o : 0);
                return this.pushStack(l >= 0 && l < o ? [this[l]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: a, sort: n.sort, splice: n.splice
        }, c.extend = c.fn.extend = function () {
            var i, o, l, h, g, D, m = arguments[0] || {}, E = 1, F = arguments.length, k = !1;
            for (typeof m == "boolean" && (k = m, m = arguments[E] || {}, E++), typeof m != "object" && !x(m) && (m = {}), E === F && (m = this, E--); E < F; E++) if ((i = arguments[E]) != null) for (o in i) h = i[o], !(o === "__proto__" || m === h) && (k && h && (c.isPlainObject(h) || (g = Array.isArray(h))) ? (l = m[o], g && !Array.isArray(l) ? D = [] : !g && !c.isPlainObject(l) ? D = {} : D = l, g = !1, m[o] = c.extend(k, D, h)) : h !== void 0 && (m[o] = h));
            return m
        }, c.extend({
            expando: "jQuery" + (R + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (i) {
                throw new Error(i)
            }, noop: function () {
            }, isPlainObject: function (i) {
                var o, l;
                return !i || _.call(i) !== "[object Object]" ? !1 : (o = r(i), o ? (l = y.call(o, "constructor") && o.constructor, typeof l == "function" && b.call(l) === v) : !0)
            }, isEmptyObject: function (i) {
                var o;
                for (o in i) return !1;
                return !0
            }, globalEval: function (i, o, l) {
                O(i, {nonce: o && o.nonce}, l)
            }, each: function (i, o) {
                var l, h = 0;
                if (j(i)) for (l = i.length; h < l && o.call(i[h], h, i[h]) !== !1; h++) ; else for (h in i) if (o.call(i[h], h, i[h]) === !1) break;
                return i
            }, makeArray: function (i, o) {
                var l = o || [];
                return i != null && (j(Object(i)) ? c.merge(l, typeof i == "string" ? [i] : i) : a.call(l, i)), l
            }, inArray: function (i, o, l) {
                return o == null ? -1 : d.call(o, i, l)
            }, merge: function (i, o) {
                for (var l = +o.length, h = 0, g = i.length; h < l; h++) i[g++] = o[h];
                return i.length = g, i
            }, grep: function (i, o, l) {
                for (var h, g = [], D = 0, m = i.length, E = !l; D < m; D++) h = !o(i[D], D), h !== E && g.push(i[D]);
                return g
            }, map: function (i, o, l) {
                var h, g, D = 0, m = [];
                if (j(i)) for (h = i.length; D < h; D++) g = o(i[D], D, l), g != null && m.push(g); else for (D in i) g = o(i[D], D, l), g != null && m.push(g);
                return s(m)
            }, guid: 1, support: T
        }), typeof Symbol == "function" && (c.fn[Symbol.iterator] = n[Symbol.iterator]), c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, o) {
            p["[object " + o + "]"] = o.toLowerCase()
        });

        function j(i) {
            var o = !!i && "length" in i && i.length, l = N(i);
            return x(i) || A(i) ? !1 : l === "array" || o === 0 || typeof o == "number" && o > 0 && o - 1 in i
        }

        var Y = function (i) {
            var o, l, h, g, D, m, E, F, k, I, V, L, $, ue, _e, oe, yt, ht, ln, je = "sizzle" + 1 * new Date,
                De = i.document, Jt = 0, Fe = 0, tt = Iu(), Xi = Iu(), Lu = Iu(), cn = Iu(), qr = function (C, w) {
                    return C === w && (V = !0), 0
                }, Hr = {}.hasOwnProperty, en = [], xr = en.pop, Tn = en.push, Cr = en.push, Aa = en.slice,
                $r = function (C, w) {
                    for (var P = 0, X = C.length; P < X; P++) if (C[P] === w) return P;
                    return -1
                },
                Uo = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                Me = "[\\x20\\t\\r\\n\\f]",
                Xr = "(?:\\\\[\\da-fA-F]{1,6}" + Me + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Pa = "\\[" + Me + "*(" + Xr + ")(?:" + Me + "*([*^$|!~]?=)" + Me + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Xr + "))|)" + Me + "*\\]",
                Go = ":(" + Xr + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Pa + ")*)|.*)\\)|)",
                zc = new RegExp(Me + "+", "g"),
                Bu = new RegExp("^" + Me + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Me + "+$", "g"),
                qc = new RegExp("^" + Me + "*," + Me + "*"),
                ka = new RegExp("^" + Me + "*([>+~]|" + Me + ")" + Me + "*"), Hc = new RegExp(Me + "|>"),
                $c = new RegExp(Go), Xc = new RegExp("^" + Xr + "$"), Ru = {
                    ID: new RegExp("^#(" + Xr + ")"),
                    CLASS: new RegExp("^\\.(" + Xr + ")"),
                    TAG: new RegExp("^(" + Xr + "|[*])"),
                    ATTR: new RegExp("^" + Pa),
                    PSEUDO: new RegExp("^" + Go),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Me + "*(even|odd|(([+-]|)(\\d*)n|)" + Me + "*(?:([+-]|)" + Me + "*(\\d+)|))" + Me + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Uo + ")$", "i"),
                    needsContext: new RegExp("^" + Me + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Me + "*((?:-\\d)?\\d*)" + Me + "*\\)|)(?=[^-]|$)", "i")
                }, Wc = /HTML$/i, Yc = /^(?:input|select|textarea|button)$/i, Vc = /^h\d$/i, Wi = /^[^{]+\{\s*\[native \w/,
                Uc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Qo = /[+~]/,
                sr = new RegExp("\\\\[\\da-fA-F]{1,6}" + Me + "?|\\\\([^\\r\\n\\f])", "g"), ar = function (C, w) {
                    var P = "0x" + C.slice(1) - 65536;
                    return w || (P < 0 ? String.fromCharCode(P + 65536) : String.fromCharCode(P >> 10 | 55296, P & 1023 | 56320))
                }, Oa = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Ma = function (C, w) {
                    return w ? C === "\0" ? "\uFFFD" : C.slice(0, -1) + "\\" + C.charCodeAt(C.length - 1).toString(16) + " " : "\\" + C
                }, Na = function () {
                    L()
                }, Gc = zu(function (C) {
                    return C.disabled === !0 && C.nodeName.toLowerCase() === "fieldset"
                }, {dir: "parentNode", next: "legend"});
            try {
                Cr.apply(en = Aa.call(De.childNodes), De.childNodes), en[De.childNodes.length].nodeType
            } catch {
                Cr = {
                    apply: en.length ? function (w, P) {
                        Tn.apply(w, Aa.call(P))
                    } : function (w, P) {
                        for (var X = w.length, M = 0; w[X++] = P[M++];) ;
                        w.length = X - 1
                    }
                }
            }

            function qe(C, w, P, X) {
                var M, W, U, Z, J, le, ae, he = w && w.ownerDocument, be = w ? w.nodeType : 9;
                if (P = P || [], typeof C != "string" || !C || be !== 1 && be !== 9 && be !== 11) return P;
                if (!X && (L(w), w = w || $, _e)) {
                    if (be !== 11 && (J = Uc.exec(C))) if (M = J[1]) {
                        if (be === 9) if (U = w.getElementById(M)) {
                            if (U.id === M) return P.push(U), P
                        } else return P; else if (he && (U = he.getElementById(M)) && ln(w, U) && U.id === M) return P.push(U), P
                    } else {
                        if (J[2]) return Cr.apply(P, w.getElementsByTagName(C)), P;
                        if ((M = J[3]) && l.getElementsByClassName && w.getElementsByClassName) return Cr.apply(P, w.getElementsByClassName(M)), P
                    }
                    if (l.qsa && !cn[C + " "] && (!oe || !oe.test(C)) && (be !== 1 || w.nodeName.toLowerCase() !== "object")) {
                        if (ae = C, he = w, be === 1 && (Hc.test(C) || ka.test(C))) {
                            for (he = Qo.test(C) && Ko(w.parentNode) || w, (he !== w || !l.scope) && ((Z = w.getAttribute("id")) ? Z = Z.replace(Oa, Ma) : w.setAttribute("id", Z = je)), le = m(C), W = le.length; W--;) le[W] = (Z ? "#" + Z : ":scope") + " " + ju(le[W]);
                            ae = le.join(",")
                        }
                        try {
                            return Cr.apply(P, he.querySelectorAll(ae)), P
                        } catch {
                            cn(C, !0)
                        } finally {
                            Z === je && w.removeAttribute("id")
                        }
                    }
                }
                return F(C.replace(Bu, "$1"), w, P, X)
            }

            function Iu() {
                var C = [];

                function w(P, X) {
                    return C.push(P + " ") > h.cacheLength && delete w[C.shift()], w[P + " "] = X
                }

                return w
            }

            function $n(C) {
                return C[je] = !0, C
            }

            function Xn(C) {
                var w = $.createElement("fieldset");
                try {
                    return !!C(w)
                } catch {
                    return !1
                } finally {
                    w.parentNode && w.parentNode.removeChild(w), w = null
                }
            }

            function Zo(C, w) {
                for (var P = C.split("|"), X = P.length; X--;) h.attrHandle[P[X]] = w
            }

            function La(C, w) {
                var P = w && C, X = P && C.nodeType === 1 && w.nodeType === 1 && C.sourceIndex - w.sourceIndex;
                if (X) return X;
                if (P) {
                    for (; P = P.nextSibling;) if (P === w) return -1
                }
                return C ? 1 : -1
            }

            function Qc(C) {
                return function (w) {
                    var P = w.nodeName.toLowerCase();
                    return P === "input" && w.type === C
                }
            }

            function Zc(C) {
                return function (w) {
                    var P = w.nodeName.toLowerCase();
                    return (P === "input" || P === "button") && w.type === C
                }
            }

            function Ba(C) {
                return function (w) {
                    return "form" in w ? w.parentNode && w.disabled === !1 ? "label" in w ? "label" in w.parentNode ? w.parentNode.disabled === C : w.disabled === C : w.isDisabled === C || w.isDisabled !== !C && Gc(w) === C : w.disabled === C : "label" in w ? w.disabled === C : !1
                }
            }

            function Wr(C) {
                return $n(function (w) {
                    return w = +w, $n(function (P, X) {
                        for (var M, W = C([], P.length, w), U = W.length; U--;) P[M = W[U]] && (P[M] = !(X[M] = P[M]))
                    })
                })
            }

            function Ko(C) {
                return C && typeof C.getElementsByTagName != "undefined" && C
            }

            l = qe.support = {}, D = qe.isXML = function (C) {
                var w = C && C.namespaceURI, P = C && (C.ownerDocument || C).documentElement;
                return !Wc.test(w || P && P.nodeName || "HTML")
            }, L = qe.setDocument = function (C) {
                var w, P, X = C ? C.ownerDocument || C : De;
                return X == $ || X.nodeType !== 9 || !X.documentElement || ($ = X, ue = $.documentElement, _e = !D($), De != $ && (P = $.defaultView) && P.top !== P && (P.addEventListener ? P.addEventListener("unload", Na, !1) : P.attachEvent && P.attachEvent("onunload", Na)), l.scope = Xn(function (M) {
                    return ue.appendChild(M).appendChild($.createElement("div")), typeof M.querySelectorAll != "undefined" && !M.querySelectorAll(":scope fieldset div").length
                }), l.attributes = Xn(function (M) {
                    return M.className = "i", !M.getAttribute("className")
                }), l.getElementsByTagName = Xn(function (M) {
                    return M.appendChild($.createComment("")), !M.getElementsByTagName("*").length
                }), l.getElementsByClassName = Wi.test($.getElementsByClassName), l.getById = Xn(function (M) {
                    return ue.appendChild(M).id = je, !$.getElementsByName || !$.getElementsByName(je).length
                }), l.getById ? (h.filter.ID = function (M) {
                    var W = M.replace(sr, ar);
                    return function (U) {
                        return U.getAttribute("id") === W
                    }
                }, h.find.ID = function (M, W) {
                    if (typeof W.getElementById != "undefined" && _e) {
                        var U = W.getElementById(M);
                        return U ? [U] : []
                    }
                }) : (h.filter.ID = function (M) {
                    var W = M.replace(sr, ar);
                    return function (U) {
                        var Z = typeof U.getAttributeNode != "undefined" && U.getAttributeNode("id");
                        return Z && Z.value === W
                    }
                }, h.find.ID = function (M, W) {
                    if (typeof W.getElementById != "undefined" && _e) {
                        var U, Z, J, le = W.getElementById(M);
                        if (le) {
                            if (U = le.getAttributeNode("id"), U && U.value === M) return [le];
                            for (J = W.getElementsByName(M), Z = 0; le = J[Z++];) if (U = le.getAttributeNode("id"), U && U.value === M) return [le]
                        }
                        return []
                    }
                }), h.find.TAG = l.getElementsByTagName ? function (M, W) {
                    if (typeof W.getElementsByTagName != "undefined") return W.getElementsByTagName(M);
                    if (l.qsa) return W.querySelectorAll(M)
                } : function (M, W) {
                    var U, Z = [], J = 0, le = W.getElementsByTagName(M);
                    if (M === "*") {
                        for (; U = le[J++];) U.nodeType === 1 && Z.push(U);
                        return Z
                    }
                    return le
                }, h.find.CLASS = l.getElementsByClassName && function (M, W) {
                    if (typeof W.getElementsByClassName != "undefined" && _e) return W.getElementsByClassName(M)
                }, yt = [], oe = [], (l.qsa = Wi.test($.querySelectorAll)) && (Xn(function (M) {
                    var W;
                    ue.appendChild(M).innerHTML = "<a id='" + je + "'></a><select id='" + je + "-\r\\' msallowcapture=''><option selected=''></option></select>", M.querySelectorAll("[msallowcapture^='']").length && oe.push("[*^$]=" + Me + `*(?:''|"")`), M.querySelectorAll("[selected]").length || oe.push("\\[" + Me + "*(?:value|" + Uo + ")"), M.querySelectorAll("[id~=" + je + "-]").length || oe.push("~="), W = $.createElement("input"), W.setAttribute("name", ""), M.appendChild(W), M.querySelectorAll("[name='']").length || oe.push("\\[" + Me + "*name" + Me + "*=" + Me + `*(?:''|"")`), M.querySelectorAll(":checked").length || oe.push(":checked"), M.querySelectorAll("a#" + je + "+*").length || oe.push(".#.+[+~]"), M.querySelectorAll("\\\f"), oe.push("[\\r\\n\\f]")
                }), Xn(function (M) {
                    M.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var W = $.createElement("input");
                    W.setAttribute("type", "hidden"), M.appendChild(W).setAttribute("name", "D"), M.querySelectorAll("[name=d]").length && oe.push("name" + Me + "*[*^$|!~]?="), M.querySelectorAll(":enabled").length !== 2 && oe.push(":enabled", ":disabled"), ue.appendChild(M).disabled = !0, M.querySelectorAll(":disabled").length !== 2 && oe.push(":enabled", ":disabled"), M.querySelectorAll("*,:x"), oe.push(",.*:")
                })), (l.matchesSelector = Wi.test(ht = ue.matches || ue.webkitMatchesSelector || ue.mozMatchesSelector || ue.oMatchesSelector || ue.msMatchesSelector)) && Xn(function (M) {
                    l.disconnectedMatch = ht.call(M, "*"), ht.call(M, "[s!='']:x"), yt.push("!=", Go)
                }), oe = oe.length && new RegExp(oe.join("|")), yt = yt.length && new RegExp(yt.join("|")), w = Wi.test(ue.compareDocumentPosition), ln = w || Wi.test(ue.contains) ? function (M, W) {
                    var U = M.nodeType === 9 ? M.documentElement : M, Z = W && W.parentNode;
                    return M === Z || !!(Z && Z.nodeType === 1 && (U.contains ? U.contains(Z) : M.compareDocumentPosition && M.compareDocumentPosition(Z) & 16))
                } : function (M, W) {
                    if (W) {
                        for (; W = W.parentNode;) if (W === M) return !0
                    }
                    return !1
                }, qr = w ? function (M, W) {
                    if (M === W) return V = !0, 0;
                    var U = !M.compareDocumentPosition - !W.compareDocumentPosition;
                    return U || (U = (M.ownerDocument || M) == (W.ownerDocument || W) ? M.compareDocumentPosition(W) : 1, U & 1 || !l.sortDetached && W.compareDocumentPosition(M) === U ? M == $ || M.ownerDocument == De && ln(De, M) ? -1 : W == $ || W.ownerDocument == De && ln(De, W) ? 1 : I ? $r(I, M) - $r(I, W) : 0 : U & 4 ? -1 : 1)
                } : function (M, W) {
                    if (M === W) return V = !0, 0;
                    var U, Z = 0, J = M.parentNode, le = W.parentNode, ae = [M], he = [W];
                    if (!J || !le) return M == $ ? -1 : W == $ ? 1 : J ? -1 : le ? 1 : I ? $r(I, M) - $r(I, W) : 0;
                    if (J === le) return La(M, W);
                    for (U = M; U = U.parentNode;) ae.unshift(U);
                    for (U = W; U = U.parentNode;) he.unshift(U);
                    for (; ae[Z] === he[Z];) Z++;
                    return Z ? La(ae[Z], he[Z]) : ae[Z] == De ? -1 : he[Z] == De ? 1 : 0
                }), $
            }, qe.matches = function (C, w) {
                return qe(C, null, null, w)
            }, qe.matchesSelector = function (C, w) {
                if (L(C), l.matchesSelector && _e && !cn[w + " "] && (!yt || !yt.test(w)) && (!oe || !oe.test(w))) try {
                    var P = ht.call(C, w);
                    if (P || l.disconnectedMatch || C.document && C.document.nodeType !== 11) return P
                } catch {
                    cn(w, !0)
                }
                return qe(w, $, null, [C]).length > 0
            }, qe.contains = function (C, w) {
                return (C.ownerDocument || C) != $ && L(C), ln(C, w)
            }, qe.attr = function (C, w) {
                (C.ownerDocument || C) != $ && L(C);
                var P = h.attrHandle[w.toLowerCase()],
                    X = P && Hr.call(h.attrHandle, w.toLowerCase()) ? P(C, w, !_e) : void 0;
                return X !== void 0 ? X : l.attributes || !_e ? C.getAttribute(w) : (X = C.getAttributeNode(w)) && X.specified ? X.value : null
            }, qe.escape = function (C) {
                return (C + "").replace(Oa, Ma)
            }, qe.error = function (C) {
                throw new Error("Syntax error, unrecognized expression: " + C)
            }, qe.uniqueSort = function (C) {
                var w, P = [], X = 0, M = 0;
                if (V = !l.detectDuplicates, I = !l.sortStable && C.slice(0), C.sort(qr), V) {
                    for (; w = C[M++];) w === C[M] && (X = P.push(M));
                    for (; X--;) C.splice(P[X], 1)
                }
                return I = null, C
            }, g = qe.getText = function (C) {
                var w, P = "", X = 0, M = C.nodeType;
                if (M) {
                    if (M === 1 || M === 9 || M === 11) {
                        if (typeof C.textContent == "string") return C.textContent;
                        for (C = C.firstChild; C; C = C.nextSibling) P += g(C)
                    } else if (M === 3 || M === 4) return C.nodeValue
                } else for (; w = C[X++];) P += g(w);
                return P
            }, h = qe.selectors = {
                cacheLength: 50,
                createPseudo: $n,
                match: Ru,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (C) {
                        return C[1] = C[1].replace(sr, ar), C[3] = (C[3] || C[4] || C[5] || "").replace(sr, ar), C[2] === "~=" && (C[3] = " " + C[3] + " "), C.slice(0, 4)
                    }, CHILD: function (C) {
                        return C[1] = C[1].toLowerCase(), C[1].slice(0, 3) === "nth" ? (C[3] || qe.error(C[0]), C[4] = +(C[4] ? C[5] + (C[6] || 1) : 2 * (C[3] === "even" || C[3] === "odd")), C[5] = +(C[7] + C[8] || C[3] === "odd")) : C[3] && qe.error(C[0]), C
                    }, PSEUDO: function (C) {
                        var w, P = !C[6] && C[2];
                        return Ru.CHILD.test(C[0]) ? null : (C[3] ? C[2] = C[4] || C[5] || "" : P && $c.test(P) && (w = m(P, !0)) && (w = P.indexOf(")", P.length - w) - P.length) && (C[0] = C[0].slice(0, w), C[2] = P.slice(0, w)), C.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (C) {
                        var w = C.replace(sr, ar).toLowerCase();
                        return C === "*" ? function () {
                            return !0
                        } : function (P) {
                            return P.nodeName && P.nodeName.toLowerCase() === w
                        }
                    }, CLASS: function (C) {
                        var w = tt[C + " "];
                        return w || (w = new RegExp("(^|" + Me + ")" + C + "(" + Me + "|$)")) && tt(C, function (P) {
                            return w.test(typeof P.className == "string" && P.className || typeof P.getAttribute != "undefined" && P.getAttribute("class") || "")
                        })
                    }, ATTR: function (C, w, P) {
                        return function (X) {
                            var M = qe.attr(X, C);
                            return M == null ? w === "!=" : w ? (M += "", w === "=" ? M === P : w === "!=" ? M !== P : w === "^=" ? P && M.indexOf(P) === 0 : w === "*=" ? P && M.indexOf(P) > -1 : w === "$=" ? P && M.slice(-P.length) === P : w === "~=" ? (" " + M.replace(zc, " ") + " ").indexOf(P) > -1 : w === "|=" ? M === P || M.slice(0, P.length + 1) === P + "-" : !1) : !0
                        }
                    }, CHILD: function (C, w, P, X, M) {
                        var W = C.slice(0, 3) !== "nth", U = C.slice(-4) !== "last", Z = w === "of-type";
                        return X === 1 && M === 0 ? function (J) {
                            return !!J.parentNode
                        } : function (J, le, ae) {
                            var he, be, He, ce, mt, Bt, hn = W !== U ? "nextSibling" : "previousSibling",
                                Ze = J.parentNode, Yi = Z && J.nodeName.toLowerCase(), Vi = !ae && !Z, dn = !1;
                            if (Ze) {
                                if (W) {
                                    for (; hn;) {
                                        for (ce = J; ce = ce[hn];) if (Z ? ce.nodeName.toLowerCase() === Yi : ce.nodeType === 1) return !1;
                                        Bt = hn = C === "only" && !Bt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Bt = [U ? Ze.firstChild : Ze.lastChild], U && Vi) {
                                    for (ce = Ze, He = ce[je] || (ce[je] = {}), be = He[ce.uniqueID] || (He[ce.uniqueID] = {}), he = be[C] || [], mt = he[0] === Jt && he[1], dn = mt && he[2], ce = mt && Ze.childNodes[mt]; ce = ++mt && ce && ce[hn] || (dn = mt = 0) || Bt.pop();) if (ce.nodeType === 1 && ++dn && ce === J) {
                                        be[C] = [Jt, mt, dn];
                                        break
                                    }
                                } else if (Vi && (ce = J, He = ce[je] || (ce[je] = {}), be = He[ce.uniqueID] || (He[ce.uniqueID] = {}), he = be[C] || [], mt = he[0] === Jt && he[1], dn = mt), dn === !1) for (; (ce = ++mt && ce && ce[hn] || (dn = mt = 0) || Bt.pop()) && !((Z ? ce.nodeName.toLowerCase() === Yi : ce.nodeType === 1) && ++dn && (Vi && (He = ce[je] || (ce[je] = {}), be = He[ce.uniqueID] || (He[ce.uniqueID] = {}), be[C] = [Jt, dn]), ce === J));) ;
                                return dn -= M, dn === X || dn % X === 0 && dn / X >= 0
                            }
                        }
                    }, PSEUDO: function (C, w) {
                        var P,
                            X = h.pseudos[C] || h.setFilters[C.toLowerCase()] || qe.error("unsupported pseudo: " + C);
                        return X[je] ? X(w) : X.length > 1 ? (P = [C, C, "", w], h.setFilters.hasOwnProperty(C.toLowerCase()) ? $n(function (M, W) {
                            for (var U, Z = X(M, w), J = Z.length; J--;) U = $r(M, Z[J]), M[U] = !(W[U] = Z[J])
                        }) : function (M) {
                            return X(M, 0, P)
                        }) : X
                    }
                },
                pseudos: {
                    not: $n(function (C) {
                        var w = [], P = [], X = E(C.replace(Bu, "$1"));
                        return X[je] ? $n(function (M, W, U, Z) {
                            for (var J, le = X(M, null, Z, []), ae = M.length; ae--;) (J = le[ae]) && (M[ae] = !(W[ae] = J))
                        }) : function (M, W, U) {
                            return w[0] = M, X(w, null, U, P), w[0] = null, !P.pop()
                        }
                    }), has: $n(function (C) {
                        return function (w) {
                            return qe(C, w).length > 0
                        }
                    }), contains: $n(function (C) {
                        return C = C.replace(sr, ar), function (w) {
                            return (w.textContent || g(w)).indexOf(C) > -1
                        }
                    }), lang: $n(function (C) {
                        return Xc.test(C || "") || qe.error("unsupported lang: " + C), C = C.replace(sr, ar).toLowerCase(), function (w) {
                            var P;
                            do if (P = _e ? w.lang : w.getAttribute("xml:lang") || w.getAttribute("lang")) return P = P.toLowerCase(), P === C || P.indexOf(C + "-") === 0; while ((w = w.parentNode) && w.nodeType === 1);
                            return !1
                        }
                    }), target: function (C) {
                        var w = i.location && i.location.hash;
                        return w && w.slice(1) === C.id
                    }, root: function (C) {
                        return C === ue
                    }, focus: function (C) {
                        return C === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(C.type || C.href || ~C.tabIndex)
                    }, enabled: Ba(!1), disabled: Ba(!0), checked: function (C) {
                        var w = C.nodeName.toLowerCase();
                        return w === "input" && !!C.checked || w === "option" && !!C.selected
                    }, selected: function (C) {
                        return C.parentNode && C.parentNode.selectedIndex, C.selected === !0
                    }, empty: function (C) {
                        for (C = C.firstChild; C; C = C.nextSibling) if (C.nodeType < 6) return !1;
                        return !0
                    }, parent: function (C) {
                        return !h.pseudos.empty(C)
                    }, header: function (C) {
                        return Vc.test(C.nodeName)
                    }, input: function (C) {
                        return Yc.test(C.nodeName)
                    }, button: function (C) {
                        var w = C.nodeName.toLowerCase();
                        return w === "input" && C.type === "button" || w === "button"
                    }, text: function (C) {
                        var w;
                        return C.nodeName.toLowerCase() === "input" && C.type === "text" && ((w = C.getAttribute("type")) == null || w.toLowerCase() === "text")
                    }, first: Wr(function () {
                        return [0]
                    }), last: Wr(function (C, w) {
                        return [w - 1]
                    }), eq: Wr(function (C, w, P) {
                        return [P < 0 ? P + w : P]
                    }), even: Wr(function (C, w) {
                        for (var P = 0; P < w; P += 2) C.push(P);
                        return C
                    }), odd: Wr(function (C, w) {
                        for (var P = 1; P < w; P += 2) C.push(P);
                        return C
                    }), lt: Wr(function (C, w, P) {
                        for (var X = P < 0 ? P + w : P > w ? w : P; --X >= 0;) C.push(X);
                        return C
                    }), gt: Wr(function (C, w, P) {
                        for (var X = P < 0 ? P + w : P; ++X < w;) C.push(X);
                        return C
                    })
                }
            }, h.pseudos.nth = h.pseudos.eq;
            for (o in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) h.pseudos[o] = Qc(o);
            for (o in {submit: !0, reset: !0}) h.pseudos[o] = Zc(o);

            function Ra() {
            }

            Ra.prototype = h.filters = h.pseudos, h.setFilters = new Ra, m = qe.tokenize = function (C, w) {
                var P, X, M, W, U, Z, J, le = Xi[C + " "];
                if (le) return w ? 0 : le.slice(0);
                for (U = C, Z = [], J = h.preFilter; U;) {
                    (!P || (X = qc.exec(U))) && (X && (U = U.slice(X[0].length) || U), Z.push(M = [])), P = !1, (X = ka.exec(U)) && (P = X.shift(), M.push({
                        value: P,
                        type: X[0].replace(Bu, " ")
                    }), U = U.slice(P.length));
                    for (W in h.filter) (X = Ru[W].exec(U)) && (!J[W] || (X = J[W](X))) && (P = X.shift(), M.push({
                        value: P,
                        type: W,
                        matches: X
                    }), U = U.slice(P.length));
                    if (!P) break
                }
                return w ? U.length : U ? qe.error(C) : Xi(C, Z).slice(0)
            };

            function ju(C) {
                for (var w = 0, P = C.length, X = ""; w < P; w++) X += C[w].value;
                return X
            }

            function zu(C, w, P) {
                var X = w.dir, M = w.next, W = M || X, U = P && W === "parentNode", Z = Fe++;
                return w.first ? function (J, le, ae) {
                    for (; J = J[X];) if (J.nodeType === 1 || U) return C(J, le, ae);
                    return !1
                } : function (J, le, ae) {
                    var he, be, He, ce = [Jt, Z];
                    if (ae) {
                        for (; J = J[X];) if ((J.nodeType === 1 || U) && C(J, le, ae)) return !0
                    } else for (; J = J[X];) if (J.nodeType === 1 || U) if (He = J[je] || (J[je] = {}), be = He[J.uniqueID] || (He[J.uniqueID] = {}), M && M === J.nodeName.toLowerCase()) J = J[X] || J; else {
                        if ((he = be[W]) && he[0] === Jt && he[1] === Z) return ce[2] = he[2];
                        if (be[W] = ce, ce[2] = C(J, le, ae)) return !0
                    }
                    return !1
                }
            }

            function Jo(C) {
                return C.length > 1 ? function (w, P, X) {
                    for (var M = C.length; M--;) if (!C[M](w, P, X)) return !1;
                    return !0
                } : C[0]
            }

            function Kc(C, w, P) {
                for (var X = 0, M = w.length; X < M; X++) qe(C, w[X], P);
                return P
            }

            function qu(C, w, P, X, M) {
                for (var W, U = [], Z = 0, J = C.length, le = w != null; Z < J; Z++) (W = C[Z]) && (!P || P(W, X, M)) && (U.push(W), le && w.push(Z));
                return U
            }

            function es(C, w, P, X, M, W) {
                return X && !X[je] && (X = es(X)), M && !M[je] && (M = es(M, W)), $n(function (U, Z, J, le) {
                    var ae, he, be, He = [], ce = [], mt = Z.length, Bt = U || Kc(w || "*", J.nodeType ? [J] : J, []),
                        hn = C && (U || !w) ? qu(Bt, He, C, J, le) : Bt, Ze = P ? M || (U ? C : mt || X) ? [] : Z : hn;
                    if (P && P(hn, Ze, J, le), X) for (ae = qu(Ze, ce), X(ae, [], J, le), he = ae.length; he--;) (be = ae[he]) && (Ze[ce[he]] = !(hn[ce[he]] = be));
                    if (U) {
                        if (M || C) {
                            if (M) {
                                for (ae = [], he = Ze.length; he--;) (be = Ze[he]) && ae.push(hn[he] = be);
                                M(null, Ze = [], ae, le)
                            }
                            for (he = Ze.length; he--;) (be = Ze[he]) && (ae = M ? $r(U, be) : He[he]) > -1 && (U[ae] = !(Z[ae] = be))
                        }
                    } else Ze = qu(Ze === Z ? Ze.splice(mt, Ze.length) : Ze), M ? M(null, Z, Ze, le) : Cr.apply(Z, Ze)
                })
            }

            function ts(C) {
                for (var w, P, X, M = C.length, W = h.relative[C[0].type], U = W || h.relative[" "], Z = W ? 1 : 0, J = zu(function (he) {
                    return he === w
                }, U, !0), le = zu(function (he) {
                    return $r(w, he) > -1
                }, U, !0), ae = [function (he, be, He) {
                    var ce = !W && (He || be !== k) || ((w = be).nodeType ? J(he, be, He) : le(he, be, He));
                    return w = null, ce
                }]; Z < M; Z++) if (P = h.relative[C[Z].type]) ae = [zu(Jo(ae), P)]; else {
                    if (P = h.filter[C[Z].type].apply(null, C[Z].matches), P[je]) {
                        for (X = ++Z; X < M && !h.relative[C[X].type]; X++) ;
                        return es(Z > 1 && Jo(ae), Z > 1 && ju(C.slice(0, Z - 1).concat({value: C[Z - 2].type === " " ? "*" : ""})).replace(Bu, "$1"), P, Z < X && ts(C.slice(Z, X)), X < M && ts(C = C.slice(X)), X < M && ju(C))
                    }
                    ae.push(P)
                }
                return Jo(ae)
            }

            function Jc(C, w) {
                var P = w.length > 0, X = C.length > 0, M = function (W, U, Z, J, le) {
                    var ae, he, be, He = 0, ce = "0", mt = W && [], Bt = [], hn = k, Ze = W || X && h.find.TAG("*", le),
                        Yi = Jt += hn == null ? 1 : Math.random() || .1, Vi = Ze.length;
                    for (le && (k = U == $ || U || le); ce !== Vi && (ae = Ze[ce]) != null; ce++) {
                        if (X && ae) {
                            for (he = 0, !U && ae.ownerDocument != $ && (L(ae), Z = !_e); be = C[he++];) if (be(ae, U || $, Z)) {
                                J.push(ae);
                                break
                            }
                            le && (Jt = Yi)
                        }
                        P && ((ae = !be && ae) && He--, W && mt.push(ae))
                    }
                    if (He += ce, P && ce !== He) {
                        for (he = 0; be = w[he++];) be(mt, Bt, U, Z);
                        if (W) {
                            if (He > 0) for (; ce--;) mt[ce] || Bt[ce] || (Bt[ce] = xr.call(J));
                            Bt = qu(Bt)
                        }
                        Cr.apply(J, Bt), le && !W && Bt.length > 0 && He + w.length > 1 && qe.uniqueSort(J)
                    }
                    return le && (Jt = Yi, k = hn), mt
                };
                return P ? $n(M) : M
            }

            return E = qe.compile = function (C, w) {
                var P, X = [], M = [], W = Lu[C + " "];
                if (!W) {
                    for (w || (w = m(C)), P = w.length; P--;) W = ts(w[P]), W[je] ? X.push(W) : M.push(W);
                    W = Lu(C, Jc(M, X)), W.selector = C
                }
                return W
            }, F = qe.select = function (C, w, P, X) {
                var M, W, U, Z, J, le = typeof C == "function" && C, ae = !X && m(C = le.selector || C);
                if (P = P || [], ae.length === 1) {
                    if (W = ae[0] = ae[0].slice(0), W.length > 2 && (U = W[0]).type === "ID" && w.nodeType === 9 && _e && h.relative[W[1].type]) {
                        if (w = (h.find.ID(U.matches[0].replace(sr, ar), w) || [])[0], w) le && (w = w.parentNode); else return P;
                        C = C.slice(W.shift().value.length)
                    }
                    for (M = Ru.needsContext.test(C) ? 0 : W.length; M-- && (U = W[M], !h.relative[Z = U.type]);) if ((J = h.find[Z]) && (X = J(U.matches[0].replace(sr, ar), Qo.test(W[0].type) && Ko(w.parentNode) || w))) {
                        if (W.splice(M, 1), C = X.length && ju(W), !C) return Cr.apply(P, X), P;
                        break
                    }
                }
                return (le || E(C, ae))(X, w, !_e, P, !w || Qo.test(C) && Ko(w.parentNode) || w), P
            }, l.sortStable = je.split("").sort(qr).join("") === je, l.detectDuplicates = !!V, L(), l.sortDetached = Xn(function (C) {
                return C.compareDocumentPosition($.createElement("fieldset")) & 1
            }), Xn(function (C) {
                return C.innerHTML = "<a href='#'></a>", C.firstChild.getAttribute("href") === "#"
            }) || Zo("type|href|height|width", function (C, w, P) {
                if (!P) return C.getAttribute(w, w.toLowerCase() === "type" ? 1 : 2)
            }), (!l.attributes || !Xn(function (C) {
                return C.innerHTML = "<input/>", C.firstChild.setAttribute("value", ""), C.firstChild.getAttribute("value") === ""
            })) && Zo("value", function (C, w, P) {
                if (!P && C.nodeName.toLowerCase() === "input") return C.defaultValue
            }), Xn(function (C) {
                return C.getAttribute("disabled") == null
            }) || Zo(Uo, function (C, w, P) {
                var X;
                if (!P) return C[w] === !0 ? w.toLowerCase() : (X = C.getAttributeNode(w)) && X.specified ? X.value : null
            }), qe
        }(e);
        c.find = Y, c.expr = Y.selectors, c.expr[":"] = c.expr.pseudos, c.uniqueSort = c.unique = Y.uniqueSort, c.text = Y.getText, c.isXMLDoc = Y.isXML, c.contains = Y.contains, c.escapeSelector = Y.escape;
        var q = function (i, o, l) {
            for (var h = [], g = l !== void 0; (i = i[o]) && i.nodeType !== 9;) if (i.nodeType === 1) {
                if (g && c(i).is(l)) break;
                h.push(i)
            }
            return h
        }, Q = function (i, o) {
            for (var l = []; i; i = i.nextSibling) i.nodeType === 1 && i !== o && l.push(i);
            return l
        }, re = c.expr.match.needsContext;

        function K(i, o) {
            return i.nodeName && i.nodeName.toLowerCase() === o.toLowerCase()
        }

        var pe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function te(i, o, l) {
            return x(o) ? c.grep(i, function (h, g) {
                return !!o.call(h, g, h) !== l
            }) : o.nodeType ? c.grep(i, function (h) {
                return h === o !== l
            }) : typeof o != "string" ? c.grep(i, function (h) {
                return d.call(o, h) > -1 !== l
            }) : c.filter(o, i, l)
        }

        c.filter = function (i, o, l) {
            var h = o[0];
            return l && (i = ":not(" + i + ")"), o.length === 1 && h.nodeType === 1 ? c.find.matchesSelector(h, i) ? [h] : [] : c.find.matches(i, c.grep(o, function (g) {
                return g.nodeType === 1
            }))
        }, c.fn.extend({
            find: function (i) {
                var o, l, h = this.length, g = this;
                if (typeof i != "string") return this.pushStack(c(i).filter(function () {
                    for (o = 0; o < h; o++) if (c.contains(g[o], this)) return !0
                }));
                for (l = this.pushStack([]), o = 0; o < h; o++) c.find(i, g[o], l);
                return h > 1 ? c.uniqueSort(l) : l
            }, filter: function (i) {
                return this.pushStack(te(this, i || [], !1))
            }, not: function (i) {
                return this.pushStack(te(this, i || [], !0))
            }, is: function (i) {
                return !!te(this, typeof i == "string" && re.test(i) ? c(i) : i || [], !1).length
            }
        });
        var se, ie = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, ve = c.fn.init = function (i, o, l) {
            var h, g;
            if (!i) return this;
            if (l = l || se, typeof i == "string") if (i[0] === "<" && i[i.length - 1] === ">" && i.length >= 3 ? h = [null, i, null] : h = ie.exec(i), h && (h[1] || !o)) if (h[1]) {
                if (o = o instanceof c ? o[0] : o, c.merge(this, c.parseHTML(h[1], o && o.nodeType ? o.ownerDocument || o : S, !0)), pe.test(h[1]) && c.isPlainObject(o)) for (h in o) x(this[h]) ? this[h](o[h]) : this.attr(h, o[h]);
                return this
            } else return g = S.getElementById(h[2]), g && (this[0] = g, this.length = 1), this; else return !o || o.jquery ? (o || l).find(i) : this.constructor(o).find(i); else {
                if (i.nodeType) return this[0] = i, this.length = 1, this;
                if (x(i)) return l.ready !== void 0 ? l.ready(i) : i(c)
            }
            return c.makeArray(i, this)
        };
        ve.prototype = c.fn, se = c(S);
        var Te = /^(?:parents|prev(?:Until|All))/, xt = {children: !0, contents: !0, next: !0, prev: !0};
        c.fn.extend({
            has: function (i) {
                var o = c(i, this), l = o.length;
                return this.filter(function () {
                    for (var h = 0; h < l; h++) if (c.contains(this, o[h])) return !0
                })
            }, closest: function (i, o) {
                var l, h = 0, g = this.length, D = [], m = typeof i != "string" && c(i);
                if (!re.test(i)) {
                    for (; h < g; h++) for (l = this[h]; l && l !== o; l = l.parentNode) if (l.nodeType < 11 && (m ? m.index(l) > -1 : l.nodeType === 1 && c.find.matchesSelector(l, i))) {
                        D.push(l);
                        break
                    }
                }
                return this.pushStack(D.length > 1 ? c.uniqueSort(D) : D)
            }, index: function (i) {
                return i ? typeof i == "string" ? d.call(c(i), this[0]) : d.call(this, i.jquery ? i[0] : i) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (i, o) {
                return this.pushStack(c.uniqueSort(c.merge(this.get(), c(i, o))))
            }, addBack: function (i) {
                return this.add(i == null ? this.prevObject : this.prevObject.filter(i))
            }
        });

        function z(i, o) {
            for (; (i = i[o]) && i.nodeType !== 1;) ;
            return i
        }

        c.each({
            parent: function (i) {
                var o = i.parentNode;
                return o && o.nodeType !== 11 ? o : null
            }, parents: function (i) {
                return q(i, "parentNode")
            }, parentsUntil: function (i, o, l) {
                return q(i, "parentNode", l)
            }, next: function (i) {
                return z(i, "nextSibling")
            }, prev: function (i) {
                return z(i, "previousSibling")
            }, nextAll: function (i) {
                return q(i, "nextSibling")
            }, prevAll: function (i) {
                return q(i, "previousSibling")
            }, nextUntil: function (i, o, l) {
                return q(i, "nextSibling", l)
            }, prevUntil: function (i, o, l) {
                return q(i, "previousSibling", l)
            }, siblings: function (i) {
                return Q((i.parentNode || {}).firstChild, i)
            }, children: function (i) {
                return Q(i.firstChild)
            }, contents: function (i) {
                return i.contentDocument != null && r(i.contentDocument) ? i.contentDocument : (K(i, "template") && (i = i.content || i), c.merge([], i.childNodes))
            }
        }, function (i, o) {
            c.fn[i] = function (l, h) {
                var g = c.map(this, o, l);
                return i.slice(-5) !== "Until" && (h = l), h && typeof h == "string" && (g = c.filter(h, g)), this.length > 1 && (xt[i] || c.uniqueSort(g), Te.test(i) && g.reverse()), this.pushStack(g)
            }
        });
        var xe = /[^\x20\t\r\n\f]+/g;

        function vn(i) {
            var o = {};
            return c.each(i.match(xe) || [], function (l, h) {
                o[h] = !0
            }), o
        }

        c.Callbacks = function (i) {
            i = typeof i == "string" ? vn(i) : c.extend({}, i);
            var o, l, h, g, D = [], m = [], E = -1, F = function () {
                for (g = g || i.once, h = o = !0; m.length; E = -1) for (l = m.shift(); ++E < D.length;) D[E].apply(l[0], l[1]) === !1 && i.stopOnFalse && (E = D.length, l = !1);
                i.memory || (l = !1), o = !1, g && (l ? D = [] : D = "")
            }, k = {
                add: function () {
                    return D && (l && !o && (E = D.length - 1, m.push(l)), function I(V) {
                        c.each(V, function (L, $) {
                            x($) ? (!i.unique || !k.has($)) && D.push($) : $ && $.length && N($) !== "string" && I($)
                        })
                    }(arguments), l && !o && F()), this
                }, remove: function () {
                    return c.each(arguments, function (I, V) {
                        for (var L; (L = c.inArray(V, D, L)) > -1;) D.splice(L, 1), L <= E && E--
                    }), this
                }, has: function (I) {
                    return I ? c.inArray(I, D) > -1 : D.length > 0
                }, empty: function () {
                    return D && (D = []), this
                }, disable: function () {
                    return g = m = [], D = l = "", this
                }, disabled: function () {
                    return !D
                }, lock: function () {
                    return g = m = [], !l && !o && (D = l = ""), this
                }, locked: function () {
                    return !!g
                }, fireWith: function (I, V) {
                    return g || (V = V || [], V = [I, V.slice ? V.slice() : V], m.push(V), o || F()), this
                }, fire: function () {
                    return k.fireWith(this, arguments), this
                }, fired: function () {
                    return !!h
                }
            };
            return k
        };

        function ke(i) {
            return i
        }

        function We(i) {
            throw i
        }

        function Ot(i, o, l, h) {
            var g;
            try {
                i && x(g = i.promise) ? g.call(i).done(o).fail(l) : i && x(g = i.then) ? g.call(i, o, l) : o.apply(void 0, [i].slice(h))
            } catch (D) {
                l.apply(void 0, [D])
            }
        }

        c.extend({
            Deferred: function (i) {
                var o = [["notify", "progress", c.Callbacks("memory"), c.Callbacks("memory"), 2], ["resolve", "done", c.Callbacks("once memory"), c.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", c.Callbacks("once memory"), c.Callbacks("once memory"), 1, "rejected"]],
                    l = "pending", h = {
                        state: function () {
                            return l
                        }, always: function () {
                            return g.done(arguments).fail(arguments), this
                        }, catch: function (D) {
                            return h.then(null, D)
                        }, pipe: function () {
                            var D = arguments;
                            return c.Deferred(function (m) {
                                c.each(o, function (E, F) {
                                    var k = x(D[F[4]]) && D[F[4]];
                                    g[F[1]](function () {
                                        var I = k && k.apply(this, arguments);
                                        I && x(I.promise) ? I.promise().progress(m.notify).done(m.resolve).fail(m.reject) : m[F[0] + "With"](this, k ? [I] : arguments)
                                    })
                                }), D = null
                            }).promise()
                        }, then: function (D, m, E) {
                            var F = 0;

                            function k(I, V, L, $) {
                                return function () {
                                    var ue = this, _e = arguments, oe = function () {
                                        var ht, ln;
                                        if (!(I < F)) {
                                            if (ht = L.apply(ue, _e), ht === V.promise()) throw new TypeError("Thenable self-resolution");
                                            ln = ht && (typeof ht == "object" || typeof ht == "function") && ht.then, x(ln) ? $ ? ln.call(ht, k(F, V, ke, $), k(F, V, We, $)) : (F++, ln.call(ht, k(F, V, ke, $), k(F, V, We, $), k(F, V, ke, V.notifyWith))) : (L !== ke && (ue = void 0, _e = [ht]), ($ || V.resolveWith)(ue, _e))
                                        }
                                    }, yt = $ ? oe : function () {
                                        try {
                                            oe()
                                        } catch (ht) {
                                            c.Deferred.exceptionHook && c.Deferred.exceptionHook(ht, yt.stackTrace), I + 1 >= F && (L !== We && (ue = void 0, _e = [ht]), V.rejectWith(ue, _e))
                                        }
                                    };
                                    I ? yt() : (c.Deferred.getStackHook && (yt.stackTrace = c.Deferred.getStackHook()), e.setTimeout(yt))
                                }
                            }

                            return c.Deferred(function (I) {
                                o[0][3].add(k(0, I, x(E) ? E : ke, I.notifyWith)), o[1][3].add(k(0, I, x(D) ? D : ke)), o[2][3].add(k(0, I, x(m) ? m : We))
                            }).promise()
                        }, promise: function (D) {
                            return D != null ? c.extend(D, h) : h
                        }
                    }, g = {};
                return c.each(o, function (D, m) {
                    var E = m[2], F = m[5];
                    h[m[1]] = E.add, F && E.add(function () {
                        l = F
                    }, o[3 - D][2].disable, o[3 - D][3].disable, o[0][2].lock, o[0][3].lock), E.add(m[3].fire), g[m[0]] = function () {
                        return g[m[0] + "With"](this === g ? void 0 : this, arguments), this
                    }, g[m[0] + "With"] = E.fireWith
                }), h.promise(g), i && i.call(g, g), g
            }, when: function (i) {
                var o = arguments.length, l = o, h = Array(l), g = u.call(arguments), D = c.Deferred(),
                    m = function (E) {
                        return function (F) {
                            h[E] = this, g[E] = arguments.length > 1 ? u.call(arguments) : F, --o || D.resolveWith(h, g)
                        }
                    };
                if (o <= 1 && (Ot(i, D.done(m(l)).resolve, D.reject, !o), D.state() === "pending" || x(g[l] && g[l].then))) return D.then();
                for (; l--;) Ot(g[l], m(l), D.reject);
                return D.promise()
            }
        });
        var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        c.Deferred.exceptionHook = function (i, o) {
            e.console && e.console.warn && i && Le.test(i.name) && e.console.warn("jQuery.Deferred exception: " + i.message, i.stack, o)
        }, c.readyException = function (i) {
            e.setTimeout(function () {
                throw i
            })
        };
        var rt = c.Deferred();
        c.fn.ready = function (i) {
            return rt.then(i).catch(function (o) {
                c.readyException(o)
            }), this
        }, c.extend({
            isReady: !1, readyWait: 1, ready: function (i) {
                (i === !0 ? --c.readyWait : c.isReady) || (c.isReady = !0, !(i !== !0 && --c.readyWait > 0) && rt.resolveWith(S, [c]))
            }
        }), c.ready.then = rt.then;

        function it() {
            S.removeEventListener("DOMContentLoaded", it), e.removeEventListener("load", it), c.ready()
        }

        S.readyState === "complete" || S.readyState !== "loading" && !S.documentElement.doScroll ? e.setTimeout(c.ready) : (S.addEventListener("DOMContentLoaded", it), e.addEventListener("load", it));
        var Et = function (i, o, l, h, g, D, m) {
            var E = 0, F = i.length, k = l == null;
            if (N(l) === "object") {
                g = !0;
                for (E in l) Et(i, o, E, l[E], !0, D, m)
            } else if (h !== void 0 && (g = !0, x(h) || (m = !0), k && (m ? (o.call(i, h), o = null) : (k = o, o = function (I, V, L) {
                return k.call(c(I), L)
            })), o)) for (; E < F; E++) o(i[E], l, m ? h : h.call(i[E], E, o(i[E], l)));
            return g ? i : k ? o.call(i) : F ? o(i[0], l) : D
        }, Re = /^-ms-/, Gt = /-([a-z])/g;

        function Pe(i, o) {
            return o.toUpperCase()
        }

        function ze(i) {
            return i.replace(Re, "ms-").replace(Gt, Pe)
        }

        var gt = function (i) {
            return i.nodeType === 1 || i.nodeType === 9 || !+i.nodeType
        };

        function Mt() {
            this.expando = c.expando + Mt.uid++
        }

        Mt.uid = 1, Mt.prototype = {
            cache: function (i) {
                var o = i[this.expando];
                return o || (o = {}, gt(i) && (i.nodeType ? i[this.expando] = o : Object.defineProperty(i, this.expando, {
                    value: o,
                    configurable: !0
                }))), o
            }, set: function (i, o, l) {
                var h, g = this.cache(i);
                if (typeof o == "string") g[ze(o)] = l; else for (h in o) g[ze(h)] = o[h];
                return g
            }, get: function (i, o) {
                return o === void 0 ? this.cache(i) : i[this.expando] && i[this.expando][ze(o)]
            }, access: function (i, o, l) {
                return o === void 0 || o && typeof o == "string" && l === void 0 ? this.get(i, o) : (this.set(i, o, l), l !== void 0 ? l : o)
            }, remove: function (i, o) {
                var l, h = i[this.expando];
                if (h !== void 0) {
                    if (o !== void 0) for (Array.isArray(o) ? o = o.map(ze) : (o = ze(o), o = o in h ? [o] : o.match(xe) || []), l = o.length; l--;) delete h[o[l]];
                    (o === void 0 || c.isEmptyObject(h)) && (i.nodeType ? i[this.expando] = void 0 : delete i[this.expando])
                }
            }, hasData: function (i) {
                var o = i[this.expando];
                return o !== void 0 && !c.isEmptyObject(o)
            }
        };
        var ee = new Mt, H = new Mt, Bn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ue = /[A-Z]/g;

        function Un(i) {
            return i === "true" ? !0 : i === "false" ? !1 : i === "null" ? null : i === +i + "" ? +i : Bn.test(i) ? JSON.parse(i) : i
        }

        function Rn(i, o, l) {
            var h;
            if (l === void 0 && i.nodeType === 1) if (h = "data-" + o.replace(Ue, "-$&").toLowerCase(), l = i.getAttribute(h), typeof l == "string") {
                try {
                    l = Un(l)
                } catch {
                }
                H.set(i, o, l)
            } else l = void 0;
            return l
        }

        c.extend({
            hasData: function (i) {
                return H.hasData(i) || ee.hasData(i)
            }, data: function (i, o, l) {
                return H.access(i, o, l)
            }, removeData: function (i, o) {
                H.remove(i, o)
            }, _data: function (i, o, l) {
                return ee.access(i, o, l)
            }, _removeData: function (i, o) {
                ee.remove(i, o)
            }
        }), c.fn.extend({
            data: function (i, o) {
                var l, h, g, D = this[0], m = D && D.attributes;
                if (i === void 0) {
                    if (this.length && (g = H.get(D), D.nodeType === 1 && !ee.get(D, "hasDataAttrs"))) {
                        for (l = m.length; l--;) m[l] && (h = m[l].name, h.indexOf("data-") === 0 && (h = ze(h.slice(5)), Rn(D, h, g[h])));
                        ee.set(D, "hasDataAttrs", !0)
                    }
                    return g
                }
                return typeof i == "object" ? this.each(function () {
                    H.set(this, i)
                }) : Et(this, function (E) {
                    var F;
                    if (D && E === void 0) return F = H.get(D, i), F !== void 0 || (F = Rn(D, i), F !== void 0) ? F : void 0;
                    this.each(function () {
                        H.set(this, i, E)
                    })
                }, null, o, arguments.length > 1, null, !0)
            }, removeData: function (i) {
                return this.each(function () {
                    H.remove(this, i)
                })
            }
        }), c.extend({
            queue: function (i, o, l) {
                var h;
                if (i) return o = (o || "fx") + "queue", h = ee.get(i, o), l && (!h || Array.isArray(l) ? h = ee.access(i, o, c.makeArray(l)) : h.push(l)), h || []
            }, dequeue: function (i, o) {
                o = o || "fx";
                var l = c.queue(i, o), h = l.length, g = l.shift(), D = c._queueHooks(i, o), m = function () {
                    c.dequeue(i, o)
                };
                g === "inprogress" && (g = l.shift(), h--), g && (o === "fx" && l.unshift("inprogress"), delete D.stop, g.call(i, m, D)), !h && D && D.empty.fire()
            }, _queueHooks: function (i, o) {
                var l = o + "queueHooks";
                return ee.get(i, l) || ee.access(i, l, {
                    empty: c.Callbacks("once memory").add(function () {
                        ee.remove(i, [o + "queue", l])
                    })
                })
            }
        }), c.fn.extend({
            queue: function (i, o) {
                var l = 2;
                return typeof i != "string" && (o = i, i = "fx", l--), arguments.length < l ? c.queue(this[0], i) : o === void 0 ? this : this.each(function () {
                    var h = c.queue(this, i, o);
                    c._queueHooks(this, i), i === "fx" && h[0] !== "inprogress" && c.dequeue(this, i)
                })
            }, dequeue: function (i) {
                return this.each(function () {
                    c.dequeue(this, i)
                })
            }, clearQueue: function (i) {
                return this.queue(i || "fx", [])
            }, promise: function (i, o) {
                var l, h = 1, g = c.Deferred(), D = this, m = this.length, E = function () {
                    --h || g.resolveWith(D, [D])
                };
                for (typeof i != "string" && (o = i, i = void 0), i = i || "fx"; m--;) l = ee.get(D[m], i + "queueHooks"), l && l.empty && (h++, l.empty.add(E));
                return E(), g.promise(o)
            }
        });
        var rr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ft = new RegExp("^(?:([+-])=|)(" + rr + ")([a-z%]*)$", "i"), zt = ["Top", "Right", "Bottom", "Left"],
            Nt = S.documentElement, Ie = function (i) {
                return c.contains(i.ownerDocument, i)
            }, qt = {composed: !0};
        Nt.getRootNode && (Ie = function (i) {
            return c.contains(i.ownerDocument, i) || i.getRootNode(qt) === i.ownerDocument
        });
        var lt = function (i, o) {
            return i = o || i, i.style.display === "none" || i.style.display === "" && Ie(i) && c.css(i, "display") === "none"
        };

        function mr(i, o, l, h) {
            var g, D, m = 20, E = h ? function () {
                    return h.cur()
                } : function () {
                    return c.css(i, o, "")
                }, F = E(), k = l && l[3] || (c.cssNumber[o] ? "" : "px"),
                I = i.nodeType && (c.cssNumber[o] || k !== "px" && +F) && ft.exec(c.css(i, o));
            if (I && I[3] !== k) {
                for (F = F / 2, k = k || I[3], I = +F || 1; m--;) c.style(i, o, I + k), (1 - D) * (1 - (D = E() / F || .5)) <= 0 && (m = 0), I = I / D;
                I = I * 2, c.style(i, o, I + k), l = l || []
            }
            return l && (I = +I || +F || 0, g = l[1] ? I + (l[1] + 1) * l[2] : +l[2], h && (h.unit = k, h.start = I, h.end = g)), g
        }

        var In = {};

        function xn(i) {
            var o, l = i.ownerDocument, h = i.nodeName, g = In[h];
            return g || (o = l.body.appendChild(l.createElement(h)), g = c.css(o, "display"), o.parentNode.removeChild(o), g === "none" && (g = "block"), In[h] = g, g)
        }

        function Cn(i, o) {
            for (var l, h, g = [], D = 0, m = i.length; D < m; D++) h = i[D], h.style && (l = h.style.display, o ? (l === "none" && (g[D] = ee.get(h, "display") || null, g[D] || (h.style.display = "")), h.style.display === "" && lt(h) && (g[D] = xn(h))) : l !== "none" && (g[D] = "none", ee.set(h, "display", l)));
            for (D = 0; D < m; D++) g[D] != null && (i[D].style.display = g[D]);
            return i
        }

        c.fn.extend({
            show: function () {
                return Cn(this, !0)
            }, hide: function () {
                return Cn(this)
            }, toggle: function (i) {
                return typeof i == "boolean" ? i ? this.show() : this.hide() : this.each(function () {
                    lt(this) ? c(this).show() : c(this).hide()
                })
            }
        });
        var Qt = /^(?:checkbox|radio)$/i, Gn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ir = /^$|^module$|\/(?:java|ecma)script/i;
        (function () {
            var i = S.createDocumentFragment(), o = i.appendChild(S.createElement("div")), l = S.createElement("input");
            l.setAttribute("type", "radio"), l.setAttribute("checked", "checked"), l.setAttribute("name", "t"), o.appendChild(l), T.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, o.innerHTML = "<textarea>x</textarea>", T.noCloneChecked = !!o.cloneNode(!0).lastChild.defaultValue, o.innerHTML = "<option></option>", T.option = !!o.lastChild
        })();
        var me = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, T.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);

        function Ke(i, o) {
            var l;
            return typeof i.getElementsByTagName != "undefined" ? l = i.getElementsByTagName(o || "*") : typeof i.querySelectorAll != "undefined" ? l = i.querySelectorAll(o || "*") : l = [], o === void 0 || o && K(i, o) ? c.merge([i], l) : l
        }

        function St(i, o) {
            for (var l = 0, h = i.length; l < h; l++) ee.set(i[l], "globalEval", !o || ee.get(o[l], "globalEval"))
        }

        var an = /<|&#?\w+;/;

        function bn(i, o, l, h, g) {
            for (var D, m, E, F, k, I, V = o.createDocumentFragment(), L = [], $ = 0, ue = i.length; $ < ue; $++) if (D = i[$], D || D === 0) if (N(D) === "object") c.merge(L, D.nodeType ? [D] : D); else if (!an.test(D)) L.push(o.createTextNode(D)); else {
                for (m = m || V.appendChild(o.createElement("div")), E = (Gn.exec(D) || ["", ""])[1].toLowerCase(), F = me[E] || me._default, m.innerHTML = F[1] + c.htmlPrefilter(D) + F[2], I = F[0]; I--;) m = m.lastChild;
                c.merge(L, m.childNodes), m = V.firstChild, m.textContent = ""
            }
            for (V.textContent = "", $ = 0; D = L[$++];) {
                if (h && c.inArray(D, h) > -1) {
                    g && g.push(D);
                    continue
                }
                if (k = Ie(D), m = Ke(V.appendChild(D), "script"), k && St(m), l) for (I = 0; D = m[I++];) ir.test(D.type || "") && l.push(D)
            }
            return V
        }

        var jn = /^([^.]*)(?:\.(.+)|)/;

        function Zt() {
            return !0
        }

        function fn() {
            return !1
        }

        function zn(i, o) {
            return i === Rr() == (o === "focus")
        }

        function Rr() {
            try {
                return S.activeElement
            } catch {
            }
        }

        function ur(i, o, l, h, g, D) {
            var m, E;
            if (typeof o == "object") {
                typeof l != "string" && (h = h || l, l = void 0);
                for (E in o) ur(i, E, l, h, o[E], D);
                return i
            }
            if (h == null && g == null ? (g = l, h = l = void 0) : g == null && (typeof l == "string" ? (g = h, h = void 0) : (g = h, h = l, l = void 0)), g === !1) g = fn; else if (!g) return i;
            return D === 1 && (m = g, g = function (F) {
                return c().off(F), m.apply(this, arguments)
            }, g.guid = m.guid || (m.guid = c.guid++)), i.each(function () {
                c.event.add(this, o, g, h, l)
            })
        }

        c.event = {
            global: {}, add: function (i, o, l, h, g) {
                var D, m, E, F, k, I, V, L, $, ue, _e, oe = ee.get(i);
                if (!!gt(i)) for (l.handler && (D = l, l = D.handler, g = D.selector), g && c.find.matchesSelector(Nt, g), l.guid || (l.guid = c.guid++), (F = oe.events) || (F = oe.events = Object.create(null)), (m = oe.handle) || (m = oe.handle = function (yt) {
                    return typeof c != "undefined" && c.event.triggered !== yt.type ? c.event.dispatch.apply(i, arguments) : void 0
                }), o = (o || "").match(xe) || [""], k = o.length; k--;) E = jn.exec(o[k]) || [], $ = _e = E[1], ue = (E[2] || "").split(".").sort(), $ && (V = c.event.special[$] || {}, $ = (g ? V.delegateType : V.bindType) || $, V = c.event.special[$] || {}, I = c.extend({
                    type: $,
                    origType: _e,
                    data: h,
                    handler: l,
                    guid: l.guid,
                    selector: g,
                    needsContext: g && c.expr.match.needsContext.test(g),
                    namespace: ue.join(".")
                }, D), (L = F[$]) || (L = F[$] = [], L.delegateCount = 0, (!V.setup || V.setup.call(i, h, ue, m) === !1) && i.addEventListener && i.addEventListener($, m)), V.add && (V.add.call(i, I), I.handler.guid || (I.handler.guid = l.guid)), g ? L.splice(L.delegateCount++, 0, I) : L.push(I), c.event.global[$] = !0)
            }, remove: function (i, o, l, h, g) {
                var D, m, E, F, k, I, V, L, $, ue, _e, oe = ee.hasData(i) && ee.get(i);
                if (!(!oe || !(F = oe.events))) {
                    for (o = (o || "").match(xe) || [""], k = o.length; k--;) {
                        if (E = jn.exec(o[k]) || [], $ = _e = E[1], ue = (E[2] || "").split(".").sort(), !$) {
                            for ($ in F) c.event.remove(i, $ + o[k], l, h, !0);
                            continue
                        }
                        for (V = c.event.special[$] || {}, $ = (h ? V.delegateType : V.bindType) || $, L = F[$] || [], E = E[2] && new RegExp("(^|\\.)" + ue.join("\\.(?:.*\\.|)") + "(\\.|$)"), m = D = L.length; D--;) I = L[D], (g || _e === I.origType) && (!l || l.guid === I.guid) && (!E || E.test(I.namespace)) && (!h || h === I.selector || h === "**" && I.selector) && (L.splice(D, 1), I.selector && L.delegateCount--, V.remove && V.remove.call(i, I));
                        m && !L.length && ((!V.teardown || V.teardown.call(i, ue, oe.handle) === !1) && c.removeEvent(i, $, oe.handle), delete F[$])
                    }
                    c.isEmptyObject(F) && ee.remove(i, "handle events")
                }
            }, dispatch: function (i) {
                var o, l, h, g, D, m, E = new Array(arguments.length), F = c.event.fix(i),
                    k = (ee.get(this, "events") || Object.create(null))[F.type] || [],
                    I = c.event.special[F.type] || {};
                for (E[0] = F, o = 1; o < arguments.length; o++) E[o] = arguments[o];
                if (F.delegateTarget = this, !(I.preDispatch && I.preDispatch.call(this, F) === !1)) {
                    for (m = c.event.handlers.call(this, F, k), o = 0; (g = m[o++]) && !F.isPropagationStopped();) for (F.currentTarget = g.elem, l = 0; (D = g.handlers[l++]) && !F.isImmediatePropagationStopped();) (!F.rnamespace || D.namespace === !1 || F.rnamespace.test(D.namespace)) && (F.handleObj = D, F.data = D.data, h = ((c.event.special[D.origType] || {}).handle || D.handler).apply(g.elem, E), h !== void 0 && (F.result = h) === !1 && (F.preventDefault(), F.stopPropagation()));
                    return I.postDispatch && I.postDispatch.call(this, F), F.result
                }
            }, handlers: function (i, o) {
                var l, h, g, D, m, E = [], F = o.delegateCount, k = i.target;
                if (F && k.nodeType && !(i.type === "click" && i.button >= 1)) {
                    for (; k !== this; k = k.parentNode || this) if (k.nodeType === 1 && !(i.type === "click" && k.disabled === !0)) {
                        for (D = [], m = {}, l = 0; l < F; l++) h = o[l], g = h.selector + " ", m[g] === void 0 && (m[g] = h.needsContext ? c(g, this).index(k) > -1 : c.find(g, this, null, [k]).length), m[g] && D.push(h);
                        D.length && E.push({elem: k, handlers: D})
                    }
                }
                return k = this, F < o.length && E.push({elem: k, handlers: o.slice(F)}), E
            }, addProp: function (i, o) {
                Object.defineProperty(c.Event.prototype, i, {
                    enumerable: !0, configurable: !0, get: x(o) ? function () {
                        if (this.originalEvent) return o(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[i]
                    }, set: function (l) {
                        Object.defineProperty(this, i, {enumerable: !0, configurable: !0, writable: !0, value: l})
                    }
                })
            }, fix: function (i) {
                return i[c.expando] ? i : new c.Event(i)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (i) {
                        var o = this || i;
                        return Qt.test(o.type) && o.click && K(o, "input") && Ce(o, "click", Zt), !1
                    }, trigger: function (i) {
                        var o = this || i;
                        return Qt.test(o.type) && o.click && K(o, "input") && Ce(o, "click"), !0
                    }, _default: function (i) {
                        var o = i.target;
                        return Qt.test(o.type) && o.click && K(o, "input") && ee.get(o, "click") || K(o, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (i) {
                        i.result !== void 0 && i.originalEvent && (i.originalEvent.returnValue = i.result)
                    }
                }
            }
        };

        function Ce(i, o, l) {
            if (!l) {
                ee.get(i, o) === void 0 && c.event.add(i, o, Zt);
                return
            }
            ee.set(i, o, !1), c.event.add(i, o, {
                namespace: !1, handler: function (h) {
                    var g, D, m = ee.get(this, o);
                    if (h.isTrigger & 1 && this[o]) {
                        if (m.length) (c.event.special[o] || {}).delegateType && h.stopPropagation(); else if (m = u.call(arguments), ee.set(this, o, m), g = l(this, o), this[o](), D = ee.get(this, o), m !== D || g ? ee.set(this, o, !1) : D = {}, m !== D) return h.stopImmediatePropagation(), h.preventDefault(), D && D.value
                    } else m.length && (ee.set(this, o, {value: c.event.trigger(c.extend(m[0], c.Event.prototype), m.slice(1), this)}), h.stopImmediatePropagation())
                }
            })
        }

        c.removeEvent = function (i, o, l) {
            i.removeEventListener && i.removeEventListener(o, l)
        }, c.Event = function (i, o) {
            if (!(this instanceof c.Event)) return new c.Event(i, o);
            i && i.type ? (this.originalEvent = i, this.type = i.type, this.isDefaultPrevented = i.defaultPrevented || i.defaultPrevented === void 0 && i.returnValue === !1 ? Zt : fn, this.target = i.target && i.target.nodeType === 3 ? i.target.parentNode : i.target, this.currentTarget = i.currentTarget, this.relatedTarget = i.relatedTarget) : this.type = i, o && c.extend(this, o), this.timeStamp = i && i.timeStamp || Date.now(), this[c.expando] = !0
        }, c.Event.prototype = {
            constructor: c.Event,
            isDefaultPrevented: fn,
            isPropagationStopped: fn,
            isImmediatePropagationStopped: fn,
            isSimulated: !1,
            preventDefault: function () {
                var i = this.originalEvent;
                this.isDefaultPrevented = Zt, i && !this.isSimulated && i.preventDefault()
            },
            stopPropagation: function () {
                var i = this.originalEvent;
                this.isPropagationStopped = Zt, i && !this.isSimulated && i.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var i = this.originalEvent;
                this.isImmediatePropagationStopped = Zt, i && !this.isSimulated && i.stopImmediatePropagation(), this.stopPropagation()
            }
        }, c.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, c.event.addProp), c.each({focus: "focusin", blur: "focusout"}, function (i, o) {
            c.event.special[i] = {
                setup: function () {
                    return Ce(this, i, zn), !1
                }, trigger: function () {
                    return Ce(this, i), !0
                }, _default: function () {
                    return !0
                }, delegateType: o
            }
        }), c.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (i, o) {
            c.event.special[i] = {
                delegateType: o, bindType: o, handle: function (l) {
                    var h, g = this, D = l.relatedTarget, m = l.handleObj;
                    return (!D || D !== g && !c.contains(g, D)) && (l.type = m.origType, h = m.handler.apply(this, arguments), l.type = o), h
                }
            }
        }), c.fn.extend({
            on: function (i, o, l, h) {
                return ur(this, i, o, l, h)
            }, one: function (i, o, l, h) {
                return ur(this, i, o, l, h, 1)
            }, off: function (i, o, l) {
                var h, g;
                if (i && i.preventDefault && i.handleObj) return h = i.handleObj, c(i.delegateTarget).off(h.namespace ? h.origType + "." + h.namespace : h.origType, h.selector, h.handler), this;
                if (typeof i == "object") {
                    for (g in i) this.off(g, o, i[g]);
                    return this
                }
                return (o === !1 || typeof o == "function") && (l = o, o = void 0), l === !1 && (l = fn), this.each(function () {
                    c.event.remove(this, i, l, o)
                })
            }
        });
        var G = /<script|<style|<link/i, ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function de(i, o) {
            return K(i, "table") && K(o.nodeType !== 11 ? o : o.firstChild, "tr") && c(i).children("tbody")[0] || i
        }

        function Dt(i) {
            return i.type = (i.getAttribute("type") !== null) + "/" + i.type, i
        }

        function ye(i) {
            return (i.type || "").slice(0, 5) === "true/" ? i.type = i.type.slice(5) : i.removeAttribute("type"), i
        }

        function Je(i, o) {
            var l, h, g, D, m, E, F;
            if (o.nodeType === 1) {
                if (ee.hasData(i) && (D = ee.get(i), F = D.events, F)) {
                    ee.remove(o, "handle events");
                    for (g in F) for (l = 0, h = F[g].length; l < h; l++) c.event.add(o, g, F[g][l])
                }
                H.hasData(i) && (m = H.access(i), E = c.extend({}, m), H.set(o, E))
            }
        }

        function Ge(i, o) {
            var l = o.nodeName.toLowerCase();
            l === "input" && Qt.test(i.type) ? o.checked = i.checked : (l === "input" || l === "textarea") && (o.defaultValue = i.defaultValue)
        }

        function Ft(i, o, l, h) {
            o = s(o);
            var g, D, m, E, F, k, I = 0, V = i.length, L = V - 1, $ = o[0], ue = x($);
            if (ue || V > 1 && typeof $ == "string" && !T.checkClone && ne.test($)) return i.each(function (_e) {
                var oe = i.eq(_e);
                ue && (o[0] = $.call(this, _e, oe.html())), Ft(oe, o, l, h)
            });
            if (V && (g = bn(o, i[0].ownerDocument, !1, i, h), D = g.firstChild, g.childNodes.length === 1 && (g = D), D || h)) {
                for (m = c.map(Ke(g, "script"), Dt), E = m.length; I < V; I++) F = g, I !== L && (F = c.clone(F, !0, !0), E && c.merge(m, Ke(F, "script"))), l.call(i[I], F, I);
                if (E) for (k = m[m.length - 1].ownerDocument, c.map(m, ye), I = 0; I < E; I++) F = m[I], ir.test(F.type || "") && !ee.access(F, "globalEval") && c.contains(k, F) && (F.src && (F.type || "").toLowerCase() !== "module" ? c._evalUrl && !F.noModule && c._evalUrl(F.src, {nonce: F.nonce || F.getAttribute("nonce")}, k) : O(F.textContent.replace(fe, ""), F, k))
            }
            return i
        }

        function Be(i, o, l) {
            for (var h, g = o ? c.filter(o, i) : i, D = 0; (h = g[D]) != null; D++) !l && h.nodeType === 1 && c.cleanData(Ke(h)), h.parentNode && (l && Ie(h) && St(Ke(h, "script")), h.parentNode.removeChild(h));
            return i
        }

        c.extend({
            htmlPrefilter: function (i) {
                return i
            }, clone: function (i, o, l) {
                var h, g, D, m, E = i.cloneNode(!0), F = Ie(i);
                if (!T.noCloneChecked && (i.nodeType === 1 || i.nodeType === 11) && !c.isXMLDoc(i)) for (m = Ke(E), D = Ke(i), h = 0, g = D.length; h < g; h++) Ge(D[h], m[h]);
                if (o) if (l) for (D = D || Ke(i), m = m || Ke(E), h = 0, g = D.length; h < g; h++) Je(D[h], m[h]); else Je(i, E);
                return m = Ke(E, "script"), m.length > 0 && St(m, !F && Ke(i, "script")), E
            }, cleanData: function (i) {
                for (var o, l, h, g = c.event.special, D = 0; (l = i[D]) !== void 0; D++) if (gt(l)) {
                    if (o = l[ee.expando]) {
                        if (o.events) for (h in o.events) g[h] ? c.event.remove(l, h) : c.removeEvent(l, h, o.handle);
                        l[ee.expando] = void 0
                    }
                    l[H.expando] && (l[H.expando] = void 0)
                }
            }
        }), c.fn.extend({
            detach: function (i) {
                return Be(this, i, !0)
            }, remove: function (i) {
                return Be(this, i)
            }, text: function (i) {
                return Et(this, function (o) {
                    return o === void 0 ? c.text(this) : this.empty().each(function () {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = o)
                    })
                }, null, i, arguments.length)
            }, append: function () {
                return Ft(this, arguments, function (i) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var o = de(this, i);
                        o.appendChild(i)
                    }
                })
            }, prepend: function () {
                return Ft(this, arguments, function (i) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var o = de(this, i);
                        o.insertBefore(i, o.firstChild)
                    }
                })
            }, before: function () {
                return Ft(this, arguments, function (i) {
                    this.parentNode && this.parentNode.insertBefore(i, this)
                })
            }, after: function () {
                return Ft(this, arguments, function (i) {
                    this.parentNode && this.parentNode.insertBefore(i, this.nextSibling)
                })
            }, empty: function () {
                for (var i, o = 0; (i = this[o]) != null; o++) i.nodeType === 1 && (c.cleanData(Ke(i, !1)), i.textContent = "");
                return this
            }, clone: function (i, o) {
                return i = i == null ? !1 : i, o = o == null ? i : o, this.map(function () {
                    return c.clone(this, i, o)
                })
            }, html: function (i) {
                return Et(this, function (o) {
                    var l = this[0] || {}, h = 0, g = this.length;
                    if (o === void 0 && l.nodeType === 1) return l.innerHTML;
                    if (typeof o == "string" && !G.test(o) && !me[(Gn.exec(o) || ["", ""])[1].toLowerCase()]) {
                        o = c.htmlPrefilter(o);
                        try {
                            for (; h < g; h++) l = this[h] || {}, l.nodeType === 1 && (c.cleanData(Ke(l, !1)), l.innerHTML = o);
                            l = 0
                        } catch {
                        }
                    }
                    l && this.empty().append(o)
                }, null, i, arguments.length)
            }, replaceWith: function () {
                var i = [];
                return Ft(this, arguments, function (o) {
                    var l = this.parentNode;
                    c.inArray(this, i) < 0 && (c.cleanData(Ke(this)), l && l.replaceChild(o, this))
                }, i)
            }
        }), c.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (i, o) {
            c.fn[i] = function (l) {
                for (var h, g = [], D = c(l), m = D.length - 1, E = 0; E <= m; E++) h = E === m ? this : this.clone(!0), c(D[E])[o](h), a.apply(g, h.get());
                return this.pushStack(g)
            }
        });
        var _t = new RegExp("^(" + rr + ")(?!px)[a-z%]+$", "i"), Lt = function (i) {
            var o = i.ownerDocument.defaultView;
            return (!o || !o.opener) && (o = e), o.getComputedStyle(i)
        }, Ve = function (i, o, l) {
            var h, g, D = {};
            for (g in o) D[g] = i.style[g], i.style[g] = o[g];
            h = l.call(i);
            for (g in o) i.style[g] = D[g];
            return h
        }, Qe = new RegExp(zt.join("|"), "i");
        (function () {
            function i() {
                if (!!k) {
                    F.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", k.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Nt.appendChild(F).appendChild(k);
                    var I = e.getComputedStyle(k);
                    l = I.top !== "1%", E = o(I.marginLeft) === 12, k.style.right = "60%", D = o(I.right) === 36, h = o(I.width) === 36, k.style.position = "absolute", g = o(k.offsetWidth / 3) === 12, Nt.removeChild(F), k = null
                }
            }

            function o(I) {
                return Math.round(parseFloat(I))
            }

            var l, h, g, D, m, E, F = S.createElement("div"), k = S.createElement("div");
            !k.style || (k.style.backgroundClip = "content-box", k.cloneNode(!0).style.backgroundClip = "", T.clearCloneStyle = k.style.backgroundClip === "content-box", c.extend(T, {
                boxSizingReliable: function () {
                    return i(), h
                }, pixelBoxStyles: function () {
                    return i(), D
                }, pixelPosition: function () {
                    return i(), l
                }, reliableMarginLeft: function () {
                    return i(), E
                }, scrollboxSize: function () {
                    return i(), g
                }, reliableTrDimensions: function () {
                    var I, V, L, $;
                    return m == null && (I = S.createElement("table"), V = S.createElement("tr"), L = S.createElement("div"), I.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", V.style.cssText = "border:1px solid", V.style.height = "1px", L.style.height = "9px", L.style.display = "block", Nt.appendChild(I).appendChild(V).appendChild(L), $ = e.getComputedStyle(V), m = parseInt($.height, 10) + parseInt($.borderTopWidth, 10) + parseInt($.borderBottomWidth, 10) === V.offsetHeight, Nt.removeChild(I)), m
                }
            }))
        })();

        function Ye(i, o, l) {
            var h, g, D, m, E = i.style;
            return l = l || Lt(i), l && (m = l.getPropertyValue(o) || l[o], m === "" && !Ie(i) && (m = c.style(i, o)), !T.pixelBoxStyles() && _t.test(m) && Qe.test(o) && (h = E.width, g = E.minWidth, D = E.maxWidth, E.minWidth = E.maxWidth = E.width = m, m = l.width, E.width = h, E.minWidth = g, E.maxWidth = D)), m !== void 0 ? m + "" : m
        }

        function or(i, o) {
            return {
                get: function () {
                    if (i()) {
                        delete this.get;
                        return
                    }
                    return (this.get = o).apply(this, arguments)
                }
            }
        }

        var Qn = ["Webkit", "Moz", "ms"], ut = S.createElement("div").style, et = {};

        function qn(i) {
            for (var o = i[0].toUpperCase() + i.slice(1), l = Qn.length; l--;) if (i = Qn[l] + o, i in ut) return i
        }

        function Ir(i) {
            var o = c.cssProps[i] || et[i];
            return o || (i in ut ? i : et[i] = qn(i) || i)
        }

        var Ou = /^(none|table(?!-c[ea]).+)/, vr = /^--/,
            Io = {position: "absolute", visibility: "hidden", display: "block"},
            pa = {letterSpacing: "0", fontWeight: "400"};

        function ga(i, o, l) {
            var h = ft.exec(o);
            return h ? Math.max(0, h[2] - (l || 0)) + (h[3] || "px") : o
        }

        function jo(i, o, l, h, g, D) {
            var m = o === "width" ? 1 : 0, E = 0, F = 0;
            if (l === (h ? "border" : "content")) return 0;
            for (; m < 4; m += 2) l === "margin" && (F += c.css(i, l + zt[m], !0, g)), h ? (l === "content" && (F -= c.css(i, "padding" + zt[m], !0, g)), l !== "margin" && (F -= c.css(i, "border" + zt[m] + "Width", !0, g))) : (F += c.css(i, "padding" + zt[m], !0, g), l !== "padding" ? F += c.css(i, "border" + zt[m] + "Width", !0, g) : E += c.css(i, "border" + zt[m] + "Width", !0, g));
            return !h && D >= 0 && (F += Math.max(0, Math.ceil(i["offset" + o[0].toUpperCase() + o.slice(1)] - D - F - E - .5)) || 0), F
        }

        function Da(i, o, l) {
            var h = Lt(i), g = !T.boxSizingReliable() || l, D = g && c.css(i, "boxSizing", !1, h) === "border-box",
                m = D, E = Ye(i, o, h), F = "offset" + o[0].toUpperCase() + o.slice(1);
            if (_t.test(E)) {
                if (!l) return E;
                E = "auto"
            }
            return (!T.boxSizingReliable() && D || !T.reliableTrDimensions() && K(i, "tr") || E === "auto" || !parseFloat(E) && c.css(i, "display", !1, h) === "inline") && i.getClientRects().length && (D = c.css(i, "boxSizing", !1, h) === "border-box", m = F in i, m && (E = i[F])), E = parseFloat(E) || 0, E + jo(i, o, l || (D ? "border" : "content"), m, h, E) + "px"
        }

        c.extend({
            cssHooks: {
                opacity: {
                    get: function (i, o) {
                        if (o) {
                            var l = Ye(i, "opacity");
                            return l === "" ? "1" : l
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (i, o, l, h) {
                if (!(!i || i.nodeType === 3 || i.nodeType === 8 || !i.style)) {
                    var g, D, m, E = ze(o), F = vr.test(o), k = i.style;
                    if (F || (o = Ir(E)), m = c.cssHooks[o] || c.cssHooks[E], l !== void 0) {
                        if (D = typeof l, D === "string" && (g = ft.exec(l)) && g[1] && (l = mr(i, o, g), D = "number"), l == null || l !== l) return;
                        D === "number" && !F && (l += g && g[3] || (c.cssNumber[E] ? "" : "px")), !T.clearCloneStyle && l === "" && o.indexOf("background") === 0 && (k[o] = "inherit"), (!m || !("set" in m) || (l = m.set(i, l, h)) !== void 0) && (F ? k.setProperty(o, l) : k[o] = l)
                    } else return m && "get" in m && (g = m.get(i, !1, h)) !== void 0 ? g : k[o]
                }
            },
            css: function (i, o, l, h) {
                var g, D, m, E = ze(o), F = vr.test(o);
                return F || (o = Ir(E)), m = c.cssHooks[o] || c.cssHooks[E], m && "get" in m && (g = m.get(i, !0, l)), g === void 0 && (g = Ye(i, o, h)), g === "normal" && o in pa && (g = pa[o]), l === "" || l ? (D = parseFloat(g), l === !0 || isFinite(D) ? D || 0 : g) : g
            }
        }), c.each(["height", "width"], function (i, o) {
            c.cssHooks[o] = {
                get: function (l, h, g) {
                    if (h) return Ou.test(c.css(l, "display")) && (!l.getClientRects().length || !l.getBoundingClientRect().width) ? Ve(l, Io, function () {
                        return Da(l, o, g)
                    }) : Da(l, o, g)
                }, set: function (l, h, g) {
                    var D, m = Lt(l), E = !T.scrollboxSize() && m.position === "absolute", F = E || g,
                        k = F && c.css(l, "boxSizing", !1, m) === "border-box", I = g ? jo(l, o, g, k, m) : 0;
                    return k && E && (I -= Math.ceil(l["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(m[o]) - jo(l, o, "border", !1, m) - .5)), I && (D = ft.exec(h)) && (D[3] || "px") !== "px" && (l.style[o] = h, h = c.css(l, o)), ga(l, h, I)
                }
            }
        }), c.cssHooks.marginLeft = or(T.reliableMarginLeft, function (i, o) {
            if (o) return (parseFloat(Ye(i, "marginLeft")) || i.getBoundingClientRect().left - Ve(i, {marginLeft: 0}, function () {
                return i.getBoundingClientRect().left
            })) + "px"
        }), c.each({margin: "", padding: "", border: "Width"}, function (i, o) {
            c.cssHooks[i + o] = {
                expand: function (l) {
                    for (var h = 0, g = {}, D = typeof l == "string" ? l.split(" ") : [l]; h < 4; h++) g[i + zt[h] + o] = D[h] || D[h - 2] || D[0];
                    return g
                }
            }, i !== "margin" && (c.cssHooks[i + o].set = ga)
        }), c.fn.extend({
            css: function (i, o) {
                return Et(this, function (l, h, g) {
                    var D, m, E = {}, F = 0;
                    if (Array.isArray(h)) {
                        for (D = Lt(l), m = h.length; F < m; F++) E[h[F]] = c.css(l, h[F], !1, D);
                        return E
                    }
                    return g !== void 0 ? c.style(l, h, g) : c.css(l, h)
                }, i, o, arguments.length > 1)
            }
        });

        function Kt(i, o, l, h, g) {
            return new Kt.prototype.init(i, o, l, h, g)
        }

        c.Tween = Kt, Kt.prototype = {
            constructor: Kt, init: function (i, o, l, h, g, D) {
                this.elem = i, this.prop = l, this.easing = g || c.easing._default, this.options = o, this.start = this.now = this.cur(), this.end = h, this.unit = D || (c.cssNumber[l] ? "" : "px")
            }, cur: function () {
                var i = Kt.propHooks[this.prop];
                return i && i.get ? i.get(this) : Kt.propHooks._default.get(this)
            }, run: function (i) {
                var o, l = Kt.propHooks[this.prop];
                return this.options.duration ? this.pos = o = c.easing[this.easing](i, this.options.duration * i, 0, 1, this.options.duration) : this.pos = o = i, this.now = (this.end - this.start) * o + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), l && l.set ? l.set(this) : Kt.propHooks._default.set(this), this
            }
        }, Kt.prototype.init.prototype = Kt.prototype, Kt.propHooks = {
            _default: {
                get: function (i) {
                    var o;
                    return i.elem.nodeType !== 1 || i.elem[i.prop] != null && i.elem.style[i.prop] == null ? i.elem[i.prop] : (o = c.css(i.elem, i.prop, ""), !o || o === "auto" ? 0 : o)
                }, set: function (i) {
                    c.fx.step[i.prop] ? c.fx.step[i.prop](i) : i.elem.nodeType === 1 && (c.cssHooks[i.prop] || i.elem.style[Ir(i.prop)] != null) ? c.style(i.elem, i.prop, i.now + i.unit) : i.elem[i.prop] = i.now
                }
            }
        }, Kt.propHooks.scrollTop = Kt.propHooks.scrollLeft = {
            set: function (i) {
                i.elem.nodeType && i.elem.parentNode && (i.elem[i.prop] = i.now)
            }
        }, c.easing = {
            linear: function (i) {
                return i
            }, swing: function (i) {
                return .5 - Math.cos(i * Math.PI) / 2
            }, _default: "swing"
        }, c.fx = Kt.prototype.init, c.fx.step = {};
        var pi, Mu, _c = /^(?:toggle|show|hide)$/, yc = /queueHooks$/;

        function zo() {
            Mu && (S.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(zo) : e.setTimeout(zo, c.fx.interval), c.fx.tick())
        }

        function _a() {
            return e.setTimeout(function () {
                pi = void 0
            }), pi = Date.now()
        }

        function Nu(i, o) {
            var l, h = 0, g = {height: i};
            for (o = o ? 1 : 0; h < 4; h += 2 - o) l = zt[h], g["margin" + l] = g["padding" + l] = i;
            return o && (g.opacity = g.width = i), g
        }

        function ya(i, o, l) {
            for (var h, g = (Hn.tweeners[o] || []).concat(Hn.tweeners["*"]), D = 0, m = g.length; D < m; D++) if (h = g[D].call(l, o, i)) return h
        }

        function mc(i, o, l) {
            var h, g, D, m, E, F, k, I, V = "width" in o || "height" in o, L = this, $ = {}, ue = i.style,
                _e = i.nodeType && lt(i), oe = ee.get(i, "fxshow");
            l.queue || (m = c._queueHooks(i, "fx"), m.unqueued == null && (m.unqueued = 0, E = m.empty.fire, m.empty.fire = function () {
                m.unqueued || E()
            }), m.unqueued++, L.always(function () {
                L.always(function () {
                    m.unqueued--, c.queue(i, "fx").length || m.empty.fire()
                })
            }));
            for (h in o) if (g = o[h], _c.test(g)) {
                if (delete o[h], D = D || g === "toggle", g === (_e ? "hide" : "show")) if (g === "show" && oe && oe[h] !== void 0) _e = !0; else continue;
                $[h] = oe && oe[h] || c.style(i, h)
            }
            if (F = !c.isEmptyObject(o), !(!F && c.isEmptyObject($))) {
                V && i.nodeType === 1 && (l.overflow = [ue.overflow, ue.overflowX, ue.overflowY], k = oe && oe.display, k == null && (k = ee.get(i, "display")), I = c.css(i, "display"), I === "none" && (k ? I = k : (Cn([i], !0), k = i.style.display || k, I = c.css(i, "display"), Cn([i]))), (I === "inline" || I === "inline-block" && k != null) && c.css(i, "float") === "none" && (F || (L.done(function () {
                    ue.display = k
                }), k == null && (I = ue.display, k = I === "none" ? "" : I)), ue.display = "inline-block")), l.overflow && (ue.overflow = "hidden", L.always(function () {
                    ue.overflow = l.overflow[0], ue.overflowX = l.overflow[1], ue.overflowY = l.overflow[2]
                })), F = !1;
                for (h in $) F || (oe ? "hidden" in oe && (_e = oe.hidden) : oe = ee.access(i, "fxshow", {display: k}), D && (oe.hidden = !_e), _e && Cn([i], !0), L.done(function () {
                    _e || Cn([i]), ee.remove(i, "fxshow");
                    for (h in $) c.style(i, h, $[h])
                })), F = ya(_e ? oe[h] : 0, h, L), h in oe || (oe[h] = F.start, _e && (F.end = F.start, F.start = 0))
            }
        }

        function vc(i, o) {
            var l, h, g, D, m;
            for (l in i) if (h = ze(l), g = o[h], D = i[l], Array.isArray(D) && (g = D[1], D = i[l] = D[0]), l !== h && (i[h] = D, delete i[l]), m = c.cssHooks[h], m && "expand" in m) {
                D = m.expand(D), delete i[h];
                for (l in D) l in i || (i[l] = D[l], o[l] = g)
            } else o[h] = g
        }

        function Hn(i, o, l) {
            var h, g, D = 0, m = Hn.prefilters.length, E = c.Deferred().always(function () {
                delete F.elem
            }), F = function () {
                if (g) return !1;
                for (var V = pi || _a(), L = Math.max(0, k.startTime + k.duration - V), $ = L / k.duration || 0, ue = 1 - $, _e = 0, oe = k.tweens.length; _e < oe; _e++) k.tweens[_e].run(ue);
                return E.notifyWith(i, [k, ue, L]), ue < 1 && oe ? L : (oe || E.notifyWith(i, [k, 1, 0]), E.resolveWith(i, [k]), !1)
            }, k = E.promise({
                elem: i,
                props: c.extend({}, o),
                opts: c.extend(!0, {specialEasing: {}, easing: c.easing._default}, l),
                originalProperties: o,
                originalOptions: l,
                startTime: pi || _a(),
                duration: l.duration,
                tweens: [],
                createTween: function (V, L) {
                    var $ = c.Tween(i, k.opts, V, L, k.opts.specialEasing[V] || k.opts.easing);
                    return k.tweens.push($), $
                },
                stop: function (V) {
                    var L = 0, $ = V ? k.tweens.length : 0;
                    if (g) return this;
                    for (g = !0; L < $; L++) k.tweens[L].run(1);
                    return V ? (E.notifyWith(i, [k, 1, 0]), E.resolveWith(i, [k, V])) : E.rejectWith(i, [k, V]), this
                }
            }), I = k.props;
            for (vc(I, k.opts.specialEasing); D < m; D++) if (h = Hn.prefilters[D].call(k, i, I, k.opts), h) return x(h.stop) && (c._queueHooks(k.elem, k.opts.queue).stop = h.stop.bind(h)), h;
            return c.map(I, ya, k), x(k.opts.start) && k.opts.start.call(i, k), k.progress(k.opts.progress).done(k.opts.done, k.opts.complete).fail(k.opts.fail).always(k.opts.always), c.fx.timer(c.extend(F, {
                elem: i,
                anim: k,
                queue: k.opts.queue
            })), k
        }

        c.Animation = c.extend(Hn, {
            tweeners: {
                "*": [function (i, o) {
                    var l = this.createTween(i, o);
                    return mr(l.elem, i, ft.exec(o), l), l
                }]
            }, tweener: function (i, o) {
                x(i) ? (o = i, i = ["*"]) : i = i.match(xe);
                for (var l, h = 0, g = i.length; h < g; h++) l = i[h], Hn.tweeners[l] = Hn.tweeners[l] || [], Hn.tweeners[l].unshift(o)
            }, prefilters: [mc], prefilter: function (i, o) {
                o ? Hn.prefilters.unshift(i) : Hn.prefilters.push(i)
            }
        }), c.speed = function (i, o, l) {
            var h = i && typeof i == "object" ? c.extend({}, i) : {
                complete: l || !l && o || x(i) && i,
                duration: i,
                easing: l && o || o && !x(o) && o
            };
            return c.fx.off ? h.duration = 0 : typeof h.duration != "number" && (h.duration in c.fx.speeds ? h.duration = c.fx.speeds[h.duration] : h.duration = c.fx.speeds._default), (h.queue == null || h.queue === !0) && (h.queue = "fx"), h.old = h.complete, h.complete = function () {
                x(h.old) && h.old.call(this), h.queue && c.dequeue(this, h.queue)
            }, h
        }, c.fn.extend({
            fadeTo: function (i, o, l, h) {
                return this.filter(lt).css("opacity", 0).show().end().animate({opacity: o}, i, l, h)
            }, animate: function (i, o, l, h) {
                var g = c.isEmptyObject(i), D = c.speed(o, l, h), m = function () {
                    var E = Hn(this, c.extend({}, i), D);
                    (g || ee.get(this, "finish")) && E.stop(!0)
                };
                return m.finish = m, g || D.queue === !1 ? this.each(m) : this.queue(D.queue, m)
            }, stop: function (i, o, l) {
                var h = function (g) {
                    var D = g.stop;
                    delete g.stop, D(l)
                };
                return typeof i != "string" && (l = o, o = i, i = void 0), o && this.queue(i || "fx", []), this.each(function () {
                    var g = !0, D = i != null && i + "queueHooks", m = c.timers, E = ee.get(this);
                    if (D) E[D] && E[D].stop && h(E[D]); else for (D in E) E[D] && E[D].stop && yc.test(D) && h(E[D]);
                    for (D = m.length; D--;) m[D].elem === this && (i == null || m[D].queue === i) && (m[D].anim.stop(l), g = !1, m.splice(D, 1));
                    (g || !l) && c.dequeue(this, i)
                })
            }, finish: function (i) {
                return i !== !1 && (i = i || "fx"), this.each(function () {
                    var o, l = ee.get(this), h = l[i + "queue"], g = l[i + "queueHooks"], D = c.timers,
                        m = h ? h.length : 0;
                    for (l.finish = !0, c.queue(this, i, []), g && g.stop && g.stop.call(this, !0), o = D.length; o--;) D[o].elem === this && D[o].queue === i && (D[o].anim.stop(!0), D.splice(o, 1));
                    for (o = 0; o < m; o++) h[o] && h[o].finish && h[o].finish.call(this);
                    delete l.finish
                })
            }
        }), c.each(["toggle", "show", "hide"], function (i, o) {
            var l = c.fn[o];
            c.fn[o] = function (h, g, D) {
                return h == null || typeof h == "boolean" ? l.apply(this, arguments) : this.animate(Nu(o, !0), h, g, D)
            }
        }), c.each({
            slideDown: Nu("show"),
            slideUp: Nu("hide"),
            slideToggle: Nu("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (i, o) {
            c.fn[i] = function (l, h, g) {
                return this.animate(o, l, h, g)
            }
        }), c.timers = [], c.fx.tick = function () {
            var i, o = 0, l = c.timers;
            for (pi = Date.now(); o < l.length; o++) i = l[o], !i() && l[o] === i && l.splice(o--, 1);
            l.length || c.fx.stop(), pi = void 0
        }, c.fx.timer = function (i) {
            c.timers.push(i), c.fx.start()
        }, c.fx.interval = 13, c.fx.start = function () {
            Mu || (Mu = !0, zo())
        }, c.fx.stop = function () {
            Mu = null
        }, c.fx.speeds = {slow: 600, fast: 200, _default: 400}, c.fn.delay = function (i, o) {
            return i = c.fx && c.fx.speeds[i] || i, o = o || "fx", this.queue(o, function (l, h) {
                var g = e.setTimeout(l, i);
                h.stop = function () {
                    e.clearTimeout(g)
                }
            })
        }, function () {
            var i = S.createElement("input"), o = S.createElement("select"),
                l = o.appendChild(S.createElement("option"));
            i.type = "checkbox", T.checkOn = i.value !== "", T.optSelected = l.selected, i = S.createElement("input"), i.value = "t", i.type = "radio", T.radioValue = i.value === "t"
        }();
        var ma, qi = c.expr.attrHandle;
        c.fn.extend({
            attr: function (i, o) {
                return Et(this, c.attr, i, o, arguments.length > 1)
            }, removeAttr: function (i) {
                return this.each(function () {
                    c.removeAttr(this, i)
                })
            }
        }), c.extend({
            attr: function (i, o, l) {
                var h, g, D = i.nodeType;
                if (!(D === 3 || D === 8 || D === 2)) {
                    if (typeof i.getAttribute == "undefined") return c.prop(i, o, l);
                    if ((D !== 1 || !c.isXMLDoc(i)) && (g = c.attrHooks[o.toLowerCase()] || (c.expr.match.bool.test(o) ? ma : void 0)), l !== void 0) {
                        if (l === null) {
                            c.removeAttr(i, o);
                            return
                        }
                        return g && "set" in g && (h = g.set(i, l, o)) !== void 0 ? h : (i.setAttribute(o, l + ""), l)
                    }
                    return g && "get" in g && (h = g.get(i, o)) !== null ? h : (h = c.find.attr(i, o), h == null ? void 0 : h)
                }
            }, attrHooks: {
                type: {
                    set: function (i, o) {
                        if (!T.radioValue && o === "radio" && K(i, "input")) {
                            var l = i.value;
                            return i.setAttribute("type", o), l && (i.value = l), o
                        }
                    }
                }
            }, removeAttr: function (i, o) {
                var l, h = 0, g = o && o.match(xe);
                if (g && i.nodeType === 1) for (; l = g[h++];) i.removeAttribute(l)
            }
        }), ma = {
            set: function (i, o, l) {
                return o === !1 ? c.removeAttr(i, l) : i.setAttribute(l, l), l
            }
        }, c.each(c.expr.match.bool.source.match(/\w+/g), function (i, o) {
            var l = qi[o] || c.find.attr;
            qi[o] = function (h, g, D) {
                var m, E, F = g.toLowerCase();
                return D || (E = qi[F], qi[F] = m, m = l(h, g, D) != null ? F : null, qi[F] = E), m
            }
        });
        var xc = /^(?:input|select|textarea|button)$/i, Cc = /^(?:a|area)$/i;
        c.fn.extend({
            prop: function (i, o) {
                return Et(this, c.prop, i, o, arguments.length > 1)
            }, removeProp: function (i) {
                return this.each(function () {
                    delete this[c.propFix[i] || i]
                })
            }
        }), c.extend({
            prop: function (i, o, l) {
                var h, g, D = i.nodeType;
                if (!(D === 3 || D === 8 || D === 2)) return (D !== 1 || !c.isXMLDoc(i)) && (o = c.propFix[o] || o, g = c.propHooks[o]), l !== void 0 ? g && "set" in g && (h = g.set(i, l, o)) !== void 0 ? h : i[o] = l : g && "get" in g && (h = g.get(i, o)) !== null ? h : i[o]
            }, propHooks: {
                tabIndex: {
                    get: function (i) {
                        var o = c.find.attr(i, "tabindex");
                        return o ? parseInt(o, 10) : xc.test(i.nodeName) || Cc.test(i.nodeName) && i.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), T.optSelected || (c.propHooks.selected = {
            get: function (i) {
                var o = i.parentNode;
                return o && o.parentNode && o.parentNode.selectedIndex, null
            }, set: function (i) {
                var o = i.parentNode;
                o && (o.selectedIndex, o.parentNode && o.parentNode.selectedIndex)
            }
        }), c.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            c.propFix[this.toLowerCase()] = this
        });

        function jr(i) {
            var o = i.match(xe) || [];
            return o.join(" ")
        }

        function zr(i) {
            return i.getAttribute && i.getAttribute("class") || ""
        }

        function qo(i) {
            return Array.isArray(i) ? i : typeof i == "string" ? i.match(xe) || [] : []
        }

        c.fn.extend({
            addClass: function (i) {
                var o, l, h, g, D, m, E, F = 0;
                if (x(i)) return this.each(function (k) {
                    c(this).addClass(i.call(this, k, zr(this)))
                });
                if (o = qo(i), o.length) {
                    for (; l = this[F++];) if (g = zr(l), h = l.nodeType === 1 && " " + jr(g) + " ", h) {
                        for (m = 0; D = o[m++];) h.indexOf(" " + D + " ") < 0 && (h += D + " ");
                        E = jr(h), g !== E && l.setAttribute("class", E)
                    }
                }
                return this
            }, removeClass: function (i) {
                var o, l, h, g, D, m, E, F = 0;
                if (x(i)) return this.each(function (k) {
                    c(this).removeClass(i.call(this, k, zr(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (o = qo(i), o.length) {
                    for (; l = this[F++];) if (g = zr(l), h = l.nodeType === 1 && " " + jr(g) + " ", h) {
                        for (m = 0; D = o[m++];) for (; h.indexOf(" " + D + " ") > -1;) h = h.replace(" " + D + " ", " ");
                        E = jr(h), g !== E && l.setAttribute("class", E)
                    }
                }
                return this
            }, toggleClass: function (i, o) {
                var l = typeof i, h = l === "string" || Array.isArray(i);
                return typeof o == "boolean" && h ? o ? this.addClass(i) : this.removeClass(i) : x(i) ? this.each(function (g) {
                    c(this).toggleClass(i.call(this, g, zr(this), o), o)
                }) : this.each(function () {
                    var g, D, m, E;
                    if (h) for (D = 0, m = c(this), E = qo(i); g = E[D++];) m.hasClass(g) ? m.removeClass(g) : m.addClass(g); else (i === void 0 || l === "boolean") && (g = zr(this), g && ee.set(this, "__className__", g), this.setAttribute && this.setAttribute("class", g || i === !1 ? "" : ee.get(this, "__className__") || ""))
                })
            }, hasClass: function (i) {
                var o, l, h = 0;
                for (o = " " + i + " "; l = this[h++];) if (l.nodeType === 1 && (" " + jr(zr(l)) + " ").indexOf(o) > -1) return !0;
                return !1
            }
        });
        var bc = /\r/g;
        c.fn.extend({
            val: function (i) {
                var o, l, h, g = this[0];
                return arguments.length ? (h = x(i), this.each(function (D) {
                    var m;
                    this.nodeType === 1 && (h ? m = i.call(this, D, c(this).val()) : m = i, m == null ? m = "" : typeof m == "number" ? m += "" : Array.isArray(m) && (m = c.map(m, function (E) {
                        return E == null ? "" : E + ""
                    })), o = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], (!o || !("set" in o) || o.set(this, m, "value") === void 0) && (this.value = m))
                })) : g ? (o = c.valHooks[g.type] || c.valHooks[g.nodeName.toLowerCase()], o && "get" in o && (l = o.get(g, "value")) !== void 0 ? l : (l = g.value, typeof l == "string" ? l.replace(bc, "") : l == null ? "" : l)) : void 0
            }
        }), c.extend({
            valHooks: {
                option: {
                    get: function (i) {
                        var o = c.find.attr(i, "value");
                        return o != null ? o : jr(c.text(i))
                    }
                }, select: {
                    get: function (i) {
                        var o, l, h, g = i.options, D = i.selectedIndex, m = i.type === "select-one", E = m ? null : [],
                            F = m ? D + 1 : g.length;
                        for (D < 0 ? h = F : h = m ? D : 0; h < F; h++) if (l = g[h], (l.selected || h === D) && !l.disabled && (!l.parentNode.disabled || !K(l.parentNode, "optgroup"))) {
                            if (o = c(l).val(), m) return o;
                            E.push(o)
                        }
                        return E
                    }, set: function (i, o) {
                        for (var l, h, g = i.options, D = c.makeArray(o), m = g.length; m--;) h = g[m], (h.selected = c.inArray(c.valHooks.option.get(h), D) > -1) && (l = !0);
                        return l || (i.selectedIndex = -1), D
                    }
                }
            }
        }), c.each(["radio", "checkbox"], function () {
            c.valHooks[this] = {
                set: function (i, o) {
                    if (Array.isArray(o)) return i.checked = c.inArray(c(i).val(), o) > -1
                }
            }, T.checkOn || (c.valHooks[this].get = function (i) {
                return i.getAttribute("value") === null ? "on" : i.value
            })
        }), T.focusin = "onfocusin" in e;
        var va = /^(?:focusinfocus|focusoutblur)$/, xa = function (i) {
            i.stopPropagation()
        };
        c.extend(c.event, {
            trigger: function (i, o, l, h) {
                var g, D, m, E, F, k, I, V, L = [l || S], $ = y.call(i, "type") ? i.type : i,
                    ue = y.call(i, "namespace") ? i.namespace.split(".") : [];
                if (D = V = m = l = l || S, !(l.nodeType === 3 || l.nodeType === 8) && !va.test($ + c.event.triggered) && ($.indexOf(".") > -1 && (ue = $.split("."), $ = ue.shift(), ue.sort()), F = $.indexOf(":") < 0 && "on" + $, i = i[c.expando] ? i : new c.Event($, typeof i == "object" && i), i.isTrigger = h ? 2 : 3, i.namespace = ue.join("."), i.rnamespace = i.namespace ? new RegExp("(^|\\.)" + ue.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = void 0, i.target || (i.target = l), o = o == null ? [i] : c.makeArray(o, [i]), I = c.event.special[$] || {}, !(!h && I.trigger && I.trigger.apply(l, o) === !1))) {
                    if (!h && !I.noBubble && !A(l)) {
                        for (E = I.delegateType || $, va.test(E + $) || (D = D.parentNode); D; D = D.parentNode) L.push(D), m = D;
                        m === (l.ownerDocument || S) && L.push(m.defaultView || m.parentWindow || e)
                    }
                    for (g = 0; (D = L[g++]) && !i.isPropagationStopped();) V = D, i.type = g > 1 ? E : I.bindType || $, k = (ee.get(D, "events") || Object.create(null))[i.type] && ee.get(D, "handle"), k && k.apply(D, o), k = F && D[F], k && k.apply && gt(D) && (i.result = k.apply(D, o), i.result === !1 && i.preventDefault());
                    return i.type = $, !h && !i.isDefaultPrevented() && (!I._default || I._default.apply(L.pop(), o) === !1) && gt(l) && F && x(l[$]) && !A(l) && (m = l[F], m && (l[F] = null), c.event.triggered = $, i.isPropagationStopped() && V.addEventListener($, xa), l[$](), i.isPropagationStopped() && V.removeEventListener($, xa), c.event.triggered = void 0, m && (l[F] = m)), i.result
                }
            }, simulate: function (i, o, l) {
                var h = c.extend(new c.Event, l, {type: i, isSimulated: !0});
                c.event.trigger(h, null, o)
            }
        }), c.fn.extend({
            trigger: function (i, o) {
                return this.each(function () {
                    c.event.trigger(i, o, this)
                })
            }, triggerHandler: function (i, o) {
                var l = this[0];
                if (l) return c.event.trigger(i, o, l, !0)
            }
        }), T.focusin || c.each({focus: "focusin", blur: "focusout"}, function (i, o) {
            var l = function (h) {
                c.event.simulate(o, h.target, c.event.fix(h))
            };
            c.event.special[o] = {
                setup: function () {
                    var h = this.ownerDocument || this.document || this, g = ee.access(h, o);
                    g || h.addEventListener(i, l, !0), ee.access(h, o, (g || 0) + 1)
                }, teardown: function () {
                    var h = this.ownerDocument || this.document || this, g = ee.access(h, o) - 1;
                    g ? ee.access(h, o, g) : (h.removeEventListener(i, l, !0), ee.remove(h, o))
                }
            }
        });
        var Hi = e.location, Ca = {guid: Date.now()}, Ho = /\?/;
        c.parseXML = function (i) {
            var o, l;
            if (!i || typeof i != "string") return null;
            try {
                o = new e.DOMParser().parseFromString(i, "text/xml")
            } catch {
            }
            return l = o && o.getElementsByTagName("parsererror")[0], (!o || l) && c.error("Invalid XML: " + (l ? c.map(l.childNodes, function (h) {
                return h.textContent
            }).join(`
`) : i)), o
        };
        var Tc = /\[\]$/, ba = /\r?\n/g, wc = /^(?:submit|button|image|reset|file)$/i,
            Ec = /^(?:input|select|textarea|keygen)/i;

        function $o(i, o, l, h) {
            var g;
            if (Array.isArray(o)) c.each(o, function (D, m) {
                l || Tc.test(i) ? h(i, m) : $o(i + "[" + (typeof m == "object" && m != null ? D : "") + "]", m, l, h)
            }); else if (!l && N(o) === "object") for (g in o) $o(i + "[" + g + "]", o[g], l, h); else h(i, o)
        }

        c.param = function (i, o) {
            var l, h = [], g = function (D, m) {
                var E = x(m) ? m() : m;
                h[h.length] = encodeURIComponent(D) + "=" + encodeURIComponent(E == null ? "" : E)
            };
            if (i == null) return "";
            if (Array.isArray(i) || i.jquery && !c.isPlainObject(i)) c.each(i, function () {
                g(this.name, this.value)
            }); else for (l in i) $o(l, i[l], o, g);
            return h.join("&")
        }, c.fn.extend({
            serialize: function () {
                return c.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var i = c.prop(this, "elements");
                    return i ? c.makeArray(i) : this
                }).filter(function () {
                    var i = this.type;
                    return this.name && !c(this).is(":disabled") && Ec.test(this.nodeName) && !wc.test(i) && (this.checked || !Qt.test(i))
                }).map(function (i, o) {
                    var l = c(this).val();
                    return l == null ? null : Array.isArray(l) ? c.map(l, function (h) {
                        return {
                            name: o.name, value: h.replace(ba, `\r
`)
                        }
                    }) : {
                        name: o.name, value: l.replace(ba, `\r
`)
                    }
                }).get()
            }
        });
        var Sc = /%20/g, Fc = /#.*$/, Ac = /([?&])_=[^&]*/, Pc = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            kc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Oc = /^(?:GET|HEAD)$/, Mc = /^\/\//,
            Ta = {}, Xo = {}, wa = "*/".concat("*"), Wo = S.createElement("a");
        Wo.href = Hi.href;

        function Ea(i) {
            return function (o, l) {
                typeof o != "string" && (l = o, o = "*");
                var h, g = 0, D = o.toLowerCase().match(xe) || [];
                if (x(l)) for (; h = D[g++];) h[0] === "+" ? (h = h.slice(1) || "*", (i[h] = i[h] || []).unshift(l)) : (i[h] = i[h] || []).push(l)
            }
        }

        function Sa(i, o, l, h) {
            var g = {}, D = i === Xo;

            function m(E) {
                var F;
                return g[E] = !0, c.each(i[E] || [], function (k, I) {
                    var V = I(o, l, h);
                    if (typeof V == "string" && !D && !g[V]) return o.dataTypes.unshift(V), m(V), !1;
                    if (D) return !(F = V)
                }), F
            }

            return m(o.dataTypes[0]) || !g["*"] && m("*")
        }

        function Yo(i, o) {
            var l, h, g = c.ajaxSettings.flatOptions || {};
            for (l in o) o[l] !== void 0 && ((g[l] ? i : h || (h = {}))[l] = o[l]);
            return h && c.extend(!0, i, h), i
        }

        function Nc(i, o, l) {
            for (var h, g, D, m, E = i.contents, F = i.dataTypes; F[0] === "*";) F.shift(), h === void 0 && (h = i.mimeType || o.getResponseHeader("Content-Type"));
            if (h) {
                for (g in E) if (E[g] && E[g].test(h)) {
                    F.unshift(g);
                    break
                }
            }
            if (F[0] in l) D = F[0]; else {
                for (g in l) {
                    if (!F[0] || i.converters[g + " " + F[0]]) {
                        D = g;
                        break
                    }
                    m || (m = g)
                }
                D = D || m
            }
            if (D) return D !== F[0] && F.unshift(D), l[D]
        }

        function Lc(i, o, l, h) {
            var g, D, m, E, F, k = {}, I = i.dataTypes.slice();
            if (I[1]) for (m in i.converters) k[m.toLowerCase()] = i.converters[m];
            for (D = I.shift(); D;) if (i.responseFields[D] && (l[i.responseFields[D]] = o), !F && h && i.dataFilter && (o = i.dataFilter(o, i.dataType)), F = D, D = I.shift(), D) {
                if (D === "*") D = F; else if (F !== "*" && F !== D) {
                    if (m = k[F + " " + D] || k["* " + D], !m) {
                        for (g in k) if (E = g.split(" "), E[1] === D && (m = k[F + " " + E[0]] || k["* " + E[0]], m)) {
                            m === !0 ? m = k[g] : k[g] !== !0 && (D = E[0], I.unshift(E[1]));
                            break
                        }
                    }
                    if (m !== !0) if (m && i.throws) o = m(o); else try {
                        o = m(o)
                    } catch (V) {
                        return {state: "parsererror", error: m ? V : "No conversion from " + F + " to " + D}
                    }
                }
            }
            return {state: "success", data: o}
        }

        c.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Hi.href,
                type: "GET",
                isLocal: kc.test(Hi.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": wa,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": c.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (i, o) {
                return o ? Yo(Yo(i, c.ajaxSettings), o) : Yo(c.ajaxSettings, i)
            },
            ajaxPrefilter: Ea(Ta),
            ajaxTransport: Ea(Xo),
            ajax: function (i, o) {
                typeof i == "object" && (o = i, i = void 0), o = o || {};
                var l, h, g, D, m, E, F, k, I, V, L = c.ajaxSetup({}, o), $ = L.context || L,
                    ue = L.context && ($.nodeType || $.jquery) ? c($) : c.event, _e = c.Deferred(),
                    oe = c.Callbacks("once memory"), yt = L.statusCode || {}, ht = {}, ln = {}, je = "canceled", De = {
                        readyState: 0, getResponseHeader: function (Fe) {
                            var tt;
                            if (F) {
                                if (!D) for (D = {}; tt = Pc.exec(g);) D[tt[1].toLowerCase() + " "] = (D[tt[1].toLowerCase() + " "] || []).concat(tt[2]);
                                tt = D[Fe.toLowerCase() + " "]
                            }
                            return tt == null ? null : tt.join(", ")
                        }, getAllResponseHeaders: function () {
                            return F ? g : null
                        }, setRequestHeader: function (Fe, tt) {
                            return F == null && (Fe = ln[Fe.toLowerCase()] = ln[Fe.toLowerCase()] || Fe, ht[Fe] = tt), this
                        }, overrideMimeType: function (Fe) {
                            return F == null && (L.mimeType = Fe), this
                        }, statusCode: function (Fe) {
                            var tt;
                            if (Fe) if (F) De.always(Fe[De.status]); else for (tt in Fe) yt[tt] = [yt[tt], Fe[tt]];
                            return this
                        }, abort: function (Fe) {
                            var tt = Fe || je;
                            return l && l.abort(tt), Jt(0, tt), this
                        }
                    };
                if (_e.promise(De), L.url = ((i || L.url || Hi.href) + "").replace(Mc, Hi.protocol + "//"), L.type = o.method || o.type || L.method || L.type, L.dataTypes = (L.dataType || "*").toLowerCase().match(xe) || [""], L.crossDomain == null) {
                    E = S.createElement("a");
                    try {
                        E.href = L.url, E.href = E.href, L.crossDomain = Wo.protocol + "//" + Wo.host != E.protocol + "//" + E.host
                    } catch {
                        L.crossDomain = !0
                    }
                }
                if (L.data && L.processData && typeof L.data != "string" && (L.data = c.param(L.data, L.traditional)), Sa(Ta, L, o, De), F) return De;
                k = c.event && L.global, k && c.active++ === 0 && c.event.trigger("ajaxStart"), L.type = L.type.toUpperCase(), L.hasContent = !Oc.test(L.type), h = L.url.replace(Fc, ""), L.hasContent ? L.data && L.processData && (L.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (L.data = L.data.replace(Sc, "+")) : (V = L.url.slice(h.length), L.data && (L.processData || typeof L.data == "string") && (h += (Ho.test(h) ? "&" : "?") + L.data, delete L.data), L.cache === !1 && (h = h.replace(Ac, "$1"), V = (Ho.test(h) ? "&" : "?") + "_=" + Ca.guid++ + V), L.url = h + V), L.ifModified && (c.lastModified[h] && De.setRequestHeader("If-Modified-Since", c.lastModified[h]), c.etag[h] && De.setRequestHeader("If-None-Match", c.etag[h])), (L.data && L.hasContent && L.contentType !== !1 || o.contentType) && De.setRequestHeader("Content-Type", L.contentType), De.setRequestHeader("Accept", L.dataTypes[0] && L.accepts[L.dataTypes[0]] ? L.accepts[L.dataTypes[0]] + (L.dataTypes[0] !== "*" ? ", " + wa + "; q=0.01" : "") : L.accepts["*"]);
                for (I in L.headers) De.setRequestHeader(I, L.headers[I]);
                if (L.beforeSend && (L.beforeSend.call($, De, L) === !1 || F)) return De.abort();
                if (je = "abort", oe.add(L.complete), De.done(L.success), De.fail(L.error), l = Sa(Xo, L, o, De), !l) Jt(-1, "No Transport"); else {
                    if (De.readyState = 1, k && ue.trigger("ajaxSend", [De, L]), F) return De;
                    L.async && L.timeout > 0 && (m = e.setTimeout(function () {
                        De.abort("timeout")
                    }, L.timeout));
                    try {
                        F = !1, l.send(ht, Jt)
                    } catch (Fe) {
                        if (F) throw Fe;
                        Jt(-1, Fe)
                    }
                }

                function Jt(Fe, tt, Xi, Lu) {
                    var cn, qr, Hr, en, xr, Tn = tt;
                    F || (F = !0, m && e.clearTimeout(m), l = void 0, g = Lu || "", De.readyState = Fe > 0 ? 4 : 0, cn = Fe >= 200 && Fe < 300 || Fe === 304, Xi && (en = Nc(L, De, Xi)), !cn && c.inArray("script", L.dataTypes) > -1 && c.inArray("json", L.dataTypes) < 0 && (L.converters["text script"] = function () {
                    }), en = Lc(L, en, De, cn), cn ? (L.ifModified && (xr = De.getResponseHeader("Last-Modified"), xr && (c.lastModified[h] = xr), xr = De.getResponseHeader("etag"), xr && (c.etag[h] = xr)), Fe === 204 || L.type === "HEAD" ? Tn = "nocontent" : Fe === 304 ? Tn = "notmodified" : (Tn = en.state, qr = en.data, Hr = en.error, cn = !Hr)) : (Hr = Tn, (Fe || !Tn) && (Tn = "error", Fe < 0 && (Fe = 0))), De.status = Fe, De.statusText = (tt || Tn) + "", cn ? _e.resolveWith($, [qr, Tn, De]) : _e.rejectWith($, [De, Tn, Hr]), De.statusCode(yt), yt = void 0, k && ue.trigger(cn ? "ajaxSuccess" : "ajaxError", [De, L, cn ? qr : Hr]), oe.fireWith($, [De, Tn]), k && (ue.trigger("ajaxComplete", [De, L]), --c.active || c.event.trigger("ajaxStop")))
                }

                return De
            },
            getJSON: function (i, o, l) {
                return c.get(i, o, l, "json")
            },
            getScript: function (i, o) {
                return c.get(i, void 0, o, "script")
            }
        }), c.each(["get", "post"], function (i, o) {
            c[o] = function (l, h, g, D) {
                return x(h) && (D = D || g, g = h, h = void 0), c.ajax(c.extend({
                    url: l,
                    type: o,
                    dataType: D,
                    data: h,
                    success: g
                }, c.isPlainObject(l) && l))
            }
        }), c.ajaxPrefilter(function (i) {
            var o;
            for (o in i.headers) o.toLowerCase() === "content-type" && (i.contentType = i.headers[o] || "")
        }), c._evalUrl = function (i, o, l) {
            return c.ajax({
                url: i,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (h) {
                    c.globalEval(h, o, l)
                }
            })
        }, c.fn.extend({
            wrapAll: function (i) {
                var o;
                return this[0] && (x(i) && (i = i.call(this[0])), o = c(i, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && o.insertBefore(this[0]), o.map(function () {
                    for (var l = this; l.firstElementChild;) l = l.firstElementChild;
                    return l
                }).append(this)), this
            }, wrapInner: function (i) {
                return x(i) ? this.each(function (o) {
                    c(this).wrapInner(i.call(this, o))
                }) : this.each(function () {
                    var o = c(this), l = o.contents();
                    l.length ? l.wrapAll(i) : o.append(i)
                })
            }, wrap: function (i) {
                var o = x(i);
                return this.each(function (l) {
                    c(this).wrapAll(o ? i.call(this, l) : i)
                })
            }, unwrap: function (i) {
                return this.parent(i).not("body").each(function () {
                    c(this).replaceWith(this.childNodes)
                }), this
            }
        }), c.expr.pseudos.hidden = function (i) {
            return !c.expr.pseudos.visible(i)
        }, c.expr.pseudos.visible = function (i) {
            return !!(i.offsetWidth || i.offsetHeight || i.getClientRects().length)
        }, c.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest
            } catch {
            }
        };
        var Bc = {0: 200, 1223: 204}, $i = c.ajaxSettings.xhr();
        T.cors = !!$i && "withCredentials" in $i, T.ajax = $i = !!$i, c.ajaxTransport(function (i) {
            var o, l;
            if (T.cors || $i && !i.crossDomain) return {
                send: function (h, g) {
                    var D, m = i.xhr();
                    if (m.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (D in i.xhrFields) m[D] = i.xhrFields[D];
                    i.mimeType && m.overrideMimeType && m.overrideMimeType(i.mimeType), !i.crossDomain && !h["X-Requested-With"] && (h["X-Requested-With"] = "XMLHttpRequest");
                    for (D in h) m.setRequestHeader(D, h[D]);
                    o = function (E) {
                        return function () {
                            o && (o = l = m.onload = m.onerror = m.onabort = m.ontimeout = m.onreadystatechange = null, E === "abort" ? m.abort() : E === "error" ? typeof m.status != "number" ? g(0, "error") : g(m.status, m.statusText) : g(Bc[m.status] || m.status, m.statusText, (m.responseType || "text") !== "text" || typeof m.responseText != "string" ? {binary: m.response} : {text: m.responseText}, m.getAllResponseHeaders()))
                        }
                    }, m.onload = o(), l = m.onerror = m.ontimeout = o("error"), m.onabort !== void 0 ? m.onabort = l : m.onreadystatechange = function () {
                        m.readyState === 4 && e.setTimeout(function () {
                            o && l()
                        })
                    }, o = o("abort");
                    try {
                        m.send(i.hasContent && i.data || null)
                    } catch (E) {
                        if (o) throw E
                    }
                }, abort: function () {
                    o && o()
                }
            }
        }), c.ajaxPrefilter(function (i) {
            i.crossDomain && (i.contents.script = !1)
        }), c.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (i) {
                    return c.globalEval(i), i
                }
            }
        }), c.ajaxPrefilter("script", function (i) {
            i.cache === void 0 && (i.cache = !1), i.crossDomain && (i.type = "GET")
        }), c.ajaxTransport("script", function (i) {
            if (i.crossDomain || i.scriptAttrs) {
                var o, l;
                return {
                    send: function (h, g) {
                        o = c("<script>").attr(i.scriptAttrs || {}).prop({
                            charset: i.scriptCharset,
                            src: i.url
                        }).on("load error", l = function (D) {
                            o.remove(), l = null, D && g(D.type === "error" ? 404 : 200, D.type)
                        }), S.head.appendChild(o[0])
                    }, abort: function () {
                        l && l()
                    }
                }
            }
        });
        var Fa = [], Vo = /(=)\?(?=&|$)|\?\?/;
        c.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var i = Fa.pop() || c.expando + "_" + Ca.guid++;
                return this[i] = !0, i
            }
        }), c.ajaxPrefilter("json jsonp", function (i, o, l) {
            var h, g, D,
                m = i.jsonp !== !1 && (Vo.test(i.url) ? "url" : typeof i.data == "string" && (i.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Vo.test(i.data) && "data");
            if (m || i.dataTypes[0] === "jsonp") return h = i.jsonpCallback = x(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, m ? i[m] = i[m].replace(Vo, "$1" + h) : i.jsonp !== !1 && (i.url += (Ho.test(i.url) ? "&" : "?") + i.jsonp + "=" + h), i.converters["script json"] = function () {
                return D || c.error(h + " was not called"), D[0]
            }, i.dataTypes[0] = "json", g = e[h], e[h] = function () {
                D = arguments
            }, l.always(function () {
                g === void 0 ? c(e).removeProp(h) : e[h] = g, i[h] && (i.jsonpCallback = o.jsonpCallback, Fa.push(h)), D && x(g) && g(D[0]), D = g = void 0
            }), "script"
        }), T.createHTMLDocument = function () {
            var i = S.implementation.createHTMLDocument("").body;
            return i.innerHTML = "<form></form><form></form>", i.childNodes.length === 2
        }(), c.parseHTML = function (i, o, l) {
            if (typeof i != "string") return [];
            typeof o == "boolean" && (l = o, o = !1);
            var h, g, D;
            return o || (T.createHTMLDocument ? (o = S.implementation.createHTMLDocument(""), h = o.createElement("base"), h.href = S.location.href, o.head.appendChild(h)) : o = S), g = pe.exec(i), D = !l && [], g ? [o.createElement(g[1])] : (g = bn([i], o, D), D && D.length && c(D).remove(), c.merge([], g.childNodes))
        }, c.fn.load = function (i, o, l) {
            var h, g, D, m = this, E = i.indexOf(" ");
            return E > -1 && (h = jr(i.slice(E)), i = i.slice(0, E)), x(o) ? (l = o, o = void 0) : o && typeof o == "object" && (g = "POST"), m.length > 0 && c.ajax({
                url: i,
                type: g || "GET",
                dataType: "html",
                data: o
            }).done(function (F) {
                D = arguments, m.html(h ? c("<div>").append(c.parseHTML(F)).find(h) : F)
            }).always(l && function (F, k) {
                m.each(function () {
                    l.apply(this, D || [F.responseText, k, F])
                })
            }), this
        }, c.expr.pseudos.animated = function (i) {
            return c.grep(c.timers, function (o) {
                return i === o.elem
            }).length
        }, c.offset = {
            setOffset: function (i, o, l) {
                var h, g, D, m, E, F, k, I = c.css(i, "position"), V = c(i), L = {};
                I === "static" && (i.style.position = "relative"), E = V.offset(), D = c.css(i, "top"), F = c.css(i, "left"), k = (I === "absolute" || I === "fixed") && (D + F).indexOf("auto") > -1, k ? (h = V.position(), m = h.top, g = h.left) : (m = parseFloat(D) || 0, g = parseFloat(F) || 0), x(o) && (o = o.call(i, l, c.extend({}, E))), o.top != null && (L.top = o.top - E.top + m), o.left != null && (L.left = o.left - E.left + g), "using" in o ? o.using.call(i, L) : V.css(L)
            }
        }, c.fn.extend({
            offset: function (i) {
                if (arguments.length) return i === void 0 ? this : this.each(function (g) {
                    c.offset.setOffset(this, i, g)
                });
                var o, l, h = this[0];
                if (!!h) return h.getClientRects().length ? (o = h.getBoundingClientRect(), l = h.ownerDocument.defaultView, {
                    top: o.top + l.pageYOffset,
                    left: o.left + l.pageXOffset
                }) : {top: 0, left: 0}
            }, position: function () {
                if (!!this[0]) {
                    var i, o, l, h = this[0], g = {top: 0, left: 0};
                    if (c.css(h, "position") === "fixed") o = h.getBoundingClientRect(); else {
                        for (o = this.offset(), l = h.ownerDocument, i = h.offsetParent || l.documentElement; i && (i === l.body || i === l.documentElement) && c.css(i, "position") === "static";) i = i.parentNode;
                        i && i !== h && i.nodeType === 1 && (g = c(i).offset(), g.top += c.css(i, "borderTopWidth", !0), g.left += c.css(i, "borderLeftWidth", !0))
                    }
                    return {
                        top: o.top - g.top - c.css(h, "marginTop", !0),
                        left: o.left - g.left - c.css(h, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var i = this.offsetParent; i && c.css(i, "position") === "static";) i = i.offsetParent;
                    return i || Nt
                })
            }
        }), c.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (i, o) {
            var l = o === "pageYOffset";
            c.fn[i] = function (h) {
                return Et(this, function (g, D, m) {
                    var E;
                    if (A(g) ? E = g : g.nodeType === 9 && (E = g.defaultView), m === void 0) return E ? E[o] : g[D];
                    E ? E.scrollTo(l ? E.pageXOffset : m, l ? m : E.pageYOffset) : g[D] = m
                }, i, h, arguments.length)
            }
        }), c.each(["top", "left"], function (i, o) {
            c.cssHooks[o] = or(T.pixelPosition, function (l, h) {
                if (h) return h = Ye(l, o), _t.test(h) ? c(l).position()[o] + "px" : h
            })
        }), c.each({Height: "height", Width: "width"}, function (i, o) {
            c.each({padding: "inner" + i, content: o, "": "outer" + i}, function (l, h) {
                c.fn[h] = function (g, D) {
                    var m = arguments.length && (l || typeof g != "boolean"),
                        E = l || (g === !0 || D === !0 ? "margin" : "border");
                    return Et(this, function (F, k, I) {
                        var V;
                        return A(F) ? h.indexOf("outer") === 0 ? F["inner" + i] : F.document.documentElement["client" + i] : F.nodeType === 9 ? (V = F.documentElement, Math.max(F.body["scroll" + i], V["scroll" + i], F.body["offset" + i], V["offset" + i], V["client" + i])) : I === void 0 ? c.css(F, k, E) : c.style(F, k, I, E)
                    }, o, m ? g : void 0, m)
                }
            })
        }), c.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, o) {
            c.fn[o] = function (l) {
                return this.on(o, l)
            }
        }), c.fn.extend({
            bind: function (i, o, l) {
                return this.on(i, null, o, l)
            }, unbind: function (i, o) {
                return this.off(i, null, o)
            }, delegate: function (i, o, l, h) {
                return this.on(o, i, l, h)
            }, undelegate: function (i, o, l) {
                return arguments.length === 1 ? this.off(i, "**") : this.off(o, i || "**", l)
            }, hover: function (i, o) {
                return this.mouseenter(i).mouseleave(o || i)
            }
        }), c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (i, o) {
            c.fn[o] = function (l, h) {
                return arguments.length > 0 ? this.on(o, null, l, h) : this.trigger(o)
            }
        });
        var Rc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        c.proxy = function (i, o) {
            var l, h, g;
            if (typeof o == "string" && (l = i[o], o = i, i = l), !!x(i)) return h = u.call(arguments, 2), g = function () {
                return i.apply(o || this, h.concat(u.call(arguments)))
            }, g.guid = i.guid = i.guid || c.guid++, g
        }, c.holdReady = function (i) {
            i ? c.readyWait++ : c.ready(!0)
        }, c.isArray = Array.isArray, c.parseJSON = JSON.parse, c.nodeName = K, c.isFunction = x, c.isWindow = A, c.camelCase = ze, c.type = N, c.now = Date.now, c.isNumeric = function (i) {
            var o = c.type(i);
            return (o === "number" || o === "string") && !isNaN(i - parseFloat(i))
        }, c.trim = function (i) {
            return i == null ? "" : (i + "").replace(Rc, "")
        };
        var Ic = e.jQuery, jc = e.$;
        return c.noConflict = function (i) {
            return e.$ === c && (e.$ = jc), i && e.jQuery === c && (e.jQuery = Ic), c
        }, typeof t == "undefined" && (e.jQuery = e.$ = c), c
    })
})(lp);
Ut.registerPlugin(Ro, zi, hi);
Ut.registerPlugin(ku);
Ut.registerPlugin(Se);
Ut.registerPlugin(Dc);
let kf = 0, ms = !0,
    cp = Ut.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 20, ease: "linear"}).totalProgress(.5);
Ut.set(".marquee__inner", {xPercent: -50});
window.addEventListener("scroll", function () {
    window.pageYOffset > kf ? ms = !0 : ms = !1, Ut.to(cp, {timeScale: ms ? 1 : -1}), kf = window.pageYOffset
});
let hp = document.querySelectorAll("#build-svg"), dp = document.querySelectorAll("#tree-svg");
Ut.timeline({onComplete: () => pp.play()}).set("#red-car", {opacity: 0}).set("#yellow-car", {opacity: 0}).set("#blue-car", {opacity: 0}).from(".title h1", {
    y: -100,
    opacity: 0,
    duration: 1
}).from(hp, {y: -100, stagger: .2, opacity: 0, duration: 2}).from(dp, {
    y: -100,
    stagger: .2,
    opacity: 0,
    duration: 1
}, "<0.5").from("#road-svg", {y: -100, stagger: .2, opacity: 0, duration: .5});
let pp = Ut.timeline({
    repeat: -1,
    paused: !0,
    onStart: () => gp.play()
}).to(".title h1", {scale: 1.2}).to(".title h1", {scale: 1});
Ut.timeline({repeat: -1}).to(".Emoji", {text: "\u{1F600}", duration: .6}).to(".Emoji", {
    text: "\u{1F604}",
    duration: .6
}).to(".Emoji", {text: "\u{1F601}", duration: .6}).to(".Emoji", {
    text: "\u{1F606}",
    duration: .6
}).to(".Emoji", {text: "\u{1F605}", duration: .6}).to(".Emoji", {
    text: "\u{1F923}",
    duration: .6
}).to(".Emoji", {text: "\u{1F602}", duration: .6}).to(".Emoji", {text: "\u{1F643}", duration: .6});
let gp = Ut.timeline({paused: !0}).set("#red-car", {opacity: 1}).set("#yellow-car", {opacity: 1}).set("#blue-car", {opacity: 1}).to("#red-car", {
    duration: 6,
    motionPath: {path: "#red-path", align: "#red-car", alignOrigin: [3.5, 5.5]},
    repeat: -1
}).to("#yellow-car", {
    duration: 6,
    motionPath: {path: "#yellow-path", align: "#yellow-path", alignOrigin: [.5, .5]},
    repeat: -1
}, "<").to("#blue-car", {
    duration: 6,
    motionPath: {path: "#blue-path", align: "#blue-path", alignOrigin: [.5, .5]},
    repeat: -1
}, "+=2"), Dp = Ut.timeline({paused: !0}).set("nav", {display: "flex", y: -100}).to("nav", {opacity: 1, y: 0});
Se.create({trigger: ".hero", start: "top top", end: "bottom 40%", animation: Dp, scrub: 1.5});
let _p = Ut.timeline({paused: !0}).from(".avatar", {x: -200, opacity: 0, duration: 1}).from(".text-content", {
    x: 200,
    opacity: 0,
    duration: 1
}, "<");
Se.create({trigger: ".moreContent", start: "top 80%", end: "bottom 80%", animation: _p, scrub: 1});
let yp = Ut.timeline({paused: !0}).to(".art-text-1", {y: 100, duration: 1, x: 100}).to(".art-text-2", {
    y: -100,
    duration: 1,
    x: -100
}, "<");
Se.create({trigger: ".art-text", start: "top 50%", end: "bottom 70%", animation: yp, scrub: 1});
