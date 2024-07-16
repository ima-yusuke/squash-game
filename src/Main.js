import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Squash from "./pages/Squash";
function Main(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nav/>}>
                    <Route index element={<Home/>}/>
                    <Route path='squash' element={<Squash/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Main;