

import { Outlet } from 'react-router-dom'
import Heade from '../components/header/Heade'
import OtherPath from '../components/other/OtherPath'



function App() {
  

  return (
    <>
      <div>
        <Heade/>
        {/* outlet means display the childreen of this app */}
        <Outlet/>
        <OtherPath/>
      </div>
    </>
  )
}

export default App
