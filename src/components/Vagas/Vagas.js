import fotoBottom from '../../assets/foto-bottom.png';

const Vagas = () => {
    return (
        <div className='vagas-container' >
            <img alt='feira da elo7' src={fotoBottom}></img>
            <section className='vagas-container--titulo'>
                <h2>Vagas em aberto</h2>
            </section>
            <section className='vagas-container--oportunidades'>
                <h3>Desenvolvimento</h3>
            </section>
        </div>
    )
}

export default Vagas;
