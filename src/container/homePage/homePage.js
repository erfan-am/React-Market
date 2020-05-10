import React, { Component } from 'react';

import Informationpage from '../../components/MenuItemPageInformation/PageInformaition';
import { withRouter } from 'react-router';

class homePage extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div  className="container overflow-hidden d-flex  justify-content-center pt-5 mt-3">
               <Informationpage  /> 
            </div>
        )
    }
}

export default withRouter(homePage)