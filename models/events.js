const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema ({
    eventName: {
        type: String
    },
    address: {
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
    // cityApproval: {
    //     type: Boolean,
    //     default: false
    // },
});
const Event = mongoose.model ('Event', EventSchema);
module.exports = Event;