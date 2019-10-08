import React from "react"
import { NavLink } from "react-router-dom"
import style from "./index.module.scss"
class FilmHead extends React.Component{
    render(){
        return (
            <ul className={style.filmTabbar}>
                <li><NavLink to="/film/nowplay" activeClassName={style.same}>正在热映</NavLink></li>
                <li><NavLink to="/film/comingsoon" activeClassName={style.same}>即将上映</NavLink></li>
            </ul>
        )
    }
}
export default FilmHead;