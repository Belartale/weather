//!Core
import React, { FC, useState } from 'react';
import { ContainerIndentBotton } from '../../containers/ContainerIndentBotton';

//! Elements
// import { Button, Checkbox, Input } from '../../elements';

//! Styles
import { Container, MainText, Meta, Rainy, Humidity } from './styles';

//! Types


export const CurrentWether: FC = () => {
    //todo вызвать катом. хук и пол. этот день из reducer !!!!!!!!!!!!!!
    return (
        <Container>
            <MainText>17</MainText>
            <Meta>
                <Rainy>%35</Rainy>
                <Humidity>%72</Humidity>
            </Meta>
        </Container>
    );
};
