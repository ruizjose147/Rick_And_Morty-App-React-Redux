import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { obtenerPersonajesAction, nextPageAction, prevPageAction } from '../redux/rymDukcs';

export const Personajes = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(obtenerPersonajesAction())
    }, []) 
    const personajesRyM = useSelector(store => store.personajesRyM.personajes)


    return (
        <div className="container">
            <ul className="pagination justify-content-center">
            <button className='btn btn-warning' onClick={() => dispatch(prevPageAction())}>Anterior</button>
            <button className='btn btn-warning' onClick={() => dispatch(nextPageAction())}>Siguiente</button>
            </ul>
            <div className="container">
            <div className="row mt-2">
            {
                personajesRyM.map(item => (
                    
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <img
                                    key={item.id} src={item.image}
                                    alt={`imagen-${item.name}`}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 key={item.id} >{item.name}</h5>
                                    <p>Specie: {item.species}</p>
                                    <p>Gender: {item.gender}</p>
                                    <p>Origin: {item.origin.name}</p>
                                    <p>Location: {item.location.name}</p>
                                    <p>Status: {item.status}</p>
                                </div>
                            </div>
                        </div>
                    
                ))
            }
            </div>
            </div>
            <ul className="pagination justify-content-center">
            <button className='btn btn-warning' onClick={() => dispatch(prevPageAction())}>Anterior</button>
            <button className='btn btn-warning' onClick={() => dispatch(nextPageAction())}>Siguiente</button>
            </ul>
        </div>

    )
}
