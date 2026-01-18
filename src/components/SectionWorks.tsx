import data from '../data/data';

const SectionWorks = () => {
	return (
		<div
			className="section bg-tertiary bg-no-repeat bg-[length:45%] sm:bg-[length:23%] bg-[position:center_80px] sm:bg-[position:center_100px]"
			style={{ backgroundImage: "url(/img/title_works.svg)" }}
		>
			<div className="w-[80%] mx-auto h-full flex flex-col justify-center items-center">
				<p className="text-primary-light mt-[11rem] mb-[2rem]">Development & UI Design by myself.</p>
				<div className="w-full h-full overflow-x-auto md:overflow-x-visible">
					<ul className="grid grid-cols-4 grid-rows-2 gap-4 h-[85%] w-[240%] md:w-full">
						{data.works.map((card, i) => (
							<li key={i} className="bg-cover bg-center rounded-3xl shadow-md/30 relative overflow-hidden group" style={{ backgroundImage: `url(${card.img})` }}>
								<a href={card.link} target="_blank" rel="noreferrer" className="block w-full h-full">
									<div className="absolute top-0 left-0 w-full h-full bg-tertiary/85 opacity-0 transition-all duration-500 group-hover:opacity-100 flex flex-col justify-between p-6">
										<h3 className="text-primary-light text-lg font-bold relative">{card.title}</h3>
										<span className="text-white block mb-[1rem]" dangerouslySetInnerHTML={{ __html: card.text }} />
										<button className="text-primary-light bg-transparent border-0 font-bold cursor-pointer hover:tracking-widest transition-all">VIEW →</button>
									</div>
									<div className='absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] group-hover:hidden mt-auto shadow-md/25 backdrop-blur-md bg-primary-light/80 text-tertiary text-center font-bold py-1 rounded-full'>{card.title}</div>
								</a>
							</li>
						))}
						<li className="flex justify-center items-center text-center text-primary-light">
							<a href="https://mming.weebly.com/" target="_blank" rel="noreferrer" className="w-full border border-primary-light py-2 rounded-full hover:bg-primary-light hover:text-tertiary transition-colors">MORE WORKS →</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SectionWorks;
