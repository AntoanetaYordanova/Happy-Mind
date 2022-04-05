const router = require('express').Router();
const mapErrors = require('../utils/mapper');
const { create, getAll, getById } = require('../services/therapistProfile');

router.post('/profile', async (req, res) => {
    try {
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            description: req.body.description,
            qualifications: req.body.qualifications,
            phoneNumber: req.body.phoneNumber,
            img: req.body.img
        }
      const result = await create(data);
      res.status(201).json(result);
    } catch (err) {
      console.error(err.message);
      const error = mapErrors(err);
      res.status(400).json({ message: error });
    }
  });

  router.get('/catalog', async function (req, res) {
    const data = await getAll();
    res.json(data);
  });

  router.get('/:id', async (req, res) => {
      const data = await getById( req.params.id);
      res.json(data);
  });

module.exports = router;
