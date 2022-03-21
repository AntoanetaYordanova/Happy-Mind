const { getCommentById } = require('../services/comment');


module.exports = () => async (req, res, next) => {
    const id = req.params.id;
    try {
        const comment = await getCommentById(id);
        res.locals.comment = comment;
        next();
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: 'Record not found' });
    }
};