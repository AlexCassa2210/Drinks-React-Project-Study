import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

//Crear el  Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las fuciones y state
const CategoriasProvider = (props) => {

    //crear el state del Context
    const [ categorias, guardarCategorias ] = useState([]);

    //ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            
            const categorias = await axios.get(url);
            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, []);

    return (
        <CategoriasContext.Provider
        //Para tener los datos en otros componentes, paso el nombre del state
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;