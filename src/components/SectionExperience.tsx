import data from '../data/data';

const SectionExperience = () => {
  return (
    <div
      className="section bg-primary-light bg-no-repeat bg-[size:auto_30%] lg:bg-[size:100%_30%] bg-[position:center_top] relative"
      style={{ backgroundImage: "url(/img/bg_curve.png)" }}
    >
      <div className="relative mx-auto h-full flex flex-col justify-start items-center overflow-hidden">
        <h2 className="flex justify-center items-center h-[30vh]">
          <img src="/img/title_experience.svg" alt="Experience" className="h-[9vh] w-auto" />
        </h2>
        <div id='experience-content' className="pt-[2vh] pb-[6vh] h-[60vh] w-full flex flex-col items-center overflow-y-scroll">
          {/* Timeline Line */}
          {data.experience.map((item, i) => (
            <div key={i} className={`group flex justify-center items-center relative mb-[7vh] z-[5] 
              ${i % 2 === 0 ? 'translate-x-[calc(50%-24px)]' : 'translate-x-[calc(-50%+24px)] flex-row-reverse text-right'}`}>
              {/* icon */}
              <div className={`size-12 rounded-full border-4 border-primary-light bg-${item.isSchool ? 'tertiary' : 'secondary'} bg-[size:60%] bg-center bg-no-repeat`}
                style={{ backgroundImage: `url('/img/icon_${item.isSchool ? 'school' : 'work'}.svg')` }} />
              {/* line */}
              <div className={`w-[3rem] h-[1px] bg-${item.isSchool ? 'tertiary' : 'secondary'}`} />
              {/* time */}
              <p className={`text-secondary-light text-sm bg-${item.isSchool ? 'tertiary' : 'secondary'} px-4 py-2 rounded-full font-bold leading-4 text-left whitespace-nowrap`} dangerouslySetInnerHTML={{ __html: item.time }} />
              {/* name & title */}
              <section className={`${i % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
                <h5 className="text-tertiary text-lg font-bold">{item.name}</h5>
                <p className="text-secondary leading-4" dangerouslySetInnerHTML={{ __html: item.title }} />
              </section>
              {/* airplane decorators */}
              <img src="/img/icon_airplane.svg" alt="airplane" className={`absolute top-[-100%] h-auto w-auto opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-1/2 -translate-y-1/2
                ${i % 2 === 0 ? '-left-15' : '-right-15'}`} />
            </div>
          ))}
        </div>
        <div className="absolute opacity-15 w-50 h-[70vh] left-1/2 -translate-x-1/2 bottom-0 bg-[linear-gradient(transparent_0%,rgba(0,0,0,0.2),#000,#000,rgba(14,49,80,0))] z-1" />
        <div className="absolute w-[12px] h-[60vh] bottom-[8vh] left-1/2 -translate-x-1/2 bg-[linear-gradient(transparent_0%,rgba(247,234,228,0.7)_30%,rgba(247,234,228,0.7))] z-1"></div>
        <div className="absolute w-[12px] h-[4vh] bottom-[2vh] left-1/2 -translate-x-1/2 bg-[rgba(247,234,228,0.7)] z-1"></div>
      </div>
    </div>
  );
};

export default SectionExperience;
