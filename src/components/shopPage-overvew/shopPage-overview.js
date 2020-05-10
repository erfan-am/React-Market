import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {selectCollectionItemOver} from '../../redux/PhotoItem/shop/shop-selector'

import ShopPhoto from '../../components/ShopPhoto/ShopPhoto';

const shopPageoverview = ({collections}) => {
    return (
        <div>
              {collections.map(({id,...props})=>(
            <ShopPhoto key={id} {...props} />
           ))}
        </div>
    )
}


const mapStateToProps=createStructuredSelector({
    collections:selectCollectionItemOver
})
export default connect(mapStateToProps)(shopPageoverview
)