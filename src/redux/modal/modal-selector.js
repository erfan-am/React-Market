import {createSelector} from 'reselect'

const modalselect=state=>state.modal;


export const ModalSelectitem=createSelector(
    [modalselect],
    modal=>modal.modalTarget
)