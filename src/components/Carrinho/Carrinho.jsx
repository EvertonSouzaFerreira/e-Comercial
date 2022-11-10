import React from 'react'
import { RiDeleteBinFill } from 'react-icons/ri';

import {ContainerCarrinho, InfoCarrinho, BtnCheckOut} from "../Carrinho/styleCarrinho"

function Carrinho(props) {

  const lessAmount = (it) => {
    console.log(it.id)
    console.log(it.quantidade)
    const novo = props.newItem.map(item => {
      if (item.id === it.id) {
        return { ...item, quantidade: it.quantidade - 1}
      }else{
        return item
      }
    })
    props.setNewItem(novo)
    if (it.quantidade <= 1){
      props.deleteItem(it.id)
    }
}
const addAmount = (it) => {
    // props.setNewItem(it.quantidade + 1)
    console.log(it.quantidade)
    const novo = props.newItem.map(item => {
      if (item.id === it.id) {
        return { ...item, quantidade: it.quantidade + 1}
      }else{
        return item
      }
    })
    props.setNewItem(novo)
}

  return (
    <ContainerCarrinho>
      <div className='flex'>
        <h3 style={{color: 'black', margin: '1rem'}}>Cart</h3>
        <p> <b style={{color: 'black'}}>Total a Pagar: </b><span style={{color:'hsl(26, 100%, 55%)'}}>R$ {props.totalPagar},00</span></p>
      </div>
       
          {props.newItem.map(sneaker => {
            return(
              <>
              <InfoCarrinho key={sneaker.id}>
              <img onClick={() => props.handleShow(sneaker)} width='80px' src={sneaker.imgP1} />
              <p>{sneaker.name}</p>
                <div className="mudar-quantidade">
                <button onClick={() =>lessAmount(sneaker)} className="diminuir btn-size">-</button>
                <div  className="quantidade btn-size">{sneaker.quantidade}</div>
                <button onClick={() =>addAmount(sneaker)} className="almentar btn-size">+</button>
              </div>
          <RiDeleteBinFill style={{fontSize:'30px', color:'hsl(26, 100%, 55%)'}} onClick={() => props.deleteItem(sneaker.id)} >Delete</RiDeleteBinFill>
          </InfoCarrinho>
            
            </>
            )
            
          })}
            
       
        <BtnCheckOut onClick={props.hideCartHandler}>Close</BtnCheckOut>

    </ContainerCarrinho>
  )
}

export default Carrinho