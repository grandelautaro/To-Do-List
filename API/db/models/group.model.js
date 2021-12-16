const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

const Group = mongoose.Model('Group', GroupSchema);
module.exports = {Group}