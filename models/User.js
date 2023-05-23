const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thought');

//! Not sure if thoughts and friends are correct


// Schema to create user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true,
            trim: true, //*Changed from trimmed to trim - does it work?
        },
        email: {
            type: String,
            unique: true,
            required: true,
            //* matching validation for email address - used mongoose docs for custom validators
            validate: {
                validator: function(v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                },
                message: props => '${props.value} is not a valid email'
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ], 
        friends: [
            //* This is a self reference
            {
                type: Schema.Types.ObjectId,
                ref: 'User' 
            },
        ],
    }
);

const User = model('user', userSchema);

module.exports = User;