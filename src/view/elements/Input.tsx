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
    cursor: pointer;
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

    &[type=radio] {
        visibility: hidden;
        position: relative;
        cursor: pointer;
        width: 25px;
    }
    &[type=radio]:before {
        visibility: visible;
        content: "";
        display: block;
        position: absolute;
        width: 25px;
        height: 25px;
        top: -7px;
        left: 0px;
        border: 1px solid ${({ theme }) => theme.input.primary};
        border-radius: 3px;
        background-color: transparent;
    }
    &[type=radio]:checked:after {
        visibility: visible;
        content: "✓";
        display: block;
        width: 5px;
        height: 10px;
        position: absolute;
        top: -4px;
        left: 5px;
        font-size: 16px;
        color: ${({ theme }) => theme.input.primary};
}
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
    ref?: Ref<any>;
    type: string;
    title: string;
    name: string;
    id: string;
    value?: any;
    onChange?: any
}

export const Input: FC<InputProps> = ({ id, style, type, title, name, value, onChange }) => {
    return (
        <InputContainer style = { style }>
            <StyledLabel htmlFor = { id }>{title}</StyledLabel>
            <StyledInput
                id = { id }
                name = { name }
                type = { type }
                value = { value }
                onChange = { onChange }
            />
        </InputContainer>
    );
};
