import axios from "axios"
//constantes
const dataInicial = {
    personajes: []
}

//types

const OBTENER_PERSONAJES_EXITO = 'OBTENER_PERSONAJES_EXITO'

//reducer

export default function personajesReducer(state= dataInicial, actions){
    switch(actions.type){
        case OBTENER_PERSONAJES_EXITO:
            return {...state, personajes: actions.payload}
        default:
            return state
    }
}

//acciones

export const obtenerPersonajesAction = () => async (dispatch, getState) => {

    try{
        const res = await axios.get('https://rickandmortyapi.com/api/character')
        dispatch({
            type: OBTENER_PERSONAJES_EXITO,
            payload: res.data.results
        })
    }catch (error) {
        console.log(error)
    }
}