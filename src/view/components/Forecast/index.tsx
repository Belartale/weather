//!Core
import React, { FC } from 'react';

//! Styles
import { Container, Day, Text, Number } from './styles';

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
            <Day><Text>Пятница</Text>
                <Number>123</Number>
            </Day>
            <Day><Text>Пятница</Text>
                <Number>123</Number>
            </Day>
            <Day><Text>Пятница</Text>
                <Number>123</Number>
            </Day>
            <Day><Text>Пятница</Text>
                <Number>123</Number>
            </Day>
            <Day><Text>Пятница</Text>
                <Number>123</Number>
            </Day>
        </Container>
    );
};
