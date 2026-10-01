import Section from './Section'
import { contacts } from '../data/contacts'
import './Contact.css'

function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="section__text">
        Estou buscando estágio em desenvolvimento de software ou suporte
        técnico. Se meu perfil faz sentido para a sua equipe, vamos conversar.
      </p>

      <ul className="contact">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a
              className="contact__link"
              href={contact.href}
              target="_blank"
              rel="noreferrer"
            >
              {contact.label} <span>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Contact