const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

require('dotenv').config();

// ***** Conexion DB *****

// ***** settings *****
app.set('port', process.env.PORT_BACKEND);
app.set('json spaces', 2);
app.use(morgan('dev')); // print console log
app.use(express.json()); // to understand json format
app.use(express.urlencoded({extended: false})); // to understand data from a form
app.use(cors());

// ***** routes *****
app.use(require('./routes/players.routes'));
app.use(require('./routes/games.routes'));
app.use(require('./routes/ranked.routes'));
app.use(require('./routes/ranking.routes'));
app.use(require('./routes/auth.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
}); 