import G2Img from "@/assets/team/g2esport.png"
import Cloud9Img from "@/assets/team/cloud9.png"
import AstralisImg from "@/assets/team/astralis.png"
import LiquidImg from "@/assets/team/teamliquid.png"
import FaZeImg from "@/assets/team/faze.png"
import FnaticImg from "@/assets/team/fnatic.png"
import NatusImg from "@/assets/team/NatusVincere.png"
import FuriaImg from "@/assets/team/furiaesport.png"
import EvilImg from "@/assets/team/evil.png"

export const TeamData = [
    {
        title: "G2 Esports",
        img: G2Img,
        members: [
            { name: "NiKo", realName: "Kovač, Nikola", nationality: "Bosnia and Herzegovina" },
            { name: "huNter-", realName: "Kovač, Nemanja", nationality: "Bosnia and Herzegovina" },
            { name: "m0NESY", realName: "Osipov, Ilya", nationality: "Russia" },
            { name: "nexa", realName: "Isaković, Nemanja", nationality: "Serbia" },
            { name: "HooXi", realName: "Nielsen, Rasmus", nationality: "Denmark" },
            { name: "jks (I)", realName: "Savage, Justin", nationality: "Australia" },
        ],
        coachingStaff: {
            headCoach: null,
            assistantCoaches: null,
        },
    },
    {
        title: "Cloud9",
        img: Cloud9Img,
        members: [
            { position: "Top", name: "Fudge", realName: "Allami, Ibrahim", nationality: "Australia" },
            { position: "Jungle", name: "Blaber", realName: "Huang, Robert", nationality: "United States" },
            { position: "Mid", name: "Jojopyun", realName: "Pyun, Joseph", nationality: "Canada" },
            { position: "Bot", name: "Berserker", realName: "Kim Min-cheol", nationality: "South Korea" },
            { position: "Support", name: "Vulcan", realName: "Laflamme, Philippe", nationality: "Canada" },
        ],
        coachingStaff: {
            headCoach: "Alfonso 'Mithy' Aguirre Rodríguez",
            assistantCoaches: ["Marius 'Veigar v2' Aune"],
        },
    },
    {
        title: "Astralis",
        img: AstralisImg,
        members: [
            { role: "Top", handle: "Finn", name: "Wiestål, Finn", nationality: "Sweden" },
            { role: "Support", handle: "JeongHoon", name: "Lee Jeong-hoon", nationality: "South Korea" },
            { role: "Mid", handle: "Dajor", name: "Ryppa, Oliver", nationality: "Germany" },
            { role: "Jungle", handle: "113", name: "Balcı, Doğukan", nationality: "Turkey" },
            { role: "Bot", handle: "Kobbe", name: "Kobberup, Kasper", nationality: "Denmark" },
        ],
        coachingStaff: {
            headCoach: "Baltat 'AoD' Alin-Ciprian",
            assistantCoaches: ["Bjørn-Vegar 'Hansen' Hansen"],
        },
    },
    {
        title: "Team Liquid",
        img: LiquidImg,
        members: [
            { handle: "Yeon", name: "Sung, Sean", nationality: "United States" },
            { handle: "UmTi", name: "Seong-hyeon, Eom", nationality: "South Korea" },
            { handle: "Impact", name: "Eon-young, Jeong", nationality: "South Korea" },
            { handle: "CoreJJ", name: "Yong-in, Jo", nationality: "South Korea" },
            { handle: "APA", name: "Stearns, Eain", nationality: "United States" },
        ],
        coachingStaff: {
            headCoach: null,
            assistantCoaches: null,
        },
    },
    {
        title: "FaZe Clan",
        img: FaZeImg,
        members: [
            { handle: "rain", name: "Nygaard, Håvard", nationality: "Norway" },
            { handle: "broky", name: "Saukants, Helvijs", nationality: "Latvia" },
            { handle: "frozen", name: "Čerňanský, David", nationality: "Slovakia" },
            { handle: "karrigan", name: "Andersen, Finn", nationality: "Denmark" },
            { handle: "ropz", name: "Kool, Robin", nationality: "Estonia" },
            { handle: "olofmeister (I)", name: "Kajbjer Gustafsson, Olof", nationality: "Sweden" },
        ],
        coachingStaff: {
            headCoach: null,
            assistantCoaches: null,
        },
    },
    {
        "title": "Fnatic",
        "img": FnaticImg,
        "members": [
            { "handle": "rain", "name": "Nygaard, Håvard", "nationality": "Norway" },
            { "handle": "broky", "name": "Saukants, Helvijs", "nationality": "Latvia" },
            { "handle": "frozen", "name": "Čerňanský, David", "nationality": "Slovakia" },
            { "handle": "karrigan", "name": "Andersen, Finn", "nationality": "Denmark" },
            { "handle": "ropz", "name": "Kool, Robin", "nationality": "Estonia" },
            { "handle": "olofmeister (I)", "name": "Kajbjer Gustafsson, Olof", "nationality": "Sweden" }
        ],
        "coachingStaff": {
            "headCoach": "Andreas 'Samuelsson' Samuelsson (team director)",
            "assistantCoaches": ["Jamie 'keita' Hall (strategic coach)"]
        }
    },
    {
        "title": "Natus Vincere",
        "img": NatusImg,
        "members": [
            { "handle": "w0nderful", "name": "Zhdanov, Ihor", "nationality": "Ukraine" },
            { "handle": "b1t", "name": "Vakhovskyi, Valerii", "nationality": "Ukraine" },
            { "handle": "Aleksib", "name": "Virolainen, Aleksi", "nationality": "Finland" },
            { "handle": "iM", "name": "Ivan, Mihai", "nationality": "Romania" },
            { "handle": "jL", "name": "Lekavicius, Justinas", "nationality": "Lithuania" },
            { "handle": "s1mple (I)", "name": "Kostyliev, Oleksandr", "nationality": "Ukraine" }
        ],
        "coachingStaff": {
            "headCoach": "Andrii 'B1ad3' Gorodenskyi",
            "assistantCoaches": null
        }
    },
    {
        "title": "FURIA",
        "img": FuriaImg,
        "members": [
            { "handle": "FalleN", "name": "Toledo, Gabriel", "nationality": "Brazil" },
            { "handle": "chelo", "name": "Cespedes, Marcelo", "nationality": "Brazil" },
            { "handle": "yuurih", "name": "Santos, Yuri", "nationality": "Brazil" },
            { "handle": "arT", "name": "Piovezan, Andrei", "nationality": "Brazil" },
            { "handle": "KSCERATO", "name": "Cerato, Kaike", "nationality": "Brazil" }
        ],
        "coachingStaff": {
            "headCoach": null,
            "assistantCoaches": null
        }
    },
    {
        "title": "Evil Geniuses",
        "img": EvilImg,
        "members": [
            { "handle": "autimatic", "name": "Ta, Timothy", "nationality": "United States" },
            { "handle": "Jeorge", "name": "Endicott, Jeorge", "nationality": "United States" },
            { "handle": "junior", "name": "Johnson, Paytyn", "nationality": "United States" },
            { "handle": "Walco", "name": "Walsh, Colby", "nationality": "Canada" }
        ],
        "coachingStaff": {
            "headCoach": "Tommy 'Axed' Ryan",
            "assistantCoaches": null
        }
    },

];

export const ScoreListData = [
    {
        "tournament": "CMRU Pro League",
        "teams": [
            {
                "name": "G2 Esports",
                "matchesPlayed": 5,
                "wins": 4,
                "losses": 0,
                "draws": 1,
                "totalPoints": 13
            },
            {
                "name": "Cloud9",
                "matchesPlayed": 5,
                "wins": 2,
                "losses": 2,
                "draws": 1,
                "totalPoints": 7
            },
            {
                "name": "Astralis",
                "matchesPlayed": 5,
                "wins": 1,
                "losses": 3,
                "draws": 1,
                "totalPoints": 4
            },
            {
                "name": "Team Liquid",
                "matchesPlayed": 5,
                "wins": 3,
                "losses": 1,
                "draws": 1,
                "totalPoints": 10
            },
            {
                "name": "Fnatic",
                "matchesPlayed": 0,
                "wins": 0,
                "losses": 0,
                "draws": 0,
                "totalPoints": 0
            },
            {
                "name": "Natus Vincere",
                "matchesPlayed": 0,
                "wins": 0,
                "losses": 0,
                "draws": 0,
                "totalPoints": 0
            },
            {
                "name": "FURIA",
                "matchesPlayed": 0,
                "wins": 0,
                "losses": 0,
                "draws": 0,
                "totalPoints": 0
            },
            {
                "name": "Evil Geniuses",
                "matchesPlayed": 0,
                "wins": 0,
                "losses": 0,
                "draws": 0,
                "totalPoints": 0
            }
        ]
    }
];
