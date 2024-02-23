"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1669], {
        16211: function(t, e, a) {
            a.d(e, {
                Lll: function() {
                    return o
                },
                M8s: function() {
                    return i
                },
                Nj4: function() {
                    return p
                },
                OZ$: function() {
                    return h
                },
                YY$: function() {
                    return n
                },
                gL9: function() {
                    return l
                },
                kJW: function() {
                    return r
                },
                m3x: function() {
                    return c
                },
                mgq: function() {
                    return s
                },
                nRj: function() {
                    return m
                }
            });
            var r = {
                    chain: "ETH",
                    chainId: 1,
                    ens: {
                        registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    explorers: [{
                        name: "etherscan",
                        url: "https://etherscan.io",
                        standard: "EIP3091"
                    }, {
                        name: "blockscout",
                        url: "https://eth.blockscout.com",
                        standard: "EIP3091",
                        icon: {
                            url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                            width: 551,
                            height: 540,
                            format: "png"
                        }
                    }, {
                        name: "dexguru",
                        url: "https://ethereum.dex.guru",
                        standard: "EIP3091",
                        icon: {
                            url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                            width: 83,
                            height: 82,
                            format: "svg"
                        }
                    }],
                    faucets: [],
                    features: [{
                        name: "EIP155"
                    }, {
                        name: "EIP1559"
                    }],
                    icon: {
                        url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
                        width: 512,
                        height: 512,
                        format: "png"
                    },
                    infoURL: "https://ethereum.org",
                    name: "Ethereum Mainnet",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    networkId: 1,
                    redFlags: [],
                    rpc: ["https://ethereum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com", "https://ethereum.publicnode.com", "wss://ethereum.publicnode.com", "https://mainnet.gateway.tenderly.co", "wss://mainnet.gateway.tenderly.co", "https://rpc.blocknative.com/boost", "https://rpc.flashbots.net/fast", "https://rpc.mevblocker.io/fullprivacy"],
                    shortName: "eth",
                    slip44: 60,
                    slug: "ethereum",
                    testnet: !1
                },
                s = {
                    chain: "Polygon",
                    chainId: 137,
                    explorers: [{
                        name: "polygonscan",
                        url: "https://polygonscan.com",
                        standard: "EIP3091"
                    }, {
                        name: "dexguru",
                        url: "https://polygon.dex.guru",
                        standard: "EIP3091",
                        icon: {
                            url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                            width: 83,
                            height: 82,
                            format: "svg"
                        }
                    }],
                    faucets: [],
                    features: [],
                    icon: {
                        url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png",
                        width: 512,
                        height: 512,
                        format: "png"
                    },
                    infoURL: "https://polygon.technology/",
                    name: "Polygon Mainnet",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    networkId: 137,
                    redFlags: [],
                    rpc: ["https://polygon.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://137.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://polygon-rpc.com/", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com", "https://polygon-bor.publicnode.com", "wss://polygon-bor.publicnode.com", "https://polygon.gateway.tenderly.co", "wss://polygon.gateway.tenderly.co"],
                    shortName: "matic",
                    slip44: 966,
                    slug: "polygon",
                    testnet: !1
                },
                n = {
                    chain: "ETH",
                    chainId: 1337,
                    explorers: [],
                    faucets: [],
                    features: [],
                    icon: {
                        url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
                        width: 512,
                        height: 512,
                        format: "png"
                    },
                    name: "Localhost",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    networkId: 1337,
                    redFlags: [],
                    rpc: ["http://localhost:8545"],
                    shortName: "local",
                    slug: "localhost",
                    testnet: !0
                },
                o = {
                    chain: "CELO",
                    chainId: 42220,
                    explorers: [{
                        name: "blockscout",
                        url: "https://explorer.celo.org",
                        standard: "none"
                    }, {
                        name: "Celoscan",
                        url: "https://celoscan.io",
                        standard: "EIP3091"
                    }],
                    faucets: [],
                    infoURL: "https://docs.celo.org/",
                    name: "Celo Mainnet",
                    nativeCurrency: {
                        name: "CELO",
                        symbol: "CELO",
                        decimals: 18
                    },
                    networkId: 42220,
                    rpc: ["https://celo.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://42220.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://forno.celo.org", "wss://forno.celo.org/ws"],
                    shortName: "celo",
                    slug: "celo",
                    testnet: !1
                },
                i = {
                    chain: "CELO",
                    chainId: 44787,
                    explorers: [{
                        name: "Alfajoresscan",
                        url: "https://alfajores.celoscan.io",
                        standard: "EIP3091"
                    }],
                    faucets: ["https://celo.org/developers/faucet", "https://cauldron.pretoriaresearchlab.io/alfajores-faucet"],
                    features: [],
                    infoURL: "https://docs.celo.org/",
                    name: "Celo Alfajores Testnet",
                    nativeCurrency: {
                        name: "CELO",
                        symbol: "CELO",
                        decimals: 18
                    },
                    networkId: 44787,
                    redFlags: [],
                    rpc: ["https://celo-alfajores-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://44787.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://alfajores-forno.celo-testnet.org", "wss://alfajores-forno.celo-testnet.org/ws"],
                    shortName: "ALFA",
                    slug: "celo-alfajores-testnet",
                    testnet: !0
                },
                c = {
                    chain: "CELO",
                    chainId: 62320,
                    explorers: [],
                    faucets: ["https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform", "https://cauldron.pretoriaresearchlab.io/baklava-faucet"],
                    infoURL: "https://docs.celo.org/",
                    name: "Celo Baklava Testnet",
                    nativeCurrency: {
                        name: "CELO",
                        symbol: "CELO",
                        decimals: 18
                    },
                    networkId: 62320,
                    rpc: ["https://celo-baklava-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://62320.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://baklava-forno.celo-testnet.org"],
                    shortName: "BKLV",
                    slug: "celo-baklava-testnet",
                    testnet: !0
                },
                p = {
                    chain: "Polygon",
                    chainId: 80001,
                    explorers: [{
                        name: "polygonscan",
                        url: "https://mumbai.polygonscan.com",
                        standard: "EIP3091"
                    }],
                    faucets: ["https://faucet.polygon.technology/"],
                    features: [],
                    icon: {
                        url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png",
                        width: 512,
                        height: 512,
                        format: "png"
                    },
                    infoURL: "https://polygon.technology/",
                    name: "Mumbai",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    networkId: 80001,
                    redFlags: [],
                    rpc: ["https://mumbai.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://80001.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mumbai.maticvigil.com", "https://polygon-mumbai-bor.publicnode.com", "wss://polygon-mumbai-bor.publicnode.com", "https://polygon-mumbai.gateway.tenderly.co", "wss://polygon-mumbai.gateway.tenderly.co"],
                    shortName: "maticmum",
                    slug: "mumbai",
                    testnet: !0,
                    title: "Polygon Testnet Mumbai"
                };

            function h(t, e) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "http",
                    r = [];
                if (t.rpc.forEach(t => {
                        if (("http" !== a || t.startsWith("http")) && ("ws" !== a || t.startsWith("ws"))) {
                            if (t.includes("${THIRDWEB_API_KEY}")) e ? r.push(t.replace("${THIRDWEB_API_KEY}", e) + ("undefined" != typeof globalThis && "APP_BUNDLE_ID" in globalThis ? `/?bundleId=${globalThis.APP_BUNDLE_ID}` : "")) : r.push(t.replace("${THIRDWEB_API_KEY}", ""));
                            else {
                                if (t.includes("${")) return;
                                r.push(t)
                            }
                        }
                    }), 0 === r.length) throw Error(`No RPC available for chainId "${t.chainId}" with mode ${a}`);
                return r
            }

            function m(t, e) {
                try {
                    return { ...t,
                        rpc: h(t, e)
                    }
                } catch (e) {
                    return t
                }
            }
            let l = [r, {
                chain: "ETH",
                chainId: 5,
                ens: {
                    registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010"
                },
                explorers: [{
                    name: "etherscan-goerli",
                    url: "https://goerli.etherscan.io",
                    standard: "EIP3091"
                }, {
                    name: "blockscout-goerli",
                    url: "https://eth-goerli.blockscout.com",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                        width: 551,
                        height: 540,
                        format: "png"
                    }
                }],
                faucets: ["http://fauceth.komputing.org?chain=5&address=${ADDRESS}", "https://goerli-faucet.slock.it?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://goerli.net/#about",
                name: "Goerli",
                nativeCurrency: {
                    name: "Goerli Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 5,
                redFlags: [],
                rpc: ["https://goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://5.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.infura.io/v3/${INFURA_API_KEY}", "wss://goerli.infura.io/v3/${INFURA_API_KEY}", "https://rpc.goerli.mudit.blog/", "https://ethereum-goerli.publicnode.com", "wss://ethereum-goerli.publicnode.com", "https://goerli.gateway.tenderly.co", "wss://goerli.gateway.tenderly.co"],
                shortName: "gor",
                slug: "goerli",
                testnet: !0,
                title: "Ethereum Testnet Goerli"
            }, {
                chain: "ETH",
                chainId: 8453,
                explorers: [{
                    name: "basescan",
                    url: "https://basescan.org",
                    standard: "none"
                }, {
                    name: "basescout",
                    url: "https://base.blockscout.com",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                        width: 551,
                        height: 540,
                        format: "png"
                    }
                }, {
                    name: "dexguru",
                    url: "https://base.dex.guru",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                        width: 83,
                        height: 82,
                        format: "svg"
                    }
                }],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://base.org",
                name: "Base",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 8453,
                redFlags: [],
                rpc: ["https://base.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://8453.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.base.org/", "https://developer-access-mainnet.base.org/", "https://base.gateway.tenderly.co", "wss://base.gateway.tenderly.co", "https://base.publicnode.com", "wss://base.publicnode.com"],
                shortName: "base",
                slug: "base",
                status: "active",
                testnet: !1
            }, {
                chain: "ETH",
                chainId: 84531,
                explorers: [{
                    name: "basescan",
                    url: "https://goerli.basescan.org",
                    standard: "none"
                }, {
                    name: "basescout",
                    url: "https://base-goerli.blockscout.com",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                        width: 551,
                        height: 540,
                        format: "png"
                    }
                }, {
                    name: "dexguru",
                    url: "https://base-goerli.dex.guru",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                        width: 83,
                        height: 82,
                        format: "svg"
                    }
                }],
                faucets: ["https://www.coinbase.com/faucets/base-ethereum-goerli-faucet"],
                features: [],
                icon: {
                    url: "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://base.org",
                name: "Base Goerli Testnet",
                nativeCurrency: {
                    name: "Goerli Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 84531,
                redFlags: [],
                rpc: ["https://base-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://84531.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.base.org", "https://base-goerli.gateway.tenderly.co", "wss://base-goerli.gateway.tenderly.co", "https://base-goerli.publicnode.com", "wss://base-goerli.publicnode.com"],
                shortName: "basegor",
                slug: "base-goerli",
                testnet: !0
            }, s, p, {
                chain: "ETH",
                chainId: 42161,
                explorers: [{
                    name: "Arbiscan",
                    url: "https://arbiscan.io",
                    standard: "EIP3091"
                }, {
                    name: "Arbitrum Explorer",
                    url: "https://explorer.arbitrum.io",
                    standard: "EIP3091"
                }, {
                    name: "dexguru",
                    url: "https://arbitrum.dex.guru",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                        width: 83,
                        height: 82,
                        format: "svg"
                    }
                }],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://arbitrum.io",
                name: "Arbitrum One",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 42161,
                parent: {
                    type: "L2",
                    chain: "eip155-1",
                    bridges: [{
                        url: "https://bridge.arbitrum.io"
                    }]
                },
                redFlags: [],
                rpc: ["https://arbitrum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://42161.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://arb1.arbitrum.io/rpc", "https://arbitrum-one.publicnode.com", "wss://arbitrum-one.publicnode.com"],
                shortName: "arb1",
                slug: "arbitrum",
                testnet: !1
            }, {
                chain: "ETH",
                chainId: 421613,
                explorers: [{
                    name: "Arbitrum Goerli Arbiscan",
                    url: "https://goerli.arbiscan.io",
                    standard: "EIP3091"
                }],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://arbitrum.io/",
                name: "Arbitrum Goerli",
                nativeCurrency: {
                    name: "Arbitrum Goerli Ether",
                    symbol: "AGOR",
                    decimals: 18
                },
                networkId: 421613,
                parent: {
                    type: "L2",
                    chain: "eip155-5",
                    bridges: [{
                        url: "https://bridge.arbitrum.io/"
                    }]
                },
                redFlags: [],
                rpc: ["https://arbitrum-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://421613.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli-rollup.arbitrum.io/rpc", "https://arbitrum-goerli.publicnode.com", "wss://arbitrum-goerli.publicnode.com"],
                shortName: "arb-goerli",
                slug: "arbitrum-goerli",
                testnet: !0,
                title: "Arbitrum Goerli Rollup Testnet"
            }, {
                chain: "ETH",
                chainId: 10,
                explorers: [{
                    name: "etherscan",
                    url: "https://optimistic.etherscan.io",
                    standard: "EIP3091"
                }, {
                    name: "blockscout",
                    url: "https://optimism.blockscout.com",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                        width: 551,
                        height: 540,
                        format: "png"
                    }
                }, {
                    name: "dexguru",
                    url: "https://optimism.dex.guru",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                        width: 83,
                        height: 82,
                        format: "svg"
                    }
                }],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://optimism.io",
                name: "OP Mainnet",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 10,
                redFlags: [],
                rpc: ["https://optimism.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://10.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://mainnet.optimism.io", "https://optimism.publicnode.com", "wss://optimism.publicnode.com", "https://optimism.gateway.tenderly.co", "wss://optimism.gateway.tenderly.co"],
                shortName: "oeth",
                slug: "optimism",
                testnet: !1
            }, {
                chain: "ETH",
                chainId: 420,
                explorers: [{
                    name: "blockscout",
                    url: "https://optimism-goerli.blockscout.com",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                        width: 551,
                        height: 540,
                        format: "png"
                    }
                }],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://optimism.io",
                name: "Optimism Goerli Testnet",
                nativeCurrency: {
                    name: "Goerli Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 420,
                redFlags: [],
                rpc: ["https://optimism-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://420.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.optimism.io", "https://optimism-goerli.publicnode.com", "wss://optimism-goerli.publicnode.com", "https://optimism-goerli.gateway.tenderly.co", "wss://optimism-goerli.gateway.tenderly.co"],
                shortName: "ogor",
                slug: "optimism-goerli",
                testnet: !0
            }, {
                chain: "BSC",
                chainId: 56,
                explorers: [{
                    name: "bscscan",
                    url: "https://bscscan.com",
                    standard: "EIP3091"
                }, {
                    name: "dexguru",
                    url: "https://bnb.dex.guru",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                        width: 83,
                        height: 82,
                        format: "svg"
                    }
                }],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://www.bnbchain.org/en",
                name: "BNB Smart Chain Mainnet",
                nativeCurrency: {
                    name: "BNB Chain Native Token",
                    symbol: "BNB",
                    decimals: 18
                },
                networkId: 56,
                redFlags: [],
                rpc: ["https://binance.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://56.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bsc-dataseed1.bnbchain.org", "https://bsc-dataseed2.bnbchain.org", "https://bsc-dataseed3.bnbchain.org", "https://bsc-dataseed4.bnbchain.org", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed4.ninicoin.io", "https://bsc.publicnode.com", "wss://bsc.publicnode.com", "wss://bsc-ws-node.nariox.org"],
                shortName: "bnb",
                slip44: 714,
                slug: "binance",
                testnet: !1
            }, {
                chain: "BSC",
                chainId: 97,
                explorers: [{
                    name: "bscscan-testnet",
                    url: "https://testnet.bscscan.com",
                    standard: "EIP3091"
                }],
                faucets: ["https://testnet.bnbchain.org/faucet-smart"],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://www.bnbchain.org/en",
                name: "BNB Smart Chain Testnet",
                nativeCurrency: {
                    name: "BNB Chain Native Token",
                    symbol: "tBNB",
                    decimals: 18
                },
                networkId: 97,
                redFlags: [],
                rpc: ["https://binance-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://97.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://data-seed-prebsc-1-s1.bnbchain.org:8545", "https://data-seed-prebsc-2-s1.bnbchain.org:8545", "https://data-seed-prebsc-1-s2.bnbchain.org:8545", "https://data-seed-prebsc-2-s2.bnbchain.org:8545", "https://data-seed-prebsc-1-s3.bnbchain.org:8545", "https://data-seed-prebsc-2-s3.bnbchain.org:8545", "https://bsc-testnet.publicnode.com", "wss://bsc-testnet.publicnode.com"],
                shortName: "bnbt",
                slug: "binance-testnet",
                testnet: !0
            }, {
                chain: "FTM",
                chainId: 250,
                explorers: [{
                    name: "ftmscan",
                    url: "https://ftmscan.com",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRqbK449Fo9sJ3xMpkPbg6uV1weQj4yVV1xNMP9cdPmjf",
                        width: 73,
                        height: 73,
                        format: "png"
                    }
                }, {
                    name: "dexguru",
                    url: "https://fantom.dex.guru",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                        width: 83,
                        height: 82,
                        format: "svg"
                    }
                }],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://fantom.foundation",
                name: "Fantom Opera",
                nativeCurrency: {
                    name: "Fantom",
                    symbol: "FTM",
                    decimals: 18
                },
                networkId: 250,
                redFlags: [],
                rpc: ["https://fantom.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://250.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.ftm.tools", "https://fantom.publicnode.com", "wss://fantom.publicnode.com"],
                shortName: "ftm",
                slug: "fantom",
                testnet: !1
            }, {
                chain: "FTM",
                chainId: 4002,
                explorers: [{
                    name: "ftmscan",
                    url: "https://testnet.ftmscan.com",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRqbK449Fo9sJ3xMpkPbg6uV1weQj4yVV1xNMP9cdPmjf",
                        width: 73,
                        height: 73,
                        format: "png"
                    }
                }],
                faucets: ["https://faucet.fantom.network"],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet",
                name: "Fantom Testnet",
                nativeCurrency: {
                    name: "Fantom",
                    symbol: "FTM",
                    decimals: 18
                },
                networkId: 4002,
                redFlags: [],
                rpc: ["https://fantom-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://4002.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.fantom.network", "https://fantom-testnet.publicnode.com", "wss://fantom-testnet.publicnode.com"],
                shortName: "tftm",
                slug: "fantom-testnet",
                testnet: !0
            }, {
                chain: "AVAX",
                chainId: 43114,
                explorers: [{
                    name: "snowtrace",
                    url: "https://snowtrace.io",
                    standard: "EIP3091"
                }],
                faucets: [],
                features: [{
                    name: "EIP1559"
                }],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://www.avax.network/",
                name: "Avalanche C-Chain",
                nativeCurrency: {
                    name: "Avalanche",
                    symbol: "AVAX",
                    decimals: 18
                },
                networkId: 43114,
                redFlags: [],
                rpc: ["https://avalanche.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://43114.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://api.avax.network/ext/bc/C/rpc", "https://avalanche-c-chain.publicnode.com", "wss://avalanche-c-chain.publicnode.com"],
                shortName: "avax",
                slip44: 9005,
                slug: "avalanche",
                testnet: !1
            }, {
                chain: "AVAX",
                chainId: 43113,
                explorers: [{
                    name: "snowtrace",
                    url: "https://testnet.snowtrace.io",
                    standard: "EIP3091"
                }],
                faucets: ["https://faucet.avax-test.network/"],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://cchain.explorer.avax-test.network",
                name: "Avalanche Fuji Testnet",
                nativeCurrency: {
                    name: "Avalanche",
                    symbol: "AVAX",
                    decimals: 18
                },
                networkId: 43113,
                redFlags: [],
                rpc: ["https://avalanche-fuji.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://43113.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.avax-test.network/ext/bc/C/rpc", "https://avalanche-fuji-c-chain.publicnode.com", "wss://avalanche-fuji-c-chain.publicnode.com"],
                shortName: "Fuji",
                slug: "avalanche-fuji",
                testnet: !0
            }, n]
        }
    }
]);