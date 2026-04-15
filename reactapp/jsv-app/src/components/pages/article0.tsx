import type { Route } from "./+types/home";
import { ArticleView } from "../views/ArticleView";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Article" },
		{ name: "Article", content: "Article content" },
	];
}

export default function Article0() {
	return (
		<ArticleView
			postTitle='How To Order Food On eatly&nbsp;?'
			headImage='/img/articles/head_image.png'
			userName='Username'
			userProfilePic='/img/articles/article_profile.png'
			headingBefore='Browse restaurants and menus'
			postTextBefore={`Once you're logged in, you can browse through the list of available restaurants on the Eatly website.
                                You can filter by cuisine, price, and distance to find the perfect restaurant for your needs.
                                Click on a restaurant to view its menu. Once yore logged in, you can browse through the list of available restaurants on the Eatly website.
                                You can filter by cuisine, price, and distance.
                                • It was popularized in the 1960s with the release
                                • Lorem Ipsum passages, and more recently `}
			postHeadingTextAfter={[
				{
					heading: "Select your items",
					text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
				},
				{
					heading: "Place your order",
					text: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ',
				},
				{
					heading: "Third part heading",
					text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
				},
			]}
		/>
	);
}
