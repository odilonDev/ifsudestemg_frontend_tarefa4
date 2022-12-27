import { useState } from 'react';
import ControleLogin from './ControleLogin';
import ContagemLetras from './ContagemLetras';

function App() {
  const [caracterDigitado, setCaracterDigitado] = useState('0')

  const qtdeCaracteres = event => {
    setCaracterDigitado(event.target.value.length)
  }

  return (
    <div>
       <input type="text" onChange={qtdeCaracteres}/>
       <ContagemLetras  qtDigitos= {caracterDigitado}/>
       <ControleLogin/>
   </div>
  );
}

export default App;
