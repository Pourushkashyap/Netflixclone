import { useState } from 'react'

import Body from './component/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Body/>
    </>
  )
}

export default App
