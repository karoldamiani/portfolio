import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Section from './components/Section'
import About from './components/About'


function App() {
 return (
    <> 
      <Header />
      <main>
        <Hero />
          <About />
            
          
          <Section id="stack" title="Stack">
             <p className="section__text">Stack.</p>            
          </Section>

          <Section id="projetos" title="Projetos">
            <p className="section__text">Colocar projetos.</p>            
          </Section>

          <Section id="contato" title="Contato">
             <p className="section__text">Contatos.</p>            
          </Section>
        
      </main>
      <Footer />
    </>
  )
}

export default App
