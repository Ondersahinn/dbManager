var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customeSchema = new Schema({
    name: String,
    city:  String
})
var Customer =mongoose.model('Customer',customeSchema)

module.exports = Customer