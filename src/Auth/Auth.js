import React, {Component} from "react"
import  './Auth.css'
//import classes from './Auth.css'
import axios from 'axios'

export default class Auth extends Component {
    loginHandler=()=> {
    }
    registerHandler= async ()=> {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=\n' +
                'AIzaSyBNd8akyfEyQieIWoEFivcuXPEEfT8ON5c', authData)

            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }
    submitHandler=event=>{
        event.preventDefault()
    }

render() {
return(
    <div className='Auth'>
      <div><h1>Sign in</h1></div>
        <form onSubmit={this.submitHandler} className='AuthForm'>

            <input name="email" type="text"/>
            <input name="password" type="text"/>
            <input type="button" onClick={this.loginHandler} value="Enter"/>
            <input type="button" onClick={this.registerHandler} value="Register"/>
        </form>

    </div>
)
}
}