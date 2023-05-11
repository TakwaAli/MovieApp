
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MoviedivComponent from "./moviedivComponent";
import { Movies } from "../store/action"
import { LangContext } from "../Context/LangContext";
function HomeComponent() {

    //const [MovieData, setMovieData ] = useState([])
    const theme = useSelector((state) => state.theme)
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movies)
    let [pagenumber, setnumber] = useState(1)
    /* const { contextlang, setcontextlang } = useContext(LangContext) */
    useEffect(() => {

        dispatch(Movies(pagenumber))

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

    return (
        <>

            <div className="container-fluid p-4">
                <div className="row d-flex justify-content-center ">
                    {movies.map((singlemovie) => {
                        return (
                            <>
                                <div key={singlemovie.id} className="col-lg-3 col-md-6 col-sm-9 border border-warning m-3 ">
                                    <MoviedivComponent moviedata={singlemovie} />
                                </div>

                            </>

                        )
                    })}

                </div>
                <div className="row d-flex justify-content-center" >
                <div className=" col-lg-3 col-md-6 col-sm-9">
                    <nav className="mx-5"  aria-label="Page navigation example">
                        <ul class="pagination ">
                            <li class="page-item ">
                                <a class="page-link btn border border-warning bg-black text-warning" onClick={() => setnumber(--pagenumber)} aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item "><a class="page-link btn border border-warning bg-black text-warning" onClick={() => setnumber(1)}>1</a></li>
                            <li class="page-item"><a class="page-link btn border border-warning bg-black text-warning" onClick={() => setnumber(2)}>2</a></li>
                            <li class="page-item"><a class="page-link btn border border-warning bg-black text-warning" onClick={() => setnumber(3)}>3</a></li>
                            <li class="page-item">
                                <a class="page-link page-link btn border border-warning bg-black text-warning" onClick={() => setnumber(++pagenumber)} aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                 {/*    <button className="btn border border-warning text-warning w-50" onClick={() => setcontextlang(contextlang == "English" ? "Arabic" : "English")}>change language</button> */}
                    </div>
                </div>
                

              

            </div>
        </>

    )
}

export default HomeComponent


