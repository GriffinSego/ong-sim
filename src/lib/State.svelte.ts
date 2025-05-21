// Export a single state object that contains all the game state
type State = {
	scene: number;
	month: number;
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
	fatalities: number;
	shareholderSentiment: number;
	char: 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh';
	sharePrice: number;
	interestRate: number;
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
};

export const state = $state<State>({
	scene: 1,
	month: 1,
	oilPrice: 60,
	cash: 1300000000,
	debt: 13000000000,
	revenue: 0,
	production: 0,
	operatingCost: 0,
	cyberRisk: 0.2,
	rigs: 20,
	spills: 0,
	rigsInUse: 0,
	wells: 410,
	hacks: 0,
	fatalities: 0,
	shareholderSentiment: 100,
	char: 'gen' as 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh',
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
export const ephemeralState = $state({
	oilPrice: 60,
	cash: 1300000000,
	debt: 13000000000,
	revenue: 0,
	production: 0,
	operatingCost: 0,
	cyberRisk: 0.2,
	rigs: 20,
	spills: 0,
	rigsInUse: 0,
	wells: 410,
	hacks: 0,
	fatalities: 0,
	shareholderSentiment: 100,
	char: 'gen' as 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh',
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