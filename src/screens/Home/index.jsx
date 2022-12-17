import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';
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
    padding: 20px 10px;
`
const Label = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`

const Card = styled.View`
    display: flex;
    justify-content: center;    
    width: 100%;
    height: 60px;
    padding-top: 10px;
    
    border-bottom-width: 1px;
    border-color: #bdc3c7;
`

const CardText = styled.Text`
    font-size: 18px;
    color: #273c75;
`

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
                                </Card>
                            )}                        
                        />      
                    </Body>

                </Container>
            </DismissKeyboardView>
        </Background>
    )
}

export default Home;