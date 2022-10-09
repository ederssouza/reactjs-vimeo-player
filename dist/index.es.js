import Xe, { useRef as ze, useEffect as ut } from "react";
/*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */
function ct(o, a) {
  if (!(o instanceof a))
    throw new TypeError("Cannot call a class as a function");
}
function Ue(o, a) {
  for (var c = 0; c < a.length; c++) {
    var r = a[c];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(o, r.key, r);
  }
}
var Ge = typeof global < "u" && {}.toString.call(global) === "[object global]";
function Be(o, a) {
  return o.indexOf(a.toLowerCase()) === 0 ? o : "".concat(a.toLowerCase()).concat(o.substr(0, 1).toUpperCase()).concat(o.substr(1));
}
function lt(o) {
  return Boolean(o && o.nodeType === 1 && "nodeName" in o && o.ownerDocument && o.ownerDocument.defaultView);
}
function st(o) {
  return !isNaN(parseFloat(o)) && isFinite(o) && Math.floor(o) == o;
}
function le(o) {
  return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(o);
}
function Ye(o) {
  return /^https:\/\/player\.vimeo\.com\/video\/\d+/.test(o);
}
function Ke() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = o.id, c = o.url, r = a || c;
  if (!r)
    throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
  if (st(r))
    return "https://vimeo.com/".concat(r);
  if (le(r))
    return r.replace("http:", "https:");
  throw a ? new TypeError("\u201C".concat(a, "\u201D is not a valid video id.")) : new TypeError("\u201C".concat(r, "\u201D is not a vimeo.com url."));
}
var ft = Array.prototype.indexOf !== void 0, dt = typeof window < "u" && window.postMessage !== void 0;
if (!(Ge || ft && dt))
  throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
var Ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function(o) {
  if (!o.WeakMap) {
    var a = Object.prototype.hasOwnProperty, c = Object.defineProperty && function() {
      try {
        return Object.defineProperty({}, "x", { value: 1 }).x === 1;
      } catch {
      }
    }(), r = function(n, i, p) {
      c ? Object.defineProperty(n, i, { configurable: !0, writable: !0, value: p }) : n[i] = p;
    };
    o.WeakMap = function() {
      function n() {
        if (this === void 0)
          throw new TypeError("Constructor WeakMap requires 'new'");
        if (r(this, "_id", p("_WeakMap")), arguments.length > 0)
          throw new TypeError("WeakMap iterable is not supported");
      }
      function i(d, _) {
        if (!e(d) || !a.call(d, "_id"))
          throw new TypeError(_ + " method called on incompatible receiver " + typeof d);
      }
      function p(d) {
        return d + "_" + v() + "." + v();
      }
      function v() {
        return Math.random().toString().substring(2);
      }
      return r(n.prototype, "delete", function(d) {
        if (i(this, "delete"), !e(d))
          return !1;
        var _ = d[this._id];
        return !(!_ || _[0] !== d) && (delete d[this._id], !0);
      }), r(n.prototype, "get", function(d) {
        if (i(this, "get"), e(d)) {
          var _ = d[this._id];
          return _ && _[0] === d ? _[1] : void 0;
        }
      }), r(n.prototype, "has", function(d) {
        if (i(this, "has"), !e(d))
          return !1;
        var _ = d[this._id];
        return !(!_ || _[0] !== d);
      }), r(n.prototype, "set", function(d, _) {
        if (i(this, "set"), !e(d))
          throw new TypeError("Invalid value used as weak map key");
        var E = d[this._id];
        return E && E[0] === d ? (E[1] = _, this) : (r(d, this._id, [d, _]), this);
      }), r(n, "_polyfill", !0), n;
    }();
  }
  function e(n) {
    return Object(n) === n;
  }
})(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ze);
var He, Ie, te = (He = function(o) {
  /*! Native Promise Only
      v0.8.1 (c) Kyle Simpson
      MIT License: http://getify.mit-license.org
  */
  var a, c, r;
  r = function() {
    var e, n, i, p = Object.prototype.toString, v = typeof setImmediate < "u" ? function(u) {
      return setImmediate(u);
    } : setTimeout;
    try {
      Object.defineProperty({}, "x", {}), e = function(u, l, s, b) {
        return Object.defineProperty(u, l, { value: s, writable: !0, configurable: b !== !1 });
      };
    } catch {
      e = function(l, s, b) {
        return l[s] = b, l;
      };
    }
    function d(u, l) {
      i.add(u, l), n || (n = v(i.drain));
    }
    function _(u) {
      var l, s = typeof u;
      return u == null || s != "object" && s != "function" || (l = u.then), typeof l == "function" && l;
    }
    function E() {
      for (var u = 0; u < this.chain.length; u++)
        $(this, this.state === 1 ? this.chain[u].success : this.chain[u].failure, this.chain[u]);
      this.chain.length = 0;
    }
    function $(u, l, s) {
      var b, w;
      try {
        l === !1 ? s.reject(u.msg) : (b = l === !0 ? u.msg : l.call(void 0, u.msg)) === s.promise ? s.reject(TypeError("Promise-chain cycle")) : (w = _(b)) ? w.call(b, s.resolve, s.reject) : s.resolve(b);
      } catch (M) {
        s.reject(M);
      }
    }
    function A(u) {
      var l, s = this;
      if (!s.triggered) {
        s.triggered = !0, s.def && (s = s.def);
        try {
          (l = _(u)) ? d(function() {
            var b = new F(s);
            try {
              l.call(u, function() {
                A.apply(b, arguments);
              }, function() {
                x.apply(b, arguments);
              });
            } catch (w) {
              x.call(b, w);
            }
          }) : (s.msg = u, s.state = 1, s.chain.length > 0 && d(E, s));
        } catch (b) {
          x.call(new F(s), b);
        }
      }
    }
    function x(u) {
      var l = this;
      l.triggered || (l.triggered = !0, l.def && (l = l.def), l.msg = u, l.state = 2, l.chain.length > 0 && d(E, l));
    }
    function q(u, l, s, b) {
      for (var w = 0; w < l.length; w++)
        (function(M) {
          u.resolve(l[M]).then(function(z) {
            s(M, z);
          }, b);
        })(w);
    }
    function F(u) {
      this.def = u, this.triggered = !1;
    }
    function Y(u) {
      this.promise = u, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
    }
    function D(u) {
      if (typeof u != "function")
        throw TypeError("Not a function");
      if (this.__NPO__ !== 0)
        throw TypeError("Not a promise");
      this.__NPO__ = 1;
      var l = new Y(this);
      this.then = function(s, b) {
        var w = { success: typeof s != "function" || s, failure: typeof b == "function" && b };
        return w.promise = new this.constructor(function(M, z) {
          if (typeof M != "function" || typeof z != "function")
            throw TypeError("Not a function");
          w.resolve = M, w.reject = z;
        }), l.chain.push(w), l.state !== 0 && d(E, l), w.promise;
      }, this.catch = function(s) {
        return this.then(void 0, s);
      };
      try {
        u.call(void 0, function(s) {
          A.call(l, s);
        }, function(s) {
          x.call(l, s);
        });
      } catch (s) {
        x.call(l, s);
      }
    }
    i = function() {
      var u, l, s;
      function b(w, M) {
        this.fn = w, this.self = M, this.next = void 0;
      }
      return { add: function(w, M) {
        s = new b(w, M), l ? l.next = s : u = s, l = s, s = void 0;
      }, drain: function() {
        var w = u;
        for (u = l = n = void 0; w; )
          w.fn.call(w.self), w = w.next;
      } };
    }();
    var H = e({}, "constructor", D, !1);
    return D.prototype = H, e(H, "__NPO__", 0, !1), e(D, "resolve", function(u) {
      return u && typeof u == "object" && u.__NPO__ === 1 ? u : new this(function(l, s) {
        if (typeof l != "function" || typeof s != "function")
          throw TypeError("Not a function");
        l(u);
      });
    }), e(D, "reject", function(u) {
      return new this(function(l, s) {
        if (typeof l != "function" || typeof s != "function")
          throw TypeError("Not a function");
        s(u);
      });
    }), e(D, "all", function(u) {
      var l = this;
      return p.call(u) != "[object Array]" ? l.reject(TypeError("Not an array")) : u.length === 0 ? l.resolve([]) : new l(function(s, b) {
        if (typeof s != "function" || typeof b != "function")
          throw TypeError("Not a function");
        var w = u.length, M = Array(w), z = 0;
        q(l, u, function(ne, W) {
          M[ne] = W, ++z === w && s(M);
        }, b);
      });
    }), e(D, "race", function(u) {
      var l = this;
      return p.call(u) != "[object Array]" ? l.reject(TypeError("Not an array")) : new l(function(s, b) {
        if (typeof s != "function" || typeof b != "function")
          throw TypeError("Not a function");
        q(l, u, function(w, M) {
          s(M);
        }, b);
      });
    }), D;
  }, (c = Ze)[a = "Promise"] = c[a] || r(), o.exports && (o.exports = c[a]);
}, He(Ie = { exports: {} }, Ie.exports), Ie.exports), B = /* @__PURE__ */ new WeakMap();
function Se(o, a, c) {
  var r = B.get(o.element) || {};
  a in r || (r[a] = []), r[a].push(c), B.set(o.element, r);
}
function Re(o, a) {
  return (B.get(o.element) || {})[a] || [];
}
function Fe(o, a, c) {
  var r = B.get(o.element) || {};
  if (!r[a])
    return !0;
  if (!c)
    return r[a] = [], B.set(o.element, r), !0;
  var e = r[a].indexOf(c);
  return e !== -1 && r[a].splice(e, 1), B.set(o.element, r), r[a] && r[a].length === 0;
}
function pt(o, a) {
  var c = B.get(o);
  B.set(a, c), B.delete(o);
}
function Me(o) {
  if (typeof o == "string")
    try {
      o = JSON.parse(o);
    } catch (a) {
      return console.warn(a), {};
    }
  return o;
}
function je(o, a, c) {
  if (o.element.contentWindow && o.element.contentWindow.postMessage) {
    var r = { method: a };
    c !== void 0 && (r.value = c);
    var e = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
    e >= 8 && e < 10 && (r = JSON.stringify(r)), o.element.contentWindow.postMessage(r, o.origin);
  }
}
function ht(o, a) {
  var c, r = [];
  if ((a = Me(a)).event)
    a.event === "error" && Re(o, a.data.method).forEach(function(n) {
      var i = new Error(a.data.message);
      i.name = a.data.name, n.reject(i), Fe(o, a.data.method, n);
    }), r = Re(o, "event:".concat(a.event)), c = a.data;
  else if (a.method) {
    var e = function(n, i) {
      var p = Re(n, i);
      if (p.length < 1)
        return !1;
      var v = p.shift();
      return Fe(n, i, v), v;
    }(o, a.method);
    e && (r.push(e), c = a.value);
  }
  r.forEach(function(n) {
    try {
      if (typeof n == "function")
        return void n.call(o, c);
      n.resolve(c);
    } catch {
    }
  });
}
var yt = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
function et(o) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return yt.reduce(function(c, r) {
    var e = o.getAttribute("data-vimeo-".concat(r));
    return (e || e === "") && (c[r] = e === "" ? 1 : e), c;
  }, a);
}
function qe(o, a) {
  var c = o.html;
  if (!a)
    throw new TypeError("An element must be provided");
  if (a.getAttribute("data-vimeo-initialized") !== null)
    return a.querySelector("iframe");
  var r = document.createElement("div");
  return r.innerHTML = c, a.appendChild(r.firstChild), a.setAttribute("data-vimeo-initialized", "true"), a.querySelector("iframe");
}
function tt(o) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function(r, e) {
    if (!le(o))
      throw new TypeError("\u201C".concat(o, "\u201D is not a vimeo.com url."));
    var n = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(o));
    for (var i in a)
      a.hasOwnProperty(i) && (n += "&".concat(i, "=").concat(encodeURIComponent(a[i])));
    var p = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
    p.open("GET", n, !0), p.onload = function() {
      if (p.status !== 404)
        if (p.status !== 403)
          try {
            var v = JSON.parse(p.responseText);
            if (v.domain_status_code === 403)
              return qe(v, c), void e(new Error("\u201C".concat(o, "\u201D is not embeddable.")));
            r(v);
          } catch (d) {
            e(d);
          }
        else
          e(new Error("\u201C".concat(o, "\u201D is not embeddable.")));
      else
        e(new Error("\u201C".concat(o, "\u201D was not found.")));
    }, p.onerror = function() {
      var v = p.status ? " (".concat(p.status, ")") : "";
      e(new Error("There was an error fetching the embed code from Vimeo".concat(v, ".")));
    }, p.send();
  });
}
var we = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap(), V = {}, $e = function() {
  function o(e) {
    var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (ct(this, o), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), typeof document < "u" && typeof e == "string" && (e = document.getElementById(e)), !lt(e))
      throw new TypeError("You must pass either a valid element or a valid id.");
    if (e.nodeName !== "IFRAME") {
      var p = e.querySelector("iframe");
      p && (e = p);
    }
    if (e.nodeName === "IFRAME" && !le(e.getAttribute("src") || ""))
      throw new Error("The player element passed isn\u2019t a Vimeo embed.");
    if (we.has(e))
      return we.get(e);
    this._window = e.ownerDocument.defaultView, this.element = e, this.origin = "*";
    var v = new te(function(_, E) {
      if (n._onMessage = function(A) {
        if (le(A.origin) && n.element.contentWindow === A.source) {
          n.origin === "*" && (n.origin = A.origin);
          var x = Me(A.data);
          if (x && x.event === "error" && x.data && x.data.method === "ready") {
            var q = new Error(x.data.message);
            return q.name = x.data.name, void E(q);
          }
          var F = x && x.event === "ready", Y = x && x.method === "ping";
          if (F || Y)
            return n.element.setAttribute("data-ready", "true"), void _();
          ht(n, x);
        }
      }, n._window.addEventListener("message", n._onMessage), n.element.nodeName !== "IFRAME") {
        var $ = et(e, i);
        tt(Ke($), $, e).then(function(A) {
          var x = qe(A, e);
          return n.element = x, n._originalElement = e, pt(e, x), we.set(n.element, n), A;
        }).catch(E);
      }
    });
    if (Ae.set(this, v), we.set(this.element, this), this.element.nodeName === "IFRAME" && je(this, "ping"), V.isEnabled) {
      var d = function() {
        return V.exit();
      };
      this.fullscreenchangeHandler = function() {
        V.isFullscreen ? Se(n, "event:exitFullscreen", d) : Fe(n, "event:exitFullscreen", d), n.ready().then(function() {
          je(n, "fullscreenchange", V.isFullscreen);
        });
      }, V.on("fullscreenchange", this.fullscreenchangeHandler);
    }
    return this;
  }
  var a, c, r;
  return a = o, c = [{ key: "callMethod", value: function(e) {
    var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new te(function(p, v) {
      return n.ready().then(function() {
        Se(n, e, { resolve: p, reject: v }), je(n, e, i);
      }).catch(v);
    });
  } }, { key: "get", value: function(e) {
    var n = this;
    return new te(function(i, p) {
      return e = Be(e, "get"), n.ready().then(function() {
        Se(n, e, { resolve: i, reject: p }), je(n, e);
      }).catch(p);
    });
  } }, { key: "set", value: function(e, n) {
    var i = this;
    return new te(function(p, v) {
      if (e = Be(e, "set"), n == null)
        throw new TypeError("There must be a value to set.");
      return i.ready().then(function() {
        Se(i, e, { resolve: p, reject: v }), je(i, e, n);
      }).catch(v);
    });
  } }, { key: "on", value: function(e, n) {
    if (!e)
      throw new TypeError("You must pass an event name.");
    if (!n)
      throw new TypeError("You must pass a callback function.");
    if (typeof n != "function")
      throw new TypeError("The callback must be a function.");
    Re(this, "event:".concat(e)).length === 0 && this.callMethod("addEventListener", e).catch(function() {
    }), Se(this, "event:".concat(e), n);
  } }, { key: "off", value: function(e, n) {
    if (!e)
      throw new TypeError("You must pass an event name.");
    if (n && typeof n != "function")
      throw new TypeError("The callback must be a function.");
    Fe(this, "event:".concat(e), n) && this.callMethod("removeEventListener", e).catch(function(i) {
    });
  } }, { key: "loadVideo", value: function(e) {
    return this.callMethod("loadVideo", e);
  } }, { key: "ready", value: function() {
    var e = Ae.get(this) || new te(function(n, i) {
      i(new Error("Unknown player. Probably unloaded."));
    });
    return te.resolve(e);
  } }, { key: "addCuePoint", value: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return this.callMethod("addCuePoint", { time: e, data: n });
  } }, { key: "removeCuePoint", value: function(e) {
    return this.callMethod("removeCuePoint", e);
  } }, { key: "enableTextTrack", value: function(e, n) {
    if (!e)
      throw new TypeError("You must pass a language.");
    return this.callMethod("enableTextTrack", { language: e, kind: n });
  } }, { key: "disableTextTrack", value: function() {
    return this.callMethod("disableTextTrack");
  } }, { key: "pause", value: function() {
    return this.callMethod("pause");
  } }, { key: "play", value: function() {
    return this.callMethod("play");
  } }, { key: "requestFullscreen", value: function() {
    return V.isEnabled ? V.request(this.element) : this.callMethod("requestFullscreen");
  } }, { key: "exitFullscreen", value: function() {
    return V.isEnabled ? V.exit() : this.callMethod("exitFullscreen");
  } }, { key: "getFullscreen", value: function() {
    return V.isEnabled ? te.resolve(V.isFullscreen) : this.get("fullscreen");
  } }, { key: "requestPictureInPicture", value: function() {
    return this.callMethod("requestPictureInPicture");
  } }, { key: "exitPictureInPicture", value: function() {
    return this.callMethod("exitPictureInPicture");
  } }, { key: "getPictureInPicture", value: function() {
    return this.get("pictureInPicture");
  } }, { key: "unload", value: function() {
    return this.callMethod("unload");
  } }, { key: "destroy", value: function() {
    var e = this;
    return new te(function(n) {
      if (Ae.delete(e), we.delete(e.element), e._originalElement && (we.delete(e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && e.element.nodeName === "IFRAME" && e.element.parentNode && (e.element.parentNode.parentNode && e._originalElement && e._originalElement !== e.element.parentNode ? e.element.parentNode.parentNode.removeChild(e.element.parentNode) : e.element.parentNode.removeChild(e.element)), e.element && e.element.nodeName === "DIV" && e.element.parentNode) {
        e.element.removeAttribute("data-vimeo-initialized");
        var i = e.element.querySelector("iframe");
        i && i.parentNode && (i.parentNode.parentNode && e._originalElement && e._originalElement !== i.parentNode ? i.parentNode.parentNode.removeChild(i.parentNode) : i.parentNode.removeChild(i));
      }
      e._window.removeEventListener("message", e._onMessage), V.isEnabled && V.off("fullscreenchange", e.fullscreenchangeHandler), n();
    });
  } }, { key: "getAutopause", value: function() {
    return this.get("autopause");
  } }, { key: "setAutopause", value: function(e) {
    return this.set("autopause", e);
  } }, { key: "getBuffered", value: function() {
    return this.get("buffered");
  } }, { key: "getCameraProps", value: function() {
    return this.get("cameraProps");
  } }, { key: "setCameraProps", value: function(e) {
    return this.set("cameraProps", e);
  } }, { key: "getChapters", value: function() {
    return this.get("chapters");
  } }, { key: "getCurrentChapter", value: function() {
    return this.get("currentChapter");
  } }, { key: "getColor", value: function() {
    return this.get("color");
  } }, { key: "setColor", value: function(e) {
    return this.set("color", e);
  } }, { key: "getCuePoints", value: function() {
    return this.get("cuePoints");
  } }, { key: "getCurrentTime", value: function() {
    return this.get("currentTime");
  } }, { key: "setCurrentTime", value: function(e) {
    return this.set("currentTime", e);
  } }, { key: "getDuration", value: function() {
    return this.get("duration");
  } }, { key: "getEnded", value: function() {
    return this.get("ended");
  } }, { key: "getLoop", value: function() {
    return this.get("loop");
  } }, { key: "setLoop", value: function(e) {
    return this.set("loop", e);
  } }, { key: "setMuted", value: function(e) {
    return this.set("muted", e);
  } }, { key: "getMuted", value: function() {
    return this.get("muted");
  } }, { key: "getPaused", value: function() {
    return this.get("paused");
  } }, { key: "getPlaybackRate", value: function() {
    return this.get("playbackRate");
  } }, { key: "setPlaybackRate", value: function(e) {
    return this.set("playbackRate", e);
  } }, { key: "getPlayed", value: function() {
    return this.get("played");
  } }, { key: "getQualities", value: function() {
    return this.get("qualities");
  } }, { key: "getQuality", value: function() {
    return this.get("quality");
  } }, { key: "setQuality", value: function(e) {
    return this.set("quality", e);
  } }, { key: "getSeekable", value: function() {
    return this.get("seekable");
  } }, { key: "getSeeking", value: function() {
    return this.get("seeking");
  } }, { key: "getTextTracks", value: function() {
    return this.get("textTracks");
  } }, { key: "getVideoEmbedCode", value: function() {
    return this.get("videoEmbedCode");
  } }, { key: "getVideoId", value: function() {
    return this.get("videoId");
  } }, { key: "getVideoTitle", value: function() {
    return this.get("videoTitle");
  } }, { key: "getVideoWidth", value: function() {
    return this.get("videoWidth");
  } }, { key: "getVideoHeight", value: function() {
    return this.get("videoHeight");
  } }, { key: "getVideoUrl", value: function() {
    return this.get("videoUrl");
  } }, { key: "getVolume", value: function() {
    return this.get("volume");
  } }, { key: "setVolume", value: function(e) {
    return this.set("volume", e);
  } }], c && Ue(a.prototype, c), r && Ue(a, r), o;
}();
Ge || (V = function() {
  var o = function() {
    for (var r, e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, i = e.length, p = {}; n < i; n++)
      if ((r = e[n]) && r[1] in document) {
        for (n = 0; n < r.length; n++)
          p[e[0][n]] = r[n];
        return p;
      }
    return !1;
  }(), a = { fullscreenchange: o.fullscreenchange, fullscreenerror: o.fullscreenerror }, c = { request: function(r) {
    return new Promise(function(e, n) {
      var i = function v() {
        c.off("fullscreenchange", v), e();
      };
      c.on("fullscreenchange", i);
      var p = (r = r || document.documentElement)[o.requestFullscreen]();
      p instanceof Promise && p.then(i).catch(n);
    });
  }, exit: function() {
    return new Promise(function(r, e) {
      if (c.isFullscreen) {
        var n = function p() {
          c.off("fullscreenchange", p), r();
        };
        c.on("fullscreenchange", n);
        var i = document[o.exitFullscreen]();
        i instanceof Promise && i.then(n).catch(e);
      } else
        r();
    });
  }, on: function(r, e) {
    var n = a[r];
    n && document.addEventListener(n, e);
  }, off: function(r, e) {
    var n = a[r];
    n && document.removeEventListener(n, e);
  } };
  return Object.defineProperties(c, { isFullscreen: { get: function() {
    return Boolean(document[o.fullscreenElement]);
  } }, element: { enumerable: !0, get: function() {
    return document[o.fullscreenElement];
  } }, isEnabled: { enumerable: !0, get: function() {
    return Boolean(document[o.fullscreenEnabled]);
  } } }), c;
}(), function() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, a = [].slice.call(o.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")), c = function(r) {
    "console" in window && console.error && console.error("There was an error creating an embed: ".concat(r));
  };
  a.forEach(function(r) {
    try {
      if (r.getAttribute("data-vimeo-defer") !== null)
        return;
      var e = et(r);
      tt(Ke(e), e, r).then(function(n) {
        return qe(n, r);
      }).catch(c);
    } catch (n) {
      c(n);
    }
  });
}(), function() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoPlayerResizeEmbeds_) {
    window.VimeoPlayerResizeEmbeds_ = !0;
    var a = function(c) {
      if (le(c.origin) && c.data && c.data.event === "spacechange") {
        for (var r = o.querySelectorAll("iframe"), e = 0; e < r.length; e++)
          if (r[e].contentWindow === c.source) {
            r[e].parentElement.style.paddingBottom = "".concat(c.data.data[0].bottom, "px");
            break;
          }
      }
    };
    window.addEventListener("message", a);
  }
}(), function() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoSeoMetadataAppended) {
    window.VimeoSeoMetadataAppended = !0;
    var a = function(c) {
      if (le(c.origin)) {
        var r = Me(c.data);
        if (r && r.event === "ready")
          for (var e = o.querySelectorAll("iframe"), n = 0; n < e.length; n++) {
            var i = e[n], p = i.contentWindow === c.source;
            Ye(i.src) && p && new $e(i).callMethod("appendVideoMetadata", window.location.href);
          }
      }
    };
    window.addEventListener("message", a);
  }
}(), function() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoCheckedUrlTimeParam) {
    window.VimeoCheckedUrlTimeParam = !0;
    var a = function(r) {
      "console" in window && console.error && console.error("There was an error getting video Id: ".concat(r));
    }, c = function(r) {
      if (le(r.origin)) {
        var e = Me(r.data);
        if (e && e.event === "ready")
          for (var n = o.querySelectorAll("iframe"), i = 0; i < n.length; i++) {
            var p = n[i], v = p.contentWindow === r.source;
            Ye(p.src) && v && function() {
              var d = new $e(p);
              d.getVideoId().then(function(_) {
                var E = new RegExp("[?&]vimeo_t_".concat(_, "=([^&#]*)")).exec(window.location.href);
                if (E && E[1]) {
                  var $ = decodeURI(E[1]);
                  d.setCurrentTime($);
                }
              }).catch(a);
            }();
          }
      }
    };
    window.addEventListener("message", c);
  }
}());
const mt = "_VimeoPlayer_18d3k_1";
var Qe, nt = { exports: {} }, xe = {}, Je, Ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function vt() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Xe, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), p = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), x = Symbol.iterator, q = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(t) {
      for (var h = arguments.length, f = new Array(h > 1 ? h - 1 : 0), T = 1; T < h; T++)
        f[T - 1] = arguments[T];
      Y("error", t, f);
    }
    function Y(t, h, f) {
      var T = q.ReactDebugCurrentFrame.getStackAddendum();
      T !== "" && (h += "%s", f = f.concat([T]));
      var k = f.map(function(C) {
        return String(C);
      });
      k.unshift("Warning: " + h), Function.prototype.apply.call(console[t], console, k);
    }
    var D;
    function H(t) {
      return t.displayName || "Context";
    }
    function u(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case r:
          return "Fragment";
        case c:
          return "Portal";
        case n:
          return "Profiler";
        case e:
          return "StrictMode";
        case d:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case p:
            return H(t) + ".Consumer";
          case i:
            return H(t._context) + ".Provider";
          case v:
            return function(C, S, P) {
              var N = C.displayName;
              if (N)
                return N;
              var I = S.displayName || S.name || "";
              return I !== "" ? P + "(" + I + ")" : P;
            }(t, t.render, "ForwardRef");
          case E:
            var h = t.displayName || null;
            return h !== null ? h : u(t.type) || "Memo";
          case $:
            var f = t, T = f._payload, k = f._init;
            try {
              return u(k(T));
            } catch {
              return null;
            }
        }
      return null;
    }
    D = Symbol.for("react.module.reference");
    var l, s, b, w, M, z, ne, W = Object.assign, Q = 0;
    function se() {
    }
    se.__reactDisabledLog = !0;
    var re, oe = q.ReactCurrentDispatcher;
    function J(t, h, f) {
      if (re === void 0)
        try {
          throw Error();
        } catch (k) {
          var T = k.stack.trim().match(/\n( *(at )?)/);
          re = T && T[1] || "";
        }
      return `
` + re + t;
    }
    var X, ae = !1, be = typeof WeakMap == "function" ? WeakMap : Map;
    function fe(t, h) {
      if (!t || ae)
        return "";
      var f, T = X.get(t);
      if (T !== void 0)
        return T;
      ae = !0;
      var k, C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0, k = oe.current, oe.current = null, function() {
        if (Q === 0) {
          l = console.log, s = console.info, b = console.warn, w = console.error, M = console.group, z = console.groupCollapsed, ne = console.groupEnd;
          var j = { configurable: !0, enumerable: !0, value: se, writable: !0 };
          Object.defineProperties(console, { info: j, log: j, warn: j, error: j, group: j, groupCollapsed: j, groupEnd: j });
        }
        Q++;
      }();
      try {
        if (h) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (j) {
              f = j;
            }
            Reflect.construct(t, [], S);
          } else {
            try {
              S.call();
            } catch (j) {
              f = j;
            }
            t.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            f = j;
          }
          t();
        }
      } catch (j) {
        if (j && f && typeof j.stack == "string") {
          for (var P = j.stack.split(`
`), N = f.stack.split(`
`), I = P.length - 1, O = N.length - 1; I >= 1 && O >= 0 && P[I] !== N[O]; )
            O--;
          for (; I >= 1 && O >= 0; I--, O--)
            if (P[I] !== N[O]) {
              if (I !== 1 || O !== 1)
                do
                  if (I--, --O < 0 || P[I] !== N[O]) {
                    var m = `
` + P[I].replace(" at new ", " at ");
                    return t.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", t.displayName)), typeof t == "function" && X.set(t, m), m;
                  }
                while (I >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        ae = !1, oe.current = k, function() {
          if (--Q == 0) {
            var j = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, { log: W({}, j, { value: l }), info: W({}, j, { value: s }), warn: W({}, j, { value: b }), error: W({}, j, { value: w }), group: W({}, j, { value: M }), groupCollapsed: W({}, j, { value: z }), groupEnd: W({}, j, { value: ne }) });
          }
          Q < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }(), Error.prepareStackTrace = C;
      }
      var R = t ? t.displayName || t.name : "", y = R ? J(R) : "";
      return typeof t == "function" && X.set(t, y), y;
    }
    function G(t, h, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return fe(t, !(!(T = t.prototype) || !T.isReactComponent));
      var T;
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case d:
          return J("Suspense");
        case _:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            return function(P, N, I) {
              return fe(P, !1);
            }(t.render);
          case E:
            return G(t.type, h, f);
          case $:
            var k = t, C = k._payload, S = k._init;
            try {
              return G(S(C), h, f);
            } catch {
            }
        }
      return "";
    }
    X = new be();
    var K = Object.prototype.hasOwnProperty, de = {}, pe = q.ReactDebugCurrentFrame;
    function Z(t) {
      if (t) {
        var h = t._owner, f = G(t.type, t._source, h ? h.type : null);
        pe.setExtraStackFrame(f);
      } else
        pe.setExtraStackFrame(null);
    }
    var ke = Array.isArray;
    function ee(t) {
      return ke(t);
    }
    function he(t) {
      return "" + t;
    }
    function ye(t) {
      if (function(h) {
        try {
          return he(h), !1;
        } catch {
          return !0;
        }
      }(t))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", function(h) {
          return typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        }(t)), he(t);
    }
    var me, ve, ie, U = q.ReactCurrentOwner, Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
    ie = {};
    function _e(t, h, f, T, k) {
      var C, S = {}, P = null, N = null;
      for (C in f !== void 0 && (ye(f), P = "" + f), function(m) {
        if (K.call(m, "key")) {
          var R = Object.getOwnPropertyDescriptor(m, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }(h) && (ye(h.key), P = "" + h.key), function(m) {
        if (K.call(m, "ref")) {
          var R = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }(h) && (N = h.ref, function(m, R) {
        if (typeof m.ref == "string" && U.current && R && U.current.stateNode !== R) {
          var y = u(U.current.type);
          ie[y] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u(U.current.type), m.ref), ie[y] = !0);
        }
      }(h, k)), h)
        K.call(h, C) && !Ee.hasOwnProperty(C) && (S[C] = h[C]);
      if (t && t.defaultProps) {
        var I = t.defaultProps;
        for (C in I)
          S[C] === void 0 && (S[C] = I[C]);
      }
      if (P || N) {
        var O = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
        P && function(m, R) {
          var y = function() {
            me || (me = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
          };
          y.isReactWarning = !0, Object.defineProperty(m, "key", { get: y, configurable: !0 });
        }(S, O), N && function(m, R) {
          var y = function() {
            ve || (ve = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
          };
          y.isReactWarning = !0, Object.defineProperty(m, "ref", { get: y, configurable: !0 });
        }(S, O);
      }
      return function(m, R, y, j, Te, Ce, it) {
        var ge = { $$typeof: a, type: m, key: R, ref: y, props: it, _owner: Ce, _store: {} };
        return Object.defineProperty(ge._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(ge, "_self", { configurable: !1, enumerable: !1, writable: !1, value: j }), Object.defineProperty(ge, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Te }), Object.freeze && (Object.freeze(ge.props), Object.freeze(ge)), ge;
      }(t, P, N, k, T, U.current, S);
    }
    var ue, ce = q.ReactCurrentOwner, Oe = q.ReactDebugCurrentFrame;
    function L(t) {
      if (t) {
        var h = t._owner, f = G(t.type, t._source, h ? h.type : null);
        Oe.setExtraStackFrame(f);
      } else
        Oe.setExtraStackFrame(null);
    }
    function g(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function Pe() {
      if (ce.current) {
        var t = u(ce.current.type);
        if (t)
          return `

Check the render method of \`` + t + "`.";
      }
      return "";
    }
    ue = !1;
    var Le = {};
    function Ve(t, h) {
      if (t._store && !t._store.validated && t.key == null) {
        t._store.validated = !0;
        var f = function(k) {
          var C = Pe();
          if (!C) {
            var S = typeof k == "string" ? k : k.displayName || k.name;
            S && (C = `

Check the top-level render call using <` + S + ">.");
          }
          return C;
        }(h);
        if (!Le[f]) {
          Le[f] = !0;
          var T = "";
          t && t._owner && t._owner !== ce.current && (T = " It was passed a child from " + u(t._owner.type) + "."), L(t), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, T), L(null);
        }
      }
    }
    function De(t, h) {
      if (typeof t == "object") {
        if (ee(t))
          for (var f = 0; f < t.length; f++) {
            var T = t[f];
            g(T) && Ve(T, h);
          }
        else if (g(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var k = function(P) {
            if (P === null || typeof P != "object")
              return null;
            var N = x && P[x] || P["@@iterator"];
            return typeof N == "function" ? N : null;
          }(t);
          if (typeof k == "function" && k !== t.entries)
            for (var C, S = k.call(t); !(C = S.next()).done; )
              g(C.value) && Ve(C.value, h);
        }
      }
    }
    function rt(t) {
      var h, f = t.type;
      if (f != null && typeof f != "string") {
        if (typeof f == "function")
          h = f.propTypes;
        else {
          if (typeof f != "object" || f.$$typeof !== v && f.$$typeof !== E)
            return;
          h = f.propTypes;
        }
        if (h) {
          var T = u(f);
          (function(k, C, S, P, N) {
            var I = Function.call.bind(K);
            for (var O in k)
              if (I(k, O)) {
                var m = void 0;
                try {
                  if (typeof k[O] != "function") {
                    var R = Error((P || "React class") + ": " + S + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    throw R.name = "Invariant Violation", R;
                  }
                  m = k[O](C, O, P, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (y) {
                  m = y;
                }
                !m || m instanceof Error || (Z(N), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", S, O, typeof m), Z(null)), m instanceof Error && !(m.message in de) && (de[m.message] = !0, Z(N), F("Failed %s type: %s", S, m.message), Z(null));
              }
          })(h, t.props, "prop", T, t);
        } else
          f.PropTypes !== void 0 && !ue && (ue = !0, F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u(f) || "Unknown"));
        typeof f.getDefaultProps != "function" || f.getDefaultProps.isReactClassApproved || F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function We(t, h, f, T, k, C) {
      var S = function(y) {
        return typeof y == "string" || typeof y == "function" || y === r || y === n || y === e || y === d || y === _ || y === A || typeof y == "object" && y !== null && (y.$$typeof === $ || y.$$typeof === E || y.$$typeof === i || y.$$typeof === p || y.$$typeof === v || y.$$typeof === D || y.getModuleId !== void 0);
      }(t);
      if (!S) {
        var P = "";
        (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var N, I = function(y) {
          return y !== void 0 ? `

Check your code at ` + y.fileName.replace(/^.*[\\\/]/, "") + ":" + y.lineNumber + "." : "";
        }(k);
        P += I || Pe(), t === null ? N = "null" : ee(t) ? N = "array" : t !== void 0 && t.$$typeof === a ? (N = "<" + (u(t.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : N = typeof t, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, P);
      }
      var O = _e(t, h, f, k, C);
      if (O == null)
        return O;
      if (S) {
        var m = h.children;
        if (m !== void 0)
          if (T)
            if (ee(m)) {
              for (var R = 0; R < m.length; R++)
                De(m[R], t);
              Object.freeze && Object.freeze(m);
            } else
              F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            De(m, t);
      }
      return t === r ? function(y) {
        for (var j = Object.keys(y.props), Te = 0; Te < j.length; Te++) {
          var Ce = j[Te];
          if (Ce !== "children" && Ce !== "key") {
            L(y), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ce), L(null);
            break;
          }
        }
        y.ref !== null && (L(y), F("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }(O) : rt(O), O;
    }
    var ot = function(t, h, f) {
      return We(t, h, f, !1);
    }, at = function(t, h, f) {
      return We(t, h, f, !0);
    };
    Ne.Fragment = r, Ne.jsx = ot, Ne.jsxs = at;
  }()), Ne;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = function() {
    if (Qe)
      return xe;
    Qe = 1;
    var a = Xe, c = Symbol.for("react.element"), r = Symbol.for("react.fragment"), e = Object.prototype.hasOwnProperty, n = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
    function p(v, d, _) {
      var E, $ = {}, A = null, x = null;
      for (E in _ !== void 0 && (A = "" + _), d.key !== void 0 && (A = "" + d.key), d.ref !== void 0 && (x = d.ref), d)
        e.call(d, E) && !i.hasOwnProperty(E) && ($[E] = d[E]);
      if (v && v.defaultProps)
        for (E in d = v.defaultProps)
          $[E] === void 0 && ($[E] = d[E]);
      return { $$typeof: c, type: v, key: A, ref: x, props: $, _owner: n.current };
    }
    return xe.Fragment = r, xe.jsx = p, xe.jsxs = p, xe;
  }() : o.exports = vt();
})(nt);
const gt = nt.exports.jsx;
function bt(o) {
  const { className: a = "", fullWidth: c = !1, id: r, autopause: e = !0, autoplay: n = !1, background: i = !1, byline: p = !0, color: v = "00adef", controls: d = !0, dnt: _ = !1, height: E, interactive_params: $, keyboard: A = !0, loop: x = !1, maxheight: q, maxwidth: F, muted: Y = !1, pip: D = !1, playsinline: H = !0, portrait: u = !0, quality: l, responsive: s = !1, speed: b = !1, texttrack: w, title: M = !0, transparent: z = !0, width: ne = 400, onPlay: W, onPlaying: Q, onPause: se, onEnded: re, onTimeUpdate: oe, onProgress: J, onSeeking: X, onSeeked: ae, onTextTrackChange: be, onChapterChange: fe, onCueChange: G, onCuePoint: K, onVolumeChange: de, onPlaybackRateChange: pe, onBufferStart: Z, onBufferEnd: ke, onError: ee, onLoaded: he, onDurationChange: ye, onFullScreenChange: me, onQualityChange: ve, onCameraChange: ie, onResize: U, onEnterPictureInPicture: Ee, onLeavePictureInPicture: _e, onInteractiveHotspotClicked: ue, onInteractiveOverlayPanelClicked: ce } = o, Oe = c ? `${mt} ${a}` : a, L = ze(), g = ze();
  return ut(() => {
    var Pe;
    !(g != null && g.current) && (L == null ? void 0 : L.current) && (g.current = new $e(L == null ? void 0 : L.current, { id: r, autopause: e, autoplay: n, background: i, byline: p, color: v, controls: d, dnt: _, height: E, interactive_params: $, keyboard: A, loop: x, maxheight: q, maxwidth: F, muted: Y, pip: D, playsinline: H, portrait: u, quality: l, responsive: s, speed: b, texttrack: w, title: M, transparent: z, width: ne }), W && g.current.on("play", W), Q && g.current.on("playing", Q), se && g.current.on("pause", se), re && g.current.on("ended", re), oe && g.current.on("timeupdate", oe), J && g.current.on("progress", J), X && g.current.on("seeking", X), ae && g.current.on("seeked", ae), be && g.current.on("texttrackchange", be), fe && g.current.on("chapterchange", fe), G && g.current.on("cuechange", G), K && g.current.on("cuepoint", K), de && g.current.on("volumechange", de), pe && g.current.on("playbackratechange", pe), Z && g.current.on("bufferstart", Z), ke && g.current.on("bufferend", ke), ee && (g.current.on("error", ee), (Pe = g.current.ready()) == null || Pe.catch(ee)), he && g.current.on("loaded", he), ye && g.current.on("durationchange", ye), me && g.current.on("fullscreenchange", me), ve && g.current.on("qualitychange", ve), ie && g.current.on("camerachange", ie), U && g.current.on("resize", U), Ee && g.current.on("enterpictureinpicture", Ee), _e && g.current.on("leavepictureinpicture", _e), ue && g.current.on("interactivehotspotclicked", ue), ce && g.current.on("interactiveoverlaypanelclicked", ce));
  }, [r, e, n, i, p, v, d, _, E, $, A, x, q, F, Y, D, H, u, l, s, b, w, M, z, ne, W, re, se, Q, oe, J, X, ae, be, fe, G, K, de, pe, Z, ke, ee, he, ye, me, ve, ie, U, Ee, _e, ue, ce]), gt("div", { ref: L, className: Oe });
}
export {
  bt as VimeoPlayer
};
