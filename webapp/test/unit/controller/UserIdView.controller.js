/*global QUnit*/

sap.ui.define([
	"test/controller/UserIdView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("UserIdView Controller");

	QUnit.test("I should test the UserIdView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
