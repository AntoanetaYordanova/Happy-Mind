const { model, Schema } = require('mongoose');

const articleSchema = new Schema({
    title: { type: String, required: [true, 'Title is required'] },
    content: { type: [{}], required: [true, 'Content is required'] },
    shortDescription: {type : String, required : true},
    source: { type : String, required : [true, 'Source is required']},
    image: { type : String, required : true },
    category : { type : String, required : true }
});

const Article = new model('Article', articleSchema);

module.exports = Article;