// Team Image
import AstralisImg from "@/assets/team/astarlis/astralis.png";
import Cloud9Img from "@/assets/team/clound9/cloud9.png";
import EvilImg from "@/assets/team/evil/evil.png";
import FaZeImg from "@/assets/team/faze/faze.png";
import FnaticImg from "@/assets/team/fnatic/fnatic.png";
import FuriaImg from "@/assets/team/furiaesport/furiaesport.png";
import G2Img from "@/assets/team/g2esport/g2esport.png";
// Player Image
import HooxiImg from "@/assets/team/g2esport/player/Hooxi.png";
import HunterImg from "@/assets/team/g2esport/player/Hunter.png";
import MonesyImg from "@/assets/team/g2esport/player/Monesy.png";
import NexaImg from "@/assets/team/g2esport/player/Nexa.png";
// G2 Esport
import NikoImg from "@/assets/team/g2esport/player/Niko.png";
import NatusImg from "@/assets/team/natusvincere/NatusVincere.png";
import LiquidImg from "@/assets/team/teamliquid/teamliquid.png";

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
				playerimg: NikoImg,
				realName: "Kovač, Nikola",
			},
			{
				name: "huNter-",
				nationality: "Bosnia and Herzegovina",
				playerimg: HunterImg,
				realName: "Kovač, Nemanja",
			},
			{
				name: "m0NESY",
				nationality: "Russia",
				playerimg: MonesyImg,
				realName: "Osipov, Ilya",
			},
			{
				name: "nexa",
				nationality: "Serbia",
				playerimg: NexaImg,
				realName: "Isaković, Nemanja",
			},
			{
				name: "HooXi",
				nationality: "Denmark",
				playerimg: HooxiImg,
				realName: "Nielsen, Rasmus",
			},
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
				playerimg: MonesyImg,
				position: "Top",
				realName: "Allami, Ibrahim",
			},
			{
				name: "Blaber",
				nationality: "United States",
				playerimg: MonesyImg,
				position: "Jungle",
				realName: "Huang, Robert",
			},
			{
				name: "Jojopyun",
				nationality: "Canada",
				playerimg: MonesyImg,
				position: "Mid",
				realName: "Pyun, Joseph",
			},
			{
				name: "Berserker",
				nationality: "South Korea",
				playerimg: MonesyImg,
				position: "Bot",
				realName: "Kim Min-cheol",
			},
			{
				name: "Vulcan",
				nationality: "Canada",
				playerimg: MonesyImg,
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
				playerimg: MonesyImg,
				role: "Top",
			},
			{
				handle: "JeongHoon",
				name: "Lee Jeong-hoon",
				nationality: "South Korea",
				playerimg: MonesyImg,
				role: "Support",
			},
			{
				handle: "Dajor",
				name: "Ryppa, Oliver",
				nationality: "Germany",
				playerimg: MonesyImg,
				role: "Mid",
			},
			{
				handle: "113",
				name: "Balcı, Doğukan",
				nationality: "Turkey",
				playerimg: MonesyImg,
				role: "Jungle",
			},
			{
				handle: "Kobbe",
				name: "Kobberup, Kasper",
				nationality: "Denmark",
				playerimg: MonesyImg,
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
			{
				handle: "rain",
				name: "Nygaard, Håvard",
				nationality: "Norway",
				playerimg: MonesyImg,
			},
			{
				handle: "broky",
				name: "Saukants, Helvijs",
				nationality: "Latvia",
				playerimg: MonesyImg,
			},
			{
				handle: "frozen",
				name: "Čerňanský, David",
				nationality: "Slovakia",
				playerimg: MonesyImg,
			},
			{
				handle: "karrigan",
				name: "Andersen, Finn",
				nationality: "Denmark",
				playerimg: MonesyImg,
			},
			{
				handle: "ropz",
				name: "Kool, Robin",
				nationality: "Estonia",
				playerimg: MonesyImg,
			},
			{
				handle: "olofmeister (I)",
				name: "Kajbjer Gustafsson, Olof",
				nationality: "Sweden",
				playerimg: MonesyImg,
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
			{
				handle: "rain",
				name: "Nygaard, Håvard",
				nationality: "Norway",
				playerimg: MonesyImg,
			},
			{
				handle: "broky",
				name: "Saukants, Helvijs",
				nationality: "Latvia",
				playerimg: MonesyImg,
			},
			{
				handle: "frozen",
				name: "Čerňanský, David",
				nationality: "Slovakia",
				playerimg: MonesyImg,
			},
			{
				handle: "karrigan",
				name: "Andersen, Finn",
				nationality: "Denmark",
				playerimg: MonesyImg,
			},
			{
				handle: "ropz",
				name: "Kool, Robin",
				nationality: "Estonia",
				playerimg: MonesyImg,
			},
			{
				handle: "olofmeister (I)",
				name: "Kajbjer Gustafsson, Olof",
				nationality: "Sweden",
				playerimg: MonesyImg,
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
			{
				handle: "w0nderful",
				name: "Zhdanov, Ihor",
				nationality: "Ukraine",
				playerimg: MonesyImg,
			},
			{
				handle: "b1t",
				name: "Vakhovskyi, Valerii",
				nationality: "Ukraine",
				playerimg: MonesyImg,
			},
			{
				handle: "Aleksib",
				name: "Virolainen, Aleksi",
				nationality: "Finland",
				playerimg: MonesyImg,
			},
			{
				handle: "iM",
				name: "Ivan, Mihai",
				nationality: "Romania",
				playerimg: MonesyImg,
			},
			{
				handle: "jL",
				name: "Lekavicius, Justinas",
				nationality: "Lithuania",
				playerimg: MonesyImg,
			},
			{
				handle: "s1mple (I)",
				name: "Kostyliev, Oleksandr",
				nationality: "Ukraine",
				playerimg: MonesyImg,
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
			{
				handle: "FalleN",
				name: "Toledo, Gabriel",
				nationality: "Brazil",
				playerimg: MonesyImg,
			},
			{
				handle: "chelo",
				name: "Cespedes, Marcelo",
				nationality: "Brazil",
				playerimg: MonesyImg,
			},
			{
				handle: "yuurih",
				name: "Santos, Yuri",
				nationality: "Brazil",
				playerimg: MonesyImg,
			},
			{
				handle: "arT",
				name: "Piovezan, Andrei",
				nationality: "Brazil",
				playerimg: MonesyImg,
			},
			{
				handle: "KSCERATO",
				name: "Cerato, Kaike",
				nationality: "Brazil",
				playerimg: MonesyImg,
			},
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
				playerimg: MonesyImg,
			},
			{
				handle: "Jeorge",
				name: "Endicott, Jeorge",
				nationality: "United States",
				playerimg: MonesyImg,
			},
			{
				handle: "junior",
				name: "Johnson, Paytyn",
				nationality: "United States",
				playerimg: MonesyImg,
			},
			{
				handle: "Walco",
				name: "Walsh, Colby",
				nationality: "Canada",
				playerimg: MonesyImg,
			},
		],
		teamImage: EvilImg,
		title: "Evil Geniuses",
	},
];
