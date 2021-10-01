//!Core
import React, { FC } from 'react';
import moment from 'moment';
import { isNull } from 'lodash';

//! Elements
import { CardDay, NoAvailable, Spinner } from '../../elements';

//! Styles
import { Container } from './styles';

//! Types
import { ArrayWeathers, Weather, currentWeather } from '../../../bus/weathers/types';

interface PropTypes {
    loading: boolean;
    weathers: ArrayWeathers;
    currentWeather: currentWeather;
    setCurrentWeather: (payload: Weather) => void;
}

export const Forecast: FC<PropTypes> = ({ loading, weathers, currentWeather, setCurrentWeather }) => {
    if (loading) {
        return <Spinner />;
    }

    if (isNull(currentWeather)) {
        return <NoAvailable> No current weathers.</NoAvailable>;
    }

    return (
        <Container>
            {
                weathers.slice(0, 7).map((element: Weather) => {
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
