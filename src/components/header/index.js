import React from "react"
import style from "./index.module.css"
class Header extends React.Component{
    
    render(){
        var wantonly="猫眼电影"
        return (
            <h1 className={style.header}>
             {
                 wantonly
             }
            </h1>
        )
    }
} 
export default Header;