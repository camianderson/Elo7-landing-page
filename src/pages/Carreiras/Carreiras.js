import { useState, useEffect } from "react";
import { getVagas } from "../../apiCalls";

import Benefícios from "../../components/Benefícios/Benefícios";
import Header from "../../components/Header/Header";
import Time from "../../components/Time/Time";
import Vagas from "../../components/Vagas/Vagas";

const Carreiras = () => {
  const [dadosVagas, setDadosVagas] = useState([]);
  const [erro, setErro] = useState(false);

  const getDadosVagas = () => {
    getVagas()
      .then((data) => {
        setDadosVagas([...data.vagas]);
      })
      .catch((error) => {
        setErro(true);
      });
  };

  useEffect(() => {
    getDadosVagas();
  }, []);

  return (
    <div className="App">
      <Header />
      <Time />
      <Benefícios />
      <Vagas vagas={dadosVagas} erro={erro} />
    </div>
  );
};

export default Carreiras;
