import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {getSignOut, writeDB, readDB} from '../redux/store'
import Timer from './Timer'




class HomePage extends React.Component {

    state = {
        time: this.props.time_desktop
    }

    mobile = window.screen.width <= 375 && window.screen.height <= 900

    handleTime = (time) => {
        this.setState({time: time})
    }


    handleClick = () => {
        this.props.getSignOut()
    }

    componentDidMount(){
        console.log(this.mobile)
        if (this.mobile) {
            this.props.readDB('mobile')
        } else this.props.readDB('desktop')        
    }

    componentWillUnmount(){
        if (this.mobile) {
             this.state.time && this.props.writeDB('mobile', this.state.time)
        } else this.state.time && this.props.writeDB('desktop', this.state.time)
    }

    


    render() {
        return(
            <>
                {this.props.currentUser === null 
                    ? <Redirect to='/login'/>
                    :<div>Home page
                        <NavLink to='/login'>
                            <button>Log in</button>
                        </NavLink>

                        <NavLink to='/register'>
                            <button>Sign in</button>
                        </NavLink>

                        <div>
                            <button onClick={this.handleClick}>Sign out</button>
                        </div>
                        {this.mobile 
                            ? <h1>Mobile</h1>
                            : <h1>Desktop</h1>
                        }
                        <Timer time={this.state.time} setTime={this.handleTime}/>
                    </div>
                  }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentUser: state.currentUser,
        time_desktop: state.time_desktop
    }
}

export default connect(mapStateToProps, {getSignOut, writeDB, readDB})(HomePage)