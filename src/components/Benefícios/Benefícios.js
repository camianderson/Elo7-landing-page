import React from "react";
import qualidade from "../../assets/qualidade.png";
import ambiente from "../../assets/descontracao.png";
import atividades from "../../assets/atividades.png";

const Benefícios = () => {
    return(
        <div className="benefícios-container">
            <section className="benefícios-container--lista">
                <section className="sessão">
                    <img alt="emoji rosto sorrindo" src={qualidade}></img>
                    <h2>qualidade de vida</h2>
                    <p>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Quisque ut efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque odio ipsum,</p>
                </section>
                <section className="sessão">
                    <img alt="emoji mão com idicador e mindinho para cima" src={ambiente}></img>
                    <h2>ambiente descontraído</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis auge. Fusce risus tellus, tempus quis lacinia in vehicula ut turpis.</p>
                </section>
                <section className="sessão">
                    <img  alt="emoji paleta de pintor"  src={atividades}></img>
                    <h2>atividades extras</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis auge. Fusce risus tellus,</p>
                </section>
            </section>
            <section className="benefícios-container--btn">
                <span>_____________________________</span>
                <a href='#' className='saiba-mais-link btn'>Saiba Mais &raquo;</a>
            </section>
        </div>
    )
}

export default Benefícios;