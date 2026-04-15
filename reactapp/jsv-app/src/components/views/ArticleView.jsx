import { Fragment } from "react/jsx-runtime";
import { CImage } from "../ui-kit/CImage.jsx";

export function ArticleView({
	postTitle,
	userProfilePic,
	userName,
	headImage,
	headingBefore,
	postTextBefore,
	postHeadingTextAfter,
}) {
	const regex = /[^/]+(?=\.js$)/;
	let altOfProfilePic = userProfilePic.match(regex);
	let altOfHeadimagePic = headImage.match(regex);
	return (
		<div className='flex flex-col gap-8'>
			<h4>{postTitle}</h4>
			<div className='flex gap-3.5'>
				<CImage src={userProfilePic} alt={altOfProfilePic} />
				<div className='flex flex-col'>
					<p>Written By</p>
					<h6>{userName}</h6>
				</div>
			</div>
			<div className='hidden sm:block'>
				<CImage src={headImage} alt={altOfHeadimagePic} />
			</div>
			<article className='text-wrap text-justify flex flex-col gap-17'>
				<blockquote className='max-h-full md:max-h-338 overflow-y-auto carouselScroll px-3'>
					<h5>{headingBefore}</h5>
					<br />
					{postTextBefore}
					<br />
					<div className='sm:hidden mt-10'>
						<CImage src={headImage} alt={altOfHeadimagePic} />
					</div>
					{postHeadingTextAfter.map((section, index) => (
						<Fragment key={index}>
							<h5 className='mt-10'>{section.heading}</h5>
							<br />
							{section.text}
							<br />
						</Fragment>
					))}
				</blockquote>
			</article>
		</div>
	);
}
