var mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    identifier:{ type: Number, required: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    password:{type:String,required:true}

});
module.exports = mongoose.model("User", UserSchema);
