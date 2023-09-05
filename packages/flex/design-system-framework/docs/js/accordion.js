const bulmaAccordion = require("../../node_modules/bulma-extensions/bulma-accordion/dist/js/bulma-accordion.min.js")

/**
 * Convention: We choose to use .is-not-attached class to prevents bulmaAccordion to attach to some components
 */
document.addEventListener("DOMContentLoaded", () => {
	var accordions = bulmaAccordion.attach('.accordions:not(.is-not-attached)');
});
