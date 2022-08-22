import { Container } from "./style"
import { FiTrash2 } from 'react-icons/fi';
import {MdThumbUpAlt} from 'react-icons/md'
import { BsDot } from 'react-icons/bs'
import { Avatar } from "../Avatar";
import { useState } from 'react'

interface CommentProps{
    content: string;
    onDeleteComment: (content: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps){

    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeComment = () => {
        setLikeCount(likeCount + 1)
    }

    return(
        <Container>
            <Avatar src={"https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"}
             hasBorder={false}
            />

            <div>
                <div className="content-box">
                    <header>
                        <div>
                        <strong>Nome do usuário</strong>
                        <time>Cerca de 2h atrás</time>
                        </div>

                        <button 
                        title="Deletar comentário"
                        onClick={handleDeleteComment}> 
                            <FiTrash2 size={20}/> 
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeComment}> <MdThumbUpAlt /> Aplaudir <span> <BsDot /> {likeCount}</span></button>
                                   
                </footer>
            </div>


        </Container>
    )
}