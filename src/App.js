import React from 'react'
import { Route, Switch } from 'react-router'
import logo from './logo.svg'
import './App.css'

import AdminPage from './components/page/AdminPage'
import HomePage from './components/page/Home'
import InviteDesign from './components/page/InviteDesign'
import InviteeForm from './components/page/InviteeForm'
import InviteeList from './components/page/InviteeList'
import InvitePreview from './components/page/InvitePreview'

function App() {
  return (
    <div className="App container mx-auto px-4 py-2">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/admin" component={AdminPage} />
        <Route exact path="/invitees" component={InviteeList} />
        <Route path="/invite/design" component={InviteDesign} />
        <Route path="/invitees/preview/:code" component={InvitePreview} />
        <Route path="/createInvite" component={InviteeForm} />
      </Switch>
    </div>
  )
}

export default App
