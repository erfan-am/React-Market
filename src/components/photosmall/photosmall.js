import React from 'react'

const photosmall = ({item:{imageUrl,price,name,quantity}}) => {
    return (
        <div className=" d-flex flex-row  mt-2 w-100">
        <img className="ml-1" style={{width:'70px',height:'70px'}} src={imageUrl} alt="item" />
        <div className="d-flex flex-column mb-2 ml-2 shadow-lg p-1 ">
             <span className=" font-weight-bold">${name}</span>
            <span className="font-weight-bold">price:{quantity}* ${price}</span>
        </div>
        </div>
    )
}

export default photosmall
