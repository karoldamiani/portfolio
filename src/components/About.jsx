import Section from './Section'
import './About.css'

const facts = [
  { label: 'Formação', value: 'ADS · Unisinos (07/2027)' },
  { label: 'Experiência', value: '10+ anos em suporte e monitoramento' },
  { label: 'Foco', value: 'Desenvolvimento e suporte técnico' },
  { label: 'Local', value: 'Tramandaí, RS' },
]

function About() {
  return (
    <Section id="sobre" title="Sobre">
       <div className="about">
        <div className="about__text">
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas na Unisinos
            e busco estágio em desenvolvimento de software ou suporte técnico.
          </p>
          <p>
            Antes de programar, passei mais de 10 anos em atendimento, suporte
            remoto e monitoramento de ocorrências em tempo real. Essa vivência
            me ensinou a priorizar, manter a calma sob pressão e acompanhar um
            problema até a solução, hábitos que levo para o código.
          </p>
          <p>
            Hoje construo aplicações web com React e Next.js, APIs em Python e
            automações com n8n, e estudo orientação a objetos em Java e Kotlin.
          </p>
        </div>

        <dl className="about__facts">
          {facts.map((fact) => (
            <div key={fact.label} className="about__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

export default About