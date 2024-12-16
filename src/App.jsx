import { useState } from 'react'
import data from './data/languages'
import Btn from './components/Btn'

function App() {
  const [card, setCard] = useState(0)

  return (
    <>
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

      <div class="counter">{card.title}</div>
      <div class="counter">{card.description}</div>
    </>
  )
}

export default App
