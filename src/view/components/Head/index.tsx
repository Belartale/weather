//!Core
import moment from 'moment';
import React, { FC } from 'react';
import { isNull } from 'lodash';

//! Elements
import { NoAvailable, Spinner } from '../../elements';

//! Styles
import { HeadStyled, IconStyled, CurrentDateStyled, TextStyled, DateStyled } from './styles';

//! Types
import { currentWeather } from '../../../bus/weathers/types';

interface PropTypes {
    loading: boolean;
    currentWeather: currentWeather;
}

export const Head: FC<PropTypes> = ({ loading, currentWeather }) => {
    if (loading) {
        return <Spinner />;
    }
    if (isNull(currentWeather)) {
        return <NoAvailable> No current weather.</NoAvailable>;
    }

    return (
        <HeadStyled>
            <IconStyled typeImage = { currentWeather.type } />
            <CurrentDateStyled>
                <TextStyled>{moment(currentWeather.day).format('dddd') }</TextStyled>
                <DateStyled>{moment(currentWeather.day).format('LL')} </DateStyled>
            </CurrentDateStyled>
        </HeadStyled>
    );
};
