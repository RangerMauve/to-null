"use strict";
module.exports = toNull;

function toNull(value) {
	if (value === false || value === (void 0) || Number.isNaN(value))
		return null;
	return value;
}
