import axios from "axios"
//constantes
const dataInicial = {
    personajes: [],
    page: 1
}

//types

const OBTENER_PERSONAJES_EXITO = 'OBTENER_PERSONAJES_EXITO'
const NEXT_PERSONAJES_EXITO = 'NEXT_PERSONAJES_EXITO'
const PREVIUS_PERSONAJES_EXITO = 'PREVIUS_PERSONAJES_EXITO'

//reducer

export default function personajesReducer(state= dataInicial, action){
    switch(action.type){
        case OBTENER_PERSONAJES_EXITO:
            return {...state, personajes: action.payload}
        case NEXT_PERSONAJES_EXITO:
            return {...state, personajes: action.payload.personajes, page: action.payload.page}
            case PREVIUS_PERSONAJES_EXITO:
                return {...state, personajes: action.payload.personajes, page: action.payload.page}
        default:
            return state
    }
}

//acciones

export const obtenerPersonajesAction = () => async (dispatch, getState) => {

    console.log('getState', getState().personajesRyM)
    const page = getState().personajesRyM.page;

    try{
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        dispatch({
            type: OBTENER_PERSONAJES_EXITO,
            payload: res.data.results
        })
    }catch (error) {
        console.log(error)
    }
}

export const nextPageAction = () => async (dispatch, getState) => {

    //const page = getState().personajesRyM.page;
    const page = getState().personajesRyM.page;
    
    function next() {
        if(page<=42){
            return page + 1;
        }
        return page
    } 

    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${next()}`)
        dispatch({
            type: NEXT_PERSONAJES_EXITO,
            payload: {
                personajes: res.data.results,
                page: next()
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const prevPageAction = () => async (dispatch, getState) => {

    const page = getState().personajesRyM.page;
    function prev() {
        if(page>1){
            return page - 1;
        }
        return page
    } 

    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${prev()}`)
        dispatch({
            type: PREVIUS_PERSONAJES_EXITO,
            payload: {
                personajes: res.data.results,
                page: prev()
            }
        })
    } catch (error) {
        console.log(error)
    }
}