//!Core
import React, { FC } from 'react';
import { isNull } from 'lodash';

//! Components
import { Spinner } from '../../elements';

//! Hooks
import { useWeathers } from '../../../bus/weathers';

//! Styles
import { Container, MainText, Meta, Rainy, Humidity } from './styles';

export const CurrentWether: FC = () => {
    const { loading, currentWeather } = useWeathers({});

    if (loading) {
        return <Spinner />;
    }

    if (isNull(currentWeather)) {
        return <div> No current weather.</div>;
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
