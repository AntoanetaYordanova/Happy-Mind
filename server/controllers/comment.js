const { isAuth, isOwner } = require('../middlewares/guards');
const preloadComment = require('../middlewares/preloadComment');
const commentApi = require('../services/comment');
const router = require('express').Router();
const mapErrors = require('../utils/mapper');
const { getUser } = require('../storage/storage')

router.post('/therapists/:id/comments', async (req, res) => {
  const author = getUser()._id;
  const therapist = req.params.id;
  const comment = {
    content: req.body.content,
    author,
    therapist
  };

  try {
    const result = await commentApi.create(comment);
    res.status(201).json(result);
  } catch (err) {
    console.error(err.message);
    const error = mapErrors(err);
    res.status(400).json({ message: error });
  }
});

router.get('/therapists/:id/comments', async (req, res) => {
  try {
    const result = await commentApi.getCommentByTherapist(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    const error = mapErrors(err);
    res.status(400).json({ message: error });
  }
});

router.get('/user/user-comments', isAuth(), async (req, res) => {
  try {
    const result = await commentApi.getCommentByUser(req.user._id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    const error = mapErrors(err);
    res.status(400).json({ message: error });
  }
});

router.put('/therapists/comments/:id', preloadComment(), isOwner(), async (req, res) => {
    const userId = req.user._id;
    const commentId = req.params.id;
    const comment = {
        content: req.body.content   
    };

    try {
        const result = await commentApi.update(comment, commentId, userId);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.delete('/therapists/comments/:id/', async (req, res) => {
  try {
    const commentId = req.params.id;
    await commentApi.deleteComment(commentId);
    res.status(204).end();
} catch (err) {
    console.error(err.message);
    const error = mapErrors(err);
    res.status(400).json({ message: error });
}
});

module.exports = router;
