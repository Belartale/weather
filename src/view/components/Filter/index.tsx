//!Core
import React, { FC, useState } from 'react';
import { ContainerIndentBotton } from '../../containers/ContainerIndentBotton';

//! Elements
import { Button, Checkbox, Input } from '../../elements';

//! Styles
import { ContainerForm } from './styles';

//! Types
// import * as Types from '../../../bus/filter/types';

// type PropTypes = Types.Filter & {
//     // isColor: boolean
//     // updateHandler: Function
//     // deleteHandler: Function
// }

// interface PropTypes extends Types.Todo {
//     isColor: boolean
//     updateHandler: Function
//     deleteHandler: Function
// }

export const Filter: FC = () => {
    const [ active, setActive  ] = useState(false);
    const [ active2, setActive2  ] = useState(false);

    return (
        <ContainerForm>
            <ContainerIndentBotton>
                <div onClick = { () => { setActive(true); setActive2(false); } }>
                    <Checkbox active = { active } >Облачно</Checkbox>
                </div>
            </ContainerIndentBotton>
            <ContainerIndentBotton>
                <div onClick = { () => { setActive2(true); setActive(false); } }>
                    <Checkbox active = { active2 } >Солнечно</Checkbox>
                </div>
            </ContainerIndentBotton>
            <ContainerIndentBotton>
                <Input
                    name = 'minTemperature'
                    title = 'Минимальная температура'
                    type = 'number'
                />
            </ContainerIndentBotton>
            <ContainerIndentBotton>
                <Input
                    name = 'maxTemperature'
                    title = 'Максимальная температура'
                    type = 'number'
                />
            </ContainerIndentBotton>
            <Button>Отфильтровать</Button>
        </ContainerForm>
    );
};
