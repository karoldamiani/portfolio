import './Hero.css'

const stack = `const Kerolayne = {
  formação: "Análise e Desenvolvimento de Sistemas',
  foco: ['suporte de TI', 'desenvolvimento web'],
  tecnologias: {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    backend: ['Python', 'Java', 'Node.js'],
    dados: ['SQL', 'Supabase'],
    ferramentas: ['Git', 'Docker', 'n8n']
  },
  status: 'sempre aprendendo'
}`

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow">&gt; desenvolvedora em formação </p>
          <h1 className="hero__title">Kerolayne Damiani</h1>
          <p className="hero__text">
            ADS student • Developer • Problem Solver
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