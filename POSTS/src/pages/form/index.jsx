import Login from '../../components/login'
import Register from '../../components/register'
import * as Styled from './styles'

const Form = () => {
  return (
      <Styled.Container>
            <Styled.H2> Entre </Styled.H2>
            <Login/>
            <Styled.H2> Crie sua conta </Styled.H2>
            <Register/>
      </Styled.Container>
  )
} 

export default Form