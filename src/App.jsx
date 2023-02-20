import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Admin from './pages/Admin';
import Router from './routes/Router';
const App = () => {
  return (
    <div className="App">
       <BrowserRouter>
           <Router>
                <Admin/>
           </Router>
       </BrowserRouter>
  </div>
  )
}

export default App