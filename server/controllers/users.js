const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { register, login, logout, getUsersArticles, removeUserArticle } = require('../services/users');
const mapErrors = require('../utils/mapper');
const { setUser, getUser, clearUser } = require('../storage/storage');
const storage = require('../storage/storage');

router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password.trim() == '' || req.body.email.trim() == '') {
            throw new Error('Email and password are required');
        }

        const result = await register(req.body.email.trim().toLowerCase(), req.body.password.trim());
        setUser(result);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        const result = await login(req.body.email.trim().toLowerCase(), req.body.password.trim());
        setUser(result);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/logout', (req, res) => {
    clearUser();
    logout(getUser().accessToken);
    res.status(204).end();
});

router.get('/articles', async (req, res) => {
    const userId = getUser()._id;
    const user = await getUsersArticles(userId);
    res.json(user);
    res.status(400);
});

router.delete('/articles/:id', async (req, res) => {
    try {
        const userId = storage.getUser()._id;
        const articleId = req.params.id;
        await removeUserArticle(userId, articleId);
        res.status(204).end();
      } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
      } 
});

module.exports = router;