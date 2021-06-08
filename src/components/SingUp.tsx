import { Container, Input, Button, ButtonGoogle } from '../styles/components/singup'

export function SingUp() {
    return (
        <Container>
            <h1>Registre-se</h1>
            <span>
                ou 
                <a href="#"> acesse sua conta</a>
            </span>

            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <Input type="text" placeholder="CNPJ" />

            <div>
                <input type="checkbox" name="" id="" />
                <span>Concordo com os <a>Termos do Facemask</a></span>
            </div>

            <Button type="button">
                <span>Registre-se</span>
            </Button>
            <ButtonGoogle>
                <img src="icons/google.svg" alt="Google" />
                <span>Registrar-se pelo Google</span>
            </ButtonGoogle>
        </Container>
    )
}
