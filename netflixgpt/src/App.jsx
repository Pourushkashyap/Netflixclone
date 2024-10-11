import { useState } from 'react'
import {Provider} from 'react-redux'
import Body from './component/Body'
import appstore from './util/appStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Provider store={appstore}>
      <Body/>
      </Provider>
    
    </>
  )
}

export default App
