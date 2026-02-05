import { CImage } from '../ui-kit/CImage';

export function ArticleCard({ title, headImage, userProfilePic, userName, ddMMYear }) {
    const regex = /[^/]+(?=\.js$)/;
    let altOfProfilePic = userProfilePic.match(regex)
    let altOfHeadImage = headImage.match(regex)
    return (
        <div className='min-w-66.5 max-h-94 xl:w-87 xl:h-110 xl:justify-around flex flex-col px-3.25 py-4.25 gap-3.75 bg-white rounded-xl'>
            <CImage src={headImage} alt={altOfHeadImage} w='w-full' h='h-[272px]' imgW='w-full' imgH='h-full' />
            <h5>{title}</h5>
            <div className='flex justify-between'>
                <div className='flex'>
                    <CImage src={userProfilePic} alt={altOfProfilePic} />
                    <div className='flex flex-col'>
                        <p>Written By</p>
                        <h5>{userName}</h5>
                    </div>
                </div>
                <p className='uppercase'>{ddMMYear}</p>
            </div>
        </div>
    )
}