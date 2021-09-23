//!Core
import React, { FC } from 'react';

//! Styles
import { HeadStyled, IconStyled, CurrentDateStyled, TextStyled, DateStyled } from './styles';

export const Head: FC = () => {
    return (
        <HeadStyled>
            <IconStyled></IconStyled>
            <CurrentDateStyled>
                <TextStyled>Пятница</TextStyled>
                <DateStyled>29 ноября</DateStyled>
            </CurrentDateStyled>
        </HeadStyled>
    );
};
