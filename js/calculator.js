export function Calculator() {
	function formatDivisor(divisor) {
		const splittedDivisor = Number(divisor.split("|").splice(1, 1));
		return splittedDivisor;
	}

	function calculate(price, installmentsFloat) {
		const fees = (Number(price) * installmentsFloat) / 100;
		const result = (Number(price) + fees).toFixed(2);
		return result;
	}

	function showResult(result, element, divisor) {
		const installmentPrice = result / divisor;

		element.textContent = `${divisor}x de R$${installmentPrice
			.toFixed(2)
			.replace(".", ",")} (Total: R$${result.replace(".", ",")}) `;
	}

	return {
		formatDivisor,
		calculate,
		showResult,
	};
}
