const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const catalogController = require('./controllers/catalog');
const usersController = require('./controllers/users');
const therapistProfileController = require('./controllers/therapistProfle');
const commentController = require('./controllers/comment');
const auth = require('./middlewares/auth');
const connectionKey = 'mongodb+srv://happy-mind:fr4v163NCwLQicb0@happy-mind.o62oc.mongodb.net/happy-mind?retryWrites=true';

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
    app.use(cors({
        origin:  ['http://localhost:3030', 'http://localhost:4200'],
        credentials: true
    }));
    app.use(cookieParser('wtkj.C~-7rz7SCA@m9i=H9pffD'));
    app.use(auth());
    app.use('/articles', catalogController);
    app.use('/users', usersController);
    app.use('/therapists', therapistProfileController);
    app.use(commentController);

    app.get('/', (req, res) => res.json({ message: 'REST service operational'}));

    app.listen(3030, () => console.log('REST service started on port 3030'));
}