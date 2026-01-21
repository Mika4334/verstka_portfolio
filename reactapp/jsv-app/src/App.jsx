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
import { DishCard } from './components/views/DishCard';
import { StatusCard } from './components/ui-kit/StatusCard';
import { ExpensesCard } from './components/ui-kit/ExpensesCard';
import { ReviewCard } from './components/ui-kit/ReviewCard';
import { ReviewCarousel } from './components/ui-kit/ReviewCarousel';
import { DiscountCard } from './components/ui-kit/DiscountCard';
import { Footer } from './components/views/Footer';
import { WeekendSlider } from './components/ui-kit/WeekendSlider';
import { WeekendCard } from './components/ui-kit/WeekendCard';
import { FoodCategorySort } from './components/ui-kit/FoodCategorySort';
import { FoodResSort } from './components/ui-kit/FoodResSort';
import { SearchBar } from './components/ui-kit/SearchBar';

function App() {
  const slides = [
    {
      revName: 'Aaaa',
      years: '01',
      comment: 'some comment',
      stars: 1
    },
    {
      revName: 'Aaaa',
      years: '02',
      comment: 'some comment',
      stars: 2
    },
    {
      revName: 'Aaaa',
      years: '02',
      comment: 'some comment',
      stars: 3
    }
  ]
  let revs = [];
  slides.forEach((element, index) => {
    revs.push(<ReviewCard key={`revID ${index}`} w='w-[314px]' revName={element.revName} years={element.years} comment={element.comment} stars={element.stars} />)
  });


  return (
    <>
      <main className='bg-red-400 h-full max-w-full mx-5 lg:mx-17 xl:mx-23.75'>
        <section className='flex flex-col items-center'>
          <WeekendSlider>
            <WeekendCard cardNumber={1} />
            <WeekendCard cardNumber={2} />
            <WeekendCard cardNumber={3} />
            <WeekendCard cardNumber={4} />
          </WeekendSlider>
        </section>

        <SearchBar />
        <FoodResSort />
        <FoodCategorySort />

      </main>
    </>
  )
}

export default App
