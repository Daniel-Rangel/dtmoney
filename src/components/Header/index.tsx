import logoImg from '../../assets/logo.svg'

import {Container , Content} from './styles'

interface headerProps {
    onOpenNewTransationModal : () => void
}

export function Header({onOpenNewTransationModal} : headerProps){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransationModal}>
                    nova transação
                </button>
               
            </Content>
        </Container>
    )
}