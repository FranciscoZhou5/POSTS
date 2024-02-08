import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styles';
import { loginUser } from '../../redux/user/actions';

const Login = () => {
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const {error} = useSelector((rootReducer) => rootReducer.userReducer)
    const dispatch = useDispatch();
    
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ displayName, password}));
    };

    return (
        <Styled.Form onSubmit={handleLogin}>
            <Styled.H2>Entre</Styled.H2>
            <Styled.Input 
                type='text' 
                placeholder='Digite seu email ou usuário' 
                onChange={(e) => setDisplayName(e.target.value)}
            />
            <Styled.Input 
                type='password' 
                placeholder='Digite sua senha' 
                onChange={(e) => setPassword(e.target.value)}
            />
            <Styled.Button type='submit'>Entrar</Styled.Button>
            <Styled.Link to='/register'>Não possui conta? Crie uma!</Styled.Link>
            {error && <Styled.Error>{error}</Styled.Error> }
        </Styled.Form>
    );
};

export default Login;
