
import { useSelector,useDispatch } from 'react-redux';
import { RemoveFavorite } from '../store/action';
import './style.css'
function MyFavorite(props){
    const dispatch=useDispatch();
    const fav =useSelector((state)=>state.favorite)
    
    const deletemovie=(movie)=>{
        dispatch(RemoveFavorite(fav.splice(movie,1)))
    }
    return(
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-2 col-md-4 col-sm-8 ">
                <img src={`https://image.tmdb.org/t/p/w500${props.img}`} className="w-100 border border-warning " />
                </div>
                <div className="col-lg-5 col-md-8 col-sm-10">
                <h5 className="text-warning col-11">{props.title}</h5>
                <p className="des-color col-11">{props.overview}</p>
                <button className="btn btn-danger"onClick={()=>deletemovie(props)}>delete</button>
                   </div>
                
            </div>
        </div>
      
    )
}

export default MyFavorite;