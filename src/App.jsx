import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Section from './components/Section'
import About from './components/About'
import Stack from './components/Stack'


function App() {
 return (
    <> 
      <Header />
      <main>
        <Hero />
          <About />            
          
          <Stack />

          <Section id="projetos" title="Projetos">
            <p className="section__text">Colocar projetos.</p>            
          </Section>

          <Section id="experiencia" title="Experiencia">
             <p className="section__text">add Experiencia.</p>            
          </Section>

          <Section id="cursos" title="Cursos">
             <p className="section__text">add Cursos.</p>            
          </Section>

          <Section id="contato" title="Contato">
             <p className="section__text">add Contatos.</p>            
          </Section>
        
      </main>
      <Footer />
    </>
  )
}

export default App
