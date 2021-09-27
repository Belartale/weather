//! Core
import styled, { css } from 'styled-components';

//! Images
import ImageCloudy from '../../../assets/images/weather-icon-cloudy.png';
import ImageRainy from '../../../assets/images/weather-icon-rainy.png';
import ImageSunny from '../../../assets/images/weather-icon-sunny.png';

//! Types
interface TypeIconStyled {
    typeImage: string;
}

//! Styles
export const HeadStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 83px;
`;
export const IconStyled = styled.div<TypeIconStyled>`
    margin-right: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    height: 88px;
    width: 114px;

    ${({ typeImage }) => typeImage === 'cloudy' ? css`
    & {
        background-image: url(${ImageCloudy});
    }
    ` : ''}

    ${({ typeImage }) => typeImage === 'rainy' ? css`
    & {
        background-image: url(${ImageRainy});
    }
    ` : ''}

    ${({ typeImage }) => typeImage === 'sunny' ? css`
    & {
        background-image: url(${ImageSunny});
    }
    ` : ''}
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
