import React from 'react'
import {ContainerResumo, BackDrop, BtnCheckOut} from './stylesResumo'

function Resumo(props) {
    console.log(props.totalPagar)
  return (
    <BackDrop>
        <ContainerResumo>
            <h1>Resumo da compra</h1>
            <p>Parabens {props.userLogin.nome} por suas compras elas chegarão em 7 dias uteis</p>
            <p>O valor Total: R$ {props.totalPagar},00</p>
            <BtnCheckOut onClick={props.handleResumo}>Continuar Comprando</BtnCheckOut>
        </ContainerResumo>
    </BackDrop>
    
  )
}

export default Resumo