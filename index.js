const express = require('express');
const cors = require('cors');
const { DB } = require('./config/database');
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.json());

//DB Connection
DB();

//CORS
const dominiosPermitidos = ['http://localhost:3000']
const corsOption = {
    origin: (origin, callback) => {
        if (dominiosPermitidos.indexOf(origin) !== -1) {
            //El origen del request esta permitido
            callback(null, true)
        }else {
            callback(new Error("No permitido por CORS"))
        }
        
    }
}

app.use(cors());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/media', require('./routes/mediaRoutes'));

app.listen(process.env.API_PORT, () => console.log("Welcome, Listen port: " + process.env.API_PORT));