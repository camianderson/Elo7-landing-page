import Header from "../../components/Header/Header";
import Time from "../../components/Time/Time";
import Benefícios from "../../components/Benefícios/Benefícios";
import Vagas from "../../components/Vagas/Vagas";

const Carreiras = ({vagas}) => {
  return (
    <div className="App">
      <Header />
      <Time />
      <Benefícios />
      <Vagas vagas={vagas}/>
    </div>
  );
}

export default Carreiras;