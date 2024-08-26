import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
import Onebox from './components/onebox'

import './App.css'

const App = () =>
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/onebox" component={Onebox} />
    <Redirect to="/" />
  </Switch>
  


export default App
