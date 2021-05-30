import React, { useState, useEffect, useRef } from 'react'

import Blank from './imagesBorder/blank.png'
import Snake from './imagesBorder/snake.png'
import Food from './imagesBorder/food.png'

import styled from 'styled-components'
import Button from '../Button';
import { FaGoodreads } from 'react-icons/fa';

const SnakeGame = styled.div`
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

    opacity: ${(({ isGame }) => (isGame ? '1' : '0'))};
    z-index: ${(({ isGame }) => (isGame ? '1000' : '0'))};// Нужно чтобы не было перекрытия с навбвром
`;

const SnakeField = styled.li`
    list-style: none;
`

const SnakeWrapper = styled.div`
    transition: .4s ease-in-out;
    transform: scale(${({ isGame }) => (isGame ? '1' : '0')});

    padding: 20px;
`

// FieldSlise
const FieldSlise = styled.img`
    width: 10%;
    height: 10%;
`

const ShakeBoard = ({ isGame, toogleGame }) => {

    const WIDTH = 10;

    let initialRows = [];
    for (let row = 0; row < WIDTH; row++) {
        initialRows.push([]);
        for (let col = 0; col < WIDTH; col++) {
            initialRows[row].push('blank')
        }
    }

    const ransomPosition = () => {
        const position = {
            x: Math.floor(Math.random() * WIDTH),
            y: Math.floor(Math.random() * WIDTH)
        };

        return position;
    }

    const [rows, setRows] = useState(initialRows);
    const [snake, setSnake] = useState([{ x: 0, y: 0 }, { x: 1, y: 0 }]);
    let [direction, setDirection] = useState('right');
    const [food, setFood] = useState(ransomPosition)

    const changeDirectionWithKeys = (e) => {
        console.log(direction);
        
        let keyCode = e.code;
        switch (keyCode) {
            case 'ArrowLeft':
                if (direction !== 'right') {
                    setDirection('left');
                }
                break;
            case 'ArrowUp':
                if (direction !== 'bottom') {
                    setDirection('top');
                }
                break;
            case 'ArrowRight':
                if (direction !== 'left') {
                    setDirection('right');
                }
                break;
            case 'ArrowDown':
                if (direction !== 'top') {
                    setDirection('bottom');
                }
                break;
            default:
                break;
        }
    }

    document.addEventListener("keydown", changeDirectionWithKeys);

    const displaySnake = () => {

        const newRows = initialRows;

        snake.forEach(cell => {
            newRows[cell.x][cell.y] = 'snake'
        })
        newRows[food.x][food.y] = 'food';

        setRows(newRows);
    }



    const moveSnake = () => {
        const newSnake = [];

        switch (direction) {
            case 'right':
                newSnake.push({ x: snake[0].x, y: (snake[0].y + 1) % WIDTH });
                break;
            case 'left':
                newSnake.push({ x: snake[0].x, y: (snake[0].y - 1 + WIDTH) % WIDTH });
                break;
            case 'top':
                newSnake.push({ x: (snake[0].x - 1 + WIDTH) % WIDTH, y: snake[0].y })
                break;
            case 'bottom':
                newSnake.push({ x: (snake[0].x + 1) % WIDTH, y: snake[0].y })
            default: break;
        }

        snake.forEach(cell => {
            newSnake.push(cell);
        })

        if (snake[0].x === food.x && snake[0].y === food.y) {
            setFood(ransomPosition)
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
        displaySnake();
    }

    useInterval(moveSnake, 200);


    //Разобрать!!!
    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    const displayBoard = rows.map(row => (
        <SnakeField >
            {
                row.map((element) => {
                    switch (element) {
                        case 'blank':
                            return <FieldSlise src={Blank} />
                        case 'snake':
                            return <FieldSlise src={Snake} />
                        case 'food':
                            return <FieldSlise src={Food} />
                    }
                }
                )
            }
        </SnakeField>
    ))

    return (
        <SnakeGame isGame={isGame}>
            <SnakeWrapper isGame={isGame}>
                <ul>
                    {displayBoard}
                </ul>
                <Button onClick={toogleGame}>Back</Button>
            </SnakeWrapper>
        </SnakeGame>
    )
}

export default ShakeBoard;
