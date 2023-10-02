

import { Outlet } from 'react-router-dom'
import Heade from '../components/header/Heade'




function App() {
  

  return (
    <>
      <div>
        <Heade/>
        {/* outlet means display the childreen of this app */}
        <Outlet/>
      
      </div>
    </>
  )
}

export default App
