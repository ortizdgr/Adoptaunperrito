import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Header
        titulo="Adopta un Perrito"
        />

    <MyCard 
         image="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
         title="Kuky"
         descripcion="Adorable cachorrito de 2 meses en adopción"
         colorButton="success"
         textButton="Adoptar"
         /> { /* Definimos las props que se pasaran a MyCard */ }
    <MyCard   
         image="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
         title="Bruno"
         descripcion="Adorable cachorrito de 4 meses en adopción"
         colorButton="success"
         textButton="Adoptar"
         /> { /* Definimos las props que se pasaran a MyCard */ }
    <MyCard   
         image="https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg"
         title="Sansón"
         descripcion="Adorable cachorrito de 3 meses en adopción"
         colorButton="success"
         textButton="Adoptar"
         /> { /* Definimos las props que se pasaran a MyCard */ }
    <MyCard   
         image="https://cdn.pixabay.com/photo/2014/12/10/05/50/english-bulldog-562723_1280.jpg"
         title="Zeus"
         descripcion="Adorable cachorrito de 5 meses en adopción"
         colorButton="success"
         textButton="Adoptar"
         /> { /* Definimos las props que se pasaran a MyCard */ }
    
    <Footer
         pie="Explora nuestra galería de perritos para encontrar a tu compañero perfecto!"
         /> 

    </>
    );
  }
  export default App;