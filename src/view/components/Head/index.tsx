//!Core
import moment from 'moment';
import React, { FC } from 'react';
import { useWeathers } from '../../../bus/weathers';
import { Spinner } from '../../elements';

//! Styles
import { HeadStyled, IconStyled, CurrentDateStyled, TextStyled, DateStyled } from './styles';

export const Head: FC = () => {
    const { loading, currentWeather } = useWeathers();

    const checkDownload = () => {
        if (!loading) {
            return (
                <HeadStyled>
                    <IconStyled typeImage = { currentWeather.type } />
                    <CurrentDateStyled>
                        <TextStyled>{moment(currentWeather.day).format('dddd') }</TextStyled>
                        <DateStyled>{moment(currentWeather.day).format('LL')} </DateStyled>
                    </CurrentDateStyled>
                </HeadStyled>
            );
        }

        return <Spinner/>;
    };

    return checkDownload();
};
