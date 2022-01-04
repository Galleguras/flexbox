import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav``

const Main = styled.main``

const Article = styled.article``
const ContentWrapper = () => {
  return (
    <>
      <img src={require('../img/cielo.jpg')} />

      <Nav />
      <Main />
      <Article>
        <img src="../img/cielo.jpg" alt="cielo" />
        <h2>Una imagen bonita de un cielo</h2>
      </Article>
    </>
  )
}

export default ContentWrapper
