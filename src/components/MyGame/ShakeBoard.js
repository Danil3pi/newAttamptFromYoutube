import React from 'react'
import Blank from './imagesBorder/blank.png'

import styled from 'styled-components'
import Button from '../Button';

const SnakeGame = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: ${({isGame}) => (isGame? '1' : '0')};
`;

const SnakeField = styled.li`
    
`

const SnakeWrapper = styled.div`

`

const ShakeBoard = ({ isGame, toogleGame }) => {

    let initialRows = [];
    for (let row = 0; row < 10; row++) {
        initialRows.push([]);
        for (let col = 0; col < 10; col++) {
            initialRows[row].push('blank')
        }
    }

    const displayBoard = initialRows.map(row => (
        <SnakeField >
            {
                row.map((element) => {
                    switch (element) {
                        case 'blank': return <img src={Blank} />
                    }
                }
                )
            }
        </SnakeField>
    ))

    return (
        <SnakeGame isGame={isGame}>
            <SnakeWrapper>
                <ul>
                    {displayBoard}
                </ul>
                <Button onClick={toogleGame}>Back</Button>
            </SnakeWrapper>
        </SnakeGame>
    )
}

export default ShakeBoard;
