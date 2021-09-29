//!Core
import React, { FC, useEffect, useState } from 'react';

//! Styles
import { Container, MainText, Meta, Rainy, Humidity } from './styles';

//! Hooks
import { useWeathers } from '../../../bus/weathers';
import { Weather } from '../../../bus/weathers/types';
import { initialState } from '../../../bus/weathers/slice';

export const CurrentWether: FC = () => {
    const { currentWeather } = useWeathers();
    const [ currentDay, setCurrentDay ]: [Weather, Function] = useState(initialState.currentWeather);

    useEffect(() => {
        setCurrentDay(currentWeather);
    }, [ currentWeather ]);

    return (
        <Container>
            <MainText>{currentDay.temperature}</MainText>
            <Meta>
                <Rainy>%{currentDay.rain_probability}</Rainy>
                <Humidity>%{currentDay.humidity}</Humidity>
            </Meta>
        </Container>
    );
};
