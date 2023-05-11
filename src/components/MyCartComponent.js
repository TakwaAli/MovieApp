
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { addToFavorite } from '../store/action';
import { useState } from 'react';
import './style.css'
function MyCard(props){
console.log(props);
    const dispatch=useDispatch();
    const fav =useSelector((state)=>state.favorite)
    const [isDisabled, setIsDisabled] = useState(false);
    const handleClick = () => {
       
        setIsDisabled(true);
      };
    const addmovie=(movie)=>{
        dispatch(addToFavorite(fav.push(movie)))
       /*  console.log(movie); */
       handleClick()
    }
    const styles = {
        container: {
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        button: {
          padding: '10px 30px',
          cursor: 'pointer',
        },
        buttonDisabled: {
          padding: '10px 30px',
          cursor: 'not-allowed',
        },
      };
    return(
      <>
      
      <div className="container">
          <div className="row justify-content-center mt-5 p-5 ">
              <div className="col-lg-4 col-md-9 col-sm-10 ">
              <img src={`https://image.tmdb.org/t/p/w500${props.img}`} className="w-100 border border-warning " />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-9 m-5">
              <h5 className="text-warning">{props.title}</h5>
              <p className='des-color'>{props.overview}</p>
              <button className="btn btn-warning" disabled={isDisabled} onClick={()=>addmovie(props)} style={isDisabled ? styles.buttonDisabled : styles.button }>Add To Favorite</button>
              </div>
              
          </div>

         
      </div>
      

      
      </>
      
    )
}

export default MyCard;