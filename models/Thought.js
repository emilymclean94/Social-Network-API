
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
            //! get: Function to format timestamp
        },
         //! Not sure if correct
        username: [
            {
                type: Schema.Types.String,
                ref: 'User'
            },
        ],
        reactions: [reactionSchema],
    }
)

// TODO: Virtual called reactionCount that retrieves the length of the thought's reactions array field on query.


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
        }
    }
)