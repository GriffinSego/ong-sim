/**
 * Async delay using Promise
 * @param ms Delay duration in milliseconds
 */
export const sleep = (ms: number): Promise<void> => {
	return new Promise(resolve => setTimeout(resolve, ms));
}