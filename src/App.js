import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import styled, { createGlobalStyle } from "styled-components"
//componentes
import Colecao from "./components/Colecao";
import Header from "./components/Header";
import ProdutoEscolhido from "./components/ProdutoEscolhido";
import Footer from './components/Footer';


//jasonDB
import calcados from "./calçados/calcados.json";
//Style
import './style.css'
//Hooks
import { useEffect, useState } from "react";


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;

function App() {


  const [sneakers, setSneakers] = useState([])
  const [imagem, setImagem] = useState(sneakers.length >0? sneakers[0].imgP1:'')
  const [amountItems, setAmountItems] = useState(1)
  const [newItem, setNewItem] = useState([])
  const [totalPagar, setTotalPagar] = useState('')
  const [txt, setTxt] = useState('')
  // const [ordenar, setOrdenar] = useState('')
  const[cartIsShown, setCartIsShown] = useState(false)

  const handleTxt = (e) => {
    setTxt(e.target.value)
  }

  // const handleSearch =(colecao, txt) =>{
     
  //       const itemIgual =  colecao.filter(item => item.name.includes(txt))
  //       console.log(itemIgual)
  //       itemIgual.map(sneaker => {
  //         return(
  //           <li>{sneaker}</li>
  //         )
  //       })
  // }
  
  useEffect(() =>{
    setTotalPagar(newItem.reduce((acomulador, currentValue) =>  [+acomulador + +currentValue.preco * +currentValue.quantidade],0))
},[newItem])

  const showCartHandler = () => {
    if(cartIsShown === false){
      setCartIsShown(true) 
    }else{
      setCartIsShown(false)
    }
    
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const addItem = (it) => {
    setNewItem(newItem =>{
      if(newItem.find(item => item.id === it.id)==null){
        return[...newItem, {...it, quantidade: amountItems}]
      }else{
        return newItem.map(item => {
          if (item.id === it.id) {
            return { ...item, quantidade: item.quantidade + amountItems}
          }else{
            return item
          }
        })
      }
      
    })
    
}

const deleteItem = (it) => {
  setNewItem(newItem.filter(item => item.id !== it))
}

const handleShow = (sneaker) => {
  setSneakers([sneaker])
  setImagem(sneaker.imgP1)
}

  return (
    <>
    <GlobalStyle/>
    <Router>

      <Header handleShow={handleShow} deleteItem={deleteItem} totalPagar={totalPagar} setAmountItems={setAmountItems} amountItems={amountItems} hideCartHandler={hideCartHandler} showCartHandler={showCartHandler} cartIsShown={cartIsShown} calcados={calcados} newItem={newItem} setNewItem={setNewItem}/>
      <div className="line"></div>
      <Routes>
      <Route  path='/collections'  element={<ProdutoEscolhido imagem={imagem} setImagem={setImagem} calcados={calcados} addItem={addItem} newItem={newItem} setNewItem={setNewItem} amountItems={amountItems} setAmountItems={setAmountItems}  setSneakers={setSneakers} sneakers={sneakers}/>}/>
      <Route  exact path='/'  element={<Colecao setImagem={setImagem} txt={txt}  handleTxt={handleTxt} addItem={addItem} setNewItem={setNewItem} setSneakers={setSneakers} sneakers={sneakers}/>}/>
      </Routes>
      <div className="line"></div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
