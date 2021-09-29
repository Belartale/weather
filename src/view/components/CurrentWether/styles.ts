//! Core
import styled from 'styled-components';

//! Images
import rainyImage from '../../../assets/images/rainy.png';
import humidityImage from '../../../assets/images/humidity.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 38px;
`;
export const MainText = styled.p`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 350px;
    line-height: 1;
    color: ${({ theme }) => theme.text.primary};
    margin-bottom: 100px;
    
    &::after {
        position: absolute;
        top: 53px;
        right: -70px;
        content: '';
        display: inline-block;
        width: 37px;
        height: 41px;
        border: solid 5px ${({ theme }) => theme.text.primary};;
        border-radius: 50%;
    }
`;
export const Meta = styled.div`
    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 19px;
        color: ${({ theme }) => theme.text.primary};
        display: inline-flex;
        align-items: flex-start;
    }
    
    span:first-child {
        margin-right: 81px;
    }
`;
export const Rainy = styled.span`
    &::before {
        content: '';
        display: inline-block;
        width: 26px;
        height: 26px;
        background-image: url(${rainyImage});
        margin-right: 11px;
    }
`;
export const Humidity = styled.span`
    &::before {
        content: '';
        display: inline-block;
        width: 19px;
        height: 28px;
        background-image: url(${humidityImage});
        margin-right: 11px;
    }
`;
