import userActionsType from "./actions-types";

export const registerUser = (payload) => ({
    type: userActionsType.REGISTER,
    payload
})

export const setError = (payload) => ({
    type: userActionsType.SET_ERROR,
    payload
})

export const loginUser = (payload) => ({
    type: userActionsType.LOGIN,
    payload
})