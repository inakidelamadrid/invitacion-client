import React from 'react'
import { Route, Switch } from 'react-router'
import logo from './logo.svg'
import './App.css'

import InviteeForm from './components/page/InviteeForm'
import InviteeList from './components/page/InviteeList'

function App() {
  return (
    <div className="App container mx-auto px-4 py-2">
      <Switch>
        <Route exact path="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="bg-blue-600">
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </Route>
        <Route path="/invitees" component={InviteeList} />
        <Route path="/createInvite" component={InviteeForm} />
      </Switch>
    </div>
  )
}

export default App
