
export function SITE() {
    return (
        <>
            <nav className='max-w-full pt-12 pb-[25px] border-b border-hr '>
                <div className='flex justify-between items-center w-full max-w-[1248px]'>
                    <Logo />
                    <NavMenu />
                    <div className='loginSignup w-[233px] h-[63px] flex justify-between'>
                        <LoginButton textValue='Login' />
                        <PrimaryButton textValue='Signup' />
                    </div>
                </div>
            </nav>

            <header>
                <div className='heroDescription flex flex-col justify-around'>
                    <LineText textColor='text-sc' stripeColor='bg-sc' />
                    <HeroH1 />
                    <HeroP />
                    <div className='flex gap-[13px] h-10'>
                        <PrimaryButton textValue='Get Started' />
                        <SecondaryButton textValue='Go Pro' />
                    </div>
                    <div className='flex gap-5'>
                        <Trustpilot width='w-[123px]' />
                        <Stars starsQty={5} gap='gap-1' width={10} svgW={10} svgH={10} />
                        <p className="text-sc m-auto ml-0">4900+</p>
                    </div>
                </div>

                <BGImage src={`bg-[url(/img/Hero.png)]`} alt='heroimage' cover center width='w-full' height='h-full' />

            </header >

            <Features />

            <main className='bg-red-400 h-full max-w-full mx-5 lg:mx-17 xl:mx-23.75'>

                <section className='flex flex-col-reverse md:flex-row justify-around items-center gap-10'>
                    <div>
                        <CImage w='w-90' h='h-50' src='/img/MobileScreen.png' alt='MobileScreen' />

                    </div>
                    <div className='flex flex-col gap-10'>
                        <H2 beforeText='Premium' spanText='Quality' afterText='for your health' textSize='text-[100px]' />
                        <ul className='w-full list-disc list-inside text-sc'>
                            <li>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                            <li>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                        </ul>
                        <PrimaryButton width='w-[186px]' height='h-[63px]' textValue='Download' icon />
                        <CIcon relative w='w-50' h='h-20' position='top-10 left-10 -rotate-90 -scale-100' src='/svg/CurlArrow.svg' alt='CurlArrow' />
                    </div>
                </section>

                <section className='flex flex-col gap-12.5'>
                    <H2 beforeText='Our Top' spanText='Dishes' />
                    <div className='flex flex-col justify-center items-center lg:justify-around lg:flex-row gap-y-10'>
                        <RestCard w='w-[396px]' h='h-[298px]' srcImg={`bg-[url(/img/rest/kfc.png)]`} href='#'
                            badgeColor='y' badgeText="Healthy" />
                        <RestCard w='w-[396px]' h='h-[298px]' srcImg={`bg-[url(/img/rest/bk.png)]`} href='#'
                            badgeColor='r' badgeText="Trending" />
                        <RestCard w='w-[396px]' h='h-[298px]' srcImg={`bg-[url(/img/rest/kfc.png)]`} href='#'
                            badgeColor='y' badgeText="Healthy" />
                    </div>
                    <ViewAll />
                </section>


                <section className='flex flex-col gap-12.5'>
                    <H2 beforeText='Our Top' spanText='Dishes' textSize='text-[100px]' />
                    <div className='flex flex-col justify-center items-center lg:justify-around lg:flex-row gap-y-10'>
                        <DishCard w='w-[247px]' srcImg='/img/dishes/fi1.png' badgeText="Healthy" badgeColor='y' />
                        <DishCard w='w-[247px]' srcImg='/img/dishes/fi1.png' badgeText="Trending" badgeColor='r' />
                        <DishCard w='w-[247px]' srcImg='/img/dishes/fi1.png' badgeText="Supreme" badgeColor='g' />
                    </div>
                    <ViewAll />
                </section>

                <section></section>

                <section></section>

                <section></section>

            </main>
        </>
    )
}