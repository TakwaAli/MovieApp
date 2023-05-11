import { Link } from 'react-router-dom'
import './style.css'
function MoviedivComponent(props){
    return(<>
    
                        <img className="w-100" src={`https://image.tmdb.org/t/p/w500${props.moviedata.poster_path}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`}></img>
                        <Link className='h4 dark-link ' to={`/view/${props.moviedata.id}`}>{props.moviedata.title}</Link>
                        <h5>{props.moviedata.release_date}</h5>
       
    </>)
}
export default MoviedivComponent