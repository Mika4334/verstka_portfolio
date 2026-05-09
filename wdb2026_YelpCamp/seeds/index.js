import Campground from "../models/campground";
import mongoose from "mongoose";
import cities from "./cities";
import { descriptors } from "./seedHelpers";

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("DataBase CONNECTED");
});

function rng(n) {
	return Math.floor(Math.random() * n);
}

const sample = (array) => array[rng(array.length)];

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 50; i++) {
		const random1k = rng(1000);
		const randomPrice = rng(20);
		new Campground({
			titlename: `${sample(descriptors)} ${sample(places)}`,
			price: `${randomPrice}`,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum facilis sapiente expedita nemo. Aspernatur, minus, id esse voluptatem vero amet autem doloremque maxime corporis nam officiis ullam quod!",
			location: `${cities[random1k].city}, ${cities[random1k].state}`,
		});
	}

	// Check db connection here / add 1 record in db
	// const c = new Campground({
	// 	titlename: "My Back Yard",
	// 	price: 3.99,
	// 	description: "My home backyard",
	// 	location: "World",
	// });
	// await c.save();
};

seedDB().then(() => {
	mongoose.connection.close();
});
