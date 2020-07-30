const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema ({
    eventName: {
        type: String
    },
    eventLocation: {
        type: String
    },
    eventDate: {
        type: Date,
        default: Date.now
    },
    startTime: {
        type: String
    },
    eventDetails: {
        type: String
    }
});
const Event = mongoose.model ('Event', EventSchema);
module.exports = Event;