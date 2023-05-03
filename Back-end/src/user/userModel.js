var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var schema2 = mongoose.Schema;
var userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);
// module.exports = mongoose.model('userdata',signupSchema);