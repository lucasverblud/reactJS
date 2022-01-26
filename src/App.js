import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from "react";

const ItemList = [
	{ nombre: 'Inicio', enlace: '/' },
	{ nombre: 'Quienes Somos', enlace: '/QuienesSomos' },
	{ nombre: 'Contacto', enlace: '/contacto' },
]

function App() {
  return (
    <>
     <BrowserRouter>
       <NavBar data={ItemList} />
       <Switch>

         <Route exact path="/">
           <ItemListContainer />
         </Route>

         <Route path="/item/:itemId">
           <ItemDetailContainer />
         </Route>

       </Switch>
     </BrowserRouter>
    </>
  )
}

export default App;

