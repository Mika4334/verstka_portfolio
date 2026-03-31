import {
	type RouteConfig,
	route,
	index,
	layout,
	prefix,
} from "@react-router/dev/routes";

export default [
	route("*", "components/pages/catchall.tsx"),

	index("components/pages/home.tsx"),
	route("cart", "components/pages/cart.tsx"),
	// route("teams/:teamId", "./home.tsx"),
	// index("./components/views/Cart.jsx"),
	// route("about", "./about.jsx"),

	// layout("./auth/layout.jsx", [
	// 	route("login", "./auth/login.jsx"),
	// 	route("register", "./auth/register.jsx"),
	// ]),

	// ...prefix("concerts", [
	// 	index("./concerts/home.jsx"),
	// 	route(":city", "./concerts/city.jsx"),
	// 	route("trending", "./concerts/trending.jsx"),
	// ]),
] satisfies RouteConfig;
