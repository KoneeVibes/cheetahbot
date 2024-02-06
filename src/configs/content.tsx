import { BitTorrent, Bnbchain, ChainLink, Eth, Liquidity, MiileFour, MileFive, MileOne, MileSix, MileThree, MileTwo, Polygon, Solana, Supply, Symbol, Synthetix, Tax, Vechain } from "../assets";

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
];

export const roadmap = [
    {
        avatar: <MileOne />,
        title: "Mile 1",
        body: ["Product development", "Socials and website", "Community building"],
        size: 6
    },
    {
        avatar: <MileTwo />,
        title: "Mile 2",
        body: ["KOL Partnership", "Pre - launch marketing", "$Cheetah fair - launch"],
        size: 3
    },
    {
        avatar: <MileThree />,
        title: "Mile 3",
        body: ["BOT release", "Product marketing", "Further development", "Multi - chain sniping and trading"],
        size: 3
    },
    {
        avatar: <MiileFour />,
        title: "Mile 4",
        body: ["CG/CMC application", "Presale bot", "Product marketing"],
        size: 3.5
    },
    {
        avatar: <MileFive />,
        title: "Mile 5",
        body: ["Copy trading", "Revenue share", "App launch with AI signal partnership", "Further development",],
        size: 5
    },
    {
        avatar: <MileSix />,
        title: "Mile 6",
        body: ["CEX listings", "Further product development and optimization", "Further product marketing.",],
        size: 3.5
    },
]