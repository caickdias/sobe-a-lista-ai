import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`    
    padding: 10px;    
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #273c75;
`;

export const Button = ({ title, onPress }) => {
    return(
        <Container onPress={onPress}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}