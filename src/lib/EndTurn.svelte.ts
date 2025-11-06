import { state, ephemeralState, saveState, resetState } from './State.svelte';

async function sleep(d: number) {
	function sr(resolve: (value: unknown) => void, reject: (value: unknown) => void) {
		setTimeout(resolve, d);
	}
	return new Promise(sr);
}
function random(from: number, to: number) {
	return Math.random() * (to - from) + from;
}
function chance(percent: number) {
	return random(0, 100) < percent;
}

export async function endTurn() {
	saveState();
	let endTurnLog: string[] = [];
	endTurnLog.push('End of turn ' + state.quarter);
	//calculate new production
	state.production = 0;
	let loss = state.quarter < 12 ? 0.9 : 0.95;
	for (let i = 0; i < state.map.length; i++) {
		for (let j = 0; j < state.map[i].length; j++) {
			if (
				!state.map[i][j].capped &&
				state.map[i][j].drilled &&
				(state.map[i][j].leased || state.map[i][j].owned)
			) {
				state.production += state.map[i][j].produces;
				state.map[i][j].produces *= loss;
			}
		}
	}
	//reset rigsInUse
	state.rigsInUse = 0;
	endTurnLog.push('Produced barrels of oil this quarter: ' + state.production);
	//calculate changes
	endTurnLog.push('Revenue received: ' + state.oilPrice * 0.75 * state.production);
	state.revenue = state.oilPrice * 0.75 * state.production;
	state.cash += state.revenue;
	state.cash -= 100000 * state.leasedWells * state.mergerCostMultiplier;
	endTurnLog.push(
		'Paid out for well leasing: ' + 100000 * state.leasedWells * state.mergerCostMultiplier
	);
	endTurnLog.push('Cash in the bank: ' + state.cash);
	//pay out dividends, adjust shareholder sentiment
	endTurnLog.push(
		'Paid dividends: $' + state.shares * (state.sharePrice * state.dividendPercentage)
	);
	state.cash -= state.shares * (state.sharePrice * state.dividendPercentage);
	let shareholderBoost =
		random(0, 2) * state.dividendPercentage * state.shareholderSentimentMultiplier;
	state.shareholderSentiment += shareholderBoost;
	state.shareholderSentiment -= state.debt / state.revenue; //debt/rev reflects how much debt is relative to revenue which makes shareholders anxious
	let shareholderReduction = state.debt / state.revenue;
	endTurnLog.push(
		'Shareholders have taken note of these recent updates and are ' +
			(shareholderBoost > shareholderReduction ? 'bullish' : 'bearish')
	);
	//oil price swings
	let oilPriceSwing: number;
	if (state.quarter < 7) {
		oilPriceSwing = random(-6, 4);
		state.oilPrice += oilPriceSwing;
	} else {
		oilPriceSwing = random(-6, 4);
		state.oilPrice += oilPriceSwing;
	}
	endTurnLog.push('Oil price has swung: ∆$' + oilPriceSwing);
	//oil shock
	let oilShock: number;
	if (chance(15)) {
		if (chance(50)) {
			oilShock = random(state.oilPrice * 1.5, state.oilPrice * 2);
			endTurnLog.push(
				'Oil shock! The price of oil has increased dramatically by $' + oilShock
			);
			state.oilPrice += oilShock;
		} else {
			oilShock = random(state.oilPrice * 0.5, state.oilPrice * 0.75);
			endTurnLog.push('Oil shock! The price of oil has collapsed by $' + oilShock);
			state.oilPrice -= oilShock;
		}
	}
	//round oil price
	state.oilPrice = Math.round(state.oilPrice);
	//pay out interest
	endTurnLog.push('Interest on debt paid: $' + state.debt * state.interestRate);
	state.cash -= state.debt * state.interestRate;
	//handle negative balance
	if (state.cash < 0) {
		endTurnLog.push(
			'You are out of cash! You were forced to take on more debt at unfavorable interest rates to stay afloat.'
		);
		state.debt -= state.cash;
		state.cash = 0;
		state.interestRate += 0.05;
	}
	//event checks
	// fired if less than 50 shareholder sentiment
	if (state.shareholderSentiment <= 50) {
		//end game as fired by the board
		endTurnLog.push(
			'The shareholders are unwilling to put up with your failures any longer. You have been fired by the board!'
		);
	} else if (state.shareholderSentiment > 100) {
		state.shareholderSentiment = 100;
		endTurnLog.push(
			'Shareholders are pleased with your recent performance. They have increased their confidence in your leadership.'
		);
	}
	console.log(endTurnLog);
	await sleep(10000);
	state.quarter += 1;
	resetState();
	state.scene = 4;
}
