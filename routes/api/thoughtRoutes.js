const router = require('express').Router();

//! All associated functions listed in the curly brackets
const {
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
 } = require('../../controllers/thoughtController');

//? Get all thoughts
//? Post to create new thought (push created thought's id to associated user's thoughts array field)
router.route('/').get(getThought).post(createThought);

//? Get a single thought by ID
//? Put to update a thought by id
//? Delete to remove a thought by id
router.route('/:thoughtId')
.get(getSingleThought)
.delete(deleteThought)
.put(updateThought);


module.exports = router;