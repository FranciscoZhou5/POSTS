import userActionsType from './actions-types';

const initialState = {
    user: {},
    error: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case userActionsType.LOGIN:
            const { displayName, password } = action.payload;
            if (state.user.hasOwnProperty(displayName)) {
                // Verifica se o usuário existe
                const storedUser = state.user[displayName];
                if (storedUser.password === password) {
                    // Senha correta, lógica de login bem-sucedido
                    console.log(`Usuário encontrado: ${displayName}`);
                    return { ...state, error: null };
                } else {
                    // Senha incorreta
                    console.log(`Senha incorreta para o usuário: ${displayName}`);
                    return { ...state, error: 'Senha incorreta.' };
                }
            } else {
                // Usuário não encontrado
                console.log(`Usuário não encontrado: ${displayName}`);
                return { ...state, error: 'Usuário não encontrado.' };
            }

        case userActionsType.REGISTER:
            const userIsAlreadyRegister = state.user.hasOwnProperty(action.payload.displayName);
            if (userIsAlreadyRegister) {
                console.log(`Usuário '${action.payload.displayName}' já existe`);
                return { ...state, error: `Usuário com apelido '${action.payload.displayName}' já existe.` };
            } else {
                return { ...state, user: { ...state.user, [action.payload.displayName]: action.payload }, error: null };
            }

        case userActionsType.SET_ERROR:
            return { ...state, error: action.payload }

        default:
            return state;
    }
};

export default userReducer;