const { ObjectId } = require('mongoose').Types;
const { User, Thought} = require('../models');

module.exports = {

// Get all thoughts
async getThought(req, res) {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};