(()  = >  { va r   e =  { 6 69 :  (e ,  t, n) =>   { e.ex po rts  = n (6 09 )  } , 448: (e, t,  n) = >  { "use
                      s trict"
                    ;   var r =
                      n (867),
                      
                      
                      
                      
                         
                              
                                            
                                    
                                                                               
                                                               
                                                                                
                                                         
                                                                           
                                                                    
                      
                      
                      

                    
                                     
                                                       

                     
                                               

                       
                              
                             
                                                  
                                   
                      
                      
                      
                      

                             
                                                          
                                                                                                                     

                     
                                                                    
                      
                                        
                                           
                      
                      
                      

                     
                                                                                     
                                                                                 
                            
                            
                             
                                                
                          

                                        

                                   
                                                                    
                                               
                        
                                              
                                          
                      
                         

                                                                                                      
                                                       
                                          
                                                   

                         
                              
                        
                        
                                                                                                    
                                           
                               
                                                                                                  
                                 
                         
                          

                                                                              
                                                          
                                                 
                                      
                                                    
                                                            
                                    
                      

                      

                     

                         

                                  

                      

                      
                                
                                          
                        
                                    
                                                                                                                                                                                  

                                                                                                                       
                         
                         
                           
                                                     
                              
                             
                                       
                                       
                                   
                                                                                           
                                      
                      

                            
                                 
                     

                                    
                                    
                                
                               
                               
                                                          

                    
                                    
                                       
                             
                                         

                                       
                        
                              
                                  

                      
                          
                                               
                         
                             
                      

                           
                                                               
                               
                                         
                                      
                    
                                                                             
                                                 
                                       
                                   
          

                       
                                                                 
                 
              
              
                     
                  
                  
                        
              
                   
                
                
                                              
                       
                       
                             
                       
                       
                        
                                    
                             
                                   
                                     
                         
                                         
                        
                              
                              
                                                  
                              
                               
                               
                    o = n(26),
                    s = n(372),
                    i = n(327),
                    a = n(97),
                    c = n(109),
                    u = n(985),
                    f = n(61);
                e.exports = function(e) { return new Promise((function(t, n) { var l = e.data,
                            p = e.headers;
                        r.isFormData(l) && delete p["Content-Type"], (r.isBlob(l) || r.isFile(l)) && l.type && delete p["Content-Type"]; var d = new XMLHttpRequest; if (e.auth) { var h = e.auth.username || "",
                                m = unescape(encodeURIComponent(e.auth.password)) || "";
                            p.Authorization = "Basic " + btoa(h + ":" + m) } var g = a(e.baseURL, e.url); if (d.open(e.method.toUpperCase(), i(g, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d.onreadystatechange = function() { if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) { var r = "getAllResponseHeaders" in d ? c(d.getAllResponseHeaders()) : null,
                                        s = { data: e.responseType && "text" !== e.responseType ? d.response : d.responseText, status: d.status, statusText: d.statusText, headers: r, config: e, request: d };
                                    o(t, n, s), d = null } }, d.onabort = function() { d && (n(f("Request aborted", e, "ECONNABORTED", d)), d = null) }, d.onerror = function() { n(f("Network Error", e, null, d)), d = null }, d.ontimeout = function() { var t = "timeout of " + e.timeout + "ms exceeded";
                                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(f(t, e, "ECONNABORTED", d)), d = null }, r.isStandardBrowserEnv()) { var y = (e.withCredentials || u(g)) && e.xsrfCookieName ? s.read(e.xsrfCookieName) : void 0;
                            y && (p[e.xsrfHeaderName] = y) } if ("setRequestHeader" in d && r.forEach(p, (function(e, t) { void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e) })), r.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), e.responseType) try { d.responseType = e.responseType } catch (t) { if ("json" !== e.responseType) throw t }
                        "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) { d && (d.abort(), n(e), d = null) })), l || (l = null), d.send(l) })) } }, 609: (e, t, n) => { "use strict"; var r = n(867),
                    o = n(849),
                    s = n(321),
                    i = n(185);

                function a(e) { var t = new s(e),
                        n = o(s.prototype.request, t); return r.extend(n, s.prototype, t), r.extend(n, t), n } var c = a(n(655));
                c.Axios = s, c.create = function(e) { return a(i(c.defaults, e)) }, c.Cancel = n(263), c.CancelToken = n(972), c.isCancel = n(502), c.all = function(e) { return Promise.all(e) }, c.spread = n(713), e.exports = c, e.exports.default = c }, 263: e => { "use strict";

                function t(e) { this.message = e }
                t.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, t.prototype.__CANCEL__ = !0, e.exports = t }, 972: (e, t, n) => { "use strict"; var r = n(263);

                function o(e) { if ("function" != typeof e) throw new TypeError("executor must be a function."); var t;
                    this.promise = new Promise((function(e) { t = e })); var n = this;
                    e((function(e) { n.reason || (n.reason = new r(e), t(n.reason)) })) }
                o.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, o.source = function() { var e; return { token: new o((function(t) { e = t })), cancel: e } }, e.exports = o }, 502: e => { "use strict";
                e.exports = function(e) { return !(!e || !e.__CANCEL__) } }, 321: (e, t, n) => { "use strict"; var r = n(867),
                    o = n(327),
                    s = n(782),
                    i = n(572),
                    a = n(185);

                function c(e) { this.defaults = e, this.interceptors = { request: new s, response: new s } }
                c.prototype.request = function(e) { "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get"; var t = [i, void 0],
                        n = Promise.resolve(e); for (this.interceptors.request.forEach((function(e) { t.unshift(e.fulfilled, e.rejected) })), this.interceptors.response.forEach((function(e) { t.push(e.fulfilled, e.rejected) })); t.length;) n = n.then(t.shift(), t.shift()); return n }, c.prototype.getUri = function(e) { return e = a(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "") }, r.forEach(["delete", "get", "head", "options"], (function(e) { c.prototype[e] = function(t, n) { return this.request(a(n || {}, { method: e, url: t })) } })), r.forEach(["post", "put", "patch"], (function(e) { c.prototype[e] = function(t, n, r) { return this.request(a(r || {}, { method: e, url: t, data: n })) } })), e.exports = c }, 782: (e, t, n) => { "use strict"; var r = n(867);

                function o() { this.handlers = [] }
                o.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, o.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, o.prototype.forEach = function(e) { r.forEach(this.handlers, (function(t) { null !== t && e(t) })) }, e.exports = o }, 97: (e, t, n) => { "use strict"; var r = n(793),
                    o = n(303);
                e.exports = function(e, t) { return e && !r(t) ? o(e, t) : t } }, 61: (e, t, n) => { "use strict"; var r = n(481);
                e.exports = function(e, t, n, o, s) { var i = new Error(e); return r(i, t, n, o, s) } }, 572: (e, t, n) => { "use strict"; var r = n(867),
                    o = n(527),
                    s = n(502),
                    i = n(655);

                function a(e) { e.cancelToken && e.cancelToken.throwIfRequested() }
                e.exports = function(e) { return a(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) { delete e.headers[t] })), (e.adapter || i.adapter)(e).then((function(t) { return a(e), t.data = o(t.data, t.headers, e.transformResponse), t }), (function(t) { return s(t) || (a(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) })) } }, 481: e => { "use strict";
                e.exports = function(e, t, n, r, o) { return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code } }, e } }, 185: (e, t, n) => { "use strict"; var r = n(867);
                e.exports = function(e, t) { t = t || {}; var n = {},
                        o = ["url", "method", "data"],
                        s = ["headers", "auth", "proxy", "params"],
                        i = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                        a = ["validateStatus"];

                    function c(e, t) { return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t }

                    function u(o) { r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o])) : n[o] = c(e[o], t[o]) }
                    r.forEach(o, (function(e) { r.isUndefined(t[e]) || (n[e] = c(void 0, t[e])) })), r.forEach(s, u), r.forEach(i, (function(o) { r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o])) : n[o] = c(void 0, t[o]) })), r.forEach(a, (function(r) { r in t ? n[r] = c(e[r], t[r]) : r in e && (n[r] = c(void 0, e[r])) })); var f = o.concat(s).concat(i).concat(a),
                        l = Object.keys(e).concat(Object.keys(t)).filter((function(e) { return -1 === f.indexOf(e) })); return r.forEach(l, u), n } }, 26: (e, t, n) => { "use strict"; var r = n(61);
                e.exports = function(e, t, n) { var o = n.config.validateStatus;
                    n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n) } }, 527: (e, t, n) => { "use strict"; var r = n(867);
                e.exports = function(e, t, n) { return r.forEach(n, (function(n) { e = n(e, t) })), e } }, 655: (e, t, n) => { "use strict"; var r = n(867),
                    o = n(16),
                    s = { "Content-Type": "application/x-www-form-urlencoded" };

                function i(e, t) {!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) } var a, c = { adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (a = n(448)), a), transformRequest: [function(e, t) { return o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }], transformResponse: [function(e) { if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
                        return e }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, validateStatus: function(e) { return e >= 200 && e < 300 }, headers: { common: { Accept: "application/json, text/plain, */*" } } };
                r.forEach(["delete", "get", "head"], (function(e) { c.headers[e] = {} })), r.forEach(["post", "put", "patch"], (function(e) { c.headers[e] = r.merge(s) })), e.exports = c }, 849: e => { "use strict";
                e.exports = function(e, t) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return e.apply(t, n) } } }, 327: (e, t, n) => { "use strict"; var r = n(867);

                function o(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
                e.exports = function(e, t, n) { if (!t) return e; var s; if (n) s = n(t);
                    else if (r.isURLSearchParams(t)) s = t.toString();
                    else { var i = [];
                        r.forEach(t, (function(e, t) { null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) { r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(o(t) + "=" + o(e)) }))) })), s = i.join("&") } if (s) { var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + s } return e } }, 303: e => { "use strict";
                e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e } }, 372: (e, t, n) => { "use strict"; var r = n(867);
                e.exports = r.isStandardBrowserEnv() ? { write: function(e, t, n, o, s, i) { var a = [];
                        a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(s) && a.push("domain=" + s), !0 === i && a.push("secure"), document.cookie = a.join("; ") }, read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null }, remove: function(e) { this.write(e, "", Date.now() - 864e5) } } : { write: function() {}, read: function() { return null }, remove: function() {} } }, 793: e => { "use strict";
                e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) } }, 985: (e, t, n) => { "use strict"; var r = n(867);
                e.exports = r.isStandardBrowserEnv() ? function() { var e, t = /(msie|trident)/i.test(navigator.userAgent),
                        n = document.createElement("a");

                    function o(e) { var r = e; return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } } return e = o(window.location.href),
                        function(t) { var n = r.isString(t) ? o(t) : t; return n.protocol === e.protocol && n.host === e.host } }() : function() { return !0 } }, 16: (e, t, n) => { "use strict"; var r = n(867);
                e.exports = function(e, t) { r.forEach(e, (function(n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]) })) } }, 109: (e, t, n) => { "use strict"; var r = n(867),
                    o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function(e) { var t, n, s, i = {}; return e ? (r.forEach(e.split("\n"), (function(e) { if (s = e.indexOf(":"), t = r.trim(e.substr(0, s)).toLowerCase(), n = r.trim(e.substr(s + 1)), t) { if (i[t] && o.indexOf(t) >= 0) return;
                            i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n } })), i) : i } }, 713: e => { "use strict";
                e.exports = function(e) { return function(t) { return e.apply(null, t) } } }, 867: (e, t, n) => { "use strict"; var r = n(849),
                    o = Object.prototype.toString;

                function s(e) { return "[object Array]" === o.call(e) }

                function i(e) { return void 0 === e }

                function a(e) { return null !== e && "object" == typeof e }

                function c(e) { if ("[object Object]" !== o.call(e)) return !1; var t = Object.getPrototypeOf(e); return null === t || t === Object.prototype }

                function u(e) { return "[object Function]" === o.call(e) }

                function f(e, t) { if (null != e)
                        if ("object" != typeof e && (e = [e]), s(e))
                            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                        else
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e) }
                e.exports = { isArray: s, isArrayBuffer: function(e) { return "[object ArrayBuffer]" === o.call(e) }, isBuffer: function(e) { return null !== e && !i(e) && null !== e.constructor && !i(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }, isFormData: function(e) { return "undefined" != typeof FormData && e instanceof FormData }, isArrayBufferView: function(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer }, isString: function(e) { return "string" == typeof e }, isNumber: function(e) { return "number" == typeof e }, isObject: a, isPlainObject: c, isUndefined: i, isDate: function(e) { return "[object Date]" === o.call(e) }, isFile: function(e) { return "[object File]" === o.call(e) }, isBlob: function(e) { return "[object Blob]" === o.call(e) }, isFunction: u, isStream: function(e) { return a(e) && u(e.pipe) }, isURLSearchParams: function(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams }, isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document }, forEach: f, merge: function e() { var t = {};

                        function n(n, r) { c(t[r]) && c(n) ? t[r] = e(t[r], n) : c(n) ? t[r] = e({}, n) : s(n) ? t[r] = n.slice() : t[r] = n } for (var r = 0, o = arguments.length; r < o; r++) f(arguments[r], n); return t }, extend: function(e, t, n) { return f(t, (function(t, o) { e[o] = n && "function" == typeof t ? r(t, n) : t })), e }, trim: function(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") }, stripBOM: function(e) { return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e } } }, 144: (e, t, n) => { "use strict";
                n.d(t, { Z: () => s }); var r = n(645),
                    o = n.n(r)()((function(e) { return e[1] }));
                o.push([e.id, "html,body{width:100%;height:100%;margin:0;font-family:'Source Sans Pro', sans-serif}main{box-sizing:border-box;padding:150px;width:100%;display:flex;flex-direction:column;background-color:#fbecc2}.country,.flags,.results{width:100%;display:flex;margin:25px 0px}.country{justify-content:center}.country h2{font-size:60px;font-weight:bold}.flags{justify-content:space-around}.flags img{width:25%;border-radius:20px;cursor:pointer}.flags img:hover{-webkit-box-shadow:2px 2px 22px 2px #00bcf5;-moz-box-shadow:2px 2px 22px 2px #00bcf5;box-shadow:2px 2px 22px 2px #00bcf5}.results{display:flex;flex-direction:column;align-items:center}.results h2{font-size:40px}.results span{font-size:30px;margin-bottom:20px}\n", ""]); const s = o }, 645: e => { "use strict";
                e.exports = function(e) { var t = []; return t.toString = function() { return this.map((function(t) { var n = e(t); return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n })).join("") }, t.i = function(e, n, r) { "string" == typeof e && (e = [
                            [null, e, ""]
                        ]); var o = {}; if (r)
                            for (var s = 0; s < this.length; s++) { var i = this[s][0];
                                null != i && (o[i] = !0) }
                        for (var a = 0; a < e.length; a++) { var c = [].concat(e[a]);
                            r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c)) } }, t } }, 379: (e, t, n) => { "use strict"; var r, o = function() { var e = {}; return function(t) { if (void 0 === e[t]) { var n = document.querySelector(t); if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (e) { n = null }
                                e[t] = n } return e[t] } }(),
                    s = [];

                function i(e) { for (var t = -1, n = 0; n < s.length; n++)
                        if (s[n].identifier === e) { t = n; break }
                    return t }

                function a(e, t) { for (var n = {}, r = [], o = 0; o < e.length; o++) { var a = e[o],
                            c = t.base ? a[0] + t.base : a[0],
                            u = n[c] || 0,
                            f = "".concat(c, " ").concat(u);
                        n[c] = u + 1; var l = i(f),
                            p = { css: a[1], media: a[2], sourceMap: a[3] }; - 1 !== l ? (s[l].references++, s[l].updater(p)) : s.push({ identifier: f, updater: m(p, t), references: 1 }), r.push(f) } return r }

                function c(e) { var t = document.createElement("style"),
                        r = e.attributes || {}; if (void 0 === r.nonce) { var s = n.nc;
                        s && (r.nonce = s) } if (Object.keys(r).forEach((function(e) { t.setAttribute(e, r[e]) })), "function" == typeof e.insert) e.insert(t);
                    else { var i = o(e.insert || "head"); if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        i.appendChild(t) } return t } var u, f = (u = [], function(e, t) { return u[e] = t, u.filter(Boolean).join("\n") });

                function l(e, t, n, r) { var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css; if (e.styleSheet) e.styleSheet.cssText = f(t, o);
                    else { var s = document.createTextNode(o),
                            i = e.childNodes;
                        i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(s, i[t]) : e.appendChild(s) } }

                function p(e, t, n) { var r = n.css,
                        o = n.media,
                        s = n.sourceMap; if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), s && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
                    else { for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(r)) } } var d = null,
                    h = 0;

                function m(e, t) { var n, r, o; if (t.singleton) { var s = h++;
                        n = d || (d = c(t)), r = l.bind(null, n, s, !1), o = l.bind(null, n, s, !0) } else n = c(t), r = p.bind(null, n, t), o = function() {! function(e) { if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e) }(n) }; return r(e),
                        function(t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                r(e = t) } else o() } }
                e.exports = function(e, t) {
                    (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r)); var n = a(e = e || [], t); return function(e) { if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) { for (var r = 0; r < n.length; r++) { var o = i(n[r]);
                                s[o].references-- } for (var c = a(e, t), u = 0; u < n.length; u++) { var f = i(n[u]);
                                0 === s[f].references && (s[f].updater(), s.splice(f, 1)) }
                            n = c } } } } },
        t = {};

    function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { id: r, exports: {} }; return e[r](o, o.exports, n), o.exports }
    n.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return n.d(t, { a: t }), t }, n.d = (e, t) => { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => { "use strict"; var e = n(669),
            t = n.n(e); var r = n(379),
            o = n.n(r),
            s = n(144);
        o()(s.Z, { insert: "head", singleton: !1 }), s.Z.locals, (() => { const e = document.getElementById("qqq"),
                t = document.getElementById("boolean"),
                n = document.getElementById("multiple");
            e.innerHTML = "", t.innerHTML = "", n.innerHTML = "" })(); let i = document.getElementById("catego"),
            a = document.getElementById("diff"),
            c = document.getElementById("typo"); const u = "&category=" + i.value,
            f = "&difficulty=" + a.value,
            l = "&type=" + c.value;
        document.getElementById("next").addEventListener("click", (function() { t().get("https://opentdb.com/api.php?amount=10" + u + f + l).then((e => { console.log("data owo"); const t = new class { constructor(e) { this.arrayQuestions = e, this.questions = [], this.answers = [], this.finalAnwers = [0, 0, 0, 0], this.correctAnswer, this.isOk = !1 }
                    get primerLugardellArray() { return this.arrayQuestions[0].question }
                    obtenerPregunta() { return this.primerLugardellArray }
                    generaRandomPos(e) { return Math.floor(Math.random() * (e - 0)) + 0 }
                    get opcionesIncorrectas() { return this.arrayQuestions[0].incorrect_answers }
                    get opcionCorrecta() { return this.arrayQuestions[0].correct_answer }
                    juntarOpciones() { const e = this.opcionCorrecta,
                            t = this.opcionesIncorrectas; return this.answers = t, this.answers.push(e), this.answers }
                    acomodarOpciones() { for (let e = 0; e < this.finalAnwers.length; e++)
                            if (0 === this.finalAnwers[e]) { let t = this.generaRandomPos(this.answers.length);
                                this.finalAnwers[e] = this.answers[t], this.answers.splice(t, 1) }
                        return this.finalAnwers }
                    botonOpcionMultiple(e, t) { const n = document.createElement("button"); return n.type = "button", n.innerText = e, n.id = e, n.value = e, n.addEventListener("click", t), n }
                    start() { const e = document.getElementById("qqq"),
                            t = document.getElementById("ala_chaval"),
                            n = document.getElementById("multiple");
                        n.innerHTML = "", this.juntarOpciones(), this.finalAnwers = this.acomodarOpciones(), e.innerHTML = this.obtenerPregunta(); const r = e => { this.opcionCorrecta === e.target.value ? t.innerHTML = " o:" : t.innerHTML = "no mames carnal que pedo" };
                        this.finalAnwers.forEach((e => { const t = this.botonOpcionMultiple(e, r);
                            n.appendChild(t) })) } }(e.data.results);
                t.start(), console.log(t.obtenerPregunta()), console.log(t.generaRandomPos()), console.log(t.opcionCorrecta), console.log(t.opcionesIncorrectas), console.log(t.juntarOpciones()), console.log(t.acomodarOpciones()), console.log(t) })).catch((e => { console.log("hubo un problema ") })) })) })() })();