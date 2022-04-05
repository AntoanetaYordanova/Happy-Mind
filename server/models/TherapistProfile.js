const { model, Schema } = require('mongoose');

const therapistSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    description: { type: String, required: true },
    qualifications: { type: [], required: true},
    phoneNumber: { type: String, required: true },
    img: { type: String, required: true }
});

const TherapistProfile = new model('TherapistProfile', therapistSchema);

module.exports = TherapistProfile;