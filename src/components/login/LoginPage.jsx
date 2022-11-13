import React from 'react'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import {ContainerLogin, BackDrop, Btn} from '../login/stylesLogin'

function LoginPage(props) {

  const [userNaoEncontrado, setUserNaoEncontrado] = useState(false)

  const handleNameEmail = (e) => {
    let nome = e.target.value
    props.setUserLogin({...props.userLogin, nome})
  }

  const handlePassword = (e) => {
    let password = e.target.value
    
    props.setUserLogin({...props.userLogin, password})
  }

  

  const login = () =>{
      // props.setUserLogin({...user})
      for(let users of props.user)
       {
        if (props.userLogin.nome === users.nome && props.userLogin.password === users.password) {
          props.setLoginIsShown(false)
          props.setUserIsShown(true)
        }else{
          setUserNaoEncontrado(true)
        }
       }
      
  }


  return (
    <BackDrop>
        <GrClose onClick={props.handleLogin} style={{cursor: "pointer", fontSize: '30px', backgroundColor: 'white', position: 'absolute', top: '5rem', right: '10rem'}}/>
    <ContainerLogin>
        <h1>Login</h1>
        <div style={{margin: '1.5rem'}} className="line"></div>
        <div className='inputs'>
          <label htmlFor="email">Nome/Email: </label>
          <input onChange={handleNameEmail} type="email" name="email" id="email" placeholder='Email'/>
        </div>
        <div className='inputs'>
          <label htmlFor="password">Password: </label>
          <input onChange={handlePassword} type="password" name="password" id="password" placeholder='Password'/>
        </div>
        {userNaoEncontrado && <p style={{color: 'red'}}>Usuario nao cadastrado</p>}
        <Btn onClick={login} className="btn-add-card color-titilo-laranja">Login</Btn>

    </ContainerLogin>
    </BackDrop>
  )
}

export default LoginPage