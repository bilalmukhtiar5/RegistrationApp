const mongoose = require('mongoose')

const registrationSchema = mongoose.Schema({
    name : {
        type : String
    },
    // qk yaha py ya number hy
    contact : {
        type : Number
    },
    gender : {
        type : String
    },
    city : {
        type : String
    },
    education : {
        type : String
    }

}
)

module.exports = mongoose.model('Registration', registrationSchema)