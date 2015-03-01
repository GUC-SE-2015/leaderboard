var mongoose = require('mongoose');

var ScoreSchema = new mongoose.Schema({
    modifier: { type: Number, required: true },
    reason: { type: String, required: true },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
});

var TeamSchema = new mongoose.Schema({
    name: { type: String, index: { unique: true }, required: true },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    score: [ScoreSchema]
});

module.exports = mongoose.model('Team', TeamSchema);