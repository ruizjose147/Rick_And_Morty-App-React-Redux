import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { obtenerPersonajesAction, nextPageAction } from '../redux/rymDukcs';

export const Personajes = () => {
    
    const dispatch = useDispatch();

    const personajesRyM = useSelector(store => store.personajesRyM.personajes)
    

  return (
    <div>
        Lista de Personajes
        <button onClick={() => dispatch(obtenerPersonajesAction())}>Get Personajes</button>
        <button onClick={() => dispatch(nextPageAction(1))}>Siguiente</button>
        <ul>
            {
                personajesRyM.map(item => (
                    <li key={item.id} >{item.name}</li>
                ))
            }
        </ul>
    </div>
  )
}