const initialvalue={
   
    movies:[],
   

}
export default function MoviesReduer(state=initialvalue, action){

    switch(action.type){
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
