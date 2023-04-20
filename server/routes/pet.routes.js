const express = require('express')

const { handleCreatePet, handleGetAllPets, handleGetOnePet, handleUpdatePet, handleDeletePet } = require('../controllers/pet.controller')

const router = express.Router()

router.post('/new', handleCreatePet)
router.get('/', handleGetAllPets)
router.get('/:id', handleGetOnePet)
router.put('/edit/:id', handleUpdatePet)
router.delete('/delete/:id', handleDeletePet)

module.exports = { petRouter: router }