import { useState, useEffect } from "react";
import { getVagas } from "../../apiCalls";

import Benefícios from "../../components/Benefícios/Benefícios";
import Header from "../../components/Header/Header";
import Time from "../../components/Time/Time";
import Vagas from "../../components/Vagas/Vagas";

const Carreiras = () => {
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
      <Header />
      <Time />
      <Benefícios />
      <Vagas vagas={dadosVagas}/>
    </div>
  );
}

export default Carreiras;