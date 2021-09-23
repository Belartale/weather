//!Core
import React, { FC } from 'react';

//! Styles
import { Container, Day, Text, Number } from './styles';

//! Types
// type Types = {
//     children: ReactElement,
//     props: any
// }

export const Forecast: FC = () => {
    return (
        <Container>
            <Day className = 'cloudy selected'>
                <Text>Пятница</Text>
                <Number>123</Number>
            </Day>
            <Day className = 'cloudy'><Text>Пятница</Text>
                <Number>123</Number>
            </Day>
            <Day className = 'rainy'><Text>Пятница</Text>
                <Number>123</Number>
            </Day>
            <Day className = 'rainy'><Text>Пятница</Text>
                <Number>123</Number>
            </Day>

        </Container>
    );
};
