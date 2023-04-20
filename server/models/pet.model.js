const mongoose = require('mongoose')

const petSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is required"],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters']
        },
        type: {
            type: String,
            required: [true, "{PATH} is required"],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters']
        },
        description: {
            type: String,
            required: [true, "{PATH} is required"],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters']
        },
        skillOne: {
            type: String
        },
        skillTwo: {
            type: String
        },
        skillThree: {
            type: String
        },
    },
    { timestamps: true }
)

petSchema.path('name').validate(async (name) => {
    const nameCount = await mongoose.models.Pet.countDocuments({ name })
    return !nameCount
}, 'name already exists')


const Pet = mongoose.model('Pet', petSchema)

module.exports = { Pet }