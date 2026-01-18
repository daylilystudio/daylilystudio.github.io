import data from '../data/data';

const SectionSkill = () => {
  return (
    <div
      className="section bg-secondary-light bg-no-repeat bg-[length:40%] sm:bg-[length:17%] bg-[position:center_80px] sm:bg-[position:center_100px]"
      style={{ backgroundImage: "url(/img/title_skill.svg)" }}
    >
      <div className="container mx-auto h-full flex items-center">
        <ul className="flex md:justify-around items-start mt-[6rem] w-full overflow-x-auto md:overflow-x-visible snap-x snap-mandatory flex-nowrap scroll-smooth">
          {data.skill.map((list, i) => (
            <li key={i} className="w-[60%] md:w-[26%]  shrink-0 group text-tertiary text-center snap-center px-8 md:px-4">
              <img src={list.img} alt={list.cat} className="w-full h-auto mb-2 transition-all duration-300 transform sm:group-hover:rotate-[15deg] sm:group-hover:scale-110" />
              <p className="font-bold text-xl md:text-3xl mb-4 whitespace-nowrap">{list.cat}</p>
              <span className="leading-6" dangerouslySetInnerHTML={{ __html: list.text }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionSkill;
