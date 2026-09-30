import './Section.css'

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default Section