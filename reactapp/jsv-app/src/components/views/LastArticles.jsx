import { H2 } from "../ui-kit/H2";
import { ArticleCard } from "../ui-kit/ArticleCard";
import { ArticleSlider } from "../ui-kit/ArticleSlider";

// export function LastArticles({ allArticles=undefined }) {
export function LastArticles() {
	let allArticles = Array.from({ length: 15 }).map((_, index) => (
		<ArticleCard
			key={`articelCardID ${index}`}
			title={`#${index}`}
			userName='Perperzon'
			userProfilePic='/img/articles/article_profile.png'
			headImage='/img/articles/0.png'
			ddMMYear='15 dec, 2022'
		/>
	));
	return (
		<>
			<H2 beforeText='Latest ' spanText='Articles ' />
			<section className='flex flex-col items-center overflow-y-hidden '>
				<ArticleSlider showButton>{allArticles}</ArticleSlider>
			</section>
		</>
	);
}
