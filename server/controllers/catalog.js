const router = require('express').Router();
const api = require('../services/article');
const mapErrors = require('../utils/mapper');
const preload = require('../middlewares/preload');


router.get('/', async (req, res) => {
    // console.log(req.user);
    const data = await api.getAll();
    res.json(data);
});

router.post('/', async (req, res) => {
    const article = {
        title: req.body.title,
        content: req.body.content,
        shortDescription: req.body.shortDescription,
        source: req.body.source,
        image: req.body.image,
        category: req.body.category
    };

    try {
        const result = await api.create(article);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/:id', preload(), (req, res) => {
    const article = res.locals.article;
    res.json(article);
});

router.put('/:id', preload(), async (req, res) => {
    const articleId = req.params.id;
    const article = {
        title: req.body.title,
        content: req.body.content,
        shortDescription: req.body.shortDescription,
        source: req.body.source,
        image: req.body.image,
        category: req.body.category
    };

    try {
        const result = await api.update(articleId, article);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.delete('/:id', preload(), async (req, res) => {
    try {
        const articleId = req.params.id;
        await api.deleteById(articleId);
        res.status(204).end();
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

module.exports = router;