
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

            <main className='bg-red-400 h-full max-w-full ml-5 mr-5 md:ml-[95px] md:mr-[95px]'>

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

                <section>


                </section>


                <section>

                    <h2>Our Top Dishes</h2>

                    <div className="productCard">
                        <a href="">
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.99578C0 2.60828 2.97185 0 6.46016 0C8.25831 0 9.84057 0.843131 10.976 1.93408C12.1114 0.843131 13.6937 0 15.4918 0C18.9802 0 21.952 2.60828 21.952 5.99578C21.952 8.31626 20.9624 10.3569 19.5915 12.0818C18.2228 13.8038 16.4326 15.2652 14.7185 16.4527C14.0638 16.9063 13.4014 17.3247 12.7952 17.6334C12.226 17.9233 11.5715 18.1888 10.976 18.1888C10.3805 18.1888 9.72599 17.9233 9.15679 17.6334C8.5506 17.3247 7.88825 16.9063 7.23354 16.4527C5.51943 15.2652 3.72917 13.8038 2.36056 12.0818C0.989572 10.3569 0 8.31626 0 5.99578ZM6.46016 1.8816C3.85195 1.8816 1.8816 3.7997 1.8816 5.99578C1.8816 7.75633 2.62896 9.39546 3.83356 10.911C5.04054 12.4296 6.66454 13.7695 8.30506 14.906C8.92584 15.3361 9.51054 15.702 10.0107 15.9567C10.5478 16.2302 10.8589 16.3072 10.976 16.3072C11.0931 16.3072 11.4042 16.2302 11.9413 15.9567C12.4415 15.702 13.0262 15.3361 13.6469 14.906C15.2875 13.7695 16.9115 12.4296 18.1184 10.911C19.3231 9.39546 20.0704 7.75633 20.0704 5.99578C20.0704 3.7997 18.1001 1.8816 15.4918 1.8816C13.9939 1.8816 12.5952 2.77652 11.7218 3.91238C11.5437 4.14399 11.2682 4.27972 10.976 4.27972C10.6838 4.27972 10.4083 4.14399 10.2302 3.91238C9.35683 2.77652 7.95811 1.8816 6.46016 1.8816Z" fill="#323142" />
                            </svg>
                        </a>
                        <div>
                            <div></div>
                            <h3></h3>
                        </div>

                    </div>

                </section>
                <section></section>
                <section></section>
                <section></section>

            </main>
        </>
    )
}