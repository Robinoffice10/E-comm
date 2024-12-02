import React from 'react'

const Card = (props) => {
    return (
        <div class="card h-100 d-flex align-items-center justify-content-between ">
            <img src={props.image} class="card-img-top p-2" style={{width:'150px', height:'200px'}} alt="..." />
            <div class="card-body d-flex flex-column justify-content-between">
               <div>
                 <h5 class="card-title">{props.title}</h5>
                <h5 class="card-title text-danger">{props.price}</h5>
                    <p class="card-text" style={{fontSize:"15px"}}>{props.description} </p>
                </div>      
    
                <div className='d-flex justify-content-between'>
                    <a href="#" class="btn btn-primary">Add Wishlist</a>
                    <a href="#" class="btn btn-primary">Add Cart</a>
                </div>
                    </div>

            </div>
    )
}

export default Card
