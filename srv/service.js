const cds = require('@sap/cds');

module.exports = cds.service.impl(async function name() {
    this.before('CREATE', 'Productos', async (req) => {
        console.log('Creando pedido:', req.data);

        if (!req.data.orderNumber) {
            req.error(400, 'El número de pedido es obligatorio');
        }
    });

});