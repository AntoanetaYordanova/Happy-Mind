const Comment = require('../models/Comment');

async function create(data) {
    const result = new Comment(data);
    await result.save();
    return result;
}

async function getCommentByTherapist(id){
    const result = await Comment.find({'therapist' : id}).populate('author');
    return result
}

async function getCommentByUser(id){
    const result = await Comment.find({'author' : id});
    return result
}

async function getCommentById(id) {
    const result = await Comment.findOne({'_id' : id});
    return result
}

async function update(data, commentId){
    const existing = await Comment.findOne({ '_id' : commentId });

    existing.content = data.content;
    await existing.save();
    return existing;
}

async function deleteComment(commentId) {
    await Comment.findByIdAndDelete({ '_id' : commentId });
}

module.exports = {
    getCommentByTherapist,
    getCommentByUser,
    create,
    update,
    deleteComment,
    getCommentById
};