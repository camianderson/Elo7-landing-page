import React from "react";

const Time = () => {
    return (
        <div className="time-container">
            <section className="time-container--CEO">
                <div className="CEO-video">
                    <img alt="video do CEO" src="../../assets/placeholder-video.png"></img>
                </div>
                <div className="CEO-descrição">
                    <p className="tituloCEO">Palavas do CEO</p>
                    <p className="nomeCEO">Carlos Curioni</p>
                    <p className="textoCEO">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque ut efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce risus tellus, tempus quis lacinia in, vehicula ut turpis.</p>
                </div>
            </section>
            <section className="time-container--contribuidores">
                <h2 className="contribuidores-titulo">
                    <span>Conheça nosso time</span>
                    <span>fora de série!</span>
                </h2>
                <section className="contribuidores-fotos">
                    <img classname="foto" src="../../assets/camila.png"></img>
                    <img classname="foto" src="../../assets/guto.png"></img>
                    <img classname="foto" src="../../assets/david.png"></img>
                    <img classname="foto" src="../../assets/beatriz.png"></img>
                </section>
            </section>
        </div>
    )
}

export default Time;