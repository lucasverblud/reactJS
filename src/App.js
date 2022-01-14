import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const ItemList = [{ nombre: "Home", enlace: "/" }, { nombre: "Tienda", enlace: "/tienda" },
{ nombre: "TablaTalles", enlace: "/tablaTalles" }, { nombre: "Contacto", enlace: "/contacto" }]

function App() {

  return (
    <>
      <NavBar data={ItemList} />
      <ItemListContainer greeting="Hola Coder"/>

    </>
  );
}

export default App;
