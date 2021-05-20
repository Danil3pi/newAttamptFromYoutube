import React from 'react'
import styled from 'styled-components'
import Button from './Button';

const Section = styled.section`
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px; 

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    direction: ${({reverse}) => (reverse ? 'rtl' : 'ltr')};
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1.5rem 2rem;

    h1{
        margin-bottom: 1rem;
    }

    p{
        margin-bottom: 2rem;
        text-align: left;
    }
`;

const ColumnRight = styled.div`

    padding: 2rem;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

        margin: 0 auto;
    }
`;

const InfoSection = (
    { heading,
        paragraphOne,
        paragraphTwo,
        label,
        Image,
        reverse
    }) => {
    return (
        <Section>
            <Container reverse={reverse}>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button primary="true">{label}</Button>
                </ColumnLeft>

                <ColumnRight>
                    <img src={Image} alt='Interier' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
