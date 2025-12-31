const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    image:String
})
module.exports = mongoose.model('user', userSchema);