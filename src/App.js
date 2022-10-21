import './App.css';
import { Boton } from './components/Boton';
import { Contador } from './components/Contador';
import start  from './img/start.png';
import { useState} from 'react'

function App() {
  const [numClicks, setNumClicks] = useState (0);

const manejarClick = () => {
 setNumClicks (numClicks + 1);
};

const reiniciarContador = () => {
  setNumClicks(0)
};

  return (
    <div className='App'>
      <div className='start-logo-contenedor'>
        <img 
          className='start-logo'
          src={start}
          alt='start logo'/>
      </div>
      <div className='contenedor-contador'>
       <Contador numClicks={numClicks} />
       <Boton
         texto='Clic'
         botonClick={true}
         manejarClick={manejarClick} />
       <Boton
        texto='Reiniciar'
         botonClick={false}
         manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
