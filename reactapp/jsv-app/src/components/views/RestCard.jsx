import { Badge } from "../ui-kit/Badge";
import { Stars } from "../ui-kit/Stars";
import { Bookmark } from "../ui-kit/Bookmark";
import { BGImage } from "../ui-kit/BGImage";

export function RestCard({
	w,
	h,
	srcImg,
	imgH = "h-44",
	alt,
	href = "#",
	badgeHide,
	badgeText,
	badgeColor,
	restPreview = false,
}) {
	return (
		<div
			className={`${w} ${h} flex flex-col justify-between bg-white rounded-4xl overflow-hidden max-w-full h-min-300 shadow-[0_40px_35px_rgba(0,0,0,0.25)]`}
		>
			<BGImage src={srcImg} alt={alt} cover width='w-full' height={imgH} />
			<div
				className={`flex ${restPreview ? "justify-around" : "justify-between"} pl-6.75 pr-5.25 pb-3.25 pt-2 lg:pl-8.5 lg:pr-6.5 lg:pb-3`}
			>
				<div
					className={`flex ${restPreview ? "flex-row gap-40" : "flex-col gap-3 "}`}
				>
					<Badge
						textValue={badgeText}
						badgeColor={badgeColor}
						hide={badgeHide}
					/>
					<h6 className='text-[30px]!'>The Chicken King</h6>
					<div className='flex items-center gap-1.5'>
						<p>24min •</p>
						<Stars starsQty='1' width='w-5' overlayColor='var(--color-pm)' />
						<p>4.8</p>
					</div>
				</div>
				<a href={href} className='self-end'>
					<Bookmark
						h='h-10'
						w='w-10'
						imgW='w-4!'
						src='/svg/bookmark.svg'
						alt='bookmark'
					/>
				</a>
			</div>
		</div>
	);
}
