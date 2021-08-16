import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { Header, Footer } from './components'
import {Home, News, Photos, Contact} from './pages'

function App() {
  
  return (
    <div class="site-content">
    <Header items={['Home', 'News', 'Photos', 'Contact']}/>
    <Switch>
      <Route exact path='/' render={() => <Home/>}/>
      <Route exact path='/news' render={() => <News/>}/>
      <Route exact path='/photos' render={() => <Photos/>}/>
      <Route exact path='/contact' render={() => <Contact/>}/>
    </Switch>
    <Footer />
</div>
  )
}

export default App
