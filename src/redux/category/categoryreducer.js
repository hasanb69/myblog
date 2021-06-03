import CATEGORYTYPE from './categorytype'
import DATA from '../../data/data'
const INITIAL_STATE={
    data:DATA
}

const CatReducer=(state=INITIAL_STATE,action)=>{
  switch(action.type){
      case CATEGORYTYPE.GET_DATA:
          return{
              ...state,
              data:action.payload
          }
     default:{
         return state
     }     
  }

}

export default CatReducer