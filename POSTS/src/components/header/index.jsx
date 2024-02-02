import * as Styled from './styles'

const Header = () => {
  return (
    <Styled.NavBar>
        <Styled.Link to='/'><Styled.H2> POSTS </Styled.H2></Styled.Link>
        <Styled.Ul>
          <Styled.Link to='/form'>Login</Styled.Link>
        </Styled.Ul>
    </Styled.NavBar>
  )
}

export default Header