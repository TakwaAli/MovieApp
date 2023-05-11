
import axios from "axios"
export const addToFavorite = (payload)=>{
    return {
        type: "ADD",
        payload
        
    }
}
export const RemoveFavorite=(payload)=>{
    return {
        type: "REMOVE",
        payload
    }
}
export const addforone=(payload)=>{
    return {
        type: "ADDONE",
        payload
    }
}
export const changeTheme = (payload) => {
    return {
        type: "CHANGETHEME",
        payload
    }
}


export const Movies = (n)=>(dispatch)=>{
    return   axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&page=${n}`, 
    {
        params: {
            _page: 3,
            _limit: 5
        }
    }
).then((res)=>dispatch({
    type:"MOVIES",
    payload :res.data.results
}))
}