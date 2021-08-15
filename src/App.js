import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { Header, Footer } from './components'
import {Home, News, Photos, Contact} from './pages/'

function App() {
  return (
    <div class="site-content">
    <Header items={['Home', 'News', 'Photos', 'Contact']}/>
    <Switch>
      <Route exact path='/'component={Home}/>
      <Route exact path='/news'component={News}/>
      <Route exact path='/photos'component={Photos}/>
      <Route exact path='/contact'component={Contact}/>
    </Switch>
    <Footer />
</div>
  )
}

export default App
