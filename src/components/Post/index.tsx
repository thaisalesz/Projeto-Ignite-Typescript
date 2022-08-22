import { Container } from "./style"
import { Comment } from "../Comment"
import { Avatar } from "../Avatar"
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState } from "react"

 
export interface Author{
    avatarUrl: string;
    name: string;
    role: string
  }

  export interface Content{
    type: string;
    content: string;
  }

  export interface Post{
    id: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
  }

interface PostProps{
    author: Author;
    content: Content[];
    publishedAt: Date;
}

export function Post({author, content, publishedAt}: PostProps){

    // const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',

    // }).format(publishedAt)

    const publishedDateFormat = format(publishedAt,"dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelative = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix: true,
    })

    const [comments, setComments] = useState<string[]>([])
    const [newCommentText, setNewCommentText] = useState<string>("")


    const createNewComment = (e: FormEvent) => {
        e.preventDefault()        
        setComments((prev) => [...prev, newCommentText])
        setNewCommentText("")       
    }
    
    const deleteComment = (commentToDelete: string) => {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0
    return(
        <Container>
            <header>
                <Avatar hasBorder src={author.avatarUrl}/>
                    
                    <div>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelative}
                </time>
            </header>

            <div className="content">
              {
              content.map((line) => {
                if(line.type === 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else if(line.type === 'link'){
                    return <p key={line.content}><a>{line.content}</a></p>
                }
              })
            }
            </div>


            <form onSubmit={createNewComment}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    value={newCommentText}
                    onChange = {(e) => setNewCommentText(e.target.value)}
                    name="comment"
                    placeholder="Deixe um comentário"
                    required
                />

                <div>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </div>

            </form>
            <div>
                {comments.map((comment) =>                 
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                )}
            </div>

        </Container>
    )
}