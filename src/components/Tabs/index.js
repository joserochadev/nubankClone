import React from "react"
import {MaterialIcons} from '@expo/vector-icons'

import { Container, TabContainer, TabItem, TabText} from './styles'

export default function Tabs({ translateY}){
    return(
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 350],
                outputRange: [1, 0.3],
                extrapolate: 'clamp'
            }),

            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 100],
                    extrapolate: 'clamp'
                })
            }]
        }}>
            <TabContainer>
                <TabItem>
                    <MaterialIcons name='person-add' size={24} color='#FFF'/>
                    <TabText>Adicionar amigo</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name='chat-bubble-outline' size={24} color='#FFF'/>
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name='arrow-downward' size={24} color='#FFF'/>
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name='arrow-upward' size={24} color='#FFF'/>
                    <TabText>Trânsferir</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name='lock' size={24} color='#FFF'/>
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabContainer>
        </Container>
    )
}

