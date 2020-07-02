import React, { useState } from 'react'
import AgregarCategoria from './components/AgregarCategoria';
import Gif from './components/Gif';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dark']);



    return (
        <div>
            <h2>GiffAPP</h2>
            <AgregarCategoria setCategorias={setCategorias} categorias={categorias}/>
            <hr />

            {/* <button onClick={handleAdd}> Agregar</button> */}
            <ol>
                {categorias.map(categoria => (
                    <Gif key={categoria} categoria={categoria}/>
                ))}
            </ol>
        </div>
    )
}
