import { createNoise2D, type NoiseFunction2D } from 'simplex-noise';
import alea from 'alea';

type CellData = {
	oilRemaining: number;
	owned: boolean;
	leased: boolean;
	drilled: boolean;
	price: number;
	capped: boolean;
};
export function composeMap() {
	const prng = alea(state.gameStart);
	const prng_price = alea(state.gameStart + 'price');
	const noise2D = createNoise2D(prng);
	const noise2D_price = createNoise2D(prng_price);
	let map: CellData[][] = [];

	for (let i = 0; i < 17; i++) {
		map[i] = [];
		for (let j = 0; j < 14; j++) {
			map[i].push({
				drilled: false,
				owned: false,
				leased: false,
				oilRemaining: Math.floor(
					3200 * (noise2D(i, j) > 0 ? noise2D(i, j) : -noise2D(i, j))
				),
				price: Math.max(50000, Math.floor(noise2D_price(i, j) * 200000)),
				capped: false,
			});
		}
	}

	state.map = map;
}

// Export a single state object that contains all the game state
type State = {
	gameStart: number; //recorded for use in seeding the prng
	map: CellData[][];
	leasedWells: number;
	scene: number;
	landmen: number;
	quarter: number;
	oilPrice: number;
	cash: number;
	debt: number;
	revenue: number;
	production: number;
	operatingCost: number;
	cyberRisk: number;
	rigs: number;
	spills: number;
	rigsInUse: number;
	wells: number;
	hacks: number;
	wellsVulnerable: number;
	fatalities: number;
	shareholderSentiment: number;
	char: 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh';
	sharePrice: number;
	shares: number;
	interestRate: number;
	dividendPercentage: number;
	operatingCostMultiplier: number;
	mergerCostMultiplier: number;
	capexCostMultiplier: number;
	shareholderSentimentMultiplier: number;
	revenueMultiplier: number;
	rndCostMultiplier: number;
	lawsuitInvestigationMultiplier: number;
	cyberCostMultiplier: number;
	rndhdBought: boolean;
	rnddeBought: boolean;
	monitorBought: boolean;
	vpnBought: boolean;
	selectedCell: {
		x: number;
		y: number;
		enabled: boolean;
		basin?: 'MIDLAND' | 'DELAWARE';
	};
};

export function thousand(v: number) {
	return v * 1000;
}
export function million(v: number) {
	return v * 1000000;
}
export function billion(v: number) {
	return v * 1000000000;
}

export const state = $state<State>({
	gameStart: Date.now(),
	map: [],
	scene: 1,
	landmen: 10,
	leasedWells: 0,
	quarter: 1,
	oilPrice: 60,
	cash: 1300000000,
	debt: million(140),
	revenue: million(3 * 12.167), //36.5m revenue for first quarter, 1/4 of 146m annual revenue as per v7 spec
	production: million(8.5), //bbl per quarter, 1/4 of 34m bbl per year
	operatingCost: 0,
	cyberRisk: 0.2,
	rigs: 1,
	spills: 0,
	rigsInUse: 0,
	wells: 37,
	hacks: 0,
	wellsVulnerable: 410,
	fatalities: 0,
	shareholderSentiment: 100,
	char: 'gen' as 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh',
	sharePrice: 150.0,
	shares: million(3), //total number of shares in company
	interestRate: 0.02,
	dividendPercentage: 0.04,
	operatingCostMultiplier: 1.0,
	mergerCostMultiplier: 1.0,
	capexCostMultiplier: 1.0,
	shareholderSentimentMultiplier: 1.0,
	revenueMultiplier: 1.0,
	rndCostMultiplier: 1.0,
	lawsuitInvestigationMultiplier: 1.0,
	cyberCostMultiplier: 1.0,

	rndhdBought: false,
	rnddeBought: false,
	monitorBought: false,
	vpnBought: false,
	selectedCell: {
		x: 1,
		y: 1,
		enabled: false,
	},
});
export const ephemeralState = $state({
	oilPrice: 60,
	landmen: 10,
	cash: 1300000000,
	debt: 13000000000,
	revenue: 0,
	production: 0,
	operatingCost: 0,
	cyberRisk: 0.2,
	rigs: 1,
	rigsInUse: 0,
	wells: 37,
	wellsVulnerable: 410,
	shareholderSentiment: 100,
	sharePrice: 150.0,
	interestRate: 0.01,
	operatingCostMultiplier: 1.0,
	mergerCostMultiplier: 1.0,
	capexCostMultiplier: 1.0,
	shareholderSentimentMultiplier: 1.0,
	revenueMultiplier: 1.0,
	rndCostMultiplier: 1.0,
	lawsuitInvestigationMultiplier: 1.0,
	cyberCostMultiplier: 1.0,

	rndhdBought: false,
	rnddeBought: false,
	monitorBought: false,
	vpnBought: false,
});
export function resetState() {
	for (const key in ephemeralState) {
		// @ts-ignore
		ephemeralState[key] = state[key];
	}
}
export function saveState() {
	for (const key in ephemeralState) {
		// @ts-ignore
		state[key] = ephemeralState[key];
	}
}
