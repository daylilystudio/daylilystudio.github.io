
import data from '../data/data';

const SectionAbout = () => {
	return (
		<div
			className="section bg-secondary bg-no-repeat bg-[position:left_45px]"
			style={{ backgroundImage: "url(/img/bg_star.svg)" }}
		>
			<div className="@container w-[80%] h-full mx-auto grid sm:grid-cols-[60%_35%] justify-between items-center">
				<div className="transform -rotate-[6deg] sm:-rotate-[10deg] mx-[10cqw] mt-[26cqw] sm:m-0 sm:pl-[7cqw] relative text-primary-light">
					<h2 className="text-[12cqw] sm:text-[6cqw] mb-[2cqw]" >About_</h2>
					<div className='pl-[3cqw]'>
						<p className="text-[5cqw] sm:text-[1.7cqw] leading-8">
							<span className="text-secondary-light font-bold">Lily Chang ,</span> <br />
							I am a front-end developer with a background in design. I have 8 years of work experience, part of
							4 years in front-end development.
							Specialize in using JS, React, NextJS. I enjoy the process which finding solutions to solve
							technical problems. It gives me a great sense of accomplishment.
						</p>
						<p className="mt-[8cqw] sm:mt-[2cqw] flex gap-2 sm:gap-[1.5cqw]">
							{data.habit.map((item, i) => (
								<img key={i} src={item.img} title={item.title} className="size-[12cqw] sm:size-[5cqw]" alt={item.title} />
							))}
						</p>
					</div>
					<span
						className="absolute top-[6%] left-[55%] sm:-left-[2%] size-[19%] bg-contain bg-no-repeat"
						style={{ backgroundImage: "url(/img/star01.svg)" }}
					></span>
					<span
						className="absolute top-0 sm:top-[5%] -right-[16%] sm:-right-[24%] size-[33%] bg-contain bg-no-repeat"
						style={{ backgroundImage: "url(/img/star02.svg)" }}
					></span>
				</div>
				<img src="/img/portrait.png" alt="my portrait" className="hidden sm:block h-[85%] object-contain" />
			</div>
		</div>
	);
};

export default SectionAbout;
