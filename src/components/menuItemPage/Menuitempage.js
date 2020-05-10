import React from 'react';
import { withRouter } from 'react-router';

 const menuItempage = ({title,imageUrl,URL,match,history}) => {
    return (
        <div className="row m-1 p-5" style={{
            backgroundImage:`url(${imageUrl})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            width:'300px'
        }}
        onClick={()=>history.push(`${match.url}${URL}`)}
        >
        <div className="container" style={{background:'#ffff' ,opacity:'0.5' , width:'100px'}}>
            <h4 className="font-italic font-weight-bold">{title}</h4>
            <p className="text-muted">Shop now</p>
        </div>
    </div>
    )
}
export  default withRouter(menuItempage )