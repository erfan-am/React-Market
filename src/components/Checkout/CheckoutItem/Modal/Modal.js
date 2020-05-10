import React from 'react';
 const Modal = ({item,remove}) => {
    return (
       
      <div className="modal fade " id="imgshow" data-backdrop="static"  role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Greate shop</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body d-flex justify-content-center" >
            <img src={item.imageUrl} alt="modal" />
          </div>
          <div className="modal-footer">
            <h2 className="mr-auto">${item.price}</h2>
            <p className="mr-auto">{item.name}</p>
            <button type="button" onClick={()=>remove(item)}  className="btn btn-secondary" data-dismiss="modal">Remove from list <i className="fa fa-remove"></i> </button>
           
          </div>
        </div>
      </div>
    </div>
    )
}


export default (Modal)
