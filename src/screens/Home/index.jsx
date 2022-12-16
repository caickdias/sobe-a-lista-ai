import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';

import { Background } from '../../components/shared/Background';
import { Button } from '../../components/shared/Button';
import { DismissKeyboardView } from '../../components/shared/DissmissKeyboardView';
import AppContext from '../../context/AppContext';

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

const Text = styled.Text`
`;

const Home = () => {
    
    const [player, setPlayerToAdd] = useState('');
    const { players, setPlayers } = useContext(AppContext);

    const handlePlayerAdd = () => {
        setPlayers([...players, player]);
        setPlayerToAdd('');
    }

    return (
        <Background>
            <DismissKeyboardView>
                <Container>

                    <Header>
                        <SearchBar>
                            <Input 
                                onChangeText={setPlayerToAdd}
                                value={player}
                            />
                            <Button title="Adicionar" onPress={handlePlayerAdd} />
                        </SearchBar>
                    </Header>

                    <Text>{JSON.stringify(players)}</Text>

                </Container>
            </DismissKeyboardView>
        </Background>
    )
}

export default Home;