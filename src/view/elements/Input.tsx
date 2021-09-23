//! Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import styled from 'styled-components';

//! Styles
const InputContainer = styled.div`
    /* margin-bottom: 26px; */
`;

const StyledLabel = styled.label`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.input.primary};
    margin-right: 14px;
`;

const StyledInput = styled.input<StyledInputProps>`
    border-bottom: solid 1px ${({ theme }) => theme.input.primary};
    border-top: none;
    border-right: none;
    border-left: none;
    background: transparent;
    width: 40px;
    outline: none;
    color: ${({ theme }) => theme.input.primary};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
`;


//! Types
interface StyledInputProps {
    type: string;
}

export interface InputProps extends
    StyledInputProps,
    DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
{
    // use React.Ref instead of React.LegacyRef to prevent type incompatibility errors with styled-components types
    ref?: Ref<HTMLInputElement>;
    type: string;
    title: string;
    name: string;
}

export const Input: FC<InputProps> = ({ style, type, title, name }) => {
    return (
        <InputContainer style = { style }>
            <StyledLabel htmlFor = { name }>{title}</StyledLabel>
            <StyledInput
                id = { name }
                name = { name }
                type = { type }
            />
        </InputContainer>
    );
};
