const Article = require('../models/Article')


async function getAll() {
    return Article.find({});
}

async function create(article) {
    const result = new Article(article);
    await result.save();

    return result;
}

function getById(id) {
    return Article.findById(id);
}

async function update(id, article) {
    const existing = await Article.findById(id);

    existing.title = Article.title;
    existing.description = Article.description;
    existing.source = Article.source;

    await existing.save();

    return existing;
}

async function deleteById(id) {
    await Article.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById
};