import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {
  return (
    <>

    <Header
        titulo="Crea una cuenta"
        />

    <Formulario 


          descripcion= "Usa tu email para registrarte" />
     

    </>
    );
  }
  export default App;