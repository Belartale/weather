//! Core
import React, { ChangeEvent, FC, useEffect, useState } from 'react';

//! Hooks
import { useFilter } from '../../../bus/client/filter';
import { initialState } from '../../../bus/client/filter/slice';
import { useWeathers } from '../../../bus/weathers';
import { useForm } from '../../../tools/hooks';

//! Containers
import { ContainerIndentBottom } from '../../containers/ContainerIndentBottom';

//! Elements
import { Button, Input } from '../../elements';

//! Styles
import { ContainerForm } from './styles';


export const Filter: FC = () => {
    const { filteredWeathers, setFilter } = useFilter();
    const { setFilteredWeathers, fetch } = useWeathers({});

    const [ isReset, setIsReset ] = useState(false);

    const [ form, handleChange, , resetForm  ] = useForm<typeof initialState>(initialState);
    const [ isCloseBtn, setIsCloseBtn ] = useState(true);

    const onSubmitFilter = () => {
        setFilter(form);

        setFilteredWeathers(filteredWeathers);
        setIsReset(true);
    };

    const onResetFilter = () => {
        setFilter({
            kindWeather:    null,
            minTemperature: null,
            maxTemperature: null,
        });

        resetForm();
        fetch();
        setIsReset(false);
    };

    useEffect(() => {
        form.minTemperature !== null
        || form.maxTemperature !== null
        || form.kindWeather !== null
            ? setIsCloseBtn(false)
            : setIsCloseBtn(true);
    }, [ form.minTemperature, form.maxTemperature, form.kindWeather ]);

    return (
        <ContainerForm onSubmit = { (event) => event.preventDefault() }>
            <ContainerIndentBottom>
                <Input
                    checked = { form.kindWeather === 'cloudy' }
                    disabled = { isReset }
                    id = 'Облачно'
                    name = 'kindWeather'
                    title = 'Облачно'
                    type = 'radio'
                    value = 'cloudy'
                    onChange = { (event: ChangeEvent<HTMLInputElement>) => void handleChange(event, false)  }
                />
            </ContainerIndentBottom>
            <ContainerIndentBottom>
                <Input
                    checked = { form.kindWeather === 'sunny' }
                    disabled = { isReset }
                    id = 'Солнечно'
                    name = 'kindWeather'
                    title = 'Солнечно'
                    type = 'radio'
                    value = 'sunny'
                    onChange = { (event: ChangeEvent<HTMLInputElement>) => void handleChange(event, false)  }
                />
            </ContainerIndentBottom>
            <ContainerIndentBottom>
                <Input
                    disabled = { isReset }
                    id = 'Минимальная'
                    name = 'minTemperature'
                    title = 'Минимальная температура'
                    type = 'number'
                    value = { form.minTemperature === null ? '' : form.minTemperature  }
                    onChange = { (event: ChangeEvent<HTMLInputElement>) => handleChange(event, true) }
                />
            </ContainerIndentBottom>
            <ContainerIndentBottom>
                <Input
                    disabled = { isReset }
                    id = 'Максимальная'
                    name = 'maxTemperature'
                    title = 'Максимальная температура'
                    type = 'number'
                    value = { form.maxTemperature === null ? '' : form.maxTemperature }
                    onChange = { (event: ChangeEvent<HTMLInputElement>) => handleChange(event, true)  }
                />
            </ContainerIndentBottom>

            <Button
                disabled = { isCloseBtn }
                onClick = { !isReset ? onSubmitFilter : onResetFilter } >{!isReset ? 'Отфильтровать' : 'Сброс'}
            </Button>

        </ContainerForm>
    );
};
