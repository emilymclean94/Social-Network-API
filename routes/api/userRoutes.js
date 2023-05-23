const router = require('express').Router();

//! All associated functions listed in the curly brackets
const {
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
 } = require('../../controllers/userController');

//* for the api/users

//? Get all users and create new user
router.route('/').get(getUsers).post(createUser);

//? Get single user by id and the thought and friend data
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser); //! cascade delete to thoughts


//? add and delete friends
//! double check these with controllers
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);



module.exports = router;