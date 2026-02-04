import { ArticleCard } from '../ui-kit/ArticleCard';
import { ArticleSlider } from '../ui-kit/ArticleSlider';
import { CImage } from '../ui-kit/CImage';
import { PrimaryButton } from '../ui-kit/BaseButton';

export function ArticlePost({ postTitle, postText, userProfilePic, userName, headImage }) {
    const regex = /[^/]+(?=\.js$)/;
    let altOfProfilePic = userProfilePic.match(regex)
    let altOfHeadimagePic = headImage.match(regex)
    // т.к. пост состоит из хэдингов и текста
    // стоит итерироваться либо всё-таки использовать тег <pre>

    return (
        <div className='flex flex-col'>
            <h4>{postTitle}</h4>
            <CImage src={headImage} alt={altOfHeadimagePic} />
            <div className='flex'>
                <CImage src={userProfilePic} alt={altOfProfilePic} />
                <div className='flex flex-col'>
                    <p>Written By</p>
                    <h5>{userName}</h5>
                </div>
            </div>
            <div className='flex justify-around'>
                <article>
                    <blockquote className='text-wrap'>
                        {postText}
                    </blockquote>
                </article>
                <hr />
                <aside>
                    <h5>Top Articles</h5>
                    <ArticleSlider forceCol>
                        <ArticleCard title='#1' userName='Perperzon' userProfilePic='/img/articles/article_profile.png' headImage='/img/articles/0.png' ddMMYear='15 dec, 2022' />
                        <ArticleCard title='#1' userName='Perperzon' userProfilePic='/img/articles/article_profile.png' headImage='/img/articles/0.png' ddMMYear='15 dec, 2022' />
                        <ArticleCard title='#1' userName='Perperzon' userProfilePic='/img/articles/article_profile.png' headImage='/img/articles/0.png' ddMMYear='15 dec, 2022' />
                    </ArticleSlider>
                </aside>
            </div>
        </div>
    )
}