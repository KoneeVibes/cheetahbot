import { BitTorrent, Bnbchain, ChainLink, Eth, Liquidity, Polygon, Solana, Supply, Symbol, Synthetix, Tax, Vechain } from "../assets";

export const navLinks = [
    {
        name: "Home",
        url: "#"
    },
    {
        name: "Features",
        url: "#"
    },
    {
        name: "FAQ",
        url: "#"
    },
];

export const clientsI = [
    <Eth />, <Solana />, <Polygon />, <Vechain />
];

export const clientsII = [
    <Bnbchain />, <ChainLink />, <Synthetix />, <BitTorrent />
];

export const tokenomics = [
    {
        icon: <Supply />,
        title: "Total supply 1,000,000"
    },
    {
        icon: <Tax />,
        title: "Tax 5% buy 5% sell "
    },
    {
        icon: <Liquidity />,
        title: "Liquidity locked 100%"
    },
    {
        icon: <Symbol />,
        title: "symbol $Cheetah"
    }
];

export const features = [
    {
        title: "Sniper Bot",
        body: "Experience the lightening cheetah speed, Be ahead of the game."
    },
    {
        title: "Buy/Sell",
        body: "Without any limitations enjoy protection from MeV and be the safest trader."
    },
    {
        title: "Pre-sale Bot",
        body: "Snipe your best pre-sales with ease. Keep track of all pre-sales."
    },
    {
        title: "Multi-Chain",
        body: "Explore the widest Cryptocurrency Market discover Gems and enjoy your profit without stress with cheetah bot."
    },
    {
        title: "Anti-Rug",
        body: "Be protected from Rug pulls with cheetah bot"
    },
    {
        title: "Limit Orders",
        body: "Automate your take profits, dip buying,stop loss and trailing stop loss."
    },
    {
        title: "Analyser",
        body: "Get free tokens analysis."
    },
    {
        title: "Copy-trade",
        body: "Copy any trade of your choice."
    },
]