sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: products",
		defaults: {
			page: "ui5://test-resources/products/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "products/",
				never: "test-resources/products/"
			},
			loader: {
				paths: {
					"products": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for products"
			},
			"integration/opaTests": {
				title: "Integration tests for products"
			}
		}
	};
});
