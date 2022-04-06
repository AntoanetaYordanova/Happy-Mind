const express = require('express');
const mongoose = require('mongoose');

const corsFr = require('cors');
const cors = require('./middlewares/cors');
const catalogController = require('./controllers/catalog');
const usersController = require('./controllers/users');
// const therapistController = require('./controllers/therapists');
const therapistProfileController = require('./controllers/therapistProfle');
const commentController = require('./controllers/comment');
const auth = require('./middlewares/auth');
const { connectionKey } = require('../../DBK/key');

start();

async function start() {
    try {
        await mongoose.connect(connectionKey, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database ready');
    } catch (err) {
        console.error('Database connection failed');
        process.exit(1);
    }

    const app = express();
    app.use(express.json());
    app.use(corsFr({
        origin:  ['http://localhost:3030', 'http://localhost:4200'],
        credentials: true
    }));
    // app.use(cors());
    app.use(auth());
    app.use('/articles', catalogController);
    app.use('/users', usersController);
    // app.use('/therapists', therapistController);
    app.use('/therapists', therapistProfileController);
    app.use(commentController);

    app.get('/', (req, res) => res.json({ message: 'REST service operational'}));

    app.listen(3030, () => console.log('REST service started on port 3030'));
}