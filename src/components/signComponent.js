
import { useEffect, useState } from "react"
import './style.css'
function SignComponent() {


    const [userData, setUserData] = useState({
       username:"",
        email: "",
        password:"",
        confirmpass:""
    })
    const [error, setErros] = useState({
  
    })
const [issubmit,setissubmit]=useState(false);
    const handleChange=(e) =>{
        console.log(e.target)
        if(e.target.name == "username"){
            setUserData({
                ...userData,
                username: e.target.value
            })

        }else if(e.target.name == "email")  {
            setUserData({
                ...userData,
                email: e.target.value
            })
        } 
        else if(e.target.name == "password")  {
            setUserData({
                ...userData,
                password: e.target.value
            })
        }   else  {
            setUserData({
                ...userData,
                confirmpass: e.target.value
            })
        } 
            
       
    };
    const submitData = (e) => {
        e.preventDefault()
        setErros(validate(userData))
        setissubmit(true);

    };
    useEffect(()=>{
        console.log(error)
        if(Object.keys(error).length === 0 && issubmit){
            console.log(userData)
        }
    },[error])
    const validate=(values) =>{
        const errors={}
       
        const emailregex=/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/i;
        const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i
        if(!values.username){
            errors.username="username is required"
        }
        if(!values.email){
            errors.email="email is required"
        }else if (!emailregex.test(values.email)) {
            errors.email="email is invalid !"
        } else {
            console.log("error in email")
        }
        if(!values.password){
            errors.password="passwored is required"
        } else if (!passwordRegex.test(values.password)) {
            errors.password="passwored must be more than 8 ch&number"
        } else {
            console.log("error in password")
        }
        console.log(values.confirmpass === values.password)
        if(values.confirmpass != values.password){
            errors.confirmpass="notconfirm password"
        } 
        else {
            console.log("confirm password")
        }   
     
        return errors;
    };
    return (<>

        <form  onSubmit={(e) => submitData(e)}>
            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong border border-warning">
                            <div className=" p-5 text-center">

                                <h3 className="mb-5 color">Sign up</h3>
         

                                <div className="form-outline mb-4 input-group">
                                    
                                <input className=" form-control border border-warning" type="text"  id="username"
                                        aria-describedby="EmailHelp" name="username"
                                        placeholder="Enter your name"
                                        value={userData.username}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <p className="text-danger">{error.username}</p>

                                    <input className=" form-control border border-warning" type="Email"  id="email"
                                        aria-describedby="EmailHelp" name="email"
                                        placeholder="Enter your email"
                                        value={userData.email}
                                        onChange={(e) => handleChange(e)}
                                    />
                             
                                <p className="text-danger">{error.email}</p>
                                <div>
                                    <input type="password" className="form-control border border-warning" id="password"
                                        aria-describedby="passwordHelp" placeholder="Enter Your Password"
                                        name="password"
                                        value={userData.password}
                                        onChange={(e) => handleChange(e)}
                                    ></input>
                                </div>
                                <p className="text-danger">{error.password}</p>
                               <div>
                                <input type="password" className="form-control border border-warning" id="confirmpass"
                                        aria-describedby="passwordHelp" placeholder="Enter Your confirmpass"
                                        name="confirmpass"
                                        value={userData.confirmpass}
                                        onChange={(e) => handleChange(e)}
                                    ></input>
                                </div>
                                <p className="text-danger">{error.confirmpass}</p>
                                <div>
                                    <button type="submit" id="sign" className="btn btn-warning m-5"
                                     disabled = {error.username || error.email||error.password||error.confirmpass }>Submit</button>
                                </div>
                                <p ><span>Don't have account?
                                    <a  id="form/sign">Sign up</a>
                                </span></p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  
        </form>

    </>


    )
}

export default SignComponent


