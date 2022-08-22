import Global from "./styles/global"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import { posts } from "./database"

export function App() {

  return (
    <div>
      <Global />
      <Header />

      <div className="container--feed">

        <Sidebar />
         

          <main>
            {
              posts.map((post) => {
                return(
                  <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
                )
              })
            }
        
          </main>

      </div>

    </div>
  )
}


