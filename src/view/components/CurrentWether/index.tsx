//!Core
import React, { FC } from 'react';
import { isNull } from 'lodash';

//! Elements
import { NoAvailable, Spinner } from '../../elements';

//! Styles
import { Container, MainText, Meta, Rainy, Humidity } from './styles';

//! Types
import { currentWeather } from '../../../bus/weathers/types';

interface PropTypes {
    loading: boolean;
    currentWeather: currentWeather;
}

export const CurrentWether: FC<PropTypes> = ({ loading, currentWeather }) => {
    if (loading) {
        return <Spinner />;
    }

    if (isNull(currentWeather)) {
        return <NoAvailable> No current weather.</NoAvailable>;
    }

    return (
        <Container>
            <MainText>{currentWeather.temperature}</MainText>
            <Meta>
                <Rainy>%{currentWeather.rain_probability}</Rainy>
                <Humidity>%{currentWeather.humidity}</Humidity>
            </Meta>
        </Container>
    );
};
