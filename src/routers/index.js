const express = require('express');
const router = express.Router();
const model = require('../models/datos')();
const Venta = require('../models/datos');

router.get('/', async (req, res) =>{
    const datos = await Venta.find();
    console.log(datos);
    res.render('index.ejs',{
        datos
    });
});

module.exports = router;