const Vaga = ({vagas}) => {
    const vagasAtivas = vagas.filter(vaga => vaga.ativa);

    const listaDeVagas = vagasAtivas.map(vaga => {
        if(vaga.localizacao){
            return(
                <div key={Math.random()}>
                    <a href={vaga.link}>{vaga.cargo}</a>
                    <p>{vaga.localizacao.bairro} - {vaga.localizacao.cidade}, {vaga.localizacao.pais}</p>
                </div>
            )
        } else {
            return(
                <div key={Math.random()}>
                    <a href={vaga.link}>{vaga.cargo}</a>
                    <p>Remoto</p>
                </div>
            )
        }
    })

    return (
        <div className="vaga-container">
            {listaDeVagas}
        </div>
    )
}

export default Vaga;