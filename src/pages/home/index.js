import React from 'react'
import {Animated} from 'react-native'
import { PanGestureHandler, State} from 'react-native-gesture-handler'
import { MaterialIcons} from '@expo/vector-icons'

import { Container,
        Content,
        Card,
        CardHeader,
        CardContent,
        Title,
        Description,
        CardFooter,
        Anotation
        } from './styles'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'


export default function Home(){
    let offSet = 0
    const translateY = new Animated.Value(0)

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent:{
                    translationY: translateY
                }
            }
        ],
        { useNativeDriver: true}
    )

    function onHandlerStateChange(event){
        if(event.nativeEvent.oldState === State.ACTIVE){
            const { translationY} = event.nativeEvent

            offSet += translationY
            let opened = false
            // translateY.setOffset(offSet)
            // translateY.setValue(0)

            if(translationY >= 100){
                opened = true

            }else{
                translateY.setValue(offSet)
                translateY.setOffset(0)
                offSet = 0
            }
            
            Animated.timing(translateY, {
                toValue: opened ? 380 : 0,
                duration: 200,
                useNativeDriver: true
            }).start(()=>{
                offSet = opened ? 380 : 0,
                translateY.setOffset(offSet)
                translateY.setValue(0)
            })
        }
    }

    return(
        <Container>
            <Header/>

            <Content>
                {/* ********** Menu (que fica debaixo do card) */}
                <Menu translateY={translateY} />

                <PanGestureHandler 
                onGestureEvent={animatedEvent}
                onHandlerStateChange={onHandlerStateChange}
                >
                    {/* ********* Card Principal ********* */}
                    <Card style={{
                        transform: [{
                            translateY: translateY.interpolate({
                                inputRange: [-100, 0, 380],
                                outputRange: [-30, 0, 380],
                                extrapolate: 'clamp'
                            })
                        }]
                    }}>
                        <CardHeader>
                            <MaterialIcons name='attach-money' size={28} color='#666'/>
                            <MaterialIcons name='visibility-off' size={28} color='#666'/>
                        </CardHeader>

                        <CardContent>
                            <Title>Saldo disponível</Title>
                            <Description>R$ 769.300,69</Description>
                        </CardContent>

                        <CardFooter>
                            <Anotation>
                                Transferência de R$ 60.00 recebida de Anna hoje às 06:00h
                            </Anotation>
                        </CardFooter>
                    </Card>
                </PanGestureHandler>
            </Content>

                    {/* ************ Tabs *************** */}
            <Tabs translateY={translateY} />

        </Container>
    )
}
















