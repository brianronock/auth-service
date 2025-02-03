import { Schema, model } from "mongoose";
import pkg from "bcryptjs";
const { genSalt, hash, compare } = pkg;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        //trim: true,
    },
}, {
    timestamps: true,
});

// Pre-save middleware to hash the password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
});

// Method to compare the entered password with the hashed password in the database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await compare(enteredPassword, this.password);
};

export default model("User", userSchema);