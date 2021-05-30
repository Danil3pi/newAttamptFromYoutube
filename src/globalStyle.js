import {createGlobalStyle} from 'styled-components';

const GlobalStyleForAverything = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box; 
        font-family: 'Montserrat', sans-serif;
        
        overflow: ${({isGame}) => (isGame ? 'hidden' : 'visible')}; //Выкрючить скрол
    }
`; 

export default GlobalStyleForAverything;