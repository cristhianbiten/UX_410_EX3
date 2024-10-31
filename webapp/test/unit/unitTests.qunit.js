/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student28saptraining/diagram/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
