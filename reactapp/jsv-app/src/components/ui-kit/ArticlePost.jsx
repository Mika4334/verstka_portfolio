import { ArticleCard } from '../ui-kit/ArticleCard';
import { ArticleSlider } from '../ui-kit/ArticleSlider';
import { CImage } from '../ui-kit/CImage';
import { PrimaryButton } from '../ui-kit/BaseButton';

export function ArticlePost({ postTitle, postTextBefore, postTextAfter, userProfilePic, userName, headImage }) {
    const regex = /[^/]+(?=\.js$)/;
    let altOfProfilePic = userProfilePic.match(regex)
    let altOfHeadimagePic = headImage.match(regex)
    // т.к. пост состоит из хэдингов и текста
    // стоит итерироваться либо всё-таки использовать тег <pre>

    return (
        <div className='flex flex-col max-w-360 gap-10'>
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
            <div className='flex gap-8.5'>
                <article className='text-wrap text-justify flex flex-col gap-17'>
                    <blockquote className='max-h-338 overflow-y-scroll carouselScroll'>
                        {postTextBefore}
                        <br />
                        <div className='sm:hidden'>
                            <CImage src={headImage} alt={altOfHeadimagePic} />
                        </div>
                        <br />
                        {postTextAfter}
                    </blockquote>
                </article>
                <span className='border border-hr sm:block hidden'></span>
                <aside className='hidden sm:block'>
                    <h6 className='mb-13'>Top Articles</h6>
                    <ArticleSlider forceCol>
                        <ArticleCard title='#1' userName='Perperzon' userProfilePic='/img/articles/article_profile.png' headImage='/img/articles/0.png' ddMMYear='15 dec, 2022' />
                        <ArticleCard title='#2' userName='Perperzon' userProfilePic='/img/articles/article_profile.png' headImage='/img/articles/0.png' ddMMYear='15 dec, 2022' />
                        <ArticleCard title='#3' userName='Perperzon' userProfilePic='/img/articles/article_profile.png' headImage='/img/articles/0.png' ddMMYear='15 dec, 2022' />
                    </ArticleSlider>
                </aside>
            </div>
            <PrimaryButton width='w-34 sm:w-43.5 xl:w-61' height='h-11 sm:h-14 xl:h-20' textValue='Next article' icon />
        </div>
    )
}