import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import AgregarTramite from "./Components/AgregarTramite/AgregarTramite";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className={styles.wraper}>
      <Header />
      <Nav />
      <AgregarTramite className={`bg2`}/>
      <AgregarTramite className={`bg2`}/>
      <AgregarTramite className={`bg2`}/>
      <Login></Login>
      <Footer />
    </div>
  );
}

export default App;
