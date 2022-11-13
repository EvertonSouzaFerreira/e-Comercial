import React from 'react'
import {ContainerCarrinho, InfoCarrinho, BtnCheckOut} from "../User/stylesUser"

function User(props) {

  const handleUser = () => {
    props.setUserIsShown(false)
  }

  return (
    <>
      {props.userIsShown?<ContainerCarrinho >
        <img  width='80px'  />
        <h2>Signed in as</h2>
        <p>{props.userLogin.nome}</p>
        <h2>Email</h2>
        <p>{props.userLogin.email}</p>
        <BtnCheckOut onClick={handleUser}>Sign out</BtnCheckOut>
      </ContainerCarrinho>: <ContainerCarrinho>
        <h2>Faca o Login</h2>
        <BtnCheckOut onClick={props.handleLogin}>Login</BtnCheckOut>
      </ContainerCarrinho>}    
    </>
  )
}

export default User