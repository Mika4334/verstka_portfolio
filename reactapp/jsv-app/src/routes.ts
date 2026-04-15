import {
	type RouteConfig,
	route,
	index,
	layout,
	prefix,
} from "@react-router/dev/routes";

export default [
	route("*", "components/pages/catchall.tsx"),
	layout("components/pages/main_layout.tsx", [
		index("components/pages/home.tsx"),
		route("categories", "components/pages/category_filter.tsx"),
		route("restpreview/:rest_id", "components/pages/restaruant_preview.tsx"),
		route("cart", "components/pages/cart.tsx"),
		route("pricing", "components/pages/pricing.tsx"),
		...prefix("articles", [
			index("components/pages/articles.tsx"),
			layout("components/pages/article_layout.tsx", [
				route(":article_id", "components/pages/article0.tsx"),
			]),
		]),
		route("customer_support", "components/pages/customer_support.tsx"),
	]),
	layout("components/pages/auth_layout.tsx", [
		route("signup", "components/pages/sign_up.tsx"),
		route("signin", "components/pages/sign_in.tsx"),
		route("forgetpassword", "components/pages/forget_password.tsx"),
	]),
] satisfies RouteConfig;
