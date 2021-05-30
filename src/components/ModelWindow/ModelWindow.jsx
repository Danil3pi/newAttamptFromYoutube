import styled from 'styled-components'

export const ModelWindow = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);

    position: fixed;
    top: 0;
    left: 0;
    //z-index: 1000;// Нужно чтобы не было перекрытия с навбвром, гичего бы не сработало

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .4s ease-in-out;

    opacity: ${(({ windowIsOpened }) => (windowIsOpened ? '1' : '0'))};
    z-index: ${(({ windowIsOpened }) => (windowIsOpened ? '1000' : '0'))};// Нужно чтобы не было перекрытия с навбвром
`;

export const ModelWindowContainer = styled.div`
    transition: .4s ease-in-out;
    transform: scale(${({ windowIsOpened }) => (windowIsOpened ? '1' : '0')});

    padding: 20px;
`