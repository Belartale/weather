//! Core
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

//! Images
import cloudyImage from '../../assets/images/weather-icon-cloudy.png';
import rainyImage from '../../assets/images/weather-icon-rainy.png';
import sunnyImage from '../../assets/images/weather-icon-sunny.png';

//! Types

interface CardDayStyledInterface {
    typeDay: string;
}

interface CardDayInterface {
    text: string;
    number: any;
    typeDay: string;
    onClick: any
}

//! Styles
const Styled = styled.button<CardDayStyledInterface>`
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;

    position: relative;
    width: 130px;
    height: 204px;
    background-color: ${({ theme }) => theme.day.primary};
    color: ${({ theme }) => theme.text.primary};
    padding-top: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:hover {
        background-color: ${({ theme }) => theme.day.secondary};
    }
    

/* IMAGES */
    
    ${({ typeDay }) => typeDay === 'sunny' ? css`
    &::before {
        position: absolute;
        top: 86px;
        content: '';
        display: block;
        width: 37px;
        height: 37px;
        background-image: url(${sunnyImage});
        background-size: contain;
        background-repeat: no-repeat;
    }
    ` : ''}

    ${({ typeDay }) => typeDay === 'cloudy' ? css`
    &::before {
        position: absolute;
        top: 86px;
        content: '';
        display: block;
        width: 62px;
        height: 37px;
        background-image: url(${cloudyImage});
        background-size: contain;
        background-repeat: no-repeat;
    }
    ` : ''}

    ${({ typeDay }) => typeDay === 'rainy' ? css`
    &::before {
        position: absolute;
        top: 86px;
        content: '';
        display: block;
        width: 43px;
        height: 37px;
        background-image: url(${rainyImage});
        background-size: contain;
        background-repeat: no-repeat;
    }
    ` : ''}
`;
export const Text = styled.p`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 90px;
`;
export const Number = styled.span`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 30px;
    &::after {
        margin-left: 5px;
        transform: translateY(-15px);
        content: '';
        display: inline-block;
        width: 5px;
        height: 6px;
        border: solid 1px ${({ theme }) => theme.text.primary};
        border-radius: 50%;
    }
`;


export const CardDay: FC<CardDayInterface> = ({ text, number, typeDay, ...otherProps  }) => {
    return (
        <Styled
            typeDay = { typeDay }
            { ...otherProps }>
            <Text>{text}</Text>
            <Number>{number}</Number>
        </Styled>
    );
};

