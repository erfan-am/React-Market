import React  from 'react'
import MenuItemPage from '../menuItemPage/Menuitempage';
import { withRouter } from 'react-router';
import {createStructuredSelector} from 'reselect'
import {selectDirectory} from '../../redux/information/infrom-selector'
import { connect } from 'react-redux';

const PageInformaition = ({sections}) => {
    return (
        <div>
         { sections.map(({id,...props})=>( <MenuItemPage key={id}  {...props} />))}
        </div>
    )
}



const mapStateToProps=createStructuredSelector({
    sections:selectDirectory
})

export default withRouter( connect(mapStateToProps)(PageInformaition))