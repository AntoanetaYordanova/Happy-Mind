const { verifySession } = require('../services/users');
const { getUser } = require('../storage/storage')

module.exports = () => (req, res, next) => {
    const token = getUser().token;

    try {
        if (token) {
            const userData = verifySession(token);
            req.user = userData;
        }
        next();
    } catch (err) {
        res.status(498).json({ message: 'Invalid access token. Please sign in' });
    }
};