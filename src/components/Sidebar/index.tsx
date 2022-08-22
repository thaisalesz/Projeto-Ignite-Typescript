import background from "../../assets/sidebar-bg.jpg"
import { Container } from "./style"
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

export function Sidebar(){
    return(
        <Container>
            <img src={background}  />

            <div>
                <Avatar hasBorder src={"https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"}/>
                <strong>Usuário</strong>
                <span>Desenvolvedor</span>
            </div>

            <footer>
                <button> <PencilLine size={20} /> Editar seu Perfil</button>
            </footer>

        </Container>
    )
}