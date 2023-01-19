import React from "react";
import fotoCamila from "../../assets/camila.png";
import fotoBeatriz from "../../assets/beatriz.png";
import fotoGuto from "../../assets/guto.png";
import fotoDavid from "../../assets/david.png";
import videoCEO from "../../assets/placeholder-video.png";

const Time = () => {
  return (
    <div className="time-container">
      <section className="time-container--CEO">
        <img className="CEO-video" alt="video do CEO" src={videoCEO} />
        <div className="CEO-descrição">
          <p className="tituloCEO">Palavras do CEO</p>
          <p className="nomeCEO">Carlos Curioni</p>
          <p className="textoCEO">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque ut
            efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque
            odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce
            risus tellus, tempus quis lacinia in, vehicula ut turpis.
          </p>
        </div>
      </section>
      <section className="time-container--contribuidores">
        <h2 className="contribuidores-titulo">
          <span>Conheça nosso time</span>
          <span>fora de série</span>
        </h2>
        <section className="contribuidores-fotos">
          <img alt="foto da Camila" className="foto" src={fotoCamila} />
          <img alt="foto do Guto" className="foto" src={fotoGuto} />
          <img alt="foto do David" className="foto" src={fotoDavid} />
          <img alt="foto da Beatriz" className="foto" src={fotoBeatriz} />
        </section>
      </section>
    </div>
  );
};

export default Time;
