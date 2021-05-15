import GlobalStyleForAverything from './components/GlobalStyle';
import NavBar from './components/NavBar';
import navData from './data/NavData';

function App() {
  return (
    <>
      <GlobalStyleForAverything/>
      <NavBar navData={navData}/>
    </>
  );
}

export default App;
