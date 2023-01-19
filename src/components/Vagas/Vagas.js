import fotoBottom from "../../assets/foto-bottom.png";
import Vaga from "../Vaga/Vaga";

const Vagas = ({ vagas, erro }) => {
  return (
    <div className="vagas-container" id="vagas">
      <img className="foto-vagas" alt="feira da elo7" src={fotoBottom}></img>
      <h2 className="vagas-container--titulo">Vagas em aberto</h2>
      <section className="vagas-container--oportunidades">
        <h3 className="titulo-oportunidades">Desenvolvimento</h3>
        <Vaga className="vaga" vagas={vagas} erro={erro} />
      </section>
    </div>
  );
};

export default Vagas;
