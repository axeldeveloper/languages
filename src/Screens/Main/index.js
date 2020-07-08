import React from 'react';

import {StatusBar} from 'react-native';

import {Wrapper} from './styles';

import Header from '../../Components/Header';
import MainLanguages from '../../Components/MainLanguages';
import DevelopmentAreas from '../../Components/DevelopmentAreas';

export default function Main(){
    return(
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <Wrapper>

                <Header />
                
                <MainLanguages />

                <DevelopmentAreas />

            </Wrapper>
            
        </>
    )
}