//!Core
import React, { FC, useEffect, useState } from 'react';
import { CardDay } from '../../elements';
import moment from 'moment';

//! Styles
import { Container } from './styles';
import { useWeathers } from '../../../bus/weathers';

//! Types
import * as Types from '../../../bus/weathers/types';
import { useTogglersRedux } from '../../../bus/client/togglers';
// type Types = {
//     children: ReactElement,
//     props: any
// }


const arr: Array<any> = [
    {
        id:               '57f145ba-e7a9-456a-a3b4-dfd438cad648',
        rain_probability: 1,
        humidity:         55,
        day:              1632459600000,
        temperature:      22,
        type:             'sunny',
    },
    {
        id:               '77855e40-2014-4eb2-92db-0da66c293dc6',
        rain_probability: 35,
        humidity:         49,
        day:              1632546000000,
        temperature:      21,
        type:             'sunny',
    },
    {
        id:               '9318a5de-e6db-46b3-a230-e45ca190789a',
        rain_probability: 88,
        humidity:         89,
        day:              1632632400000,
        temperature:      17,
        type:             'rainy',
    },
    {
        id:               '9e3c84e9-92b7-46d0-8236-1201dea1b53a',
        rain_probability: 19,
        humidity:         56,
        day:              1632718800000,
        temperature:      21,
        type:             'sunny',
    },
    {
        id:               '07f92ec0-e10f-40c7-b5aa-277aa3266a63',
        rain_probability: 16,
        humidity:         44,
        day:              1632805200000,
        temperature:      30,
        type:             'cloudy',
    },
    {
        id:               '6d73b4e5-4e2c-4cf0-880e-5ac81bed6bc4',
        rain_probability: 97,
        humidity:         76,
        day:              1632891600000,
        temperature:      24,
        type:             'cloudy',
    },
    {
        id:               '62fb2f58-b9bc-41c8-9e0c-eb539deea631',
        rain_probability: 37,
        humidity:         48,
        day:              1632978000000,
        temperature:      21,
        type:             'sunny',
    },
];


export const Forecast: FC = () => {
    const { weathers, loading }: any = useWeathers();
    const [ cardsWeathers, setCardsWeathers ] = useState([]);
    // console.log(weathers);
    // console.log(loading);

    useEffect(() => {
        setCardsWeathers(weathers);
    }, [ weathers ]);

    //todo вызвать каст. хук и .map() !!!!!!!!!!!!!!!!!!!!
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
                        />
                    );
                })
                : 'Loading...'
            }
        </Container>
    );
};
