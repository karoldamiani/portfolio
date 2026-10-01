import Section from './Section'
import { stack } from '../data/stack'
import './Stack.css'

function Stack() {
  return (
    <Section id="stack" title="Stack">
      <div className="stack">
        {stack.map((group) => (
          <div key={group.category} className="stack__group">
            <h3 className="stack__category">{group.category}</h3>
            <ul className="stack__list">
              {group.items.map((item) => (
                <li key={item} className="stack__item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Stack