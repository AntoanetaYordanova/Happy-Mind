const { model, Schema } = require('mongoose');

const commentSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    therapist: { type: Schema.Types.ObjectId, ref: 'TherapistUser', required: true }
});

const Comment = new model('Comment', commentSchema);

module.exports = Comment;