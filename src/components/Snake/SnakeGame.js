import React, { useRef, useEffect, useState } from 'react'
import { CgEnter } from 'react-icons/cg';
import Button from '../Button';
import { ModelWindow, ModelWindowContainer } from '../ModelWindow/ModelWindow';
import ShakeBoard from '../MyGame/ShakeBoard';

import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
} from './constance';

const Canvas = () => {
    const canvasRef = useRef();

    const [snake, setSnake] = useState(SNAKE_START);
    const [apple, setApple] = useState(APPLE_START);
    const [dir, setDir] = useState({ xSpeed: 0, ySpeed: -1 });
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    let [count, setCount] = useState(0);

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        /*
        !? 1. ��� ���� ������ useRef() 
        !? 2. ����� ����� ������ useEffect
        */

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

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
    };

    const moveSnake = ({ keyCode }) =>
        keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

    // const createApple = () =>
    //     apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));



    function createApple() {
        return { x: Math.floor(Math.random() * (CANVAS_SIZE[1] / SCALE)), y: Math.floor(Math.random() * (CANVAS_SIZE[1] / SCALE)) }
    }

    const checkCollision = (piece, snk = snake) => {
        // if (
        //     piece[0] * SCALE >= CANVAS_SIZE[0] ||
        //     piece[0] < 0 ||
        //     piece[1] * SCALE >= CANVAS_SIZE[1] ||
        //     piece[1] < 0
        // ) { return true; }
debugger;

        for (const segment of snk) {
            if (piece.x === segment.x && piece.y === segment.y) return true;
        }
        return false;
    };

    const checkAppleCollision = newSnake => {
        if (newSnake[0].x === apple.x && newSnake[0].y === apple.y) {
            let newApple = createApple();
            while (checkCollision(newApple, newSnake)) {
                newApple = createApple();
            }
            setApple(newApple);

            setCount(++count);

            return true;
        }
        return false;
    };

    const gameLoop = () => {
        //const snakeCopy = JSON.parse(JSON.stringify(snake));
        //const snakeCopy = Object.assign({}, snake);
        //debugger;
        const snakeCopy = snake.map(piece => piece);

        console.log(snakeCopy[0].x, snakeCopy[0].y);
        if (snakeCopy[0].x < 0) {
            snakeCopy[0].x = 30;
        } else if (snakeCopy[0].y < 0) {
            snakeCopy[0].y = 30;
        }

        //If a sanke is object and a dir is object
        const newSnakeHead = { x: ((snakeCopy[0].x + dir.xSpeed) % 30), y: ((snakeCopy[0].y + dir.ySpeed) % 30) };
        //const newSnakeHead = [(snakeCopy[0][0] + dir[0]) % 30, (snakeCopy[0][1] + dir[1]) % 30];

        snakeCopy.unshift(newSnakeHead);// ��������� ������� � ������
        if (checkCollision(newSnakeHead)) endGame();
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();//��������� ������� �� �����

        setSnake(snakeCopy);
    };

    const startGame = () => {
        setSnake(SNAKE_START);
        setApple(APPLE_START);
        setDir({ xSpeed: 0, ySpeed: -1 });
        setSpeed(SPEED);
        setGameOver(false);
    };

    useEffect(() => {

        const context = canvasRef.current.getContext("2d");

        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        //������� ��������� �� �������
        // context.fillStyle = "green"; //Shake
        // snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));

        //���� ������� ������� �������� {x: 0, y: 0, color: ''}
        context.fillStyle = 'green'
        snake.forEach(fragment => context.fillRect(fragment.x, fragment.y, 1, 1))

        //If an apple is object {x: 0, y: 0}
        context.fillStyle = "red";//Food
        context.fillRect(apple.x, apple.y, 1, 1);

    }, [snake, apple, gameOver]);//� �������� ���� ������, ����� ����� ���������� �����-�� �� ����������

    useInterval(() => gameLoop(), speed);

    return (
        <div style={{ color: '#fff', textAlign: 'center' }} role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
            <Button onClick={startGame}>Start Game</Button>
            <div>COUTN: {count}</div>
            <canvas
                style={{
                    border: "1px solid black",
                    background: "#CCC",
                }}
                ref={canvasRef}
                width={`${CANVAS_SIZE[0]}px`}
                height={`${CANVAS_SIZE[1]}px`}

            />
            {gameOver && <div>GAME OVER!</div>}
        </div>
    )

}

const SnakeGame = ({ windowIsOpened, toggleModelWindow }) => {

    return (
        <ModelWindow windowIsOpened={windowIsOpened}>
            <ModelWindowContainer windowIsOpened={windowIsOpened}>
                <Canvas />
                <Button onClick={toggleModelWindow}>Back</Button>
            </ModelWindowContainer>
        </ModelWindow>
    )
}

export default SnakeGame
