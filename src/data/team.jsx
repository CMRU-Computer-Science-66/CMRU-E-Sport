import G2Img from "@/assets/team/g2esport.png"
import Cloud9Img from "@/assets/team/cloud9.png"
import AstralisImg from "@/assets/team/astralis.png"
import LiquidImg from "@/assets/team/teamliquid.png"
import FaZeImg from "@/assets/team/faze.png"

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
];