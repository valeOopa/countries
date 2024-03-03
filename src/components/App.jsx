import  {useState}  from 'react';
import { Header } from "./home/Header";
import { Home } from './home/Home';

function App() {
  //*Estados de modo oscuro(desacticado por defecto)
  const [darkMode,setDarkMode] = useState(false);

  return (
    <>
    {/*//* Home y Encabezado que estará por defecto en la App */ }
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Home darkMode={darkMode} />
    </>
  )
}

export default App