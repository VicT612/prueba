import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {Card, Button, Title, Paragraph} from 'react-native-paper';

export default function Cards() {
    return(
        <Card style={styles.container}>
            <Card.Content>
                <Title>Titulo</Title>
                <Card.Cover source={require('../assets/images/cien.png')} />
                <Paragraph>Esto es un card</Paragraph>
                <Card.Actions>
                    <Button>Boton</Button>
                </Card.Actions>
            </Card.Content>
        </Card>
    );
}