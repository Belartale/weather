//!Core
import moment from 'moment';
import React, { FC } from 'react';
import { useWeathers } from '../../../bus/weathers';

//! Styles
import { HeadStyled, IconStyled, CurrentDateStyled, TextStyled, DateStyled } from './styles';

export const Head: FC = () => {
    const { loading, currentWeather } = useWeathers();

    return (
        <>
            {
                !loading
                    ? <HeadStyled>
                        <IconStyled typeImage = { currentWeather.type } />
                        <CurrentDateStyled>
                            <TextStyled>{moment(currentWeather.day).format('dddd') }</TextStyled>
                            <DateStyled>{moment(currentWeather.day).format('LL')} </DateStyled>
                        </CurrentDateStyled>
                    </HeadStyled>
                    : 'Loading...'
            }
        </>
    );
};
