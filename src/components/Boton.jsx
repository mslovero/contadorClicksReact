import boton from './Boton.css'

export function Boton({ texto, botonClick, manejarClick }) {
    return (
        <button 
          className={ botonClick ? 'boton-click' : 'boton-reiniciar' }
          onClick={manejarClick}>
          {texto}
        </button>
    )
}
