import React, { useState } from 'react';
import { Keyboard, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';

import { Background } from '../../components/shared/Background';
import { Button } from '../../components/shared/Button';
import { DismissKeyboardView } from '../../components/shared/DissmissKeyboardView';

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

const SearchBar = styled.View`    
    flexDirection: row;        
    border-radius: 100%;
    background-color: white;    
    padding-left: 20px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 18px;
`;


const Home = () => {
    return (
        <Background>
            <DismissKeyboardView>
                <Container>

                    <Header>
                        <SearchBar>
                            <Input />
                            <Button title="Adicionar" />
                        </SearchBar>
                    </Header>

                </Container>
            </DismissKeyboardView>
        </Background>
    )
}

export default Home;