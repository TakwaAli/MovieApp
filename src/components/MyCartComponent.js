
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { addToFavorite } from '../store/action';
function MyCard(props){
console.log(props);
    const dispatch=useDispatch();
    const fav =useSelector((state)=>state.favorite)
    const addmovie=(movie)=>{
        dispatch(addToFavorite(fav.push(movie)))
       /*  console.log(movie); */
    }
    return(
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-4 ">
                <img src={`https://image.tmdb.org/t/p/w500${props.img}`} className="w-100 border border-warning " />
                </div>
                <div className="col-3 m-5">
                <h5 className="text-warning">{props.title}</h5>
                <p className="text-light">{props.overview}</p>
                <button className="btn btn-warning" onClick={()=>addmovie(props)}>Add To Favorite</button>
                </div>
            </div>
        </div>
      
    )
}

export default MyCard;