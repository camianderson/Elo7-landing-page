import { useState, useEffect } from "react";
import Carreiras from "./pages/Carreiras/Carreiras";
import { getVagas } from "./apiCalls";

const App = () => {

  const [dadosVagas, setDadosVagas] = useState([]);

  const getDadosVagas = () => {
    getVagas()
    .then(data => {
      setDadosVagas([...data.vagas])
    })
  }

  useEffect(() => {
    getDadosVagas()
    console.log(dadosVagas)
  }, []);


  return (
    <div className="App">
      <Carreiras vagas={dadosVagas}/>
    </div>
  );
}

export default App;
