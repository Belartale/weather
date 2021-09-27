//!Core
import React, { FC, useEffect, useState } from 'react';

//! Elements
// import { Button, Checkbox, Input } from '../../elements';

//! Styles
import { Container, MainText, Meta, Rainy, Humidity } from './styles';

//! Hooks
import { useWeathers } from '../../../bus/weathers';

export const CurrentWether: FC = () => {
    //todo вызвать катом. хук и пол. этот день из reducer !!!!!!!!!!!!!!
    const { currentWeather }: any = useWeathers();
    const [ currentDay, setCurrentDay ]: any = useState({
        id:               '',
        rain_probability: 0,
        humidity:         0,
        day:              0,
        temperature:      0,
        type:             '',
    });


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
