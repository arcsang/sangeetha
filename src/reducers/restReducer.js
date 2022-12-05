import {R_FAIL,R_SUCCESS,} from '../constants/restConstants';

export const restaurantListReducer = (state={restaurants:[]},actions)=>{

    console.log(actions.payload)
     switch(actions.type){
        case R_SUCCESS:
            return{restaurants:actions.payload}

        case R_FAIL:
            return{restaurants:actions.error}

            default:
                return state

     }
}