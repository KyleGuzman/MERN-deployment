const { Pet } = require('../models/pet.model')

const handleCreatePet = (req, res) => {
    Pet.create(req.body)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const handleGetAllPets = (req, res) => {
    Pet.find()
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const handleGetOnePet = (req, res) => {
    Pet.findById(req.params.id)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const handleUpdatePet = (req, res) => {
    Pet.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true
    })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const handleDeletePet = (req, res) => {
    Pet.findByIdAndDelete(req.params.id)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

module.exports = { handleCreatePet, handleGetAllPets, handleGetOnePet, handleUpdatePet, handleDeletePet }