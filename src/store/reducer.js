
const initialvalue={
   
    favorite:[],
    theme:"dark",
    movies:[],

}
export default function Reduer(state=initialvalue, action){

    switch(action.type){
        case "ADD": 
            return{
                ...state,
                favorite:[...state.favorite]
            }
             
        
    

        case "REMOVE": 
          /*   const item_index = action.index;
            const new_state = [...state];
            new_state.splice(item_index, 1);
            return new_state; */
            return{
                ...state,
                favorite:[...state.favorite]
            }
        
            case "CHANGETHEME":
                return{
                    ...state,
                    theme: action.payload 
                }
                case "MOVIES": 
                return{
                   ...state,
                   movies:action.payload
                }
        default: 
            if(state === undefined)
                return [];
            
            return state;
        
    }
}
