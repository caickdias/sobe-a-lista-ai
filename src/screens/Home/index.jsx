import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { Background } from '../../components/shared/Background';
import { Button } from '../../components/shared/Button';

const Container = styled.View`
    display: flex;
    flex: 1;
    padding: 20px 10px;
`;

const Header = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;    

`;

const Home = () => {
    return (
        <Background>
            <Container>

                <Header>
                    <Button title="Nova pelada" />
                </Header>

            </Container>
        </Background>
    )
}

export default Home;