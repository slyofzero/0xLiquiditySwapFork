"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1798], {
        86886: function(e, t, n) {
            let r;
            n.d(t, {
                a: function() {
                    return ec
                },
                b: function() {
                    return $
                },
                bC: function() {
                    return eu
                },
                bG: function() {
                    return em
                },
                bI: function() {
                    return et
                },
                bN: function() {
                    return ey
                },
                bP: function() {
                    return eC
                },
                bh: function() {
                    return ew
                },
                bi: function() {
                    return Y
                },
                bj: function() {
                    return eg
                },
                bx: function() {
                    return ev
                },
                bz: function() {
                    return ep
                },
                c: function() {
                    return N
                },
                d: function() {
                    return F
                },
                e: function() {
                    return U
                },
                f: function() {
                    return R
                },
                g: function() {
                    return O
                },
                h: function() {
                    return M
                },
                i: function() {
                    return _
                },
                j: function() {
                    return q
                },
                l: function() {
                    return x
                },
                o: function() {
                    return el
                },
                q: function() {
                    return ed
                },
                s: function() {
                    return eh
                },
                u: function() {
                    return A
                },
                v: function() {
                    return ef
                },
                y: function() {
                    return b
                }
            }), n(58499);
            var i = n(2265),
                a = n(70165),
                o = n(55764),
                c = n(35171),
                s = n(64874),
                u = n(22130),
                l = n(57437),
                d = n(16211),
                h = n(63112),
                f = n(38231),
                w = n(80580),
                g = n(58747),
                v = n(26477),
                p = (n(5572), n(46795)),
                m = n(18994),
                C = n(2752);
            n(9581);
            let y = (0, i.createContext)(void 0),
                I = (0, i.createContext)(void 0);

            function b() {
                return (0, i.useContext)(I)
            }
            let P = e => {
                    let t = e ? .getOptions();
                    return t && "walletConnectReceiver" in t && t.walletConnectReceiver
                },
                S = "lastConnectedWallet",
                T = new Map,
                W = (0, i.createContext)(void 0);

            function k(e) {
                let [t, n] = (0, i.useState)(void 0), [a, o] = (0, i.useState)("unknown"), c = e.autoConnectTimeout || 15e3, [s, u] = (0, i.useState)(), [d, h] = (0, i.useState)(), [f, v] = (0, i.useState)(), [p, m] = (0, i.useState)();
                r || (r = e.createWalletStorage("coordinatorStorage"));
                let C = e.autoSwitch ? e.activeChain : void 0,
                    y = (0, i.useMemo)(() => ({
                        chains: e.chains,
                        dappMetadata: e.dAppMeta,
                        chain: e.activeChain || e.chains[0],
                        clientId: e.clientId
                    }), [e.chains, e.dAppMeta, e.activeChain, e.clientId]),
                    I = (0, i.useCallback)(e => {
                        let t = e.create(y);
                        return t.walletId === w.w.magicLink && h(t), T.set(t, e), t
                    }, [y]);
                (0, i.useEffect)(() => {
                    s && s.updateChains(e.chains)
                }, [s, e.chains]), (0, i.useEffect)(() => {
                    if (!s) return;
                    let e = async () => {
                        let e = s ? .getOptions(),
                            t = new g.Wj({
                                walletConnectReceiver: { ...e ? .walletConnectReceiver === !0 ? {} : e ? .walletConnectReceiver
                                }
                            }, s);
                        await t.init(), m(t)
                    };
                    P(s) && e()
                }, [s]);
                let b = (0, i.useCallback)(async function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        u(e);
                        let i = T.get(e);
                        if (!i) throw Error("Wallet config not found for given wallet instance. Do not create a wallet instance manually - use the useCreateWalletInstance() hook instead");
                        if (v(i), o("connected"), n(await e.getSigner()), r) return;
                        let a = {
                                walletId: i.id,
                                connectParams: t || e.getConnectParams()
                            },
                            c = e.getPersonalWallet(),
                            s = T.get(c);
                        c && s && (a.connectParams = { ...a.connectParams,
                            personalWallet: {
                                walletId: s.id,
                                connectParams: c.getConnectParams()
                            }
                        }), E(a)
                    }, []),
                    k = (0, i.useCallback)(async e => {
                        let t = await r.getItem(S);
                        if (t) try {
                            let n = JSON.parse(t);
                            n.connectParams ? n.connectParams.chainId = e : n.connectParams = {
                                chainId: e
                            }, await r.setItem(S, JSON.stringify(n))
                        } catch (e) {
                            console.error(`Error saving the last active chain: ${e}`)
                        }
                    }, []),
                    x = (0, i.useCallback)(async e => {
                        if (!s) throw Error("No active wallet");
                        await s.switchChain(e);
                        let t = await s.getSigner();
                        await k(e), n(t)
                    }, [s, k]),
                    A = (0, i.useRef)(!1);
                (0, i.useEffect)(() => {
                    if (!A.current && (A.current = !0, !e.signerWallet && !s && "unknown" === a)) {
                        if (!1 === e.shouldAutoConnect) {
                            o("disconnected");
                            return
                        }!async function() {
                            let t = await j();
                            if (!t) {
                                o("disconnected");
                                return
                            }
                            let n = e.supportedWallets.find(e => e.id === t.walletId);
                            if (!n) {
                                o("disconnected");
                                return
                            }
                            let i = t.connectParams ? .personalWallet;
                            n.personalWallets && !i && (i = {
                                walletId: t.walletId,
                                connectParams: t.connectParams
                            });
                            let a = i;
                            if (a) {
                                let e = (n.personalWallets || []).find(e => e.id === a.walletId);
                                if (e) {
                                    let n = I(e);
                                    try {
                                        await L(n.autoConnect(a.connectParams), {
                                            ms: c,
                                            message: Z
                                        })
                                    } catch (e) {
                                        console.error("Failed to auto connect personal wallet"), console.error(e), o("disconnected");
                                        return
                                    }
                                    t.connectParams = { ...t.connectParams,
                                        personalWallet: n
                                    }
                                } else {
                                    o("disconnected");
                                    return
                                }
                            }
                            let s = I(n);
                            try {
                                o("connecting"), await L(s.autoConnect(t.connectParams), {
                                    ms: c,
                                    message: Z
                                }), b(s, t.connectParams, !0)
                            } catch (e) {
                                console.error("Failed to auto connect wallet"), console.error(e), e instanceof Error && e.message === Z && r.removeItem(S), o("disconnected")
                            }
                        }()
                    }
                }, [I, e.supportedWallets, b, e.shouldAutoConnect, s, a, c, e.signerWallet]);
                let M = (0, i.useCallback)(async function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        let [r, i] = t, a = {
                            chainId: C ? .chainId,
                            ...i || {}
                        }, c = I(r);
                        o("connecting");
                        try {
                            r.id === w.w.magicLink && E({
                                walletId: r.id,
                                connectParams: a
                            }), await c.connect(a), b(c, a)
                        } catch (e) {
                            throw console.error(`Error connecting to wallet: ${e}`), o("disconnected"), e
                        }
                        return c
                    }, [I, b, C]),
                    O = (0, i.useCallback)(async () => {
                        await r.removeItem(S), o("disconnected"), n(void 0), u(void 0), v(void 0)
                    }, []),
                    $ = (0, i.useCallback)(async () => {
                        if (!s) {
                            O();
                            return
                        }
                        let e = s.getPersonalWallet();
                        await s.disconnect(), e && await e ? .disconnect(), O()
                    }, [s, O]);
                (0, i.useEffect)(() => {
                    if (!s) return;
                    let e = async () => {
                        n(await s.getSigner())
                    };
                    return s.addListener("change", () => {
                        e()
                    }), s.addListener("disconnect", () => {
                        O()
                    }), () => {
                        s.removeListener("change"), s.removeListener("disconnect")
                    }
                }, [s, O]);
                let U = (0, i.useRef)();
                return (0, i.useEffect)(() => {
                    if (!e.signerWallet) {
                        U.current && ($(), U.current = void 0);
                        return
                    }
                    U.current !== e.signerWallet && (b(I(e.signerWallet)), U.current = e.signerWallet)
                }, [I, e.supportedWallets, b, e.signerWallet, $]), (0, l.jsx)(W.Provider, {
                    value: {
                        disconnect: $,
                        wallets: e.supportedWallets,
                        connect: M,
                        signer: t,
                        activeWallet: s,
                        activeWalletConfig: f,
                        connectionStatus: a,
                        setConnectionStatus: o,
                        createWalletInstance: I,
                        createdWalletInstance: d,
                        createWalletStorage: e.createWalletStorage,
                        switchChain: x,
                        setConnectedWallet: b,
                        activeChain: e.activeChain,
                        chainToConnect: C,
                        getWalletConfig: e => T.get(e),
                        activeChainSetExplicitly: e.activeChainSetExplicitly,
                        clientId: e.clientId,
                        walletConnectHandler: p
                    },
                    children: e.children
                })
            }

            function x() {
                let e = (0, i.useContext)(W);
                if (!e) throw Error("useWalletContext() can only be used inside <ThirdwebProvider />");
                return e
            }
            async function j() {
                let e = await r.getItem(S);
                if (!e) return null;
                try {
                    return JSON.parse(e)
                } catch {
                    return await r.removeItem(S), null
                }
            }
            async function E(e) {
                try {
                    await r.setItem(S, JSON.stringify(e))
                } catch (e) {
                    console.error("Error saving the last connected wallet info", e)
                }
            }

            function L(e, t) {
                return new Promise((n, r) => {
                    let i = setTimeout(() => {
                        r(Error(t.message))
                    }, t.ms);
                    e.then(e => {
                        clearTimeout(i), n(e)
                    }, e => {
                        clearTimeout(i), r(e)
                    })
                })
            }
            let Z = "Failed to Auto connect. Auto connect timed out. You can increase the timeout duration using the autoConnectTimeout prop on <ThirdwebProvider />";

            function A(e) {
                let t = x();
                (0, u.Z)(t, "useWallet() hook must be used within a <ThirdwebProvider/>");
                let n = t.activeWallet;
                if (n && (!e || n.walletId === e)) return n
            }

            function M() {
                let e = x();
                return (0, u.Z)(e, "useWallet() hook must be used within a <ThirdwebProvider/>"), e.activeWalletConfig
            }

            function O() {
                let e = x();
                return (0, u.Z)(e, "useWallets() hook must be used within a <ThirdwebProvider/>"), e.wallets
            }

            function $() {
                let e = x();
                return (0, u.Z)(e, "useConnect() hook must be used within a <ThirdwebProvider/>"), e.connect
            }

            function U() {
                let e = x();
                return (0, u.Z)(e, "useDisconnect() hook must be used within a <ThirdwebProvider/>"), e.disconnect
            }

            function N() {
                let e = x();
                return (0, u.Z)(e, "useConnectionStatus() must be used within a <ThirdwebProvider/>"), e.connectionStatus
            }

            function _() {
                let e = x();
                return (0, u.Z)(e, "useSetConnectionStatus() must be used within a <ThirdwebProvider/>"), e.setConnectionStatus
            }

            function F() {
                let e = x();
                return (0, u.Z)(e, "useCreateWalletInstance() must be used within a <ThirdwebProvider/>"), e.createWalletInstance
            }

            function R() {
                let e = x();
                return (0, u.Z)(e, "useSwitchChain() must be used within a <ThirdwebProvider/>"), e.switchChain
            }

            function q() {
                let e = x();
                return (0, u.Z)(e, "useSwitchChain() must be used within a <ThirdwebProvider/>"), e.setConnectedWallet
            }
            let D = "auth_token_storage_key",
                J = "tw-cache";

            function K(e) {
                return [J, ...e.filter(e => "string" != typeof e || e !== J)]
            }
            let Q = {
                auth: {
                    user: () => K(["user"])
                },
                network: {
                    active: e => K(["chainId", e])
                },
                wallet: {
                    balance: (e, t, n) => {
                        var r;
                        return K((r = K(["balance", {
                            walletAddress: t,
                            tokenAddress: n
                        }]), K(Q.network.active(e).concat(r))))
                    }
                }
            };

            function Y() {
                let e = (0, a.NL)(),
                    t = b(),
                    n = (0, o.D)({
                        mutationFn: async () => {
                            (0, u.Z)(t, "Please specify an authConfig in the ThirdwebProvider"), (0, u.Z)(t.authUrl, "Please specify an authUrl in the authConfig."), await fetch(`${t.authUrl}/logout`, {
                                method: "POST",
                                credentials: "include"
                            }), t.secureStorage ? .removeItem(D), e.invalidateQueries(Q.auth.user())
                        }
                    });
                return {
                    logout: n.mutateAsync,
                    isLoading: n.isLoading
                }
            }
            let z = e => {
                let {
                    value: t,
                    children: n
                } = e, r = (0, i.useMemo)(() => {
                    if (t) return { ...t,
                        authUrl: t.authUrl ? .replace(/\/$/, "")
                    }
                }, [t]);
                return (0, l.jsxs)(I.Provider, {
                    value: r,
                    children: [n, (0, l.jsx)(H, {})]
                })
            };

            function H() {
                let e = A(),
                    {
                        logout: t
                    } = Y(),
                    {
                        switchAccount: n
                    } = function() {
                        let e = (0, a.NL)(),
                            t = b(),
                            n = (0, o.D)({
                                mutationFn: async n => {
                                    (0, u.Z)(t, "Please specify an authConfig in the ThirdwebProvider"), (0, u.Z)(t.authUrl, "Please specify an authUrl in the authConfig."), await fetch(`${t.authUrl}/switch-account`, {
                                        method: "POST",
                                        credentials: "include",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            address: n
                                        })
                                    }), e.invalidateQueries(Q.auth.user())
                                }
                            });
                        return {
                            switchAccount: n.mutateAsync,
                            isLoading: n.isLoading
                        }
                    }(),
                    r = b(),
                    c = (0, a.NL)();
                return (0, i.useEffect)(() => {
                    let i = async e => {
                            if (e.address) try {
                                await n(e.address)
                            } catch (t) {
                                console.debug(`[Auth] Failed to switch account to ${e.address} with error:
`, t)
                            }
                        },
                        a = async () => {
                            try {
                                await t()
                            } catch (e) {
                                console.debug(`[Auth] Failed to logout with error:
`, e)
                            }
                        },
                        o = !!e && r && r.authUrl;
                    return o && (e.addListener("connect", i), e.addListener("change", i), e.addListener("disconnect", a)), () => {
                        o && (e.removeListener("connect", i), e.removeListener("change", i), e.removeListener("disconnect", a))
                    }
                }, [e, c, r, t, n]), null
            }

            function B(e, t, n) {
                return [(0, i.useMemo)(() => e.map(e => (0, d.nRj)(e, n)), [e, n]), (0, i.useMemo)(() => t && "string" != typeof t && "number" != typeof t ? (0, d.nRj)(t, n) : t, [t, n])]
            }
            let G = e => {
                    let {
                        queryClient: t,
                        children: n
                    } = e, r = (0, i.useMemo)(() => t || new c.S, [t]);
                    return (0, l.jsx)(a.aH, {
                        client: r,
                        children: n
                    })
                },
                V = (0, i.createContext)(void 0),
                X = e => {
                    let {
                        value: t,
                        children: n
                    } = e;
                    return (0, l.jsx)(V.Provider, {
                        value: t,
                        children: n
                    })
                },
                ee = (0, i.createContext)({});

            function et() {
                let {
                    sdk: e
                } = function() {
                    let e = (0, i.useContext)(ee);
                    return (0, u.Z)(e._inProvider, "useSDK must be called from within a ThirdwebProvider, did you forget to wrap your app in a <ThirdwebProvider />?"), e
                }();
                return e
            }
            let en = {
                    wallet: void 0,
                    address: void 0,
                    chainId: void 0,
                    signer: void 0
                },
                er = (0, i.createContext)(void 0),
                ei = e => {
                    let {
                        signer: t,
                        children: n
                    } = e, {
                        chains: r,
                        clientId: a
                    } = function() {
                        let e = (0, i.useContext)(V);
                        return (0, u.Z)(e, "useThirdwebConfigContext() hook must be used within a <ThirdwebProvider/>"), e
                    }(), o = et() ? .storage, [c, s] = (0, i.useState)({ ...en,
                        signer: t || void 0
                    });
                    return (0, i.useEffect)(() => {
                        s(e => ({ ...e,
                            signer: t || void 0
                        }))
                    }, [t]), (0, i.useEffect)(() => {
                        if (!o) return;
                        let e = t;
                        return t ? Promise.all([t.getAddress(), t.getChainId()]).then(n => {
                            let i, [c, u] = n,
                                l = r.find(e => e.chainId === u);
                            if (l) try {
                                i = (0, d.OZ$)(l, a)[0]
                            } catch (e) {
                                console.error(e)
                            }
                            t === e && s({
                                wallet: new f.U(t, {
                                    readonlySettings: i ? {
                                        rpcUrl: i,
                                        chainId: u
                                    } : void 0
                                }, o),
                                address: c,
                                chainId: u,
                                signer: t
                            })
                        }).catch(e => {}) : s(en), () => {
                            e = void 0
                        }
                    }, [t, a]), (0, l.jsx)(er.Provider, {
                        value: c,
                        children: n
                    })
                },
                ea = e => {
                    let {
                        sdkOptions: t = {},
                        storageInterface: n,
                        supportedChains: r,
                        activeChain: a,
                        signer: o,
                        children: c,
                        clientId: s,
                        secretKey: u
                    } = e, f = (0, i.useMemo)(() => a ? "number" == typeof a ? a : "string" == typeof a ? r.find(e => e.slug === a) ? .chainId : a.chainId : r[0] ? .chainId, [a, r]), w = (0, i.useMemo)(() => {
                        let e, i, a = f,
                            o = r.find(e => e.chainId === a);
                        if (o || void 0 === a || (console.warn(`The chainId ${a} is not in the configured chains, please add it to the ThirdwebProvider`), a = void 0), o && o.rpc.length > 0) try {
                            let t = (0, d.OZ$)(o, s)[0];
                            e = {
                                chainId: o.chainId,
                                rpcUrl: t
                            }
                        } catch (e) {}
                        let c = {
                            readonlySettings: e,
                            ...t,
                            supportedChains: r
                        };
                        if (a && (i = new h.x9T(a, { ...c,
                                clientId: s,
                                secretKey: u
                            }, n)), !i) {
                            if (r.length > 0) a = r[0].chainId, i = new h.x9T(a, c, n);
                            else {
                                console.error("No chains configured, please pass a chain or chains to the ThirdwebProvider");
                                return
                            }
                        }
                        return i._chainId = a, i
                    }, [f, r, t, n, s, u]);
                    (0, i.useEffect)(() => {
                        w && w._chainId === f && (o ? w.updateSignerOrProvider(o) : f && w.updateSignerOrProvider(f))
                    }, [w, w ? ._chainId, o, f]);
                    let g = (0, i.useMemo)(() => ({
                        sdk: w && w._chainId === f ? w : void 0,
                        _inProvider: !0
                    }), [f, w]);
                    return (0, l.jsx)(ee.Provider, {
                        value: g,
                        children: c
                    })
                },
                eo = e => {
                    let {
                        signer: t,
                        children: n,
                        queryClient: r,
                        supportedChains: a,
                        activeChain: o,
                        clientId: c,
                        ...s
                    } = e;
                    c || (0, f.c)("No API key. Please provide a clientId. It is required to access thirdweb's services. You can create a key at https://thirdweb.com/create-api-key", c, void 0);
                    let u = a || d.gL9,
                        h = (0, i.useMemo)(() => "object" == typeof o && null !== o ? u.find(e => e.chainId === o.chainId) ? u.map(e => e.chainId === o.chainId ? o : e) : [...u, o] : u, [u, o]),
                        [w, g] = B(h, o || h[0], c),
                        v = (0, i.useMemo)(() => g && "string" != typeof g && "number" != typeof g ? [...w.filter(e => e.chainId !== g.chainId), g].filter((e, t, n) => t === n.findIndex(t => t.chainId === e.chainId)) : w, [w, g]);
                    return (0, l.jsx)(X, {
                        value: {
                            chains: v,
                            clientId: c
                        },
                        children: (0, l.jsx)(G, {
                            queryClient: r,
                            children: (0, l.jsx)(ea, {
                                signer: t,
                                supportedChains: v,
                                clientId: c,
                                activeChain: g,
                                ...s,
                                children: (0, l.jsx)(ei, {
                                    signer: t,
                                    children: n
                                })
                            })
                        })
                    })
                },
                ec = e => {
                    let {
                        activeChain: t,
                        createWalletStorage: n = v.c
                    } = e, r = e.supportedChains || d.gL9, a = (0, i.useMemo)(() => "object" == typeof t && null !== t ? r.find(e => e.chainId === t.chainId) ? r.map(e => e.chainId === t.chainId ? t : e) : [...r, t] : r, [r, t]), [o, c] = B(a, e.activeChain || a[0], e.clientId), s = (0, i.useMemo)(() => {
                        if ("number" == typeof c) {
                            let e = o.find(e => e.chainId === c);
                            if (!e) throw Error(`Invalid chainId: ${c}. It is not one of supportedChains`);
                            return e
                        }
                        if ("string" == typeof c) {
                            let e = o.find(e => e.slug === c);
                            if (!e) throw Error(`Invalid chain: "${c}". It is not one of supportedChains`);
                            return e
                        }
                        return c
                    }, [c, o]), u = e.dAppMeta;
                    return (0, l.jsx)(y.Provider, {
                        value: e.theme,
                        children: (0, l.jsx)(k, {
                            chains: o,
                            supportedWallets: e.supportedWallets,
                            shouldAutoConnect: e.autoConnect,
                            createWalletStorage: n,
                            dAppMeta: u,
                            activeChain: s,
                            autoSwitch: e.autoSwitch,
                            autoConnectTimeout: e.autoConnectTimeout,
                            clientId: e.clientId,
                            activeChainSetExplicitly: !!e.activeChain,
                            signerWallet: e.signerWallet,
                            children: (0, l.jsx)(es, {
                                queryClient: e.queryClient,
                                sdkOptions: e.sdkOptions,
                                supportedChains: o,
                                activeChain: s,
                                storageInterface: e.storageInterface,
                                authConfig: e.authConfig,
                                clientId: e.clientId,
                                secretKey: e.secretKey,
                                children: (0, l.jsx)(z, {
                                    value: e.authConfig,
                                    children: e.children
                                })
                            })
                        })
                    })
                },
                es = e => {
                    let {
                        children: t,
                        ...n
                    } = e, r = x() ? .signer;
                    return (0, l.jsx)(eo, {
                        signer: r,
                        ...n,
                        children: t
                    })
                };

            function eu() {
                let e = (0, i.useContext)(V);
                return (0, u.Z)(e, "useSupportedChains() hook must be used within a <ThirdwebProvider/>"), e.chains
            }

            function el(e) {
                let t = ed(),
                    {
                        wallet: n,
                        address: r,
                        chainId: a
                    } = function() {
                        let e = (0, i.useContext)(er);
                        return (0, u.Z)(e, "useThirdwebConnectedWalletContext() hook must be used within a <ThirdwebProvider/>"), e
                    }(),
                    o = (0, i.useMemo)(() => Q.wallet.balance(a || -1, r, e), [a, e, r]);
                return (0, s.a)(o, () => n ? .balance(e), {
                    enabled: !!n && !!t && !!a,
                    retry: !0,
                    keepPreviousData: !1
                })
            }

            function ed() {
                let e = (0, i.useContext)(er);
                return (0, u.Z)(e, "useAddress() hook must be used within a <ThirdwebProvider/>"), e.address
            }

            function eh() {
                let e = (0, i.useContext)(er);
                return (0, u.Z)(e, "useChainId() hook must be used within a <ThirdwebProvider/>"), e.chainId
            }

            function ef() {
                let e = eh(),
                    t = eu(),
                    n = (0, i.useMemo)(() => t.find(t => t.chainId === e), [e, t]),
                    r = (0, i.useMemo)(() => {
                        if (!n) return d.gL9.find(t => t.chainId === e)
                    }, [e, n]);
                return n || r
            }

            function ew() {
                let e = (0, a.NL)(),
                    t = b(),
                    n = A(),
                    r = (0, o.D)({
                        mutationFn: async () => {
                            let r;
                            (0, u.Z)(t, "Please specify an authConfig in the ThirdwebProvider"), (0, u.Z)(n, "You need a connected wallet to login."), (0, u.Z)(t.authUrl, "Please specify an authUrl in the authConfig.");
                            let i = await n.getAddress(),
                                a = await n.getChainId(),
                                o = await fetch(`${t.authUrl}/payload`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        address: i,
                                        chainId: a.toString()
                                    })
                                });
                            if (!o.ok) throw Error(`Failed to get payload with status code ${o.status}`);
                            try {
                                ({
                                    payload: r
                                } = await o.json())
                            } catch {
                                throw Error("Failed to get payload")
                            }
                            let c = await (0, C.s)({
                                wallet: n,
                                payload: r
                            });
                            if (!(o = await fetch(`${t.authUrl}/login`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        payload: c
                                    }),
                                    credentials: "include"
                                })).ok) {
                                let e = await o.json();
                                if (e.error) throw Error(e.error);
                                throw Error(`Login request failed with status code ${o.status}`)
                            }
                            let {
                                token: s
                            } = await o.json();
                            return await t.secureStorage ? .setItem(D, s), e.invalidateQueries(Q.auth.user()), s
                        }
                    });
                return {
                    login: () => r.mutateAsync(),
                    isLoading: r.isLoading
                }
            }

            function eg() {
                let e = b(),
                    {
                        data: t,
                        isLoading: n
                    } = (0, s.a)(Q.auth.user(), async () => {
                        (0, u.Z)(e, "Please specify an authConfig in the ThirdwebProvider"), (0, u.Z)(e.authUrl, "Please specify an authUrl in the authConfig.");
                        let t = await e.secureStorage ? .getItem(D),
                            n = {
                                credentials: "include",
                                ...t ? {
                                    headers: {
                                        Authorization: `Bearer ${t}`
                                    }
                                } : {}
                            },
                            r = await fetch(`${e.authUrl}/user`, n);
                        return await r.json()
                    }, {
                        enabled: !!e
                    });
                return {
                    user: t,
                    isLoggedIn: !!t,
                    isLoading: n
                }
            }

            function ev() {
                let e = et();
                return e ? .storage
            }

            function ep() {
                let e = eh(),
                    t = function() {
                        let e = et();
                        return e ? ._chainId
                    }();
                return !!t && -1 !== t && !!e && t !== e
            }

            function em() {
                let e = ed(),
                    t = eu(),
                    {
                        clientId: n
                    } = x(),
                    r = t.find(e => 1 === e.chainId);
                return (0, s.a)({
                    queryKey: ["ens", e, r ? .rpc],
                    cacheTime: 864e5,
                    staleTime: 36e5,
                    retry: !1,
                    enabled: !!e,
                    queryFn: async () => {
                        if (!e) return null;
                        let t = (0, h.rV4)(1, {
                            clientId: n,
                            supportedChains: r ? [{
                                chainId: 1,
                                rpc: [...r.rpc],
                                nativeCurrency: r.nativeCurrency,
                                slug: r.slug
                            }] : void 0
                        });
                        if (t instanceof p.r) {
                            let [n, r] = await Promise.all([t.lookupAddress(e), t.getAvatar(e)]);
                            return {
                                ens: n,
                                avatarUrl: r
                            }
                        }
                        return {
                            ens: await t.lookupAddress(e),
                            avatarUrl: null
                        }
                    }
                })
            }

            function eC(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return `${e.substring(0,t?4:6)}...${e.substring(e.length-(t?3:4))}`
            }

            function ey(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (!e) return "";
                try {
                    let n = m.getAddress(e);
                    return eC(n, t)
                } catch {
                    return e
                }
            }
        }
    }
]);