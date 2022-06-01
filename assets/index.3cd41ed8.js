const Jl = function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver(i => {
        for (const o of i) if (o.type === "childList") for (const f of o.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && n(f)
    }).observe(document, {childList: !0, subtree: !0});

    function r(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? o.credentials = "include" : i.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function n(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = r(i);
        fetch(i.href, o)
    }
};
Jl();

function ur(h) {
    if (h === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return h
}

function Wa(h, e) {
    h.prototype = Object.create(e.prototype), h.prototype.constructor = h, h.__proto__ = e
}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Dn = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
    xi = {duration: .5, overwrite: !1, delay: 0}, gs, En = 1e8, He = 1 / En, Uo = Math.PI * 2, ec = Uo / 4, tc = 0,
    $a = Math.sqrt, nc = Math.cos, rc = Math.sin, xt = function (e) {
        return typeof e == "string"
    }, Ct = function (e) {
        return typeof e == "function"
    }, cr = function (e) {
        return typeof e == "number"
    }, Ds = function (e) {
        return typeof e == "undefined"
    }, hr = function (e) {
        return typeof e == "object"
    }, nn = function (e) {
        return e !== !1
    }, Xa = function () {
        return typeof window != "undefined"
    }, Eu = function (e) {
        return Ct(e) || xt(e)
    }, Ya = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {
    }, Nt = Array.isArray, Go = /(?:-?\.?\d|\.)+/gi, Va = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    hi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Oo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ua = /[+-]=-?[.\d]+/,
    Ga = /[^,'"\[\]\s]+/gi, ic = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ze, Vn, Qo, _s, _n = {}, Qu = {}, Qa,
    Ka = function (e) {
        return (Qu = ni(e, _n)) && Wn
    }, ys = function (e, r) {
        return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()")
    }, Ku = function (e, r) {
        return !r && console.warn(e)
    }, Za = function (e, r) {
        return e && (_n[e] = r) && Qu && (Qu[e] = r) || _n
    }, nu = function () {
        return 0
    }, ms = {}, br = [], Ko = {}, Ja, hn = {}, Mo = {}, ia = 30, zu = [], vs = "", Cs = function (e) {
        var r = e[0], n, i;
        if (hr(r) || Ct(r) || (e = [e]), !(n = (r._gsap || {}).harness)) {
            for (i = zu.length; i-- && !zu[i].targetTest(r);) ;
            n = zu[i]
        }
        for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new xf(e[i], n))) || e.splice(i, 1);
        return e
    }, Kr = function (e) {
        return e._gsap || Cs(Fn(e))[0]._gsap
    }, ef = function (e, r, n) {
        return (n = e[r]) && Ct(n) ? e[r]() : Ds(n) && e.getAttribute && e.getAttribute(r) || n
    }, rn = function (e, r) {
        return (e = e.split(",")).forEach(r) || e
    }, st = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, Ot = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0
    }, Di = function (e, r) {
        var n = r.charAt(0), i = parseFloat(r.substr(2));
        return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
    }, uc = function (e, r) {
        for (var n = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < n;) ;
        return i < n
    }, Zu = function () {
        var e = br.length, r = br.slice(0), n, i;
        for (Ko = {}, br.length = 0, n = 0; n < e; n++) i = r[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    }, tf = function (e, r, n, i) {
        br.length && Zu(), e.render(r, n, i), br.length && Zu()
    }, nf = function (e) {
        var r = parseFloat(e);
        return (r || r === 0) && (e + "").match(Ga).length < 2 ? r : xt(e) ? e.trim() : e
    }, rf = function (e) {
        return e
    }, Pn = function (e, r) {
        for (var n in r) n in e || (e[n] = r[n]);
        return e
    }, oc = function (e) {
        return function (r, n) {
            for (var i in n) i in r || i === "duration" && e || i === "ease" || (r[i] = n[i])
        }
    }, ni = function (e, r) {
        for (var n in r) e[n] = r[n];
        return e
    }, ua = function h(e, r) {
        for (var n in r) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = hr(r[n]) ? h(e[n] || (e[n] = {}), r[n]) : r[n]);
        return e
    }, Ju = function (e, r) {
        var n = {}, i;
        for (i in e) i in r || (n[i] = e[i]);
        return n
    }, Yi = function (e) {
        var r = e.parent || Ze, n = e.keyframes ? oc(Nt(e.keyframes)) : Pn;
        if (nn(e.inherit)) for (; r;) n(e, r.vars.defaults), r = r.parent || r._dp;
        return e
    }, sc = function (e, r) {
        for (var n = e.length, i = n === r.length; i && n-- && e[n] === r[n];) ;
        return n < 0
    }, uf = function (e, r, n, i, o) {
        n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
        var f = e[i], c;
        if (o) for (c = r[o]; f && f[o] > c;) f = f._prev;
        return f ? (r._next = f._next, f._next = r) : (r._next = e[n], e[n] = r), r._next ? r._next._prev = r : e[i] = r, r._prev = f, r.parent = r._dp = e, r
    }, fo = function (e, r, n, i) {
        n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
        var o = r._prev, f = r._next;
        o ? o._next = f : e[n] === r && (e[n] = f), f ? f._prev = o : e[i] === r && (e[i] = o), r._next = r._prev = r.parent = null
    }, fr = function (e, r) {
        e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0
    }, Zr = function (e, r) {
        if (e && (!r || r._end > e._dur || r._start < 0)) for (var n = e; n;) n._dirty = 1, n = n.parent;
        return e
    }, ac = function (e) {
        for (var r = e.parent; r && r.parent;) r._dirty = 1, r.totalDuration(), r = r.parent;
        return e
    }, fc = function h(e) {
        return !e || e._ts && h(e.parent)
    }, oa = function (e) {
        return e._repeat ? bi(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, bi = function (e, r) {
        var n = Math.floor(e /= r);
        return e && n === e ? n - 1 : n
    }, eo = function (e, r) {
        return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    }, lo = function (e) {
        return e._end = Ot(e._start + (e._tDur / Math.abs(e._ts || e._rts || He) || 0))
    }, xs = function (e, r) {
        var n = e._dp;
        return n && n.smoothChildTiming && e._ts && (e._start = Ot(n._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)), lo(e), n._dirty || Zr(n, e)), e
    }, of = function (e, r) {
        var n;
        if ((r._time || r._initted && !r._dur) && (n = eo(e.rawTime(), r), (!r._dur || pu(0, r.totalDuration(), n) - r._tTime > He) && r.render(n, !0)), Zr(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration()) for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
            e._zTime = -He
        }
    }, Gn = function (e, r, n, i) {
        return r.parent && fr(r), r._start = Ot((cr(n) ? n : n || e !== Ze ? xn(e, n, r) : e._time) + r._delay), r._end = Ot(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), uf(e, r, "_first", "_last", e._sort ? "_start" : 0), Zo(r) || (e._recent = r), i || of(e, r), e
    }, sf = function (e, r) {
        return (_n.ScrollTrigger || ys("scrollTrigger", r)) && _n.ScrollTrigger.create(r, e)
    }, af = function (e, r, n, i) {
        if (Ts(e, r), !e._initted) return 1;
        if (!n && e._pt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ja !== dn.frame) return br.push(e), e._lazy = [r, i], 1
    }, lc = function h(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || h(r))
    }, Zo = function (e) {
        var r = e.data;
        return r === "isFromStart" || r === "isStart"
    }, cc = function (e, r, n, i) {
        var o = e.ratio,
            f = r < 0 || !r && (!e._start && lc(e) && !(!e._initted && Zo(e)) || (e._ts < 0 || e._dp._ts < 0) && !Zo(e)) ? 0 : 1,
            c = e._rDelay, g = 0, _, m, T;
        if (c && e._repeat && (g = pu(0, e._tDur, r), m = bi(g, c), e._yoyo && m & 1 && (f = 1 - f), m !== bi(e._tTime, c) && (o = 1 - f, e.vars.repeatRefresh && e._initted && e.invalidate())), f !== o || i || e._zTime === He || !r && e._zTime) {
            if (!e._initted && af(e, r, i, n)) return;
            for (T = e._zTime, e._zTime = r || (n ? He : 0), n || (n = r && !T), e.ratio = f, e._from && (f = 1 - f), e._time = 0, e._tTime = g, _ = e._pt; _;) _.r(f, _.d), _ = _._next;
            e._startAt && r < 0 && e._startAt.render(r, !0, !0), e._onUpdate && !n && Sn(e, "onUpdate"), g && e._repeat && !n && e.parent && Sn(e, "onRepeat"), (r >= e._tDur || r < 0) && e.ratio === f && (f && fr(e, 1), n || (Sn(e, f ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = r)
    }, hc = function (e, r, n) {
        var i;
        if (n > r) for (i = e._first; i && i._start <= n;) {
            if (i.data === "isPause" && i._start > r) return i;
            i = i._next
        } else for (i = e._last; i && i._start >= n;) {
            if (i.data === "isPause" && i._start < r) return i;
            i = i._prev
        }
    }, Ti = function (e, r, n, i) {
        var o = e._repeat, f = Ot(r) || 0, c = e._tTime / e._tDur;
        return c && !i && (e._time *= f / e._dur), e._dur = f, e._tDur = o ? o < 0 ? 1e10 : Ot(f * (o + 1) + e._rDelay * o) : f, c > 0 && !i ? xs(e, e._tTime = e._tDur * c) : e.parent && lo(e), n || Zr(e.parent, e), e
    }, sa = function (e) {
        return e instanceof tn ? Zr(e) : Ti(e, e._dur)
    }, dc = {_start: 0, endTime: nu, totalDuration: nu}, xn = function h(e, r, n) {
        var i = e.labels, o = e._recent || dc, f = e.duration() >= En ? o.endTime(!1) : e._dur, c, g, _;
        return xt(r) && (isNaN(r) || r in i) ? (g = r.charAt(0), _ = r.substr(-1) === "%", c = r.indexOf("="), g === "<" || g === ">" ? (c >= 0 && (r = r.replace(/=/, "")), (g === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (_ ? (c < 0 ? o : n).totalDuration() / 100 : 1)) : c < 0 ? (r in i || (i[r] = f), i[r]) : (g = parseFloat(r.charAt(c - 1) + r.substr(c + 1)), _ && n && (g = g / 100 * (Nt(n) ? n[0] : n).totalDuration()), c > 1 ? h(e, r.substr(0, c - 1), n) + g : f + g)) : r == null ? f : +r
    }, Vi = function (e, r, n) {
        var i = cr(r[1]), o = (i ? 2 : 1) + (e < 2 ? 0 : 1), f = r[o], c, g;
        if (i && (f.duration = r[1]), f.parent = n, e) {
            for (c = f, g = n; g && !("immediateRender" in c);) c = g.vars.defaults || {}, g = nn(g.vars.inherit) && g.parent;
            f.immediateRender = nn(c.immediateRender), e < 2 ? f.runBackwards = 1 : f.startAt = r[o - 1]
        }
        return new vt(r[0], f, r[o + 1])
    }, Pr = function (e, r) {
        return e || e === 0 ? r(e) : r
    }, pu = function (e, r, n) {
        return n < e ? e : n > r ? r : n
    }, Mt = function (e, r) {
        return !xt(e) || !(r = ic.exec(e)) ? "" : r[1]
    }, pc = function (e, r, n) {
        return Pr(n, function (i) {
            return pu(e, r, i)
        })
    }, Jo = [].slice, ff = function (e, r) {
        return e && hr(e) && "length" in e && (!r && !e.length || e.length - 1 in e && hr(e[0])) && !e.nodeType && e !== Vn
    }, gc = function (e, r, n) {
        return n === void 0 && (n = []), e.forEach(function (i) {
            var o;
            return xt(i) && !r || ff(i, 1) ? (o = n).push.apply(o, Fn(i)) : n.push(i)
        }) || n
    }, Fn = function (e, r, n) {
        return xt(e) && !n && (Qo || !wi()) ? Jo.call((r || _s).querySelectorAll(e), 0) : Nt(e) ? gc(e, n) : ff(e) ? Jo.call(e, 0) : e ? [e] : []
    }, Dc = function (e) {
        return e = Fn(e)[0] || Ku("Invalid scope") || {}, function (r) {
            var n = e.current || e.nativeElement || e;
            return Fn(r, n.querySelectorAll ? n : n === e ? Ku("Invalid scope") || _s.createElement("div") : e)
        }
    }, lf = function (e) {
        return e.sort(function () {
            return .5 - Math.random()
        })
    }, cf = function (e) {
        if (Ct(e)) return e;
        var r = hr(e) ? e : {each: e}, n = Jr(r.ease), i = r.from || 0, o = parseFloat(r.base) || 0, f = {},
            c = i > 0 && i < 1, g = isNaN(i) || c, _ = r.axis, m = i, T = i;
        return xt(i) ? m = T = {
            center: .5,
            edges: .5,
            end: 1
        }[i] || 0 : !c && g && (m = i[0], T = i[1]), function (F, C, E) {
            var v = (E || r).length, O = f[v], A, $, R, z, W, a, q, G, V;
            if (!O) {
                if (V = r.grid === "auto" ? 0 : (r.grid || [1, En])[1], !V) {
                    for (q = -En; q < (q = E[V++].getBoundingClientRect().left) && V < v;) ;
                    V--
                }
                for (O = f[v] = [], A = g ? Math.min(V, v) * m - .5 : i % V, $ = V === En ? 0 : g ? v * T / V - .5 : i / V | 0, q = 0, G = En, a = 0; a < v; a++) R = a % V - A, z = $ - (a / V | 0), O[a] = W = _ ? Math.abs(_ === "y" ? z : R) : $a(R * R + z * z), W > q && (q = W), W < G && (G = W);
                i === "random" && lf(O), O.max = q - G, O.min = G, O.v = v = (parseFloat(r.amount) || parseFloat(r.each) * (V > v ? v - 1 : _ ? _ === "y" ? v / V : V : Math.max(V, v / V)) || 0) * (i === "edges" ? -1 : 1), O.b = v < 0 ? o - v : o, O.u = Mt(r.amount || r.each) || 0, n = n && v < 0 ? mf(n) : n
            }
            return v = (O[F] - O.min) / O.max || 0, Ot(O.b + (n ? n(v) : v) * O.v) + O.u
        }
    }, es = function (e) {
        var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (n) {
            var i = Math.round(parseFloat(n) / e) * e * r;
            return (i - i % 1) / r + (cr(n) ? 0 : Mt(n))
        }
    }, hf = function (e, r) {
        var n = Nt(e), i, o;
        return !n && hr(e) && (i = n = e.radius || En, e.values ? (e = Fn(e.values), (o = !cr(e[0])) && (i *= i)) : e = es(e.increment)), Pr(r, n ? Ct(e) ? function (f) {
            return o = e(f), Math.abs(o - f) <= i ? o : f
        } : function (f) {
            for (var c = parseFloat(o ? f.x : f), g = parseFloat(o ? f.y : 0), _ = En, m = 0, T = e.length, F, C; T--;) o ? (F = e[T].x - c, C = e[T].y - g, F = F * F + C * C) : F = Math.abs(e[T] - c), F < _ && (_ = F, m = T);
            return m = !i || _ <= i ? e[m] : f, o || m === f || cr(f) ? m : m + Mt(f)
        } : es(e))
    }, df = function (e, r, n, i) {
        return Pr(Nt(e) ? !r : n === !0 ? !!(n = 0) : !i, function () {
            return Nt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (r - e + n * .99)) / n) * n * i) / i
        })
    }, _c = function () {
        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
        return function (i) {
            return r.reduce(function (o, f) {
                return f(o)
            }, i)
        }
    }, yc = function (e, r) {
        return function (n) {
            return e(parseFloat(n)) + (r || Mt(n))
        }
    }, mc = function (e, r, n) {
        return gf(e, r, 0, 1, n)
    }, pf = function (e, r, n) {
        return Pr(n, function (i) {
            return e[~~r(i)]
        })
    }, vc = function h(e, r, n) {
        var i = r - e;
        return Nt(e) ? pf(e, h(0, e.length), r) : Pr(n, function (o) {
            return (i + (o - e) % i) % i + e
        })
    }, Cc = function h(e, r, n) {
        var i = r - e, o = i * 2;
        return Nt(e) ? pf(e, h(0, e.length - 1), r) : Pr(n, function (f) {
            return f = (o + (f - e) % o) % o || 0, e + (f > i ? o - f : f)
        })
    }, ru = function (e) {
        for (var r = 0, n = "", i, o, f, c; ~(i = e.indexOf("random(", r));) f = e.indexOf(")", i), c = e.charAt(i + 7) === "[", o = e.substr(i + 7, f - i - 7).match(c ? Ga : Go), n += e.substr(r, i - r) + df(c ? o : +o[0], c ? 0 : +o[1], +o[2] || 1e-5), r = f + 1;
        return n + e.substr(r, e.length - r)
    }, gf = function (e, r, n, i, o) {
        var f = r - e, c = i - n;
        return Pr(o, function (g) {
            return n + ((g - e) / f * c || 0)
        })
    }, xc = function h(e, r, n, i) {
        var o = isNaN(e + r) ? 0 : function (C) {
            return (1 - C) * e + C * r
        };
        if (!o) {
            var f = xt(e), c = {}, g, _, m, T, F;
            if (n === !0 && (i = 1) && (n = null), f) e = {p: e}, r = {p: r}; else if (Nt(e) && !Nt(r)) {
                for (m = [], T = e.length, F = T - 2, _ = 1; _ < T; _++) m.push(h(e[_ - 1], e[_]));
                T--, o = function (E) {
                    E *= T;
                    var v = Math.min(F, ~~E);
                    return m[v](E - v)
                }, n = r
            } else i || (e = ni(Nt(e) ? [] : {}, e));
            if (!m) {
                for (g in r) bs.call(c, e, g, "get", r[g]);
                o = function (E) {
                    return Fs(E, c) || (f ? e.p : e)
                }
            }
        }
        return Pr(n, o)
    }, aa = function (e, r, n) {
        var i = e.labels, o = En, f, c, g;
        for (f in i) c = i[f] - r, c < 0 == !!n && c && o > (c = Math.abs(c)) && (g = f, o = c);
        return g
    }, Sn = function (e, r, n) {
        var i = e.vars, o = i[r], f, c;
        if (!!o) return f = i[r + "Params"], c = i.callbackScope || e, n && br.length && Zu(), f ? o.apply(c, f) : o.call(c)
    }, zi = function (e) {
        return fr(e), e.scrollTrigger && e.scrollTrigger.kill(!1), e.progress() < 1 && Sn(e, "onInterrupt"), e
    }, di, bc = function (e) {
        e = !e.name && e.default || e;
        var r = e.name, n = Ct(e), i = r && !n && e.init ? function () {
                this._props = []
            } : e, o = {init: nu, render: Fs, add: bs, kill: jc, modifier: Ic, rawVars: 0},
            f = {targetTest: 0, get: 0, getSetter: Es, aliases: {}, register: 0};
        if (wi(), e !== i) {
            if (hn[r]) return;
            Pn(i, Pn(Ju(e, o), f)), ni(i.prototype, ni(o, Ju(e, f))), hn[i.prop = r] = i, e.targetTest && (zu.push(i), ms[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
        }
        Za(r, i), e.register && e.register(Wn, i, un)
    }, ze = 255, Hi = {
        aqua: [0, ze, ze],
        lime: [0, ze, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, ze],
        navy: [0, 0, 128],
        white: [ze, ze, ze],
        olive: [128, 128, 0],
        yellow: [ze, ze, 0],
        orange: [ze, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [ze, 0, 0],
        pink: [ze, 192, 203],
        cyan: [0, ze, ze],
        transparent: [ze, ze, ze, 0]
    }, No = function (e, r, n) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? r + (n - r) * e * 6 : e < .5 ? n : e * 3 < 2 ? r + (n - r) * (2 / 3 - e) * 6 : r) * ze + .5 | 0
    }, Df = function (e, r, n) {
        var i = e ? cr(e) ? [e >> 16, e >> 8 & ze, e & ze] : 0 : Hi.black, o, f, c, g, _, m, T, F, C, E;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Hi[e]) i = Hi[e]; else if (e.charAt(0) === "#") {
                if (e.length < 6 && (o = e.charAt(1), f = e.charAt(2), c = e.charAt(3), e = "#" + o + o + f + f + c + c + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & ze, i & ze, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & ze, e & ze]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = E = e.match(Go), !r) g = +i[0] % 360 / 360, _ = +i[1] / 100, m = +i[2] / 100, f = m <= .5 ? m * (_ + 1) : m + _ - m * _, o = m * 2 - f, i.length > 3 && (i[3] *= 1), i[0] = No(g + 1 / 3, o, f), i[1] = No(g, o, f), i[2] = No(g - 1 / 3, o, f); else if (~e.indexOf("=")) return i = e.match(Va), n && i.length < 4 && (i[3] = 1), i
            } else i = e.match(Go) || Hi.transparent;
            i = i.map(Number)
        }
        return r && !E && (o = i[0] / ze, f = i[1] / ze, c = i[2] / ze, T = Math.max(o, f, c), F = Math.min(o, f, c), m = (T + F) / 2, T === F ? g = _ = 0 : (C = T - F, _ = m > .5 ? C / (2 - T - F) : C / (T + F), g = T === o ? (f - c) / C + (f < c ? 6 : 0) : T === f ? (c - o) / C + 2 : (o - f) / C + 4, g *= 60), i[0] = ~~(g + .5), i[1] = ~~(_ * 100 + .5), i[2] = ~~(m * 100 + .5)), n && i.length < 4 && (i[3] = 1), i
    }, _f = function (e) {
        var r = [], n = [], i = -1;
        return e.split(Tr).forEach(function (o) {
            var f = o.match(hi) || [];
            r.push.apply(r, f), n.push(i += f.length + 1)
        }), r.c = n, r
    }, fa = function (e, r, n) {
        var i = "", o = (e + i).match(Tr), f = r ? "hsla(" : "rgba(", c = 0, g, _, m, T;
        if (!o) return e;
        if (o = o.map(function (F) {
            return (F = Df(F, r, 1)) && f + (r ? F[0] + "," + F[1] + "%," + F[2] + "%," + F[3] : F.join(",")) + ")"
        }), n && (m = _f(e), g = n.c, g.join(i) !== m.c.join(i))) for (_ = e.replace(Tr, "1").split(hi), T = _.length - 1; c < T; c++) i += _[c] + (~g.indexOf(c) ? o.shift() || f + "0,0,0,0)" : (m.length ? m : o.length ? o : n).shift());
        if (!_) for (_ = e.split(Tr), T = _.length - 1; c < T; c++) i += _[c] + o[c];
        return i + _[T]
    }, Tr = function () {
        var h = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
        for (e in Hi) h += "|" + e + "\\b";
        return new RegExp(h + ")", "gi")
    }(), Tc = /hsl[a]?\(/, yf = function (e) {
        var r = e.join(" "), n;
        if (Tr.lastIndex = 0, Tr.test(r)) return n = Tc.test(r), e[1] = fa(e[1], n), e[0] = fa(e[0], n, _f(e[1])), !0
    }, iu, dn = function () {
        var h = Date.now, e = 500, r = 33, n = h(), i = n, o = 1e3 / 240, f = o, c = [], g, _, m, T, F, C,
            E = function v(O) {
                var A = h() - i, $ = O === !0, R, z, W, a;
                if (A > e && (n += A - r), i += A, W = i - n, R = W - f, (R > 0 || $) && (a = ++T.frame, F = W - T.time * 1e3, T.time = W = W / 1e3, f += R + (R >= o ? 4 : o - R), z = 1), $ || (g = _(v)), z) for (C = 0; C < c.length; C++) c[C](W, F, a, O)
            };
        return T = {
            time: 0, frame: 0, tick: function () {
                E(!0)
            }, deltaRatio: function (O) {
                return F / (1e3 / (O || 60))
            }, wake: function () {
                Qa && (!Qo && Xa() && (Vn = Qo = window, _s = Vn.document || {}, _n.gsap = Wn, (Vn.gsapVersions || (Vn.gsapVersions = [])).push(Wn.version), Ka(Qu || Vn.GreenSockGlobals || !Vn.gsap && Vn || {}), m = Vn.requestAnimationFrame), g && T.sleep(), _ = m || function (O) {
                    return setTimeout(O, f - T.time * 1e3 + 1 | 0)
                }, iu = 1, E(2))
            }, sleep: function () {
                (m ? Vn.cancelAnimationFrame : clearTimeout)(g), iu = 0, _ = nu
            }, lagSmoothing: function (O, A) {
                e = O || 1 / He, r = Math.min(A, e, 0)
            }, fps: function (O) {
                o = 1e3 / (O || 240), f = T.time * 1e3 + o
            }, add: function (O, A, $) {
                var R = A ? function (z, W, a, q) {
                    O(z, W, a, q), T.remove(R)
                } : O;
                return T.remove(O), c[$ ? "unshift" : "push"](R), wi(), R
            }, remove: function (O, A) {
                ~(A = c.indexOf(O)) && c.splice(A, 1) && C >= A && C--
            }, _listeners: c
        }, T
    }(), wi = function () {
        return !iu && dn.wake()
    }, xe = {}, wc = /^[\d.\-M][\d.\-,\s]/, Ec = /["']/g, Fc = function (e) {
        for (var r = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], o = 1, f = n.length, c, g, _; o < f; o++) g = n[o], c = o !== f - 1 ? g.lastIndexOf(",") : g.length, _ = g.substr(0, c), r[i] = isNaN(_) ? _.replace(Ec, "").trim() : +_, i = g.substr(c + 1).trim();
        return r
    }, Sc = function (e) {
        var r = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", r);
        return e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)
    }, Ac = function (e) {
        var r = (e + "").split("("), n = xe[r[0]];
        return n && r.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Fc(r[1])] : Sc(e).split(",").map(nf)) : xe._CE && wc.test(e) ? xe._CE("", e) : n
    }, mf = function (e) {
        return function (r) {
            return 1 - e(1 - r)
        }
    }, vf = function h(e, r) {
        for (var n = e._first, i; n;) n instanceof tn ? h(n, r) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== r && (n.timeline ? h(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
    }, Jr = function (e, r) {
        return e && (Ct(e) ? e : xe[e] || Ac(e)) || r
    }, oi = function (e, r, n, i) {
        n === void 0 && (n = function (g) {
            return 1 - r(1 - g)
        }), i === void 0 && (i = function (g) {
            return g < .5 ? r(g * 2) / 2 : 1 - r((1 - g) * 2) / 2
        });
        var o = {easeIn: r, easeOut: n, easeInOut: i}, f;
        return rn(e, function (c) {
            xe[c] = _n[c] = o, xe[f = c.toLowerCase()] = n;
            for (var g in o) xe[f + (g === "easeIn" ? ".in" : g === "easeOut" ? ".out" : ".inOut")] = xe[c + "." + g] = o[g]
        }), o
    }, Cf = function (e) {
        return function (r) {
            return r < .5 ? (1 - e(1 - r * 2)) / 2 : .5 + e((r - .5) * 2) / 2
        }
    }, Bo = function h(e, r, n) {
        var i = r >= 1 ? r : 1, o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1), f = o / Uo * (Math.asin(1 / i) || 0),
            c = function (m) {
                return m === 1 ? 1 : i * Math.pow(2, -10 * m) * rc((m - f) * o) + 1
            }, g = e === "out" ? c : e === "in" ? function (_) {
                return 1 - c(1 - _)
            } : Cf(c);
        return o = Uo / o, g.config = function (_, m) {
            return h(e, _, m)
        }, g
    }, Lo = function h(e, r) {
        r === void 0 && (r = 1.70158);
        var n = function (f) {
            return f ? --f * f * ((r + 1) * f + r) + 1 : 0
        }, i = e === "out" ? n : e === "in" ? function (o) {
            return 1 - n(1 - o)
        } : Cf(n);
        return i.config = function (o) {
            return h(e, o)
        }, i
    };
rn("Linear,Quad,Cubic,Quart,Quint,Strong", function (h, e) {
    var r = e < 5 ? e + 1 : e;
    oi(h + ",Power" + (r - 1), e ? function (n) {
        return Math.pow(n, r)
    } : function (n) {
        return n
    }, function (n) {
        return 1 - Math.pow(1 - n, r)
    }, function (n) {
        return n < .5 ? Math.pow(n * 2, r) / 2 : 1 - Math.pow((1 - n) * 2, r) / 2
    })
});
xe.Linear.easeNone = xe.none = xe.Linear.easeIn;
oi("Elastic", Bo("in"), Bo("out"), Bo());
(function (h, e) {
    var r = 1 / e, n = 2 * r, i = 2.5 * r, o = function (c) {
        return c < r ? h * c * c : c < n ? h * Math.pow(c - 1.5 / e, 2) + .75 : c < i ? h * (c -= 2.25 / e) * c + .9375 : h * Math.pow(c - 2.625 / e, 2) + .984375
    };
    oi("Bounce", function (f) {
        return 1 - o(1 - f)
    }, o)
})(7.5625, 2.75);
oi("Expo", function (h) {
    return h ? Math.pow(2, 10 * (h - 1)) : 0
});
oi("Circ", function (h) {
    return -($a(1 - h * h) - 1)
});
oi("Sine", function (h) {
    return h === 1 ? 1 : -nc(h * ec) + 1
});
oi("Back", Lo("in"), Lo("out"), Lo());
xe.SteppedEase = xe.steps = _n.SteppedEase = {
    config: function (e, r) {
        e === void 0 && (e = 1);
        var n = 1 / e, i = e + (r ? 0 : 1), o = r ? 1 : 0, f = 1 - He;
        return function (c) {
            return ((i * pu(0, f, c) | 0) + o) * n
        }
    }
};
xi.ease = xe["quad.out"];
rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (h) {
    return vs += h + "," + h + "Params,"
});
var xf = function (e, r) {
    this.id = tc++, e._gsap = this, this.target = e, this.harness = r, this.get = r ? r.get : ef, this.set = r ? r.getSetter : Es
}, uu = function () {
    function h(r) {
        this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, Ti(this, +r.duration, 1, 1), this.data = r.data, iu || dn.wake()
    }

    var e = h.prototype;
    return e.delay = function (n) {
        return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay
    }, e.duration = function (n) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur
    }, e.totalDuration = function (n) {
        return arguments.length ? (this._dirty = 0, Ti(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, e.totalTime = function (n, i) {
        if (wi(), !arguments.length) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
            for (xs(this, n), !o._dp || o.parent || of(o, this); o && o.parent;) o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0), o = o.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Gn(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === He || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), tf(this, n, i)), this
    }, e.time = function (n, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + oa(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time
    }, e.totalProgress = function (n, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, e.progress = function (n, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + oa(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, e.iteration = function (n, i) {
        var o = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (n - 1) * o, i) : this._repeat ? bi(this._tTime, o) + 1 : 1
    }, e.timeScale = function (n) {
        if (!arguments.length) return this._rts === -He ? 0 : this._rts;
        if (this._rts === n) return this;
        var i = this.parent && this._ts ? eo(this.parent._time, this) : this._tTime;
        return this._rts = +n || 0, this._ts = this._ps || n === -He ? 0 : this._rts, this.totalTime(pu(-this._delay, this._tDur, i), !0), lo(this), ac(this)
    }, e.paused = function (n) {
        return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (wi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== He && (this._tTime -= He)))), this) : this._ps
    }, e.startTime = function (n) {
        if (arguments.length) {
            this._start = n;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && Gn(i, this, n - this._delay), this
        }
        return this._start
    }, e.endTime = function (n) {
        return this._start + (nn(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, e.rawTime = function (n) {
        var i = this.parent || this._dp;
        return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? eo(i.rawTime(n), this) : this._tTime : this._tTime
    }, e.globalTime = function (n) {
        for (var i = this, o = arguments.length ? n : i.rawTime(); i;) o = i._start + o / (i._ts || 1), i = i._dp;
        return o
    }, e.repeat = function (n) {
        return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, sa(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, e.repeatDelay = function (n) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = n, sa(this), i ? this.time(i) : this
        }
        return this._rDelay
    }, e.yoyo = function (n) {
        return arguments.length ? (this._yoyo = n, this) : this._yoyo
    }, e.seek = function (n, i) {
        return this.totalTime(xn(this, n), nn(i))
    }, e.restart = function (n, i) {
        return this.play().totalTime(n ? -this._delay : 0, nn(i))
    }, e.play = function (n, i) {
        return n != null && this.seek(n, i), this.reversed(!1).paused(!1)
    }, e.reverse = function (n, i) {
        return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1)
    }, e.pause = function (n, i) {
        return n != null && this.seek(n, i), this.paused(!0)
    }, e.resume = function () {
        return this.paused(!1)
    }, e.reversed = function (n) {
        return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -He : 0)), this) : this._rts < 0
    }, e.invalidate = function () {
        return this._initted = this._act = 0, this._zTime = -He, this
    }, e.isActive = function () {
        var n = this.parent || this._dp, i = this._start, o;
        return !!(!n || this._ts && this._initted && n.isActive() && (o = n.rawTime(!0)) >= i && o < this.endTime(!0) - He)
    }, e.eventCallback = function (n, i, o) {
        var f = this.vars;
        return arguments.length > 1 ? (i ? (f[n] = i, o && (f[n + "Params"] = o), n === "onUpdate" && (this._onUpdate = i)) : delete f[n], this) : f[n]
    }, e.then = function (n) {
        var i = this;
        return new Promise(function (o) {
            var f = Ct(n) ? n : rf, c = function () {
                var _ = i.then;
                i.then = null, Ct(f) && (f = f(i)) && (f.then || f === i) && (i.then = _), o(f), i.then = _
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? c() : i._prom = c
        })
    }, e.kill = function () {
        zi(this)
    }, h
}();
Pn(uu.prototype, {
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
    _zTime: -He,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var tn = function (h) {
    Wa(e, h);

    function e(n, i) {
        var o;
        return n === void 0 && (n = {}), o = h.call(this, n) || this, o.labels = {}, o.smoothChildTiming = !!n.smoothChildTiming, o.autoRemoveChildren = !!n.autoRemoveChildren, o._sort = nn(n.sortChildren), Ze && Gn(n.parent || Ze, ur(o), i), n.reversed && o.reverse(), n.paused && o.paused(!0), n.scrollTrigger && sf(ur(o), n.scrollTrigger), o
    }

    var r = e.prototype;
    return r.to = function (i, o, f) {
        return Vi(0, arguments, this), this
    }, r.from = function (i, o, f) {
        return Vi(1, arguments, this), this
    }, r.fromTo = function (i, o, f, c) {
        return Vi(2, arguments, this), this
    }, r.set = function (i, o, f) {
        return o.duration = 0, o.parent = this, Yi(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new vt(i, o, xn(this, f), 1), this
    }, r.call = function (i, o, f) {
        return Gn(this, vt.delayedCall(0, i, o), f)
    }, r.staggerTo = function (i, o, f, c, g, _, m) {
        return f.duration = o, f.stagger = f.stagger || c, f.onComplete = _, f.onCompleteParams = m, f.parent = this, new vt(i, f, xn(this, g)), this
    }, r.staggerFrom = function (i, o, f, c, g, _, m) {
        return f.runBackwards = 1, Yi(f).immediateRender = nn(f.immediateRender), this.staggerTo(i, o, f, c, g, _, m)
    }, r.staggerFromTo = function (i, o, f, c, g, _, m, T) {
        return c.startAt = f, Yi(c).immediateRender = nn(c.immediateRender), this.staggerTo(i, o, c, g, _, m, T)
    }, r.render = function (i, o, f) {
        var c = this._time, g = this._dirty ? this.totalDuration() : this._tDur, _ = this._dur, m = i <= 0 ? 0 : Ot(i),
            T = this._zTime < 0 != i < 0 && (this._initted || !_), F, C, E, v, O, A, $, R, z, W, a, q;
        if (this !== Ze && m > g && i >= 0 && (m = g), m !== this._tTime || f || T) {
            if (c !== this._time && _ && (m += this._time - c, i += this._time - c), F = m, z = this._start, R = this._ts, A = !R, T && (_ || (c = this._zTime), (i || !o) && (this._zTime = i)), this._repeat) {
                if (a = this._yoyo, O = _ + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(O * 100 + i, o, f);
                if (F = Ot(m % O), m === g ? (v = this._repeat, F = _) : (v = ~~(m / O), v && v === m / O && (F = _, v--), F > _ && (F = _)), W = bi(this._tTime, O), !c && this._tTime && W !== v && (W = v), a && v & 1 && (F = _ - F, q = 1), v !== W && !this._lock) {
                    var G = a && W & 1, V = G === (a && v & 1);
                    if (v < W && (G = !G), c = G ? 0 : _, this._lock = 1, this.render(c || (q ? 0 : Ot(v * O)), o, !_)._lock = 0, this._tTime = m, !o && this.parent && Sn(this, "onRepeat"), this.vars.repeatRefresh && !q && (this.invalidate()._lock = 1), c && c !== this._time || A !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (_ = this._dur, g = this._tDur, V && (this._lock = 2, c = G ? _ : -1e-4, this.render(c, !0), this.vars.repeatRefresh && !q && this.invalidate()), this._lock = 0, !this._ts && !A) return this;
                    vf(this, q)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && ($ = hc(this, Ot(c), Ot(F)), $ && (m -= F - (F = $._start))), this._tTime = m, this._time = F, this._act = !R, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, c = 0), !c && F && !o && (Sn(this, "onStart"), this._tTime !== m)) return this;
            if (F >= c && i >= 0) for (C = this._first; C;) {
                if (E = C._next, (C._act || F >= C._start) && C._ts && $ !== C) {
                    if (C.parent !== this) return this.render(i, o, f);
                    if (C.render(C._ts > 0 ? (F - C._start) * C._ts : (C._dirty ? C.totalDuration() : C._tDur) + (F - C._start) * C._ts, o, f), F !== this._time || !this._ts && !A) {
                        $ = 0, E && (m += this._zTime = -He);
                        break
                    }
                }
                C = E
            } else {
                C = this._last;
                for (var K = i < 0 ? i : F; C;) {
                    if (E = C._prev, (C._act || K <= C._end) && C._ts && $ !== C) {
                        if (C.parent !== this) return this.render(i, o, f);
                        if (C.render(C._ts > 0 ? (K - C._start) * C._ts : (C._dirty ? C.totalDuration() : C._tDur) + (K - C._start) * C._ts, o, f), F !== this._time || !this._ts && !A) {
                            $ = 0, E && (m += this._zTime = K ? -He : He);
                            break
                        }
                    }
                    C = E
                }
            }
            if ($ && !o && (this.pause(), $.render(F >= c ? 0 : -He)._zTime = F >= c ? 1 : -1, this._ts)) return this._start = z, lo(this), this.render(i, o, f);
            this._onUpdate && !o && Sn(this, "onUpdate", !0), (m === g && this._tTime >= this.totalDuration() || !m && c) && (z === this._start || Math.abs(R) !== Math.abs(this._ts)) && (this._lock || ((i || !_) && (m === g && this._ts > 0 || !m && this._ts < 0) && fr(this, 1), !o && !(i < 0 && !c) && (m || c || !g) && (Sn(this, m === g && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < g && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, r.add = function (i, o) {
        var f = this;
        if (cr(o) || (o = xn(this, o, i)), !(i instanceof uu)) {
            if (Nt(i)) return i.forEach(function (c) {
                return f.add(c, o)
            }), this;
            if (xt(i)) return this.addLabel(i, o);
            if (Ct(i)) i = vt.delayedCall(0, i); else return this
        }
        return this !== i ? Gn(this, i, o) : this
    }, r.getChildren = function (i, o, f, c) {
        i === void 0 && (i = !0), o === void 0 && (o = !0), f === void 0 && (f = !0), c === void 0 && (c = -En);
        for (var g = [], _ = this._first; _;) _._start >= c && (_ instanceof vt ? o && g.push(_) : (f && g.push(_), i && g.push.apply(g, _.getChildren(!0, o, f)))), _ = _._next;
        return g
    }, r.getById = function (i) {
        for (var o = this.getChildren(1, 1, 1), f = o.length; f--;) if (o[f].vars.id === i) return o[f]
    }, r.remove = function (i) {
        return xt(i) ? this.removeLabel(i) : Ct(i) ? this.killTweensOf(i) : (fo(this, i), i === this._recent && (this._recent = this._last), Zr(this))
    }, r.totalTime = function (i, o) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ot(dn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), h.prototype.totalTime.call(this, i, o), this._forcing = 0, this) : this._tTime
    }, r.addLabel = function (i, o) {
        return this.labels[i] = xn(this, o), this
    }, r.removeLabel = function (i) {
        return delete this.labels[i], this
    }, r.addPause = function (i, o, f) {
        var c = vt.delayedCall(0, o || nu, f);
        return c.data = "isPause", this._hasPause = 1, Gn(this, c, xn(this, i))
    }, r.removePause = function (i) {
        var o = this._first;
        for (i = xn(this, i); o;) o._start === i && o.data === "isPause" && fr(o), o = o._next
    }, r.killTweensOf = function (i, o, f) {
        for (var c = this.getTweensOf(i, f), g = c.length; g--;) yr !== c[g] && c[g].kill(i, o);
        return this
    }, r.getTweensOf = function (i, o) {
        for (var f = [], c = Fn(i), g = this._first, _ = cr(o), m; g;) g instanceof vt ? uc(g._targets, c) && (_ ? (!yr || g._initted && g._ts) && g.globalTime(0) <= o && g.globalTime(g.totalDuration()) > o : !o || g.isActive()) && f.push(g) : (m = g.getTweensOf(c, o)).length && f.push.apply(f, m), g = g._next;
        return f
    }, r.tweenTo = function (i, o) {
        o = o || {};
        var f = this, c = xn(f, i), g = o, _ = g.startAt, m = g.onStart, T = g.onStartParams, F = g.immediateRender, C,
            E = vt.to(f, Pn({
                ease: o.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: c,
                overwrite: "auto",
                duration: o.duration || Math.abs((c - (_ && "time" in _ ? _.time : f._time)) / f.timeScale()) || He,
                onStart: function () {
                    if (f.pause(), !C) {
                        var O = o.duration || Math.abs((c - (_ && "time" in _ ? _.time : f._time)) / f.timeScale());
                        E._dur !== O && Ti(E, O, 0, 1).render(E._time, !0, !0), C = 1
                    }
                    m && m.apply(E, T || [])
                }
            }, o));
        return F ? E.render(0) : E
    }, r.tweenFromTo = function (i, o, f) {
        return this.tweenTo(o, Pn({startAt: {time: xn(this, i)}}, f))
    }, r.recent = function () {
        return this._recent
    }, r.nextLabel = function (i) {
        return i === void 0 && (i = this._time), aa(this, xn(this, i))
    }, r.previousLabel = function (i) {
        return i === void 0 && (i = this._time), aa(this, xn(this, i), 1)
    }, r.currentLabel = function (i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + He)
    }, r.shiftChildren = function (i, o, f) {
        f === void 0 && (f = 0);
        for (var c = this._first, g = this.labels, _; c;) c._start >= f && (c._start += i, c._end += i), c = c._next;
        if (o) for (_ in g) g[_] >= f && (g[_] += i);
        return Zr(this)
    }, r.invalidate = function () {
        var i = this._first;
        for (this._lock = 0; i;) i.invalidate(), i = i._next;
        return h.prototype.invalidate.call(this)
    }, r.clear = function (i) {
        i === void 0 && (i = !0);
        for (var o = this._first, f; o;) f = o._next, this.remove(o), o = f;
        return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Zr(this)
    }, r.totalDuration = function (i) {
        var o = 0, f = this, c = f._last, g = En, _, m, T;
        if (arguments.length) return f.timeScale((f._repeat < 0 ? f.duration() : f.totalDuration()) / (f.reversed() ? -i : i));
        if (f._dirty) {
            for (T = f.parent; c;) _ = c._prev, c._dirty && c.totalDuration(), m = c._start, m > g && f._sort && c._ts && !f._lock ? (f._lock = 1, Gn(f, c, m - c._delay, 1)._lock = 0) : g = m, m < 0 && c._ts && (o -= m, (!T && !f._dp || T && T.smoothChildTiming) && (f._start += m / f._ts, f._time -= m, f._tTime -= m), f.shiftChildren(-m, !1, -1 / 0), g = 0), c._end > o && c._ts && (o = c._end), c = _;
            Ti(f, f === Ze && f._time > o ? f._time : o, 1, 1), f._dirty = 0
        }
        return f._tDur
    }, e.updateRoot = function (i) {
        if (Ze._ts && (tf(Ze, eo(i, Ze)), Ja = dn.frame), dn.frame >= ia) {
            ia += Dn.autoSleep || 120;
            var o = Ze._first;
            if ((!o || !o._ts) && Dn.autoSleep && dn._listeners.length < 2) {
                for (; o && !o._ts;) o = o._next;
                o || dn.sleep()
            }
        }
    }, e
}(uu);
Pn(tn.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
var Pc = function (e, r, n, i, o, f, c) {
    var g = new un(this._pt, e, r, 0, 1, Sf, null, o), _ = 0, m = 0, T, F, C, E, v, O, A, $;
    for (g.b = n, g.e = i, n += "", i += "", (A = ~i.indexOf("random(")) && (i = ru(i)), f && ($ = [n, i], f($, e, r), n = $[0], i = $[1]), F = n.match(Oo) || []; T = Oo.exec(i);) E = T[0], v = i.substring(_, T.index), C ? C = (C + 1) % 5 : v.substr(-5) === "rgba(" && (C = 1), E !== F[m++] && (O = parseFloat(F[m - 1]) || 0, g._pt = {
        _next: g._pt,
        p: v || m === 1 ? v : ",",
        s: O,
        c: E.charAt(1) === "=" ? Di(O, E) - O : parseFloat(E) - O,
        m: C && C < 4 ? Math.round : 0
    }, _ = Oo.lastIndex);
    return g.c = _ < i.length ? i.substring(_, i.length) : "", g.fp = c, (Ua.test(i) || A) && (g.e = 0), this._pt = g, g
}, bs = function (e, r, n, i, o, f, c, g, _) {
    Ct(i) && (i = i(o || 0, e, f));
    var m = e[r],
        T = n !== "get" ? n : Ct(m) ? _ ? e[r.indexOf("set") || !Ct(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](_) : e[r]() : m,
        F = Ct(m) ? _ ? Bc : Ef : ws, C;
    if (xt(i) && (~i.indexOf("random(") && (i = ru(i)), i.charAt(1) === "=" && (C = Di(T, i) + (Mt(T) || 0), (C || C === 0) && (i = C))), T !== i || ts) return !isNaN(T * i) && i !== "" ? (C = new un(this._pt, e, r, +T || 0, i - (T || 0), typeof m == "boolean" ? Rc : Ff, 0, F), _ && (C.fp = _), c && C.modifier(c, this, e), this._pt = C) : (!m && !(r in e) && ys(r, i), Pc.call(this, e, r, T, i, F, g || Dn.stringFilter, _))
}, kc = function (e, r, n, i, o) {
    if (Ct(e) && (e = Ui(e, o, r, n, i)), !hr(e) || e.style && e.nodeType || Nt(e) || Ya(e)) return xt(e) ? Ui(e, o, r, n, i) : e;
    var f = {}, c;
    for (c in e) f[c] = Ui(e[c], o, r, n, i);
    return f
}, bf = function (e, r, n, i, o, f) {
    var c, g, _, m;
    if (hn[e] && (c = new hn[e]).init(o, c.rawVars ? r[e] : kc(r[e], i, o, f, n), n, i, f) !== !1 && (n._pt = g = new un(n._pt, o, e, 0, 1, c.render, c, 0, c.priority), n !== di)) for (_ = n._ptLookup[n._targets.indexOf(o)], m = c._props.length; m--;) _[c._props[m]] = g;
    return c
}, yr, ts, Ts = function h(e, r) {
    var n = e.vars, i = n.ease, o = n.startAt, f = n.immediateRender, c = n.lazy, g = n.onUpdate, _ = n.onUpdateParams,
        m = n.callbackScope, T = n.runBackwards, F = n.yoyoEase, C = n.keyframes, E = n.autoRevert, v = e._dur,
        O = e._startAt, A = e._targets, $ = e.parent, R = $ && $.data === "nested" ? $.parent._targets : A,
        z = e._overwrite === "auto" && !gs, W = e.timeline, a, q, G, V, K, he, J, be, ne, De, ce, Te, Ae;
    if (W && (!C || !i) && (i = "none"), e._ease = Jr(i, xi.ease), e._yEase = F ? mf(Jr(F === !0 ? i : F, xi.ease)) : 0, F && e._yoyo && !e._repeat && (F = e._yEase, e._yEase = e._ease, e._ease = F), e._from = !W && !!n.runBackwards, !W || C && !n.stagger) {
        if (be = A[0] ? Kr(A[0]).harness : 0, Te = be && n[be.prop], a = Ju(n, ms), O && (fr(O.render(-1, !0)), O._lazy = 0), o) if (fr(e._startAt = vt.set(A, Pn({
            data: "isStart",
            overwrite: !1,
            parent: $,
            immediateRender: !0,
            lazy: nn(c),
            startAt: null,
            delay: 0,
            onUpdate: g,
            onUpdateParams: _,
            callbackScope: m,
            stagger: 0
        }, o))), r < 0 && !f && !E && e._startAt.render(-1, !0), f) {
            if (r > 0 && !E && (e._startAt = 0), v && r <= 0) {
                r && (e._zTime = r);
                return
            }
        } else E === !1 && (e._startAt = 0); else if (T && v) {
            if (O) !E && (e._startAt = 0); else if (r && (f = !1), G = Pn({
                overwrite: !1,
                data: "isFromStart",
                lazy: f && nn(c),
                immediateRender: f,
                stagger: 0,
                parent: $
            }, a), Te && (G[be.prop] = Te), fr(e._startAt = vt.set(A, G)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, !f) h(e._startAt, He); else if (!r) return
        }
        for (e._pt = e._ptCache = 0, c = v && nn(c) || c && !v, q = 0; q < A.length; q++) {
            if (K = A[q], J = K._gsap || Cs(A)[q]._gsap, e._ptLookup[q] = De = {}, Ko[J.id] && br.length && Zu(), ce = R === A ? q : R.indexOf(K), be && (ne = new be).init(K, Te || a, e, ce, R) !== !1 && (e._pt = V = new un(e._pt, K, ne.name, 0, 1, ne.render, ne, 0, ne.priority), ne._props.forEach(function (Bt) {
                De[Bt] = V
            }), ne.priority && (he = 1)), !be || Te) for (G in a) hn[G] && (ne = bf(G, a, e, ce, K, R)) ? ne.priority && (he = 1) : De[G] = V = bs.call(e, K, G, "get", a[G], ce, R, 0, n.stringFilter);
            e._op && e._op[q] && e.kill(K, e._op[q]), z && e._pt && (yr = e, Ze.killTweensOf(K, De, e.globalTime(r)), Ae = !e.parent, yr = 0), e._pt && c && (Ko[J.id] = 1)
        }
        he && Af(e), e._onInit && e._onInit(e)
    }
    e._onUpdate = g, e._initted = (!e._op || e._pt) && !Ae, C && r <= 0 && W.render(En, !0, !0)
}, Oc = function (e, r, n, i, o, f, c) {
    var g = (e._pt && e._ptCache || (e._ptCache = {}))[r], _, m, T;
    if (!g) for (g = e._ptCache[r] = [], m = e._ptLookup, T = e._targets.length; T--;) {
        if (_ = m[T][r], _ && _.d && _.d._pt) for (_ = _.d._pt; _ && _.p !== r;) _ = _._next;
        if (!_) return ts = 1, e.vars[r] = "+=0", Ts(e, c), ts = 0, 1;
        g.push(_)
    }
    for (T = g.length; T--;) _ = g[T], _.s = (i || i === 0) && !o ? i : _.s + (i || 0) + f * _.c, _.c = n - _.s, _.e && (_.e = st(n) + Mt(_.e)), _.b && (_.b = _.s + Mt(_.b))
}, Mc = function (e, r) {
    var n = e[0] ? Kr(e[0]).harness : 0, i = n && n.aliases, o, f, c, g;
    if (!i) return r;
    o = ni({}, r);
    for (f in i) if (f in o) for (g = i[f].split(","), c = g.length; c--;) o[g[c]] = o[f];
    return o
}, Nc = function (e, r, n, i) {
    var o = r.ease || i || "power1.inOut", f, c;
    if (Nt(r)) c = n[e] || (n[e] = []), r.forEach(function (g, _) {
        return c.push({t: _ / (r.length - 1) * 100, v: g, e: o})
    }); else for (f in r) c = n[f] || (n[f] = []), f === "ease" || c.push({t: parseFloat(e), v: r[f], e: o})
}, Ui = function (e, r, n, i, o) {
    return Ct(e) ? e.call(r, n, i, o) : xt(e) && ~e.indexOf("random(") ? ru(e) : e
}, Tf = vs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", wf = {};
rn(Tf + ",id,stagger,delay,duration,paused,scrollTrigger", function (h) {
    return wf[h] = 1
});
var vt = function (h) {
    Wa(e, h);

    function e(n, i, o, f) {
        var c;
        typeof i == "number" && (o.duration = i, i = o, o = null), c = h.call(this, f ? i : Yi(i)) || this;
        var g = c.vars, _ = g.duration, m = g.delay, T = g.immediateRender, F = g.stagger, C = g.overwrite,
            E = g.keyframes, v = g.defaults, O = g.scrollTrigger, A = g.yoyoEase, $ = i.parent || Ze,
            R = (Nt(n) || Ya(n) ? cr(n[0]) : "length" in i) ? [n] : Fn(n), z, W, a, q, G, V, K, he;
        if (c._targets = R.length ? Cs(R) : Ku("GSAP target " + n + " not found. https://greensock.com", !Dn.nullTargetWarn) || [], c._ptLookup = [], c._overwrite = C, E || F || Eu(_) || Eu(m)) {
            if (i = c.vars, z = c.timeline = new tn({
                data: "nested",
                defaults: v || {}
            }), z.kill(), z.parent = z._dp = ur(c), z._start = 0, F || Eu(_) || Eu(m)) {
                if (q = R.length, K = F && cf(F), hr(F)) for (G in F) ~Tf.indexOf(G) && (he || (he = {}), he[G] = F[G]);
                for (W = 0; W < q; W++) a = Ju(i, wf), a.stagger = 0, A && (a.yoyoEase = A), he && ni(a, he), V = R[W], a.duration = +Ui(_, ur(c), W, V, R), a.delay = (+Ui(m, ur(c), W, V, R) || 0) - c._delay, !F && q === 1 && a.delay && (c._delay = m = a.delay, c._start += m, a.delay = 0), z.to(V, a, K ? K(W, V, R) : 0), z._ease = xe.none;
                z.duration() ? _ = m = 0 : c.timeline = 0
            } else if (E) {
                Yi(Pn(z.vars.defaults, {ease: "none"})), z._ease = Jr(E.ease || i.ease || "none");
                var J = 0, be, ne, De;
                if (Nt(E)) E.forEach(function (ce) {
                    return z.to(R, ce, ">")
                }); else {
                    a = {};
                    for (G in E) G === "ease" || G === "easeEach" || Nc(G, E[G], a, E.easeEach);
                    for (G in a) for (be = a[G].sort(function (ce, Te) {
                        return ce.t - Te.t
                    }), J = 0, W = 0; W < be.length; W++) ne = be[W], De = {
                        ease: ne.e,
                        duration: (ne.t - (W ? be[W - 1].t : 0)) / 100 * _
                    }, De[G] = ne.v, z.to(R, De, J), J += De.duration;
                    z.duration() < _ && z.to({}, {duration: _ - z.duration()})
                }
            }
            _ || c.duration(_ = z.duration())
        } else c.timeline = 0;
        return C === !0 && !gs && (yr = ur(c), Ze.killTweensOf(R), yr = 0), Gn($, ur(c), o), i.reversed && c.reverse(), i.paused && c.paused(!0), (T || !_ && !E && c._start === Ot($._time) && nn(T) && fc(ur(c)) && $.data !== "nested") && (c._tTime = -He, c.render(Math.max(0, -m))), O && sf(ur(c), O), c
    }

    var r = e.prototype;
    return r.render = function (i, o, f) {
        var c = this._time, g = this._tDur, _ = this._dur, m = i > g - He && i >= 0 ? g : i < He ? 0 : i, T, F, C, E, v,
            O, A, $, R;
        if (!_) cc(this, i, o, f); else if (m !== this._tTime || !i || f || !this._initted && this._tTime || this._startAt && this._zTime < 0 != i < 0) {
            if (T = m, $ = this.timeline, this._repeat) {
                if (E = _ + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(E * 100 + i, o, f);
                if (T = Ot(m % E), m === g ? (C = this._repeat, T = _) : (C = ~~(m / E), C && C === m / E && (T = _, C--), T > _ && (T = _)), O = this._yoyo && C & 1, O && (R = this._yEase, T = _ - T), v = bi(this._tTime, E), T === c && !f && this._initted) return this._tTime = m, this;
                C !== v && ($ && this._yEase && vf($, O), this.vars.repeatRefresh && !O && !this._lock && (this._lock = f = 1, this.render(Ot(E * C), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (af(this, i < 0 ? i : T, f, o)) return this._tTime = 0, this;
                if (c !== this._time) return this;
                if (_ !== this._dur) return this.render(i, o, f)
            }
            if (this._tTime = m, this._time = T, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = A = (R || this._ease)(T / _), this._from && (this.ratio = A = 1 - A), T && !c && !o && (Sn(this, "onStart"), this._tTime !== m)) return this;
            for (F = this._pt; F;) F.r(A, F.d), F = F._next;
            $ && $.render(i < 0 ? i : !T && O ? -He : $._dur * $._ease(T / this._dur), o, f) || this._startAt && (this._zTime = i), this._onUpdate && !o && (i < 0 && this._startAt && this._startAt.render(i, !0, f), Sn(this, "onUpdate")), this._repeat && C !== v && this.vars.onRepeat && !o && this.parent && Sn(this, "onRepeat"), (m === this._tDur || !m) && this._tTime === m && (i < 0 && this._startAt && !this._onUpdate && this._startAt.render(i, !0, !0), (i || !_) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && fr(this, 1), !o && !(i < 0 && !c) && (m || c) && (Sn(this, m === g ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < g && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, r.targets = function () {
        return this._targets
    }, r.invalidate = function () {
        return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), h.prototype.invalidate.call(this)
    }, r.resetTo = function (i, o, f, c) {
        iu || dn.wake(), this._ts || this.play();
        var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts), _;
        return this._initted || Ts(this, g), _ = this._ease(g / this._dur), Oc(this, i, o, f, c, _, g) ? this.resetTo(i, o, f, c) : (xs(this, 0), this.parent || uf(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, r.kill = function (i, o) {
        if (o === void 0 && (o = "all"), !i && (!o || o === "all")) return this._lazy = this._pt = 0, this.parent ? zi(this) : this;
        if (this.timeline) {
            var f = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, o, yr && yr.vars.overwrite !== !0)._first || zi(this), this.parent && f !== this.timeline.totalDuration() && Ti(this, this._dur * this.timeline._tDur / f, 0, 1), this
        }
        var c = this._targets, g = i ? Fn(i) : c, _ = this._ptLookup, m = this._pt, T, F, C, E, v, O, A;
        if ((!o || o === "all") && sc(c, g)) return o === "all" && (this._pt = 0), zi(this);
        for (T = this._op = this._op || [], o !== "all" && (xt(o) && (v = {}, rn(o, function ($) {
            return v[$] = 1
        }), o = v), o = Mc(c, o)), A = c.length; A--;) if (~g.indexOf(c[A])) {
            F = _[A], o === "all" ? (T[A] = o, E = F, C = {}) : (C = T[A] = T[A] || {}, E = o);
            for (v in E) O = F && F[v], O && ((!("kill" in O.d) || O.d.kill(v) === !0) && fo(this, O, "_pt"), delete F[v]), C !== "all" && (C[v] = 1)
        }
        return this._initted && !this._pt && m && zi(this), this
    }, e.to = function (i, o) {
        return new e(i, o, arguments[2])
    }, e.from = function (i, o) {
        return Vi(1, arguments)
    }, e.delayedCall = function (i, o, f, c) {
        return new e(o, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: o,
            onReverseComplete: o,
            onCompleteParams: f,
            onReverseCompleteParams: f,
            callbackScope: c
        })
    }, e.fromTo = function (i, o, f) {
        return Vi(2, arguments)
    }, e.set = function (i, o) {
        return o.duration = 0, o.repeatDelay || (o.repeat = 0), new e(i, o)
    }, e.killTweensOf = function (i, o, f) {
        return Ze.killTweensOf(i, o, f)
    }, e
}(uu);
Pn(vt.prototype, {_targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0});
rn("staggerTo,staggerFrom,staggerFromTo", function (h) {
    vt[h] = function () {
        var e = new tn, r = Jo.call(arguments, 0);
        return r.splice(h === "staggerFromTo" ? 5 : 4, 0, 0), e[h].apply(e, r)
    }
});
var ws = function (e, r, n) {
    return e[r] = n
}, Ef = function (e, r, n) {
    return e[r](n)
}, Bc = function (e, r, n, i) {
    return e[r](i.fp, n)
}, Lc = function (e, r, n) {
    return e.setAttribute(r, n)
}, Es = function (e, r) {
    return Ct(e[r]) ? Ef : Ds(e[r]) && e.setAttribute ? Lc : ws
}, Ff = function (e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
}, Rc = function (e, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * e), r)
}, Sf = function (e, r) {
    var n = r._pt, i = "";
    if (!e && r.b) i = r.b; else if (e === 1 && r.e) i = r.e; else {
        for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
        i += r.c
    }
    r.set(r.t, r.p, i, r)
}, Fs = function (e, r) {
    for (var n = r._pt; n;) n.r(e, n.d), n = n._next
}, Ic = function (e, r, n, i) {
    for (var o = this._pt, f; o;) f = o._next, o.p === i && o.modifier(e, r, n), o = f
}, jc = function (e) {
    for (var r = this._pt, n, i; r;) i = r._next, r.p === e && !r.op || r.op === e ? fo(this, r, "_pt") : r.dep || (n = 1), r = i;
    return !n
}, zc = function (e, r, n, i) {
    i.mSet(e, r, i.m.call(i.tween, n, i.mt), i)
}, Af = function (e) {
    for (var r = e._pt, n, i, o, f; r;) {
        for (n = r._next, i = o; i && i.pr > r.pr;) i = i._next;
        (r._prev = i ? i._prev : f) ? r._prev._next = r : o = r, (r._next = i) ? i._prev = r : f = r, r = n
    }
    e._pt = o
}, un = function () {
    function h(r, n, i, o, f, c, g, _, m) {
        this.t = n, this.s = o, this.c = f, this.p = i, this.r = c || Ff, this.d = g || this, this.set = _ || ws, this.pr = m || 0, this._next = r, r && (r._prev = this)
    }

    var e = h.prototype;
    return e.modifier = function (n, i, o) {
        this.mSet = this.mSet || this.set, this.set = zc, this.m = n, this.mt = o, this.tween = i
    }, h
}();
rn(vs + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (h) {
    return ms[h] = 1
});
_n.TweenMax = _n.TweenLite = vt;
_n.TimelineLite = _n.TimelineMax = tn;
Ze = new tn({sortChildren: !1, defaults: xi, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0});
Dn.stringFilter = yf;
var to = {
    registerPlugin: function () {
        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
        r.forEach(function (i) {
            return bc(i)
        })
    },
    timeline: function (e) {
        return new tn(e)
    },
    getTweensOf: function (e, r) {
        return Ze.getTweensOf(e, r)
    },
    getProperty: function (e, r, n, i) {
        xt(e) && (e = Fn(e)[0]);
        var o = Kr(e || {}).get, f = n ? rf : nf;
        return n === "native" && (n = ""), e && (r ? f((hn[r] && hn[r].get || o)(e, r, n, i)) : function (c, g, _) {
            return f((hn[c] && hn[c].get || o)(e, c, g, _))
        })
    },
    quickSetter: function (e, r, n) {
        if (e = Fn(e), e.length > 1) {
            var i = e.map(function (m) {
                return Wn.quickSetter(m, r, n)
            }), o = i.length;
            return function (m) {
                for (var T = o; T--;) i[T](m)
            }
        }
        e = e[0] || {};
        var f = hn[r], c = Kr(e), g = c.harness && (c.harness.aliases || {})[r] || r, _ = f ? function (m) {
            var T = new f;
            di._pt = 0, T.init(e, n ? m + n : m, di, 0, [e]), T.render(1, T), di._pt && Fs(1, di)
        } : c.set(e, g);
        return f ? _ : function (m) {
            return _(e, g, n ? m + n : m, c, 1)
        }
    },
    quickTo: function (e, r, n) {
        var i, o = Wn.to(e, ni((i = {}, i[r] = "+=0.1", i.paused = !0, i), n || {})), f = function (g, _, m) {
            return o.resetTo(r, g, _, m)
        };
        return f.tween = o, f
    },
    isTweening: function (e) {
        return Ze.getTweensOf(e, !0).length > 0
    },
    defaults: function (e) {
        return e && e.ease && (e.ease = Jr(e.ease, xi.ease)), ua(xi, e || {})
    },
    config: function (e) {
        return ua(Dn, e || {})
    },
    registerEffect: function (e) {
        var r = e.name, n = e.effect, i = e.plugins, o = e.defaults, f = e.extendTimeline;
        (i || "").split(",").forEach(function (c) {
            return c && !hn[c] && !_n[c] && Ku(r + " effect requires " + c + " plugin.")
        }), Mo[r] = function (c, g, _) {
            return n(Fn(c), Pn(g || {}, o), _)
        }, f && (tn.prototype[r] = function (c, g, _) {
            return this.add(Mo[r](c, hr(g) ? g : (_ = g) && {}, this), _)
        })
    },
    registerEase: function (e, r) {
        xe[e] = Jr(r)
    },
    parseEase: function (e, r) {
        return arguments.length ? Jr(e, r) : xe
    },
    getById: function (e) {
        return Ze.getById(e)
    },
    exportRoot: function (e, r) {
        e === void 0 && (e = {});
        var n = new tn(e), i, o;
        for (n.smoothChildTiming = nn(e.smoothChildTiming), Ze.remove(n), n._dp = 0, n._time = n._tTime = Ze._time, i = Ze._first; i;) o = i._next, (r || !(!i._dur && i instanceof vt && i.vars.onComplete === i._targets[0])) && Gn(n, i, i._start - i._delay), i = o;
        return Gn(Ze, n, 0), n
    },
    utils: {
        wrap: vc,
        wrapYoyo: Cc,
        distribute: cf,
        random: df,
        snap: hf,
        normalize: mc,
        getUnit: Mt,
        clamp: pc,
        splitColor: Df,
        toArray: Fn,
        selector: Dc,
        mapRange: gf,
        pipe: _c,
        unitize: yc,
        interpolate: xc,
        shuffle: lf
    },
    install: Ka,
    effects: Mo,
    ticker: dn,
    updateRoot: tn.updateRoot,
    plugins: hn,
    globalTimeline: Ze,
    core: {
        PropTween: un,
        globals: Za,
        Tween: vt,
        Timeline: tn,
        Animation: uu,
        getCache: Kr,
        _removeLinkedListItem: fo,
        suppressOverwrites: function (e) {
            return gs = e
        }
    }
};
rn("to,from,fromTo,delayedCall,set,killTweensOf", function (h) {
    return to[h] = vt[h]
});
dn.add(tn.updateRoot);
di = to.to({}, {duration: 0});
var Hc = function (e, r) {
    for (var n = e._pt; n && n.p !== r && n.op !== r && n.fp !== r;) n = n._next;
    return n
}, qc = function (e, r) {
    var n = e._targets, i, o, f;
    for (i in r) for (o = n.length; o--;) f = e._ptLookup[o][i], f && (f = f.d) && (f._pt && (f = Hc(f, i)), f && f.modifier && f.modifier(r[i], e, n[o], i))
}, Ro = function (e, r) {
    return {
        name: e, rawVars: 1, init: function (i, o, f) {
            f._onInit = function (c) {
                var g, _;
                if (xt(o) && (g = {}, rn(o, function (m) {
                    return g[m] = 1
                }), o = g), r) {
                    g = {};
                    for (_ in o) g[_] = r(o[_]);
                    o = g
                }
                qc(c, o)
            }
        }
    }
}, Wn = to.registerPlugin({
    name: "attr", init: function (e, r, n, i, o) {
        var f, c;
        for (f in r) c = this.add(e, "setAttribute", (e.getAttribute(f) || 0) + "", r[f], i, o, 0, 0, f), c && (c.op = f), this._props.push(f)
    }
}, {
    name: "endArray", init: function (e, r) {
        for (var n = r.length; n--;) this.add(e, n, e[n] || 0, r[n])
    }
}, Ro("roundProps", es), Ro("modifiers"), Ro("snap", hf)) || to;
vt.version = tn.version = Wn.version = "3.10.4";
Qa = 1;
Xa() && wi();
xe.Power0;
xe.Power1;
xe.Power2;
xe.Power3;
xe.Power4;
xe.Linear;
xe.Quad;
xe.Cubic;
xe.Quart;
xe.Quint;
xe.Strong;
xe.Elastic;
xe.Back;
xe.SteppedEase;
xe.Bounce;
xe.Sine;
xe.Expo;
xe.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var la, mr, _i, Ss, Ur, ca, Wc = function () {
        return typeof window != "undefined"
    }, Er = {}, qr = 180 / Math.PI, yi = Math.PI / 180, ai = Math.atan2, ha = 1e8, Pf = /([A-Z])/g,
    $c = /(left|right|width|margin|padding|x)/i, Xc = /[\s,\(]\S/,
    vr = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, kf = function (e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    }, Yc = function (e, r) {
        return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    }, Vc = function (e, r) {
        return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r)
    }, Uc = function (e, r) {
        var n = r.s + r.c * e;
        r.set(r.t, r.p, ~~(n + (n < 0 ? -.5 : .5)) + r.u, r)
    }, Of = function (e, r) {
        return r.set(r.t, r.p, e ? r.e : r.b, r)
    }, Mf = function (e, r) {
        return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
    }, Gc = function (e, r, n) {
        return e.style[r] = n
    }, Qc = function (e, r, n) {
        return e.style.setProperty(r, n)
    }, Kc = function (e, r, n) {
        return e._gsap[r] = n
    }, Zc = function (e, r, n) {
        return e._gsap.scaleX = e._gsap.scaleY = n
    }, Jc = function (e, r, n, i, o) {
        var f = e._gsap;
        f.scaleX = f.scaleY = n, f.renderTransform(o, f)
    }, eh = function (e, r, n, i, o) {
        var f = e._gsap;
        f[r] = n, f.renderTransform(o, f)
    }, Ft = "transform", Fr = Ft + "Origin", Nf, ns = function (e, r) {
        var n = mr.createElementNS ? mr.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : mr.createElement(e);
        return n.style ? n : mr.createElement(e)
    }, lr = function h(e, r, n) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(Pf, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && h(e, Ei(r) || r, 1) || ""
    }, da = "O,Moz,ms,Ms,Webkit".split(","), Ei = function (e, r, n) {
        var i = r || Ur, o = i.style, f = 5;
        if (e in o && !n) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); f-- && !(da[f] + e in o);) ;
        return f < 0 ? null : (f === 3 ? "ms" : f >= 0 ? da[f] : "") + e
    }, rs = function () {
        Wc() && window.document && (la = window, mr = la.document, _i = mr.documentElement, Ur = ns("div") || {style: {}}, ns("div"), Ft = Ei(Ft), Fr = Ft + "Origin", Ur.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Nf = !!Ei("perspective"), Ss = 1)
    }, Io = function h(e) {
        var r = ns("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode, i = this.nextSibling, o = this.style.cssText, f;
        if (_i.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
            f = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = h
        } catch {
        } else this._gsapBBox && (f = this._gsapBBox());
        return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), _i.removeChild(r), this.style.cssText = o, f
    }, pa = function (e, r) {
        for (var n = r.length; n--;) if (e.hasAttribute(r[n])) return e.getAttribute(r[n])
    }, Bf = function (e) {
        var r;
        try {
            r = e.getBBox()
        } catch {
            r = Io.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Io || (r = Io.call(e, !0)), r && !r.width && !r.x && !r.y ? {
            x: +pa(e, ["x", "cx", "x1"]) || 0,
            y: +pa(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : r
    }, Lf = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Bf(e))
    }, ou = function (e, r) {
        if (r) {
            var n = e.style;
            r in Er && r !== Fr && (r = Ft), n.removeProperty ? ((r.substr(0, 2) === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), n.removeProperty(r.replace(Pf, "-$1").toLowerCase())) : n.removeAttribute(r)
        }
    }, Cr = function (e, r, n, i, o, f) {
        var c = new un(e._pt, r, n, 0, 1, f ? Mf : Of);
        return e._pt = c, c.b = i, c.e = o, e._props.push(n), c
    }, ga = {deg: 1, rad: 1, turn: 1}, Sr = function h(e, r, n, i) {
        var o = parseFloat(n) || 0, f = (n + "").trim().substr((o + "").length) || "px", c = Ur.style, g = $c.test(r),
            _ = e.tagName.toLowerCase() === "svg", m = (_ ? "client" : "offset") + (g ? "Width" : "Height"), T = 100,
            F = i === "px", C = i === "%", E, v, O, A;
        return i === f || !o || ga[i] || ga[f] ? o : (f !== "px" && !F && (o = h(e, r, n, "px")), A = e.getCTM && Lf(e), (C || f === "%") && (Er[r] || ~r.indexOf("adius")) ? (E = A ? e.getBBox()[g ? "width" : "height"] : e[m], st(C ? o / E * T : o / 100 * E)) : (c[g ? "width" : "height"] = T + (F ? f : i), v = ~r.indexOf("adius") || i === "em" && e.appendChild && !_ ? e : e.parentNode, A && (v = (e.ownerSVGElement || {}).parentNode), (!v || v === mr || !v.appendChild) && (v = mr.body), O = v._gsap, O && C && O.width && g && O.time === dn.time ? st(o / O.width * T) : ((C || f === "%") && (c.position = lr(e, "position")), v === e && (c.position = "static"), v.appendChild(Ur), E = Ur[m], v.removeChild(Ur), c.position = "absolute", g && C && (O = Kr(v), O.time = dn.time, O.width = v[m]), st(F ? E * o / T : E && o ? T / E * o : 0))))
    }, Wr = function (e, r, n, i) {
        var o;
        return Ss || rs(), r in vr && r !== "transform" && (r = vr[r], ~r.indexOf(",") && (r = r.split(",")[0])), Er[r] && r !== "transform" ? (o = au(e, i), o = r !== "transformOrigin" ? o[r] : o.svg ? o.origin : ro(lr(e, Fr)) + " " + o.zOrigin + "px") : (o = e.style[r], (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = no[r] && no[r](e, r, n) || lr(e, r) || ef(e, r) || (r === "opacity" ? 1 : 0))), n && !~(o + "").trim().indexOf(" ") ? Sr(e, r, o, n) + n : o
    }, th = function (e, r, n, i) {
        if (!n || n === "none") {
            var o = Ei(r, e, 1), f = o && lr(e, o, 1);
            f && f !== n ? (r = o, n = f) : r === "borderColor" && (n = lr(e, "borderTopColor"))
        }
        var c = new un(this._pt, e.style, r, 0, 1, Sf), g = 0, _ = 0, m, T, F, C, E, v, O, A, $, R, z, W;
        if (c.b = n, c.e = i, n += "", i += "", i === "auto" && (e.style[r] = i, i = lr(e, r) || i, e.style[r] = n), m = [n, i], yf(m), n = m[0], i = m[1], F = n.match(hi) || [], W = i.match(hi) || [], W.length) {
            for (; T = hi.exec(i);) O = T[0], $ = i.substring(g, T.index), E ? E = (E + 1) % 5 : ($.substr(-5) === "rgba(" || $.substr(-5) === "hsla(") && (E = 1), O !== (v = F[_++] || "") && (C = parseFloat(v) || 0, z = v.substr((C + "").length), O.charAt(1) === "=" && (O = Di(C, O) + z), A = parseFloat(O), R = O.substr((A + "").length), g = hi.lastIndex - R.length, R || (R = R || Dn.units[r] || z, g === i.length && (i += R, c.e += R)), z !== R && (C = Sr(e, r, v, R) || 0), c._pt = {
                _next: c._pt,
                p: $ || _ === 1 ? $ : ",",
                s: C,
                c: A - C,
                m: E && E < 4 || r === "zIndex" ? Math.round : 0
            });
            c.c = g < i.length ? i.substring(g, i.length) : ""
        } else c.r = r === "display" && i === "none" ? Mf : Of;
        return Ua.test(i) && (c.e = 0), this._pt = c, c
    }, Da = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, nh = function (e) {
        var r = e.split(" "), n = r[0], i = r[1] || "50%";
        return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), r[0] = Da[n] || n, r[1] = Da[i] || i, r.join(" ")
    }, rh = function (e, r) {
        if (r.tween && r.tween._time === r.tween._dur) {
            var n = r.t, i = n.style, o = r.u, f = n._gsap, c, g, _;
            if (o === "all" || o === !0) i.cssText = "", g = 1; else for (o = o.split(","), _ = o.length; --_ > -1;) c = o[_], Er[c] && (g = 1, c = c === "transformOrigin" ? Fr : Ft), ou(n, c);
            g && (ou(n, Ft), f && (f.svg && n.removeAttribute("transform"), au(n, 1), f.uncache = 1))
        }
    }, no = {
        clearProps: function (e, r, n, i, o) {
            if (o.data !== "isFromStart") {
                var f = e._pt = new un(e._pt, r, n, 0, 0, rh);
                return f.u = i, f.pr = -10, f.tween = o, e._props.push(n), 1
            }
        }
    }, su = [1, 0, 0, 1, 0, 0], Rf = {}, If = function (e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    }, _a = function (e) {
        var r = lr(e, Ft);
        return If(r) ? su : r.substr(7).match(Va).map(st)
    }, As = function (e, r) {
        var n = e._gsap || Kr(e), i = e.style, o = _a(e), f, c, g, _;
        return n.svg && e.getAttribute("transform") ? (g = e.transform.baseVal.consolidate().matrix, o = [g.a, g.b, g.c, g.d, g.e, g.f], o.join(",") === "1,0,0,1,0,0" ? su : o) : (o === su && !e.offsetParent && e !== _i && !n.svg && (g = i.display, i.display = "block", f = e.parentNode, (!f || !e.offsetParent) && (_ = 1, c = e.nextSibling, _i.appendChild(e)), o = _a(e), g ? i.display = g : ou(e, "display"), _ && (c ? f.insertBefore(e, c) : f ? f.appendChild(e) : _i.removeChild(e))), r && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
    }, is = function (e, r, n, i, o, f) {
        var c = e._gsap, g = o || As(e, !0), _ = c.xOrigin || 0, m = c.yOrigin || 0, T = c.xOffset || 0, F = c.yOffset || 0,
            C = g[0], E = g[1], v = g[2], O = g[3], A = g[4], $ = g[5], R = r.split(" "), z = parseFloat(R[0]) || 0,
            W = parseFloat(R[1]) || 0, a, q, G, V;
        n ? g !== su && (q = C * O - E * v) && (G = z * (O / q) + W * (-v / q) + (v * $ - O * A) / q, V = z * (-E / q) + W * (C / q) - (C * $ - E * A) / q, z = G, W = V) : (a = Bf(e), z = a.x + (~R[0].indexOf("%") ? z / 100 * a.width : z), W = a.y + (~(R[1] || R[0]).indexOf("%") ? W / 100 * a.height : W)), i || i !== !1 && c.smooth ? (A = z - _, $ = W - m, c.xOffset = T + (A * C + $ * v) - A, c.yOffset = F + (A * E + $ * O) - $) : c.xOffset = c.yOffset = 0, c.xOrigin = z, c.yOrigin = W, c.smooth = !!i, c.origin = r, c.originIsAbsolute = !!n, e.style[Fr] = "0px 0px", f && (Cr(f, c, "xOrigin", _, z), Cr(f, c, "yOrigin", m, W), Cr(f, c, "xOffset", T, c.xOffset), Cr(f, c, "yOffset", F, c.yOffset)), e.setAttribute("data-svg-origin", z + " " + W)
    }, au = function (e, r) {
        var n = e._gsap || new xf(e);
        if ("x" in n && !r && !n.uncache) return n;
        var i = e.style, o = n.scaleX < 0, f = "px", c = "deg", g = lr(e, Fr) || "0", _, m, T, F, C, E, v, O, A, $, R, z, W,
            a, q, G, V, K, he, J, be, ne, De, ce, Te, Ae, Bt, B, Me, Zn, rt, it;
        return _ = m = T = E = v = O = A = $ = R = 0, F = C = 1, n.svg = !!(e.getCTM && Lf(e)), a = As(e, n.svg), n.svg && (ce = (!n.uncache || g === "0px 0px") && !r && e.getAttribute("data-svg-origin"), is(e, ce || g, !!ce || n.originIsAbsolute, n.smooth !== !1, a)), z = n.xOrigin || 0, W = n.yOrigin || 0, a !== su && (K = a[0], he = a[1], J = a[2], be = a[3], _ = ne = a[4], m = De = a[5], a.length === 6 ? (F = Math.sqrt(K * K + he * he), C = Math.sqrt(be * be + J * J), E = K || he ? ai(he, K) * qr : 0, A = J || be ? ai(J, be) * qr + E : 0, A && (C *= Math.abs(Math.cos(A * yi))), n.svg && (_ -= z - (z * K + W * J), m -= W - (z * he + W * be))) : (it = a[6], Zn = a[7], Bt = a[8], B = a[9], Me = a[10], rt = a[11], _ = a[12], m = a[13], T = a[14], q = ai(it, Me), v = q * qr, q && (G = Math.cos(-q), V = Math.sin(-q), ce = ne * G + Bt * V, Te = De * G + B * V, Ae = it * G + Me * V, Bt = ne * -V + Bt * G, B = De * -V + B * G, Me = it * -V + Me * G, rt = Zn * -V + rt * G, ne = ce, De = Te, it = Ae), q = ai(-J, Me), O = q * qr, q && (G = Math.cos(-q), V = Math.sin(-q), ce = K * G - Bt * V, Te = he * G - B * V, Ae = J * G - Me * V, rt = be * V + rt * G, K = ce, he = Te, J = Ae), q = ai(he, K), E = q * qr, q && (G = Math.cos(q), V = Math.sin(q), ce = K * G + he * V, Te = ne * G + De * V, he = he * G - K * V, De = De * G - ne * V, K = ce, ne = Te), v && Math.abs(v) + Math.abs(E) > 359.9 && (v = E = 0, O = 180 - O), F = st(Math.sqrt(K * K + he * he + J * J)), C = st(Math.sqrt(De * De + it * it)), q = ai(ne, De), A = Math.abs(q) > 2e-4 ? q * qr : 0, R = rt ? 1 / (rt < 0 ? -rt : rt) : 0), n.svg && (ce = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !If(lr(e, Ft)), ce && e.setAttribute("transform", ce))), Math.abs(A) > 90 && Math.abs(A) < 270 && (o ? (F *= -1, A += E <= 0 ? 180 : -180, E += E <= 0 ? 180 : -180) : (C *= -1, A += A <= 0 ? 180 : -180)), r = r || n.uncache, n.x = _ - ((n.xPercent = _ && (!r && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-_) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + f, n.y = m - ((n.yPercent = m && (!r && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-m) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + f, n.z = T + f, n.scaleX = st(F), n.scaleY = st(C), n.rotation = st(E) + c, n.rotationX = st(v) + c, n.rotationY = st(O) + c, n.skewX = A + c, n.skewY = $ + c, n.transformPerspective = R + f, (n.zOrigin = parseFloat(g.split(" ")[2]) || 0) && (i[Fr] = ro(g)), n.xOffset = n.yOffset = 0, n.force3D = Dn.force3D, n.renderTransform = n.svg ? uh : Nf ? jf : ih, n.uncache = 0, n
    }, ro = function (e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, jo = function (e, r, n) {
        var i = Mt(r);
        return st(parseFloat(r) + parseFloat(Sr(e, "x", n + "px", i))) + i
    }, ih = function (e, r) {
        r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, jf(e, r)
    }, zr = "0deg", Li = "0px", Hr = ") ", jf = function (e, r) {
        var n = r || this, i = n.xPercent, o = n.yPercent, f = n.x, c = n.y, g = n.z, _ = n.rotation, m = n.rotationY,
            T = n.rotationX, F = n.skewX, C = n.skewY, E = n.scaleX, v = n.scaleY, O = n.transformPerspective,
            A = n.force3D, $ = n.target, R = n.zOrigin, z = "", W = A === "auto" && e && e !== 1 || A === !0;
        if (R && (T !== zr || m !== zr)) {
            var a = parseFloat(m) * yi, q = Math.sin(a), G = Math.cos(a), V;
            a = parseFloat(T) * yi, V = Math.cos(a), f = jo($, f, q * V * -R), c = jo($, c, -Math.sin(a) * -R), g = jo($, g, G * V * -R + R)
        }
        O !== Li && (z += "perspective(" + O + Hr), (i || o) && (z += "translate(" + i + "%, " + o + "%) "), (W || f !== Li || c !== Li || g !== Li) && (z += g !== Li || W ? "translate3d(" + f + ", " + c + ", " + g + ") " : "translate(" + f + ", " + c + Hr), _ !== zr && (z += "rotate(" + _ + Hr), m !== zr && (z += "rotateY(" + m + Hr), T !== zr && (z += "rotateX(" + T + Hr), (F !== zr || C !== zr) && (z += "skew(" + F + ", " + C + Hr), (E !== 1 || v !== 1) && (z += "scale(" + E + ", " + v + Hr), $.style[Ft] = z || "translate(0, 0)"
    }, uh = function (e, r) {
        var n = r || this, i = n.xPercent, o = n.yPercent, f = n.x, c = n.y, g = n.rotation, _ = n.skewX, m = n.skewY,
            T = n.scaleX, F = n.scaleY, C = n.target, E = n.xOrigin, v = n.yOrigin, O = n.xOffset, A = n.yOffset,
            $ = n.forceCSS, R = parseFloat(f), z = parseFloat(c), W, a, q, G, V;
        g = parseFloat(g), _ = parseFloat(_), m = parseFloat(m), m && (m = parseFloat(m), _ += m, g += m), g || _ ? (g *= yi, _ *= yi, W = Math.cos(g) * T, a = Math.sin(g) * T, q = Math.sin(g - _) * -F, G = Math.cos(g - _) * F, _ && (m *= yi, V = Math.tan(_ - m), V = Math.sqrt(1 + V * V), q *= V, G *= V, m && (V = Math.tan(m), V = Math.sqrt(1 + V * V), W *= V, a *= V)), W = st(W), a = st(a), q = st(q), G = st(G)) : (W = T, G = F, a = q = 0), (R && !~(f + "").indexOf("px") || z && !~(c + "").indexOf("px")) && (R = Sr(C, "x", f, "px"), z = Sr(C, "y", c, "px")), (E || v || O || A) && (R = st(R + E - (E * W + v * q) + O), z = st(z + v - (E * a + v * G) + A)), (i || o) && (V = C.getBBox(), R = st(R + i / 100 * V.width), z = st(z + o / 100 * V.height)), V = "matrix(" + W + "," + a + "," + q + "," + G + "," + R + "," + z + ")", C.setAttribute("transform", V), $ && (C.style[Ft] = V)
    }, oh = function (e, r, n, i, o) {
        var f = 360, c = xt(o), g = parseFloat(o) * (c && ~o.indexOf("rad") ? qr : 1), _ = g - i, m = i + _ + "deg", T, F;
        return c && (T = o.split("_")[1], T === "short" && (_ %= f, _ !== _ % (f / 2) && (_ += _ < 0 ? f : -f)), T === "cw" && _ < 0 ? _ = (_ + f * ha) % f - ~~(_ / f) * f : T === "ccw" && _ > 0 && (_ = (_ - f * ha) % f - ~~(_ / f) * f)), e._pt = F = new un(e._pt, r, n, i, _, Yc), F.e = m, F.u = "deg", e._props.push(n), F
    }, ya = function (e, r) {
        for (var n in r) e[n] = r[n];
        return e
    }, sh = function (e, r, n) {
        var i = ya({}, n._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", f = n.style, c, g, _, m, T, F, C, E;
        i.svg ? (_ = n.getAttribute("transform"), n.setAttribute("transform", ""), f[Ft] = r, c = au(n, 1), ou(n, Ft), n.setAttribute("transform", _)) : (_ = getComputedStyle(n)[Ft], f[Ft] = r, c = au(n, 1), f[Ft] = _);
        for (g in Er) _ = i[g], m = c[g], _ !== m && o.indexOf(g) < 0 && (C = Mt(_), E = Mt(m), T = C !== E ? Sr(n, g, _, E) : parseFloat(_), F = parseFloat(m), e._pt = new un(e._pt, c, g, T, F - T, kf), e._pt.u = E || 0, e._props.push(g));
        ya(c, i)
    };
rn("padding,margin,Width,Radius", function (h, e) {
    var r = "Top", n = "Right", i = "Bottom", o = "Left",
        f = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map(function (c) {
            return e < 2 ? h + c : "border" + c + h
        });
    no[e > 1 ? "border" + h : h] = function (c, g, _, m, T) {
        var F, C;
        if (arguments.length < 4) return F = f.map(function (E) {
            return Wr(c, E, _)
        }), C = F.join(" "), C.split(F[0]).length === 5 ? F[0] : C;
        F = (m + "").split(" "), C = {}, f.forEach(function (E, v) {
            return C[E] = F[v] = F[v] || F[(v - 1) / 2 | 0]
        }), c.init(g, C, T)
    }
});
var zf = {
    name: "css", register: rs, targetTest: function (e) {
        return e.style && e.nodeType
    }, init: function (e, r, n, i, o) {
        var f = this._props, c = e.style, g = n.vars.startAt, _, m, T, F, C, E, v, O, A, $, R, z, W, a, q;
        Ss || rs();
        for (v in r) if (v !== "autoRound" && (m = r[v], !(hn[v] && bf(v, r, n, i, e, o)))) {
            if (C = typeof m, E = no[v], C === "function" && (m = m.call(n, i, e, o), C = typeof m), C === "string" && ~m.indexOf("random(") && (m = ru(m)), E) E(this, e, v, m, n) && (q = 1); else if (v.substr(0, 2) === "--") _ = (getComputedStyle(e).getPropertyValue(v) + "").trim(), m += "", Tr.lastIndex = 0, Tr.test(_) || (O = Mt(_), A = Mt(m)), A ? O !== A && (_ = Sr(e, v, _, A) + A) : O && (m += O), this.add(c, "setProperty", _, m, i, o, 0, 0, v), f.push(v); else if (C !== "undefined") {
                if (g && v in g ? (_ = typeof g[v] == "function" ? g[v].call(n, i, e, o) : g[v], xt(_) && ~_.indexOf("random(") && (_ = ru(_)), Mt(_ + "") || (_ += Dn.units[v] || Mt(Wr(e, v)) || ""), (_ + "").charAt(1) === "=" && (_ = Wr(e, v))) : _ = Wr(e, v), F = parseFloat(_), $ = C === "string" && m.charAt(1) === "=" && m.substr(0, 2), $ && (m = m.substr(2)), T = parseFloat(m), v in vr && (v === "autoAlpha" && (F === 1 && Wr(e, "visibility") === "hidden" && T && (F = 0), Cr(this, c, "visibility", F ? "inherit" : "hidden", T ? "inherit" : "hidden", !T)), v !== "scale" && v !== "transform" && (v = vr[v], ~v.indexOf(",") && (v = v.split(",")[0]))), R = v in Er, R) {
                    if (z || (W = e._gsap, W.renderTransform && !r.parseTransform || au(e, r.parseTransform), a = r.smoothOrigin !== !1 && W.smooth, z = this._pt = new un(this._pt, c, Ft, 0, 1, W.renderTransform, W, 0, -1), z.dep = 1), v === "scale") this._pt = new un(this._pt, W, "scaleY", W.scaleY, ($ ? Di(W.scaleY, $ + T) : T) - W.scaleY || 0), f.push("scaleY", v), v += "X"; else if (v === "transformOrigin") {
                        m = nh(m), W.svg ? is(e, m, 0, a, 0, this) : (A = parseFloat(m.split(" ")[2]) || 0, A !== W.zOrigin && Cr(this, W, "zOrigin", W.zOrigin, A), Cr(this, c, v, ro(_), ro(m)));
                        continue
                    } else if (v === "svgOrigin") {
                        is(e, m, 1, a, 0, this);
                        continue
                    } else if (v in Rf) {
                        oh(this, W, v, F, $ ? Di(F, $ + m) : m);
                        continue
                    } else if (v === "smoothOrigin") {
                        Cr(this, W, "smooth", W.smooth, m);
                        continue
                    } else if (v === "force3D") {
                        W[v] = m;
                        continue
                    } else if (v === "transform") {
                        sh(this, m, e);
                        continue
                    }
                } else v in c || (v = Ei(v) || v);
                if (R || (T || T === 0) && (F || F === 0) && !Xc.test(m) && v in c) O = (_ + "").substr((F + "").length), T || (T = 0), A = Mt(m) || (v in Dn.units ? Dn.units[v] : O), O !== A && (F = Sr(e, v, _, A)), this._pt = new un(this._pt, R ? W : c, v, F, ($ ? Di(F, $ + T) : T) - F, !R && (A === "px" || v === "zIndex") && r.autoRound !== !1 ? Uc : kf), this._pt.u = A || 0, O !== A && A !== "%" && (this._pt.b = _, this._pt.r = Vc); else if (v in c) th.call(this, e, v, _, $ ? $ + m : m); else if (v in e) this.add(e, v, _ || e[v], $ ? $ + m : m, i, o); else {
                    ys(v, m);
                    continue
                }
                f.push(v)
            }
        }
        q && Af(this)
    }, get: Wr, aliases: vr, getSetter: function (e, r, n) {
        var i = vr[r];
        return i && i.indexOf(",") < 0 && (r = i), r in Er && r !== Fr && (e._gsap.x || Wr(e, "x")) ? n && ca === n ? r === "scale" ? Zc : Kc : (ca = n || {}) && (r === "scale" ? Jc : eh) : e.style && !Ds(e.style[r]) ? Gc : ~r.indexOf("-") ? Qc : Es(e, r)
    }, core: {_removeProperty: ou, _getMatrix: As}
};
Wn.utils.checkPrefix = Ei;
(function (h, e, r, n) {
    var i = rn(h + "," + e + "," + r, function (o) {
        Er[o] = 1
    });
    rn(e, function (o) {
        Dn.units[o] = "deg", Rf[o] = 1
    }), vr[i[13]] = h + "," + e, rn(n, function (o) {
        var f = o.split(":");
        vr[f[1]] = i[f[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (h) {
    Dn.units[h] = "px"
});
Wn.registerPlugin(zf);
var Xt = Wn.registerPlugin(zf) || Wn;
Xt.core.Tween;

function ma(h, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(h, n.key, n)
    }
}

function ah(h, e, r) {
    return e && ma(h.prototype, e), r && ma(h, r), h
}/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var $t, us, pn, Gr, Qr, mi, Hf, $r, Gi, qf, sr, Hn, Wf = function () {
    return $t || typeof window != "undefined" && ($t = window.gsap) && $t.registerPlugin && $t
}, $f = 1, pi = [], ke = [], Kn = [], Qi = Date.now, os = function (e, r) {
    return r
}, fh = function () {
    var e = Gi.core, r = e.bridge || {}, n = e._scrollers, i = e._proxies;
    n.push.apply(n, ke), i.push.apply(i, Kn), ke = n, Kn = i, os = function (f, c) {
        return r[f](c)
    }
}, wr = function (e, r) {
    return ~Kn.indexOf(e) && Kn[Kn.indexOf(e) + 1][r]
}, Hu = function (e) {
    return !!~qf.indexOf(e)
}, Jt = function (e, r, n, i, o) {
    return e.addEventListener(r, n, {passive: !i, capture: !!o})
}, jt = function (e, r, n, i) {
    return e.removeEventListener(r, n, !!i)
}, Fu = "scrollLeft", Su = "scrollTop", va = function () {
    return sr && sr.isPressed || ke.cache++
}, io = function (e, r) {
    var n = function i(o) {
        if (o || o === 0) {
            $f && (pn.history.scrollRestoration = "manual");
            var f = sr && sr.isPressed;
            o = i.v = Math.round(o) || (sr && sr.iOS ? 1 : 0), e(o), i.cacheID = ke.cache, f && os("ss", o)
        } else (r || ke.cache !== i.cacheID || os("ref")) && (i.cacheID = ke.cache, i.v = e());
        return i.v + i.offset
    };
    return n.offset = 0, e && n
}, Wt = {
    s: Fu, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: io(function (h) {
        return arguments.length ? pn.scrollTo(h, yt.sc()) : pn.pageXOffset || Gr[Fu] || Qr[Fu] || mi[Fu] || 0
    })
}, yt = {
    s: Su,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Wt,
    sc: io(function (h) {
        return arguments.length ? pn.scrollTo(Wt.sc(), h) : pn.pageYOffset || Gr[Su] || Qr[Su] || mi[Su] || 0
    })
}, en = function (e) {
    return $t.utils.toArray(e)[0] || (typeof e == "string" && $t.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, Ar = function (e, r) {
    var n = r.s, i = r.sc, o = ke.indexOf(e), f = i === yt.sc ? 1 : 2;
    return !~o && (o = ke.push(e) - 1), ke[o + f] || (ke[o + f] = io(wr(e, n), !0) || (Hu(e) ? i : io(function (c) {
        return arguments.length ? e[n] = c : e[n]
    })))
}, ss = function (e, r, n) {
    var i = e, o = e, f = Qi(), c = f, g = r || 50, _ = Math.max(500, g * 3), m = function (E, v) {
        var O = Qi();
        v || O - f > g ? (o = i, i = E, c = f, f = O) : n ? i += E : i = o + (E - o) / (O - c) * (f - c)
    }, T = function () {
        o = i = n ? 0 : i, c = f = 0
    }, F = function (E) {
        var v = c, O = o, A = Qi();
        return (E || E === 0) && E !== i && m(E), f === c || A - c > _ ? 0 : (i + (n ? O : -O)) / ((n ? A : f) - v) * 1e3
    };
    return {update: m, reset: T, getVelocity: F}
}, Ri = function (e, r) {
    return r && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
}, Ca = function (e) {
    var r = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
    return Math.abs(r) >= Math.abs(n) ? r : n
}, Xf = function () {
    Gi = $t.core.globals().ScrollTrigger, Gi && Gi.core && fh()
}, Yf = function (e) {
    return $t = e || Wf(), $t && typeof document != "undefined" && document.body && (pn = window, Gr = document, Qr = Gr.documentElement, mi = Gr.body, qf = [pn, Gr, Qr, mi], $t.utils.clamp, $r = "onpointerenter" in mi ? "pointer" : "mouse", Hf = ht.isTouch = pn.matchMedia && pn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in pn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Hn = ht.eventTypes = ("ontouchstart" in Qr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Qr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
        return $f = 0
    }, 500), Xf(), us = 1), us
};
Wt.op = yt;
ke.cache = 0;
var ht = function () {
    function h(r) {
        this.init(r)
    }

    var e = h.prototype;
    return e.init = function (n) {
        us || Yf($t) || console.warn("Please gsap.registerPlugin(Observer)"), Gi || Xf();
        var i = n.tolerance, o = n.dragMinimum, f = n.type, c = n.target, g = n.lineHeight, _ = n.debounce,
            m = n.preventDefault, T = n.onStop, F = n.onStopDelay, C = n.ignore, E = n.wheelSpeed, v = n.event,
            O = n.onDragStart, A = n.onDragEnd, $ = n.onDrag, R = n.onPress, z = n.onRelease, W = n.onRight,
            a = n.onLeft, q = n.onUp, G = n.onDown, V = n.onChangeX, K = n.onChangeY, he = n.onChange, J = n.onToggleX,
            be = n.onToggleY, ne = n.onHover, De = n.onHoverEnd, ce = n.onMove, Te = n.ignoreCheck, Ae = n.isNormalizer,
            Bt = n.onGestureStart, B = n.onGestureEnd, Me = n.onWheel, Zn = n.onEnable, rt = n.onDisable,
            it = n.onClick, kn = n.scrollSpeed, Le = n.capture, at = n.allowClicks, ft = n.lockAxis, Lt = n.onLockAxis;
        this.target = c = en(c) || Qr, this.vars = n, C && (C = $t.utils.toArray(C)), i = i || 0, o = o || 0, E = E || 1, kn = kn || 1, f = f || "wheel,touch,pointer", _ = _ !== !1, g || (g = parseFloat(pn.getComputedStyle(mi).lineHeight) || 22);
        var Yt, Vt, Se, Re, dt, St, ee, L = this, On = 0, $e = 0, $n = Ar(c, Wt), Mn = Ar(c, yt), Jn = $n(), ut = Mn(),
            Rt = ~f.indexOf("touch") && !~f.indexOf("pointer") && Hn[0] === "pointerdown", At = Hu(c),
            Ne = c.ownerDocument || Gr, It = [0, 0, 0], ot = [0, 0, 0], dr = 0, Nn = function () {
                return dr = Qi()
            }, yn = function (U, te) {
                return (L.event = U) && C && ~C.indexOf(U.target) || te && Rt && U.pointerType !== "touch" || Te && Te(U, te)
            }, mn = function () {
                L._vx.reset(), L._vy.reset(), Vt.pause(), T && T(L)
            }, Ut = function () {
                var U = L.deltaX = Ca(It), te = L.deltaY = Ca(ot), oe = Math.abs(U) >= i, le = Math.abs(te) >= i;
                he && (oe || le) && he(L, U, te, It, ot), oe && (W && L.deltaX > 0 && W(L), a && L.deltaX < 0 && a(L), V && V(L), J && L.deltaX < 0 != On < 0 && J(L), On = L.deltaX, It[0] = It[1] = It[2] = 0), le && (G && L.deltaY > 0 && G(L), q && L.deltaY < 0 && q(L), K && K(L), be && L.deltaY < 0 != $e < 0 && be(L), $e = L.deltaY, ot[0] = ot[1] = ot[2] = 0), (Re || Se) && (ce && ce(L), Lt && St && Lt(L), Se && ($(L), Se = !1), Re = St = !1), dt && (Me(L), dt = !1), Yt = 0
            }, Xn = function (U, te, oe) {
                It[oe] += U, ot[oe] += te, L._vx.update(U), L._vy.update(te), _ ? Yt || (Yt = requestAnimationFrame(Ut)) : Ut()
            }, er = function (U, te) {
                ee !== "y" && (It[2] += U, L._vx.update(U, !0)), ee !== "x" && (ot[2] += te, L._vy.update(te, !0)), ft && !ee && (L.axis = ee = Math.abs(U) > Math.abs(te) ? "x" : "y", St = !0), _ ? Yt || (Yt = requestAnimationFrame(Ut)) : Ut()
            }, ye = function (U) {
                if (!yn(U, 1)) {
                    U = Ri(U, m);
                    var te = U.clientX, oe = U.clientY, le = te - L.x, pt = oe - L.y, _e = L.isDragging;
                    L.x = te, L.y = oe, (_e || Math.abs(L.startX - te) >= o || Math.abs(L.startY - oe) >= o) && ($ && (Se = !0), _e || (L.isDragging = !0), er(le, pt), _e || O && O(L))
                }
            }, Ue = L.onPress = function (me) {
                yn(me, 1) || (L.axis = ee = null, Vt.pause(), L.isPressed = !0, me = Ri(me), On = $e = 0, L.startX = L.x = me.clientX, L.startY = L.y = me.clientY, L._vx.reset(), L._vy.reset(), Jt(Ae ? c : Ne, Hn[1], ye, m, !0), L.deltaX = L.deltaY = 0, R && R(L))
            }, bt = function (U) {
                if (!yn(U, 1)) {
                    jt(Ae ? c : Ne, Hn[1], ye, !0);
                    var te = L.isDragging && (Math.abs(L.x - L.startX) > 3 || Math.abs(L.y - L.startY) > 3), oe = Ri(U);
                    te || (L._vx.reset(), L._vy.reset(), m && at && $t.delayedCall(.08, function () {
                        if (Qi() - dr > 300 && !U.defaultPrevented) {
                            if (U.target.click) U.target.click(); else if (Ne.createEvent) {
                                var le = Ne.createEvent("MouseEvents");
                                le.initMouseEvent("click", !0, !0, pn, 1, oe.screenX, oe.screenY, oe.clientX, oe.clientY, !1, !1, !1, !1, 0, null), U.target.dispatchEvent(le)
                            }
                        }
                    })), L.isDragging = L.isGesturing = L.isPressed = !1, T && !Ae && Vt.restart(!0), A && te && A(L), z && z(L, te)
                }
            }, on = function (U) {
                return U.touches && U.touches.length > 1 && (L.isGesturing = !0) && Bt(U, L.isDragging)
            }, vn = function () {
                return (L.isGesturing = !1) || B(L)
            }, Bn = function (U) {
                if (!yn(U)) {
                    var te = $n(), oe = Mn();
                    Xn((te - Jn) * kn, (oe - ut) * kn, 1), Jn = te, ut = oe, T && Vt.restart(!0)
                }
            }, Gt = function (U) {
                if (!yn(U)) {
                    U = Ri(U, m), Me && (dt = !0);
                    var te = (U.deltaMode === 1 ? g : U.deltaMode === 2 ? pn.innerHeight : 1) * E;
                    Xn(U.deltaX * te, U.deltaY * te, 0), T && !Ae && Vt.restart(!0)
                }
            }, sn = function (U) {
                if (!yn(U)) {
                    var te = U.clientX, oe = U.clientY, le = te - L.x, pt = oe - L.y;
                    L.x = te, L.y = oe, Re = !0, (le || pt) && er(le, pt)
                }
            }, Ln = function (U) {
                L.event = U, ne(L)
            }, kr = function (U) {
                L.event = U, De(L)
            }, tr = function (U) {
                return yn(U) || Ri(U, m) && it(L)
            };
        Vt = L._dc = $t.delayedCall(F || .25, mn).pause(), L.deltaX = L.deltaY = 0, L._vx = ss(0, 50, !0), L._vy = ss(0, 50, !0), L.scrollX = $n, L.scrollY = Mn, L.isDragging = L.isGesturing = L.isPressed = !1, L.enable = function (me) {
            return L.isEnabled || (Jt(At ? Ne : c, "scroll", va), f.indexOf("scroll") >= 0 && Jt(At ? Ne : c, "scroll", Bn, m, Le), f.indexOf("wheel") >= 0 && Jt(c, "wheel", Gt, m, Le), (f.indexOf("touch") >= 0 && Hf || f.indexOf("pointer") >= 0) && (Jt(c, Hn[0], Ue, m, Le), Jt(Ne, Hn[2], bt), Jt(Ne, Hn[3], bt), at && Jt(c, "click", Nn, !1, !0), it && Jt(c, "click", tr), Bt && Jt(Ne, "gesturestart", on), B && Jt(Ne, "gestureend", vn), ne && Jt(c, $r + "enter", Ln), De && Jt(c, $r + "leave", kr), ce && Jt(c, $r + "move", sn)), L.isEnabled = !0, me && me.type && Ue(me), Zn && Zn(L)), L
        }, L.disable = function () {
            L.isEnabled && (pi.filter(function (me) {
                return me !== L && Hu(me.target)
            }).length || jt(At ? Ne : c, "scroll", va), L.isPressed && (L._vx.reset(), L._vy.reset(), jt(Ae ? c : Ne, Hn[1], ye, !0)), jt(At ? Ne : c, "scroll", Bn, Le), jt(c, "wheel", Gt, Le), jt(c, Hn[0], Ue, Le), jt(Ne, Hn[2], bt), jt(Ne, Hn[3], bt), jt(c, "click", Nn, !0), jt(c, "click", tr), jt(Ne, "gesturestart", on), jt(Ne, "gestureend", vn), jt(c, $r + "enter", Ln), jt(c, $r + "leave", kr), jt(c, $r + "move", sn), L.isEnabled = L.isPressed = L.isDragging = !1, rt && rt(L))
        }, L.kill = function () {
            L.disable();
            var me = pi.indexOf(L);
            me >= 0 && pi.splice(me, 1), sr === L && (sr = 0)
        }, pi.push(L), Ae && Hu(c) && (sr = L), L.enable(v)
    }, ah(h, [{
        key: "velocityX", get: function () {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY", get: function () {
            return this._vy.getVelocity()
        }
    }]), h
}();
ht.version = "3.10.4";
ht.create = function (h) {
    return new ht(h)
};
ht.register = Yf;
ht.getAll = function () {
    return pi.slice()
};
ht.getById = function (h) {
    return pi.filter(function (e) {
        return e.vars.id === h
    })[0]
};
Wf() && $t.registerPlugin(ht);/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var de, Yr, Ce, et, ar, tt, Vf, uo, oo, gi, qu, Au, wt, co, as, Ht, xa, ba, ci, Uf, zo, Gf, bn, Qf, Kf, Zf, Xr, Ho,
    qi = 1, qt = Date.now, qo = qt(), An = 0, Pu = 0, Ta = function () {
        return co = 1
    }, wa = function () {
        return co = 0
    }, _r = function (e) {
        return e
    }, fu = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, Jf = function () {
        return typeof window != "undefined"
    }, el = function () {
        return de || Jf() && (de = window.gsap) && de.registerPlugin && de
    }, ri = function (e) {
        return !!~Vf.indexOf(e)
    }, tl = function (e) {
        return wr(e, "getBoundingClientRect") || (ri(e) ? function () {
            return Gu.width = Ce.innerWidth, Gu.height = Ce.innerHeight, Gu
        } : function () {
            return or(e)
        })
    }, lh = function (e, r, n) {
        var i = n.d, o = n.d2, f = n.a;
        return (f = wr(e, "getBoundingClientRect")) ? function () {
            return f()[i]
        } : function () {
            return (r ? Ce["inner" + o] : e["client" + o]) || 0
        }
    }, ch = function (e, r) {
        return !r || ~Kn.indexOf(e) ? tl(e) : function () {
            return Gu
        }
    }, xr = function (e, r) {
        var n = r.s, i = r.d2, o = r.d, f = r.a;
        return (n = "scroll" + i) && (f = wr(e, n)) ? f() - tl(e)()[o] : ri(e) ? (ar[n] || tt[n]) - (Ce["inner" + i] || ar["client" + i] || tt["client" + i]) : e[n] - e["offset" + i]
    }, ku = function (e, r) {
        for (var n = 0; n < ci.length; n += 3) (!r || ~r.indexOf(ci[n + 1])) && e(ci[n], ci[n + 1], ci[n + 2])
    }, Un = function (e) {
        return typeof e == "string"
    }, qn = function (e) {
        return typeof e == "function"
    }, Wi = function (e) {
        return typeof e == "number"
    }, Wu = function (e) {
        return typeof e == "object"
    }, Ou = function (e) {
        return qn(e) && e()
    }, Ea = function (e, r) {
        return function () {
            var n = Ou(e), i = Ou(r);
            return function () {
                Ou(n), Ou(i)
            }
        }
    }, Ii = function (e, r, n) {
        return e && e.progress(r ? 0 : 1) && n && e.pause()
    }, Wo = function (e, r) {
        if (e.enabled) {
            var n = r(e);
            n && n.totalTime && (e.callbackAnimation = n)
        }
    }, fi = Math.abs, nl = "left", rl = "top", Ps = "right", ks = "bottom", ei = "width", ti = "height", Ki = "Right",
    Zi = "Left", Ji = "Top", eu = "Bottom", ct = "padding", wn = "margin", Fi = "Width", Os = "Height", zt = "px",
    Qn = function (e) {
        return Ce.getComputedStyle(e)
    }, hh = function (e) {
        var r = Qn(e).position;
        e.style.position = r === "absolute" || r === "fixed" ? r : "relative"
    }, Fa = function (e, r) {
        for (var n in r) n in e || (e[n] = r[n]);
        return e
    }, or = function (e, r) {
        var n = r && Qn(e)[as] !== "matrix(1, 0, 0, 1, 0, 0)" && de.to(e, {
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
        return n && n.progress(0).kill(), i
    }, fs = function (e, r) {
        var n = r.d2;
        return e["offset" + n] || e["client" + n] || 0
    }, il = function (e) {
        var r = [], n = e.labels, i = e.duration(), o;
        for (o in n) r.push(n[o] / i);
        return r
    }, dh = function (e) {
        return function (r) {
            return de.utils.snap(il(e), r)
        }
    }, Ms = function (e) {
        var r = de.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function (i, o) {
            return i - o
        });
        return n ? function (i, o, f) {
            f === void 0 && (f = .001);
            var c;
            if (!o) return r(i);
            if (o > 0) {
                for (i -= f, c = 0; c < n.length; c++) if (n[c] >= i) return n[c];
                return n[c - 1]
            } else for (c = n.length, i += f; c--;) if (n[c] <= i) return n[c];
            return n[0]
        } : function (i, o, f) {
            f === void 0 && (f = .001);
            var c = r(i);
            return !o || Math.abs(c - i) < f || c - i < 0 == o < 0 ? c : r(o < 0 ? i - e : i + e)
        }
    }, ph = function (e) {
        return function (r, n) {
            return Ms(il(e))(r, n.direction)
        }
    }, Mu = function (e, r, n, i) {
        return n.split(",").forEach(function (o) {
            return e(r, o, i)
        })
    }, Et = function (e, r, n, i, o) {
        return e.addEventListener(r, n, {passive: !i, capture: !!o})
    }, mt = function (e, r, n, i) {
        return e.removeEventListener(r, n, !!i)
    }, Nu = function (e, r, n) {
        return n && n.wheelHandler && e(r, "wheel", n)
    }, Sa = {startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal"},
    Bu = {toggleActions: "play", anticipatePin: 0}, so = {top: 0, left: 0, center: .5, bottom: 1, right: 1},
    $u = function (e, r) {
        if (Un(e)) {
            var n = e.indexOf("="), i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n && (e.indexOf("%") > n && (i *= r / 100), e = e.substr(0, n - 1)), e = i + (e in so ? so[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0)
        }
        return e
    }, Lu = function (e, r, n, i, o, f, c, g) {
        var _ = o.startColor, m = o.endColor, T = o.fontSize, F = o.indent, C = o.fontWeight, E = et.createElement("div"),
            v = ri(n) || wr(n, "pinType") === "fixed", O = e.indexOf("scroller") !== -1, A = v ? tt : n,
            $ = e.indexOf("start") !== -1, R = $ ? _ : m,
            z = "border-color:" + R + ";font-size:" + T + ";color:" + R + ";font-weight:" + C + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return z += "position:" + ((O || g) && v ? "fixed;" : "absolute;"), (O || g || !v) && (z += (i === yt ? Ps : ks) + ":" + (f + parseFloat(F)) + "px;"), c && (z += "box-sizing:border-box;text-align:left;width:" + c.offsetWidth + "px;"), E._isStart = $, E.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")), E.style.cssText = z, E.innerText = r || r === 0 ? e + "-" + r : e, A.children[0] ? A.insertBefore(E, A.children[0]) : A.appendChild(E), E._offset = E["offset" + i.op.d2], Xu(E, 0, i, $), E
    }, Xu = function (e, r, n, i) {
        var o = {display: "block"}, f = n[i ? "os2" : "p2"], c = n[i ? "p2" : "os2"];
        e._isFlipped = i, o[n.a + "Percent"] = i ? -100 : 0, o[n.a] = i ? "1px" : 0, o["border" + f + Fi] = 1, o["border" + c + Fi] = 0, o[n.p] = r + "px", de.set(e, o)
    }, Ee = [], ls = {}, cs, Aa = function () {
        return qt() - An > 34 && hu()
    }, li = function () {
        (!bn || !bn.isPressed || bn.startX > tt.clientWidth) && (ke.cache++, cs || (cs = requestAnimationFrame(hu)), An || ii("scrollStart"), An = qt())
    }, Pa = function () {
        Zf = Ce.innerWidth, Kf = Ce.innerHeight
    }, $i = function () {
        ke.cache++, !wt && !Gf && !et.fullscreenElement && !et.webkitFullscreenElement && (!Qf || Zf !== Ce.innerWidth || Math.abs(Ce.innerHeight - Kf) > Ce.innerHeight * .25) && uo.restart(!0)
    }, lu = {}, gh = [], nt = [], vi, ka, Oa = function (e) {
        var r = de.ticker.frame, n = [], i = 0, o;
        if (ka !== r || qi) {
            for (ao(); i < nt.length; i += 4) o = Ce.matchMedia(nt[i]).matches, o !== nt[i + 3] && (nt[i + 3] = o, o ? n.push(i) : ao(1, nt[i]) || qn(nt[i + 2]) && nt[i + 2]());
            for (ol(), i = 0; i < n.length; i++) o = n[i], vi = nt[o], nt[o + 2] = nt[o + 1](e);
            vi = 0, Yr && Ci(0, 1), ka = r, ii("matchMedia")
        }
    }, ul = function h() {
        return mt(Fe, "scrollEnd", h) || Ci(!0)
    }, ii = function (e) {
        return lu[e] && lu[e].map(function (r) {
            return r()
        }) || gh
    }, Tn = [], ol = function (e) {
        for (var r = 0; r < Tn.length; r += 5) (!e || Tn[r + 4] === e) && (Tn[r].style.cssText = Tn[r + 1], Tn[r].getBBox && Tn[r].setAttribute("transform", Tn[r + 2] || ""), Tn[r + 3].uncache = 1)
    }, ao = function (e, r) {
        var n;
        for (Ht = 0; Ht < Ee.length; Ht++) n = Ee[Ht], (!r || n.media === r) && (e ? n.kill(1) : n.revert());
        r && ol(r), r || ii("revert")
    }, sl = function () {
        return ke.cache++ && ke.forEach(function (e) {
            return typeof e == "function" && (e.rec = 0)
        })
    }, cu, Yu = 0, Ci = function (e, r) {
        if (An && !e) {
            Et(Fe, "scrollEnd", ul);
            return
        }
        cu = !0;
        var n = ii("refreshInit");
        Uf && Fe.sort(), r || ao(), Ee.slice(0).forEach(function (i) {
            return i.refresh()
        }), Ee.forEach(function (i) {
            return i.vars.end === "max" && i.setPositions(i.start, xr(i.scroller, i._dir))
        }), n.forEach(function (i) {
            return i && i.render && i.render(-1)
        }), sl(), uo.pause(), Yu++, cu = !1, ii("refresh")
    }, Ma = 0, Vu = 1, Vr, hu = function () {
        if (!cu) {
            Fe.isUpdating = !0, Vr && Vr.update(0);
            var e = Ee.length, r = qt(), n = r - qo >= 50, i = e && Ee[0].scroll();
            if (Vu = Ma > i ? -1 : 1, Ma = i, n && (An && !co && r - An > 200 && (An = 0, ii("scrollEnd")), qu = qo, qo = r), Vu < 0) {
                for (Ht = e; Ht-- > 0;) Ee[Ht] && Ee[Ht].update(0, n);
                Vu = 1
            } else for (Ht = 0; Ht < e; Ht++) Ee[Ht] && Ee[Ht].update(0, n);
            Fe.isUpdating = !1
        }
        cs = 0
    },
    hs = [nl, rl, ks, Ps, wn + eu, wn + Ki, wn + Ji, wn + Zi, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Uu = hs.concat([ei, ti, "boxSizing", "max" + Fi, "max" + Os, "position", wn, ct, ct + Ji, ct + Ki, ct + eu, ct + Zi]),
    Dh = function (e, r, n) {
        du(n);
        var i = e._gsap;
        if (i.spacerIsNative) du(i.spacerState); else if (e.parentNode === r) {
            var o = r.parentNode;
            o && (o.insertBefore(e, r), o.removeChild(r))
        }
    }, $o = function (e, r, n, i) {
        if (e.parentNode !== r) {
            for (var o = hs.length, f = r.style, c = e.style, g; o--;) g = hs[o], f[g] = n[g];
            f.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (f.display = "inline-block"), c[ks] = c[Ps] = f.flexBasis = "auto", f.overflow = "visible", f.boxSizing = "border-box", f[ei] = fs(e, Wt) + zt, f[ti] = fs(e, yt) + zt, f[ct] = c[wn] = c[rl] = c[nl] = "0", du(i), c[ei] = c["max" + Fi] = n[ei], c[ti] = c["max" + Os] = n[ti], c[ct] = n[ct], e.parentNode.insertBefore(r, e), r.appendChild(e)
        }
    }, _h = /([A-Z])/g, du = function (e) {
        if (e) {
            var r = e.t.style, n = e.length, i = 0, o, f;
            for ((e.t._gsap || de.core.getCache(e.t)).uncache = 1; i < n; i += 2) f = e[i + 1], o = e[i], f ? r[o] = f : r[o] && r.removeProperty(o.replace(_h, "-$1").toLowerCase())
        }
    }, Ru = function (e) {
        for (var r = Uu.length, n = e.style, i = [], o = 0; o < r; o++) i.push(Uu[o], n[Uu[o]]);
        return i.t = e, i
    }, yh = function (e, r, n) {
        for (var i = [], o = e.length, f = n ? 8 : 0, c; f < o; f += 2) c = e[f], i.push(c, c in r ? r[c] : e[f + 1]);
        return i.t = e.t, i
    }, Gu = {left: 0, top: 0}, Na = function (e, r, n, i, o, f, c, g, _, m, T, F, C) {
        qn(e) && (e = e(g)), Un(e) && e.substr(0, 3) === "max" && (e = F + (e.charAt(4) === "=" ? $u("0" + e.substr(3), n) : 0));
        var E = C ? C.time() : 0, v, O, A;
        if (C && C.seek(0), Wi(e)) c && Xu(c, n, i, !0); else {
            qn(r) && (r = r(g));
            var $ = e.split(" "), R, z, W, a;
            A = en(r) || tt, R = or(A) || {}, (!R || !R.left && !R.top) && Qn(A).display === "none" && (a = A.style.display, A.style.display = "block", R = or(A), a ? A.style.display = a : A.style.removeProperty("display")), z = $u($[0], R[i.d]), W = $u($[1] || "0", n), e = R[i.p] - _[i.p] - m + z + o - W, c && Xu(c, W, i, n - W < 20 || c._isStart && W > 20), n -= n - W
        }
        if (f) {
            var q = e + n, G = f._isStart;
            v = "scroll" + i.d2, Xu(f, q, i, G && q > 20 || !G && (T ? Math.max(tt[v], ar[v]) : f.parentNode[v]) <= q + 1), T && (_ = or(c), T && (f.style[i.op.p] = _[i.op.p] - i.op.m - f._offset + zt))
        }
        return C && A && (v = or(A), C.seek(F), O = or(A), C._caScrollDist = v[i.p] - O[i.p], e = e / C._caScrollDist * F), C && C.seek(E), C ? e : Math.round(e)
    }, mh = /(webkit|moz|length|cssText|inset)/i, Ba = function (e, r, n, i) {
        if (e.parentNode !== r) {
            var o = e.style, f, c;
            if (r === tt) {
                e._stOrig = o.cssText, c = Qn(e);
                for (f in c) !+f && !mh.test(f) && c[f] && typeof o[f] == "string" && f !== "0" && (o[f] = c[f]);
                o.top = n, o.left = i
            } else o.cssText = e._stOrig;
            de.core.getCache(e).uncache = 1, r.appendChild(e)
        }
    }, La = function (e, r) {
        var n = Ar(e, r), i = "_scroll" + r.p2, o, f, c = function g(_, m, T, F, C) {
            var E = g.tween, v = m.onComplete, O = {};
            return T = T || n(), C = F && C || 0, F = F || _ - T, E && E.kill(), o = Math.round(T), m[i] = _, m.modifiers = O, O[i] = function (A) {
                return A = fu(n()), A !== o && A !== f && Math.abs(A - o) > 2 && Math.abs(A - f) > 2 ? (E.kill(), g.tween = 0) : A = T + F * E.ratio + C * E.ratio * E.ratio, f = o, o = fu(A)
            }, m.onComplete = function () {
                g.tween = 0, v && v.call(E)
            }, E = g.tween = de.to(e, m), E
        };
        return e[i] = n, n.wheelHandler = function () {
            return c.tween && c.tween.kill() && (c.tween = 0)
        }, Et(e, "wheel", n.wheelHandler), c
    }, Fe = function () {
        function h(r, n) {
            Yr || h.register(de) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(r, n)
        }

        var e = h.prototype;
        return e.init = function (n, i) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Pu) {
                this.update = this.refresh = this.kill = _r;
                return
            }
            n = Fa(Un(n) || Wi(n) || n.nodeType ? {trigger: n} : n, Bu);
            var o = n, f = o.onUpdate, c = o.toggleClass, g = o.id, _ = o.onToggle, m = o.onRefresh, T = o.scrub,
                F = o.trigger, C = o.pin, E = o.pinSpacing, v = o.invalidateOnRefresh, O = o.anticipatePin,
                A = o.onScrubComplete, $ = o.onSnapComplete, R = o.once, z = o.snap, W = o.pinReparent, a = o.pinSpacer,
                q = o.containerAnimation, G = o.fastScrollEnd, V = o.preventOverlaps,
                K = n.horizontal || n.containerAnimation && n.horizontal !== !1 ? Wt : yt, he = !T && T !== 0,
                J = en(n.scroller || Ce), be = de.core.getCache(J), ne = ri(J),
                De = ("pinType" in n ? n.pinType : wr(J, "pinType") || ne && "fixed") === "fixed",
                ce = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack], Te = he && n.toggleActions.split(" "),
                Ae = "markers" in n ? n.markers : Bu.markers, Bt = ne ? 0 : parseFloat(Qn(J)["border" + K.p2 + Fi]) || 0,
                B = this, Me = n.onRefreshInit && function () {
                    return n.onRefreshInit(B)
                }, Zn = lh(J, ne, K), rt = ch(J, ne), it = 0, kn = 0, Le = Ar(J, K), at, ft, Lt, Yt, Vt, Se, Re, dt, St, ee, L,
                On, $e, $n, Mn, Jn, ut, Rt, At, Ne, It, ot, dr, Nn, yn, mn, Ut, Xn, er, ye, Ue, bt, on, vn, Bn, Gt, sn, Ln;
            if (B.media = vi, B._dir = K, O *= 45, B.scroller = J, B.scroll = q ? q.time.bind(q) : Le, Yt = Le(), B.vars = n, i = i || n.animation, "refreshPriority" in n && (Uf = 1, n.refreshPriority === -9999 && (Vr = B)), be.tweenScroll = be.tweenScroll || {
                top: La(J, yt),
                left: La(J, Wt)
            }, B.tweenTo = at = be.tweenScroll[K.p], B.scrubDuration = function (U) {
                Ue = Wi(U) && U, Ue ? ye ? ye.duration(U) : ye = de.to(i, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: Ue,
                    paused: !0,
                    onComplete: function () {
                        return A && A(B)
                    }
                }) : (ye && ye.progress(1).kill(), ye = 0)
            }, i && (i.vars.lazy = !1, i._initted || i.vars.immediateRender !== !1 && n.immediateRender !== !1 && i.render(0, !0, !0), B.animation = i.pause(), i.scrollTrigger = B, B.scrubDuration(T), Xn = 0, g || (g = i.vars.id)), Ee.push(B), z && ((!Wu(z) || z.push) && (z = {snapTo: z}), "scrollBehavior" in tt.style && de.set(ne ? [tt, ar] : J, {scrollBehavior: "auto"}), Lt = qn(z.snapTo) ? z.snapTo : z.snapTo === "labels" ? dh(i) : z.snapTo === "labelsDirectional" ? ph(i) : z.directional !== !1 ? function (U, te) {
                return Ms(z.snapTo)(U, qt() - kn < 500 ? 0 : te.direction)
            } : de.utils.snap(z.snapTo), bt = z.duration || {
                min: .1,
                max: 2
            }, bt = Wu(bt) ? gi(bt.min, bt.max) : gi(bt, bt), on = de.delayedCall(z.delay || Ue / 2 || .1, function () {
                var U = Le(), te = qt() - kn < 500, oe = at.tween;
                if ((te || Math.abs(B.getVelocity()) < 10) && !oe && !co && it !== U) {
                    var le = (U - Se) / $e, pt = i && !he ? i.totalProgress() : le,
                        _e = te ? 0 : (pt - er) / (qt() - qu) * 1e3 || 0,
                        Ge = de.utils.clamp(-le, 1 - le, fi(_e / 2) * _e / .185), Xe = le + (z.inertia === !1 ? 0 : Ge),
                        Tt = gi(0, 1, Lt(Xe, B)), Oe = Math.round(Se + Tt * $e), gt = z, Pt = gt.onStart,
                        We = gt.onInterrupt, Ye = gt.onComplete;
                    if (U <= Re && U >= Se && Oe !== U) {
                        if (oe && !oe._initted && oe.data <= fi(Oe - U)) return;
                        z.inertia === !1 && (Ge = Tt - le), at(Oe, {
                            duration: bt(fi(Math.max(fi(Xe - pt), fi(Tt - pt)) * .185 / _e / .05 || 0)),
                            ease: z.ease || "power3",
                            data: fi(Oe - U),
                            onInterrupt: function () {
                                return on.restart(!0) && We && We(B)
                            },
                            onComplete: function () {
                                B.update(), it = Le(), Xn = er = i && !he ? i.totalProgress() : B.progress, $ && $(B), Ye && Ye(B)
                            }
                        }, U, Ge * $e, Oe - U - Ge * $e), Pt && Pt(B, at.tween)
                    }
                } else B.isActive && it !== U && on.restart(!0)
            }).pause()), g && (ls[g] = B), F = B.trigger = en(F || C), Ln = F && F._gsap && F._gsap.stRevert, Ln && (Ln = Ln(B)), C = C === !0 ? F : en(C), Un(c) && (c = {
                targets: F,
                className: c
            }), C && (E === !1 || E === wn || (E = !E && Qn(C.parentNode).display === "flex" ? !1 : ct), B.pin = C, n.force3D !== !1 && de.set(C, {force3D: !0}), ft = de.core.getCache(C), ft.spacer ? $n = ft.pinState : (a && (a = en(a), a && !a.nodeType && (a = a.current || a.nativeElement), ft.spacerIsNative = !!a, a && (ft.spacerState = Ru(a))), ft.spacer = ut = a || et.createElement("div"), ut.classList.add("pin-spacer"), g && ut.classList.add("pin-spacer-" + g), ft.pinState = $n = Ru(C)), B.spacer = ut = ft.spacer, Ut = Qn(C), dr = Ut[E + K.os2], At = de.getProperty(C), Ne = de.quickSetter(C, K.a, zt), $o(C, ut, Ut), Jn = Ru(C)), Ae) {
                On = Wu(Ae) ? Fa(Ae, Sa) : Sa, ee = Lu("scroller-start", g, J, K, On, 0), L = Lu("scroller-end", g, J, K, On, 0, ee), Rt = ee["offset" + K.op.d2];
                var kr = en(wr(J, "content") || J);
                dt = this.markerStart = Lu("start", g, kr, K, On, Rt, 0, q), St = this.markerEnd = Lu("end", g, kr, K, On, Rt, 0, q), q && (sn = de.quickSetter([dt, St], K.a, zt)), !De && !(Kn.length && wr(J, "fixedMarkers") === !0) && (hh(ne ? tt : J), de.set([ee, L], {force3D: !0}), yn = de.quickSetter(ee, K.a, zt), mn = de.quickSetter(L, K.a, zt))
            }
            if (q) {
                var tr = q.vars.onUpdate, me = q.vars.onUpdateParams;
                q.eventCallback("onUpdate", function () {
                    B.update(0, 0, 1), tr && tr.apply(me || [])
                })
            }
            B.previous = function () {
                return Ee[Ee.indexOf(B) - 1]
            }, B.next = function () {
                return Ee[Ee.indexOf(B) + 1]
            }, B.revert = function (U) {
                var te = U !== !1 || !B.enabled, oe = wt;
                te !== B.isReverted && (te && (B.scroll.rec || !wt || !cu || (B.scroll.rec = Le()), Bn = Math.max(Le(), B.scroll.rec || 0), vn = B.progress, Gt = i && i.progress()), dt && [dt, St, ee, L].forEach(function (le) {
                    return le.style.display = te ? "none" : "block"
                }), te && (wt = 1), B.update(te), wt = oe, C && (te ? Dh(C, ut, $n) : (!W || !B.isActive) && $o(C, ut, Qn(C), Nn)), B.isReverted = te)
            }, B.refresh = function (U, te) {
                if (!((wt || !B.enabled) && !te)) {
                    if (C && U && An) {
                        Et(h, "scrollEnd", ul);
                        return
                    }
                    !cu && Me && Me(B), wt = 1, kn = qt(), at.tween && (at.tween.kill(), at.tween = 0), ye && ye.pause(), v && i && i.time(-.01, !0).invalidate(), B.isReverted || B.revert();
                    for (var oe = Zn(), le = rt(), pt = q ? q.duration() : xr(J, K), _e = 0, Ge = 0, Xe = n.end, Tt = n.endTrigger || F, Oe = n.start || (n.start === 0 || !F ? 0 : C ? "0 0" : "0 100%"), gt = B.pinnedContainer = n.pinnedContainer && en(n.pinnedContainer), Pt = F && Math.max(0, Ee.indexOf(B)) || 0, We = Pt, Ye, qe, nr, Yn, Je, Qe, Rn, Or, Du, pr; We--;) Qe = Ee[We], Qe.end || Qe.refresh(0, 1) || (wt = 1), Rn = Qe.pin, Rn && (Rn === F || Rn === C) && !Qe.isReverted && (pr || (pr = []), pr.unshift(Qe), Qe.revert()), Qe !== Ee[We] && (Pt--, We--);
                    for (qn(Oe) && (Oe = Oe(B)), Se = Na(Oe, F, oe, K, Le(), dt, ee, B, le, Bt, De, pt, q) || (C ? -.001 : 0), qn(Xe) && (Xe = Xe(B)), Un(Xe) && !Xe.indexOf("+=") && (~Xe.indexOf(" ") ? Xe = (Un(Oe) ? Oe.split(" ")[0] : "") + Xe : (_e = $u(Xe.substr(2), oe), Xe = Un(Oe) ? Oe : Se + _e, Tt = F)), Re = Math.max(Se, Na(Xe || (Tt ? "100% 0" : pt), Tt, oe, K, Le() + _e, St, L, B, le, Bt, De, pt, q)) || -.001, $e = Re - Se || (Se -= .01) && .001, _e = 0, We = Pt; We--;) Qe = Ee[We], Rn = Qe.pin, Rn && Qe.start - Qe._pinPush < Se && !q && Qe.end > 0 && (Ye = Qe.end - Qe.start, (Rn === F || Rn === gt) && !Wi(Oe) && (_e += Ye * (1 - Qe.progress)), Rn === C && (Ge += Ye));
                    if (Se += _e, Re += _e, B._pinPush = Ge, dt && _e && (Ye = {}, Ye[K.a] = "+=" + _e, gt && (Ye[K.p] = "-=" + Le()), de.set([dt, St], Ye)), C) Ye = Qn(C), Yn = K === yt, nr = Le(), It = parseFloat(At(K.a)) + Ge, !pt && Re > 1 && ((ne ? tt : J).style["overflow-" + K.a] = "scroll"), $o(C, ut, Ye), Jn = Ru(C), qe = or(C, !0), Or = De && Ar(J, Yn ? Wt : yt)(), E && (Nn = [E + K.os2, $e + Ge + zt], Nn.t = ut, We = E === ct ? fs(C, K) + $e + Ge : 0, We && Nn.push(K.d, We + zt), du(Nn), De && Le(Bn)), De && (Je = {
                        top: qe.top + (Yn ? nr - Se : Or) + zt,
                        left: qe.left + (Yn ? Or : nr - Se) + zt,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, Je[ei] = Je["max" + Fi] = Math.ceil(qe.width) + zt, Je[ti] = Je["max" + Os] = Math.ceil(qe.height) + zt, Je[wn] = Je[wn + Ji] = Je[wn + Ki] = Je[wn + eu] = Je[wn + Zi] = "0", Je[ct] = Ye[ct], Je[ct + Ji] = Ye[ct + Ji], Je[ct + Ki] = Ye[ct + Ki], Je[ct + eu] = Ye[ct + eu], Je[ct + Zi] = Ye[ct + Zi], Mn = yh($n, Je, W)), i ? (Du = i._initted, zo(1), i.render(i.duration(), !0, !0), ot = At(K.a) - It + $e + Ge, $e !== ot && De && Mn.splice(Mn.length - 2, 2), i.render(0, !0, !0), Du || i.invalidate(), zo(0)) : ot = $e; else if (F && Le() && !q) for (qe = F.parentNode; qe && qe !== tt;) qe._pinOffset && (Se -= qe._pinOffset, Re -= qe._pinOffset), qe = qe.parentNode;
                    pr && pr.forEach(function (po) {
                        return po.revert(!1)
                    }), B.start = Se, B.end = Re, Yt = Vt = Le(), q || (Yt < Bn && Le(Bn), B.scroll.rec = 0), B.revert(!1), on && (it = -1, B.isActive && Le(Se + $e * vn), on.restart(!0)), wt = 0, i && he && (i._initted || Gt) && i.progress() !== Gt && i.progress(Gt, !0).render(i.time(), !0, !0), (vn !== B.progress || q) && (i && !he && i.totalProgress(vn, !0), B.progress = vn, B.update(0, 0, 1)), C && E && (ut._pinOffset = Math.round(B.progress * ot)), m && m(B)
                }
            }, B.getVelocity = function () {
                return (Le() - Vt) / (qt() - qu) * 1e3 || 0
            }, B.endAnimation = function () {
                Ii(B.callbackAnimation), i && (ye ? ye.progress(1) : i.paused() ? he || Ii(i, B.direction < 0, 1) : Ii(i, i.reversed()))
            }, B.labelToScroll = function (U) {
                return i && i.labels && (Se || B.refresh() || Se) + i.labels[U] / i.duration() * $e || 0
            }, B.getTrailing = function (U) {
                var te = Ee.indexOf(B), oe = B.direction > 0 ? Ee.slice(0, te).reverse() : Ee.slice(te + 1);
                return (Un(U) ? oe.filter(function (le) {
                    return le.vars.preventOverlaps === U
                }) : oe).filter(function (le) {
                    return B.direction > 0 ? le.end <= Se : le.start >= Re
                })
            }, B.update = function (U, te, oe) {
                if (!(q && !oe && !U)) {
                    var le = B.scroll(), pt = U ? 0 : (le - Se) / $e, _e = pt < 0 ? 0 : pt > 1 ? 1 : pt || 0,
                        Ge = B.progress, Xe, Tt, Oe, gt, Pt, We, Ye, qe;
                    if (te && (Vt = Yt, Yt = q ? Le() : le, z && (er = Xn, Xn = i && !he ? i.totalProgress() : _e)), O && !_e && C && !wt && !qi && An && Se < le + (le - Vt) / (qt() - qu) * O && (_e = 1e-4), _e !== Ge && B.enabled) {
                        if (Xe = B.isActive = !!_e && _e < 1, Tt = !!Ge && Ge < 1, We = Xe !== Tt, Pt = We || !!_e != !!Ge, B.direction = _e > Ge ? 1 : -1, B.progress = _e, Pt && !wt && (Oe = _e && !Ge ? 0 : _e === 1 ? 1 : Ge === 1 ? 2 : 3, he && (gt = !We && Te[Oe + 1] !== "none" && Te[Oe + 1] || Te[Oe], qe = i && (gt === "complete" || gt === "reset" || gt in i))), V && (We || qe) && (qe || T || !i) && (qn(V) ? V(B) : B.getTrailing(V).forEach(function (Qe) {
                            return Qe.endAnimation()
                        })), he || (ye && !wt && !qi ? ((q || Vr && Vr !== B) && ye.render(ye._dp._time - ye._start), ye.resetTo ? ye.resetTo("totalProgress", _e, i._tTime / i._tDur) : (ye.vars.totalProgress = _e, ye.invalidate().restart())) : i && i.totalProgress(_e, !!wt)), C) {
                            if (U && E && (ut.style[E + K.os2] = dr), !De) Ne(fu(It + ot * _e)); else if (Pt) {
                                if (Ye = !U && _e > Ge && Re + 1 > le && le + 1 >= xr(J, K), W) if (!U && (Xe || Ye)) {
                                    var nr = or(C, !0), Yn = le - Se;
                                    Ba(C, tt, nr.top + (K === yt ? Yn : 0) + zt, nr.left + (K === yt ? 0 : Yn) + zt)
                                } else Ba(C, ut);
                                du(Xe || Ye ? Mn : Jn), ot !== $e && _e < 1 && Xe || Ne(It + (_e === 1 && !Ye ? ot : 0))
                            }
                        }
                        z && !at.tween && !wt && !qi && on.restart(!0), c && (We || R && _e && (_e < 1 || !Ho)) && oo(c.targets).forEach(function (Qe) {
                            return Qe.classList[Xe || R ? "add" : "remove"](c.className)
                        }), f && !he && !U && f(B), Pt && !wt ? (he && (qe && (gt === "complete" ? i.pause().totalProgress(1) : gt === "reset" ? i.restart(!0).pause() : gt === "restart" ? i.restart(!0) : i[gt]()), f && f(B)), (We || !Ho) && (_ && We && Wo(B, _), ce[Oe] && Wo(B, ce[Oe]), R && (_e === 1 ? B.kill(!1, 1) : ce[Oe] = 0), We || (Oe = _e === 1 ? 1 : 3, ce[Oe] && Wo(B, ce[Oe]))), G && !Xe && Math.abs(B.getVelocity()) > (Wi(G) ? G : 2500) && (Ii(B.callbackAnimation), ye ? ye.progress(1) : Ii(i, !_e, 1))) : he && f && !wt && f(B)
                    }
                    if (mn) {
                        var Je = q ? le / q.duration() * (q._caScrollDist || 0) : le;
                        yn(Je + (ee._isFlipped ? 1 : 0)), mn(Je)
                    }
                    sn && sn(-le / q.duration() * (q._caScrollDist || 0))
                }
            }, B.enable = function (U, te) {
                B.enabled || (B.enabled = !0, Et(J, "resize", $i), Et(ne ? et : J, "scroll", li), Me && Et(h, "refreshInit", Me), U !== !1 && (B.progress = vn = 0, Yt = Vt = it = Le()), te !== !1 && B.refresh())
            }, B.getTween = function (U) {
                return U && at ? at.tween : ye
            }, B.setPositions = function (U, te) {
                C && (It += U - Se, ot += te - U - $e), B.start = Se = U, B.end = Re = te, $e = te - U, B.update()
            }, B.disable = function (U, te) {
                if (B.enabled && (U !== !1 && B.revert(), B.enabled = B.isActive = !1, te || ye && ye.pause(), Bn = 0, ft && (ft.uncache = 1), Me && mt(h, "refreshInit", Me), on && (on.pause(), at.tween && at.tween.kill() && (at.tween = 0)), !ne)) {
                    for (var oe = Ee.length; oe--;) if (Ee[oe].scroller === J && Ee[oe] !== B) return;
                    mt(J, "resize", $i), mt(J, "scroll", li)
                }
            }, B.kill = function (U, te) {
                B.disable(U, te), ye && !te && ye.kill(), g && delete ls[g];
                var oe = Ee.indexOf(B);
                oe >= 0 && Ee.splice(oe, 1), oe === Ht && Vu > 0 && Ht--, oe = 0, Ee.forEach(function (le) {
                    return le.scroller === B.scroller && (oe = 1)
                }), oe || (B.scroll.rec = 0), i && (i.scrollTrigger = null, U && i.render(-1), te || i.kill()), dt && [dt, St, ee, L].forEach(function (le) {
                    return le.parentNode && le.parentNode.removeChild(le)
                }), Vr === B && (Vr = 0), C && (ft && (ft.uncache = 1), oe = 0, Ee.forEach(function (le) {
                    return le.pin === C && oe++
                }), oe || (ft.spacer = 0)), n.onKill && n.onKill(B)
            }, B.enable(!1, !1), Ln && Ln(B), !i || !i.add || $e ? B.refresh() : de.delayedCall(.01, function () {
                return Se || Re || B.refresh()
            }) && ($e = .01) && (Se = Re = 0)
        }, h.register = function (n) {
            return Yr || (de = n || el(), Jf() && window.document && h.enable(), Yr = Pu), Yr
        }, h.defaults = function (n) {
            if (n) for (var i in n) Bu[i] = n[i];
            return Bu
        }, h.disable = function (n, i) {
            Pu = 0, Ee.forEach(function (f) {
                return f[i ? "kill" : "disable"](n)
            }), mt(Ce, "wheel", li), mt(et, "scroll", li), clearInterval(Au), mt(et, "touchcancel", _r), mt(tt, "touchstart", _r), Mu(mt, et, "pointerdown,touchstart,mousedown", Ta), Mu(mt, et, "pointerup,touchend,mouseup", wa), uo.kill(), ku(mt);
            for (var o = 0; o < ke.length; o += 3) Nu(mt, ke[o], ke[o + 1]), Nu(mt, ke[o], ke[o + 2])
        }, h.enable = function () {
            if (Ce = window, et = document, ar = et.documentElement, tt = et.body, de && (oo = de.utils.toArray, gi = de.utils.clamp, zo = de.core.suppressOverwrites || _r, de.core.globals("ScrollTrigger", h), tt)) {
                Pu = 1, ht.register(de), h.isTouch = ht.isTouch, Xr = ht.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Et(Ce, "wheel", li), Vf = [Ce, et, ar, tt], h.matchMedia({
                    "(orientation: portrait)": function () {
                        return Pa(), Pa
                    }
                }), Et(et, "scroll", li);
                var n = tt.style, i = n.borderTopStyle, o, f;
                for (n.borderTopStyle = "solid", o = or(tt), yt.m = Math.round(o.top + yt.sc()) || 0, Wt.m = Math.round(o.left + Wt.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), Au = setInterval(Aa, 250), de.delayedCall(.5, function () {
                    return qi = 0
                }), Et(et, "touchcancel", _r), Et(tt, "touchstart", _r), Mu(Et, et, "pointerdown,touchstart,mousedown", Ta), Mu(Et, et, "pointerup,touchend,mouseup", wa), as = de.utils.checkPrefix("transform"), Uu.push(as), Yr = qt(), uo = de.delayedCall(.2, Ci).pause(), ci = [et, "visibilitychange", function () {
                    var c = Ce.innerWidth, g = Ce.innerHeight;
                    et.hidden ? (xa = c, ba = g) : (xa !== c || ba !== g) && $i()
                }, et, "DOMContentLoaded", Ci, Ce, "load", Ci, Ce, "resize", $i], ku(Et), Ee.forEach(function (c) {
                    return c.enable(0, 1)
                }), f = 0; f < ke.length; f += 3) Nu(mt, ke[f], ke[f + 1]), Nu(mt, ke[f], ke[f + 2])
            }
        }, h.config = function (n) {
            "limitCallbacks" in n && (Ho = !!n.limitCallbacks);
            var i = n.syncInterval;
            i && clearInterval(Au) || (Au = i) && setInterval(Aa, i), "ignoreMobileResize" in n && (Qf = h.isTouch === 1 && n.ignoreMobileResize), "autoRefreshEvents" in n && (ku(mt) || ku(Et, n.autoRefreshEvents || "none"), Gf = (n.autoRefreshEvents + "").indexOf("resize") === -1)
        }, h.scrollerProxy = function (n, i) {
            var o = en(n), f = ke.indexOf(o), c = ri(o);
            ~f && ke.splice(f, c ? 6 : 2), i && (c ? Kn.unshift(Ce, i, tt, i, ar, i) : Kn.unshift(o, i))
        }, h.matchMedia = function (n) {
            var i, o, f, c, g;
            for (o in n) f = nt.indexOf(o), c = n[o], vi = o, o === "all" ? c() : (i = Ce.matchMedia(o), i && (i.matches && (g = c()), ~f ? (nt[f + 1] = Ea(nt[f + 1], c), nt[f + 2] = Ea(nt[f + 2], g)) : (f = nt.length, nt.push(o, c, g), i.addListener ? i.addListener(Oa) : i.addEventListener("change", Oa)), nt[f + 3] = i.matches)), vi = 0;
            return nt
        }, h.clearMatchMedia = function (n) {
            n || (nt.length = 0), n = nt.indexOf(n), n >= 0 && nt.splice(n, 4)
        }, h.isInViewport = function (n, i, o) {
            var f = (Un(n) ? en(n) : n).getBoundingClientRect(), c = f[o ? ei : ti] * i || 0;
            return o ? f.right - c > 0 && f.left + c < Ce.innerWidth : f.bottom - c > 0 && f.top + c < Ce.innerHeight
        }, h.positionInViewport = function (n, i, o) {
            Un(n) && (n = en(n));
            var f = n.getBoundingClientRect(), c = f[o ? ei : ti],
                g = i == null ? c / 2 : i in so ? so[i] * c : ~i.indexOf("%") ? parseFloat(i) * c / 100 : parseFloat(i) || 0;
            return o ? (f.left + g) / Ce.innerWidth : (f.top + g) / Ce.innerHeight
        }, h
    }();
Fe.version = "3.10.4";
Fe.saveStyles = function (h) {
    return h ? oo(h).forEach(function (e) {
        if (e && e.style) {
            var r = Tn.indexOf(e);
            r >= 0 && Tn.splice(r, 5), Tn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), de.core.getCache(e), vi)
        }
    }) : Tn
};
Fe.revert = function (h, e) {
    return ao(!h, e)
};
Fe.create = function (h, e) {
    return new Fe(h, e)
};
Fe.refresh = function (h) {
    return h ? $i() : (Yr || Fe.register()) && Ci(!0)
};
Fe.update = hu;
Fe.clearScrollMemory = sl;
Fe.maxScroll = function (h, e) {
    return xr(h, e ? Wt : yt)
};
Fe.getScrollFunc = function (h, e) {
    return Ar(en(h), e ? Wt : yt)
};
Fe.getById = function (h) {
    return ls[h]
};
Fe.getAll = function () {
    return Ee.filter(function (h) {
        return h.vars.id !== "ScrollSmoother"
    })
};
Fe.isScrolling = function () {
    return !!An
};
Fe.snapDirectional = Ms;
Fe.addEventListener = function (h, e) {
    var r = lu[h] || (lu[h] = []);
    ~r.indexOf(e) || r.push(e)
};
Fe.removeEventListener = function (h, e) {
    var r = lu[h], n = r && r.indexOf(e);
    n >= 0 && r.splice(n, 1)
};
Fe.batch = function (h, e) {
    var r = [], n = {}, i = e.interval || .016, o = e.batchMax || 1e9, f = function (_, m) {
        var T = [], F = [], C = de.delayedCall(i, function () {
            m(T, F), T = [], F = []
        }).pause();
        return function (E) {
            T.length || C.restart(!0), T.push(E.trigger), F.push(E), o <= T.length && C.progress(1)
        }
    }, c;
    for (c in e) n[c] = c.substr(0, 2) === "on" && qn(e[c]) && c !== "onRefreshInit" ? f(c, e[c]) : e[c];
    return qn(o) && (o = o(), Et(Fe, "refresh", function () {
        return o = e.batchMax()
    })), oo(h).forEach(function (g) {
        var _ = {};
        for (c in n) _[c] = n[c];
        _.trigger = g, r.push(Fe.create(_))
    }), r
};
var Ra = function (e, r, n, i) {
    return r > i ? e(i) : r < 0 && e(0), n > i ? (i - r) / (n - r) : n < 0 ? r / (r - n) : 1
}, Xo = function h(e, r) {
    r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (ht.isTouch ? " pinch-zoom" : "") : "none", e === ar && h(tt, r)
}, Ia = {auto: 1, scroll: 1}, vh = function (e) {
    var r = e.event, n = e.target, i = e.axis, o = (r.changedTouches ? r.changedTouches[0] : r).target,
        f = o._gsap || de.core.getCache(o), c = qt(), g;
    if (!f._isScrollT || c - f._isScrollT > 2e3) {
        for (; o && o.scrollHeight <= o.clientHeight;) o = o.parentNode;
        f._isScroll = o && !ri(o) && o !== n && (Ia[(g = Qn(o)).overflowY] || Ia[g.overflowX]), f._isScrollT = c
    }
    (f._isScroll || i === "x") && (r._gsapAllow = !0)
}, al = function (e, r, n, i) {
    return ht.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: r,
        onWheel: i = i && vh,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
            return n && Et(et, ht.eventTypes[0], za, !1, !0)
        },
        onDisable: function () {
            return mt(et, ht.eventTypes[0], za, !0)
        }
    })
}, Ch = /(input|label|select|textarea)/i, ja, za = function (e) {
    var r = Ch.test(e.target.tagName);
    (r || ja) && (e._gsapAllow = !0, ja = r)
}, xh = function (e) {
    Wu(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var r = e, n = r.normalizeScrollX, i = r.momentum, o = r.allowNestedScroll, f, c, g = en(e.target) || ar,
        _ = de.core.globals().ScrollSmoother,
        m = Xr && (e.content && en(e.content) || _ && _.get() && _.get().content()), T = Ar(g, yt), F = Ar(g, Wt),
        C = 1,
        E = (ht.isTouch && Ce.visualViewport ? Ce.visualViewport.scale * Ce.visualViewport.width : Ce.outerWidth) / Ce.innerWidth,
        v = 0, O = qn(i) ? function () {
            return i(f)
        } : function () {
            return i || 2.8
        }, A, $, R = al(g, e.type, !0, o), z = function () {
            return A = !1
        }, W = _r, a = _r, q = function () {
            c = xr(g, yt), a = gi(Xr ? 1 : 0, c), n && (W = gi(0, xr(g, Wt))), $ = Yu
        }, G = function () {
            if (A) {
                requestAnimationFrame(z);
                var De = fu(f.deltaY / 2), ce = a(T.v - De);
                return m && ce !== T.v + T.offset && (T.offset = ce - T.v, m.style.transform = "translateY(" + -T.offset + "px)", m._gsap && (m._gsap.y = -T.offset + "px"), T.cacheID = ke.cache, hu()), !0
            }
            m && (m.style.transform = "translateY(0px)", T.offset = T.cacheID = 0, m._gsap && (m._gsap.y = "0px")), A = !0
        }, V, K, he, J, be = function () {
            q(), V.isActive() && V.vars.scrollY > c && (T() > c ? V.progress(1) && T(c) : V.resetTo("scrollY", c))
        };
    return e.ignoreCheck = function (ne) {
        return Xr && ne.type === "touchmove" && G() || C > 1.05 && ne.type !== "touchstart" || f.isGesturing || ne.touches && ne.touches.length > 1
    }, e.onPress = function () {
        var ne = C;
        C = fu((Ce.visualViewport && Ce.visualViewport.scale || 1) / E), V.pause(), ne !== C && Xo(g, C > 1.01 ? !0 : n ? !1 : "x"), A = !1, K = F(), he = T(), q(), $ = Yu
    }, e.onRelease = e.onGestureStart = function (ne, De) {
        if (m && (m.style.transform = "translateY(0px)", T.offset = T.cacheID = 0, m._gsap && (m._gsap.y = "0px")), !De) J.restart(!0); else {
            ke.cache++;
            var ce = O(), Te, Ae;
            n && (Te = F(), Ae = Te + ce * .05 * -ne.velocityX / .227, ce *= Ra(F, Te, Ae, xr(g, Wt)), V.vars.scrollX = W(Ae)), Te = T(), Ae = Te + ce * .05 * -ne.velocityY / .227, ce *= Ra(T, Te, Ae, xr(g, yt)), V.vars.scrollY = a(Ae), V.invalidate().duration(ce).play(.01), (Xr && V.vars.scrollY >= c || Te >= c - 1) && de.to({}, {
                onUpdate: be,
                duration: ce
            })
        }
    }, e.onWheel = function () {
        V._ts && V.pause(), qt() - v > 1e3 && ($ = 0, v = qt())
    }, e.onChange = function (ne, De, ce, Te, Ae) {
        Yu !== $ && q(), De && n && F(W(Te[2] === De ? K + (ne.startX - ne.x) : F() + De - Te[1])), ce && T(a(Ae[2] === ce ? he + (ne.startY - ne.y) : T() + ce - Ae[1])), hu()
    }, e.onEnable = function () {
        Xo(g, n ? !1 : "x"), Et(Ce, "resize", be), R.enable()
    }, e.onDisable = function () {
        Xo(g, !0), mt(Ce, "resize", be), R.kill()
    }, f = new ht(e), f.iOS = Xr, Xr && !T() && T(1), J = f._dc, V = de.to(f, {
        ease: "power4",
        paused: !0,
        scrollX: n ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: J.vars.onComplete
    }), f
};
Fe.sort = function (h) {
    return Ee.sort(h || function (e, r) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (r.start + (r.vars.refreshPriority || 0) * -1e6)
    })
};
Fe.observe = function (h) {
    return new ht(h)
};
Fe.normalizeScroll = function (h) {
    if (typeof h == "undefined") return bn;
    if (h === !0 && bn) return bn.enable();
    if (h === !1) return bn && bn.kill();
    var e = h instanceof ht ? h : xh(h);
    return bn && bn.target === e.target && bn.kill(), ri(e.target) && (bn = e), e
};
Fe.core = {
    _getVelocityProp: ss, _inputObserver: al, _scrollers: ke, _proxies: Kn, bridge: {
        ss: function () {
            An || ii("scrollStart"), An = qt()
        }, ref: function () {
            return wt
        }
    }
};
el() && de.registerPlugin(Fe);/*!
 * strings: 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var bh = /(^\s+|\s+$)/g,
    Th = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function fl(h) {
    var e = h.nodeType, r = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof h.textContent == "string") return h.textContent;
        for (h = h.firstChild; h; h = h.nextSibling) r += fl(h)
    } else if (e === 3 || e === 4) return h.nodeValue;
    return r
}

function ds(h, e, r, n) {
    for (var i = h.firstChild, o = [], f; i;) i.nodeType === 3 ? (f = (i.nodeValue + "").replace(/^\n+/g, ""), n || (f = f.replace(/\s+/g, " ")), o.push.apply(o, ll(f, e, r, n))) : (i.nodeName + "").toLowerCase() === "br" ? o[o.length - 1] += "<br>" : o.push(i.outerHTML), i = i.nextSibling;
    for (f = o.length; f--;) o[f] === "&" && o.splice(f, 1, "&amp;");
    return o
}

function ll(h, e, r, n) {
    if (h += "", r && (h = h.replace(bh, "")), e && e !== "") return h.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var i = [], o = h.length, f = 0, c, g; f < o; f++) g = h.charAt(f), (g.charCodeAt(0) >= 55296 && g.charCodeAt(0) <= 56319 || h.charCodeAt(f + 1) >= 65024 && h.charCodeAt(f + 1) <= 65039) && (c = ((h.substr(f, 12).split(Th) || [])[1] || "").length || 2, g = h.substr(f, c), i.emoji = 1, f += c - 1), i.push(g === ">" ? "&gt;" : g === "<" ? "&lt;" : n && g === " " && (h.charAt(f - 1) === " " || h.charAt(f + 1) === " ") ? "&nbsp;" : g);
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
var Xi, Iu, wh = function () {
    return Xi || typeof window != "undefined" && (Xi = window.gsap) && Xi.registerPlugin && Xi
}, gu = {
    version: "3.10.4", name: "text", init: function (e, r, n) {
        typeof r != "object" && (r = {value: r});
        var i = e.nodeName.toUpperCase(), o = this, f = r, c = f.newClass, g = f.oldClass, _ = f.preserveSpaces,
            m = f.rtl, T = o.delimiter = r.delimiter || "", F = o.fillChar = r.fillChar || (r.padSpace ? "&nbsp;" : ""),
            C, E, v, O, A, $, R, z;
        if (o.svg = e.getBBox && (i === "TEXT" || i === "TSPAN"), !("innerHTML" in e) && !o.svg) return !1;
        if (o.target = e, !("value" in r)) {
            o.text = o.original = [""];
            return
        }
        for (v = ds(e, T, !1, _), Iu || (Iu = document.createElement("div")), Iu.innerHTML = r.value, E = ds(Iu, T), o.from = n._from, (o.from || m) && !(m && o.from) && (i = v, v = E, E = i), o.hasClass = !!(c || g), o.newClass = m ? g : c, o.oldClass = m ? c : g, i = v.length - E.length, C = i < 0 ? v : E, i < 0 && (i = -i); --i > -1;) C.push(F);
        if (r.type === "diff") {
            for (O = 0, A = [], $ = [], R = "", i = 0; i < E.length; i++) z = E[i], z === v[i] ? R += z : (A[O] = R + z, $[O++] = R + v[i], R = "");
            E = A, v = $, R && (E.push(R), v.push(R))
        }
        r.speed && n.duration(Math.min(.05 / r.speed * C.length, r.maxDuration || 9999)), o.rtl = m, o.original = v, o.text = E, o._props.push("text")
    }, render: function (e, r) {
        e > 1 ? e = 1 : e < 0 && (e = 0), r.from && (e = 1 - e);
        var n = r.text, i = r.hasClass, o = r.newClass, f = r.oldClass, c = r.delimiter, g = r.target, _ = r.fillChar,
            m = r.original, T = r.rtl, F = n.length, C = (T ? 1 - e : e) * F + .5 | 0, E, v, O;
        i && e ? (E = o && C, v = f && C !== F, O = (E ? "<span class='" + o + "'>" : "") + n.slice(0, C).join(c) + (E ? "</span>" : "") + (v ? "<span class='" + f + "'>" : "") + c + m.slice(C).join(c) + (v ? "</span>" : "")) : O = n.slice(0, C).join(c) + c + m.slice(C).join(c), r.svg ? g.textContent = O : g.innerHTML = _ === "&nbsp;" && ~O.indexOf("  ") ? O.split("  ").join("&nbsp;&nbsp;") : O
    }
};
gu.splitInnerHTML = ds;
gu.emojiSafeSplit = ll;
gu.getText = fl;
wh() && Xi.registerPlugin(gu);/*!
 * EasePack 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gn, ju, cl = function () {
    return gn || typeof window != "undefined" && (gn = window.gsap) && gn.registerPlugin && gn
}, ps = function (e, r) {
    return !!(typeof e == "undefined" ? r : e && !~(e + "").indexOf("false"))
}, Eh = function (e) {
    if (gn = e || cl(), gn) {
        ju = gn.registerEase;
        var r = gn.parseEase(), n = function (f) {
            return function (c) {
                var g = .5 + c / 2;
                f.config = function (_) {
                    return f(2 * (1 - _) * _ * g + _ * _)
                }
            }
        }, i;
        for (i in r) r[i].config || n(r[i]);
        ju("slow", ui), ju("expoScale", ho), ju("rough", Si);
        for (i in tu) i !== "version" && gn.core.globals(i, tu[i])
    }
}, hl = function (e, r, n) {
    e = Math.min(1, e || .7);
    var i = e < 1 ? r || r === 0 ? r : .7 : 0, o = (1 - e) / 2, f = o + e, c = ps(n);
    return function (g) {
        var _ = g + (.5 - g) * i;
        return g < o ? c ? 1 - (g = 1 - g / o) * g : _ - (g = 1 - g / o) * g * g * g * _ : g > f ? c ? g === 1 ? 0 : 1 - (g = (g - f) / o) * g : _ + (g - _) * (g = (g - f) / o) * g * g * g : c ? 1 : _
    }
}, dl = function (e, r, n) {
    var i = Math.log(r / e), o = r - e;
    return n && (n = gn.parseEase(n)), function (f) {
        return (e * Math.exp(i * (n ? n(f) : f)) - e) / o
    }
}, Yo = function (e, r, n) {
    this.t = e, this.v = r, n && (this.next = n, n.prev = this, this.c = n.v - r, this.gap = n.t - e)
}, pl = function (e) {
    typeof e != "object" && (e = {points: +e || 20});
    for (var r = e.taper || "none", n = [], i = 0, o = (+e.points || 20) | 0, f = o, c = ps(e.randomize, !0), g = ps(e.clamp), _ = gn ? gn.parseEase(e.template) : 0, m = (+e.strength || 1) * .4, T, F, C, E, v, O, A; --f > -1;) T = c ? Math.random() : 1 / o * f, F = _ ? _(T) : T, r === "none" ? C = m : r === "out" ? (E = 1 - T, C = E * E * m) : r === "in" ? C = T * T * m : T < .5 ? (E = T * 2, C = E * E * .5 * m) : (E = (1 - T) * 2, C = E * E * .5 * m), c ? F += Math.random() * C - C * .5 : f % 2 ? F += C * .5 : F -= C * .5, g && (F > 1 ? F = 1 : F < 0 && (F = 0)), n[i++] = {
        x: T,
        y: F
    };
    for (n.sort(function ($, R) {
        return $.x - R.x
    }), O = new Yo(1, 1, null), f = o; f--;) v = n[f], O = new Yo(v.x, v.y, O);
    return A = new Yo(0, 0, O.t ? O : O.next), function ($) {
        var R = A;
        if ($ > R.t) {
            for (; R.next && $ >= R.t;) R = R.next;
            R = R.prev
        } else for (; R.prev && $ <= R.t;) R = R.prev;
        return A = R, R.v + ($ - R.t) / R.gap * R.c
    }
}, ui = hl(.7);
ui.ease = ui;
ui.config = hl;
var ho = dl(1, 2);
ho.config = dl;
var Si = pl();
Si.ease = Si;
Si.config = pl;
var tu = {SlowMo: ui, RoughEase: Si, ExpoScaleEase: ho};
for (var Ha in tu) tu[Ha].register = Eh, tu[Ha].version = "3.10.4";
cl() && gn.registerPlugin(ui);
var Fh = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    gl = {exports: {}};/*!
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
(function (h) {
    (function (e, r) {
        h.exports = e.document ? r(e, !0) : function (n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return r(n)
        }
    })(typeof window != "undefined" ? window : Fh, function (e, r) {
        var n = [], i = Object.getPrototypeOf, o = n.slice, f = n.flat ? function (t) {
                return n.flat.call(t)
            } : function (t) {
                return n.concat.apply([], t)
            }, c = n.push, g = n.indexOf, _ = {}, m = _.toString, T = _.hasOwnProperty, F = T.toString, C = F.call(Object),
            E = {}, v = function (u) {
                return typeof u == "function" && typeof u.nodeType != "number" && typeof u.item != "function"
            }, O = function (u) {
                return u != null && u === u.window
            }, A = e.document, $ = {type: !0, src: !0, nonce: !0, noModule: !0};

        function R(t, u, s) {
            s = s || A;
            var l, d, p = s.createElement("script");
            if (p.text = t, u) for (l in $) d = u[l] || u.getAttribute && u.getAttribute(l), d && p.setAttribute(l, d);
            s.head.appendChild(p).parentNode.removeChild(p)
        }

        function z(t) {
            return t == null ? t + "" : typeof t == "object" || typeof t == "function" ? _[m.call(t)] || "object" : typeof t
        }

        var W = "3.6.0", a = function (t, u) {
            return new a.fn.init(t, u)
        };
        a.fn = a.prototype = {
            jquery: W, constructor: a, length: 0, toArray: function () {
                return o.call(this)
            }, get: function (t) {
                return t == null ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
            }, pushStack: function (t) {
                var u = a.merge(this.constructor(), t);
                return u.prevObject = this, u
            }, each: function (t) {
                return a.each(this, t)
            }, map: function (t) {
                return this.pushStack(a.map(this, function (u, s) {
                    return t.call(u, s, u)
                }))
            }, slice: function () {
                return this.pushStack(o.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, even: function () {
                return this.pushStack(a.grep(this, function (t, u) {
                    return (u + 1) % 2
                }))
            }, odd: function () {
                return this.pushStack(a.grep(this, function (t, u) {
                    return u % 2
                }))
            }, eq: function (t) {
                var u = this.length, s = +t + (t < 0 ? u : 0);
                return this.pushStack(s >= 0 && s < u ? [this[s]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: c, sort: n.sort, splice: n.splice
        }, a.extend = a.fn.extend = function () {
            var t, u, s, l, d, p, D = arguments[0] || {}, b = 1, w = arguments.length, P = !1;
            for (typeof D == "boolean" && (P = D, D = arguments[b] || {}, b++), typeof D != "object" && !v(D) && (D = {}), b === w && (D = this, b--); b < w; b++) if ((t = arguments[b]) != null) for (u in t) l = t[u], !(u === "__proto__" || D === l) && (P && l && (a.isPlainObject(l) || (d = Array.isArray(l))) ? (s = D[u], d && !Array.isArray(s) ? p = [] : !d && !a.isPlainObject(s) ? p = {} : p = s, d = !1, D[u] = a.extend(P, p, l)) : l !== void 0 && (D[u] = l));
            return D
        }, a.extend({
            expando: "jQuery" + (W + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isPlainObject: function (t) {
                var u, s;
                return !t || m.call(t) !== "[object Object]" ? !1 : (u = i(t), u ? (s = T.call(u, "constructor") && u.constructor, typeof s == "function" && F.call(s) === C) : !0)
            }, isEmptyObject: function (t) {
                var u;
                for (u in t) return !1;
                return !0
            }, globalEval: function (t, u, s) {
                R(t, {nonce: u && u.nonce}, s)
            }, each: function (t, u) {
                var s, l = 0;
                if (q(t)) for (s = t.length; l < s && u.call(t[l], l, t[l]) !== !1; l++) ; else for (l in t) if (u.call(t[l], l, t[l]) === !1) break;
                return t
            }, makeArray: function (t, u) {
                var s = u || [];
                return t != null && (q(Object(t)) ? a.merge(s, typeof t == "string" ? [t] : t) : c.call(s, t)), s
            }, inArray: function (t, u, s) {
                return u == null ? -1 : g.call(u, t, s)
            }, merge: function (t, u) {
                for (var s = +u.length, l = 0, d = t.length; l < s; l++) t[d++] = u[l];
                return t.length = d, t
            }, grep: function (t, u, s) {
                for (var l, d = [], p = 0, D = t.length, b = !s; p < D; p++) l = !u(t[p], p), l !== b && d.push(t[p]);
                return d
            }, map: function (t, u, s) {
                var l, d, p = 0, D = [];
                if (q(t)) for (l = t.length; p < l; p++) d = u(t[p], p, s), d != null && D.push(d); else for (p in t) d = u(t[p], p, s), d != null && D.push(d);
                return f(D)
            }, guid: 1, support: E
        }), typeof Symbol == "function" && (a.fn[Symbol.iterator] = n[Symbol.iterator]), a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, u) {
            _["[object " + u + "]"] = u.toLowerCase()
        });

        function q(t) {
            var u = !!t && "length" in t && t.length, s = z(t);
            return v(t) || O(t) ? !1 : s === "array" || u === 0 || typeof u == "number" && u > 0 && u - 1 in t
        }

        var G = function (t) {
            var u, s, l, d, p, D, b, w, P, N, X, M, I, re, ge, ie, Dt, lt, an, Be = "sizzle" + 1 * new Date,
                pe = t.document, Kt = 0, we = 0, Ke = xu(), Oi = xu(), mu = xu(), fn = xu(), Br = function (y, x) {
                    return y === x && (X = !0), 0
                }, Lr = {}.hasOwnProperty, Zt = [], gr = Zt.pop, Cn = Zt.push, Dr = Zt.push, Gs = Zt.slice,
                Rr = function (y, x) {
                    for (var S = 0, j = y.length; S < j; S++) if (y[S] === x) return S;
                    return -1
                },
                To = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                Pe = "[\\x20\\t\\r\\n\\f]",
                Ir = "(?:\\\\[\\da-fA-F]{1,6}" + Pe + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Qs = "\\[" + Pe + "*(" + Ir + ")(?:" + Pe + "*([*^$|!~]?=)" + Pe + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Ir + "))|)" + Pe + "*\\]",
                wo = ":(" + Ir + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Qs + ")*)|.*)\\)|)",
                jl = new RegExp(Pe + "+", "g"),
                vu = new RegExp("^" + Pe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Pe + "+$", "g"),
                zl = new RegExp("^" + Pe + "*," + Pe + "*"),
                Ks = new RegExp("^" + Pe + "*([>+~]|" + Pe + ")" + Pe + "*"), Hl = new RegExp(Pe + "|>"),
                ql = new RegExp(wo), Wl = new RegExp("^" + Ir + "$"), Cu = {
                    ID: new RegExp("^#(" + Ir + ")"),
                    CLASS: new RegExp("^\\.(" + Ir + ")"),
                    TAG: new RegExp("^(" + Ir + "|[*])"),
                    ATTR: new RegExp("^" + Qs),
                    PSEUDO: new RegExp("^" + wo),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Pe + "*(even|odd|(([+-]|)(\\d*)n|)" + Pe + "*(?:([+-]|)" + Pe + "*(\\d+)|))" + Pe + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + To + ")$", "i"),
                    needsContext: new RegExp("^" + Pe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Pe + "*((?:-\\d)?\\d*)" + Pe + "*\\)|)(?=[^-]|$)", "i")
                }, $l = /HTML$/i, Xl = /^(?:input|select|textarea|button)$/i, Yl = /^h\d$/i, Mi = /^[^{]+\{\s*\[native \w/,
                Vl = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Eo = /[+~]/,
                rr = new RegExp("\\\\[\\da-fA-F]{1,6}" + Pe + "?|\\\\([^\\r\\n\\f])", "g"), ir = function (y, x) {
                    var S = "0x" + y.slice(1) - 65536;
                    return x || (S < 0 ? String.fromCharCode(S + 65536) : String.fromCharCode(S >> 10 | 55296, S & 1023 | 56320))
                }, Zs = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Js = function (y, x) {
                    return x ? y === "\0" ? "\uFFFD" : y.slice(0, -1) + "\\" + y.charCodeAt(y.length - 1).toString(16) + " " : "\\" + y
                }, ea = function () {
                    M()
                }, Ul = Tu(function (y) {
                    return y.disabled === !0 && y.nodeName.toLowerCase() === "fieldset"
                }, {dir: "parentNode", next: "legend"});
            try {
                Dr.apply(Zt = Gs.call(pe.childNodes), pe.childNodes), Zt[pe.childNodes.length].nodeType
            } catch {
                Dr = {
                    apply: Zt.length ? function (x, S) {
                        Cn.apply(x, Gs.call(S))
                    } : function (x, S) {
                        for (var j = x.length, k = 0; x[j++] = S[k++];) ;
                        x.length = j - 1
                    }
                }
            }

            function Ie(y, x, S, j) {
                var k, H, Y, Q, Z, se, ue, fe = x && x.ownerDocument, ve = x ? x.nodeType : 9;
                if (S = S || [], typeof y != "string" || !y || ve !== 1 && ve !== 9 && ve !== 11) return S;
                if (!j && (M(x), x = x || I, ge)) {
                    if (ve !== 11 && (Z = Vl.exec(y))) if (k = Z[1]) {
                        if (ve === 9) if (Y = x.getElementById(k)) {
                            if (Y.id === k) return S.push(Y), S
                        } else return S; else if (fe && (Y = fe.getElementById(k)) && an(x, Y) && Y.id === k) return S.push(Y), S
                    } else {
                        if (Z[2]) return Dr.apply(S, x.getElementsByTagName(y)), S;
                        if ((k = Z[3]) && s.getElementsByClassName && x.getElementsByClassName) return Dr.apply(S, x.getElementsByClassName(k)), S
                    }
                    if (s.qsa && !fn[y + " "] && (!ie || !ie.test(y)) && (ve !== 1 || x.nodeName.toLowerCase() !== "object")) {
                        if (ue = y, fe = x, ve === 1 && (Hl.test(y) || Ks.test(y))) {
                            for (fe = Eo.test(y) && So(x.parentNode) || x, (fe !== x || !s.scope) && ((Q = x.getAttribute("id")) ? Q = Q.replace(Zs, Js) : x.setAttribute("id", Q = Be)), se = D(y), H = se.length; H--;) se[H] = (Q ? "#" + Q : ":scope") + " " + bu(se[H]);
                            ue = se.join(",")
                        }
                        try {
                            return Dr.apply(S, fe.querySelectorAll(ue)), S
                        } catch {
                            fn(y, !0)
                        } finally {
                            Q === Be && x.removeAttribute("id")
                        }
                    }
                }
                return w(y.replace(vu, "$1"), x, S, j)
            }

            function xu() {
                var y = [];

                function x(S, j) {
                    return y.push(S + " ") > l.cacheLength && delete x[y.shift()], x[S + " "] = j
                }

                return x
            }

            function jn(y) {
                return y[Be] = !0, y
            }

            function zn(y) {
                var x = I.createElement("fieldset");
                try {
                    return !!y(x)
                } catch {
                    return !1
                } finally {
                    x.parentNode && x.parentNode.removeChild(x), x = null
                }
            }

            function Fo(y, x) {
                for (var S = y.split("|"), j = S.length; j--;) l.attrHandle[S[j]] = x
            }

            function ta(y, x) {
                var S = x && y, j = S && y.nodeType === 1 && x.nodeType === 1 && y.sourceIndex - x.sourceIndex;
                if (j) return j;
                if (S) {
                    for (; S = S.nextSibling;) if (S === x) return -1
                }
                return y ? 1 : -1
            }

            function Gl(y) {
                return function (x) {
                    var S = x.nodeName.toLowerCase();
                    return S === "input" && x.type === y
                }
            }

            function Ql(y) {
                return function (x) {
                    var S = x.nodeName.toLowerCase();
                    return (S === "input" || S === "button") && x.type === y
                }
            }

            function na(y) {
                return function (x) {
                    return "form" in x ? x.parentNode && x.disabled === !1 ? "label" in x ? "label" in x.parentNode ? x.parentNode.disabled === y : x.disabled === y : x.isDisabled === y || x.isDisabled !== !y && Ul(x) === y : x.disabled === y : "label" in x ? x.disabled === y : !1
                }
            }

            function jr(y) {
                return jn(function (x) {
                    return x = +x, jn(function (S, j) {
                        for (var k, H = y([], S.length, x), Y = H.length; Y--;) S[k = H[Y]] && (S[k] = !(j[k] = S[k]))
                    })
                })
            }

            function So(y) {
                return y && typeof y.getElementsByTagName != "undefined" && y
            }

            s = Ie.support = {}, p = Ie.isXML = function (y) {
                var x = y && y.namespaceURI, S = y && (y.ownerDocument || y).documentElement;
                return !$l.test(x || S && S.nodeName || "HTML")
            }, M = Ie.setDocument = function (y) {
                var x, S, j = y ? y.ownerDocument || y : pe;
                return j == I || j.nodeType !== 9 || !j.documentElement || (I = j, re = I.documentElement, ge = !p(I), pe != I && (S = I.defaultView) && S.top !== S && (S.addEventListener ? S.addEventListener("unload", ea, !1) : S.attachEvent && S.attachEvent("onunload", ea)), s.scope = zn(function (k) {
                    return re.appendChild(k).appendChild(I.createElement("div")), typeof k.querySelectorAll != "undefined" && !k.querySelectorAll(":scope fieldset div").length
                }), s.attributes = zn(function (k) {
                    return k.className = "i", !k.getAttribute("className")
                }), s.getElementsByTagName = zn(function (k) {
                    return k.appendChild(I.createComment("")), !k.getElementsByTagName("*").length
                }), s.getElementsByClassName = Mi.test(I.getElementsByClassName), s.getById = zn(function (k) {
                    return re.appendChild(k).id = Be, !I.getElementsByName || !I.getElementsByName(Be).length
                }), s.getById ? (l.filter.ID = function (k) {
                    var H = k.replace(rr, ir);
                    return function (Y) {
                        return Y.getAttribute("id") === H
                    }
                }, l.find.ID = function (k, H) {
                    if (typeof H.getElementById != "undefined" && ge) {
                        var Y = H.getElementById(k);
                        return Y ? [Y] : []
                    }
                }) : (l.filter.ID = function (k) {
                    var H = k.replace(rr, ir);
                    return function (Y) {
                        var Q = typeof Y.getAttributeNode != "undefined" && Y.getAttributeNode("id");
                        return Q && Q.value === H
                    }
                }, l.find.ID = function (k, H) {
                    if (typeof H.getElementById != "undefined" && ge) {
                        var Y, Q, Z, se = H.getElementById(k);
                        if (se) {
                            if (Y = se.getAttributeNode("id"), Y && Y.value === k) return [se];
                            for (Z = H.getElementsByName(k), Q = 0; se = Z[Q++];) if (Y = se.getAttributeNode("id"), Y && Y.value === k) return [se]
                        }
                        return []
                    }
                }), l.find.TAG = s.getElementsByTagName ? function (k, H) {
                    if (typeof H.getElementsByTagName != "undefined") return H.getElementsByTagName(k);
                    if (s.qsa) return H.querySelectorAll(k)
                } : function (k, H) {
                    var Y, Q = [], Z = 0, se = H.getElementsByTagName(k);
                    if (k === "*") {
                        for (; Y = se[Z++];) Y.nodeType === 1 && Q.push(Y);
                        return Q
                    }
                    return se
                }, l.find.CLASS = s.getElementsByClassName && function (k, H) {
                    if (typeof H.getElementsByClassName != "undefined" && ge) return H.getElementsByClassName(k)
                }, Dt = [], ie = [], (s.qsa = Mi.test(I.querySelectorAll)) && (zn(function (k) {
                    var H;
                    re.appendChild(k).innerHTML = "<a id='" + Be + "'></a><select id='" + Be + "-\r\\' msallowcapture=''><option selected=''></option></select>", k.querySelectorAll("[msallowcapture^='']").length && ie.push("[*^$]=" + Pe + `*(?:''|"")`), k.querySelectorAll("[selected]").length || ie.push("\\[" + Pe + "*(?:value|" + To + ")"), k.querySelectorAll("[id~=" + Be + "-]").length || ie.push("~="), H = I.createElement("input"), H.setAttribute("name", ""), k.appendChild(H), k.querySelectorAll("[name='']").length || ie.push("\\[" + Pe + "*name" + Pe + "*=" + Pe + `*(?:''|"")`), k.querySelectorAll(":checked").length || ie.push(":checked"), k.querySelectorAll("a#" + Be + "+*").length || ie.push(".#.+[+~]"), k.querySelectorAll("\\\f"), ie.push("[\\r\\n\\f]")
                }), zn(function (k) {
                    k.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var H = I.createElement("input");
                    H.setAttribute("type", "hidden"), k.appendChild(H).setAttribute("name", "D"), k.querySelectorAll("[name=d]").length && ie.push("name" + Pe + "*[*^$|!~]?="), k.querySelectorAll(":enabled").length !== 2 && ie.push(":enabled", ":disabled"), re.appendChild(k).disabled = !0, k.querySelectorAll(":disabled").length !== 2 && ie.push(":enabled", ":disabled"), k.querySelectorAll("*,:x"), ie.push(",.*:")
                })), (s.matchesSelector = Mi.test(lt = re.matches || re.webkitMatchesSelector || re.mozMatchesSelector || re.oMatchesSelector || re.msMatchesSelector)) && zn(function (k) {
                    s.disconnectedMatch = lt.call(k, "*"), lt.call(k, "[s!='']:x"), Dt.push("!=", wo)
                }), ie = ie.length && new RegExp(ie.join("|")), Dt = Dt.length && new RegExp(Dt.join("|")), x = Mi.test(re.compareDocumentPosition), an = x || Mi.test(re.contains) ? function (k, H) {
                    var Y = k.nodeType === 9 ? k.documentElement : k, Q = H && H.parentNode;
                    return k === Q || !!(Q && Q.nodeType === 1 && (Y.contains ? Y.contains(Q) : k.compareDocumentPosition && k.compareDocumentPosition(Q) & 16))
                } : function (k, H) {
                    if (H) {
                        for (; H = H.parentNode;) if (H === k) return !0
                    }
                    return !1
                }, Br = x ? function (k, H) {
                    if (k === H) return X = !0, 0;
                    var Y = !k.compareDocumentPosition - !H.compareDocumentPosition;
                    return Y || (Y = (k.ownerDocument || k) == (H.ownerDocument || H) ? k.compareDocumentPosition(H) : 1, Y & 1 || !s.sortDetached && H.compareDocumentPosition(k) === Y ? k == I || k.ownerDocument == pe && an(pe, k) ? -1 : H == I || H.ownerDocument == pe && an(pe, H) ? 1 : N ? Rr(N, k) - Rr(N, H) : 0 : Y & 4 ? -1 : 1)
                } : function (k, H) {
                    if (k === H) return X = !0, 0;
                    var Y, Q = 0, Z = k.parentNode, se = H.parentNode, ue = [k], fe = [H];
                    if (!Z || !se) return k == I ? -1 : H == I ? 1 : Z ? -1 : se ? 1 : N ? Rr(N, k) - Rr(N, H) : 0;
                    if (Z === se) return ta(k, H);
                    for (Y = k; Y = Y.parentNode;) ue.unshift(Y);
                    for (Y = H; Y = Y.parentNode;) fe.unshift(Y);
                    for (; ue[Q] === fe[Q];) Q++;
                    return Q ? ta(ue[Q], fe[Q]) : ue[Q] == pe ? -1 : fe[Q] == pe ? 1 : 0
                }), I
            }, Ie.matches = function (y, x) {
                return Ie(y, null, null, x)
            }, Ie.matchesSelector = function (y, x) {
                if (M(y), s.matchesSelector && ge && !fn[x + " "] && (!Dt || !Dt.test(x)) && (!ie || !ie.test(x))) try {
                    var S = lt.call(y, x);
                    if (S || s.disconnectedMatch || y.document && y.document.nodeType !== 11) return S
                } catch {
                    fn(x, !0)
                }
                return Ie(x, I, null, [y]).length > 0
            }, Ie.contains = function (y, x) {
                return (y.ownerDocument || y) != I && M(y), an(y, x)
            }, Ie.attr = function (y, x) {
                (y.ownerDocument || y) != I && M(y);
                var S = l.attrHandle[x.toLowerCase()],
                    j = S && Lr.call(l.attrHandle, x.toLowerCase()) ? S(y, x, !ge) : void 0;
                return j !== void 0 ? j : s.attributes || !ge ? y.getAttribute(x) : (j = y.getAttributeNode(x)) && j.specified ? j.value : null
            }, Ie.escape = function (y) {
                return (y + "").replace(Zs, Js)
            }, Ie.error = function (y) {
                throw new Error("Syntax error, unrecognized expression: " + y)
            }, Ie.uniqueSort = function (y) {
                var x, S = [], j = 0, k = 0;
                if (X = !s.detectDuplicates, N = !s.sortStable && y.slice(0), y.sort(Br), X) {
                    for (; x = y[k++];) x === y[k] && (j = S.push(k));
                    for (; j--;) y.splice(S[j], 1)
                }
                return N = null, y
            }, d = Ie.getText = function (y) {
                var x, S = "", j = 0, k = y.nodeType;
                if (k) {
                    if (k === 1 || k === 9 || k === 11) {
                        if (typeof y.textContent == "string") return y.textContent;
                        for (y = y.firstChild; y; y = y.nextSibling) S += d(y)
                    } else if (k === 3 || k === 4) return y.nodeValue
                } else for (; x = y[j++];) S += d(x);
                return S
            }, l = Ie.selectors = {
                cacheLength: 50,
                createPseudo: jn,
                match: Cu,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (y) {
                        return y[1] = y[1].replace(rr, ir), y[3] = (y[3] || y[4] || y[5] || "").replace(rr, ir), y[2] === "~=" && (y[3] = " " + y[3] + " "), y.slice(0, 4)
                    }, CHILD: function (y) {
                        return y[1] = y[1].toLowerCase(), y[1].slice(0, 3) === "nth" ? (y[3] || Ie.error(y[0]), y[4] = +(y[4] ? y[5] + (y[6] || 1) : 2 * (y[3] === "even" || y[3] === "odd")), y[5] = +(y[7] + y[8] || y[3] === "odd")) : y[3] && Ie.error(y[0]), y
                    }, PSEUDO: function (y) {
                        var x, S = !y[6] && y[2];
                        return Cu.CHILD.test(y[0]) ? null : (y[3] ? y[2] = y[4] || y[5] || "" : S && ql.test(S) && (x = D(S, !0)) && (x = S.indexOf(")", S.length - x) - S.length) && (y[0] = y[0].slice(0, x), y[2] = S.slice(0, x)), y.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (y) {
                        var x = y.replace(rr, ir).toLowerCase();
                        return y === "*" ? function () {
                            return !0
                        } : function (S) {
                            return S.nodeName && S.nodeName.toLowerCase() === x
                        }
                    }, CLASS: function (y) {
                        var x = Ke[y + " "];
                        return x || (x = new RegExp("(^|" + Pe + ")" + y + "(" + Pe + "|$)")) && Ke(y, function (S) {
                            return x.test(typeof S.className == "string" && S.className || typeof S.getAttribute != "undefined" && S.getAttribute("class") || "")
                        })
                    }, ATTR: function (y, x, S) {
                        return function (j) {
                            var k = Ie.attr(j, y);
                            return k == null ? x === "!=" : x ? (k += "", x === "=" ? k === S : x === "!=" ? k !== S : x === "^=" ? S && k.indexOf(S) === 0 : x === "*=" ? S && k.indexOf(S) > -1 : x === "$=" ? S && k.slice(-S.length) === S : x === "~=" ? (" " + k.replace(jl, " ") + " ").indexOf(S) > -1 : x === "|=" ? k === S || k.slice(0, S.length + 1) === S + "-" : !1) : !0
                        }
                    }, CHILD: function (y, x, S, j, k) {
                        var H = y.slice(0, 3) !== "nth", Y = y.slice(-4) !== "last", Q = x === "of-type";
                        return j === 1 && k === 0 ? function (Z) {
                            return !!Z.parentNode
                        } : function (Z, se, ue) {
                            var fe, ve, je, ae, _t, kt, ln = H !== Y ? "nextSibling" : "previousSibling",
                                Ve = Z.parentNode, Ni = Q && Z.nodeName.toLowerCase(), Bi = !ue && !Q, cn = !1;
                            if (Ve) {
                                if (H) {
                                    for (; ln;) {
                                        for (ae = Z; ae = ae[ln];) if (Q ? ae.nodeName.toLowerCase() === Ni : ae.nodeType === 1) return !1;
                                        kt = ln = y === "only" && !kt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (kt = [Y ? Ve.firstChild : Ve.lastChild], Y && Bi) {
                                    for (ae = Ve, je = ae[Be] || (ae[Be] = {}), ve = je[ae.uniqueID] || (je[ae.uniqueID] = {}), fe = ve[y] || [], _t = fe[0] === Kt && fe[1], cn = _t && fe[2], ae = _t && Ve.childNodes[_t]; ae = ++_t && ae && ae[ln] || (cn = _t = 0) || kt.pop();) if (ae.nodeType === 1 && ++cn && ae === Z) {
                                        ve[y] = [Kt, _t, cn];
                                        break
                                    }
                                } else if (Bi && (ae = Z, je = ae[Be] || (ae[Be] = {}), ve = je[ae.uniqueID] || (je[ae.uniqueID] = {}), fe = ve[y] || [], _t = fe[0] === Kt && fe[1], cn = _t), cn === !1) for (; (ae = ++_t && ae && ae[ln] || (cn = _t = 0) || kt.pop()) && !((Q ? ae.nodeName.toLowerCase() === Ni : ae.nodeType === 1) && ++cn && (Bi && (je = ae[Be] || (ae[Be] = {}), ve = je[ae.uniqueID] || (je[ae.uniqueID] = {}), ve[y] = [Kt, cn]), ae === Z));) ;
                                return cn -= k, cn === j || cn % j === 0 && cn / j >= 0
                            }
                        }
                    }, PSEUDO: function (y, x) {
                        var S,
                            j = l.pseudos[y] || l.setFilters[y.toLowerCase()] || Ie.error("unsupported pseudo: " + y);
                        return j[Be] ? j(x) : j.length > 1 ? (S = [y, y, "", x], l.setFilters.hasOwnProperty(y.toLowerCase()) ? jn(function (k, H) {
                            for (var Y, Q = j(k, x), Z = Q.length; Z--;) Y = Rr(k, Q[Z]), k[Y] = !(H[Y] = Q[Z])
                        }) : function (k) {
                            return j(k, 0, S)
                        }) : j
                    }
                },
                pseudos: {
                    not: jn(function (y) {
                        var x = [], S = [], j = b(y.replace(vu, "$1"));
                        return j[Be] ? jn(function (k, H, Y, Q) {
                            for (var Z, se = j(k, null, Q, []), ue = k.length; ue--;) (Z = se[ue]) && (k[ue] = !(H[ue] = Z))
                        }) : function (k, H, Y) {
                            return x[0] = k, j(x, null, Y, S), x[0] = null, !S.pop()
                        }
                    }), has: jn(function (y) {
                        return function (x) {
                            return Ie(y, x).length > 0
                        }
                    }), contains: jn(function (y) {
                        return y = y.replace(rr, ir), function (x) {
                            return (x.textContent || d(x)).indexOf(y) > -1
                        }
                    }), lang: jn(function (y) {
                        return Wl.test(y || "") || Ie.error("unsupported lang: " + y), y = y.replace(rr, ir).toLowerCase(), function (x) {
                            var S;
                            do if (S = ge ? x.lang : x.getAttribute("xml:lang") || x.getAttribute("lang")) return S = S.toLowerCase(), S === y || S.indexOf(y + "-") === 0; while ((x = x.parentNode) && x.nodeType === 1);
                            return !1
                        }
                    }), target: function (y) {
                        var x = t.location && t.location.hash;
                        return x && x.slice(1) === y.id
                    }, root: function (y) {
                        return y === re
                    }, focus: function (y) {
                        return y === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(y.type || y.href || ~y.tabIndex)
                    }, enabled: na(!1), disabled: na(!0), checked: function (y) {
                        var x = y.nodeName.toLowerCase();
                        return x === "input" && !!y.checked || x === "option" && !!y.selected
                    }, selected: function (y) {
                        return y.parentNode && y.parentNode.selectedIndex, y.selected === !0
                    }, empty: function (y) {
                        for (y = y.firstChild; y; y = y.nextSibling) if (y.nodeType < 6) return !1;
                        return !0
                    }, parent: function (y) {
                        return !l.pseudos.empty(y)
                    }, header: function (y) {
                        return Yl.test(y.nodeName)
                    }, input: function (y) {
                        return Xl.test(y.nodeName)
                    }, button: function (y) {
                        var x = y.nodeName.toLowerCase();
                        return x === "input" && y.type === "button" || x === "button"
                    }, text: function (y) {
                        var x;
                        return y.nodeName.toLowerCase() === "input" && y.type === "text" && ((x = y.getAttribute("type")) == null || x.toLowerCase() === "text")
                    }, first: jr(function () {
                        return [0]
                    }), last: jr(function (y, x) {
                        return [x - 1]
                    }), eq: jr(function (y, x, S) {
                        return [S < 0 ? S + x : S]
                    }), even: jr(function (y, x) {
                        for (var S = 0; S < x; S += 2) y.push(S);
                        return y
                    }), odd: jr(function (y, x) {
                        for (var S = 1; S < x; S += 2) y.push(S);
                        return y
                    }), lt: jr(function (y, x, S) {
                        for (var j = S < 0 ? S + x : S > x ? x : S; --j >= 0;) y.push(j);
                        return y
                    }), gt: jr(function (y, x, S) {
                        for (var j = S < 0 ? S + x : S; ++j < x;) y.push(j);
                        return y
                    })
                }
            }, l.pseudos.nth = l.pseudos.eq;
            for (u in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) l.pseudos[u] = Gl(u);
            for (u in {submit: !0, reset: !0}) l.pseudos[u] = Ql(u);

            function ra() {
            }

            ra.prototype = l.filters = l.pseudos, l.setFilters = new ra, D = Ie.tokenize = function (y, x) {
                var S, j, k, H, Y, Q, Z, se = Oi[y + " "];
                if (se) return x ? 0 : se.slice(0);
                for (Y = y, Q = [], Z = l.preFilter; Y;) {
                    (!S || (j = zl.exec(Y))) && (j && (Y = Y.slice(j[0].length) || Y), Q.push(k = [])), S = !1, (j = Ks.exec(Y)) && (S = j.shift(), k.push({
                        value: S,
                        type: j[0].replace(vu, " ")
                    }), Y = Y.slice(S.length));
                    for (H in l.filter) (j = Cu[H].exec(Y)) && (!Z[H] || (j = Z[H](j))) && (S = j.shift(), k.push({
                        value: S,
                        type: H,
                        matches: j
                    }), Y = Y.slice(S.length));
                    if (!S) break
                }
                return x ? Y.length : Y ? Ie.error(y) : Oi(y, Q).slice(0)
            };

            function bu(y) {
                for (var x = 0, S = y.length, j = ""; x < S; x++) j += y[x].value;
                return j
            }

            function Tu(y, x, S) {
                var j = x.dir, k = x.next, H = k || j, Y = S && H === "parentNode", Q = we++;
                return x.first ? function (Z, se, ue) {
                    for (; Z = Z[j];) if (Z.nodeType === 1 || Y) return y(Z, se, ue);
                    return !1
                } : function (Z, se, ue) {
                    var fe, ve, je, ae = [Kt, Q];
                    if (ue) {
                        for (; Z = Z[j];) if ((Z.nodeType === 1 || Y) && y(Z, se, ue)) return !0
                    } else for (; Z = Z[j];) if (Z.nodeType === 1 || Y) if (je = Z[Be] || (Z[Be] = {}), ve = je[Z.uniqueID] || (je[Z.uniqueID] = {}), k && k === Z.nodeName.toLowerCase()) Z = Z[j] || Z; else {
                        if ((fe = ve[H]) && fe[0] === Kt && fe[1] === Q) return ae[2] = fe[2];
                        if (ve[H] = ae, ae[2] = y(Z, se, ue)) return !0
                    }
                    return !1
                }
            }

            function Ao(y) {
                return y.length > 1 ? function (x, S, j) {
                    for (var k = y.length; k--;) if (!y[k](x, S, j)) return !1;
                    return !0
                } : y[0]
            }

            function Kl(y, x, S) {
                for (var j = 0, k = x.length; j < k; j++) Ie(y, x[j], S);
                return S
            }

            function wu(y, x, S, j, k) {
                for (var H, Y = [], Q = 0, Z = y.length, se = x != null; Q < Z; Q++) (H = y[Q]) && (!S || S(H, j, k)) && (Y.push(H), se && x.push(Q));
                return Y
            }

            function Po(y, x, S, j, k, H) {
                return j && !j[Be] && (j = Po(j)), k && !k[Be] && (k = Po(k, H)), jn(function (Y, Q, Z, se) {
                    var ue, fe, ve, je = [], ae = [], _t = Q.length, kt = Y || Kl(x || "*", Z.nodeType ? [Z] : Z, []),
                        ln = y && (Y || !x) ? wu(kt, je, y, Z, se) : kt, Ve = S ? k || (Y ? y : _t || j) ? [] : Q : ln;
                    if (S && S(ln, Ve, Z, se), j) for (ue = wu(Ve, ae), j(ue, [], Z, se), fe = ue.length; fe--;) (ve = ue[fe]) && (Ve[ae[fe]] = !(ln[ae[fe]] = ve));
                    if (Y) {
                        if (k || y) {
                            if (k) {
                                for (ue = [], fe = Ve.length; fe--;) (ve = Ve[fe]) && ue.push(ln[fe] = ve);
                                k(null, Ve = [], ue, se)
                            }
                            for (fe = Ve.length; fe--;) (ve = Ve[fe]) && (ue = k ? Rr(Y, ve) : je[fe]) > -1 && (Y[ue] = !(Q[ue] = ve))
                        }
                    } else Ve = wu(Ve === Q ? Ve.splice(_t, Ve.length) : Ve), k ? k(null, Q, Ve, se) : Dr.apply(Q, Ve)
                })
            }

            function ko(y) {
                for (var x, S, j, k = y.length, H = l.relative[y[0].type], Y = H || l.relative[" "], Q = H ? 1 : 0, Z = Tu(function (fe) {
                    return fe === x
                }, Y, !0), se = Tu(function (fe) {
                    return Rr(x, fe) > -1
                }, Y, !0), ue = [function (fe, ve, je) {
                    var ae = !H && (je || ve !== P) || ((x = ve).nodeType ? Z(fe, ve, je) : se(fe, ve, je));
                    return x = null, ae
                }]; Q < k; Q++) if (S = l.relative[y[Q].type]) ue = [Tu(Ao(ue), S)]; else {
                    if (S = l.filter[y[Q].type].apply(null, y[Q].matches), S[Be]) {
                        for (j = ++Q; j < k && !l.relative[y[j].type]; j++) ;
                        return Po(Q > 1 && Ao(ue), Q > 1 && bu(y.slice(0, Q - 1).concat({value: y[Q - 2].type === " " ? "*" : ""})).replace(vu, "$1"), S, Q < j && ko(y.slice(Q, j)), j < k && ko(y = y.slice(j)), j < k && bu(y))
                    }
                    ue.push(S)
                }
                return Ao(ue)
            }

            function Zl(y, x) {
                var S = x.length > 0, j = y.length > 0, k = function (H, Y, Q, Z, se) {
                    var ue, fe, ve, je = 0, ae = "0", _t = H && [], kt = [], ln = P, Ve = H || j && l.find.TAG("*", se),
                        Ni = Kt += ln == null ? 1 : Math.random() || .1, Bi = Ve.length;
                    for (se && (P = Y == I || Y || se); ae !== Bi && (ue = Ve[ae]) != null; ae++) {
                        if (j && ue) {
                            for (fe = 0, !Y && ue.ownerDocument != I && (M(ue), Q = !ge); ve = y[fe++];) if (ve(ue, Y || I, Q)) {
                                Z.push(ue);
                                break
                            }
                            se && (Kt = Ni)
                        }
                        S && ((ue = !ve && ue) && je--, H && _t.push(ue))
                    }
                    if (je += ae, S && ae !== je) {
                        for (fe = 0; ve = x[fe++];) ve(_t, kt, Y, Q);
                        if (H) {
                            if (je > 0) for (; ae--;) _t[ae] || kt[ae] || (kt[ae] = gr.call(Z));
                            kt = wu(kt)
                        }
                        Dr.apply(Z, kt), se && !H && kt.length > 0 && je + x.length > 1 && Ie.uniqueSort(Z)
                    }
                    return se && (Kt = Ni, P = ln), _t
                };
                return S ? jn(k) : k
            }

            return b = Ie.compile = function (y, x) {
                var S, j = [], k = [], H = mu[y + " "];
                if (!H) {
                    for (x || (x = D(y)), S = x.length; S--;) H = ko(x[S]), H[Be] ? j.push(H) : k.push(H);
                    H = mu(y, Zl(k, j)), H.selector = y
                }
                return H
            }, w = Ie.select = function (y, x, S, j) {
                var k, H, Y, Q, Z, se = typeof y == "function" && y, ue = !j && D(y = se.selector || y);
                if (S = S || [], ue.length === 1) {
                    if (H = ue[0] = ue[0].slice(0), H.length > 2 && (Y = H[0]).type === "ID" && x.nodeType === 9 && ge && l.relative[H[1].type]) {
                        if (x = (l.find.ID(Y.matches[0].replace(rr, ir), x) || [])[0], x) se && (x = x.parentNode); else return S;
                        y = y.slice(H.shift().value.length)
                    }
                    for (k = Cu.needsContext.test(y) ? 0 : H.length; k-- && (Y = H[k], !l.relative[Q = Y.type]);) if ((Z = l.find[Q]) && (j = Z(Y.matches[0].replace(rr, ir), Eo.test(H[0].type) && So(x.parentNode) || x))) {
                        if (H.splice(k, 1), y = j.length && bu(H), !y) return Dr.apply(S, j), S;
                        break
                    }
                }
                return (se || b(y, ue))(j, x, !ge, S, !x || Eo.test(y) && So(x.parentNode) || x), S
            }, s.sortStable = Be.split("").sort(Br).join("") === Be, s.detectDuplicates = !!X, M(), s.sortDetached = zn(function (y) {
                return y.compareDocumentPosition(I.createElement("fieldset")) & 1
            }), zn(function (y) {
                return y.innerHTML = "<a href='#'></a>", y.firstChild.getAttribute("href") === "#"
            }) || Fo("type|href|height|width", function (y, x, S) {
                if (!S) return y.getAttribute(x, x.toLowerCase() === "type" ? 1 : 2)
            }), (!s.attributes || !zn(function (y) {
                return y.innerHTML = "<input/>", y.firstChild.setAttribute("value", ""), y.firstChild.getAttribute("value") === ""
            })) && Fo("value", function (y, x, S) {
                if (!S && y.nodeName.toLowerCase() === "input") return y.defaultValue
            }), zn(function (y) {
                return y.getAttribute("disabled") == null
            }) || Fo(To, function (y, x, S) {
                var j;
                if (!S) return y[x] === !0 ? x.toLowerCase() : (j = y.getAttributeNode(x)) && j.specified ? j.value : null
            }), Ie
        }(e);
        a.find = G, a.expr = G.selectors, a.expr[":"] = a.expr.pseudos, a.uniqueSort = a.unique = G.uniqueSort, a.text = G.getText, a.isXMLDoc = G.isXML, a.contains = G.contains, a.escapeSelector = G.escape;
        var V = function (t, u, s) {
            for (var l = [], d = s !== void 0; (t = t[u]) && t.nodeType !== 9;) if (t.nodeType === 1) {
                if (d && a(t).is(s)) break;
                l.push(t)
            }
            return l
        }, K = function (t, u) {
            for (var s = []; t; t = t.nextSibling) t.nodeType === 1 && t !== u && s.push(t);
            return s
        }, he = a.expr.match.needsContext;

        function J(t, u) {
            return t.nodeName && t.nodeName.toLowerCase() === u.toLowerCase()
        }

        var be = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function ne(t, u, s) {
            return v(u) ? a.grep(t, function (l, d) {
                return !!u.call(l, d, l) !== s
            }) : u.nodeType ? a.grep(t, function (l) {
                return l === u !== s
            }) : typeof u != "string" ? a.grep(t, function (l) {
                return g.call(u, l) > -1 !== s
            }) : a.filter(u, t, s)
        }

        a.filter = function (t, u, s) {
            var l = u[0];
            return s && (t = ":not(" + t + ")"), u.length === 1 && l.nodeType === 1 ? a.find.matchesSelector(l, t) ? [l] : [] : a.find.matches(t, a.grep(u, function (d) {
                return d.nodeType === 1
            }))
        }, a.fn.extend({
            find: function (t) {
                var u, s, l = this.length, d = this;
                if (typeof t != "string") return this.pushStack(a(t).filter(function () {
                    for (u = 0; u < l; u++) if (a.contains(d[u], this)) return !0
                }));
                for (s = this.pushStack([]), u = 0; u < l; u++) a.find(t, d[u], s);
                return l > 1 ? a.uniqueSort(s) : s
            }, filter: function (t) {
                return this.pushStack(ne(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(ne(this, t || [], !0))
            }, is: function (t) {
                return !!ne(this, typeof t == "string" && he.test(t) ? a(t) : t || [], !1).length
            }
        });
        var De, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Te = a.fn.init = function (t, u, s) {
            var l, d;
            if (!t) return this;
            if (s = s || De, typeof t == "string") if (t[0] === "<" && t[t.length - 1] === ">" && t.length >= 3 ? l = [null, t, null] : l = ce.exec(t), l && (l[1] || !u)) if (l[1]) {
                if (u = u instanceof a ? u[0] : u, a.merge(this, a.parseHTML(l[1], u && u.nodeType ? u.ownerDocument || u : A, !0)), be.test(l[1]) && a.isPlainObject(u)) for (l in u) v(this[l]) ? this[l](u[l]) : this.attr(l, u[l]);
                return this
            } else return d = A.getElementById(l[2]), d && (this[0] = d, this.length = 1), this; else return !u || u.jquery ? (u || s).find(t) : this.constructor(u).find(t); else {
                if (t.nodeType) return this[0] = t, this.length = 1, this;
                if (v(t)) return s.ready !== void 0 ? s.ready(t) : t(a)
            }
            return a.makeArray(t, this)
        };
        Te.prototype = a.fn, De = a(A);
        var Ae = /^(?:parents|prev(?:Until|All))/, Bt = {children: !0, contents: !0, next: !0, prev: !0};
        a.fn.extend({
            has: function (t) {
                var u = a(t, this), s = u.length;
                return this.filter(function () {
                    for (var l = 0; l < s; l++) if (a.contains(this, u[l])) return !0
                })
            }, closest: function (t, u) {
                var s, l = 0, d = this.length, p = [], D = typeof t != "string" && a(t);
                if (!he.test(t)) {
                    for (; l < d; l++) for (s = this[l]; s && s !== u; s = s.parentNode) if (s.nodeType < 11 && (D ? D.index(s) > -1 : s.nodeType === 1 && a.find.matchesSelector(s, t))) {
                        p.push(s);
                        break
                    }
                }
                return this.pushStack(p.length > 1 ? a.uniqueSort(p) : p)
            }, index: function (t) {
                return t ? typeof t == "string" ? g.call(a(t), this[0]) : g.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, u) {
                return this.pushStack(a.uniqueSort(a.merge(this.get(), a(t, u))))
            }, addBack: function (t) {
                return this.add(t == null ? this.prevObject : this.prevObject.filter(t))
            }
        });

        function B(t, u) {
            for (; (t = t[u]) && t.nodeType !== 1;) ;
            return t
        }

        a.each({
            parent: function (t) {
                var u = t.parentNode;
                return u && u.nodeType !== 11 ? u : null
            }, parents: function (t) {
                return V(t, "parentNode")
            }, parentsUntil: function (t, u, s) {
                return V(t, "parentNode", s)
            }, next: function (t) {
                return B(t, "nextSibling")
            }, prev: function (t) {
                return B(t, "previousSibling")
            }, nextAll: function (t) {
                return V(t, "nextSibling")
            }, prevAll: function (t) {
                return V(t, "previousSibling")
            }, nextUntil: function (t, u, s) {
                return V(t, "nextSibling", s)
            }, prevUntil: function (t, u, s) {
                return V(t, "previousSibling", s)
            }, siblings: function (t) {
                return K((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return K(t.firstChild)
            }, contents: function (t) {
                return t.contentDocument != null && i(t.contentDocument) ? t.contentDocument : (J(t, "template") && (t = t.content || t), a.merge([], t.childNodes))
            }
        }, function (t, u) {
            a.fn[t] = function (s, l) {
                var d = a.map(this, u, s);
                return t.slice(-5) !== "Until" && (l = s), l && typeof l == "string" && (d = a.filter(l, d)), this.length > 1 && (Bt[t] || a.uniqueSort(d), Ae.test(t) && d.reverse()), this.pushStack(d)
            }
        });
        var Me = /[^\x20\t\r\n\f]+/g;

        function Zn(t) {
            var u = {};
            return a.each(t.match(Me) || [], function (s, l) {
                u[l] = !0
            }), u
        }

        a.Callbacks = function (t) {
            t = typeof t == "string" ? Zn(t) : a.extend({}, t);
            var u, s, l, d, p = [], D = [], b = -1, w = function () {
                for (d = d || t.once, l = u = !0; D.length; b = -1) for (s = D.shift(); ++b < p.length;) p[b].apply(s[0], s[1]) === !1 && t.stopOnFalse && (b = p.length, s = !1);
                t.memory || (s = !1), u = !1, d && (s ? p = [] : p = "")
            }, P = {
                add: function () {
                    return p && (s && !u && (b = p.length - 1, D.push(s)), function N(X) {
                        a.each(X, function (M, I) {
                            v(I) ? (!t.unique || !P.has(I)) && p.push(I) : I && I.length && z(I) !== "string" && N(I)
                        })
                    }(arguments), s && !u && w()), this
                }, remove: function () {
                    return a.each(arguments, function (N, X) {
                        for (var M; (M = a.inArray(X, p, M)) > -1;) p.splice(M, 1), M <= b && b--
                    }), this
                }, has: function (N) {
                    return N ? a.inArray(N, p) > -1 : p.length > 0
                }, empty: function () {
                    return p && (p = []), this
                }, disable: function () {
                    return d = D = [], p = s = "", this
                }, disabled: function () {
                    return !p
                }, lock: function () {
                    return d = D = [], !s && !u && (p = s = ""), this
                }, locked: function () {
                    return !!d
                }, fireWith: function (N, X) {
                    return d || (X = X || [], X = [N, X.slice ? X.slice() : X], D.push(X), u || w()), this
                }, fire: function () {
                    return P.fireWith(this, arguments), this
                }, fired: function () {
                    return !!l
                }
            };
            return P
        };

        function rt(t) {
            return t
        }

        function it(t) {
            throw t
        }

        function kn(t, u, s, l) {
            var d;
            try {
                t && v(d = t.promise) ? d.call(t).done(u).fail(s) : t && v(d = t.then) ? d.call(t, u, s) : u.apply(void 0, [t].slice(l))
            } catch (p) {
                s.apply(void 0, [p])
            }
        }

        a.extend({
            Deferred: function (t) {
                var u = [["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory"), 2], ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), 1, "rejected"]],
                    s = "pending", l = {
                        state: function () {
                            return s
                        }, always: function () {
                            return d.done(arguments).fail(arguments), this
                        }, catch: function (p) {
                            return l.then(null, p)
                        }, pipe: function () {
                            var p = arguments;
                            return a.Deferred(function (D) {
                                a.each(u, function (b, w) {
                                    var P = v(p[w[4]]) && p[w[4]];
                                    d[w[1]](function () {
                                        var N = P && P.apply(this, arguments);
                                        N && v(N.promise) ? N.promise().progress(D.notify).done(D.resolve).fail(D.reject) : D[w[0] + "With"](this, P ? [N] : arguments)
                                    })
                                }), p = null
                            }).promise()
                        }, then: function (p, D, b) {
                            var w = 0;

                            function P(N, X, M, I) {
                                return function () {
                                    var re = this, ge = arguments, ie = function () {
                                        var lt, an;
                                        if (!(N < w)) {
                                            if (lt = M.apply(re, ge), lt === X.promise()) throw new TypeError("Thenable self-resolution");
                                            an = lt && (typeof lt == "object" || typeof lt == "function") && lt.then, v(an) ? I ? an.call(lt, P(w, X, rt, I), P(w, X, it, I)) : (w++, an.call(lt, P(w, X, rt, I), P(w, X, it, I), P(w, X, rt, X.notifyWith))) : (M !== rt && (re = void 0, ge = [lt]), (I || X.resolveWith)(re, ge))
                                        }
                                    }, Dt = I ? ie : function () {
                                        try {
                                            ie()
                                        } catch (lt) {
                                            a.Deferred.exceptionHook && a.Deferred.exceptionHook(lt, Dt.stackTrace), N + 1 >= w && (M !== it && (re = void 0, ge = [lt]), X.rejectWith(re, ge))
                                        }
                                    };
                                    N ? Dt() : (a.Deferred.getStackHook && (Dt.stackTrace = a.Deferred.getStackHook()), e.setTimeout(Dt))
                                }
                            }

                            return a.Deferred(function (N) {
                                u[0][3].add(P(0, N, v(b) ? b : rt, N.notifyWith)), u[1][3].add(P(0, N, v(p) ? p : rt)), u[2][3].add(P(0, N, v(D) ? D : it))
                            }).promise()
                        }, promise: function (p) {
                            return p != null ? a.extend(p, l) : l
                        }
                    }, d = {};
                return a.each(u, function (p, D) {
                    var b = D[2], w = D[5];
                    l[D[1]] = b.add, w && b.add(function () {
                        s = w
                    }, u[3 - p][2].disable, u[3 - p][3].disable, u[0][2].lock, u[0][3].lock), b.add(D[3].fire), d[D[0]] = function () {
                        return d[D[0] + "With"](this === d ? void 0 : this, arguments), this
                    }, d[D[0] + "With"] = b.fireWith
                }), l.promise(d), t && t.call(d, d), d
            }, when: function (t) {
                var u = arguments.length, s = u, l = Array(s), d = o.call(arguments), p = a.Deferred(),
                    D = function (b) {
                        return function (w) {
                            l[b] = this, d[b] = arguments.length > 1 ? o.call(arguments) : w, --u || p.resolveWith(l, d)
                        }
                    };
                if (u <= 1 && (kn(t, p.done(D(s)).resolve, p.reject, !u), p.state() === "pending" || v(d[s] && d[s].then))) return p.then();
                for (; s--;) kn(d[s], D(s), p.reject);
                return p.promise()
            }
        });
        var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        a.Deferred.exceptionHook = function (t, u) {
            e.console && e.console.warn && t && Le.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, u)
        }, a.readyException = function (t) {
            e.setTimeout(function () {
                throw t
            })
        };
        var at = a.Deferred();
        a.fn.ready = function (t) {
            return at.then(t).catch(function (u) {
                a.readyException(u)
            }), this
        }, a.extend({
            isReady: !1, readyWait: 1, ready: function (t) {
                (t === !0 ? --a.readyWait : a.isReady) || (a.isReady = !0, !(t !== !0 && --a.readyWait > 0) && at.resolveWith(A, [a]))
            }
        }), a.ready.then = at.then;

        function ft() {
            A.removeEventListener("DOMContentLoaded", ft), e.removeEventListener("load", ft), a.ready()
        }

        A.readyState === "complete" || A.readyState !== "loading" && !A.documentElement.doScroll ? e.setTimeout(a.ready) : (A.addEventListener("DOMContentLoaded", ft), e.addEventListener("load", ft));
        var Lt = function (t, u, s, l, d, p, D) {
            var b = 0, w = t.length, P = s == null;
            if (z(s) === "object") {
                d = !0;
                for (b in s) Lt(t, u, b, s[b], !0, p, D)
            } else if (l !== void 0 && (d = !0, v(l) || (D = !0), P && (D ? (u.call(t, l), u = null) : (P = u, u = function (N, X, M) {
                return P.call(a(N), M)
            })), u)) for (; b < w; b++) u(t[b], s, D ? l : l.call(t[b], b, u(t[b], s)));
            return d ? t : P ? u.call(t) : w ? u(t[0], s) : p
        }, Yt = /^-ms-/, Vt = /-([a-z])/g;

        function Se(t, u) {
            return u.toUpperCase()
        }

        function Re(t) {
            return t.replace(Yt, "ms-").replace(Vt, Se)
        }

        var dt = function (t) {
            return t.nodeType === 1 || t.nodeType === 9 || !+t.nodeType
        };

        function St() {
            this.expando = a.expando + St.uid++
        }

        St.uid = 1, St.prototype = {
            cache: function (t) {
                var u = t[this.expando];
                return u || (u = {}, dt(t) && (t.nodeType ? t[this.expando] = u : Object.defineProperty(t, this.expando, {
                    value: u,
                    configurable: !0
                }))), u
            }, set: function (t, u, s) {
                var l, d = this.cache(t);
                if (typeof u == "string") d[Re(u)] = s; else for (l in u) d[Re(l)] = u[l];
                return d
            }, get: function (t, u) {
                return u === void 0 ? this.cache(t) : t[this.expando] && t[this.expando][Re(u)]
            }, access: function (t, u, s) {
                return u === void 0 || u && typeof u == "string" && s === void 0 ? this.get(t, u) : (this.set(t, u, s), s !== void 0 ? s : u)
            }, remove: function (t, u) {
                var s, l = t[this.expando];
                if (l !== void 0) {
                    if (u !== void 0) for (Array.isArray(u) ? u = u.map(Re) : (u = Re(u), u = u in l ? [u] : u.match(Me) || []), s = u.length; s--;) delete l[u[s]];
                    (u === void 0 || a.isEmptyObject(l)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }, hasData: function (t) {
                var u = t[this.expando];
                return u !== void 0 && !a.isEmptyObject(u)
            }
        };
        var ee = new St, L = new St, On = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, $e = /[A-Z]/g;

        function $n(t) {
            return t === "true" ? !0 : t === "false" ? !1 : t === "null" ? null : t === +t + "" ? +t : On.test(t) ? JSON.parse(t) : t
        }

        function Mn(t, u, s) {
            var l;
            if (s === void 0 && t.nodeType === 1) if (l = "data-" + u.replace($e, "-$&").toLowerCase(), s = t.getAttribute(l), typeof s == "string") {
                try {
                    s = $n(s)
                } catch {
                }
                L.set(t, u, s)
            } else s = void 0;
            return s
        }

        a.extend({
            hasData: function (t) {
                return L.hasData(t) || ee.hasData(t)
            }, data: function (t, u, s) {
                return L.access(t, u, s)
            }, removeData: function (t, u) {
                L.remove(t, u)
            }, _data: function (t, u, s) {
                return ee.access(t, u, s)
            }, _removeData: function (t, u) {
                ee.remove(t, u)
            }
        }), a.fn.extend({
            data: function (t, u) {
                var s, l, d, p = this[0], D = p && p.attributes;
                if (t === void 0) {
                    if (this.length && (d = L.get(p), p.nodeType === 1 && !ee.get(p, "hasDataAttrs"))) {
                        for (s = D.length; s--;) D[s] && (l = D[s].name, l.indexOf("data-") === 0 && (l = Re(l.slice(5)), Mn(p, l, d[l])));
                        ee.set(p, "hasDataAttrs", !0)
                    }
                    return d
                }
                return typeof t == "object" ? this.each(function () {
                    L.set(this, t)
                }) : Lt(this, function (b) {
                    var w;
                    if (p && b === void 0) return w = L.get(p, t), w !== void 0 || (w = Mn(p, t), w !== void 0) ? w : void 0;
                    this.each(function () {
                        L.set(this, t, b)
                    })
                }, null, u, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each(function () {
                    L.remove(this, t)
                })
            }
        }), a.extend({
            queue: function (t, u, s) {
                var l;
                if (t) return u = (u || "fx") + "queue", l = ee.get(t, u), s && (!l || Array.isArray(s) ? l = ee.access(t, u, a.makeArray(s)) : l.push(s)), l || []
            }, dequeue: function (t, u) {
                u = u || "fx";
                var s = a.queue(t, u), l = s.length, d = s.shift(), p = a._queueHooks(t, u), D = function () {
                    a.dequeue(t, u)
                };
                d === "inprogress" && (d = s.shift(), l--), d && (u === "fx" && s.unshift("inprogress"), delete p.stop, d.call(t, D, p)), !l && p && p.empty.fire()
            }, _queueHooks: function (t, u) {
                var s = u + "queueHooks";
                return ee.get(t, s) || ee.access(t, s, {
                    empty: a.Callbacks("once memory").add(function () {
                        ee.remove(t, [u + "queue", s])
                    })
                })
            }
        }), a.fn.extend({
            queue: function (t, u) {
                var s = 2;
                return typeof t != "string" && (u = t, t = "fx", s--), arguments.length < s ? a.queue(this[0], t) : u === void 0 ? this : this.each(function () {
                    var l = a.queue(this, t, u);
                    a._queueHooks(this, t), t === "fx" && l[0] !== "inprogress" && a.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    a.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, u) {
                var s, l = 1, d = a.Deferred(), p = this, D = this.length, b = function () {
                    --l || d.resolveWith(p, [p])
                };
                for (typeof t != "string" && (u = t, t = void 0), t = t || "fx"; D--;) s = ee.get(p[D], t + "queueHooks"), s && s.empty && (l++, s.empty.add(b));
                return b(), d.promise(u)
            }
        });
        var Jn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ut = new RegExp("^(?:([+-])=|)(" + Jn + ")([a-z%]*)$", "i"), Rt = ["Top", "Right", "Bottom", "Left"],
            At = A.documentElement, Ne = function (t) {
                return a.contains(t.ownerDocument, t)
            }, It = {composed: !0};
        At.getRootNode && (Ne = function (t) {
            return a.contains(t.ownerDocument, t) || t.getRootNode(It) === t.ownerDocument
        });
        var ot = function (t, u) {
            return t = u || t, t.style.display === "none" || t.style.display === "" && Ne(t) && a.css(t, "display") === "none"
        };

        function dr(t, u, s, l) {
            var d, p, D = 20, b = l ? function () {
                    return l.cur()
                } : function () {
                    return a.css(t, u, "")
                }, w = b(), P = s && s[3] || (a.cssNumber[u] ? "" : "px"),
                N = t.nodeType && (a.cssNumber[u] || P !== "px" && +w) && ut.exec(a.css(t, u));
            if (N && N[3] !== P) {
                for (w = w / 2, P = P || N[3], N = +w || 1; D--;) a.style(t, u, N + P), (1 - p) * (1 - (p = b() / w || .5)) <= 0 && (D = 0), N = N / p;
                N = N * 2, a.style(t, u, N + P), s = s || []
            }
            return s && (N = +N || +w || 0, d = s[1] ? N + (s[1] + 1) * s[2] : +s[2], l && (l.unit = P, l.start = N, l.end = d)), d
        }

        var Nn = {};

        function yn(t) {
            var u, s = t.ownerDocument, l = t.nodeName, d = Nn[l];
            return d || (u = s.body.appendChild(s.createElement(l)), d = a.css(u, "display"), u.parentNode.removeChild(u), d === "none" && (d = "block"), Nn[l] = d, d)
        }

        function mn(t, u) {
            for (var s, l, d = [], p = 0, D = t.length; p < D; p++) l = t[p], l.style && (s = l.style.display, u ? (s === "none" && (d[p] = ee.get(l, "display") || null, d[p] || (l.style.display = "")), l.style.display === "" && ot(l) && (d[p] = yn(l))) : s !== "none" && (d[p] = "none", ee.set(l, "display", s)));
            for (p = 0; p < D; p++) d[p] != null && (t[p].style.display = d[p]);
            return t
        }

        a.fn.extend({
            show: function () {
                return mn(this, !0)
            }, hide: function () {
                return mn(this)
            }, toggle: function (t) {
                return typeof t == "boolean" ? t ? this.show() : this.hide() : this.each(function () {
                    ot(this) ? a(this).show() : a(this).hide()
                })
            }
        });
        var Ut = /^(?:checkbox|radio)$/i, Xn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            er = /^$|^module$|\/(?:java|ecma)script/i;
        (function () {
            var t = A.createDocumentFragment(), u = t.appendChild(A.createElement("div")), s = A.createElement("input");
            s.setAttribute("type", "radio"), s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), u.appendChild(s), E.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, u.innerHTML = "<textarea>x</textarea>", E.noCloneChecked = !!u.cloneNode(!0).lastChild.defaultValue, u.innerHTML = "<option></option>", E.option = !!u.lastChild
        })();
        var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, E.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);

        function Ue(t, u) {
            var s;
            return typeof t.getElementsByTagName != "undefined" ? s = t.getElementsByTagName(u || "*") : typeof t.querySelectorAll != "undefined" ? s = t.querySelectorAll(u || "*") : s = [], u === void 0 || u && J(t, u) ? a.merge([t], s) : s
        }

        function bt(t, u) {
            for (var s = 0, l = t.length; s < l; s++) ee.set(t[s], "globalEval", !u || ee.get(u[s], "globalEval"))
        }

        var on = /<|&#?\w+;/;

        function vn(t, u, s, l, d) {
            for (var p, D, b, w, P, N, X = u.createDocumentFragment(), M = [], I = 0, re = t.length; I < re; I++) if (p = t[I], p || p === 0) if (z(p) === "object") a.merge(M, p.nodeType ? [p] : p); else if (!on.test(p)) M.push(u.createTextNode(p)); else {
                for (D = D || X.appendChild(u.createElement("div")), b = (Xn.exec(p) || ["", ""])[1].toLowerCase(), w = ye[b] || ye._default, D.innerHTML = w[1] + a.htmlPrefilter(p) + w[2], N = w[0]; N--;) D = D.lastChild;
                a.merge(M, D.childNodes), D = X.firstChild, D.textContent = ""
            }
            for (X.textContent = "", I = 0; p = M[I++];) {
                if (l && a.inArray(p, l) > -1) {
                    d && d.push(p);
                    continue
                }
                if (P = Ne(p), D = Ue(X.appendChild(p), "script"), P && bt(D), s) for (N = 0; p = D[N++];) er.test(p.type || "") && s.push(p)
            }
            return X
        }

        var Bn = /^([^.]*)(?:\.(.+)|)/;

        function Gt() {
            return !0
        }

        function sn() {
            return !1
        }

        function Ln(t, u) {
            return t === kr() == (u === "focus")
        }

        function kr() {
            try {
                return A.activeElement
            } catch {
            }
        }

        function tr(t, u, s, l, d, p) {
            var D, b;
            if (typeof u == "object") {
                typeof s != "string" && (l = l || s, s = void 0);
                for (b in u) tr(t, b, s, l, u[b], p);
                return t
            }
            if (l == null && d == null ? (d = s, l = s = void 0) : d == null && (typeof s == "string" ? (d = l, l = void 0) : (d = l, l = s, s = void 0)), d === !1) d = sn; else if (!d) return t;
            return p === 1 && (D = d, d = function (w) {
                return a().off(w), D.apply(this, arguments)
            }, d.guid = D.guid || (D.guid = a.guid++)), t.each(function () {
                a.event.add(this, u, d, l, s)
            })
        }

        a.event = {
            global: {}, add: function (t, u, s, l, d) {
                var p, D, b, w, P, N, X, M, I, re, ge, ie = ee.get(t);
                if (!!dt(t)) for (s.handler && (p = s, s = p.handler, d = p.selector), d && a.find.matchesSelector(At, d), s.guid || (s.guid = a.guid++), (w = ie.events) || (w = ie.events = Object.create(null)), (D = ie.handle) || (D = ie.handle = function (Dt) {
                    return typeof a != "undefined" && a.event.triggered !== Dt.type ? a.event.dispatch.apply(t, arguments) : void 0
                }), u = (u || "").match(Me) || [""], P = u.length; P--;) b = Bn.exec(u[P]) || [], I = ge = b[1], re = (b[2] || "").split(".").sort(), I && (X = a.event.special[I] || {}, I = (d ? X.delegateType : X.bindType) || I, X = a.event.special[I] || {}, N = a.extend({
                    type: I,
                    origType: ge,
                    data: l,
                    handler: s,
                    guid: s.guid,
                    selector: d,
                    needsContext: d && a.expr.match.needsContext.test(d),
                    namespace: re.join(".")
                }, p), (M = w[I]) || (M = w[I] = [], M.delegateCount = 0, (!X.setup || X.setup.call(t, l, re, D) === !1) && t.addEventListener && t.addEventListener(I, D)), X.add && (X.add.call(t, N), N.handler.guid || (N.handler.guid = s.guid)), d ? M.splice(M.delegateCount++, 0, N) : M.push(N), a.event.global[I] = !0)
            }, remove: function (t, u, s, l, d) {
                var p, D, b, w, P, N, X, M, I, re, ge, ie = ee.hasData(t) && ee.get(t);
                if (!(!ie || !(w = ie.events))) {
                    for (u = (u || "").match(Me) || [""], P = u.length; P--;) {
                        if (b = Bn.exec(u[P]) || [], I = ge = b[1], re = (b[2] || "").split(".").sort(), !I) {
                            for (I in w) a.event.remove(t, I + u[P], s, l, !0);
                            continue
                        }
                        for (X = a.event.special[I] || {}, I = (l ? X.delegateType : X.bindType) || I, M = w[I] || [], b = b[2] && new RegExp("(^|\\.)" + re.join("\\.(?:.*\\.|)") + "(\\.|$)"), D = p = M.length; p--;) N = M[p], (d || ge === N.origType) && (!s || s.guid === N.guid) && (!b || b.test(N.namespace)) && (!l || l === N.selector || l === "**" && N.selector) && (M.splice(p, 1), N.selector && M.delegateCount--, X.remove && X.remove.call(t, N));
                        D && !M.length && ((!X.teardown || X.teardown.call(t, re, ie.handle) === !1) && a.removeEvent(t, I, ie.handle), delete w[I])
                    }
                    a.isEmptyObject(w) && ee.remove(t, "handle events")
                }
            }, dispatch: function (t) {
                var u, s, l, d, p, D, b = new Array(arguments.length), w = a.event.fix(t),
                    P = (ee.get(this, "events") || Object.create(null))[w.type] || [],
                    N = a.event.special[w.type] || {};
                for (b[0] = w, u = 1; u < arguments.length; u++) b[u] = arguments[u];
                if (w.delegateTarget = this, !(N.preDispatch && N.preDispatch.call(this, w) === !1)) {
                    for (D = a.event.handlers.call(this, w, P), u = 0; (d = D[u++]) && !w.isPropagationStopped();) for (w.currentTarget = d.elem, s = 0; (p = d.handlers[s++]) && !w.isImmediatePropagationStopped();) (!w.rnamespace || p.namespace === !1 || w.rnamespace.test(p.namespace)) && (w.handleObj = p, w.data = p.data, l = ((a.event.special[p.origType] || {}).handle || p.handler).apply(d.elem, b), l !== void 0 && (w.result = l) === !1 && (w.preventDefault(), w.stopPropagation()));
                    return N.postDispatch && N.postDispatch.call(this, w), w.result
                }
            }, handlers: function (t, u) {
                var s, l, d, p, D, b = [], w = u.delegateCount, P = t.target;
                if (w && P.nodeType && !(t.type === "click" && t.button >= 1)) {
                    for (; P !== this; P = P.parentNode || this) if (P.nodeType === 1 && !(t.type === "click" && P.disabled === !0)) {
                        for (p = [], D = {}, s = 0; s < w; s++) l = u[s], d = l.selector + " ", D[d] === void 0 && (D[d] = l.needsContext ? a(d, this).index(P) > -1 : a.find(d, this, null, [P]).length), D[d] && p.push(l);
                        p.length && b.push({elem: P, handlers: p})
                    }
                }
                return P = this, w < u.length && b.push({elem: P, handlers: u.slice(w)}), b
            }, addProp: function (t, u) {
                Object.defineProperty(a.Event.prototype, t, {
                    enumerable: !0, configurable: !0, get: v(u) ? function () {
                        if (this.originalEvent) return u(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    }, set: function (s) {
                        Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: s})
                    }
                })
            }, fix: function (t) {
                return t[a.expando] ? t : new a.Event(t)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (t) {
                        var u = this || t;
                        return Ut.test(u.type) && u.click && J(u, "input") && me(u, "click", Gt), !1
                    }, trigger: function (t) {
                        var u = this || t;
                        return Ut.test(u.type) && u.click && J(u, "input") && me(u, "click"), !0
                    }, _default: function (t) {
                        var u = t.target;
                        return Ut.test(u.type) && u.click && J(u, "input") && ee.get(u, "click") || J(u, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        t.result !== void 0 && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        };

        function me(t, u, s) {
            if (!s) {
                ee.get(t, u) === void 0 && a.event.add(t, u, Gt);
                return
            }
            ee.set(t, u, !1), a.event.add(t, u, {
                namespace: !1, handler: function (l) {
                    var d, p, D = ee.get(this, u);
                    if (l.isTrigger & 1 && this[u]) {
                        if (D.length) (a.event.special[u] || {}).delegateType && l.stopPropagation(); else if (D = o.call(arguments), ee.set(this, u, D), d = s(this, u), this[u](), p = ee.get(this, u), D !== p || d ? ee.set(this, u, !1) : p = {}, D !== p) return l.stopImmediatePropagation(), l.preventDefault(), p && p.value
                    } else D.length && (ee.set(this, u, {value: a.event.trigger(a.extend(D[0], a.Event.prototype), D.slice(1), this)}), l.stopImmediatePropagation())
                }
            })
        }

        a.removeEvent = function (t, u, s) {
            t.removeEventListener && t.removeEventListener(u, s)
        }, a.Event = function (t, u) {
            if (!(this instanceof a.Event)) return new a.Event(t, u);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === void 0 && t.returnValue === !1 ? Gt : sn, this.target = t.target && t.target.nodeType === 3 ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, u && a.extend(this, u), this.timeStamp = t && t.timeStamp || Date.now(), this[a.expando] = !0
        }, a.Event.prototype = {
            constructor: a.Event,
            isDefaultPrevented: sn,
            isPropagationStopped: sn,
            isImmediatePropagationStopped: sn,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = Gt, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = Gt, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Gt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, a.each({
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
        }, a.event.addProp), a.each({focus: "focusin", blur: "focusout"}, function (t, u) {
            a.event.special[t] = {
                setup: function () {
                    return me(this, t, Ln), !1
                }, trigger: function () {
                    return me(this, t), !0
                }, _default: function () {
                    return !0
                }, delegateType: u
            }
        }), a.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, u) {
            a.event.special[t] = {
                delegateType: u, bindType: u, handle: function (s) {
                    var l, d = this, p = s.relatedTarget, D = s.handleObj;
                    return (!p || p !== d && !a.contains(d, p)) && (s.type = D.origType, l = D.handler.apply(this, arguments), s.type = u), l
                }
            }
        }), a.fn.extend({
            on: function (t, u, s, l) {
                return tr(this, t, u, s, l)
            }, one: function (t, u, s, l) {
                return tr(this, t, u, s, l, 1)
            }, off: function (t, u, s) {
                var l, d;
                if (t && t.preventDefault && t.handleObj) return l = t.handleObj, a(t.delegateTarget).off(l.namespace ? l.origType + "." + l.namespace : l.origType, l.selector, l.handler), this;
                if (typeof t == "object") {
                    for (d in t) this.off(d, u, t[d]);
                    return this
                }
                return (u === !1 || typeof u == "function") && (s = u, u = void 0), s === !1 && (s = sn), this.each(function () {
                    a.event.remove(this, t, s, u)
                })
            }
        });
        var U = /<script|<style|<link/i, te = /checked\s*(?:[^=]|=\s*.checked.)/i,
            oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function le(t, u) {
            return J(t, "table") && J(u.nodeType !== 11 ? u : u.firstChild, "tr") && a(t).children("tbody")[0] || t
        }

        function pt(t) {
            return t.type = (t.getAttribute("type") !== null) + "/" + t.type, t
        }

        function _e(t) {
            return (t.type || "").slice(0, 5) === "true/" ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Ge(t, u) {
            var s, l, d, p, D, b, w;
            if (u.nodeType === 1) {
                if (ee.hasData(t) && (p = ee.get(t), w = p.events, w)) {
                    ee.remove(u, "handle events");
                    for (d in w) for (s = 0, l = w[d].length; s < l; s++) a.event.add(u, d, w[d][s])
                }
                L.hasData(t) && (D = L.access(t), b = a.extend({}, D), L.set(u, b))
            }
        }

        function Xe(t, u) {
            var s = u.nodeName.toLowerCase();
            s === "input" && Ut.test(t.type) ? u.checked = t.checked : (s === "input" || s === "textarea") && (u.defaultValue = t.defaultValue)
        }

        function Tt(t, u, s, l) {
            u = f(u);
            var d, p, D, b, w, P, N = 0, X = t.length, M = X - 1, I = u[0], re = v(I);
            if (re || X > 1 && typeof I == "string" && !E.checkClone && te.test(I)) return t.each(function (ge) {
                var ie = t.eq(ge);
                re && (u[0] = I.call(this, ge, ie.html())), Tt(ie, u, s, l)
            });
            if (X && (d = vn(u, t[0].ownerDocument, !1, t, l), p = d.firstChild, d.childNodes.length === 1 && (d = p), p || l)) {
                for (D = a.map(Ue(d, "script"), pt), b = D.length; N < X; N++) w = d, N !== M && (w = a.clone(w, !0, !0), b && a.merge(D, Ue(w, "script"))), s.call(t[N], w, N);
                if (b) for (P = D[D.length - 1].ownerDocument, a.map(D, _e), N = 0; N < b; N++) w = D[N], er.test(w.type || "") && !ee.access(w, "globalEval") && a.contains(P, w) && (w.src && (w.type || "").toLowerCase() !== "module" ? a._evalUrl && !w.noModule && a._evalUrl(w.src, {nonce: w.nonce || w.getAttribute("nonce")}, P) : R(w.textContent.replace(oe, ""), w, P))
            }
            return t
        }

        function Oe(t, u, s) {
            for (var l, d = u ? a.filter(u, t) : t, p = 0; (l = d[p]) != null; p++) !s && l.nodeType === 1 && a.cleanData(Ue(l)), l.parentNode && (s && Ne(l) && bt(Ue(l, "script")), l.parentNode.removeChild(l));
            return t
        }

        a.extend({
            htmlPrefilter: function (t) {
                return t
            }, clone: function (t, u, s) {
                var l, d, p, D, b = t.cloneNode(!0), w = Ne(t);
                if (!E.noCloneChecked && (t.nodeType === 1 || t.nodeType === 11) && !a.isXMLDoc(t)) for (D = Ue(b), p = Ue(t), l = 0, d = p.length; l < d; l++) Xe(p[l], D[l]);
                if (u) if (s) for (p = p || Ue(t), D = D || Ue(b), l = 0, d = p.length; l < d; l++) Ge(p[l], D[l]); else Ge(t, b);
                return D = Ue(b, "script"), D.length > 0 && bt(D, !w && Ue(t, "script")), b
            }, cleanData: function (t) {
                for (var u, s, l, d = a.event.special, p = 0; (s = t[p]) !== void 0; p++) if (dt(s)) {
                    if (u = s[ee.expando]) {
                        if (u.events) for (l in u.events) d[l] ? a.event.remove(s, l) : a.removeEvent(s, l, u.handle);
                        s[ee.expando] = void 0
                    }
                    s[L.expando] && (s[L.expando] = void 0)
                }
            }
        }), a.fn.extend({
            detach: function (t) {
                return Oe(this, t, !0)
            }, remove: function (t) {
                return Oe(this, t)
            }, text: function (t) {
                return Lt(this, function (u) {
                    return u === void 0 ? a.text(this) : this.empty().each(function () {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = u)
                    })
                }, null, t, arguments.length)
            }, append: function () {
                return Tt(this, arguments, function (t) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var u = le(this, t);
                        u.appendChild(t)
                    }
                })
            }, prepend: function () {
                return Tt(this, arguments, function (t) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var u = le(this, t);
                        u.insertBefore(t, u.firstChild)
                    }
                })
            }, before: function () {
                return Tt(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return Tt(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, empty: function () {
                for (var t, u = 0; (t = this[u]) != null; u++) t.nodeType === 1 && (a.cleanData(Ue(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, u) {
                return t = t == null ? !1 : t, u = u == null ? t : u, this.map(function () {
                    return a.clone(this, t, u)
                })
            }, html: function (t) {
                return Lt(this, function (u) {
                    var s = this[0] || {}, l = 0, d = this.length;
                    if (u === void 0 && s.nodeType === 1) return s.innerHTML;
                    if (typeof u == "string" && !U.test(u) && !ye[(Xn.exec(u) || ["", ""])[1].toLowerCase()]) {
                        u = a.htmlPrefilter(u);
                        try {
                            for (; l < d; l++) s = this[l] || {}, s.nodeType === 1 && (a.cleanData(Ue(s, !1)), s.innerHTML = u);
                            s = 0
                        } catch {
                        }
                    }
                    s && this.empty().append(u)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return Tt(this, arguments, function (u) {
                    var s = this.parentNode;
                    a.inArray(this, t) < 0 && (a.cleanData(Ue(this)), s && s.replaceChild(u, this))
                }, t)
            }
        }), a.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, u) {
            a.fn[t] = function (s) {
                for (var l, d = [], p = a(s), D = p.length - 1, b = 0; b <= D; b++) l = b === D ? this : this.clone(!0), a(p[b])[u](l), c.apply(d, l.get());
                return this.pushStack(d)
            }
        });
        var gt = new RegExp("^(" + Jn + ")(?!px)[a-z%]+$", "i"), Pt = function (t) {
            var u = t.ownerDocument.defaultView;
            return (!u || !u.opener) && (u = e), u.getComputedStyle(t)
        }, We = function (t, u, s) {
            var l, d, p = {};
            for (d in u) p[d] = t.style[d], t.style[d] = u[d];
            l = s.call(t);
            for (d in u) t.style[d] = p[d];
            return l
        }, Ye = new RegExp(Rt.join("|"), "i");
        (function () {
            function t() {
                if (!!P) {
                    w.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", P.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", At.appendChild(w).appendChild(P);
                    var N = e.getComputedStyle(P);
                    s = N.top !== "1%", b = u(N.marginLeft) === 12, P.style.right = "60%", p = u(N.right) === 36, l = u(N.width) === 36, P.style.position = "absolute", d = u(P.offsetWidth / 3) === 12, At.removeChild(w), P = null
                }
            }

            function u(N) {
                return Math.round(parseFloat(N))
            }

            var s, l, d, p, D, b, w = A.createElement("div"), P = A.createElement("div");
            !P.style || (P.style.backgroundClip = "content-box", P.cloneNode(!0).style.backgroundClip = "", E.clearCloneStyle = P.style.backgroundClip === "content-box", a.extend(E, {
                boxSizingReliable: function () {
                    return t(), l
                }, pixelBoxStyles: function () {
                    return t(), p
                }, pixelPosition: function () {
                    return t(), s
                }, reliableMarginLeft: function () {
                    return t(), b
                }, scrollboxSize: function () {
                    return t(), d
                }, reliableTrDimensions: function () {
                    var N, X, M, I;
                    return D == null && (N = A.createElement("table"), X = A.createElement("tr"), M = A.createElement("div"), N.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", X.style.cssText = "border:1px solid", X.style.height = "1px", M.style.height = "9px", M.style.display = "block", At.appendChild(N).appendChild(X).appendChild(M), I = e.getComputedStyle(X), D = parseInt(I.height, 10) + parseInt(I.borderTopWidth, 10) + parseInt(I.borderBottomWidth, 10) === X.offsetHeight, At.removeChild(N)), D
                }
            }))
        })();

        function qe(t, u, s) {
            var l, d, p, D, b = t.style;
            return s = s || Pt(t), s && (D = s.getPropertyValue(u) || s[u], D === "" && !Ne(t) && (D = a.style(t, u)), !E.pixelBoxStyles() && gt.test(D) && Ye.test(u) && (l = b.width, d = b.minWidth, p = b.maxWidth, b.minWidth = b.maxWidth = b.width = D, D = s.width, b.width = l, b.minWidth = d, b.maxWidth = p)), D !== void 0 ? D + "" : D
        }

        function nr(t, u) {
            return {
                get: function () {
                    if (t()) {
                        delete this.get;
                        return
                    }
                    return (this.get = u).apply(this, arguments)
                }
            }
        }

        var Yn = ["Webkit", "Moz", "ms"], Je = A.createElement("div").style, Qe = {};

        function Rn(t) {
            for (var u = t[0].toUpperCase() + t.slice(1), s = Yn.length; s--;) if (t = Yn[s] + u, t in Je) return t
        }

        function Or(t) {
            var u = a.cssProps[t] || Qe[t];
            return u || (t in Je ? t : Qe[t] = Rn(t) || t)
        }

        var Du = /^(none|table(?!-c[ea]).+)/, pr = /^--/,
            po = {position: "absolute", visibility: "hidden", display: "block"},
            Ns = {letterSpacing: "0", fontWeight: "400"};

        function Bs(t, u, s) {
            var l = ut.exec(u);
            return l ? Math.max(0, l[2] - (s || 0)) + (l[3] || "px") : u
        }

        function go(t, u, s, l, d, p) {
            var D = u === "width" ? 1 : 0, b = 0, w = 0;
            if (s === (l ? "border" : "content")) return 0;
            for (; D < 4; D += 2) s === "margin" && (w += a.css(t, s + Rt[D], !0, d)), l ? (s === "content" && (w -= a.css(t, "padding" + Rt[D], !0, d)), s !== "margin" && (w -= a.css(t, "border" + Rt[D] + "Width", !0, d))) : (w += a.css(t, "padding" + Rt[D], !0, d), s !== "padding" ? w += a.css(t, "border" + Rt[D] + "Width", !0, d) : b += a.css(t, "border" + Rt[D] + "Width", !0, d));
            return !l && p >= 0 && (w += Math.max(0, Math.ceil(t["offset" + u[0].toUpperCase() + u.slice(1)] - p - w - b - .5)) || 0), w
        }

        function Ls(t, u, s) {
            var l = Pt(t), d = !E.boxSizingReliable() || s, p = d && a.css(t, "boxSizing", !1, l) === "border-box",
                D = p, b = qe(t, u, l), w = "offset" + u[0].toUpperCase() + u.slice(1);
            if (gt.test(b)) {
                if (!s) return b;
                b = "auto"
            }
            return (!E.boxSizingReliable() && p || !E.reliableTrDimensions() && J(t, "tr") || b === "auto" || !parseFloat(b) && a.css(t, "display", !1, l) === "inline") && t.getClientRects().length && (p = a.css(t, "boxSizing", !1, l) === "border-box", D = w in t, D && (b = t[w])), b = parseFloat(b) || 0, b + go(t, u, s || (p ? "border" : "content"), D, l, b) + "px"
        }

        a.extend({
            cssHooks: {
                opacity: {
                    get: function (t, u) {
                        if (u) {
                            var s = qe(t, "opacity");
                            return s === "" ? "1" : s
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
            style: function (t, u, s, l) {
                if (!(!t || t.nodeType === 3 || t.nodeType === 8 || !t.style)) {
                    var d, p, D, b = Re(u), w = pr.test(u), P = t.style;
                    if (w || (u = Or(b)), D = a.cssHooks[u] || a.cssHooks[b], s !== void 0) {
                        if (p = typeof s, p === "string" && (d = ut.exec(s)) && d[1] && (s = dr(t, u, d), p = "number"), s == null || s !== s) return;
                        p === "number" && !w && (s += d && d[3] || (a.cssNumber[b] ? "" : "px")), !E.clearCloneStyle && s === "" && u.indexOf("background") === 0 && (P[u] = "inherit"), (!D || !("set" in D) || (s = D.set(t, s, l)) !== void 0) && (w ? P.setProperty(u, s) : P[u] = s)
                    } else return D && "get" in D && (d = D.get(t, !1, l)) !== void 0 ? d : P[u]
                }
            },
            css: function (t, u, s, l) {
                var d, p, D, b = Re(u), w = pr.test(u);
                return w || (u = Or(b)), D = a.cssHooks[u] || a.cssHooks[b], D && "get" in D && (d = D.get(t, !0, s)), d === void 0 && (d = qe(t, u, l)), d === "normal" && u in Ns && (d = Ns[u]), s === "" || s ? (p = parseFloat(d), s === !0 || isFinite(p) ? p || 0 : d) : d
            }
        }), a.each(["height", "width"], function (t, u) {
            a.cssHooks[u] = {
                get: function (s, l, d) {
                    if (l) return Du.test(a.css(s, "display")) && (!s.getClientRects().length || !s.getBoundingClientRect().width) ? We(s, po, function () {
                        return Ls(s, u, d)
                    }) : Ls(s, u, d)
                }, set: function (s, l, d) {
                    var p, D = Pt(s), b = !E.scrollboxSize() && D.position === "absolute", w = b || d,
                        P = w && a.css(s, "boxSizing", !1, D) === "border-box", N = d ? go(s, u, d, P, D) : 0;
                    return P && b && (N -= Math.ceil(s["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(D[u]) - go(s, u, "border", !1, D) - .5)), N && (p = ut.exec(l)) && (p[3] || "px") !== "px" && (s.style[u] = l, l = a.css(s, u)), Bs(s, l, N)
                }
            }
        }), a.cssHooks.marginLeft = nr(E.reliableMarginLeft, function (t, u) {
            if (u) return (parseFloat(qe(t, "marginLeft")) || t.getBoundingClientRect().left - We(t, {marginLeft: 0}, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), a.each({margin: "", padding: "", border: "Width"}, function (t, u) {
            a.cssHooks[t + u] = {
                expand: function (s) {
                    for (var l = 0, d = {}, p = typeof s == "string" ? s.split(" ") : [s]; l < 4; l++) d[t + Rt[l] + u] = p[l] || p[l - 2] || p[0];
                    return d
                }
            }, t !== "margin" && (a.cssHooks[t + u].set = Bs)
        }), a.fn.extend({
            css: function (t, u) {
                return Lt(this, function (s, l, d) {
                    var p, D, b = {}, w = 0;
                    if (Array.isArray(l)) {
                        for (p = Pt(s), D = l.length; w < D; w++) b[l[w]] = a.css(s, l[w], !1, p);
                        return b
                    }
                    return d !== void 0 ? a.style(s, l, d) : a.css(s, l)
                }, t, u, arguments.length > 1)
            }
        });

        function Qt(t, u, s, l, d) {
            return new Qt.prototype.init(t, u, s, l, d)
        }

        a.Tween = Qt, Qt.prototype = {
            constructor: Qt, init: function (t, u, s, l, d, p) {
                this.elem = t, this.prop = s, this.easing = d || a.easing._default, this.options = u, this.start = this.now = this.cur(), this.end = l, this.unit = p || (a.cssNumber[s] ? "" : "px")
            }, cur: function () {
                var t = Qt.propHooks[this.prop];
                return t && t.get ? t.get(this) : Qt.propHooks._default.get(this)
            }, run: function (t) {
                var u, s = Qt.propHooks[this.prop];
                return this.options.duration ? this.pos = u = a.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = u = t, this.now = (this.end - this.start) * u + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), s && s.set ? s.set(this) : Qt.propHooks._default.set(this), this
            }
        }, Qt.prototype.init.prototype = Qt.prototype, Qt.propHooks = {
            _default: {
                get: function (t) {
                    var u;
                    return t.elem.nodeType !== 1 || t.elem[t.prop] != null && t.elem.style[t.prop] == null ? t.elem[t.prop] : (u = a.css(t.elem, t.prop, ""), !u || u === "auto" ? 0 : u)
                }, set: function (t) {
                    a.fx.step[t.prop] ? a.fx.step[t.prop](t) : t.elem.nodeType === 1 && (a.cssHooks[t.prop] || t.elem.style[Or(t.prop)] != null) ? a.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, Qt.propHooks.scrollTop = Qt.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, a.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, a.fx = Qt.prototype.init, a.fx.step = {};
        var si, _u, Dl = /^(?:toggle|show|hide)$/, _l = /queueHooks$/;

        function Do() {
            _u && (A.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Do) : e.setTimeout(Do, a.fx.interval), a.fx.tick())
        }

        function Rs() {
            return e.setTimeout(function () {
                si = void 0
            }), si = Date.now()
        }

        function yu(t, u) {
            var s, l = 0, d = {height: t};
            for (u = u ? 1 : 0; l < 4; l += 2 - u) s = Rt[l], d["margin" + s] = d["padding" + s] = t;
            return u && (d.opacity = d.width = t), d
        }

        function Is(t, u, s) {
            for (var l, d = (In.tweeners[u] || []).concat(In.tweeners["*"]), p = 0, D = d.length; p < D; p++) if (l = d[p].call(s, u, t)) return l
        }

        function yl(t, u, s) {
            var l, d, p, D, b, w, P, N, X = "width" in u || "height" in u, M = this, I = {}, re = t.style,
                ge = t.nodeType && ot(t), ie = ee.get(t, "fxshow");
            s.queue || (D = a._queueHooks(t, "fx"), D.unqueued == null && (D.unqueued = 0, b = D.empty.fire, D.empty.fire = function () {
                D.unqueued || b()
            }), D.unqueued++, M.always(function () {
                M.always(function () {
                    D.unqueued--, a.queue(t, "fx").length || D.empty.fire()
                })
            }));
            for (l in u) if (d = u[l], Dl.test(d)) {
                if (delete u[l], p = p || d === "toggle", d === (ge ? "hide" : "show")) if (d === "show" && ie && ie[l] !== void 0) ge = !0; else continue;
                I[l] = ie && ie[l] || a.style(t, l)
            }
            if (w = !a.isEmptyObject(u), !(!w && a.isEmptyObject(I))) {
                X && t.nodeType === 1 && (s.overflow = [re.overflow, re.overflowX, re.overflowY], P = ie && ie.display, P == null && (P = ee.get(t, "display")), N = a.css(t, "display"), N === "none" && (P ? N = P : (mn([t], !0), P = t.style.display || P, N = a.css(t, "display"), mn([t]))), (N === "inline" || N === "inline-block" && P != null) && a.css(t, "float") === "none" && (w || (M.done(function () {
                    re.display = P
                }), P == null && (N = re.display, P = N === "none" ? "" : N)), re.display = "inline-block")), s.overflow && (re.overflow = "hidden", M.always(function () {
                    re.overflow = s.overflow[0], re.overflowX = s.overflow[1], re.overflowY = s.overflow[2]
                })), w = !1;
                for (l in I) w || (ie ? "hidden" in ie && (ge = ie.hidden) : ie = ee.access(t, "fxshow", {display: P}), p && (ie.hidden = !ge), ge && mn([t], !0), M.done(function () {
                    ge || mn([t]), ee.remove(t, "fxshow");
                    for (l in I) a.style(t, l, I[l])
                })), w = Is(ge ? ie[l] : 0, l, M), l in ie || (ie[l] = w.start, ge && (w.end = w.start, w.start = 0))
            }
        }

        function ml(t, u) {
            var s, l, d, p, D;
            for (s in t) if (l = Re(s), d = u[l], p = t[s], Array.isArray(p) && (d = p[1], p = t[s] = p[0]), s !== l && (t[l] = p, delete t[s]), D = a.cssHooks[l], D && "expand" in D) {
                p = D.expand(p), delete t[l];
                for (s in p) s in t || (t[s] = p[s], u[s] = d)
            } else u[l] = d
        }

        function In(t, u, s) {
            var l, d, p = 0, D = In.prefilters.length, b = a.Deferred().always(function () {
                delete w.elem
            }), w = function () {
                if (d) return !1;
                for (var X = si || Rs(), M = Math.max(0, P.startTime + P.duration - X), I = M / P.duration || 0, re = 1 - I, ge = 0, ie = P.tweens.length; ge < ie; ge++) P.tweens[ge].run(re);
                return b.notifyWith(t, [P, re, M]), re < 1 && ie ? M : (ie || b.notifyWith(t, [P, 1, 0]), b.resolveWith(t, [P]), !1)
            }, P = b.promise({
                elem: t,
                props: a.extend({}, u),
                opts: a.extend(!0, {specialEasing: {}, easing: a.easing._default}, s),
                originalProperties: u,
                originalOptions: s,
                startTime: si || Rs(),
                duration: s.duration,
                tweens: [],
                createTween: function (X, M) {
                    var I = a.Tween(t, P.opts, X, M, P.opts.specialEasing[X] || P.opts.easing);
                    return P.tweens.push(I), I
                },
                stop: function (X) {
                    var M = 0, I = X ? P.tweens.length : 0;
                    if (d) return this;
                    for (d = !0; M < I; M++) P.tweens[M].run(1);
                    return X ? (b.notifyWith(t, [P, 1, 0]), b.resolveWith(t, [P, X])) : b.rejectWith(t, [P, X]), this
                }
            }), N = P.props;
            for (ml(N, P.opts.specialEasing); p < D; p++) if (l = In.prefilters[p].call(P, t, N, P.opts), l) return v(l.stop) && (a._queueHooks(P.elem, P.opts.queue).stop = l.stop.bind(l)), l;
            return a.map(N, Is, P), v(P.opts.start) && P.opts.start.call(t, P), P.progress(P.opts.progress).done(P.opts.done, P.opts.complete).fail(P.opts.fail).always(P.opts.always), a.fx.timer(a.extend(w, {
                elem: t,
                anim: P,
                queue: P.opts.queue
            })), P
        }

        a.Animation = a.extend(In, {
            tweeners: {
                "*": [function (t, u) {
                    var s = this.createTween(t, u);
                    return dr(s.elem, t, ut.exec(u), s), s
                }]
            }, tweener: function (t, u) {
                v(t) ? (u = t, t = ["*"]) : t = t.match(Me);
                for (var s, l = 0, d = t.length; l < d; l++) s = t[l], In.tweeners[s] = In.tweeners[s] || [], In.tweeners[s].unshift(u)
            }, prefilters: [yl], prefilter: function (t, u) {
                u ? In.prefilters.unshift(t) : In.prefilters.push(t)
            }
        }), a.speed = function (t, u, s) {
            var l = t && typeof t == "object" ? a.extend({}, t) : {
                complete: s || !s && u || v(t) && t,
                duration: t,
                easing: s && u || u && !v(u) && u
            };
            return a.fx.off ? l.duration = 0 : typeof l.duration != "number" && (l.duration in a.fx.speeds ? l.duration = a.fx.speeds[l.duration] : l.duration = a.fx.speeds._default), (l.queue == null || l.queue === !0) && (l.queue = "fx"), l.old = l.complete, l.complete = function () {
                v(l.old) && l.old.call(this), l.queue && a.dequeue(this, l.queue)
            }, l
        }, a.fn.extend({
            fadeTo: function (t, u, s, l) {
                return this.filter(ot).css("opacity", 0).show().end().animate({opacity: u}, t, s, l)
            }, animate: function (t, u, s, l) {
                var d = a.isEmptyObject(t), p = a.speed(u, s, l), D = function () {
                    var b = In(this, a.extend({}, t), p);
                    (d || ee.get(this, "finish")) && b.stop(!0)
                };
                return D.finish = D, d || p.queue === !1 ? this.each(D) : this.queue(p.queue, D)
            }, stop: function (t, u, s) {
                var l = function (d) {
                    var p = d.stop;
                    delete d.stop, p(s)
                };
                return typeof t != "string" && (s = u, u = t, t = void 0), u && this.queue(t || "fx", []), this.each(function () {
                    var d = !0, p = t != null && t + "queueHooks", D = a.timers, b = ee.get(this);
                    if (p) b[p] && b[p].stop && l(b[p]); else for (p in b) b[p] && b[p].stop && _l.test(p) && l(b[p]);
                    for (p = D.length; p--;) D[p].elem === this && (t == null || D[p].queue === t) && (D[p].anim.stop(s), d = !1, D.splice(p, 1));
                    (d || !s) && a.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var u, s = ee.get(this), l = s[t + "queue"], d = s[t + "queueHooks"], p = a.timers,
                        D = l ? l.length : 0;
                    for (s.finish = !0, a.queue(this, t, []), d && d.stop && d.stop.call(this, !0), u = p.length; u--;) p[u].elem === this && p[u].queue === t && (p[u].anim.stop(!0), p.splice(u, 1));
                    for (u = 0; u < D; u++) l[u] && l[u].finish && l[u].finish.call(this);
                    delete s.finish
                })
            }
        }), a.each(["toggle", "show", "hide"], function (t, u) {
            var s = a.fn[u];
            a.fn[u] = function (l, d, p) {
                return l == null || typeof l == "boolean" ? s.apply(this, arguments) : this.animate(yu(u, !0), l, d, p)
            }
        }), a.each({
            slideDown: yu("show"),
            slideUp: yu("hide"),
            slideToggle: yu("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, u) {
            a.fn[t] = function (s, l, d) {
                return this.animate(u, s, l, d)
            }
        }), a.timers = [], a.fx.tick = function () {
            var t, u = 0, s = a.timers;
            for (si = Date.now(); u < s.length; u++) t = s[u], !t() && s[u] === t && s.splice(u--, 1);
            s.length || a.fx.stop(), si = void 0
        }, a.fx.timer = function (t) {
            a.timers.push(t), a.fx.start()
        }, a.fx.interval = 13, a.fx.start = function () {
            _u || (_u = !0, Do())
        }, a.fx.stop = function () {
            _u = null
        }, a.fx.speeds = {slow: 600, fast: 200, _default: 400}, a.fn.delay = function (t, u) {
            return t = a.fx && a.fx.speeds[t] || t, u = u || "fx", this.queue(u, function (s, l) {
                var d = e.setTimeout(s, t);
                l.stop = function () {
                    e.clearTimeout(d)
                }
            })
        }, function () {
            var t = A.createElement("input"), u = A.createElement("select"),
                s = u.appendChild(A.createElement("option"));
            t.type = "checkbox", E.checkOn = t.value !== "", E.optSelected = s.selected, t = A.createElement("input"), t.value = "t", t.type = "radio", E.radioValue = t.value === "t"
        }();
        var js, Ai = a.expr.attrHandle;
        a.fn.extend({
            attr: function (t, u) {
                return Lt(this, a.attr, t, u, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    a.removeAttr(this, t)
                })
            }
        }), a.extend({
            attr: function (t, u, s) {
                var l, d, p = t.nodeType;
                if (!(p === 3 || p === 8 || p === 2)) {
                    if (typeof t.getAttribute == "undefined") return a.prop(t, u, s);
                    if ((p !== 1 || !a.isXMLDoc(t)) && (d = a.attrHooks[u.toLowerCase()] || (a.expr.match.bool.test(u) ? js : void 0)), s !== void 0) {
                        if (s === null) {
                            a.removeAttr(t, u);
                            return
                        }
                        return d && "set" in d && (l = d.set(t, s, u)) !== void 0 ? l : (t.setAttribute(u, s + ""), s)
                    }
                    return d && "get" in d && (l = d.get(t, u)) !== null ? l : (l = a.find.attr(t, u), l == null ? void 0 : l)
                }
            }, attrHooks: {
                type: {
                    set: function (t, u) {
                        if (!E.radioValue && u === "radio" && J(t, "input")) {
                            var s = t.value;
                            return t.setAttribute("type", u), s && (t.value = s), u
                        }
                    }
                }
            }, removeAttr: function (t, u) {
                var s, l = 0, d = u && u.match(Me);
                if (d && t.nodeType === 1) for (; s = d[l++];) t.removeAttribute(s)
            }
        }), js = {
            set: function (t, u, s) {
                return u === !1 ? a.removeAttr(t, s) : t.setAttribute(s, s), s
            }
        }, a.each(a.expr.match.bool.source.match(/\w+/g), function (t, u) {
            var s = Ai[u] || a.find.attr;
            Ai[u] = function (l, d, p) {
                var D, b, w = d.toLowerCase();
                return p || (b = Ai[w], Ai[w] = D, D = s(l, d, p) != null ? w : null, Ai[w] = b), D
            }
        });
        var vl = /^(?:input|select|textarea|button)$/i, Cl = /^(?:a|area)$/i;
        a.fn.extend({
            prop: function (t, u) {
                return Lt(this, a.prop, t, u, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[a.propFix[t] || t]
                })
            }
        }), a.extend({
            prop: function (t, u, s) {
                var l, d, p = t.nodeType;
                if (!(p === 3 || p === 8 || p === 2)) return (p !== 1 || !a.isXMLDoc(t)) && (u = a.propFix[u] || u, d = a.propHooks[u]), s !== void 0 ? d && "set" in d && (l = d.set(t, s, u)) !== void 0 ? l : t[u] = s : d && "get" in d && (l = d.get(t, u)) !== null ? l : t[u]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var u = a.find.attr(t, "tabindex");
                        return u ? parseInt(u, 10) : vl.test(t.nodeName) || Cl.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), E.optSelected || (a.propHooks.selected = {
            get: function (t) {
                var u = t.parentNode;
                return u && u.parentNode && u.parentNode.selectedIndex, null
            }, set: function (t) {
                var u = t.parentNode;
                u && (u.selectedIndex, u.parentNode && u.parentNode.selectedIndex)
            }
        }), a.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            a.propFix[this.toLowerCase()] = this
        });

        function Mr(t) {
            var u = t.match(Me) || [];
            return u.join(" ")
        }

        function Nr(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function _o(t) {
            return Array.isArray(t) ? t : typeof t == "string" ? t.match(Me) || [] : []
        }

        a.fn.extend({
            addClass: function (t) {
                var u, s, l, d, p, D, b, w = 0;
                if (v(t)) return this.each(function (P) {
                    a(this).addClass(t.call(this, P, Nr(this)))
                });
                if (u = _o(t), u.length) {
                    for (; s = this[w++];) if (d = Nr(s), l = s.nodeType === 1 && " " + Mr(d) + " ", l) {
                        for (D = 0; p = u[D++];) l.indexOf(" " + p + " ") < 0 && (l += p + " ");
                        b = Mr(l), d !== b && s.setAttribute("class", b)
                    }
                }
                return this
            }, removeClass: function (t) {
                var u, s, l, d, p, D, b, w = 0;
                if (v(t)) return this.each(function (P) {
                    a(this).removeClass(t.call(this, P, Nr(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (u = _o(t), u.length) {
                    for (; s = this[w++];) if (d = Nr(s), l = s.nodeType === 1 && " " + Mr(d) + " ", l) {
                        for (D = 0; p = u[D++];) for (; l.indexOf(" " + p + " ") > -1;) l = l.replace(" " + p + " ", " ");
                        b = Mr(l), d !== b && s.setAttribute("class", b)
                    }
                }
                return this
            }, toggleClass: function (t, u) {
                var s = typeof t, l = s === "string" || Array.isArray(t);
                return typeof u == "boolean" && l ? u ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each(function (d) {
                    a(this).toggleClass(t.call(this, d, Nr(this), u), u)
                }) : this.each(function () {
                    var d, p, D, b;
                    if (l) for (p = 0, D = a(this), b = _o(t); d = b[p++];) D.hasClass(d) ? D.removeClass(d) : D.addClass(d); else (t === void 0 || s === "boolean") && (d = Nr(this), d && ee.set(this, "__className__", d), this.setAttribute && this.setAttribute("class", d || t === !1 ? "" : ee.get(this, "__className__") || ""))
                })
            }, hasClass: function (t) {
                var u, s, l = 0;
                for (u = " " + t + " "; s = this[l++];) if (s.nodeType === 1 && (" " + Mr(Nr(s)) + " ").indexOf(u) > -1) return !0;
                return !1
            }
        });
        var xl = /\r/g;
        a.fn.extend({
            val: function (t) {
                var u, s, l, d = this[0];
                return arguments.length ? (l = v(t), this.each(function (p) {
                    var D;
                    this.nodeType === 1 && (l ? D = t.call(this, p, a(this).val()) : D = t, D == null ? D = "" : typeof D == "number" ? D += "" : Array.isArray(D) && (D = a.map(D, function (b) {
                        return b == null ? "" : b + ""
                    })), u = a.valHooks[this.type] || a.valHooks[this.nodeName.toLowerCase()], (!u || !("set" in u) || u.set(this, D, "value") === void 0) && (this.value = D))
                })) : d ? (u = a.valHooks[d.type] || a.valHooks[d.nodeName.toLowerCase()], u && "get" in u && (s = u.get(d, "value")) !== void 0 ? s : (s = d.value, typeof s == "string" ? s.replace(xl, "") : s == null ? "" : s)) : void 0
            }
        }), a.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var u = a.find.attr(t, "value");
                        return u != null ? u : Mr(a.text(t))
                    }
                }, select: {
                    get: function (t) {
                        var u, s, l, d = t.options, p = t.selectedIndex, D = t.type === "select-one", b = D ? null : [],
                            w = D ? p + 1 : d.length;
                        for (p < 0 ? l = w : l = D ? p : 0; l < w; l++) if (s = d[l], (s.selected || l === p) && !s.disabled && (!s.parentNode.disabled || !J(s.parentNode, "optgroup"))) {
                            if (u = a(s).val(), D) return u;
                            b.push(u)
                        }
                        return b
                    }, set: function (t, u) {
                        for (var s, l, d = t.options, p = a.makeArray(u), D = d.length; D--;) l = d[D], (l.selected = a.inArray(a.valHooks.option.get(l), p) > -1) && (s = !0);
                        return s || (t.selectedIndex = -1), p
                    }
                }
            }
        }), a.each(["radio", "checkbox"], function () {
            a.valHooks[this] = {
                set: function (t, u) {
                    if (Array.isArray(u)) return t.checked = a.inArray(a(t).val(), u) > -1
                }
            }, E.checkOn || (a.valHooks[this].get = function (t) {
                return t.getAttribute("value") === null ? "on" : t.value
            })
        }), E.focusin = "onfocusin" in e;
        var zs = /^(?:focusinfocus|focusoutblur)$/, Hs = function (t) {
            t.stopPropagation()
        };
        a.extend(a.event, {
            trigger: function (t, u, s, l) {
                var d, p, D, b, w, P, N, X, M = [s || A], I = T.call(t, "type") ? t.type : t,
                    re = T.call(t, "namespace") ? t.namespace.split(".") : [];
                if (p = X = D = s = s || A, !(s.nodeType === 3 || s.nodeType === 8) && !zs.test(I + a.event.triggered) && (I.indexOf(".") > -1 && (re = I.split("."), I = re.shift(), re.sort()), w = I.indexOf(":") < 0 && "on" + I, t = t[a.expando] ? t : new a.Event(I, typeof t == "object" && t), t.isTrigger = l ? 2 : 3, t.namespace = re.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + re.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = s), u = u == null ? [t] : a.makeArray(u, [t]), N = a.event.special[I] || {}, !(!l && N.trigger && N.trigger.apply(s, u) === !1))) {
                    if (!l && !N.noBubble && !O(s)) {
                        for (b = N.delegateType || I, zs.test(b + I) || (p = p.parentNode); p; p = p.parentNode) M.push(p), D = p;
                        D === (s.ownerDocument || A) && M.push(D.defaultView || D.parentWindow || e)
                    }
                    for (d = 0; (p = M[d++]) && !t.isPropagationStopped();) X = p, t.type = d > 1 ? b : N.bindType || I, P = (ee.get(p, "events") || Object.create(null))[t.type] && ee.get(p, "handle"), P && P.apply(p, u), P = w && p[w], P && P.apply && dt(p) && (t.result = P.apply(p, u), t.result === !1 && t.preventDefault());
                    return t.type = I, !l && !t.isDefaultPrevented() && (!N._default || N._default.apply(M.pop(), u) === !1) && dt(s) && w && v(s[I]) && !O(s) && (D = s[w], D && (s[w] = null), a.event.triggered = I, t.isPropagationStopped() && X.addEventListener(I, Hs), s[I](), t.isPropagationStopped() && X.removeEventListener(I, Hs), a.event.triggered = void 0, D && (s[w] = D)), t.result
                }
            }, simulate: function (t, u, s) {
                var l = a.extend(new a.Event, s, {type: t, isSimulated: !0});
                a.event.trigger(l, null, u)
            }
        }), a.fn.extend({
            trigger: function (t, u) {
                return this.each(function () {
                    a.event.trigger(t, u, this)
                })
            }, triggerHandler: function (t, u) {
                var s = this[0];
                if (s) return a.event.trigger(t, u, s, !0)
            }
        }), E.focusin || a.each({focus: "focusin", blur: "focusout"}, function (t, u) {
            var s = function (l) {
                a.event.simulate(u, l.target, a.event.fix(l))
            };
            a.event.special[u] = {
                setup: function () {
                    var l = this.ownerDocument || this.document || this, d = ee.access(l, u);
                    d || l.addEventListener(t, s, !0), ee.access(l, u, (d || 0) + 1)
                }, teardown: function () {
                    var l = this.ownerDocument || this.document || this, d = ee.access(l, u) - 1;
                    d ? ee.access(l, u, d) : (l.removeEventListener(t, s, !0), ee.remove(l, u))
                }
            }
        });
        var Pi = e.location, qs = {guid: Date.now()}, yo = /\?/;
        a.parseXML = function (t) {
            var u, s;
            if (!t || typeof t != "string") return null;
            try {
                u = new e.DOMParser().parseFromString(t, "text/xml")
            } catch {
            }
            return s = u && u.getElementsByTagName("parsererror")[0], (!u || s) && a.error("Invalid XML: " + (s ? a.map(s.childNodes, function (l) {
                return l.textContent
            }).join(`
`) : t)), u
        };
        var bl = /\[\]$/, Ws = /\r?\n/g, Tl = /^(?:submit|button|image|reset|file)$/i,
            wl = /^(?:input|select|textarea|keygen)/i;

        function mo(t, u, s, l) {
            var d;
            if (Array.isArray(u)) a.each(u, function (p, D) {
                s || bl.test(t) ? l(t, D) : mo(t + "[" + (typeof D == "object" && D != null ? p : "") + "]", D, s, l)
            }); else if (!s && z(u) === "object") for (d in u) mo(t + "[" + d + "]", u[d], s, l); else l(t, u)
        }

        a.param = function (t, u) {
            var s, l = [], d = function (p, D) {
                var b = v(D) ? D() : D;
                l[l.length] = encodeURIComponent(p) + "=" + encodeURIComponent(b == null ? "" : b)
            };
            if (t == null) return "";
            if (Array.isArray(t) || t.jquery && !a.isPlainObject(t)) a.each(t, function () {
                d(this.name, this.value)
            }); else for (s in t) mo(s, t[s], u, d);
            return l.join("&")
        }, a.fn.extend({
            serialize: function () {
                return a.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = a.prop(this, "elements");
                    return t ? a.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !a(this).is(":disabled") && wl.test(this.nodeName) && !Tl.test(t) && (this.checked || !Ut.test(t))
                }).map(function (t, u) {
                    var s = a(this).val();
                    return s == null ? null : Array.isArray(s) ? a.map(s, function (l) {
                        return {
                            name: u.name, value: l.replace(Ws, `\r
`)
                        }
                    }) : {
                        name: u.name, value: s.replace(Ws, `\r
`)
                    }
                }).get()
            }
        });
        var El = /%20/g, Fl = /#.*$/, Sl = /([?&])_=[^&]*/, Al = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            Pl = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kl = /^(?:GET|HEAD)$/, Ol = /^\/\//,
            $s = {}, vo = {}, Xs = "*/".concat("*"), Co = A.createElement("a");
        Co.href = Pi.href;

        function Ys(t) {
            return function (u, s) {
                typeof u != "string" && (s = u, u = "*");
                var l, d = 0, p = u.toLowerCase().match(Me) || [];
                if (v(s)) for (; l = p[d++];) l[0] === "+" ? (l = l.slice(1) || "*", (t[l] = t[l] || []).unshift(s)) : (t[l] = t[l] || []).push(s)
            }
        }

        function Vs(t, u, s, l) {
            var d = {}, p = t === vo;

            function D(b) {
                var w;
                return d[b] = !0, a.each(t[b] || [], function (P, N) {
                    var X = N(u, s, l);
                    if (typeof X == "string" && !p && !d[X]) return u.dataTypes.unshift(X), D(X), !1;
                    if (p) return !(w = X)
                }), w
            }

            return D(u.dataTypes[0]) || !d["*"] && D("*")
        }

        function xo(t, u) {
            var s, l, d = a.ajaxSettings.flatOptions || {};
            for (s in u) u[s] !== void 0 && ((d[s] ? t : l || (l = {}))[s] = u[s]);
            return l && a.extend(!0, t, l), t
        }

        function Ml(t, u, s) {
            for (var l, d, p, D, b = t.contents, w = t.dataTypes; w[0] === "*";) w.shift(), l === void 0 && (l = t.mimeType || u.getResponseHeader("Content-Type"));
            if (l) {
                for (d in b) if (b[d] && b[d].test(l)) {
                    w.unshift(d);
                    break
                }
            }
            if (w[0] in s) p = w[0]; else {
                for (d in s) {
                    if (!w[0] || t.converters[d + " " + w[0]]) {
                        p = d;
                        break
                    }
                    D || (D = d)
                }
                p = p || D
            }
            if (p) return p !== w[0] && w.unshift(p), s[p]
        }

        function Nl(t, u, s, l) {
            var d, p, D, b, w, P = {}, N = t.dataTypes.slice();
            if (N[1]) for (D in t.converters) P[D.toLowerCase()] = t.converters[D];
            for (p = N.shift(); p;) if (t.responseFields[p] && (s[t.responseFields[p]] = u), !w && l && t.dataFilter && (u = t.dataFilter(u, t.dataType)), w = p, p = N.shift(), p) {
                if (p === "*") p = w; else if (w !== "*" && w !== p) {
                    if (D = P[w + " " + p] || P["* " + p], !D) {
                        for (d in P) if (b = d.split(" "), b[1] === p && (D = P[w + " " + b[0]] || P["* " + b[0]], D)) {
                            D === !0 ? D = P[d] : P[d] !== !0 && (p = b[0], N.unshift(b[1]));
                            break
                        }
                    }
                    if (D !== !0) if (D && t.throws) u = D(u); else try {
                        u = D(u)
                    } catch (X) {
                        return {state: "parsererror", error: D ? X : "No conversion from " + w + " to " + p}
                    }
                }
            }
            return {state: "success", data: u}
        }

        a.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Pi.href,
                type: "GET",
                isLocal: Pl.test(Pi.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xs,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": a.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, u) {
                return u ? xo(xo(t, a.ajaxSettings), u) : xo(a.ajaxSettings, t)
            },
            ajaxPrefilter: Ys($s),
            ajaxTransport: Ys(vo),
            ajax: function (t, u) {
                typeof t == "object" && (u = t, t = void 0), u = u || {};
                var s, l, d, p, D, b, w, P, N, X, M = a.ajaxSetup({}, u), I = M.context || M,
                    re = M.context && (I.nodeType || I.jquery) ? a(I) : a.event, ge = a.Deferred(),
                    ie = a.Callbacks("once memory"), Dt = M.statusCode || {}, lt = {}, an = {}, Be = "canceled", pe = {
                        readyState: 0, getResponseHeader: function (we) {
                            var Ke;
                            if (w) {
                                if (!p) for (p = {}; Ke = Al.exec(d);) p[Ke[1].toLowerCase() + " "] = (p[Ke[1].toLowerCase() + " "] || []).concat(Ke[2]);
                                Ke = p[we.toLowerCase() + " "]
                            }
                            return Ke == null ? null : Ke.join(", ")
                        }, getAllResponseHeaders: function () {
                            return w ? d : null
                        }, setRequestHeader: function (we, Ke) {
                            return w == null && (we = an[we.toLowerCase()] = an[we.toLowerCase()] || we, lt[we] = Ke), this
                        }, overrideMimeType: function (we) {
                            return w == null && (M.mimeType = we), this
                        }, statusCode: function (we) {
                            var Ke;
                            if (we) if (w) pe.always(we[pe.status]); else for (Ke in we) Dt[Ke] = [Dt[Ke], we[Ke]];
                            return this
                        }, abort: function (we) {
                            var Ke = we || Be;
                            return s && s.abort(Ke), Kt(0, Ke), this
                        }
                    };
                if (ge.promise(pe), M.url = ((t || M.url || Pi.href) + "").replace(Ol, Pi.protocol + "//"), M.type = u.method || u.type || M.method || M.type, M.dataTypes = (M.dataType || "*").toLowerCase().match(Me) || [""], M.crossDomain == null) {
                    b = A.createElement("a");
                    try {
                        b.href = M.url, b.href = b.href, M.crossDomain = Co.protocol + "//" + Co.host != b.protocol + "//" + b.host
                    } catch {
                        M.crossDomain = !0
                    }
                }
                if (M.data && M.processData && typeof M.data != "string" && (M.data = a.param(M.data, M.traditional)), Vs($s, M, u, pe), w) return pe;
                P = a.event && M.global, P && a.active++ === 0 && a.event.trigger("ajaxStart"), M.type = M.type.toUpperCase(), M.hasContent = !kl.test(M.type), l = M.url.replace(Fl, ""), M.hasContent ? M.data && M.processData && (M.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (M.data = M.data.replace(El, "+")) : (X = M.url.slice(l.length), M.data && (M.processData || typeof M.data == "string") && (l += (yo.test(l) ? "&" : "?") + M.data, delete M.data), M.cache === !1 && (l = l.replace(Sl, "$1"), X = (yo.test(l) ? "&" : "?") + "_=" + qs.guid++ + X), M.url = l + X), M.ifModified && (a.lastModified[l] && pe.setRequestHeader("If-Modified-Since", a.lastModified[l]), a.etag[l] && pe.setRequestHeader("If-None-Match", a.etag[l])), (M.data && M.hasContent && M.contentType !== !1 || u.contentType) && pe.setRequestHeader("Content-Type", M.contentType), pe.setRequestHeader("Accept", M.dataTypes[0] && M.accepts[M.dataTypes[0]] ? M.accepts[M.dataTypes[0]] + (M.dataTypes[0] !== "*" ? ", " + Xs + "; q=0.01" : "") : M.accepts["*"]);
                for (N in M.headers) pe.setRequestHeader(N, M.headers[N]);
                if (M.beforeSend && (M.beforeSend.call(I, pe, M) === !1 || w)) return pe.abort();
                if (Be = "abort", ie.add(M.complete), pe.done(M.success), pe.fail(M.error), s = Vs(vo, M, u, pe), !s) Kt(-1, "No Transport"); else {
                    if (pe.readyState = 1, P && re.trigger("ajaxSend", [pe, M]), w) return pe;
                    M.async && M.timeout > 0 && (D = e.setTimeout(function () {
                        pe.abort("timeout")
                    }, M.timeout));
                    try {
                        w = !1, s.send(lt, Kt)
                    } catch (we) {
                        if (w) throw we;
                        Kt(-1, we)
                    }
                }

                function Kt(we, Ke, Oi, mu) {
                    var fn, Br, Lr, Zt, gr, Cn = Ke;
                    w || (w = !0, D && e.clearTimeout(D), s = void 0, d = mu || "", pe.readyState = we > 0 ? 4 : 0, fn = we >= 200 && we < 300 || we === 304, Oi && (Zt = Ml(M, pe, Oi)), !fn && a.inArray("script", M.dataTypes) > -1 && a.inArray("json", M.dataTypes) < 0 && (M.converters["text script"] = function () {
                    }), Zt = Nl(M, Zt, pe, fn), fn ? (M.ifModified && (gr = pe.getResponseHeader("Last-Modified"), gr && (a.lastModified[l] = gr), gr = pe.getResponseHeader("etag"), gr && (a.etag[l] = gr)), we === 204 || M.type === "HEAD" ? Cn = "nocontent" : we === 304 ? Cn = "notmodified" : (Cn = Zt.state, Br = Zt.data, Lr = Zt.error, fn = !Lr)) : (Lr = Cn, (we || !Cn) && (Cn = "error", we < 0 && (we = 0))), pe.status = we, pe.statusText = (Ke || Cn) + "", fn ? ge.resolveWith(I, [Br, Cn, pe]) : ge.rejectWith(I, [pe, Cn, Lr]), pe.statusCode(Dt), Dt = void 0, P && re.trigger(fn ? "ajaxSuccess" : "ajaxError", [pe, M, fn ? Br : Lr]), ie.fireWith(I, [pe, Cn]), P && (re.trigger("ajaxComplete", [pe, M]), --a.active || a.event.trigger("ajaxStop")))
                }

                return pe
            },
            getJSON: function (t, u, s) {
                return a.get(t, u, s, "json")
            },
            getScript: function (t, u) {
                return a.get(t, void 0, u, "script")
            }
        }), a.each(["get", "post"], function (t, u) {
            a[u] = function (s, l, d, p) {
                return v(l) && (p = p || d, d = l, l = void 0), a.ajax(a.extend({
                    url: s,
                    type: u,
                    dataType: p,
                    data: l,
                    success: d
                }, a.isPlainObject(s) && s))
            }
        }), a.ajaxPrefilter(function (t) {
            var u;
            for (u in t.headers) u.toLowerCase() === "content-type" && (t.contentType = t.headers[u] || "")
        }), a._evalUrl = function (t, u, s) {
            return a.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (l) {
                    a.globalEval(l, u, s)
                }
            })
        }, a.fn.extend({
            wrapAll: function (t) {
                var u;
                return this[0] && (v(t) && (t = t.call(this[0])), u = a(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && u.insertBefore(this[0]), u.map(function () {
                    for (var s = this; s.firstElementChild;) s = s.firstElementChild;
                    return s
                }).append(this)), this
            }, wrapInner: function (t) {
                return v(t) ? this.each(function (u) {
                    a(this).wrapInner(t.call(this, u))
                }) : this.each(function () {
                    var u = a(this), s = u.contents();
                    s.length ? s.wrapAll(t) : u.append(t)
                })
            }, wrap: function (t) {
                var u = v(t);
                return this.each(function (s) {
                    a(this).wrapAll(u ? t.call(this, s) : t)
                })
            }, unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    a(this).replaceWith(this.childNodes)
                }), this
            }
        }), a.expr.pseudos.hidden = function (t) {
            return !a.expr.pseudos.visible(t)
        }, a.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, a.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest
            } catch {
            }
        };
        var Bl = {0: 200, 1223: 204}, ki = a.ajaxSettings.xhr();
        E.cors = !!ki && "withCredentials" in ki, E.ajax = ki = !!ki, a.ajaxTransport(function (t) {
            var u, s;
            if (E.cors || ki && !t.crossDomain) return {
                send: function (l, d) {
                    var p, D = t.xhr();
                    if (D.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (p in t.xhrFields) D[p] = t.xhrFields[p];
                    t.mimeType && D.overrideMimeType && D.overrideMimeType(t.mimeType), !t.crossDomain && !l["X-Requested-With"] && (l["X-Requested-With"] = "XMLHttpRequest");
                    for (p in l) D.setRequestHeader(p, l[p]);
                    u = function (b) {
                        return function () {
                            u && (u = s = D.onload = D.onerror = D.onabort = D.ontimeout = D.onreadystatechange = null, b === "abort" ? D.abort() : b === "error" ? typeof D.status != "number" ? d(0, "error") : d(D.status, D.statusText) : d(Bl[D.status] || D.status, D.statusText, (D.responseType || "text") !== "text" || typeof D.responseText != "string" ? {binary: D.response} : {text: D.responseText}, D.getAllResponseHeaders()))
                        }
                    }, D.onload = u(), s = D.onerror = D.ontimeout = u("error"), D.onabort !== void 0 ? D.onabort = s : D.onreadystatechange = function () {
                        D.readyState === 4 && e.setTimeout(function () {
                            u && s()
                        })
                    }, u = u("abort");
                    try {
                        D.send(t.hasContent && t.data || null)
                    } catch (b) {
                        if (u) throw b
                    }
                }, abort: function () {
                    u && u()
                }
            }
        }), a.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), a.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return a.globalEval(t), t
                }
            }
        }), a.ajaxPrefilter("script", function (t) {
            t.cache === void 0 && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), a.ajaxTransport("script", function (t) {
            if (t.crossDomain || t.scriptAttrs) {
                var u, s;
                return {
                    send: function (l, d) {
                        u = a("<script>").attr(t.scriptAttrs || {}).prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", s = function (p) {
                            u.remove(), s = null, p && d(p.type === "error" ? 404 : 200, p.type)
                        }), A.head.appendChild(u[0])
                    }, abort: function () {
                        s && s()
                    }
                }
            }
        });
        var Us = [], bo = /(=)\?(?=&|$)|\?\?/;
        a.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = Us.pop() || a.expando + "_" + qs.guid++;
                return this[t] = !0, t
            }
        }), a.ajaxPrefilter("json jsonp", function (t, u, s) {
            var l, d, p,
                D = t.jsonp !== !1 && (bo.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && bo.test(t.data) && "data");
            if (D || t.dataTypes[0] === "jsonp") return l = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, D ? t[D] = t[D].replace(bo, "$1" + l) : t.jsonp !== !1 && (t.url += (yo.test(t.url) ? "&" : "?") + t.jsonp + "=" + l), t.converters["script json"] = function () {
                return p || a.error(l + " was not called"), p[0]
            }, t.dataTypes[0] = "json", d = e[l], e[l] = function () {
                p = arguments
            }, s.always(function () {
                d === void 0 ? a(e).removeProp(l) : e[l] = d, t[l] && (t.jsonpCallback = u.jsonpCallback, Us.push(l)), p && v(d) && d(p[0]), p = d = void 0
            }), "script"
        }), E.createHTMLDocument = function () {
            var t = A.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", t.childNodes.length === 2
        }(), a.parseHTML = function (t, u, s) {
            if (typeof t != "string") return [];
            typeof u == "boolean" && (s = u, u = !1);
            var l, d, p;
            return u || (E.createHTMLDocument ? (u = A.implementation.createHTMLDocument(""), l = u.createElement("base"), l.href = A.location.href, u.head.appendChild(l)) : u = A), d = be.exec(t), p = !s && [], d ? [u.createElement(d[1])] : (d = vn([t], u, p), p && p.length && a(p).remove(), a.merge([], d.childNodes))
        }, a.fn.load = function (t, u, s) {
            var l, d, p, D = this, b = t.indexOf(" ");
            return b > -1 && (l = Mr(t.slice(b)), t = t.slice(0, b)), v(u) ? (s = u, u = void 0) : u && typeof u == "object" && (d = "POST"), D.length > 0 && a.ajax({
                url: t,
                type: d || "GET",
                dataType: "html",
                data: u
            }).done(function (w) {
                p = arguments, D.html(l ? a("<div>").append(a.parseHTML(w)).find(l) : w)
            }).always(s && function (w, P) {
                D.each(function () {
                    s.apply(this, p || [w.responseText, P, w])
                })
            }), this
        }, a.expr.pseudos.animated = function (t) {
            return a.grep(a.timers, function (u) {
                return t === u.elem
            }).length
        }, a.offset = {
            setOffset: function (t, u, s) {
                var l, d, p, D, b, w, P, N = a.css(t, "position"), X = a(t), M = {};
                N === "static" && (t.style.position = "relative"), b = X.offset(), p = a.css(t, "top"), w = a.css(t, "left"), P = (N === "absolute" || N === "fixed") && (p + w).indexOf("auto") > -1, P ? (l = X.position(), D = l.top, d = l.left) : (D = parseFloat(p) || 0, d = parseFloat(w) || 0), v(u) && (u = u.call(t, s, a.extend({}, b))), u.top != null && (M.top = u.top - b.top + D), u.left != null && (M.left = u.left - b.left + d), "using" in u ? u.using.call(t, M) : X.css(M)
            }
        }, a.fn.extend({
            offset: function (t) {
                if (arguments.length) return t === void 0 ? this : this.each(function (d) {
                    a.offset.setOffset(this, t, d)
                });
                var u, s, l = this[0];
                if (!!l) return l.getClientRects().length ? (u = l.getBoundingClientRect(), s = l.ownerDocument.defaultView, {
                    top: u.top + s.pageYOffset,
                    left: u.left + s.pageXOffset
                }) : {top: 0, left: 0}
            }, position: function () {
                if (!!this[0]) {
                    var t, u, s, l = this[0], d = {top: 0, left: 0};
                    if (a.css(l, "position") === "fixed") u = l.getBoundingClientRect(); else {
                        for (u = this.offset(), s = l.ownerDocument, t = l.offsetParent || s.documentElement; t && (t === s.body || t === s.documentElement) && a.css(t, "position") === "static";) t = t.parentNode;
                        t && t !== l && t.nodeType === 1 && (d = a(t).offset(), d.top += a.css(t, "borderTopWidth", !0), d.left += a.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: u.top - d.top - a.css(l, "marginTop", !0),
                        left: u.left - d.left - a.css(l, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && a.css(t, "position") === "static";) t = t.offsetParent;
                    return t || At
                })
            }
        }), a.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, u) {
            var s = u === "pageYOffset";
            a.fn[t] = function (l) {
                return Lt(this, function (d, p, D) {
                    var b;
                    if (O(d) ? b = d : d.nodeType === 9 && (b = d.defaultView), D === void 0) return b ? b[u] : d[p];
                    b ? b.scrollTo(s ? b.pageXOffset : D, s ? D : b.pageYOffset) : d[p] = D
                }, t, l, arguments.length)
            }
        }), a.each(["top", "left"], function (t, u) {
            a.cssHooks[u] = nr(E.pixelPosition, function (s, l) {
                if (l) return l = qe(s, u), gt.test(l) ? a(s).position()[u] + "px" : l
            })
        }), a.each({Height: "height", Width: "width"}, function (t, u) {
            a.each({padding: "inner" + t, content: u, "": "outer" + t}, function (s, l) {
                a.fn[l] = function (d, p) {
                    var D = arguments.length && (s || typeof d != "boolean"),
                        b = s || (d === !0 || p === !0 ? "margin" : "border");
                    return Lt(this, function (w, P, N) {
                        var X;
                        return O(w) ? l.indexOf("outer") === 0 ? w["inner" + t] : w.document.documentElement["client" + t] : w.nodeType === 9 ? (X = w.documentElement, Math.max(w.body["scroll" + t], X["scroll" + t], w.body["offset" + t], X["offset" + t], X["client" + t])) : N === void 0 ? a.css(w, P, b) : a.style(w, P, N, b)
                    }, u, D ? d : void 0, D)
                }
            })
        }), a.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, u) {
            a.fn[u] = function (s) {
                return this.on(u, s)
            }
        }), a.fn.extend({
            bind: function (t, u, s) {
                return this.on(t, null, u, s)
            }, unbind: function (t, u) {
                return this.off(t, null, u)
            }, delegate: function (t, u, s, l) {
                return this.on(u, t, s, l)
            }, undelegate: function (t, u, s) {
                return arguments.length === 1 ? this.off(t, "**") : this.off(u, t || "**", s)
            }, hover: function (t, u) {
                return this.mouseenter(t).mouseleave(u || t)
            }
        }), a.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, u) {
            a.fn[u] = function (s, l) {
                return arguments.length > 0 ? this.on(u, null, s, l) : this.trigger(u)
            }
        });
        var Ll = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        a.proxy = function (t, u) {
            var s, l, d;
            if (typeof u == "string" && (s = t[u], u = t, t = s), !!v(t)) return l = o.call(arguments, 2), d = function () {
                return t.apply(u || this, l.concat(o.call(arguments)))
            }, d.guid = t.guid = t.guid || a.guid++, d
        }, a.holdReady = function (t) {
            t ? a.readyWait++ : a.ready(!0)
        }, a.isArray = Array.isArray, a.parseJSON = JSON.parse, a.nodeName = J, a.isFunction = v, a.isWindow = O, a.camelCase = Re, a.type = z, a.now = Date.now, a.isNumeric = function (t) {
            var u = a.type(t);
            return (u === "number" || u === "string") && !isNaN(t - parseFloat(t))
        }, a.trim = function (t) {
            return t == null ? "" : (t + "").replace(Ll, "")
        };
        var Rl = e.jQuery, Il = e.$;
        return a.noConflict = function (t) {
            return e.$ === a && (e.$ = Il), t && e.jQuery === a && (e.jQuery = Rl), a
        }, typeof r == "undefined" && (e.jQuery = e.$ = a), a
    })
})(gl);
var ji = gl.exports;
Xt.registerPlugin(ho, Si, ui);
Xt.registerPlugin(gu);
Xt.registerPlugin(Fe);
let Sh = window.innerWidth / 2, Ah = window.innerHeight / 2;
Xt.set(".opener-circle", {scale: 0});
Xt.set(".opener-logo", {x: window.innerWidth / 2, xPercent: -50, y: window.innerHeight / 2, yPercent: -50, scale: 0});
Xt.set(".opener-bar", {scaleX: 1, scaleY: 1, xPercent: -150});
Xt.set(".hero", {display: "none", opacity: 0});
Math.getDistance = function (h, e, r, n) {
    let i = r - h, o = n - e;
    return i *= i, o *= o, Math.sqrt(i + o)
};
let Ph = Math.getDistance(0, 0, Sh, Ah), kh = Ph * 2, Oh = kh / 100, Mh = Xt.timeline({onComplete: Bh});
Mh.to(".opener-logo", {scale: 1.2, ease: "bounce", duration: 2}).to(".opener-logo", {
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
}, "<2").to(".opener-circle", {scale: Oh, duration: 1.5}).to(".opener-circle", {
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
let Nh = Xt.timeline({paused: !0}).to(".headings h1", {y: -100, opacity: 0}).to(".headings h2", {
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

function Bh() {
    Xt.set(".main", {display: "block", position: "relative"}), Fe.create({
        trigger: ".hero",
        start: "top top",
        pin: !0,
        end: "bottom",
        animation: Nh,
        scrub: .8
    })
}

let qa = 0, Vo = !0,
    Lh = Xt.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 20, ease: "linear"}).totalProgress(.5);
Xt.set(".marquee__inner", {xPercent: -50});
window.addEventListener("scroll", function () {
    window.pageYOffset > qa ? Vo = !0 : Vo = !1, Xt.to(Lh, {timeScale: Vo ? 1 : -1}), qa = window.pageYOffset
});
let Rh = Xt.timeline({paused: !0}).from(".avatar", {x: -200, opacity: 0, duration: 1}).from(".text-content", {
    x: 200,
    opacity: 0,
    duration: 1
}, "<").to(".art-text-1", {y: 100, duration: 1, x: 100}).to(".art-text-2", {y: -100, duration: 1, x: -100}, "<");
Fe.create({trigger: ".main", start: "top 20%", end: "bottom", animation: Rh, scrub: .8});

function Ih() {
    let h = ji(".slider div:last-child").clone();
    ji(".slider div").removeClass("firstSlide"), ji(".slider div:last-child").remove(), ji(".slider").prepend(h), ji(h).addClass("firstSlide")
}

window.setInterval(function () {
    Ih()
}, 4e3);
