import { useState } from 'react'
import './App.css'

import { PrimaryButton } from './components/ui-kit/BaseButton';
import { SecondaryButton } from './components/ui-kit/BaseButton';
import { LoginButton } from './components/ui-kit/BaseButton';
import { BurgerMenu } from './components/ui-kit/BurgerMenu';
import { HeroH1 } from './components/ui-kit/HeroH1';
import { HeroP } from './components/ui-kit/HeroP';
import { BGImage } from './components/ui-kit/BGImage';
import { LineText } from './components/ui-kit/LineText';
import { Logo } from './components/ui-kit/Logo';
import { NavMenu } from './components/ui-kit/NavMenu';
import { SITE } from './components/site';
import { Stars } from './components/ui-kit/Stars';
import { Trustpilot } from './components/ui-kit/Truspilot';
import { Features } from './components/ui-kit/Features';
import { CImage } from './components/ui-kit/CImage';
import { H2 } from './components/ui-kit/H2';
import { CIcon } from './components/ui-kit/CIcon';
import { Badge } from './components/ui-kit/Badge';
import { Bookmark } from './components/ui-kit/Bookmark';
import { RestCard } from './components/views/RestCard';
import { ViewAll } from './components/ui-kit/ViewAll';

//image import???

function App() {
  return (

    <main className='bg-red-400 h-full max-w-full mx-5 lg:mx-17 xl:mx-23.75'>

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

    </main>

  )
}

export default App


// function Header() {
//   return (

//   );
// }

// function Main() {
//   return (
//     <main>
//     </main>
//   )
// }


// function Footer() {
//   return (
//     <footer>
//       <p>Copyrited by Mika4334 © 2025</p>
//     </footer>
//   );
// }


// function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   )
// }


