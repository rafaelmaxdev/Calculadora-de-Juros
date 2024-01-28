export function notANumber(value) {
	return Number.isNaN(value) || value === "";
}

export function resetInput(resultElement) {
	resultElement.textContent = "";
}
