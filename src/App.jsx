import { useState } from 'react'
import data from './data/languages'
import Btn from './components/Btn'

function App() {
  const [card, setCard] = useState(0)

  return (
    <>

      <h1>Learn Web development</h1>
      <nav>
        {data.map(curPost => {
          return (
            <Btn
              key={curPost.id}
              post={curPost}
              // quanto verrà invocata la funzione setTitle come props invocherà la funzione seTitle per aggiornare il valore dello state
              onClick={() => setCard(curPost)}
            />)
        })
        }
      </nav>

      <div className='content'>
        <div class="title">{card.title}</div>
        <div class="desc">{card.description}</div>
      </div>
    </>
  )
}

export default App
