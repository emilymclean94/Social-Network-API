const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

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

    // Get a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create thought
    //! Need to push this to user's thoughts array field somehow
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
    //         const user = await User.findOneAndUpdate(
    //     { _id: req.params.userId },
    //     { $addToSet: { thoughts: req.params.thoughtId } },
    //     { runValidators: true, new: true }
    //   );

            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Delete thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }

            await Student.deleteMany({ _id: { $in: thought.students } });
            res.json({ message: 'thought and students deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

};