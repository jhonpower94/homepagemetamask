window[window["TiktokAnalyticsObject"]]._env = {
    "env": "external",
    "key": ""
};
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';;
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = 'd592f143-3b13-11ee-9c81-e8ebd35d328c';
window[window["TiktokAnalyticsObject"]]._plugins = {
    "AdvancedMatching": true,
    "AutoAdvancedMatching": true,
    "AutoConfig": true,
    "Callback": true,
    "DiagnosticsConsole": true,
    "Identify": true,
    "Monitor": false,
    "PerformanceInteraction": false,
    "Shopify": true,
    "WebFL": false
};
window[window["TiktokAnalyticsObject"]]._auto_config = {
    "open_graph": ["audience"],
    "microdata": ["audience"],
    "json_ld": ["audience"],
    "meta": null
};
! function() {
    function i() {
        return window && window.TiktokAnalyticsObject || "ttq"
    }

    function t() {
        return window && window[i()]
    }
    var n, o, e, a, c, r = [{
            id: "MTAwYzY4Y2VmMA",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !1,
                Monitor: !1
            }
        }, {
            id: "MTAwYzY4Y2VmMQ",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !1,
                Monitor: !1
            }
        }, {
            id: "MTAwYzY4Y2VmMg",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !0,
                Monitor: !1
            }
        }, {
            id: "MTAwYzY4Y2VmMw",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !0,
                Monitor: !1
            }
        }, {
            id: "MTAwYzY4Y2VmNA",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !1,
                Monitor: !0
            }
        }, {
            id: "MTAwYzY4Y2VmNQ",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !1,
                Monitor: !0
            }
        }, {
            id: "MTAwYzY4Y2VmNg",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !0,
                Monitor: !0
            }
        }, {
            id: "MTAwYzY4Y2VmNw",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !0,
                Monitor: !0
            }
        }],
        d = {
            "info": {
                "pixelCode": "CH6305BC77U7A82IK7G0",
                "name": "",
                "status": 1,
                "setupMode": 0,
                "partner": "",
                "advertiserID": "0",
                "is_onsite": false,
                "firstPartyCookieEnabled": false
            },
            "plugins": {
                "Shopify": false,
                "AdvancedMatching": {
                    "email": false,
                    "phone_number": false
                },
                "AutoAdvancedMatching": null,
                "Callback": true,
                "Identify": true,
                "Monitor": true,
                "PerformanceInteraction": true,
                "WebFL": true,
                "AutoConfig": true,
                "DiagnosticsConsole": true
            },
            "rules": null
        },
        p = "https://analytics.tiktok.com/i18n/pixel/static/",
        l = t();
    l || (l = [], window && (window[i()] = l)), Object.assign(d, {
            options: (n = d.info.pixelCode, (o = t()._o) && o[n] || {})
        }),
        function(i) {
            l._i || (l._i = {});
            var t = i.info.pixelCode;
            t && (l._i[t] || (l._i[t] = []), Object.assign(l._i[t], i), l._i[t]._load = +new Date)
        }(d), e = function(i, t, n) {
            var o = 0 < arguments.length && void 0 !== i ? i : {},
                e = 1 < arguments.length ? t : void 0,
                t = 2 < arguments.length ? n : void 0,
                n = function(i, t) {
                    for (var n = 0; n < i.length; n++)
                        if (t.call(null, i[n], n)) return i[n]
                }(r, function(i) {
                    var t = i.map;
                    return function(i, t) {
                        for (var n = 0; n < i.length; n++)
                            if (!t.call(null, i[n], n)) return !1;
                        return !0
                    }(Object.keys(t), function(i) {
                        return !(!o[i] || !e[i]) === t[i]
                    })
                });
            return n ? t + "main.".concat(n.id, ".js") : t + "main.".concat(r[0].id, ".js")
        }(l._plugins, d.plugins, p), a = d.info.pixelCode, (void 0 !== self.DedicatedWorkerGlobalScope ? self instanceof self.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === self.constructor.name) ? self.importScripts && self.importScripts(e) : ((c = document.createElement("script")).type = "text/javascript", c.async = !0, c.src = e, c.setAttribute("data-id", a), (a = document.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a))
}();