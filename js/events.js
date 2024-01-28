import { handleButtonClick } from "./handle-button-click.js";

export function events({
	calculator,
	elements,
	notANumber,
	AlertError,
	resetInput,
}) {
	const { form, submitButton, priceInput, resultElement } = elements;

	form.addEventListener("submit", (event) => {
		event.preventDefault();
	});
	submitButton.addEventListener("click", () =>
		handleButtonClick({
			calculator,
			elements,
			notANumber,
			AlertError,
			resetInput,
		}),
	);
	priceInput.addEventListener("input", () => {
		AlertError.close();
		resetInput(resultElement);
	});
}
