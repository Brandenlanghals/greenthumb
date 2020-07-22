const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema ({
    eventName: {
        type: String
    },
    location: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    eventDetails: {
        type: String
    }
    // cityApproval: {
    //     type: Boolean,
    //     default: false
    // },
});
const Event = mongoose.model ('Event', EventSchema);
module.exports = Event;