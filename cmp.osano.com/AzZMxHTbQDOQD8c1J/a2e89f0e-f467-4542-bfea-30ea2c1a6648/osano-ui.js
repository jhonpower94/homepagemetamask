/*! For license information please see osano-ui.js.LICENSE.txt */
"use strict";
(self.webpackChunk_osano_cmp_consent_manager = self.webpackChunk_osano_cmp_consent_manager || []).push([
    [522], {
        807: (e, t, o) => {
            function r(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            o.r(t), o.d(t, {
                default: () => xa,
                getStyleConstant: () => Oa
            });
            var n, i = o(24),
                a = o(213),
                s = window,
                c = s.trustedTypes,
                l = c ? c.createPolicy("lit-html", {
                    createHTML: e => e
                }) : void 0,
                d = "$lit$",
                p = "lit$".concat((Math.random() + "").slice(9), "$"),
                g = "?" + p,
                m = "<".concat(g, ">"),
                u = document,
                b = () => u.createComment(""),
                f = e => null === e || "object" != typeof e && "function" != typeof e || e === S || e === C,
                h = Array.isArray,
                v = e => h(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]),
                y = "[ \t\n\f\r]",
                _ = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                w = /-->/g,
                O = />/g,
                k = RegExp(">|".concat(y, "(?:([^\\s\"'>=/]+)(").concat(y, "*=").concat(y, "*(?:[^ \"'`<>=]|(\"|')|))|$)"), "g"),
                x = /'/g,
                P = /"/g,
                j = /^(?:script|style|textarea|title)$/i,
                A = e => function(t) {
                    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++) r[n - 1] = arguments[n];
                    return {
                        _$litType$: e,
                        strings: t,
                        values: r
                    }
                },
                D = A(1),
                S = (A(2), Symbol.for("lit-noChange")),
                C = Symbol.for("lit-nothing"),
                N = new WeakMap,
                $ = u.createTreeWalker(u, 129, null, !1);

            function E(e, t) {
                if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return void 0 !== l ? l.createHTML(t) : t
            }
            var Z = (e, t) => {
                for (var o, r = e.length - 1, n = [], i = 2 === t ? "<svg>" : "", a = _, s = 0; s < r; s++) {
                    for (var c = e[s], l = void 0, g = void 0, u = -1, b = 0; b < c.length && (a.lastIndex = b, null !== (g = a.exec(c)));) b = a.lastIndex, a === _ ? "!--" === g[1] ? a = w : void 0 !== g[1] ? a = O : void 0 !== g[2] ? (j.test(g[2]) && (o = RegExp("</" + g[2], "g")), a = k) : void 0 !== g[3] && (a = k) : a === k ? ">" === g[0] ? (a = null != o ? o : _, u = -1) : void 0 === g[1] ? u = -2 : (u = a.lastIndex - g[2].length, l = g[1], a = void 0 === g[3] ? k : '"' === g[3] ? P : x) : a === P || a === x ? a = k : a === w || a === O ? a = _ : (a = k, o = void 0);
                    var f = a === k && e[s + 1].startsWith("/>") ? " " : "";
                    i += a === _ ? c + m : u >= 0 ? (n.push(l), c.slice(0, u) + d + c.slice(u) + p + f) : c + p + (-2 === u ? (n.push(void 0), s) : f)
                }
                return [E(e, i + (e[r] || "<?>") + (2 === t ? "</svg>" : "")), n]
            };
            class I {
                constructor(e, t) {
                    var o, {
                        strings: r,
                        _$litType$: n
                    } = e;
                    this.parts = [];
                    var i = 0,
                        a = 0,
                        s = r.length - 1,
                        l = this.parts,
                        [m, u] = Z(r, n);
                    if (this.el = I.createElement(m, t), $.currentNode = this.el.content, 2 === n) {
                        var f = this.el.content,
                            h = f.firstChild;
                        h.remove(), f.append(...h.childNodes)
                    }
                    for (; null !== (o = $.nextNode()) && l.length < s;) {
                        if (1 === o.nodeType) {
                            if (o.hasAttributes()) {
                                var v = [];
                                for (var y of o.getAttributeNames())
                                    if (y.endsWith(d) || y.startsWith(p)) {
                                        var _ = u[a++];
                                        if (v.push(y), void 0 !== _) {
                                            var w = o.getAttribute(_.toLowerCase() + d).split(p),
                                                O = /([.?@])?(.*)/.exec(_);
                                            l.push({
                                                type: 1,
                                                index: i,
                                                name: O[2],
                                                strings: w,
                                                ctor: "." === O[1] ? z : "?" === O[1] ? F : "@" === O[1] ? V : B
                                            })
                                        } else l.push({
                                            type: 6,
                                            index: i
                                        })
                                    }
                                for (var k of v) o.removeAttribute(k)
                            }
                            if (j.test(o.tagName)) {
                                var x = o.textContent.split(p),
                                    P = x.length - 1;
                                if (P > 0) {
                                    o.textContent = c ? c.emptyScript : "";
                                    for (var A = 0; A < P; A++) o.append(x[A], b()), $.nextNode(), l.push({
                                        type: 2,
                                        index: ++i
                                    });
                                    o.append(x[P], b())
                                }
                            }
                        } else if (8 === o.nodeType)
                            if (o.data === g) l.push({
                                type: 2,
                                index: i
                            });
                            else
                                for (var D = -1; - 1 !== (D = o.data.indexOf(p, D + 1));) l.push({
                                    type: 7,
                                    index: i
                                }), D += p.length - 1;
                        i++
                    }
                }
                static createElement(e, t) {
                    var o = u.createElement("template");
                    return o.innerHTML = e, o
                }
            }

            function T(e, t) {
                var o, r, n, i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                    s = arguments.length > 3 ? arguments[3] : void 0;
                if (t === S) return t;
                var c = void 0 !== s ? null === (o = a._$Co) || void 0 === o ? void 0 : o[s] : a._$Cl,
                    l = f(t) ? void 0 : t._$litDirective$;
                return (null == c ? void 0 : c.constructor) !== l && (null === (r = null == c ? void 0 : c._$AO) || void 0 === r || r.call(c, !1), void 0 === l ? c = void 0 : (c = new l(e))._$AT(e, a, s), void 0 !== s ? (null !== (n = (i = a)._$Co) && void 0 !== n ? n : i._$Co = [])[s] = c : a._$Cl = c), void 0 !== c && (t = T(e, c._$AS(e, t.values), c, s)), t
            }
            class M {
                constructor(e, t) {
                    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(e) {
                    var t, {
                            el: {
                                content: o
                            },
                            parts: r
                        } = this._$AD,
                        n = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : u).importNode(o, !0);
                    $.currentNode = n;
                    for (var i = $.nextNode(), a = 0, s = 0, c = r[0]; void 0 !== c;) {
                        if (a === c.index) {
                            var l = void 0;
                            2 === c.type ? l = new L(i, i.nextSibling, this, e) : 1 === c.type ? l = new c.ctor(i, c.name, c.strings, this, e) : 6 === c.type && (l = new W(i, this, e)), this._$AV.push(l), c = r[++s]
                        }
                        a !== (null == c ? void 0 : c.index) && (i = $.nextNode(), a++)
                    }
                    return $.currentNode = u, n
                }
                v(e) {
                    var t = 0;
                    for (var o of this._$AV) void 0 !== o && (void 0 !== o.strings ? (o._$AI(e, o, t), t += o.strings.length - 2) : o._$AI(e[t])), t++
                }
            }
            class L {
                constructor(e, t, o, r) {
                    var n;
                    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = o, this.options = r, this._$Cp = null === (n = null == r ? void 0 : r.isConnected) || void 0 === n || n
                }
                get _$AU() {
                    var e, t;
                    return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cp
                }
                get parentNode() {
                    var e = this._$AA.parentNode,
                        t = this._$AM;
                    return void 0 !== t && 11 === (null == e ? void 0 : e.nodeType) && (e = t.parentNode), e
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(e) {
                    e = T(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this), f(e) ? e === C || null == e || "" === e ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== S && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : v(e) ? this.T(e) : this._(e)
                }
                k(e) {
                    return this._$AA.parentNode.insertBefore(e, this._$AB)
                }
                $(e) {
                    this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
                }
                _(e) {
                    this._$AH !== C && f(this._$AH) ? this._$AA.nextSibling.data = e : this.$(u.createTextNode(e)), this._$AH = e
                }
                g(e) {
                    var t, {
                            values: o,
                            _$litType$: r
                        } = e,
                        n = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = I.createElement(E(r.h, r.h[0]), this.options)), r);
                    if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === n) this._$AH.v(o);
                    else {
                        var i = new M(n, this),
                            a = i.u(this.options);
                        i.v(o), this.$(a), this._$AH = i
                    }
                }
                _$AC(e) {
                    var t = N.get(e.strings);
                    return void 0 === t && N.set(e.strings, t = new I(e)), t
                }
                T(e) {
                    h(this._$AH) || (this._$AH = [], this._$AR());
                    var t, o = this._$AH,
                        r = 0;
                    for (var n of e) r === o.length ? o.push(t = new L(this.k(b()), this.k(b()), this, this.options)) : t = o[r], t._$AI(n), r++;
                    r < o.length && (this._$AR(t && t._$AB.nextSibling, r), o.length = r)
                }
                _$AR() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling,
                        o = arguments.length > 1 ? arguments[1] : void 0;
                    for (null === (e = this._$AP) || void 0 === e || e.call(this, !1, !0, o); t && t !== this._$AB;) {
                        var r = t.nextSibling;
                        t.remove(), t = r
                    }
                }
                setConnected(e) {
                    var t;
                    void 0 === this._$AM && (this._$Cp = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
                }
            }
            class B {
                constructor(e, t, o, r, n) {
                    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = n, o.length > 2 || "" !== o[0] || "" !== o[1] ? (this._$AH = Array(o.length - 1).fill(new String), this.strings = o) : this._$AH = C
                }
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                        o = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        n = this.strings,
                        i = !1;
                    if (void 0 === n) e = T(this, e, t, 0), (i = !f(e) || e !== this._$AH && e !== S) && (this._$AH = e);
                    else {
                        var a, s, c = e;
                        for (e = n[0], a = 0; a < n.length - 1; a++)(s = T(this, c[o + a], t, a)) === S && (s = this._$AH[a]), i || (i = !f(s) || s !== this._$AH[a]), s === C ? e = C : e !== C && (e += (null != s ? s : "") + n[a + 1]), this._$AH[a] = s
                    }
                    i && !r && this.j(e)
                }
                j(e) {
                    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
                }
            }
            class z extends B {
                constructor() {
                    super(...arguments), this.type = 3
                }
                j(e) {
                    this.element[this.name] = e === C ? void 0 : e
                }
            }
            var H = c ? c.emptyScript : "";
            class F extends B {
                constructor() {
                    super(...arguments), this.type = 4
                }
                j(e) {
                    e && e !== C ? this.element.setAttribute(this.name, H) : this.element.removeAttribute(this.name)
                }
            }
            class V extends B {
                constructor(e, t, o, r, n) {
                    super(e, t, o, r, n), this.type = 5
                }
                _$AI(e) {
                    var t;
                    if ((e = null !== (t = T(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, 0)) && void 0 !== t ? t : C) !== S) {
                        var o = this._$AH,
                            r = e === C && o !== C || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive,
                            n = e !== C && (o === C || r);
                        r && this.element.removeEventListener(this.name, this, o), n && this.element.addEventListener(this.name, this, e), this._$AH = e
                    }
                }
                handleEvent(e) {
                    var t, o;
                    "function" == typeof this._$AH ? this._$AH.call(null !== (o = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== o ? o : this.element, e) : this._$AH.handleEvent(e)
                }
            }
            class W {
                constructor(e, t, o) {
                    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = o
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(e) {
                    T(this, e)
                }
            }
            var R = {
                    O: d,
                    P: p,
                    A: g,
                    C: 1,
                    M: Z,
                    L: M,
                    D: v,
                    R: T,
                    I: L,
                    V: B,
                    H: F,
                    N: V,
                    U: z,
                    F: W
                },
                U = s.litHtmlPolyfillSupport;
            null == U || U(I, L), (null !== (n = s.litHtmlVersions) && void 0 !== n ? n : s.litHtmlVersions = []).push("2.7.5");
            var q, G = (e, t, o) => {
                    var r, n, i = null !== (r = null == o ? void 0 : o.renderBefore) && void 0 !== r ? r : t,
                        a = i._$litPart$;
                    if (void 0 === a) {
                        var s = null !== (n = null == o ? void 0 : o.renderBefore) && void 0 !== n ? n : null;
                        i._$litPart$ = a = new L(t.insertBefore(b(), s), s, void 0, null != o ? o : {})
                    }
                    return a._$AI(e), a
                },
                X = o(544),
                J = a.go.template("aria.newWindow"),
                Q = a.go.template("aria.external"),
                Y = a.go.template("aria.externalNewWindow");
            var K = o(872);
            const ee = {
                block: "__",
                modifier: "--",
                space: "-",
                value: "_"
            };

            function te(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : te(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var re = e => {
                    var {
                        block: t,
                        element: o,
                        modifiers: r = {},
                        prefix: n = "",
                        syntax: i = {},
                        verbose: a = !1,
                        className: s = []
                    } = e;
                    if (!t && !o) throw new Error("You must specify a block or an element when using BEM syntax");
                    var c = s ? Array.isArray(s) ? s : "object" == typeof s ? Object.keys(s) : s.split(" ") : [],
                        l = oe(oe({}, ee), i),
                        d = n ? n.replace(/^['"]/, "").replace(/['"]$/, "") : "";
                    t && (c.push(o ? "".concat(d).concat(t).concat(l.block).concat(o) : "".concat(d).concat(t)), (r.block ? Object.keys(r.block) : []).forEach((e => {
                        var n = !(!r.block["".concat(e)] || "" === r.block["".concat(e)]) && r.block["".concat(e)];
                        if ("true" === n || n === !!n) {
                            if (n) {
                                var i = "".concat(d).concat(t).concat(l.modifier).concat(e);
                                c.push(i), a && o && c.push("".concat(i).concat(l.block).concat(o))
                            }
                        } else {
                            var s = "".concat(d).concat(t).concat(l.modifier).concat(e).concat(l.value).concat(n);
                            c.push(s), a && o && c.push("".concat(s).concat(l.block).concat(o))
                        }
                    })));
                    o && (c.push("".concat(d).concat(o)), (r.element ? Object.keys(r.element) : []).forEach((e => {
                        var n = !(!r.element["".concat(e)] || "" === r.element["".concat(e)]) && r.element["".concat(e)];
                        "true" === n || n === !!n ? n && (c.push("".concat(d).concat(o).concat(l.modifier).concat(e)), a && t && c.push("".concat(d).concat(t).concat(l.block).concat(o).concat(l.modifier).concat(e))) : (c.push("".concat(d).concat(o).concat(l.modifier).concat(e).concat(l.value).concat(n)), a && t && c.push("".concat(d).concat(t).concat(l.block).concat(o).concat(l.modifier).concat(e).concat(l.value).concat(n)))
                    })));
                    return c.map((e => e.toString().replace(/\s\s+/g, " ").replace(/[\s!"#$%&'()*+,./:<=>?@[\\\]^`{|}~]/g, l.space)))
                },
                ne = function() {
                    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    return re.apply(null, t).reduce(((e, t) => (e["".concat(t)] = !0, e)), {})
                };
            const ie = re;
            var ae = 1,
                se = 2,
                ce = e => function() {
                    for (var t = arguments.length, o = new Array(t), r = 0; r < t; r++) o[r] = arguments[r];
                    return {
                        _$litDirective$: e,
                        values: o
                    }
                };
            class le {
                constructor(e) {}
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AT(e, t, o) {
                    this._$Ct = e, this._$AM = t, this._$Ci = o
                }
                _$AS(e, t) {
                    return this.update(e, t)
                }
                update(e, t) {
                    return this.render(...t)
                }
            }
            var de, pe = ce(class extends le {
                    constructor(e) {
                        var t;
                        if (super(e), e.type !== ae || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                    }
                    render(e) {
                        return " " + Object.keys(e).filter((t => e[t])).join(" ") + " "
                    }
                    update(e, t) {
                        var o, r, [n] = t;
                        if (void 0 === this.it) {
                            for (var i in this.it = new Set, void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e => "" !== e)))), n) n[i] && !(null === (o = this.nt) || void 0 === o ? void 0 : o.has(i)) && this.it.add(i);
                            return this.render(n)
                        }
                        var a = e.element.classList;
                        for (var s in this.it.forEach((e => {
                                e in n || (a.remove(e), this.it.delete(e))
                            })), n) {
                            var c = !!n[s];
                            c === this.it.has(s) || (null === (r = this.nt) || void 0 === r ? void 0 : r.has(s)) || (c ? (a.add(s), this.it.add(s)) : (a.remove(s), this.it.delete(s)))
                        }
                        return S
                    }
                }),
                ge = e => null != e ? e : C,
                me = ["block", "label", "disabled", "onClick", "className", "modifiers", "ariaLabel", "tabIndex"];

            function ue(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ue(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ue(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var fe = "button";

            function he(e) {
                var {
                    block: t,
                    label: o,
                    disabled: n,
                    onClick: i,
                    className: a,
                    modifiers: s = {},
                    ariaLabel: c,
                    tabIndex: l = 0
                } = e, d = (0, K.Z)(e, me), {
                    prefix: p = "osano-cm-"
                } = d, g = {
                    root: ne({
                        prefix: p,
                        block: t,
                        element: fe,
                        modifiers: {
                            block: s.block,
                            element: be(be({}, s.element), {}, {
                                disabled: n
                            })
                        },
                        className: a
                    })
                };
                return D(de || (de = r(['<button class="', '" .disabled="', '" @click="', '" aria-label="', '" tabindex="', '"> ', " </button>"])), pe(g.root), n, ge(i), ge(c), l, o)
            }
            var ve, ye = o(435);

            function _e(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function we(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _e(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : _e(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var Oe, ke = e => {
                    var {
                        dispatch: t
                    } = e;
                    return () => {
                        t(ye.ZP.acceptAllConsent()), t(ye.ZP.saveConsent()), t(ye.ZP.hideDialog()), t(ye.ZP.showWidget())
                    }
                },
                xe = {
                    element: {
                        type: "accept"
                    }
                },
                Pe = a.go.template("buttons.acceptAll");

            function je(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? je(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : je(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var De, Se = e => {
                    var {
                        dispatch: t
                    } = e;
                    return () => {
                        t(ye.ZP.acceptAllConsent()), t(ye.ZP.saveConsent()), t(ye.ZP.hideDialog()), t(ye.ZP.showWidget())
                    }
                },
                Ce = {
                    element: {
                        type: "accept"
                    }
                },
                Ne = a.go.template("buttons.accept");

            function $e(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $e(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : $e(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var Ze, Ie = e => {
                    var {
                        dispatch: t
                    } = e;
                    return () => {
                        t(ye.ZP.denyAllConsent()), t(ye.ZP.saveConsent()), t(ye.ZP.hideDialog()), t(ye.ZP.showWidget())
                    }
                },
                Te = {
                    element: {
                        type: "denyAll"
                    }
                },
                Me = a.go.template("buttons.denyAll");

            function Le(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Le(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Le(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var ze, He = e => {
                    var {
                        dispatch: t
                    } = e;
                    return () => {
                        t(ye.ZP.denyAllConsent()), t(ye.ZP.saveConsent()), t(ye.ZP.hideDialog()), t(ye.ZP.showWidget())
                    }
                },
                Fe = {
                    element: {
                        type: "deny"
                    }
                },
                Ve = a.go.template("buttons.deny");

            function We(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? We(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : We(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var Ue, qe = e => {
                    var {
                        dispatch: t
                    } = e;
                    return () => {
                        t(ye.ZP.saveConsent()), t(ye.ZP.hideDialog()), t(ye.ZP.showWidget())
                    }
                },
                Ge = {
                    element: {
                        type: "save"
                    }
                },
                Xe = a.go.template("buttons.save");
            var Je = ["ariaDescribedBy", "block", "className", "href", "target", "label", "onClick", "tabIndex", "title", "type"];

            function Qe(e) {
                var {
                    ariaDescribedBy: t,
                    block: o,
                    className: n = "",
                    href: i,
                    target: a,
                    label: s,
                    onClick: c,
                    tabIndex: l = 0,
                    title: d,
                    type: p
                } = e, g = (0, K.Z)(e, Je), {
                    prefix: m = "osano-cm-"
                } = g, u = {
                    root: ne({
                        prefix: m,
                        block: o,
                        element: "link",
                        className: n,
                        modifiers: {
                            element: {
                                type: p
                            }
                        }
                    })
                };
                return D(Ue || (Ue = r(['<a tabindex="', '" rel="noopener" href="', '" target="', '" class="', '" @click="', '" title="', '" aria-describedby="', '">', "</a>"])), l, ge(i), ge(a), pe(u.root), c, ge(d), ge(t), s)
            }
            var Ye;
            a.go.template("buttons.denyAll");

            function Ke(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ke(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ke(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var tt, ot = o(166),
                rt = o(488),
                nt = e => t => {
                    t(ye.ZP.showLegal(rt.J.PUSH, e))
                },
                it = ["type", "purposeId", "onClick"];

            function at(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }
            var st = a.go.template("iab.legal.title");

            function ct(e) {
                var {
                    type: t,
                    purposeId: o,
                    onClick: n
                } = e, s = (0, K.Z)(e, it), {
                    store: {
                        dispatch: c
                    }
                } = s, l = o ? "osano-cm-tcf-v2-legal--".concat(t, "_").concat(o) : "osano-cm-tcf-v2-legal", d = o ? a.go.translate("iab.".concat(t, ".").concat(o, ".description")) : void 0, p = o ? a.go.translate("iab.".concat(t, ".").concat(o, ".name")) : st(), g = n || function(e) {
                    c(nt(o));
                    var t = document.getElementById(l);
                    return (0, ot.rP)(t || e.target).scrollTop = t ? t.offsetTop : 0, !1
                };
                return D(tt || (tt = r(["", ""])), Qe(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? at(Object(o), !0).forEach((function(t) {
                            (0, i.Z)(e, t, o[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : at(Object(o)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                        }))
                    }
                    return e
                }({
                    label: p,
                    onClick: g,
                    title: d,
                    type: o ? "purpose" : void 0
                }, s)))
            }
            var lt, dt = o(883),
                pt = e => t => {
                    t(ye.ZP.showVendorConsent(rt.J.PUSH, e))
                },
                gt = ["vendorId", "onClick"];

            function mt(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }
            var ut = a.go.template("iab.vendor.title");

            function bt(e) {
                var {
                    vendorId: t,
                    onClick: o
                } = e, n = (0, K.Z)(e, gt), {
                    store: {
                        dispatch: a,
                        getState: s
                    }
                } = n, c = s(), l = t ? (0, dt.GM)(c, t).name : ut(), d = o || function() {
                    return a(pt(t)), !1
                };
                return D(lt || (lt = r(["", ""])), Qe(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? mt(Object(o), !0).forEach((function(t) {
                            (0, i.Z)(e, t, o[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : mt(Object(o)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                        }))
                    }
                    return e
                }({
                    label: l,
                    onClick: d,
                    type: "vendor"
                }, n)))
            }
            var ft, ht = o(826),
                vt = ["id", "ariaLabel", "ariaLevel", "ariaDescription", "descriptionId", "block", "label", "checked", "disabled", "onChange", "className", "category", "tabIndex", "type", "name", "value"],
                yt = "toggle";

            function _t(e) {
                var {
                    id: t = (0, ht.v4)("toggle"),
                    ariaLabel: o,
                    ariaLevel: n,
                    ariaDescription: i,
                    descriptionId: a,
                    block: s,
                    label: c,
                    checked: l,
                    disabled: d,
                    onChange: p,
                    className: g,
                    category: m,
                    tabIndex: u = 0,
                    type: b,
                    name: f,
                    value: h
                } = e, v = (0, K.Z)(e, vt), {
                    prefix: y = "osano-cm-"
                } = v, _ = {
                    root: ne({
                        prefix: y,
                        block: s,
                        element: yt,
                        modifiers: {
                            element: {
                                checked: l,
                                disabled: d,
                                type: b
                            }
                        },
                        className: g
                    }),
                    input: ne({
                        prefix: y,
                        block: yt,
                        element: "input",
                        modifiers: {
                            element: {
                                checked: l,
                                disabled: d
                            }
                        }
                    }),
                    switch: ne({
                        prefix: y,
                        block: yt,
                        element: "switch"
                    }),
                    label: ne({
                        prefix: y,
                        block: yt,
                        element: "label"
                    })
                };
                return D(ft || (ft = r(['<label class="', '" for="', '"><input class="', '" id="', '" type="checkbox" @change="', '" .checked="', '" .disabled="', '" data-category="', '" name="', '" value="', '" role="switch" tabindex="', '" aria-checked="', '" aria-label="', '" aria-description="', '" aria-describedby="', '"><span class="', '"></span><span role="', '" aria-level="', '" class="', '">', "</span></label>"])), pe(_.root), t, pe(_.input), t, p, l, d, ge(m), ge(f), ge(h), u, l, ge(o), ge(i), ge(!i && a ? a : void 0), pe(_.switch), ge(n ? "heading" : void 0), ge(n), pe(_.label), c)
            }

            function wt(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Ot(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? wt(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : wt(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var kt, xt = e => {
                var {
                    category: t,
                    store: o
                } = e;
                return e => {
                    var r = e.target.checked;
                    o.dispatch(ye.ZP.setConsent(t, r ? a.eJ : a.Dv))
                }
            };

            function Pt(e) {
                var {
                    category: t,
                    prefix: o,
                    store: {
                        getState: r
                    }
                } = e, n = r(), i = (0, X.Qc)(n), s = (0, X.mr)(n, t), c = (0, X.LP)(n, t), l = i && "".concat(o, "drawer-toggle--category_").concat(t, "--description"), d = a.go.translate("categories.".concat(t, ".label")) || "", p = a.go.translate("categories.".concat(t, ".label")) || "";
                return _t(Ot(Ot({}, e), {}, {
                    descriptionId: l,
                    label: d,
                    title: p || d,
                    checked: s,
                    disabled: c,
                    onChange: xt(e)
                }))
            }

            function jt(e) {
                var {
                    store: {
                        getState: t
                    },
                    label: o
                } = e, n = t(), i = (0, ht.v4)("arialabelclose"), {
                    linkColor: a,
                    closeButtonColor: s = a
                } = (0, X.XN)(n);
                return D(kt || (kt = r(['<svg width="20px" height="20px" viewBox="0 0 20 20" role="img" aria-labelledby="', '"> <title id="', '">', '</title> <line role="presentation" x1="2" y1="2" x2="18" y2="18" .stroke="', '"/> <line role="presentation" x1="2" y1="18" x2="18" y2="2" .stroke="', '"/> </svg>'])), i, i, o, s, s)
            }
            var At, Dt, St = function(e) {
                    var {
                        className: t,
                        block: o,
                        prefix: r = "osano-cm-"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        prefix: r,
                        block: o,
                        element: e,
                        className: t,
                        modifiers: {
                            element: arguments.length > 2 ? arguments[2] : void 0
                        }
                    }
                },
                Ct = function() {
                    return ne(St(...arguments))
                },
                Nt = function() {
                    return ie(St(...arguments)).join(" ")
                },
                $t = o(375),
                {
                    I: Et
                } = R,
                Zt = (e, t) => void 0 === t ? void 0 !== (null == e ? void 0 : e._$litType$) : (null == e ? void 0 : e._$litType$) === t,
                It = () => document.createComment(""),
                Tt = (e, t, o) => {
                    var r, n = e._$AA.parentNode,
                        i = void 0 === t ? e._$AB : t._$AA;
                    if (void 0 === o) {
                        var a = n.insertBefore(It(), i),
                            s = n.insertBefore(It(), i);
                        o = new Et(a, s, e, e.options)
                    } else {
                        var c, l = o._$AB.nextSibling,
                            d = o._$AM,
                            p = d !== e;
                        if (p) null === (r = o._$AQ) || void 0 === r || r.call(o, e), o._$AM = e, void 0 !== o._$AP && (c = e._$AU) !== d._$AU && o._$AP(c);
                        if (l !== i || p)
                            for (var g = o._$AA; g !== l;) {
                                var m = g.nextSibling;
                                n.insertBefore(g, i), g = m
                            }
                    }
                    return o
                },
                Mt = function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
                    return e._$AI(t, o), e
                },
                Lt = {},
                Bt = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lt;
                    return e._$AH = t
                },
                zt = e => e._$AH,
                Ht = e => {
                    var t;
                    null === (t = e._$AP) || void 0 === t || t.call(e, !1, !0);
                    for (var o = e._$AA, r = e._$AB.nextSibling; o !== r;) {
                        var n = o.nextSibling;
                        o.remove(), o = n
                    }
                },
                Ft = e => {
                    e._$AR()
                },
                Vt = (e, t, o) => {
                    for (var r = new Map, n = t; n <= o; n++) r.set(e[n], n);
                    return r
                },
                Wt = ce(class extends le {
                    constructor(e) {
                        if (super(e), e.type !== se) throw Error("repeat() can only be used in text expressions")
                    }
                    dt(e, t, o) {
                        var r;
                        void 0 === o ? o = t : void 0 !== t && (r = t);
                        var n = [],
                            i = [],
                            a = 0;
                        for (var s of e) n[a] = r ? r(s, a) : a, i[a] = o(s, a), a++;
                        return {
                            values: i,
                            keys: n
                        }
                    }
                    render(e, t, o) {
                        return this.dt(e, t, o).values
                    }
                    update(e, t) {
                        var o, [r, n, i] = t,
                            a = zt(e),
                            {
                                values: s,
                                keys: c
                            } = this.dt(r, n, i);
                        if (!Array.isArray(a)) return this.ht = c, s;
                        for (var l, d, p = null !== (o = this.ht) && void 0 !== o ? o : this.ht = [], g = [], m = 0, u = a.length - 1, b = 0, f = s.length - 1; m <= u && b <= f;)
                            if (null === a[m]) m++;
                            else if (null === a[u]) u--;
                        else if (p[m] === c[b]) g[b] = Mt(a[m], s[b]), m++, b++;
                        else if (p[u] === c[f]) g[f] = Mt(a[u], s[f]), u--, f--;
                        else if (p[m] === c[f]) g[f] = Mt(a[m], s[f]), Tt(e, g[f + 1], a[m]), m++, f--;
                        else if (p[u] === c[b]) g[b] = Mt(a[u], s[b]), Tt(e, a[m], a[u]), u--, b++;
                        else if (void 0 === l && (l = Vt(c, b, f), d = Vt(p, m, u)), l.has(p[m]))
                            if (l.has(p[u])) {
                                var h = d.get(c[b]),
                                    v = void 0 !== h ? a[h] : null;
                                if (null === v) {
                                    var y = Tt(e, a[m]);
                                    Mt(y, s[b]), g[b] = y
                                } else g[b] = Mt(v, s[b]), Tt(e, a[m], v), a[h] = null;
                                b++
                            } else Ht(a[u]), u--;
                        else Ht(a[m]), m++;
                        for (; b <= f;) {
                            var _ = Tt(e, g[f + 1]);
                            Mt(_, s[b]), g[b++] = _
                        }
                        for (; m <= u;) {
                            var w = a[m++];
                            null !== w && Ht(w)
                        }
                        return this.ht = c, Bt(e, g), S
                    }
                }),
                Rt = ["children", "term", "id", "render", "termClass", "descriptionClass"];

            function Ut(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function qt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ut(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ut(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function Gt(e) {
                var {
                    children: t,
                    term: o,
                    id: n = (0, ht.v4)("dt"),
                    render: i,
                    termClass: a,
                    descriptionClass: s
                } = e, c = (0, K.Z)(e, Rt), l = "list-item", d = {
                    term: Ct(l, qt(qt({}, e), {}, {
                        className: a
                    }), {
                        type: "term"
                    }),
                    description: Ct(l, qt(qt({}, e), {}, {
                        className: s
                    }), {
                        type: "description"
                    })
                };
                return D(At || (At = r([' <dt class="', '" id="', '">', "</dt> ", " "])), pe(d.term), n, o, Wt(t, $t.yR, (e => D(Dt || (Dt = r([' <dd role="definition" aria-labelledby="', '" class="', '"> ', " </dd> "])), n, pe(d.description), i ? i(qt(qt({}, c), {}, {
                    block: l
                }, e)) : e))))
            }
            const Xt = ce(class extends le {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "part", null), (0, i.Z)(this, "children", null), (0, i.Z)(this, "mapper", null), (0, i.Z)(this, "index", 0)
                }
                commitChild(e) {
                    0 === this.index && Ft(this.part);
                    var t = Tt(this.part);
                    Mt(t, e)
                }
                draw() {
                    var {
                        children: e,
                        mapper: t
                    } = this;
                    window.requestAnimationFrame((o => {
                        this && this.children === e && this.mapper === t && this.loopChildren(o)
                    }))
                }
                loopChildren(e) {
                    for (; this.index < this.children.length;) {
                        var t = this.children[this.index];
                        if (void 0 !== this.mapper && (t = this.mapper(t, this.index)), this.commitChild(t, this.index), this.index += 1, Date.now() - e > 10) return void this.draw()
                    }
                }
                update(e, t) {
                    var [o, r] = t;
                    return o === this.children && r === this.mapper || (this.part = e, this.children = o, this.mapper = r, this.index = 0, this.loopChildren(Date.now())), S
                }
                render() {
                    return S
                }
            });
            ce(class extends le {
                constructor(e) {
                    super(e), this.loaded = !1
                }
                update(e, t) {
                    var {
                        element: o
                    } = e, [r, ...n] = t;
                    return this.loaded ? S : (r.apply(void 0, [o, ...n]), this.loaded = !0)
                }
                render() {
                    return this.loaded
                }
            });
            var Jt = new WeakMap;
            class Qt extends le {
                constructor(e) {
                    super(e)
                }
                static onScroll(e) {
                    e.stopPropagation();
                    var t = Jt.get(e.target) || {};
                    null != t && t.activeView && (t.scrollPositions["".concat(t.activeView)] = e.target.scrollTop)
                }
                static saveScrollState(e, t) {
                    var o = Jt.get(e) || {
                            activeView: "",
                            scrollPositions: {}
                        },
                        r = o.activeView !== t;
                    if (r) {
                        var n = o.activeView || t;
                        o.activeView = t, o.scrollPositions["".concat(n)] = e.scrollTop || 0
                    }
                    return Jt.set(e, o), r
                }
                update(e, t) {
                    var [o] = t, {
                        element: r
                    } = e;
                    if (Qt.saveScrollState(r, o)) {
                        var n, i = Jt.get(r),
                            a = null !== (n = i.scrollPositions["".concat(o)]) && void 0 !== n ? n : 0;
                        window.cancelAnimationFrame(i.nextScroll), i.nextScroll = window.requestAnimationFrame((() => {
                            r.scrollTop = a
                        }))
                    }
                    return r.addEventListener("scroll", Qt.onScroll), ""
                }
                render() {
                    return S
                }
            }
            const Yt = ce(Qt);
            var Kt, eo, to = {},
                oo = ce(class extends le {
                    constructor() {
                        super(...arguments), this.st = to
                    }
                    render(e, t) {
                        return t()
                    }
                    update(e, t) {
                        var [o, r] = t;
                        if (Array.isArray(o)) {
                            if (Array.isArray(this.st) && this.st.length === o.length && o.every(((e, t) => e === this.st[t]))) return S
                        } else if (this.st === o) return S;
                        return this.st = Array.isArray(o) ? Array.from(o) : o, this.render(o, r)
                    }
                }),
                ro = ["block", "children", "itemId", "itemRenderer"];

            function no(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function io(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? no(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : no(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function ao(e) {
                var {
                    block: t,
                    children: o = [],
                    itemId: n = "id",
                    itemRenderer: i
                } = e, a = (0, K.Z)(e, ro);
                return o.length > 30 ? oo(o, (() => D(Kt || (Kt = r(["", ""])), Xt(o, (e => i(io(io({}, a), "object" == typeof e ? e : {
                    [n]: e
                }))))))) : Wt(o, (e => i(io(io({}, a), {}, {
                    block: t
                }, "object" == typeof e ? e : {
                    [n]: e
                }))))
            }
            var so, co = ["id", "element", "className", "itemClassName", "title", "ariaLive", "role"];

            function lo(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function po(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? lo(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : lo(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var go = ["render", "elementModifiers"];

            function mo(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function uo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mo(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : mo(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var bo, fo = "list-item";

            function ho(e) {
                var {
                    render: t,
                    elementModifiers: o
                } = e, n = (0, K.Z)(e, go), i = {
                    root: Ct(fo, n, o)
                };
                return D(so || (so = r(['<li class="', '"> ', " </li>"])), pe(i.root), t(uo(uo({}, n), {}, {
                    block: fo
                })))
            }
            var vo = ["id", "element", "className", "itemClassName", "title", "ariaLive", "role"];

            function yo(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function _o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? yo(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : yo(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function wo(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Oo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? wo(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : wo(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var ko = "list";

            function xo(e) {
                var {
                    type: t
                } = e, o = Nt(ko, e, {
                    type: t
                });
                return "description" === t ? function(e) {
                    var {
                        id: t,
                        element: o,
                        className: n = "",
                        itemClassName: i = "",
                        title: a,
                        ariaLive: s,
                        role: c = "list"
                    } = e, l = (0, K.Z)(e, co);
                    return D(eo || (eo = r(['<dl id="', '" class="', '" role="', '" aria-label="', '" aria-live="', '"> ', " </dl> "])), ge(t), ge(n), c, ge(a), ge(s), ao(po(po({}, l), {}, {
                        block: o,
                        className: i,
                        itemRenderer: Gt
                    })))
                }(Oo(Oo({}, e), {}, {
                    className: o,
                    element: ko
                })) : function(e) {
                    var {
                        id: t,
                        element: o,
                        className: n = "",
                        itemClassName: i = "",
                        title: a,
                        ariaLive: s,
                        role: c = "list"
                    } = e, l = (0, K.Z)(e, vo);
                    return D(bo || (bo = r(['<ul id="', '" class="', '" role="', '" aria-label="', '" aria-live="', '"> ', " </ul>"])), ge(t), n, c, ge(a), ge(s), ao(_o(_o({}, l), {}, {
                        block: o,
                        className: i,
                        itemRenderer: ho
                    })))
                }(Oo(Oo({}, e), {}, {
                    className: o,
                    element: ko
                }))
            }
            var Po, jo, Ao, Do, So, Co, No, $o, Eo, Zo, Io, To = (e, t, o) => {
                    var r = (0, X.ct)(e).toLowerCase();
                    return a.go.translate("".concat(t, ".").concat(r), void 0, o)
                },
                Mo = ["block"],
                Lo = ["block"],
                Bo = ["block", "disabled", "className"],
                zo = ["block"],
                Ho = ["block"],
                Fo = ["id", "block", "disabled", "className"],
                Vo = ["id", "block", "className"];

            function Wo(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Ro(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Wo(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Wo(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var Uo = a.go.template("messaging.usageWhat"),
                qo = a.go.template("messaging.usageHow"),
                Go = a.go.template("messaging.usageList"),
                Xo = a.go.template("messaging.timer"),
                Jo = a.go.template("messaging.categories"),
                Qo = a.go.template("messaging.default"),
                Yo = a.go.template("iab.layer1"),
                Ko = a.go.template("messaging.closeButton"),
                er = a.go.template("dialog.close"),
                tr = a.go.template("dialog.label"),
                or = a.go.template("buttons.denyAll"),
                rr = a.go.template("buttons.managePreferences"),
                nr = a.go.template("drawer.header"),
                ir = a.go.template("iab.vendor.title"),
                ar = e => {
                    var {
                        dispatch: t,
                        getState: o
                    } = e;
                    return () => {
                        var e = o();
                        !(0, X.fy)(e) && (0, X.MT)(e) && (t(ye.ZP.acceptAllConsent()), t(ye.ZP.saveConsent())), t(ye.ZP.hideDialog()), t(ye.ZP.showWidget())
                    }
                },
                sr = e => {
                    var {
                        dispatch: t
                    } = e;
                    return () => {
                        t(ye.ZP.hideDialog()), t(ye.ZP.showDrawer())
                    }
                },
                cr = e => {
                    var {
                        dispatch: t
                    } = e;
                    return () => {
                        t(ye.ZP.hideDialog()), t(ye.ZP.showVendorConsent(rt.J.REPLACE))
                    }
                },
                lr = e => {
                    var t = Object.assign({}, (function(e) {
                            if (null == e) throw new TypeError("Cannot destructure " + e)
                        }(e), e)),
                        {
                            prefix: o,
                            store: n
                        } = t,
                        {
                            getState: i
                        } = n,
                        a = i(),
                        s = To(a, "buttons.dialog.openDrawer", rr());
                    return D(jo || (jo = r(["", ""])), he(Ro(Ro({}, e), {}, {
                        className: "".concat(o, "manage"),
                        label: s,
                        onClick: sr(n),
                        modifiers: {
                            element: {
                                type: "manage"
                            }
                        }
                    })))
                },
                dr = e => {
                    var {
                        block: t
                    } = e, o = (0, K.Z)(e, Mo), {
                        store: n
                    } = o, {
                        getState: i
                    } = n, a = i();
                    return D(Ao || (Ao = r(["", ""])), !(0, dt.EB)(a) && (0, X.Lk)(a) ? lr(e) : function(e) {
                        var {
                            prefix: t,
                            store: o
                        } = e;
                        return D(ze || (ze = r(["", ""])), he(Re(Re({}, e), {}, {
                            className: "".concat(t, "save"),
                            label: Xe(),
                            onClick: qe(o),
                            modifiers: Ge
                        })))
                    }(Ro(Ro({}, o), {}, {
                        block: t
                    })))
                },
                pr = e => {
                    var {
                        block: t
                    } = e, o = (0, K.Z)(e, Lo), {
                        store: n
                    } = e, {
                        getState: i
                    } = n, a = i();
                    if (!(0, X.ks)(a)) return "";
                    var s = To(a, "buttons.dialog.denyAll", or());
                    return D(Do || (Do = r(["", ""])), function(e) {
                        var {
                            prefix: t,
                            store: o
                        } = e;
                        return D(De || (De = r(["", ""])), he(Ee(Ee({
                            label: Me()
                        }, e), {}, {
                            className: "".concat(t, "denyAll"),
                            onClick: Ie(o),
                            modifiers: Te
                        })))
                    }(Ro(Ro({}, o), {}, {
                        block: t,
                        label: s
                    })))
                },
                gr = e => {
                    var {
                        block: t,
                        disabled: o,
                        className: n = ""
                    } = e, i = (0, K.Z)(e, Bo), {
                        prefix: a,
                        store: s
                    } = i, {
                        getState: c
                    } = s, l = c(), d = "buttons", p = o || !(0, X.Z9)(l), g = {
                        root: ne({
                            prefix: a,
                            block: t,
                            element: d,
                            modifiers: {
                                element: {
                                    disabled: p
                                }
                            },
                            className: n
                        })
                    };
                    return (0, X.MT)(l) ? (0, X.rq)(l) ? D(So || (So = r(['<div class="', '"> ', " </div>"])), pe(g.root), lr(Ro(Ro({}, i), {}, {
                        block: d
                    }))) : "" : (0, dt.EB)(l) || (0, X.S6)(l) ? D(Co || (Co = r([' <div class="', '"> ', " ", " ", " </div> "])), pe(g.root), dr(Ro(Ro({}, i), {}, {
                        block: d
                    })), function(e) {
                        var {
                            prefix: t,
                            store: o
                        } = e;
                        return D(ve || (ve = r(["", ""])), he(we(we({}, e), {}, {
                            className: "".concat(t, "accept-all"),
                            label: Pe(),
                            onClick: ke(o),
                            modifiers: xe
                        })))
                    }(Ro(Ro({}, i), {}, {
                        block: d
                    })), pr(Ro(Ro({}, i), {}, {
                        block: d
                    }))) : D(No || (No = r([' <div class="', '"> ', " ", " ", " ", " </div>"])), pe(g.root), function(e) {
                        var {
                            prefix: t,
                            store: o
                        } = e;
                        return D(Oe || (Oe = r(["", ""])), he(Ae(Ae({}, e), {}, {
                            className: "".concat(t, "accept"),
                            label: Ne(),
                            onClick: Se(o),
                            modifiers: Ce
                        })))
                    }(Ro(Ro({}, i), {}, {
                        block: d
                    })), function(e) {
                        var {
                            prefix: t,
                            store: o
                        } = e;
                        return D(Ze || (Ze = r(["", ""])), he(Be(Be({}, e), {}, {
                            className: "".concat(t, "deny"),
                            label: Ve(),
                            onClick: He(o),
                            modifiers: Fe
                        })))
                    }(Ro(Ro({}, i), {}, {
                        block: d
                    })), pr(Ro(Ro({}, i), {}, {
                        block: d
                    })), (0, X.rq)(l) ? lr(Ro(Ro({}, i), {}, {
                        block: d
                    })) : "")
                },
                mr = e => {
                    var {
                        line: t
                    } = e;
                    return t
                },
                ur = "dialog";

            function br(e) {
                var {
                    id: t = (0, ht.v4)(ur),
                    block: o,
                    className: n = ""
                } = e, i = (0, K.Z)(e, Vo), {
                    prefix: s = "osano-cm-",
                    store: c
                } = i, {
                    getState: l
                } = c, d = l(), p = (0, dt.EB)(d), g = (0, X.GW)(d), m = !(0, X.Z9)(d), u = p ? (0, X.NB)(d) : (0, X.d7)(d), b = (0, X.XN)(d), {
                    dialogType: f,
                    displayPosition: h
                } = b, v = "".concat(t, "__label"), y = {
                    root: ne({
                        prefix: s,
                        block: o,
                        element: ur,
                        modifiers: {
                            element: {
                                hidden: m,
                                position: h,
                                type: f,
                                context: (0, X.S0)(d) && "amp"
                            }
                        },
                        className: n
                    }),
                    content: ne({
                        prefix: s,
                        block: ur,
                        element: "content"
                    })
                };
                return D(Io || (Io = r([' <div id="', '" role="dialog" aria-label="', '" aria-describedby="', '" class="', '" @keyup="', '"> ', ' <div class="', '"> ', " ", " ", " ", " ", " </div> ", " </div> "])), t, tr(), v, pe(y.root), (e => {
                    if (e.preventDefault(), e.stopPropagation(), "keyup" === e.type) {
                        var {
                            dispatch: t,
                            getState: o
                        } = c, r = o();
                        27 === (e.charCode || e.keyCode) && (0, X.nt)(r) && ((0, X.ks)(r) ? Ie(c)() : ar(c)(), t(ye.ZP.focusWidget()))
                    }
                }), (e => {
                    var {
                        block: t,
                        className: o,
                        prefix: n,
                        store: i
                    } = e, a = i.getState();
                    if (!(0, X.nt)(a)) return "";
                    var s = {
                            root: ne({
                                prefix: n,
                                block: t,
                                element: "close",
                                className: o
                            })
                        },
                        c = (0, X.ks)(a) ? Ie(i) : ar(i);
                    return D(Po || (Po = r([' <button class="', '" @click="', '"> ', " </button> "])), pe(s.root), c, jt({
                        store: i,
                        label: er()
                    }))
                })(Ro(Ro({}, i), {}, {
                    block: "dialog"
                })), pe(y.content), (e => {
                    var {
                        id: t,
                        block: o,
                        disabled: n,
                        className: i = ""
                    } = e, a = (0, K.Z)(e, Fo), {
                        prefix: s,
                        store: {
                            getState: c
                        }
                    } = a, l = c(), d = (0, X.GW)(l), p = {
                        root: ne({
                            prefix: s,
                            block: o,
                            className: i,
                            element: "message",
                            modifiers: {
                                element: {
                                    disabled: n
                                }
                            }
                        })
                    };
                    return D(Zo || (Zo = r([' <span id="', '" class="', '"> ', " ", " ", " </span> "])), t, pe(p.root), (0, dt.EB)(l) ? Yo() : d ? Uo() : Qo(), (0, X.MT)(l) ? Xo() : (0, X.qg)(l) ? Jo() : "", (0, X.nt)(l) && (0, X.ks)(l) ? Ko() : "")
                })(Ro(Ro({}, i), {}, {
                    block: "content",
                    id: v
                })), g ? (e => {
                    var {
                        block: t
                    } = e, o = (0, K.Z)(e, Ho), {
                        prefix: n
                    } = o, i = "usage-list", a = {
                        root: ne({
                            prefix: n,
                            block: t,
                            element: i
                        })
                    };
                    return D(Eo || (Eo = r([' <p class="', '"> ', " ", " </p> "])), pe(a.root), qo(), xo(Ro(Ro({}, o), {}, {
                        block: i,
                        children: Go().split(/\r?\n/).map((e => ({
                            line: e
                        }))),
                        render: mr
                    })))
                })(Ro(Ro({}, i), {}, {
                    block: "content"
                })) : "", function(e) {
                    var {
                        prefix: t,
                        store: o
                    } = e, n = o.getState(), i = (0, X.Kg)(n), s = a.go.template("buttons.".concat(i)), c = a.go.template("messaging.".concat(i)), l = "".concat(t, "storage-policy"), d = s(void 0, c()), p = (0, X.Cc)(n);
                    return D(Ye || (Ye = r(["", ""])), Qe(et(et({}, e), {}, {
                        ariaDescribedBy: "".concat(t, "aria.newWindow"),
                        className: l,
                        label: d,
                        href: p,
                        target: "_blank"
                    })))
                }(Ro(Ro({}, i), {}, {
                    block: "content"
                })), p || (0, X.Sl)(d) ? (e => {
                    var {
                        block: t
                    } = e, o = (0, K.Z)(e, zo), {
                        prefix: n,
                        store: i,
                        drawerId: a
                    } = o, s = i.getState(), c = "drawer-links", l = {
                        root: ne({
                            prefix: n,
                            block: t,
                            element: c
                        })
                    };
                    return D($o || ($o = r([' <p class="', '"> ', " ", " </p> "])), pe(l.root), Qe(Ro(Ro({}, o), {}, {
                        block: c,
                        type: "manage",
                        label: nr(),
                        href: "#".concat(a),
                        onClick: sr(i)
                    })), (0, dt.EB)(s) ? Qe(Ro(Ro({}, o), {}, {
                        block: c,
                        type: "vendor-list",
                        label: ir(),
                        onClick: cr(i)
                    })) : "")
                })(Ro(Ro({}, i), {}, {
                    block: "content",
                    id: t
                })) : "", p || (0, X.Bb)(d) ? xo(Ro(Ro({}, i), {}, {
                    tabIndex: m ? -1 : 0,
                    block: "dialog",
                    children: u.map((e => ({
                        category: e,
                        id: "".concat(s, "dialog-toggle--category_").concat(e)
                    }))),
                    itemId: "category",
                    role: "group",
                    render: Pt
                })) : "", gr(Ro(Ro({}, i), {}, {
                    block: "dialog"
                })))
            }
            var fr, hr = () => (e, t) => {
                e(ye.ZP.revertConsent()), e(ye.ZP.hideDrawer()), setTimeout((() => {
                    e(ye.ZP.hideDoNotSell())
                }), 400);
                var o = t();
                (0, X.fy)(o) ? e(ye.ZP.showWidget()): e(ye.ZP.showDialog())
            };
            var vr, yr, _r, wr, Or, kr = ce(class extends le {
                    constructor(e) {
                        super(e), this.tt = new WeakMap
                    }
                    render(e) {
                        return [e]
                    }
                    update(e, t) {
                        var [o] = t;
                        if (Zt(this.et) && (!Zt(o) || this.et.strings !== o.strings)) {
                            var r = zt(e).pop(),
                                n = this.tt.get(this.et.strings);
                            if (void 0 === n) {
                                var i = document.createDocumentFragment();
                                (n = G(C, i)).setConnected(!1), this.tt.set(this.et.strings, n)
                            }
                            Bt(n, [r]), Tt(n, void 0, r)
                        }
                        if (Zt(o)) {
                            if (!Zt(this.et) || this.et.strings !== o.strings) {
                                var a = this.tt.get(o.strings);
                                if (void 0 !== a) {
                                    var s = zt(a).pop();
                                    Ft(e), Tt(e, void 0, s), Bt(e, [s])
                                }
                            }
                            this.et = o
                        } else this.et = void 0;
                        return this.render(o)
                    }
                }),
                xr = e => {
                    var {
                        category: t,
                        open: o
                    } = e;
                    return e => {
                        e(ye.ZP.toggleDisclosure(t, o))
                    }
                },
                Pr = ["block", "name", "expiry", "provider", "purpose"],
                jr = ["block", "name", "provider", "purpose"],
                Ar = ["category", "disclosures", "onToggle", "className", "label", "tabIndex"];

            function Dr(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Sr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Dr(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Dr(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var Cr = a.go.template("disclosure.cookie.name"),
                Nr = a.go.template("disclosure.cookie.provider"),
                $r = a.go.template("disclosure.cookie.expiry"),
                Er = a.go.template("disclosure.cookie.purpose"),
                Zr = a.go.template("disclosure.script.name"),
                Ir = a.go.template("disclosure.script.provider"),
                Tr = a.go.template("disclosure.script.purpose"),
                Mr = a.go.template("messaging.viewCookies"),
                Lr = a.go.template("disclosure.none"),
                Br = e => {
                    var {
                        type: t
                    } = e;
                    return "no-results" === t ? D(_r || (_r = r(["", ""])), Lr()) : D(wr || (wr = r(["", ""])), kr("script" === t ? (e => {
                        var {
                            block: t,
                            name: o,
                            provider: n,
                            purpose: i
                        } = e, a = (0, K.Z)(e, jr), {
                            prefix: s = "osano-cm-"
                        } = a, c = "script-disclosure", l = Nt(c, {
                            prefix: s,
                            block: t
                        }), d = {
                            termClass: Nt("title", {
                                prefix: s,
                                block: c
                            }),
                            descriptionClass: Nt("description", {
                                prefix: s,
                                block: c
                            })
                        };
                        return D(yr || (yr = r(["", ""])), xo(Sr(Sr({}, a), {}, {
                            block: t,
                            className: l,
                            children: [Sr(Sr({}, d), {}, {
                                term: Zr(),
                                children: [o || " "]
                            }), Sr(Sr({}, d), {}, {
                                term: Ir(),
                                children: [n || " "]
                            }), Sr(Sr({}, d), {}, {
                                term: Tr(),
                                children: [i || " "]
                            })],
                            type: "description",
                            headingLevel: 3,
                            title: o
                        })))
                    })(e) : (e => {
                        var {
                            block: t,
                            name: o,
                            expiry: n,
                            provider: i,
                            purpose: a
                        } = e, s = (0, K.Z)(e, Pr), {
                            prefix: c = "osano-cm-"
                        } = s, l = "cookie-disclosure", d = Nt(l, Sr(Sr({}, s), {}, {
                            prefix: c,
                            block: t
                        })), p = {
                            termClass: Nt("title", {
                                prefix: c,
                                block: l
                            }),
                            descriptionClass: Nt("description", {
                                prefix: c,
                                block: l
                            })
                        };
                        return D(vr || (vr = r(["", ""])), xo(Sr(Sr({}, s), {}, {
                            block: t,
                            className: d,
                            children: [Sr(Sr({}, p), {}, {
                                term: Cr(),
                                children: [o || " "]
                            }), Sr(Sr({}, p), {}, {
                                term: Nr(),
                                children: [i || " "]
                            }), Sr(Sr({}, p), {}, {
                                term: $r(),
                                children: [n || " "]
                            }), Sr(Sr({}, p), {}, {
                                term: Er(),
                                children: [a || " "]
                            })],
                            type: "description"
                        })))
                    })(e)))
                },
                zr = "disclosure";
            var Hr, Fr, Vr, Wr = o(980),
                Rr = (e, t) => o => r => {
                    var n = o.target.checked;
                    r(ye.ZP.setConsent(e, n ? a.eJ : a.Dv, t))
                },
                Ur = ["category", "block", "hasDisclosures"];

            function qr(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Gr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? qr(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : qr(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var Xr, Jr, Qr = a.go.template("iab.basis.consent");

            function Yr(e) {
                var {
                    category: t = "",
                    block: o,
                    hasDisclosures: n = !0
                } = e, i = (0, K.Z)(e, Ur), {
                    prefix: s,
                    store: {
                        dispatch: c,
                        getState: l
                    }
                } = i, d = l(), p = "".concat(s, "drawer-toggle--category_").concat(t, "--description"), g = a.go.translate("categories.".concat(t, ".label")) || "", m = a.go.translate("categories.".concat(t, ".label")) || "", u = a.go.translate("categories.".concat(t, ".description")).split("\n\n") || "", b = (Wr.i3["".concat(t)] || []).map((e => ({
                    purposeId: e,
                    type: "purposes"
                }))), f = (0, X.Fl)(d, t), h = "description", v = {
                    description: ne({
                        prefix: s,
                        block: o,
                        element: h
                    })
                };
                return D(Hr || (Hr = r(["", ' <div class="', '"> <p id="', '"> ', " </p> ", " </div> ", ""])), _t(Gr(Gr({}, i), {}, {
                    ariaLevel: "2",
                    id: "".concat(s, "drawer-toggle--category_").concat(t),
                    descriptionId: p,
                    category: t,
                    block: o,
                    label: g,
                    title: m || g,
                    checked: (0, X.mr)(d, t),
                    disabled: (0, X.LP)(d, t),
                    onChange: e => c(Rr(t, (0, X.Tc)(d))(e)),
                    className: ie({
                        prefix: s,
                        block: o,
                        element: "drawer-toggle"
                    }).join(" ")
                })), pe(v.description), p, u.map(((e, t) => D(Fr || (Fr = r(["", "", ""])), t > 0 ? D(Vr || (Vr = r(["<br><br>"]))) : null, e))), (0, dt.EB)(d) ? xo(Gr(Gr({}, i), {}, {
                    block: h,
                    children: [{
                        term: Qr(),
                        children: b
                    }],
                    type: "description",
                    itemId: "purposeId",
                    render: ct
                })) : "", n ? function(e) {
                    var {
                        category: t,
                        disclosures: o = [],
                        onToggle: n = (() => {}),
                        className: i = "",
                        label: a,
                        tabIndex: s = 0
                    } = e, c = (0, K.Z)(e, Ar), {
                        prefix: l,
                        store: {
                            dispatch: d,
                            getState: p
                        }
                    } = c, g = p(), m = "".concat(l).concat(t, "_disclosures"), u = (0, X.MR)(g) && !(0, X.AP)(g, t), b = !(0, X.zM)(g, t), f = {
                        root: Ct(zr, Sr(Sr({}, c), {}, {
                            className: i
                        }), {
                            collapse: b,
                            loading: u
                        }),
                        toggle: Ct("toggle", Sr(Sr({}, c), {}, {
                            block: zr
                        }))
                    }, h = e => {
                        if (e.preventDefault(), "keypress" === e.type) {
                            var o = e.charCode || e.keyCode;
                            if (32 !== o && 13 !== o) return !1
                        }
                        return d(xr({
                            category: t
                        })), n(t, !b), !1
                    };
                    return D(Or || (Or = r(['<div class="', '"> <div class="', '" @click="', '" @keypress="', '" tabindex="', '" role="link" aria-expanded="', '" aria-controls="', '" aria-label="', " ", '"> ', " </div> ", " </div>"])), pe(f.root), pe(f.toggle), h, h, s, !b, m, a, Mr(), Mr(), xo(Sr(Sr({}, c), {}, {
                        id: m,
                        block: "disclosure",
                        children: o,
                        render: Br,
                        ariaLive: b ? "none" : "polite"
                    })))
                }(Gr(Gr({}, i), {}, {
                    block: o,
                    category: t,
                    disclosures: f,
                    label: g
                })) : "")
            }
            var Kr = ["id", "block"];

            function en(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function tn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? en(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : en(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var on = a.go.template("drawer.description"),
                rn = a.go.template("doNotSell.description"),
                nn = a.go.template("doNotSell.link");
            var an, sn = (e, t) => o => {
                    o(ye.ZP.toggleExpansionPanel(e, t))
                },
                cn = ["body", "header", "id", "tabIndex"],
                ln = (e, t) => {
                    var {
                        prefix: o,
                        element: r
                    } = t, n = e.nextElementSibling, i = "".concat(o).concat(r, "--expanded");
                    n.parentNode.classList.toggle(i)
                },
                dn = "expansion-panel";

            function pn(e) {
                var {
                    body: t = "",
                    header: o,
                    id: n = (0, ht.v4)("expansionPanel"),
                    tabIndex: i = 0
                } = e, a = (0, K.Z)(e, cn), {
                    prefix: s = "osano-cm-",
                    store: c
                } = a, {
                    dispatch: l,
                    getState: d
                } = c, p = d(), g = (0, X.p3)(p, n), m = {
                    prefix: s,
                    block: dn
                }, u = {
                    root: Ct(dn, e),
                    body: Ct("body", m),
                    toggle: Ct("toggle", m)
                }, b = e => {
                    if (e.preventDefault(), e.stopPropagation(), "keypress" === e.type) {
                        var t = e.charCode || e.keyCode;
                        if (32 !== t && 13 !== t) return !1
                    }
                    return l(sn(n)), ln(e.target, {
                        prefix: s,
                        element: dn
                    }), !1
                };
                return D(an || (an = r([' <div class="', '"> <div class="', '" @click="', '" @keypress="', '" tabindex="', '" role="link" aria-expanded="', '" aria-controls="', '" aria-label="', '" id="', '-control"> ', ' </div> <div id="', '" class="', '" role="presentation" aria-labelledby="', '-control" aria-live="', '"> ', " </div> </div> "])), pe(u.root), pe(u.toggle), b, b, i, g, n, o, n, o, n, pe(u.body), n, g ? "polite" : "none", t)
            }
            var gn, mn = o(394),
                un = e => t => o => {
                    var r = t.target.checked;
                    o((0, mn.jq)(e, r ? a.eJ : a.Dv))
                },
                bn = ["block", "description", "descriptionLegal", "name", "specialFeatureId"];

            function fn(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function hn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? fn(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : fn(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var vn = a.go.template("disclosure.label");

            function yn(e) {
                var {
                    block: t,
                    description: o,
                    descriptionLegal: n,
                    name: i,
                    specialFeatureId: a
                } = e, s = (0, K.Z)(e, bn), {
                    store: {
                        dispatch: c,
                        getState: l
                    }
                } = s, d = l(), {
                    prefix: p = "osano-cm-"
                } = s, g = {
                    description: ne({
                        prefix: p,
                        block: t,
                        element: "description"
                    })
                };
                return D(gn || (gn = r([" ", ' <div class="', '">', "</div> ", " "])), _t(hn(hn({}, s), {}, {
                    id: "".concat(p, "drawer-toggle--specialFeature_").concat(a),
                    block: t,
                    label: i,
                    title: i,
                    checked: (0, dt.yl)(d, {
                        specialFeatureId: a
                    }),
                    onChange: e => c(un(a)(e)),
                    className: ie({
                        prefix: p,
                        block: t,
                        element: "drawer-toggle"
                    }).join(" ")
                })), pe(g.description), o, pn(hn(hn({}, s), {}, {
                    id: "".concat(p, "special-feature-disclosure--").concat(a),
                    header: vn(),
                    body: n
                })))
            }
            var _n, wn = ["id", "active", "block", "className"];

            function On(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function kn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? On(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : On(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var xn, Pn = a.go.template("buttons.save"),
                jn = a.go.template("messaging.poweredBy");

            function An(e) {
                var {
                    id: t,
                    active: o,
                    block: n,
                    className: i = ""
                } = e, s = (0, K.Z)(e, wn), {
                    prefix: c = "osano-cm-",
                    store: {
                        dispatch: l,
                        getState: d
                    }
                } = s, p = d(), g = (0, dt.EB)(p), m = [{
                    category: a.Np,
                    hasDisclosures: !1
                }], u = (0, X.Tc)(p) ? m : [...g ? (0, X.NB)(p).map((e => ({
                    category: e
                }))) : (0, X.CP)(p).map((e => ({
                    category: e
                }))), ...(0, X.sx)(p) ? m : [], ...g ? Object.keys(a.go.translate("iab.specialFeatures")).map((e => ({
                    specialFeatureId: e,
                    name: a.go.translate("iab.specialFeatures.".concat(e, ".name")),
                    description: a.go.translate("iab.specialFeatures.".concat(e, ".description")),
                    descriptionLegal: a.go.translate("iab.specialFeatures.".concat(e, ".descriptionLegal")),
                    id: "osano-cm-tcf-v2-specialFeatures--specialFeature_".concat(e),
                    render: yn
                }))) : []], b = "view", f = {
                    root: ne({
                        prefix: c,
                        block: n,
                        element: b,
                        className: i,
                        modifiers: {
                            element: {
                                active: o,
                                type: "consent"
                            }
                        }
                    }),
                    poweredBy: ne({
                        prefix: c,
                        block: b,
                        element: "powered-by"
                    })
                };
                return D(_n || (_n = r(['<div class="', '"> ', " ", " ", ' <div class="', '"> ', " </div> </div>"])), pe(f.root), function(e) {
                    var {
                        id: t,
                        block: o
                    } = e, n = (0, K.Z)(e, Kr), {
                        prefix: i,
                        store: {
                            getState: s
                        }
                    } = n, c = {
                        description: ne({
                            prefix: i,
                            block: o,
                            element: "description"
                        })
                    }, l = s(), d = (0, dt.EB)(l), p = (0, X.Cc)(l), g = (0, X.go)(l), m = (0, X.Kg)(l), u = a.go.template("buttons.".concat(m)), b = a.go.template("messaging.".concat(m)), f = tn(tn({}, n), {}, {
                        block: "content",
                        className: "osano-cm-storage-policy",
                        label: u(void 0, b()),
                        href: p,
                        target: "_blank"
                    });
                    return D(Xr || (Xr = r(['<p id="', '" class="', '" tabindex="-1"> ', " </p> ", ' <p class="', '"> ', " ", " ", " </p>"])), ge(t), pe(c.description), (0, X.Tc)(l) ? rn() : on(), (0, X.Tc)(l) ? D(Jr || (Jr = r(['<p class="', '"> ', " ", " </p>"])), pe(c.description), nn(), Qe(f)) : "", pe(c.description), g && !(0, X.Tc)(l) ? Qe(f) : "", d ? bt(tn({
                        block: "description"
                    }, n)) : "", d ? ct(tn({
                        block: "description"
                    }, n)) : "")
                }(kn(kn({}, s), {}, {
                    prefix: c,
                    id: t,
                    block: b
                })), xo(kn(kn({}, s), {}, {
                    prefix: c,
                    block: b,
                    children: u,
                    render: Yr,
                    itemClassName: ie({
                        prefix: c,
                        element: "drawer-item"
                    }).join(" ")
                })), he(kn(kn({}, s), {}, {
                    prefix: c,
                    block: b,
                    className: "osano-cm-save",
                    label: Pn(),
                    onClick: () => l((e => {
                        e(ye.ZP.saveConsent()), e(ye.ZP.hideDrawer()), setTimeout((() => {
                            e(ye.ZP.hideDoNotSell())
                        }), 400), e(ye.ZP.showWidget())
                    }))
                })), pe(f.poweredBy), Qe(kn(kn({}, s), {}, {
                    prefix: c,
                    block: "powered-by",
                    label: jn(),
                    ariaDescribedBy: "".concat(c, "aria.external"),
                    href: "https://www.osano.com/?utm_campaign=cmp&utm_source=cmp-dialog&utm_medium=drawer"
                })))
            }
            var Dn = {
                preventScroll: !0
            };

            function Sn(e) {
                return null !== e.offsetParent
            }
            var Cn, Nn = function(e) {
                    return (e || document).querySelectorAll('button, a[href]:not([rel="ignore"]), input:not([type="hidden"]):not([type="file"]), select, textarea, [tabindex]:not([tabindex="-1"]):not([data-focus="first"]):not([data-focus="last"])')
                },
                $n = function(e, t) {
                    if (null !== e) {
                        var o = document.activeElement,
                            r = Array.from(Nn(e)).filter(Sn)[0];
                        try {
                            r.focus(Dn)
                        } catch (l) {
                            t && t.focus(Dn)
                        }
                        return o
                    }
                },
                En = {
                    first: "last",
                    last: "first"
                },
                Zn = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return function() {
                        var t = Array.from(Nn(this.parentNode)),
                            o = En["".concat(e)] || "first",
                            r = "last" === o ? t.length - 1 : 0,
                            n = "last" === o ? -1 : 1,
                            i = t[parseInt(r, 10)];
                        if (i) {
                            if (i.getAttribute("data-focus") === o && (i = t[r + n]), i.getAttribute("data-focus") === e) return;
                            try {
                                i.focus()
                            } catch (l) {}
                        }
                    }
                };

            function In(e) {
                var {
                    dataFocus: t
                } = e;
                return D(Cn || (Cn = r(["", ""])), function(e) {
                    var {
                        onFocus: t,
                        dataFocus: o
                    } = e;
                    return D(xn || (xn = r(['<span tabindex="0" aria-hidden="true" data-focus="', '" @focus="', '"></span>'])), o, t)
                }({
                    dataFocus: t,
                    onFocus: Zn(t)
                }))
            }
            var Tn, Mn, Ln, Bn = ["block", "element", "type", "itemId"],
                zn = ["id", "active", "className"];

            function Hn(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Fn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Hn(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Hn(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var Vn, Wn = a.go.template("iab.legal.preamble"),
                Rn = a.go.template("iab.legal.object"),
                Un = e => {
                    var {
                        block: t,
                        element: o,
                        type: n,
                        itemId: i
                    } = e, s = (0, K.Z)(e, Bn), {
                        prefix: c,
                        store: {
                            dispatch: l,
                            getState: d
                        }
                    } = s, p = {
                        description: Ct(o, e)
                    }, g = a.go.translate("iab.".concat(n, "s.").concat(i, ".name")), m = a.go.translate("iab.".concat(n, "s.").concat(i, ".description")), u = a.go.translate("iab.".concat(n, "s.").concat(i, ".descriptionLegal"));
                    return D(Tn || (Tn = r(['<p class="', '">', '</p> <p class="', '">', "</p> ", ""])), pe(p.description), m, pe(p.description), u, "purpose" === n ? D(Mn || (Mn = r(['<p class="', '"> ', " </p>"])), pe(p.description), _t(Fn(Fn({}, s), {}, {
                        ariaLabel: "".concat(g, " - ").concat(Rn()),
                        ariaDescription: "".concat(m, " ").concat(u),
                        onChange: e => {
                            return l((t = i, e => o => {
                                var r = e.target.checked;
                                o((0, mn.nu)(t, r ? a.eJ : a.Dv))
                            })(e));
                            var t
                        },
                        id: "".concat(c).concat(o, "-toggle--").concat(o, "_").concat(i),
                        block: t,
                        label: Rn(),
                        type: "opt-out",
                        checked: (0, dt.NX)(d(), {
                            purposeId: i
                        })
                    }))) : "")
                },
                qn = e => Object.keys(a.go.translate("iab.".concat(e, "s"))).map((t => ({
                    element: e,
                    term: a.go.translate("iab.".concat(e, "s.").concat(t, ".name")),
                    id: "osano-cm-tcf-v2-".concat(e, "s--").concat(e, "_").concat(t),
                    itemId: t,
                    children: [{
                        type: e,
                        itemId: t
                    }]
                })));

            function Gn(e) {
                var {
                    id: t,
                    active: o,
                    className: n = ""
                } = e, i = (0, K.Z)(e, zn), a = "view", s = qn("purpose"), c = qn("specialPurpose"), l = qn("feature"), d = qn("specialFeature"), p = Fn(Fn({}, i), {}, {
                    type: "description",
                    block: a,
                    render: Un
                }), g = {
                    root: Ct(a, Fn(Fn({}, i), {}, {
                        className: n
                    }), {
                        active: o,
                        type: "legal"
                    }),
                    description: Ct("description", p)
                };
                return D(Ln || (Ln = r(['<div class="', '"> <p id="', '" class="', '" tabindex="-1"> ', " </p> ", "", "", "", " </div> "])), pe(g.root), ge(t), pe(g.description), Wn(), xo(Fn(Fn({}, p), {}, {
                    children: s
                })), xo(Fn(Fn({}, p), {}, {
                    children: c
                })), xo(Fn(Fn({}, p), {}, {
                    children: l
                })), xo(Fn(Fn({}, p), {}, {
                    children: d
                })))
            }
            var Xn, Jn, Qn = e => t => o => {
                    var r = t.target.checked;
                    o((0, mn.f5)(e, r ? a.eJ : a.Dv))
                },
                Yn = ["category", "block", "vendorId"];

            function Kn(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function ei(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Kn(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Kn(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var ti, oi = a.go.template("iab.basis.legit"),
                ri = a.go.template("iab.basis.consent"),
                ni = a.go.template("iab.basis.combined"),
                ii = a.go.template("iab.terms.specialPurposes"),
                ai = a.go.template("iab.terms.features"),
                si = a.go.template("iab.terms.specialFeatures"),
                ci = a.go.template("iab.legal.title"),
                li = a.go.template("messaging.privacyPolicy"),
                di = a.go.template("iab.vendor.usesNonCookieAccess"),
                pi = a.go.template("iab.vendor.maxCookieStorage"),
                gi = a.go.template("disclosure.day"),
                mi = a.go.template("disclosure.dayPlural"),
                ui = a.go.template("messaging.moreDetails"),
                bi = e => ({
                    purposeId: e,
                    type: "purposes"
                }),
                fi = e => ({
                    purposeId: e,
                    type: "specialPurposes"
                }),
                hi = e => ({
                    purposeId: e,
                    type: "features"
                }),
                vi = e => ({
                    purposeId: e,
                    type: "specialFeatures"
                }),
                yi = (e, t, o) => t.length ? [{
                    term: e(),
                    children: t.map(o)
                }] : [];

            function _i(e) {
                var {
                    category: t = "",
                    block: o,
                    vendorId: n
                } = e, i = (0, K.Z)(e, Yn), {
                    store: {
                        dispatch: a,
                        getState: s
                    }
                } = i, c = s(), {
                    name: l,
                    purposes: d,
                    legIntPurposes: p,
                    flexiblePurposes: g,
                    specialPurposes: m,
                    features: u,
                    specialFeatures: b,
                    policyUrl: f,
                    cookieMaxAgeSeconds: h,
                    usesNonCookieAccess: v,
                    deviceStorageDisclosureUrl: y
                } = (0, dt.GM)(c, {
                    vendorId: n
                }), {
                    prefix: _
                } = i, w = d.filter((e => !g.includes(e))), O = Math.max(h || 0, 0) / 60 / 60 / 24;
                return D(Xn || (Xn = r(["", " ", "", "", ""])), function(e) {
                    var {
                        id: t,
                        level: o,
                        title: n
                    } = e;
                    return n ? D(Vn || (Vn = r(['<div id="', '" role="heading" aria-level="', '" class="osano-visually-hidden"> ', " </div>"])), ge(t), ge(o), n) : ""
                }({
                    level: 2,
                    title: l
                }), _t(ei(ei({}, i), {}, {
                    id: "".concat(_, "drawer-toggle--vendor_").concat(n),
                    category: t,
                    block: o,
                    label: l,
                    title: l,
                    checked: !(0, dt.wY)(c, {
                        vendorId: n
                    }),
                    onChange: e => a(Qn(n)(e)),
                    className: Nt("drawer-toggle", e)
                })), Qe(ei(ei({}, i), {}, {
                    block: o,
                    className: Nt("vendor-link", e),
                    label: li(),
                    href: f,
                    ariaDescribedBy: "".concat(_, "aria.externalNewWindow"),
                    target: "_blank"
                })), pn(ei(ei({}, i), {}, {
                    block: o,
                    id: "".concat(_, "vendor-disclosure--").concat(n),
                    header: ci(),
                    body: xo(ei(ei({}, i), {}, {
                        block: "disclosures",
                        className: Nt("disclosures", ei(ei({}, e), {}, {
                            block: "expansion-panel"
                        })),
                        children: [{
                            term: pi(),
                            children: [{
                                type: "string",
                                disclosure: "".concat(O, " ").concat(1 === O ? gi() : mi())
                            }, ...v ? [{
                                type: "string",
                                disclosure: D(Jn || (Jn = r(["<em>", "</em>"])), di())
                            }] : []]
                        }, ...yi(oi, p, bi), ...yi(ri, w, bi), ...yi(ni, g, bi), ...yi(ii, m, fi), ...yi(ai, u, hi), ...yi(si, b, vi), ...y ? [{
                            term: ui(),
                            children: [{
                                type: "link",
                                href: y,
                                label: y,
                                ariaDescribedBy: "".concat(_, "aria.externalNewWindow"),
                                title: "".concat(l, " ").concat(ci()),
                                target: "_blank"
                            }]
                        }] : []],
                        type: "description",
                        render: e => {
                            var {
                                type: t,
                                disclosure: o
                            } = e;
                            return "string" === t ? o : "link" === t ? Qe(e) : ct(e)
                        }
                    }))
                })))
            }
            var wi = ["id", "active", "className"];

            function Oi(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function ki(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Oi(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Oi(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var xi, Pi, ji, Ai = a.go.template("iab.vendor.preamble");

            function Di(e) {
                var {
                    id: t,
                    active: o,
                    className: n = ""
                } = e, i = (0, K.Z)(e, wi), {
                    prefix: a = "osano-cm-",
                    store: {
                        getState: s
                    }
                } = i, c = "view", l = s(), d = (0, dt.ao)(l), p = {
                    root: Ct(c, ki(ki({}, e), {}, {
                        className: n
                    }), {
                        active: o,
                        type: "vendor-consent"
                    }),
                    description: Ct("description", ki(ki({}, i), {}, {
                        block: c
                    }))
                };
                return D(ti || (ti = r(['<div class="', '"> <p id="', '" class="', '" tabindex="-1"> ', " </p> ", " </div>"])), pe(p.root), ge(t), pe(p.description), Ai(), kr(xo(ki(ki({}, i), {}, {
                    block: c,
                    children: d,
                    render: _i,
                    itemId: "vendorId",
                    itemClassName: Nt({
                        prefix: a,
                        element: "drawer-item"
                    })
                }))))
            }
            var Si = ["activeView"],
                Ci = ["id"],
                Ni = ["className", "id"];

            function $i(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function Ei(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $i(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : $i(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var Zi = document.createElement("span");
            Zi.innerHTML = "&slarr;";
            var Ii, Ti = a.go.template("drawer.header"),
                Mi = a.go.template("doNotSell.header"),
                Li = a.go.template("iab.legal.title"),
                Bi = a.go.template("iab.vendor.title"),
                zi = a.go.template("drawer.close"),
                Hi = (Ii = (0, ht.v4)("ccpaoptouticon"), D(fr || (fr = r(['<div class="ccpa-opt-out-icon"> <svg role="img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 14" style="enable-background:new 0 0 30 14" xml:space="preserve" aria-labelledby="', '"> <title id="', '">California Consumer Privacy Act (CCPA) Opt-Out Icon</title> <g transform="translate(-1275.000000, -200.000000)"> <g transform="translate(1275.000000, 200.000000)"> <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z"/> </g> </g> <g transform="translate(-1275.000000, -200.000000)"> <g transform="translate(1275.000000, 200.000000)"> <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f" d="M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z"/> <path style="fill:#fff" d="M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z"/> <path style="fill:#06f" d="M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z"/> </g> </g> </svg> </div>'])), Ii, Ii)),
                Fi = {
                    [rt.n.CONSENT]: Ti,
                    [rt.n.DO_NOT_SELL]: Mi,
                    [rt.n.LEGAL]: Li,
                    [rt.n.VENDOR_CONSENT]: Bi
                },
                Vi = e => e.stopPropagation(),
                Wi = e => {
                    switch (e) {
                        case rt.n.CONSENT:
                        case rt.n.DO_NOT_SELL:
                            return An;
                        case rt.n.LEGAL:
                            return Gn;
                        case rt.n.VENDOR_CONSENT:
                            return Di
                    }
                    return () => D(xi || (xi = r([""])))
                },
                Ri = e => {
                    var {
                        dispatch: t
                    } = e;
                    return () => t((e => {
                        e(ye.ZP.goBack())
                    }))
                },
                Ui = e => {
                    var {
                        id: t
                    } = e, o = (0, K.Z)(e, Ci), {
                        store: n
                    } = e, {
                        getState: i
                    } = n, a = "info-dialog-header", s = i(), c = (0, X.oC)(s), l = (0, X.eV)(s), d = {
                        root: Ct(a, e),
                        close: Ct("close", Ei(Ei({}, e), {}, {
                            block: a
                        })),
                        header: Ct("header", Ei(Ei({}, e), {}, {
                            block: a
                        }))
                    }, p = Fi["".concat(c["".concat(l)])] || function() {
                        return ""
                    }, g = Fi["".concat(c["".concat(l - 1)])] || function() {
                        return ""
                    };
                    return D(Pi || (Pi = r(['<div class="', '" role="presentation"> <p role="heading" aria-level="1" id="', '" class="', '"> ', " </p> ", ' <button class="', '" @click="', '"> ', " </button> ", " </div>"])), pe(d.root), ge(t), pe(d.header), p(), (0, X.Tc)(s) ? Hi : "", pe(d.close), (e => {
                        var {
                            dispatch: t
                        } = e;
                        return () => t(hr())
                    })(n), jt(Ei(Ei({}, o), {}, {
                        block: a,
                        label: zi()
                    })), l > 0 ? he(Ei(Ei({}, o), {}, {
                        block: a,
                        className: "osano-cm-back",
                        label: Zi,
                        ariaLabel: "← ".concat(g()),
                        onClick: Ri(n)
                    })) : "")
                },
                qi = "info";

            function Gi(e) {
                var {
                    className: t = "",
                    id: o
                } = e, n = (0, K.Z)(e, Ni), {
                    prefix: i,
                    store: {
                        dispatch: a,
                        getState: s
                    }
                } = n, c = s(), l = !(0, X.Qc)(c), d = (0, X.XN)(c), p = (0, X.oC)(c).map(((e, t) => ({
                    name: e,
                    index: t,
                    id: "".concat(i).concat(e, "--view"),
                    view: Wi(e)
                }))), g = (0, X.eV)(c), {
                    infoDialogPosition: m
                } = d, u = "".concat(o, "__label"), b = {
                    wrapper: Ct("info-dialog", Ei(Ei({}, e), {}, {
                        className: t
                    }), {
                        hidden: l
                    }),
                    root: Ct(qi, Ei(Ei({}, n), {}, {
                        block: "info-dialog"
                    }), {
                        position: m,
                        do_not_sell: (0, X.Tc)(c),
                        open: !l
                    }),
                    view: Ct("info-views", Ei(Ei({}, n), {}, {
                        block: qi
                    }), {
                        hidden: l,
                        position: "".concat(g)
                    })
                }, f = p[parseInt(g, 10)], h = Ei(Ei({}, n), {}, {
                    tabIndex: l ? -1 : 0,
                    activeView: f && f.name,
                    block: "info-views"
                });
                return D(ji || (ji = r(['<div id="', '" role="dialog" aria-labelledby="', '" aria-describedby="', '" aria-modal="true" aria-hidden="', '" class="', '" @click="', '"> ', ' <div role="presentation" class="', '" @click="', '" ', ' @keyup="', '"> ', ' <div class="', '" role="presentation"> ', " </div> </div> ", " </div>"])), o, u, ge(f && f.id), l, pe(b.wrapper), (() => a(hr())), In({
                    dataFocus: "first"
                }), pe(b.root), Vi, Yt(null == f ? void 0 : f.name), (e => {
                    "keyup" === e.type && (27 === (e.charCode || e.keyCode) && (a(hr()), a((e => e(ye.ZP.focusWidget())))))
                }), Ui(Ei(Ei({}, n), {}, {
                    block: qi,
                    id: u
                })), pe(b.view), oo([p], (() => Wt(p, (e => {
                    var {
                        name: t
                    } = e;
                    return t
                }), (e => {
                    var {
                        activeView: t
                    } = e, o = (0, K.Z)(e, Si);
                    return e => {
                        var {
                            view: r,
                            index: n,
                            id: i,
                            name: a
                        } = e;
                        return kr(r(Ei(Ei({}, o), {}, {
                            index: n,
                            id: i,
                            active: t === a
                        })))
                    }
                })(h)))), In({
                    dataFocus: "last"
                }))
            }
            var Xi = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    if (0 === e.indexOf("rgb")) try {
                        return e.replace(/[^\d,.]/g, "").split(",").map((e => {
                            var t = parseFloat(e);
                            if (isNaN(t)) throw new Error("Invalid color value");
                            return t
                        }))
                    } catch (s) {
                        return Xi(t, "rgba(0,0,0,1)")
                    }
                    var o = "".concat(e || "").toLowerCase().replace(/[^0-9a-f]/, "");
                    if (3 === o.length || 4 === o.length) o = o.split("").map((e => "".concat(e).concat(e))).join("");
                    else if (6 !== o.length && 8 !== o.length) return Xi(t, "rgba(0,0,0,1)");
                    for (var r = [], n = 0; n < o.length && r.length < 3;) {
                        var i = parseInt(o.slice(n, n + 2), 16);
                        r.push(255 & i), n += 2
                    }
                    if (n < o.length && 3 === r.length) {
                        var a = parseInt(o.slice(n, n + 2), 16);
                        r.push(a / 255)
                    }
                    return r
                },
                Ji = e => (~~(255 * e) % 256 + 256) % 256,
                Qi = (e, t, o) => (Math.round(299 * e) + Math.round(587 * t) + Math.round(114 * o)) / 1e3 >= 128 ? 0 : 1,
                Yi = (e, t, o) => Ji(.21 * e + .72 * t + .07 * o),
                Ki = (e, t) => {
                    var o = Math.abs(t) !== t ? -1 : 1,
                        r = Math.abs(t) <= 1,
                        n = Math.abs(t);
                    n = Math.floor(Math.min(255, Math.max(-255, r ? Math.round(255 * n) : n))) * o;
                    var [i, a, s] = "string" == typeof e ? Xi(e) : e;
                    return (i += n) > 255 ? i = 255 : i < 0 && (i = 0), (s += n) > 255 ? s = 255 : s < 0 && (s = 0), (a += n) > 255 ? a = 255 : a < 0 && (a = 0), "#".concat(function() {
                        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return t.slice(0, 3).reduce(((e, t) => "".concat(e).concat("00".concat(t.toString(16)).slice(-2))), "")
                    }(i, a, s))
                };
            var ea, ta = {},
                oa = e => {
                    var t, o, r = ta["".concat(e)] || [Xi(e)];
                    return r[1] = null !== (t = r[1]) && void 0 !== t ? t : Qi.apply(null, r[0]), r[2] = null !== (o = r[2]) && void 0 !== o ? o : Yi.apply(null, r[0]), ta["".concat(e)] = r, r
                },
                ra = function(e) {
                    var t, o, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .08,
                        [, n] = oa(e);
                    return (r < 0 ? !n : n) ? (t = e, o = Math.abs(r), Ki(t, o)) : ((e, t) => Ki(e, -t))(e, Math.abs(r))
                };
            var na, ia = ["block", "id"],
                aa = a.go.template("messaging.widgetAltText"),
                sa = e => {
                    var {
                        store: t
                    } = e;
                    return () => {
                        t.dispatch((e => {
                            e(ye.ZP.hideWidget()), e(ye.ZP.showDrawer())
                        }))
                    }
                },
                ca = "widget";
            var la = o(248),
                da = o(330),
                pa = o(214);
            var ga, ma;

            function ua(e) {
                var {
                    dom: t,
                    drawerId: o,
                    dialogId: r,
                    widgetId: n
                } = e;
                return e => i => s => {
                    var c = i(s),
                        {
                            type: l,
                            payload: d
                        } = s,
                        p = e.getState(),
                        g = (0, X.Wf)(p),
                        m = (0, X.Fr)(p);
                    switch (l) {
                        case ye.V5.render:
                            t.render();
                            break;
                        case ye.V5.ready:
                            switch (d) {
                                case "blocking":
                                case "consent":
                                case "dom":
                                    if ((0, X.dk)(p)) {
                                        var u = (0, X.fM)(p) || !(0, X.fy)(p);
                                        requestAnimationFrame((() => {
                                            u ? e.dispatch(ye.ZP.showDialog()) : e.dispatch(ye.ZP.showWidget())
                                        }))
                                    }
                            }
                            break;
                        case ye.V5.saveConsent:
                            (0, X.fy)(p) && requestAnimationFrame((() => {
                                e.dispatch(ye.ZP.hideDialog())
                            }));
                            break;
                        case ye.V5.toggleDisclosure:
                            var {
                                category: b
                            } = d;
                            !(0, X.MR)(p) && !(0, X.AP)(p, b) && (e.dispatch(ye.ZP.fetchDisclosuresBegin(b)), function(e) {
                                var {
                                    customerId: t,
                                    configId: o,
                                    category: r,
                                    language = "en"
                                } = e, n = {
                                    language,
                                    category: r
                                };
                                return da.Z.get("".concat(pa.DISCLOSURE_URI, "/customer/").concat(t, "/config/").concat(o), n)
                            }({
                                customerId: g,
                                configId: m,
                                category: b
                            }).then((t => {
                                var o = t || [];
                                return e.dispatch(ye.ZP.fetchDisclosuresSuccess(o, b)), t
                            })).catch((t => {
                                e.dispatch(ye.ZP.fetchDisclosuresFailure(t, b))
                            })));
                            break;
                        case ye.V5.hideDialog:
                            clearTimeout(ma);
                            break;
                        case ye.V5.showDialog:
                            (0, X.VG)(p) && (ma && clearTimeout(ma), ma = (e => (e.dispatch(ye.ZP.timeoutBegin()), setTimeout((() => {
                                (0, X.fy)(e.getState()) || (e.dispatch(ye.ZP.acceptAllConsent()), e.dispatch(ye.ZP.saveConsent())), (0, X.fM)(e.getState()) && (e.dispatch(ye.ZP.timeoutComplete()), e.dispatch(ye.ZP.showWidget())), (0, X.JU)(e.getState()) || e.dispatch(ye.ZP.hideDialog())
                            }), 1e3 * (0, X.BK)(e.getState()))))(e)), ga && ga.focus(), ga = $n(a.Av.getElementById(r));
                            break;
                        case ye.V5.showWidget:
                            $n(a.Av.getElementById(n), ga), ga = void 0;
                            break;
                        case ye.V5.focusWidget:
                            var f;
                            null === (f = a.Av.getElementById(n)) || void 0 === f || f.focus(), ga = void 0;
                            break;
                        case ye.V5.showVendorConsent:
                        case ye.V5.showLegal:
                        case ye.V5.showDrawer:
                            ga && ga.focus(), ga = $n(a.Av.getElementById(o))
                    }
                    return c
                }
            }
            var ba = o(798),
                fa = o(460);
            var ha = o(445),
                va = o(469);
            var ya;

            function _a(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function wa(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _a(Object(o), !0).forEach((function(t) {
                        (0, i.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : _a(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var Oa = e => window.getComputedStyle(a.Av.querySelector(".osano-cm-window")).getPropertyValue("--".concat(e));
            Object.defineProperty(document, "createElement", wa(wa({}, ba.IP), {}, {
                value: function() {
                    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    var r = ba.IP.value.apply(this, t);
                    return r.tagName, r
                }
            }));
            var ka = new WeakMap;
            class xa {
                get middleware() {
                    var {
                        middleware: e
                    } = ka.get(this);
                    return e
                }
                get requiredNodes() {
                    var {
                        container: e,
                        styleContainer: t
                    } = ka.get(this);
                    return [e, t]
                }
                constructor(e) {
                    var {
                        dynamicMiddleware: t,
                        store: o,
                        config: n
                    } = e, i = a.Av.createElement("div");
                    i.setAttribute("data-nosnippet", "");
                    var s = a.Av.createElement("style");
                    ha.QF && va.qI.value.call(s, "nonce", ha.QF);
                    var c = (0, ht.v4)("dialog"),
                        l = (0, ht.v4)("drawer"),
                        d = (0, ht.v4)("widget");
                    ka.set(this, {
                        template: () => {
                            var {
                                getState: e
                            } = o, {
                                prefix: t = "osano-cm-"
                            } = e(), i = "window";
                            return D(ya || (ya = r([" ", " ", " ", " ", " "])), function(e) {
                                var {
                                    prefix: t
                                } = e;
                                return D(q || (q = r(['<div hidden class="osano-visually-hidden"> <span id="', '">', '</span> <span id="', '">', '</span> <span id="', '">', "</span> </div>"])), "".concat(t, "aria.newWindow"), J(), "".concat(t, "aria.external"), Q(), "".concat(t, "aria.externalNewWindow"), Y())
                            }({
                                config: n,
                                prefix: t,
                                store: o
                            }), br({
                                id: c,
                                block: i,
                                config: n,
                                prefix: t,
                                store: o,
                                drawerId: l
                            }), function(e) {
                                var {
                                    block: t,
                                    id: o
                                } = e, n = (0, K.Z)(e, ia), {
                                    prefix: i = "osano-cm-",
                                    store: {
                                        getState: a
                                    }
                                } = n, s = a(), {
                                    widgetPosition: c
                                } = (0, X.XN)(s), l = !(0, X.Z9)(s), d = !(0, X.Qc)(s), p = (0, X.Kx)(s), g = {
                                    root: ne({
                                        prefix: i,
                                        block: t,
                                        element: ca,
                                        modifiers: {
                                            element: {
                                                hidden: p || !d || !l,
                                                position: c
                                            }
                                        }
                                    }),
                                    outline: ne({
                                        prefix: i,
                                        block: ca,
                                        element: "outline"
                                    }),
                                    dot: ne({
                                        prefix: i,
                                        block: ca,
                                        element: "dot"
                                    })
                                };
                                return D(na || (na = r([' <button id="', '" class="', '" title="', '" aria-label="', '" @click="', '"> <svg role="img" width="40" height="40" viewBox="0 0 71.85 72.23" xmlns="http://www.w3.org/2000/svg" aria-labelledby="', '"> <path d="m67.6 36.73a6.26 6.26 0 0 1 -3.2-2.8 5.86 5.86 0 0 0 -5.2-3.1h-.3a11 11 0 0 1 -11.4-9.5 6 6 0 0 1 -.1-1.4 9.2 9.2 0 0 1 .4-2.9 8.65 8.65 0 0 0 .2-1.6 5.38 5.38 0 0 0 -1.9-4.3 7.3 7.3 0 0 1 -2.5-5.5 3.91 3.91 0 0 0 -3.5-3.9 36.46 36.46 0 0 0 -15 1.5 33.14 33.14 0 0 0 -22.1 22.7 35.62 35.62 0 0 0 -1.5 10.2 34.07 34.07 0 0 0 4.8 17.6.75.75 0 0 0 .07.12c.11.17 1.22 1.39 2.68 3-.36.47 5.18 6.16 5.65 6.52a34.62 34.62 0 0 0 55.6-21.9 4.38 4.38 0 0 0 -2.7-4.74z" stroke-width="3" class="', '"></path> <path d="m68 41.13a32.37 32.37 0 0 1 -52 20.5l-2-1.56c-2.5-3.28-5.62-7.15-5.81-7.44a32 32 0 0 1 -4.5-16.5 34.3 34.3 0 0 1 1.4-9.6 30.56 30.56 0 0 1 20.61-21.13 33.51 33.51 0 0 1 14.1-1.4 1.83 1.83 0 0 1 1.6 1.8 9.38 9.38 0 0 0 3.3 7.1 3.36 3.36 0 0 1 1.2 2.6 3.37 3.37 0 0 1 -.1 1 12.66 12.66 0 0 0 -.5 3.4 9.65 9.65 0 0 0 .1 1.7 13 13 0 0 0 10.5 11.2 16.05 16.05 0 0 0 3.1.2 3.84 3.84 0 0 1 3.5 2 10 10 0 0 0 4.1 3.83 2 2 0 0 1 1.4 2z" stroke-width="3" class="', '"></path> <g class="', '"> <path d="m26.6 31.43a5.4 5.4 0 1 1 5.4-5.43 5.38 5.38 0 0 1 -5.33 5.43z"></path> <path d="m25.2 53.13a5.4 5.4 0 1 1 5.4-5.4 5.44 5.44 0 0 1 -5.4 5.4z"></path> <path d="m47.9 52.33a5.4 5.4 0 1 1 5.4-5.4 5.32 5.32 0 0 1 -5.24 5.4z"></path> </g> </svg> </button> '])), o, pe(g.root), aa(), aa(), sa(e), o, pe(g.outline), pe(g.outline), pe(g.dot))
                            }({
                                id: d,
                                block: i,
                                config: n,
                                prefix: t,
                                store: o
                            }), Gi({
                                id: l,
                                block: i,
                                config: n,
                                prefix: t,
                                store: o
                            }))
                        },
                        container: i,
                        dynamicMiddleware: t,
                        middleware: ua({
                            dom: this,
                            dialogId: c,
                            widgetId: d,
                            drawerId: l
                        }),
                        styleContainer: s,
                        store: o
                    })
                }
                setup() {
                    var e = ka.get(this) || {},
                        {
                            dynamicMiddleware: t,
                            store: o
                        } = e;
                    if (t && t.addMiddleware(this.middleware), !e.unsubscribe) {
                        var r = o.subscribe(this.render.bind(this));
                        ka.set(this, wa(wa({}, e), {}, {
                            unsubscribe: r
                        }))
                    }
                    return this
                }
                teardown() {
                    var e = ka.get(this) || {},
                        {
                            dynamicMiddleware: t
                        } = e;
                    return t.removeMiddleware(this.middleware), e.unsubscribe && (e.unsubscribe(), delete e.unsubscribe, ka.set(this, wa({}, e))), this
                }
                render() {
                    if (null !== a.Av.body) {
                        var {
                            template: e,
                            container: t,
                            styleContainer: o,
                            store: n
                        } = ka.get(this);
                        if ((0, X.dk)(n.getState())) {
                            var {
                                getState: i
                            } = n, s = i(), {
                                prefix: c = "osano-cm-"
                            } = s, l = ie({
                                prefix: c,
                                block: "window",
                                modifiers: {
                                    block: {
                                        context: (0, X.S0)(s) && "amp"
                                    }
                                }
                            }).join(" ");
                            return t.className !== l && (t.className = l), t.parentNode && t.parentNode === a.Av.body || (a.Av.body.firstChild ? fa.q.value.call(a.Av.body, t, a.Av.body.firstChild) : la.q.value.call(a.Av.body, t)), o.parentNode && o.parentNode === a.Av.head || (a.Av.head.firstChild ? fa.q.value.call(a.Av.head, o, a.Av.head.firstChild) : la.q.value.call(a.Av.head, o)), va.qI.value.call(t, "dir", a.go.isRTL ? "rtl" : "ltr"), G((e => {
                                var t = e.getState(),
                                    {
                                        buttonBackgroundColor: o,
                                        buttonForegroundColor: n,
                                        buttonDenyBackgroundColor: i,
                                        buttonDenyForegroundColor: s,
                                        dialogBackgroundColor: c,
                                        dialogForegroundColor: l,
                                        infoDialogBackgroundColor: d,
                                        infoDialogForegroundColor: p,
                                        infoDialogOverlayColor: g,
                                        linkColor: m,
                                        toggleOffBackgroundColor: u,
                                        toggleButtonOffColor: b,
                                        toggleOnBackgroundColor: f,
                                        toggleButtonOnColor: h,
                                        widgetColor: v,
                                        widgetFillColor: y,
                                        widgetOutlineColor: _
                                    } = (0, X.XN)(t),
                                    w = "rgba(".concat(Xi(d).slice(0, 3).join(","), ",0)");
                                return D(ea || (ea = r([" ", " .osano-cm-window { direction: ", "; text-align: ", "; } .osano-cm-dialog { background: ", "; color: ", "; } .osano-cm-dialog__close { color: ", "; stroke: ", "; } .osano-cm-dialog__close:focus { background-color: ", "; border-color: ", "; stroke: ", "; } .osano-cm-dialog__close:hover { stroke: ", "; } .osano-cm-dialog__close:focus:hover { stroke: ", "; } .osano-cm-info-dialog { background: ", "; } .osano-cm-header, .osano-cm-info-dialog-header { background: ", "; background: linear-gradient( 180deg, ", " 2.5em, ", " 100% ); } .osano-cm-info { background: ", "; color: ", "; } .osano-cm-close { background-color: transparent; border-color: transparent; } .osano-cm-info-dialog-header__close { color: ", "; stroke: ", "; } .osano-cm-info-dialog-header__close:focus { background-color: ", "; border-color: ", "; stroke: ", "; } .osano-cm-info-dialog-header__close:hover { stroke: ", "; } .osano-cm-info-dialog-header__close:focus:hover { stroke: ", "; } .osano-cm-disclosure__list:first-of-type::after { background-color: ", "; } .osano-cm-disclosure__toggle, .osano-cm-expansion-panel__toggle { color: ", "; } .osano-cm-disclosure__toggle:hover, .osano-cm-disclosure__toggle:active, .osano-cm-expansion-panel__toggle:hover, .osano-cm-expansion-panel__toggle:active { color: ", "; } .osano-cm-disclosure__toggle:focus, .osano-cm-expansion-panel__toggle:focus { color: ", "; } .osano-cm-button { background-color: ", "; border-color: ", "; color: ", "; } .osano-cm-button--type_deny { background-color: ", "; border-color: ", "; color: ", "; } .osano-cm-button:focus, .osano-cm-button:hover { background-color: ", "; } .osano-cm-button--type_deny:focus, .osano-cm-button--type_deny:hover { background-color: ", "; } .osano-cm-link { color: ", "; } .osano-cm-link:hover, .osano-cm-link:active { color: ", "; } .osano-cm-link:focus { color: ", "; } .osano-cm-toggle__switch { background-color: ", "; } .osano-cm-toggle__switch::after { background-color: ", "; border-color: ", "; } .osano-cm-toggle__switch::before { border-color: transparent; } .osano-cm-toggle__input:checked + .osano-cm-toggle__switch { background-color: ", "; border-color: ", "; } .osano-cm-toggle__input:checked + .osano-cm-toggle__switch::after { background-color: ", "; border-color: ", "; } .osano-cm-toggle__input:focus + .osano-cm-toggle__switch, .osano-cm-toggle__input:hover + .osano-cm-toggle__switch { background-color: ", "; border-color: ", "; } .osano-cm-toggle__input:focus + .osano-cm-toggle__switch::before { border-color: ", "; } .osano-cm-toggle__input:checked:focus + .osano-cm-toggle__switch, .osano-cm-toggle__input:checked:hover + .osano-cm-toggle__switch { background-color: ", "; border-color: ", "; } .osano-cm-toggle__input:checked:focus + .osano-cm-toggle__switch::before { border-color: ", "; } .osano-cm-toggle__input:disabled + .osano-cm-toggle__switch, .osano-cm-toggle__input:disabled:focus + .osano-cm-toggle__switch, .osano-cm-toggle__input:disabled:hover + .osano-cm-toggle__switch { background-color: ", "; border-color: ", "; } .osano-cm-toggle__input:disabled + .osano-cm-toggle__switch::after, .osano-cm-toggle__input:disabled:focus + .osano-cm-toggle__switch::after, .osano-cm-toggle__input:disabled:hover + .osano-cm-toggle__switch::after { background-color: ", "; border-color: ", "; } .osano-cm-toggle__input:disabled + .osano-cm-toggle__switch::before, .osano-cm-toggle__input:disabled:focus + .osano-cm-toggle__switch::before, .osano-cm-toggle__input:disabled:hover + .osano-cm-toggle__switch::before { border-color: transparent; } .osano-cm-toggle__input:disabled:checked + .osano-cm-toggle__switch, .osano-cm-toggle__input:disabled:checked:focus + .osano-cm-toggle__switch, .osano-cm-toggle__input:disabled:checked:hover + .osano-cm-toggle__switch { background-color: ", "; border-color: ", "; } .osano-cm-toggle__input:disabled:checked + .osano-cm-toggle__switch::after, .osano-cm-toggle__input:disabled:checked:focus + .osano-cm-toggle__switch::after, .osano-cm-toggle__input:disabled:checked:hover + .osano-cm-toggle__switch::after { background-color: ", "; border-color: ", "; } .osano-cm-toggle__input:disabled:checked + .osano-cm-toggle__switch::before, .osano-cm-toggle__input:disabled:checked:focus + .osano-cm-toggle__switch::before, .osano-cm-toggle__input:disabled:checked:hover + .osano-cm-toggle__switch::before { border-color: transparent; } .osano-cm-widget__outline { fill: ", "; stroke: ", "; } .osano-cm-widget__dot { fill: ", "; } "])), '.osano-cm-window{font-smooth:always;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothingz:auto;--fade-transition-time:700ms;--slide-transition-time:400ms;display:block;font-family:Helvetica,Arial,Hiragino Sans GB,STXihei,Microsoft YaHei,WenQuanYi Micro Hei,Hind,MS Gothic,Apple SD Gothic Neo,NanumBarunGothic,sans-serif;font-size:16px;left:0;line-height:1;position:absolute;top:0;width:100%;z-index:2147483638}.osano-cm-window--context_amp{height:100%}.osano-visually-hidden{height:1px;left:-10000px;margin:-1px;opacity:0;overflow:hidden;position:absolute;width:1px}.osano-cm-button{border-radius:.25em;border-style:solid;border-width:thin;cursor:pointer;flex:1 1 auto;font-size:1em;font-weight:700;line-height:1;margin:.125em;min-width:6em;padding:.5em .75em;transition-duration:.2s;transition-property:background-color;transition-timing-function:ease-out}.osano-cm-button--type_icon{border-radius:50%;height:1em;line-height:0;min-width:1em;width:1em}.osano-cm-button:focus,.osano-cm-button:hover{outline:none}.osano-cm-close{stroke-width:1px;border-radius:50%;border-style:solid;border-width:2px;box-sizing:initial;cursor:pointer;height:20px;line-height:normal;margin:.5em;min-height:20px;min-width:20px;order:0;outline:none;overflow:hidden;padding:0;text-decoration:none;transform:rotate(0deg);transition-duration:.2s;transition-property:transform,color,background-color,stroke,stroke-width;transition-timing-function:ease-out;width:20px;z-index:2}.osano-cm-close:focus,.osano-cm-close:hover{stroke-width:2px;transform:rotate(90deg)}.ccpa-opt-out-icon{display:flex;flex:1 1 auto}.ccpa-opt-out-icon svg{max-width:40px}.osano-cm-link{cursor:pointer;text-decoration:underline;transition-duration:.2s;transition-property:color;transition-timing-function:ease-out}.osano-cm-link:active,.osano-cm-link:hover{outline:none}.osano-cm-link:focus{font-weight:700;outline:none}.osano-cm-link--type_feature,.osano-cm-link--type_purpose,.osano-cm-link--type_specialFeature,.osano-cm-link--type_specialPurpose{cursor:help;display:block;-webkit-text-decoration:dashed;text-decoration:dashed}.osano-cm-link--type_denyAll{display:block;text-align:right}[dir=rtl] .osano-cm-link--type_denyAll{text-align:left}.osano-cm-link--type_vendor{display:block}.osano-cm-vendor-link{font-size:.75em}.osano-cm-list-item{margin:0}.osano-cm-list-item--type_term{border-top-style:solid;border-top-width:1px;font-size:.875rem;font-weight:400;margin-bottom:.25em;margin-top:.5em;padding:.5em .75rem 0;position:relative;top:-1px}.osano-cm-list-item--type_description{font-size:.75rem;font-weight:lighter;padding:0 .75rem}.osano-cm-list{list-style-position:outside;list-style-type:none;margin:0;padding:0}.osano-cm-list__list-item{text-indent:0}.osano-cm-list--type_description{margin:0 -1em}.osano-cm-list:first-of-type .osano-cm-list__list-item:first-of-type{border-top-width:0;margin-top:0;padding-top:0}.osano-cm-toggle{align-items:center;display:flex;flex-direction:row-reverse;justify-content:flex-start;margin:.25em 0;pointer-events:auto;position:relative}.osano-cm-toggle__label{margin:0 .5em 0 0}[dir=rtl] .osano-cm-toggle__label{margin:0 0 0 .5em}.osano-cm-toggle__switch{border-radius:14px;border-style:solid;border-width:2px;box-sizing:initial;color:#0000;display:block;flex-shrink:0;height:18px;line-height:0;margin:0;position:relative;text-indent:-9999px;transition-duration:.2s;transition-property:background-color;transition-timing-function:ease-out;width:40px}.osano-cm-toggle__switch:hover{cursor:pointer}.osano-cm-toggle__switch:after{border-radius:9px;border-width:0;height:18px;left:0;top:0;width:18px}.osano-cm-toggle__switch:before{border-radius:16px;border-width:2px;bottom:-6px;box-sizing:border-box;left:-6px;right:-6px;top:-6px}.osano-cm-toggle__switch:after,.osano-cm-toggle__switch:before{border-style:solid;content:"";margin:0;position:absolute;transform:translateX(0);transition-duration:.3s;transition-property:transform,left,border-color;transition-timing-function:ease-out}.osano-cm-toggle__switch:after:active,.osano-cm-toggle__switch:before:active{transition-duration:.1s}.osano-cm-toggle__switch:after:active{width:26px}.osano-cm-toggle__switch:before:active{width:34px}[dir=rtl] .osano-cm-toggle__switch:after{left:100%;transform:translateX(-100%)}.osano-cm-toggle__input{height:1px;left:-10000px;margin:-1px;opacity:0;overflow:hidden;position:absolute;width:1px}[dir=rtl] .osano-cm-toggle__input{left:0;right:-10000px}.osano-cm-toggle__input:disabled{cursor:default}.osano-cm-toggle--type_checkbox .osano-cm-toggle__switch{border-radius:4px;border-style:solid;border-width:1px;height:22px;width:22px}.osano-cm-toggle--type_checkbox .osano-cm-toggle__switch:after{background-color:#0000!important;border-bottom-width:2px;border-left-width:2px;border-radius:0;content:none;height:6px;left:3px;top:3px;transform:rotate(-45deg);transition-property:color;transition-timing-function:ease-out;width:12px}.osano-cm-toggle--type_opt-out .osano-cm-toggle__switch{border-radius:4px;border-style:solid;border-width:1px;height:22px;width:22px}.osano-cm-toggle--type_opt-out .osano-cm-toggle__switch:after,.osano-cm-toggle--type_opt-out .osano-cm-toggle__switch:before{background-color:#0000!important;border-bottom-width:1px;border-radius:0;border-top-width:1px;content:none;height:0;left:-3px;top:7px;transition-property:color;transition-timing-function:ease-out;width:12px}.osano-cm-toggle--type_opt-out .osano-cm-toggle__switch:after{transform:translate(50%,50%) rotate(-45deg)}.osano-cm-toggle--type_opt-out .osano-cm-toggle__switch:before{transform:translate(50%,50%) rotate(45deg)}.osano-cm-toggle__input:checked+.osano-cm-toggle__switch:after{left:100%;transform:translateX(-100%)}[dir=rtl] .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:after{left:0;transform:translateX(0)}.osano-cm-toggle__input:disabled+.osano-cm-toggle__switch{cursor:default}.osano-cm-toggle--type_checkbox .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:after{content:"";left:3px;top:3px;transform:rotate(-45deg)}.osano-cm-toggle--type_opt-out .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:after,.osano-cm-toggle--type_opt-out .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:before{content:"";left:-3px;top:7px}.osano-cm-toggle--type_opt-out .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:after{transform:translate(50%,50%) rotate(-45deg)}.osano-cm-toggle--type_opt-out .osano-cm-toggle__input:checked+.osano-cm-toggle__switch:before{transform:translate(50%,50%) rotate(45deg)}.osano-cm-toggle--type_checkbox .osano-cm-toggle__input:disabled+.osano-cm-toggle__switch,.osano-cm-toggle--type_opt-out .osano-cm-toggle__input:disabled+.osano-cm-toggle__switch{opacity:.3}.osano-cm-widget{background:none;border:none;bottom:12px;cursor:pointer;height:40px;opacity:.9;outline:none;padding:0;position:fixed;transition:transform .1s linear 0s,opacity .4s linear 0ms,visibility 0ms linear 0ms;visibility:visible;width:40px;z-index:2147483636}.osano-cm-widget--position_right{right:12px}.osano-cm-widget--position_left{left:12px}.osano-cm-widget:focus{outline:solid;outline-offset:.2rem}.osano-cm-widget:focus,.osano-cm-widget:hover{opacity:1;transform:scale(1.1)}.osano-cm-widget--hidden{opacity:0;transition-delay:0ms,0ms,.4s;visibility:hidden}.osano-cm-widget--hidden:focus,.osano-cm-widget--hidden:hover{opacity:0;transform:scale(1)}.osano-cm-dialog{align-items:center;box-sizing:border-box;font-size:1em;line-height:1.25;overflow:auto;padding:1.5em;position:fixed;transition-delay:0ms,0ms;transition-duration:.7s,0ms;transition-property:opacity,visibility;visibility:visible;z-index:2147483637}.osano-cm-dialog--hidden{opacity:0;transition-delay:0ms,.7s;visibility:hidden}.osano-cm-dialog--type_bar{box-sizing:border-box;display:flex;flex-direction:column;left:0;right:0}.osano-cm-dialog--type_bar .osano-cm-button{flex:none;margin:.125em auto;width:80%}@media screen and (min-width:768px){.osano-cm-dialog--type_bar{flex-direction:row}.osano-cm-dialog--type_bar .osano-cm-button{flex:1 1 100%;margin:.25em .5em;width:auto}}.osano-cm-dialog--type_box{flex-direction:column;max-height:calc(100vh - 2em);max-width:20em;width:calc(100vw - 2em)}.osano-cm-dialog__close{position:absolute;right:0;top:0}.osano-cm-dialog__list{margin:.5em 0 0;padding:0}.osano-cm-dialog__list .osano-cm-item{display:flex;margin-top:0}.osano-cm-dialog__list .osano-cm-item:last-child{margin-bottom:0}.osano-cm-dialog__list .osano-cm-toggle{flex-direction:row}[dir=rtl] .osano-cm-dialog__list .osano-cm-toggle{flex-direction:row-reverse}.osano-cm-dialog__list .osano-cm-label{white-space:nowrap}[dir=ltr] .osano-cm-dialog__list .osano-cm-label{margin-left:.375em}[dir=rtl] .osano-cm-dialog__list .osano-cm-label{margin-right:.375em}.osano-cm-dialog__buttons{display:flex;flex-wrap:wrap}.osano-cm-dialog--type_bar .osano-cm-dialog__content{flex:5;margin-bottom:.25em;width:100%}@media screen and (min-width:768px){.osano-cm-dialog--type_bar .osano-cm-dialog__content{max-height:30vh}}.osano-cm-dialog--type_box .osano-cm-dialog__content{display:flex;flex-direction:column;flex-grow:.0001;transition:flex-grow 1s linear}.osano-cm-dialog--type_bar .osano-cm-dialog__list{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;margin:.75em auto}@media screen and (min-width:376px){.osano-cm-dialog--type_bar .osano-cm-dialog__list{flex-direction:row}}@media screen and (min-width:768px){.osano-cm-dialog--type_bar .osano-cm-dialog__list{margin:.5em 0 0 auto}[dir=rtl] .osano-cm-dialog--type_bar .osano-cm-dialog__list{margin:.5em auto 0 0}}[dir=ltr] .osano-cm-dialog--type_bar .osano-cm-dialog__list .osano-cm-item{margin-right:.5em}[dir=rtl] .osano-cm-dialog--type_bar .osano-cm-dialog__list .osano-cm-item{margin-left:.5em}.osano-cm-dialog--type_bar .osano-cm-dialog__list .osano-cm-label{padding-top:0}.osano-cm-dialog--type_bar .osano-cm-dialog__buttons{flex:1;justify-content:flex-end;margin:0;width:100%}@media screen and (min-width:768px){.osano-cm-dialog--type_bar .osano-cm-dialog__buttons{margin:0 0 0 .5em;max-width:30vw;min-width:16em;position:-webkit-sticky;position:sticky;top:0;width:auto}[dir=rtl] .osano-cm-dialog--type_bar .osano-cm-dialog__buttons{margin:0 .5em 0 0}}.osano-cm-dialog--type_box .osano-cm-dialog__buttons{margin:.5em 0 0}.osano-cm-dialog--type_bar.osano-cm-dialog--position_top{top:0}.osano-cm-dialog--type_bar.osano-cm-dialog--position_bottom{bottom:0}.osano-cm-dialog--type_box.osano-cm-dialog--position_top-left{left:1em;top:1em}.osano-cm-dialog--type_box.osano-cm-dialog--position_top-right{right:1em;top:1em}.osano-cm-dialog--type_box.osano-cm-dialog--position_bottom-left{bottom:1em;left:1em}.osano-cm-dialog--type_box.osano-cm-dialog--position_bottom-right{bottom:1em;right:1em}.osano-cm-dialog--type_box.osano-cm-dialog--position_center{left:50%;top:50%;transform:translate(-50%,-50%)}.osano-cm-dialog--context_amp{height:100%;position:relative}.osano-cm-content__message{margin-bottom:1em;padding-bottom:1.5em;word-break:break-word}.osano-cm-drawer-links{margin:.5em 0 0}.osano-cm-drawer-links__link{display:block}.osano-cm-storage-policy{display:inline-block}.osano-cm-usage-list__list{list-style-position:inside;list-style-type:disc}:export{fadeTransitionTime:.7s;slideTransitionTime:.4s}.osano-cm-info-dialog{height:100vh;left:0;position:fixed;top:0;transition-delay:0ms,0ms;transition-duration:.2s,0ms;transition-property:opacity,visibility;visibility:visible;width:100vw;z-index:2147483638}.osano-cm-info-dialog--hidden{opacity:0;transition-delay:0ms,.2s;visibility:hidden}.osano-cm-header{margin:0 0 -1em;padding:1em 0;position:-webkit-sticky;position:sticky;top:0;z-index:1}.osano-cm-info{animation:delay-overflow .4s;bottom:0;box-shadow:0 0 2px 2px #ccc;box-sizing:border-box;max-width:20em;overflow-x:visible;overflow-y:visible;position:fixed;top:0;transition-duration:.4s;transition-property:transform;width:100%}.osano-cm-info--position_left{left:0;transform:translate(-100%)}.osano-cm-info--position_right{right:0;transform:translate(100%)}.osano-cm-info--open{animation:none;overflow-x:hidden;overflow-y:auto;transform:translate(0)}.osano-cm-info--do_not_sell{animation:none;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;left:50%;position:fixed;right:auto;top:50%;transform:translate(-50%,-50%);transition:none}.osano-cm-info--do_not_sell .osano-cm-close{order:-1}.osano-cm-info--do_not_sell .osano-cm-header{box-sizing:initial;display:block;flex:none}.osano-cm-info-views{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap;height:100%;transition-duration:.4s;transition-property:transform;width:100%}[dir=rtl] .osano-cm-info-views{flex-direction:row-reverse}.osano-cm-info-views__view{box-sizing:border-box;flex-shrink:0;width:100%}.osano-cm-info-views--position_0>:not(:first-of-type){max-height:100%;overflow:hidden}.osano-cm-info-views--position_1{transform:translateX(-100%)}.osano-cm-info-views--position_1>:not(:nth-of-type(2)){max-height:100%;overflow:hidden}.osano-cm-info-views--position_2{transform:translateX(-200%)}.osano-cm-info-views--position_2>:not(:nth-of-type(3)){max-height:100%;overflow:hidden}.osano-cm-info--do_not_sell .osano-cm-info-views{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.osano-cm-view{height:0;padding:0 .75em 1em;transition-delay:.4s;transition-duration:0ms;transition-property:height,visibility;visibility:hidden;width:100%}.osano-cm-view__button{font-size:.875em;margin:1em 0 0;width:100%}.osano-cm-view--active{height:auto;transition-delay:0ms;visibility:visible}.osano-cm-description{font-size:.75em;font-weight:300;line-height:1.375;margin:1em 0 0}.osano-cm-description:first-child{margin:0}.osano-cm-description:last-of-type{margin-bottom:1em}.osano-cm-drawer-toggle .osano-cm-label{font-size:.875em;line-height:1.375em;margin:0 auto 0 0}[dir=rtl] .osano-cm-drawer-toggle .osano-cm-label{margin:0 0 0 auto}.osano-cm-info-dialog-header{align-items:center;display:flex;flex-direction:row-reverse;left:auto;min-height:3.25em;position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:1}[dir=rtl] .osano-cm-info-dialog-header{flex-direction:row}.osano-cm-info-dialog-header__header{align-items:center;display:flex;flex:1 1 auto;font-size:1em;justify-content:flex-start;margin:0;order:1;padding:1em .75em}.osano-cm-info-dialog-header__description{font-size:.75em;line-height:1.375}.osano-cm-back,.osano-cm-info-dialog-header__close{position:relative}.osano-cm-back{flex:0 1 auto;margin:0 0 0 .5em;min-width:0;order:2;width:auto;z-index:2}[dir=rtl] .osano-cm-back{margin:0 .5em 0 0}.osano-cm-powered-by{align-items:center;display:flex;flex-direction:column;font-weight:700;justify-content:center;margin:1em 0}.osano-cm-powered-by__link{font-size:.625em;outline:none;text-decoration:none}.osano-cm-powered-by__link:focus,.osano-cm-powered-by__link:hover{text-decoration:underline}@keyframes delay-overflow{0%{overflow-x:hidden;overflow-y:auto}}.osano-cm-expansion-panel{border-bottom:1px solid #0000001a;display:block;font-size:.75em;margin:0 -1.5em 1em;padding:1.5em 1.5em 0}.osano-cm-expansion-panel--expanded{border-bottom:none}.osano-cm-expansion-panel--empty,.osano-cm-expansion-panel--empty:not([open]){border-bottom:1px solid #0000001a;padding-bottom:0}.osano-cm-expansion-panel__body{background-color:#0000001a;line-height:1.25;list-style:none;margin:0 -1.5em;max-height:0;overflow:hidden;padding:0 1.5em;transition-delay:0ms,0ms,0ms,.3s;transition-duration:.3s,.3s,.3s,0s;transition-property:max-height,padding-top,padding-bottom,visibility;transition-timing-function:ease-out;visibility:hidden}.osano-cm-expansion-panel__toggle{cursor:pointer;display:block;line-height:1.25;margin:0 auto 1em 0;outline:none;position:relative}.osano-cm-expansion-panel__toggle:active,.osano-cm-expansion-panel__toggle:focus,.osano-cm-expansion-panel__toggle:hover{outline:none}[dir=rtl] .osano-cm-expansion-panel__toggle{margin:0 0 1em auto}.osano-cm-expansion-panel--expanded .osano-cm-expansion-panel__body{max-height:none;padding:1.25em 1.5em 1em;transition-delay:0ms,0ms,0ms,0ms;visibility:visible}.osano-cm-cookie-disclosure__title,.osano-cm-script-disclosure__title{border:0;clear:both;display:block;flex:0 1 30%;font-size:1em;font-weight:700;line-height:1.375;margin:0 0 .5em;padding:0}.osano-cm-cookie-disclosure__description,.osano-cm-script-disclosure__description{flex:0 1 70%;font-size:1em;line-height:1.375;margin:0 0 .5em;padding:0}.osano-cm-disclosure{border-bottom:none;display:block;font-size:.75em;margin:0 -1.5em 1em;padding:1.5em 1.5em 0}.osano-cm-disclosure--collapse{border-bottom:1px solid #0000001a;padding-bottom:1em}.osano-cm-disclosure--empty,.osano-cm-disclosure--empty:not([open]){border-bottom:1px solid #0000001a;padding-bottom:0}.osano-cm-disclosure__list{background-color:#0000001a;line-height:1.25;list-style:none;margin:0 -1.5em;padding:1.25em 1.5em 1em}.osano-cm-disclosure__list:empty{border:none;padding:0 1.5em}.osano-cm-disclosure__list:first-of-type{margin-top:1em;padding:1.25em 1.5em 1em}.osano-cm-disclosure__list:first-of-type:empty{padding:1.75em 1.5em .75em}.osano-cm-disclosure__list:not(:first-of-type):not(:empty){border-top:1px solid #0000001a}.osano-cm-disclosure__list:empty+.osano-cm-disclosure__list:not(:empty){border:none;padding:0 1.5em}.osano-cm-disclosure__list:not(:empty)~.osano-cm-disclosure__list:empty+.osano-cm-disclosure__list:not(:empty){border-top:1px solid #0000001a}.osano-cm-disclosure__list>.osano-cm-list-item{line-height:1.25}.osano-cm-disclosure__list>.osano-cm-list-item:not(:first-of-type){border-top:1px solid #0000001a;margin:1em -1.25em 0;padding:1em 1.25em 0}.osano-cm-disclosure__toggle{cursor:pointer;display:block;font-weight:700;line-height:1.25;margin:0 auto 0 0;outline:none;position:relative}.osano-cm-disclosure__toggle:focus,.osano-cm-disclosure__toggle:hover{text-decoration:underline}[dir=rtl] .osano-cm-disclosure__toggle{margin:0 0 0 auto}.osano-cm-disclosure--loading .osano-cm-disclosure__list{height:0;line-height:0;max-height:0}.osano-cm-disclosure--loading .osano-cm-disclosure__list>*{display:none}.osano-cm-disclosure--loading .osano-cm-disclosure__list:after{animation-duration:1s;animation-iteration-count:infinite;animation-name:osano-load-scale;animation-timing-function:ease-in-out;border-radius:100%;content:"";display:block;height:1em;position:relative;top:-.125em;transform:translateY(-50%);width:1em}.osano-cm-disclosure--collapse .osano-cm-disclosure__list{display:none}.osano-cm-disclosure--collapse .osano-cm-disclosure__list:after{content:none}.osano-cm-cookie-disclosure,.osano-cm-script-disclosure{display:flex;flex-wrap:wrap;margin:0}.osano-cm-cookie-disclosure__description:last-of-type,.osano-cm-cookie-disclosure__title:last-of-type,.osano-cm-script-disclosure__description:last-of-type,.osano-cm-script-disclosure__title:last-of-type{margin-bottom:0}@keyframes osano-load-scale{0%{transform:translateY(-50%) scale(0)}to{opacity:0;transform:translateY(-50%) scale(1)}}', a.go.isRTL ? "rtl" : "ltr", a.go.isRTL ? "right" : "left", c, l, l, l, l, l, c, ra(l), ra(c), g, d, d, w, d, p, p, p, p, p, d, ra(p), ra(d), m, m, m, ra(m), o, n, n, i, s, s, ra(o, .08), ra(i, .08), m, m, ra(m), u, b, b, f, f, h, h, ra(u), ra(u), ra(u), ra(f), ra(f), ra(f), ra(u, .25), ra(u, .25), ra(b, .25), ra(b, .25), ra(f, .25), ra(f, .25), ra(h, .25), ra(h, .25), y, _, v)
                            })(n), o), G(e(), t), this
                        }
                    }
                }
            }
        },
        394: (e, t, o) => {
            o.d(t, {
                R4: () => c,
                T4: () => d,
                _U: () => l,
                f5: () => a,
                ht: () => p,
                jq: () => s,
                k7: () => g,
                nu: () => i
            });
            var r = o(915),
                n = "OsanoCMP_IAB-TCF",
                i = (0, r.mq)("".concat(n, "/SET_PURPOSE_CONSENT"), (0, r.vz)("purposeId", "acceptOrDeny")),
                a = (0, r.mq)("".concat(n, "/SET_VENDOR_CONSENT"), (0, r.vz)("vendorId", "acceptOrDeny")),
                s = (0, r.mq)("".concat(n, "/SET_SPECIAL_FEATURE_CONSENT"), (0, r.vz)("specialFeatureId", "acceptOrDeny")),
                c = (0, r.mq)("".concat(n, "/SET_GDPR_APPLIES"), r.Zd),
                l = (0, r.mq)("".concat(n, "/UPDATE_PURPOSE_LIST"), (0, r.vz)("purposeList", "language")),
                d = (0, r.mq)("".concat(n, "/UPDATE_VENDOR_LIST_BEGIN"), r.Gm),
                p = (0, r.mq)("".concat(n, "/UPDATE_VENDOR_LIST_SUCCESS"), r.Zd),
                g = (0, r.mq)("".concat(n, "/UPDATE_VENDOR_LIST_FAILURE"), r.Zd)
        }
    }
]);
//# sourceMappingURL=osano-ui.js.map