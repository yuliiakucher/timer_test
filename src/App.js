import React, {useEffect} from 'react'
import Register from './components/Register'
import Login from './components/Login'
import HomePage from './components/HomePage'
import {connect} from 'react-redux'
import {getUpdate} from './redux/store'
import {Route, Redirect} from 'react-router-dom'



function App({getUpdate, isLoading}) {

 

  useEffect(() => {
    getUpdate()
  }, [])


  return (
    <>
      <>
          {/* <Redirect from="/" to="/home" /> */}
          {isLoading  ? `Wait...` : <Route exact path='/home' render={() => <HomePage/>}/>}
          <Route path='/register' render={() => <Register/>}/>
          <Route path='/login' render={() => <Login/>}/>
      </>     
    
    </>
   
    
  );
}

let mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  }
}

export default  connect(mapStateToProps, {getUpdate})(App);
