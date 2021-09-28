// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    // use React.Ref instead of React.LegacyRef to prevent type incompatibility errors with styled-components types
    ref?: Ref<HTMLButtonElement>;
    active?: boolean;
    disabled?: boolean
}

// Styles
const Styled = styled.button<ButtonProps>`
    background-color: ${({ theme }) => theme.button.primary};
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.text.primary};
    text-transform: uppercase;

    
    ${({ disabled }) => disabled === true ? css`
        opacity: .3;
    `
        : disabled === false ? css`
        &:hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.button.hover};;
        }
    ` : '' }
`;

export const Button: FC<ButtonProps> = ({ children, disabled, ...otherProps  }) => {
    return (
        <Styled
            { ...otherProps }
            disabled = { disabled }>
            {children}
        </Styled>
    );
};


// background: radial-gradient(ellipse, #DfDfDf 0%, #FFF 60%);
// border-image: linear-gradient(to right, #FFF, #933a, #724, #FFF ) 47% 0%;

// border: 2px solid #147;
// border-bottom: 2px solid #FFF;
