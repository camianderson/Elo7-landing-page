import fotoBottom from '../../assets/foto-bottom.png';
import Vaga from '../Vaga/Vaga';

const Vagas = ({vagas}) => {
    return (
        <div className='vagas-container' >
            <img className='foto-vagas' alt='feira da elo7' src={fotoBottom}></img>
            <section className='vagas-container--titulo'>
                <h2 className='titulo-vagas'>Vagas em aberto</h2>
            </section>
            <section className='vagas-container--oportunidades'>
                <h3 className='titulo-oportunidades'>Desenvolvimento</h3>
                <Vaga className='vaga' vagas={vagas}/>
            </section>
        </div>
    )
}

export default Vagas;
