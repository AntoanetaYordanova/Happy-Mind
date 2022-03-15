const { getById } = require('../services/article');


module.exports = () => async (req, res, next) => {
    const id = req.params.id;
    try {
        const article = await getById(id).lean();
        res.locals.article = article;
        next();
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: 'Record not found' });
    }
};