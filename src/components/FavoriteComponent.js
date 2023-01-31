
import { useSelector } from "react-redux";
import MyFavorite from "./myfavoriteComponent";
function FavoriteComponent() {
    
  const data = useSelector((state)=>state.favorite)  
 //console.log(data);
    return(
        <>
           {data.map((singlemovie) =>   {
            console.log(data.length)
                return(
                    <MyFavorite key={singlemovie.title} img={singlemovie.img} 
                    title={singlemovie.title} 
                    overview={singlemovie.overview}  /> 
                    
                )
                
            })}
        </>
       
         
     
       
    )
}

export default FavoriteComponent