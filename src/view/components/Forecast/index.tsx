//!Core
import React, { FC } from 'react';
import { CardDay, Spinner } from '../../elements';
import moment from 'moment';
import { isNull } from 'lodash';

//! Styles
import { Container } from './styles';
import { useWeathers } from '../../../bus/weathers';

//! Types
import * as Types from '../../../bus/weathers/types';

export const Forecast: FC = () => {
    const {
        weathers, loading,
        currentWeather, setCurrentWeather,
    } = useWeathers({});

    if (loading) {
        return <Spinner />;
    }

    if (isNull(currentWeather)) {
        return <div> No current weather.</div>;
    }

    return (
        <Container>
            {
                weathers.slice(0, 7).map((element: Types.Weather) => {
                    return (
                        <CardDay
                            key = { element.id }
                            number = { element.temperature }
                            text = { moment(element.day).format('dddd') }
                            typeDay = { element.type }
                            onClick = { () => setCurrentWeather(element) }
                        />
                    );
                })
            }
        </Container>
    );
};
