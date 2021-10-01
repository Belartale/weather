//! Core
import React, { FC } from 'react';
import styled from 'styled-components';

//! Types
interface PropTypes extends StylesTypes {
    children: string;
}

type StylesTypes = {
    center?: boolean;
}

//! Styles
const NoAvailableStyled = styled.h1<StylesTypes>`
    color: ${({ theme }) => theme.text.primary };
    font-size: 30px;

    ${({ center }) => center ? {
        position:  'absolute',
        top:       '50%',
        left:      '50%',
        transform: 'translate(-50%, -50%)',
    } : {
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        height:         'auto',
        width:          '100%',
    } }
`;

export const NoAvailable: FC<PropTypes> = ({ center, children }) => {
    return (
        <NoAvailableStyled center = { center }>
            <p>
                {children}
            </p>
        </NoAvailableStyled>
    );
};

