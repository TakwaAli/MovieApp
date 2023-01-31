
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MoviedivComponent from "./moviedivComponent";
import {Movies} from "../store/action"
import { LangContext } from "../Context/LangContext";
function HomeComponent() {
  
    //const [MovieData, setMovieData ] = useState([])
    const dispatch =useDispatch()
    const movies =useSelector((state)=>state.movies)
    let [pagenumber,setnumber]=useState(1)
    const {contextlang,setcontextlang}=useContext(LangContext)
    useEffect(() => {

        dispatch( Movies(pagenumber))
      
       /*  axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k", 
            {
                params: {
                    _page: 3,
                    _limit: 5
                }
            }
        )
        .then((data) => setMovieData(data.data.results))
        .catch((err) => console.log(err))*/
    }, [pagenumber]) 

    return(
        <>
          
          <div className="container-fluid ">
            <div className="row d-flex justify-content-center">
                {movies.map((singlemovie) =>   {
                    return(
                        <>
                         <div key={singlemovie.id} className="col-3 border border-warning m-3 ">
                        <MoviedivComponent moviedata={singlemovie}/>
                            </div>
                          
                        </>
                        
                    )})}

               </div>
               <div>
               <button className="btn border border-warning mx-5" onClick = { ()=>setnumber(++pagenumber)}>next</button>
               <button className="btn border border-warning " onClick = { ()=>setnumber(--pagenumber)}>previous</button>
               <button className="btn border border-warning mx-5" onClick = { ()=>setcontextlang(contextlang =="English"?"Arabic":"English")}>change language</button>
               
               </div>
                      
         </div>
        </>
       
    )
}

export default HomeComponent


