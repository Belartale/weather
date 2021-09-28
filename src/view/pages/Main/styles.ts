//! Core
import styled from 'styled-components';

//! Styles
export const Container = styled.main`
    width: 910px;
    margin: 0 auto;
`;

export const NoAvailable = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.text.primary };
    font-size: 30px;
`;
