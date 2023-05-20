
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
            //get: Function to format timestamp
        },
        username: [userSchema],
        //! Not sure if correct - think I need to use a type/ref array thing
        reactions: [reactionSchema],
    }
)

// TODO: Virtual called reactionCount that retrieves the length of the thought's reactions array field on query.


// TODO: reactionSchema = subdocument
