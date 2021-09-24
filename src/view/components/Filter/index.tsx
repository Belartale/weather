//!Core
import React, { FC,  useState } from 'react';
import { ContainerIndentBotton } from '../../containers/ContainerIndentBotton';

//! Elements
import { Button, Checkbox, Input } from '../../elements';

//! Styles
import { ContainerForm } from './styles';

export const Filter: FC = () => {
    const onSubmitFilter = (event: any) => {
        console.log(event.target.kindWeather.value);
        event.preventDefault();
        const filter: object = {
            kindWeather:    event.target.kindWeather.value,
            minTemperature: event.target.minTemperature.value,
            maxTemperature: event.target.maxTemperature.value,
        };
        //todo сет в reducer
    };

    return (
        <ContainerForm onSubmit = { onSubmitFilter }>
            <ContainerIndentBotton>
                <Input
                    id = 'Облачно'
                    name = 'kindWeather'
                    title = 'Облачно'
                    type = 'radio'
                    value = 'cloudy'
                />
            </ContainerIndentBotton>
            <ContainerIndentBotton>
                <Input
                    id = 'Солнечно'
                    name = 'kindWeather'
                    title = 'Солнечно'
                    type = 'radio'
                    value = 'sunny'
                />
            </ContainerIndentBotton>
            <ContainerIndentBotton>
                <Input
                    id = 'Минимальная'
                    name = 'minTemperature'
                    title = 'Минимальная температура'
                    type = 'number'
                />
            </ContainerIndentBotton>
            <ContainerIndentBotton>
                <Input
                    id = 'Максимальная'
                    name = 'maxTemperature'
                    title = 'Максимальная температура'
                    type = 'number'
                />
            </ContainerIndentBotton>
            <Button >Отфильтровать
            </Button>
        </ContainerForm>
    );
};
