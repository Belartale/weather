//! Core
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

//! Types

interface CheckboxStyledInterface {
    active: boolean;
}
interface CheckboxInterface {
    active: boolean;
    children: string;
}


//! Styles
const CheckboxStyled = styled.span<CheckboxStyledInterface>`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    display: inline-flex;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    &::after {
        content: '';
        display: inline-block;
        width: 25px;
        height: 25px;
        border: solid 1px #fff;
        border-radius: 3px;
        margin-left: 14px;
    }

    ${ ({ active }) => active ? css`
        &::before {
            content: '✓';
            position: absolute;
            right: 7px;
        }
    ` : '' }
`;

export const Checkbox: FC<CheckboxInterface> = ({ children, ...otherProps  }) => {
    return (
        <CheckboxStyled
            { ...otherProps }>
            {children}
        </CheckboxStyled>
    );
};


// background: radial-gradient(ellipse, #DfDfDf 0%, #FFF 60%);
// border-image: linear-gradient(to right, #FFF, #933a, #724, #FFF ) 47% 0%;

// border: 2px solid #147;
// border-bottom: 2px solid #FFF;
