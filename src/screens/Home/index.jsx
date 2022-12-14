import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/shared/Background';
import { Button } from '../../components/shared/Button';
import { DismissKeyboardView } from '../../components/shared/DissmissKeyboardView';
import AppContext from '../../context/AppContext';

import * as DB from '../../services/db';

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
    padding-left: 10px;
`;

const Input = styled.TextInput`
    flex: 1;
    background-color: #dcdde1;
    padding-left: 10px;
    font-size: 20px;    
`;

const Text = styled.Text`
`;

const Body = styled.View`
    flex: 1;
    padding: 0px 10px;
    padding-top: 10px;
    justify-content: space-between;
`
const Label = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`

const Card = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
    align-items: center;
    padding: 0px 10px;
    margin-bottom: 10px;    
    width: 100%;
    height: 50px;
    padding-top: 10px;    
    border-bottom-width: 1px;
    border-color: #bdc3c7;
`

const Footer = styled.View`
    display: flex;    
    border-top-width: 1px;        
    border-color: #bdc3c7;
    align-items: center;
    justify-content: center;
    width: 100%;    
`

const CardText = styled.Text`
    width: 50%;    
    font-size: 18px;
    color: #273c75;
`

const Home = () => {
    
    const [player, setPlayerToAdd] = useState('');
    const { players, setPlayers, addPlayer, deletePlayer } = useContext(AppContext);

    const handlePlayerAdd = () => {
        addPlayer(player);
        setPlayerToAdd('');
    }

    useEffect(() => {
        const fetchData = async () => {
            const list = await DB.loadList();        
            setPlayers(list);
        }
        fetchData();
    },[]);

    return (
        <Background>
            <DismissKeyboardView>
                <Container>

                    <Header>
                        <SearchBar>
                            <Input 
                                onChangeText={setPlayerToAdd}
                                placeholder="Jogador"
                                value={player}
                            />
                            <Button title="Adicionar" onPress={handlePlayerAdd} />
                        </SearchBar>
                    </Header>

                    <Body>
                        <Label>Lista</Label>              

                        <FlatList 
                            data={players}
                            keyExtractor={ item => item}
                            renderItem={({ item, index }) => (
                                <Card>
                                    <CardText>{`${index+1}. ${item}`}</CardText>
                                    
                                    <TouchableOpacity 
                                        style={{ padding: 10 }}
                                        onPress={() => deletePlayer(item)}
                                    >
                                        <Feather 
                                            name="x"
                                            size={24}
                                            color="red"
                                        />
                                    </TouchableOpacity>

                                    
                                </Card>
                            )}                        
                        />      
                    <Footer>
                        <Button title="Iniciar" />
                    </Footer>
                    </Body>


                </Container>
            </DismissKeyboardView>
        </Background>
    )
}

export default Home;