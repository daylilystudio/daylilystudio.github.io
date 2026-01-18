const Footer = () => {
  return (
    <div className="section fp-auto-height footer bg-primary-light px-4 py-10 text-center">
      <p className="mb-4 flex justify-center gap-4">
        <a href="https://github.com/daylilystudio" target="_blank" rel="noreferrer">
          <img src="/img/icon_github.png" alt="Github" className="size-[20vw] sm:size-20 hover:rotate-360 transition-all duration-600" /></a>
        <a href="https://www.linkedin.com/in/daylily/" target="_blank" rel="noreferrer">
          <img src="/img/icon_linkedin.png" alt="Linkedin" className="size-[20vw] sm:size-20 hover:rotate-360 transition-all duration-600" /></a>
      </p>
      <p className="text-tertiary text-sm sm:text-base">Copyright © 2026 by Ming Hsuan</p>
      <hr className="border-t border-tertiary w-full my-2" />
      <p className="text-tertiary text-sm sm:text-base">This site uses : React、Swiper、fullPage.js、Firebase、Tailwind CSS</p>
    </div>
  );
};

export default Footer;
