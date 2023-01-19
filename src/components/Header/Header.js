const Header = () => {
  return (
    <header className="header-container">
      <div alt="time Elo7" className="header-container--imagem">
        <h1 className="titulo">Trabalhe no Elo7</h1>
      </div>
      <section className="header-container--descrição">
        <p className="descrição">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a
          eros sit amet, fringilla sagittis auge. Fusce risus tellus, tempus
          quis lacinia in vehicula ut turpis.
        </p>
        <span className="separador">___________________________</span>
        <a href="#vagas" className="vagas-link btn">
          vagas em aberto &raquo;
        </a>
      </section>
    </header>
  );
};

export default Header;
