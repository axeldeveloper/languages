import React, {useState} from 'react';

import {Modal} from 'react-native';

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
        description2: 'Resumidamente, o front é aquilo que o usuário vê e interage.',
    },
    {
        key: String(Math.random()),
        id: 2,
        title: 'Web Back - End',
        img: backEnd,
        description1:'Um desenvolvedor Back-End é o responsável por tudo o que está "atrás dos panos" desse cenário de programação, toda a estrutura que suporta nossas ações nas máquinas.',
        description2: 'Basicamente o dev Back-End está trabalhando em tudo o que ocorre nos bastidores.'
    },
    {
        key: String(Math.random()),
        id: 3,
        title: 'Mobile',
        img: mobile,
        description1:'Um desenvolvedor mobile é uma parte criativo e outra um grande resolvedor de problemas.',
        description2: 'Esse profissional é responsável por atuar no desenvolvimento de aplicativos ou sistemas para dispositivos móveis, seja programando de forma nativa ou por meio de outras linguagens.',
    },
    {
        key: String(Math.random()),
        id: 4,
        title: 'Desktop',
        img: desktop,
        description1:'O programador desktop desenvolve aplicativos que rodam em máquinas locais ou em redes corporativas.',
        description2:'Assim é necessário ter conhecimentos em sistemas operacionais (Windows, Linux ou MAC).',
    },
    {
        key: String(Math.random()),
        id: 5,
        title: 'Games',
        img: games,
        description1: 'Desenvolve instruções lógicas do jogo digital.',
        description2: 'Trabalha com jogos para computador, dispositivos móveis ou videogames.'

    },
]

export default function DevelopmentAreas(){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleShowMoreInfo(items){
        console.log(items);
    }

    return(
        <Container>

            {items.map(item => (
                <Option key={item.key} onPress={() => handleShowMoreInfo(item)}>

                    <TitleOption>{item.title}</TitleOption>

                    <ImageOption source={item.img} alt={item.title} />

                    <Modal
                    animationType="slide"
                    visible={modalIsOpen}>



                    </Modal>

                </Option>
            ))}

        </Container>
    )
}