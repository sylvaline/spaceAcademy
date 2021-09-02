import React, {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Contact from './component/Contact'
import Course from './component/Course'
import Home from './component/Home'
import Loading from './component/Loading'
import Login from './component/Login'
import PaymentPage from './component/PaymentPage'
import Signup from './component/Signup'



function App() {


  const [page_loading, setPage_loading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPage_loading(false);
    }, 3000);
  });

  if (page_loading) {
    <Loading />
  }


  return (
    <div>
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/login" component={Login} />
       <Route path="/signup"  component={Signup} />
       <Route path="/contact"  component={Contact} />
       <Route path="/course" component={Course} />
       <Route path="/payment" component={PaymentPage} />
     </Switch>
    </div>
  )
}

export default App

