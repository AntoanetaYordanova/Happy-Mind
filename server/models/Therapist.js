const { model, Schema } = require('mongoose');

const therapistSchema = new Schema({
    email: { type: String, required: [true, 'Email is required'] },
    hashedPassword: { type: String, required: true },
    comments : { type : [Schema.Types.ObjectId], ref : 'Comment', default : []}
});


therapistSchema.index({ email: 1}, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const Therapist = new model('Therapist', therapistSchema);

module.exports = Therapist;