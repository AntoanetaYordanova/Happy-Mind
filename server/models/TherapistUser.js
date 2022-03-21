const { model, Schema } = require('mongoose');

const therapistSchema = new Schema({
    email: { type: String, required: [true, 'Email is required'] },
    hashedPassword: { type: String, required: true }
});


therapistSchema.index({ email: 1}, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const TherapistUser = new model('TherapistUser', therapistSchema);

module.exports = TherapistUser;