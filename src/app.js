const ProductManager = require('./ProductManager');

const express = require('express');
const app = express();

const main = async () => {
    const manager = new ProductManager('../products.json')
    const products = await manager.getProducts();

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

    app.get('/products/:id', async (req, res) => {
        const productId = parseInt(req.params.id);
        const product = await manager.getProductById(productId);
        product ? res.json(product) : res.json('El producto no existe');
    })

    app.listen(8080, () => {
        console.log('Server Listo!');
    });
}

main();