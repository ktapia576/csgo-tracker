const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: '.config.env'});

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});