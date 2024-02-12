import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';  
import * as Styled from './styles';
import { loginUser, setError } from '../../redux/user/actions';

const Login = () => {
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const { error } = useSelector((rootReducer) => rootReducer.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();  

    const handleLogin = (e) => {
        e.preventDefault();
    
        dispatch(loginUser({ displayName, password }));
        if (!error) {
            navigate('/');
        }
    };

    return (
        <Styled.Form onSubmit={handleLogin}>
            <Styled.H2>Entre</Styled.H2>
            <Styled.Input
                type='text'
                placeholder='Digite seu email ou usuário'
                onChange={(e) => setDisplayName(e.target.value)}
                required
            />
            <Styled.Input
                type='password'
                placeholder='Digite sua senha'
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Styled.Button type='submit'>Entrar</Styled.Button>
            <Styled.Link to='/register'>Não possui conta? Crie uma!</Styled.Link>
            {error && <Styled.Error>{error}</Styled.Error>}
        </Styled.Form>
    );
};

export default Login;
