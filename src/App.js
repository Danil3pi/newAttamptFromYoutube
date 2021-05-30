import React, { useState } from 'react'

import GlobalStyleForAverything from './globalStyle';
import NavBar from './components/NavBar';

import Hero from './components/Hero';
import { sliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InsoSection from './components/InfoSection';
import { sectionDataOne, sectionDataTwo } from './data/SectionData';


// import SnakeGame from './components/Game/SnakeGame';
// import {Route} from 'react-router-dom';

import SnakeBoard from './components/MyGame/ShakeBoard.js';
import SnakeGame from './components/Snake/SnakeGame';

function App() {

  const [isOpened, setIsOpened] = useState(false);

  //����� �������� ��������� ���� ��� ���, � ��� ����� 
  // �������� ���������� ���� ���� ��� ���
  // const [gameMode, setGameMode] = useState(false);

  // const toogleGame = () => {
  //   setGameMode(!gameMode);
  // }

  const [windowIsOpened, setWindowIsOpened] = useState(false);

  const toggleModelWindow = () => {setWindowIsOpened(!windowIsOpened)};

  const toggle = () => (
    setIsOpened(!isOpened)
  )

  const navData = [
    { title: 'About', link: '/about', click: () => alert('Click') },
    { title: 'Homes', link: '/homes', click: () => alert('Click') },
    { title: 'Game', link: '/game', click: toggleModelWindow },
  ]

  return (
    <>
      <GlobalStyleForAverything isGame={windowIsOpened}/>
      <NavBar navData={navData} toggle={toggle} />
      <Dropdown isOpened={isOpened} toggle={toggle} navData={navData} />
      <Hero slides={sliderData} />
      <InsoSection {...sectionDataOne} />
      <InsoSection {...sectionDataTwo} />
      {/* <SnakeBoard isGame={gameMode} toogleGame={toogleGame}/> */}
      <SnakeGame windowIsOpened={windowIsOpened} toggleModelWindow={toggleModelWindow}/>
    </>
  );
  /*if(!gameMode) {
    return (
        <>
          <GlobalStyleForAverything/>
          <NavBar navData={navData} toggle={toggle}/>
          <Dropdown isOpened={isOpened} toggle={toggle} navData={navData}/>
          <Hero slides={sliderData}/>
          <InsoSection {...sectionDataOne}/>
          <InsoSection {...sectionDataTwo}/>
        </>
      );
  }else{
    return <SnakeBoard isGame={gameMode} toogleGame={toogleGame}/>
  }*/


}

export default App;
