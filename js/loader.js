/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.8.2(59c417515cc4385a81ab1755611263b94d0071e2)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
var define, AMDLoader, _amdLoaderGlobal = this;
! function (e) {
    e.global = _amdLoaderGlobal, e.isNode = "undefined" != typeof module && !!module.exports, e.isWindows = !!("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.indexOf("Windows") >= 0) || "undefined" != typeof process && "win32" === process.platform, e.isWebWorker = "function" == typeof e.global.importScripts, e.isElectronRenderer = "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.electron && "renderer" === process.type, e.isElectronMain = "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.electron && "browser" === process.type, e.hasPerformanceNow = e.global.performance && "function" == typeof e.global.performance.now
}(AMDLoader || (AMDLoader = {})),
function (e) {
    function t() {
        return e.hasPerformanceNow ? e.global.performance.now() : Date.now()
    }
    var r;
    ! function (e) {
        e[e.LoaderAvailable = 1] = "LoaderAvailable", e[e.BeginLoadingScript = 10] = "BeginLoadingScript", e[e.EndLoadingScriptOK = 11] = "EndLoadingScriptOK", e[e.EndLoadingScriptError = 12] = "EndLoadingScriptError", e[e.BeginInvokeFactory = 21] = "BeginInvokeFactory", e[e.EndInvokeFactory = 22] = "EndInvokeFactory", e[e.NodeBeginEvaluatingScript = 31] = "NodeBeginEvaluatingScript", e[e.NodeEndEvaluatingScript = 32] = "NodeEndEvaluatingScript", e[e.NodeBeginNativeRequire = 33] = "NodeBeginNativeRequire", e[e.NodeEndNativeRequire = 34] = "NodeEndNativeRequire"
    }(r = e.LoaderEventType || (e.LoaderEventType = {})), e.getHighPerformanceTimestamp = t;
    var o = function (e, t, r) {
        this.type = e, this.detail = t, this.timestamp = r
    };
    e.LoaderEvent = o;
    var n = function () {
        function e(e) {
            this._events = [new o(r.LoaderAvailable, "", e)]
        }
        return e.prototype.record = function (e, r) {
            this._events.push(new o(e, r, t()))
        }, e.prototype.getEvents = function () {
            return this._events
        }, e
    }();
    e.LoaderEventRecorder = n;
    var i = function () {
        function e() {}
        return e.prototype.record = function (e, t) {}, e.prototype.getEvents = function () {
            return []
        }, e
    }();
    i.INSTANCE = new i, e.NullLoaderEventRecorder = i
}(AMDLoader || (AMDLoader = {})),
function (e) {
    var t = function () {
        function t() {}
        return t.fileUriToFilePath = function (t) {
            if (t = decodeURI(t), e.isWindows) {
                if (/^file:\/\/\//.test(t)) return t.substr(8);
                if (/^file:\/\//.test(t)) return t.substr(5)
            } else if (/^file:\/\//.test(t)) return t.substr(7);
            return t
        }, t.startsWith = function (e, t) {
            return e.length >= t.length && e.substr(0, t.length) === t
        }, t.endsWith = function (e, t) {
            return e.length >= t.length && e.substr(e.length - t.length) === t
        }, t.containsQueryString = function (e) {
            return /^[^\#]*\?/gi.test(e)
        }, t.isAbsolutePath = function (e) {
            return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e)
        }, t.forEachProperty = function (e, t) {
            if (e) {
                var r = void 0;
                for (r in e) e.hasOwnProperty(r) && t(r, e[r])
            }
        }, t.isEmpty = function (e) {
            var r = !0;
            return t.forEachProperty(e, (function () {
                r = !1
            })), r
        }, t.recursiveClone = function (e) {
            if (!e || "object" != typeof e) return e;
            var r = Array.isArray(e) ? [] : {};
            return t.forEachProperty(e, (function (e, o) {
                r[e] = o && "object" == typeof o ? t.recursiveClone(o) : o
            })), r
        }, t.generateAnonymousModule = function () {
            return "===anonymous" + t.NEXT_ANONYMOUS_ID++ + "==="
        }, t.isAnonymousModule = function (e) {
            return /^===anonymous/.test(e)
        }, t
    }();
    t.NEXT_ANONYMOUS_ID = 1, e.Utilities = t
}(AMDLoader || (AMDLoader = {})),
function (e) {
    var t = function () {
        function t() {}
        return t.validateConfigurationOptions = function (t) {
            return "string" != typeof (t = t || {}).baseUrl && (t.baseUrl = ""), "boolean" != typeof t.isBuild && (t.isBuild = !1), "object" != typeof t.paths && (t.paths = {}), "object" != typeof t.config && (t.config = {}), void 0 === t.catchError && (t.catchError = e.isWebWorker), "string" != typeof t.urlArgs && (t.urlArgs = ""), "function" != typeof t.onError && (t.onError = function (e) {
                return "load" === e.errorCode ? (console.error('Loading "' + e.moduleId + '" failed'), console.error("Detail: ", e.detail), e.detail && e.detail.stack && console.error(e.detail.stack), console.error("Here are the modules that depend on it:"), void console.error(e.neededBy)) : "factory" === e.errorCode ? (console.error('The factory method of "' + e.moduleId + '" has thrown an exception'), console.error(e.detail), void(e.detail && e.detail.stack && console.error(e.detail.stack))) : void 0
            }), "object" == typeof t.ignoreDuplicateModules && Array.isArray(t.ignoreDuplicateModules) || (t.ignoreDuplicateModules = []), t.baseUrl.length > 0 && (e.Utilities.endsWith(t.baseUrl, "/") || (t.baseUrl += "/")), Array.isArray(t.nodeModules) || (t.nodeModules = []), ("number" != typeof t.nodeCachedDataWriteDelay || t.nodeCachedDataWriteDelay < 0) && (t.nodeCachedDataWriteDelay = 7e3), "function" != typeof t.onNodeCachedDataError && (t.onNodeCachedDataError = function (e) {
                "cachedDataRejected" === e.errorCode ? console.warn("Rejected cached data from file: " + e.path) : "unlink" !== e.errorCode && "writeFile" !== e.errorCode || (console.error("Problems writing cached data file: " + e.path), console.error(e.detail))
            }), t
        }, t.mergeConfigurationOptions = function (r, o) {
            void 0 === r && (r = null), void 0 === o && (o = null);
            var n = e.Utilities.recursiveClone(o || {});
            return e.Utilities.forEachProperty(r, (function (t, r) {
                "ignoreDuplicateModules" === t && void 0 !== n.ignoreDuplicateModules ? n.ignoreDuplicateModules = n.ignoreDuplicateModules.concat(r) : "paths" === t && void 0 !== n.paths ? e.Utilities.forEachProperty(r, (function (e, t) {
                    return n.paths[e] = t
                })) : "config" === t && void 0 !== n.config ? e.Utilities.forEachProperty(r, (function (e, t) {
                    return n.config[e] = t
                })) : n[t] = e.Utilities.recursiveClone(r)
            })), t.validateConfigurationOptions(n)
        }, t
    }();
    e.ConfigurationOptionsUtil = t;
    var r = function () {
        function r(r) {
            if (this.options = t.mergeConfigurationOptions(r), this._createIgnoreDuplicateModulesMap(), this._createNodeModulesMap(), this._createSortedPathsRules(), "" === this.options.baseUrl) {
                if (e.isNode && this.options.nodeRequire && this.options.nodeRequire.main && this.options.nodeRequire.main.filename) {
                    var o = this.options.nodeRequire.main.filename,
                        n = Math.max(o.lastIndexOf("/"), o.lastIndexOf("\\"));
                    this.options.baseUrl = o.substring(0, n + 1)
                }
                if (e.isNode && this.options.nodeMain) {
                    o = this.options.nodeMain, n = Math.max(o.lastIndexOf("/"), o.lastIndexOf("\\"));
                    this.options.baseUrl = o.substring(0, n + 1)
                }
            }
        }
        return r.prototype._createIgnoreDuplicateModulesMap = function () {
            this.ignoreDuplicateModulesMap = {};
            for (var e = 0; e < this.options.ignoreDuplicateModules.length; e++) this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]] = !0
        }, r.prototype._createNodeModulesMap = function () {
            this.nodeModulesMap = Object.create(null);
            for (var e = 0, t = this.options.nodeModules; e < t.length; e++) {
                var r = t[e];
                this.nodeModulesMap[r] = !0
            }
        }, r.prototype._createSortedPathsRules = function () {
            var t = this;
            this.sortedPathsRules = [], e.Utilities.forEachProperty(this.options.paths, (function (e, r) {
                Array.isArray(r) ? t.sortedPathsRules.push({
                    from: e,
                    to: r
                }) : t.sortedPathsRules.push({
                    from: e,
                    to: [r]
                })
            })), this.sortedPathsRules.sort((function (e, t) {
                return t.from.length - e.from.length
            }))
        }, r.prototype.cloneAndMerge = function (e) {
            return new r(t.mergeConfigurationOptions(e, this.options))
        }, r.prototype.getOptionsLiteral = function () {
            return this.options
        }, r.prototype._applyPaths = function (t) {
            for (var r, o = 0, n = this.sortedPathsRules.length; o < n; o++)
                if (r = this.sortedPathsRules[o], e.Utilities.startsWith(t, r.from)) {
                    for (var i = [], s = 0, d = r.to.length; s < d; s++) i.push(r.to[s] + t.substr(r.from.length));
                    return i
                } return [t]
        }, r.prototype._addUrlArgsToUrl = function (t) {
            return e.Utilities.containsQueryString(t) ? t + "&" + this.options.urlArgs : t + "?" + this.options.urlArgs
        }, r.prototype._addUrlArgsIfNecessaryToUrl = function (e) {
            return this.options.urlArgs ? this._addUrlArgsToUrl(e) : e
        }, r.prototype._addUrlArgsIfNecessaryToUrls = function (e) {
            if (this.options.urlArgs)
                for (var t = 0, r = e.length; t < r; t++) e[t] = this._addUrlArgsToUrl(e[t]);
            return e
        }, r.prototype.moduleIdToPaths = function (t) {
            if (!0 === this.nodeModulesMap[t]) return this.isBuild() ? ["empty:"] : ["node|" + t];
            var r, o = t;
            if (e.Utilities.endsWith(o, ".js") || e.Utilities.isAbsolutePath(o)) e.Utilities.endsWith(o, ".js") || e.Utilities.containsQueryString(o) || (o += ".js"), r = [o];
            else
                for (var n = 0, i = (r = this._applyPaths(o)).length; n < i; n++) this.isBuild() && "empty:" === r[n] || (e.Utilities.isAbsolutePath(r[n]) || (r[n] = this.options.baseUrl + r[n]), e.Utilities.endsWith(r[n], ".js") || e.Utilities.containsQueryString(r[n]) || (r[n] = r[n] + ".js"));
            return this._addUrlArgsIfNecessaryToUrls(r)
        }, r.prototype.requireToUrl = function (t) {
            var r = t;
            return e.Utilities.isAbsolutePath(r) || (r = this._applyPaths(r)[0], e.Utilities.isAbsolutePath(r) || (r = this.options.baseUrl + r)), this._addUrlArgsIfNecessaryToUrl(r)
        }, r.prototype.isBuild = function () {
            return this.options.isBuild
        }, r.prototype.isDuplicateMessageIgnoredFor = function (e) {
            return this.ignoreDuplicateModulesMap.hasOwnProperty(e)
        }, r.prototype.getConfigForModule = function (e) {
            if (this.options.config) return this.options.config[e]
        }, r.prototype.shouldCatchError = function () {
            return this.options.catchError
        }, r.prototype.shouldRecordStats = function () {
            return this.options.recordStats
        }, r.prototype.onError = function (e) {
            this.options.onError(e)
        }, r
    }();
    e.Configuration = r
}(AMDLoader || (AMDLoader = {})),
function (e) {
    var t = function () {
            function e(e) {
                this.actualScriptLoader = e, this.callbackMap = {}
            }
            return e.prototype.load = function (e, t, r, o) {
                var n = this,
                    i = {
                        callback: r,
                        errorback: o
                    };
                return this.callbackMap.hasOwnProperty(t) ? void this.callbackMap[t].push(i) : (this.callbackMap[t] = [i], void this.actualScriptLoader.load(e, t, (function () {
                    return n.triggerCallback(t)
                }), (function (e) {
                    return n.triggerErrorback(t, e)
                })))
            }, e.prototype.triggerCallback = function (e) {
                var t = this.callbackMap[e];
                delete this.callbackMap[e];
                for (var r = 0; r < t.length; r++) t[r].callback()
            }, e.prototype.triggerErrorback = function (e, t) {
                var r = this.callbackMap[e];
                delete this.callbackMap[e];
                for (var o = 0; o < r.length; o++) r[o].errorback(t)
            }, e
        }(),
        r = function () {
            function e() {}
            return e.prototype.attachListeners = function (e, t, r) {
                var o = function () {
                        e.removeEventListener("load", n), e.removeEventListener("error", i)
                    },
                    n = function (e) {
                        o(), t()
                    },
                    i = function (e) {
                        o(), r(e)
                    };
                e.addEventListener("load", n), e.addEventListener("error", i)
            }, e.prototype.load = function (e, t, r, o) {
                var n = document.createElement("script");
                n.setAttribute("async", "async"), n.setAttribute("type", "text/javascript"), this.attachListeners(n, r, o), n.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(n)
            }, e
        }(),
        o = function () {
            function e() {}
            return e.prototype.load = function (e, t, r, o) {
                try {
                    importScripts(t), r()
                } catch (e) {
                    o(e)
                }
            }, e
        }(),
        n = function () {
            function t() {
                this._initialized = !1
            }
            return t.prototype._init = function (e) {
                this._initialized || (this._initialized = !0, this._fs = e("fs"), this._vm = e("vm"), this._path = e("path"), this._crypto = e("crypto"))
            }, t.prototype.load = function (r, o, n, i) {
                var s = this,
                    d = r.getConfig().getOptionsLiteral(),
                    a = d.nodeRequire || e.global.nodeRequire,
                    l = d.nodeInstrumenter || function (e) {
                        return e
                    };
                this._init(a);
                var u = r.getRecorder();
                if (/^node\|/.test(o)) {
                    var c = o.split("|"),
                        p = null;
                    try {
                        p = a(c[1])
                    } catch (e) {
                        return void i(e)
                    }
                    r.enqueueDefineAnonymousModule([], (function () {
                        return p
                    })), n()
                } else o = e.Utilities.fileUriToFilePath(o), this._fs.readFile(o, {
                    encoding: "utf8"
                }, (function (a, c) {
                    if (a) i(a);
                    else {
                        var p = s._path.normalize(o);
                        if (e.isElectronRenderer) {
                            var f = p.match(/^([a-z])\:(.*)/i);
                            f && (p = f[1].toUpperCase() + ":" + f[2]), p = "file:///" + p.replace(/\\/g, "/")
                        }
                        var h, g = "(function (require, define, __filename, __dirname) { ",
                            v = "\n});";
                        if (h = c.charCodeAt(0) === t._BOM ? g + c.substring(1) + v : g + c + v, h = l(h, p), d.nodeCachedDataDir) {
                            var _ = s._getCachedDataPath(d.nodeCachedDataDir, o);
                            s._fs.readFile(_, (function (e, i) {
                                var a = {
                                        filename: p,
                                        produceCachedData: void 0 === i,
                                        cachedData: i
                                    },
                                    l = s._loadAndEvalScript(o, p, h, a, u);
                                n(), l.cachedDataRejected ? (d.onNodeCachedDataError({
                                    errorCode: "cachedDataRejected",
                                    path: _
                                }), t._runSoon((function () {
                                    return s._fs.unlink(_, (function (e) {
                                        e && r.getConfig().getOptionsLiteral().onNodeCachedDataError({
                                            errorCode: "unlink",
                                            path: _,
                                            detail: e
                                        })
                                    }))
                                }), d.nodeCachedDataWriteDelay)) : l.cachedDataProduced && t._runSoon((function () {
                                    return s._fs.writeFile(_, l.cachedData, (function (e) {
                                        e && r.getConfig().getOptionsLiteral().onNodeCachedDataError({
                                            errorCode: "writeFile",
                                            path: _,
                                            detail: e
                                        })
                                    }))
                                }), d.nodeCachedDataWriteDelay)
                            }))
                        } else s._loadAndEvalScript(o, p, h, {
                            filename: p
                        }, u), n()
                    }
                }))
            }, t.prototype._loadAndEvalScript = function (t, r, o, n, i) {
                i.record(e.LoaderEventType.NodeBeginEvaluatingScript, t);
                var s = new this._vm.Script(o, n);
                return s.runInThisContext(n).call(e.global, e.RequireFunc, e.DefineFunc, r, this._path.dirname(t)), i.record(e.LoaderEventType.NodeEndEvaluatingScript, t), s
            }, t.prototype._getCachedDataPath = function (e, t) {
                var r = this._crypto.createHash("md5").update(t, "utf8").digest("hex"),
                    o = this._path.basename(t).replace(/\.js$/, "");
                return this._path.join(e, r + "-" + o + ".code")
            }, t._runSoon = function (e, t) {
                var r = t + Math.ceil(Math.random() * t);
                setTimeout(e, r)
            }, t
        }();
    n._BOM = 65279, e.scriptLoader = new t(e.isWebWorker ? new o : e.isNode ? new n : new r)
}(AMDLoader || (AMDLoader = {})),
function (e) {
    var t = function () {
        function t(e) {
            var t = e.lastIndexOf("/");
            this.fromModulePath = -1 !== t ? e.substr(0, t + 1) : ""
        }
        return t._normalizeModuleId = function (e) {
            var t, r = e;
            for (t = /\/\.\//; t.test(r);) r = r.replace(t, "/");
            for (r = r.replace(/^\.\//g, ""), t = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//; t.test(r);) r = r.replace(t, "/");
            return r.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//, "")
        }, t.prototype.resolveModule = function (r) {
            var o = r;
            return e.Utilities.isAbsolutePath(o) || (e.Utilities.startsWith(o, "./") || e.Utilities.startsWith(o, "../")) && (o = t._normalizeModuleId(this.fromModulePath + o)), o
        }, t
    }();
    t.ROOT = new t(""), e.ModuleIdResolver = t;
    var r = function () {
        function t(e, t, r, o, n, i) {
            this.id = e, this.strId = t, this.dependencies = r, this._callback = o, this._errorback = n, this.moduleIdResolver = i, this.exports = {}, this.exportsPassedIn = !1, this.unresolvedDependenciesCount = this.dependencies.length, this._isComplete = !1
        }
        return t._safeInvokeFunction = function (t, r) {
            try {
                return {
                    returnedValue: t.apply(e.global, r),
                    producedError: null
                }
            } catch (e) {
                return {
                    returnedValue: null,
                    producedError: e
                }
            }
        }, t._invokeFactory = function (t, r, o, n) {
            return t.isBuild() && !e.Utilities.isAnonymousModule(r) ? {
                returnedValue: null,
                producedError: null
            } : t.shouldCatchError() ? this._safeInvokeFunction(o, n) : {
                returnedValue: o.apply(e.global, n),
                producedError: null
            }
        }, t.prototype.complete = function (r, o, n) {
            this._isComplete = !0;
            var i = null;
            if (this._callback)
                if ("function" == typeof this._callback) {
                    r.record(e.LoaderEventType.BeginInvokeFactory, this.strId);
                    var s = t._invokeFactory(o, this.strId, this._callback, n);
                    i = s.producedError, r.record(e.LoaderEventType.EndInvokeFactory, this.strId), i || void 0 === s.returnedValue || this.exportsPassedIn && !e.Utilities.isEmpty(this.exports) || (this.exports = s.returnedValue)
                } else this.exports = this._callback;
            i && o.onError({
                errorCode: "factory",
                moduleId: this.strId,
                detail: i
            }), this.dependencies = null, this._callback = null, this._errorback = null, this.moduleIdResolver = null
        }, t.prototype.onDependencyError = function (e) {
            return !!this._errorback && (this._errorback(e), !0)
        }, t.prototype.isComplete = function () {
            return this._isComplete
        }, t
    }();
    e.Module = r;
    var o = function () {
            function e() {
                this._nextId = 0, this._strModuleIdToIntModuleId = new Map, this._intModuleIdToStrModuleId = [], this.getModuleId("exports"), this.getModuleId("module"), this.getModuleId("require")
            }
            return e.prototype.getMaxModuleId = function () {
                return this._nextId
            }, e.prototype.getModuleId = function (e) {
                var t = this._strModuleIdToIntModuleId.get(e);
                return void 0 === t && (t = this._nextId++, this._strModuleIdToIntModuleId.set(e, t), this._intModuleIdToStrModuleId[t] = e), t
            }, e.prototype.getStrModuleId = function (e) {
                return this._intModuleIdToStrModuleId[e]
            }, e
        }(),
        n = function (e) {
            this.id = e
        };
    n.EXPORTS = new n(0), n.MODULE = new n(1), n.REQUIRE = new n(2), e.RegularDependency = n;
    var i = function (e, t, r) {
        this.id = e, this.pluginId = t, this.pluginParam = r
    };
    e.PluginDependency = i;
    var s = function () {
        function s(t, r) {
            void 0 === r && (r = 0), this._recorder = null, this._loaderAvailableTimestamp = r, this._moduleIdProvider = new o, this._config = new e.Configuration, this._scriptLoader = t, this._modules2 = [], this._knownModules2 = [], this._inverseDependencies2 = [], this._inversePluginDependencies2 = new Map, this._currentAnnonymousDefineCall = null, this._buildInfoPath = [], this._buildInfoDefineStack = [], this._buildInfoDependencies = []
        }
        return s._findRelevantLocationInStack = function (e, t) {
            for (var r = function (e) {
                    return e.replace(/\\/g, "/")
                }, o = r(e), n = t.split(/\n/), i = 0; i < n.length; i++) {
                var s = n[i].match(/(.*):(\d+):(\d+)\)?$/);
                if (s) {
                    var d = s[1],
                        a = s[2],
                        l = s[3],
                        u = Math.max(d.lastIndexOf(" ") + 1, d.lastIndexOf("(") + 1);
                    if ((d = r(d = d.substr(u))) === o) {
                        var c = {
                            line: parseInt(a, 10),
                            col: parseInt(l, 10)
                        };
                        return 1 === c.line && (c.col -= "(function (require, define, __filename, __dirname) { ".length), c
                    }
                }
            }
            throw new Error("Could not correlate define call site for needle " + e)
        }, s.prototype.getBuildInfo = function () {
            if (!this._config.isBuild()) return null;
            for (var e = [], t = 0, r = 0, o = this._modules2.length; r < o; r++) {
                var n = this._modules2[r];
                if (n) {
                    var i = this._buildInfoPath[n.id] || null,
                        d = this._buildInfoDefineStack[n.id] || null,
                        a = this._buildInfoDependencies[n.id];
                    e[t++] = {
                        id: n.strId,
                        path: i,
                        defineLocation: i && d ? s._findRelevantLocationInStack(i, d) : null,
                        dependencies: a,
                        shim: null,
                        exports: n.exports
                    }
                }
            }
            return e
        }, s.prototype.getRecorder = function () {
            return this._recorder || (this._config.shouldRecordStats() ? this._recorder = new e.LoaderEventRecorder(this._loaderAvailableTimestamp) : this._recorder = e.NullLoaderEventRecorder.INSTANCE), this._recorder
        }, s.prototype.getLoaderEvents = function () {
            return this.getRecorder().getEvents()
        }, s.prototype.enqueueDefineAnonymousModule = function (e, t) {
            if (null !== this._currentAnnonymousDefineCall) throw new Error("Can only have one anonymous define call per script file");
            var r = null;
            this._config.isBuild() && (r = new Error("StackLocation").stack), this._currentAnnonymousDefineCall = {
                stack: r,
                dependencies: e,
                callback: t
            }
        }, s.prototype.defineModule = function (e, o, n, i, s, d) {
            var a = this;
            void 0 === d && (d = new t(e));
            var l = this._moduleIdProvider.getModuleId(e);
            if (this._modules2[l]) this._config.isDuplicateMessageIgnoredFor(e) || console.warn("Duplicate definition of module '" + e + "'");
            else {
                var u = new r(l, e, this._normalizeDependencies(o, d), n, i, d);
                this._modules2[l] = u, this._config.isBuild() && (this._buildInfoDefineStack[l] = s, this._buildInfoDependencies[l] = u.dependencies.map((function (e) {
                    return a._moduleIdProvider.getStrModuleId(e.id)
                }))), this._resolve(u)
            }
        }, s.prototype._normalizeDependency = function (e, t) {
            if ("exports" === e) return n.EXPORTS;
            if ("module" === e) return n.MODULE;
            if ("require" === e) return n.REQUIRE;
            var r = e.indexOf("!");
            if (r >= 0) {
                var o = t.resolveModule(e.substr(0, r)),
                    s = t.resolveModule(e.substr(r + 1)),
                    d = this._moduleIdProvider.getModuleId(o + "!" + s),
                    a = this._moduleIdProvider.getModuleId(o);
                return new i(d, a, s)
            }
            return new n(this._moduleIdProvider.getModuleId(t.resolveModule(e)))
        }, s.prototype._normalizeDependencies = function (e, t) {
            for (var r = [], o = 0, n = 0, i = e.length; n < i; n++) r[o++] = this._normalizeDependency(e[n], t);
            return r
        }, s.prototype._relativeRequire = function (t, r, o, n) {
            return "string" == typeof r ? this.synchronousRequire(r, t) : void this.defineModule(e.Utilities.generateAnonymousModule(), r, o, n, null, t)
        }, s.prototype.synchronousRequire = function (e, r) {
            void 0 === r && (r = new t(e));
            var o = this._normalizeDependency(e, r),
                n = this._modules2[o.id];
            if (!n) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + e + "'. This is the first mention of this module!");
            if (!n.isComplete()) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + e + "'. This module has not been resolved completely yet.");
            return n.exports
        }, s.prototype.configure = function (t, r) {
            var o = this._config.shouldRecordStats();
            this._config = r ? new e.Configuration(t) : this._config.cloneAndMerge(t), this._config.shouldRecordStats() && !o && (this._recorder = null)
        }, s.prototype.getConfig = function () {
            return this._config
        }, s.prototype._onLoad = function (e) {
            if (null !== this._currentAnnonymousDefineCall) {
                var t = this._currentAnnonymousDefineCall;
                this._currentAnnonymousDefineCall = null, this.defineModule(this._moduleIdProvider.getStrModuleId(e), t.dependencies, t.callback, null, t.stack)
            }
        }, s.prototype._createLoadError = function (e, t) {
            var r = this;
            return {
                errorCode: "load",
                moduleId: this._moduleIdProvider.getStrModuleId(e),
                neededBy: (this._inverseDependencies2[e] || []).map((function (e) {
                    return r._moduleIdProvider.getStrModuleId(e)
                })),
                detail: t
            }
        }, s.prototype._onLoadError = function (e, t) {
            for (var r = this._createLoadError(e, t), o = [], n = 0, i = this._moduleIdProvider.getMaxModuleId(); n < i; n++) o[n] = !1;
            var s = !1,
                d = [];
            for (d.push(e), o[e] = !0; d.length > 0;) {
                var a = d.shift(),
                    l = this._modules2[a];
                l && (s = l.onDependencyError(r) || s);
                var u = this._inverseDependencies2[a];
                if (u)
                    for (n = 0, i = u.length; n < i; n++) {
                        var c = u[n];
                        o[c] || (d.push(c), o[c] = !0)
                    }
            }
            s || this._config.onError(r)
        }, s.prototype._hasDependencyPath = function (e, t) {
            var r = this._modules2[e];
            if (!r) return !1;
            for (var o = [], n = 0, i = this._moduleIdProvider.getMaxModuleId(); n < i; n++) o[n] = !1;
            var s = [];
            for (s.push(r), o[e] = !0; s.length > 0;) {
                var d = s.shift().dependencies;
                if (d)
                    for (n = 0, i = d.length; n < i; n++) {
                        var a = d[n];
                        if (a.id === t) return !0;
                        var l = this._modules2[a.id];
                        l && !o[a.id] && (o[a.id] = !0, s.push(l))
                    }
            }
            return !1
        }, s.prototype._findCyclePath = function (e, t, r) {
            if (e === t || 50 === r) return [e];
            var o = this._modules2[e];
            if (!o) return null;
            for (var n = o.dependencies, i = 0, s = n.length; i < s; i++) {
                var d = this._findCyclePath(n[i].id, t, r + 1);
                if (null !== d) return d.push(e), d
            }
            return null
        }, s.prototype._createRequire = function (t) {
            var r = this,
                o = function (e, o, n) {
                    return r._relativeRequire(t, e, o, n)
                };
            return o.toUrl = function (e) {
                return r._config.requireToUrl(t.resolveModule(e))
            }, o.getStats = function () {
                return r.getLoaderEvents()
            }, o.__$__nodeRequire = e.global.nodeRequire, o
        }, s.prototype._loadModule = function (t) {
            var r = this;
            if (!this._modules2[t] && !this._knownModules2[t]) {
                this._knownModules2[t] = !0;
                var o = this._moduleIdProvider.getStrModuleId(t),
                    n = this._config.moduleIdToPaths(o);
                e.isNode && -1 === o.indexOf("/") && n.push("node|" + o);
                var i = -1,
                    s = function (o) {
                        if (++i >= n.length) r._onLoadError(t, o);
                        else {
                            var d = n[i],
                                a = r.getRecorder();
                            if (r._config.isBuild() && "empty:" === d) return r._buildInfoPath[t] = d, r.defineModule(r._moduleIdProvider.getStrModuleId(t), [], null, null, null), void r._onLoad(t);
                            a.record(e.LoaderEventType.BeginLoadingScript, d), r._scriptLoader.load(r, d, (function () {
                                r._config.isBuild() && (r._buildInfoPath[t] = d), a.record(e.LoaderEventType.EndLoadingScriptOK, d), r._onLoad(t)
                            }), (function (t) {
                                a.record(e.LoaderEventType.EndLoadingScriptError, d), s(t)
                            }))
                        }
                    };
                s(null)
            }
        }, s.prototype._loadPluginDependency = function (e, r) {
            var o = this;
            if (!this._modules2[r.id] && !this._knownModules2[r.id]) {
                this._knownModules2[r.id] = !0;
                var n = function (e) {
                    o.defineModule(o._moduleIdProvider.getStrModuleId(r.id), [], e, null, null)
                };
                n.error = function (e) {
                    o._config.onError(o._createLoadError(r.id, e))
                }, e.load(r.pluginParam, this._createRequire(t.ROOT), n, this._config.getOptionsLiteral())
            }
        }, s.prototype._resolve = function (e) {
            for (var t = this, r = e.dependencies, o = 0, s = r.length; o < s; o++) {
                var d = r[o];
                if (d !== n.EXPORTS)
                    if (d !== n.MODULE)
                        if (d !== n.REQUIRE) {
                            var a = this._modules2[d.id];
                            if (a && a.isComplete()) e.unresolvedDependenciesCount--;
                            else if (this._hasDependencyPath(d.id, e.id)) {
                                console.warn("There is a dependency cycle between '" + this._moduleIdProvider.getStrModuleId(d.id) + "' and '" + this._moduleIdProvider.getStrModuleId(e.id) + "'. The cyclic path follows:");
                                var l = this._findCyclePath(d.id, e.id, 0);
                                l.reverse(), l.push(d.id), console.warn(l.map((function (e) {
                                    return t._moduleIdProvider.getStrModuleId(e)
                                })).join(" => \n")), e.unresolvedDependenciesCount--
                            } else if (this._inverseDependencies2[d.id] = this._inverseDependencies2[d.id] || [], this._inverseDependencies2[d.id].push(e.id), d instanceof i) {
                                var u = this._modules2[d.pluginId];
                                if (u && u.isComplete()) {
                                    this._loadPluginDependency(u.exports, d);
                                    continue
                                }
                                var c = this._inversePluginDependencies2.get(d.pluginId);
                                c || (c = [], this._inversePluginDependencies2.set(d.pluginId, c)), c.push(d), this._loadModule(d.pluginId)
                            } else this._loadModule(d.id)
                        } else e.unresolvedDependenciesCount--;
                else e.unresolvedDependenciesCount--;
                else e.exportsPassedIn = !0, e.unresolvedDependenciesCount--
            }
            0 === e.unresolvedDependenciesCount && this._onModuleComplete(e)
        }, s.prototype._onModuleComplete = function (e) {
            var t = this,
                r = this.getRecorder();
            if (!e.isComplete()) {
                for (var o = e.dependencies, i = [], s = 0, d = o.length; s < d; s++) {
                    var a = o[s];
                    if (a !== n.EXPORTS)
                        if (a !== n.MODULE)
                            if (a !== n.REQUIRE) {
                                var l = this._modules2[a.id];
                                i[s] = l ? l.exports : null
                            } else i[s] = this._createRequire(e.moduleIdResolver);
                    else i[s] = {
                        id: e.strId,
                        config: function () {
                            return t._config.getConfigForModule(e.strId)
                        }
                    };
                    else i[s] = e.exports
                }
                e.complete(r, this._config, i);
                var u = this._inverseDependencies2[e.id];
                if (this._inverseDependencies2[e.id] = null, u)
                    for (s = 0, d = u.length; s < d; s++) {
                        var c = u[s],
                            p = this._modules2[c];
                        p.unresolvedDependenciesCount--, 0 === p.unresolvedDependenciesCount && this._onModuleComplete(p)
                    }
                var f = this._inversePluginDependencies2.get(e.id);
                if (f) {
                    this._inversePluginDependencies2.delete(e.id);
                    for (s = 0, d = f.length; s < d; s++) this._loadPluginDependency(e.exports, f[s])
                }
            }
        }, s
    }();
    e.ModuleManager = s
}(AMDLoader || (AMDLoader = {})),
function (e) {
    var t, r, o = function (e, r, o) {
        "string" != typeof e && (o = r, r = e, e = null), "object" == typeof r && Array.isArray(r) || (o = r, r = null), r || (r = ["require", "exports", "module"]), e ? t.defineModule(e, r, o, null, null) : t.enqueueDefineAnonymousModule(r, o)
    };
    o.amd = {
        jQuery: !0
    }, e.DefineFunc = o;
    var n = function () {
        function o() {
            if (1 === arguments.length) {
                if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) return void o.config(arguments[0]);
                if ("string" == typeof arguments[0]) return t.synchronousRequire(arguments[0])
            }
            if (2 !== arguments.length && 3 !== arguments.length || !Array.isArray(arguments[0])) throw new Error("Unrecognized require call");
            t.defineModule(e.Utilities.generateAnonymousModule(), arguments[0], arguments[1], arguments[2], null)
        }
        return o.config = function (e, r) {
            void 0 === r && (r = !1), t.configure(e, r)
        }, o.getConfig = function () {
            return t.getConfig().getOptionsLiteral()
        }, o.reset = function () {
            t = new e.ModuleManager(e.scriptLoader, r)
        }, o.getBuildInfo = function () {
            return t.getBuildInfo()
        }, o.getStats = function () {
            return t.getLoaderEvents()
        }, o
    }();
    e.RequireFunc = n, "function" == typeof e.global.define && e.global.define.amd || (function () {
        if (t = new e.ModuleManager(e.scriptLoader, r), e.isNode) {
            var i = e.global.require || require,
                s = function (r) {
                    t.getRecorder().record(e.LoaderEventType.NodeBeginNativeRequire, r);
                    try {
                        return i(r)
                    } finally {
                        t.getRecorder().record(e.LoaderEventType.NodeEndNativeRequire, r)
                    }
                };
            e.global.nodeRequire = s, n.nodeRequire = s
        }
        e.isNode && !e.isElectronRenderer ? (module.exports = n, define = function () {
            o.apply(null, arguments)
        }, require = n) : (void 0 !== e.global.require && "function" != typeof e.global.require && n.config(e.global.require), e.isElectronRenderer ? define = function () {
            o.apply(null, arguments)
        } : e.global.define = define = o, e.global.require = n, e.global.require.__$__nodeRequire = s)
    }(), r = e.getHighPerformanceTimestamp())
}(AMDLoader || (AMDLoader = {}));