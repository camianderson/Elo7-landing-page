const Vaga = ({ vagas, erro }) => {
  const vagasAtivas = vagas.filter((vaga) => vaga.ativa);

  const listaDeVagas = vagasAtivas.map((vaga) => {
    if (vaga.localizacao) {
      return (
        <div className="vaga" key={Math.random()}>
          <a className="vaga-link" href={vaga.link}>
            {vaga.cargo}
          </a>
          <p>
            {vaga.localizacao.bairro} - {vaga.localizacao.cidade},{" "}
            {vaga.localizacao.pais}
          </p>
        </div>
      );
    } else {
      return (
        <div className="vaga" key={Math.random()}>
          <a className="vaga-link" href={vaga.link}>
            {vaga.cargo}
          </a>
          <p>Remoto</p>
        </div>
      );
    }
  });

  return (
    <div className="vaga-container">
      {erro ? (
        <div className="alert error">
          <p>Ops! Algo deu errado 🤪 ! Atualize a página!</p>
        </div>
      ) : listaDeVagas === [] ? (
        <div>
          <p>Não temos nenhuma vaga disponível no momento.</p>
          <p>Obrigada por considerar o Elo7 para uma nova oportunidade.</p>
        </div>
      ) : (
        listaDeVagas
      )}
    </div>
  );
};

export default Vaga;
