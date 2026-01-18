import { FullpageApi } from '../types';

interface SectionHomeProps {
  fullpageApi?: FullpageApi;
}

const SectionHome: React.FC<SectionHomeProps> = ({ fullpageApi }) => {
  return (
    <div className="section bg-tertiary relative text-center">
      <div className="w-[80%] h-full mx-auto flex flex-col justify-center items-center relative">
        <img src="/img/MingHsuan.svg" alt="MingHsuan" className="max-w-[550px] w-full h-auto" />
        <h2 className="text-primary-light text-[13vw] sm:text-[5rem] mt-[3vh]">PORTFOLIO</h2>
        <button
          onClick={() => fullpageApi?.moveSectionDown()}
          className="absolute bottom-[2rem] left-1/2 -translate-x-1/2 cursor-pointer outline-none border-0"
        >
          <span className="animate-bounce-color block text-[2rem]">↓</span>
        </button>
      </div>
    </div>
  );
};

export default SectionHome;
