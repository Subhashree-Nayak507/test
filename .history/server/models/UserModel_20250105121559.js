import mongoose from "mongoose";
import bcrypt from 'bcryptjs';


const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    Password:{
        type:String,
        required:true,
    }
},
{ timestamps:true}
);

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User",UserSchema);
export default User;