import * as Styled from './styles'

const Main = () => (
  <Styled.Wrapper>
    <Styled.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <Styled.Title>React Avançado</Styled.Title>
    <Styled.Description>
      Typescript, ReacJS, NextJS e Styled Components
    </Styled.Description>
    <Styled.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente com a tela com código"
    />
  </Styled.Wrapper>
)

export default Main
