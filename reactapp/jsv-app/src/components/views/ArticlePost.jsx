import { ArticleCard } from "../ui-kit/ArticleCard";
import { ArticleSlider } from "../ui-kit/ArticleSlider";
import { CImage } from "../ui-kit/CImage";
import { PrimaryButton } from "../ui-kit/BaseButton";

export function ArticlePost({
	// postTitle,
	// userName,
	// headImage,
	// userProfilePic,
	Article,
	// headingBefore,
	// postTextBefore,
	// postHeadingTextAfter,
}) {
	// const regex = /[^/]+(?=\.js$)/;
	// let altOfProfilePic = userProfilePic.match(regex);
	// let altOfHeadimagePic = headImage.match(regex);

	return (
		<div className='flex flex-col max-w-360 gap-10'>
			<div className='flex gap-8.5'>
				{Article}
				<span className='border border-hr sm:block hidden'></span>
				<aside className='hidden sm:block'>
					<h6 className='mb-13'>Top Articles</h6>
					<ArticleSlider forceCol>
						<ArticleCard
							title='#1'
							userName='Perperzon'
							userProfilePic='/img/articles/article_profile.png'
							headImage='/img/articles/0.png'
							ddMMYear='15 dec, 2022'
						/>
						<ArticleCard
							title='#2'
							userName='Perperzon'
							userProfilePic='/img/articles/article_profile.png'
							headImage='/img/articles/0.png'
							ddMMYear='15 dec, 2022'
						/>
						<ArticleCard
							title='#3'
							userName='Perperzon'
							userProfilePic='/img/articles/article_profile.png'
							headImage='/img/articles/0.png'
							ddMMYear='15 dec, 2022'
						/>
					</ArticleSlider>
				</aside>
			</div>

			<PrimaryButton
				width='w-34 sm:w-43.5 xl:w-61'
				height='h-11 sm:h-14 xl:h-20'
				textValue='Next article'
				icon
			/>
		</div>
	);
}

// import { ArticleCard } from "../ui-kit/ArticleCard";
// import { ArticleSlider } from "../ui-kit/ArticleSlider";
// import { CImage } from "../ui-kit/CImage";
// import { PrimaryButton } from "../ui-kit/BaseButton";

// export function ArticlePost({
// 	postTitle,
// 	userName,
// 	headImage,
// 	userProfilePic,
// 	headingBefore,
// 	postTextBefore,
// 	postHeadingTextAfter,
// }) {
// 	const regex = /[^/]+(?=\.js$)/;
// 	let altOfProfilePic = userProfilePic.match(regex);
// 	let altOfHeadimagePic = headImage.match(regex);

// 	return (
// 		<div className='flex flex-col max-w-360 gap-10'>
// 			<h4>{postTitle}</h4>
// 			<div className='flex gap-3.5'>
// 				<CImage src={userProfilePic} alt={altOfProfilePic} />
// 				<div className='flex flex-col'>
// 					<p>Written By</p>
// 					<h6>{userName}</h6>
// 				</div>
// 			</div>
// 			<div className='hidden sm:block'>
// 				<CImage src={headImage} alt={altOfHeadimagePic} />
// 			</div>
// 			<div className='flex gap-8.5'>
// 				<article className='text-wrap text-justify flex flex-col gap-17'>
// 					<blockquote className='max-h-full md:max-h-338 overflow-y-auto carouselScroll px-3'>
// 						<h5>{headingBefore}</h5>
// 						<br />
// 						{postTextBefore}
// 						<br />
// 						<div className='sm:hidden mt-10'>
// 							<CImage src={headImage} alt={altOfHeadimagePic} />
// 						</div>
// 						{postHeadingTextAfter.map((section) => {
// 							return (
// 								<>
// 									<h5 className='mt-10'>{section.heading}</h5>
// 									<br />
// 									{section.text}
// 									<br />
// 								</>
// 							);
// 						})}
// 					</blockquote>
// 				</article>
// 				<span className='border border-hr sm:block hidden'></span>
// 				<aside className='hidden sm:block'>
// 					<h6 className='mb-13'>Top Articles</h6>
// 					<ArticleSlider forceCol>
// 						<ArticleCard
// 							title='#1'
// 							userName='Perperzon'
// 							userProfilePic='/img/articles/article_profile.png'
// 							headImage='/img/articles/0.png'
// 							ddMMYear='15 dec, 2022'
// 						/>
// 						<ArticleCard
// 							title='#2'
// 							userName='Perperzon'
// 							userProfilePic='/img/articles/article_profile.png'
// 							headImage='/img/articles/0.png'
// 							ddMMYear='15 dec, 2022'
// 						/>
// 						<ArticleCard
// 							title='#3'
// 							userName='Perperzon'
// 							userProfilePic='/img/articles/article_profile.png'
// 							headImage='/img/articles/0.png'
// 							ddMMYear='15 dec, 2022'
// 						/>
// 					</ArticleSlider>
// 				</aside>
// 			</div>
// 			<PrimaryButton
// 				width='w-34 sm:w-43.5 xl:w-61'
// 				height='h-11 sm:h-14 xl:h-20'
// 				textValue='Next article'
// 				icon
// 			/>
// 		</div>
// 	);
// }
