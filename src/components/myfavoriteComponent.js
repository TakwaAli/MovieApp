
import { useSelector,useDispatch } from 'react-redux';
import { RemoveFavorite } from '../store/action';
function MyFavorite(props){
    const dispatch=useDispatch();
    const fav =useSelector((state)=>state.favorite)
    
    const deletemovie=(movie)=>{
        dispatch(RemoveFavorite(fav.splice(movie,1)))
    }
    return(
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-2 ">
                <img src={`https://image.tmdb.org/t/p/w500${props.img}`} className="w-100 border border-warning " />
                </div>
                <div className="col-5">
                <h5 className="text-warning">{props.title}</h5>
                <p className="text-light">{props.overview}</p>
                <button className="btn btn-danger"onClick={()=>deletemovie(props)}>delete</button>
                   </div>
                
            </div>
        </div>
      
    )
}

export default MyFavorite;