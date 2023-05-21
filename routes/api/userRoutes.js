const router = require('express').Router();

//! All associated functions listed in the curly brackets
const {
    getUsers,
    createUser,
    getSingleUser,
    deleteUser,
    addFriend,
    removeFriend,
 } = require('../../controllers/userController');

//* for the api/users

//? Get all users
router.route('/').get(getUsers).post(createUser);

//? Get single user by id and the thought and friend data
router.route('/:userId').get(getSingleUser).delete(deleteUser);

//? Post a new user

//? Put to update a user by ID

//? Delete to remove a user by ID
    //? BONUS remove the user's associated thoughts when deleted


//* for the /api/users/:userId/friends/:friendId

//? post to add a new friend to user's friend list addFriend()
 //! adding friend to user - look at mini project example

//? delete to remove friend from a user's friend list deleteFriend()

module.exports = router;