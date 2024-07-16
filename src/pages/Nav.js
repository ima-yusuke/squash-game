import { Outlet, Link } from "react-router-dom";
import swal from 'sweetalert';
import fileSrv from "../service/fileSrv"
import { useNavigate } from "react-router-dom";


function NavMenu({logUser,setSearchArray}){
    const navigate = useNavigate()

    const logAlert =()=>{
        if(logUser ==null){
            swal({
                title: 'Sorry',
                text: 'Plaese Login',
                icon: 'info',
            })
        }
    }

    const searchPro=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        fileSrv.sendFile7(formData)
        .then(response=>{
            console.log(response)
            let stProData = JSON.stringify(response.data)            
            let JsonData = JSON.parse(stProData)  
            document.getElementsByTagName("input")[0].value=""
            setSearchArray(JsonData)
            navigate("/search")
        })
        .catch(err=>{
            console.log(err);
        })    
    }
    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >Test Restaulant</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home<span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/product" className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link to="/product" className="dropdown-item" >All Menu</Link>
                                <Link to="/breakfast" className="dropdown-item" >Breakfast Menu</Link>
                                <Link to="/lunch" className="dropdown-item" >Lunch Menu</Link>
                                <Link to="/dinner" className="dropdown-item" >Dinner Menu</Link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <Link to="/shoppingcart" onClick={logAlert} class="nav-link">ShoppingCart
                            </Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link to="/test"  class="nav-link">Test
                            </Link>
                        </li> */}
                        <li class="nav-item" style={{display:logUser ==null ? 'block' : 'none' }}>
                            <Link to="/login" class="nav-link">Login
                            </Link>
                        </li>
                        <li class="nav-item" style={{display:logUser ==null ? 'none' : 'block' }}>
                            <Link to="/myaccount" class="nav-link">My account
                            </Link>
                        </li>
                        <li class="nav-item" style={{display:logUser ==null ? 'none' : 'block' }}>
                            <Link to="/logout" class="nav-link">Logout
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0" onSubmit={searchPro} >
                        <input className="form-control me-sm-2" type="text" placeholder="Search product name" name="keyword"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav> 

            <Outlet/>
        </>
    )
};
export default NavMenu;