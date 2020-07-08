import React from 'react';

import {Container, Option, TitleOption, ImageOption} from './styles';

import frontEnd from '../../Images/DevelopmentAreas/frontEnd.png';
import backEnd from '../../Images/DevelopmentAreas/backEnd.png';
import mobile from '../../Images/DevelopmentAreas/mobile.png';
import desktop from '../../Images/DevelopmentAreas/desktop.png';
import games from '../../Images/DevelopmentAreas/games.png';

const items = [
    {
        key: String(Math.random()),
        id: 1,
        title: 'Web Front - End',
        img: frontEnd,
        description1: 'O desenvolvdor Front-End é responsável pela camada de apresentação de produtos digitais (normalmente sites).',
        description2: 'Resumidamente, o front é aquilo que o usuário vê e interage',
    },
    {
        key: String(Math.random()),
        id: 2,
        title: 'Web Back - End',
        img: backEnd,
    },
    {
        key: String(Math.random()),
        id: 3,
        title: 'Mobile',
        img: mobile,
    },
    {
        key: String(Math.random()),
        id: 4,
        title: 'Desktop',
        img: desktop,
    },
    {
        key: String(Math.random()),
        id: 5,
        title: 'Games',
        img: games,
    },
]

export default function DevelopmentAreas(){
    return(
        <Container>

            {items.map(item => (
                <Option key={item.key}>

                    <TitleOption>{item.title}</TitleOption>

                    <ImageOption source={item.img} alt={item.title} />

                </Option>
            ))}

        </Container>
    )
}