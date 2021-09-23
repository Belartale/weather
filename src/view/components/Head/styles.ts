//! Core
import styled from 'styled-components';

//! Images
import image from '../../../assets/images/weather-icon-cloudy.png';

//! Styles
export const HeadStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 83px;
`;
export const IconStyled = styled.div`
    margin-right: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    height: 88px;
    width: 114px;
    background-image: url(${image});
`;
export const CurrentDateStyled = styled.div`
    display: flex;
    flex-direction: column;
`;
export const TextStyled = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 28px;
    color: ${({ theme }) => theme.text.primary};
    display: inline-block;
    margin-top: 15px;
    margin-bottom: 10px;
`;
export const DateStyled = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
`;
