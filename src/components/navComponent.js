import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { changeTheme } from "../store/action";
import { useContext } from "react";
import { LangContext } from "../Context/LangContext";
function Navbar(){

    const data = useSelector((state)=>state.favorite) 

    
    const theme = useSelector((state) => state.theme)
    const dispatch = useDispatch()
    const handleTheme = () => {
        dispatch(changeTheme(theme == "dark" ? "light" : "dark"))
    } 
    console.log("data");
    /* const {contextlang,setcontextlang}=useContext(LangContext) */
    return(
        <nav className="navbar navbar-expand-lg bg-dark text-light  w-100 ">
        <div className="container-fluid">
            <Link className="navbar-brand text-light" to="#">Movie</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to={"/"}> Home </Link> 
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/login">login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/signup">signup</Link>
                </li>
                
               

                {/* <li className="nav-item">
                    <Link className="nav-link text-light" to="">{contextlang}</Link>
                </li> */}
            </ul>

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li  className="nav-item d-flex justify-content-center align-items-center position-relative">
         <Link to='/addtofav'className='text-decoration-non ' ><i className="fa-solid fa-heart fs-2 text-danger"></i></Link> 
         <div className='position-absolute top-50 start-50  translate-middle fs-6 '>
         {data.length}
         </div>
          
           
           
          </li>
          
          <li className="nav-item mx-2">
                    <Link className="nav-link text-light" onClick={() => handleTheme()}>  {theme == "dark" ? <i className="fa-regular fa-moon fs-3"></i>: <i className="fa-regular fa-sun fs-3 text-warning"></i>} </Link>
                </li>
        </ul>
            </div>
            
  </div>
</nav>
    )
}

export default Navbar;