import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import User from './components/User'
import Register from './components/Register'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/user" component={User} />
    <Route exact path="/register" component={Register} />
    <Route component={NotFound} />
  </Switch>
)

export default App
