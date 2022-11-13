import React from 'react'
import {GrClose} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import {ContainerSignUp, BackDrop, Btn} from './stylesSignUp'

function SignUp(props) {

    const handleName = (e) => {
        user.nome = e.target.value
    
    }
    const handleEmail = (e) => {
        user.email = e.target.value
    }

    const handlePassword = (e) => {
        user.password = e.target.value
    }

    const handlePassworConfirm = (e) => {
        user.passwordC = e.target.value
    }
    const user = {
        nome:"",
        email:"",
        password:"",
        passwordC:"",
    }

    const register = () => {
       props.setUser([...props.userState, user])
       props.setSinUpIdShown(false)
       props.setLoginIsShown(true)
    }
    const handleLogin = () => {
        props.setSinUpIdShown(false)
        props.setLoginIsShown(true)
       //props.userState
    }

  return (
    <BackDrop>
        <GrClose onClick={props.hadleSinUp} style={{cursor: "pointer", fontSize: '30px', backgroundColor: 'white', position: 'absolute', top: '5rem', right: '10rem'}}/>
        <ContainerSignUp>
        <h3>Register your account</h3>
        <div style={{margin: '1.5rem'}} className="line"></div>
        <div className='inputs'>
        <label htmlFor="nome">Name: </label>
        <input onChange={handleName} className='input' type="text" name='nome' placeholder='Enter your name'/>
        </div>
        <div className='inputs'>
        <label htmlFor="email">Email: </label>
        <input onChange={handleEmail} className='input' type="email" name="email" id="email" placeholder='Enter your email address'/>
        </div>
        <div className='inputs'>
        <label htmlFor="password">Password: </label>
        <input onChange={handlePassword} className='input' type="password" name="password" id="password" placeholder='Enter your Password'/>
        </div>
        <div className='inputs'>
        <label htmlFor="confirm-password">Confirm Password: </label>
        <input onChange={handlePassworConfirm} className='input' type="password" name="confirm-password" id="confirm-password" placeholder='Enter your password again.. Password'/>
        </div>
        <Btn onClick={register} className="btn-add-card color-titilo-laranja">SignUp</Btn>
        <p>Already have a account?  <a onClick={handleLogin}>Login</a> </p>
    </ContainerSignUp>
    </BackDrop>
    
  )
}

export default SignUp