import NatusImg from "@/assets/team/NatusVincere.png";
import AstralisImg from "@/assets/team/astralis.png";
import Cloud9Img from "@/assets/team/cloud9.png";
import EvilImg from "@/assets/team/evil.png";
import FaZeImg from "@/assets/team/faze.png";
import FnaticImg from "@/assets/team/fnatic.png";
import FuriaImg from "@/assets/team/furiaesport.png";
import G2Img from "@/assets/team/g2esport.png";
import LiquidImg from "@/assets/team/teamliquid.png";

export const TeamData = [
	{
		coachingStaff: {
			assistantCoaches: null,
			headCoach: null,
		},
		members: [
			{
				name: "NiKo",
				nationality: "Bosnia and Herzegovina",
				realName: "Kovač, Nikola",
			},
			{
				name: "huNter-",
				nationality: "Bosnia and Herzegovina",
				realName: "Kovač, Nemanja",
			},
			{ name: "m0NESY", nationality: "Russia", realName: "Osipov, Ilya" },
			{ name: "nexa", nationality: "Serbia", realName: "Isaković, Nemanja" },
			{ name: "HooXi", nationality: "Denmark", realName: "Nielsen, Rasmus" },
			{ name: "jks (I)", nationality: "Australia", realName: "Savage, Justin" },
		],
		teamImage: G2Img,
		title: "G2 Esports",
	},
	{
		coachingStaff: {
			assistantCoaches: ["Marius 'Veigar v2' Aune"],
			headCoach: "Alfonso 'Mithy' Aguirre Rodríguez",
		},
		members: [
			{
				name: "Fudge",
				nationality: "Australia",
				position: "Top",
				realName: "Allami, Ibrahim",
			},
			{
				name: "Blaber",
				nationality: "United States",
				position: "Jungle",
				realName: "Huang, Robert",
			},
			{
				name: "Jojopyun",
				nationality: "Canada",
				position: "Mid",
				realName: "Pyun, Joseph",
			},
			{
				name: "Berserker",
				nationality: "South Korea",
				position: "Bot",
				realName: "Kim Min-cheol",
			},
			{
				name: "Vulcan",
				nationality: "Canada",
				position: "Support",
				realName: "Laflamme, Philippe",
			},
		],
		teamImage: Cloud9Img,
		title: "Cloud9",
	},
	{
		coachingStaff: {
			assistantCoaches: ["Bjørn-Vegar 'Hansen' Hansen"],
			headCoach: "Baltat 'AoD' Alin-Ciprian",
		},
		members: [
			{
				handle: "Finn",
				name: "Wiestål, Finn",
				nationality: "Sweden",
				role: "Top",
			},
			{
				handle: "JeongHoon",
				name: "Lee Jeong-hoon",
				nationality: "South Korea",
				role: "Support",
			},
			{
				handle: "Dajor",
				name: "Ryppa, Oliver",
				nationality: "Germany",
				role: "Mid",
			},
			{
				handle: "113",
				name: "Balcı, Doğukan",
				nationality: "Turkey",
				role: "Jungle",
			},
			{
				handle: "Kobbe",
				name: "Kobberup, Kasper",
				nationality: "Denmark",
				role: "Bot",
			},
		],
		teamImage: AstralisImg,
		title: "Astralis",
	},
	{
		coachingStaff: {
			assistantCoaches: null,
			headCoach: null,
		},
		members: [
			{ handle: "Yeon", name: "Sung, Sean", nationality: "United States" },
			{ handle: "UmTi", name: "Seong-hyeon, Eom", nationality: "South Korea" },
			{
				handle: "Impact",
				name: "Eon-young, Jeong",
				nationality: "South Korea",
			},
			{ handle: "CoreJJ", name: "Yong-in, Jo", nationality: "South Korea" },
			{ handle: "APA", name: "Stearns, Eain", nationality: "United States" },
		],
		teamImage: LiquidImg,
		title: "Team Liquid",
	},
	{
		coachingStaff: {
			assistantCoaches: null,
			headCoach: null,
		},
		members: [
			{ handle: "rain", name: "Nygaard, Håvard", nationality: "Norway" },
			{ handle: "broky", name: "Saukants, Helvijs", nationality: "Latvia" },
			{ handle: "frozen", name: "Čerňanský, David", nationality: "Slovakia" },
			{ handle: "karrigan", name: "Andersen, Finn", nationality: "Denmark" },
			{ handle: "ropz", name: "Kool, Robin", nationality: "Estonia" },
			{
				handle: "olofmeister (I)",
				name: "Kajbjer Gustafsson, Olof",
				nationality: "Sweden",
			},
		],
		teamImage: FaZeImg,
		title: "FaZe Clan",
	},
	{
		coachingStaff: {
			assistantCoaches: ["Jamie 'keita' Hall (strategic coach)"],
			headCoach: "Andreas 'Samuelsson' Samuelsson (team director)",
		},
		members: [
			{ handle: "rain", name: "Nygaard, Håvard", nationality: "Norway" },
			{ handle: "broky", name: "Saukants, Helvijs", nationality: "Latvia" },
			{ handle: "frozen", name: "Čerňanský, David", nationality: "Slovakia" },
			{ handle: "karrigan", name: "Andersen, Finn", nationality: "Denmark" },
			{ handle: "ropz", name: "Kool, Robin", nationality: "Estonia" },
			{
				handle: "olofmeister (I)",
				name: "Kajbjer Gustafsson, Olof",
				nationality: "Sweden",
			},
		],
		teamImage: FnaticImg,
		title: "Fnatic",
	},
	{
		coachingStaff: {
			assistantCoaches: null,
			headCoach: "Andrii 'B1ad3' Gorodenskyi",
		},
		members: [
			{ handle: "w0nderful", name: "Zhdanov, Ihor", nationality: "Ukraine" },
			{ handle: "b1t", name: "Vakhovskyi, Valerii", nationality: "Ukraine" },
			{ handle: "Aleksib", name: "Virolainen, Aleksi", nationality: "Finland" },
			{ handle: "iM", name: "Ivan, Mihai", nationality: "Romania" },
			{ handle: "jL", name: "Lekavicius, Justinas", nationality: "Lithuania" },
			{
				handle: "s1mple (I)",
				name: "Kostyliev, Oleksandr",
				nationality: "Ukraine",
			},
		],
		teamImage: NatusImg,
		title: "Natus Vincere",
	},
	{
		coachingStaff: {
			assistantCoaches: null,
			headCoach: null,
		},
		members: [
			{ handle: "FalleN", name: "Toledo, Gabriel", nationality: "Brazil" },
			{ handle: "chelo", name: "Cespedes, Marcelo", nationality: "Brazil" },
			{ handle: "yuurih", name: "Santos, Yuri", nationality: "Brazil" },
			{ handle: "arT", name: "Piovezan, Andrei", nationality: "Brazil" },
			{ handle: "KSCERATO", name: "Cerato, Kaike", nationality: "Brazil" },
		],
		teamImage: FuriaImg,
		title: "FURIA",
	},
	{
		coachingStaff: {
			assistantCoaches: null,
			headCoach: "Tommy 'Axed' Ryan",
		},
		members: [
			{
				handle: "autimatic",
				name: "Ta, Timothy",
				nationality: "United States",
			},
			{
				handle: "Jeorge",
				name: "Endicott, Jeorge",
				nationality: "United States",
			},
			{
				handle: "junior",
				name: "Johnson, Paytyn",
				nationality: "United States",
			},
			{ handle: "Walco", name: "Walsh, Colby", nationality: "Canada" },
		],
		teamImage: EvilImg,
		title: "Evil Geniuses",
	},
];
