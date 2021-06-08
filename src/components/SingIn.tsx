import { useContext } from 'react'
import { LinkContext } from '../context/LinkContext'
import { Container, Input, Button, ButtonGoogle } from '../styles/components/singup'

export function SingIn() {
    const { handleClickLink } = useContext(LinkContext)

    return (
        <Container>
            <h1>Acesse</h1>
            <span>
                sua conta do Facemask ou 
                <a href="#" onClick={handleClickLink}> crie uma nova conta</a>
            </span>

            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
        
            <div>
                <input type="checkbox" name="" id="" />
                <span>Lembrar meus dados</span>
            </div>

            <Button type="button">
                <span>Acessar</span>
            </Button>
            <ButtonGoogle>
                <img src="icons/google.svg" alt="Google" />
                <span>Fazer login com o Google</span>
            </ButtonGoogle>
        </Container>
    )
}
