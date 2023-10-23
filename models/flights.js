const dateFns = require('date-fns');
const mongoose = require('mongoose');

const date = Date.now();
const newDate = dateFns.addYears(date, 1);

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American','Southwest','United', 'Spirit']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightno: Number,
    departs: {
        type: Date,
        default: newDate
    }
})

module.exports = mongoose.model('Flight', flightSchema);