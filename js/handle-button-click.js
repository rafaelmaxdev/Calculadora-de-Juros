export function handleButtonClick({
	calculator,
	elements,
	notANumber,
	AlertError,
}) {
	const { priceInput, resultElement, installments } = elements;

	const price = priceInput.value;
	const selectedDivisor = document.querySelector("select").value;

	try {
		if (notANumber(price)) {
			AlertError.open();
			return;
		}

		const installmentsFloat = parseFloat(installments.value);
		const formattedDivisor = calculator.formatDivisor(selectedDivisor);
		const result = calculator.calculate(price, installmentsFloat);
		calculator.showResult(result, resultElement, formattedDivisor);
	} catch (error) {
		resetInput(resultElement);
	}
}
