import './Hero.css'

const stack = `const Kerolayne = {
  foco: ['suporte de TI', 'desenvolvimento'],
  stack: ['React', 'Node.js', 'Python','Java'],
  status: 'aprendendo todo dia',
}`

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow">&gt; </p>
          <h1 className="hero__title">Kerolayne Damiani</h1>
          <p className="hero__text">
            Teste.
          </p>
          <div className="hero__actions">
            <a href="#projetos" className="button">Ver projetos</a>
            <a href="#contato" className="button button--ghost">Falar comigo</a>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal__bar">
            <span></span><span></span><span></span>
            <p>perfil.js</p>
          </div>
          <pre className="terminal__code">{stack}</pre>
        </div>
      </div>
    </section>
  )
}

export default Hero