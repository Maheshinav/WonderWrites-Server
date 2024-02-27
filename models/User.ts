import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
	username: string;
	password: string;
	email: string;
	 birthDate: Date;
	country: string;
}

const userSchema: Schema<IUser> = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
birthDate: { type: Date, required: true },
	country: { type: String, required: true }
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
