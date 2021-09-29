//! Core
import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

//! Styles
const Styled = styled.div<StyledTypes>`
    margin-bottom: ${({ number }) => number ? number : '25px'};
`;

//!Types
type StyledTypes = {
    number?: string;
}

type ContainerTypes = {
    children: ReactElement;
    number?: string;
}

export const ContainerIndentBottom: FC<ContainerTypes> = ({ children, number }) => {
    return (
        <Styled number = { number }>
            {children}
        </Styled>
    );
};
