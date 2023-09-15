import React from "react"
import { Link, Outlet } from "react-router-dom"

 const Navbar = ()=>{
    return <>
    {/* <Link to="/">Home</Link>
    <Link to="/videotrim">Video Trim</Link>
    <Link to="/compress">compress</Link> */}
    <Outlet/>
    </>
}
export default Navbar