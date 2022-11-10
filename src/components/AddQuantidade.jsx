import React, { useEffect } from 'react'

function AddQuantidade(props) {
  console.log(props);
    const lessAmount = () => {
        props.setAmountItems(props.amountItems <= 1? 1: props.amountItems - 1)
        
      }
    const addAmount = () => {
        props.setAmountItems(props.amountItems + 1)
      }
 
  return (
    <>
    {props.sneakers.map(item =>{
      return(
        <div className="mudar-quantidade">
        <button onClick={() =>lessAmount(item)} className="diminuir btn-size">-</button>
        <div  className="quantidade btn-size">{props.amountItems}</div>
        <button onClick={() =>addAmount(item)} className="almentar btn-size">+</button>
    </div>
      )
    })}
    </>
  )
}

export default AddQuantidade