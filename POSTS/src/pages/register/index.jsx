import { useState } from 'react'
import * as Styled from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, setError } from '../../redux/user/actions'

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { error } = useSelector((rootReducer) => rootReducer.userReducer)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setError(""))
    
    if (password !== confirmPassword) {
      dispatch(setError("As senhas precisam ser idênticas!"))
      return
    } else{

      dispatch(registerUser({ displayName, email, password }))
    }
  }

  return (
    <Styled.RegisterContainer onSubmit={handleSubmit}>
      <Styled.H2>Crie sua conta</Styled.H2>
      <Styled.Input
        type='text'
        placeholder='Defina seu apelido'
        onChange={(e) => setDisplayName(e.target.value)}
        minLength={4}
        required
      />

      <Styled.Input
        type='email'
        placeholder='Digite seu Email'
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Styled.Input
        type='password'
        placeholder='Digite sua senha'
        onChange={(e) => setPassword(e.target.value)}
        minLength={8}
        required
      />

      <Styled.Input
        type='password'
        placeholder='Digite sua senha novamente'
        onChange={(e) => setConfirmPassword(e.target.value)}
        minLength={8}
        required
      />
      <Styled.Button type='submit' >Criar conta</Styled.Button>
      {error && <Styled.Error >{error}</Styled.Error>}
    </Styled.RegisterContainer>
  )
}

export default Register