import logo from './logo.svg';
import styles from "./App.module.css"
import Button from "./Components/UI/Button/Button"
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import AgregarTramite from './Components/AgregarTramite/AgregarTramite';

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <AgregarTramite></AgregarTramite>
      <Footer></Footer>
    </>
  );
}

export default App;
