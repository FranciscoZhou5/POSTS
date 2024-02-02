import userActionsType from "./actions-types";

export const loginUser = (payload) => ({
    type: userActionsType.LOGIN,
    payload
})