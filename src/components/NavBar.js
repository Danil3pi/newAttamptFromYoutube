import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import Button from './Button';

const Nav = styled.nav`
    height: 60px;
    background-color: red;  

    display: flex;
    justify-content: space-between;
    //align-items: center;

    position: fixed;
    z-index: 100;

    width: 100%;

    padding: 1rem 2rem;

`;

const ForLink = css` // *For castoms styles
    text-decoration: none;
    cursor: pointer;
    color: #fff;

    display: flex;
    align-items: center;

    padding: 0 1rem;
`

const Logo = styled(Link)`
    ${ForLink};

    font-style: italic;
`;
const MenuBar = styled.i``;

const NavMenu = styled.div`
    display: flex;
    align-items: center;

    margin-right: -48px;
`;

const NavLink = styled(Link)`
    ${ForLink}; 
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

const NavBar = ({ navData }) => {
    return (
        <Nav>
            <Logo>EXC</Logo>
            <MenuBar />
            <NavMenu>
                {navData.map((item, index) => (
                    <NavLink to={item.link} key={index}>
                        {item.title}
                    </NavLink>
                ))}
            </NavMenu>
            <NavBtn>
                <Button primary={false} big={false} to="/contact">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default NavBar
