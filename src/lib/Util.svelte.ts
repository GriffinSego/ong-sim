/**
 * Async delay using Promise
 * @param ms Delay duration in milliseconds
 */
export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const value = {
	thousand: 1e3,
	million: 1e6,
	billion: 1e9,
	trillion: 1e12,
	quadrillion: 1e15,
	quintillion: 1e18,
	sextillion: 1e21,
	septillion: 1e24,
};

/**
 * Format number with magnitude suffix (K, M, B, T)
 * @param num Number to format
 * @param precision Decimal places to keep
 */
export function formatHumanReadableNumber(num: number, precision: number = 1): string {
	const magnitudes = [
		{ threshold: 1e12, suffix: 'T' },
		{ threshold: 1e9, suffix: 'B' },
		{ threshold: 1e6, suffix: 'M' },
		{ threshold: 1e3, suffix: 'K' },
	];

	for (const { threshold, suffix } of magnitudes) {
		if (Math.abs(num) >= threshold) {
			return `${(num / threshold).toFixed(precision).replace(/\.?0+$/, '')}${suffix}`;
		}
	}
	if (Math.abs(num) > 1 || num % 1 === 0) {
		//remove decimal places from numbers > 1 or whole numbers
		return Math.round(num).toString();
	} else {
		return num.toFixed(precision);
	}
}

/**
 * Convert month number (1-12) to English month name
 * @param month Numeric month (1-12)
 */
export function intToMonth(month: number): string {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	return months[month - 1];
}

export function numberToSuffix(num: number): string {
	const lastDigit: number = parseInt(num.toString()[num.toString().length - 1]);
	return ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'][lastDigit];
}
export function get_pt(): number {
	return parseInt(localStorage.getItem('playthroughs') ?? '0');
}
export function inc_pt(): number {
	localStorage.setItem('playthroughs', '' + get_pt() + 1);
	return get_pt();
}
export function get_hs(): number {
	return parseInt(localStorage.getItem('highscore') ?? '0');
}
export function set_hs(score: number): number {
	localStorage.setItem('highscore', '' + get_hs() + 1);
	return get_hs();
}
