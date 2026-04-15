import { NavLink } from "react-router";

export function NavMenu({ footerVersion }) {
	return (
		<>
			<NavLink
				className={
					footerVersion
						? "hover:text-pm uppercase sm:capitalize text-sc"
						: "hover:text-pm"
				}
				to='categories'
				end
			>
				Menu
			</NavLink>
			<NavLink
				className={
					footerVersion
						? "hover:text-pm uppercase sm:capitalize text-sc"
						: "hover:text-pm"
				}
				to='blog'
			>
				Blog
			</NavLink>
			<NavLink
				className={
					footerVersion
						? "hover:text-pm uppercase sm:capitalize text-sc"
						: "hover:text-pm"
				}
				to='pricing'
				end
			>
				Pricing
			</NavLink>
			<div className={footerVersion ? "" : "hidden"}>
				<NavLink
					className='hover:text-pm uppercase sm:capitalize text-sc'
					to='/'
					end
				>
					Abou Us
				</NavLink>
			</div>
			<NavLink
				className={
					footerVersion
						? "hover:text-pm uppercase sm:capitalize text-sc"
						: "hover:text-pm"
				}
				to='contact'
				end
			>
				Contact
			</NavLink>
		</>
	);
}
