const { Schema, model } = require('mongoose');
// const userSchema = require('./User');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(), //! check this
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
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
            get: (date) => {
                if (date) return date.toISOString().split("T")[0];
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
    }
)


//! Not sure if this is doing what I need it to do
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
