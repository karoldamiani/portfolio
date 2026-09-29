import './Header.css'

function Header() {
    return(
        <header className='header'>
            <div className="container header__inner">
        <a href="#inicio" className="header__logo">~/karol</a>
        <nav className="header__nav">
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
        </header>
    )
}

export default Header