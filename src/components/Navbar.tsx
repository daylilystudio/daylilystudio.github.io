interface NavbarProps {
  currentSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection }) => {
  return (
    <>
      <nav id="nav" className={`px-8 fixed w-full h-[3.5rem] bg-primary-light z-100 flex items-center justify-center sm:justify-between transition-all duration-300 ${currentSection === 'experience' ? 'hidden' : 'flex'}`}>
        <img src="/img/MingHsuan_blue.svg" alt="logo" className="w-auto h-[75%] mb-2 cursor-pointer hidden sm:block" onClick={() => window.location.href = '#home'} />
        <ul className="flex gap-[5vw] md:gap-12">
          {['about', 'skill', 'works', 'contact'].map((item) => (
            <li key={item} data-menuanchor={item} className="text-lg font-bold relative cursor-pointer group">
              <a href={`#${item}`} className="text-tertiary uppercase">{item}</a>
              <div
                className="hidden absolute w-[20%] h-[90%] bg-center bg-contain bg-no-repeat top-0 -left-5 group-hover:block"
                style={{ backgroundImage: "url(/img/star_hover.png)" }}
              ></div>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`top size-10 fixed z-5 right-[1rem] bottom-[1rem] cursor-pointer bg-tertiary rounded-full justify-center items-center text-secondary-light text-xl ${currentSection === 'home' ? 'hidden' : 'flex'}`}
        onClick={() => window.location.href = '#home'}
      >
        ↑
      </div>
    </>
  );
};

export default Navbar;
