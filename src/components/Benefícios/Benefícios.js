import React from "react";
import qualidade from "../../assets/qualidade.png";
import ambiente from "../../assets/descontracao.png";
import atividades from "../../assets/atividades.png";

const Benefícios = () => {
  return (
    <div className="benefícios-container">
      <section className="benefícios-container--lista">
        <div className="sessão thin">
          <img
            className="ben-imagem"
            alt="emoji rosto sorrindo"
            src={qualidade}
          />
          <h2 className="sessão-titulo">qualidade de vida</h2>
          <p>
            Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Quisque
            ut efficitur ipsum risus gravida ex, at malesuada ligula.
            Pellentesque odio ipsum,
          </p>
        </div>
        <div className="sessão thin">
          <img
            className="ben-imagem"
            alt="emoji mão com idicador e mindinho para cima"
            src={ambiente}
          />
          <h2 className="sessão-titulo">ambiente descontraído</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
            efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra
            a eros sit amet, fringilla sagittis auge. Fusce risus tellus, tempus
            quis lacinia in vehicula ut turpis.
          </p>
        </div>
        <div className="sessão thin">
          <img
            className="ben-imagem"
            alt="emoji paleta de pintor"
            src={atividades}
          />
          <h2 className="sessão-titulo">atividades extras</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
            efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra
            a eros sit amet, fringilla sagittis auge. Fusce risus tellus,
          </p>
        </div>
      </section>
      <section className="benefícios-container--btn">
        <span className="separador">___________________________</span>
        <a href="#" className="saiba-mais-link btn">
          Saiba Mais &raquo;
        </a>
      </section>
    </div>
  );
};

export default Benefícios;
