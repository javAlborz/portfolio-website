/*!
 * VERSION: 1.19.0
 * DATE: 2016-07-16
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (t, e) {
    "use strict";
    var i = {},
        r = (t.GreenSockGlobals = t.GreenSockGlobals || t);
    if (!r.TweenLite) {
        var n,
            s,
            o,
            a,
            l,
            h = function (t) {
                var e,
                    i = t.split("."),
                    n = r;
                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                return n;
            },
            u = h("com.greensock"),
            f = 1e-10,
            c = function (t) {
                var e,
                    i = [],
                    r = t.length;
                for (e = 0; e !== r; i.push(t[e++]));
                return i;
            },
            p = function () {},
            d = (function () {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function (i) {
                    return null != i && (i instanceof Array || ("object" == typeof i && !!i.push && t.call(i) === e));
                };
            })(),
            _ = {},
            m = function (n, s, o, a) {
                (this.sc = _[n] ? _[n].sc : []), (_[n] = this), (this.gsClass = null), (this.func = o);
                var l = [];
                (this.check = function (u) {
                    for (var f, c, p, d, g, v = s.length, y = v; --v > -1; ) (f = _[s[v]] || new m(s[v], [])).gsClass ? ((l[v] = f.gsClass), y--) : u && f.sc.push(this);
                    if (0 === y && o) {
                        if (((c = ("com.greensock." + n).split(".")), (p = c.pop()), (d = h(c.join("."))[p] = this.gsClass = o.apply(o, l)), a))
                            if (((r[p] = i[p] = d), (g = "undefined" != typeof module && module.exports), !g && "function" == typeof define && define.amd))
                                define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                                    return d;
                                });
                            else if (g)
                                if (n === e) {
                                    module.exports = i[e] = d;
                                    for (v in i) d[v] = i[v];
                                } else i[e] && (i[e][p] = d);
                        for (v = 0; v < this.sc.length; v++) this.sc[v].check();
                    }
                }),
                    this.check(!0);
            },
            g = (t._gsDefine = function (t, e, i, r) {
                return new m(t, e, i, r);
            }),
            v = (u._class = function (t, e, i) {
                return (
                    (e = e || function () {}),
                    g(
                        t,
                        [],
                        function () {
                            return e;
                        },
                        i
                    ),
                    e
                );
            });
        g.globals = r;
        var y = [0, 0, 1, 1],
            x = v(
                "easing.Ease",
                function (t, e, i, r) {
                    (this._func = t), (this._type = i || 0), (this._power = r || 0), (this._params = e ? y.concat(e) : y);
                },
                !0
            ),
            w = (x.map = {}),
            T = (x.register = function (t, e, i, r) {
                for (var n, s, o, a, l = e.split(","), h = l.length, f = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                    for (s = l[h], n = r ? v("easing." + s, null, !0) : u.easing[s] || {}, o = f.length; --o > -1; ) (a = f[o]), (w[s + "." + a] = w[a + s] = n[a] = t.getRatio ? t : t[a] || new t());
            });
        for (
            o = x.prototype,
                o._calcEnd = !1,
                o.getRatio = function (t) {
                    if (this._func) return (this._params[0] = t), this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        r = 1 === e ? 1 - t : 2 === e ? t : 0.5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? (r *= r) : 2 === i ? (r *= r * r) : 3 === i ? (r *= r * r * r) : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : 0.5 > t ? r / 2 : 1 - r / 2;
                },
                n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                s = n.length;
            --s > -1;

        )
            (o = n[s] + ",Power" + s), T(new x(null, null, 1, s), o, "easeOut", !0), T(new x(null, null, 2, s), o, "easeIn" + (0 === s ? ",easeNone" : "")), T(new x(null, null, 3, s), o, "easeInOut");
        (w.linear = u.easing.Linear.easeIn), (w.swing = u.easing.Quad.easeInOut);
        var b = v("events.EventDispatcher", function (t) {
            (this._listeners = {}), (this._eventTarget = t || this);
        });
        (o = b.prototype),
            (o.addEventListener = function (t, e, i, r, n) {
                n = n || 0;
                var s,
                    o,
                    h = this._listeners[t],
                    u = 0;
                for (this !== a || l || a.wake(), null == h && (this._listeners[t] = h = []), o = h.length; --o > -1; ) (s = h[o]), s.c === e && s.s === i ? h.splice(o, 1) : 0 === u && s.pr < n && (u = o + 1);
                h.splice(u, 0, { c: e, s: i, up: r, pr: n });
            }),
            (o.removeEventListener = function (t, e) {
                var i,
                    r = this._listeners[t];
                if (r) for (i = r.length; --i > -1; ) if (r[i].c === e) return void r.splice(i, 1);
            }),
            (o.dispatchEvent = function (t) {
                var e,
                    i,
                    r,
                    n = this._listeners[t];
                if (n) for (e = n.length, e > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1; ) (r = n[e]), r && (r.up ? r.c.call(r.s || i, { type: t, target: i }) : r.c.call(r.s || i));
            });
        var P = t.requestAnimationFrame,
            S = t.cancelAnimationFrame,
            O =
                Date.now ||
                function () {
                    return new Date().getTime();
                },
            k = O();
        for (n = ["ms", "moz", "webkit", "o"], s = n.length; --s > -1 && !P; ) (P = t[n[s] + "RequestAnimationFrame"]), (S = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"]);
        v("Ticker", function (t, e) {
            var i,
                r,
                n,
                s,
                o,
                h = this,
                u = O(),
                c = e !== !1 && P ? "auto" : !1,
                d = 500,
                _ = 33,
                m = "tick",
                g = function (t) {
                    var e,
                        a,
                        l = O() - k;
                    l > d && (u += l - _), (k += l), (h.time = (k - u) / 1e3), (e = h.time - o), (!i || e > 0 || t === !0) && (h.frame++, (o += e + (e >= s ? 0.004 : s - e)), (a = !0)), t !== !0 && (n = r(g)), a && h.dispatchEvent(m);
                };
            b.call(h),
                (h.time = h.frame = 0),
                (h.tick = function () {
                    g(!0);
                }),
                (h.lagSmoothing = function (t, e) {
                    (d = t || 1 / f), (_ = Math.min(e, d, 0));
                }),
                (h.sleep = function () {
                    null != n && (c && S ? S(n) : clearTimeout(n), (r = p), (n = null), h === a && (l = !1));
                }),
                (h.wake = function (t) {
                    null !== n ? h.sleep() : t ? (u += -k + (k = O())) : h.frame > 10 && (k = O() - d + 5),
                        (r =
                            0 === i
                                ? p
                                : c && P
                                ? P
                                : function (t) {
                                      return setTimeout(t, (1e3 * (o - h.time) + 1) | 0);
                                  }),
                        h === a && (l = !0),
                        g(2);
                }),
                (h.fps = function (t) {
                    return arguments.length ? ((i = t), (s = 1 / (i || 60)), (o = this.time + s), void h.wake()) : i;
                }),
                (h.useRAF = function (t) {
                    return arguments.length ? (h.sleep(), (c = t), void h.fps(i)) : c;
                }),
                h.fps(t),
                setTimeout(function () {
                    "auto" === c && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1);
                }, 1500);
        }),
            (o = u.Ticker.prototype = new u.events.EventDispatcher()),
            (o.constructor = u.Ticker);
        var C = v("core.Animation", function (t, e) {
            if (
                ((this.vars = e = e || {}),
                (this._duration = this._totalDuration = t || 0),
                (this._delay = Number(e.delay) || 0),
                (this._timeScale = 1),
                (this._active = e.immediateRender === !0),
                (this.data = e.data),
                (this._reversed = e.reversed === !0),
                G)
            ) {
                l || a.wake();
                var i = this.vars.useFrames ? W : G;
                i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
        });
        (a = C.ticker = new u.Ticker()),
            (o = C.prototype),
            (o._dirty = o._gc = o._initted = o._paused = !1),
            (o._totalTime = o._time = 0),
            (o._rawPrevTime = -1),
            (o._next = o._last = o._onUpdate = o._timeline = o.timeline = null),
            (o._paused = !1);
        var A = function () {
            l && O() - k > 2e3 && a.wake(), setTimeout(A, 2e3);
        };
        A(),
            (o.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (o.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
            }),
            (o.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1);
            }),
            (o.seek = function (t, e) {
                return this.totalTime(Number(t), e !== !1);
            }),
            (o.restart = function (t, e) {
                return this.reversed(!1)
                    .paused(!1)
                    .totalTime(t ? -this._delay : 0, e !== !1, !0);
            }),
            (o.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
            }),
            (o.render = function (t, e, i) {}),
            (o.invalidate = function () {
                return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (this._gc || !this.timeline) && this._enabled(!0), this;
            }),
            (o.isActive = function () {
                var t,
                    e = this._timeline,
                    i = this._startTime;
                return !e || (!this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale);
            }),
            (o._enabled = function (t, e) {
                return (
                    l || a.wake(), (this._gc = !t), (this._active = this.isActive()), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                );
            }),
            (o._kill = function (t, e) {
                return this._enabled(!1, !1);
            }),
            (o.kill = function (t, e) {
                return this._kill(t, e), this;
            }),
            (o._uncache = function (t) {
                for (var e = t ? this : this.timeline; e; ) (e._dirty = !0), (e = e.timeline);
                return this;
            }),
            (o._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1; ) "{self}" === t[e] && (i[e] = this);
                return i;
            }),
            (o._callback = function (t) {
                var e = this.vars,
                    i = e[t],
                    r = e[t + "Params"],
                    n = e[t + "Scope"] || e.callbackScope || this,
                    s = r ? r.length : 0;
                switch (s) {
                    case 0:
                        i.call(n);
                        break;
                    case 1:
                        i.call(n, r[0]);
                        break;
                    case 2:
                        i.call(n, r[0], r[1]);
                        break;
                    default:
                        i.apply(n, r);
                }
            }),
            (o.eventCallback = function (t, e, i, r) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : ((n[t] = e), (n[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (n[t + "Scope"] = r)), "onUpdate" === t && (this._onUpdate = e);
                }
                return this;
            }),
            (o.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), (this._delay = t), this) : this._delay;
            }),
            (o.duration = function (t) {
                return arguments.length
                    ? ((this._duration = this._totalDuration = t),
                      this._uncache(!0),
                      this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                      this)
                    : ((this._dirty = !1), this._duration);
            }),
            (o.totalDuration = function (t) {
                return (this._dirty = !1), arguments.length ? this.duration(t) : this._totalDuration;
            }),
            (o.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
            }),
            (o.totalTime = function (t, e, i) {
                if ((l || a.wake(), !arguments.length)) return this._totalTime;
                if (this._timeline) {
                    if ((0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming)) {
                        this._dirty && this.totalDuration();
                        var r = this._totalDuration,
                            n = this._timeline;
                        if ((t > r && !i && (t = r), (this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale), n._dirty || this._uncache(!1), n._timeline))
                            for (; n._timeline; ) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), (n = n._timeline);
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (z.length && Z(), this.render(t, e, !1), z.length && Z());
                }
                return this;
            }),
            (o.progress = o.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio;
            }),
            (o.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && ((this._startTime = t), this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
            }),
            (o.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
            }),
            (o.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (((t = t || f), this._timeline && this._timeline.smoothChildTiming)) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
                }
                return (this._timeScale = t), this._uncache(!1);
            }),
            (o.reversed = function (t) {
                return arguments.length
                    ? (t != this._reversed && ((this._reversed = t), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                    : this._reversed;
            }),
            (o.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e,
                    i,
                    r = this._timeline;
                return (
                    t != this._paused &&
                        r &&
                        (l || t || a.wake(),
                        (e = r.rawTime()),
                        (i = e - this._pauseTime),
                        !t && r.smoothChildTiming && ((this._startTime += i), this._uncache(!1)),
                        (this._pauseTime = t ? e : null),
                        (this._paused = t),
                        (this._active = this.isActive()),
                        !t && 0 !== i && this._initted && this.duration() && ((e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale), this.render(e, e === this._totalTime, !0))),
                    this._gc && !t && this._enabled(!0, !1),
                    this
                );
            });
        var R = v("core.SimpleTimeline", function (t) {
            C.call(this, 0, t), (this.autoRemoveChildren = this.smoothChildTiming = !0);
        });
        (o = R.prototype = new C()),
            (o.constructor = R),
            (o.kill()._gc = !1),
            (o._first = o._last = o._recent = null),
            (o._sortChildren = !1),
            (o.add = o.insert = function (t, e, i, r) {
                var n, s;
                if (
                    ((t._startTime = Number(e || 0) + t._delay),
                    t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                    t.timeline && t.timeline._remove(t, !0),
                    (t.timeline = t._timeline = this),
                    t._gc && t._enabled(!0, !0),
                    (n = this._last),
                    this._sortChildren)
                )
                    for (s = t._startTime; n && n._startTime > s; ) n = n._prev;
                return n ? ((t._next = n._next), (n._next = t)) : ((t._next = this._first), (this._first = t)), t._next ? (t._next._prev = t) : (this._last = t), (t._prev = n), (this._recent = t), this._timeline && this._uncache(!0), this;
            }),
            (o._remove = function (t, e) {
                return (
                    t.timeline === this &&
                        (e || t._enabled(!1, !0),
                        t._prev ? (t._prev._next = t._next) : this._first === t && (this._first = t._next),
                        t._next ? (t._next._prev = t._prev) : this._last === t && (this._last = t._prev),
                        (t._next = t._prev = t.timeline = null),
                        t === this._recent && (this._recent = this._last),
                        this._timeline && this._uncache(!0)),
                    this
                );
            }),
            (o.render = function (t, e, i) {
                var r,
                    n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; n; )
                    (r = n._next),
                        (n._active || (t >= n._startTime && !n._paused)) &&
                            (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        (n = r);
            }),
            (o.rawTime = function () {
                return l || a.wake(), this._totalTime;
            });
        var M = v(
                "TweenLite",
                function (e, i, r) {
                    if ((C.call(this, i, r), (this.render = M.prototype.render), null == e)) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : M.selector(e) || e;
                    var n,
                        s,
                        o,
                        a = e.jquery || (e.length && e !== t && e[0] && (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
                        l = this.vars.overwrite;
                    if (((this._overwrite = l = null == l ? U[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : U[l]), (a || e instanceof Array || (e.push && d(e))) && "number" != typeof e[0]))
                        for (this._targets = o = c(e), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++)
                            (s = o[n]),
                                s
                                    ? "string" != typeof s
                                        ? s.length && s !== t && s[0] && (s[0] === t || (s[0].nodeType && s[0].style && !s.nodeType))
                                            ? (o.splice(n--, 1), (this._targets = o = o.concat(c(s))))
                                            : ((this._siblings[n] = H(s, this, !1)), 1 === l && this._siblings[n].length > 1 && $(s, this, null, 1, this._siblings[n]))
                                        : ((s = o[n--] = M.selector(s)), "string" == typeof s && o.splice(n + 1, 1))
                                    : o.splice(n--, 1);
                    else (this._propLookup = {}), (this._siblings = H(e, this, !1)), 1 === l && this._siblings.length > 1 && $(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || (0 === i && 0 === this._delay && this.vars.immediateRender !== !1)) && ((this._time = -f), this.render(Math.min(0, -this._delay)));
                },
                !0
            ),
            F = function (e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType));
            },
            L = function (t, e) {
                var i,
                    r = {};
                for (i in t) V[i] || (i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) || !(!I[i] || (I[i] && I[i]._autoCSS)) || ((r[i] = t[i]), delete t[i]);
                t.css = r;
            };
        (o = M.prototype = new C()),
            (o.constructor = M),
            (o.kill()._gc = !1),
            (o.ratio = 0),
            (o._firstPT = o._targets = o._overwrittenProps = o._startAt = null),
            (o._notifyPluginsOfEnabled = o._lazy = !1),
            (M.version = "1.19.0"),
            (M.defaultEase = o._ease = new x(null, null, 1, 1)),
            (M.defaultOverwrite = "auto"),
            (M.ticker = a),
            (M.autoSleep = 120),
            (M.lagSmoothing = function (t, e) {
                a.lagSmoothing(t, e);
            }),
            (M.selector =
                t.$ ||
                t.jQuery ||
                function (e) {
                    var i = t.$ || t.jQuery;
                    return i ? ((M.selector = i), i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
                });
        var z = [],
            D = {},
            E = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            X = function (t) {
                for (var e, i = this._firstPT, r = 1e-6; i; )
                    (e = i.blob ? (t ? this.join("") : this.start) : i.c * t + i.s), i.m ? (e = i.m(e, this._target || i.t)) : r > e && e > -r && (e = 0), i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e), (i = i._next);
            },
            N = function (t, e, i, r) {
                var n,
                    s,
                    o,
                    a,
                    l,
                    h,
                    u,
                    f = [t, e],
                    c = 0,
                    p = "",
                    d = 0;
                for (f.start = t, i && (i(f), (t = f[0]), (e = f[1])), f.length = 0, n = t.match(E) || [], s = e.match(E) || [], r && ((r._next = null), (r.blob = 1), (f._firstPT = f._applyPT = r)), l = s.length, a = 0; l > a; a++)
                    (u = s[a]),
                        (h = e.substr(c, e.indexOf(u, c) - c)),
                        (p += h || !a ? h : ","),
                        (c += h.length),
                        d ? (d = (d + 1) % 5) : "rgba(" === h.substr(-5) && (d = 1),
                        u === n[a] || n.length <= a
                            ? (p += u)
                            : (p && (f.push(p), (p = "")),
                              (o = parseFloat(n[a])),
                              f.push(o),
                              (f._firstPT = {
                                  _next: f._firstPT,
                                  t: f,
                                  p: f.length - 1,
                                  s: o,
                                  c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0,
                                  f: 0,
                                  m: d && 4 > d ? Math.round : 0,
                              })),
                        (c += u.length);
                return (p += e.substr(c)), p && f.push(p), (f.setRatio = X), f;
            },
            Y = function (t, e, i, r, n, s, o, a, l) {
                "function" == typeof r && (r = r(l || 0, t));
                var h,
                    u,
                    f = "get" === i ? t[e] : i,
                    c = typeof t[e],
                    p = "string" == typeof r && "=" === r.charAt(1),
                    d = { t: t, p: e, s: f, f: "function" === c, pg: 0, n: n || e, m: s ? ("function" == typeof s ? s : Math.round) : 0, pr: 0, c: p ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - f || 0 };
                return (
                    "number" !== c &&
                        ("function" === c && "get" === i && ((u = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)), (d.s = f = o ? t[u](o) : t[u]())),
                        "string" == typeof f && (o || isNaN(f))
                            ? ((d.fp = o), (h = N(f, r, a || M.defaultStringFilter, d)), (d = { t: h, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: n || e, pr: 0, m: 0 }))
                            : p || ((d.s = parseFloat(f)), (d.c = parseFloat(r) - d.s || 0))),
                    d.c ? ((d._next = this._firstPT) && (d._next._prev = d), (this._firstPT = d), d) : void 0
                );
            },
            j = (M._internals = { isArray: d, isSelector: F, lazyTweens: z, blobDif: N }),
            I = (M._plugins = {}),
            B = (j.tweenLookup = {}),
            q = 0,
            V = (j.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
            }),
            U = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
            W = (C._rootFramesTimeline = new R()),
            G = (C._rootTimeline = new R()),
            Q = 30,
            Z = (j.lazyRender = function () {
                var t,
                    e = z.length;
                for (D = {}; --e > -1; ) (t = z[e]), t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
                z.length = 0;
            });
        (G._startTime = a.time),
            (W._startTime = a.frame),
            (G._active = W._active = !0),
            setTimeout(Z, 1),
            (C._updateRoot = M.render = function () {
                var t, e, i;
                if ((z.length && Z(), G.render((a.time - G._startTime) * G._timeScale, !1, !1), W.render((a.frame - W._startTime) * W._timeScale, !1, !1), z.length && Z(), a.frame >= Q)) {
                    Q = a.frame + (parseInt(M.autoSleep, 10) || 120);
                    for (i in B) {
                        for (e = B[i].tweens, t = e.length; --t > -1; ) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete B[i];
                    }
                    if (((i = G._first), (!i || i._paused) && M.autoSleep && !W._first && 1 === a._listeners.tick.length)) {
                        for (; i && i._paused; ) i = i._next;
                        i || a.sleep();
                    }
                }
            }),
            a.addEventListener("tick", C._updateRoot);
        var H = function (t, e, i) {
                var r,
                    n,
                    s = t._gsTweenID;
                if ((B[s || (t._gsTweenID = s = "t" + q++)] || (B[s] = { target: t, tweens: [] }), e && ((r = B[s].tweens), (r[(n = r.length)] = e), i))) for (; --n > -1; ) r[n] === e && r.splice(n, 1);
                return B[s].tweens;
            },
            K = function (t, e, i, r) {
                var n,
                    s,
                    o = t.vars.onOverwrite;
                return o && (n = o(t, e, i, r)), (o = M.onOverwrite), o && (s = o(t, e, i, r)), n !== !1 && s !== !1;
            },
            $ = function (t, e, i, r, n) {
                var s, o, a, l;
                if (1 === r || r >= 4) {
                    for (l = n.length, s = 0; l > s; s++)
                        if ((a = n[s]) !== e) a._gc || (a._kill(null, t, e) && (o = !0));
                        else if (5 === r) break;
                    return o;
                }
                var h,
                    u = e._startTime + f,
                    c = [],
                    p = 0,
                    d = 0 === e._duration;
                for (s = n.length; --s > -1; )
                    (a = n[s]) === e ||
                        a._gc ||
                        a._paused ||
                        (a._timeline !== e._timeline
                            ? ((h = h || J(e, 0, d)), 0 === J(a, h, d) && (c[p++] = a))
                            : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && (((d || !a._initted) && u - a._startTime <= 2e-10) || (c[p++] = a)));
                for (s = p; --s > -1; )
                    if (((a = c[s]), 2 === r && a._kill(i, t, e) && (o = !0), 2 !== r || (!a._firstPT && a._initted))) {
                        if (2 !== r && !K(a, e)) continue;
                        a._enabled(!1, !1) && (o = !0);
                    }
                return o;
            },
            J = function (t, e, i) {
                for (var r = t._timeline, n = r._timeScale, s = t._startTime; r._timeline; ) {
                    if (((s += r._startTime), (n *= r._timeScale), r._paused)) return -100;
                    r = r._timeline;
                }
                return (s /= n), s > e ? s - e : (i && s === e) || (!t._initted && 2 * f > s - e) ? f : (s += t.totalDuration() / t._timeScale / n) > e + f ? 0 : s - e - f;
            };
        (o._init = function () {
            var t,
                e,
                i,
                r,
                n,
                s,
                o = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                h = !!o.immediateRender,
                u = o.ease;
            if (o.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (n = {});
                for (r in o.startAt) n[r] = o.startAt[r];
                if (((n.overwrite = !1), (n.immediateRender = !0), (n.lazy = h && o.lazy !== !1), (n.startAt = n.delay = null), (this._startAt = M.to(this.target, 0, n)), h))
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return;
            } else if (o.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
                else {
                    0 !== this._time && (h = !1), (i = {});
                    for (r in o) (V[r] && "autoCSS" !== r) || (i[r] = o[r]);
                    if (((i.overwrite = 0), (i.data = "isFromStart"), (i.lazy = h && o.lazy !== !1), (i.immediateRender = h), (this._startAt = M.to(this.target, 0, i)), h)) {
                        if (0 === this._time) return;
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                }
            if (
                ((this._ease = u = u ? (u instanceof x ? u : "function" == typeof u ? new x(u, o.easeParams) : w[u] || M.defaultEase) : M.defaultEase),
                o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)),
                (this._easeType = this._ease._type),
                (this._easePower = this._ease._power),
                (this._firstPT = null),
                this._targets)
            )
                for (s = this._targets.length, t = 0; s > t; t++) this._initProps(this._targets[t], (this._propLookup[t] = {}), this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if ((e && M._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), o.runBackwards)) for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
            (this._onUpdate = o.onUpdate), (this._initted = !0);
        }),
            (o._initProps = function (e, i, r, n, s) {
                var o, a, l, h, u, f;
                if (null == e) return !1;
                D[e._gsTweenID] && Z(), this.vars.css || (e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && L(this.vars, e));
                for (o in this.vars)
                    if (((f = this.vars[o]), V[o])) f && (f instanceof Array || (f.push && d(f))) && -1 !== f.join("").indexOf("{self}") && (this.vars[o] = f = this._swapSelfInParams(f, this));
                    else if (I[o] && (h = new I[o]())._onInitTween(e, this.vars[o], this, s)) {
                        for (this._firstPT = u = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: o, pg: 1, pr: h._priority, m: 0 }, a = h._overwriteProps.length; --a > -1; ) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u);
                    } else i[o] = Y.call(this, e, o, "get", f, o, 0, null, this.vars.stringFilter, s);
                return n && this._kill(n, e)
                    ? this._initProps(e, i, r, n, s)
                    : this._overwrite > 1 && this._firstPT && r.length > 1 && $(e, this, i, this._overwrite, r)
                    ? (this._kill(i, e), this._initProps(e, i, r, n, s))
                    : (this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)) && (D[e._gsTweenID] = !0), l);
            }),
            (o.render = function (t, e, i) {
                var r,
                    n,
                    s,
                    o,
                    a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l - 1e-7)
                    (this._totalTime = this._time = l),
                        (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                        this._reversed || ((r = !0), (n = "onComplete"), (i = i || this._timeline.autoRemoveChildren)),
                        0 === l &&
                            (this._initted || !this.vars.lazy || i) &&
                            (this._startTime === this._timeline._duration && (t = 0),
                            (0 > h || (0 >= t && t >= -1e-7) || (h === f && "isPause" !== this.data)) && h !== t && ((i = !0), h > f && (n = "onReverseComplete")),
                            (this._rawPrevTime = o = !e || t || h === t ? t : f));
                else if (1e-7 > t)
                    (this._totalTime = this._time = 0),
                        (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                        (0 !== a || (0 === l && h > 0)) && ((n = "onReverseComplete"), (r = this._reversed)),
                        0 > t && ((this._active = !1), 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== f || "isPause" !== this.data) && (i = !0), (this._rawPrevTime = o = !e || t || h === t ? t : f))),
                        this._initted || (i = !0);
                else if (((this._totalTime = this._time = t), this._easeType)) {
                    var u = t / l,
                        c = this._easeType,
                        p = this._easePower;
                    (1 === c || (3 === c && u >= 0.5)) && (u = 1 - u),
                        3 === c && (u *= 2),
                        1 === p ? (u *= u) : 2 === p ? (u *= u * u) : 3 === p ? (u *= u * u * u) : 4 === p && (u *= u * u * u * u),
                        1 === c ? (this.ratio = 1 - u) : 2 === c ? (this.ratio = u) : 0.5 > t / l ? (this.ratio = u / 2) : (this.ratio = 1 - u / 2);
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if ((this._init(), !this._initted || this._gc)) return;
                        if (!i && this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)))
                            return (this._time = this._totalTime = a), (this._rawPrevTime = h), z.push(this), void (this._lazy = [t, e]);
                        this._time && !r ? (this.ratio = this._ease.getRatio(this._time / l)) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                    }
                    for (
                        this._lazy !== !1 && (this._lazy = !1),
                            this._active || (!this._paused && this._time !== a && t >= 0 && (this._active = !0)),
                            0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))),
                            s = this._firstPT;
                        s;

                    )
                        s.f ? s.t[s.p](s.c * this.ratio + s.s) : (s.t[s.p] = s.c * this.ratio + s.s), (s = s._next);
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || ((this._time !== a || r || i) && this._callback("onUpdate"))),
                        n &&
                            (!this._gc || i) &&
                            (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i),
                            r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                            !e && this.vars[n] && this._callback(n),
                            0 === l && this._rawPrevTime === f && o !== f && (this._rawPrevTime = 0));
                }
            }),
            (o._kill = function (t, e, i) {
                if (("all" === t && (t = null), null == t && (null == e || e === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
                var r,
                    n,
                    s,
                    o,
                    a,
                    l,
                    h,
                    u,
                    f,
                    c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((d(e) || F(e)) && "number" != typeof e[0]) for (r = e.length; --r > -1; ) this._kill(t, e[r], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (r = this._targets.length; --r > -1; )
                            if (e === this._targets[r]) {
                                (a = this._propLookup[r] || {}), (this._overwrittenProps = this._overwrittenProps || []), (n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all");
                                break;
                            }
                    } else {
                        if (e !== this.target) return !1;
                        (a = this._propLookup), (n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all");
                    }
                    if (a) {
                        if (((h = t || a), (u = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill)), i && (M.onOverwrite || this.vars.onOverwrite))) {
                            for (s in h) a[s] && (f || (f = []), f.push(s));
                            if ((f || !t) && !K(this, i, e, f)) return !1;
                        }
                        for (s in h)
                            (o = a[s]) &&
                                (c && (o.f ? o.t[o.p](o.s) : (o.t[o.p] = o.s), (l = !0)),
                                o.pg && o.t._kill(h) && (l = !0),
                                (o.pg && 0 !== o.t._overwriteProps.length) || (o._prev ? (o._prev._next = o._next) : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), (o._next = o._prev = null)),
                                delete a[s]),
                                u && (n[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1);
                    }
                }
                return l;
            }),
            (o.invalidate = function () {
                return (
                    this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this),
                    (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                    (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                    (this._propLookup = this._targets ? {} : []),
                    C.prototype.invalidate.call(this),
                    this.vars.immediateRender && ((this._time = -f), this.render(Math.min(0, -this._delay))),
                    this
                );
            }),
            (o._enabled = function (t, e) {
                if ((l || a.wake(), t && this._gc)) {
                    var i,
                        r = this._targets;
                    if (r) for (i = r.length; --i > -1; ) this._siblings[i] = H(r[i], this, !0);
                    else this._siblings = H(this.target, this, !0);
                }
                return C.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? M._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1;
            }),
            (M.to = function (t, e, i) {
                return new M(t, e, i);
            }),
            (M.from = function (t, e, i) {
                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new M(t, e, i);
            }),
            (M.fromTo = function (t, e, i, r) {
                return (r.startAt = i), (r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender), new M(t, e, r);
            }),
            (M.delayedCall = function (t, e, i, r, n) {
                return new M(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 });
            }),
            (M.set = function (t, e) {
                return new M(t, 0, e);
            }),
            (M.getTweensOf = function (t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : M.selector(t) || t;
                var i, r, n, s;
                if ((d(t) || F(t)) && "number" != typeof t[0]) {
                    for (i = t.length, r = []; --i > -1; ) r = r.concat(M.getTweensOf(t[i], e));
                    for (i = r.length; --i > -1; ) for (s = r[i], n = i; --n > -1; ) s === r[n] && r.splice(i, 1);
                } else for (r = H(t).concat(), i = r.length; --i > -1; ) (r[i]._gc || (e && !r[i].isActive())) && r.splice(i, 1);
                return r;
            }),
            (M.killTweensOf = M.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && ((i = e), (e = !1));
                for (var r = M.getTweensOf(t, e), n = r.length; --n > -1; ) r[n]._kill(i, t);
            });
        var tt = v(
            "plugins.TweenPlugin",
            function (t, e) {
                (this._overwriteProps = (t || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = e || 0), (this._super = tt.prototype);
            },
            !0
        );
        if (
            ((o = tt.prototype),
            (tt.version = "1.19.0"),
            (tt.API = 2),
            (o._firstPT = null),
            (o._addTween = Y),
            (o.setRatio = X),
            (o._kill = function (t) {
                var e,
                    i = this._overwriteProps,
                    r = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
                for (; r; ) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? ((r._prev._next = r._next), (r._prev = null)) : this._firstPT === r && (this._firstPT = r._next)), (r = r._next);
                return !1;
            }),
            (o._mod = o._roundProps = function (t) {
                for (var e, i = this._firstPT; i; ) (e = t[this._propName] || (null != i.n && t[i.n.split(this._propName + "_").join("")])), e && "function" == typeof e && (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)), (i = i._next);
            }),
            (M._onPluginEvent = function (t, e) {
                var i,
                    r,
                    n,
                    s,
                    o,
                    a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a; ) {
                        for (o = a._next, r = n; r && r.pr > a.pr; ) r = r._next;
                        (a._prev = r ? r._prev : s) ? (a._prev._next = a) : (n = a), (a._next = r) ? (r._prev = a) : (s = a), (a = o);
                    }
                    a = e._firstPT = n;
                }
                for (; a; ) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), (a = a._next);
                return i;
            }),
            (tt.activate = function (t) {
                for (var e = t.length; --e > -1; ) t[e].API === tt.API && (I[new t[e]()._propName] = t[e]);
                return !0;
            }),
            (g.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e,
                    i = t.propName,
                    r = t.priority || 0,
                    n = t.overwriteProps,
                    s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                    o = v(
                        "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                        function () {
                            tt.call(this, i, r), (this._overwriteProps = n || []);
                        },
                        t.global === !0
                    ),
                    a = (o.prototype = new tt(i));
                (a.constructor = o), (o.API = t.API);
                for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                return (o.version = t.version), tt.activate([o]), o;
            }),
            (n = t._gsQueue))
        ) {
            for (s = 0; s < n.length; s++) n[s]();
            for (o in _) _[o].func || t.console.log("GSAP encountered missing dependency: " + o);
        }
        l = !1;
    }
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.18.6
 * DATE: 2016-07-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine(
        "TimelineLite",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (t, e, i) {
            var r = function (t) {
                    e.call(this, t),
                        (this._labels = {}),
                        (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
                        (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
                        (this._sortChildren = !0),
                        (this._onUpdate = this.vars.onUpdate);
                    var i,
                        r,
                        n = this.vars;
                    for (r in n) (i = n[r]), l(i) && -1 !== i.join("").indexOf("{self}") && (n[r] = this._swapSelfInParams(i));
                    l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger);
                },
                n = 1e-10,
                s = i._internals,
                o = (r._internals = {}),
                a = s.isSelector,
                l = s.isArray,
                h = s.lazyTweens,
                u = s.lazyRender,
                f = _gsScope._gsDefine.globals,
                c = function (t) {
                    var e,
                        i = {};
                    for (e in t) i[e] = t[e];
                    return i;
                },
                p = function (t, e, i) {
                    var r,
                        n,
                        s = t.cycle;
                    for (r in s) (n = s[r]), (t[r] = "function" == typeof n ? n(i, e[i]) : n[i % n.length]);
                    delete t.cycle;
                },
                d = (o.pauseCallback = function () {}),
                _ = function (t) {
                    var e,
                        i = [],
                        r = t.length;
                    for (e = 0; e !== r; i.push(t[e++]));
                    return i;
                },
                m = (r.prototype = new e());
            return (
                (r.version = "1.19.0"),
                (m.constructor = r),
                (m.kill()._gc = m._forcingPlayhead = m._hasPause = !1),
                (m.to = function (t, e, r, n) {
                    var s = (r.repeat && f.TweenMax) || i;
                    return e ? this.add(new s(t, e, r), n) : this.set(t, r, n);
                }),
                (m.from = function (t, e, r, n) {
                    return this.add(((r.repeat && f.TweenMax) || i).from(t, e, r), n);
                }),
                (m.fromTo = function (t, e, r, n, s) {
                    var o = (n.repeat && f.TweenMax) || i;
                    return e ? this.add(o.fromTo(t, e, r, n), s) : this.set(t, n, s);
                }),
                (m.staggerTo = function (t, e, n, s, o, l, h, u) {
                    var f,
                        d,
                        m = new r({ onComplete: l, onCompleteParams: h, callbackScope: u, smoothChildTiming: this.smoothChildTiming }),
                        g = n.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = _(t)), s = s || 0, 0 > s && ((t = _(t)), t.reverse(), (s *= -1)), d = 0; d < t.length; d++)
                        (f = c(n)), f.startAt && ((f.startAt = c(f.startAt)), f.startAt.cycle && p(f.startAt, t, d)), g && (p(f, t, d), null != f.duration && ((e = f.duration), delete f.duration)), m.to(t[d], e, f, d * s);
                    return this.add(m, o);
                }),
                (m.staggerFrom = function (t, e, i, r, n, s, o, a) {
                    return (i.immediateRender = 0 != i.immediateRender), (i.runBackwards = !0), this.staggerTo(t, e, i, r, n, s, o, a);
                }),
                (m.staggerFromTo = function (t, e, i, r, n, s, o, a, l) {
                    return (r.startAt = i), (r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender), this.staggerTo(t, e, r, n, s, o, a, l);
                }),
                (m.call = function (t, e, r, n) {
                    return this.add(i.delayedCall(0, t, e, r), n);
                }),
                (m.set = function (t, e, r) {
                    return (r = this._parseTimeOrLabel(r, 0, !0)), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new i(t, 0, e), r);
                }),
                (r.exportRoot = function (t, e) {
                    (t = t || {}), null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var n,
                        s,
                        o = new r(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, n = a._first; n; )
                        (s = n._next), (e && n instanceof i && n.target === n.vars.onComplete) || o.add(n, n._startTime - n._delay), (n = s);
                    return a.add(o, 0), o;
                }),
                (m.add = function (n, s, o, a) {
                    var h, u, f, c, p, d;
                    if (("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, n)), !(n instanceof t))) {
                        if (n instanceof Array || (n && n.push && l(n))) {
                            for (o = o || "normal", a = a || 0, h = s, u = n.length, f = 0; u > f; f++)
                                l((c = n[f])) && (c = new r({ tweens: c })),
                                    this.add(c, h),
                                    "string" != typeof c && "function" != typeof c && ("sequence" === o ? (h = c._startTime + c.totalDuration() / c._timeScale) : "start" === o && (c._startTime -= c.delay())),
                                    (h += a);
                            return this._uncache(!0);
                        }
                        if ("string" == typeof n) return this.addLabel(n, s);
                        if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                        n = i.delayedCall(0, n);
                    }
                    if ((e.prototype.add.call(this, n, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))
                        for (p = this, d = p.rawTime() > n._startTime; p._timeline; ) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), (p = p._timeline);
                    return this;
                }),
                (m.remove = function (e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = (e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline);
                        return (e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale), this;
                    }
                    if (e instanceof Array || (e && e.push && l(e))) {
                        for (var r = e.length; --r > -1; ) this.remove(e[r]);
                        return this;
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
                }),
                (m._remove = function (t, i) {
                    e.prototype._remove.call(this, t, i);
                    var r = this._last;
                    return (
                        r
                            ? this._time > r._startTime + r._totalDuration / r._timeScale && ((this._time = this.duration()), (this._totalTime = this._totalDuration))
                            : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                        this
                    );
                }),
                (m.append = function (t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
                }),
                (m.insert = m.insertMultiple = function (t, e, i, r) {
                    return this.add(t, e || 0, i, r);
                }),
                (m.appendMultiple = function (t, e, i, r) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r);
                }),
                (m.addLabel = function (t, e) {
                    return (this._labels[t] = this._parseTimeOrLabel(e)), this;
                }),
                (m.addPause = function (t, e, r, n) {
                    var s = i.delayedCall(0, d, r, n || this);
                    return (s.vars.onComplete = s.vars.onReverseComplete = e), (s.data = "isPause"), (this._hasPause = !0), this.add(s, t);
                }),
                (m.removeLabel = function (t) {
                    return delete this._labels[t], this;
                }),
                (m.getLabelTime = function (t) {
                    return null != this._labels[t] ? this._labels[t] : -1;
                }),
                (m._parseTimeOrLabel = function (e, i, r, n) {
                    var s;
                    if (n instanceof t && n.timeline === this) this.remove(n);
                    else if (n && (n instanceof Array || (n.push && l(n)))) for (s = n.length; --s > -1; ) n[s] instanceof t && n[s].timeline === this && this.remove(n[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, r);
                    if (((i = i || 0), "string" != typeof e || (!isNaN(e) && null == this._labels[e]))) null == e && (e = this.duration());
                    else {
                        if (((s = e.indexOf("=")), -1 === s)) return null == this._labels[e] ? (r ? (this._labels[e] = this.duration() + i) : i) : this._labels[e] + i;
                        (i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1))), (e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, r) : this.duration());
                    }
                    return Number(e) + i;
                }),
                (m.seek = function (t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1);
                }),
                (m.stop = function () {
                    return this.paused(!0);
                }),
                (m.gotoAndPlay = function (t, e) {
                    return this.play(t, e);
                }),
                (m.gotoAndStop = function (t, e) {
                    return this.pause(t, e);
                }),
                (m.render = function (t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var r,
                        s,
                        o,
                        a,
                        l,
                        f,
                        c,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        _ = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (t >= p - 1e-7)
                        (this._totalTime = this._time = p),
                            this._reversed ||
                                this._hasPausedChild() ||
                                ((s = !0),
                                (a = "onComplete"),
                                (l = !!this._timeline.autoRemoveChildren),
                                0 === this._duration &&
                                    ((0 >= t && t >= -1e-7) || this._rawPrevTime < 0 || this._rawPrevTime === n) &&
                                    this._rawPrevTime !== t &&
                                    this._first &&
                                    ((l = !0), this._rawPrevTime > n && (a = "onReverseComplete"))),
                            (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n),
                            (t = p + 1e-4);
                    else if (1e-7 > t)
                        if (
                            ((this._totalTime = this._time = 0),
                            (0 !== d || (0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || (0 > t && this._rawPrevTime >= 0)))) && ((a = "onReverseComplete"), (s = this._reversed)),
                            0 > t)
                        )
                            (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((l = s = !0), (a = "onReverseComplete")) : this._rawPrevTime >= 0 && this._first && (l = !0), (this._rawPrevTime = t);
                        else {
                            if (((this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n), 0 === t && s)) for (r = this._first; r && 0 === r._startTime; ) r._duration || (s = !1), (r = r._next);
                            (t = 0), this._initted || (l = !0);
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= d) for (r = this._first; r && r._startTime <= t && !f; ) r._duration || "isPause" !== r.data || r.ratio || (0 === r._startTime && 0 === this._rawPrevTime) || (f = r), (r = r._next);
                            else for (r = this._last; r && r._startTime >= t && !f; ) r._duration || ("isPause" === r.data && r._rawPrevTime > 0 && (f = r)), (r = r._prev);
                            f && ((this._time = t = f._startTime), (this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)));
                        }
                        this._totalTime = this._time = this._rawPrevTime = t;
                    }
                    if ((this._time !== d && this._first) || i || l || f) {
                        if (
                            (this._initted || (this._initted = !0),
                            this._active || (!this._paused && this._time !== d && t > 0 && (this._active = !0)),
                            0 === d && this.vars.onStart && ((0 === this._time && this._duration) || e || this._callback("onStart")),
                            (c = this._time),
                            c >= d)
                        )
                            for (r = this._first; r && ((o = r._next), c === this._time && (!this._paused || g)); )
                                (r._active || (r._startTime <= c && !r._paused && !r._gc)) &&
                                    (f === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                                    (r = o);
                        else
                            for (r = this._last; r && ((o = r._prev), c === this._time && (!this._paused || g)); ) {
                                if (r._active || (r._startTime <= d && !r._paused && !r._gc)) {
                                    if (f === r) {
                                        for (f = r._prev; f && f.endTime() > this._time; ) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), (f = f._prev);
                                        (f = null), this.pause();
                                    }
                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i);
                                }
                                r = o;
                            }
                        this._onUpdate && (e || (h.length && u(), this._callback("onUpdate"))),
                            a &&
                                (this._gc ||
                                    ((_ === this._startTime || m !== this._timeScale) &&
                                        (0 === this._time || p >= this.totalDuration()) &&
                                        (s && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[a] && this._callback(a))));
                    }
                }),
                (m._hasPausedChild = function () {
                    for (var t = this._first; t; ) {
                        if (t._paused || (t instanceof r && t._hasPausedChild())) return !0;
                        t = t._next;
                    }
                    return !1;
                }),
                (m.getChildren = function (t, e, r, n) {
                    n = n || -9999999999;
                    for (var s = [], o = this._first, a = 0; o; )
                        o._startTime < n || (o instanceof i ? e !== !1 && (s[a++] = o) : (r !== !1 && (s[a++] = o), t !== !1 && ((s = s.concat(o.getChildren(!0, e, r))), (a = s.length)))), (o = o._next);
                    return s;
                }),
                (m.getTweensOf = function (t, e) {
                    var r,
                        n,
                        s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), r = i.getTweensOf(t), n = r.length; --n > -1; ) (r[n].timeline === this || (e && this._contains(r[n]))) && (o[a++] = r[n]);
                    return s && this._enabled(!1, !0), o;
                }),
                (m.recent = function () {
                    return this._recent;
                }),
                (m._contains = function (t) {
                    for (var e = t.timeline; e; ) {
                        if (e === this) return !0;
                        e = e.timeline;
                    }
                    return !1;
                }),
                (m.shiftChildren = function (t, e, i) {
                    i = i || 0;
                    for (var r, n = this._first, s = this._labels; n; ) n._startTime >= i && (n._startTime += t), (n = n._next);
                    if (e) for (r in s) s[r] >= i && (s[r] += t);
                    return this._uncache(!0);
                }),
                (m._kill = function (t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1; ) i[r]._kill(t, e) && (n = !0);
                    return n;
                }),
                (m.clear = function (t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1; ) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0);
                }),
                (m.invalidate = function () {
                    for (var e = this._first; e; ) e.invalidate(), (e = e._next);
                    return t.prototype.invalidate.call(this);
                }),
                (m._enabled = function (t, i) {
                    if (t === this._gc) for (var r = this._first; r; ) r._enabled(t, !0), (r = r._next);
                    return e.prototype._enabled.call(this, t, i);
                }),
                (m.totalTime = function (e, i, r) {
                    this._forcingPlayhead = !0;
                    var n = t.prototype.totalTime.apply(this, arguments);
                    return (this._forcingPlayhead = !1), n;
                }),
                (m.duration = function (t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
                }),
                (m.totalDuration = function (t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, r = 0, n = this._last, s = 999999999999; n; )
                                (e = n._prev),
                                    n._dirty && n.totalDuration(),
                                    n._startTime > s && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : (s = n._startTime),
                                    n._startTime < 0 &&
                                        !n._paused &&
                                        ((r -= n._startTime), this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), (s = 0)),
                                    (i = n._startTime + n._totalDuration / n._timeScale),
                                    i > r && (r = i),
                                    (n = e);
                            (this._duration = this._totalDuration = r), (this._dirty = !1);
                        }
                        return this._totalDuration;
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
                }),
                (m.paused = function (e) {
                    if (!e) for (var i = this._first, r = this._time; i; ) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), (i = i._next);
                    return t.prototype.paused.apply(this, arguments);
                }),
                (m.usesFrames = function () {
                    for (var e = this._timeline; e._timeline; ) e = e._timeline;
                    return e === t._rootFramesTimeline;
                }),
                (m.rawTime = function () {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
                }),
                r
            );
        },
        !0
    );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (t) {
        "use strict";
        var e = function () {
            return (_gsScope.GreenSockGlobals || _gsScope)[t];
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), (module.exports = e()));
    })("TimelineLite");
/*!
 * VERSION: 1.19.0
 * DATE: 2016-07-14
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine(
        "plugins.CSSPlugin",
        ["plugins.TweenPlugin", "TweenLite"],
        function (t, e) {
            var i,
                r,
                n,
                s,
                o = function () {
                    t.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = o.prototype.setRatio);
                },
                a = _gsScope._gsDefine.globals,
                l = {},
                h = (o.prototype = new t("css"));
            (h.constructor = o),
                (o.version = "1.19.0"),
                (o.API = 2),
                (o.defaultTransformPerspective = 0),
                (o.defaultSkewType = "compensated"),
                (o.defaultSmoothOrigin = !0),
                (h = "px"),
                (o.suffixMap = { top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h, lineHeight: "" });
            var u,
                f,
                c,
                p,
                d,
                _,
                m,
                g,
                v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                T = /(?:\d|\-|\+|=|#|\.)*/g,
                b = /opacity *= *([^)]*)/i,
                P = /opacity:([^;]*)/i,
                S = /alpha\(opacity *=.+?\)/i,
                O = /^(rgb|hsl)/,
                k = /([A-Z])/g,
                C = /-([a-z])/gi,
                A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                R = function (t, e) {
                    return e.toUpperCase();
                },
                M = /(?:Left|Right|Width)/i,
                F = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                z = /,(?=[^\)]*(?:\(|$))/gi,
                D = /[\s,\(]/i,
                E = Math.PI / 180,
                X = 180 / Math.PI,
                N = {},
                Y = document,
                j = function (t) {
                    return Y.createElementNS ? Y.createElementNS("http://www.w3.org/1999/xhtml", t) : Y.createElement(t);
                },
                I = j("div"),
                B = j("img"),
                q = (o._internals = { _specialProps: l }),
                V = navigator.userAgent,
                U = (function () {
                    var t = V.indexOf("Android"),
                        e = j("a");
                    return (
                        (c = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || Number(V.substr(t + 8, 1)) > 3)),
                        (d = c && Number(V.substr(V.indexOf("Version/") + 8, 1)) < 6),
                        (p = -1 !== V.indexOf("Firefox")),
                        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (_ = parseFloat(RegExp.$1)),
                        e ? ((e.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(e.style.opacity)) : !1
                    );
                })(),
                W = function (t) {
                    return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                },
                G = function (t) {
                    window.console && console.log(t);
                },
                Q = "",
                Z = "",
                H = function (t, e) {
                    e = e || I;
                    var i,
                        r,
                        n = e.style;
                    if (void 0 !== n[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === n[i[r] + t]; );
                    return r >= 0 ? ((Z = 3 === r ? "ms" : i[r]), (Q = "-" + Z.toLowerCase() + "-"), Z + t) : null;
                },
                K = Y.defaultView ? Y.defaultView.getComputedStyle : function () {},
                $ = (o.getStyle = function (t, e, i, r, n) {
                    var s;
                    return U || "opacity" !== e
                        ? (!r && t.style[e] ? (s = t.style[e]) : (i = i || K(t)) ? (s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase())) : t.currentStyle && (s = t.currentStyle[e]),
                          null == n || (s && "none" !== s && "auto" !== s && "auto auto" !== s) ? s : n)
                        : W(t);
                }),
                J = (q.convertToPixels = function (t, i, r, n, s) {
                    if ("px" === n || !n) return r;
                    if ("auto" === n || !r) return 0;
                    var a,
                        l,
                        h,
                        u = M.test(i),
                        f = t,
                        c = I.style,
                        p = 0 > r,
                        d = 1 === r;
                    if ((p && (r = -r), d && (r *= 100), "%" === n && -1 !== i.indexOf("border"))) a = (r / 100) * (u ? t.clientWidth : t.clientHeight);
                    else {
                        if (((c.cssText = "border:0 solid red;position:" + $(t, "position") + ";line-height:0;"), "%" !== n && f.appendChild && "v" !== n.charAt(0) && "rem" !== n)) c[u ? "borderLeftWidth" : "borderTopWidth"] = r + n;
                        else {
                            if (((f = t.parentNode || Y.body), (l = f._gsCache), (h = e.ticker.frame), l && u && l.time === h)) return (l.width * r) / 100;
                            c[u ? "width" : "height"] = r + n;
                        }
                        f.appendChild(I),
                            (a = parseFloat(I[u ? "offsetWidth" : "offsetHeight"])),
                            f.removeChild(I),
                            u && "%" === n && o.cacheWidths !== !1 && ((l = f._gsCache = f._gsCache || {}), (l.time = h), (l.width = (a / r) * 100)),
                            0 !== a || s || (a = J(t, i, r, n, !0));
                    }
                    return d && (a /= 100), p ? -a : a;
                }),
                tt = (q.calculateOffset = function (t, e, i) {
                    if ("absolute" !== $(t, "position", i)) return 0;
                    var r = "left" === e ? "Left" : "Top",
                        n = $(t, "margin" + r, i);
                    return t["offset" + r] - (J(t, e, parseFloat(n), n.replace(T, "")) || 0);
                }),
                et = function (t, e) {
                    var i,
                        r,
                        n,
                        s = {};
                    if ((e = e || K(t, null)))
                        if ((i = e.length)) for (; --i > -1; ) (n = e[i]), (-1 === n.indexOf("-transform") || Ct === n) && (s[n.replace(C, R)] = e.getPropertyValue(n));
                        else for (i in e) (-1 === i.indexOf("Transform") || kt === i) && (s[i] = e[i]);
                    else if ((e = t.currentStyle || t.style)) for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(C, R)] = e[i]);
                    return (
                        U || (s.opacity = W(t)),
                        (r = It(t, e, !1)),
                        (s.rotation = r.rotation),
                        (s.skewX = r.skewX),
                        (s.scaleX = r.scaleX),
                        (s.scaleY = r.scaleY),
                        (s.x = r.x),
                        (s.y = r.y),
                        Rt && ((s.z = r.z), (s.rotationX = r.rotationX), (s.rotationY = r.rotationY), (s.scaleZ = r.scaleZ)),
                        s.filters && delete s.filters,
                        s
                    );
                },
                it = function (t, e, i, r, n) {
                    var s,
                        o,
                        a,
                        l = {},
                        h = t.style;
                    for (o in i)
                        "cssText" !== o &&
                            "length" !== o &&
                            isNaN(o) &&
                            (e[o] !== (s = i[o]) || (n && n[o])) &&
                            -1 === o.indexOf("Origin") &&
                            ("number" == typeof s || "string" == typeof s) &&
                            ((l[o] = "auto" !== s || ("left" !== o && "top" !== o) ? (("" !== s && "auto" !== s && "none" !== s) || "string" != typeof e[o] || "" === e[o].replace(w, "") ? s : 0) : tt(t, o)),
                            void 0 !== h[o] && (a = new gt(h, o, h[o], a)));
                    if (r) for (o in r) "className" !== o && (l[o] = r[o]);
                    return { difs: l, firstMPT: a };
                },
                rt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                nt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                st = function (t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || K(t))[e] || 0;
                    if (t.getBBox && Nt(t)) return t.getBBox()[e] || 0;
                    var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        n = rt[e],
                        s = n.length;
                    for (i = i || K(t, null); --s > -1; ) (r -= parseFloat($(t, "padding" + n[s], i, !0)) || 0), (r -= parseFloat($(t, "border" + n[s] + "Width", i, !0)) || 0);
                    return r;
                },
                ot = function (t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0");
                    var i,
                        r = t.split(" "),
                        n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0],
                        s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                    if (r.length > 3 && !e) {
                        for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++) t.push(ot(r[i]));
                        return t.join(",");
                    }
                    return (
                        null == s ? (s = "center" === n ? "50%" : "0") : "center" === s && (s = "50%"),
                        ("center" === n || (isNaN(parseFloat(n)) && -1 === (n + "").indexOf("="))) && (n = "50%"),
                        (t = n + " " + s + (r.length > 2 ? " " + r[2] : "")),
                        e &&
                            ((e.oxp = -1 !== n.indexOf("%")),
                            (e.oyp = -1 !== s.indexOf("%")),
                            (e.oxr = "=" === n.charAt(1)),
                            (e.oyr = "=" === s.charAt(1)),
                            (e.ox = parseFloat(n.replace(w, ""))),
                            (e.oy = parseFloat(s.replace(w, ""))),
                            (e.v = t)),
                        e || t
                    );
                },
                at = function (t, e) {
                    return "function" == typeof t && (t = t(g, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0;
                },
                lt = function (t, e) {
                    return "function" == typeof t && (t = t(g, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0;
                },
                ht = function (t, e, i, r) {
                    var n,
                        s,
                        o,
                        a,
                        l,
                        h = 1e-6;
                    return (
                        "function" == typeof t && (t = t(g, m)),
                        null == t
                            ? (a = e)
                            : "number" == typeof t
                            ? (a = t)
                            : ((n = 360),
                              (s = t.split("_")),
                              (l = "=" === t.charAt(1)),
                              (o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : X) - (l ? 0 : e)),
                              s.length &&
                                  (r && (r[i] = e + o),
                                  -1 !== t.indexOf("short") && ((o %= n), o !== o % (n / 2) && (o = 0 > o ? o + n : o - n)),
                                  -1 !== t.indexOf("_cw") && 0 > o ? (o = ((o + 9999999999 * n) % n) - ((o / n) | 0) * n) : -1 !== t.indexOf("ccw") && o > 0 && (o = ((o - 9999999999 * n) % n) - ((o / n) | 0) * n)),
                              (a = e + o)),
                        h > a && a > -h && (a = 0),
                        a
                    );
                },
                ut = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0],
                },
                ft = function (t, e, i) {
                    return (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t), (255 * (1 > 6 * t ? e + (i - e) * t * 6 : 0.5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
                },
                ct = (o.parseColor = function (t, e) {
                    var i, r, n, s, o, a, l, h, u, f, c;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
                        else {
                            if (("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t])) i = ut[t];
                            else if ("#" === t.charAt(0))
                                4 === t.length && ((r = t.charAt(1)), (n = t.charAt(2)), (s = t.charAt(3)), (t = "#" + r + r + n + n + s + s)), (t = parseInt(t.substr(1), 16)), (i = [t >> 16, (t >> 8) & 255, 255 & t]);
                            else if ("hsl" === t.substr(0, 3))
                                if (((i = c = t.match(v)), e)) {
                                    if (-1 !== t.indexOf("=")) return t.match(y);
                                } else
                                    (o = (Number(i[0]) % 360) / 360),
                                        (a = Number(i[1]) / 100),
                                        (l = Number(i[2]) / 100),
                                        (n = 0.5 >= l ? l * (a + 1) : l + a - l * a),
                                        (r = 2 * l - n),
                                        i.length > 3 && (i[3] = Number(t[3])),
                                        (i[0] = ft(o + 1 / 3, r, n)),
                                        (i[1] = ft(o, r, n)),
                                        (i[2] = ft(o - 1 / 3, r, n));
                            else i = t.match(v) || ut.transparent;
                            (i[0] = Number(i[0])), (i[1] = Number(i[1])), (i[2] = Number(i[2])), i.length > 3 && (i[3] = Number(i[3]));
                        }
                    else i = ut.black;
                    return (
                        e &&
                            !c &&
                            ((r = i[0] / 255),
                            (n = i[1] / 255),
                            (s = i[2] / 255),
                            (h = Math.max(r, n, s)),
                            (u = Math.min(r, n, s)),
                            (l = (h + u) / 2),
                            h === u ? (o = a = 0) : ((f = h - u), (a = l > 0.5 ? f / (2 - h - u) : f / (h + u)), (o = h === r ? (n - s) / f + (s > n ? 6 : 0) : h === n ? (s - r) / f + 2 : (r - n) / f + 4), (o *= 60)),
                            (i[0] = (o + 0.5) | 0),
                            (i[1] = (100 * a + 0.5) | 0),
                            (i[2] = (100 * l + 0.5) | 0)),
                        i
                    );
                }),
                pt = function (t, e) {
                    var i,
                        r,
                        n,
                        s = t.match(dt) || [],
                        o = 0,
                        a = s.length ? "" : t;
                    for (i = 0; i < s.length; i++)
                        (r = s[i]),
                            (n = t.substr(o, t.indexOf(r, o) - o)),
                            (o += n.length + r.length),
                            (r = ct(r, e)),
                            3 === r.length && r.push(1),
                            (a += n + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")");
                    return a + t.substr(o);
                },
                dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (h in ut) dt += "|" + h + "\\b";
            (dt = new RegExp(dt + ")", "gi")),
                (o.colorStringFilter = function (t) {
                    var e,
                        i = t[0] + t[1];
                    dt.test(i) && ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")), (t[0] = pt(t[0], e)), (t[1] = pt(t[1], e))), (dt.lastIndex = 0);
                }),
                e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
            var _t = function (t, e, i, r) {
                    if (null == t)
                        return function (t) {
                            return t;
                        };
                    var n,
                        s = e ? (t.match(dt) || [""])[0] : "",
                        o = t.split(s).join("").match(x) || [],
                        a = t.substr(0, t.indexOf(o[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        u = o.length,
                        f = u > 0 ? o[0].replace(v, "") : "";
                    return u
                        ? (n = e
                              ? function (t) {
                                    var e, c, p, d;
                                    if ("number" == typeof t) t += f;
                                    else if (r && z.test(t)) {
                                        for (d = t.replace(z, "|").split("|"), p = 0; p < d.length; p++) d[p] = n(d[p]);
                                        return d.join(",");
                                    }
                                    if (((e = (t.match(dt) || [s])[0]), (c = t.split(e).join("").match(x) || []), (p = c.length), u > p--)) for (; ++p < u; ) c[p] = i ? c[((p - 1) / 2) | 0] : o[p];
                                    return a + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "");
                                }
                              : function (t) {
                                    var e, s, c;
                                    if ("number" == typeof t) t += f;
                                    else if (r && z.test(t)) {
                                        for (s = t.replace(z, "|").split("|"), c = 0; c < s.length; c++) s[c] = n(s[c]);
                                        return s.join(",");
                                    }
                                    if (((e = t.match(x) || []), (c = e.length), u > c--)) for (; ++c < u; ) e[c] = i ? e[((c - 1) / 2) | 0] : o[c];
                                    return a + e.join(h) + l;
                                })
                        : function (t) {
                              return t;
                          };
                },
                mt = function (t) {
                    return (
                        (t = t.split(",")),
                        function (e, i, r, n, s, o, a) {
                            var l,
                                h = (i + "").split(" ");
                            for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[((l - 1) / 2) >> 0];
                            return n.parse(e, a, s, o);
                        }
                    );
                },
                gt =
                    ((q._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, r, n, s, o = this.data, a = o.proxy, l = o.firstMPT, h = 1e-6; l; ) (e = a[l.v]), l.r ? (e = Math.round(e)) : h > e && e > -h && (e = 0), (l.t[l.p] = e), (l = l._next);
                        if ((o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t))
                            for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l; ) {
                                if (((i = l.t), i.type)) {
                                    if (1 === i.type) {
                                        for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                        i[s] = n;
                                    }
                                } else i[s] = i.s + i.xs0;
                                l = l._next;
                            }
                    }),
                    function (t, e, i, r, n) {
                        (this.t = t), (this.p = e), (this.v = i), (this.r = n), r && ((r._prev = this), (this._next = r));
                    }),
                vt =
                    ((q._parseToProxy = function (t, e, i, r, n, s) {
                        var o,
                            a,
                            l,
                            h,
                            u,
                            f = r,
                            c = {},
                            p = {},
                            d = i._transform,
                            _ = N;
                        for (i._transform = null, N = e, r = u = i.parse(t, e, r, n), N = _, s && ((i._transform = d), f && ((f._prev = null), f._prev && (f._prev._next = null))); r && r !== f; ) {
                            if (r.type <= 1 && ((a = r.p), (p[a] = r.s + r.c), (c[a] = r.s), s || ((h = new gt(r, "s", a, h, r.r)), (r.c = 0)), 1 === r.type))
                                for (o = r.l; --o > 0; ) (l = "xn" + o), (a = r.p + "_" + l), (p[a] = r.data[l]), (c[a] = r[l]), s || (h = new gt(r, l, a, h, r.rxp[l]));
                            r = r._next;
                        }
                        return { proxy: c, end: p, firstMPT: h, pt: u };
                    }),
                    (q.CSSPropTween = function (t, e, r, n, o, a, l, h, u, f, c) {
                        (this.t = t),
                            (this.p = e),
                            (this.s = r),
                            (this.c = n),
                            (this.n = l || e),
                            t instanceof vt || s.push(this.n),
                            (this.r = h),
                            (this.type = a || 0),
                            u && ((this.pr = u), (i = !0)),
                            (this.b = void 0 === f ? r : f),
                            (this.e = void 0 === c ? r + n : c),
                            o && ((this._next = o), (o._prev = this));
                    })),
                yt = function (t, e, i, r, n, s) {
                    var o = new vt(t, e, i, r - i, n, -1, s);
                    return (o.b = i), (o.e = o.xs0 = r), o;
                },
                xt = (o.parseComplex = function (t, e, i, r, n, s, a, l, h, f) {
                    (i = i || s || ""), "function" == typeof r && (r = r(g, m)), (a = new vt(t, e, 0, 0, a, f ? 2 : 1, null, !1, l, i, r)), (r += ""), n && dt.test(r + i) && ((r = [i, r]), o.colorStringFilter(r), (i = r[0]), (r = r[1]));
                    var c,
                        p,
                        d,
                        _,
                        x,
                        w,
                        T,
                        b,
                        P,
                        S,
                        O,
                        k,
                        C,
                        A = i.split(", ").join(",").split(" "),
                        R = r.split(", ").join(",").split(" "),
                        M = A.length,
                        F = u !== !1;
                    for (
                        (-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && ((A = A.join(" ").replace(z, ", ").split(" ")), (R = R.join(" ").replace(z, ", ").split(" ")), (M = A.length)),
                            M !== R.length && ((A = (s || "").split(" ")), (M = A.length)),
                            a.plugin = h,
                            a.setRatio = f,
                            dt.lastIndex = 0,
                            c = 0;
                        M > c;
                        c++
                    )
                        if (((_ = A[c]), (x = R[c]), (b = parseFloat(_)), b || 0 === b)) a.appendXtra("", b, at(x, b), x.replace(y, ""), F && -1 !== x.indexOf("px"), !0);
                        else if (n && dt.test(_))
                            (k = x.indexOf(")") + 1),
                                (k = ")" + (k ? x.substr(k) : "")),
                                (C = -1 !== x.indexOf("hsl") && U),
                                (_ = ct(_, C)),
                                (x = ct(x, C)),
                                (P = _.length + x.length > 6),
                                P && !U && 0 === x[3]
                                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"), (a.e = a.e.split(R[c]).join("transparent")))
                                    : (U || (P = !1),
                                      C
                                          ? a
                                                .appendXtra(P ? "hsla(" : "hsl(", _[0], at(x[0], _[0]), ",", !1, !0)
                                                .appendXtra("", _[1], at(x[1], _[1]), "%,", !1)
                                                .appendXtra("", _[2], at(x[2], _[2]), P ? "%," : "%" + k, !1)
                                          : a
                                                .appendXtra(P ? "rgba(" : "rgb(", _[0], x[0] - _[0], ",", !0, !0)
                                                .appendXtra("", _[1], x[1] - _[1], ",", !0)
                                                .appendXtra("", _[2], x[2] - _[2], P ? "," : k, !0),
                                      P && ((_ = _.length < 4 ? 1 : _[3]), a.appendXtra("", _, (x.length < 4 ? 1 : x[3]) - _, k, !1))),
                                (dt.lastIndex = 0);
                        else if ((w = _.match(v))) {
                            if (((T = x.match(y)), !T || T.length !== w.length)) return a;
                            for (d = 0, p = 0; p < w.length; p++) (O = w[p]), (S = _.indexOf(O, d)), a.appendXtra(_.substr(d, S - d), Number(O), at(T[p], O), "", F && "px" === _.substr(S + O.length, 2), 0 === p), (d = S + O.length);
                            a["xs" + a.l] += _.substr(d);
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
                    if (-1 !== r.indexOf("=") && a.data) {
                        for (k = a.xs0 + a.data.s, c = 1; c < a.l; c++) k += a["xs" + c] + a.data["xn" + c];
                        a.e = k + a["xs" + c];
                    }
                    return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
                }),
                wt = 9;
            for (h = vt.prototype, h.l = h.pr = 0; --wt > 0; ) (h["xn" + wt] = 0), (h["xs" + wt] = "");
            (h.xs0 = ""),
                (h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null),
                (h.appendXtra = function (t, e, i, r, n, s) {
                    var o = this,
                        a = o.l;
                    return (
                        (o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || ""),
                        i || 0 === a || o.plugin
                            ? (o.l++,
                              (o.type = o.setRatio ? 2 : 1),
                              (o["xs" + o.l] = r || ""),
                              a > 0
                                  ? ((o.data["xn" + a] = e + i), (o.rxp["xn" + a] = n), (o["xn" + a] = e), o.plugin || ((o.xfirst = new vt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, n, o.pr)), (o.xfirst.xs0 = 0)), o)
                                  : ((o.data = { s: e + i }), (o.rxp = {}), (o.s = e), (o.c = i), (o.r = n), o))
                            : ((o["xs" + a] += e + (r || "")), o)
                    );
                });
            var Tt = function (t, e) {
                    (e = e || {}),
                        (this.p = e.prefix ? H(t) || t : t),
                        (l[t] = l[this.p] = this),
                        (this.format = e.formatter || _t(e.defaultValue, e.color, e.collapsible, e.multi)),
                        e.parser && (this.parse = e.parser),
                        (this.clrs = e.color),
                        (this.multi = e.multi),
                        (this.keyword = e.keyword),
                        (this.dflt = e.defaultValue),
                        (this.pr = e.priority || 0);
                },
                bt = (q._registerComplexSpecialProp = function (t, e, i) {
                    "object" != typeof e && (e = { parser: i });
                    var r,
                        n,
                        s = t.split(","),
                        o = e.defaultValue;
                    for (i = i || [o], r = 0; r < s.length; r++) (e.prefix = 0 === r && e.prefix), (e.defaultValue = i[r] || o), (n = new Tt(s[r], e));
                }),
                Pt = (q._registerPluginProp = function (t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        bt(t, {
                            parser: function (t, i, r, n, s, o, h) {
                                var u = a.com.greensock.plugins[e];
                                return u ? (u._cssRegister(), l[r].parse(t, i, r, n, s, o, h)) : (G("Error: " + e + " js file not loaded."), s);
                            },
                        });
                    }
                });
            (h = Tt.prototype),
                (h.parseComplex = function (t, e, i, r, n, s) {
                    var o,
                        a,
                        l,
                        h,
                        u,
                        f,
                        c = this.keyword;
                    if ((this.multi && (z.test(i) || z.test(e) ? ((a = e.replace(z, "|").split("|")), (l = i.replace(z, "|").split("|"))) : c && ((a = [e]), (l = [i]))), l)) {
                        for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++)
                            (e = a[o] = a[o] || this.dflt), (i = l[o] = l[o] || this.dflt), c && ((u = e.indexOf(c)), (f = i.indexOf(c)), u !== f && (-1 === f ? (a[o] = a[o].split(c).join("")) : -1 === u && (a[o] += " " + c)));
                        (e = a.join(", ")), (i = l.join(", "));
                    }
                    return xt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, s);
                }),
                (h.parse = function (t, e, i, r, s, o, a) {
                    return this.parseComplex(t.style, this.format($(t, this.p, n, !1, this.dflt)), this.format(e), s, o);
                }),
                (o.registerSpecialProp = function (t, e, i) {
                    bt(t, {
                        parser: function (t, r, n, s, o, a, l) {
                            var h = new vt(t, n, 0, 0, o, 2, n, !1, i);
                            return (h.plugin = a), (h.setRatio = e(t, r, s._tween, n)), h;
                        },
                        priority: i,
                    });
                }),
                (o.useSVGTransformAttr = c || p);
            var St,
                Ot = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                kt = H("transform"),
                Ct = Q + "transform",
                At = H("transformOrigin"),
                Rt = null !== H("perspective"),
                Mt = (q.Transform = function () {
                    (this.perspective = parseFloat(o.defaultTransformPerspective) || 0), (this.force3D = o.defaultForce3D !== !1 && Rt ? o.defaultForce3D || "auto" : !1);
                }),
                Ft = window.SVGElement,
                Lt = function (t, e, i) {
                    var r,
                        n = Y.createElementNS("http://www.w3.org/2000/svg", t),
                        s = /([a-z])([A-Z])/g;
                    for (r in i) n.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), i[r]);
                    return e.appendChild(n), n;
                },
                zt = Y.documentElement,
                Dt = (function () {
                    var t,
                        e,
                        i,
                        r = _ || (/Android/i.test(V) && !window.chrome);
                    return (
                        Y.createElementNS &&
                            !r &&
                            ((t = Lt("svg", zt)),
                            (e = Lt("rect", t, { width: 100, height: 50, x: 100 })),
                            (i = e.getBoundingClientRect().width),
                            (e.style[At] = "50% 50%"),
                            (e.style[kt] = "scaleX(0.5)"),
                            (r = i === e.getBoundingClientRect().width && !(p && Rt)),
                            zt.removeChild(t)),
                        r
                    );
                })(),
                Et = function (t, e, i, r, n, s) {
                    var a,
                        l,
                        h,
                        u,
                        f,
                        c,
                        p,
                        d,
                        _,
                        m,
                        g,
                        v,
                        y,
                        x,
                        w = t._gsTransform,
                        T = jt(t, !0);
                    w && ((y = w.xOrigin), (x = w.yOrigin)),
                        (!r || (a = r.split(" ")).length < 2) &&
                            ((p = t.getBBox()),
                            (e = ot(e).split(" ")),
                            (a = [(-1 !== e[0].indexOf("%") ? (parseFloat(e[0]) / 100) * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? (parseFloat(e[1]) / 100) * p.height : parseFloat(e[1])) + p.y])),
                        (i.xOrigin = u = parseFloat(a[0])),
                        (i.yOrigin = f = parseFloat(a[1])),
                        r &&
                            T !== Yt &&
                            ((c = T[0]),
                            (p = T[1]),
                            (d = T[2]),
                            (_ = T[3]),
                            (m = T[4]),
                            (g = T[5]),
                            (v = c * _ - p * d),
                            (l = u * (_ / v) + f * (-d / v) + (d * g - _ * m) / v),
                            (h = u * (-p / v) + f * (c / v) - (c * g - p * m) / v),
                            (u = i.xOrigin = a[0] = l),
                            (f = i.yOrigin = a[1] = h)),
                        w &&
                            (s && ((i.xOffset = w.xOffset), (i.yOffset = w.yOffset), (w = i)),
                            n || (n !== !1 && o.defaultSmoothOrigin !== !1) ? ((l = u - y), (h = f - x), (w.xOffset += l * T[0] + h * T[2] - l), (w.yOffset += l * T[1] + h * T[3] - h)) : (w.xOffset = w.yOffset = 0)),
                        s || t.setAttribute("data-svg-origin", a.join(" "));
                },
                Xt = function (t) {
                    try {
                        return t.getBBox();
                    } catch (t) {}
                },
                Nt = function (t) {
                    return !!(Ft && t.getBBox && t.getCTM && Xt(t) && (!t.parentNode || (t.parentNode.getBBox && t.parentNode.getCTM)));
                },
                Yt = [1, 0, 0, 1, 0, 0],
                jt = function (t, e) {
                    var i,
                        r,
                        n,
                        s,
                        o,
                        a,
                        l = t._gsTransform || new Mt(),
                        h = 1e5,
                        u = t.style;
                    if (
                        (kt
                            ? (r = $(t, Ct, null, !0))
                            : t.currentStyle && ((r = t.currentStyle.filter.match(F)), (r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), l.x || 0, l.y || 0].join(",") : "")),
                        (i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r),
                        i &&
                            kt &&
                            ((a = "none" === K(t).display) || !t.parentNode) &&
                            (a && ((s = u.display), (u.display = "block")),
                            t.parentNode || ((o = 1), zt.appendChild(t)),
                            (r = $(t, Ct, null, !0)),
                            (i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r),
                            s ? (u.display = s) : a && Vt(u, "display"),
                            o && zt.removeChild(t)),
                        (l.svg || (t.getBBox && Nt(t))) &&
                            (i && -1 !== (u[kt] + "").indexOf("matrix") && ((r = u[kt]), (i = 0)),
                            (n = t.getAttribute("transform")),
                            i && n && (-1 !== n.indexOf("matrix") ? ((r = n), (i = 0)) : -1 !== n.indexOf("translate") && ((r = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (i = 0)))),
                        i)
                    )
                        return Yt;
                    for (n = (r || "").match(v) || [], wt = n.length; --wt > -1; ) (s = Number(n[wt])), (n[wt] = (o = s - (s |= 0)) ? ((o * h + (0 > o ? -0.5 : 0.5)) | 0) / h + s : s);
                    return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n;
                },
                It = (q.getTransform = function (t, i, r, n) {
                    if (t._gsTransform && r && !n) return t._gsTransform;
                    var s,
                        a,
                        l,
                        h,
                        u,
                        f,
                        c = r ? t._gsTransform || new Mt() : new Mt(),
                        p = c.scaleX < 0,
                        d = 2e-5,
                        _ = 1e5,
                        m = Rt ? parseFloat($(t, At, i, !1, "0 0 0").split(" ")[2]) || c.zOrigin || 0 : 0,
                        g = parseFloat(o.defaultTransformPerspective) || 0;
                    if (((c.svg = !(!t.getBBox || !Nt(t))), c.svg && (Et(t, $(t, At, i, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")), (St = o.useSVGTransformAttr || Dt)), (s = jt(t)), s !== Yt)) {
                        if (16 === s.length) {
                            var v,
                                y,
                                x,
                                w,
                                T,
                                b = s[0],
                                P = s[1],
                                S = s[2],
                                O = s[3],
                                k = s[4],
                                C = s[5],
                                A = s[6],
                                R = s[7],
                                M = s[8],
                                F = s[9],
                                L = s[10],
                                z = s[12],
                                D = s[13],
                                E = s[14],
                                N = s[11],
                                Y = Math.atan2(A, L);
                            c.zOrigin && ((E = -c.zOrigin), (z = M * E - s[12]), (D = F * E - s[13]), (E = L * E + c.zOrigin - s[14])),
                                (c.rotationX = Y * X),
                                Y &&
                                    ((w = Math.cos(-Y)),
                                    (T = Math.sin(-Y)),
                                    (v = k * w + M * T),
                                    (y = C * w + F * T),
                                    (x = A * w + L * T),
                                    (M = k * -T + M * w),
                                    (F = C * -T + F * w),
                                    (L = A * -T + L * w),
                                    (N = R * -T + N * w),
                                    (k = v),
                                    (C = y),
                                    (A = x)),
                                (Y = Math.atan2(-S, L)),
                                (c.rotationY = Y * X),
                                Y && ((w = Math.cos(-Y)), (T = Math.sin(-Y)), (v = b * w - M * T), (y = P * w - F * T), (x = S * w - L * T), (F = P * T + F * w), (L = S * T + L * w), (N = O * T + N * w), (b = v), (P = y), (S = x)),
                                (Y = Math.atan2(P, b)),
                                (c.rotation = Y * X),
                                Y && ((w = Math.cos(-Y)), (T = Math.sin(-Y)), (b = b * w + k * T), (y = P * w + C * T), (C = P * -T + C * w), (A = S * -T + A * w), (P = y)),
                                c.rotationX && Math.abs(c.rotationX) + Math.abs(c.rotation) > 359.9 && ((c.rotationX = c.rotation = 0), (c.rotationY = 180 - c.rotationY)),
                                (c.scaleX = ((Math.sqrt(b * b + P * P) * _ + 0.5) | 0) / _),
                                (c.scaleY = ((Math.sqrt(C * C + F * F) * _ + 0.5) | 0) / _),
                                (c.scaleZ = ((Math.sqrt(A * A + L * L) * _ + 0.5) | 0) / _),
                                c.rotationX || c.rotationY
                                    ? (c.skewX = 0)
                                    : ((c.skewX = k || C ? Math.atan2(k, C) * X + c.rotation : c.skewX || 0),
                                      Math.abs(c.skewX) > 90 &&
                                          Math.abs(c.skewX) < 270 &&
                                          (p ? ((c.scaleX *= -1), (c.skewX += c.rotation <= 0 ? 180 : -180), (c.rotation += c.rotation <= 0 ? 180 : -180)) : ((c.scaleY *= -1), (c.skewX += c.skewX <= 0 ? 180 : -180)))),
                                (c.perspective = N ? 1 / (0 > N ? -N : N) : 0),
                                (c.x = z),
                                (c.y = D),
                                (c.z = E),
                                c.svg && ((c.x -= c.xOrigin - (c.xOrigin * b - c.yOrigin * k)), (c.y -= c.yOrigin - (c.yOrigin * P - c.xOrigin * C)));
                        } else if (!Rt || n || !s.length || c.x !== s[4] || c.y !== s[5] || (!c.rotationX && !c.rotationY)) {
                            var j = s.length >= 6,
                                I = j ? s[0] : 1,
                                B = s[1] || 0,
                                q = s[2] || 0,
                                V = j ? s[3] : 1;
                            (c.x = s[4] || 0),
                                (c.y = s[5] || 0),
                                (l = Math.sqrt(I * I + B * B)),
                                (h = Math.sqrt(V * V + q * q)),
                                (u = I || B ? Math.atan2(B, I) * X : c.rotation || 0),
                                (f = q || V ? Math.atan2(q, V) * X + u : c.skewX || 0),
                                Math.abs(f) > 90 && Math.abs(f) < 270 && (p ? ((l *= -1), (f += 0 >= u ? 180 : -180), (u += 0 >= u ? 180 : -180)) : ((h *= -1), (f += 0 >= f ? 180 : -180))),
                                (c.scaleX = l),
                                (c.scaleY = h),
                                (c.rotation = u),
                                (c.skewX = f),
                                Rt && ((c.rotationX = c.rotationY = c.z = 0), (c.perspective = g), (c.scaleZ = 1)),
                                c.svg && ((c.x -= c.xOrigin - (c.xOrigin * I + c.yOrigin * q)), (c.y -= c.yOrigin - (c.xOrigin * B + c.yOrigin * V)));
                        }
                        c.zOrigin = m;
                        for (a in c) c[a] < d && c[a] > -d && (c[a] = 0);
                    }
                    return (
                        r &&
                            ((t._gsTransform = c),
                            c.svg &&
                                (St && t.style[kt]
                                    ? e.delayedCall(0.001, function () {
                                          Vt(t.style, kt);
                                      })
                                    : !St &&
                                      t.getAttribute("transform") &&
                                      e.delayedCall(0.001, function () {
                                          t.removeAttribute("transform");
                                      }))),
                        c
                    );
                }),
                $t = function (t) {
                    var e,
                        i,
                        r = this.data,
                        n = -r.rotation * E,
                        s = n + r.skewX * E,
                        o = 1e5,
                        a = ((Math.cos(n) * r.scaleX * o) | 0) / o,
                        l = ((Math.sin(n) * r.scaleX * o) | 0) / o,
                        h = ((Math.sin(s) * -r.scaleY * o) | 0) / o,
                        u = ((Math.cos(s) * r.scaleY * o) | 0) / o,
                        f = this.t.style,
                        c = this.t.currentStyle;
                    if (c) {
                        (i = l), (l = -h), (h = -i), (e = c.filter), (f.filter = "");
                        var p,
                            d,
                            m = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            v = "absolute" !== c.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                            x = r.x + (m * r.xPercent) / 100,
                            w = r.y + (g * r.yPercent) / 100;
                        if (
                            (null != r.ox && ((p = (r.oxp ? m * r.ox * 0.01 : r.ox) - m / 2), (d = (r.oyp ? g * r.oy * 0.01 : r.oy) - g / 2), (x += p - (p * a + d * l)), (w += d - (p * h + d * u))),
                            v ? ((p = m / 2), (d = g / 2), (y += ", Dx=" + (p - (p * a + d * l) + x) + ", Dy=" + (d - (p * h + d * u) + w) + ")")) : (y += ", sizingMethod='auto expand')"),
                            -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? (f.filter = e.replace(L, y)) : (f.filter = y + " " + e),
                            (0 === t || 1 === t) &&
                                1 === a &&
                                0 === l &&
                                0 === h &&
                                1 === u &&
                                ((v && -1 === y.indexOf("Dx=0, Dy=0")) || (b.test(e) && 100 !== parseFloat(RegExp.$1)) || (-1 === e.indexOf(e.indexOf("Alpha")) && f.removeAttribute("filter"))),
                            !v)
                        ) {
                            var P,
                                S,
                                O,
                                k = 8 > _ ? 1 : -1;
                            for (
                                p = r.ieOffsetX || 0,
                                    d = r.ieOffsetY || 0,
                                    r.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * g)) / 2 + x),
                                    r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + w),
                                    wt = 0;
                                4 > wt;
                                wt++
                            )
                                (S = nt[wt]),
                                    (P = c[S]),
                                    (i = -1 !== P.indexOf("px") ? parseFloat(P) : J(this.t, S, parseFloat(P), P.replace(T, "")) || 0),
                                    (O = i !== r[S] ? (2 > wt ? -r.ieOffsetX : -r.ieOffsetY) : 2 > wt ? p - r.ieOffsetX : d - r.ieOffsetY),
                                    (f[S] = (r[S] = Math.round(i - O * (0 === wt || 2 === wt ? 1 : k))) + "px");
                        }
                    }
                },
                Bt = (q.set3DTransformRatio = q.setTransformRatio = function (t) {
                    var e,
                        i,
                        r,
                        n,
                        s,
                        o,
                        a,
                        l,
                        h,
                        u,
                        f,
                        c,
                        d,
                        _,
                        m,
                        g,
                        v,
                        y,
                        x,
                        w,
                        T,
                        b,
                        P,
                        S = this.data,
                        O = this.t.style,
                        k = S.rotation,
                        C = S.rotationX,
                        A = S.rotationY,
                        R = S.scaleX,
                        M = S.scaleY,
                        F = S.scaleZ,
                        L = S.x,
                        z = S.y,
                        D = S.z,
                        X = S.svg,
                        N = S.perspective,
                        Y = S.force3D;
                    if (((((1 === t || 0 === t) && "auto" === Y && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !Y) && !D && !N && !A && !C && 1 === F) || (St && X) || !Rt)
                        return void (k || S.skewX || X
                            ? ((k *= E),
                              (b = S.skewX * E),
                              (P = 1e5),
                              (e = Math.cos(k) * R),
                              (n = Math.sin(k) * R),
                              (i = Math.sin(k - b) * -M),
                              (s = Math.cos(k - b) * M),
                              b && "simple" === S.skewType && ((v = Math.tan(b - S.skewY * E)), (v = Math.sqrt(1 + v * v)), (i *= v), (s *= v), S.skewY && ((v = Math.tan(S.skewY * E)), (v = Math.sqrt(1 + v * v)), (e *= v), (n *= v))),
                              X &&
                                  ((L += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset),
                                  (z += S.yOrigin - (S.xOrigin * n + S.yOrigin * s) + S.yOffset),
                                  St && (S.xPercent || S.yPercent) && ((_ = this.t.getBBox()), (L += 0.01 * S.xPercent * _.width), (z += 0.01 * S.yPercent * _.height)),
                                  (_ = 1e-6),
                                  _ > L && L > -_ && (L = 0),
                                  _ > z && z > -_ && (z = 0)),
                              (x = ((e * P) | 0) / P + "," + ((n * P) | 0) / P + "," + ((i * P) | 0) / P + "," + ((s * P) | 0) / P + "," + L + "," + z + ")"),
                              X && St ? this.t.setAttribute("transform", "matrix(" + x) : (O[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x))
                            : (O[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + M + "," + L + "," + z + ")"));
                    if ((p && ((_ = 1e-4), _ > R && R > -_ && (R = F = 2e-5), _ > M && M > -_ && (M = F = 2e-5), !N || S.z || S.rotationX || S.rotationY || (N = 0)), k || S.skewX))
                        (k *= E),
                            (m = e = Math.cos(k)),
                            (g = n = Math.sin(k)),
                            S.skewX &&
                                ((k -= S.skewX * E),
                                (m = Math.cos(k)),
                                (g = Math.sin(k)),
                                "simple" === S.skewType && ((v = Math.tan((S.skewX - S.skewY) * E)), (v = Math.sqrt(1 + v * v)), (m *= v), (g *= v), S.skewY && ((v = Math.tan(S.skewY * E)), (v = Math.sqrt(1 + v * v)), (e *= v), (n *= v)))),
                            (i = -g),
                            (s = m);
                    else {
                        if (!(A || C || 1 !== F || N || X))
                            return void (O[kt] =
                                (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") +
                                L +
                                "px," +
                                z +
                                "px," +
                                D +
                                "px)" +
                                (1 !== R || 1 !== M ? " scale(" + R + "," + M + ")" : ""));
                        (e = s = 1), (i = n = 0);
                    }
                    (h = 1),
                        (r = o = a = l = u = f = 0),
                        (c = N ? -1 / N : 0),
                        (d = S.zOrigin),
                        (_ = 1e-6),
                        (w = ","),
                        (T = "0"),
                        (k = A * E),
                        k && ((m = Math.cos(k)), (g = Math.sin(k)), (a = -g), (u = c * -g), (r = e * g), (o = n * g), (h = m), (c *= m), (e *= m), (n *= m)),
                        (k = C * E),
                        k && ((m = Math.cos(k)), (g = Math.sin(k)), (v = i * m + r * g), (y = s * m + o * g), (l = h * g), (f = c * g), (r = i * -g + r * m), (o = s * -g + o * m), (h *= m), (c *= m), (i = v), (s = y)),
                        1 !== F && ((r *= F), (o *= F), (h *= F), (c *= F)),
                        1 !== M && ((i *= M), (s *= M), (l *= M), (f *= M)),
                        1 !== R && ((e *= R), (n *= R), (a *= R), (u *= R)),
                        (d || X) &&
                            (d && ((L += r * -d), (z += o * -d), (D += h * -d + d)),
                            X && ((L += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset), (z += S.yOrigin - (S.xOrigin * n + S.yOrigin * s) + S.yOffset)),
                            _ > L && L > -_ && (L = T),
                            _ > z && z > -_ && (z = T),
                            _ > D && D > -_ && (D = 0)),
                        (x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d("),
                        (x += (_ > e && e > -_ ? T : e) + w + (_ > n && n > -_ ? T : n) + w + (_ > a && a > -_ ? T : a)),
                        (x += w + (_ > u && u > -_ ? T : u) + w + (_ > i && i > -_ ? T : i) + w + (_ > s && s > -_ ? T : s)),
                        C || A || 1 !== F
                            ? ((x += w + (_ > l && l > -_ ? T : l) + w + (_ > f && f > -_ ? T : f) + w + (_ > r && r > -_ ? T : r)), (x += w + (_ > o && o > -_ ? T : o) + w + (_ > h && h > -_ ? T : h) + w + (_ > c && c > -_ ? T : c) + w))
                            : (x += ",0,0,0,0,1,0,"),
                        (x += L + w + z + w + D + w + (N ? 1 + -D / N : 1) + ")"),
                        (O[kt] = x);
                });
            (h = Mt.prototype),
                (h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0),
                (h.scaleX = h.scaleY = h.scaleZ = 1),
                bt(
                    "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                    {
                        parser: function (t, e, i, r, s, a, l) {
                            if (r._lastParsedTransform === l) return s;
                            r._lastParsedTransform = l;
                            var h;
                            "function" == typeof l[i] && ((h = l[i]), (l[i] = e));
                            var u,
                                f,
                                c,
                                p,
                                d,
                                _,
                                v,
                                y,
                                x,
                                w = t._gsTransform,
                                T = t.style,
                                b = 1e-6,
                                P = Ot.length,
                                S = l,
                                O = {},
                                k = "transformOrigin",
                                C = It(t, n, !0, S.parseTransform),
                                A = S.transform && ("function" == typeof S.transform ? S.transform(g, m) : S.transform);
                            if (((r._transform = C), A && "string" == typeof A && kt))
                                (f = I.style),
                                    (f[kt] = A),
                                    (f.display = "block"),
                                    (f.position = "absolute"),
                                    Y.body.appendChild(I),
                                    (u = It(I, null, !1)),
                                    C.svg &&
                                        ((_ = C.xOrigin),
                                        (v = C.yOrigin),
                                        (u.x -= C.xOffset),
                                        (u.y -= C.yOffset),
                                        (S.transformOrigin || S.svgOrigin) &&
                                            ((A = {}), Et(t, ot(S.transformOrigin), A, S.svgOrigin, S.smoothOrigin, !0), (_ = A.xOrigin), (v = A.yOrigin), (u.x -= A.xOffset - C.xOffset), (u.y -= A.yOffset - C.yOffset)),
                                        (_ || v) && ((y = jt(I, !0)), (u.x -= _ - (_ * y[0] + v * y[2])), (u.y -= v - (_ * y[1] + v * y[3])))),
                                    Y.body.removeChild(I),
                                    u.perspective || (u.perspective = C.perspective),
                                    null != S.xPercent && (u.xPercent = lt(S.xPercent, C.xPercent)),
                                    null != S.yPercent && (u.yPercent = lt(S.yPercent, C.yPercent));
                            else if ("object" == typeof S) {
                                if (
                                    ((u = {
                                        scaleX: lt(null != S.scaleX ? S.scaleX : S.scale, C.scaleX),
                                        scaleY: lt(null != S.scaleY ? S.scaleY : S.scale, C.scaleY),
                                        scaleZ: lt(S.scaleZ, C.scaleZ),
                                        x: lt(S.x, C.x),
                                        y: lt(S.y, C.y),
                                        z: lt(S.z, C.z),
                                        xPercent: lt(S.xPercent, C.xPercent),
                                        yPercent: lt(S.yPercent, C.yPercent),
                                        perspective: lt(S.transformPerspective, C.perspective),
                                    }),
                                    (d = S.directionalRotation),
                                    null != d)
                                )
                                    if ("object" == typeof d) for (f in d) S[f] = d[f];
                                    else S.rotation = d;
                                "string" == typeof S.x && -1 !== S.x.indexOf("%") && ((u.x = 0), (u.xPercent = lt(S.x, C.xPercent))),
                                    "string" == typeof S.y && -1 !== S.y.indexOf("%") && ((u.y = 0), (u.yPercent = lt(S.y, C.yPercent))),
                                    (u.rotation = ht("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : C.rotation - C.skewY, C.rotation - C.skewY, "rotation", O)),
                                    Rt &&
                                        ((u.rotationX = ht("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", O)),
                                        (u.rotationY = ht("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", O))),
                                    (u.skewX = ht(S.skewX, C.skewX - C.skewY)),
                                    (u.skewY = ht(S.skewY, C.skewY)) && ((u.skewX += u.skewY), (u.rotation += u.skewY));
                            }
                            for (
                                Rt && null != S.force3D && ((C.force3D = S.force3D), (p = !0)),
                                    C.skewType = S.skewType || C.skewType || o.defaultSkewType,
                                    c = C.force3D || C.z || C.rotationX || C.rotationY || u.z || u.rotationX || u.rotationY || u.perspective,
                                    c || null == S.scale || (u.scaleZ = 1);
                                --P > -1;

                            )
                                (x = Ot[P]),
                                    (A = u[x] - C[x]),
                                    (A > b || -b > A || null != S[x] || null != N[x]) && ((p = !0), (s = new vt(C, x, C[x], A, s)), x in O && (s.e = O[x]), (s.xs0 = 0), (s.plugin = a), r._overwriteProps.push(s.n));
                            return (
                                (A = S.transformOrigin),
                                C.svg &&
                                    (A || S.svgOrigin) &&
                                    ((_ = C.xOffset),
                                    (v = C.yOffset),
                                    Et(t, ot(A), u, S.svgOrigin, S.smoothOrigin),
                                    (s = yt(C, "xOrigin", (w ? C : u).xOrigin, u.xOrigin, s, k)),
                                    (s = yt(C, "yOrigin", (w ? C : u).yOrigin, u.yOrigin, s, k)),
                                    (_ !== C.xOffset || v !== C.yOffset) && ((s = yt(C, "xOffset", w ? _ : C.xOffset, C.xOffset, s, k)), (s = yt(C, "yOffset", w ? v : C.yOffset, C.yOffset, s, k))),
                                    (A = St ? null : "0px 0px")),
                                (A || (Rt && c && C.zOrigin)) &&
                                    (kt
                                        ? ((p = !0),
                                          (x = At),
                                          (A = (A || $(t, x, n, !1, "50% 50%")) + ""),
                                          (s = new vt(T, x, 0, 0, s, -1, k)),
                                          (s.b = T[x]),
                                          (s.plugin = a),
                                          Rt
                                              ? ((f = C.zOrigin),
                                                (A = A.split(" ")),
                                                (C.zOrigin = (A.length > 2 && (0 === f || "0px" !== A[2]) ? parseFloat(A[2]) : f) || 0),
                                                (s.xs0 = s.e = A[0] + " " + (A[1] || "50%") + " 0px"),
                                                (s = new vt(C, "zOrigin", 0, 0, s, -1, s.n)),
                                                (s.b = f),
                                                (s.xs0 = s.e = C.zOrigin))
                                              : (s.xs0 = s.e = A))
                                        : ot(A + "", C)),
                                p && (r._transformType = (C.svg && St) || (!c && 3 !== this._transformType) ? 2 : 3),
                                h && (l[i] = h),
                                s
                            );
                        },
                        prefix: !0,
                    }
                ),
                bt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                bt("borderRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, s, o, a) {
                        e = this.format(e);
                        var l,
                            h,
                            u,
                            f,
                            c,
                            p,
                            d,
                            _,
                            m,
                            g,
                            v,
                            y,
                            x,
                            w,
                            T,
                            b,
                            P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            S = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < P.length; h++)
                            this.p.indexOf("border") && (P[h] = H(P[h])),
                                (c = f = $(t, P[h], n, !1, "0px")),
                                -1 !== c.indexOf(" ") && ((f = c.split(" ")), (c = f[0]), (f = f[1])),
                                (p = u = l[h]),
                                (d = parseFloat(c)),
                                (y = c.substr((d + "").length)),
                                (x = "=" === p.charAt(1)),
                                x ? ((_ = parseInt(p.charAt(0) + "1", 10)), (p = p.substr(2)), (_ *= parseFloat(p)), (v = p.substr((_ + "").length - (0 > _ ? 1 : 0)) || "")) : ((_ = parseFloat(p)), (v = p.substr((_ + "").length))),
                                "" === v && (v = r[i] || y),
                                v !== y &&
                                    ((w = J(t, "borderLeft", d, y)),
                                    (T = J(t, "borderTop", d, y)),
                                    "%" === v ? ((c = (w / m) * 100 + "%"), (f = (T / g) * 100 + "%")) : "em" === v ? ((b = J(t, "borderLeft", 1, "em")), (c = w / b + "em"), (f = T / b + "em")) : ((c = w + "px"), (f = T + "px")),
                                    x && ((p = parseFloat(c) + _ + v), (u = parseFloat(f) + _ + v))),
                                (o = xt(S, P[h], c + " " + f, p + " " + u, !1, "0px", o));
                        return o;
                    },
                    prefix: !0,
                    formatter: _t("0px 0px 0px 0px", !1, !0),
                }),
                bt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, r, s, o) {
                        return xt(t.style, i, this.format($(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", s);
                    },
                    prefix: !0,
                    formatter: _t("0px 0px", !1, !0),
                }),
                bt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (t, e, i, r, s, o) {
                        var a,
                            l,
                            h,
                            u,
                            f,
                            c,
                            p = "background-position",
                            d = n || K(t, null),
                            m = this.format((d ? (_ ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p)) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if ((-1 !== m.indexOf("%")) != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && ((c = $(t, "backgroundImage").replace(A, "")), c && "none" !== c)) {
                            for (a = m.split(" "), l = g.split(" "), B.setAttribute("src", c), h = 2; --h > -1; )
                                (m = a[h]),
                                    (u = -1 !== m.indexOf("%")),
                                    u !== (-1 !== l[h].indexOf("%")) && ((f = 0 === h ? t.offsetWidth - B.width : t.offsetHeight - B.height), (a[h] = u ? (parseFloat(m) / 100) * f + "px" : (parseFloat(m) / f) * 100 + "%"));
                            m = a.join(" ");
                        }
                        return this.parseComplex(t.style, m, g, s, o);
                    },
                    formatter: ot,
                }),
                bt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function (t) {
                        return (t += ""), ot(-1 === t.indexOf(" ") ? t + " " + t : t);
                    },
                }),
                bt("perspective", { defaultValue: "0px", prefix: !0 }),
                bt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                bt("transformStyle", { prefix: !0 }),
                bt("backfaceVisibility", { prefix: !0 }),
                bt("userSelect", { prefix: !0 }),
                bt("margin", { parser: mt("marginTop,marginRight,marginBottom,marginLeft") }),
                bt("padding", { parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                bt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (t, e, i, r, s, o) {
                        var a, l, h;
                        return (
                            9 > _
                                ? ((l = t.currentStyle), (h = 8 > _ ? " " : ","), (a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")"), (e = this.format(e).split(",").join(h)))
                                : ((a = this.format($(t, this.p, n, !1, this.dflt))), (e = this.format(e))),
                            this.parseComplex(t.style, a, e, s, o)
                        );
                    },
                }),
                bt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                bt("autoRound,strictUnits", {
                    parser: function (t, e, i, r, n) {
                        return n;
                    },
                }),
                bt("border", {
                    defaultValue: "0px solid #000",
                    parser: function (t, e, i, r, s, o) {
                        var a = $(t, "borderTopWidth", n, !1, "0px"),
                            l = this.format(e).split(" "),
                            h = l[0].replace(T, "");
                        return (
                            "px" !== h && (a = parseFloat(a) / J(t, "borderTopWidth", 1, h) + h),
                            this.parseComplex(t.style, this.format(a + " " + $(t, "borderTopStyle", n, !1, "solid") + " " + $(t, "borderTopColor", n, !1, "#000")), l.join(" "), s, o)
                        );
                    },
                    color: !0,
                    formatter: function (t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0];
                    },
                }),
                bt("borderWidth", {
                    parser: mt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"),
                }),
                bt("float,cssFloat,styleFloat", {
                    parser: function (t, e, i, r, n, s) {
                        var o = t.style,
                            a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new vt(o, a, 0, 0, n, -1, i, !1, 0, o[a], e);
                    },
                });
            var qt = function (t) {
                var e,
                    i = this.t,
                    r = i.filter || $(this.data, "filter") || "",
                    n = (this.s + this.c * t) | 0;
                100 === n && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), (e = !$(this.data, "filter"))) : ((i.filter = r.replace(S, "")), (e = !0))),
                    e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"), -1 === r.indexOf("pacity") ? (0 === n && this.xn1) || (i.filter = r + " alpha(opacity=" + n + ")") : (i.filter = r.replace(b, "opacity=" + n)));
            };
            bt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (t, e, i, r, s, o) {
                    var a = parseFloat($(t, "opacity", n, !1, "1")),
                        l = t.style,
                        h = "autoAlpha" === i;
                    return (
                        "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                        h && 1 === a && "hidden" === $(t, "visibility", n) && 0 !== e && (a = 0),
                        U
                            ? (s = new vt(l, "opacity", a, e - a, s))
                            : ((s = new vt(l, "opacity", 100 * a, 100 * (e - a), s)),
                              (s.xn1 = h ? 1 : 0),
                              (l.zoom = 1),
                              (s.type = 2),
                              (s.b = "alpha(opacity=" + s.s + ")"),
                              (s.e = "alpha(opacity=" + (s.s + s.c) + ")"),
                              (s.data = t),
                              (s.plugin = o),
                              (s.setRatio = qt)),
                        h && ((s = new vt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")), (s.xs0 = "inherit"), r._overwriteProps.push(s.n), r._overwriteProps.push(i)),
                        s
                    );
                },
            });
            var Vt = function (t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e));
                },
                Ut = function (t) {
                    if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e; ) e.v ? (i[e.p] = e.v) : Vt(i, e.p), (e = e._next);
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                };
            bt("className", {
                parser: function (t, e, r, s, o, a, l) {
                    var h,
                        u,
                        f,
                        c,
                        p,
                        d = t.getAttribute("class") || "",
                        _ = t.style.cssText;
                    if (((o = s._classNamePT = new vt(t, r, 0, 0, o, 2)), (o.setRatio = Ut), (o.pr = -11), (i = !0), (o.b = d), (u = et(t, n)), (f = t._gsClassPT))) {
                        for (c = {}, p = f.data; p; ) (c[p.p] = 1), (p = p._next);
                        f.setRatio(1);
                    }
                    return (
                        (t._gsClassPT = o),
                        (o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                        t.setAttribute("class", o.e),
                        (h = it(t, u, et(t), l, c)),
                        t.setAttribute("class", d),
                        (o.data = h.firstMPT),
                        (t.style.cssText = _),
                        (o = o.xfirst = s.parse(t, h.difs, o, a))
                    );
                },
            });
            var Wt = function (t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e,
                        i,
                        r,
                        n,
                        s,
                        o = this.t.style,
                        a = l.transform.parse;
                    if ("all" === this.e) (o.cssText = ""), (n = !0);
                    else for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1; ) (i = e[r]), l[i] && (l[i].parse === a ? (n = !0) : (i = "transformOrigin" === i ? At : l[i].p)), Vt(o, i);
                    n && (Vt(o, kt), (s = this.t._gsTransform), s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
                }
            };
            for (
                bt("clearProps", {
                    parser: function (t, e, r, n, s) {
                        return (s = new vt(t, r, 0, 0, s, 2)), (s.setRatio = Wt), (s.e = e), (s.pr = -10), (s.data = n._tween), (i = !0), s;
                    },
                }),
                    h = "bezier,throwProps,physicsProps,physics2D".split(","),
                    wt = h.length;
                wt--;

            )
                Pt(h[wt]);
            (h = o.prototype),
                (h._firstPT = h._lastParsedTransform = h._transform = null),
                (h._onInitTween = function (t, e, a, h) {
                    if (!t.nodeType) return !1;
                    (this._target = m = t), (this._tween = a), (this._vars = e), (g = h), (u = e.autoRound), (i = !1), (r = e.suffixMap || o.suffixMap), (n = K(t, "")), (s = this._overwriteProps);
                    var p,
                        _,
                        v,
                        y,
                        x,
                        w,
                        T,
                        b,
                        S,
                        O = t.style;
                    if (
                        (f && "" === O.zIndex && ((p = $(t, "zIndex", n)), ("auto" === p || "" === p) && this._addLazySet(O, "zIndex", 0)),
                        "string" == typeof e && ((y = O.cssText), (p = et(t, n)), (O.cssText = y + ";" + e), (p = it(t, p, et(t)).difs), !U && P.test(e) && (p.opacity = parseFloat(RegExp.$1)), (e = p), (O.cssText = y)),
                        e.className ? (this._firstPT = _ = l.className.parse(t, e.className, "className", this, null, null, e)) : (this._firstPT = _ = this.parse(t, e, null)),
                        this._transformType)
                    ) {
                        for (
                            S = 3 === this._transformType,
                                kt
                                    ? c &&
                                      ((f = !0),
                                      "" === O.zIndex && ((T = $(t, "zIndex", n)), ("auto" === T || "" === T) && this._addLazySet(O, "zIndex", 0)),
                                      d && this._addLazySet(O, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden")))
                                    : (O.zoom = 1),
                                v = _;
                            v && v._next;

                        )
                            v = v._next;
                        (b = new vt(t, "transform", 0, 0, null, 2)), this._linkCSSP(b, null, v), (b.setRatio = kt ? Bt : $t), (b.data = this._transform || It(t, n, !0)), (b.tween = a), (b.pr = -1), s.pop();
                    }
                    if (i) {
                        for (; _; ) {
                            for (w = _._next, v = y; v && v.pr > _.pr; ) v = v._next;
                            (_._prev = v ? v._prev : x) ? (_._prev._next = _) : (y = _), (_._next = v) ? (v._prev = _) : (x = _), (_ = w);
                        }
                        this._firstPT = y;
                    }
                    return !0;
                }),
                (h.parse = function (t, e, i, s) {
                    var o,
                        a,
                        h,
                        f,
                        c,
                        p,
                        d,
                        _,
                        v,
                        y,
                        x = t.style;
                    for (o in e)
                        (p = e[o]),
                            "function" == typeof p && (p = p(g, m)),
                            (a = l[o]),
                            a
                                ? (i = a.parse(t, p, o, this, i, s, e))
                                : ((c = $(t, o, n) + ""),
                                  (v = "string" == typeof p),
                                  "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || (v && O.test(p))
                                      ? (v || ((p = ct(p)), (p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")")), (i = xt(x, o, c, p, !0, "transparent", i, 0, s)))
                                      : v && D.test(p)
                                      ? (i = xt(x, o, c, p, !0, null, i, 0, s))
                                      : ((h = parseFloat(c)),
                                        (d = h || 0 === h ? c.substr((h + "").length) : ""),
                                        ("" === c || "auto" === c) &&
                                            ("width" === o || "height" === o ? ((h = st(t, o, n)), (d = "px")) : "left" === o || "top" === o ? ((h = tt(t, o, n)), (d = "px")) : ((h = "opacity" !== o ? 0 : 1), (d = ""))),
                                        (y = v && "=" === p.charAt(1)),
                                        y ? ((f = parseInt(p.charAt(0) + "1", 10)), (p = p.substr(2)), (f *= parseFloat(p)), (_ = p.replace(T, ""))) : ((f = parseFloat(p)), (_ = v ? p.replace(T, "") : "")),
                                        "" === _ && (_ = o in r ? r[o] : d),
                                        (p = f || 0 === f ? (y ? f + h : f) + _ : e[o]),
                                        d !== _ &&
                                            "" !== _ &&
                                            (f || 0 === f) &&
                                            h &&
                                            ((h = J(t, o, h, d)),
                                            "%" === _
                                                ? ((h /= J(t, o, 100, "%") / 100), e.strictUnits !== !0 && (c = h + "%"))
                                                : "em" === _ || "rem" === _ || "vw" === _ || "vh" === _
                                                ? (h /= J(t, o, 1, _))
                                                : "px" !== _ && ((f = J(t, o, f, _)), (_ = "px")),
                                            y && (f || 0 === f) && (p = f + h + _)),
                                        y && (f += h),
                                        (!h && 0 !== h) || (!f && 0 !== f)
                                            ? void 0 !== x[o] && (p || (p + "" != "NaN" && null != p))
                                                ? ((i = new vt(x, o, f || h || 0, 0, i, -1, o, !1, 0, c, p)), (i.xs0 = "none" !== p || ("display" !== o && -1 === o.indexOf("Style")) ? p : c))
                                                : G("invalid " + o + " tween value: " + e[o])
                                            : ((i = new vt(x, o, h, f - h, i, 0, o, u !== !1 && ("px" === _ || "zIndex" === o), 0, c, p)), (i.xs0 = _)))),
                            s && i && !i.plugin && (i.plugin = s);
                    return i;
                }),
                (h.setRatio = function (t) {
                    var e,
                        i,
                        r,
                        n = this._firstPT,
                        s = 1e-6;
                    if (1 !== t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                        if (t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || this._tween._rawPrevTime === -1e-6)
                            for (; n; ) {
                                if (((e = n.c * t + n.s), n.r ? (e = Math.round(e)) : s > e && e > -s && (e = 0), n.type))
                                    if (1 === n.type)
                                        if (((r = n.l), 2 === r)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                        else if (3 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                        else if (4 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                        else if (5 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                        else {
                                            for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                            n.t[n.p] = i;
                                        }
                                    else -1 === n.type ? (n.t[n.p] = n.xs0) : n.setRatio && n.setRatio(t);
                                else n.t[n.p] = e + n.xs0;
                                n = n._next;
                            }
                        else for (; n; ) 2 !== n.type ? (n.t[n.p] = n.b) : n.setRatio(t), (n = n._next);
                    else
                        for (; n; ) {
                            if (2 !== n.type)
                                if (n.r && -1 !== n.type)
                                    if (((e = Math.round(n.s + n.c)), n.type)) {
                                        if (1 === n.type) {
                                            for (r = n.l, i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                            n.t[n.p] = i;
                                        }
                                    } else n.t[n.p] = e + n.xs0;
                                else n.t[n.p] = n.e;
                            else n.setRatio(t);
                            n = n._next;
                        }
                }),
                (h._enableTransforms = function (t) {
                    (this._transform = this._transform || It(this._target, n, !0)), (this._transformType = (this._transform.svg && St) || (!t && 3 !== this._transformType) ? 2 : 3);
                });
            var Gt = function (t) {
                (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
            };
            (h._addLazySet = function (t, e, i) {
                var r = (this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2));
                (r.e = i), (r.setRatio = Gt), (r.data = this);
            }),
                (h._linkCSSP = function (t, e, i, r) {
                    return (
                        t &&
                            (e && (e._prev = t),
                            t._next && (t._next._prev = t._prev),
                            t._prev ? (t._prev._next = t._next) : this._firstPT === t && ((this._firstPT = t._next), (r = !0)),
                            i ? (i._next = t) : r || null !== this._firstPT || (this._firstPT = t),
                            (t._next = e),
                            (t._prev = i)),
                        t
                    );
                }),
                (h._mod = function (t) {
                    for (var e = this._firstPT; e; ) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), (e = e._next);
                }),
                (h._kill = function (e) {
                    var i,
                        r,
                        n,
                        s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (r in e) s[r] = e[r];
                        (s.opacity = 1), s.autoAlpha && (s.visibility = 1);
                    }
                    for (
                        e.className &&
                            (i = this._classNamePT) &&
                            ((n = i.xfirst),
                            n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next),
                            i._next && this._linkCSSP(i._next, i._next._next, n._prev),
                            (this._classNamePT = null)),
                            i = this._firstPT;
                        i;

                    )
                        i.plugin && i.plugin !== r && i.plugin._kill && (i.plugin._kill(e), (r = i.plugin)), (i = i._next);
                    return t.prototype._kill.call(this, s);
                });
            var Qt = function (t, e, i) {
                var r, n, s, o;
                if (t.slice) for (n = t.length; --n > -1; ) Qt(t[n], e, i);
                else for (r = t.childNodes, n = r.length; --n > -1; ) (s = r[n]), (o = s.type), s.style && (e.push(et(s)), i && i.push(s)), (1 !== o && 9 !== o && 11 !== o) || !s.childNodes.length || Qt(s, e, i);
            };
            return (
                (o.cascadeTo = function (t, i, r) {
                    var n,
                        s,
                        o,
                        a,
                        l = e.to(t, i, r),
                        h = [l],
                        u = [],
                        f = [],
                        c = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, Qt(t, u, c), l.render(i, !0, !0), Qt(t, f), l.render(0, !0, !0), l._enabled(!0), n = c.length; --n > -1; )
                        if (((s = it(c[n], u[n], f[n])), s.firstMPT)) {
                            s = s.difs;
                            for (o in r) p[o] && (s[o] = r[o]);
                            a = {};
                            for (o in s) a[o] = u[n][o];
                            h.push(e.fromTo(c[n], i, a, s));
                        }
                    return h;
                }),
                t.activate([o]),
                o
            );
        },
        !0
    );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (t) {
        "use strict";
        var e = function () {
            return (_gsScope.GreenSockGlobals || _gsScope)[t];
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), (module.exports = e()));
    })("CSSPlugin");
/*!
 * VERSION: 0.6.4
 * DATE: 2016-07-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine(
        "plugins.CSSRulePlugin",
        ["plugins.TweenPlugin", "TweenLite", "plugins.CSSPlugin"],
        function (t, e, i) {
            var r = function () {
                    t.call(this, "cssRule"), (this._overwriteProps.length = 0);
                },
                n = window.document,
                s = i.prototype.setRatio,
                o = (r.prototype = new i());
            return (
                (o._propName = "cssRule"),
                (o.constructor = r),
                (r.version = "0.6.4"),
                (r.API = 2),
                (r.getRule = function (t) {
                    var e,
                        i,
                        r,
                        s,
                        o = n.all ? "rules" : "cssRules",
                        a = n.styleSheets,
                        l = a.length,
                        h = ":" === t.charAt(0);
                    for (t = (h ? "" : ",") + t.toLowerCase() + ",", h && (s = []); --l > -1; ) {
                        try {
                            if (((i = a[l][o]), !i)) continue;
                            e = i.length;
                        } catch (u) {
                            console.log(u);
                            continue;
                        }
                        for (; --e > -1; )
                            if (((r = i[e]), r.selectorText && -1 !== ("," + r.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(t))) {
                                if (!h) return r.style;
                                s.push(r.style);
                            }
                    }
                    return s;
                }),
                (o._onInitTween = function (t, e, r) {
                    if (void 0 === t.cssText) return !1;
                    var s = (t._gsProxy = t._gsProxy || n.createElement("div"));
                    return (this._ss = t), (this._proxy = s.style), (s.style.cssText = t.cssText), i.prototype._onInitTween.call(this, s, e, r), !0;
                }),
                (o.setRatio = function (t) {
                    s.call(this, t), (this._ss.cssText = this._proxy.cssText);
                }),
                t.activate([r]),
                r
            );
        },
        !0
    );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (t) {
        "use strict";
        var e = function () {
            return (_gsScope.GreenSockGlobals || _gsScope)[t];
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), (module.exports = e()));
    })("CSSRulePlugin");
/*!
 * VERSION: 1.8.0
 * DATE: 2016-07-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t = document.documentElement,
        e = window,
        i = function (i, r) {
            var n = "x" === r ? "Width" : "Height",
                s = "scroll" + n,
                o = "client" + n,
                a = document.body;
            return i === e || i === t || i === a ? Math.max(t[s], a[s]) - (e["inner" + n] || t[o] || a[o]) : i[s] - i["offset" + n];
        },
        r = function (t) {
            return "string" == typeof t && (t = TweenLite.selector(t)), t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === e || (t.nodeType && t.style) ? t : null;
        },
        n = function (i, r) {
            var n = "scroll" + ("x" === r ? "Left" : "Top");
            return (
                i === e && (null != i.pageXOffset ? (n = "page" + r.toUpperCase() + "Offset") : (i = null != t[n] ? t : document.body)),
                function () {
                    return i[n];
                }
            );
        },
        s = function (i, s) {
            var o = r(i).getBoundingClientRect(),
                a = !s || s === e || s === document.body,
                l = (a ? t : s).getBoundingClientRect(),
                h = { x: o.left - l.left, y: o.top - l.top };
            return !a && s && ((h.x += n(s, "x")()), (h.y += n(s, "y")())), h;
        },
        o = function (t, e, r) {
            var n = typeof t;
            return "number" === n || ("string" === n && "=" === t.charAt(1)) ? t : "max" === t ? i(e, r) : Math.min(i(e, r), s(t, e)[r]);
        },
        a = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.8.0",
            init: function (t, i, r) {
                return (
                    (this._wdw = t === e),
                    (this._target = t),
                    (this._tween = r),
                    "object" != typeof i ? ((i = { y: i }), "string" == typeof i.y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y)) : i.nodeType && (i = { y: i, x: i }),
                    (this.vars = i),
                    (this._autoKill = i.autoKill !== !1),
                    (this.getX = n(t, "x")),
                    (this.getY = n(t, "y")),
                    (this.x = this.xPrev = this.getX()),
                    (this.y = this.yPrev = this.getY()),
                    null != i.x ? (this._addTween(this, "x", this.x, o(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : (this.skipX = !0),
                    null != i.y ? (this._addTween(this, "y", this.y, o(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : (this.skipY = !0),
                    !0
                );
            },
            set: function (t) {
                this._super.setRatio.call(this, t);
                var r = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    n = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    s = n - this.yPrev,
                    o = r - this.xPrev,
                    l = a.autoKillThreshold;
                this.x < 0 && (this.x = 0),
                    this.y < 0 && (this.y = 0),
                    this._autoKill &&
                        (!this.skipX && (o > l || -l > o) && r < i(this._target, "x") && (this.skipX = !0),
                        !this.skipY && (s > l || -l > s) && n < i(this._target, "y") && (this.skipY = !0),
                        this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
                    this._wdw ? e.scrollTo(this.skipX ? r : this.x, this.skipY ? n : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)),
                    (this.xPrev = this.x),
                    (this.yPrev = this.y);
            },
        }),
        l = a.prototype;
    (a.max = i),
        (a.getOffset = s),
        (a.autoKillThreshold = 7),
        (l._kill = function (t) {
            return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t);
        });
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (t) {
        "use strict";
        var e = function () {
            return (_gsScope.GreenSockGlobals || _gsScope)[t];
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), (module.exports = e()));
    })("ScrollToPlugin")
    /*!
     * VERSION: 0.1.12
     * DATE: 2015-08-11
     * UPDATES AND DOCS AT: http://greensock.com/jquery-gsap-plugin/
     *
     * Requires TweenLite version 1.8.0 or higher and CSSPlugin.
     *
     * @license Copyright (c) 2013-2016, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */,
    !(function (t) {
        "use strict";
        var e,
            i,
            r,
            n = t.fn.animate,
            s = t.fn.stop,
            o = !0,
            a = function (t) {
                var e,
                    i = {};
                for (e in t) i[e] = t[e];
                return i;
            },
            l = { overwrite: 1, delay: 1, useFrames: 1, runBackwards: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, autoCSS: 1 },
            h = ",scrollTop,scrollLeft,show,hide,toggle,",
            u = h,
            f = function (t, e) {
                for (var i in l) l[i] && void 0 !== t[i] && (e[i] = t[i]);
            },
            c = function (t) {
                return function (e) {
                    return t.getRatio(e);
                };
            },
            p = {},
            d = function () {
                var n,
                    s,
                    o,
                    a = window.GreenSockGlobals || window;
                if (
                    ((e = a.TweenMax || a.TweenLite),
                    e && ((n = (e.version + ".0.0").split(".")), (s = !(Number(n[0]) > 0 && Number(n[1]) > 7)), (a = a.com.greensock), (i = a.plugins.CSSPlugin), (p = a.easing.Ease.map || {})),
                    !e || !i || s)
                )
                    return (
                        (e = null),
                        void (
                            !r &&
                            window.console &&
                            (window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)." + (s ? " Version " + n.join(".") + " is too old." : "")), (r = !0))
                        )
                    );
                if (t.easing) {
                    for (o in p) t.easing[o] = c(p[o]);
                    d = !1;
                }
            };
        (t.fn.animate = function (r, s, l, h) {
            if (((r = r || {}), d && (d(), !e || !i))) return n.call(this, r, s, l, h);
            if (!o || r.skipGSAP === !0 || ("object" == typeof s && "function" == typeof s.step)) return n.call(this, r, s, l, h);
            var c,
                _,
                m,
                g,
                v = t.speed(s, l, h),
                y = { ease: p[v.easing] || (v.easing === !1 ? p.linear : p.swing) },
                x = this,
                w = "object" == typeof s ? s.specialEasing : null;
            for (_ in r) {
                if (((c = r[_]), c instanceof Array && p[c[1]] && ((w = w || {}), (w[_] = c[1]), (c = c[0])), "show" === c || "hide" === c || "toggle" === c || (-1 !== u.indexOf(_) && -1 !== u.indexOf("," + _ + ","))))
                    return n.call(this, r, s, l, h);
                y[-1 === _.indexOf("-") ? _ : t.camelCase(_)] = c;
            }
            if (w) {
                (y = a(y)), (g = []);
                for (_ in w) (c = g[g.length] = {}), f(y, c), (c.ease = p[w[_]] || y.ease), -1 !== _.indexOf("-") && (_ = t.camelCase(_)), (c[_] = y[_]), delete y[_];
                0 === g.length && (g = null);
            }
            return (
                (m = function (i) {
                    var r,
                        n = a(y);
                    if (g) for (r = g.length; --r > -1; ) e.to(this, t.fx.off ? 0 : v.duration / 1e3, g[r]);
                    (n.onComplete = function () {
                        i ? i() : v.old && t(this).each(v.old);
                    }),
                        e.to(this, t.fx.off ? 0 : v.duration / 1e3, n);
                }),
                v.queue !== !1
                    ? (x.queue(v.queue, m),
                      "function" == typeof v.old &&
                          t(x[x.length - 1]).queue(v.queue, function (t) {
                              v.old.call(x), t();
                          }))
                    : m.call(x),
                x
            );
        }),
            (t.fn.stop = function (t, i) {
                if ((s.call(this, t, i), e)) {
                    if (i) for (var r, n = e.getTweensOf(this), o = n.length; --o > -1; ) (r = n[o].totalTime() / n[o].totalDuration()), r > 0 && 1 > r && n[o].seek(n[o].totalDuration());
                    e.killTweensOf(this);
                }
                return this;
            }),
            (t.gsap = {
                enabled: function (t) {
                    o = t;
                },
                version: "0.1.12",
                legacyProps: function (t) {
                    u = h + t + ",";
                },
            });
    })(jQuery),
    !(function (t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? (module.exports = e()) : (t.ScrollMagic = e());
    })(this, function () {
        "use strict";
        var t = function () {};
        (t.version = "2.0.5"), window.addEventListener("mousewheel", function () {});
        var e = "data-scrollmagic-pin-spacer";
        t.Controller = function (r) {
            var s,
                o,
                a = "ScrollMagic.Controller",
                l = "FORWARD",
                h = "REVERSE",
                u = "PAUSED",
                f = i.defaults,
                c = this,
                p = n.extend({}, f, r),
                d = [],
                _ = !1,
                m = 0,
                g = u,
                v = !0,
                y = 0,
                x = !0,
                w = function () {
                    for (var t in p) f.hasOwnProperty(t) || delete p[t];
                    if (((p.container = n.get.elements(p.container)[0]), !p.container)) throw a + " init failed.";
                    (v = p.container === window || p.container === document.body || !document.body.contains(p.container)),
                        v && (p.container = window),
                        (y = P()),
                        p.container.addEventListener("resize", C),
                        p.container.addEventListener("scroll", C),
                        (p.refreshInterval = parseInt(p.refreshInterval) || f.refreshInterval),
                        T();
                },
                T = function () {
                    p.refreshInterval > 0 && (o = window.setTimeout(A, p.refreshInterval));
                },
                b = function () {
                    return p.vertical ? n.get.scrollTop(p.container) : n.get.scrollLeft(p.container);
                },
                P = function () {
                    return p.vertical ? n.get.height(p.container) : n.get.width(p.container);
                },
                S = (this._setScrollPos = function (t) {
                    p.vertical ? (v ? window.scrollTo(n.get.scrollLeft(), t) : (p.container.scrollTop = t)) : v ? window.scrollTo(t, n.get.scrollTop()) : (p.container.scrollLeft = t);
                }),
                O = function () {
                    if (x && _) {
                        var t = n.type.Array(_) ? _ : d.slice(0);
                        _ = !1;
                        var e = m;
                        m = c.scrollPos();
                        var i = m - e;
                        0 !== i && (g = i > 0 ? l : h),
                            g === h && t.reverse(),
                            t.forEach(function (t) {
                                t.update(!0);
                            });
                    }
                },
                k = function () {
                    s = n.rAF(O);
                },
                C = function (t) {
                    "resize" == t.type && ((y = P()), (g = u)), _ !== !0 && ((_ = !0), k());
                },
                A = function () {
                    if (!v && y != P()) {
                        var t;
                        try {
                            t = new Event("resize", { bubbles: !1, cancelable: !1 });
                        } catch (e) {
                            (t = document.createEvent("Event")), t.initEvent("resize", !1, !1);
                        }
                        p.container.dispatchEvent(t);
                    }
                    d.forEach(function (t) {
                        t.refresh();
                    }),
                        T();
                };
            this._options = p;
            var R = function (t) {
                if (t.length <= 1) return t;
                var e = t.slice(0);
                return (
                    e.sort(function (t, e) {
                        return t.scrollOffset() > e.scrollOffset() ? 1 : -1;
                    }),
                    e
                );
            };
            return (
                (this.addScene = function (e) {
                    if (n.type.Array(e))
                        e.forEach(function (t) {
                            c.addScene(t);
                        });
                    else if (e instanceof t.Scene)
                        if (e.controller() !== c) e.addTo(c);
                        else if (d.indexOf(e) < 0) {
                            d.push(e),
                                (d = R(d)),
                                e.on("shift.controller_sort", function () {
                                    d = R(d);
                                });
                            for (var i in p.globalSceneOptions) e[i] && e[i].call(e, p.globalSceneOptions[i]);
                        }
                    return c;
                }),
                (this.removeScene = function (t) {
                    if (n.type.Array(t))
                        t.forEach(function (t) {
                            c.removeScene(t);
                        });
                    else {
                        var e = d.indexOf(t);
                        e > -1 && (t.off("shift.controller_sort"), d.splice(e, 1), t.remove());
                    }
                    return c;
                }),
                (this.updateScene = function (e, i) {
                    return (
                        n.type.Array(e)
                            ? e.forEach(function (t) {
                                  c.updateScene(t, i);
                              })
                            : i
                            ? e.update(!0)
                            : _ !== !0 && e instanceof t.Scene && ((_ = _ || []), -1 == _.indexOf(e) && _.push(e), (_ = R(_)), k()),
                        c
                    );
                }),
                (this.update = function (t) {
                    return C({ type: "resize" }), t && O(), c;
                }),
                (this.scrollTo = function (i, r) {
                    if (n.type.Number(i)) S.call(p.container, i, r);
                    else if (i instanceof t.Scene) i.controller() === c && c.scrollTo(i.scrollOffset(), r);
                    else if (n.type.Function(i)) S = i;
                    else {
                        var s = n.get.elements(i)[0];
                        if (s) {
                            for (; s.parentNode.hasAttribute(e); ) s = s.parentNode;
                            var o = p.vertical ? "top" : "left",
                                a = n.get.offset(p.container),
                                l = n.get.offset(s);
                            v || (a[o] -= c.scrollPos()), c.scrollTo(l[o] - a[o], r);
                        }
                    }
                    return c;
                }),
                (this.scrollPos = function (t) {
                    return arguments.length ? (n.type.Function(t) && (b = t), c) : b.call(c);
                }),
                (this.info = function (t) {
                    var e = { size: y, vertical: p.vertical, scrollPos: m, scrollDirection: g, container: p.container, isDocument: v };
                    return arguments.length ? (void 0 !== e[t] ? e[t] : void 0) : e;
                }),
                (this.loglevel = function () {
                    return c;
                }),
                (this.enabled = function (t) {
                    return arguments.length ? (x != t && ((x = !!t), c.updateScene(d, !0)), c) : x;
                }),
                (this.destroy = function (t) {
                    window.clearTimeout(o);
                    for (var e = d.length; e--; ) d[e].destroy(t);
                    return p.container.removeEventListener("resize", C), p.container.removeEventListener("scroll", C), n.cAF(s), null;
                }),
                w(),
                c
            );
        };
        var i = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };
        (t.Controller.addOption = function (t, e) {
            i.defaults[t] = e;
        }),
            (t.Controller.extend = function (e) {
                var i = this;
                (t.Controller = function () {
                    return i.apply(this, arguments), (this.$super = n.extend({}, this)), e.apply(this, arguments) || this;
                }),
                    n.extend(t.Controller, i),
                    (t.Controller.prototype = i.prototype),
                    (t.Controller.prototype.constructor = t.Controller);
            }),
            (t.Scene = function (i) {
                var s,
                    o,
                    a = "BEFORE",
                    l = "DURING",
                    h = "AFTER",
                    u = r.defaults,
                    f = this,
                    c = n.extend({}, u, i),
                    p = a,
                    d = 0,
                    _ = { start: 0, end: 0 },
                    m = 0,
                    g = !0,
                    v = function () {
                        for (var t in c) u.hasOwnProperty(t) || delete c[t];
                        for (var e in u) k(e);
                        S();
                    },
                    y = {};
                (this.on = function (t, e) {
                    return (
                        n.type.Function(e) &&
                            ((t = t.trim().split(" ")),
                            t.forEach(function (t) {
                                var i = t.split("."),
                                    r = i[0],
                                    n = i[1];
                                "*" != r && (y[r] || (y[r] = []), y[r].push({ namespace: n || "", callback: e }));
                            })),
                        f
                    );
                }),
                    (this.off = function (t, e) {
                        return t
                            ? ((t = t.trim().split(" ")),
                              t.forEach(function (t) {
                                  var i = t.split("."),
                                      r = i[0],
                                      n = i[1] || "",
                                      s = "*" === r ? Object.keys(y) : [r];
                                  s.forEach(function (t) {
                                      for (var i = y[t] || [], r = i.length; r--; ) {
                                          var s = i[r];
                                          !s || (n !== s.namespace && "*" !== n) || (e && e != s.callback) || i.splice(r, 1);
                                      }
                                      i.length || delete y[t];
                                  });
                              }),
                              f)
                            : f;
                    }),
                    (this.trigger = function (e, i) {
                        if (e) {
                            var r = e.trim().split("."),
                                n = r[0],
                                s = r[1],
                                o = y[n];
                            o &&
                                o.forEach(function (e) {
                                    (s && s !== e.namespace) || e.callback.call(f, new t.Event(n, e.namespace, f, i));
                                });
                        }
                        return f;
                    }),
                    f
                        .on("change.internal", function (t) {
                            "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? T() : "reverse" === t.what && f.update());
                        })
                        .on("shift.internal", function () {
                            x(), f.update();
                        }),
                    (this.addTo = function (e) {
                        return (
                            e instanceof t.Controller && o != e && (o && o.removeScene(f), (o = e), S(), w(!0), T(!0), x(), o.info("container").addEventListener("resize", b), e.addScene(f), f.trigger("add", { controller: o }), f.update()),
                            f
                        );
                    }),
                    (this.enabled = function (t) {
                        return arguments.length ? (g != t && ((g = !!t), f.update(!0)), f) : g;
                    }),
                    (this.remove = function () {
                        if (o) {
                            o.info("container").removeEventListener("resize", b);
                            var t = o;
                            (o = void 0), t.removeScene(f), f.trigger("remove");
                        }
                        return f;
                    }),
                    (this.destroy = function (t) {
                        return f.trigger("destroy", { reset: t }), f.remove(), f.off("*.*"), null;
                    }),
                    (this.update = function (t) {
                        if (o)
                            if (t)
                                if (o.enabled() && g) {
                                    var e,
                                        i = o.info("scrollPos");
                                    (e = c.duration > 0 ? (i - _.start) / (_.end - _.start) : i >= _.start ? 1 : 0), f.trigger("update", { startPos: _.start, endPos: _.end, scrollPos: i }), f.progress(e);
                                } else C && p === l && R(!0);
                            else o.updateScene(f, !1);
                        return f;
                    }),
                    (this.refresh = function () {
                        return w(), T(), f;
                    }),
                    (this.progress = function (t) {
                        if (arguments.length) {
                            var e = !1,
                                i = p,
                                r = o ? o.info("scrollDirection") : "PAUSED",
                                n = c.reverse || t >= d;
                            if (
                                (0 === c.duration
                                    ? ((e = d != t), (d = 1 > t && n ? 0 : 1), (p = 0 === d ? a : l))
                                    : 0 > t && p !== a && n
                                    ? ((d = 0), (p = a), (e = !0))
                                    : t >= 0 && 1 > t && n
                                    ? ((d = t), (p = l), (e = !0))
                                    : t >= 1 && p !== h
                                    ? ((d = 1), (p = h), (e = !0))
                                    : p !== l || n || R(),
                                e)
                            ) {
                                var s = { progress: d, state: p, scrollDirection: r },
                                    u = p != i,
                                    _ = function (t) {
                                        f.trigger(t, s);
                                    };
                                u && i !== l && (_("enter"), _(i === a ? "start" : "end")), _("progress"), u && p !== l && (_(p === a ? "start" : "end"), _("leave"));
                            }
                            return f;
                        }
                        return d;
                    });
                var x = function () {
                        (_ = { start: m + c.offset }), o && c.triggerElement && (_.start -= o.info("size") * c.triggerHook), (_.end = _.start + c.duration);
                    },
                    w = function (t) {
                        if (s) {
                            var e = "duration";
                            O(e, s.call(f)) && !t && (f.trigger("change", { what: e, newval: c[e] }), f.trigger("shift", { reason: e }));
                        }
                    },
                    T = function (t) {
                        var i = 0,
                            r = c.triggerElement;
                        if (o && r) {
                            for (var s = o.info(), a = n.get.offset(s.container), l = s.vertical ? "top" : "left"; r.parentNode.hasAttribute(e); ) r = r.parentNode;
                            var h = n.get.offset(r);
                            s.isDocument || (a[l] -= o.scrollPos()), (i = h[l] - a[l]);
                        }
                        var u = i != m;
                        (m = i), u && !t && f.trigger("shift", { reason: "triggerElementPosition" });
                    },
                    b = function () {
                        c.triggerHook > 0 && f.trigger("shift", { reason: "containerResize" });
                    },
                    P = n.extend(r.validate, {
                        duration: function (t) {
                            if (n.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                                var e = parseFloat(t) / 100;
                                t = function () {
                                    return o ? o.info("size") * e : 0;
                                };
                            }
                            if (n.type.Function(t)) {
                                s = t;
                                try {
                                    t = parseFloat(s());
                                } catch (i) {
                                    t = -1;
                                }
                            }
                            if (((t = parseFloat(t)), !n.type.Number(t) || 0 > t)) throw s ? ((s = void 0), 0) : 0;
                            return t;
                        },
                    }),
                    S = function (t) {
                        (t = arguments.length ? [t] : Object.keys(P)),
                            t.forEach(function (t) {
                                var e;
                                if (P[t])
                                    try {
                                        e = P[t](c[t]);
                                    } catch (i) {
                                        e = u[t];
                                    } finally {
                                        c[t] = e;
                                    }
                            });
                    },
                    O = function (t, e) {
                        var i = !1,
                            r = c[t];
                        return c[t] != e && ((c[t] = e), S(t), (i = r != c[t])), i;
                    },
                    k = function (t) {
                        f[t] ||
                            (f[t] = function (e) {
                                return arguments.length ? ("duration" === t && (s = void 0), O(t, e) && (f.trigger("change", { what: t, newval: c[t] }), r.shifts.indexOf(t) > -1 && f.trigger("shift", { reason: t })), f) : c[t];
                            });
                    };
                (this.controller = function () {
                    return o;
                }),
                    (this.state = function () {
                        return p;
                    }),
                    (this.scrollOffset = function () {
                        return _.start;
                    }),
                    (this.triggerPosition = function () {
                        var t = c.offset;
                        return o && (t += c.triggerElement ? m : o.info("size") * f.triggerHook()), t;
                    });
                var C, A;
                f.on("shift.internal", function (t) {
                    var e = "duration" === t.reason;
                    ((p === h && e) || (p === l && 0 === c.duration)) && R(), e && M();
                })
                    .on("progress.internal", function () {
                        R();
                    })
                    .on("add.internal", function () {
                        M();
                    })
                    .on("destroy.internal", function (t) {
                        f.removePin(t.reset);
                    });
                var R = function (t) {
                        if (C && o) {
                            var e = o.info(),
                                i = A.spacer.firstChild;
                            if (t || p !== l) {
                                var r = { position: A.inFlow ? "relative" : "absolute", top: 0, left: 0 },
                                    s = n.css(i, "position") != r.position;
                                A.pushFollowers
                                    ? c.duration > 0 && (p === h && 0 === parseFloat(n.css(A.spacer, "padding-top")) ? (s = !0) : p === a && 0 === parseFloat(n.css(A.spacer, "padding-bottom")) && (s = !0))
                                    : (r[e.vertical ? "top" : "left"] = c.duration * d),
                                    n.css(i, r),
                                    s && M();
                            } else {
                                "fixed" != n.css(i, "position") && (n.css(i, { position: "fixed" }), M());
                                var u = n.get.offset(A.spacer, !0),
                                    f = c.reverse || 0 === c.duration ? e.scrollPos - _.start : Math.round(d * c.duration * 10) / 10;
                                (u[e.vertical ? "top" : "left"] += f), n.css(A.spacer.firstChild, { top: u.top, left: u.left });
                            }
                        }
                    },
                    M = function () {
                        if (C && o && A.inFlow) {
                            var t = p === l,
                                e = o.info("vertical"),
                                i = A.spacer.firstChild,
                                r = n.isMarginCollapseType(n.css(A.spacer, "display")),
                                s = {};
                            A.relSize.width || A.relSize.autoFullWidth
                                ? t
                                    ? n.css(C, { width: n.get.width(A.spacer) })
                                    : n.css(C, { width: "100%" })
                                : ((s["min-width"] = n.get.width(e ? C : i, !0, !0)), (s.width = t ? s["min-width"] : "auto")),
                                A.relSize.height
                                    ? t
                                        ? n.css(C, { height: n.get.height(A.spacer) - (A.pushFollowers ? c.duration : 0) })
                                        : n.css(C, { height: "100%" })
                                    : ((s["min-height"] = n.get.height(e ? i : C, !0, !r)), (s.height = t ? s["min-height"] : "auto")),
                                A.pushFollowers && ((s["padding" + (e ? "Top" : "Left")] = c.duration * d), (s["padding" + (e ? "Bottom" : "Right")] = c.duration * (1 - d))),
                                n.css(A.spacer, s);
                        }
                    },
                    F = function () {
                        o && C && p === l && !o.info("isDocument") && R();
                    },
                    L = function () {
                        o &&
                            C &&
                            p === l &&
                            (((A.relSize.width || A.relSize.autoFullWidth) && n.get.width(window) != n.get.width(A.spacer.parentNode)) || (A.relSize.height && n.get.height(window) != n.get.height(A.spacer.parentNode))) &&
                            M();
                    },
                    z = function (t) {
                        o && C && p === l && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)));
                    };
                (this.setPin = function (t, i) {
                    var r = { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" };
                    if (((i = n.extend({}, r, i)), (t = n.get.elements(t)[0]), !t)) return f;
                    if ("fixed" === n.css(t, "position")) return f;
                    if (C) {
                        if (C === t) return f;
                        f.removePin();
                    }
                    C = t;
                    var s = C.parentNode.style.display,
                        o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                    C.parentNode.style.display = "none";
                    var a = "absolute" != n.css(C, "position"),
                        l = n.css(C, o.concat(["display"])),
                        h = n.css(C, ["width", "height"]);
                    (C.parentNode.style.display = s), !a && i.pushFollowers && (i.pushFollowers = !1);
                    var u = C.parentNode.insertBefore(document.createElement("div"), C),
                        c = n.extend(l, { position: a ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" });
                    if (
                        (a || n.extend(c, n.css(C, ["width", "height"])),
                        n.css(u, c),
                        u.setAttribute(e, ""),
                        n.addClass(u, i.spacerClass),
                        (A = {
                            spacer: u,
                            relSize: { width: "%" === h.width.slice(-1), height: "%" === h.height.slice(-1), autoFullWidth: "auto" === h.width && a && n.isMarginCollapseType(l.display) },
                            pushFollowers: i.pushFollowers,
                            inFlow: a,
                        }),
                        !C.___origStyle)
                    ) {
                        C.___origStyle = {};
                        var p = C.style,
                            d = o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                        d.forEach(function (t) {
                            C.___origStyle[t] = p[t] || "";
                        });
                    }
                    return (
                        A.relSize.width && n.css(u, { width: h.width }),
                        A.relSize.height && n.css(u, { height: h.height }),
                        u.appendChild(C),
                        n.css(C, { position: a ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }),
                        (A.relSize.width || A.relSize.autoFullWidth) && n.css(C, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }),
                        window.addEventListener("scroll", F),
                        window.addEventListener("resize", F),
                        window.addEventListener("resize", L),
                        C.addEventListener("mousewheel", z),
                        C.addEventListener("DOMMouseScroll", z),
                        R(),
                        f
                    );
                }),
                    (this.removePin = function (t) {
                        if (C) {
                            if ((p === l && R(!0), t || !o)) {
                                var i = A.spacer.firstChild;
                                if (i.hasAttribute(e)) {
                                    var r = A.spacer.style,
                                        s = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                                    (margins = {}),
                                        s.forEach(function (t) {
                                            margins[t] = r[t] || "";
                                        }),
                                        n.css(i, margins);
                                }
                                A.spacer.parentNode.insertBefore(i, A.spacer), A.spacer.parentNode.removeChild(A.spacer), C.parentNode.hasAttribute(e) || (n.css(C, C.___origStyle), delete C.___origStyle);
                            }
                            window.removeEventListener("scroll", F),
                                window.removeEventListener("resize", F),
                                window.removeEventListener("resize", L),
                                C.removeEventListener("mousewheel", z),
                                C.removeEventListener("DOMMouseScroll", z),
                                (C = void 0);
                        }
                        return f;
                    });
                var D,
                    E = [];
                return (
                    f.on("destroy.internal", function (t) {
                        f.removeClassToggle(t.reset);
                    }),
                    (this.setClassToggle = function (t, e) {
                        var i = n.get.elements(t);
                        return 0 !== i.length && n.type.String(e)
                            ? (E.length > 0 && f.removeClassToggle(),
                              (D = e),
                              (E = i),
                              f.on("enter.internal_class leave.internal_class", function (t) {
                                  var e = "enter" === t.type ? n.addClass : n.removeClass;
                                  E.forEach(function (t) {
                                      e(t, D);
                                  });
                              }),
                              f)
                            : f;
                    }),
                    (this.removeClassToggle = function (t) {
                        return (
                            t &&
                                E.forEach(function (t) {
                                    n.removeClass(t, D);
                                }),
                            f.off("start.internal_class end.internal_class"),
                            (D = void 0),
                            (E = []),
                            f
                        );
                    }),
                    v(),
                    f
                );
            });
        var r = {
            defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: 0.5, reverse: !0, loglevel: 2 },
            validate: {
                offset: function (t) {
                    if (((t = parseFloat(t)), !n.type.Number(t))) throw 0;
                    return t;
                },
                triggerElement: function (t) {
                    if ((t = t || void 0)) {
                        var e = n.get.elements(t)[0];
                        if (!e) throw 0;
                        t = e;
                    }
                    return t;
                },
                triggerHook: function (t) {
                    var e = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
                    if (n.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                        if (!(t in e)) throw 0;
                        t = e[t];
                    }
                    return t;
                },
                reverse: function (t) {
                    return !!t;
                },
            },
            shifts: ["duration", "offset", "triggerHook"],
        };
        (t.Scene.addOption = function (t, e, i, n) {
            t in r.defaults || ((r.defaults[t] = e), (r.validate[t] = i), n && r.shifts.push(t));
        }),
            (t.Scene.extend = function (e) {
                var i = this;
                (t.Scene = function () {
                    return i.apply(this, arguments), (this.$super = n.extend({}, this)), e.apply(this, arguments) || this;
                }),
                    n.extend(t.Scene, i),
                    (t.Scene.prototype = i.prototype),
                    (t.Scene.prototype.constructor = t.Scene);
            }),
            (t.Event = function (t, e, i, r) {
                r = r || {};
                for (var n in r) this[n] = r[n];
                return (this.type = t), (this.target = this.currentTarget = i), (this.namespace = e || ""), (this.timeStamp = this.timestamp = Date.now()), this;
            });
        var n = (t._util = (function (t) {
            var e,
                i = {},
                r = function (t) {
                    return parseFloat(t) || 0;
                },
                n = function (e) {
                    return e.currentStyle ? e.currentStyle : t.getComputedStyle(e);
                },
                s = function (e, i, s, o) {
                    if (((i = i === document ? t : i), i === t)) o = !1;
                    else if (!f.DomElement(i)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var a = (s ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                    if (s && o) {
                        var l = n(i);
                        a += "Height" === e ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight);
                    }
                    return a;
                },
                o = function (t) {
                    return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (t) {
                        return t[1].toUpperCase();
                    });
                };
            (i.extend = function (t) {
                for (t = t || {}, e = 1; e < arguments.length; e++) if (arguments[e]) for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                return t;
            }),
                (i.isMarginCollapseType = function (t) {
                    return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1;
                });
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                h = t.requestAnimationFrame,
                u = t.cancelAnimationFrame;
            for (e = 0; !h && e < l.length; ++e) (h = t[l[e] + "RequestAnimationFrame"]), (u = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"]);
            h ||
                (h = function (e) {
                    var i = new Date().getTime(),
                        r = Math.max(0, 16 - (i - a)),
                        n = t.setTimeout(function () {
                            e(i + r);
                        }, r);
                    return (a = i + r), n;
                }),
                u ||
                    (u = function (e) {
                        t.clearTimeout(e);
                    }),
                (i.rAF = h.bind(t)),
                (i.cAF = u.bind(t));
            var f = (i.type = function (t) {
                return Object.prototype.toString
                    .call(t)
                    .replace(/^\[object (.+)\]$/, "$1")
                    .toLowerCase();
            });
            (f.String = function (t) {
                return "string" === f(t);
            }),
                (f.Function = function (t) {
                    return "function" === f(t);
                }),
                (f.Array = function (t) {
                    return Array.isArray(t);
                }),
                (f.Number = function (t) {
                    return !f.Array(t) && t - parseFloat(t) + 1 >= 0;
                }),
                (f.DomElement = function (t) {
                    return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName;
                });
            var c = (i.get = {});
            return (
                (c.elements = function (e) {
                    var i = [];
                    if (f.String(e))
                        try {
                            e = document.querySelectorAll(e);
                        } catch (r) {
                            return i;
                        }
                    if ("nodelist" === f(e) || f.Array(e))
                        for (var n = 0, s = (i.length = e.length); s > n; n++) {
                            var o = e[n];
                            i[n] = f.DomElement(o) ? o : c.elements(o);
                        }
                    else (f.DomElement(e) || e === document || e === t) && (i = [e]);
                    return i;
                }),
                (c.scrollTop = function (e) {
                    return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0;
                }),
                (c.scrollLeft = function (e) {
                    return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0;
                }),
                (c.width = function (t, e, i) {
                    return s("width", t, e, i);
                }),
                (c.height = function (t, e, i) {
                    return s("height", t, e, i);
                }),
                (c.offset = function (t, e) {
                    var i = { top: 0, left: 0 };
                    if (t && t.getBoundingClientRect) {
                        var r = t.getBoundingClientRect();
                        (i.top = r.top), (i.left = r.left), e || ((i.top += c.scrollTop()), (i.left += c.scrollLeft()));
                    }
                    return i;
                }),
                (i.addClass = function (t, e) {
                    e && (t.classList ? t.classList.add(e) : (t.className += " " + e));
                }),
                (i.removeClass = function (t, e) {
                    e && (t.classList ? t.classList.remove(e) : (t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")));
                }),
                (i.css = function (t, e) {
                    if (f.String(e)) return n(t)[o(e)];
                    if (f.Array(e)) {
                        var i = {},
                            r = n(t);
                        return (
                            e.forEach(function (t) {
                                i[t] = r[o(t)];
                            }),
                            i
                        );
                    }
                    for (var s in e) {
                        var a = e[s];
                        a == parseFloat(a) && (a += "px"), (t.style[o(s)] = a);
                    }
                }),
                i
            );
        })(window || {}));
        return t;
    }),
    !(function (t, e) {
        "function" == typeof define && define.amd
            ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e)
            : "object" == typeof exports
            ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax))
            : e(t.ScrollMagic || (t.jQuery && t.jQuery.ScrollMagic), t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite);
    })(this, function (t, e, i) {
        "use strict";
        t.Scene.addOption("tweenChanges", !1, function (t) {
            return !!t;
        }),
            t.Scene.extend(function () {
                var t,
                    r = this;
                r.on("progress.plugin_gsap", function () {
                    n();
                }),
                    r.on("destroy.plugin_gsap", function (t) {
                        r.removeTween(t.reset);
                    });
                var n = function () {
                    if (t) {
                        var e = r.progress(),
                            i = r.state();
                        t.repeat && -1 === t.repeat()
                            ? "DURING" === i && t.paused()
                                ? t.play()
                                : "DURING" === i || t.paused() || t.pause()
                            : e != t.progress() && (0 === r.duration() ? (e > 0 ? t.play() : t.reverse()) : r.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause());
                    }
                };
                (r.setTween = function (s, o, a) {
                    var l;
                    arguments.length > 1 && (arguments.length < 3 && ((a = o), (o = 1)), (s = e.to(s, o, a)));
                    try {
                        (l = i ? new i({ smoothChildTiming: !0 }).add(s) : s), l.pause();
                    } catch (h) {
                        return r;
                    }
                    return t && r.removeTween(), (t = l), s.repeat && -1 === s.repeat() && (t.repeat(-1), t.yoyo(s.yoyo())), n(), r;
                }),
                    (r.removeTween = function (e) {
                        return t && (e && t.progress(0).pause(), t.kill(), (t = void 0)), r;
                    });
            });
    }),
    !(function (t, e) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "jquery"], e) : "object" == typeof exports ? e(require("scrollmagic"), require("jquery")) : e(t.ScrollMagic, t.jQuery);
    })(this, function (t, e) {
        "use strict";
        (t._util.get.elements = function (t) {
            return e(t).toArray();
        }),
            (t._util.addClass = function (t, i) {
                e(t).addClass(i);
            }),
            (t._util.removeClass = function (t, i) {
                e(t).removeClass(i);
            }),
            (e.ScrollMagic = t);
    }),
    $(document).ready(function () {
        function t() {
            $(".navigation__burger").toggleClass("navigation__burger--is-open"), $(".navigation__container").toggleClass("navigation__container--is-open"), $("html, body").toggleClass("scroll-lock");
        }
        if (
            ($(window).load(function () {
                $(".splashscreen").addClass("splashscreen--is-hidden"),
                    setTimeout(function () {
                        $(".splashscreen").css({ display: "none" });
                        var t = $(".introduction__content-el--name"),
                            e = $(".introduction__content-el--job");
                        TweenLite.to([t, e], 0.8, { x: 0, opacity: 1, ease: Power1.easeOut });
                    }, 800);
            }),
            $(".navigation__burger").click(function () {
                t();
            }),
			$('a[href*="#"]:not([href="#0"])').click(function (e) {
				var i = $(this).attr("href");
				if (!i.includes("index.html")) {
					e.preventDefault();
					$(".navigation__container").hasClass("navigation__container--is-open") && t();
					window.scrollTo({ top: $(i).offset().top, behavior: 'smooth' });
				}
			  }),
			  
            $(window).width() > 991)
        ) {
            var e = new ScrollMagic.Controller(),
                i = $(".about"),
                r = $(".about__content-blurb"),
                n = $(".about__visual"),
                s = $(".about__content-signature"),
                o = CSSRulePlugin.getRule(".about__wrapper:before"),
                a = new TimelineLite();
            a.from(r, 0.8, { x: 50, opacity: 0, ease: Power1.easeOut })
                .from(n, 0.8, { x: -50, opacity: 0, ease: Power1.easeOut }, 0)
                .from(o, 0.8, { cssRule: { opacity: 0 }, ease: Power1.easeOut })
                .from(s, 0.8, { opacity: 0 }, "-=0.4");
            var l = new ScrollMagic.Scene({ triggerElement: i, reverse: !1 }).setTween(a).addTo(e);
            $(window).resize(function () {
                $(window).width() <= 991 ? $(".about__visual").css({ transform: "translateX(-50%)" }) : $(".about__visual").css({ transform: "translateX(0)" });
            });
            var h = $(".app-design"),
                u = $(".app-design__visual"),
                f = new ScrollMagic.Scene({ triggerElement: h, reverse: !1 }).setTween(TweenLite.from(u, 0.8, { x: 100, opacity: 0, ease: Power1.easeOut })).addTo(e),
                c = $(".web-design"),
                p = $(".web-design__visual"),
                d = new ScrollMagic.Scene({ triggerElement: c, reverse: !1 }).setTween(TweenLite.from(p, 0.8, { x: -100, opacity: 0, ease: Power1.easeOut })).addTo(e),
                _ = $(".work"),
                m = $(".work__content"),
                g = $(".work__visual"),
                v = CSSRulePlugin.getRule(".work__list:before"),
                y = new TimelineLite();
            y.set(g, { scale: 1 })
                .from(m, 0.8, { x: -50, opacity: 0, ease: Power1.easeOut })
                .from(g, 0.8, { x: 50, opacity: 0, ease: Power1.easeOut }, 0)
                .from(v, 0.8, { cssRule: { opacity: 0 }, ease: Power1.easeOut });
            var x = new ScrollMagic.Scene({ triggerElement: _, offset: 60, reverse: !1 }).setTween(y).addTo(e),
                w = $(".blog"),
                T = $(".blog__post"),
                b = $(".blog__view-more--el"),
                P = new TimelineLite();
            P.staggerFrom(T, 0.8, { opacity: 0, ease: Power1.easeOut }, 0.4).from(b, 0.8, { opacity: 0, ease: Power1.easeOut }, "-=0.2");
            var S = new ScrollMagic.Scene({ triggerElement: w, reverse: !1 }).setTween(P).addTo(e),
                O = $(".contact"),
                k = $(".contact__form"),
                C = $(".contact__visual"),
                A = CSSRulePlugin.getRule(".contact__wrapper:before"),
                R = new TimelineLite();
            R.from(k, 0.8, { x: 50, opacity: 0, ease: Power1.easeOut })
                .from(C, 0.8, { x: -50, opacity: 0, ease: Power1.easeOut }, 0)
                .from(A, 0.8, { cssRule: { opacity: 0 }, ease: Power1.easeOut });
            var M = new ScrollMagic.Scene({ triggerElement: O, reverse: !1 }).setTween(R).addTo(e);
        }
        $(".work__navigation-el").click(function () {
            var t = $(this),
                e = t.parent().children().index(t);
            t.parent().children().removeClass("work__navigation-el--is-active"),
                t.addClass("work__navigation-el--is-active"),
                $(".work__list").children().removeClass("work__list-el--is-active"),
                $(".work__list").children().eq(e).addClass("work__list-el--is-active");
        });
    });
