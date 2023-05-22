const { ObjectId } = require('mongoose').Types;
const { User, Thought} = require('../models');

//All functions for user routes
module.exports = {

// Get all user getUsers()
async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

// Get a single user getSingleUser() with thought and friend data
async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

      res.json({
        user,
        thought: await thought(req.params.thoughtId),
        //! also need to return friends and id - not sure how
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
// Post new user createUser()

// Delete student deleteUser()
    // BONUS cascade delete thoughts associated with user

};