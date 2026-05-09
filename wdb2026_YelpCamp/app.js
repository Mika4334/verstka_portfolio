import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import Campground from "./models/campground";
import mongoose from "mongoose";
import { methodOverride } from "method-override";
import { title } from "process";
import campground from "./models/campground";

// Создаем __dirname для ES модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_m"));

// GET
app.get("/", (req, res) => {
	res.render("home");
});

app.get("/campgrounds", async (req, res) => {
	const campgrounds = await Campground.find({});
	res.render("campgrounds/index", { campgrounds });
});

app.get("/campgrounds/new", async (req, res) => {
	res.render("campgrounds/new");
});

app.get("/campgrounds/:id", async (req, res) => {
	const campground = await Campground.findById(req.params.id);
	res.render("campgrounds/show", { campgrounds });
});

app.get("/campgrounds/:id/edit", async (req, res) => {
	const campground = await Campground.findById(req.params.id);
	res.render("campgrounds/edit");
});

//POST
app.post("/campgrounds", async (req, res) => {
	const campground = new Campground(req.body.campground);
	await campground.save();
	res.redirect(`/campgrounds/${campground.id}`);
});

app.post("/campgrounds/new", (req, res) => {
	const camp = new Campground({
		titlename: "My Back Yard",
		price: 3.99,
		description: "My home backyard",
		location: "World",
	});
	res.render("/campgrounds/new");
});

//PUT
app.put("/campgrounds/:id", async (req, res) => {
	// res.send("worked");
	const { id } = req.params;
	const campground = await Campground.findByIdAndUpdate(id, {
		...req.body.campground,
	});
	res.redirect(`/campgrounds/${campground._id}`);
});

//DELETE
app.delete("/campgrounds/:id", async (req, res) => {
	const { id } = req.params;
	const campground = await Campground.findByIdAndDelete(id);
	res.redirect(`/campgrounds`);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
