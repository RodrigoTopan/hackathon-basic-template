import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

UserSchema.methods = {
    checkPassword(password) {
        return bcrypt.compare(password, this.password);
    },
};

UserSchema.pre("save", async function generatePasswordHash(next) {
    // hash the password using our new salt
    this.password = await bcrypt.hash(this.password, 8);
    next();
});

export default model("User", UserSchema);
