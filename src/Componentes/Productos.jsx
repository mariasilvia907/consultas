import React,  {useState} from 'react';
import AgregarProducto from './AgregarProducto';
import Coleccion from './Coleccion';


function Productos() {

//const [categorias, setCategorias] = useState (['Gaseosas', 'Galletitas', 'Arroz', 'Azúcar']);

const [categorias, setCategorias] = useState ([]);

/* const handleAgregar = () => {
    //setCategorias([...categorias, 'Cervezas ']);
    
    setCategorias(['Cervezas ', ...categorias]);

    //setCategorias(cat => [...cat, 'Cervezas']);
}
 */

    return(
        <>
            <h1>Productos</h1>
            <AgregarProducto
                setCategorias={setCategorias}            
            />
            <ol>
               {/*  {
                    categorias.map(categoria => {
                        return <li key={categoria}>{categoria}</li>
                    })
                } */}
             </ol>    

            < Coleccion categorias={categorias} />          
        </>
    )
}

export default Productos;