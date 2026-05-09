import { defaults, string } from "joi";
import { mongoose, Schema } from "mongoose";

const CampgroundSchema = new Schema({
	titlename: String,
	price: String,
	description: String,
	location: String,
});

export default mongoose.model("Campground", CampgroundSchema);
