const { model, Schema } = require('mongoose');

const therapistSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    description: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    catogeory: { type: [String], required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'TherapistUser', required: true }
});

const TherapistProfile = new model('TherapistProfile', therapistSchema);

module.exports = TherapistProfile;