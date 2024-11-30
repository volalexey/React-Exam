const express = require('express');

const plantRouter = require('./routes/plant');

const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const sequelize = require('./config/database');

const app = express();

let corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

(async () => {
    try {
        await sequelize.sync()
        console.log('Db synchronization successful')
    }
    catch(err) {
        console.log('Db synchronization error: ', err)
    }
})();

app.use('/plants', plantRouter);

app.get('/', (req, res) => {
    res.end("All is OK")
});

const port = 7000
app.listen(port, () => console.log(`Server started on port ${port}`))