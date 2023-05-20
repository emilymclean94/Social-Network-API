
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true,
            trimmed: true, //!Check the syntax for this
        },
        email: {
            type: String,
            unique: true,
            required: true,
            //! matching validation for email address
        },
        thoughts: [thoughtSchema], //! references the thought schema in the Thought model
        friends: [
            //* This is a self reference
            {
                type: Schema.Types.ObjectId,
                ref: 'User' 
            }
        ]
    }
)