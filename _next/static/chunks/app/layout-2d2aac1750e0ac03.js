(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        89844: function(e) {
            function t(e) {
                return Promise.resolve().then(function() {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                })
            }
            t.keys = function() {
                return []
            }, t.resolve = t, t.id = 89844, e.exports = t
        },
        35883: function() {},
        46601: function() {},
        15010: function(e, t, n) {
            Promise.resolve().then(n.t.bind(n, 52445, 23)), Promise.resolve().then(n.bind(n, 88391)), Promise.resolve().then(n.bind(n, 13213))
        },
        88391: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(57437);
            n(2265);
            var o = n(24923),
                s = n(13213),
                a = n(24033);
            t.default = e => {
                let {
                    children: t
                } = e, n = (0, a.usePathname)();
                return (0, r.jsx)(o.wyl, {
                    activeChain: "ethereum",
                    clientId: "fa898cf29f185decdc7bf3ce2cecaa65",
                    locale: (0, o.en)(),
                    supportedWallets: [(0, o.k9e)()],
                    children: (0, r.jsxs)("div", {
                        className: "bg-gradient-to-br from-black to-neutral-900 text-white relative",
                        children: [(0, r.jsx)("div", {
                            className: "bg-234 md:bg-contain z-[0] pointer-events-none bg-repeat opacity-50 bg-[url('/clearbg.png')] absolute w-full h-full top-0 left-0"
                        }), (0, r.jsx)(s.default, {}), t, "/venture" !== n && "/locker" !== n && (0, r.jsx)("p", {
                            className: "pl-5 pb-5",
                            children: "v1.0.0"
                        })]
                    })
                })
            }
        },
        13213: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(57437),
                o = n(16691),
                s = n.n(o),
                a = n(61396),
                c = n.n(a),
                l = n(24033),
                i = n(2265),
                d = n(24923);
            t.default = () => {
                let [e, t] = (0, i.useState)(0), n = (0, l.usePathname)(), [o, a] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {}, []);
                let x = () => {
                    t(window.scrollY)
                };
                return (0, i.useEffect)(() => (window.addEventListener("scroll", x), () => {
                    window.removeEventListener("scroll", x)
                }), []), (0, r.jsxs)("div", {
                    className: "bg-[#1F2123] ".concat(e > 50 ? "bg-opacity-25" : "bg-opacity-100", " z-[100] backdrop-blur-xl transition-all ease-linear duration-100 fixed top-0 left-0 w-full px-5 py-3 flex items-center justify-between gap-5"),
                    children: [(0, r.jsx)("div", {
                        className: "flex gap-4 min-w-10 lg:min-w-[310px]",
                        children: (0, r.jsx)(c(), {
                            href: "/",
                            className: "flex items-center gap-4 ",
                            children: (0, r.jsx)(s(), {
                                src: "/logo.svg",
                                alt: "logo",
                                width: 30,
                                height: 30
                            })
                        })
                    }), (0, r.jsxs)("div", {
                        className: "hidden md:flex gap-5 items-center",
                        children: [(0, r.jsx)(c(), {
                            className: "".concat("/" === n ? "text-[#E3B76B]" : "text-[#a2a2a2] hover:text-white", " text-sm mt-[3px]"),
                            href: "/",
                            children: "\xd8xAuction"
                        }), (0, r.jsx)(c(), {
                            className: "".concat("/venture" === n ? "text-[#E3B76B]" : "text-[#a2a2a2] hover:text-white", " text-sm mt-[3px]"),
                            href: "/venture",
                            children: "\xd8xVenture"
                        }), (0, r.jsx)(c(), {
                            className: "".concat("/locker" === n ? "text-[#E3B76B]" : "text-[#a2a2a2] hover:text-white", " text-sm mt-[3px]"),
                            href: "/locker",
                            children: "\xd8xLocker"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex font-bold items-center gap-4 ",
                        children: [(0, r.jsx)("a", {
                            href: "https://docs.0xliquidityswap.io/",
                            target: "_blank",
                            className: "flex items-center",
                            rel: "noopener noreferrer",
                            children: (0, r.jsxs)("button", {
                                className: "rounded-xl  border border-[#E3B76B] flex gap-2 hover:gap-4 items-center font-semibold bg-[#1F2123] hover:bg-[#36393c] text-sm duration-150 ease-linear transition-all text-[#a2a2a2] hover:text-white py-2 sm:px-2 px-5 md:px-6 h-full",
                                children: [(0, r.jsx)("p", {
                                    className: "block sm:hidden",
                                    children: "Docs"
                                }), (0, r.jsx)("p", {
                                    className: "hidden sm:block",
                                    children: "Documentation"
                                }), " ", (0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "1.5",
                                    stroke: "currentColor",
                                    className: "w-[14px] h-[14px]",
                                    children: (0, r.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                                    })
                                })]
                            })
                        }), (0, r.jsx)(d.RZ8, {
                            theme: (0, d.$_G)({
                                colors: {
                                    primaryButtonText: "#E3B76B",
                                    primaryButtonBg: "#1F2123",
                                    secondaryButtonBg: "#1F2123",
                                    secondaryButtonHoverBg: "#36393c",
                                    modalBg: "#1F2123",
                                    dropdownBg: "#1F2123",
                                    borderColor: "#E3B76B",
                                    separatorLine: "#262830",
                                    accentText: "#E3B76B",
                                    accentButtonBg: "#E3B76B",
                                    connectedButtonBg: "#1F2123",
                                    connectedButtonBgHover: "#36393c",
                                    walletSelectorButtonHoverBg: "#36393c",
                                    secondaryButtonText: "#fdfcfd",
                                    secondaryText: "#706f78",
                                    selectedTextBg: "#fdfcfd",
                                    primaryText: "#fdfcfd"
                                }
                            }),
                            btnTitle: "Connect",
                            modalSize: "compact"
                        })]
                    })]
                })
            }
        },
        52445: function() {}
    },
    function(e) {
        e.O(0, [5275, 2739, 9345, 1798, 1669, 8310, 4569, 6691, 3453, 2971, 4938, 1744], function() {
            return e(e.s = 15010)
        }), _N_E = e.O()
    }
]);