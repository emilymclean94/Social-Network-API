const { Schema, model } = require('mongoose');
const userSchema = require('./User');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //! get: Function to format timestamp - from stack overflow, not sure if right
            get: (date) => {
                if (date) return date.toISOString().split("T")[0];
            },
        },
        //! Not sure if correct
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        ],
        reactions: [reactionSchema],
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
    }
)

// TODO: Virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
//! Not sure if this is doing what I need it to do
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });


// TODO: reactionSchema = subdocument

const reactionSchema = new Schema(
    {
        reactionId: {
            type: ObjectId,
            default: new ObjectId, //! check this
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: [
            {
                type: Schema.Types.String,
                ref: 'User'
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
            //! get: Function to format timestamp
            get: (date) => {
                if (date) return date.toISOString().split("T")[0];
            },
        },
    },
    {
        timestamps: true,
        toJSON: { getters: true },
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
