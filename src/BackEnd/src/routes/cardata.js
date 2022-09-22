const express = require('express') 
const Cardata = require('../models/carsdata')
const router = express.Router()

router.use(express.json()) //vai ler as requisições no formato json

// Criar um registro
router.route('/create'). post(async (req, res) => {
    const model = req.body.model;
    const brand = req.body.brand;
    const year = req.body.year;
    const price = req.body.price;
    const image = req.body.image;
    
    const newCardata = new Cardata({
        model,
        brand,
        year,
        price,
        image,
    })

    await newCardata.save();
}) 

// Listar a cardata
router.route('/cardata').get(async (req, res) => {
    Cardata.find()
        .then(foundCardata => res.json(foundCardata))        
})

// Buscar por id
router.route('/cardata/:id').get(async (req, res) => {
    try {
        const id = req.params.id

        const cardata  = await Cardata.findById(id)
        return res.json(cardata) 
    } catch(err) {
        return res.status(404).json({error: true, message: err.message})
    }  
})

// Editar um registro
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const model = req.body.model
        const brand = req.body.brand
        const year = req.body.year
        const price = req.body.price
  
        const cardata = await Cardata.findById(id)

        if (cardata) {
            await cardata.update({
                model,
                brand,
                year,
                price
            })
            return res.status(200).json({error: false})
        }        
    } catch (err) {
        return res.status(404).json({error: true, message: err.message})
    }    
})

// Remover um registro
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const cardata = await Cardata.findById(id)
        
     if (cardata) {
            await cardata.delete()
            return res.status(301).json({error: false})
        }
    } catch (err) {
        return res.status(400).json({error: true, message: err.message})
    }   
})

module.exports = router