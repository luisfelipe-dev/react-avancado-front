import * as Styled from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReacJS, NextJS e Styled Components'
}) => (
  <Styled.Wrapper>
    <Styled.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <Styled.Title>{title}</Styled.Title>
    <Styled.Description>{description}</Styled.Description>
    <Styled.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente com a tela com código"
    />
  </Styled.Wrapper>
)

export default Main
