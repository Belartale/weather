//!Core
import React, { FC, useEffect, useState } from 'react';
import { CardDay } from '../../elements';
import moment from 'moment';

//! Styles
import { Container } from './styles';
import { useWeathers } from '../../../bus/weathers';

//! Types
import * as Types from '../../../bus/weathers/types';

export const Forecast: FC = () => {
    const { weathers, loading, setCurrentWeather } = useWeathers();
    const [ cardsWeathers, setCardsWeathers ]: [Array<Types.Weather>, Function] = useState([]);

    useEffect(() => {
        (async () => {
            await setCardsWeathers(weathers);
            // console.log('22222222222222');
            // console.log(cardsWeathers);
        })();
    }, [ weathers ]);

    return (
        <Container>

            { !loading
                ? cardsWeathers.slice(0, 7).map((element: Types.Weather) => {
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
                : 'Loading...'
            }
        </Container>
    );
};
