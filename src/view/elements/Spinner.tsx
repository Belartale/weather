//! Core
import React, { FC } from 'react';
import styled from 'styled-components';

//! Styles
const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: ${({ theme }) => theme.text.primary };
`;

//! Types
interface PropTypes {
    children?: string
}

export const Spinner: FC<PropTypes> = ({ children = 'Loading...' }) => {
    return (
        <Container>
            <p>{children}</p>
        </Container>
    );
};

