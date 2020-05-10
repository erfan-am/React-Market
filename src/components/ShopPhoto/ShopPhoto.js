import React from 'react';
import ShopPhotoItem from './ShowPhotoItem/ShowPhotoItem'

const ShopPhoto = ({title,items}) => {
    return (
        <div className="">
            <h1 className="p-2 font-weight-bold font-italic">{title}</h1>            <div className="row">
                {items.filter((item,idx)=> idx < 4)
                .map((item)=>(<ShopPhotoItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default ShopPhoto
