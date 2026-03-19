// import { useState } from 'react'
import "./App.css";

import { PrimaryButton } from "./components/ui-kit/BaseButton";
import { SecondaryButton } from "./components/ui-kit/BaseButton";
import { LoginButton } from "./components/ui-kit/BaseButton";
import { BurgerMenu } from "./components/ui-kit/BurgerMenu";
import { HeroH1 } from "./components/ui-kit/HeroH1";
import { HeroP } from "./components/ui-kit/HeroP";
import { BGImage } from "./components/ui-kit/BGImage";
import { LineText } from "./components/ui-kit/LineText";
import { Logo } from "./components/ui-kit/Logo";
import { NavMenu } from "./components/ui-kit/NavMenu";
import { SITE } from "./components/site";
import { Stars } from "./components/ui-kit/Stars";
import { Trustpilot } from "./components/ui-kit/Truspilot";
import { Features } from "./components/ui-kit/Features";
import { CImage } from "./components/ui-kit/CImage";
import { H2 } from "./components/ui-kit/H2";
import { CIcon } from "./components/ui-kit/CIcon";
import { Badge } from "./components/ui-kit/Badge";
import { Bookmark } from "./components/ui-kit/Bookmark";
import { RestCard } from "./components/views/RestCard";
import { ViewAll } from "./components/ui-kit/ViewAll";
import { DishCard } from "./components/views/DishCard";
import { StatusCard } from "./components/ui-kit/StatusCard";
import { ExpensesCard } from "./components/ui-kit/ExpensesCard";
import { ReviewCard } from "./components/ui-kit/ReviewCard";
import { ReviewSlider } from "./components/ui-kit/ReviewSlider";
import { DiscountCard } from "./components/ui-kit/DiscountCard";
import { Footer } from "./components/views/Footer";
import { WeekendSlider } from "./components/ui-kit/WeekendSlider";
import { WeekendCard } from "./components/ui-kit/WeekendCard";
import { FoodCategorySort } from "./components/ui-kit/FoodCategorySort";
import { FoodResSort } from "./components/ui-kit/FoodResSort";
import { SearchBar } from "./components/ui-kit/SearchBar";
import { FAQ } from "./components/ui-kit/FAQ";
import { QuestionsAnswers } from "./components/ui-kit/QuestionsAnswers";
import { CartCard } from "./components/ui-kit/CartCard";
import { Cart } from "./components/views/Cart";
import { DropdownForm } from "./components/ui-kit/DropdownForm";
import { PlanCard } from "./components/ui-kit/PlanCard";
import { Dropdown } from "./components/ui-kit/Dropdown";
import { FeatureItem } from "./components/ui-kit/FeatureItem";
import { PlanPlate } from "./components/ui-kit/PlanPlate";
import { AppleMenu } from "./components/ui-kit/AppleMenu";
import { FeatureListItem } from "./components/ui-kit/FeatureItem";
import { ArticleCard } from "./components/ui-kit/ArticleCard";
import { ArticleSlider } from "./components/ui-kit/ArticleSlider";
import { ArticlePost } from "./components/ui-kit/ArticlePost";
import { CustomerSupportForm } from "./components/ui-kit/CustomerSupportForm";
import { SignUpForm } from "./components/ui-kit/LoginForm";
import { SignInForm } from "./components/ui-kit/LoginForm";
import { ForgetForm } from "./components/ui-kit/LoginForm";
import { SignUpCard } from "./components/ui-kit/SignUpCard";

const slides = [
	{
		revName: "Aaaa",
		years: "01",
		comment: "some comment",
		stars: 1,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 2,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 3,
	},
	{
		revName: "Aaaa",
		years: "01",
		comment: "some comment",
		stars: 1,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 2,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 3,
	},
	{
		revName: "Aaaa",
		years: "01",
		comment: "some comment",
		stars: 1,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 2,
	},
	{
		revName: "Aaaa",
		years: "02",
		comment: "some comment",
		stars: 3,
	},
];

const qa = [
	{
		question: "Question  #01",
		answer: "AAAAAAAAA",
	},
	{
		question: "Question  #02",
		answer: "BBBBBB",
	},
	{
		question: "Question  #03",
		answer: "CCCCCCC",
	},
	{
		question: "Question  #04",
		answer: "DDDDDDDDD",
	},
];

const basicPlan = [
	{
		allowed: true,
		feature: "Support 24/7",
	},
	{
		allowed: true,
		feature: "Fast Delivery",
	},
	{
		allowed: true,
		feature: "20% Off Food Deals",
	},
	{
		allowed: false,
		feature: "Transaction History",
	},
	{
		allowed: false,
		feature: "Weekend Deals",
	},
	{
		allowed: false,
		feature: "Dashboard Access",
	},
	{
		allowed: false,
		feature: "Premium Group Access",
	},
];

const premiumPlan = [
	{
		allowed: true,
		feature: "Support 24/7",
	},
	{
		allowed: true,
		feature: "Fast Delivery",
	},
	{
		allowed: true,
		feature: "20% Off Food Deals",
	},
	{
		allowed: true,
		feature: "Transaction History",
	},
	{
		allowed: true,
		feature: "Weekend Deals",
	},
	{
		allowed: true,
		feature: "Dashboard Access",
	},
	{
		allowed: true,
		feature: "Premium Group Access",
	},
];

const cOrder = [
	{
		customer: "A1",
		imgSrc: "/img/dishes/fi1.png",
		price: 5.0,
	},
	{
		customer: "A2",
		imgSrc: "/img/dishes/fi2.png",
		price: 5.0,
	},
	{
		customer: "A3",
		imgSrc: "/img/dishes/fi3.png",
		price: 5.0,
	},
	{
		customer: "A4",
		imgSrc: "/img/dishes/fi4.png",
		price: 5.0,
	},
];

const coupons = [
	{
		code: "SAVE10",
		type: "percentage",
		value: 10,
		minOrder: 50,
		maxDiscount: 30,
		expiryDate: "2026-12-31",
	},
	{
		code: "FIXED20",
		type: "fixed",
		value: 20, // $20 скидки
		minOrder: 100,
		expiryDate: "2024-12-31",
	},
	{
		code: "WELCOME15",
		type: "percentage",
		value: 15,
		maxDiscount: 50,
	},
];

function App() {
	let qas = qa.map((element, index) => (
		<QuestionsAnswers
			key={`qaID ${index}`}
			question={element.question}
			answer={element.answer}
		/>
	));
	let basic = basicPlan.map((element, index) => (
		<FeatureItem
			key={`feaID ${index}`}
			allow={element.allowed}
			text={element.feature}
		/>
	));
	let premium = premiumPlan.map((element, index) => (
		<FeatureItem
			key={`feaID ${index}`}
			allow={element.allowed}
			text={element.feature}
		/>
	));
	let allPlansFeatures = [
		...new Set([
			...basicPlan.map((item) => item.feature),
			...premiumPlan.map((item) => item.feature),
		]),
	].map((element, index) => (
		<FeatureListItem key={`fliID ${index}`} text={element} />
	));

	let basicForPlate = basicPlan.map((element, index) => (
		<FeatureItem key={`feaID ${index}`} allow={element.allowed} />
	));
	let premiumForPlate = premiumPlan.map((element, index) => (
		<FeatureItem key={`feaID ${index}`} allow={element.allowed} />
	));

	let allArticles = Array.from({ length: 15 }).map((_, index) => (
		<ArticleCard
			title={`#${index}`}
			userName='Perperzon'
			userProfilePic='/img/articles/article_profile.png'
			headImage='/img/articles/0.png'
			ddMMYear='15 dec, 2022'
		/>
	));

	return (
		<>
			<main className='bg-red-400 h-full max-w-full mx-5 lg:mx-17 xl:mx-23.75'>
				<section className='flex flex-col items-center gap-10'>
					{/* <Cart></Cart>
          <CartCard srcImg='/img/dishes/fi2.png' price={10.99} total={10.99} qnty={10} />
          <FAQ>
            {qas}
          </FAQ>
          <ReviewCarousel>
            {revs}
          </ReviewCarousel> */}
					{/* <PlanCard planName='basic' price='0' featureItems={basic} />
          <PlanCard planName='premium' price='9' featureItems={premium} />
          <PlanPlate allFeatures={allPlansFeatures} plan0={basicForPlate} plan1={premiumForPlate} /> */}
				</section>
				{/* <section className='flex flex-col items-center'>
          <ArticleSlider>
            {allArticles}
          </ArticleSlider>
        </section> */}
				{/* <section className='flex flex-col items-center'>
          <ArticlePost headImage='img/articles/head_image.png' userName='Username' userProfilePic='img/articles/article_profile.png' postTitle='How To Order Food On eatly ?'
            postTextBefore={`
            Browse restaurants and menusOnce you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.Place your orderLorem Ipsum passages, and more recently It was popularized in the 1960s with the releaseLorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Select your items
            Browse restaurants and menusOnce you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.Place your orderLorem Ipsum passages, and more recently It was popularized in the 1960s with the releaseLorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Select your items
            Browse restaurants and menusOnce you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.Place your orderLorem Ipsum passages, and more recently It was popularized in the 1960s with the releaseLorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Select your items
            Browse restaurants and menusOnce you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.Place your orderLorem Ipsum passages, and more recently It was popularized in the 1960s with the releaseLorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Select your items
            Browse restaurants and menusOnce you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.Place your orderLorem Ipsum passages, and more recently It was popularized in the 1960s with the releaseLorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Select your items`}
            postTextAfter={`
            Browse restaurants and menusOnce you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.Place your orderLorem Ipsum passages, and more recently It was popularized in the 1960s with the releaseLorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Select your items`} />
        </section> */}
				{/* <section className='flex flex-col items-center gap-10'>
          <CustomerSupportForm />
        </section> */}
				{/* <section className='flex justify-around'>
          <SignUpForm />
        </section>
        <section className='flex justify-around'>
          <SignInForm />
        </section>
        <section className='flex justify-around'>
          <ForgetForm />
        </section> */}
				<section className='flex flex-col justify-around'>
					{/* <ReviewSlider slides={slides} /> */}
					<Cart
						order={cOrder}
						coupons={coupons}
						customerAdress='Horizenal Road Stree 1178 California, USA'
					/>
					{/* <CartCard /> */}
					{/* <ReviewSlider /> */}
					{/* <AppleMenu /> */}
					{/* <WeekendSlider>
            {revs}
          </WeekendSlider> */}
				</section>
			</main>
		</>
	);
}

export default App;
