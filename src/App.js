import './estilos.css'
import styled from 'styled-components'
import Header from './components/Header'
import ContentWrapper from './components/ContentWrapper'
const Contenedor = styled.div`
  color: #666666;
  //font-family:'Lobster',cursive;
  margin: 20px auto;
  width: 90%;
`
function App() {
  return (
    <Contenedor>
      <Header />
      <ContentWrapper />
      <footer>asd</footer>
    </Contenedor>
  )
}

export default App
