const TherapistProfile = require('../models/TherapistProfile')


async function getAll() {
    return TherapistProfile.find({});
}

async function create(data) {
    const result = new TherapistProfile(data);
    await result.save();

    return result;
}

function getById(id) {
    return TherapistProfile.findById(id);
}

async function update(id, data) {
    const existing = await TherapistProfile.findById(id);

    existing.title = data.title;
    existing.description = data.description;
    existing.source = data.source;

    await existing.save();

    return existing;
}

async function deleteById(id) {
    await TherapistProfile.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById
};