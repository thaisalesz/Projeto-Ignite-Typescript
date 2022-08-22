import Global from "./styles/global"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=157&q=80", 
        name: "Olivia Bezerra",
        role: "Front-End Developer"
      },
      content: [
        {type: 'paragraph', content:"Fala galera"},
        {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},

        {type: 'link', content: "jane.design/doctorcare "},

      ],
      publishedAt: new Date("2022-05-03 20:00:00")
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80", 
        name: "Mike Brito",
        role: "Instructor"
      },
      content: [
        {type: 'paragraph', content:"Fala galera"},
        {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},

        {type: 'link', content: "jane.design/doctorcare "},

      ],
      publishedAt: new Date("2022-05-10 20:00:00")
    }
  ]



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


