import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#000d1a' : '#CD853F')};
    white-space: nowrap;
    outline: none;

    border: none;

    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    text-decoration: none;
    font-size: ${({big}) => (big ? '20px' : '14px')};

    display: flex; // ! В кнопке будут располагаться другие элементы, поэтому нужно Делать флексом
    justify-content: center; //! Ведь для чего еще флекс использовать как не для внутреннего позиционирования
    align-items: center;

    transition: .3s;
    &:hover{
        transform: translateY(-2px)
    }
`


export default Button;