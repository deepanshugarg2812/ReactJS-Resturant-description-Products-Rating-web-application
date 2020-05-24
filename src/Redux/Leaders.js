import * as ActionTypes from './ActionTypes'

export const Leaders = (state = {leaders : []},action) => {
    switch(action.type){
        case ActionTypes.ADD_LEADERS:
            return {...state,leaders : action.payload}
        default : return state
    }
}