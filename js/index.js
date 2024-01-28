import { events } from "./events.js";
import { Calculator } from "./calculator.js";
import { elements } from "./elements.js";
import { notANumber, resetInput } from "./utils.js";
import { AlertError } from "./alert-error.js";

const calculator = Calculator();

events({ calculator, elements, notANumber, AlertError, resetInput });
