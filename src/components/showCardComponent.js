import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCard from "./MyCartComponent";
function ShowCardComponent (){
    const param = useParams()
  
    const[myMovie, setmyMovie] = useState({})
    console.log(param);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`)
        .then((movie) => setmyMovie(movie.data) )
        .catch((err) => console.log(err))
    }, [])

    return(
        <>
            
              <MyCard  img={myMovie.poster_path} 
               title={myMovie.title} 
               overview={myMovie.overview}  /> 
         </>
       
    )
}
export default ShowCardComponent