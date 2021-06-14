import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import About from './Component/About'
import Admission from './Component/Admission'
import Contact from './Component/Contact'
import deleteStudent from './Component/deleteStudent'
import Gallary from './Component/Gallary'
import Home from './Component/Home'
import News from './Component/News'
import Readmore from './Component/Readmore'
import Result from './Component/Result'
import ShowBCAres from './Component/ShowBCAres'
import Showstudent from './Component/Showstudent'
import updateStudent from './Component/updateStudent'


const Routing = () => {
    return (
        <div>
          <Router>
          <Switch>
          <Route path='/' component={Home} exact />
              <Route path='/showBCAres' component={ShowBCAres} exact/>
              <Route path='/about' component={About} exact/>
              <Route path='/contact' component={Contact} exact/>
              <Route path='/readmore' component={Readmore} exact/>
              <Route path='/result' component={Result} exact/>
              <Route path='/news' component={News} exact/>
              <Route path='/gallary' component={Gallary} exact/>
              <Route path='/admission' component={Admission} exact/>
              <Route path='/showStudent' component={Showstudent} exact/>
              <Route path='/deleteStudent' component={deleteStudent} exact/>
              <Route path='/updateStudent' component={updateStudent} exact/>

          </Switch>
          </Router>
        </div>
    )
}

export default Routing
