import React from 'react'
import styled from 'styled-components'


import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import navData from '../data/NavData';
import Button from './Button';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;

    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    
    display:flex;

    transition: .2s ease-in-out;

    opacity: ${({isOpened}) => (isOpened ? '1' : '0')};
    top: ${({isOpened}) => (isOpened ? '0' : '-100%')};
    left: ${({isOpened}) => (isOpened ? '0' : '100%')};

    background: #cd853f;
`;


const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2.5rem;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
    cursor: pointer;
`;

const DropdownWrapper = styled.div`

`;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    align-items: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

const DropdownMenuLink = styled(Link)`
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;
    text-decoration: none;

    cursor: pointer;
    transition: .2s ease-in-out;

    &:hover{
        color: #000d1a;
    }
`;

const BtnWrap = styled.div``

const Dropdown = ({isOpened, toggle}) => {
    return (
        <DropdownContainer isOpened={isOpened}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>

            <DropdownWrapper>
                <DropdownMenu>
                    {navData.map((item, index) => (
                        <DropdownMenuLink to={item.link}>{item.title}</DropdownMenuLink>
                    ))}
                </DropdownMenu>

                <BtnWrap>
                    <Button primary='true' big="true">Contant US</Button>
                </BtnWrap>
            </DropdownWrapper>

        </DropdownContainer>
    )
}

export default Dropdown
