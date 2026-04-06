import {
	type RouteConfig,
	route,
	index,
	layout,
	prefix,
} from "@react-router/dev/routes";

// LAYOUT
// 		header>navbar
//		<Outlet>
//		footer
// category_filter
// restaruant_preview/:id
// cart
// pricing
// articles
// /:article_id
// customer_support
// sign_up
// sign_in
// forget_password

export default [
	route("*", "components/pages/catchall.tsx"),
	layout("components/pages/layout.tsx", [
		index("components/pages/home.tsx"),
		route("categories", "components/pages/category_filter.tsx"),
		route("restpreview/:rest_id", "components/pages/restaruant_preview.tsx"),
		// route("cart", "components/pages/cart.tsx"),
		// route("pricing", "components/pages/pricing.tsx"),
		// ...prefix("articles", [
		// 	index("components/pages/aarticles.tsx"),
		// 	route(":article_id", "components/pages/article0.tsx"),
		// 	route(":article_id", "components/pages/article1.tsx"),
		// ]),
		// route("customer_support", "components/pages/customer_support.tsx"),
		// route("sign_up", "components/pages/sign_up.tsx"),
		// route("sign_in", "components/pages/sign_in.tsx"),
		// route("forget_password", "components/pages/forget_password.tsx"),
	]),
] satisfies RouteConfig;
