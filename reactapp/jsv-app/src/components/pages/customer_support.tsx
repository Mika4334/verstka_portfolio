import type { Route } from "./+types/home";
import { CustomerSupportForm } from "../ui-kit/CustomerSupportForm";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Customer Support" },
		{ name: "Customer support", content: "Customer support" },
	];
}

export default function CustomerSupport() {
	return (
		<div className='relative left-1/2 right-1/2 w-screen -ml-[50vw] mr-[50vw] xl:pr-24'>
			<CustomerSupportForm />
		</div>
	);
}
