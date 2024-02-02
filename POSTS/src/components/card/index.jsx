import * as Styled from './styles'

const Card = ({ dado }) => {
  return (
    <Styled.CardContainer>
      <Styled.Img src={dado.urls.small} alt={dado.alt_description} />
      <Styled.UserNameText>@{dado.user.username}</Styled.UserNameText>
    </Styled.CardContainer>
  )
}

export default Card