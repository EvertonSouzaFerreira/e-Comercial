import React, {useState} from 'react'
import { useEffect } from 'react';
import BtnComprar from '../components/BtnAddCar'
import AddQuantidade from './AddQuantidade'


function ProdutoEscolhido(props) {
console.log(props);
// const [imagem, setImagem] = useState(props.sneakers[0].imgP1)

 const imgP1 = (img1) => {
    props.setImagem(img1)
    //props.setSneakers([ img1])
    
 }


 
  return (
    <>
    <main>
      
      <div className="main-container">
        
            
            {props.sneakers
            
            .map(item =>{
             
             return( 
              <>
              <div className="container-img">
               <img src={props.imagem}/>
                <div className="mini-imgs">
                <li onClick={() => imgP1(item.imgP1)}><img src={item.imgP1} alt="img1"/></li>
                <li onClick={() => imgP1(item.imgP2)}><img src={item.imgP2} alt="img2"/></li>
                <li onClick={() => imgP1(item.imgP3)}><img src={item.imgP3} alt="img3"/></li>
                <li onClick={() => imgP1(item.imgP4)}><img src={item.imgP4} alt="img4"/></li>
            </div>
             </div>
        
             <div className="container-iformation">
               <p className="color-titilo-laranja">{item.name}</p>
       
               <h1>Fall Limited Edition <br/> Sneakers</h1>
               <p className="color-p">
                 These low-profile sneakers are your perfect casual wear companion. Featuring a 
                 durable rubber outer sole, they’ll withstand everything the weather can offer.
               </p>
               <div className="preco">
                   <h3>Page ${(item.preco*50)/100}.00 <span>- 50%</span> com o cupom de Desconto</h3>
                   <s className="preco-antigo color-p">
                     {item.preco},00
                   </s>
               </div>
               
               <div className="container-btns">
                 <AddQuantidade addItem={props.addItem} sneakers={props.sneakers} setSneakers={props.sneakers} amountItems={props.amountItems} setAmountItems={props.setAmountItems}/>
                 <BtnComprar calsados={props.calsados} addItem={props.addItem} sneakers={props.sneakers} setNewItem={props.setNewItem} newItem={props.newItem} imagem={props.imagem}/>
               </div>
               
               
             </div>
             </>
            )
            })}
              
           
       
      </div>
    </main>
    </>
  )
}

export default ProdutoEscolhido