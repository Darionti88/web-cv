
import Home from './Pages/Home/Index'
import {Switch, BrowserRouter, Route,} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/'><Home /></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
