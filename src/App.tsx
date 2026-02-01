import { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from './components/Navbar';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionExperience from './components/SectionExperience';
import SectionSkill from './components/SectionSkill';
import SectionWorks from './components/SectionWorks';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';

import { FullpageApi } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');

  const onLeave = (_origin: any, destination: any, _direction: any) => {
    setCurrentSection(destination.anchor as string);
  };

  const afterLoad = (_origin: any, destination: any, _direction: any) => {
    const nav = document.querySelector('nav') as HTMLElement | null;
    const top = document.querySelector('.top') as HTMLElement | null;
    const fpNav = document.querySelector('#fp-nav') as HTMLElement | null;

    if (destination.anchor === 'experience') {
      if (nav) nav.style.display = "none";
    } else {
      if (nav) nav.style.display = "flex";
    }
    if (destination.anchor === 'home') {
      if (top) top.style.display = "none";
      if (fpNav) fpNav.style.display = "none";
    } else {
      if (top) top.style.display = "flex";
      if (fpNav) fpNav.style.display = "block";
    }
  }

  return (
    <div className="App">
      <Navbar currentSection={currentSection} />
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        credits={{ enabled: false }}
        menu={'#nav'}
        anchors={['home', 'about', 'experience', 'skill', 'works', 'contact', 'footer']}
        navigation={true}
        navigationPosition='right'
        scrollingSpeed={700}
        onLeave={onLeave}
        afterLoad={afterLoad}
        normalScrollElements='#experience-content'
        render={({ state: _state, fullpageApi }: { state: any; fullpageApi: FullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>

              <SectionHome fullpageApi={fullpageApi} />

              <SectionAbout />

              <SectionExperience />

              <SectionSkill />

              <SectionWorks />

              <SectionContact />

              <Footer />

            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default App;
