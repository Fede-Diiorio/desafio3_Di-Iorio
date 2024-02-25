const ProductManager = require('./ProductManager');
const manager = new ProductManager('../products.json')
const express = require('express');
const app = express();

const main = async () => {
    console.log(await manager.getProducts());
}

main();
