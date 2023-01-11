const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-container--imagem'>
                <h1 className='title'>Trabalhe no Elo7</h1>
            </div>
            <div className='header-container--descrição'>
                <p className='descrição'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis auge. Fusce risus tellus, tempus quis lacinia in vehicula ut turpis.</p>
                <span className='separador'>___________________________</span>
            <a href='#' className='vagas-link btn'>vagas em aberto &raquo;</a>
            </div>
        </div>
    )
}

export default Header;
