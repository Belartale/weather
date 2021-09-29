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
    color: ${({ theme }) => theme.text.primary};
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
        border: solid 1px ${({ theme }) => theme.text.primary};
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

