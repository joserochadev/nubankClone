import React  from "react"
import { MaterialIcons} from '@expo/vector-icons'

import { Container, Code, QRcode, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from "./styles"

// import LogoQR from '../../assets/qr.png'

export default function Menu({ translateY}){
    return(
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
                extrapolate: 'clamp'
            })
        }}>
            <Code>
                <QRcode />
            </Code>

            <Nav>
                <NavItem>
                    <MaterialIcons name='help-outline' size={20} color='#FFF' />
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name='person-outline' size={20} color='#FFF' />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name='credit-card' size={20} color='#FFF' />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name='smartphone' size={20} color='#FFF' />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}