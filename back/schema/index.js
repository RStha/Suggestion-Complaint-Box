var mongoose = require('mongoose')
var complaintSchema = mongoose.Schema ({
    userName: String,
    complaint: String,
    createdDate: Date,
    department: String,
    isAnoynmous: Bool = false
})

var complaint = mongoose.model('Complaint', complaintSchema)

var userSchema = mongoose.Schema ({
    userName: String,
    fullName: String,
    email: String,
    password: String,
    department: String
})

var user = mongoose.model('User', userSchema)

module.exports = {
    Complaint: complaint,
    User: user
}