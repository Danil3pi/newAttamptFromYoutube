import React, {useState} from 'react'

import GlobalStyleForAverything from './globalStyle';
import NavBar from './components/NavBar';
import navData from './data/NavData';
import Hero from './components/Hero';
import { sliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InsoSection from './components/InfoSection';
import {sectionDataOne, sectionDataTwo} from './data/SectionData';

function App() {

  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => (
    setIsOpened(!isOpened)
  )

  return (
    <>
      <GlobalStyleForAverything/>
      <NavBar navData={navData} toggle={toggle}/>
      <Dropdown isOpened={isOpened} toggle={toggle}/>
      <Hero slides={sliderData}/>
      <InsoSection {...sectionDataOne}/>
      <InsoSection {...sectionDataTwo}/>
    </>
  );
}

export default App;
