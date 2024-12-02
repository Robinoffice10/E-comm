import React from 'react'
import Card from './Card'
import { useEffect, useState } from 'react'

const Cards = () => {

    // api fetch

    const [products, setProducts] = useState([]);

    let getData = async () => {
        try {
            let robin = await fetch('https://fakestoreapi.com/products');
            robin = await robin.json()
            setProducts(robin)
            return;

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div style={customStyle} >
            {
                products.map(({title, id, price,description,image}, idx) => (
                    <Card key={idx} title={title} id={id} price={price} image={image} description={description}/>
                ))
            }
        </div>
    )
}

let customStyle = {
    'display': 'grid',
    'gap': 50,
    'grid-template-columns': 'repeat(3, 1fr)',
    'padding': '50px 10px',
    'align-items': 'start'
}

export default Cards
