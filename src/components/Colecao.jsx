import React, {useState} from 'react'
import calcados from '../calçados/calcados.json'
import {ContainerImg, ContainerInfo, ContainerPrecoBtn, ContainerInput, Input} from "./stylesColecao"
import { Link } from 'react-router-dom'
import { FcSearch } from 'react-icons/fc';

function Colecao(props) {

  const [ordenar, setOrdenar] = useState('')
  const [valor, setValor] = useState('')

  console.log(props);
  const showItem = ([sapato]) => {
    props.setSneakers([sapato])
    props.setImagem(sapato.imgP1)
  }

  const handleOrdenar = (e) => {
    setOrdenar(e.target.value)
  }
  const handleValor = (e) => {
    setValor(e.target.value)
  }

  return (
    <>
      <ContainerInput>
      <label htmlFor="busca">Maior Valor pra o Menor:</label>
      <select onChange={handleValor} name="busca" id="busca">
      <option value="">.........</option>
        <option value="maiorValor">Maior Valor</option>
        <option value="menorValor">Menor Valor</option>
      </select>
      <label htmlFor="alfabetica">Ordem Alfabética:</label>
      <select onChange={handleOrdenar} name="alfabetica" id="busca">
        <option value="">.........</option>
        <option value="crescente">A---Z</option>
        <option value="decrecente">Z---A</option>
      </select>
      
        <Input onChange={props.handleTxt} placeholder='Nome' type="text" name="" id=""  />
        <FcSearch/>
      </ContainerInput>
    <ContainerImg className="container-img">
    
          {calcados.filter((sapato) => sapato.name.toLowerCase().includes(props.txt.toLowerCase()))
                    .sort((a,b) => {
                      return ordenar === "crescente"? a.name > b.name? 1 :-1: ordenar === "decrecente"? a.name < b.name? 1 : -1: 0
                    })
                    .sort((a,b) => {
                      return valor === "maiorValor"? a.preco > b.preco? 1 :-1: valor === "menorValor"? a.preco < b.preco? 1 : -1: 0
                    })
          .map(sapato =>{
           return(
           <ContainerInfo key={sapato.id}>
              <Link  to={'/collections'}><img key={sapato.id} src={sapato.imgG} onClick={()=>showItem([sapato])} /></Link> 
                <p className="color-titilo-laranja">{sapato.name}</p>
                <ContainerPrecoBtn>
                  <p><span>R$: {sapato.preco},00 </span></p>
                  <button className="btn-add-card color-titilo-laranja" onClick={() => props.addItem(sapato)}>
                  <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fill-rule="nonzero"/></svg>Add to cart
                  </button>
                </ContainerPrecoBtn>
                
           </ContainerInfo>
            
            )
            
          })}
          
        </ContainerImg>
    <Link to={'/'}>
     
    </Link>
    
    </>
    
  )
}

export default Colecao