import logo from "../../assets/ignite.png"
import { Container } from "./style"

export function Header(){
    return(
        <Container>
            <img src={logo} alt="Logotipo Ignite" />
        </Container>
    )
}