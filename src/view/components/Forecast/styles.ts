//! Core
import styled from 'styled-components';

//! Images
import cloudyImage from '../../../assets/images/weather-icon-cloudy.png';
import rainyImage from '../../../assets/images/weather-icon-rainy.png';
import sunnyImage from '../../../assets/images/weather-icon-sunny.png';

//! Styles
export const Container = styled.div`
    display: flex;
    margin-bottom: 40px;
`;

export const Day = styled.div`
    position: relative;
    width: 130px;
    height: 204px;
    background-color: #C486BB;
    color: #fff;
    padding-top: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &.selected {
        background-color: #D9A9CE;
    }

    /*IMAGES ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss*/
    &.cloudy::before {
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
    &.rainy::before {
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
    &.sunny::before {
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
        border: solid 1px #fff;
        border-radius: 50%;
    }
`;
