require('dotenv').config();
const express = require("express");
const cors = require('cors')
const port = process.env.API_PORT;
const { petRouter } = require('./routes/pet.routes');


require("./config/mongoose.config");

const app = express();
app.use(cors())

app.use(express.json());
app.use('/api/pets', petRouter)


app.listen(port, () => console.log(`Listening on port: ${port}`));