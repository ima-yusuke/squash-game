import { Outlet, Link } from "react-router-dom";

function NavMenu(){

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/squash">SQUASH</Link>
                    </li>
                </ul>
            </nav> 

            <Outlet/>
        </>
    )
};
export default NavMenu;