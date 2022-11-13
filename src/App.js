import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import styled, { createGlobalStyle } from "styled-components"
//componentes
import Colecao from "./components/Colecao";
import Header from "./components/Header";
import ProdutoEscolhido from "./components/ProdutoEscolhido";
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import LoginPage from './components/login/LoginPage';
import SignUp from './components/SignUpPage/SignUp';
import User from './components/User/User';
import Resumo from './components/ResumoCompra/Resumo';

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

//userStates
const [userLogin, setUserLogin] = useState({})
const [user, setUser] = useState([])

  // const [ordenar, setOrdenar] = useState('')
  const[cartIsShown, setCartIsShown] = useState(false)

  const [menuIsShown, setMenuIsShown] = useState(false)
  const [userIsShown, setUserIsShown] = useState(false)

  const [sinUpIsShown, setSinUpIdShown] = useState(false)
  const [loginIsShown, setLoginIsShown] = useState(false)

  const [userLoged, setUserLoged] = useState(false)

  const [isResumo, setIsResumo] = useState(false)

  
   const handleResumo = () => {
    if (isResumo === true){
      setIsResumo(false)

    }else{
      setIsResumo(true)
      setCartIsShown(false)
    }
   }

   const handleUserIsShown = () => {
      if (userLoged === false){
        setUserLoged(true)
      }else{
        setUserLoged(false)
      }
   } 

  const hadleSinUp = () => {
    if(sinUpIsShown === false){
      setSinUpIdShown(true) 
      setMenuIsShown(false)
    }else{
      setSinUpIdShown(false)
    }
  }
  

  const handleLogin = (e) => {
    e.preventDefault()
    if(loginIsShown === false){
      setUserLoged(false)
      setLoginIsShown(true) 
      setMenuIsShown(false)
    }else{
      setLoginIsShown(false)
    }
  }

  const handleTxt = (e) => {
    setTxt(e.target.value)
  }

  
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

  const menuHamburg = () => {
    if(menuIsShown === false){
      setMenuIsShown(true) 
    }else{
      setMenuIsShown(false)
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
      {isResumo && <Resumo userLogin={userLogin} totalPagar={totalPagar} handleResumo={handleResumo}/>}
      {userLoged && <User userLogin={userLogin} handleLogin={handleLogin} setUserIsShown={setUserIsShown} userIsShown={userIsShown} setUserLoged={setUserLoged} userLoged={userLoged}/>}
      {sinUpIsShown && <SignUp setLoginIsShown={setLoginIsShown} setSinUpIdShown={setSinUpIdShown} userState={user} setUser={setUser} hadleSinUp={hadleSinUp} />}
      {loginIsShown && <LoginPage setUserIsShown={setUserIsShown} setUserLoged={setUserLoged} setLoginIsShown={setLoginIsShown} user={user} userLogin={userLogin} setUserLogin={setUserLogin} setSinUpIdShown={setSinUpIdShown} handleLogin={handleLogin} />}
      <Header handleResumo={handleResumo} setSinUpIdShown={setSinUpIdShown} handleUserIsShown={handleUserIsShown} handleLogin={handleLogin} hadleSinUp={hadleSinUp} menuHamburg={menuHamburg} menuIsShown={menuIsShown} handleShow={handleShow} deleteItem={deleteItem} totalPagar={totalPagar} setAmountItems={setAmountItems} amountItems={amountItems} hideCartHandler={hideCartHandler} showCartHandler={showCartHandler} cartIsShown={cartIsShown} calcados={calcados} newItem={newItem} setNewItem={setNewItem}/>
      <div className="line"></div>
      <Routes>
      <Route  path='/collections'  element={<ProdutoEscolhido imagem={imagem} setImagem={setImagem} calcados={calcados} addItem={addItem} newItem={newItem} setNewItem={setNewItem} amountItems={amountItems} setAmountItems={setAmountItems}  setSneakers={setSneakers} sneakers={sneakers}/>}/>
      <Route  exact path='/'  element={<Colecao setImagem={setImagem} txt={txt}  handleTxt={handleTxt} addItem={addItem} setNewItem={setNewItem} setSneakers={setSneakers} sneakers={sneakers}/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
