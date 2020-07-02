import React from 'react';
import { useFetchGifs } from '../hooks/useFechGifs';
import GrifItem from './GifItem';



const Gif = ({ categoria }) => {
    const { loading, data: imgs } = useFetchGifs(categoria);

    return (
        <>
            <h3 className="animate__animated animate__backInDown">{categoria}</h3>
            {loading && (<p className="animate__animated animate__flash">Loading .....</p>)}
            <div className="card-grid">
                
                    {imgs.map(img => (
                        <GrifItem key={img.id} {...img} />
                    ))}
                
            </div>
        </>
    );
}

export default Gif;