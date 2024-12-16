import { useState } from 'react'
import date from './data/languages'
import Post from './components/Post'

function App() {
  const [title, setTitle] = useState(0)
  const [desc, setDesc] = useState(0)

  // console.log(count, setCount);

  return (
    <>
      {date.map(curPost => {
        return (<Post
          key={curPost.id}
          post={curPost}
          setTitle={setTitle}
          setDesc={setDesc} />)
      })
      }
      <div class="counter">{title}</div>
      <div class="counter">{desc}</div>
    </>
  )
}

export default App
