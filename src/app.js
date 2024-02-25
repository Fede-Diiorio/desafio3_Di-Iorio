const ProductManager = require('./ProductManager');
const manager = new ProductManager('../products.json')
const express = require('express');
const app = express();

const main = async () => {
    const products = await manager.getProducts();
    manager.addProduct('Placa De Video MSI GTX1630', 'Placa de video MSI GTX1630 Ventus 4gb gGDDR6 doble ventilador 1 displayPort 1 HDMI 1 DVI-D XS OC edition. No rquiere alimentación externa.', 200000, './gtx1630.webp', 'abc132', 5);

    app.get('/products', (req, res) => {
        const limitFilter = req.query.limit;

        if (limitFilter) {
            const limit = parseInt(limitFilter);
            const limitedProducts = products.slice(0, limit);
            res.json(limitedProducts);
        } else {
            res.json(products);
        }
    });

    app.listen(3000, () => {
        console.log('Server Listo!');
    });
}

main();