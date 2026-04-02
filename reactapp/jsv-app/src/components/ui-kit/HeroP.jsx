export function HeroP({ pText, pBonusText }) {
	return (
		<>
			<p className='text-hr'>
				{pText}
				<a className='text-pm!' href=''>
					{pBonusText}
				</a>
			</p>
		</>
	);
}
