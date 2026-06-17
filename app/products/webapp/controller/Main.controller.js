sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("products.controller.Main", {
		onCreateProduct: function () {
			const oModel = this.getView().getModel();
			const oListBinding = oModel.bindList("/Productos");

			oListBinding.create({
				ID: this.byId("inputID").getValue(),
				orderNumber: this.byId("inputOrder").getValue(),
				customer: this.byId("inputCustomer").getValue(),
				status: this.byId("inputStatus").getValue(),
				totalAmount: parseFloat(this.byId("inputImport").getValue())

			});

			this.byId("inputID").setValue("");
			this.byId("inputOrder").setValue("");
			this.byId("inputCustomer").setValue("");
			this.byId("inputStatus").setValue("");
			this.byId("inputImport").setValue("");

			oModel.refresh();

			// Agregar try catch tarea
			// Que no cargue y que de error. 
		}

	});
});
