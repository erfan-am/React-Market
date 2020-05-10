import {createSelector} from 'reselect'


const selectinfrom =state=>state.inform;

export const selectDirectory=createSelector(
    [selectinfrom],
    inform=>inform.sections
)